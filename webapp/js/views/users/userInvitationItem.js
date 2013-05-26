define([
		'backbone',
		"mustache",
		'text!templates/users/userInvitationItem.html',
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
          'click .actionInvitGo' : 'actionClick'
        },

        render: function() {
        	if(this.model instanceof Array)
        		return;
        	
        	var html = Mustache.to_html(UserInvitationItemTemplate, {
        		Name: this.model.get('name'),
        		Avatar: this.model.get('avatar'),
                        isActive: (this.model.get('isActive') == 1) ? true : false,
                        isFemale: (this.model.get('gender') == 'female') ? true : false
        	});
        	
        	this.$el.html(html);

        	return this;
        },

        actionClick: function(e)
        {
                e.preventDefault();
                  console.log(this)
                if(this.$('.btnList ').hasClass('go'))
                {
                  database.transitionData = {
                    roundNumber : '1',
                    special : '' ,
                    message : "Your turn",

                    meAvatar : localStorage.getItem('userAvatar')+ "?width=" + 200 + "&height=" + 200,

                    opPseudo : this.model.get('name'),
                    opAvatar : this.model.getAvatar(200,200),
                    opId : this.model.get('id'),

                    action : "create game"

                  }

                  this.options.router.navigate("transition", {trigger: true, replace: true});

                  return;
                }
                else
                {
                  var self = this;
                  FB.ui({method: 'apprequests',
                      message: 'My Great Request',
                      to: this.model.get('id')
                    }, function(){
                          $.ajax({
                            type: "POST",
                            url: 'http://serene-forest-6114.herokuapp.com/users/invit',
                            data : {
                                  from: localStorage.getItem('userId'),
                                  to: self.model.get('id')
                            },
                            success: function(response){
                                 self.$el.fadeOut();
                            }
                          });                        
                    });

                }

                
        }
        
	});
});