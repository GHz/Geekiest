// This is the main entry point for the App
define([
  'routers/mainRouter'
], function(MainRouter){
  var init = function()
  {
    this.router = new MainRouter();
  };
  
  return { init: init};
});