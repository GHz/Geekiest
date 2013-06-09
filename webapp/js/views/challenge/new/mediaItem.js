define([
    'backbone',
    "mustache",
    'text!templates/challenge/new/mediaItem.html',
    'models/Media',
],
    function(
        Backbone,
        Mustache,
        MediaItemTemplate,
        Media
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
                });

                this.$el.html(html);

                return this;
            },

            selectMedia: function(e)
            {
                e.preventDefault();
                console.log(this);
                return;
                this.router.navigate("challenge/new/playlist/"
                    +this.type
                    +"/"
                    +this.model.get('id')
                    , {trigger: true});
            }
        });
    });