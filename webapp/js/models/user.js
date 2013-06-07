define([
    'underscore',
    'backbone',
    'packages/options'
], function(
    _,
    Backbone,
    appOptions
    ) {
    return Backbone.Model.extend(
        {
            /**
                square = 50px * 50px
                small = 50px Wide * Variable Height
                normal = 100px Wide * Variable Height
                large = 200px Wide * Variable Height
            **/
            getAvatar: function(size)
            {
                if(!size)
                {
                    size = "normal";
                }

                return (this.get('avatar') + "?type=" + size )
            },


            getAvatar: function(width, height)
            {
                if(!width)
                {
                    width = 100;
                }

                if(!height)
                {
                    height = 100;
                }

                return (this.get('avatar') + "?width=" + width + "&height=" + height)
            },
        });
});