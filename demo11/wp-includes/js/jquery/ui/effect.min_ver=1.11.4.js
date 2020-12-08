/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(s){var u,l,c,d,t,p,h,g,i,e,b,a,o,f,m,y,n,r,v,x,C="ui-effects-",w=s;function _(t,e,n){var r=g[e.type]||{};return null==t?n||!e.def?null:e.def:(t=r.floor?~~t:parseFloat(t),isNaN(t)?e.def:r.mod?(t+r.mod)%r.mod:t<0?0:r.max<t?r.max:t)}function k(i){var s=p(),f=s._rgba=[];return i=i.toLowerCase(),b(t,function(t,e){var n,r=e.re.exec(i),o=r&&e.parse(r),a=e.space||"rgba";if(o)return n=s[a](o),s[h[a].cache]=n[h[a].cache],f=s._rgba=n._rgba,!1}),f.length?("0,0,0,0"===f.join()&&u.extend(f,c.transparent),s):c[i]}function M(t,e,n){return 6*(n=(n+1)%1)<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function S(t){var e,n,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,o={};if(r&&r.length&&r[0]&&r[r[0]])for(n=r.length;n--;)"string"==typeof r[e=r[n]]&&(o[s.camelCase(e)]=r[e]);else for(e in r)"string"==typeof r[e]&&(o[e]=r[e]);return o}function j(t,e,n,r){return s.isPlainObject(t)&&(t=(e=t).effect),t={effect:t},null==e&&(e={}),s.isFunction(e)&&(r=e,n=null,e={}),"number"!=typeof e&&!s.fx.speeds[e]||(r=n,n=e,e={}),s.isFunction(n)&&(r=n,n=null),e&&s.extend(t,e),n=n||e.duration,t.duration=s.fx.off?0:"number"==typeof n?n:n in s.fx.speeds?s.fx.speeds[n]:s.fx.speeds._default,t.complete=r||e.complete,t}function I(t){return!(t&&"number"!=typeof t&&!s.fx.speeds[t])||("string"==typeof t&&!s.effects.effect[t]||(!!s.isFunction(t)||"object"==typeof t&&!t.effect))}return s.effects={effect:{}},
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
d=/^([\-+])=\s*(\d+\.?\d*)/,t=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],p=(u=w).Color=function(t,e,n,r){return new u.Color.fn.parse(t,e,n,r)},h={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},g={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=p.support={},e=u("<p>")[0],b=u.each,e.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=-1<e.style.backgroundColor.indexOf("rgba"),b(h,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),p.fn=u.extend(p.prototype,{parse:function(o,t,e,n){if(o===l)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=u(o).css(t),t=l);var a=this,r=u.type(o),i=this._rgba=[];return t!==l&&(o=[o,t,e,n],r="array"),"string"===r?this.parse(k(o)||c._default):"array"===r?(b(h.rgba.props,function(t,e){i[e.idx]=_(o[e.idx],e)}),this):"object"===r?(b(h,o instanceof p?function(t,e){o[e.cache]&&(a[e.cache]=o[e.cache].slice())}:function(t,n){var r=n.cache;b(n.props,function(t,e){if(!a[r]&&n.to){if("alpha"===t||null==o[t])return;a[r]=n.to(a._rgba)}a[r][e.idx]=_(o[t],e,!0)}),a[r]&&u.inArray(null,a[r].slice(0,3))<0&&(a[r][3]=1,n.from&&(a._rgba=n.from(a[r])))}),this):void 0},is:function(t){var o=p(t),a=!0,i=this;return b(h,function(t,e){var n,r=o[e.cache];return r&&(n=i[e.cache]||e.to&&e.to(i._rgba)||[],b(e.props,function(t,e){if(null!=r[e.idx])return a=r[e.idx]===n[e.idx]})),a}),a},_space:function(){var n=[],r=this;return b(h,function(t,e){r[e.cache]&&n.push(t)}),n.pop()},transition:function(t,i){var s=p(t),e=s._space(),n=h[e],r=0===this.alpha()?p("transparent"):this,f=r[n.cache]||n.to(r._rgba),c=f.slice();return s=s[n.cache],b(n.props,function(t,e){var n=e.idx,r=f[n],o=s[n],a=g[e.type]||{};null!==o&&(null===r?c[n]=o:(a.mod&&(o-r>a.mod/2?r+=a.mod:r-o>a.mod/2&&(r-=a.mod)),c[n]=_((o-r)*i+r,e)))}),this[e](c)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),n=e.pop(),r=p(t)._rgba;return p(u.map(e,function(t,e){return(1-n)*r[e]+n*t}))},toRgbaString:function(){var t="rgba(",e=u.map(this._rgba,function(t,e){return null==t?2<e?1:0:t});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=u.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),e&&e<3&&(t=Math.round(100*t)+"%"),t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),n=e.pop();return t&&e.push(~~(255*n)),"#"+u.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),p.fn.parse.prototype=p.fn,h.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,n,r=t[0]/255,o=t[1]/255,a=t[2]/255,i=t[3],s=Math.max(r,o,a),f=Math.min(r,o,a),c=s-f,u=s+f,l=.5*u;return e=f===s?0:r===s?60*(o-a)/c+360:o===s?60*(a-r)/c+120:60*(r-o)/c+240,n=0==c?0:l<=.5?c/u:c/(2-u),[Math.round(e)%360,n,l,null==i?1:i]},h.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,n=t[1],r=t[2],o=t[3],a=r<=.5?r*(1+n):r+n-r*n,i=2*r-a;return[Math.round(255*M(i,a,e+1/3)),Math.round(255*M(i,a,e)),Math.round(255*M(i,a,e-1/3)),o]},b(h,function(f,t){var n=t.props,i=t.cache,s=t.to,c=t.from;p.fn[f]=function(t){if(s&&!this[i]&&(this[i]=s(this._rgba)),t===l)return this[i].slice();var e,r=u.type(t),o="array"===r||"object"===r?t:arguments,a=this[i].slice();return b(n,function(t,e){var n=o["object"===r?t:e.idx];null==n&&(n=a[e.idx]),a[e.idx]=_(n,e)}),c?((e=p(c(a)))[i]=a,e):p(a)},b(n,function(i,s){p.fn[i]||(p.fn[i]=function(t){var e,n=u.type(t),r="alpha"===i?this._hsla?"hsla":"rgba":f,o=this[r](),a=o[s.idx];return"undefined"===n?a:("function"===n&&(t=t.call(this,a),n=u.type(t)),null==t&&s.empty?this:("string"===n&&(e=d.exec(t))&&(t=a+parseFloat(e[2])*("+"===e[1]?1:-1)),o[s.idx]=t,this[r](o)))})})}),p.hook=function(t){var e=t.split(" ");b(e,function(t,a){u.cssHooks[a]={set:function(t,e){var n,r,o="";if("transparent"!==e&&("string"!==u.type(e)||(n=k(e)))){if(e=p(n||e),!i.rgba&&1!==e._rgba[3]){for(r="backgroundColor"===a?t.parentNode:t;(""===o||"transparent"===o)&&r&&r.style;)try{o=u.css(r,"backgroundColor"),r=r.parentNode}catch(t){}e=e.blend(o&&"transparent"!==o?o:"_default")}e=e.toRgbaString()}try{t.style[a]=e}catch(t){}}},u.fx.step[a]=function(t){t.colorInit||(t.start=p(t.elem,a),t.end=p(t.end),t.colorInit=!0),u.cssHooks[a].set(t.elem,t.start.transition(t.end,t.pos))}})},p.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),u.cssHooks.borderColor={expand:function(n){var r={};return b(["Top","Right","Bottom","Left"],function(t,e){r["border"+e+"Color"]=n}),r}},c=u.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"},m=["add","remove","toggle"],y={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},s.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){s.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(w.style(t.elem,e,t.end),t.setAttr=!0)}}),s.fn.addBack||(s.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),s.effects.animateClass=function(o,t,e,n){var a=s.speed(t,e,n);return this.queue(function(){var t,n=s(this),e=n.attr("class")||"",r=a.children?n.find("*").addBack():n;r=r.map(function(){return{el:s(this),start:S(this)}}),(t=function(){s.each(m,function(t,e){o[e]&&n[e+"Class"](o[e])})})(),r=r.map(function(){return this.end=S(this.el[0]),this.diff=function(t,e){var n,r,o={};for(n in e)r=e[n],t[n]!==r&&(y[n]||!s.fx.step[n]&&isNaN(parseFloat(r))||(o[n]=r));return o}(this.start,this.end),this}),n.attr("class",e),r=r.map(function(){var t=this,e=s.Deferred(),n=s.extend({},a,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,n),e.promise()}),s.when.apply(s,r.get()).done(function(){t(),s.each(arguments,function(){var e=this.el;s.each(this.diff,function(t){e.css(t,"")})}),a.complete.call(n[0])})})},s.fn.extend({addClass:(f=s.fn.addClass,function(t,e,n,r){return e?s.effects.animateClass.call(this,{add:t},e,n,r):f.apply(this,arguments)}),removeClass:(o=s.fn.removeClass,function(t,e,n,r){return 1<arguments.length?s.effects.animateClass.call(this,{remove:t},e,n,r):o.apply(this,arguments)}),toggleClass:(a=s.fn.toggleClass,function(t,e,n,r,o){return"boolean"==typeof e||void 0===e?n?s.effects.animateClass.call(this,e?{add:t}:{remove:t},n,r,o):a.apply(this,arguments):s.effects.animateClass.call(this,{toggle:t},e,n,r)}),switchClass:function(t,e,n,r,o){return s.effects.animateClass.call(this,{add:e,remove:t},n,r,o)}}),s.extend(s.effects,{version:"1.11.4",save:function(t,e){for(var n=0;n<e.length;n++)null!==e[n]&&t.data(C+e[n],t[0].style[e[n]])},restore:function(t,e){var n,r;for(r=0;r<e.length;r++)null!==e[r]&&(void 0===(n=t.data(C+e[r]))&&(n=""),t.css(e[r],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var n,r;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=t[1]/e.width}return{x:r,y:n}},createWrapper:function(n){if(n.parent().is(".ui-effects-wrapper"))return n.parent();var r={width:n.outerWidth(!0),height:n.outerHeight(!0),float:n.css("float")},t=s("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:n.width(),height:n.height()},o=document.activeElement;try{o.id}catch(t){o=document.body}return n.wrap(t),n[0]!==o&&!s.contains(n[0],o)||s(o).focus(),t=n.parent(),"static"===n.css("position")?(t.css({position:"relative"}),n.css({position:"relative"})):(s.extend(r,{position:n.css("position"),zIndex:n.css("z-index")}),s.each(["top","left","bottom","right"],function(t,e){r[e]=n.css(e),isNaN(parseInt(r[e],10))&&(r[e]="auto")}),n.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),n.css(e),t.css(r).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!s.contains(t[0],e)||s(e).focus()),t},setTransition:function(r,t,o,a){return a=a||{},s.each(t,function(t,e){var n=r.cssUnit(e);0<n[0]&&(a[e]=n[0]*o+n[1])}),a}}),s.fn.extend({effect:function(){var a=j.apply(this,arguments),t=a.mode,e=a.queue,i=s.effects.effect[a.effect];if(s.fx.off||!i)return t?this[t](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)});function n(t){var e=s(this),n=a.complete,r=a.mode;function o(){s.isFunction(n)&&n.call(e[0]),s.isFunction(t)&&t()}(e.is(":hidden")?"hide"===r:"show"===r)?(e[r](),o()):i.call(e[0],a,o)}return!1===e?this.each(n):this.queue(e||"fx",n)},show:(v=s.fn.show,function(t){if(I(t))return v.apply(this,arguments);var e=j.apply(this,arguments);return e.mode="show",this.effect.call(this,e)}),hide:(r=s.fn.hide,function(t){if(I(t))return r.apply(this,arguments);var e=j.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)}),toggle:(n=s.fn.toggle,function(t){if(I(t)||"boolean"==typeof t)return n.apply(this,arguments);var e=j.apply(this,arguments);return e.mode="toggle",this.effect.call(this,e)}),cssUnit:function(t){var n=this.css(t),r=[];return s.each(["em","px","%","pt"],function(t,e){0<n.indexOf(e)&&(r=[parseFloat(n),e])}),r}}),x={},s.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){x[t]=function(t){return Math.pow(t,e+2)}}),s.extend(x,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),s.each(x,function(t,e){s.easing["easeIn"+t]=e,s.easing["easeOut"+t]=function(t){return 1-e(1-t)},s.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}}),s.effects});