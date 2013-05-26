define([
		'backbone',
		"mustache",
		'text!templates/home/gameItem.html',
		'models/User',

		],
function(
		Backbone,
		Mustache,
		UserInvitationItemTemplate,
		User
){
	return  Backbone.View.extend({
        tagName:'li',

        initialize: function()
        {
        },

        events: {
          'click .actionInvitGo' : 'actionClick',
          'click .actionAnswer' : 'answerCLick'
        },

        render: function() {
        	if(this.model instanceof Array)
        		return;
        	

        	var html = Mustache.to_html(UserInvitationItemTemplate, {
        		Name: this.model.get('u1'),
        		Avatar: this.model.get('g1'),
            counter: this.model.get('counter'),
            isMaster: (this.model.get('isMaster') == 1) ? true : false,
            isFemale: (this.model.get('gender') == 'female') ? true : false,
            isStatusTwo : (this.model.get('status') == 2) ? true : false
        	});  
        	
        	this.$el.html(html);

        	return this;
        },

        actionClick: function(e)
        {
          e.preventDefault();
          
          database.currentGame = this.model.get('id');
          database.transitionData = {
                roundNumber : this.model.get('counter'),
                special : '' ,
                message : "Your turn",

                meAvatar : localStorage.getItem('userAvatar') + "?width=" + 200 + "&height=" + 200,

                opPseudo : this.model.get('u1'),
                opAvatar : this.model.get('g1') + "?width=" + 200 + "&height=" + 200,

                opId : this.model.get('id'),

                action : "create game"

              }

          this.options.router.navigate("transition", {trigger: true, replace: true});
        },  

        answerCLick: function(e)
        {
            e.preventDefault();
            //console.log(this.model)
            database.currentGame = this.model.get('id');
            database.currentGameO = this.model;

            database.transitionData = {
                roundNumber : this.model.get('counter'),
                special : '' ,
                message : "Your turn",

                meAvatar : localStorage.getItem('userAvatar') + "?width=" + 200 + "&height=" + 200,

                opPseudo : this.model.get('u1'),
                opAvatar : this.model.get('g1') + "?width=" + 200 + "&height=" + 200,

                opId : this.model.get('id'),

                action : "answer game"

            }
            this.options.router.navigate("transition", {trigger: true, replace: true});
        }
	});
});