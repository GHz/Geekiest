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

            initialize: function()
            {
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
            }
        });
    });