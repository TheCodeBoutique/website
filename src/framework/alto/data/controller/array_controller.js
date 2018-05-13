import CoreObject from "../../foundation/core_object";

let ArrayController = CoreObject.extend({

    data: [],

    listeners: {},

    addChangeListener: function (listenerId, listener) {
        this.listeners[listenerId] = listener;
    },

    removeChangeListener: function (listenerId) {
        this.listeners[listenerId] = null;
        delete this.listeners[listenerId];
    },

    set: function (key, value) {
        this.data = Object.assign([], value);

        Object.keys(this.listeners).forEach((listener) => {
            this.listeners[listener](this.data, this.guid);
        });

    },

    get: function (key) {
        return this.data;
    }

});

export default ArrayController;