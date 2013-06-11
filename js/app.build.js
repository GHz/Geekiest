({
// Nice not to inline/minify things for debugging
    optimize: "none",

// Base js directory relative to the build js
    baseUrl: './',

// Main script file for the app
    name: 'main',

// Add load trigger to automatically start main module after require is initialized
    insertRequire: ['main'],

// File to output compiled js to
    out: './main_app.js',

    'paths':
    {
        "jquery" : "loader.jquery",
        "underscore": "libs/vendor/underscore-min",
        "backbone": "libs/vendor/backbone-min",
        "mustache": 'libs/vendor/mustache'
    },'shim':
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

    }
})

/*({
    //Default config
    //--------------------------------------------------------------
    appDir: "./",
    baseUrl: "./",
    dir: "../js",
    keepBuildDir: true,

    //Minification  config
    //--------------------------------------------------------------

    //- "uglify": (default) UglifyJS
    //- "closure": Google's Closure Compiler (Only using Java)
    //- "closure.keepLines": Same as closure option, but keeps line returns in the minified files.
    //- "none": no minification will be done.
    optimize: "uglify",

    //UglifyJS options
    //See https://github.com/mishoo/UglifyJS for the possible values.
    uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: false
        //max_line_length: 1000
    },

    preserveLicenseComments: false,

    //MOAR optimizations, 'cause goo.gl/IwXlX !
    optimizeAllPluginResources: true,

    //Inlines the text for any text! dependencies, to avoid the separate async XMLHttpRequest calls to load those dependencies.
    inlineText: true,


    //Modules definition config
    //--------------------------------------------------------------
    paths: {
        "jquery": "require-jquery",
        "underscore": "libs/vendor/underscore",
        "backbone": "libs/vendor/backbone"
    },

    mainConfigFile: 'main.js',

    modules: [
        //Optimize the require-jquery.js file by applying any minification
        //that is desired via the optimize: setting above.
        {
            name: "require-jquery"
        },
        {
            name: "main",
            exclude: ["jquery"]
        }
    ]
})*/