define(function(require){
	'use strict';
	var Marionette = require('marionette');
	return Marionette.AppRouter.extend({
		initialize: function(options){
			this.controller = options.controller;
		},
		routes:{
			'*any': 'default'
		},
		appRoutes: {
			// 'test': 'onTest'
		},
		onRoute: function(){
			console.log('on route');
			this.controller.onRoute.apply(this.controller, arguments);
		}
	});
});