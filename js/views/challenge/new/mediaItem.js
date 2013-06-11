define([
    'backbone',
    "mustache",
    'text!templates/challenge/new/mediaItem.html',
    'models/Media',
    'models/Thing',
],
    function(
        Backbone,
        Mustache,
        MediaItemTemplate,
        Media,
        Thing
        ){
        return  Backbone.View.extend({
            tagName:'li',

            initialize: function(opts)
            {
                this.router = opts.router;
                this.type = opts.type;
            },

            events: {
                'click' : 'selectMedia'
            },

            render: function() {
                var html = Mustache.to_html(MediaItemTemplate, {
                    cover: this.model.get('thumbnail'),
                    title: this.model.get('title'),
                    description: this.model.get('description'),
                    duration: this.formatDuration(this.model.get('duration')),
                    viewCount: this.formatViewContent(this.model.get('viewCount'))
                });

                this.$el.html(html);

                return this;
            },

            formatDuration: function( value ){
                var minutes = Math.floor( value / 60 );
                var seconds = ( value - minutes*60 );
                return (minutes < 10 ? "0"+minutes : minutes)
                    + "     :     "
                    + ( seconds < 10 ? "0"+seconds : seconds);
            },

            formatViewContent: function (x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " , ");
            },

            selectMedia: function(e)
            {
                e.preventDefault();

                database.currentMedia = new Thing({
                    id: "TODO",
                    start: 0,
                    end: 10,
                    youtube_id: this.model.get('externalId'),
                    youtube_length: this.model.get('duration')
                })

                this.options.router.navigate("challenge/send", {trigger: true});
            }
        });
    });