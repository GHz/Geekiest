define([
  'jquery',
  'backbone',
  'mustache',
  'packages/CustomView',
  'views/challenge/mechanism/youtube',
  'text!templates/challenge/answer.html',
  'libs/jquery.autotab',
  ],
function($,
  Backbone,
  Mustache,
  CustomView,
  YoutubePlayerView,
  AnswerTemplate
  ){
  return CustomView.extend({
    el: '.app',
        
        backBtn: true,
        settingsBtn: true,

        initialize : function(opts)
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
          this.model = database.currentThing;

          this.render();
        },

        events : {
            'click .sendchall' : 'sendChallenge'
        },

        render: function()
        {
          this.model.picker = false;
          this.mediaPlayer = new YoutubePlayerView({ model : this.model });



          var html = Mustache.to_html(AnswerTemplate, {
                'userAvatar' : localStorage.getItem('userAvatar')
            });

          $('#main-content').html(html);

          $("#videoPlayer").append( this.mediaPlayer.render().el);

          //this.mediaPlayer.initPicker();
        },

        sendChallenge : function(e)
        {
            e.preventDefault();

            var self = this;
            $.ajax({
                  type: "POST",
                  url: 'http://serene-forest-6114.herokuapp.com/users/game',
                  data: {
                    message: $('.answer').val(),
                    game_id: database.currentGame
                  },
                  success: function(response){

                    var oA = database.transitionData.opAvatar, oP = database.transitionData.opPseudo;

                    if(response == 0)
                    {
                        database.transitionData = {
                            roundNumber : self.model.counter,
                            special : 'red' ,
                            message : "You Loose  !",
                            meAvatar : localStorage.getItem('userAvatar') + "?width=" + 200 + "&height=" + 200,
                            opPseudo : oP,
                            opAvatar : oA,
                            action : "home"
                        }
                    }
                    else
                    {
                        database.transitionData = {
                            roundNumber : self.model.counter,
                            special : 'green' ,
                            message : "You Win  !",
                            meAvatar : localStorage.getItem('userAvatar') + "?width=" + 200 + "&height=" + 200,
                            opPseudo : oP,
                            opAvatar : oA,
                            action : "home"
                        }
                    }

                    self.router.navigate("transition", {trigger: true, replace: true});
                   
                  }
            });
        }
  });
});