define([
  'underscore',
  'backbone',
  'models/media'
], function( _, Backbone, Content){
  return Backbone.Collection.extend({
    model: Media
  });
});