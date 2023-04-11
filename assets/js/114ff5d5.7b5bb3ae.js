"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[6414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={id:"wiz820io",title:"WIZ820io",date:new Date("2020-04-16T00:00:00.000Z")},a=void 0,l={unversionedId:"Product/ioModule/wiz820io",id:"Product/ioModule/wiz820io",title:"WIZ820io",description:"WIZ820io is not recommended for new design. W5200 chip is not supported by ioLibrary.",source:"@site/docs/Product/ioModule/WIZ820io.md",sourceDirName:"Product/ioModule",slug:"/Product/ioModule/wiz820io",permalink:"/Product/ioModule/wiz820io",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/ioModule/WIZ820io.md",tags:[],version:"current",frontMatter:{id:"wiz820io",title:"WIZ820io",date:"2020-04-16T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ550io",permalink:"/Product/ioModule/wiz550io"},next:{title:"WIZ810MJ",permalink:"/Product/ioModule/wiz810mj"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Pin Assignment",id:"pin-assignment",level:2},{value:"Download",id:"download",level:2},{value:"Datasheet",id:"datasheet",level:3},{value:"Hardware Guide",id:"hardware-guide",level:3},{value:"AX1",id:"ax1",level:3}],s={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"WIZ820io is not recommended for new design. W5200 chip is not supported by ioLibrary.")),(0,i.kt)("p",{parentName:"admonition"},"If there are any questions, please use our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.wiznet.io"},(0,i.kt)("inlineCode",{parentName:"a"},"Forum"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://www.wiznet.io/inqueries/"},(0,i.kt)("inlineCode",{parentName:"a"},"contact us")),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZ820io",src:r(63688).Z,width:"280",height:"276"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"WIZ820io is the compact-sized network module that includes W5200 (TCP/IP & Ethernet MAC & PHY) & MAG-JACK (RJ45 with X\u2019FMR) with other glue logics. It can be used as a component and no effort is required to interface W5200 and MAG Jack. The WIZ820io is an ideal option for users who want to develop their Internet enabling systems rapidly."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plug-in Network Module"),(0,i.kt)("li",{parentName:"ul"},"Usable without H/W design for W5200, transformer & RJ-45"),(0,i.kt)("li",{parentName:"ul"},"Fast evaluation for W5200 & MCU in the target board"),(0,i.kt)("li",{parentName:"ul"},"Support high speed SPI interface"),(0,i.kt)("li",{parentName:"ul"},"Support 8 hardware sockets"),(0,i.kt)("li",{parentName:"ul"},"Support power down mode and Wake-on-LAN function"),(0,i.kt)("li",{parentName:"ul"},"Very small form factor (PCB size : 23mm x 25mm)")),(0,i.kt)("h2",{id:"pin-assignment"},"Pin Assignment"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZ820io",src:r(42475).Z,width:"700",height:"283"})),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("h3",{id:"datasheet"},"Datasheet"),(0,i.kt)("a",{href:"/img/products/wiz820io/WIZ820io_User_Manual_V1.0.pdf",target:"_blank"},"WIZ820io Datasheet v1.0"),(0,i.kt)("p",null,"Last Update: 2013.06.08"),(0,i.kt)("h3",{id:"hardware-guide"},"Hardware Guide"),(0,i.kt)("a",{href:"/img/products/wiz820io/WIZ820io_hardware.zip",target:"_blank"},"WIZ820io Hardware Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WIZ820io Schematic (V 1.0.5)"),(0,i.kt)("li",{parentName:"ul"},"WIZ820io Part List (V1.0)")),(0,i.kt)("h3",{id:"ax1"},"AX1"),(0,i.kt)("p",null,"AX1 Loopback Test Program, Install version"),(0,i.kt)("a",{href:"/img/products/wiz820io/AX1.zip",target:"_blank"},"Download"))}c.isMDXComponent=!0},42475:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pin_assign-1-9119124d21895053822d1e9cd8412e4f.jpg"},63688:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/wiz820io_web_1-5dd68f144af577c0c069982ae8181e7d.jpg"}}]);