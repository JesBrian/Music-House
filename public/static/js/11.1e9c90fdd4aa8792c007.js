webpackJsonp([11],{"5qkK":function(t,s){},"8o2u":function(t,s){},H2c0:function(t,s){},Nd2h:function(t,s){},Revo:function(t,s,i){"use strict";var a={name:"SimilarPlayList",props:{title:{type:[String,Number],default:"相似的歌单推荐"},dataSource:{type:Array,default:function(){return[]}}}},e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"base-container"},[i("div",{staticClass:"base-container-title"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.dataSource,function(s){return i("div",{key:s.id,staticClass:"similar-play-list box-show"},[i("router-link",{attrs:{to:"/play-list/song-group/"+s.id}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80",expression:"'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'"}],staticClass:"similar-play-list-img"})]),t._v(" "),i("div",{staticClass:"similar-play-list-info"},[i("router-link",{staticClass:"similar-play-list-title text-hidden",attrs:{to:"/play-list/song-group/"+s.id}},[t._v("\n        "+t._s(s.title)+"\n      ")]),t._v(" "),i("router-link",{staticClass:"similar-play-list-creator text-hidden",attrs:{to:"/singer-detail/hot-song/1"}},[t._v("\n        by JesBrian\n      ")])],1)],1)})],2)},staticRenderFns:[]};var n=i("VU/8")(a,e,!1,function(t){i("H2c0")},"data-v-f218a856",null);s.a=n.exports},a2yf:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("2+ZR"),e={name:"SimilarSong",props:{title:{type:[String,Number],default:"相似的歌曲推荐"},dataSource:{type:Array,default:function(){return[]}}},methods:{showModal:function(t){this.$store.commit("CHANGE_MODAL_TYPE",t)}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"base-container"},[i("div",{staticClass:"base-container-title"},[t._v(t._s(t.title))]),t._v(" "),t._l(t.dataSource,function(s){return i("div",{key:s.id,staticClass:"similar-song box-shadow"},[i("div",{staticClass:"similar-song-info"},[i("router-link",{staticClass:"similar-song-info-name",attrs:{to:"/song/"+s.id}},[t._v(t._s(s.name))]),t._v(" "),i("router-link",{staticClass:"similar-song-info-singer",attrs:{to:"/singer-detail/hot-song/1"}},[t._v("Singer 名称 Name")])],1),t._v(" "),i("div",{staticClass:"similar-song-oper"},[i("i",{staticClass:"mh-if play"}),t._v(" "),i("i",{staticClass:"mh-if plus",on:{click:function(s){t.showModal("Collection")}}})])])})],2)},staticRenderFns:[]};var r=i("VU/8")(e,n,!1,function(t){i("Nd2h")},"data-v-0379d53e",null).exports,o=i("Revo"),l=i("j7J5"),c=i("o42A"),u={name:"Song",components:{CommentTotal:a.a,DownloadClient:c.a,SimilarUser:l.a,SimilarPlayList:o.a,SimilarSong:r},data:function(){return{isShowDescriptionBtn:!1,isShowDescription:!1,similarUserList:[{id:101,name:"Jes"},{id:103,name:"察使"},{id:105,name:"JesBrian"},{id:108,name:"yui tgb"}],similarPlayListList:[{id:111,title:"歌单1"},{id:112,title:"歌单2歌单2"},{id:112,title:"歌单33"}],similarSongList:[{id:121,name:"相似歌曲1"},{id:122,name:"相似歌曲2"},{id:123,name:"相似歌曲3"},{id:124,name:"相似歌曲4"},{id:125,name:"相似歌曲5"}]}},mounted:function(){this.$refs.playListDescription.scrollHeight>this.$refs.playListDescription.clientHeight&&(this.isShowDescriptionBtn=!0)},methods:{showModal:function(t){this.$store.commit("CHANGE_MODAL_TYPE",t)}}},p={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"homeLayout"}},[i("div",{staticClass:"song-left box-show"},[i("div",{staticClass:"song-info-container"},[i("div",{staticClass:"song-info-poster"},[i("div",{staticClass:"song-info-poster-container box-show"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200",expression:"'http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200'"}],staticClass:"song-info-poster-img"})])]),t._v(" "),i("div",{staticClass:"song-info-base"},[i("p",{staticClass:"song-info-base-name"},[t._v("歌曲名称 song name 1561561")]),t._v(" "),i("div",{staticClass:"song-info-base-create"},[i("p",[t._v("\n            歌手："),i("router-link",{staticClass:"song-info-base-link",attrs:{to:"/singer-detail/hot-song/1"}},[t._v("JesBrian")])],1),t._v(" "),i("p",[t._v("\n            所属专辑："),i("router-link",{staticClass:"song-info-base-link",attrs:{to:"/play-list/song-group/1"}},[t._v("Play - List - Name")])],1)]),t._v(" "),i("div",{staticClass:"song-info-base-oper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"super-btn-out ripple",on:{click:function(s){t.showModal("Collection")}}},[i("span",{staticClass:"super-btn-in mh-if collection-music"},[t._v(" 收藏")])]),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"super-btn-out ripple",on:{click:function(s){t.showModal("Share")}}},[i("span",{staticClass:"super-btn-in mh-if share"},[t._v(" 分享")])])]),t._v(" "),i("div",{staticClass:"song-info-base-lyric"},[i("p",{ref:"playListDescription",staticClass:"song-info-base-lyric-container",style:t.isShowDescription?"height:100%;":"max-height:135px;"},[t._v("\n            歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分\n          ")]),t._v(" "),i("p",{staticClass:"song-info-base-lyric-oper"},[i("router-link",{staticClass:"oper-link",attrs:{to:"/lyric"}},[t._v("上传歌词")]),t._v(" "),i("router-link",{staticClass:"oper-link",attrs:{to:"/lyric"}},[t._v("歌词报错")])],1),t._v(" "),t.isShowDescriptionBtn?i("i",{staticClass:"show-description-btn",class:["mh-if",t.isShowDescription?"double-arrow-up":"double-arrow-down"],on:{click:function(s){t.isShowDescription=!t.isShowDescription}}}):t._e()])])]),t._v(" "),i("comment-total",{attrs:{"show-title":"","comment-num":122}})],1),t._v(" "),i("div",{staticClass:"song-right"},[i("similar-user",{attrs:{"data-source":t.similarUserList}}),t._v(" "),i("similar-play-list",{attrs:{title:"包含这首歌的歌单","data-source":t.similarPlayListList}}),t._v(" "),i("similar-song",{attrs:{"data-source":t.similarSongList}}),t._v(" "),i("download-client")],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"super-btn-out ripple"},[s("span",{staticClass:"super-btn-in mh-if play"},[this._v(" 播放")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"super-btn-out ripple"},[s("span",{staticClass:"super-btn-in mh-if menu"},[this._v(" 列表")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"super-btn-out ripple"},[s("span",{staticClass:"super-btn-in mh-if download"},[this._v(" 下载")])])}]};var d=i("VU/8")(u,p,!1,function(t){i("5qkK")},"data-v-2e6584f8",null);s.default=d.exports},j7J5:function(t,s,i){"use strict";var a={name:"SimilarUser",props:{title:{type:[String,Number],default:"喜欢这首歌的人"},dataSource:{type:Array,default:function(){return[]}}}},e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"base-container"},[s("div",{staticClass:"base-container-title"},[this._v(this._s(this.title))]),this._v(" "),s("div",{staticClass:"similar-user"},this._l(this.dataSource,function(t){return s("router-link",{key:t.id,staticClass:"similar-user-link",attrs:{to:"/user-info/"+t.id,title:t.name}},[s("img",{staticClass:"similar-user-avatar box-show",attrs:{src:"http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"}})])}))])},staticRenderFns:[]};var n=i("VU/8")(a,e,!1,function(t){i("8o2u")},"data-v-42af4e52",null);s.a=n.exports}});
//# sourceMappingURL=11.1e9c90fdd4aa8792c007.js.map