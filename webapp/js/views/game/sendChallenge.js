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

    		this.render();
        },

        render: function()
        {
        	this.mediaPlayer = new YoutubePlayerView({
        		model: {
					"picker": true,
					"height": "230px",
					"video-id": "V6nbFZtxAL4",
                    'duration': '340'
        		}
        	});

        	var html = Mustache.to_html(SendChallengeTemplate, {
                'userAvatar' : localStorage.getItem('userAvatar')
            });

        	$('#main-content').html(html);

        	$("#videoPlayer").append( this.mediaPlayer.render().el);
        	this.mediaPlayer.initPicker();
        }
	});
});