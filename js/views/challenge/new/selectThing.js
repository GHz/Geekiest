define([
    'backbone',
    "mustache",
    'packages/CustomView',
    'text!templates/challenge/new/selectThing.html',
    'collections/playlistItems',
    'views/challenge/new/thingItem'
],
    function(
        Backbone,
        Mustache,
        CustomView,
        SelectThingTemplate,
        Things,
        ThingItemView
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
                this.type = opts.type;
                this.id = opts.id;

                this.things = new Things(this.id);

                var self = this;
                this.things.fetch({

                    success: function (e) {
                        self.renderThings();
                    }
                });
                this.render();
            },

            events: {
            },

            render: function()
            {
                var html = Mustache.to_html(SelectThingTemplate, {
                    type: this.type,
                    title: database["currentPlaylistName"]
                });
                $('#main-content').html(html);
            },

            renderThings: function()
            {
                var self = this, thingItem;
                $("#playlistsList").html('');
                self.things.each(function(thing, index, things)
                {
                    thingItem = new ThingItemView({
                        model: thing,
                        type: self.type,
                        collection: self.things,
                        router: self.router
                    });

                    $("#playlistItemsList").append(thingItem.render().el);
                });
            }
        });
    });