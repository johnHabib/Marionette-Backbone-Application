define(function(){
	'use strict';
	// var Controller = require('./controller');
	// var Router = require('./router');
	return function(app){
		app.module('nav', function(){
			// var controller = this.controller = new Controller({app: app});
			// var router = this.router = new Router({controller: this.controller});

			app.commands.setHandler('add:navigation', function(){

			});
		});
	};
});