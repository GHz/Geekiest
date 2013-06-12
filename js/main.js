require.config({
    'baseUrl': './js',
    //'baseUrl': 'http://localhost/Geekiest/webapp/js',
    'paths':
    {
        "underscore": "libs/vendor/underscore-min",
        "backbone": "libs/vendor/backbone-min",
        "mustache": 'libs/vendor/mustache'
    },

    //Load non-modular/legacy code
    //SEE https://github.com/jrburke/requirejs/wiki/Upgrading-to-RequireJS-2.0#wiki-shim
    'shim':
    {
        //Vendor Libs (js/libs/vendor/*)
        //-----------------------------------------
        'backbone':
        {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },

        //jQuery UI Components
        //----------------------------------------
        //@TODO : Manage jQ UI components' dependances
        'libs/jquery-ui.min':
        {
            deps: ['jquery'],
            exports: '$.ui'
        },

        //jQuery Libs (js/libs/*)
        //-----------------------------------------
        'libs/jquery.slider':
        {
            deps: ['jquery'],
            'exports': '$.fn.slider'
        },

        'libs/jquery.autotab':
        {
            deps: ['jquery'],
            'exports': '$.fn.autotab_magic'
        },

        //jQueryUI Libs (js/libs/*)
        //-----------------------------------------

        //Ohter Libs (js/libs/*)
        //-----------------------------------------

    },

    //SEE http://requirejs.org/docs/api.html#config-waitSeconds
    waitSeconds: 25
});

require([
    'app'
], function(App){
    App.init();
});