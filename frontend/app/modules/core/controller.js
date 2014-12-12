define(function(require){
	'use strict';
	var selRoute;
	var Marionette = require('marionette');
	return Marionette.Controller.extend({
		'initialize': function(){
			this.app = this.options.app;
		},
		onRoute: function(route, path, fragments){
			console.log('route',route);
			selRoute = route;
			var app = this.app,
				moduleName;
			path = path || (fragments.length ? fragments[0] : null);
			if( path ){
				fragments = path.split('/');
				moduleName = fragments.length ? fragments[0] : null;
			}
			if( moduleName && !app[moduleName] ){
				console.log('Attempting to load module: '+moduleName);
				require(['modules/'+moduleName+'/module'], function(module){
					console.log('loaded: '+moduleName);
					module(app);
				});
			}else{
				console.log(moduleName + ' is invalid or already loaded');
			}
		},
		'onTest': function(){
			console.log('controller: ',Backbone.history.fragment);
		},
		'onCore': function(){
			console.log('controller: ',Backbone.history.fragment);
		},
		'onNav': function(){
			console.log('controller: ',Backbone.history.fragment);
		},
		'onHome': function(){
			console.log('controller: ',Backbone.history.fragment);
		}
	});
});