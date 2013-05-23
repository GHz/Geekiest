define([
		'backbone',
		'packages/CustomView'

		],
function(
		Backbone,
		CustomView
){
	return  CustomView.extend({
		el: 'body',

        initialize: function(opts)
        {
        	this.constructor.__super__.initialize.apply(this, opts);
        	this.router = opts.router;
  		}
	});
});