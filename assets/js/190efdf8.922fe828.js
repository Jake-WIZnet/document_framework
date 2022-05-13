"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[2171],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},260:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={id:"overview",title:"Overview",date:new Date("2021-07-16T00:00:00.000Z")},u=void 0,c={unversionedId:"Product/iEthernet/W5100/overview",id:"Product/iEthernet/W5100/overview",title:"Overview",description:"Hardwired Dual TCP/IP Stack Controller",source:"@site/docs/Product/iEthernet/W5100/Overview.md",sourceDirName:"Product/iEthernet/W5100",slug:"/Product/iEthernet/W5100/overview",permalink:"/Product/iEthernet/W5100/overview",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100/Overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",date:"2021-07-16T00:00:00.000Z"},sidebar:"docs",previous:{title:"W5100",permalink:"/Product/iEthernet/W5100/"},next:{title:"Documents",permalink:"/Product/iEthernet/W5100/document"}},s={},p=[{value:"Features",id:"features",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(43233).Z,width:"593",height:"552"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardwired Dual TCP/IP Stack Controller")),(0,i.kt)("p",null,"The W5100 chip is a Hardwired TCP/IP embedded Ethernet controller that enables easier Internet connection for embedded systems."),(0,i.kt)("p",null,"W5100 suits users in need of stable Internet connectivity best, using a single chip to implement TCP/IP Stack, 10/100 Ethernet MAC and PHY. Hardwired TCP/IP stack supports TCP, UDP, IPv4, ICMP, ARP, IGMP, and PPPoE, \u2026, which has been proven through various applications over many years. W5100 uses a 16ytes internal buffer as its data communication memory."),(0,i.kt)("p",null,"By using W5100, users can implement the Ethernet application they need by using a simple socket program instead of handling a complex Ethernet Controller."),(0,i.kt)("p",null,"It is possible to use 4 independent hardware sockets simultaneously. BUS (Direct  & Indirect) & SPI (Serial Peripheral Interface) are provided for easy integration with the external MCU."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4880).Z,width:"459",height:"643"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hardwired TCP/IP protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE"),(0,i.kt)("li",{parentName:"ul"},"Un-attackable hardware network engine for preventing network attacks such as flooding, spoofing, injection"),(0,i.kt)("li",{parentName:"ul"},"Host Interface : Direct/Indirect Bus & Serial Peripheral Interface (SPI MODE 0, 3)"),(0,i.kt)("li",{parentName:"ul"},"4 Independent hardware socket"),(0,i.kt)("li",{parentName:"ul"},"Internal 16Kbytes memory for TCP/IP packet processing"),(0,i.kt)("li",{parentName:"ul"},"10BaseT / 100Base TX Ethernet PHY Embedded"),(0,i.kt)("li",{parentName:"ul"},"Support Auto-Negotiation (Full & Half Duplex, 10 & 100 Based)"),(0,i.kt)("li",{parentName:"ul"},"Support Auto-MDIX"),(0,i.kt)("li",{parentName:"ul"},"3.3V Operation with 5V I/O signal tolerance"),(0,i.kt)("li",{parentName:"ul"},"LED outputs (TX, RX, full/half duplex, Collision, link, speed)"),(0,i.kt)("li",{parentName:"ul"},"80LQFP lead-free package (10x10mm)")),(0,i.kt)("hr",null))}m.isMDXComponent=!0},43233:function(e,t,r){t.Z=r.p+"assets/images/W5100-7-d9be903a6fc3f9b36dee2d96a423e17b.jpg"},4880:function(e,t,r){t.Z=r.p+"assets/images/w5100-block-d-c26c55164f8aa343157328ab9498b997.jpg"}}]);