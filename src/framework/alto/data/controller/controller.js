import CoreObject from "../../foundation/core_object";

let Controller = CoreObject.extend({

    data: {},

    listeners: {},

    addChangeListener: function (listenerId, listener) {
        this.listeners[listenerId] = listener;
    },

    removeChangeListener: function (listenerId) {
        this.listeners[listenerId] = null;
        delete this.listeners[listenerId];
    },

    set: function (key, value) {
        switch (key) {
            case 'data':
                this.data = Object.assign({}, value);
                break;
            default:
                this.data = Object.assign({}, this.data, {[key]: value});
                break;
        }

        Object.keys(this.listeners).forEach((listener) => {
            this.listeners[listener](this.data, this.guid);
        });

    },

    get: function (key) {
        if (!key) {
            return this.data;
        }

        switch (key) {
            case 'data':
                return this[key];
            default:
                return this.data[key];
        }
    }

});

export default Controller;