define(function(require){
	'use strict';
	var Controller = require('./controller');
	var Router = require('./router');
	return function(app){
		app.module('core', function(){
			this.controller = new Controller({ app : app, logger : this.logger });
			console.log('I am Controller');
            /**
             * This modules router
             * @type {Router}
             */
            this.router = new Router({ controller : this.controller });
            console.log('I am Router');
            this.router.on('route', this.controller.onRoute);
            console.log('I am a listener');
		});
	};
});