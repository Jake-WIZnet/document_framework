(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[87087],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},35176:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"nm7010b",title:"NM7010B+",date:new Date("2020-04-16T00:00:00.000Z")},u=void 0,c={unversionedId:"Product/ioModule/nm7010b",id:"Product/ioModule/nm7010b",isDocsHomePage:!1,title:"NM7010B+",description:"Overview",source:"@site/docs/Product/ioModule/NM7010B+.md",sourceDirName:"Product/ioModule",slug:"/Product/ioModule/nm7010b",permalink:"/Product/ioModule/nm7010b",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/ioModule/NM7010B+.md",tags:[],version:"current",frontMatter:{id:"nm7010b",title:"NM7010B+",date:"2020-04-16T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ830MJ",permalink:"/Product/ioModule/wiz830mj"},next:{title:"Application Module",permalink:"/Product/App-Module/app_module"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Block Diagram",id:"block-diagram",children:[]},{value:"Download",id:"download",children:[{value:"Datasheet",id:"datasheet",children:[]},{value:"Hardware Guide",id:"hardware-guide",children:[]},{value:"AX1",id:"ax1",children:[]}]}],p={toc:d};function s(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(17959).Z})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"NM7010B+ is the network module that includes W3150A+ (TCP/IP hardwired chip), Ethernet PHY (RTL8201CP) & MAG-JACK (RJ45 with X\u2019FMR) with other glue logics. It can be used as a component and no effort is required to interface W3150A+ and PHY chip. The NM7010B+ is an ideal option for users who want to develop their Internet enabling systems rapidly."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plug-in Network Module"),(0,o.kt)("li",{parentName:"ul"},"Usable without H/W design for W3150A+, PHY, transformer & RJ-45"),(0,o.kt)("li",{parentName:"ul"},"Fast evaluation for W3150A+ & MCU in the target board"),(0,o.kt)("li",{parentName:"ul"},"Support BUS & SPI for MCU interface"),(0,o.kt)("li",{parentName:"ul"},"Support 4 hardware sockets"),(0,o.kt)("li",{parentName:"ul"},"Operation Temperature : 0 ~ 70\u2103"),(0,o.kt)("li",{parentName:"ul"},"3.3V Internal Operation, 5V Tolerant I/Os"),(0,o.kt)("li",{parentName:"ul"},"Power consumption : Max 160mA (3.3V)")),(0,o.kt)("h2",{id:"block-diagram"},"Block Diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(61173).Z})),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("h3",{id:"datasheet"},"Datasheet"),(0,o.kt)("a",{href:"/img/products/nm7010/NM7010B__Datasheet_v1_3.pdf",target:"_blank"},"NM7010B+ Datasheet v1.3"),(0,o.kt)("p",null,"Last Update: 2013.06.08"),(0,o.kt)("h3",{id:"hardware-guide"},"Hardware Guide"),(0,o.kt)("a",{href:"/img/products/nm7010/NM7010B_hardware.zip",target:"_blank"},"NM7010B+ Hardware Guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NM7010B+ Reference Schematic (V 1.0)"),(0,o.kt)("li",{parentName:"ul"},"NM7010B+ Part List (V1.0)")),(0,o.kt)("h3",{id:"ax1"},"AX1"),(0,o.kt)("p",null,"AX1 Loopback Test Program, Install version"),(0,o.kt)("a",{href:"/img/products/wiz820io/AX1.zip",target:"_blank"},"Download"))}s.isMDXComponent=!0},61173:function(e,t,r){"use strict";t.Z=r.p+"assets/images/block_diagram-81f223c0fb8cd32e09fd19cbf18b42d7.jpg"},17959:function(e,t,r){"use strict";t.Z=r.p+"assets/images/nm7010_web_280-a93ba97a9188eb68d8fde4544ad48229.jpg"}}]);