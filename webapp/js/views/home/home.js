define([
		'backbone',
    'mustache',
    'text!templates/home/home.html',
		'packages/CustomView',

		],
function(
		Backbone,
    Mustache,
    HomeTemplate,
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

      this.render();

	 },

   events: {
    'click .findFriend' : 'fiendFriencClick' 
   },

   render: function()
   {
      var html = Mustache.to_html(HomeTemplate, {
        userPseudo: localStorage.getItem('userPseudo')
      });

      $('#main-content').html(html);
   },

   fiendFriencClick : function(e)
   {
      e.preventDefault();
      this.router.navigate("invit", {trigger: true, replace: true});
   }

	});
});