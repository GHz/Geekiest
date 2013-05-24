define([
		'backbone',
		'packages/CustomView',

		],
function(
		Backbone,
		CustomView
){
	return  CustomView.extend({

    refreshBtn: true,
    backBtn: false,

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

      $('#main-content').html('sdfvgbffd');
	 },
 
  		events : {
  			'click #settingsBtn': 'sezedfg',
  		},

  		sezedfg: function() {
  			console.log('edfgsdf');
  		}
	});
});