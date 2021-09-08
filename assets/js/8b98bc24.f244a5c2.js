(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[40565],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return k},kt:function(){return m}});var l=r(67294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,l,s=function(t,e){if(null==t)return{};var r,l,s={},n=Object.keys(t);for(l=0;l<n.length;l++)r=n[l],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)r=n[l],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var i=l.createContext({}),c=function(t){var e=l.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},k=function(t){var e=c(t.components);return l.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var r=t.components,s=t.mdxType,n=t.originalType,i=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),d=c(r),m=s,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||n;return r?l.createElement(g,a(a({ref:e},k),{},{components:r})):l.createElement(g,a({ref:e},k))}));function m(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=r.length,a=new Array(n);a[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:s,a[1]=o;for(var c=2;c<n;c++)a[c]=r[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21281:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return k},default:function(){return d}});var l=r(22122),s=r(19756),n=(r(67294),r(3905)),a=["components"],o={id:"toe",title:"TCP/IP core Offload Engine (TOE)",date:new Date("2020-04-03T00:00:00.000Z")},i=void 0,c={unversionedId:"Product/iMCU/W7500/Peripherals-internal/toe",id:"Product/iMCU/W7500/Peripherals-internal/toe",isDocsHomePage:!1,title:"TCP/IP core Offload Engine (TOE)",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/toe.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/toe",permalink:"/Product/iMCU/W7500/Peripherals-internal/toe",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/toe.md",tags:[],version:"current",frontMatter:{id:"toe",title:"TCP/IP core Offload Engine (TOE)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Dual Timer TimerRun example",permalink:"/Product/iMCU/W7500/Peripherals-internal/timerrun"},next:{title:"Universal Asynchronous Receive Transmit (UART)",permalink:"/Product/iMCU/W7500/Peripherals-internal/uart"}},k=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[]},{value:"TOE Memory map",id:"toe-memory-map",children:[{value:"Common register map",id:"common-register-map",children:[]},{value:"Socket register map",id:"socket-register-map",children:[]},{value:"Memory",id:"memory",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],u={toc:k};function d(t){var e=t.components,o=(0,s.Z)(t,a);return(0,n.kt)("wrapper",(0,l.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The TCP/IPCore Offlead Engine (TOE) is a Hardwired TCP/IP embedded Ethernet controller that provides easier Internet connection to embedded systems. TOE enables users to have Internet connectivity in their applications by using the TCP/IP stack.\nWIZnet\u2018s Hardwired TCP/IP is the market-proven technology that supports TCP, UDP, IPv4, ICMP, ARP, IGMP, and PPPoE protocols. TOE embeds the 32Kbyte internal memory buffer for the Ethernet packet processing. Using TOE allows users to implement the Ethernet application by adding the simple socket program. It\u2019s faster and easier than using any other Embedded Ethernet solutions. 8 independent hardware sockets can be used simultaneously.\nTOE also provides WOL (Wake on LAN) to reduce power consumption of the system."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supports Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE"),(0,n.kt)("li",{parentName:"ul"},"Supports 8 independent sockets simultaneously"),(0,n.kt)("li",{parentName:"ul"},"Supports Power down mode"),(0,n.kt)("li",{parentName:"ul"},"Supports Wake on LAN over UDP"),(0,n.kt)("li",{parentName:"ul"},"Internal 32Kbytes Memory for TX/RX Buffers"),(0,n.kt)("li",{parentName:"ul"},"Not supports IP Fragmentation")),(0,n.kt)("h2",{id:"functional-description"},"Functional description"),(0,n.kt)("p",null,"The below Figure shows the TOE block diagram."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(69710).Z,title:"Figure 1 TOE block diagram"})),(0,n.kt)("h2",{id:"toe-memory-map"},"TOE Memory map"),(0,n.kt)("p",null,"TOE has one Common Register Block, eight Socket Register Blocks, and TX/RX Buffer Blocks allocated to each Socket. The below Figure shows the selected block by the base address and the available offset address range of Socket TX/RX Buffer Blocks. Each Socket\u2019s TX Buffer Block physically exists in one 16KB TX memory and is initially allocated with 2KB. Also, Each Socket\u2019s RX Buffer Block physically exists in one 16KB RX Memory and is initially allocated with 2KB.\nRegardless of the allocated size of each Socket TX/RX Buffer, it can be accessible within the 16 bits offset address range (From 0x0000 to 0xFFFF).\nRefer to ",(0,n.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/Peripherals-internal/toe#memory"},"Memory")," for more information about 16KB TX/RX Memory organization and access method."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(50467).Z,title:"Figure 2 TOE memory map "})),(0,n.kt)("h3",{id:"common-register-map"},"Common register map"),(0,n.kt)("p",null,"Common Register Block configures the general information of TOE such as IP and MAC address. The below Table defines the offset address of registers in this block. Refer to ",(0,n.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/Peripherals-internal/toe#memory"},"Memory")," for more details about each register."),(0,n.kt)("table",{class:"tg"},(0,n.kt)("tr",null,(0,n.kt)("th",{class:"tg-s6z2"},"Offset",(0,n.kt)("br",null),"  "),(0,n.kt)("th",{class:"tg-s6z2"},"Register",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0000",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"TOE Version (VERSIONR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2000",(0,n.kt)("br",null)),(0,n.kt)("td",{class:"tg-s6z2"},"TICKCLOK (TCLKR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2100",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Interrupt (IR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2104",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Interrupt Mask (IMR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2108",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Interrupt Clear (IRCR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2110",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Interrupt (SIR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2114",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Mask (SIMR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2300",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Mode (MR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2400",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"PPP Timer (PTIMER)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2404",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"PPP Magic (PMAGIC)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2408",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"PPP Destination MAC Address (PHAR1)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x240C",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"PPP Destination MAC address (PHAR0)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2410",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"PPP Session Identification (PSID)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x2414",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"PPP Maximum Segment Size (PMSS)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x6000",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Source Hardware Address (SHAR1)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x6004",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Source Hardware Address (SHAR0)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x6008",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Gateway Address (GA)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x600C",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Subnet Mask (SUB)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x6010",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Source IP Address (SIP)")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x6020",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Network Configuration Lock (NCONFL)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x6040",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Retry Time (RTR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x6044",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Retry Counter (RCR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x6050",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Unreachable IP Address (UIP)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-031e"},"0x6054",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-031e"},"Unreachable Port Address (UPORT)"))),(0,n.kt)("h3",{id:"socket-register-map"},"Socket register map"),(0,n.kt)("p",null,"TOE supports 8 Sockets for communication channel. Each Socket is controlled by Socket n Register (n = 0,\u2026,7  ,where n is socket number). <Table 2> defines the 16bits Offset Address of registers in Socket n Register Block.\nRefer to ",(0,n.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/Peripherals-internal/toe#memory"},"Memory")," for more details about each register."),(0,n.kt)("table",{class:"tg"},(0,n.kt)("tr",null,(0,n.kt)("th",{class:"tg-s6z2"},"Offset",(0,n.kt)("br",null),"  "),(0,n.kt)("th",{class:"tg-s6z2"},"Register",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0000",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Mode (Sn_MR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0010",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Command (Sn_CR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0020",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Interrupt (Sn_IR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0024",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Interrupt Mask (Sn_IMR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0028",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Interrupt Clear (Sn_ICR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0030",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Status (Sn_SR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0100",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Protocol Number (Sn_PNR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0104",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket IP Type of Service (Sn_TOS)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0108",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket TTL (Sn_TTLR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x010C",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Fragment Offset (Sn_FRAG)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0110",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Maximum Segment (Sn_MSSR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0114",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Port Number (Sn_PORT)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0118",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Destination Hardware address0 (Sn_DHAR0)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x011C",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Destination Hardware address1 (Sn_DHAR1)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0120",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Destination Port Number (Sn_DPORTR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0124",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Destination IP Address (Sn_DIPR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0180",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Keep Alive Timer (Sn_KATMR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0184",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Retry Time (Sn_RTR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0188",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket Retry Counter (Sn_RCR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0200",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket TX Memory Size (Sn_TMSR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0204",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket TX Free Size (Sn_TXFSR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0208",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket TX Read Pointer (Sn_TXRDR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x020C",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket TX Write Pointer (Sn_TXWR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0220",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket RX Memory Size (Sn_TMSR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0224",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket RX Received Size (Sn_RSR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0228",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket RX Read Pointer (Sn_RXRDR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x022C",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket RX Write Pointer (Sn_RXWR)",(0,n.kt)("br",null),"  ")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-s6z2"},"0x0400",(0,n.kt)("br",null),"  "),(0,n.kt)("td",{class:"tg-s6z2"},"Socket TCP Status (Sn_TSR)",(0,n.kt)("br",null),"  "))),(0,n.kt)("h3",{id:"memory"},"Memory"),(0,n.kt)("p",null,"TOE has one 16KB TX memory for Socket n TX Buffer Blocks and one 16KB RX memory for Socket n RX buffer Blocks."),(0,n.kt)("p",null,"16KB TX memory is initially allocated in 2KB size for each Socket TX Buffer Block (2KB X 8 = 16KB). The initial allocated 2KB size of Socket n TX Buffer can be re-allocated by using \u2018Socket n TX Buffer Size Register (Sn_TXBUF_SIZE)\u2019.\nOnce all Sn_TXBUF_SIZE registers have been configured, Socket TX Buffer is allocated with the configured size of 16KB TX Memory and is assigned sequentially from Socket 0 to Socket 7. Its physical memory address is automatically determined in 16KB TX memory. Therefore, the total sum of Sn_TXBUF_SIZE should not exceed 16 in case of error in data transmission."),(0,n.kt)("p",null,"The 16KB RX memory allocation method is the same as the 16KB TX memory allocation method. 16KB RX memory is initially allocated into 2KB size for each Socket RX Buffer Block (2KB X 8 = 16KB). The initial allocated 2KB size of Socket n RX Buffer can be re-allocated by using \u2018Socket n RX Buffer Size Register (Sn_RXBUF_SIZE)\u2019."),(0,n.kt)("p",null,"When all Sn_RXBUF_SIZE registers have been configured, the Socket RX Buffer is allocated with the configured size in 16KB RX Memory and is assigned sequentially from Socket 0 to Socket 7. The physical memory address of the Socket RX Buffer is automatically determined in 16KB RX memory. Therefore, the total sum of Sn_RXBUF_SIZE should not exceed 16 or data reception error will occur. "),(0,n.kt)("p",null,"For 16KB TX/RX memory allocation, refer to Sn_TXBUF_SIZE & Sn_RXBUF_SIZE in ",(0,n.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/Peripherals-internal/toe#socket_register_map"},"Socket register map")," . The Socket n TX Buffer Block allocated in 16KB TX memory is buffer for saving data to be transmitted by host. The 16bits Offset Address of Socket n TX Buffer Block has 64KB address space ranged from 0x0000 to 0xFFFF, and is configured with reference to \u2018Socket n TX Write Pointer Register (Sn_TX_WR)\u2019 & \u2018Socket n TX Read Pointer Register(Sn_RX_RD)\u2019. However, the 16bits Offset Address automatically converts into the physical address to be accessible in 16KB TX memory such as ",(0,n.kt)("a",{target:"_blank",href:r(14826).Z},"The upper Figure"),". Refer to ","[Socket register map]","(/Product/iMCU/W7500/Peripherals-internal/toe#socket register map) for Sn_TX_WR & Sn_TX_RD."),(0,n.kt)("p",null,"The Socket n RX Buffer Block allocated in 16KB RX memory is buffer for saving the received data through the Ethernet. The 16bits Offset Address of Socket n RX Buffer Block has 64KB address space ranged from 0x0000 to 0xFFFF, and is configured with reference to \u2018Socket n RX RD Pointer Register (Sn_RX_RD)\u2019 & \u2018Socket n RX Write Pointer Register (Sn_RX_WR)\u2019. However, the 16bits Offset Address automatically converts into the physical address to be accessible in 16KB RX memory such as ",(0,n.kt)("a",{target:"_blank",href:r(14826).Z},"The upper Figure"),". Refer to ",(0,n.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/Peripherals-internal/toe#socket_register_map"},"Socket register map")," for Sn_RX_RD & Sn_RX_WR."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/loopback"},"TCP/UDP Loopback")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/deladhcpclient"},"DHCP Client")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/dmdnsclient"},"DNS Client"))))}d.isMDXComponent=!0},14826:function(t,e,r){"use strict";e.Z=r.p+"assets/files/wztoe_memory_map-57f4e07baa6be4edeae6ff13228358e2.jpg"},69710:function(t,e,r){"use strict";e.Z=r.p+"assets/images/wztoe_diagram-2de31511274bba70076dabb401d0fca0.gif"},50467:function(t,e,r){"use strict";e.Z=r.p+"assets/images/wztoe_memory_map-57f4e07baa6be4edeae6ff13228358e2.jpg"}}]);