webpackJsonp([19],{"/MR1":function(t,e,i){"use strict";var s={name:"TitleBar",props:{title:{type:String,default:"菜单"}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-bar cube-bg box-show"},[e("i",{staticClass:"mh-if double-arrow-left"}),this._v(" "),e("div",{staticClass:"title-bar-content"},[e("router-link",{staticClass:"title-bar-link",attrs:{to:"/"}},[this._v("主页")]),this._v(" "),e("router-link",{staticClass:"title-bar-link",attrs:{to:""}},[this._v(this._s(this.title))])],1),this._v(" "),e("i",{staticClass:"mh-if double-arrow-right"})])},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("G2HW")},"data-v-197b02a6",null);e.a=n.exports},"586J":function(t,e){},EJDv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"StyleList",components:{TitleBar:i("/MR1").a},created:function(){this.$http.post("getStyleListPagination").then(function(t){console.log(t)}).catch(function(t){console.log(t)})},methods:{}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("gemini-scrollbar",[e("div",{attrs:{id:"backstageLayout"}},[e("title-bar")],1)])},staticRenderFns:[]};var n=i("VU/8")(s,a,!1,function(t){i("586J")},"data-v-2d3837ce",null);e.default=n.exports},G2HW:function(t,e){}});
//# sourceMappingURL=19.3b3b99a69888b7c2519f.js.map