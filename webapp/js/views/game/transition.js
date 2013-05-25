define([
	'jquery',
	'backbone',
	'mustache',
	'text!templates/game/transition.html',

	],
function($,
	Backbone,
	Mustache,
	TransitionTemplate
	){
	return Backbone.View.extend({
		el: 'body',
        className: 'zerf',
        
        initialize : function(opts)
        {
        	
        	console.log("erfgedf");
        	this.router = opts.router;
    		this.render();
        },

        render: function()
        {
        
        	var html = Mustache.to_html(TransitionTemplate, {
                roundNumber : '25',
                special : 'red',
                message : "Your turn",

                meAvatar : localStorage.getItem('userAvatar'),

                opPseudo : "Chuck N.",
                opAvatar : "http://s.plurielles.fr/mmdia/i/54/5/chuck-norris-2815545rlich_123.jpg?v=1"

        	});

        	$('body').append(html);

            setTimeout(function(){
              $('#transition').removeClass('NoAnimate');

              setTimeout(function(){
                 $('#transition').addClass('NoAnimate');
              }, 2500);
            
            }, 100);

        
        }   
	});
});