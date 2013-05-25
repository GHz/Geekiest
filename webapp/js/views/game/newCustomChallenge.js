define([
        'backbone',
        'mustache',
        'packages/CustomView',
        'text!templates/game/newCustomChallenge.html'

        ],
function(
        Backbone,
        Mustache,
        CustomView,
        NewCustomChallengeTemplate
){
    return  CustomView.extend({

    el: 'body',

    initialize: function(opts)
    {
        this.constructor.__super__.initialize.apply(this, opts);
        if(this.events)
        {
            this.events = _.defaults(this.events, CustomView.prototype.events);
        }
        else
        {
            this.events = CustomView.prototype.events;
        }

        this.router = opts.router;

        this.render();

     },

     render: function()
     {
        var html = Mustache.to_html(NewCustomChallengeTemplate, {

        });

        $('#main-content').html(html);
     }
 

    });
});