// ** For Survey from IT ** //
// For license information, see `https://assets.adobedtm.com/f4072c74f4f2/089da8459efa/launch-2f5b1ced511b.js`.
window._satellite=window._satellite||{},window._satellite.container={buildInfo:{minified:!0,buildDate:"2021-11-17T17:06:08Z",turbineBuildDate:"2021-08-11T20:25:49Z",turbineVersion:"27.2.0"},environment:{id:"EN77666a82e2324ac7953f15ce3a4fd701",stage:"production"},dataElements:{},extensions:{core:{displayName:"Core",hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EPab6ef5bcd54046888b5cb5b9a98d558b/",modules:{"core/src/lib/events/windowLoaded.js":{name:"window-loaded",displayName:"Window Loaded",script:function(e,t,n){"use strict";var r=n("./helpers/pageLifecycleEvents");e.exports=function(e,t){r.registerWindowLoadedTrigger(t)}}},"core/src/lib/events/helpers/pageLifecycleEvents.js":{script:function(e,t,n){"use strict";var r=n("@adobe/reactor-window"),o=n("@adobe/reactor-document"),i=-1!==r.navigator.appVersion.indexOf("MSIE 10"),a="WINDOW_LOADED",u="DOM_READY",c="PAGE_BOTTOM",s=[c,u,a],f=function(e,t){return{element:e,target:e,nativeEvent:t}},l={};s.forEach((function(e){l[e]=[]}));var d=function(e,t){s.slice(0,g(e)+1).forEach((function(e){h(t,e)}))},p=function(){return"complete"===o.readyState?a:"interactive"===o.readyState?i?null:u:void 0},g=function(e){return s.indexOf(e)},h=function(e,t){l[t].forEach((function(t){m(e,t)})),l[t]=[]},m=function(e,t){var n=t.trigger,r=t.syntheticEventFn;n(r?r(e):null)};r._satellite=r._satellite||{},r._satellite.pageBottom=d.bind(null,c),o.addEventListener("DOMContentLoaded",d.bind(null,u),!0),r.addEventListener("load",d.bind(null,a),!0),r.setTimeout((function(){var e=p();e&&d(e)}),0),e.exports={registerLibraryLoadedTrigger:function(e){e()},registerPageBottomTrigger:function(e){l[c].push({trigger:e})},registerDomReadyTrigger:function(e){l[u].push({trigger:e,syntheticEventFn:f.bind(null,o)})},registerWindowLoadedTrigger:function(e){l[a].push({trigger:e,syntheticEventFn:f.bind(null,r)})}}}}}},"qualtrics-website-feedback":{displayName:"Qualtrics Website Feedback",hostedLibFilesBaseUrl:"https://assets.adobedtm.com/extensions/EP3037080b2f514c82a49a8eab77b5a00e/",modules:{"qualtrics-website-feedback/src/lib/actions/loadProject.js":{name:"load-project",displayName:"Load Project",script:function(e,t,n,r){"use strict";e.exports=function(e){try{var t=e.brandID,n=e.projectID,o=n.replace("_","").toLowerCase(),i=function(){var e=document.createElement("div");e.id=n,document.body.appendChild(e)};void 0===window.QSI&&(window.QSI={clientTypeVariant:"AdobeLaunch"});var a=function(){!function(){var e=function(e,t,n,r){this.get=function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0,o=n.length;r<o;r++){for(var i=n[r];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},this.set=function(e,t){var n,r="";(n=new Date).setTime(n.getTime()+6048e5),r="; expires="+n.toGMTString(),document.cookie=e+"="+t+r+"; path=/; "},this.check=function(){var r=this.get(n);if(r)r=r.split(":");else{if(r=[t,e,0],100==e)return!0;"v"==t&&(e=Math.random()>=e/100?0:100),r=[t,e,0],this.set(n,r.join(":"))}var o=r[1];if(100==o)return!0;switch(r[0]){case"v":return!1;case"r":var i=r[2]%Math.floor(100/o);return r[2]++,this.set(n,r.join(":")),!i}return!0},this.go=function(){if(this.check()){var e=document.createElement("script");e.type="text/javascript",e.src=r,document.body&&document.body.appendChild(e)}}};try{new e(100,"r","QSI_S_"+n,"https://"+o+"-"+t+".siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID="+n).go()}catch(e){}}()};t&&n&&o&&(i(),a(),r.logger.log("Loaded Site Intercept Project: "+n))}catch(e){r.logger.error("Could not load Intercept Project: "+e)}}}}}}},company:{orgId:"912302BE532950CA0A490D4C@AdobeOrg"},property:{name:"Zebra TechDocs",settings:{domains:["zebra.com"],undefinedVarsReturnEmpty:!1,ruleComponentSequencingEnabled:!0},id:"PRba726c9c025648dbaf2955f3f9222b28"},rules:[{id:"RL3742be9488f44d988bde13b5a285e52a",name:"01 - Qualtrics Extension",events:[{modulePath:"core/src/lib/events/windowLoaded.js",settings:{},ruleOrder:50}],conditions:[],actions:[{modulePath:"qualtrics-website-feedback/src/lib/actions/loadProject.js",settings:{brandID:"zebratechnologies",projectID:"ZN_4PokwIMQIpp1GPb"},timeout:2e3,delayNext:!0}]}]};var _satellite=function(){"use strict";function e(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function t(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}function n(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}function r(e){var t={exports:{}};return e(t,t.exports),t.exports}function o(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}function i(e){return Boolean(e&&void 0!==e.length)}function a(){}function u(e,t){return function(){e.apply(t,arguments)}}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],g(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void l(t.promise,e)}f(t.promise,r)}else(1===e._state?f:l)(t.promise,e._value)}))):e._deferreds.push(t)}function f(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof c)return e._state=3,e._value=t,void d(e);if("function"==typeof n)return void g(u(n,t),e)}e._state=1,e._value=t,d(e)}catch(t){l(e,t)}}function l(e,t){e._state=2,e._value=t,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&c._immediateFn((function(){e._handled||c._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function p(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function g(e,t){var n=!1;try{e((function(e){n||(n=!0,f(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(e){if(n)return;n=!0,l(t,e)}}function h(e){return!0===Qe(e)&&"[object Object]"===Object.prototype.toString.call(e)}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function v(e){return"string"==typeof e&&-1!==e.indexOf("[")&&-1!==e.indexOf("]")}function y(e){return e.substr(0,e.indexOf("["))}function b(e,t,n){if(e.length&&Ze(t)){var r=e[0];if(1!==e.length){var o=e.slice(1);if(!v(r))return b(o,t[r],n);var i=t[r=y(r)];Array.isArray(i)&&i.forEach((function(e){return b(o,e,n)}))}else t.hasOwnProperty(r)&&"string"==typeof t[r]&&(t[r]=n(t[r]))}}if(window.atob){var w=document,E=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,j=t()?Object.assign:function(t){for(var n,r,o=e(t),i=1;i<arguments.length;i++){for(var a in n=Object(arguments[i]))O.call(n,a)&&(o[a]=n[a]);if(E){r=E(n);for(var u=0;u<r.length;u++)_.call(n,r[u])&&(o[r[u]]=n[r[u]])}}return o},P=j,x=window,I=function(e,t,n){var r,o=Array.isArray(t),i=Boolean(o&&e),a=document.createElement("a");if(a.href=e,(!/^https?:\/\/.*/.test(e)||!a.host)&&o){var u=new Error("Unable to find the Library Embed Code for Dynamic Host Resolution.");throw u.code="dynamic_host_resolver_constructor_error",u}if(o&&-1===t.indexOf(a.hostname)){var c=new Error("This library is not authorized for this domain. Please contact your CSM for more information.");throw c.code="dynamic_host_not_allowed",c}var s=function(){if(null!=r)return r;if(i){var e=a.host;/:80$/.test(e)?e=e.replace(":80",""):/:80\/$/.test(e)?e=e.replace(":80/",""):/:443$/.test(e)?e=e.replace(":443",""):/:443\/$/.test(e)&&(e=e.replace(":443/","")),r="https://"+e}else r="";return r},f=function(e){return i&&"string"==typeof e?[s(),"/"===e.charAt(0)?e.slice(1):e].join("/"):e},l={getTurbineHost:s,decorateWithDynamicHost:f,get isDynamicEnforced(){return o}};return x&&n.onDebugChanged((function(e){e?x.dynamicHostResolver=l:delete x.dynamicHostResolver})),l},C=function(e){var t=[];return e.forEach((function(e){e.events&&e.events.forEach((function(n){t.push({rule:e,event:n})}))})),t.sort((function(e,t){return e.event.ruleOrder-t.event.ruleOrder}))},A="debug",k=function(e,t){var n=function(){return"true"===e.getItem(A)},r=function(t){e.setItem(A,t)},o=[],i=function(e){o.push(e)};return t.outputEnabled=n(),{onDebugChanged:i,getDebugEnabled:n,setDebugEnabled:function(e){n()!==e&&(r(e),t.outputEnabled=e,o.forEach((function(t){t(e)})))}}},D="Module did not export a function.",S=function(e,t,n){return function(r,o,i){i=i||[];var a=e.getModuleExports(r.modulePath);if("function"!=typeof a)throw new Error(D);var u=e.getModuleDefinition(r.modulePath),c=r.settings||{};!r.hasTransformedFilePaths&&u.filePaths&&(n(c,u.filePaths,r.modulePath),r.hasTransformedFilePaths=!0);var s=t(c,o);return a.bind(null,s).apply(null,i)}},T=function(e){return"string"==typeof e?e.replace(/\s+/g," ").trim():e},R={LOG:"log",INFO:"info",DEBUG:"debug",WARN:"warn",ERROR:"error"},L="\ud83d\ude80",N=10===parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1])?"[Launch]":L,F=!1,M=function(e){if(F&&window.console){var t=Array.prototype.slice.call(arguments,1);t.unshift(N),e!==R.DEBUG||window.console[e]||(e=R.INFO),window.console[e].apply(window.console,t)}},B=M.bind(null,R.LOG),U=M.bind(null,R.INFO),V=M.bind(null,R.DEBUG),W=M.bind(null,R.WARN),q=M.bind(null,R.ERROR),$=function(){var e=F;F=!0,M.apply(null,Array.prototype.concat(R.WARN,Array.prototype.slice.call(arguments))),e||(F=!1)},G={log:B,info:U,debug:V,warn:W,error:q,deprecation:$,get outputEnabled(){return F},set outputEnabled(e){F=e},createPrefixedLogger:function(e){var t="["+e+"]";return{log:B.bind(null,t),info:U.bind(null,t),debug:V.bind(null,t),warn:W.bind(null,t),error:q.bind(null,t)}}},H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},J=r((function(e){!function(t){if(e.exports=t(),!!0){var n=window.Cookies,r=window.Cookies=t();r.noConflict=function(){return window.Cookies=n,r}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var c in i)i[c]&&(u+="; "+c,!0!==i[c]&&(u+="="+i[c].split(";")[0]));return document.cookie=t+"="+n+u}}function a(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var u=i[a].split("="),c=u.slice(1).join("=");n||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var s=t(u[0]);if(c=(r.read||r)(c,s)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(o[s]=c,e===s)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}return n((function(){}))}))})),Q={get:J.get,set:J.set,remove:J.remove},Z="com.adobe.reactor.",z=function(e,t){var n=Z+(t||"");return{getItem:function(t){try{return x[e].getItem(n+t)}catch(e){return null}},setItem:function(t,r){try{return x[e].setItem(n+t,r),!0}catch(e){return!1}}}},K="_sdsat_",Y="dataElements.",X="dataElementCookiesMigrated",ee=z("localStorage"),te=z("sessionStorage",Y),ne=z("localStorage",Y),re={PAGEVIEW:"pageview",SESSION:"session",VISITOR:"visitor"},oe={},ie=function(e){var t;try{t=JSON.stringify(e)}catch(e){}return t},ae=function(e,t,n){var r;switch(t){case re.PAGEVIEW:return void(oe[e]=n);case re.SESSION:return void((r=ie(n))&&te.setItem(e,r));case re.VISITOR:return void((r=ie(n))&&ne.setItem(e,r))}},ue=function(e,t){var n=Q.get(K+e);void 0!==n&&ae(e,t,n)},ce=function(e){ee.getItem(X)||(Object.keys(e).forEach((function(t){ue(t,e[t].storageDuration)})),ee.setItem(X,!0))},se={setValue:ae,getValue:function(e,t){var n;switch(t){case re.PAGEVIEW:return oe.hasOwnProperty(e)?oe[e]:null;case re.SESSION:return null===(n=te.getItem(e))?n:JSON.parse(n);case re.VISITOR:return null===(n=ne.getItem(e))?n:JSON.parse(n)}},migrateCookieData:ce},fe=function(e,t,n,r){return"Failed to execute data element module "+e.modulePath+" for data element "+t+". "+n+(r?"\n"+r:"")},le=function(e,t,n,r,o){return function(i,a){var u=t(i);if(!u)return r?"":void 0;var c,s,f=u.storageDuration;try{c=e.getModuleExports(u.modulePath),s=e.getModuleDefinition(u.modulePath)}catch(e){return void G.error(fe(u,i,e.message,e.stack))}if("function"==typeof c){var l,d=u.settings||{};!u.hasTransformedFilePaths&&s.filePaths&&(o(d,s.filePaths,u.modulePath),u.hasTransformedFilePaths=!0);try{l=c(n(d,a),a)}catch(e){return void G.error(fe(u,i,e.message,e.stack))}return f&&(null!=l?se.setValue(i,f,l):l=se.getValue(i,f)),null==l&&null!=u.defaultValue&&(l=u.defaultValue),"string"==typeof l&&(u.cleanText&&(l=T(l)),u.forceLowerCase&&(l=l.toLowerCase())),l}G.error(fe(u,i,"Module did not export a function."))}},de={text:function(e){return e.textContent},cleanText:function(e){return T(e.textContent)}},pe=function(e,t,n){for(var r,o=e,i=0,a=t.length;i<a;i++){if(null==o)return;var u=t[i];if(n&&"@"===u.charAt(0)){var c=u.slice(1);o=de[c](o)}else if(o.getAttribute&&(r=u.match(/^getAttribute\((.+)\)$/))){var s=r[1];o=o.getAttribute(s)}else o=o[u]}return o},ge=function(e,t,n){return function(r,o){var i;if(t(r))i=n(r,o);else{var a=r.split("."),u=a.shift();"this"===u?o&&(i=pe(o.element,a,!0)):"event"===u?o&&(i=pe(o,a)):"target"===u?o&&(i=pe(o.target,a)):i=pe(e[u],a)}return i}},he=function(e,t){return function(n){var r=n.split(".")[0];return Boolean(t(n)||"this"===r||"event"===r||"target"===r||e.hasOwnProperty(r))}},me=function(e,t,n){var r={exports:{}};return e.call(r.exports,r,r.exports,t,n),r.exports},ve=function(){var e={},t=function(t){var n=e[t];if(!n)throw new Error("Module "+t+" not found.");return n},n=function(){Object.keys(e).forEach((function(e){try{r(e)}catch(n){var t="Error initializing module "+e+". "+n.message+(n.stack?"\n"+n.stack:"");G.error(t)}}))},r=function(e){var n=t(e);return n.hasOwnProperty("exports")||(n.exports=me(n.definition.script,n.require,n.turbine)),n.exports};return{registerModule:function(t,n,r,o,i){var a={definition:n,extensionName:r,require:o,turbine:i};a.require=o,e[t]=a},hydrateCache:n,getModuleExports:r,getModuleDefinition:function(e){return t(e).definition},getModuleExtensionName:function(e){return t(e).extensionName}}},ye=!1,be=function(e){return function(t,n){var r=e._monitors;r&&(ye||(G.warn("The _satellite._monitors API may change at any time and should only be used for debugging."),ye=!0),r.forEach((function(e){e[t]&&e[t](n)})))}},we=function(e,t,n){var r,o,i,a,u=[],c=function(r,o,i){if(!e(o))return r;u.push(o);var a=t(o,i);return u.pop(),null==a&&n?"":a};return r=function(e,t){var n=/^%([^%]+)%$/.exec(e);return n?c(e,n[1],t):e.replace(/%(.+?)%/g,(function(e,n){return c(e,n,t)}))},o=function(e,t){for(var n={},r=Object.keys(e),o=0;o<r.length;o++){var i=r[o],u=e[i];n[i]=a(u,t)}return n},i=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++)n.push(a(e[r],t));return n},a=function(e,t){return"string"==typeof e?r(e,t):Array.isArray(e)?i(e,t):"object"==typeof e&&null!==e?o(e,t):e},function(e,t){return u.length>10?(G.error("Data element circular reference detected: "+u.join(" -> ")),e):a(e,t)}},Ee=function(e){return function(){if("string"==typeof arguments[0])e[arguments[0]]=arguments[1];else if(arguments[0]){var t=arguments[0];for(var n in t)e[n]=t[n]}}},Oe=setTimeout;c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){var n=new this.constructor(a);return s(this,new p(e,t,n)),n},c.prototype.finally=o,c.all=function(e){return new c((function(t,n){function r(e,i){try{if(i&&("object"==typeof i||"function"==typeof i)){var u=i.then;if("function"==typeof u)return void u.call(i,(function(t){r(e,t)}),n)}o[e]=i,0==--a&&t(o)}catch(e){n(e)}}if(!i(e))return n(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var a=o.length,u=0;u<o.length;u++)r(u,o[u])}))},c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c((function(t){t(e)}))},c.reject=function(e){return new c((function(t,n){n(e)}))},c.race=function(e){return new c((function(t,n){if(!i(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)c.resolve(e[r]).then(t,n)}))},c._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){Oe(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var _e=n(Object.freeze({__proto__:null,default:c})),je="undefined"!=typeof window&&window.Promise||void 0!==H&&H.Promise||_e.default||_e,Pe=function(e,t,n){return function(r,o,i,a){return a.then((function(){var a,u=r.delayNext;return new je((function(t,n){var o=e(r,i,[i]);if(!u)return t();var c=r.timeout,s=new je((function(e,t){a=setTimeout((function(){t(new Error("A timeout occurred because the action took longer than "+c/1e3+" seconds to complete. "))}),c)}));je.race([o,s]).then(t,n)})).catch((function(e){return clearTimeout(a),e=t(e),n(r,o,e),je.reject(e)})).then((function(){clearTimeout(a)}))}))}},xe=function(e,t,n,r,o){return function(i,a,u,c){return c.then((function(){var c;return new je((function(t,n){var r=e(i,u,[u]),o=i.timeout,a=new je((function(e,t){c=setTimeout((function(){t(new Error("A timeout occurred because the condition took longer than "+o/1e3+" seconds to complete. "))}),o)}));je.race([r,a]).then(t,n)})).catch((function(e){return clearTimeout(c),e=t(e),r(i,a,e),je.reject(e)})).then((function(e){if(clearTimeout(c),!n(i,e))return o(i,a),je.reject()}))}))}},Ie=je.resolve(),Ce=function(e,t,n){return function(r,o){return r.conditions&&r.conditions.forEach((function(t){Ie=e(t,r,o,Ie)})),r.actions&&r.actions.forEach((function(e){Ie=t(e,r,o,Ie)})),Ie=(Ie=Ie.then((function(){n(r)}))).catch((function(){}))}},Ae=function(e){return Boolean(e&&"object"==typeof e&&"function"==typeof e.then)},ke=function(e,t,n,r){return function(o,i){var a;if(o.conditions)for(var u=0;u<o.conditions.length;u++){a=o.conditions[u];try{var c=e(a,i,[i]);if(Ae(c))throw new Error("Rule component sequencing must be enabled on the property for this condition to function properly.");if(!t(a,c))return n(a,o),!1}catch(e){return r(a,o,e),!1}}return!0}},De=function(e,t){return function(n,r){e(n,r)&&t(n,r)}},Se=function(e){return function(t){var n=e.getModuleDefinition(t.modulePath);return n&&n.displayName||t.modulePath}},Te=function(e){return function(t){var n=t.rule,r=t.event,o=e.getModuleDefinition(r.modulePath).name;return{$type:e.getModuleExtensionName(r.modulePath)+"."+o,$rule:{id:n.id,name:n.name}}}},Re=function(e,t,n,r,o,i){return function(a,u){var c=u.rule,s=u.event;s.settings=s.settings||{};try{var f=o(u);t(s,null,[function(t){var r=n(f,t);a((function(){e(r,c)}))}])}catch(e){i.error(r(s,c,e))}}},Le=function(e,t,n,r){return function(o,i,a){var u=t(o);n.error(e(u,i.name,a)),r("ruleActionFailed",{rule:i,action:o})}},Ne=function(e,t,n,r){return function(o,i,a){var u=t(o);n.error(e(u,i.name,a)),r("ruleConditionFailed",{rule:i,condition:o})}},Fe=function(e,t,n){return function(r,o){var i=e(r);t.log('Condition "'+i+'" for rule "'+o.name+'" was not met.'),n("ruleConditionFailed",{rule:o,condition:r})}},Me=function(e,t){return function(n){e.log('Rule "'+n.name+'" fired.'),t("ruleCompleted",{rule:n})}},Be=function(e,t,n){return function(r,o){var i;if(r.actions)for(var a=0;a<r.actions.length;a++){i=r.actions[a];try{e(i,o,[o])}catch(e){return void t(i,r,e)}}n(r)}},Ue=function(e,t,n,r){return function(o,i){r("ruleTriggered",{rule:i}),e?n(i,o):t(i,o)}},Ve=function(e,t,n){return'Failed to execute "'+e+'" for "'+t+'" rule. '+n.message+(n.stack?"\n"+n.stack:"")},We=function(e,t){return t&&!e.negate||!t&&e.negate},qe=[],$e=!1,Ge=function(e){$e?e():qe.push(e)},He=function(e,t,n){e(t).forEach((function(e){n(Ge,e)})),$e=!0,qe.forEach((function(e){e()})),qe=[]},Je=function(e){if(e||(e=new Error("The extension triggered an error, but no error information was provided.")),!(e instanceof Error)){var t="object"==typeof e?JSON.stringify(e):String(e);e=new Error(t)}return e},Qe=function(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)},Ze=function(e){var t,n;return!1!==h(e)&&("function"==typeof(t=e.constructor)&&(!1!==h(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")))},ze=function(e,t){return Ze(t=t||{})?t=P({},t,e):P(t,e),t.hasOwnProperty("type")||Object.defineProperty(t,"type",{get:function(){return G.deprecation("Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead."),t.$type}}),t},Ke=function(e,t){return function(n,r){var o=e[n];if(o){var i=o.modules;if(i)for(var a=Object.keys(i),u=0;u<a.length;u++){var c=a[u],s=i[c];if(s.shared&&s.name===r)return t.getModuleExports(c)}}}},Ye=function(e,t){return function(){return t?e(t):{}}},Xe=function(e,t,n){return function(r){if(n){var o=r.split(".");o.splice(o.length-1||1,0,"min"),r=o.join(".")}return e(t)+r}},et=".js",tt=function(e){return e.substr(0,e.lastIndexOf("/"))},nt=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},rt=function(e,t){nt(t,et)||(t+=et);var n=t.split("/"),r=tt(e).split("/");return n.forEach((function(e){e&&"."!==e&&(".."===e?r.length&&r.pop():r.push(e))})),r.join("/")},ot=function(e,t){return new je((function(n,r){t.onload=function(){n(t)},t.onerror=function(){r(new Error("Failed to load script "+e))}}))},it=function(e){var t=document.createElement("script");t.src=e,t.async=!0;var n=ot(e,t);return document.getElementsByTagName("head")[0].appendChild(t),n},at=function(e,t,n,r){t=t||"&",n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var i=/\+/g;e=e.split(t);var a=1e3;r&&"number"==typeof r.maxKeys&&(a=r.maxKeys);var u=e.length;a>0&&u>a&&(u=a);for(var c=0;c<u;++c){var s,f,l,d,p=e[c].replace(i,"%20"),g=p.indexOf(n);g>=0?(s=p.substr(0,g),f=p.substr(g+1)):(s=p,f=""),l=decodeURIComponent(s),d=decodeURIComponent(f),m(o,l)?Array.isArray(o[l])?o[l].push(d):o[l]=[o[l],d]:o[l]=d}return o},ut=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},ct=function(e,t,n,r){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(r){var o=encodeURIComponent(ut(r))+n;return Array.isArray(e[r])?e[r].map((function(e){return o+encodeURIComponent(ut(e))})).join(t):o+encodeURIComponent(ut(e[r]))})).join(t):r?encodeURIComponent(ut(r))+n+encodeURIComponent(ut(e)):""},st=r((function(e,t){t.decode=t.parse=at,t.encode=t.stringify=ct})),ft="@adobe/reactor-",lt={cookie:Q,document:w,"load-script":it,"object-assign":P,promise:je,"query-string":{parse:function(e){return"string"==typeof e&&(e=e.trim().replace(/^[?#&]/,"")),st.parse(e)},stringify:function(e){return st.stringify(e)}},window:x},dt=function(e){return function(t){if(0===t.indexOf(ft)){var n=t.substr(ft.length),r=lt[n];if(r)return r}if(0===t.indexOf("./")||0===t.indexOf("../"))return e(t);throw new Error('Cannot resolve module "'+t+'".')}},pt=function(e,t,n,r,o,i,a){var u=e.extensions,c=e.buildInfo,s=e.environment,f=e.property.settings;if(u){var l=Ke(u,t);Object.keys(u).forEach((function(d){var p=u[d],g=p.settings;Array.isArray(p.filePaths)&&(g=i(g,p.filePaths));var h=Ye(r,g);if(p.modules){var m=G.createPrefixedLogger(p.displayName),v=Xe(a,p.hostedLibFilesBaseUrl,c.minified),y={buildInfo:c,environment:s,property:{name:e.property.name,id:e.property.id},getDataElementValue:o,getExtensionSettings:h,getHostedLibFileUrl:v,getSharedModule:l,logger:m,propertySettings:f,replaceTokens:r,onDebugChanged:n.onDebugChanged,get debugEnabled(){return n.getDebugEnabled()}};Object.keys(p.modules).forEach((function(e){var n=p.modules[e],r=dt((function(n){var r=rt(e,n);return t.getModuleExports(r)}));t.registerModule(e,n,d,r,y)}))}})),t.hydrateCache()}return t},gt=function(e,t,n,r,o){var i=G.createPrefixedLogger("Custom Script");e.track=function(e){G.log('"'+e+'" does not match any direct call identifiers.')},e.getVisitorId=function(){return null},e.property={name:t.property.name,id:t.property.id},e.company=t.company,e.buildInfo=t.buildInfo,e.environment=t.environment,e.logger=i,e.notify=function(e,t){switch(G.deprecation("_satellite.notify is deprecated. Please use the `_satellite.logger` API."),t){case 3:i.info(e);break;case 4:i.warn(e);break;case 5:i.error(e);break;default:i.log(e)}},e.getVar=r,e.setVar=o,e.setCookie=function(e,t,n){var r="",o={};n&&(r=", { expires: "+n+" }",o.expires=n);var i='_satellite.setCookie is deprecated. Please use _satellite.cookie.set("'+e+'", "'+t+'"'+r+").";G.deprecation(i),Q.set(e,t,o)},e.readCookie=function(e){return G.deprecation('_satellite.readCookie is deprecated. Please use _satellite.cookie.get("'+e+'").'),Q.get(e)},e.removeCookie=function(e){G.deprecation('_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("'+e+'").'),Q.remove(e)},e.cookie=Q,e.pageBottom=function(){},e.setDebug=n;var a=!1;Object.defineProperty(e,"_container",{get:function(){return a||(G.warn("_satellite._container may change at any time and should only be used for debugging."),a=!0),t}})},ht=function(e){for(var t=w.querySelectorAll("script"),n=0;n<t.length;n++){var r=t[n];if(e.test(r.src))return r}},mt=function(e,t){return function(n,r,o){return e&&Ze(n)&&Object.keys(n).length&&Array.isArray(r)&&r.length?(r.forEach((function(e){Boolean(null!=o&&/^core\/.*actions.*\/customCode\.js$/.test(o))&&"source"===e&&!n.isExternal||b(e.split("."),n,t)})),n):n}},vt={getTurbine:function(){return ht(new RegExp(/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/))},byRegexPattern:ht}.getTurbine,yt=window._satellite;if(yt&&!window.__satelliteLoaded){window.__satelliteLoaded=!0;var bt=yt.container;delete yt.container;var wt=P({},bt.buildInfo);Object.defineProperty(wt,"environment",{get:function(){return G.deprecation("container.buildInfo.environment is deprecated.Please use `container.environment.stage` instead"),bt.environment.stage}}),bt.buildInfo=wt;var Et,Ot=k(z("localStorage"),G),_t="";w.currentScript&&w.currentScript.getAttribute("src")?_t=w.currentScript.getAttribute("src"):vt()&&(_t=vt().getAttribute("src"));try{Et=I(_t,bt.company.cdnAllowList,Ot)}catch(e){throw G.warn("Please review the following error:"),e}var jt,Pt=mt(Et.isDynamicEnforced,Et.decorateWithDynamicHost),xt=ve(),It=bt.property.settings.undefinedVarsReturnEmpty,Ct=bt.property.settings.ruleComponentSequencingEnabled,At=bt.dataElements||{};se.migrateCookieData(At);var kt=function(e){return At[e]},Dt=function(){return jt.apply(null,arguments)},St=le(xt,kt,Dt,It,Pt),Tt={},Rt=Ee(Tt),Lt=he(Tt,kt),Nt=ge(Tt,kt,St);jt=we(Lt,Nt,It),gt(yt,bt,Ot.setDebugEnabled,Nt,Rt),pt(bt,xt,Ot,jt,St,Pt,Et.decorateWithDynamicHost);var Ft=be(yt),Mt=S(xt,jt,Pt),Bt=Se(xt),Ut=Fe(Bt,G,Ft),Vt=Ne(Ve,Bt,G,Ft),Wt=Le(Ve,Bt,G,Ft),qt=Me(G,Ft),$t=Re(Ue(Ct,De(ke(Mt,We,Ut,Vt),Be(Mt,Wt,qt)),Ce(xe(Mt,Je,We,Vt,Ut),Pe(Mt,Je,Wt),qt),Ft),Mt,ze,Ve,Te(xt),G);He(C,bt.rules||[],$t)}return yt}console.warn("Adobe Launch is unsupported in IE 9 and below.")}();

jQuery(function($) {'use strict';

	// Navigation Scroll
	$(window).scroll(function(event) {
		// Scroll();
	});

	// $('.navbar-collapse ul li a').on('click', function() {  
	// 	$('html, body').animate({scrollTop: $(this.hash).offset().top - 100}, 1000);
	// 	return false;
	// });

	$('#toc ul li a').on('click', function() {  
		console.log("scrolling");
		console.log($(this.hash));
		console.log($(this.hash).offset());
		$('html, body, .fixed-column-right').animate({scrollTop: $(this.hash).offset().top - 100}, 1000);
		return false;
	});

	// // User define function
	// function Scroll() {
	// 	var contentTop      =   [];
	// 	var contentBottom   =   [];
	// 	var winTop      =   $(window).scrollTop();
	// 	var rangeTop    =   200;
	// 	var rangeBottom =   500;
	// 	$('.navbar-collapse').find('.scroll a').each(function(){
	// 		contentTop.push( $( $(this).attr('href') ).offset().top);
	// 		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	// 	})
	// 	$.each( contentTop, function(i){
	// 		if ( winTop > contentTop[i] - rangeTop ){
	// 			$('.navbar-collapse li.scroll')
	// 			.removeClass('active')
	// 			.eq(i).addClass('active');			
	// 		}
	// 	})
	// };

	$('#tile-view').on('click', function(){
		$('.viewlist').addClass('hidden');
		$('.tile').removeClass('hidden');
		$('#tile-view').addClass('hidden');
		$('#list-view').removeClass('hidden');
		$('#blog').attr('id','meet-team')
		return false;
	});
	$('#list-view').on('click', function(){
		$('.tile').addClass('hidden');
		$('.viewlist').removeClass('hidden');
		$('#tile-view').removeClass('hidden');
		$('#list-view').addClass('hidden');
		$('#meet-team').attr('id','blog')
		return false;

	});

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Slider
	$(document).ready(function() {
		// make all images use img-responsove class from bootstrap
		$('img').addClass('img-responsive');

		// replace hrefs for certain docs
		$('a').each(function() {
		    var href = $(this).attr('href');
		    
		    if (href && href.startsWith("/emdk-for-android/6-0/api")) {
		    	console.log("Changing: " + href);
		    	var section = href.replace("/emdk-for-android/6-0/api/","");
		    	var param = "";
		    	if( section.startsWith("core/EMDKBase"))
		    		param = "/?com/symbol/emdk/EMDKBase.html"
		    	if( section.startsWith("core/EMDKManager"))
		    		param = "/?com/symbol/emdk/EMDKManager.html"
		    	if( section.startsWith("core/EMDKResults"))
		    		param = "/?com/symbol/emdk/EMDKResults.html"
		    	if( section.startsWith("core/ProfileConfig"))
		    		param = "/?com/symbol/emdk/ProfileConfig.html"
		    	if( section.startsWith("core/ProfileManager"))
		    		param = "/?com/symbol/emdk/ProfileManager.html"
		    	if( section.startsWith("core/VersionManager"))
		    		param = "/?com/symbol/emdk/VersionManager.html"
		    	if( section.startsWith("barcode/BarcodeManager"))
		    		param = "/?com/symbol/emdk/barcode/BarcodeManager.html"
		    	if( section.startsWith("barcode/InterfaceConfig"))
		    		param = "/?com/symbol/emdk/barcode/InterfaceConfig.html"
		    	if( section.startsWith("barcode/ScanDataCollection"))
		    		param = "/?com/symbol/emdk/barcode/ScanDataCollection.html"
		    	if( section.startsWith("barcode/Scanner"))
		    		param = "/?com/symbol/emdk/barcode/Scanner.html"
		    	if( section.startsWith("barcode/ScannerConfig"))
		    		param = "/?com/symbol/emdk/barcode/ScannerConfig.html"
		    	if( section.startsWith("barcode/ScannerInfo"))
		    		param = "/?com/symbol/emdk/barcode/ScannerInfo.html"
		    	if( section.startsWith("barcode/StatusData"))
		    		param = "/?com/symbol/emdk/barcode/StatusData.html"
		    	if( section.startsWith("notification"))
		    		param = "/?com/symbol/emdk/notification/package-summary.html"
		    	if( section.startsWith("payment"))
		    		param = "/?com/symbol/emdk/payment/package-summary.html"
		    	if( section.startsWith("personalshopper"))
		    		param = "/?com/symbol/emdk/personalshopper/package-summary.html"
		    	if( section.startsWith("scanandpair"))
		    		param = "/?com/symbol/emdk/scanandpair/package-summary.html"
		    	if( section.startsWith("serialcomm"))
		    		param = "/?com/symbol/emdk/serialcomm/package-summary.html"
		    	if( section.startsWith("simulscan"))
		    		param = "/?com/symbol/emdk/simulscan/package-summary.html"
		        href = "/emdk-for-android/6-0/api" + param;
		        $(this).attr('href', href);
		    }
		});		

		
		//youtube enable images with special alt-tag
		var imgTags = $("#mainContent").find('img').each(function( index ) {
		var imgIsVideo = false;
		if($(this).attr('alt') && $(this).attr('alt').startsWith('yt:')){
			imgIsVideo = true;
			var ytid = $(this).attr('alt').replace('yt:','');
			var video_thumbnail = 'http://img.youtube.com/vi/'+ytid+'/0.jpg';
			$(this).attr('src',video_thumbnail);
			$(this).wrap( "<div class='videos'></div>" );
			$(this).wrap( "<div  class='video' alt='yt:" + ytid + "''></div>" );
			$(this).before( "<span></span>" );
		};
		var item;
		if(imgIsVideo){
			item = $(this).parent();
		}
		else{
			item = $(this);
		}

		//Image Model
		item.click(function(){
			//Set Image
			var imgIsVideo = false;
			
			if($(this).attr('alt').startsWith('yt:')){
				imgIsVideo = true;
			}
			var itemHeight = this.naturalHeight;
			var itemWidth = this.naturalWidth;
			if(imgIsVideo){
				var ytid = $(this).attr('alt').replace('yt:','');

				var ytEmbed = '<iframe id="yt-video" width="100%" height="315" src="https://www.youtube.com/embed/' + ytid + '?autoplay=1" frameborder="0" autoplay allowfullscreen></iframe>'
				$("#modalImg").html(ytEmbed);
				console.log('youtube video' + ytid);
				itemHeight = 480;
				itemWidth = 640;
			}
			else{
				$("#modalImg").html( '<a href="' + $(this).attr("src") + '" target="_blank"><img title="" slt="img" src="' + $(this).attr("src") + '"></img></a>');

			}

			//Size box
			if(this.naturalWidth  > ($(document).width()- 100))
			{
				$(".modal-dialog").css("width", ($(document).width() - 100) + "px");
			}
			else
			{
				$(".modal-dialog").css("width", (itemWidth +44) + "px");
			}

			if(this.naturalHeight  > ($(window).height()- 120))
			{
				$(".modal-body").css("height", ($(window).height() - 120) + "px");
			}
			else
			{
				$(".modal-body").css("height", (itemHeight+44) + "px");
			}

			if(imgIsVideo){
				$("#basicModal").on('hide.bs.modal', function(){
			        $("#yt-video").attr('src', '');
			    });
			}
			//Show
			$('#basicModal').modal('show');

			setTimeout(function(){
				$("#modalImg").scrollTop(0);
				$("#modalImg").scrollLeft(0);
			},200);
		});


	});;

		//enable all tooltips
		$('[data-toggle="tooltip"]').tooltip();
		
		prettyPrint();
		var time = 7; // time in seconds

	 	var $progressBar,
	      $bar, 
	      $elem, 
	      isPause, 
	      tick,
	      percentTime;
	 
	    //Init the carousel
	    $("#main-slider").find('.owl-carousel').owlCarousel({
	      autoPlay : false,
	      slideSpeed : 500,
	      paginationSpeed : 500,
	      singleItem : true,
	      navigation : true,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
	      afterInit : progressBar,
	      afterMove : moved,
	      startDragging : pauseOnDragging,
	      //autoHeight : true,
	      transitionStyle : "fade"
	    });
	 
	    //Init progressBar where elem is $("#owl-demo")
	    function progressBar(elem){
	      $elem = elem;
	      //build progress bar elements
	      buildProgressBar();
	      //start counting
	      start();
	    }
	 
	    //create div#progressBar and div#bar then append to $(".owl-carousel")
	    function buildProgressBar(){
	      $progressBar = $("<div>",{
	        id:"progressBar"
	      });
	      $bar = $("<div>",{
	        id:"bar"
	      });
	      $progressBar.append($bar).appendTo($elem);
	    }
	 
	    function start() {
	      //reset timer
	      percentTime = 0;
	      isPause = false;
	      //run interval every 0.01 second
	      tick = setInterval(interval, 10);
	    };
	 
	    function interval() {
	      if(isPause === false){
	        percentTime += 1 / time;
	        $bar.css({
	           width: percentTime+"%"
	         });
	        //if percentTime is equal or greater than 100
	        if(percentTime >= 100){
	          //slide to next item 
	          $elem.trigger('owl.next')
	        }
	      }
	    }
	 
	    //pause while dragging 
	    function pauseOnDragging(){
	      isPause = true;
	    }
	 
	    //moved callback
	    function moved(){
	      //clear interval
	      clearTimeout(tick);
	      //start again
	      start();
	    }
    addExpandableArrows();


    bindTreeEvents($('.sidebar-container li'));

    // Product switcher ------------------------------------------------------------------------- //

    $('.sidebar-container li.product > a').on('click', function(e) {
        e.preventDefault();
        var li = $(e.target).parent();

        if (li.hasClass('active')) {
            return;
        }

        $('.sidebar-container li.product.active > ul').stop(true, true).show().slideUp({
            duration: 400,
            complete: recalcSidebar
        });

        $('.sidebar-container li').removeClass('active');
        li.addClass('active');

        li.find('> ul').stop(true, true).hide().slideDown({
            duration: 400,
            complete: recalcSidebar
        });

        recalcSidebar();
    });


	});

	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	// portfolio filter
	$(window).load(function(){'use strict';
		// var $portfolio_selectors = $('.portfolio-filter >li>a');
		// var $portfolio = $('.portfolio-items');
		// $portfolio.isotope({
		// 	itemSelector : '.portfolio-item',
		// 	layoutMode : 'fitRows'
		// });
		
		// $portfolio_selectors.on('click', function(){
		// 	$portfolio_selectors.removeClass('active');
		// 	$(this).addClass('active');
		// 	var selector = $(this).attr('data-filter');
		// 	$portfolio.isotope({ filter: selector });
		// 	return false;
		// });
	});

	$(document).ready(function() {
		//Animated Progress
		$('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).css('width', $(this).data('width') + '%');
				$(this).unbind('inview');
			}
		});

		//Animated Number
		$.fn.animateNumbers = function(stop, commas, duration, ease) {
			return this.each(function() {
				var $this = $(this);
				var start = parseInt($this.text().replace(/,/g, ""));
				commas = (commas === undefined) ? true : commas;
				$({value: start}).animate({value: stop}, {
					duration: duration == undefined ? 1000 : duration,
					easing: ease == undefined ? "swing" : ease,
					step: function() {
						$this.text(Math.floor(this.value));
						if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
					},
					complete: function() {
						if (parseInt($this.text()) !== stop) {
							$this.text(stop);
							if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
						}
					}
				});
			});
		};

		$('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			var $this = $(this);
			if (visible) {
				$this.animateNumbers($this.data('digit'), false, $this.data('duration')); 
				$this.unbind('inview');
			}
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	//Pretty Photo
	// $("a[rel^='prettyPhoto']").prettyPhoto({
	// 	social_tools: false
	// });


});

function changeVersion(version_from,version_to,default_url){
	var new_url = $(location).attr('href').replace(version_from,version_to);
	console.log(new_url);
	var jqxhr = $.get( new_url, function() {
	  window.location = new_url;
	})
	.fail(function() {
		window.location = default_url;
	});


}

function changeLanguage(fromurl, tourl, lang){
	var new_url = $(location).attr('href').replace(fromurl,tourl);
	console.log(new_url);
	window.location = new_url


}

// more tree binding functions
function addExpandableArrows() {
    $('.sidebar-container li.expandable').each(function (item) {
        $(this).not('>span.arrow').prepend('<span class="arrow"></span>');
    });
}
function recalcSidebar() {
    $(document.body).trigger("sticky_kit:recalc");
}
function bindTreeEvents(li) {
    li.bind('tree_toggle', function(e) {

        e.stopPropagation();

        if ($(this).hasClass('active')) {
            $(this).trigger('tree_collapse');
        } else {
            $(this).trigger('tree_expand');
        }

    }).bind('tree_collapse', function(e) {

        e.stopPropagation();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').find('> ul').stop(true, true).show().slideUp({
                duration: 400,
                complete: recalcSidebar
            });
        }

    }).bind('tree_expand', function(e) {

        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').find('> ul').stop(true, true).hide().slideDown({
                duration: 400,
                complete: recalcSidebar
            });
        }

    });

    $('.sidebar-container li .arrow').on('click', function(e) {
        var li = $(e.target).parent();
        li.trigger('tree_toggle');
        recalcSidebar();
    });
    $('.sidebar-container li .arrow-li').on('click', function(e) {
        var li = $(e.target).parent().parent();
        var arrow = li.find('.arrow').first()[0];

        console.log('need to click associated arrow');
        console.log(arrow);
        arrow.click();
        // li.trigger('tree_toggle');
        // recalcSidebar();
    });


// 3/18/21- Back-to-top button + revisions for MX Feature Matrix

// Inject back-to-top button into all HTML pages; then get it
var html='<button id="back-to-top-btn" title="Go to top">Back to Top</button>';

$("body").append(html);

var buttonToTop = document.getElementById("back-to-top-btn");

// Show button when user scolls past 450px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    buttonToTop.style.display = "block";
  } else {
    buttonToTop.style.display = "none";
  }
}

// Revisions to detect scrolling on MX Feature Matrix (div)
$(".fixed-column-right").scroll(function() {
console.log("Scrolling :"+$(this).scrollTop())
if ($(this).scrollTop() >450) {
console.log("Adding");
$("#back-to-top-btn").css("display","block");
} else {
console.log("hiding")
$("#back-to-top-btn").css("display","none");
}
});

// Scroll to top of page on button click
$("#back-to-top-btn").click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $(".fixed-column-right").scrollTop(0);
    });

}