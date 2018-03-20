'use strict';

var Registry = require('../lib/Registry');

var Headerifiers = Registry.extend('Headerifiers', {

    initialize: function() {
        // preregister the standard headerifiers
        this.add('titleize', require('./titleize'));
    },

    get: function(name) {
        return Registry.prototype.get.call(this, name) || passthru;
    }

});

function passthru(string) {
    return string + '';
}

module.exports = new Headerifiers;
