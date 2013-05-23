define([
	'jquery',
	'backbone',
	'mustache',
	'text!templates/layout/header.html',

],
function($,
	Backbone,
	Mustache,
	HeaderTemplate
){
	return  Backbone.View.extend({
		el: 'body',
      	
      	initialize: function(opts)
        {
        	if($("#main").length > 0 )
        	{
        		$("#main-content").html("");
        	}
        	else
        	{
        		this.$el.html(Mustache.to_html(HeaderTemplate));
        	}
        }
	});
});
