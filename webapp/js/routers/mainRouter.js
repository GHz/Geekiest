define([
	'backbone',
	'underscore',
	'packages/options',
	'packages/AppRouter',

	'views/home/home',
	'views/home/help',
    'views/home/transition',

    'views/dashboard/index',

    'views/challenge/index',
    'views/challenge/new',
    'views/challenge/new/selectPlaylist',
    'views/challenge/new/selectThing',
    'views/challenge/send',
    'views/challenge/answer',

    'views/players/invit',
],
function(Backbone,
         _,
         appOptions,
         AppRouter,

         HomePageView,
         HelpPageView,
         TransitionPageView,

         DashboardPageView,

         IndexChallengePageView,
         NewChallengePageView,
         SelectPlaylistChallengePageView,
         SelectThingChallengePageView,
         SendChallengePageView,
         AnswerPageView,

         InvitPlayersPageView
         )
{
return Backbone.Router.extend(
{
    initialize: function()
    {
        Backbone.history.start({
            root: "/Geekiest/webapp/",
            pushState: false
        });
    },

    routes:
    {
        //Home
        '' : 'homePage',
        'help' : 'helpPage',
        'transition' : 'transitionPage',

        //Dashboard
        'dashboard' : 'dashboardPage',

        //Challenge
        'challenge/index' : 'indexChallengePage',
        'challenge/new' : 'newChallengePage',
        'challenge/new/playlist/:type/:id' : 'selectThingChallengePage',
        'challenge/new/:type' : 'selectPlaylistChallengePage',
        'challenge/send' : 'sendChallengePage',
        'challenge/answer' : 'answerPage',

        //Players
        'players/invit': 'invitPlayersPage'
    },

    //Home
    'homePage': function() { this.HomePageView = new HomePageView({router: this}); },
    'helpPage': function() { this.HelpPageView = new HelpPageView({router: this}); },
    'transitionPage': function() { this.TransitionPageView = new TransitionPageView({router: this}); },

    //Dashboard
    'dashboardPage': function() { this.DashboardPageView = new DashboardPageView({router: this}); },

    //Challenge
    'indexChallengePage': function() { this.IndexChallengePageView = new IndexChallengePageView({router: this}); },
    'newChallengePage': function() { this.NewChallengePageView = new NewChallengePageView({router: this}); },
    'selectPlaylistChallengePage': function(type) { this.SelectPlaylistChallengePageView = new SelectPlaylistChallengePageView({router: this, type: type}); },
    'selectThingChallengePage': function(type,id) { this.SelectThingChallengePageView = new SelectThingChallengePageView({router: this, type: type, id: id}); },
    'sendChallengePage': function() { this.SendChallengePageView = new SendChallengePageView({router: this}); },
    'answerPage': function() { this.AnswerPageView = new AnswerPageView({router: this}); },

    //Players
    'invitPlayersPage': function() { this.InvitPlayersPageView = new InvitPlayersPageView({router: this}); }
});
});
