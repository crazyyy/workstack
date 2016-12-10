(function(){function t(t){t=t.split(".");for(var e,n=Dt;e=t.shift();){if(null==n[e])return null;n=n[e]}return n}function e(){}function n(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&"undefined"!=typeof t.splice&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||"undefined"!=typeof t.call&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&"undefined"==typeof t.call)return"object";return e}function i(t){var e=n(t);return"array"==e||"object"==e&&"number"==typeof t.length}function r(t){return"string"==typeof t}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function s(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function u(t,e,n){return u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:s,u.apply(null,arguments)}function h(t,e){var n=t.split("."),i=Dt;n[0]in i||!i.execScript||i.execScript("var "+n[0]);for(var r;n.length&&(r=n.shift());)n.length||void 0===e?i=i[r]?i[r]:i[r]={}:i[r]=e}function c(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.W=function(t,n,i){for(var r=Array(arguments.length-2),o=2;o<arguments.length;o++)r[o-2]=arguments[o];return e.prototype[n].apply(t,r)}}function l(t,e,n){this.f=n,this.c=t,this.g=e,this.b=0,this.a=null}function f(t){var e,n=Re;for(e in n)if(t.call(void 0,n[e],e,n))return e}function p(t,e){var n=be;Object.prototype.hasOwnProperty.call(n,t)||(n[t]=e(t))}function d(){}function v(t,e){return t<e?-1:t>e?1:0}function y(t){var e=arguments;if(1<e.length){var n=e[0];Ht[n]=e[1]}else for(n in e=e[0])Ht[n]=e[n]}function g(t){return"function"==n(t)&&(t=m(t)),window.setInterval(t,250)}function m(t){return t&&window.yterr?function(){try{return t.apply(this,arguments)}catch(e){w(e)}}:t}function w(e,n){var i=t("yt.logging.errors.log");i?i(e,n,void 0,void 0,void 0):(i=[],i="ERRORS"in Ht?Ht.ERRORS:i,i.push([e,n,void 0,void 0,void 0]),y("ERRORS",i))}function b(t){return $t[t]||($t[t]=String(t).replace(/\-([a-z])/g,function(t,e){return e.toUpperCase()}))}function E(t){if(this.type="",this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null,this.charCode=this.keyCode=0,this.shiftKey=this.ctrlKey=this.altKey=!1,this.clientY=this.clientX=0,t=t||window.event){this.a=t;for(var e in t)e in Qt||(this[e]=t[e]);if((e=t.target||t.srcElement)&&3==e.nodeType&&(e=e.parentNode),this.target=e,e=t.relatedTarget)try{e=e.nodeName?e:null}catch(n){e=null}else"mouseover"==this.type?e=t.fromElement:"mouseout"==this.type&&(e=t.toElement);this.relatedTarget=e,this.clientX=void 0!=t.clientX?t.clientX:t.pageX,this.clientY=void 0!=t.clientY?t.clientY:t.pageY,this.keyCode=t.keyCode?t.keyCode:t.which,this.charCode=t.charCode||("keypress"==this.type?this.keyCode:0),this.altKey=t.altKey,this.ctrlKey=t.ctrlKey,this.shiftKey=t.shiftKey}}function S(){this.c=this.c,this.f=this.f}function I(t){return-1!=Zt.indexOf(t)}function T(t,e){var n;t:{n=t.length;for(var i=r(t)?t.split(""):t,o=0;o<n;o++)if(o in i&&e.call(void 0,i[o],o,t)){n=o;break t}n=-1}return 0>n?null:r(t)?t.charAt(n):t[n]}function x(t){return Array.prototype.concat.apply(Array.prototype,arguments)}function A(t){var e=t.length;if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i];return n}return[]}function C(){this.b=this.a=null}function P(){this.next=this.b=this.a=null}function O(t,e,i){if("array"==n(e))for(var r=0;r<e.length;r++)O(t,String(e[r]),i);else null!=e&&i.push("&",t,""===e?"":"=",encodeURIComponent(String(e)))}function Y(t){var e,n=[];for(e in t)O(e,t[e],n);return n[0]="",n.join("")}function N(t){Dt.setTimeout(function(){throw t},0)}function M(){var t=Dt.MessageChannel;if("undefined"==typeof t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(t=function(){var t=document.createElement("IFRAME");t.style.display="none",t.src="",document.documentElement.appendChild(t);var e=t.contentWindow,t=e.document;t.open(),t.write(""),t.close();var n="callImmediate"+Math.random(),i="file:"==e.location.protocol?"*":e.location.protocol+"//"+e.location.host,t=u(function(t){"*"!=i&&t.origin!=i||t.data!=n||this.port1.onmessage()},this);e.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(n,i)}}}),"undefined"!=typeof t&&!I("Trident")&&!I("MSIE")){var e=new t,n={},i=n;return e.port1.onmessage=function(){if(void 0!==n.next){n=n.next;var t=n.G;n.G=null,t()}},function(t){i.next={G:t},i=i.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(t){var e=document.createElement("SCRIPT");e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){Dt.setTimeout(t,0)}}function R(){}function k(t){if(t instanceof R)return t;if("function"==typeof t.o)return t.o(!1);if(i(t)){var e=0,n=new R;return n.next=function(){for(;;){if(e>=t.length)throw ue;if(e in t)return t[e++];e++}},n}throw Error("Not implemented")}function D(t,e){if(i(t))try{ie(t,e,void 0)}catch(n){if(n!==ue)throw n}else{t=k(t);try{for(;;)e.call(void 0,t.next(),void 0,t)}catch(n){if(n!==ue)throw n}}}function _(t){if(i(t))return A(t);t=k(t);var e=[];return D(t,function(t){e.push(t)}),e}function L(){var t=Dt.document;return t?t.documentMode:void 0}function j(t){p(t,function(){for(var e=0,n=Bt(String(we)).split("."),i=Bt(String(t)).split("."),r=Math.max(n.length,i.length),o=0;0==e&&o<r;o++){var a=n[o]||"",s=i[o]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break;e=v(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||v(0==a[2].length,0==s[2].length)||v(a[2],s[2]),a=a[3],s=s[3]}while(0==e)}return 0<=e})}function U(t){Se||W(),Te||(Se(),Te=!0);var e=xe,n=re.get();n.set(t,void 0),e.b?e.b.next=n:e.a=n,e.b=n}function W(){var t=Dt.Promise;if(-1!=String(t).indexOf("[native code]")){var e=t.resolve(void 0);Se=function(){e.then(B)}}else Se=function(){var t=B;"function"!=n(Dt.setImmediate)||Dt.Window&&Dt.Window.prototype&&!I("Edge")&&Dt.Window.prototype.setImmediate==Dt.setImmediate?(oe||(oe=M()),oe(t)):Dt.setImmediate(t)}}function B(){for(var t;t=xe.remove();){try{t.a.call(t.b)}catch(e){N(e)}var n=re;n.g(t),n.b<n.f&&(n.b++,t.next=n.a,n.a=t)}Te=!1}function V(){}function K(t){var e,n,i,r;if(e=document,e.querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(""+(t?"."+t:""));if(t&&e.getElementsByClassName){var o=e.getElementsByClassName(t);return o}if(o=e.getElementsByTagName("*"),t){for(r={},n=i=0;e=o[n];n++){var a,s=e.className;(a="function"==typeof s.split)&&(a=0<=ne(s.split(/\s+/),t)),a&&(r[i++]=e)}return r.length=i,r}return o}function F(t,e){for(var n=0;t;){if(e(t))return t;t=t.parentNode,n++}return null}function G(t){S.call(this),this.m=1,this.g=[],this.h=0,this.a=[],this.b={},this.v=!!t}function z(t,e,n){var i=Ne;if(t=i.b[t]){var r=i.a;(t=T(t,function(t){return r[t+1]==e&&r[t+2]==n}))&&i.F(t)}}function q(t,e,n){U(function(){t.apply(e,n)})}function X(t){this.a=t}function H(t){if(t.a)try{t.a.setItem("__sak","1"),t.a.removeItem("__sak")}catch(e){}}function J(){var t=null;try{t=window.localStorage||null}catch(e){}this.a=t}function $(){var t=null;try{t=window.sessionStorage||null}catch(e){}this.a=t}function Q(){ie(Ye,function(t){t()})}function Z(t){var e=A(document.getElementsByTagName("yt:"+t));t="yt-"+t;var n=document;return t=A(n.querySelectorAll&&n.querySelector?n.querySelectorAll("."+t):K(t)),x(e,t)}function tt(t,e){return"yt:"==t.tagName.toLowerCase().substr(0,3)?t.getAttribute(e):t?t.dataset?t.dataset[b(e)]:t.getAttribute("data-"+e):null}function et(t,e){Ne.I.apply(Ne,arguments)}function nt(t,e,n){return t.addEventListener&&("mouseenter"!=e||"onmouseenter"in document?"mouseleave"!=e||"onmouseenter"in document?"mousewheel"==e&&"MozBoxSizing"in document.documentElement.style&&(e="MozMousePixelScroll"):e="mouseout":e="mouseover"),f(function(i){return i[0]==t&&i[1]==e&&i[2]==n&&0==i[4]})}function it(t,e,n){if(t&&(t.addEventListener||t.attachEvent)){var i=nt(t,e,n);if(!i){var r,i=++ke.count+"",o=!("mouseenter"!=e&&"mouseleave"!=e||!t.addEventListener||"onmouseenter"in document);r=o?function(i){if(i=new E(i),!F(i.relatedTarget,function(e){return e==t}))return i.currentTarget=t,i.type=e,n.call(t,i)}:function(e){return e=new E(e),e.currentTarget=t,n.call(t,e)},r=m(r),t.addEventListener?("mouseenter"==e&&o?e="mouseover":"mouseleave"==e&&o?e="mouseout":"mousewheel"==e&&"MozBoxSizing"in document.documentElement.style&&(e="MozMousePixelScroll"),t.addEventListener(e,r,!1)):t.attachEvent("on"+e,r),Re[i]=[t,e,n,r,!1]}}}function rt(t){t&&("string"==typeof t&&(t=[t]),ie(t,function(t){if(t in Re){var e=Re[t],n=e[0],i=e[1],r=e[3],e=e[4];n.removeEventListener?n.removeEventListener(i,r,e):n.detachEvent&&n.detachEvent("on"+i,r),delete Re[t]}}))}function ot(t,e,n){if(this.b=e,this.h=this.a=null,this.g=this[_t]||(this[_t]=++Lt),this.c=0,this.B=!1,this.w=[],this.f=null,this.m=n,this.v={},e=document,(t=r(t)?e.getElementById(t):t)&&("iframe"!=t.tagName.toLowerCase()&&(e=ut(this,t),this.h=t,(n=t.parentNode)&&n.replaceChild(e,t),t=e),this.a=t,this.a.id||(e=t=this.a,e=e[_t]||(e[_t]=++Lt),t.id="widget"+e),Oe[this.a.id]=this,window.postMessage)){this.f=new G,ht(this),t=ft(this.b,"events");for(var i in t)t.hasOwnProperty(i)&&this.addEventListener(i,t[i]);for(var o in Me)at(this,o)}}function at(t,e){var n=e.split(".");if(2==n.length){var i=n[1];t.m==n[0]&&ct(t,i)}}function st(t,e,n){n=n||[],n=Array.prototype.slice.call(n),e={event:"command",func:e,args:n},t.B?t.C(e):t.w.push(e)}function ut(t,e){for(var n=document.createElement("iframe"),i=e.attributes,r=0,o=i.length;r<o;r++){var a=i[r].value;null!=a&&""!=a&&"null"!=a&&n.setAttribute(i[r].name,a)}n.setAttribute("frameBorder",0),n.setAttribute("allowfullscreen",1),n.setAttribute("title","YouTube "+ft(t.b,"title")),(i=ft(t.b,"width"))&&n.setAttribute("width",i),(i=ft(t.b,"height"))&&n.setAttribute("height",i);var s=t.s();return s.enablejsapi=window.postMessage?1:0,window.location.host&&(s.origin=window.location.protocol+"//"+window.location.host),s.widgetid=t.g,window.location.href&&ie(["debugjs","debugcss"],function(t){var e;e=window.location.href;var n,i=e.search(se);t:{n=0;for(var r=t.length;0<=(n=e.indexOf(t,n))&&n<i;){var o=e.charCodeAt(n-1);if((38==o||63==o)&&(o=e.charCodeAt(n+r),!o||61==o||38==o||35==o))break t;n+=r+1}n=-1}0>n?e=null:(r=e.indexOf("&",n),(0>r||r>i)&&(r=i),n+=t.length+1,e=decodeURIComponent(e.substr(n,r-n).replace(/\+/g," "))),null===e||(s[t]=e)}),n.src=ft(t.b,"host")+t.u()+"?"+Y(s),n}function ht(t){pt(t.b,t,t.g),t.c=g(u(t.H,t)),it(t.a,"load",u(function(){window.clearInterval(this.c),this.c=g(u(this.H,this))},t))}function ct(t,e){t.v[e]||(t.v[e]=!0,st(t,"addEventListener",[e]))}function lt(t){if(this.c=t||{},this.a={},this.a.host="http://www.youtube.com",this.a.title="",this.f=this.b=!1,t=document.getElementById("www-widgetapi-script"),this.b=!!("https:"==document.location.protocol||t&&0==t.src.indexOf("https:"))){t=[this.c,window.YTConfig||{},this.a];for(var e=0;e<t.length;e++)t[e].host&&(t[e].host=t[e].host.replace("http://","https://"))}}function ft(t,e){for(var n=[t.c,window.YTConfig||{},t.a],i=0;i<n.length;i++){var r=n[i][e];if(void 0!=r)return r}return null}function pt(t,e,n){De||(De={},it(window,"message",u(t.g,t))),De[n]=e}function dt(t){return(0==t.search("cue")||0==t.search("load"))&&"loadModule"!=t}function vt(t){return 0==t.search("get")||0==t.search("is")}function yt(t){lt.call(this,t),this.a.title="video player",this.a.videoId="",this.a.width=640,this.a.height=360}function gt(t){lt.call(this,t),this.a.title="Thumbnail",this.a.videoId="",this.a.width=120,this.a.height=68}function mt(t,e){var n=new yt(e);ot.call(this,t,n,"player"),this.i={},this.j={}}function wt(t){if("iframe"!=t.tagName.toLowerCase()){var e=tt(t,"videoid");if(e){var n=tt(t,"width"),i=tt(t,"height");new mt(t,{videoId:e,width:n,height:i})}}}function bt(t,e){if(o(e))for(var n in e)t.j[n]=e[n]}function Et(t,e){ie(e,function(t){this[t]||("getCurrentTime"==t?this[t]=function(){var t=this.j.currentTime;if(1==this.j.playerState){var e=(jt()/1e3-this.j.currentTimeLastUpdated_)*this.j.playbackRate;0<e&&(t+=Math.min(e,1))}return t}:dt(t)?this[t]=function(){return this.j={},this.i={},st(this,t,arguments),this}:vt(t)?this[t]=function(){var e=0;return 0==t.search("get")?e=3:0==t.search("is")&&(e=2),this.j[t.charAt(e).toLowerCase()+t.substr(e+1)]}:this[t]=function(){return st(this,t,arguments),this})},t)}function St(t,e){var n=new gt(e);ot.call(this,t,n,"thumbnail")}function It(t){if("iframe"!=t.tagName.toLowerCase()){var e=tt(t,"videoid");if(e){e={videoId:e,events:{}},e.width=tt(t,"width"),e.height=tt(t,"height"),e.thumbWidth=tt(t,"thumb-width"),e.thumbHeight=tt(t,"thumb-height"),e.thumbAlign=tt(t,"thumb-align");var n=tt(t,"onclick");n&&(e.events.onClick=n),new St(t,e)}}}function Tt(t){lt.call(this,t),this.a.host="https://www.youtube.com",this.a.title="upload widget",this.a.width=640,this.a.height=.67*ft(this,"width")}function xt(t,e){var n=new Tt(e);ot.call(this,t,n,"upload")}for(var At,Ct="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},Pt="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,Ot=["String","prototype","repeat"],Yt=0;Yt<Ot.length-1;Yt++){var Nt=Ot[Yt];Nt in Pt||(Pt[Nt]={}),Pt=Pt[Nt]}var Mt=Ot[Ot.length-1],Rt=Pt[Mt],kt=Rt?Rt:function(t){var e;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");if(e=this+"",0>t||1342177279<t)throw new RangeError("Invalid count value");t|=0;for(var n="";t;)1&t&&(n+=e),(t>>>=1)&&(e+=e);return n};kt!=Rt&&null!=kt&&Ct(Pt,Mt,{configurable:!0,writable:!0,value:kt});var Dt=this,_t="closure_uid_"+(1e9*Math.random()>>>0),Lt=0,jt=Date.now||function(){return+new Date};l.prototype.get=function(){var t;return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t};var Ut=Dt.JSON.parse,Wt=Dt.JSON.stringify,Bt=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Vt=/&/g,Kt=/</g,Ft=/>/g,Gt=/"/g,zt=/'/g,qt=/\x00/g,Xt=/[\x00&<>"']/,Ht=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};h("yt.config_",Ht),h("yt.tokens_",window.yt&&window.yt.tokens_||{});var Jt=window.yt&&window.yt.msgs_||t("window.ytcfg.msgs")||{};h("yt.msgs_",Jt);var $t={};E.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())},E.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())},E.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};var Qt={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};S.prototype.c=!1,S.prototype.dispose=function(){this.c||(this.c=!0,this.A())},S.prototype.A=function(){if(this.f)for(;this.f.length;)this.f.shift()()};var Zt;t:{var te=Dt.navigator;if(te){var ee=te.userAgent;if(ee){Zt=ee;break t}}Zt=""}var ne=Array.prototype.indexOf?function(t,e,n){return Array.prototype.indexOf.call(t,e,n)}:function(t,e,n){if(n=null==n?0:0>n?Math.max(0,t.length+n):n,r(t))return r(e)&&1==e.length?t.indexOf(e,n):-1;for(;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ie=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,o=r(t)?t.split(""):t,a=0;a<i;a++)a in o&&e.call(n,o[a],a,t)},re=new l(function(){return new P},function(t){t.reset()},100);C.prototype.remove=function(){var t=null;return this.a&&(t=this.a,this.a=this.a.next,this.a||(this.b=null),t.next=null),t},P.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},P.prototype.reset=function(){this.next=this.b=this.a=null};var oe,ae=/^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,se=/#|$/,ue="StopIteration"in Dt?Dt.StopIteration:{message:"StopIteration",stack:""};R.prototype.next=function(){throw ue},R.prototype.o=function(){return this};var he,ce=I("Opera"),le=I("Trident")||I("MSIE"),fe=I("Edge"),pe=I("Gecko")&&!(-1!=Zt.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),de=-1!=Zt.toLowerCase().indexOf("webkit")&&!I("Edge");t:{var ve="",ye=function(){var t=Zt;return pe?/rv\:([^\);]+)(\)|;)/.exec(t):fe?/Edge\/([\d\.]+)/.exec(t):le?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):de?/WebKit\/(\S+)/.exec(t):ce?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(ye&&(ve=ye?ye[1]:""),le){var ge=L();if(null!=ge&&ge>parseFloat(ve)){he=String(ge);break t}}he=ve}var me,we=he,be={},Ee=Dt.document;me=Ee&&le?L()||("CSS1Compat"==Ee.compatMode?parseInt(we,10):5):void 0;var Se,Ie,Te=!1,xe=new C;if(!(Ie=!pe&&!le)){var Ae;(Ae=le)&&(Ae=9<=Number(me)),Ie=Ae}Ie||pe&&j("1.9.1"),le&&j("9"),c(V,d),V.prototype.clear=function(){var t=_(this.o(!0)),e=this;ie(t,function(t){e.remove(t)})},c(G,S),At=G.prototype,At.subscribe=function(t,e,n){var i=this.b[t];i||(i=this.b[t]=[]);var r=this.m;return this.a[r]=t,this.a[r+1]=e,this.a[r+2]=n,this.m=r+3,i.push(r),r},At.F=function(t){var n=this.a[t];if(n){var i=this.b[n];if(0!=this.h)this.g.push(t),this.a[t+1]=e;else{if(i){var r=ne(i,t);0<=r&&Array.prototype.splice.call(i,r,1)}delete this.a[t],delete this.a[t+1],delete this.a[t+2]}}return!!n},At.I=function(t,e){var n=this.b[t];if(n){for(var i=Array(arguments.length-1),r=1,o=arguments.length;r<o;r++)i[r-1]=arguments[r];if(this.v)for(r=0;r<n.length;r++){var a=n[r];q(this.a[a+1],this.a[a+2],i)}else{this.h++;try{for(r=0,o=n.length;r<o;r++)a=n[r],this.a[a+1].apply(this.a[a+2],i)}finally{if(this.h--,0<this.g.length&&0==this.h)for(;n=this.g.pop();)this.F(n)}}return 0!=r}return!1},At.clear=function(t){if(t){var e=this.b[t];e&&(ie(e,this.F,this),delete this.b[t])}else this.a.length=0,this.b={}},At.A=function(){G.D.A.call(this),this.clear(),this.g.length=0},c(X,V),At=X.prototype,At.set=function(t,e){try{this.a.setItem(t,e)}catch(n){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},At.get=function(t){if(t=this.a.getItem(t),!r(t)&&null!==t)throw"Storage mechanism: Invalid value was encountered";return t},At.remove=function(t){this.a.removeItem(t)},At.o=function(t){var e=0,n=this.a,i=new R;return i.next=function(){if(e>=n.length)throw ue;var i=n.key(e++);if(t)return i;if(i=n.getItem(i),!r(i))throw"Storage mechanism: Invalid value was encountered";return i},i},At.clear=function(){this.a.clear()},At.key=function(t){return this.a.key(t)},c(J,X),c($,X);var Ce=t("yt.dom.getNextId_");if(!Ce){Ce=function(){return++Pe},h("yt.dom.getNextId_",Ce);var Pe=0}var Oe={},Ye=[],Ne=new G,Me={},Re=t("yt.events.listeners_")||{};h("yt.events.listeners_",Re);var ke=t("yt.events.counter_")||{count:0};h("yt.events.counter_",ke),H(new J),H(new $),At=ot.prototype,At.S=function(t,e){return this.a.width=t,this.a.height=e,this},At.R=function(){return this.a},At.J=function(t){this.l(t.event,t)},At.addEventListener=function(t,e){var n=e;return"string"==typeof e&&(n=function(){window[e].apply(window,arguments)}),this.f.subscribe(t,n),ct(this,t),this},At.P=function(){this.a.id&&(Oe[this.a.id]=null);var t=this.f;if(t&&"function"==typeof t.dispose&&t.dispose(),this.h){var t=this.a,e=t.parentNode;e&&e.replaceChild(this.h,t)}else(t=this.a)&&t.parentNode&&t.parentNode.removeChild(t);De&&(De[this.g]=null),this.b=null;var n,t=this.a;for(n in Re)Re[n][0]==t&&rt(n);this.h=this.a=null},At.s=function(){return{}},At.l=function(t,e){if(!this.f.c){var n={target:this,data:e};this.f.I(t,n),et(this.m+"."+t,n)}},At.H=function(){this.a&&this.a.contentWindow?this.C({event:"listening"}):window.clearInterval(this.c)},At.C=function(t){t.id=this.g,t.channel="widget",t=Wt(t);var e;e=this.b;var n,i=this.a.src.match(ae);n=i[1];var r=i[2],o=i[3],i=i[4],a="";for(n&&(a+=n+":"),o&&(a+="//",r&&(a+=r+"@"),a+=o,i&&(a+=":"+i)),n=a,e=0==n.indexOf("https:")?[n]:e.b?[n.replace("http:","https:")]:e.f?[n]:[n,n.replace("http:","https:")],n=0;n<e.length;n++)try{this.a.contentWindow.postMessage(t,e[n])}catch(s){if(!s.name||"SyntaxError"!=s.name)throw s;w(s,"WARNING")}};var De=null;lt.prototype.g=function(t){if(t.origin==ft(this,"host")||t.origin==ft(this,"host").replace(/^http:/,"https:")){var e;try{e=Ut(t.data)}catch(n){return}this.f=!0,this.b||0!=t.origin.indexOf("https:")||(this.b=!0),(t=De[e.id])&&(t.B=!0,t.B&&(ie(t.w,t.C,t),t.w.length=0),t.J(e))}},c(yt,lt),c(gt,lt),c(mt,ot),At=mt.prototype,At.u=function(){return"/embed/"+ft(this.b,"videoId")},At.s=function(){var t=ft(this.b,"playerVars");if(t){var e,n={};for(e in t)n[e]=t[e];t=n}else t={};return window!=window.top&&document.referrer&&(t.widget_referrer=document.referrer.substring(0,256)),t},At.J=function(t){var e=t.event;switch(t=t.info,e){case"apiInfoDelivery":if(o(t))for(var n in t)this.i[n]=t[n];break;case"infoDelivery":bt(this,t);break;case"initialDelivery":window.clearInterval(this.c),this.j={},this.i={},Et(this,t.apiInterface),bt(this,t);break;default:this.l(e,t)}},At.V=function(){var t;t='<iframe width="'+parseInt(ft(this.b,"width"),10)+'" height="'+parseInt(ft(this.b,"height"),10)+'" src="';var e=ft(this.b,"host")+this.u();return Xt.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(Vt,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(Kt,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(Ft,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(Gt,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(zt,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(qt,"&#0;"))),t=t+e+'" frameborder="0" allowfullscreen></iframe>'},At.U=function(t){return this.i.namespaces?t?this.i[t].options||[]:this.i.namespaces||[]:[]},At.T=function(t,e){if(this.i.namespaces&&t&&e)return this.i[t][e]},c(St,ot),St.prototype.u=function(){return"/embed/"+ft(this.b,"videoId")},St.prototype.s=function(){return{player:0,thumb_width:ft(this.b,"thumbWidth"),thumb_height:ft(this.b,"thumbHeight"),thumb_align:ft(this.b,"thumbAlign")}},St.prototype.l=function(t,e){St.D.l.call(this,t,e?e.info:void 0)},c(Tt,lt),c(xt,ot),At=xt.prototype,At.u=function(){return"/upload_embed"},At.s=function(){var t={},e=ft(this.b,"webcamOnly");return null!=e&&(t.webcam_only=e),t},At.l=function(t,e){xt.D.l.call(this,t,e),"onApiReady"==t&&st(this,"hostWindowReady")},At.K=function(t){st(this,"setVideoDescription",arguments)},At.M=function(t){st(this,"setVideoKeywords",arguments)},At.N=function(t){st(this,"setVideoPrivacy",arguments)},At.L=function(t){st(this,"setVideoDraftPrivacy",arguments)},At.O=function(t){st(this,"setVideoTitle",arguments)},h("YT.PlayerState.UNSTARTED",-1),h("YT.PlayerState.ENDED",0),h("YT.PlayerState.PLAYING",1),h("YT.PlayerState.PAUSED",2),h("YT.PlayerState.BUFFERING",3),h("YT.PlayerState.CUED",5),h("YT.UploadWidgetEvent.API_READY","onApiReady"),h("YT.UploadWidgetEvent.UPLOAD_SUCCESS","onUploadSuccess"),h("YT.UploadWidgetEvent.PROCESSING_COMPLETE","onProcessingComplete"),h("YT.UploadWidgetEvent.STATE_CHANGE","onStateChange"),h("YT.UploadWidgetState.IDLE",0),h("YT.UploadWidgetState.PENDING",1),h("YT.UploadWidgetState.ERROR",2),h("YT.UploadWidgetState.PLAYBACK",3),h("YT.UploadWidgetState.RECORDING",4),h("YT.UploadWidgetState.STOPPED",5),h("YT.get",function(t){return Oe[t]}),h("YT.scan",Q),h("YT.subscribe",function(t,e,n){Ne.subscribe(t,e,n),Me[t]=!0;for(var i in Oe)at(Oe[i],t)}),h("YT.unsubscribe",function(t,e,n){z(t,e,n)}),h("YT.Player",mt),h("YT.Thumbnail",St),h("YT.UploadWidget",xt),ot.prototype.destroy=ot.prototype.P,ot.prototype.setSize=ot.prototype.S,ot.prototype.getIframe=ot.prototype.R,ot.prototype.addEventListener=ot.prototype.addEventListener,mt.prototype.getVideoEmbedCode=mt.prototype.V,mt.prototype.getOptions=mt.prototype.U,mt.prototype.getOption=mt.prototype.T,xt.prototype.setVideoDescription=xt.prototype.K,xt.prototype.setVideoKeywords=xt.prototype.M,xt.prototype.setVideoPrivacy=xt.prototype.N,xt.prototype.setVideoTitle=xt.prototype.O,xt.prototype.setVideoDraftPrivacy=xt.prototype.L,Ye.push(function(){var t=Z("player");ie(t,wt)}),Ye.push(function(){var t=Z("thumbnail");ie(t,It)}),"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Q();var _e=t("onYTReady");_e&&_e();var Le=t("onYouTubeIframeAPIReady");Le&&Le();var je=t("onYouTubePlayerAPIReady");je&&je()}).call(this);
//# sourceMappingURL=maps/www-widgetapi.js.map