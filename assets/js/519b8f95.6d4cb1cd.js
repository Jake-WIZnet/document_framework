"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[9643],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,y=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(y,i(i({ref:t},m),{},{components:r})):n.createElement(y,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},22090:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={id:"system-and-memory",title:"System and Memory",date:new Date("2020-04-03T00:00:00.000Z")},s=void 0,c={unversionedId:"Product/iMCU/W7500/system-and-memory",id:"Product/iMCU/W7500/system-and-memory",title:"System and Memory",description:"System architecture",source:"@site/docs/Product/iMCU/W7500/System-and-Memory.md",sourceDirName:"Product/iMCU/W7500",slug:"/Product/iMCU/W7500/system-and-memory",permalink:"/Product/iMCU/W7500/system-and-memory",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/System-and-Memory.md",tags:[],version:"current",frontMatter:{id:"system-and-memory",title:"System and Memory",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Pin Assignment",permalink:"/Product/iMCU/W7500/pin-assignment"},next:{title:"Interrupt and Event",permalink:"/Product/iMCU/W7500/interrupt-and-event"}},m={},u=[{value:"System architecture",id:"system-architecture",level:2},{value:"Memory organization",id:"memory-organization",level:2},{value:"Memory map",id:"memory-map",level:3},{value:"System Configuration Controller (SYSCFG)",id:"system-configuration-controller-syscfg",level:2}],p={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"system-architecture"},"System architecture"),(0,a.kt)("p",null,"Main system consists of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Two masters:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cortex-M0 core"),(0,a.kt)("li",{parentName:"ul"},"uDMAC(PL230, 6 channels)"))),(0,a.kt)("li",{parentName:"ul"},"Ten slaves",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Internal BOOT ROM"),(0,a.kt)("li",{parentName:"ul"},"Internal SRAM"),(0,a.kt)("li",{parentName:"ul"},"Internal Flash Memory"),(0,a.kt)("li",{parentName:"ul"},"Two AHB2APB bridge which connects all APB peripherals"),(0,a.kt)("li",{parentName:"ul"},"Four AHB dedicated to 16-bit GPIOs"),(0,a.kt)("li",{parentName:"ul"},"TCP/IP Hardware core")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"W7500 System Architecture",src:r(58312).Z,width:"644",height:"487"})),(0,a.kt)("p",null,"AHB-Lite BUS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This bus connects the two masters (Cortex-M0 and uDMAC) and ten AHB\nslaves.")),(0,a.kt)("p",null,"Two APB BUSs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"These buses connect Seventeen APB peripherals (Watchdog, two dual\ntimers, pwm, two UARTs, simple UART, two I2Cs, two SSPs, random number\ngenerator, real time clock, 12bits analog digital converter, clock\ncontroller, IO configuration, PAD MUX controller)")),(0,a.kt)("h2",{id:"memory-organization"},"Memory organization"),(0,a.kt)("p",null,"Program memory, data memory, registers and I/O ports are organized\nwithin the same linear 4-Gbyte address space. The bytes are coded in\nmemory in Little Endian format. The lowest numbered byte in a word is\nconsidered the word\u2019s least significant byte and the highest numbered\nbyte the most significant."),(0,a.kt)("h3",{id:"memory-map"},"Memory map"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"W7500 Memory map",src:r(88096).Z,width:"558",height:"832"})),(0,a.kt)("h2",{id:"system-configuration-controller-syscfg"},"System Configuration Controller (SYSCFG)"),(0,a.kt)("p",null,"Main purposes of the system configuration controller are the following"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Control of the memory remap feature"),(0,a.kt)("li",{parentName:"ul"},"The ability to enable an automatic reset if the system locks up"),(0,a.kt)("li",{parentName:"ul"},"Information about the cause of the last reset")))}d.isMDXComponent=!0},88096:function(e,t,r){t.Z=r.p+"assets/images/memory_map-c93d02718998671ec158c3f6edc4134a.png"},58312:function(e,t,r){t.Z=r.p+"assets/images/w7500_system_architecture-460810abc914b8992dde77f0345dc203.png"}}]);