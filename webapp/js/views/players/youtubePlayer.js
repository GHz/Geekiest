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
        
        initialize : function()
        {
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

		 	$("#videoPicker").slider({
				from: 480,
				to: 1020,
				step: 15,
				dimension: '',
				limits: false,
				calculate: function( value ){
					var hours = Math.floor( value / 60 );
					var mins = ( value - hours*60 );
					return (hours < 10 ? "0"+hours : hours) + ":" + ( mins == 0 ? "00" : mins );
				},
				onstatechange: function( value ){
					console.dir( this );
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
        	}
        	else
        	{
        		player.playVideo();
        		$('.playpausebtn').addClass('play');
        		this.isPlaying = true;
        	}
        }
	});
});