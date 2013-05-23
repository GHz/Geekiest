define([
		'backbone',
		"mustache",
		'packages/CustomView',
		'text!templates/home/howto.html',

		],
function(
		Backbone,
		Mustache,
		CustumView,
		HowToTemplate
){
	return  CustumView.extend({
		el: '#main-content',

        initialize: function(opts)
        {
        	this.router = opts.router;
        	this.$el.html('serfg');
        },

        events: {
        },
	});
});