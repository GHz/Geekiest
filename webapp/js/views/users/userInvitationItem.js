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
        },

        render: function() {
        	if(this.model instanceof Array)
        		return;
        	
        	var html = Mustache.to_html(UserInvitationItemTemplate, {
        		Name: this.model.get('name'),
        		Avatar: this.model.get('avatar')
        	});
        	
        	this.$el.html(html);

        	return this;
        }
	});
});