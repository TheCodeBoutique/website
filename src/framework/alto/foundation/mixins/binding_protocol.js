import Binding from '../binding.js';
import CoreObject from "../core_object";

// ============================================================================================
// Project: PinnacleRacing.io - Modern software solutions for Competitive Remote Control Racing
// Copyright: @2017 Pinnacle Racing, LLC
// License: Property of Pinnacle Racing and Chad Eubanks
// Author: Chad Eubanks
// ============================================================================================

const BindingProtocol = CoreObject.create({

    hasBindings: true,

    initWithBindings: function (instance) {
        let keys = Object.keys(instance), self = this;

        keys.forEach(function (key) {
            let connection = self[`${key}Binding`];

            if (connection) {
                if (typeof connection.toObject === "string") {
                    Binding.replaceStringPathWithObject(self, connection,  key);
                }

                let {isOneWay} = connection;

                if (!isOneWay) {
                    Binding.createTwoWayBinding(self, key, connection);
                }
            }
        });

        instance.init(instance);
    }

});

export default BindingProtocol;