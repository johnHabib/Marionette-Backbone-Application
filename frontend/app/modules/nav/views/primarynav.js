define(function(require){
	'use strict';
	var Marionette = require('marionette');
	return Marionette.ListView.extend({
		template: require('text!./../templates/primarynav.hbs')
	});
});