define([
    'underscore',
    'backbone',
    'models/media'
], function( _, Backbone, Media){
    return Backbone.Collection.extend({
        model: Media,

        url: function() {
            return "https://gdata.youtube.com/feeds/api/videos?v=2&callback=?&alt=jsonc&q=" + this.queryName + "&max-results=" + this.queryLimit;
        },

        initialize: function(queryName, queryLimit, forceTrailer)
        {
            this.queryName = queryName + forceTrailer ? " trailer" : "";
            this.queryLimit = queryLimit;
        },

        parse: function(response) {
            var data = response.data.items;
            var contents = [], content;

            if(data)
            {
                for(var i in data)
                {
                    content = {};
                    content.host = this.title;
                    content.type = this.type;
                    content.title = (data[i].title || '');
                    content.description = (data[i].description || '');
                    content.duration = data[i].duration;
                    content.thumbnail = data[i].thumbnail.hqDefault;
                    content.externalId = data[i].id;
                    content.publicationDate = new Date(data[i].uploaded);
                    content.url = data[i].player['default'];

                    contents.push(content);
                }
            }
            return contents;
        }
    });
});