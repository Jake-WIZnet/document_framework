"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[1886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"wiz105sr-evb",title:"WIZ105SR-EVB",date:new Date("2021-07-21T00:00:00.000Z")},o=void 0,l={unversionedId:"Product/S2E-Module/WIZ105SR/wiz105sr-evb",id:"Product/S2E-Module/WIZ105SR/wiz105sr-evb",title:"WIZ105SR-EVB",description:"Overview",source:"@site/docs/Product/S2E-Module/WIZ105SR/wiz105sr-evb.md",sourceDirName:"Product/S2E-Module/WIZ105SR",slug:"/Product/S2E-Module/WIZ105SR/wiz105sr-evb",permalink:"/Product/S2E-Module/WIZ105SR/wiz105sr-evb",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ105SR/wiz105sr-evb.md",tags:[],version:"current",frontMatter:{id:"wiz105sr-evb",title:"WIZ105SR-EVB",date:"2021-07-21T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ105SR",permalink:"/Product/S2E-Module/WIZ105SR/"},next:{title:"WIZ107SR",permalink:"/Product/S2E-Module/WIZ107SR/"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Hardware Specification",id:"hardware-specification",level:2},{value:"WIZ105SR Module",id:"wiz105sr-module",level:3},{value:"Base Board",id:"base-board",level:3},{value:"Accessories",id:"accessories",level:3},{value:"Utilities",id:"utilities",level:2},{value:"Evaluation Board Interface",id:"evaluation-board-interface",level:2}],d={toc:c},s="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(s,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(96914).Z,width:"500",height:"253"})),(0,a.kt)("p",null,"WIZ105SR-EVB is a evaluation board for WIZ105SR."),(0,a.kt)("p",null,"WIZ105SR is the serial to Ethernet module using W5100 & 8051 MCU. WIZ105SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment."),(0,a.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,a.kt)("h3",{id:"wiz105sr-module"},"WIZ105SR Module"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TCP/IP : W5100"),(0,a.kt)("li",{parentName:"ul"},"PHY : Embedded in W5100"),(0,a.kt)("li",{parentName:"ul"},"RJ-45 : RB1-125BAG1A (Transformer Integrated)"),(0,a.kt)("li",{parentName:"ul"},"MCU : 8051 (GC89L591A0-MQ44I) : SRAM : 16K Byte, EEPROM : 2K Byte"),(0,a.kt)("li",{parentName:"ul"},"Serial : 3.3V LVTTL")),(0,a.kt)("h3",{id:"base-board"},"Base Board"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Module Interface : 2\xd76 12PIN 2mm DIP Header (Male)"),(0,a.kt)("li",{parentName:"ul"},"Serial Connector : D-SUB, 9PIN, Right Angle, Male"),(0,a.kt)("li",{parentName:"ul"},"RS-232 Transceiver : SP3232ECN"),(0,a.kt)("li",{parentName:"ul"},"Power : DC Jack mounted (External : 4.5\xd8, Internal :1.3\xd8)")),(0,a.kt)("h3",{id:"accessories"},"Accessories"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Power Adaptor (5V, 2A), UTP LAN Cable (2M), Serial Cable, WIZ105SR-CBL (connection cable between module & base board)")),(0,a.kt)("h2",{id:"utilities"},"Utilities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuration Tool for Windows"),(0,a.kt)("li",{parentName:"ul"},"WizVSP: Virtual Serial Port (COM port) for User\u2019s Programs")),(0,a.kt)("h2",{id:"evaluation-board-interface"},"Evaluation Board Interface"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(72947).Z,width:"598",height:"262"})))}p.isMDXComponent=!0},72947:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/140626_73501-423cf236ecd4240397181f810e14e8a5.jpg"},96914:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ShopDtl_1065_20150108162433-6cb4681dfbdb95721fde088b0a4ef30d.jpg"}}]);