(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0Owb":function(e,n,t){"use strict";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,"a",(function(){return a}))},"0XgM":function(e,n,t){},"6VBw":function(e,n,t){"use strict";var a=t("VTBJ"),r=t("ODXe"),o=t("rePB"),c=t("Ff2n"),i=t("q1tI"),l=t.n(i),s=t("TSYQ"),u=t.n(s),d=Object(i["createContext"])({}),f=d,m=t("U8pU"),v=t("FER5"),h=t("LuSS"),b=2,y=.16,g=.05,p=.05,w=.15,C=5,O=4,j=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function x(e){var n=e.r,t=e.g,a=e.b,r=Object(v["h"])(n,t,a);return{h:360*r.h,s:r.s,v:r.v}}function E(e){var n=e.r,t=e.g,a=e.b;return"#".concat(Object(v["f"])(n,t,a,!1))}function k(e,n,t){var a=t/100,r={r:(n.r-e.r)*a+e.r,g:(n.g-e.g)*a+e.g,b:(n.b-e.b)*a+e.b};return r}function z(e,n,t){var a;return a=Math.round(e.h)>=60&&Math.round(e.h)<=240?t?Math.round(e.h)-b*n:Math.round(e.h)+b*n:t?Math.round(e.h)+b*n:Math.round(e.h)-b*n,a<0?a+=360:a>=360&&(a-=360),a}function T(e,n,t){return 0===e.h&&0===e.s?e.s:(a=t?e.s-y*n:n===O?e.s+y:e.s+g*n,a>1&&(a=1),t&&n===C&&a>.1&&(a=.1),a<.06&&(a=.06),Number(a.toFixed(2)));var a}function F(e,n,t){var a;return a=t?e.v+p*n:e.v-w*n,a>1&&(a=1),Number(a.toFixed(2))}function V(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],a=Object(h["a"])(e),r=C;r>0;r-=1){var o=x(a),c=E(Object(h["a"])({h:z(o,r,!0),s:T(o,r,!0),v:F(o,r,!0)}));t.push(c)}t.push(E(a));for(var i=1;i<=O;i+=1){var l=x(a),s=E(Object(h["a"])({h:z(l,i),s:T(l,i),v:F(l,i)}));t.push(s)}return"dark"===n.theme?j.map((function(e){var a=e.index,r=e.opacity,o=E(k(Object(h["a"])(n.backgroundColor||"#141414"),Object(h["a"])(t[a]),100*r));return o})):t}var M={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},B={},N={};Object.keys(M).forEach((function(e){B[e]=V(M[e]),B[e].primary=B[e][5],N[e]=V(M[e],{theme:"dark",backgroundColor:"#141414"}),N[e].primary=N[e][5]}));B.red,B.volcano,B.gold,B.orange,B.yellow,B.lime,B.green,B.cyan,B.blue,B.geekblue,B.purple,B.magenta,B.grey,B.grey;var H=t("Kwbf"),S=t("BU3w");function A(e,n){Object(H["a"])(e,"[@ant-design/icons] ".concat(n))}function L(e){return"object"===Object(m["a"])(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===Object(m["a"])(e.icon)||"function"===typeof e.icon)}function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){var a=e[t];switch(t){case"class":n.className=a,delete n.class;break;default:n[t]=a}return n}),{})}function D(e,n,t){return t?l.a.createElement(e.tag,Object(a["a"])(Object(a["a"])({key:n},R(e.attrs)),t),(e.children||[]).map((function(t,a){return D(t,"".concat(n,"-").concat(e.tag,"-").concat(a))}))):l.a.createElement(e.tag,Object(a["a"])({key:n},R(e.attrs)),(e.children||[]).map((function(t,a){return D(t,"".concat(n,"-").concat(e.tag,"-").concat(a))})))}function I(e){return V(e)[0]}function U(e){return e?Array.isArray(e)?e:[e]:[]}var X="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,n=Object(i["useContext"])(f),t=n.csp,a=n.prefixCls,r=e;a&&(r=r.replace(/anticon/g,a)),Object(i["useEffect"])((function(){Object(S["a"])(r,"@ant-design-icons",{prepend:!0,csp:t})}),[])},P=["icon","className","onClick","style","primaryColor","secondaryColor"],W={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function q(e){var n=e.primaryColor,t=e.secondaryColor;W.primaryColor=n,W.secondaryColor=t||I(n),W.calculated=!!t}function G(){return Object(a["a"])({},W)}var K=function(e){var n=e.icon,t=e.className,r=e.onClick,o=e.style,i=e.primaryColor,l=e.secondaryColor,s=Object(c["a"])(e,P),u=W;if(i&&(u={primaryColor:i,secondaryColor:l||I(i)}),J(),A(L(n),"icon should be icon definiton, but got ".concat(n)),!L(n))return null;var d=n;return d&&"function"===typeof d.icon&&(d=Object(a["a"])(Object(a["a"])({},d),{},{icon:d.icon(u.primaryColor,u.secondaryColor)})),D(d.icon,"svg-".concat(d.name),Object(a["a"])({className:t,onClick:r,style:o,"data-icon":d.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s))};K.displayName="IconReact",K.getTwoToneColors=G,K.setTwoToneColors=q;var Y=K;function Q(e){var n=U(e),t=Object(r["a"])(n,2),a=t[0],o=t[1];return Y.setTwoToneColors({primaryColor:a,secondaryColor:o})}function Z(){var e=Y.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var $=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];Q("#1890ff");var _=i["forwardRef"]((function(e,n){var t,l=e.className,s=e.icon,d=e.spin,m=e.rotate,v=e.tabIndex,h=e.onClick,b=e.twoToneColor,y=Object(c["a"])(e,$),g=i["useContext"](f),p=g.prefixCls,w=void 0===p?"anticon":p,C=g.rootClassName,O=u()(C,w,(t={},Object(o["a"])(t,"".concat(w,"-").concat(s.name),!!s.name),Object(o["a"])(t,"".concat(w,"-spin"),!!d||"loading"===s.name),t),l),j=v;void 0===j&&h&&(j=-1);var x=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,E=U(b),k=Object(r["a"])(E,2),z=k[0],T=k[1];return i["createElement"]("span",Object(a["a"])(Object(a["a"])({role:"img","aria-label":s.name},y),{},{ref:n,tabIndex:j,onClick:h,className:O}),i["createElement"](Y,{icon:s,primaryColor:z,secondaryColor:T,style:x}))}));_.displayName="AntdIcon",_.getTwoToneColor=Z,_.setTwoToneColor=Q;n["a"]=_},VXBa:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return q}));t("EFp3"),t("0XgM");var a=t("PKem"),r=t("ZX9x"),o=a["e"];o.Header=a["c"],o.Footer=a["b"],o.Content=a["a"],o.Sider=r["b"];var c=o,i=t("q1tI"),l=t.n(i),s=(t("h7lp"),t("bf48")),u=(t("+L6B"),t("2/Rp")),d=t("VTBJ"),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"}}]},name:"font-size",theme:"outlined"},m=f,v=t("6VBw"),h=function(e,n){return i["createElement"](v["a"],Object(d["a"])(Object(d["a"])({},e),{},{ref:n,icon:m}))};h.displayName="FontSizeOutlined";var b=i["forwardRef"](h),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"wallet",theme:"outlined"},g=y,p=function(e,n){return i["createElement"](v["a"],Object(d["a"])(Object(d["a"])({},e),{},{ref:n,icon:g}))};p.displayName="WalletOutlined";var w=i["forwardRef"](p),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},O=C,j=function(e,n){return i["createElement"](v["a"],Object(d["a"])(Object(d["a"])({},e),{},{ref:n,icon:O}))};j.displayName="HomeOutlined";var x=i["forwardRef"](j),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},k=E,z=function(e,n){return i["createElement"](v["a"],Object(d["a"])(Object(d["a"])({},e),{},{ref:n,icon:k}))};z.displayName="GithubOutlined";var T,F=i["forwardRef"](z),V=t("0Owb"),M=t("FfOG"),B=(t("bCY9"),e=>{var n=Object(i["useCallback"])((()=>{M["b"].push(e.to,e.state)}),[]);return l.a.createElement(u["a"],Object(V["a"])({},e,{onClick:n}))}),N=!("undefined"===typeof window||!window.document||!window.document.createElement),H=N,S=function(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],a=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},A=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,r,o=t.call(e),c=[];try{while((void 0===n||n-- >0)&&!(a=o.next()).done)c.push(a.value)}catch(i){r={error:i}}finally{try{a&&!a.done&&(t=o["return"])&&t.call(o)}finally{if(r)throw r.error}}return c},L=new Set,R={xs:0,sm:576,md:768,lg:992,xl:1200};function D(){var e,n,t=T;if(U(),t!==T)try{for(var a=S(L),r=a.next();!r.done;r=a.next()){var o=r.value;o()}}catch(c){e={error:c}}finally{try{r&&!r.done&&(n=a["return"])&&n.call(a)}finally{if(e)throw e.error}}}var I=!1;function U(){var e,n,t=window.innerWidth,a={},r=!1;try{for(var o=S(Object.keys(R)),c=o.next();!c.done;c=o.next()){var i=c.value;a[i]=t>=R[i],a[i]!==T[i]&&(r=!0)}}catch(l){e={error:l}}finally{try{c&&!c.done&&(n=o["return"])&&n.call(o)}finally{if(e)throw e.error}}r&&(T=a)}function X(){H&&!I&&(T={},U(),window.addEventListener("resize",D),I=!0);var e=A(Object(i["useState"])(T),2),n=e[0],t=e[1];return Object(i["useEffect"])((function(){if(H){var e=function(){t(T)};return L.add(e),function(){L["delete"](e),0===L.size&&(window.removeEventListener("resize",D),I=!1)}}}),[]),n}var J=e=>{var n=e.xs,t=e.sm,a=e.md,r=e.lg,o=e.xl,c=X(),i=null;return c.xs&&n&&(i=n),c.sm&&t&&(i=t),c.md&&a&&(i=a),c.lg&&r&&(i=r),c.xl&&o&&(i=o),l.a.createElement(l.a.Fragment,null,i)},P=e=>{var n=e.icon,t=e.children,a=e.to;return l.a.createElement(J,{xs:l.a.createElement(B,{icon:n,size:"large",to:a}),lg:l.a.createElement(B,{icon:n,size:"large",to:a},t)})},W=e=>{var n=e.avatar,t=e.githubURL;return l.a.createElement(s["a"],{avatar:{src:n},title:"Bitcoin Playground",extra:[l.a.createElement(P,{key:"0",icon:l.a.createElement(b,null),to:"/mw"},"Mnemonic Words"),l.a.createElement(P,{key:"1",icon:l.a.createElement(w,null),to:"/hd"},"HD Wallets"),l.a.createElement(P,{key:"2",icon:l.a.createElement(x,null),to:"/ms"},"Multi-sig Addresses"),l.a.createElement(u["a"],{key:"3",type:"ghost",icon:l.a.createElement(F,null),shape:"circle",size:"large",href:t})]})},q=e=>{var n=e.children;return l.a.createElement(c,{style:{height:"100vh"}},l.a.createElement(W,{avatar:"https://avatars.githubusercontent.com/u/6268906?s=400&v=4",githubURL:"https://github.com/kencckw"}),l.a.createElement(c.Content,null,n))};n["default"]=q}}]);