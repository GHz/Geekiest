define([
	'jquery',
	'backbone',
	'mustache',
	'text!templates/challenge/mechanism/youtube.html',
	'libs/jquery.slider.min',

	],
function($,
	Backbone,
	Mustache,
	YoutubeplayerTemplate
	){
	return Backbone.View.extend({
		tagName: 'div',

		isPlaying: false,
		intervalTimer: null,

		startPicker: 0,
		endPicker: 0,
		newCurrentPos: 0,
		isChanging: false,
		isInit: -2,
        player: null,
        
        initialize : function()
        {
            this.startPicker = this.model.start;
            this.newCurrentPos = this.model.start;
            this.endPicker = this.model.end;
        },

        events: {
        	'click .playpausebtn' : 'playPauseBtnClick',
        	'click .overlay' : 'playPauseBtnClick'
        },

        render: function()
        {
        	var html = Mustache.to_html(YoutubeplayerTemplate, _.extend(
                this.model,
                {
                    start: this.startPicker,
                    end: this.endPicker
                })
            );

			this.$el.html(html);
        	return this;
        },

        initPlayer: function()
        {
            var self = this;

            //Load the youtube player
            //See https://developers.google.com/youtube/js_api_reference
            this.player = new YT.Player('player', {
                height: '230px',
                videoId: this.model.youtube_id,
                playerVars: { 
                  'autoplay': 0, 
                  'autohide': 1,
                  'showinfo': 0 ,
                  'showsearch ': 0,
                  'iv_load_policy' : 3,
                  'start': this.model.start
                },

                events: {
                    'onReady': function()
                    {
                        //Load the double time picker
                        $("#videoPicker").slider({
                            from: 0,
                            to: parseInt(self.model.youtube_length),
                            step: 1,
                            dimension: '',
                            limits: false,
                            calculate: function( value ){
                                var minutes = Math.floor( value / 60 );
                                var seconds = ( value - minutes*60 );
                                return (minutes < 10 ? "0"+minutes : minutes) + "     :     " + ( seconds == 0 ? "00" : seconds );
                            },
                            onstatechange: function( value ){
                                self.updatePickersPos(value);
                            }
                        });

                        var pCt = (self.model.start / self.model.youtube_length * 100);
                        $('.currentpos').css('left', pCt+"%");                       
                    }
                }
            });
        },

        playPauseBtnClick: function()
        {
        	if(this.isPlaying)
        	{
        		this.player.pauseVideo();
        		$('.playpausebtn').removeClass('play');
        		this.isPlaying = false;
        		clearInterval(this.intervalTimer);
        	}
        	else
        	{
        		this.player.playVideo();
        		$('.playpausebtn').addClass('play');
        		this.isPlaying = true;
                this.setIntervalTimer();
        	}
        },

        setIntervalTimer: function()
        {
            var self = this;
            this.intervalTimer = setInterval(function(){
                if(!self.isChanging)
                {
                    self.updateCursorPos(self.player.getCurrentTime());
                }
            },100);
        },

        updateCursorPos: function(currentTime)
        {
            var pCt;
            if(currentTime > this.endPicker || currentTime < this.startPicker)
            {
                this.player.seekTo(this.startPicker);
            }

            if(currentTime > this.endPicker)
            {
                pCt = (this.endPicker / this.model.youtube_length * 100);
            }
            else if(currentTime < this.startPicker)
            {
                pCt = (this.startPicker / this.model.youtube_length * 100);
            }
            else
            {
                pCt = (currentTime / this.model.youtube_length * 100);
            }

            $('.currentpos').css('left', pCt+"%");
        },

        updatePickersPos: function(value)
        {
        	var dataSplit = value.split(";");
    		this.startPicker = dataSplit[0];
    		this.endPicker = dataSplit[1];

    		var currentTime = this.player.getCurrentTime();
    		
            if(currentTime == this.newCurrentPos)
            {
                return;
            }

            this.isChanging = true;

            this.newCurrentPos = currentTime;

    		if(currentTime<this.startPicker)
    		{
    			this.newCurrentPos = this.startPicker;
    		}
    		else if(currentTime>this.endPicker)
    		{
    			this.newCurrentPos = this.endPicker;
    		}

            this.currentPos = this.newCurrentPos;

            this.isChanging = false;

		    if(this.isInit < 0)
		    {
                this.isInit++;
                return;
		    }
            else if(!(this.currentPos > this.startPicker) && !(this.currentPos < this.endPicker) )
            {
               this.setIntervalTimer();
            }
        }
	});
});