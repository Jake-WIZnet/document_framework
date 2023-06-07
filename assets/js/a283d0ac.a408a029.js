"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[7658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"overview",title:"Overview",date:new Date("2020-04-03T00:00:00.000Z"),keywords:["w5500","ethernet chip","wiznet","hardwired tcp/ip","arduino ethernet","pico ethernet"],description:"W5500 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology"},o=void 0,l={unversionedId:"Product/iEthernet/W5500/overview",id:"Product/iEthernet/W5500/overview",title:"Overview",description:"W5500 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology",source:"@site/docs/Product/iEthernet/W5500/Overview.md",sourceDirName:"Product/iEthernet/W5500",slug:"/Product/iEthernet/W5500/overview",permalink:"/Product/iEthernet/W5500/overview",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/Overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",date:"2020-04-03T00:00:00.000Z",keywords:["w5500","ethernet chip","wiznet","hardwired tcp/ip","arduino ethernet","pico ethernet"],description:"W5500 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology"},sidebar:"docs",previous:{title:"Make New W5100S-EVB Projects using Eclipse",permalink:"/Product/iEthernet/W5100S/w5100s-projects-eclipse"},next:{title:"Overview JP",permalink:"/Product/iEthernet/W5500/japanese-v"}},p={},c=[{value:"W5500",id:"w5500",level:2},{value:"Features",id:"features",level:2},{value:"Language",id:"language",level:3},{value:"Material",id:"material",level:3}],u={toc:c},d="wrapper";function s(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"w5500"},"W5500"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"W5500 Photo 1",src:r(44103).Z,width:"502",height:"530"})),(0,a.kt)("p",null,"The W5500 chip is a Hardwired Internet controller designed as a full\nhardwired TCP/IP stack with WIZnet technology. W5500 provides Internet\nconnectivity to your embedded systems by using SPI(Serial Peripheral\nInterface). SPI provides easy connection via external MCU to W5500. The\nclock speed of W5500 SPI supports upto 80MHz."),(0,a.kt)("p",null,"Since W5500 integrates the Hardwired TCP/IP stack with 10/100 Ethernet\nMAC and PHY, it is truly a one-chip solution for the stable internet\nconnectivity. WIZnet's Hardwired TCP/IP stack supports TCP, UDP, IPv4,\nICMP, ARP, IGMP, and PPPoE - and it has been proven through various\napplications over the last decade."),(0,a.kt)("p",null,"W5500 provides 8 independent SOCKETs to be used simultaneously and 32KB\ninternal memory for data communication. Users can develop an Ethernet\napplication easily by using the simple W5500 SOCKET program instead of\nhandling a complex Ethernet controller. W5500 also provides WOL (Wake on\nLAN) and a Power Down Mode in order to reduce power consumption."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports following Hardwired TCP/IP Protocols : TCP, UDP, ICMP,\nIPv4, ARP, IGMP, PPPoE"),(0,a.kt)("li",{parentName:"ul"},"Supports 8 independent sockets simultaneously"),(0,a.kt)("li",{parentName:"ul"},"Supports Power down mode"),(0,a.kt)("li",{parentName:"ul"},"Supports Wake on LAN over UDP"),(0,a.kt)("li",{parentName:"ul"},"Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)"),(0,a.kt)("li",{parentName:"ul"},"Internal 32Kbytes Memory for Tx/Rx Buffers"),(0,a.kt)("li",{parentName:"ul"},"10BaseT/100BaseTX Ethernet PHY embedded"),(0,a.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full and half duplex, 10 and 100-based)"),(0,a.kt)("li",{parentName:"ul"},"Not support IP Fragmentation"),(0,a.kt)("li",{parentName:"ul"},"3.3V operation with 5V I/O signal tolerance"),(0,a.kt)("li",{parentName:"ul"},"LED outputs (Full/Half duplex, Link, Speed, Active)"),(0,a.kt)("li",{parentName:"ul"},"48 Pin LQFP Lead-Free Package (7x7mm, 0.5mm pitch)")),(0,a.kt)("h3",{id:"language"},"Language"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/japanese-v"},"Japanese Version"))),(0,a.kt)("h3",{id:"material"},"Material"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/datasheet"},"W5500 Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/driver"},"W5500 Driver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/ref-schematic"},"W5500 Reference Schematic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/migration-from-w5200"},"Migration from W5200 to W5500")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/Application/tcp"},"W5500 TCP Function")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/Application/udp"},"W5500 UDP Function")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/Application/ipraw"},"W5500 Application Note (IPRAW)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/Application/pppoe"},"W5500 Application Note (PPPoE)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/Application/spi-performance"},"W5500 Confirmation of ESD Test"))))}s.isMDXComponent=!0},44103:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/img_w5500h-c3476f2e3d87a768158e8c7fc27d86be.jpg"}}]);