define(function(require){
	'use strict';
	var Marionette = require('marionette');
	return Marionette.Controller.extend({
		'initialize': function(){
			this.app = this.options.app;
		},
		onRoute: function(route, path, fragments){
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
		'onTest': function(route){
			console.log('controller: '+route);
		}
	});
});