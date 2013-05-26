define([
	'jquery',
	'backbone',
	'mustache',
	'text!templates/game/transition.html',

	],
function($,
	Backbone,
	Mustache,
	TransitionTemplate
	){
	return Backbone.View.extend({
		el: '.app',
        className: 'zerf',
        
        initialize : function(opts)
        {
        	this.router = opts.router;
            this.colorBg = opts.color;
            this.actionTarget = opts.actionTarget;
            this.param = opts.param;

    		this.render();
        },

        render: function()
        {
            var self = this;
        	var html = Mustache.to_html(TransitionTemplate, _.extend({
                    roundNumber : '1',
                    special : '' ,
                    message : "Your turn",

                    meAvatar : localStorage.getItem('userAvatar'),

                    opPseudo : "Chuck N.",
                    opAvatar : "http://s.plurielles.fr/mmdia/i/54/5/chuck-norris-2815545rlich_123.jpg?v=1"

                },
                database.transitionData

                
        	));

        	this.$el.html(html);

            setTimeout(function(){
              $('#transition').removeClass('NoAnimate');

              setTimeout(function(){
                 $('#transition').addClass('NoAnimate');
                 self.proceedAction();
              }, 2500);
            
            }, 100);

        
        },

        proceedAction: function()
        {
            var self = this;
            switch(database.transitionData.action)
            {
                case "create game":
                    $.ajax({
                      type: "POST",
                      url: 'http://serene-forest-6114.herokuapp.com/users/create_game',
                      data: {
                            from: localStorage.getItem('userId'),
                            to: database.transitionData.opId
                      },
                      success: function(response){
                        database.currentGame = response;
                        self.router.navigate("randomchallenge", {trigger: true, replace: true});
                      }
                    });
                break;
            }
        }
	});
});