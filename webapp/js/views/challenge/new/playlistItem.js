define([
    'backbone',
    "mustache",
    'text!templates/challenge/new/playlistItem.html',
    'models/Playlist',

],
    function(
        Backbone,
        Mustache,
        PlaylistItemTemplate,
        Playlist
        ){
        return  Backbone.View.extend({
            tagName:'li',

            initialize: function(opts)
            {
                this.router = opts.router;
                this.type = opts.type;
            },

            events: {
                'click' : 'selectItem'
            },

            render: function() {
                var html = Mustache.to_html(PlaylistItemTemplate, {
                    name: this.model.get('name')
                });

                this.$el.html(html);

                return this;
            },

            selectItem: function(e)
            {
                e.preventDefault();
                console.log(this)
                this.router.navigate("challenge/new/playlist/"
                    +this.type
                    +"/"
                    +this.model.get('id')
                    , {trigger: true});
            }
        });
    });