
define('jquery',[],function() {
    return $;
});
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);

define("underscore", function(){});

(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*/
;
define("backbone", ["jquery","underscore"], (function (global) {
    return function () {
        return global.Backbone;
    }
}(this)));

define('packages/options',[
], function(){
    var appOptions = {
        appRootUrl: '/Geekiest/webapp/',
        cdnUrl: '/Geekiest/webapp/'  
    };

    return appOptions;
});
define('packages/AppRouter',[
	'backbone',

],
function(
	Backbone
){
	return  Backbone.Router.extend({

	  initialize: function() {
	    this.routesHit = 0;

	    //keep count of number of routes handled by your application
	    Backbone.history.on('route', function() { this.routesHit++; }, this);
	  },

	  back: function() {
	    if(this.routesHit > 1) {
	      //more than one route hit -> user did not land to current page directly
	      window.history.back();
	    } else {
	      //otherwise go to the home page. Use replaceState if available so
	      //the navigation doesn't create an extra history entry
	      this.navigate('', {trigger:true, replace:true});
	    }
	  }
});
});

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

var Mustache;

(function (exports) {
  if (typeof module !== "undefined") {
    module.exports = exports; // CommonJS
  } else if (typeof define === "function") {
    define('mustache',[],exports); // AMD
  } else {
    Mustache = exports; // <script>
  }
}(function () {
  var exports = {};

  exports.name = "mustache.js";
  exports.version = "0.5.1-dev";
  exports.tags = ["{{", "}}"];

  exports.parse = parse;
  exports.clearCache = clearCache;
  exports.compile = compile;
  exports.compilePartial = compilePartial;
  exports.render = render;

  exports.Scanner = Scanner;
  exports.Context = Context;
  exports.Renderer = Renderer;

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  function testRe(re, string) {
    return RegExp.prototype.test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRe(nonSpaceRe, string);
  }

  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  // OSWASP Guidelines: escape all non alphanumeric characters in ASCII space.
  var jsCharsRe = /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm;

  function quote(text) {
    var escaped = text.replace(jsCharsRe, function (c) {
      return "\\u" + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
    });

    return '"' + escaped + '"';
  }

  function escapeRe(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  // Export these utility functions.
  exports.isWhitespace = isWhitespace;
  exports.isArray = isArray;
  exports.quote = quote;
  exports.escapeRe = escapeRe;
  exports.escapeHtml = escapeHtml;

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, `null` otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return null;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail of this scanner if no match
   * can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = null;
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view;
    this.parent = parent;
    this.clearCache();
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.clearCache = function () {
    this._cache = {};
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name === ".") {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf(".") > 0) {
            var names = name.split("."), i = 0;

            value = context.view;

            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) {
            break;
          }

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === "function") {
      value = value.call(this.view);
    }

    return value;
  };

  function Renderer() {
    this.clearCache();
  }

  Renderer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Renderer.prototype.compile = function (tokens, tags) {
    if (typeof tokens === "string") {
      tokens = parse(tokens, tags);
    }

    var fn = compileTokens(tokens),
        self = this;

    return function (view) {
      return fn(Context.make(view), self);
    };
  };

  Renderer.prototype.compilePartial = function (name, tokens, tags) {
    this._partialCache[name] = this.compile(tokens, tags);
    return this._partialCache[name];
  };

  Renderer.prototype.render = function (template, view) {
    var fn = this._cache[template];

    if (!fn) {
      fn = this.compile(template);
      this._cache[template] = fn;
    }

    return fn(view);
  };

  Renderer.prototype._section = function (name, context, callback) {
    var value = context.lookup(name);

    switch (typeof value) {
    case "object":
      if (isArray(value)) {
        var buffer = "";

        for (var i = 0, len = value.length; i < len; ++i) {
          buffer += callback(context.push(value[i]), this);
        }

        return buffer;
      }

      return value ? callback(context.push(value), this) : "";
    case "function":
      // TODO: The text should be passed to the callback plain, not rendered.
      var sectionText = callback(context, this),
          self = this;

      var scopedRender = function (template) {
        return self.render(template, context);
      };

      return value.call(context.view, sectionText, scopedRender) || "";
    default:
      if (value) {
        return callback(context, this);
      }
    }

    return "";
  };

  Renderer.prototype._inverted = function (name, context, callback) {
    var value = context.lookup(name);

    // From the spec: inverted sections may render text once based on the
    // inverse value of the key. That is, they will be rendered if the key
    // doesn't exist, is false, or is an empty list.
    if (value == null || value === false || (isArray(value) && value.length === 0)) {
      return callback(context, this);
    }

    return "";
  };

  Renderer.prototype._partial = function (name, context) {
    var fn = this._partialCache[name];

    if (fn) {
      return fn(context, this);
    }

    return "";
  };

  Renderer.prototype._name = function (name, context, escape) {
    var value = context.lookup(name);

    if (typeof value === "function") {
      value = value.call(context.view);
    }

    var string = (value == null) ? "" : String(value);

    if (escape) {
      return escapeHtml(string);
    }

    return string;
  };

  /**
   * Low-level function that compiles the given `tokens` into a
   * function that accepts two arguments: a Context and a
   * Renderer. Returns the body of the function as a string if
   * `returnBody` is true.
   */
  function compileTokens(tokens, returnBody) {
    var body = ['""'];
    var token, method, escape;

    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];

      switch (token.type) {
      case "#":
      case "^":
        method = (token.type === "#") ? "_section" : "_inverted";
        body.push("r." + method + "(" + quote(token.value) + ", c, function (c, r) {\n" +
          "  " + compileTokens(token.tokens, true) + "\n" +
          "})");
        break;
      case "{":
      case "&":
      case "name":
        escape = token.type === "name" ? "true" : "false";
        body.push("r._name(" + quote(token.value) + ", c, " + escape + ")");
        break;
      case ">":
        body.push("r._partial(" + quote(token.value) + ", c)");
        break;
      case "text":
        body.push(quote(token.value));
        break;
      }
    }

    // Convert to a string body.
    body = "return " + body.join(" + ") + ";";

    // Good for debugging.
    // console.log(body);

    if (returnBody) {
      return body;
    }

    // For great evil!
    return new Function("c, r", body);
  }

  function escapeTags(tags) {
    if (tags.length === 2) {
      return [
        new RegExp(escapeRe(tags[0]) + "\\s*"),
        new RegExp("\\s*" + escapeRe(tags[1]))
      ];
    }

    throw new Error("Invalid tags: " + tags.join(" "));
  }

  /**
   * Forms the given linear array of `tokens` into a nested tree structure
   * where tokens that represent a section have a "tokens" array property
   * that contains all tokens that are in that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];
    var token, section;

    for (var i = 0; i < tokens.length; ++i) {
      token = tokens[i];

      switch (token.type) {
      case "#":
      case "^":
        token.tokens = [];
        sections.push(token);
        collector.push(token);
        collector = token.tokens;
        break;
      case "/":
        if (sections.length === 0) {
          throw new Error("Unopened section: " + token.value);
        }

        section = sections.pop();

        if (section.value !== token.value) {
          throw new Error("Unclosed section: " + section.value);
        }

        if (sections.length > 0) {
          collector = sections[sections.length - 1].tokens;
        } else {
          collector = tree;
        }
        break;
      default:
        collector.push(token);
      }
    }

    // Make sure there were no open sections when we're done.
    section = sections.pop();

    if (section) {
      throw new Error("Unclosed section: " + section.value);
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var lastToken;

    for (var i = 0; i < tokens.length; ++i) {
      var token = tokens[i];

      if (lastToken && lastToken.type === "text" && token.type === "text") {
        lastToken.value += token.value;
        tokens.splice(i--, 1); // Remove this token from the array.
      } else {
        lastToken = token;
      }
    }
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  function parse(template, tags) {
    tags = tags || exports.tags;

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var tokens = [],      // Buffer to hold the tokens
        spaces = [],      // Indices of whitespace tokens on the current line
        hasTag = false,   // Is there a {{tag}} on the current line?
        nonSpace = false; // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    var stripSpace = function () {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          tokens.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    };

    var type, value, chr;

    while (!scanner.eos()) {
      value = scanner.scanUntil(tagRes[0]);

      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push({type: "text", value: chr});

          if (chr === "\n") {
            stripSpace(); // Check for whitespace on the current line.
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) {
        break;
      }

      hasTag = true;
      type = scanner.scan(tagRe) || "name";

      // Skip any whitespace between tag and value.
      scanner.scan(whiteRe);

      // Extract the tag value.
      if (type === "=") {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === "{") {
        var closeRe = new RegExp("\\s*" + escapeRe("}" + tags[1]));
        value = scanner.scanUntil(closeRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) {
        throw new Error("Unclosed tag at " + scanner.pos);
      }

      tokens.push({type: type, value: value});

      if (type === "name" || type === "{" || type === "&") {
        nonSpace = true;
      }

      // Set the tags for the next time around.
      if (type === "=") {
        tags = value.split(spaceRe);
        tagRes = escapeTags(tags);
      }
    }

    squashTokens(tokens);

    return nestTokens(tokens);
  }

  // The high-level clearCache, compile, compilePartial, and render functions
  // use this default renderer.
  var _renderer = new Renderer();

  /**
   * Clears all cached templates and partials.
   */
  function clearCache() {
    _renderer.clearCache();
  }

  /**
   * High-level API for compiling the given `tokens` down to a reusable
   * function. If `tokens` is a string it will be parsed using the given `tags`
   * before it is compiled.
   */
  function compile(tokens, tags) {
    return _renderer.compile(tokens, tags);
  }

  /**
   * High-level API for compiling the `tokens` for the partial with the given
   * `name` down to a reusable function. If `tokens` is a string it will be
   * parsed using the given `tags` before it is compiled.
   */
  function compilePartial(name, tokens, tags) {
    return _renderer.compilePartial(name, tokens, tags);
  }

  /**
   * High-level API for rendering the `template` using the given `view`. The
   * optional `partials` object may be given here for convenience, but note that
   * it will cause all partials to be re-compiled, thus hurting performance. Of
   * course, this only matters if you're going to render the same template more
   * than once. If so, it is best to call `compilePartial` before calling this
   * function and to leave the `partials` argument blank.
   */
  function render(template, view, partials) {
    if (partials) {
      for (var name in partials) {
        compilePartial(name, partials[name]);
      }
    }

    return _renderer.render(template, view);
  }

  return exports;

}()));

/**
 * @license RequireJS text 2.0.3 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false, location: false */

define('text',['module'], function (module) {
    

    var text, fs,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = [],
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.3',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var strip = false, index = name.indexOf("."),
                modName = name.substring(0, index),
                ext = name.substring(index + 1, name.length);

            index = ext.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = ext.substring(index + 1, ext.length);
                strip = strip === "strip";
                ext = ext.substring(0, index);
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName + '.' + parsed.ext,
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                nonStripName = parsed.moduleName + '.' + parsed.ext,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + '.' +
                                     parsed.ext) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node)) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback) {
            var file = fs.readFileSync(url, 'utf8');
            //Remove BOM (Byte Mark Order) from utf8 files if it is there.
            if (file.indexOf('\uFEFF') === 0) {
                file = file.substring(1);
            }
            callback(file);
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback) {
            var xhr = text.createXhr();
            xhr.open('GET', url, true);

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        errback(err);
                    } else {
                        callback(xhr.responseText);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                stringBuffer.append(line);

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    }

    return text;
});

define('text!templates/layout/header.html',[],function () { return '<header id="main" class="main">\r\n\t<div class="content shift">\r\n\t\t{{#backBtn}}\r\n\t\t\t<img src="img/btn_back.png" class="left" id="backBtn" alt="back" />\r\n\t\t{{/backBtn}}\r\n\r\n\t\t{{#refreshBtn}}\r\n\t\t<img src="img/btn_refresh.png" class="left" id="refreshBtn" alt="refresh" />\r\n\t\t{{/refreshBtn}}\r\n\r\n\t\t{{#settingsBtn}}\r\n\t\t<img src="img/btn_settings.png" class="right" id="settingsBtn" alt="settings" />\r\n\t\t{{/settingsBtn}}\r\n\r\n\t\t{{#validateBtn}}\r\n\t\t<img src="img/btn_validate.png" class="right" id="validateBtn" alt="validate" />\r\n\t\t{{/validateBtn}}\r\n\r\n\t\t{{#refreshRightBtn}}\r\n\t\t<img src="img/btn_refresh.png" class="right" id="refreshBtn" alt="refresh" />\r\n\t\t{{/refreshRightBtn}}\r\n\t\t<h1>GEEKIEST</h1>\r\n\t</div>\r\n</header>\r\n<div id="main-content">\r\n\t\r\n</div>';});

