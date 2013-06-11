define([
  'underscore',
  'backbone',
  'models/media'
], function( _, Backbone, Media){
  return Backbone.Collection.extend({
    model: Media
  });
});