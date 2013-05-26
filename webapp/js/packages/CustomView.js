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
		el: '.app',
      	
        settingsBtn: true,
        refreshBtn: false,
        backBtn: true,
        validateBtn: false,
        refreshRightBtn: false,

      	initialize: function(opts)
        {
            $(this.el).undelegate('#settingsBtn', 'click');
            $(this.el).undelegate('#refreshBtn', 'click');
            $(this.el).undelegate('#validateBtn', 'click');
            $(this.el).undelegate('#backBtn', 'click');
    		this.$el.html(Mustache.to_html(HeaderTemplate, {
                'settingsBtn': this.settingsBtn,
                'refreshBtn' : this.refreshBtn,
                'backBtn': this.backBtn,
                'validateBtn': this.validateBtn,
                'refreshRightBtn': this.refreshRightBtn
            }));
        	
            
        }

        /*,

        /*events: {
            'click #backBtn': 'backBtnClick',
        },

        backBtnClick: function(e)
        {   
            e.preventDefault();
            this.router.back();
        }*/

	});
});
