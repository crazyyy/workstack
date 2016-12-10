/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.1.2
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
"use strict";!function(){function t(t){if("undefined"==typeof t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(t.constructor!==SVGSVGElement)throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}function e(e,r,n){this.setElement(e),this.setOptions(r),this.setCallback(n),this.frameLength=0,this.currentFrame=0,this.map=[],new t(e),this.mapping(),this.starter()}t.prototype.TYPES=["line","elipse","circle","polygon","polyline","rect"],t.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],t.prototype.scan=function(t){for(var e,r,n,o,a=t.querySelectorAll(this.TYPES.join(",")),i=0;i<a.length;i++)r=a[i],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),o=this.pathMaker(r,n),r.parentNode.replaceChild(o,r)},t.prototype.lineToPath=function(t){var e={};return e.d="M"+t.x1+","+t.y1+"L"+t.x2+","+t.y2,e},t.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,o=parseFloat(t.width)||0,a=parseFloat(t.height)||0;return e.d="M"+r+" "+n+" ",e.d+="L"+(r+o)+" "+n+" ",e.d+="L"+(r+o)+" "+(n+a)+" ",e.d+="L"+r+" "+(n+a)+" Z",e},t.prototype.polylineToPath=function(t){for(var e={},r=t.points.split(" "),n="M"+r[0],o=1;o<r.length;o++)-1!==r[o].indexOf(",")&&(n+="L"+r[o]);return e.d=n,e},t.prototype.polygonToPath=function(e){var r=t.prototype.polylineToPath(e);return r.d+="Z",r},t.prototype.elipseToPath=function(t){var e=t.cx-t.rx,r=t.cy,n=parseFloat(t.cx)+parseFloat(t.rx),o=t.cy,a={};return a.d="M"+e+","+r+"A"+t.rx+","+t.ry+" 0,1,1 "+n+","+o+"A"+t.rx+","+t.ry+" 0,1,1 "+e+","+o,a},t.prototype.circleToPath=function(t){var e={},r=t.cx-t.r,n=t.cy,o=parseFloat(t.cx)+parseFloat(t.r),a=t.cy;return e.d="M"+r+","+n+"A"+t.r+","+t.r+" 0,1,1 "+o+","+a+"A"+t.r+","+t.r+" 0,1,1 "+r+","+a,e},t.prototype.pathMaker=function(t,e){var r,n,o=document.createElementNS("http://www.w3.org/2000/svg","path");for(r=0;r<t.attributes.length;r++)n=t.attributes[r],-1===this.ATTR_WATCH.indexOf(n.name)&&o.setAttribute(n.name,n.value);for(r in e)o.setAttribute(r,e[r]);return o},t.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],-1!==this.ATTR_WATCH.indexOf(e.name)&&-1!==e.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var r,n,o;e.prototype.setElement=function(t){if("undefined"==typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(t.constructor!==SVGSVGElement)throw new Error('Vivus [constructor]: "element" parameter must be a string or a SVGelement');this.el=t},e.prototype.setOptions=function(t){var e=["delayed","async","oneByOne","scenario","scenario-sync"],r=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&-1===e.indexOf(t.type))throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&-1===r.indexOf(t.start))throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||r[0],this.isIE=-1!==navigator.userAgent.indexOf("MSIE"),this.duration=o(t.duration,120),this.delay=o(t.delay,null),this.dashGap=o(t.dashGap,2),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.selfDestroy=!!t.selfDestroy,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},e.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},e.prototype.mapping=function(){var t,e,r,n,a,i,s,h;for(h=i=s=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)r=e[t],a={el:r,length:Math.ceil(r.getTotalLength())},isNaN(a.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",r):(i+=a.length,this.map.push(a),r.style.strokeDasharray=a.length+" "+(a.length+this.dashGap),r.style.strokeDashoffset=a.length,this.isIE&&(a.length+=this.dashGap),this.renderPath(t));for(i=0===i?1:i,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),t=0;t<this.map.length;t++){switch(a=this.map[t],this.type){case"delayed":a.startAt=this.delayUnit*t,a.duration=this.duration-this.delay;break;case"oneByOne":a.startAt=s/i*this.duration,a.duration=a.length/i*this.duration;break;case"async":a.startAt=0,a.duration=this.duration;break;case"scenario-sync":r=e[t],n=this.parseAttr(r),a.startAt=h+(o(n["data-delay"],this.delayUnit)||0),a.duration=o(n["data-duration"],this.duration),h=void 0!==n["data-async"]?a.startAt:a.startAt+a.duration,this.frameLength=Math.max(this.frameLength,a.startAt+a.duration);break;case"scenario":r=e[t],n=this.parseAttr(r),a.startAt=o(n["data-start"],this.delayUnit)||0,a.duration=o(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,a.startAt+a.duration)}s+=a.length,this.frameLength=this.frameLength||this.duration}},e.prototype.drawer=function(){var t=this;this.currentFrame+=this.speed,this.currentFrame<=0?(this.stop(),this.reset()):this.currentFrame>=this.frameLength?(this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy(),this.callback(this)):(this.trace(),this.handle=r(function(){t.drawer()}))},e.prototype.trace=function(){var t,e,r;for(t=0;t<this.map.length;t++)r=this.map[t],e=(this.currentFrame-r.startAt)/r.duration,e=Math.max(0,Math.min(1,e)),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},e.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},e.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function(){t.isInViewport(t.el,1)&&(t.play(),window.removeEventListener("scroll",e))};window.addEventListener("scroll",e),e()}},e.prototype.reset=function(){return this.currentFrame=0,this.trace(),this},e.prototype.play=function(t){if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return this.speed=t||1,this.handle||this.drawer(),this},e.prototype.stop=function(){return this.handle&&(n(this.handle),delete this.handle),this},e.prototype.destroy=function(){var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},e.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},e.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),o=t.getBoundingClientRect(),a=o.height,i=r+o.top,s=i+a;return e=e||0,n>=i+a*e&&s>=r},e.prototype.docElem=window.document.documentElement,e.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return e>t?e:t},e.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),n=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}(),o=function(t,e){var r=parseInt(t,10);return r>=0?r:e},window.Vivus=e}();