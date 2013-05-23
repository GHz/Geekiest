define([
	'backbone',
	'underscore',
	'packages/options',
	'views/splashscreen/splashscreen',
	'views/login/login',
	'views/home/home',
	'views/splashscreen/howto',
	'views/test',
],
function(Backbone,
         _,
         appOptions,
         SlpashScreenPageView,
         LoginPageView,
         HomePageView,
         HowtoPageView,
         TestPageView)
{
	return Backbone.Router.extend(
	{
		initialize: function()
		{
			Backbone.history.start({
				//pushState: false, //HTML PushState
				root: "/Geekiest/webapp/"
			});

			//this.navigate('splashscreen', {trigger: true, replace: true});

		},

		routes:
		{
            //SplashScreen
            'splashscreen': 'splashScreenPage',

            //Login
			'login': 'loginPage',

            //Home
            'home': 'homePage',

            //How To
            'howto': 'howtoPage',

            //Test
            'test': 'testPage',
        },

		'splashScreenPage': function()
		{
            this.splashScreenView = new SlpashScreenPageView({router: this});
		},

        'loginPage' : function()
        {
            this.loginPageView = new LoginPageView({router: this});
        },

		'homePage': function()
		{
            this.homePageView = new HomePageView({router: this});
		},

		'howtoPage': function()
		{
            this.howtoPageView = new HowtoPageView({router: this});
		},

		'testPage': function()
		{
            this.testPageView = new TestPageView({router: this});
		},
	});
});
