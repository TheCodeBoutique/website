import CoreObject from './core_object.js';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================


let Console = CoreObject.create({

    warnColor: '#FFA500',

    errorColor: '#ff0000',

    messageColor: '#0099FF',

    log: function (msg, color) {
        console.log("%c" + msg, "color:" + color + ";");
    },

    error: function(msg) {
        throw Error.call(this, msg);
    }

});

export default Console;