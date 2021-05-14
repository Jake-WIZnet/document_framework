(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[44149],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||c;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81516:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l},default:function(){return p}});var n=r(74034),o=r(79973),c=(r(67294),r(3905)),i={id:"http_client",title:"HTTP Client",date:new Date("2020-04-03T00:00:00.000Z")},a={unversionedId:"Product/Open-Source-Hardware/http_client",id:"Product/Open-Source-Hardware/http_client",isDocsHomePage:!1,title:"HTTP Client",description:"Before Compile",source:"@site/docs/Product/Open-Source-Hardware/http_client.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/http_client",permalink:"/Product/Open-Source-Hardware/http_client",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/http_client.md",version:"current",frontMatter:{id:"http_client",title:"HTTP Client",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"IP Configuration",permalink:"/Product/Open-Source-Hardware/IP_Configuration"},next:{title:"Loopback",permalink:"/Product/Open-Source-Hardware/loopback"}},l=[{value:"Before Compile",id:"before-compile",children:[]},{value:"Change code",id:"change-code",children:[]},{value:"Result",id:"result",children:[]}],u={toc:l};function p(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"before-compile"},"Before Compile"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Download source file from ",(0,c.kt)("a",{parentName:"li",href:"https://github.com/amcewen/HttpClient"},"https://github.com/amcewen/HttpClient"),"."),(0,c.kt)("li",{parentName:"ol"},'Extract and Copy all files into "Arduino/libraries/Ethernet/".')),(0,c.kt)("h2",{id:"change-code"},"Change code"),(0,c.kt)("p",null,'Change "SimpleHttpExample.ino" file in the\n"Ethernet/example/SimpleHttpExample/" as follow :'),(0,c.kt)("hr",null),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(87648).Z})),(0,c.kt)("hr",null),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(87826).Z})),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"result"},"Result"),(0,c.kt)("p",null,"During the run the program, You can see the log message via Serial\nMonitor as follow: ",(0,c.kt)("img",{src:r(22010).Z})))}p.isMDXComponent=!0},87648:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cap_2013-08-28_15-14-38-205-de454cc3e01fb0707a52fcb34d76038e.png"},87826:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cap_2013-08-28_15-14-53-503-62a19969db312e102d544c34e887b639.png"},22010:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cap_2013-08-28_15-18-49-520-4225120dbb7338b2c9067d0d17151ddf.png"}}]);