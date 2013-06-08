define([
    'backbone',
    "mustache",
    'packages/CustomView',
    'text!templates/challenge/new/selectPlaylist.html',
    'views/challenge/new/playlistItem',
    'collections/playlists'

],
    function(
        Backbone,
        Mustache,
        CustomView,
        SelectPlaylistTemplate,
        PlaylistItemView,
        Playlists
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

                    this.playlits = new Playlists(this.type);

                var self = this;
                this.playlits.fetch({
                    error: function () {
                    },
                    success: function (e) {
                        self.renderPlaylists();
                    }
                });

                this.render();
            },

            events: {
            },

            render: function()
            {
                var html = Mustache.to_html(SelectPlaylistTemplate, {
                    type: this.type
                });
                $('#main-content').html(html);
            },

            renderPlaylists: function()
            {

            }
        });
    });