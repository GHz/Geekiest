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

                    this.playlists = new Playlists(this.type);

                var self = this;
                this.playlists.fetch({
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
                var typeName = "";
                switch(this.type)
                {
                    case "movie":
                        typeName = "movies";
                        break;
                    case "tvshow":
                        typeName = "tv shows";
                        break;
                    case "videogame":
                        typeName = "video games";
                        break;
                    case "comic":
                        typeName = "comics";
                        break;
                }

                var html = Mustache.to_html(SelectPlaylistTemplate, {
                    type: this.type,
                    title: typeName
                });
                $('#main-content').html(html);
            },

            renderPlaylists: function()
            {
                var self = this, playlistItem;
                $("#playlistsList").html('');
                self.playlists.each(function(playlist, index, playlists)
                {
                    gameItem = new PlaylistItemView({
                        model: playlist,
                        type: self.type,
                        collection: self.playlists,
                        router: self.router
                    });

                    $("#playlistsList").append(gameItem.render().el);
                });
            }
        });
    });