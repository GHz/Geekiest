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
	YoutubePlayerTemplate
	){
	return Backbone.View.extend({
		tagName: 'div',

		isPlaying: false,
		intervalTimer: null,

		startPicker: 0,
		endPicker: 0,
		newCurrentPos: 0,
		isChanging: false,
		isInit: false,
        
        initialize : function()
        {
            //eval(" this.model = " + this.model);

            this.startPicker = this.model.start;
            this.endPicker = this.model.end;
        },

        events: {
        	'click .playpausebtn' : 'playPauseBtnClick',
        	'click .overlay' : 'playPauseBtnClick',
        },

        render: function()
        {
            console.log(this.model)
            console.log(_.extend(
                this.model,
                {
                    picker: true,
                    start: 10,
                    end: 20
                }))
        	var html = Mustache.to_html(YoutubePlayerTemplate, _.extend(
                this.model,
                {
                    picker: true,
                    start: this.startPicker,
                    end: this.endPicker
                })
            );

			this.$el.html(html);

        	return this;
        },

        initPicker: function()
        {
        	var self = this;
		 	$("#videoPicker").slider({
				from: 0,
				to: this.model.youtube_length,
				step: 1,
				dimension: '',
				limits: false,
				calculate: function( value ){
					var hours = Math.floor( value / 60 );
					var mins = ( value - hours*60 );
					return (hours < 10 ? "0"+hours : hours) + "     :     " + ( mins == 0 ? "00" : mins );
				},
				onstatechange: function( value ){
					if(!_.isUndefined(player))
					{
						self.updateCursorPos(value);
					}
				}
			});

            var pCt = self.model.start / self.model.youtube_length * 100;
            $('.currentpos').css('left', pCt+"%");
        },

        playPauseBtnClick: function()
        {
        	if(this.isPlaying)
        	{
        		player.pauseVideo();
        		$('.playpausebtn').removeClass('play');
        		this.isPlaying = false;
        		clearInterval(this.intervalTimer);
        	}
        	else
        	{
        		player.playVideo();
        		$('.playpausebtn').addClass('play');
        		this.isPlaying = true;

    			var self = this;
        		this.intervalTimer = setInterval(function(){


    				var currentTime = player.getCurrentTime();

    				if(currentTime > self.endPicker || currentTime < self.startPicker)
    				{
                        console.log ( currentTime + ' - ' + self.endPicker + '-' + self.startPicker)
    					player.seekTo(self.startPicker);
    				}

					if(!this.isChanging)
					{
    					var pCt = currentTime / self.model.youtube_length * 100;
				    	$('.currentpos').css('left', pCt+"%");
					}

				},100);
        	}
        },

        updateCursorPos: function(value)
        {

        	var dataSplit = value.split(";");
    		this.startPicker = dataSplit[0];
    		this.endPicker = dataSplit[1];

    		var currentPos = player.getCurrentTime();

            console.log(currentPos);
    		this.newCurrentPos = currentPos;

    		if(currentPos<this.startPicker)
    		{
    			this.newCurrentPos = this.startPicker;
    		}
    		else if(currentPos>this.endPicker)
    		{
    			this.newCurrentPos = this.endPicker;
    		}

			var pCt = this.newCurrentPos / this.model.youtube_length * 100;
		    $('.currentpos').css('left', pCt+"%");

		    if(!this.isInit)
		    {
		    	$('.playpausebtn').addClass('play');
		    	this.isPlaying = true;
		    	this.isInit = true;
		    }

    		player.seekTo(this.newCurrentPos);
        },

	});
});