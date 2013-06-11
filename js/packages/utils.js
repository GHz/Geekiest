define([
    'jquery',
], function($){
    return {
        //See http://stackoverflow.com/a/10308120
        mergeAlternate: function (arrayToMerge) {
            var merged = [], index = 0, cont, i, A;
            do {
                cont = false;
                for (var i=0; i<arrayToMerge.length; i++) {
                    A = arrayToMerge[i];
                    if (index < A.length) {
                        cont = true;
                        merged.push(A[index]);
                    }
                }
                index++;
            } while (cont);
            return merged;
        },
        //Convert object to array
        objectToArray: function (o)
        {
            var a = [];
            for(var i in o)
            {
                if(typeof o[i] != 'function')
                {
                    a.push(o[i]);
                }

            }
            return a;
        },
        getClippedText: function(text, maxlength, ellipse) {
            ellipse = ellipse || '...';

            if(text.length > maxlength)
            {
                return text.substring(0, maxlength - ellipse.length) + ellipse;
            }
            else
            {
                return text;
            }
        },
        //See http://css-tricks.com/snippets/javascript/htmlentities-for-javascript/#comment-83047
        encodeEntities: function(s){
            return $("<div/>").text(s).html();
        },

        decodeEntities: function (s) {
            return $("<div/>").html(s).text();
        }
    }
});