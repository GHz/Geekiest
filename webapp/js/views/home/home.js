define([
		'backbone',
		'underscore',
		'packages/CustomView',

		],
function(
		Backbone,
		_,
		CustomView
){
	return  CustomView.extend({
		el: 'body',

        initialize: function(opts)
        {
        	this.constructor.__super__.initialize.apply(this, opts);
        	if(this.events)
        	{
        		this.events = _.defaults(this.events, CustomView.prototype.events);
        	}
        	else
        	{
        		this.events = CustomView.prototype.events;
        	}

        	this.router = opts.router;
  		},

  		events : {
  			'click #settingsBtn': 'sezedfg',
  		},

  		sezedfg: function() {
  			console.log('edfgsdf');
  		}
	});
});