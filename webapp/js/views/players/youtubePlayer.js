define([
	'jquery',
	'backbone',
	'mustache',
	'text!templates/player/youtube.html',
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
            //eval(" this.model = " + this.model);

            this.startPicker = this.model.start;
            this.newCurrentPos = this.model.start;
            this.endPicker = this.model.end;
        },

        events: {
        	'click .playpausebtn' : 'playPauseBtnClick',
        	'click .overlay' : 'playPauseBtnClick',
        },

        render: function()
        {
            var test = _.extend(
                this.model,
                {
                    start: this.startPicker,
                    end: this.endPicker
                });

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
                    'onReady': function(){
                        $("#videoPicker").slider({
                            from: 0,
                            to: parseInt(self.model.youtube_length),
                            step: 1,
                            dimension: '',
                            limits: false,
                            calculate: function( value ){
                                var hours = Math.floor( value / 60 );
                                var mins = ( value - hours*60 );
                                return (hours < 10 ? "0"+hours : hours) + "     :     " + ( mins == 0 ? "00" : mins );
                            },
                            onstatechange: function( value ){
                                self.updateCursorPos(value);
                            }
                        });

                        var pCt = (self.startPicker / self.model.youtube_length * 100);
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


                var currentTime = self.player.getCurrentTime();

                if(currentTime > self.endPicker || currentTime < self.startPicker)
                {
                    self.player.seekTo(self.startPicker);
                }


                var pCt = (currentTime / self.model.youtube_length * 100);
                $('.currentpos').css('left', pCt+"%");


            },100);
        },

        updateCursorPos: function(value)
        {
        	var dataSplit = value.split(";");
    		this.startPicker = dataSplit[0];
    		this.endPicker = dataSplit[1];

    		var currentPos = this.player.getCurrentTime();
    		
            if(currentPos == this.newCurrentPos)
            {
                return;
            }

            this.newCurrentPos = currentPos;

    		if(currentPos<this.startPicker)
    		{
    			this.newCurrentPos = this.startPicker;
    		}
    		else if(currentPos>this.endPicker)
    		{
    			this.newCurrentPos = this.endPicker;
    		}

            this.currentPos = this.newCurrentPos;
            
            console.log("wtf before- " + value);
		    if(this.isInit < 0)
		    {
		    	//$('.playpausebtn').addClass('play');
		    	//this.isPlaying = true;
                //this.setIntervalTimer();

                this.isInit++;
                return;
		    }
            else
            {
                this.player.seekTo(this.newCurrentPos);
                this.setIntervalTimer();
            }
        },

	});
});