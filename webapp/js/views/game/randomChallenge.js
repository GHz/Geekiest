define([
        'backbone',
        'mustache',
        'packages/CustomView',
        'collections/things',
        'text!templates/game/randomChallenge.html',
        'views/game/thingItem'

        ],
function(
        Backbone,
        Mustache,
        CustomView,
        Things,
        RandomChallengeTemplate,
        ThingItemView
){
    return  CustomView.extend({

    refreshRightBtn: true,
    settingsBtn: false,

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

        this.things = new Things();
        this.render();

        this.fetchData();

     },

     render: function()
     {
        var html = Mustache.to_html(RandomChallengeTemplate, {});

        $('#main-content').html(html);
     },

     events: {
        'click #refreshBtn': 'fetchData',
        'click #backBtn': 'backBtnClick',
     },

     backBtnClick: function() {
        this.router.navigate("home", {trigger: true, replace: true});
     },

    fetchData: function()
      {
          $("#refreshBtn").addClass('rotate');
          var self = this;
          this.things.reset();
          this.things.fetch({
              error: function () {
              },
              success: function (e) {
                  $("#refreshBtn").removeClass('rotate');
                  self.renderThings();
              }    
          });
      },

    renderThings: function()
    {
      var self = this, thingItem;
      $(".challenges").empty();
      self.things.each(function(thing, index, things)
      {             
              thingItem = new ThingItemView({
                    model: thing,
                    collection: self.things,
                    router: self.router
              });

              $(".challenges").append(thingItem.render().el);
      });
    },
 

    });
});