define(function (require) {
    'use strict';

    var Controller = require('./controller');
    var Router = require('./router');

    return function (app) {

        app.module('home', function () {

            /**
             * This modules logger
             * @type {SimpleLogger|Logger|*}
             */
            this.logger = app.lumberman.getLogger('home');

            /**
             * This modules controller
             * @type {*|exports}
             */
            var controller = this.controller = new Controller({ app : app, logger : this.logger });

            /**
             * This modules router
             * @type {Router}
             */
            var router = this.router = new Router({ controller : this.controller });

            /**
             * Commands, basically this modules "public api".
             */
            app.commands.setHandler('navigate:home', function () {
                controller.index();
                router.navigate('home');
            });

            controller.index();
        });


    };

});