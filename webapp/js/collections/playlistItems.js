define([
    'underscore',
    'backbone',
    'models/thing'
], function( _, Backbone, Thing){
    return Backbone.Collection.extend({
        model: Thing,

        url: function() {
            return "http://serene-forest-6114.herokuapp.com/users/things/" + this.playlistId
        },

        initialize: function(playlistId)
        {
            this.playlistId = playlistId;
        }
    });
});