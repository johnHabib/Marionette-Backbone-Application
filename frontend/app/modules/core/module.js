define(function(require){
	'use strict';
	var Controller = require('./controller');
	var Router = require('./router');
	return function(app){
		app.module('core', function(){
			this.controller = new Controller({ app : app, logger : this.logger });

            /**
             * This modules router
             * @type {Router}
             */
            this.router = new Router({ app: app, controller : this.controller });
            // this.router.onRoute = _.bind(this.controller.onRoute, this.controller);
            // this.router.on('route', this.controller.onRoute);
		});
	};
});