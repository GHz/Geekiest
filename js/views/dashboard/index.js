define([
    'backbone',
    'mustache',
    'text!templates/dashboard/index.html',
    'views/dashboard/gameItem',
    'collections/games',
    'packages/CustomView',

		],
function(
    Backbone,
    Mustache,
    DashboardTemplate,
    GameItemView,
    Games,
    CustomView
){
	return  CustomView.extend({

    refreshBtn: true,
    backBtn: false,

		el: '.app',

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

      this.games = new Games();

      this.fetchData();

	 },

   events: {
    'click .findFriend' : 'fiendFriencClick', 
    'click #refreshBtn' : 'fetchData' 
   },

  fetchData: function()
  {
      $("#refreshBtn").addClass('rotate');
      var self = this;
      this.games.fetch({
          error: function () {
          },
          success: function (e) {
              $("#refreshBtn").removeClass('rotate');
              self.renderGames();
          }    
      });
  },

   render: function()
   {
      var html = Mustache.to_html(DashboardTemplate, {
        userName: localStorage.getItem('userName')
      });

      $('#main-content').html(html);
   },

   renderGames: function()
   {
      var self = this, gameItem;
      $("#gamesList").html('');
      self.games.each(function(game, index, friends)
      {             
              gameItem = new GameItemView({
                    model: game,
                    collection: self.games,
                    router: self.router
              });

              $("#gamesList").append(gameItem.render().el);
      });
   },

   fiendFriencClick : function(e)
   {
      e.preventDefault();
      this.router.navigate("players/invit", {trigger: true});
   }

	});
});