define('packages/CustomView',[
	'jquery',
	'backbone',
	'mustache',
	'text!templates/layout/header.html',

],
function($,
	Backbone,
	Mustache,
	HeaderTemplate
){
	return  Backbone.View.extend({
		el: '.app',
      	
        settingsBtn: true,
        refreshBtn: false,
        backBtn: true,
        validateBtn: false,
        refreshRightBtn: false,

      	initialize: function(opts)
        {
            $(this.el).undelegate('*', 'click');
            $(this.el).undelegate('#settingsBtn', 'click');
            $(this.el).undelegate('#refreshBtn', 'click');
            $(this.el).undelegate('#validateBtn', 'click');
            $(this.el).undelegate('#backBtn', 'click');
    		this.$el.html(Mustache.to_html(HeaderTemplate, {
                'settingsBtn': this.settingsBtn,
                'refreshBtn' : this.refreshBtn,
                'backBtn': this.backBtn,
                'validateBtn': this.validateBtn,
                'refreshRightBtn': this.refreshRightBtn
            }));
        }

        /*,

        /*events: {
            'click #backBtn': 'backBtnClick',
        },

        backBtnClick: function(e)
        {   
            e.preventDefault();
            this.router.back();
        }*/

	});
});

define('text!templates/home/home.html',[],function () { return '<header class="splashscreen">\r\n\t<div class="title">\r\n\t\t<h1>GEEKIEST</h1>\r\n\t\t<h2>culture - friends - war</h2>\r\n\t</div>\r\n\t<img src="img/splashscreen_bg.png" class="bg" />\r\n</header>\r\n\r\n<div class="shift">\r\n\t<a href="#" class="btn facebook">LOGIN WITH FACEBOOK</a>\r\n\t<a href="#" class="btn howto">HOW DO I PLAY ?</a>\r\n</div>\r\n\r\n<div class="copyright">COPYRIGHT  ©2013 THS</div>\r\n';});

define('views/home/home',[
		'backbone',
		"mustache",
		'packages/CustomView',
		'text!templates/home/home.html'
		],
function(
		Backbone,
		Mustache,
		CustomView,
        HomeTemplate
){
	return  Backbone.View.extend({
		el: '.app',

        initialize: function(opts)
        {
        	this.router = opts.router;

        	if(localStorage.getItem("userToken"))
        	{
        		this.router.navigate("dashboard", {trigger: true});
        		return;	 
        	}

        	var html = Mustache.to_html(HomeTemplate);
        	this.$el.html(html);
        },

        events: {
        	'click .facebook': 'facebookClick',
        	'click .howto': 'howtoClick',
        },

        facebookClick: function(e) {
        	e.preventDefault();

        	$('.facebook')
        		.addClass('refresh')
        		.html('<img src="img/btn_refresh.png" class="rotate btn_wait" />');

        	var self = this;
        	var datas;
		    FB.login(function(response){
		        if(response.authResponse){

	        	$.ajax({
					  type: "POST",
					  url: 'http://serene-forest-6114.herokuapp.com/users/login',
					  data: response,
					  success: function(response){
					  	var datas = JSON.parse(response);
					  	localStorage.setItem("userToken", datas.token);
					  	localStorage.setItem("userName", datas["name"]);
					  	localStorage.setItem('userAvatar', datas.avatar);
					  	localStorage.setItem('userId', datas.id);

					  	self.router.navigate("players/invit", {trigger: true});
					  }
					});

		        }
		      },{scope : 'email,read_friendlists,user_status'});
        },

        howtoClick: function(e) {	
        	e.preventDefault();
        	this.router.navigate("help", {trigger: true});
        },
	});
});
define('text!templates/home/help.html',[],function () { return 'HELLOW WORLD';});

define('views/home/help',[
		'backbone',
		"mustache",
		'packages/CustomView',
		'text!templates/home/help.html',

		],
function(
		Backbone,
		Mustache,
		CustomView,
		HowToTemplate
){
	return  CustomView.extend({

        initialize: function(opts)
        {
        	this.constructor.__super__.initialize.apply(this, opts);
        	if(this.events)
        	{
        		this.events = _.defaults(this.events, CustomView.prototype.events);
        	}
        	else
        	{
        		this.events = CustomView.prototype.events;
        	}

        	this.router = opts.router;
        },

        events: {
        },
	});
});
define('text!templates/home/transition.html',[],function () { return '<article id="transition" class="NoAnimate {{special}}">\r\n\t<h1 class="title">{{message}}</h1>\r\n\t<div class="vs">\r\n\t\t<article class="player left">\r\n\t\t\t<div class="card">\r\n\t\t\t\t<img  class="avatar" src="{{meAvatar}}" />\r\n\t\t\t\t<div class="data"></div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<span class="pseudo">Me</span>\r\n\t\t</article>\r\n\t\t\r\n\t\t<div class="vsLabel">VS</div>\r\n\r\n\t\t<article class="player right">\r\n\t\t\t<div class="card">\r\n\t\t\t\t<img  class="avatar" src="{{opAvatar}}" />\r\n\t\t\t\t<div class="data"></div>\r\n\t\t\t</div>\r\n\t\t\t<span class="pseudo">{{opPseudo}}</span>\r\n\t\t</article>\r\n\t</div>\r\n\t<article class="subtitle round">\r\n\t\t<span class="txt">ROUND</span>\r\n\t\t<br/>\r\n\t\t<span class="number">{{roundNumber}}</span>\r\n\t</article>\r\n</article>';});

define('views/home/transition',[
	'jquery',
	'backbone',
	'mustache',
	'text!templates/home/transition.html',

	],
function($,
	Backbone,
	Mustache,
	TransitionTemplate
	){
	return Backbone.View.extend({
		el: '.app',
        className: 'zerf',
        
        initialize : function(opts)
        {
        	this.router = opts.router;
            this.colorBg = opts.color;
            this.actionTarget = opts.actionTarget;
            this.param = opts.param;

    		this.render();
        },

        render: function()
        {
            var self = this;
        	var html = Mustache.to_html(TransitionTemplate, _.extend({
                    roundNumber : '1',
                    special : '' ,
                    message : "Your turn",

                    meAvatar : localStorage.getItem('userAvatar'),

                    opPseudo : "Chuck N.",
                    opAvatar : "http://s.plurielles.fr/mmdia/i/54/5/chuck-norris-2815545rlich_123.jpg?v=1"

                },
                database.transitionData

                
        	));

        	this.$el.html(html);

            setTimeout(function(){
              $('#transition').removeClass('NoAnimate');

              setTimeout(function(){
                 $('#transition').addClass('NoAnimate');
                 self.proceedAction();
              }, 2500);
            
            }, 100);

        
        },

        proceedAction: function()
        {
            var self = this;
            switch(database.transitionData.action)
            {
                case "create game":
                    var toVar = '';

                    if(!_.isUndefined(database.currentThing) && !_.isUndefined(database.currentThing.j1))
                    { 
                      toVar = (localStorage.getItem('userId') == database.currentThing.j1) ? database.currentThing.j2 : database.currentThing.j1
                    }
                    else
                    {
                      toVar = database.transitionData.opId;
                    }

                    $.ajax({
                      type: "POST",
                      url: 'http://serene-forest-6114.herokuapp.com/users/create_game',
                      data: {
                            from: localStorage.getItem('userId'),
                            to: toVar
                      },
                      success: function(response){
                        database.currentGame = response;
                        self.router.navigate("challenge/index", {trigger: true});
                      }
                    });
                break;

                case "answer game":
                   $.ajax({
                      type: "POST",
                      url: 'http://serene-forest-6114.herokuapp.com/users/start_game',
                      data: {
                            id: database.transitionData.opId
                      },
                      success: function(response){
                        eval('var ree = ' + response +';');
                        
                        database.currentThing = ree[0];
                        database.currentThing.start = ree[0].start_video;
                        database.currentThing.end = ree[0].end_video;
                        database.currentThing.picker = false;
                        
                        self.router.navigate("challenge/answer", {trigger: true});
                      }
                    });
                break;

                case "home":
                  $.ajax({
                        type: "POST",
                        url: 'http://serene-forest-6114.herokuapp.com/users/switch_game',
                        data: {
                              game_id: database.currentGame
                        },
                        success: function(){
                          self.router.navigate("dashboard", {trigger: true});
                        }
                      });

                break;
            }
        }
	});
});
define('text!templates/dashboard/index.html',[],function () { return '<article class="homeDashboard">\r\n\t<header class="infos shift">{{userName}}</header>\r\n\r\n  <header class="tiiitle">\r\n    <span class="hor_lign">\r\n      <span class="title">YOUR GAMES</span>\r\n    </span>\r\n  </header>\r\n  <ul id="gamesList" class="shift">\r\n\r\n  </ul>\r\n<div class="shift">\r\n\t<a href="#" class="btn facebook findFriend">FIND FRIENDS</a>\r\n</div>\r\n</article>\r\n';});

define('text!templates/dashboard/gameItem.html',[],function () { return '<div><img src="{{Avatar}}" class="left avatar" /> \r\n\r\n\r\n{{^isMaster}}\r\n\t<a href="#" class="btnList right  actionAnswer" >OK&#32;&#32;&#32;!</a>\r\n{{/isMaster}}\r\n\r\n{{#isMaster}}\r\n\t{{#isStatusTwo}}\r\n\t\t<img src="img/indic_wait.PNG" class="wait" />\r\n\t{{/isStatusTwo}}\r\n\t{{^isStatusTwo}}\r\n\t\t<a href="#" class="btnList right go actionInvitGo" >GO&#32;&#32;&#32;!</a>\r\n\t{{/isStatusTwo}}\r\n{{/isMaster}}\r\n\r\n\r\n<div class="text">\r\n\t<p class="name">{{Name}}</p>\r\n\t<p class="desc">\r\n\t\t{{^isMaster}}\r\n\t\t\thas challenged you !\r\n\t\t{{/isMaster}}\r\n\t\t{{#isMaster}}\r\n\t\t\tTurn {{counter}} - \r\n\t\t\t{{#isStatusTwo}}\r\n\t\t\t\t{{#isFemale}}Her{{/isFemale}}\r\n\t\t\t\t{{^isFemale}}His{{/isFemale}} \r\n\t\t\t{{/isStatusTwo}}\r\n\t\t\t{{^isStatusTwo}}\r\n\t\t\t\tYour\r\n\t\t\t{{/isStatusTwo}}\r\n\t\t\tturn\r\n\t\t{{/isMaster}}\r\n\t\t\r\n\t</p>\r\n</div>';});

