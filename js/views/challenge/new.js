define([
        'backbone',
        'mustache',
        'packages/CustomView',
        'text!templates/challenge/new.html'

        ],
function(
        Backbone,
        Mustache,
        CustomView,
        NewCustomChallengeTemplate
){
    return  CustomView.extend({

    el: '.app',

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

    events : {
      "click .type" : "selectType"
    },

     render: function()
     {
         var html = Mustache.to_html(NewCustomChallengeTemplate, {});
         $('#main-content').html(html);
     },

    selectType : function(e)
    {
        e.preventDefault();
        var type = $(e.currentTarget).data('type');
        this.router.navigate("challenge/new/"+type, {trigger: true});
    }

    });
});