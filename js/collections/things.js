define([
  'underscore',
  'backbone',
  'models/game'
], function( _, Backbone, Game){
  return Backbone.Collection.extend({
    model: Game,

	url: function() {
		return "http://serene-forest-6114.herokuapp.com/users/random_challenges"
	}
  });
});