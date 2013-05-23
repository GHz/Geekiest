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
      	
        settingsBtn: true,
        refreshBtn: false,
        backBtn: true,

      	initialize: function(opts)
        {
        	if($("#main").length > 0 )
        	{
        		$("#main-content").html("");
        	}
        	else
        	{
        		this.$el.html(Mustache.to_html(HeaderTemplate, {
                    'settingsBtn': this.settingsBtn,
                    'refreshBtn' : this.refreshBtn,
                    'backBtn': this.backBtn,
                }));
        	}

        },

        events: {
            'click #backBtn': 'backBtnClick',
        },

        backBtnClick: function()
        {
            this.router.back();
        }

	});
});
