import isNone from './is_none.js';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

class Binding {

    static toString() {
        return `Alto.CoreObject`
    }

    static extend(...args) {
        const instance = new Binding();
        instance.create = this.create;
        instance.extend = this.extend;
        return Object.assign(instance, this, ...args);
    }

};

Binding = Binding.extend({

    bindingTree: {},

    createTwoWayBinding: function (from, property, connection) {
        let bindingTree = this.bindingTree,
            connectionId = connection.toObject.guid,
            connectionProperty = connection.toProperty;

        if (!bindingTree[connectionId]) {
            bindingTree[connectionId] = {}
        }

        if (!bindingTree[connectionId][connectionProperty]) {
            bindingTree[connectionId][connectionProperty] = {
                connections: [],
                connectionsLookup: {}
            }
        }

        if (isNone(bindingTree[connectionId][connectionProperty].connectionsLookup[from.guid])) {
            bindingTree[connectionId][connectionProperty].connectionsLookup[from.guid] = true;
            bindingTree[connectionId][connectionProperty].connections.push(this.connect(from, property));
        }

        //todo relace with isPresent
        if (from[`${property}Binding`].toProperty) {
            let boundObject = from[`${property}Binding`].toObject,
                boundProperty = from[`${property}Binding`].toProperty;

            let defaultValue = boundObject.get(boundProperty);

            //todo relace with isEqual
            if (from.value === defaultValue) {
                return;
            }

            if (from[`${property}WillChange`]) {
                from[`${property}WillChange`]()
            }

            from.set(property, defaultValue);

            if (from[`${property}DidChange`]) {
                from[`${property}DidChange`]()
            }
        }

    },

    connect: function (toObject, toProperty, isOneWay = false) {
        return {toObject, toProperty, isOneWay}
    },

    replaceStringPathWithObject: function (instance, connection, key) {
        let to = instance;

        connection.toObject.split('.').forEach(function (key) {
            to = to[key];
        });

        instance[`${key}Binding`] = null;
        instance[`${key}Binding`] = this.connect(to, connection.toProperty, connection.isOneWay);
    }

});

export default Binding;
