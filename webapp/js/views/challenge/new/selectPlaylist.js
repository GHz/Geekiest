define([
    'backbone',
    "mustache",
    'packages/CustomView',
    'text!templates/challenge/new/selectPlaylist.html',

],
    function(
        Backbone,
        Mustache,
        CustomView,
        SelectPlaylistTemplate
        ){
        return  CustomView.extend({

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
            },

            events: {
            }
        });
    });