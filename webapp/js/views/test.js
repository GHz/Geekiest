define([
	'jquery',
	'backbone',
	'mustache',
	'text!templates/player/youtube_player.html',
	'libs/jquery.slider.min',

	],
function($,
	Backbone,
	Mustache,
	YoutubePlayerView
	){
	return  Backbone.View.extend({
		el: 'body',

        initialize : function(opts)
        {
        	this.router = opts.router;
        	var html = Mustache.to_html(YoutubePlayerView,
        	{
        		"picker": true,
        		"height": "230px",
        		"video-id": "mLdqKIj3-A0"
        	});

        	$('#main-content').html(html);

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
        }
	});
});