define('models/User',[
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
define('views/dashboard/gameItem',[
		'backbone',
		"mustache",
		'text!templates/dashboard/gameItem.html',
		'models/User',

		],
function(
		Backbone,
		Mustache,
		UserInvitationItemTemplate,
		User
){
	return  Backbone.View.extend({
        tagName:'li',

        initialize: function()
        {
        },

        events: {
          'click .actionInvitGo' : 'actionClick',
          'click .actionAnswer' : 'answerCLick'
        },

        render: function() {
        	if(this.model instanceof Array)
        		return;
        	

        	var html = Mustache.to_html(UserInvitationItemTemplate, {
        		Name: this.model.get('u1'),
        		Avatar: this.model.get('g1'),
            counter: this.model.get('counter'),
            isMaster: (this.model.get('isMaster') == 1) ? true : false,
            isFemale: (this.model.get('gender') == 'female') ? true : false,
            isStatusTwo : (this.model.get('status') == 2) ? true : false
        	});  
        	
        	this.$el.html(html);

        	return this;
        },

        actionClick: function(e)
        {
          e.preventDefault();
          
          database.currentGame = this.model.get('id');
          database.transitionData = {
                roundNumber : this.model.get('counter'),
                special : '' ,
                message : "Your turn",

                meAvatar : localStorage.getItem('userAvatar') + "?width=" + 200 + "&height=" + 200,

                opPseudo : this.model.get('u1'),
                opAvatar : this.model.get('g1') + "?width=" + 200 + "&height=" + 200,

                opId : this.model.get('id'),

                action : "create game"

              }

          this.options.router.navigate("transition", {trigger: true});
        },  

        answerCLick: function(e)
        {
            e.preventDefault();

            database.currentGame = this.model.get('id');
            database.currentGameO = this.model;

            database.transitionData = {
                roundNumber : this.model.get('counter'),
                special : '' ,
                message : "Your turn",

                meAvatar : localStorage.getItem('userAvatar') + "?width=" + 200 + "&height=" + 200,

                opPseudo : this.model.get('u1'),
                opAvatar : this.model.get('g1') + "?width=" + 200 + "&height=" + 200,

                opId : this.model.get('id'),

                action : "answer game"

            }
            this.options.router.navigate("transition", {trigger: true});
        }
	});
});
define('models/game',[
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
           
        });
});
define('collections/games',[
  'underscore',
  'backbone',
  'models/game'
], function( _, Backbone, Game){
  return Backbone.Collection.extend({
    model: Game,

	url: function() {
		return "http://serene-forest-6114.herokuapp.com/users/home/"+localStorage.getItem('userId')
	},
  });
});
define('views/dashboard/index',[
    'backbone',
    'mustache',
    'text!templates/dashboard/index.html',
    'views/dashboard/gameItem',
    'collections/games',
    'packages/CustomView',

		],
function(
    Backbone,
    Mustache,
    DashboardTemplate,
    GameItemView,
    Games,
    CustomView
){
	return  CustomView.extend({

    refreshBtn: true,
    backBtn: false,

		el: '.app',

    initialize: function(opts)
    {
    	this.constructor.__super__.initialize.apply(this, opts);
    	if(this.events)
    	{
    		this.events = _.defaults(this.events, CustomView.prototype.events);
    	}
    	else
    	{
    		this.events = CustomView.prototype.events;
    	}

    	this.router = opts.router;

      this.render();

      this.games = new Games();

      this.fetchData();

	 },

   events: {
    'click .findFriend' : 'fiendFriencClick', 
    'click #refreshBtn' : 'fetchData' 
   },

  fetchData: function()
  {
      $("#refreshBtn").addClass('rotate');
      var self = this;
      this.games.fetch({
          error: function () {
          },
          success: function (e) {
              $("#refreshBtn").removeClass('rotate');
              self.renderGames();
          }    
      });
  },

   render: function()
   {
      var html = Mustache.to_html(DashboardTemplate, {
        userName: localStorage.getItem('userName')
      });

      $('#main-content').html(html);
   },

   renderGames: function()
   {
      var self = this, gameItem;
      $("#gamesList").html('');
      self.games.each(function(game, index, friends)
      {             
              gameItem = new GameItemView({
                    model: game,
                    collection: self.games,
                    router: self.router
              });

              $("#gamesList").append(gameItem.render().el);
      });
   },

   fiendFriencClick : function(e)
   {
      e.preventDefault();
      this.router.navigate("players/invit", {trigger: true});
   }

	});
});
define('collections/things',[
  'underscore',
  'backbone',
  'models/game'
], function( _, Backbone, Game){
  return Backbone.Collection.extend({
    model: Game,

	url: function() {
		return "http://serene-forest-6114.herokuapp.com/users/random_challenges"
	}
  });
});
define('text!templates/challenge/index.html',[],function () { return '<article class="randomChallenge">\r\n  <header class="tiiitle">\r\n    <span class="hor_lign">\r\n      <span class="title">SELECT A CHALLENGE</span>\r\n    </span>\r\n  </header>\r\n\r\n  <div class="challenges clear"></div>\r\n\r\n<header class="tiiitle">\r\n<span class="hor_lign">\r\n  <span class="title">OR</span>\r\n</span>\r\n</header>\r\n<div class="shift">\r\n\t<a href="#" class="btn green newChallenge">CREATE A NEW CHALLENGE</a>\r\n</div>\r\n</article>';});

define('text!templates/challenge/thingItem.html',[],function () { return '<div class="challenge {{type}}">\r\n\t<div class="cover" style="background-image: url(\'{{image}}\')">\r\n\t\t<img src="img/thing_{{type}}_icon.PNG" class="icon" />\r\n\t</div>\r\n\t<img class="backRb" src="img/thing_{{type}}_bruban.PNG" />\r\n\t<div class="frontRb" style="background-image: url(\'img/thing_{{type}}_fruban.PNG\')">{{name}}</div>\r\n</div>';});

define('models/Thing',[
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
           
        });
});
define('views/challenge/thingItem',[
		'backbone',
		"mustache",
		'text!templates/challenge/thingItem.html',
		'models/Thing',

		],
function(
		Backbone,
		Mustache,
		ThingItemTemplate,
		Thing
){
	return  Backbone.View.extend({
        tagName:'div',

        initialize: function()
        {
        },

        events: {
                'click .cover' : 'actionClick'
        },

        render: function() {
        	var html = Mustache.to_html(ThingItemTemplate, {
        		name: this.model.get('title'),
        		image: this.model.get('cover'),
        		type: this.model.get('type')
        	});
        	
        	this.$el.html(html);

        	return this;
        },

        actionClick: function(e)
        {
                e.preventDefault();
                database.currentMedia = this.model;
                this.options.router.navigate("challenge/send", {trigger: true});
        }  
	});
});
define('views/challenge/index',[
        'backbone',
        'mustache',
        'packages/CustomView',
        'collections/things',
        'text!templates/challenge/index.html',
        'views/challenge/thingItem'

        ],
function(
        Backbone,
        Mustache,
        CustomView,
        Things,
        RandomChallengeTemplate,
        ThingItemView
){
    return  CustomView.extend({

    refreshRightBtn: true,
    settingsBtn: false,

    el: '.app',

    initialize: function(opts)
    {
        this.constructor.__super__.initialize.apply(this, opts);
        if(this.events)
        {
            this.events = _.defaults(this.events, CustomView.prototype.events);
        }
        else
        {
            this.events = CustomView.prototype.events;
        }

        this.router = opts.router;

        this.things = new Things();
        this.render();

        this.fetchData();

     },

     render: function()
     {
        var html = Mustache.to_html(RandomChallengeTemplate, {});

        $('#main-content').html(html);
     },

     events: {
        'click #refreshBtn': 'fetchData',
        'click #backBtn': 'backBtnClick',
         'click .newChallenge': 'newChallenge'
     },

     backBtnClick: function() {
        this.router.navigate("dashboard", {trigger: true});
     },

    fetchData: function()
      {
          $("#refreshBtn").addClass('rotate');
          var self = this;
          this.things.reset();
          this.things.fetch({
              error: function () {
              },
              success: function (e) {
                  $("#refreshBtn").removeClass('rotate');
                  self.renderThings();
              }    
          });
      },

    renderThings: function()
    {
      var self = this, thingItem;
      $(".challenges").empty();
      self.things.each(function(thing, index, things)
      {             
              thingItem = new ThingItemView({
                    model: thing,
                    collection: self.things,
                    router: self.router
              });

              $(".challenges").append(thingItem.render().el);
      });
    },

    newChallenge : function(e)
    {
        e.preventDefault();
        this.options.router.navigate("challenge/new", {trigger: true});
    }

    });
});
define('text!templates/challenge/new.html',[],function () { return '<article class="newCustomChallenge">\r\n  <header class="tiiitle">\r\n    <span class="hor_lign">\r\n      <span class="title"> SELECT A TYPE </span>\r\n    </span>\r\n  </header>\r\n\r\n  <div class="types">\r\n\t  <div class="type movies" data-type="movie">\r\n\t  \t<img src="img/type_movies.PNG" class="icon"/>\r\n\t  \t<p>movie</p>\r\n\t  </div>\r\n\r\n\t  <div class="type tvshows" data-type="tvshow">\r\n\t  \t<img src="img/type_tvshows.PNG" class="icon"/>\r\n\t  \t<p>tv shows</p>\r\n\t  </div>\r\n\r\n\t  <div class="type videogames" data-type="videogame">\r\n\t  \t<img src="img/type_videogames.PNG" class="icon"/>\r\n\t  \t<p>video games</p>\r\n\t  </div>\r\n\r\n\t  <div class="type comics" data-type="comic">\r\n\t  \t<img src="img/type_comics.PNG" class="icon"/>\r\n\t  \t<p>comics</p>\r\n\t  </div>\r\n\t</div>\r\n\r\n</article>';});

define('views/challenge/new',[
        'backbone',
        'mustache',
        'packages/CustomView',
        'text!templates/challenge/new.html'

        ],
function(
        Backbone,
        Mustache,
        CustomView,
        NewCustomChallengeTemplate
){
    return  CustomView.extend({

    el: '.app',

    initialize: function(opts)
    {
        this.constructor.__super__.initialize.apply(this, opts);
        if(this.events)
        {
            this.events = _.defaults(this.events, CustomView.prototype.events);
        }
        else
        {
            this.events = CustomView.prototype.events;
        }

        this.router = opts.router;

        this.render();

     },

    events : {
      "click .type" : "selectType"
    },

     render: function()
     {
         var html = Mustache.to_html(NewCustomChallengeTemplate, {});
         $('#main-content').html(html);
     },

    selectType : function(e)
    {
        e.preventDefault();
        var type = $(e.currentTarget).data('type');
        this.router.navigate("challenge/new/"+type, {trigger: true});
    }

    });
});
define('text!templates/challenge/new/selectPlaylist.html',[],function () { return '<article class="selectPlaylist">\r\n     <header class="title shift {{type}}">\r\n        <img src="img/type_{{type}}s.PNG" class="icon" />\r\n       <span class="title">{{title}}</span>\r\n     </header>\r\n    <div class="tiiitle">\r\n        <span class="hor_lign">\r\n          <span class="title"> SELECT A PLAYLIST </span>\r\n        </span>\r\n    </div>\r\n    <ul id="playlistsList" class="shift"></ul>\r\n </article>';});

define('text!templates/challenge/new/playlistItem.html',[],function () { return '<div class="text">{{name}}</div>';});

define('models/Playlist',[
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

        });
});
define('views/challenge/new/playlistItem',[
    'backbone',
    "mustache",
    'text!templates/challenge/new/playlistItem.html',
    'models/Playlist',

],
    function(
        Backbone,
        Mustache,
        PlaylistItemTemplate,
        Playlist
        ){
        return  Backbone.View.extend({
            tagName:'li',

            initialize: function(opts)
            {
                this.router = opts.router;
                this.type = opts.type;
            },

            events: {
                'click' : 'selectItem'
            },

            render: function() {
                var html = Mustache.to_html(PlaylistItemTemplate, {
                    name: this.model.get('name')
                });

                this.$el.html(html);

                return this;
            },

            selectItem: function(e)
            {
                e.preventDefault();

                database["currentPlaylistName"] = this.model.get('name');

                this.router.navigate("challenge/new/playlist/"
                    +this.type
                    +"/"
                    +this.model.get('id')
                    , {trigger: true});
            }
        });
    });
define('models/playlist',[
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

        });
});
define('collections/playlists',[
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
define('views/challenge/new/selectPlaylist',[
    'backbone',
    "mustache",
    'packages/CustomView',
    'text!templates/challenge/new/selectPlaylist.html',
    'views/challenge/new/playlistItem',
    'collections/playlists'

],
    function(
        Backbone,
        Mustache,
        CustomView,
        SelectPlaylistTemplate,
        PlaylistItemView,
        Playlists
        ){
        return  CustomView.extend({

            initialize: function(opts)
            {
                this.constructor.__super__.initialize.apply(this, opts);
                if(this.events)
                {
                    this.events = _.defaults(this.events, CustomView.prototype.events);
                }
                else
                {
                    this.events = CustomView.prototype.events;
                }

                this.router = opts.router;
                this.type = opts.type;

                this.playlists = new Playlists(this.type);

                var self = this;
                this.playlists.fetch({

                    success: function (e) {
                        self.renderPlaylists();
                    }
                });

                this.render();
            },

            events: {
            },

            render: function()
            {
                var typeName = "";
                switch(this.type)
                {
                    case "movie":
                        typeName = "movies";
                        break;
                    case "tvshow":
                        typeName = "tv shows";
                        break;
                    case "videogame":
                        typeName = "video games";
                        break;
                    case "comic":
                        typeName = "comics";
                        break;
                }

                var html = Mustache.to_html(SelectPlaylistTemplate, {
                    type: this.type,
                    title: typeName
                });
                $('#main-content').html(html);
            },

            renderPlaylists: function()
            {
                var self = this, playlistItem;
                $("#playlistsList").html('');
                self.playlists.each(function(playlist, index, playlists)
                {
                    gameItem = new PlaylistItemView({
                        model: playlist,
                        type: self.type,
                        collection: self.playlists,
                        router: self.router
                    });

                    $("#playlistsList").append(gameItem.render().el);
                });
            }
        });
    });
define('text!templates/challenge/new/selectMedia.html',[],function () { return '<article class="selectMedia" >\r\n    <div class="cover" style="background-image: url(\'{{cover}}\')"></div>\r\n    <header class="title shift {{type}}">\r\n        <span class="title">{{title}}</span>\r\n    </header>\r\n    <ul id="mediatItemsList" class="shift"></ul>\r\n    <div class="clear"></div>\r\n</article>';});

define('models/media',[
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

        });
});
define('collections/youtube',[
    'underscore',
    'backbone',
    'models/media'
], function( _, Backbone, Media){
    return Backbone.Collection.extend({
        model: Media,

        url: function() {
            return "https://gdata.youtube.com/feeds/api/videos?v=2&callback=?&alt=jsonc&q=" + this.queryName + "&max-results=" + this.queryLimit;
        },

        initialize: function(queryName, queryLimit, forceTrailer)
        {
            this.queryName = queryName + (forceTrailer ? " trailer" : "");
            this.queryLimit = queryLimit;
        },

        parse: function(response) {
            var data = response.data.items;
            var contents = [], content;

            if(data)
            {
                for(var i in data)
                {
                    content = {};
                    content.host = this.title;
                    content.type = this.type;
                    content.title = (data[i].title || '');
                    content.description = (data[i].description || '');
                    content.duration = data[i].duration;
                    content.thumbnail = data[i].thumbnail.hqDefault;
                    content.externalId = data[i].id;
                    content.publicationDate = new Date(data[i].uploaded);
                    content.url = data[i].player['default'];
                    content.viewCount = data[i].viewCount;

                    contents.push(content);
                }
            }
            return contents;
        }
    });
});
define('text!templates/challenge/new/mediaItem.html',[],function () { return '<article class="media clear">\r\n    <img src="{{cover}}" class="left cover">\r\n    <div class="info">\r\n        <h2>{{title}}</h2>\r\n        <p class="data">{{duration}}      -      {{viewCount}} Views</p>\r\n    </div>\r\n</article>';});

