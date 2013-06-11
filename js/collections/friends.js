define([
  'underscore',
  'backbone',
  'models/user'
], function( _, Backbone, User){
  return Backbone.Collection.extend({
    model: User,

	url: function() {
		return "http://serene-forest-6114.herokuapp.com/users/friends/"+localStorage.getItem('userToken')
	},
  });
});