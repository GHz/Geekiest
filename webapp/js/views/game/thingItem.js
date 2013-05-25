define([
		'backbone',
		"mustache",
		'text!templates/game/thingItem.html',
		'models/Thing',

		],
function(
		Backbone,
		Mustache,
		ThingItemTemplate,
		Thing
){
	return  Backbone.View.extend({
        tagName:'div',

        initialize: function()
        {

        },

        events: {
                'click .challenge' : 'actionClick'
        },

        render: function() {
        	if(this.model instanceof Array)
        		return;
        	
        	var html = Mustache.to_html(ThingItemTemplate, {
        		name: this.model.get('title'),
        		image: this.model.get('cover'),
        		type: this.model.get('type')
        	});
        	
        	this.$el.html(html);

        	return this;
        },

        actionClick: function(e)
        {
                e.preventDefault();
        }  
	});
});