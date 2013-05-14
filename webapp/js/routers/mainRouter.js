define([
	'backbone',
	'underscore',
	'packages/options',
	'views/splashscreen/splashscreen',
	'views/login/login',
	'views/home/home',
],
function(Backbone,
         _,
         appOptions,
         SlpashScreenPageView,
         LoginPageView,
         HomePageView)
{
	return Backbone.Router.extend(
	{
		initialize: function()
		{
			Backbone.history.start({
				pushState: false, //HTML PushState
				root: "http://localhost/Geekiest/webapp/"
				//root: appOptions.appRootUrl
			});

		},

		routes:
		{
            //SplashScreen
            '': 'splashScreenPage',

            //Login
			'login': 'loginPage',

            //Home
            'home': 'homePage',
        },

		'splashScreenPage': function()
		{
            this.splashScreenView = new SlpashScreenPageView();
		},

        'loginPage' : function()
        {
            this.loginPageView = new LoginPageView();
        },

		'homePage': function()
		{
            this.homePageView = new HomePageView();
		},
	});
});
