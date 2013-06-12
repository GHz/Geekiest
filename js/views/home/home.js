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

        my_client_id: "340107129425326",


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
        	'click .howto': 'howtoClick'
        },

        facebookClick: function(e) {
        	e.preventDefault();

        	$('.facebook')
        		.addClass('refresh')
        		.html('<img src="img/btn_refresh.png" class="rotate btn_wait" />');

        	var self = this;
        	var datas;


            var authorize_url = "https://www.facebook.com/dialog/oauth?";
            authorize_url += "client_id=340107129425326";
            authorize_url += "&redirect_uri=https://www.facebook.com/connect/login_success.html";
            authorize_url += "&display=touch";
            authorize_url += "&scope=publish_stream";

            //CALL IN APP BROWSER WITH THE LINK
            this.ref = window.open(authorize_url, '_blank', 'location=no');
            this.ref.onload=function(){alert("message one ")}
            this.ref.addEventListener('load', function(event){
                console.log(event);
               
                //Facebook.facebookLocChanged(event.url);
            }, true);

            /*$.ajax({
                type: "GET",
                url : authorize_url,
                success: function(response, data, data2, data3){
                    console.log(response);
                    console.log(data);

                }
            });
*/
            /*
            console.log("eeee");
		    FB.login(function(response){
		        if(response.authResponse){

                    console.log(response);
                    return
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
		      },{scope : 'email,read_friendlists,user_status'});*/
        },

        howtoClick: function(e) {
        	e.preventDefault();
        	this.router.navigate("help", {trigger: true});
        },
	});
});