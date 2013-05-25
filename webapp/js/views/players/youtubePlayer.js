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
        
        initialize : function()
        {
        	this.endPicker = this.model.duration;
        },

        events: {
        	'click .playpausebtn' : 'playPauseBtnClick',
        	'click .overlay' : 'playPauseBtnClick'
        },

        render: function()
        {
        	var html = Mustache.to_html(YoutubePlayerTemplate,this.model);

			this.$el.html(html);

        	return this;
        },

        initPicker: function()
        {
        	var self = this;
		 	$("#videoPicker").slider({
				from: 0,
				to: this.model.duration,
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

    				if(currentTime >= self.endPicker || currentTime <= self.startPicker)
    				{
    					player.seekTo(self.startPicker);
    				}

					if(!this.isChanging)
					{
    					var pCt = currentTime / self.model.duration * 100;
				    	$('.currentpos').css('left', pCt+"%");
					}

				},500);
        	}
        },

        updateCursorPos: function(value)
        {
        	this.isChanging = true;
        	var dataSplit = value.split(";");
    		this.startPicker = dataSplit[0];
    		this.endPicker = dataSplit[1];

    		var currentPos = player.getCurrentTime();
    		this.newCurrentPos = currentPos;

    		if(currentPos<this.startPicker)
    		{
    			this.newCurrentPos = this.startPicker;
    		}
    		else if(currentPos>this.endPicker)
    		{
    			this.newCurrentPos = this.endPicker;
    		}

			var pCt = this.newCurrentPos / this.model.duration * 100;
		    $('.currentpos').css('left', pCt+"%");

    		player.seekTo(this.newCurrentPos);
    		this.isChanging = false;
        }


	});
});