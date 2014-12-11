define(function(require){
	'use strict';
	var Marionette = require('marionette');
	return Marionette.AppRouter.extend({
		appRoutes: {
		   ':moduleName(/*moduleSubroute)':'onRoute',
		 	':home':'onHomeRoute',
			'newRoute':'onNewRoute'
	//		'':'onRoute'
	//	},
	//	onRoute: function(){
    //		console.log('Hello');
		}

	});

});