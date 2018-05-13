import generateGuid from './guid.js';
import Binding from './binding.js';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

class CoreObject {

    static toString() {
        return `Alto.CoreObject`
    }

    static create(...args) {
        const instance = Object.assign(new CoreObject(), this, ...args);
        delete instance.create;
        delete instance.extend;
        instance.guid = generateGuid();

        if (instance.hasBindings) {
            instance.initWithBindings(instance);
        } else {
            instance.init();
        }

        return instance;
    }

    static extend(...args) {
        const instance = new CoreObject();
        instance.create = this.create;
        instance.extend = this.extend;
        return Object.assign(instance, this, ...args);
    }

    init() {}

};

CoreObject = CoreObject.extend({

    set: function (key, value) {
        //todo replace w/ isEqual
        if (this.get(key) === value) {
            return this
        }

        // update self //
        if (this[`${key}WillChange`]) {
            this[`${key}WillChange`]()
        }

        this[key] = value;

        if (this[`${key}DidChange`]) {
            this[`${key}DidChange`]()
        }

        let connection = this[`${key}Binding`];

        // update our connected object //
        if (connection) {
            let {toObject, toProperty/*, isOneWay*/} = connection;

            //todo replace w/ isEqual
            if (toObject.get(toProperty) !== value) {

                if (toObject[`${toProperty}WillChange`]) {
                    toObject[`${toProperty}WillChange`]()
                }

                toObject.set(toProperty, value);

                if (toObject[`${toProperty}DidChange`]) {
                    toObject[`${toProperty}DidChange`]()
                }
            }

        }

        // update all connections to that are bound to our connected object //
        let {bindingTree} =  Binding,
            guid = this.guid;

        if (bindingTree[guid] && bindingTree[guid][key]) {
            let connections = bindingTree[guid][key].connections;

            connections.forEach(function (connection) {
                let {toObject, toProperty/*, isOneWay*/} = connection;
                //todo replace w/ isEqual
                if (toObject.get(toProperty) !== value) {

                    if (toObject[`${toProperty}WillChange`]) {
                        toObject[`${toProperty}WillChange`]()
                    }

                    toObject.set(toProperty, value);

                    if (toObject[`${toProperty}DidChange`]) {
                        toObject[`${toProperty}DidChange`]()
                    }
                }
            });

        }

        return this;
    },

    get: function(key) {
        return this[key];
    }

});

export default CoreObject;