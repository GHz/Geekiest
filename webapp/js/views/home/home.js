define([
		'backbone',
    'mustache',
    'text!templates/home/home.html',
    'views/home/gameItem',
    'collections/games',
		'packages/CustomView',

		],
function(
		Backbone,
    Mustache,
    HomeTemplate,
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
    'click .findFriend' : 'fiendFriencClick' 
   },

  fetchData: function()
  {
      $("#refreshBtn").addClass('rotate');
      var self = this;
      this.games.fetch({
          error: function () {
              alert("error!!"); 
          },
          success: function (e) {
            console.log(e)
              $("#refreshBtn").removeClass('rotate');
              self.renderGames();
          }    
      });
  },

   render: function()
   {
      var html = Mustache.to_html(HomeTemplate, {
        userPseudo: localStorage.getItem('userPseudo')
      });

      $('#main-content').html(html);
   },

   renderGames: function()
   {
      var self = this, gameItem;
      self.games.each(function(game, index, friends)
      {             
              gameItem = new GameItemView({
                    model: game,
                    collection: self.games
              });

              $("#gamesList").append(gameItem.render().el);
      });
   },

   fiendFriencClick : function(e)
   {
      e.preventDefault();
      this.router.navigate("invit", {trigger: true, replace: true});
   }

	});
});