define('models/Media',[
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

        });
});
define('views/challenge/new/mediaItem',[
    'backbone',
    "mustache",
    'text!templates/challenge/new/mediaItem.html',
    'models/Media',
    'models/Thing',
],
    function(
        Backbone,
        Mustache,
        MediaItemTemplate,
        Media,
        Thing
        ){
        return  Backbone.View.extend({
            tagName:'li',

            initialize: function(opts)
            {
                this.router = opts.router;
                this.type = opts.type;
            },

            events: {
                'click' : 'selectMedia'
            },

            render: function() {
                var html = Mustache.to_html(MediaItemTemplate, {
                    cover: this.model.get('thumbnail'),
                    title: this.model.get('title'),
                    description: this.model.get('description'),
                    duration: this.formatDuration(this.model.get('duration')),
                    viewCount: this.formatViewContent(this.model.get('viewCount'))
                });

                this.$el.html(html);

                return this;
            },

            formatDuration: function( value ){
                var minutes = Math.floor( value / 60 );
                var seconds = ( value - minutes*60 );
                return (minutes < 10 ? "0"+minutes : minutes)
                    + "     :     "
                    + ( seconds < 10 ? "0"+seconds : seconds);
            },

            formatViewContent: function (x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " , ");
            },

            selectMedia: function(e)
            {
                e.preventDefault();

                database.currentMedia = new Thing({
                    id: "TODO",
                    start: 0,
                    end: 10,
                    youtube_id: this.model.get('externalId'),
                    youtube_length: this.model.get('duration')
                })

                this.options.router.navigate("challenge/send", {trigger: true});
            }
        });
    });
define('views/challenge/new/selectMedia',[
    'backbone',
    "mustache",
    'packages/CustomView',
    'text!templates/challenge/new/selectMedia.html',
    'collections/youtube',
    'views/challenge/new/mediaItem'
],
    function(
        Backbone,
        Mustache,
        CustomView,
        SelectMediaTemplate,
        YoutubeItems,
        MediaItemView
        ){
        return  CustomView.extend({

            initialize: function(opts)
            {
                this.constructor.__super__.initialize.apply(this, opts);
                if(this.events)
                {
                    this.events = _.defaults(this.events, CustomView.prototype.events);
                }
                else
                {
                    this.events = CustomView.prototype.events;
                }

                this.router = opts.router;
                this.type = opts.type;
                this.id = opts.id;
                this.model = database.currentThing;

                this.videos = new YoutubeItems(this.model.title,10,true);

                var self = this;
                this.videos.fetch({
                    success: function (e) {
                        self.renderMedias();
                    }
                });
                this.render();
            },

            events: {
            },

            render: function()
            {
                var html = Mustache.to_html(SelectMediaTemplate, {
                    type: this.type,
                    title: database["currentThing"].title,
                    cover: database["currentThing"].cover
                });
                $('#main-content').html(html);
            },

            renderMedias: function()
            {
                var self = this, videoItem;
                $("#mediatItemsList").html('');
                self.videos.each(function(video, index, medias)
                {
                    videoItem = new MediaItemView({
                        model: video,
                        type: self.type,
                        collection: self.things,
                        router: self.router
                    });

                    $("#mediatItemsList").append(videoItem.render().el);
                });
            }
        });
    });
define('text!templates/challenge/new/selectThing.html',[],function () { return '<article class="selectThing">\r\n    <header class="title shift {{type}}">\r\n        <span class="title">{{title}}</span>\r\n    </header>\r\n    <ul id="playlistItemsList"></ul>\r\n    <div class="clear"></div>\r\n</article>';});

