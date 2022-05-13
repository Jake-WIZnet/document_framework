"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1217],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},38589:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={id:"wiz145sr-evb",title:"WIZ145SR-EVB",date:new Date("2021-07-22T00:00:00.000Z")},u=void 0,c={unversionedId:"Product/S2E-Module/WIZ145SR/wiz145sr-evb",id:"Product/S2E-Module/WIZ145SR/wiz145sr-evb",title:"WIZ145SR-EVB",description:"Overview",source:"@site/docs/Product/S2E-Module/WIZ145SR/wiz145sr-evb.md",sourceDirName:"Product/S2E-Module/WIZ145SR",slug:"/Product/S2E-Module/WIZ145SR/wiz145sr-evb",permalink:"/Product/S2E-Module/WIZ145SR/wiz145sr-evb",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ145SR/wiz145sr-evb.md",tags:[],version:"current",frontMatter:{id:"wiz145sr-evb",title:"WIZ145SR-EVB",date:"2021-07-22T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ145SR",permalink:"/Product/S2E-Module/WIZ145SR/"},next:{title:"W5500S2E-S1",permalink:"/Product/S2E-Module/W5500S2E-S1/"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Hardware Specification",id:"hardware-specification",level:2},{value:"WIZ145SR Module",id:"wiz145sr-module",level:3},{value:"Base Board",id:"base-board",level:3},{value:"Accessories",id:"accessories",level:3},{value:"Base Board Interface",id:"base-board-interface",level:2},{value:"Download",id:"download",level:2},{value:"Hardware Design Guide",id:"hardware-design-guide",level:3}],p={toc:s};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(91278).Z,width:"300",height:"300"})),(0,i.kt)("p",null,"WIZ145SR-EVB is a evaluation board for WIZ145SR."),(0,i.kt)("p",null,"WIZ145SR is an embedded module mounting RJ-45 and is based on WIZnet W5300 & ARM Cortex-M3. WIZ145SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment. WIZ145SR is able to communicate four serial equipments at the same time by supporting 4 serial ports(3.3V LVTTL)."),(0,i.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,i.kt)("h3",{id:"wiz145sr-module"},"WIZ145SR Module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TCP/IP : W5300"),(0,i.kt)("li",{parentName:"ul"},"PHY : Embedded in W5300"),(0,i.kt)("li",{parentName:"ul"},"MCU : ARM Cortex-M3 (STM32F103ZCT6)"),(0,i.kt)("li",{parentName:"ul"},"Ethernet Interface : RJ-45 (RB1-125BAG1A, Transformer integrated)"),(0,i.kt)("li",{parentName:"ul"},"Serial : 4 UART (3.3V LVTTL)")),(0,i.kt)("h3",{id:"base-board"},"Base Board"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Module Interface : 2\xd714 2.54mm, 1\xd714 2.54mm Pin Header (Female)"),(0,i.kt)("li",{parentName:"ul"},"Serial Connector : 4 x D-SUB, 9PIN (Right Angle, Male)"),(0,i.kt)("li",{parentName:"ul"},"Power : DC Jack mounted (Outer 3.5 \xd8, Inner 1.35 \xd8)")),(0,i.kt)("h3",{id:"accessories"},"Accessories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UTP LAN Cable (2M), Serial Cable, Power Adaptor")),(0,i.kt)("h2",{id:"base-board-interface"},"Base Board Interface"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(8261).Z,width:"554",height:"405"})),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("h3",{id:"hardware-design-guide"},"Hardware Design Guide"),(0,i.kt)("p",null,"WIZ145SR-EVB (WIZ140SR-EVB) Dimension"),(0,i.kt)("p",null,"Last Update: 2015.08.03"),(0,i.kt)("a",{href:"/img/products/wiz145sr/WIZ140_145SR_EVB_DIMENSION.pdf",target:"_blank"},"Download"))}m.isMDXComponent=!0},8261:function(e,t,r){t.Z=r.p+"assets/images/140701_7350-1737073338e0edbb0f6ec970cb239cfb.jpg"},91278:function(e,t,r){t.Z=r.p+"assets/images/ShopEtc1_1106_20150123161907_-4bd54222212749ff7d30b742291e2b86.jpg"}}]);