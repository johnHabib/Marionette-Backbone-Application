define(function(require){
	'use strict';
	var Marionette = require('marionette');
	return Marionette.Controller.extend({
		'initialize': function(){
			this.app = this.options.app;
			console.log('I am in Initialize Marionette.Controller');
		},
		'onRoute': function(moduleName) {
		    try {
		        var app = this.app;
		        if (moduleName && !app[moduleName]) {
		            require(['modules/' + moduleName + '/module'], function(module) {
		                console.log('loaded: ' + moduleName);
		                module(app);
		            });
		        }
		       // this.onHomeRoute();
		       // this.nav();
		    } catch (e) {
		        console.log('An error has occurred: ' + e.message);
		    } finally {
		        console.log('I am alerted regardless of the outcome above');
		    }
		},
		'onHomeRoute': function(){

			console.log('I am in Home');
		},
		'onNewRoute': function(){
			console.log('I am in onNewRoute');
		},
	});
});
