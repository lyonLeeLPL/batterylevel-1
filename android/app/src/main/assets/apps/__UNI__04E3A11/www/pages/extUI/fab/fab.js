!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=561)}({0:function(t,e,o){"use strict";function i(t,e,o,i,n,r,a,c,s,l){var f,u="function"==typeof t?t.options:t;if(s){u.components||(u.components={});var d=Object.prototype.hasOwnProperty;for(var p in s)d.call(s,p)&&!d.call(u.components,p)&&(u.components[p]=s[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(u.mixins||(u.mixins=[])).push(l)),e&&(u.render=e,u.staticRenderFns=o,u._compiled=!0),i&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=f):n&&(f=c?function(){n.call(this,this.$root.$options.shadowRoot)}:n),f)if(u.functional){u._injectStyles=f;var h=u.render;u.render=function(t,e){return f.call(e),h(t,e)}}else{var _=u.beforeCreate;u.beforeCreate=_?[].concat(_,f):[f]}return{exports:t,options:u}}o.d(e,"a",(function(){return i}))},1:function(t,e){t.exports={}},16:function(t,e,o){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];console[t].apply(console,o)},e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var r=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var o=i(t).toUpperCase();t="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+t+"---END:"+o+"---":String(t)}return t})),c="";if(a.length>1){var s=a.pop();c=a.join("---COMMA---"),0===s.indexOf(" at ")?c+=s:c+="---COMMA---"+s}else c=a[0];console[r](c)}},187:function(t,e,o){"use strict";o.r(e);var i=o(188),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},188:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i;i=uni.getSystemInfoSync().platform;var n={name:"UniFab",props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:"android"===i,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#3c3e49"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+10+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,e){this.styles=Object.assign({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,e){this.$emit("trigger",{index:t,item:e})},getPosition:function(t,e,o){return 0===t?this.horizontal===e&&this.vertical===o:1===t?this.direction===e&&this.vertical===o:2===t?this.direction===e&&this.horizontal===o:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin}}};e.default=n},189:function(t,e){t.exports={"uni-fab":{position:"fixed",justifyContent:"center",alignItems:"center",zIndex:10},"uni-fab--active":{opacity:1},"uni-fab--leftBottom":{left:"5",bottom:"20",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"uni-fab--leftTop":{left:"5",top:"30",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"uni-fab--rightBottom":{right:"5",bottom:"20",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"uni-fab--rightTop":{right:"5",top:"30",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"uni-fab__circle":{position:"fixed",justifyContent:"center",alignItems:"center",width:"55",height:"55",backgroundColor:"#3c3e49",borderRadius:"55",zIndex:11},"uni-fab__circle--leftBottom":{left:"15",bottom:"30"},"uni-fab__circle--leftTop":{left:"15",top:"40"},"uni-fab__circle--rightBottom":{right:"15",bottom:"30"},"uni-fab__circle--rightTop":{right:"15",top:"40"},"uni-fab__circle--left":{left:0},"uni-fab__circle--right":{right:0},"uni-fab__circle--top":{top:0},"uni-fab__circle--bottom":{bottom:0},"uni-fab__plus":{fontWeight:"bold"},"fab-circle-v":{position:"absolute",width:"3",height:"31",left:"26",top:"12",backgroundColor:"#FFFFFF",transform:"rotate(0deg)",transitionProperty:"transform",transitionDuration:300},"@TRANSITION":{"fab-circle-v":{property:"transform",duration:300},"fab-circle-h":{property:"transform",duration:300},"uni-fab__content":{property:"width,height",duration:200},"uni-fab__item":{property:"opacity",duration:200}},"fab-circle-h":{position:"absolute",width:"31",height:"3",left:"12",top:"26",backgroundColor:"#FFFFFF",transform:"rotate(0deg)",transitionProperty:"transform",transitionDuration:300},"uni-fab__plus--active":{transform:"rotate(135deg)"},"uni-fab__content":{flexDirection:"row",borderRadius:"55",overflow:"hidden",transitionProperty:"width,height",transitionDuration:200,width:"55",borderColor:"#DDDDDD",borderWidth:"1rpx",borderStyle:"solid"},"uni-fab__content--other-platform":{borderWidth:"0",boxShadow:"0 0 5px 2px rgba(0, 0, 0, 0.2)"},"uni-fab__content--left":{justifyContent:"flex-start"},"uni-fab__content--right":{justifyContent:"flex-end"},"uni-fab__content--flexDirection":{flexDirection:"column",justifyContent:"flex-end"},"uni-fab__content--flexDirectionStart":{flexDirection:"column",justifyContent:"flex-start"},"uni-fab__content--flexDirectionEnd":{flexDirection:"column",justifyContent:"flex-end"},"uni-fab__item":{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"55",height:"55",opacity:0,transitionProperty:"opacity",transitionDuration:200},"uni-fab__item--active":{opacity:1},"uni-fab__item-image":{width:"25",height:"25",marginBottom:"3"},"uni-fab__item-text":{color:"#FFFFFF",fontSize:"12"},"uni-fab__item--first":{width:"55"}}},190:function(t,e,o){"use strict";var i=o(191),n=o.n(i);e.default=n.a},191:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{},data:function(){return{title:"uni-fab",directionStr:"\u5782\u76f4",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF"},content:[{iconPath:"/static/component.png",selectedIconPath:"/static/componentHL.png",text:"\u7ec4\u4ef6",active:!1},{iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png",text:"API",active:!1},{iconPath:"/static/template.png",selectedIconPath:"/static/templateHL.png",text:"\u6a21\u7248",active:!1}]}},onBackPress:function(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger:function(e){t("log",e," at pages/extUI/fab/fab.nvue:60"),this.content[e.index].active=!e.item.active,uni.showModal({title:"\u63d0\u793a",content:"\u60a8".concat(this.content[e.index].active?"\u9009\u4e2d\u4e86":"\u53d6\u6d88\u4e86").concat(e.item.text),success:function(e){e.confirm?t("log","\u7528\u6237\u70b9\u51fb\u786e\u5b9a"," at pages/extUI/fab/fab.nvue:67"):e.cancel&&t("log","\u7528\u6237\u70b9\u51fb\u53d6\u6d88"," at pages/extUI/fab/fab.nvue:69")}})},fabClick:function(){uni.showToast({title:"\u70b9\u51fb\u4e86\u60ac\u6d6e\u6309\u94ae",icon:"none"})},switchBtn:function(t,e){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"\u5782\u76f4":"\u6c34\u5e73"):(this.horizontal=t,this.vertical=e),this.$forceUpdate()}}};e.default=o}).call(this,o(16).default)},192:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF",width:"250"},"word-btn--hover":{backgroundColor:"#4ca2ff"},"uni-fab-box":{flexDirection:"row",justifyContent:"center",position:"absolute",top:0,bottom:0,left:0,right:0},"uni-padding-wrap":{flexDirection:"column",justifyContent:"center",alignItems:"center"}}},376:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}));var i={uniFab:o(562).default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["uni-fab-box"]},[o("view",{staticClass:["uni-padding-wrap"]},[o("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn(0)}}},[o("u-text",{staticClass:["word-btn-white"]},[t._v("\u5207\u6362\u83dc\u5355("+t._s(t.directionStr)+"\u663e\u793a)")])]),o("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn("left","bottom")}}},[o("u-text",{staticClass:["word-btn-white"]},[t._v("\u5de6\u4e0b\u89d2\u663e\u793a")])]),o("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn("right","bottom")}}},[o("u-text",{staticClass:["word-btn-white"]},[t._v("\u53f3\u4e0b\u89d2\u663e\u793a")])]),o("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn("left","top")}}},[o("u-text",{staticClass:["word-btn-white"]},[t._v("\u5de6\u4e0a\u89d2\u663e\u793a")])]),o("view",{staticClass:["word-btn"],attrs:{hoverClass:"word-btn--hover",hoverStartTime:20,hoverStayTime:70},on:{click:function(e){t.switchBtn("right","top")}}},[o("u-text",{staticClass:["word-btn-white"]},[t._v("\u53f3\u4e0a\u89d2\u663e\u793a")])])]),o("uni-fab",{ref:"fab",attrs:{pattern:t.pattern,content:t.content,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction},on:{trigger:t.trigger,fabClick:t.fabClick}})],1)])},r=[]},434:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)?o("view",{staticClass:["uni-fab"],class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop}},[o("view",{staticClass:["uni-fab__content"],class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?o("view",{staticClass:["uni-fab__item","uni-fab__item--first"]}):t._e(),t._l(t.content,(function(e,i){return o("view",{key:i,staticClass:["uni-fab__item"],class:{"uni-fab__item--active":t.isShow},on:{click:function(o){t._onItemClick(i,e)}}},[o("u-image",{staticClass:["uni-fab__item-image"],attrs:{src:e.active?e.selectedIconPath:e.iconPath,mode:"widthFix"}}),o("u-text",{staticClass:["uni-fab__item-text"],style:{color:e.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(e.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?o("view",{staticClass:["uni-fab__item","uni-fab__item--first"]}):t._e()],2)]):t._e(),o("view",{staticClass:["uni-fab__circle","uni-fab__plus"],class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor},on:{click:t._onClick}},[o("view",{staticClass:["fab-circle-v"],class:{"uni-fab__plus--active":t.isShow}}),o("view",{staticClass:["fab-circle-h"],class:{"uni-fab__plus--active":t.isShow}})])])},n=[]},477:function(t,e,o){"use strict";o.r(e);var i=o(189),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},478:function(t,e,o){"use strict";o.r(e);var i=o(192),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},561:function(t,e,o){"use strict";o.r(e);o(6);var i=o(78);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),i.default.mpType="page",i.default.route="pages/extUI/fab/fab",i.default.el="#root",new Vue(i.default)},562:function(t,e,o){"use strict";o.r(e);var i=o(434),n=o(187);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);var a=o(0);var c=Object(a.a)(n.default,i.b,i.c,!1,null,"091101a8","6639a755",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(477).default,this.options.style):Object.assign(this.options.style,o(477).default)}).call(c),e.default=c.exports},6:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(7).default,Vue.prototype.__$appStyle__)},7:function(t,e,o){"use strict";o.r(e);var i=o(1),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e.default=n.a},78:function(t,e,o){"use strict";var i=o(376),n=o(190),r=o(0);var a=Object(r.a)(n.default,i.b,i.c,!1,null,null,"516634ce",!1,i.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(478).default,this.options.style):Object.assign(this.options.style,o(478).default)}).call(a),e.default=a.exports}});