define(function (require) {
    'use strict';

    var Marionette = require('marionette');

    return Marionette.ItemView.extend({

        template : require('text!./../templates/index.hbs'),

        serializeData : function () {
            return {
                'message' : this.options.message
            };
        }
    });

});