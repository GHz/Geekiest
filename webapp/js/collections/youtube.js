define([
    'underscore',
    'backbone',
    'collections/medias'
], function( _, Backbone, HostContents){
    return Medias.extend({
        title: 'youtube',
        type: 30,
        url: "https://gdata.youtube.com/feeds/api/videos?v=2&callback=?&alt=jsonc",
        queryGetParamName: 'q',
        limitGetParamName: 'max-results',
        charIcon: '',

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
        },

        //For the data fetching
        queryParams: function(query, limit)
        {
            var params = {};
            if(query) { params[this.queryGetParamName] = query }
            if(limit) { params[this.limitGetParamName] = limit }
            return params;
        },
    });
});