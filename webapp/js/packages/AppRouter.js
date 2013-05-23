define([
	'backbone',

],
function(
	Backbone
){
	return  Backbone.Router.extend({

	  initialize: function() {
	    this.routesHit = 0;

	    //keep count of number of routes handled by your application
	    Backbone.history.on('route', function() { this.routesHit++; }, this);
	  },

	  back: function() {
	    if(this.routesHit > 1) {
	      //more than one route hit -> user did not land to current page directly
	      window.history.back();
	    } else {
	      //otherwise go to the home page. Use replaceState if available so
	      //the navigation doesn't create an extra history entry
	      this.navigate('', {trigger:true, replace:true});
	    }
	  }
});
});
