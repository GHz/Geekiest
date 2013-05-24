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
        validateBtn: false,

      	initialize: function(opts)
        {
            $(this.el).undelegate('#settingsBtn', 'click');
            $(this.el).undelegate('#refreshBtn', 'click');
            $(this.el).undelegate('#validateBtn', 'click');

    		this.$el.html(Mustache.to_html(HeaderTemplate, {
                'settingsBtn': this.settingsBtn,
                'refreshBtn' : this.refreshBtn,
                'backBtn': this.backBtn,
                'validateBtn': this.validateBtn
            }));
        	

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
