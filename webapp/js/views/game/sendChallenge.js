define([
	'jquery',
	'backbone',
	'mustache',
	'packages/CustomView',
	'views/players/youtubePlayer',
	'text!templates/game/sendChallenge.html',
	'libs/jquery.slider.min',

	],
function($,
	Backbone,
	Mustache,
	CustomView,
	YoutubePlayerView,
	SendChallengeTemplate
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

            //eval('this.model = ' + localStorage.getItem("currentThing"));

            this.model = database.currentMedia;

    		this.render();


        },

        events : {
            'click .sendchallAAA' : 'sendChallenge',
            'click #backBtn': 'backBtnClick',
            'click .avatar': 'fakeClick'
        },

        fakeClick: function()
        {
            this.backBtnClick();
        },

        backBtnClick: function() {
            this.router.navigate("randomchallenge", {trigger: true, replace: true});
         },

        render: function()
        {
        	this.mediaPlayer = new YoutubePlayerView({
        		model: _.extend( this.model.toJSON(),
                {
					"picker": true,
					"height": "230px",
        		})
        	});

        	var html = Mustache.to_html(SendChallengeTemplate, {
                'userAvatar' : localStorage.getItem('userAvatar')
            });

        	$('#main-content').html(html);

        	$("#videoPlayer").append( this.mediaPlayer.render().el);
        	this.mediaPlayer.initPlayer();
        },

        sendChallenge : function(e)
        {
            e.preventDefault();

            var self = this;

            $.ajax({
                  type: "POST",
                  url: 'http://serene-forest-6114.herokuapp.com/users/send_challenge',
                  data: {
                    thing_id: self.model['id'],
                    start_video: self.mediaPlayer.startPicker,
                    end_video: self.mediaPlayer.endPicker,
                    message: $('.form').val(),
                    game_id: database.currentGame

                  },
                  success: function(response){
                        self.router.navigate("home", {trigger: true, replace: true});
                  }
            });
        }
	});
});