webpackJsonp([6],{"/WRR":function(t,e,o){t.exports=o.p+"img/codesign-back.ba78dc4.png"},"05r5":function(t,e,o){var i=o("9R6j");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("bd419ccc",i,!1,{sourceMap:!1})},"2ycm":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".portfolio-card .cta{background-color:#3eec82;color:#0b3f1a}.portfolio-card .cta:hover{background-color:#23c286}.portfolio-card .cta{text-decoration:none;display:inline-block;padding:9px 45px;font-size:14px;margin-top:10px;border:none;font-family:Gotham Rounded Medium,helvetica,sans-serif;border-radius:12px}.portfolio-card{text-align:center;margin-bottom:70px}.portfolio-card .portfolio-card-img{max-width:200px}.portfolio-card .copy{color:#85949e}.portfolio-card .subtitle{color:#23c286}.portfolio-card .cta{cursor:pointer}",""])},"42+A":function(t,e,o){var i=o("kxFB");(t.exports=o("FZ+f")(!1)).push([t.i,"#mapps360-desktop,#printa-desktop{display:none}#cases{padding-bottom:50px}#case-studies-top{padding:70px 0 30px}#case-studies-top #simple-title-case-top .subtitle{margin:0 0 6px}#case-studies-top .copy{color:#85949e}#case-studies-top .copy a{color:#23c286;text-decoration:none}#case-studies-top .copy a:hover{text-decoration:underline}.portfolio-flex{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.portfolio-flex .simple-title,.portfolio-flex .title-with-cta{-webkit-box-flex:2;-ms-flex:2;flex:2}.portfolio-flex .portfolio-card-flex{-webkit-box-flex:3;-ms-flex:3;flex:3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.portfolio-flex .padding-right{padding-right:50px}.portfolio-flex .padding-left{padding-left:50px}#printa-back{background-image:url("+i(o("wYND"))+");background-position:0}#codesign-back,#printa-back{background-size:cover;min-height:600px}#codesign-back{background-image:url("+i(o("/WRR"))+");background-position:100%}#mapps360-back{background-image:url("+i(o("ewNs"))+");background-size:cover;background-position:0;min-height:600px}.case-studies-desktop{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none}.case-studies-desktop #simple-title-case-top-desktop{-webkit-box-flex:2;-ms-flex:2;flex:2;margin-left:50px;text-align:left}.case-studies-desktop .case-studies-desktop-img{-webkit-box-flex:3;-ms-flex:3;flex:3}@media (min-width:992px){#case-studies-top{padding-top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#case-studies-top,#mapps360-desktop,#printa-desktop,.case-studies-desktop{display:-webkit-box;display:-ms-flexbox;display:flex}}",""])},"8f2w":function(t,e,o){"use strict";var i=o("Oyuc"),s=o("YzPt"),a=!1;var c=function(t){a||o("05r5")},r=o("VU/8")(i.a,s.a,!1,c,null,null);r.options.__file="components/Elements/Titles/DynamicTitle.vue",e.a=r.exports},"9R6j":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".title .changing-color{color:#3eec82}",""])},"9iLt":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-card-simple"},[t.comingSoon?t._e():o("nuxt-link",{staticClass:"portfolio-cta",attrs:{to:""}},[o("span",{staticClass:"icon-arrow-up-right"})]),o("img",{staticClass:"portfolio-card-img",attrs:{src:"img/"+t.url+".png",alt:t.title}}),o("div",{staticClass:"tags",domProps:{innerHTML:t._s(t.tags)}}),t.comingSoon?t._e():o("nuxt-link",{staticClass:"cta",attrs:{to:"/case-studies/"+t.url}},[t._v("View More")])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},E8Ou:function(t,e,o){var i=o("Z4Vb");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("3aef5f84",i,!1,{sourceMap:!1})},F2dp:function(t,e,o){"use strict";e.a={props:["url","title","tags","comingSoon"]}},Hxjg:function(t,e,o){"use strict";e.a={props:["subtitle","title","copy","theme"],computed:{title_style:function(){return"dark"==this.theme?"color:#fff;":"color: #272b2d;"},subtitle_style:function(){return"dark"==this.theme?"color:#3eec82;":"color: #23c286;"},copy_style:function(){return"dark"==this.theme?"color:#adc7db;":"color: #85949e;"}}}},Ldmr:function(t,e,o){var i=o("TCsx");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("7f027102",i,!1,{sourceMap:!1})},Oyuc:function(t,e,o){"use strict";e.a={props:["title","words"],data:function(){return{text:"",count:0}},methods:{getWord:function(){this.count<this.words.length-1?this.count+=1:this.count=0},changeWord:function(){var t=this;setInterval(function(){t.getWord(),t.text=t.words[t.count]},3e3)}},mounted:function(){this.text=this.words[this.count],this.changeWord()}}},RREP:function(t,e,o){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"cases"}},[e("section",{attrs:{id:"case-studies-top"}},[e("div",{staticClass:"container mobile"},[e("SimpleTitle",{staticClass:"text-center",attrs:{id:"simple-title-case-top",title:"I Love Creating and Building Cool Stuff",subtitle:"Creative process in action",copy:"",theme:"light"}})],1),e("img",{staticClass:"mobile",attrs:{src:"img/case-studies-top.png",alt:"Case Studies Top"}}),this._m(0),e("div",{staticClass:"case-studies-desktop"},[e("SimpleTitle",{staticClass:"text-center",attrs:{id:"simple-title-case-top-desktop",title:"I Love Creating and Building Cool Stuff",subtitle:"Creative process in action",copy:'Nothing is cooler than the real thing. You can check out my <a href="https://dribbble.com/jpcasabianca" target="_blank">Dribbble</a> account if you want to see my design work. To check out some public stuff I’ve made go to <a href="https://github.com/jpcasa" target="_blank">Github</a> or <a href="https://bitbucket.org/jpcasabianca/" target="_blank">Bitbucket</a>. If you’re looking for the complete story scroll down.',theme:"light"}}),this._m(1)],1)])])};i._withStripped=!0;var s={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container text-center mobile"},[e("p",{staticClass:"copy"},[this._v("Nothing is cooler than the real thing. You can check out my "),e("a",{attrs:{href:"https://dribbble.com/jpcasabianca",target:"_blank"}},[this._v("Dribbble")]),this._v(" account if you want to see my design work. To check out some public stuff I’ve made go to "),e("a",{attrs:{href:"https://github.com/jpcasa",target:"_blank"}},[this._v("Github")]),this._v(" or "),e("a",{attrs:{href:"https://bitbucket.org/jpcasabianca/",target:"_blank"}},[this._v("Bitbucket")]),this._v(". If you’re looking for the complete story scroll down.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"case-studies-desktop-img"},[e("img",{staticClass:"desktop",attrs:{src:"img/case-studies-top-desktop.png",alt:"Case Studies JP Casabianca",id:"simple-title-case-img"}})])}]};e.a=s},TCsx:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".portfolio-card-simple{text-align:center;background-color:#fff;position:relative;width:250px;padding:20px 0;margin:50px 0;-webkit-box-shadow:0 0 18px -1px rgba(0,0,0,.2);box-shadow:0 0 18px -1px rgba(0,0,0,.2)}.portfolio-card-simple .portfolio-cta{position:absolute;right:0;top:0;text-decoration:none;background-color:#3eec82;color:#0b3f1a;padding:5px 6px}.portfolio-card-simple .portfolio-cta:hover{background-color:#23c286}.portfolio-card-simple .portfolio-cta span{font-size:22px}.portfolio-card-simple .portfolio-card-img{max-width:200px;margin-bottom:20px}.portfolio-card-simple .tags{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 20px;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:15px}.portfolio-card-simple .tags span{display:inline-block;padding:4px 8px;background-color:#3eec82;margin:0 3px 5px;color:#0b3f1a}.portfolio-card-simple .cta,.portfolio-card-simple .tags span{font-size:13px;font-family:Gotham Rounded Medium,helvetica,sans-serif}.portfolio-card-simple .cta{text-decoration:none;color:#23c286}.portfolio-card-simple .cta:hover{text-decoration:underline}",""])},WMGb:function(t,e,o){"use strict";var i=o("Hxjg"),s=o("p+75"),a=!1;var c=function(t){a||o("Ywp8")},r=o("VU/8")(i.a,s.a,!1,c,null,null);r.options.__file="components/Elements/Titles/SimpleTitle.vue",e.a=r.exports},XFSx:function(t,e,o){"use strict";var i=o("WMGb"),s=o("nKoO"),a=o("o0uN"),c=o("gyXW");e.a={components:{SimpleTitle:i.a,TitleWithCta:s.a,PortfolioCard:a.a,PortfolioCardSimple:c.a}}},Ywp8:function(t,e,o){var i=o("josS");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("193a4bd6",i,!1,{sourceMap:!1})},YzPt:function(t,e,o){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title"},[e("span",[this._v(this._s(this.title))]),e("span",{staticClass:"changing-color"},[this._v(this._s(this.text)+".")])])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},Z4Vb:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".title-with-cta .cta{background-color:#3eec82;color:#0b3f1a}.title-with-cta .cta:hover{background-color:#23c286}.title-with-cta .cta{text-decoration:none;display:inline-block;padding:9px 45px;font-size:14px;margin-top:10px;border:none;cursor:pointer;font-family:Gotham Rounded Medium,helvetica,sans-serif;border-radius:12px}.title-with-cta{display:block;max-width:500px;margin:auto}.title-with-cta .subtitle{color:#3eec82;margin-bottom:5px}.title-with-cta .title{font-family:Gotham Rounded Medium,helvetica,sans-serif;color:#fff;margin:0}.title-with-cta .copy{color:#adc7db}.title-with-cta .cta-normal{cursor:default}.title-with-cta .cta-normal:hover{background-color:#3eec82}",""])},cdOJ:function(t,e,o){var i=o("42+A");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("6da1ac32",i,!1,{sourceMap:!1})},ewNs:function(t,e,o){t.exports=o.p+"img/mapps360-back.7123684.png"},gyXW:function(t,e,o){"use strict";var i=o("F2dp"),s=o("9iLt"),a=!1;var c=function(t){a||o("Ldmr")},r=o("VU/8")(i.a,s.a,!1,c,null,null);r.options.__file="components/Elements/Cards/PortfolioCardSimple.vue",e.a=r.exports},josS:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".simple-title{display:block;max-width:500px;margin:auto}.simple-title .subtitle{color:#3eec82;margin-bottom:5px}.simple-title .title{font-family:Gotham Rounded Medium,helvetica,sans-serif;color:#fff;margin:0}.simple-title .copy{color:#adc7db}.simple-title .copy a{color:#23c286}.simple-title .copy a:hover{color:#1b7739}",""])},kbnP:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-card"},[o("span",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]),o("h1",[t._v(t._s(t.title))]),"printa-delivery"==t.ctaUrl?o("img",{staticClass:"portfolio-card-img",attrs:{src:"img/printa-delivery.png",alt:"Printa Delivery"}}):t._e(),"mapps360"==t.ctaUrl?o("img",{staticClass:"portfolio-card-img",attrs:{src:"img/mapps360.png",alt:"Mapps360"}}):t._e(),o("p",{staticClass:"copy",domProps:{innerHTML:t._s(t.copy)}}),t.comingSoon?t._e():o("nuxt-link",{staticClass:"cta",attrs:{to:"/case-studies/"+t.ctaUrl}},[t._v(t._s(t.cta))]),t.comingSoon?o("a",{staticClass:"cta"},[t._v("Coming Soon")]):t._e()],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},nKoO:function(t,e,o){"use strict";var i=o("neKp"),s=o("oukL"),a=!1;var c=function(t){a||o("E8Ou")},r=o("VU/8")(i.a,s.a,!1,c,null,null);r.options.__file="components/Elements/Titles/TitleWithCta.vue",e.a=r.exports},neKp:function(t,e,o){"use strict";var i=o("8f2w");e.a={props:["title","subtitle","copy","cta","ctaUrl","action","theme","comingSoon"],computed:{title_style:function(){return"dark"==this.theme?"color:#fff;":"color: #272b2d;"},subtitle_style:function(){return"dark"==this.theme?"color:#3eec82;":"color: #23c286;"},copy_style:function(){return"dark"==this.theme?"color:#adc7db;":"color: #85949e;"}},components:{DynamicTitle:i.a}}},o0uN:function(t,e,o){"use strict";var i=o("oSED"),s=o("kbnP"),a=!1;var c=function(t){a||o("wLuq")},r=o("VU/8")(i.a,s.a,!1,c,null,null);r.options.__file="components/Elements/Cards/PortfolioCard.vue",e.a=r.exports},oSED:function(t,e,o){"use strict";e.a={props:["title","subtitle","copy","cta","ctaUrl","comingSoon"],created:function(){console.log(this.title)}}},oukL:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title-with-cta"},[o("p",{staticClass:"subtitle",style:t.subtitle_style},[t._v(t._s(t.subtitle))]),o("h2",{staticClass:"title",style:t.title_style},[t._v(t._s(t.title))]),o("p",{staticClass:"copy",style:t.copy_style,domProps:{innerHTML:t._s(t.copy)}}),o("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:"push"==t.action&&!t.comingSoon,expression:"action == 'push' && !comingSoon"}],staticClass:"cta",attrs:{to:t.ctaUrl}},[t._v("\n    "+t._s(t.cta)+"\n  ")]),o("a",{directives:[{name:"show",rawName:"v-show",value:"push"==t.action&&t.comingSoon,expression:"action == 'push' && comingSoon"}],staticClass:"cta cta-normal"},[t._v("Coming Soon")]),o("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+t.ctaUrl,expression:"'#' + ctaUrl"},{name:"show",rawName:"v-show",value:"scroll"==t.action,expression:"action == 'scroll'"}],staticClass:"cta"},[t._v("\n    "+t._s(t.cta)+"\n  ")])],1)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"p+75":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"simple-title"},[o("p",{staticClass:"subtitle",style:t.subtitle_style},[t._v(t._s(t.subtitle))]),o("h2",{staticClass:"title",style:t.title_style},[t._v(t._s(t.title))]),o("p",{staticClass:"copy",style:t.copy_style,domProps:{innerHTML:t._s(t.copy)}})])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},wLuq:function(t,e,o){var i=o("2ycm");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("5c0ec73c",i,!1,{sourceMap:!1})},wYND:function(t,e,o){t.exports=o.p+"img/printa-back.1d565b4.png"},"xG+o":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("XFSx"),s=o("RREP"),a=!1;var c=function(t){a||o("cdOJ")},r=o("VU/8")(i.a,s.a,!1,c,null,null);r.options.__file="pages/case-studies/index.vue",e.default=r.exports}});