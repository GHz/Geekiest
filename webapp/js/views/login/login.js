define(['backbone'],
function(Backbone){
	return  Backbone.View.extend({
		el: 'body',

        initialize: function(opts)
        {
        	this.router = opts.router;
        	console.log("LoginView");
        }
	});
});