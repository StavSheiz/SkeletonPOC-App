(function(e){function t(t){for(var r,i,a=t[0],l=t[1],c=t[2],f=0,p=[];f<a.length;f++)i=a[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/SkeletonPOC/SkeletonAppClient/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var s=l;u.push([2,0]),n()})({2:function(e,t,n){e.exports=n("Vtdi")},Njnf:function(e,t,n){"use strict";var r=n("aNUq"),o=n.n(r);o.a},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],i=(n("rAmE"),n("KHd+")),a={},l=Object(i["a"])(a,o,u,!1,null,null,null),c=l.exports,s=n("jE9Z"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ApplicationHeader",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("Welcome to application Stav!")]),n("p",[e._v("\n    "+e._s(e.msg)+"\n  ")]),n("div",[n("button",{on:{click:e.logicOne}},[e._v("Logic 1")]),n("button",{on:{click:e.logicTwo}},[e._v("Logic 2")]),n("button",{on:{click:e.logicThree}},[e._v("Logic 3")])]),n("div",[n("h3",[e._v("Value: "+e._s(e.value))])])])},h=[],m={serverURL:"http://localhost/SkeletonPOCApplicationServer/SkeletonPOCApplication/"},d={serverURL:m.serverURL,sendGetRequest:function(e){var t=this;return new Promise(function(n,r){fetch(t.serverURL+e).then(function(e){e&&e.ok?e.json().then(function(e){n(e)},function(e){r()}):r()},function(e){r()})})}},b=d,g={getRandomNumber:function(){return Math.floor(100*Math.random())},multiplyNumbers:function(e,t){return e*t},getServerData:function(){return b.sendGetRequest("GetServerData")}},_=g,O={name:"ApplicationHeader",props:{msg:String},data:function(){return{value:""}},methods:{logicOne:function(){this.value=_.getRandomNumber()},logicTwo:function(){this.value=_.multiplyNumbers(3,4)},logicThree:function(){_.getServerData().then(function(e){this.value=e}.bind(this))}}},j=O,w=(n("Njnf"),Object(i["a"])(j,v,h,!1,null,"f2eb3db8",null)),y=w.exports,S={name:"home",components:{ApplicationHeader:y}},k=S,x=Object(i["a"])(k,f,p,!1,null,null,null),P=x.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],E={},L=Object(i["a"])(E,A,R,!1,null,null,null),N=L.exports;r["a"].use(s["a"]);var T=new s["a"]({routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:N}]}),C=n("L2JU");r["a"].use(C["a"]);var U=new C["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:T,store:U,render:function(e){return e(c)}}).$mount("#app")},aNUq:function(e,t,n){},q6ma:function(e,t,n){},rAmE:function(e,t,n){"use strict";var r=n("q6ma"),o=n.n(r);o.a}});
//# sourceMappingURL=app.ddaefe3e.js.map