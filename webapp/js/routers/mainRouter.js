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
	'views/game/transition',
	'views/game/newCustomChallenge'
],
function(Backbone,
         _,
         appOptions,
         AppRouter,
         SlpashScreenPageView,
         HomePageView,
         HowtoPageView,
         InvitPageView,
         SendChallengePageView,
         TransitionPageView,
         NewCustomChallengePageView
         )
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

            //Send Challenge to your friend
            'sendchallenge': 'sendChallengePage',

            //Transition beetween game views
            'transition' : 'transitionPage',

            //Custom Challenge
            'newcustomchallenge' : 'newCustomChallengePage' 
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

		'transitionPage': function()
		{
            this.transitionPagePageView = new TransitionPageView({router: this});
		},

		'newCustomChallengePage': function()
		{
            this.newCustomChallengePageView = new NewCustomChallengePageView({router: this});
		}
	});
});
