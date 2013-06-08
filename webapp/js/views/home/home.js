define([
		'backbone',
		"mustache",
		'packages/CustomView',
		'text!templates/home/home.html'
		],
function(
		Backbone,
		Mustache,
		CustomView,
        HomeTemplate
){
	return  Backbone.View.extend({
		el: '.app',

        initialize: function(opts)
        {
        	this.router = opts.router;

        	if(localStorage.getItem("userToken"))
        	{
        		this.router.navigate("dashboard", {trigger: true});
        		return;	 
        	}

        	var html = Mustache.to_html(HomeTemplate);
        	this.$el.html(html);
        },

        events: {
        	'click .facebook': 'facebookClick',
        	'click .howto': 'howtoClick',
        },

        facebookClick: function(e) {
        	e.preventDefault();

        	$('.facebook')
        		.addClass('refresh')
        		.html('<img src="img/btn_refresh.png" class="rotate btn_wait" />');

        	var self = this;
        	var datas;
		    FB.login(function(response){
		        if(response.authResponse){

	        	$.ajax({
					  type: "POST",
					  url: 'http://serene-forest-6114.herokuapp.com/users/login',
					  data: response,
					  success: function(response){
					  	var datas = JSON.parse(response);
					  	localStorage.setItem("userToken", datas.token);
					  	localStorage.setItem("userName", datas["name"]);
					  	localStorage.setItem('userAvatar', datas.avatar);
					  	localStorage.setItem('userId', datas.id);

					  	self.router.navigate("players/invit", {trigger: true});
					  }
					});

		        }
		      },{scope : 'email,read_friendlists,user_status'});
        },

        howtoClick: function(e) {	
        	e.preventDefault();
        	this.router.navigate("help", {trigger: true});
        },
	});
});