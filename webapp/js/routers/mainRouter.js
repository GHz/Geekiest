define([
	'backbone',
	'underscore',
	'packages/options',
	'packages/AppRouter',
	'views/home/splashscreen',
	'views/home/home',
	'views/home/howto',
	'views/home/invit',
	'views/game/sendChallenge',
],
function(Backbone,
         _,
         appOptions,
         AppRouter,
         SlpashScreenPageView,
         HomePageView,
         HowtoPageView,
         InvitPageView,
         SendChallengePageView)
{
	return AppRouter.extend(
	{
		initialize: function()
		{
			Backbone.history.start({
				root: "/Geekiest/webapp/"
			});

		},

		routes:
		{
            //SplashScreen
           '': 'splashScreenPage',

            //Game Dashboard
            'home': 'homePage',

            //How To
            'howto': 'howtoPage',

            //Invit
            'invit': 'invitPage',

            //Test
            'sendchallenge': 'sendChallengePage',
        },

		'splashScreenPage': function()
		{
            this.splashScreenView = new SlpashScreenPageView({router: this});
		},

		'homePage': function()
		{
            this.homePageView = new HomePageView({router: this});
		},

		'howtoPage': function()
		{
            this.howtoPageView = new HowtoPageView({router: this});
		},		

		'invitPage': function()
		{
            this.invitPageView = new InvitPageView({router: this});
		},

		'sendChallengePage': function()
		{
            this.sendChallengePageView = new SendChallengePageView({router: this});
		},
	});
});
