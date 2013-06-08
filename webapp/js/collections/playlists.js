define([
    'underscore',
    'backbone',
    'models/playlist'
], function( _, Backbone, Playlist){
    return Backbone.Collection.extend({
        model: Playlist,

        url: function() {
            return "http://serene-forest-6114.herokuapp.com/users/playlist/"+this.type;
        },

        initialize: function(type)
        {
            this.type = type;
        }
    });
});