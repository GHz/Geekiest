define([
  'underscore',
  'backbone',
  'models/user'
], function( _, Backbone, Content){
  return Backbone.Collection.extend({
    model: User
  });
});