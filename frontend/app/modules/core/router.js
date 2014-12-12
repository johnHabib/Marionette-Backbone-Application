define(function(require) {
    'use strict';
    var Marionette = require('marionette');
    return Marionette.AppRouter.extend({
        initialize: function(options) {
            this.controller = options.controller;
            console.log('initialize');
        },
        routes: {
            '*any': 'default'
        },
        appRoutes: {
            'test': 'onTest',
            'core': 'onCore',
            'nav' : 'onNav',
            'home': 'onHome'
        },
        onRoute: function() {
            console.log('on route:', this.controller);
            this.controller.onRoute.apply(this.controller, arguments);
        }
    });
});
