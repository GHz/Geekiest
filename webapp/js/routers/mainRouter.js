define([
	'backbone',
	'underscore',
	'packages/options',
	'packages/AppRouter',
	'views/splashscreen/splashscreen',
	'views/login/login',
	'views/home/home',
	'views/splashscreen/howto',
	'views/test',
],
function(Backbone,
         _,
         appOptions,
         AppRouter,
         SlpashScreenPageView,
         LoginPageView,
         HomePageView,
         HowtoPageView,
         TestPageView)
{
	return AppRouter.extend(
	{
		initialize: function()
		{
			Backbone.history.start({
				//pushState: true, //HTML PushState
				root: "/Geekiest/webapp/"
			});

		},

		routes:
		{
            //SplashScreen
           '': 'splashScreenPage',
           // 'splashscreen': 'splashScreenPage',

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
