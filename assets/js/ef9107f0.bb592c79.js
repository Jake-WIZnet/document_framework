"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[7003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,y=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={id:"system-and-memory",title:"System and Memory overview",date:new Date("2020-04-03T00:00:00.000Z")},i=void 0,l={unversionedId:"Product/iMCU/W7500P/system-and-memory",id:"Product/iMCU/W7500P/system-and-memory",title:"System and Memory overview",description:"System architecture",source:"@site/docs/Product/iMCU/W7500P/System-and-Memory.md",sourceDirName:"Product/iMCU/W7500P",slug:"/Product/iMCU/W7500P/system-and-memory",permalink:"/Product/iMCU/W7500P/system-and-memory",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500P/System-and-Memory.md",tags:[],version:"current",frontMatter:{id:"system-and-memory",title:"System and Memory overview",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Pin Assignment",permalink:"/Product/iMCU/W7500P/pin-assignment"},next:{title:"Interrupt and Events",permalink:"/Product/iMCU/W7500P/interrupt-and-event"}},s={},m=[{value:"System architecture",id:"system-architecture",level:2},{value:"Memory organization",id:"memory-organization",level:2},{value:"Memory map",id:"memory-map",level:3},{value:"System Configuration Controller (SYSCFG)",id:"system-configuration-controller-syscfg",level:2}],c={toc:m},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"system-architecture"},"System architecture"),(0,a.kt)("p",null,"Main system consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ethernet:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IP101G"))),(0,a.kt)("li",{parentName:"ul"},"Two masters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cortex-M0 core"),(0,a.kt)("li",{parentName:"ul"},"uDMAC(PL230, 6 channels)"))),(0,a.kt)("li",{parentName:"ul"},"Ten slaves",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Internal BOOT ROM"),(0,a.kt)("li",{parentName:"ul"},"Internal SRAM"),(0,a.kt)("li",{parentName:"ul"},"Internal Flash Memory"),(0,a.kt)("li",{parentName:"ul"},"Two AHB2APB bridge which connects all APB peripherals"),(0,a.kt)("li",{parentName:"ul"},"Four AHB dedicated to 16-bit GPIOs"),(0,a.kt)("li",{parentName:"ul"},"TCP/IP Hardware core")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"w7500p_system_architecture",src:r(59670).Z,width:"956",height:"865"})),(0,a.kt)("p",null,"AHB-Lite BUS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This bus connects the two masters (Cortex-M0 and uDMAC) and ten AHB slaves.")),(0,a.kt)("p",null,"Two APB BUSs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"These buses connect Seventeen APB peripherals (Watchdog, two dual timers, pwm, two UARTs, simple UART, two I2Cs, two SSPs, random number generator, real time clock, 12bits analog digital converter, clock controller, IO configuration, PAD MUX controller)")),(0,a.kt)("h2",{id:"memory-organization"},"Memory organization"),(0,a.kt)("p",null,"Program memory, data memory, registers and I/O ports are organized within the same linear 4-Gbyte address space.\nThe bytes are coded in memory in Little Endian format. The lowest numbered byte in a word is considered the word\u2019s least significant byte and the highest numbered byte the most significant."),(0,a.kt)("h3",{id:"memory-map"},"Memory map"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"w7500_memory_map",src:r(88096).Z,width:"558",height:"832"})),(0,a.kt)("h2",{id:"system-configuration-controller-syscfg"},"System Configuration Controller (SYSCFG)"),(0,a.kt)("p",null,"Main purposes of the system configuration controller are the following"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Control of the memory remap feature"),(0,a.kt)("li",{parentName:"ul"},"The ability to enable an automatic reset if the system locks up"),(0,a.kt)("li",{parentName:"ul"},"Information about the cause of the last reset")))}p.isMDXComponent=!0},88096:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/memory_map-c93d02718998671ec158c3f6edc4134a.png"},59670:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w7500p_system_architecture-1c0fbfc1e218626778d2832caa7e0c3d.jpg"}}]);