define('models/thing',[
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
           
        });
});
define('collections/playlistItems',[
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
define('text!templates/challenge/new/thingItem.html',[],function () { return '<div class="dummy"></div>\r\n<div class="content" style="background-image: url(\'{{posterUrl}}\')"></div>';});

define('views/challenge/new/thingItem',[
    'backbone',
    "mustache",
    'text!templates/challenge/new/thingItem.html',
    'models/Thing',

],
    function(
        Backbone,
        Mustache,
        ThingItemTemplate,
        Thing
        ){
        return  Backbone.View.extend({
            tagName:'li',

            initialize: function(opts)
            {
                this.router = opts.router;
                this.type = opts.type;
            },

            events: {
                'click' : 'selectThing'
            },

            render: function() {
                var html = Mustache.to_html(ThingItemTemplate, {
                    posterUrl : this.model.get('cover')
                });

                this.$el.html(html);

                return this;
            },

            selectThing: function(e)
            {
                e.preventDefault();
                database["currentThing"] = this.model.toJSON();
                this.router.navigate("challenge/new/thing/"
                    +this.type
                    +"/"
                    +this.model.get('id')
                    , {trigger: true});
            }
        });
    });
define('views/challenge/new/selectThing',[
    'backbone',
    "mustache",
    'packages/CustomView',
    'text!templates/challenge/new/selectThing.html',
    'collections/playlistItems',
    'views/challenge/new/thingItem'
],
    function(
        Backbone,
        Mustache,
        CustomView,
        SelectThingTemplate,
        Things,
        ThingItemView
        ){
        return  CustomView.extend({

            initialize: function(opts)
            {
                this.constructor.__super__.initialize.apply(this, opts);
                if(this.events)
                {
                    this.events = _.defaults(this.events, CustomView.prototype.events);
                }
                else
                {
                    this.events = CustomView.prototype.events;
                }

                this.router = opts.router;
                this.type = opts.type;
                this.id = opts.id;

                this.things = new Things(this.id);

                var self = this;
                this.things.fetch({

                    success: function (e) {
                        self.renderThings();
                    }
                });
                this.render();
            },

            events: {
            },

            render: function()
            {
                var html = Mustache.to_html(SelectThingTemplate, {
                    type: this.type,
                    title: database["currentPlaylistName"]
                });
                $('#main-content').html(html);
            },

            renderThings: function()
            {
                var self = this, thingItem;
                $("#playlistsList").html('');
                self.things.each(function(thing, index, things)
                {
                    thingItem = new ThingItemView({
                        model: thing,
                        type: self.type,
                        collection: self.things,
                        router: self.router
                    });

                    $("#playlistItemsList").append(thingItem.render().el);
                });
            }
        });
    });
define('text!templates/challenge/mechanism/youtube.html',[],function () { return '\r\n\r\n  \r\n  <div id="player-wrapper">\r\n    <div class="playpausebtn"></div>\r\n    <div class="overlay"></div> \r\n    <div id="player"></div> \r\n  </div>\r\n\r\n  {{#picker}}\r\n  <div class="videoPickerWrapper">\r\n    <input id="videoPicker" type="slider" class="hide" name="area" value="{{start}};{{end}}" />\r\n  </div>\r\n  {{/picker}}\r\n</article>\r\n';});

var Hashtable=function(){function n(t){var r;if(typeof t=="string")return t;if(typeof t.hashCode==e)return r=t.hashCode(),typeof r=="string"?r:n(r);if(typeof t.toString==e)return t.toString();try{return String(t)}catch(i){return Object.prototype.toString.call(t)}}function r(e,t){return e.equals(t)}function i(t,n){return typeof n.equals==e?n.equals(t):t===n}function s(e){return function(t){if(t===null)throw new Error("null is not a valid "+e);if(typeof t=="undefined")throw new Error(e+" must not be undefined")}}function a(e,t,n,r){this[0]=e,this.entries=[],this.addEntry(t,n),r!==null&&(this.getEqualityFunction=function(){return r})}function h(e){return function(t){var n=this.entries.length,r,i=this.getEqualityFunction(t);while(n--){r=this.entries[n];if(i(t,r[0]))switch(e){case f:return!0;case l:return r;case c:return[n,r[1]]}}return!1}}function p(e){return function(t){var n=t.length;for(var r=0,i=this.entries.length;r<i;++r)t[n+r]=this.entries[r][e]}}function d(e,t){var n=e.length,r;while(n--){r=e[n];if(t===r[0])return n}return null}function v(e,t){var n=e[t];return n&&n instanceof a?n:null}function m(r,i){var s=this,f=[],l={},c=typeof r==e?r:n,h=typeof i==e?i:null;this.put=function(e,t){o(e),u(t);var n=c(e),r,i,s=null;return r=v(l,n),r?(i=r.getEntryForKey(e),i?(s=i[1],i[1]=t):r.addEntry(e,t)):(r=new a(n,e,t,h),f[f.length]=r,l[n]=r),s},this.get=function(e){o(e);var t=c(e),n=v(l,t);if(n){var r=n.getEntryForKey(e);if(r)return r[1]}return null},this.containsKey=function(e){o(e);var t=c(e),n=v(l,t);return n?n.containsKey(e):!1},this.containsValue=function(e){u(e);var t=f.length;while(t--)if(f[t].containsValue(e))return!0;return!1},this.clear=function(){f.length=0,l={}},this.isEmpty=function(){return!f.length};var p=function(e){return function(){var t=[],n=f.length;while(n--)f[n][e](t);return t}};this.keys=p("keys"),this.values=p("values"),this.entries=p("getEntries"),this.remove=function(e){o(e);var n=c(e),r,i=null,s=v(l,n);return s&&(i=s.removeEntryForKey(e),i!==null&&(s.entries.length||(r=d(f,n),t(f,r),delete l[n]))),i},this.size=function(){var e=0,t=f.length;while(t--)e+=f[t].entries.length;return e},this.each=function(e){var t=s.entries(),n=t.length,r;while(n--)r=t[n],e(r[0],r[1])},this.putAll=function(t,n){var r=t.entries(),i,o,u,a,f=r.length,l=typeof n==e;while(f--)i=r[f],o=i[0],u=i[1],l&&(a=s.get(o))&&(u=n(o,a,u)),s.put(o,u)},this.clone=function(){var e=new m(r,i);return e.putAll(s),e}}var e="function",t=typeof Array.prototype.splice==e?function(e,t){e.splice(t,1)}:function(e,t){var n,r,i;if(t===e.length-1)e.length=t;else{n=e.slice(t+1),e.length=t;for(r=0,i=n.length;r<i;++r)e[t+r]=n[r]}},o=s("key"),u=s("value"),f=0,l=1,c=2;return a.prototype={getEqualityFunction:function(t){return typeof t.equals==e?r:i},getEntryForKey:h(l),getEntryAndIndexForKey:h(c),removeEntryForKey:function(e){var n=this.getEntryAndIndexForKey(e);return n?(t(this.entries,n[0]),n[1]):null},addEntry:function(e,t){this.entries[this.entries.length]=[e,t]},keys:p(0),values:p(1),getEntries:function(e){var t=e.length;for(var n=0,r=this.entries.length;n<r;++n)e[t+n]=this.entries[n].slice(0)},containsKey:h(f),containsValue:function(e){var t=this.entries.length;while(t--)if(e===this.entries[t][1])return!0;return!1}},m}();(function(e){function a(e,t,n){this.dec=e,this.group=t,this.neg=n}function f(){for(var e=0;e<u.length;e++){localeGroup=u[e];for(var n=0;n<localeGroup.length;n++)t.put(localeGroup[n],e)}}function l(e,n){t.size()==0&&f();var r=".",i=",",s="-";n==0&&(e.indexOf("_")!=-1?e=e.split("_")[1].toLowerCase():e.indexOf("-")!=-1&&(e=e.split("-")[1].toLowerCase()));var u=t.get(e);if(u){var l=o[u];l&&(r=l[0],i=l[1])}return new a(r,i,s)}var t=new Hashtable,n=["ae","au","ca","cn","eg","gb","hk","il","in","jp","sk","th","tw","us"],r=["at","br","de","dk","es","gr","it","nl","pt","tr","vn"],i=["cz","fi","fr","ru","se","pl"],s=["ch"],o=[[".",","],[",","."],[","," "],[".","'"]],u=[n,r,i,s];e.fn.formatNumber=function(t,n,r){return this.each(function(){n==null&&(n=!0),r==null&&(r=!0);var i;e(this).is(":input")?i=new String(e(this).val()):i=new String(e(this).text());var s=e.formatNumber(i,t);n&&(e(this).is(":input")?e(this).val(s):e(this).text(s));if(r)return s})},e.formatNumber=function(t,n){var n=e.extend({},e.fn.formatNumber.defaults,n),r=l(n.locale.toLowerCase(),n.isFullLocale),i=r.dec,s=r.group,o=r.neg,u="0#-,.",a="",f=!1;for(var c=0;c<n.format.length;c++){if(u.indexOf(n.format.charAt(c))!=-1){if(c==0&&n.format.charAt(c)=="-"){f=!0;continue}break}a+=n.format.charAt(c)}var h="";for(var c=n.format.length-1;c>=0;c--){if(u.indexOf(n.format.charAt(c))!=-1)break;h=n.format.charAt(c)+h}n.format=n.format.substring(a.length),n.format=n.format.substring(0,n.format.length-h.length);var p=new Number(t);return e._formatNumber(p,n,h,a,f)},e._formatNumber=function(t,n,r,i,s){var n=e.extend({},e.fn.formatNumber.defaults,n),o=l(n.locale.toLowerCase(),n.isFullLocale),u=o.dec,a=o.group,f=o.neg,c=!1;if(isNaN(t)){if(n.nanForceZero!=1)return null;t=0,c=!0}r=="%"&&(t*=100);var h="";if(n.format.indexOf(".")>-1){var p=u,d=n.format.substring(n.format.lastIndexOf(".")+1);if(n.round==1)t=new Number(t.toFixed(d.length));else{var v=t.toString();v=v.substring(0,v.lastIndexOf(".")+d.length+1),t=new Number(v)}var m=t%1,g=new String(m.toFixed(d.length));g=g.substring(g.lastIndexOf(".")+1);for(var y=0;y<d.length;y++){if(d.charAt(y)=="#"&&g.charAt(y)!="0"){p+=g.charAt(y);continue}if(d.charAt(y)=="#"&&g.charAt(y)=="0"){var b=g.substring(y);if(b.match("[1-9]")){p+=g.charAt(y);continue}break}d.charAt(y)=="0"&&(p+=g.charAt(y))}h+=p}else t=Math.round(t);var w=Math.floor(t);t<0&&(w=Math.ceil(t));var E="";n.format.indexOf(".")==-1?E=n.format:E=n.format.substring(0,n.format.indexOf("."));var S="";if(w!=0||E.substr(E.length-1)!="#"||c){var x=new String(Math.abs(w)),T=9999;E.lastIndexOf(",")!=-1&&(T=E.length-E.lastIndexOf(",")-1);var N=0;for(var y=x.length-1;y>-1;y--)S=x.charAt(y)+S,N++,N==T&&y!=0&&(S=a+S,N=0);if(E.length>S.length){var C=E.indexOf("0");if(C!=-1){var k=E.length-C,L=E.length-S.length-1;while(S.length<k){var A=E.charAt(L);A==","&&(A=a),S=A+S,L--}}}}return!S&&E.indexOf("0",E.length-1)!==-1&&(S="0"),h=S+h,t<0&&s&&i.length>0?i=f+i:t<0&&(h=f+h),n.decimalSeparatorAlwaysShown||h.lastIndexOf(u)==h.length-1&&(h=h.substring(0,h.length-1)),h=i+h+r,h},e.fn.parseNumber=function(t,n,r){n==null&&(n=!0),r==null&&(r=!0);var i;e(this).is(":input")?i=new String(e(this).val()):i=new String(e(this).text());var s=e.parseNumber(i,t);if(s){n&&(e(this).is(":input")?e(this).val(s.toString()):e(this).text(s.toString()));if(r)return s}},e.parseNumber=function(t,n){var n=e.extend({},e.fn.parseNumber.defaults,n),r=l(n.locale.toLowerCase(),n.isFullLocale),i=r.dec,s=r.group,o=r.neg,u="1234567890.-";while(t.indexOf(s)>-1)t=t.replace(s,"");t=t.replace(i,".").replace(o,"-");var a="",f=!1;if(t.charAt(t.length-1)=="%"||n.isPercentage==1)f=!0;for(var c=0;c<t.length;c++)u.indexOf(t.charAt(c))>-1&&(a+=t.charAt(c));var h=new Number(a);if(f){h/=100;var p=a.indexOf(".");if(p!=-1){var d=a.length-p-1;h=h.toFixed(d+2)}else h=h.toFixed(a.length-1)}return h},e.fn.parseNumber.defaults={locale:"us",decimalSeparatorAlwaysShown:!1,isPercentage:!1,isFullLocale:!1},e.fn.formatNumber.defaults={format:"#,###.00",locale:"us",decimalSeparatorAlwaysShown:!1,nanForceZero:!0,round:!0,isFullLocale:!1},Number.prototype.toFixed=function(t){return e._roundNumber(this,t)},e._roundNumber=function(e,t){var n=Math.pow(10,t||0),r=String(Math.round(e*n)/n);if(t>0){var i=r.indexOf(".");i==-1?(r+=".",i=0):i=r.length-(i+1);while(i<t)r+="0",i++}return r}})(jQuery),function(){var e={};this.tmpl=function t(n,r){var i=/\W/.test(n)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):e[n]=e[n]||t(document.getElementById(n).innerHTML);return r?i(r):i}}(),function(e){e.baseClass=function(t){return t=e(t),t.get(0).className.match(/([^ ]+)/)[1]},e.fn.addDependClass=function(t,n){var r={delimiter:n?n:"-"};return this.each(function(){var n=e.baseClass(this);n&&e(this).addClass(n+r.delimiter+t)})},e.fn.removeDependClass=function(t,n){var r={delimiter:n?n:"-"};return this.each(function(){var n=e.baseClass(this);n&&e(this).removeClass(n+r.delimiter+t)})},e.fn.toggleDependClass=function(t,n){var r={delimiter:n?n:"-"};return this.each(function(){var n=e.baseClass(this);n&&(e(this).is("."+n+r.delimiter+t)?e(this).removeClass(n+r.delimiter+t):e(this).addClass(n+r.delimiter+t))})}}(jQuery),function(e){function t(){this._init.apply(this,arguments)}t.prototype.oninit=function(){},t.prototype.events=function(){},t.prototype.onmousedown=function(){this.ptr.css({position:"absolute"})},t.prototype.onmousemove=function(e,t,n){this.ptr.css({left:t,top:n})},t.prototype.onmouseup=function(){},t.prototype.isDefault={drag:!1,clicked:!1,toclick:!0,mouseup:!1},t.prototype._init=function(){if(arguments.length>0){this.ptr=e(arguments[0]),this.outer=e(".draggable-outer"),this.is={},e.extend(this.is,this.isDefault);var t=this.ptr.offset();this.d={left:t.left,top:t.top,width:this.ptr.width(),height:this.ptr.height()},this.oninit.apply(this,arguments),this._events()}},t.prototype._getPageCoords=function(e){return e.targetTouches&&e.targetTouches[0]?{x:e.targetTouches[0].pageX,y:e.targetTouches[0].pageY}:{x:e.pageX,y:e.pageY}},t.prototype._bindEvent=function(e,t,n){var r=this;this.supportTouches_?e.get(0).addEventListener(this.events_[t],n,!1):e.bind(this.events_[t],n)},t.prototype._events=function(){var t=this;this.supportTouches_=e.browser.webkit&&navigator.userAgent.indexOf("Mobile")!=-1,this.events_={click:this.supportTouches_?"touchstart":"click",down:this.supportTouches_?"touchstart":"mousedown",move:this.supportTouches_?"touchmove":"mousemove",up:this.supportTouches_?"touchend":"mouseup"},this._bindEvent(e(document),"move",function(e){t.is.drag&&(e.stopPropagation(),e.preventDefault(),t._mousemove(e))}),this._bindEvent(e(document),"down",function(e){t.is.drag&&(e.stopPropagation(),e.preventDefault())}),this._bindEvent(e(document),"up",function(e){t._mouseup(e)}),this._bindEvent(this.ptr,"down",function(e){return t._mousedown(e),!1}),this._bindEvent(this.ptr,"up",function(e){t._mouseup(e)}),this.ptr.find("a").click(function(){t.is.clicked=!0;if(!t.is.toclick)return t.is.toclick=!0,!1}).mousedown(function(e){return t._mousedown(e),!1}),this.events()},t.prototype._mousedown=function(t){this.is.drag=!0,this.is.clicked=!1,this.is.mouseup=!1;var n=this.ptr.offset(),r=this._getPageCoords(t);this.cx=r.x-n.left,this.cy=r.y-n.top,e.extend(this.d,{left:n.left,top:n.top,width:this.ptr.width(),height:this.ptr.height()}),this.outer&&this.outer.get(0)&&this.outer.css({height:Math.max(this.outer.height(),e(document.body).height()),overflow:"hidden"}),this.onmousedown(t)},t.prototype._mousemove=function(e){this.is.toclick=!1;var t=this._getPageCoords(e);this.onmousemove(e,t.x-this.cx,t.y-this.cy)},t.prototype._mouseup=function(t){var n=this;this.is.drag&&(this.is.drag=!1,this.outer&&this.outer.get(0)&&(e.browser.mozilla?this.outer.css({overflow:"hidden"}):this.outer.css({overflow:"visible"}),e.browser.msie&&e.browser.version=="6.0"?this.outer.css({height:"100%"}):this.outer.css({height:"auto"})),this.onmouseup(t))},window.Draggable=t}(jQuery),function(e){function t(e){return typeof e=="undefined"?!1:e instanceof Array||!(e instanceof Object)&&Object.prototype.toString.call(e)=="[object Array]"||typeof e.length=="number"&&typeof e.splice!="undefined"&&typeof e.propertyIsEnumerable!="undefined"&&!e.propertyIsEnumerable("splice")?!0:!1}function r(){return this.init.apply(this,arguments)}function i(){Draggable.apply(this,arguments)}e.slider=function(t,n){var i=e(t);return i.data("jslider")||i.data("jslider",new r(t,n)),i.data("jslider")},e.fn.slider=function(n,r){function o(e){return e!==undefined}function u(e){return e!=null}var i,s=arguments;return this.each(function(){var a=e.slider(this,n);if(typeof n=="string")switch(n){case"value":if(o(s[1])&&o(s[2])){var f=a.getPointers();u(f[0])&&u(s[1])&&(f[0].set(s[1]),f[0].setIndexOver()),u(f[1])&&u(s[2])&&(f[1].set(s[2]),f[1].setIndexOver())}else if(o(s[1])){var f=a.getPointers();u(f[0])&&u(s[1])&&(f[0].set(s[1]),f[0].setIndexOver())}else i=a.getValue();break;case"prc":if(o(s[1])&&o(s[2])){var f=a.getPointers();u(f[0])&&u(s[1])&&(f[0]._set(s[1]),f[0].setIndexOver()),u(f[1])&&u(s[2])&&(f[1]._set(s[2]),f[1].setIndexOver())}else if(o(s[1])){var f=a.getPointers();u(f[0])&&u(s[1])&&(f[0]._set(s[1]),f[0].setIndexOver())}else i=a.getPrcValue();break;case"calculatedValue":var l=a.getValue().split(";");i="";for(var c=0;c<l.length;c++)i+=(c>0?";":"")+a.nice(l[c]);break;case"skin":a.setSkin(s[1])}else!n&&!r&&(t(i)||(i=[]),i.push(a))}),t(i)&&i.length==1&&(i=i[0]),i||this};var n={settings:{from:1,to:10,step:1,smooth:!0,limits:!0,round:0,format:{format:"#,##0.##"},value:"5;7",dimension:""},className:"jslider",selector:".jslider-",template:tmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"></i><i class="f"></i><i class="r"></i><i class="v"></i><i class="currentpos"></i></div><div class="<%=className%>-pointer"></div><div class="<%=className%>-pointer <%=className%>-pointer-to"></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div><div class="<%=className%>-value"><span></span><%=settings.dimension%></div><div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')};r.prototype.init=function(t,r){this.settings=e.extend(!0,{},n.settings,r?r:{}),this.inputNode=e(t).hide(),this.settings.interval=this.settings.to-this.settings.from,this.settings.value=this.inputNode.attr("value"),this.settings.calculate&&e.isFunction(this.settings.calculate)&&(this.nice=this.settings.calculate),this.settings.onstatechange&&e.isFunction(this.settings.onstatechange)&&(this.onstatechange=this.settings.onstatechange),this.is={init:!1},this.o={},this.create()},r.prototype.onstatechange=function(){},r.prototype.create=function(){var t=this;this.domNode=e(n.template({className:n.className,settings:{from:this.nice(this.settings.from),to:this.nice(this.settings.to),dimension:this.settings.dimension},scale:this.generateScale()})),this.inputNode.after(this.domNode),this.drawScale(),this.settings.skin&&this.settings.skin.length>0&&this.setSkin(this.settings.skin),this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},e.extend(this.o,{pointers:{},labels:{0:{o:this.domNode.find(n.selector+"value").not(n.selector+"value-to")},1:{o:this.domNode.find(n.selector+"value").filter(n.selector+"value-to")}},limits:{0:this.domNode.find(n.selector+"label").not(n.selector+"label-to"),1:this.domNode.find(n.selector+"label").filter(n.selector+"label-to")}}),e.extend(this.o.labels[0],{value:this.o.labels[0].o.find("span")}),e.extend(this.o.labels[1],{value:this.o.labels[1].o.find("span")}),t.settings.value.split(";")[1]||(this.settings.single=!0,this.domNode.addDependClass("single")),t.settings.limits||this.domNode.addDependClass("limitless"),this.domNode.find(n.selector+"pointer").each(function(e){var n=t.settings.value.split(";")[e];if(n){t.o.pointers[e]=new i(this,e,t);var r=t.settings.value.split(";")[e-1];r&&new Number(n)<new Number(r)&&(n=r),n=n<t.settings.from?t.settings.from:n,n=n>t.settings.to?t.settings.to:n,t.o.pointers[e].set(n,!0)}}),this.o.value=this.domNode.find(".v"),this.is.init=!0,e.each(this.o.pointers,function(e){t.redraw(this)}),function(t){e(window).resize(function(){t.onresize()})}(this)},r.prototype.setSkin=function(e){this.skin_&&this.domNode.removeDependClass(this.skin_,"_"),this.domNode.addDependClass(this.skin_=e,"_")},r.prototype.setPointersIndex=function(t){e.each(this.getPointers(),function(e){this.index(e)})},r.prototype.getPointers=function(){return this.o.pointers},r.prototype.generateScale=function(){if(this.settings.scale&&this.settings.scale.length>0){var e="",t=this.settings.scale,n=Math.round(100/(t.length-1)*10)/10;for(var r=0;r<t.length;r++)e+='<span style="left: '+r*n+'%">'+(t[r]!="|"?"<ins>"+t[r]+"</ins>":"")+"</span>";return e}return""},r.prototype.drawScale=function(){this.domNode.find(n.selector+"scale span ins").each(function(){e(this).css({marginLeft:-e(this).outerWidth()/2})})},r.prototype.onresize=function(){var t=this;this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},e.each(this.o.pointers,function(e){t.redraw(this)})},r.prototype.update=function(){this.onresize(),this.drawScale()},r.prototype.limits=function(e,t){if(!this.settings.smooth){var n=this.settings.step*100/this.settings.interval;e=Math.round(e/n)*n}var r=this.o.pointers[1-t.uid];return r&&t.uid&&e<r.value.prc&&(e=r.value.prc),r&&!t.uid&&e>r.value.prc&&(e=r.value.prc),e<0&&(e=0),e>100&&(e=100),Math.round(e*10)/10},r.prototype.redraw=function(e){if(!this.is.init)return!1;this.setValue(),this.o.pointers[0]&&this.o.pointers[1]&&this.o.value.css({left:parseInt(this.o.pointers[0].value.prc+1)+"%",width:this.o.pointers[1].value.prc-this.o.pointers[0].value.prc+"%"}),this.o.labels[e.uid].value.html(this.nice(e.value.origin)),this.redrawLabels(e)},r.prototype.redrawLabels=function(e){function t(e,t,r){return t.margin=-t.label/2,label_left=t.border+t.margin,label_left<0&&(t.margin-=label_left),t.border+t.label/2>n.sizes.domWidth?(t.margin=0,t.right=!0):t.right=!1,e.o.css({left:r+"%",marginLeft:t.margin,right:"auto"}),t.right&&e.o.css({left:"auto",right:0}),t}var n=this,r=this.o.labels[e.uid],i=e.value.prc,s={label:r.o.outerWidth(),right:!1,border:i*this.sizes.domWidth/100};if(!this.settings.single){var o=this.o.pointers[1-e.uid],u=this.o.labels[o.uid];switch(e.uid){case 0:s.border+s.label/2>u.o.offset().left-this.sizes.domOffset.left?(u.o.css({visibility:"hidden"}),u.value.html(this.nice(o.value.origin)),r.o.css({visibility:"visible"}),i=(o.value.prc-i)/2+i,o.value.prc!=e.value.prc&&(r.value.html(this.nice(e.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(o.value.origin)),s.label=r.o.outerWidth(),s.border=i*this.sizes.domWidth/100)):u.o.css({visibility:"visible"});break;case 1:s.border-s.label/2<u.o.offset().left-this.sizes.domOffset.left+u.o.outerWidth()?(u.o.css({visibility:"hidden"}),u.value.html(this.nice(o.value.origin)),r.o.css({visibility:"visible"}),i=(i-o.value.prc)/2+o.value.prc,o.value.prc!=e.value.prc&&(r.value.html(this.nice(o.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(e.value.origin)),s.label=r.o.outerWidth(),s.border=i*this.sizes.domWidth/100)):u.o.css({visibility:"visible"})}}s=t(r,s,i);if(u){var s={label:u.o.outerWidth(),right:!1,border:o.value.prc*this.sizes.domWidth/100};s=t(u,s,o.value.prc)}this.redrawLimits()},r.prototype.redrawLimits=function(){if(this.settings.limits){var e=[!0,!0];for(key in this.o.pointers)if(!this.settings.single||key==0){var t=this.o.pointers[key],n=this.o.labels[t.uid],r=n.o.offset().left-this.sizes.domOffset.left,i=this.o.limits[0];r<i.outerWidth()&&(e[0]=!1);var i=this.o.limits[1];r+n.o.outerWidth()>this.sizes.domWidth-i.outerWidth()&&(e[1]=!1)}for(var s=0;s<e.length;s++)e[s]?this.o.limits[s].fadeIn("fast"):this.o.limits[s].fadeOut("fast")}},r.prototype.setValue=function(){var e=this.getValue();this.inputNode.attr("value",e),this.onstatechange.call(this,e)},r.prototype.getValue=function(){if(!this.is.init)return!1;var t=this,n="";return e.each(this.o.pointers,function(e){this.value.prc!=undefined&&!isNaN(this.value.prc)&&(n+=(e>0?";":"")+t.prcToValue(this.value.prc))}),n},r.prototype.getPrcValue=function(){if(!this.is.init)return!1;var t=this,n="";return e.each(this.o.pointers,function(e){this.value.prc!=undefined&&!isNaN(this.value.prc)&&(n+=(e>0?";":"")+this.value.prc)}),n},r.prototype.prcToValue=function(e){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0){var t=this.settings.heterogeneity,n=0,r=this.settings.from;for(var i=0;i<=t.length;i++){if(t[i])var s=t[i].split("/");else var s=[100,this.settings.to];s[0]=new Number(s[0]),s[1]=new Number(s[1]);if(e>=n&&e<=s[0])var o=r+(e-n)*(s[1]-r)/(s[0]-n);n=s[0],r=s[1]}}else var o=this.settings.from+e*this.settings.interval/100;return this.round(o)},r.prototype.valueToPrc=function(e,t){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0){var n=this.settings.heterogeneity,r=0,i=this.settings.from;for(var s=0;s<=n.length;s++){if(n[s])var o=n[s].split("/");else var o=[100,this.settings.to];o[0]=new Number(o[0]),o[1]=new Number(o[1]);if(e>=i&&e<=o[1])var u=t.limits(r+(e-i)*(o[0]-r)/(o[1]-i));r=o[0],i=o[1]}}else var u=t.limits((e-this.settings.from)*100/this.settings.interval);return u},r.prototype.round=function(e){return e=Math.round(e/this.settings.step)*this.settings.step,this.settings.round?e=Math.round(e*Math.pow(10,this.settings.round))/Math.pow(10,this.settings.round):e=Math.round(e),e},r.prototype.nice=function(t){return t=t.toString().replace(/,/gi,".").replace(/ /gi,""),e.formatNumber?e.formatNumber(new Number(t),this.settings.format||{}).replace(/-/gi,"&minus;"):new Number(t)},i.prototype=new Draggable,i.prototype.oninit=function(e,t,n){this.uid=t,this.parent=n,this.value={},this.settings=this.parent.settings},i.prototype.onmousedown=function(e){this._parent={offset:this.parent.domNode.offset(),width:this.parent.domNode.width()},this.ptr.addDependClass("hover"),this.setIndexOver()},i.prototype.onmousemove=function(e,t){var n=this._getPageCoords(e);this._set(this.calc(n.x))},i.prototype.onmouseup=function(t){this.parent.settings.callback&&e.isFunction(this.parent.settings.callback)&&this.parent.settings.callback.call(this.parent,this.parent.getValue()),this.ptr.removeDependClass("hover")},i.prototype.setIndexOver=function(){this.parent.setPointersIndex(1),this.index(2)},i.prototype.index=function(e){this.ptr.css({zIndex:e})},i.prototype.limits=function(e){return this.parent.limits(e,this)},i.prototype.calc=function(e){var t=this.limits((e-this._parent.offset.left)*100/this._parent.width);return t},i.prototype.set=function(e,t){this.value.origin=this.parent.round(e),this._set(this.parent.valueToPrc(e,this),t)},i.prototype._set=function(e,t){t||(this.value.origin=this.parent.prcToValue(e)),this.value.prc=e,this.ptr.css({left:e+"%"}),this.parent.redraw(this)}}(jQuery);
define("libs/jquery.slider.min", function(){});

define('views/challenge/mechanism/youtube',[
	'jquery',
	'backbone',
	'mustache',
	'text!templates/challenge/mechanism/youtube.html',
	'libs/jquery.slider.min',

	],
function($,
	Backbone,
	Mustache,
	YoutubeplayerTemplate
	){
	return Backbone.View.extend({
		tagName: 'div',

		isPlaying: false,
		intervalTimer: null,

		startPicker: 0,
		endPicker: 0,
		newCurrentPos: 0,
		isChanging: false,
		isInit: -2,
        player: null,
        
        initialize : function()
        {
            this.startPicker = this.model.start;
            this.newCurrentPos = this.model.start;
            this.endPicker = this.model.end;
        },

        events: {
        	'click .playpausebtn' : 'playPauseBtnClick',
        	'click .overlay' : 'playPauseBtnClick'
        },

        render: function()
        {
        	var html = Mustache.to_html(YoutubeplayerTemplate, _.extend(
                this.model,
                {
                    start: this.startPicker,
                    end: this.endPicker
                })
            );

			this.$el.html(html);
        	return this;
        },

        initPlayer: function()
        {
            var self = this;

            //Load the youtube player
            //See https://developers.google.com/youtube/js_api_reference
            this.player = new YT.Player('player', {
                height: '230px',
                videoId: this.model.youtube_id,
                playerVars: { 
                  'autoplay': 0, 
                  'autohide': 1,
                  'showinfo': 0 ,
                  'showsearch ': 0,
                  'iv_load_policy' : 3,
                  'start': this.model.start
                },

                events: {
                    'onReady': function()
                    {
                        //Load the double time picker
                        $("#videoPicker").slider({
                            from: 0,
                            to: parseInt(self.model.youtube_length),
                            step: 1,
                            dimension: '',
                            limits: false,
                            calculate: function( value ){
                                var minutes = Math.floor( value / 60 );
                                var seconds = ( value - minutes*60 );
                                return (minutes < 10 ? "0"+minutes : minutes)
                                    + "     :     "
                                    + ( seconds < 10 ? "0"+seconds : seconds);
                            },
                            onstatechange: function( value ){
                                self.updatePickersPos(value);
                            }
                        });

                        var pCt = (self.model.start / self.model.youtube_length * 100);
                        $('.currentpos').css('left', pCt+"%");
                    }
                }
            });
        },

        playPauseBtnClick: function()
        {
        	if(this.isPlaying)
        	{
        		this.player.pauseVideo();
        		$('.playpausebtn').removeClass('play');
        		this.isPlaying = false;
                this.unsetIntervalTimer();
        	}
        	else
        	{
        		this.player.playVideo();
        		$('.playpausebtn').addClass('play');
        		this.isPlaying = true;
                this.setIntervalTimer();
        	}
        },

        setIntervalTimer: function()
        {
            var self = this;
            this.intervalTimer = setInterval(function(){
                if(!self.isChanging)
                {
                    self.updateCursorPos(self.player.getCurrentTime());
                }
            },1);
        },

        unsetIntervalTimer: function()
        {
            clearInterval(this.intervalTimer);
        },

        updateCursorPos: function(currentTime)
        {
            var pCt;
            if(currentTime > this.endPicker || currentTime < this.startPicker)
            {
                this.player.seekTo(this.startPicker);
            }

            if(currentTime > this.endPicker)
            {
                pCt = (this.endPicker / this.model.youtube_length * 100);
            }
            else if(currentTime < this.startPicker)
            {
                pCt = (this.startPicker / this.model.youtube_length * 100);
            }
            else
            {
                pCt = (currentTime / this.model.youtube_length * 100);
            }

            $('.currentpos').css('left', pCt+"%");
        },

        updatePickersPos: function(value)
        {
        	var dataSplit = value.split(";");
    		this.startPicker = dataSplit[0];
    		this.endPicker = dataSplit[1];

    		var currentTime = this.player.getCurrentTime();
    		
            if(currentTime == this.newCurrentPos)
            {
                return;
            }

            this.isChanging = true;

            this.newCurrentPos = currentTime;

    		if(currentTime<this.startPicker)
    		{
    			this.newCurrentPos = this.startPicker;
    		}
    		else if(currentTime>this.endPicker)
    		{
    			this.newCurrentPos = this.endPicker;
    		}

            this.currentPos = this.newCurrentPos;

            this.isChanging = false;

		    if(this.isInit < 0)
		    {
                this.isInit++;
                return;
		    }
            else if(!(this.currentPos > this.startPicker) && !(this.currentPos < this.endPicker) )
            {
               this.setIntervalTimer();
            }
        }
	});
});
define('text!templates/challenge/send.html',[],function () { return '<article id="videoPlayer">\r\n  <header>\r\n    <span class="hor_lign">\r\n      <span class="title"> SELECT A CLIP  </span>\r\n    </span>\r\n  </header>\r\n</article>\r\n\r\n<div class="shift sendChallenge ">\r\n\t<div class="clear">\r\n\t\t<div class="left avatar">\r\n\t\t\t<img src="{{userAvatar}}?type=normal" />\r\n\t\t\t<p class="pseudo center">me</p>\r\n\t\t</div>\r\n\t\t<div class="comment">\r\n\t\t\t<textarea rows="6" class="form">qzedssd</textarea>\r\n\t\t</div>\r\n\t</div>\r\n<br/><br/><br/><br/><br/><br/><br/><br/><br/>\r\n<a href="#" class="btn sendchallAAA">CHALLENGE</a>\r\n</div>';});

define('views/challenge/send',[
	'jquery',
	'backbone',
	'mustache',
	'packages/CustomView',
	'views/challenge/mechanism/youtube',
	'text!templates/challenge/send.html',
	'libs/jquery.slider.min',

	],
function($,
	Backbone,
	Mustache,
	CustomView,
	YoutubePlayerView,
	SendChallengeTemplate
	){
	return CustomView.extend({
		el: '.app',
        
        backBtn: true,
        settingsBtn: true,

        initialize : function(opts)
        {
        	this.constructor.__super__.initialize.apply(this, opts);
        	if(this.events)
        	{
        		this.events = _.defaults(this.events, CustomView.prototype.events);
        	}
        	else
        	{
        		this.events = CustomView.prototype.events;
        	}

        	this.router = opts.router;

            //eval('this.model = ' + localStorage.getItem("currentThing"));

            this.model = database.currentMedia;

    		this.render();


        },

        events : {
            'click .sendchallAAA' : 'sendChallenge',
            'click #backBtn': 'backBtnClick',
            'click .avatar': 'fakeClick'
        },

        fakeClick: function()
        {
            this.backBtnClick();
        },

        backBtnClick: function() {
            this.mediaPlayer.unsetIntervalTimer();
            this.mediaPlayer.undelegateEvents();
            this.router.navigate("challenge/index", {trigger: true});
         },

        render: function()
        {
        	this.mediaPlayer = new YoutubePlayerView({
        		model: _.extend( this.model.toJSON(),
                {
					"picker": true,
					"height": "230px"
        		})
        	});

        	var html = Mustache.to_html(SendChallengeTemplate, {
                'userAvatar' : localStorage.getItem('userAvatar')
            });

        	$('#main-content').html(html);

        	$("#videoPlayer").append( this.mediaPlayer.render().el);
        	this.mediaPlayer.initPlayer();
        },

        sendChallenge : function(e)
        {
            e.preventDefault();

            var self = this;

            $.ajax({
                  type: "POST",
                  url: 'http://serene-forest-6114.herokuapp.com/users/send_challenge',
                  data: {
                    thing_id: self.model['id'],
                    start_video: self.mediaPlayer.startPicker,
                    end_video: self.mediaPlayer.endPicker,
                    message: $('.form').val(),
                    game_id: database.currentGame

                  },
                  success: function(response){
                        self.router.navigate("dashboard", {trigger: true});
                  }
            });
        }
	});
});
define('text!templates/challenge/answer.html',[],function () { return '<article id="videoPlayer">\r\n  <header>\r\n    <span class="hor_lign">\r\n      <span class="title"> FIND THE ANSWER  </span>\r\n    </span>\r\n  </header>\r\n</article>\r\n\r\n<div class="shift sendChallenge ">\r\n<br/><br/>\r\n<input type="text" class="answer" />\r\n<a href="#" class="btn sendchall">ANSWER</a>\r\n</div>';});

/**
 * Autotab - jQuery plugin 1.1b
 * http://www.lousyllama.com/sandbox/jquery-autotab
 * 
 * Copyright (c) 2008 Matthew Miller
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 * 
 * Revised: 2008-09-10 16:55:08
 */

(function($) {
// Look for an element based on ID or name
var check_element = function(name) {
	var obj = null;
	var check_id = $('#' + name);
	var check_name = $('input[name=' + name + ']');

	if(check_id.length)
		obj = check_id;
	else if(check_name != undefined)
		obj = check_name;

	return obj;
};

/**
 * autotab_magic automatically establishes autotabbing with the
 * next and previous elements as provided by :input.
 * 
 * autotab_magic should called after applying filters, if used.
 * If any filters are applied after calling autotab_magic, then
 * Autotab may not protect against brute force typing.
 * 
 * @name	autotab_magic
 * @param	focus	Applies focus on the specified element
 * @example	$(':input').autotab_magic();
 */
$.fn.autotab_magic = function(focus) {
	for(var i = 0; i < this.length; i++)
	{
		var n = i + 1;
		var p = i - 1;

		if(i > 0 && n < this.length)
			$(this[i]).autotab({ target: $(this[n]), previous: $(this[p]) });
		else if(i > 0)
			$(this[i]).autotab({ previous: $(this[p]) });
		else
			$(this[i]).autotab({ target: $(this[n]) });

		// Set the focus on the specified element
		if(focus != null && (isNaN(focus) && focus == $(this[i]).attr('id')) || (!isNaN(focus) && focus == i))
			$(this[i]).focus();
	}
	return this;
};

/**
 * This will take any of the text that is typed and
 * format it according to the options specified.
 * 
 * Option values:
 *	format		text|number|alphanumeric|all|custom
 *	- Text			Allows all characters except numbers
 *	- Number		Allows only numbers
 *	- Alphanumeric	Allows only letters and numbers
 *	- All			Allows any and all characters
 *	- Custom		Allows developer to provide their own filter
 *
 *	uppercase	true|false
 *	- Converts a string to UPPERCASE
 * 
 *	lowercase	true|false
 *	- Converts a string to lowecase
 * 
 *	nospace		true|false
 *	- Remove spaces in the user input
 * 
 *	pattern		null|(regular expression)
 *	- Custom regular expression for the filter
 * 
 * @name	autotab_filter
 * @param	options		Can be a string, function or a list of options. If a string or
 *						function is passed, it will be assumed to be a format option.
 * @example	$('#number1, #number2, #number3').autotab_filter('number');
 * @example	$('#product_key').autotab_filter({ format: 'alphanumeric', nospace: true });
 * @example	$('#unique_id').autotab_filter({ format: 'custom', pattern: '[^0-9\.]' });
 */
$.fn.autotab_filter = function(options) {
	var defaults = {
		format: 'all',
		uppercase: false,
		lowercase: false,
		nospace: false,
		pattern: null
	};

	if(typeof options == 'string' || typeof options == 'function')
		defaults.format = options;
	else
		$.extend(defaults, options);

	for(var i = 0; i < this.length; i++)
	{
		$(this[i]).bind('keyup', function(e) {
			var val = this.value;

			switch(defaults.format)
			{
				case 'text':
					var pattern = new RegExp('[0-9]+', 'g');
					val = val.replace(pattern, '');
					break;

				case 'alpha':
					var pattern = new RegExp('[^a-zA-Z]+', 'g');
					val = val.replace(pattern, '');
					break;

				case 'number':
				case 'numeric':
					var pattern = new RegExp('[^0-9]+', 'g');
					val = val.replace(pattern, '');
					break;

				case 'alphanumeric':
					var pattern = new RegExp('[^0-9a-zA-Z]+', 'g');
					val = val.replace(pattern, '');
					break;

				case 'custom':
					var pattern = new RegExp(defaults.pattern, 'g');
					val = val.replace(pattern, '');
					break;

				case 'all':
				default:
					if(typeof defaults.format == 'function')
						var val = defaults.format(val);

					break;
			}

			if(defaults.nospace)
			{
				var pattern = new RegExp('[ ]+', 'g');
				val = val.replace(pattern, '');
			}

			if(defaults.uppercase)
				val = val.toUpperCase();

			if(defaults.lowercase)
				val = val.toLowerCase();

			if(val != this.value)
				this.value = val;
		});
	}
};

/**
 * Provides the autotabbing mechanism for the supplied element and passes
 * any formatting options to autotab_filter.
 * 
 * Refer to autotab_filter's description for a detailed explanation of
 * the options available.
 * 
 * @name	autotab
 * @param	options
 * @example	$('#phone').autotab({ format: 'number' });
 * @example	$('#username').autotab({ format: 'alphanumeric', target: 'password' });
 * @example	$('#password').autotab({ previous: 'username', target: 'confirm' });
 */
$.fn.autotab = function(options) {
	var defaults = {
		format: 'all',
		maxlength: 2147483647,
		uppercase: false,
		lowercase: false,
		nospace: false,
		target: null,
		previous: null,
		pattern: null
	};

	$.extend(defaults, options);

	// Sets targets to element based on the name or ID
	// passed if they are not currently objects
	if(typeof defaults.target == 'string')
		defaults.target = check_element(defaults.target);

	if(typeof defaults.previous == 'string')
		defaults.previous = check_element(defaults.previous);

	var maxlength = $(this).attr('maxlength');

	// defaults.maxlength has not changed and maxlength was specified
	if(defaults.maxlength == 2147483647 && maxlength != 2147483647)
		defaults.maxlength = maxlength;
	// defaults.maxlength overrides maxlength
	else if(defaults.maxlength > 0)
		$(this).attr('maxlength', defaults.maxlength)
	// defaults.maxlength and maxlength have not been specified
	// A target cannot be used since there is no defined maxlength
	else
		defaults.target = null;

	if(defaults.format != 'all')
		$(this).autotab_filter(defaults);

	// Go to the previous element when backspace
	// is pressed in an empty input field
	return $(this).bind('keydown', function(e) {
		if(e.which == 8 && this.value.length == 0 && defaults.previous)
			defaults.previous.focus().val(defaults.previous.val());
	}).bind('keyup', function(e) {
		/**
		 * Do not auto tab when the following keys are pressed
		 * 8:	Backspace
		 * 9:	Tab
		 * 16:	Shift
		 * 17:	Ctrl
		 * 18:	Alt
		 * 19:	Pause Break
		 * 20:	Caps Lock
		 * 27:	Esc
		 * 33:	Page Up
		 * 34:	Page Down
		 * 35:	End
		 * 36:	Home
		 * 37:	Left Arrow
		 * 38:	Up Arrow
		 * 39:	Right Arrow
		 * 40:	Down Arrow
		 * 45:	Insert
		 * 46:	Delete
		 * 144:	Num Lock
		 * 145:	Scroll Lock
		 */
		var keys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

		if(e.which != 8)
		{
			var val = $(this).val();

			if($.inArray(e.which, keys) == -1 && val.length == defaults.maxlength && defaults.target)
				defaults.target.focus();
		}
	});
};

})(jQuery);
define("libs/jquery.autotab", ["jquery"], (function (global) {
    return function () {
        return global.$.fn.autotab_magic;
    }
}(this)));

define('views/challenge/answer',[
  'jquery',
  'backbone',
  'mustache',
  'packages/CustomView',
  'views/challenge/mechanism/youtube',
  'text!templates/challenge/answer.html',
  'libs/jquery.autotab',
  ],
function($,
  Backbone,
  Mustache,
  CustomView,
  YoutubePlayerView,
  AnswerTemplate
  ){
  return CustomView.extend({
    el: '.app',
        
        backBtn: true,
        settingsBtn: true,

        initialize : function(opts)
        {
          this.constructor.__super__.initialize.apply(this, opts);
          if(this.events)
          {
            this.events = _.defaults(this.events, CustomView.prototype.events);
          }
          else
          {
            this.events = CustomView.prototype.events;
          }

          this.router = opts.router;
          this.model = database.currentThing;

          this.render();
        },

        events : {
            'click .sendchall' : 'sendChallenge'
        },

        render: function()
        {
          this.model.picker = false;
          this.mediaPlayer = new YoutubePlayerView({ model : this.model });



          var html = Mustache.to_html(AnswerTemplate, {
                'userAvatar' : localStorage.getItem('userAvatar')
            });

          $('#main-content').html(html);

          $("#videoPlayer").append( this.mediaPlayer.render().el);

          //this.mediaPlayer.initPicker();
        },

        sendChallenge : function(e)
        {
            e.preventDefault();

            var self = this;
            $.ajax({
                  type: "POST",
                  url: 'http://serene-forest-6114.herokuapp.com/users/game',
                  data: {
                    message: $('.answer').val(),
                    game_id: database.currentGame
                  },
                  success: function(response){

                    var oA = database.transitionData.opAvatar, oP = database.transitionData.opPseudo;

                    if(response == 0)
                    {
                        database.transitionData = {
                            roundNumber : self.model.counter,
                            special : 'red' ,
                            message : "You Loose  !",
                            meAvatar : localStorage.getItem('userAvatar') + "?width=" + 200 + "&height=" + 200,
                            opPseudo : oP,
                            opAvatar : oA,
                            action : "home"
                        }
                    }
                    else
                    {
                        database.transitionData = {
                            roundNumber : self.model.counter,
                            special : 'green' ,
                            message : "You Win  !",
                            meAvatar : localStorage.getItem('userAvatar') + "?width=" + 200 + "&height=" + 200,
                            opPseudo : oP,
                            opAvatar : oA,
                            action : "home"
                        }
                    }

                    self.router.navigate("transition", {replace: true});
                   
                  }
            });
        }
  });
});
define('text!templates/players/invit.html',[],function () { return '<article class="invitFriends">\r\n  <header>\r\n    <span class="hor_lign">\r\n      <span class="title"> INVIT YOUR FB FRIENDS </span>\r\n    </span>\r\n  </header>\r\n  <ul id="usersList" class="shift">\r\n\r\n  </ul>\r\n</article>\r\n';});

define('models/user',[
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
define('collections/friends',[
  'underscore',
  'backbone',
  'models/user'
], function( _, Backbone, User){
  return Backbone.Collection.extend({
    model: User,

	url: function() {
		return "http://serene-forest-6114.herokuapp.com/users/friends/"+localStorage.getItem('userToken')
	},
  });
});
define('text!templates/players/userInvitationItem.html',[],function () { return '<div><img src="{{Avatar}}" class="left avatar" /> \r\n\r\n<a href="#" class="btnList right {{#isActive}}go{{/isActive}} actionInvitGo" >\r\n\t{{#isActive}}GO&#32;&#32;&#32;!{{/isActive}}\r\n\t{{^isActive}}INVIT{{/isActive}}\r\n</a>\r\n\r\n<div class="text">\r\n\t<p class="name">{{Name}} </p>\r\n\t<p class="desc">\r\n\t\t{{#isActive}}\r\n\t\t\tReady to beat {{#isFemale}}her{{/isFemale}}{{^isFemale}}him{{/isFemale}} ?\r\n\t\t{{/isActive}}\r\n\t\t{{^isActive}}\r\n\t\t\tChallenge {{#isFemale}}her{{/isFemale}}{{^isFemale}}him{{/isFemale}}, if you dare ! \r\n\t\t{{/isActive}}\r\n\t</p>\r\n</div>';});

define('views/players/userInvitationItem',[
		'backbone',
		"mustache",
		'text!templates/players/userInvitationItem.html',
		'models/User',

		],
function(
		Backbone,
		Mustache,
		UserInvitationItemTemplate,
		User
){
	return  Backbone.View.extend({
        tagName:'li',

        initialize: function()
        {

        },

        events: {
          'click .actionInvitGo' : 'actionClick'
        },

        render: function() {
        	if(this.model instanceof Array)
        		return;
        	
        	var html = Mustache.to_html(UserInvitationItemTemplate, {
        		Name: this.model.get('name'),
        		Avatar: this.model.get('avatar'),
                        isActive: (this.model.get('isActive') == 1) ? true : false,
                        isFemale: (this.model.get('gender') == 'female') ? true : false
        	});
        	
        	this.$el.html(html);

        	return this;
        },

        actionClick: function(e)
        {
                e.preventDefault();
                if(this.$('.btnList ').hasClass('go'))
                {
                  database.transitionData = {
                    roundNumber : '1',
                    special : '' ,
                    message : "Your turn",

                    meAvatar : localStorage.getItem('userAvatar')+ "?width=" + 200 + "&height=" + 200,

                    opPseudo : this.model.get('name'),
                    opAvatar : this.model.getAvatar(200,200),
                    opId : this.model.get('id'),

                    action : "create game"

                  }

                  this.options.router.navigate("transition", {replace: true});

                  return;
                }
                else
                {
                  var self = this;
                  FB.ui({method: 'apprequests',
                      message: 'My Great Request',
                      to: this.model.get('id')
                    }, function(){
                          $.ajax({
                            type: "POST",
                            url: 'http://serene-forest-6114.herokuapp.com/users/invit',
                            data : {
                                  from: localStorage.getItem('userId'),
                                  to: self.model.get('id')
                            },
                            success: function(response){
                                 self.$el.fadeOut();
                            }
                          });                        
                    });

                }

                
        }
        
	});
});
define('views/players/invit',[
		'backbone',
		"mustache",
		'packages/CustomView',
		'text!templates/players/invit.html',
        'collections/friends',
        'views/players/userInvitationItem'
		],
function(
		Backbone,
		Mustache,
		CustomView,
		InvitTemplate,
        Friends,
        UserInvitationItemView
){
	return  CustomView.extend({

        refreshBtn: true,
        backBtn: false,
        settingsBtn: false,
        validateBtn: true,

        initialize: function(opts)
        {
        	this.constructor.__super__.initialize.apply(this, opts);
        	if(this.events)
        	{
        		this.events = _.defaults(this.events, CustomView.prototype.events);
        	}
        	else
        	{
        		this.events = CustomView.prototype.events;
        	}

        	this.router = opts.router;

            var html = Mustache.to_html(InvitTemplate,{});

            $('#main-content').html(html);

            this.friends = new Friends();
            this.fetchData();
        },

        events: {
            'click #refreshBtn': 'refreshClick',
            'click #validateBtn': 'validateClick',
        },

        fetchData: function()
        {
            $("#refreshBtn").addClass('rotate');
            var self = this;
            this.friends.fetch({
                error: function () {
                },
                success: function () {
                    $("#refreshBtn").removeClass('rotate');
                    self.render();
                }    
            });
        },

        render: function()
        {
                var self = this, friendItem;
                $("#usersList").html('');
                self.friends.each(function(friend, index, friends)
                {             
                        friendItem = new UserInvitationItemView({
                                model: friend,
                                router: self.router,
                                collection: self.friends
                        });

                        $("#usersList").append(friendItem.render().el);
                });
        },

        refreshClick: function(e)
        {
            this.fetchData();
        },

        validateClick: function(e)
        {
            this.undelegateEvents();
            this.router.navigate("dashboard", {trigger: true});
        }
	});
});
define('routers/mainRouter',[
	'backbone',
	'underscore',
	'packages/options',
	'packages/AppRouter',

	'views/home/home',
	'views/home/help',
    'views/home/transition',

    'views/dashboard/index',

    'views/challenge/index',
    'views/challenge/new',
    'views/challenge/new/selectPlaylist',
    'views/challenge/new/selectMedia',
    'views/challenge/new/selectThing',
    'views/challenge/send',
    'views/challenge/answer',

    'views/players/invit',
],
function(Backbone,
         _,
         appOptions,
         AppRouter,

         HomePageView,
         HelpPageView,
         TransitionPageView,

         DashboardPageView,

         IndexChallengePageView,
         NewChallengePageView,
         SelectPlaylistChallengePageView,
         SelectMediaChallengePageView,
         SelectThingChallengePageView,
         SendChallengePageView,
         AnswerPageView,

         InvitPlayersPageView
         )
{
return Backbone.Router.extend(
{
    initialize: function()
    {
        Backbone.history.start({
            root: "./",
            pushState: false
        });
    },

    routes:
    {
        //Home
        '' : 'homePage',
        'help' : 'helpPage',
        'transition' : 'transitionPage',

        //Dashboard
        'dashboard' : 'dashboardPage',

        //Challenge
        'challenge/index' : 'indexChallengePage',
        'challenge/new' : 'newChallengePage',
        'challenge/new/playlist/:type/:id' : 'selectThingChallengePage',
        'challenge/new/thing/:type/:id' : 'selectMediaChallengePage',
        'challenge/new/:type' : 'selectPlaylistChallengePage',
        'challenge/send' : 'sendChallengePage',
        'challenge/answer' : 'answerPage',

        //Players
        'players/invit': 'invitPlayersPage'
    },

    //Home
    'homePage': function() { this.HomePageView = new HomePageView({router: this}); },
    'helpPage': function() { this.HelpPageView = new HelpPageView({router: this}); },
    'transitionPage': function() { this.TransitionPageView = new TransitionPageView({router: this}); },

    //Dashboard
    'dashboardPage': function() { this.DashboardPageView = new DashboardPageView({router: this}); },

    //Challenge
    'indexChallengePage': function() { this.IndexChallengePageView = new IndexChallengePageView({router: this}); },
    'newChallengePage': function() { this.NewChallengePageView = new NewChallengePageView({router: this}); },
    'selectPlaylistChallengePage': function(type) { this.SelectPlaylistChallengePageView = new SelectPlaylistChallengePageView({router: this, type: type}); },
    'selectMediaChallengePage': function(type,id) { this.SelectMediaChallengePageView = new SelectMediaChallengePageView({router: this, type: type, id: id}); },
    'selectThingChallengePage': function(type,id) { this.SelectThingChallengePageView = new SelectThingChallengePageView({router: this, type: type, id: id}); },
    'sendChallengePage': function() { this.SendChallengePageView = new SendChallengePageView({router: this}); },
    'answerPage': function() { this.AnswerPageView = new AnswerPageView({router: this}); },

    //Players
    'invitPlayersPage': function() { this.InvitPlayersPageView = new InvitPlayersPageView({router: this}); }
});
});

// This is the main entry point for the App
define('app',[
  'routers/mainRouter'
], function(MainRouter){
  var init = function()
  {
    this.router = new MainRouter();
  };
  
  return { init: init};
});
require.config({
    'baseUrl': './js',
    //'baseUrl': 'http://localhost/Geekiest/webapp/js',
    'paths':
    {
        "jquery" : "empty:",
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
define("main", function(){});

require(["main"]);
