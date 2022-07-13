"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[3628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(d,".").concat(m)]||p[m]||c[m]||l;return r?a.createElement(b,o(o({ref:t},s),{},{components:r})):a.createElement(b,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},47408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={id:"wiz107sr-evb",title:"WIZ107SR-EVB",date:new Date("2021-07-21T00:00:00.000Z")},o=void 0,i={unversionedId:"Product/S2E-Module/WIZ107SR/wiz107sr-evb",id:"Product/S2E-Module/WIZ107SR/wiz107sr-evb",title:"WIZ107SR-EVB",description:"Overview",source:"@site/docs/Product/S2E-Module/WIZ107SR/wiz107sr-evb.md",sourceDirName:"Product/S2E-Module/WIZ107SR",slug:"/Product/S2E-Module/WIZ107SR/wiz107sr-evb",permalink:"/Product/S2E-Module/WIZ107SR/wiz107sr-evb",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ107SR/wiz107sr-evb.md",tags:[],version:"current",frontMatter:{id:"wiz107sr-evb",title:"WIZ107SR-EVB",date:"2021-07-21T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ107SR",permalink:"/Product/S2E-Module/WIZ107SR/"},next:{title:"WIZ108SR",permalink:"/Product/S2E-Module/WIZ108SR/"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Hardware Specification",id:"hardware-specification",level:2},{value:"WIZ107SR Module",id:"wiz107sr-module",level:3},{value:"Base Board",id:"base-board",level:3},{value:"Accessories",id:"accessories",level:3},{value:"Base Board Type",id:"base-board-type",level:2},{value:"WIZ107SR Ordering Information",id:"wiz107sr-ordering-information",level:2}],s={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(18173).Z,width:"640",height:"432"})),(0,n.kt)("p",null,"WIZ107SR-EVB is a evaluation board for WIZ107SR."),(0,n.kt)("p",null,"WIZ107SR is the compact sized serial to Ethernet module using W7100A, WIZnet iMCU based on 8051 MCU core.  WIZ107SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment"),(0,n.kt)("p",null,"It complies with industrial temperature standard and supports the serial interface of RS-232."),(0,n.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,n.kt)("h3",{id:"wiz107sr-module"},"WIZ107SR Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TCP/IP : W7100A"),(0,n.kt)("li",{parentName:"ul"},"PHY : Embedded in W7100A"),(0,n.kt)("li",{parentName:"ul"},"RJ-45 : BS-RB10005 (Transformer Integrated)"),(0,n.kt)("li",{parentName:"ul"},"MCU : 8051 (W7100A) : SRAM : 64K Byte, FLASH-64Kbyte, 2Kbyte Boot ROM"),(0,n.kt)("li",{parentName:"ul"},"Serial : 3.3V LVTTL or RS-232")),(0,n.kt)("h3",{id:"base-board"},"Base Board"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Module Interface : 6\xd72 2.54mm Pin Header (Male)"),(0,n.kt)("li",{parentName:"ul"},"Serial Connector : D-SUB, 9PIN, Right Angle, Male"),(0,n.kt)("li",{parentName:"ul"},"RS-232 Transceiver : SP3232EBEY (optional)"),(0,n.kt)("li",{parentName:"ul"},"Power : DC Jack mounted (External : 4.5\xd8, Internal :1.3\xd8)")),(0,n.kt)("h3",{id:"accessories"},"Accessories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Power Adaptor (5V, 2A), UTP LAN Cable (2M), Serial Cable, WIZ107SR-CBL (connection cable between module & base board)")),(0,n.kt)("h2",{id:"base-board-type"},"Base Board Type"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"To test WIZ107SR-232 version"),(0,n.kt)("th",{parentName:"tr",align:null},"To test WIZ107SR-TTL version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:r(57559).Z,width:"235",height:"190"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:r(37035).Z,width:"238",height:"194"}))))),(0,n.kt)("h2",{id:"wiz107sr-ordering-information"},"WIZ107SR Ordering Information"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Part No"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WIZ107SR-232"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial : RS-232 (RS-232 transceiver mounted) ",(0,n.kt)("br",null)," Network : RJ-45 (Transformer integrated)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WIZ107SR-TTL"),(0,n.kt)("td",{parentName:"tr",align:null},"Serial : TTL ",(0,n.kt)("br",null)," Network : RJ-45 (Transformer integrated)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WIZ107SR-232-EVB"),(0,n.kt)("td",{parentName:"tr",align:null},"Evaluation Board for WIZ107SR-232 board")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WIZ107SR-TTL-EVB"),(0,n.kt)("td",{parentName:"tr",align:null},"Evaluation Board for WIZ107SR-TTL board")))))}c.isMDXComponent=!0},57559:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/140626_73503-fbde0187af1d27a796400caee61cd20d.jpg"},37035:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/140626_73504-4be2fc762d60acafe78498f9091465e1.jpg"},18173:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/wiz107sr-evb-3-c0b5dff976fab33a1b97150de9480308.png"}}]);