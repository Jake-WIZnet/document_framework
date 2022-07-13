"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[8210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,P=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(P,o(o({ref:t},u),{},{components:r})):n.createElement(P,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"overview",title:"Overview",date:new Date("2020-04-03T00:00:00.000Z")},o="W5100S",l={unversionedId:"Product/iEthernet/W5100S/overview",id:"Product/iEthernet/W5100S/overview",title:"Overview",description:"W5100S is an embedded Internet controller designed as a full hardwired",source:"@site/docs/Product/iEthernet/W5100S/Overview.md",sourceDirName:"Product/iEthernet/W5100S",slug:"/Product/iEthernet/W5100S/overview",permalink:"/Product/iEthernet/W5100S/overview",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Make New W5100S-EVB Projects using Eclipse",permalink:"/Product/iEthernet/W6100/new-project-eclipse"},next:{title:"Document",permalink:"/Product/iEthernet/W5100S/document"}},s={},p=[{value:"Pin MAP",id:"pin-map",level:2},{value:"Features",id:"features",level:2},{value:"Target Application",id:"target-application",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"w5100s"},"W5100S"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(83896).Z,width:"3409",height:"1937"})),(0,a.kt)("p",null,"W5100S is an embedded Internet controller designed as a full hardwired\nTCP/IP with WIZnet technology. W5100S provides internet connectivity to\nyour embedded system by using SPI (Serial Peripheral Interface) or\nParallel System BUS. SPI and Parallel System BUS provide easy connection\nvia external MCU to W5100S. The clock speed of W5100S SPI supports upto\n70MHz and the Parallel System Bus supports higher speed network\ncommunication than SPI."),(0,a.kt)("p",null,"Since W5100S integrates the Hardwired TCP/IP stack with 10/100 Ethernet\nMAC and PHY, it is truly a one-chip solution for the stable internet\nconnectivity. WIZnet\u2019s hardwired TCP/IP stack supports TCP, UDP, IPv4,\nICMP, ARP, IGMP, and PPPoE - and it has been proven through various\napplications over the last decade."),(0,a.kt)("p",null,"W5100S provides four independent SOCKETs to be used simultaneously and\n16KB internal memory for data communication. Users can develop an\nEthernet application easily by using the simple W5100S SOCKET program\ninstead of handling a complex Ethernet controller. W5100S also provides\nWOL (Wake on LAN) and a Power Down Mode in order to reduce power\nconsumption."),(0,a.kt)("p",null,"W5100S is a low-cost chip that exceeds its predecessor, W5100. Existing\nfirmware using W5100 can be used on W5100S without modification. W5100S\nhas two types of packages, 48 Pin LQFP & QFN Lead-Free Package."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"W5100S Block diagram",src:r(10629).Z,width:"453",height:"605"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"pin-map"},"Pin MAP"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"W5100S Pin map",src:r(13527).Z,width:"511",height:"531"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE"),(0,a.kt)("li",{parentName:"ul"},"Support 4 Independent Hardware SOCKETs simultaneously"),(0,a.kt)("li",{parentName:"ul"},"Support SOCKET-less Command: ARP-Request, PING-Request"),(0,a.kt)("li",{parentName:"ul"},"Support Ethernet Power Down Mode & Main Clock gating for power save"),(0,a.kt)("li",{parentName:"ul"},"Support Wake on LAN over UDP"),(0,a.kt)("li",{parentName:"ul"},"Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3), Parallel System Bus with 2 Address signal & 8bits Data"),(0,a.kt)("li",{parentName:"ul"},"Internal 16 Kbytes Memory for TX/ RX Buffers "),(0,a.kt)("li",{parentName:"ul"},"Not support IP Fragmentation"),(0,a.kt)("li",{parentName:"ul"},"Not Maintain ARP-cache Table "),(0,a.kt)("li",{parentName:"ul"},"10BaseT/100BaseTX Ethernet PHY Integrated"),(0,a.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),(0,a.kt)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),(0,a.kt)("li",{parentName:"ul"},"3.3V operation with 5V I/O signal tolerance"),(0,a.kt)("li",{parentName:"ul"},"LED outputs (Full/Half Duplex, Link, 10/100 Speed, Active)"),(0,a.kt)("li",{parentName:"ul"},"Two types of packages: 48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"target-application"},"Target Application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User product based on W5100 : No need to modify Firmware"),(0,a.kt)("li",{parentName:"ul"},"Home Network Devices: Set-Top Boxes, PVRs, Digital Media Adapters"),(0,a.kt)("li",{parentName:"ul"},"Serial-to-Ethernet: Access Controls, LED displays, Wireless AP\nrelays, etc."),(0,a.kt)("li",{parentName:"ul"},"Parallel-to-Ethernet: POS / Mini Printers, Copiers"),(0,a.kt)("li",{parentName:"ul"},"USB-to-Ethernet: Storage Devices, Network Printers"),(0,a.kt)("li",{parentName:"ul"},"GPIO-to-Ethernet: Home Network Sensors"),(0,a.kt)("li",{parentName:"ul"},"Security Systems: DVRs, Network Cameras, Kiosks"),(0,a.kt)("li",{parentName:"ul"},"Factory, Building, Home Automations"),(0,a.kt)("li",{parentName:"ul"},"Medical Monitoring Equipment"),(0,a.kt)("li",{parentName:"ul"},"Embedded Servers"),(0,a.kt)("li",{parentName:"ul"},"Internet of Things (IoT) Devices"),(0,a.kt)("li",{parentName:"ul"},"IoT Cloud Devices")),(0,a.kt)("hr",null))}c.isMDXComponent=!0},10629:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5100s_diagram-f974ca49b9a55fba8962efbefc4c911d.png"},13527:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5100s_pinmap-573e93f97bf3f970f64693a74421a9c8.png"},83896:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5100s_pm-b45bb30bfe0f881f00d407541d0ef828.png"}}]);