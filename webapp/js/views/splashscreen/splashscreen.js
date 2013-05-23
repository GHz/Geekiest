define([
		'backbone',
		"mustache",
		'packages/CustomView',
		'text!templates/home/splashscreen.html'
		],
function(
		Backbone,
		Mustache,
		CustomView,
		SplashScreenTemplate
){
	return  Backbone.View.extend({
		el: 'body',

        initialize: function(opts)
        {
        	this.router = opts.router;

        	var html = Mustache.to_html(SplashScreenTemplate);
        	this.$el.html(html);
        },

        events: {
        	'click .facebook': 'facebookClick',
        	'click .howto': 'howtoClick',
        },

        facebookClick: function(e) {
        	e.preventDefault();

        	//this.router.navigate("home", {trigger: true, replace: true});
			//return;

        	var self = this;

		    FB.login(function(response){
		        if(response.authResponse){

	        	$.ajax({
					  type: "POST",
					  url: 'http://serene-forest-6114.herokuapp.com/users/login',
					  data: response,
					  success: function(response){
					  	console.log(response);
					  }
					});

		        }
		      },{scope : 'email,read_friendlists'});
        },

        howtoClick: function(e) {	
        	e.preventDefault();
        	this.router.navigate("howto", {trigger: true, replace: true});
        },
	});
});