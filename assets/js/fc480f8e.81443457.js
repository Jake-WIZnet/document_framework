"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[98210],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={id:"overview",title:"Overview",date:new Date("2020-04-03T00:00:00.000Z")},u="W5100S",s={unversionedId:"Product/iEthernet/W5100S/overview",id:"Product/iEthernet/W5100S/overview",isDocsHomePage:!1,title:"Overview",description:"W5100S is an embedded Internet controller designed as a full hardwired",source:"@site/docs/Product/iEthernet/W5100S/Overview.md",sourceDirName:"Product/iEthernet/W5100S",slug:"/Product/iEthernet/W5100S/overview",permalink:"/Product/iEthernet/W5100S/overview",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Make New W5100S-EVB Projects using Eclipse",permalink:"/Product/iEthernet/W6100/new_project_eclipse"},next:{title:"Document",permalink:"/Product/iEthernet/W5100S/document"}},p=[{value:"Pin MAP",id:"pin-map",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"Target Application",id:"target-application",children:[],level:2}],c={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"w5100s"},"W5100S"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38432).Z})),(0,i.kt)("p",null,"W5100S is an embedded Internet controller designed as a full hardwired\nTCP/IP with WIZnet technology. W5100S provides internet connectivity to\nyour embedded system by using SPI (Serial Peripheral Interface) or\nParallel System BUS. SPI and Parallel System BUS provide easy connection\nvia external MCU to W5100S. The clock speed of W5100S SPI supports upto\n70MHz and the Parallel System Bus supports higher speed network\ncommunication than SPI."),(0,i.kt)("p",null,"Since W5100S integrates the Hardwired TCP/IP stack with 10/100 Ethernet\nMAC and PHY, it is truly a one-chip solution for the stable internet\nconnectivity. WIZnet\u2019s hardwired TCP/IP stack supports TCP, UDP, IPv4,\nICMP, ARP, IGMP, and PPPoE - and it has been proven through various\napplications over the last decade."),(0,i.kt)("p",null,"W5100S provides four independent SOCKETs to be used simultaneously and\n16KB internal memory for data communication. Users can develop an\nEthernet application easily by using the simple W5100S SOCKET program\ninstead of handling a complex Ethernet controller. W5100S also provides\nWOL (Wake on LAN) and a Power Down Mode in order to reduce power\nconsumption."),(0,i.kt)("p",null,"W5100S is a low-cost chip that exceeds its predecessor, W5100. Existing\nfirmware using W5100 can be used on W5100S without modification. W5100S\nhas two types of packages, 48 Pin LQFP & QFN Lead-Free Package."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"W5100S Block diagram",src:n(35418).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"pin-map"},"Pin MAP"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"W5100S Pin map",src:n(98950).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE"),(0,i.kt)("li",{parentName:"ul"},"Support 4 Independent Hardware SOCKETs simultaneously"),(0,i.kt)("li",{parentName:"ul"},"Support SOCKET-less Command: ARP-Request, PING-Request"),(0,i.kt)("li",{parentName:"ul"},"Support Ethernet Power Down Mode & Main Clock gating for power save"),(0,i.kt)("li",{parentName:"ul"},"Support Wake on LAN over UDP"),(0,i.kt)("li",{parentName:"ul"},"Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3), Parallel System Bus with 2 Address signal & 8bits Data"),(0,i.kt)("li",{parentName:"ul"},"Internal 16 Kbytes Memory for TX/ RX Buffers "),(0,i.kt)("li",{parentName:"ul"},"Not support IP Fragmentation"),(0,i.kt)("li",{parentName:"ul"},"Not Maintain ARP-cache Table "),(0,i.kt)("li",{parentName:"ul"},"10BaseT/100BaseTX Ethernet PHY Integrated"),(0,i.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),(0,i.kt)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),(0,i.kt)("li",{parentName:"ul"},"3.3V operation with 5V I/O signal tolerance"),(0,i.kt)("li",{parentName:"ul"},"LED outputs (Full/Half Duplex, Link, 10/100 Speed, Active)"),(0,i.kt)("li",{parentName:"ul"},"Two types of packages: 48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"target-application"},"Target Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User product based on W5100 : No need to modify Firmware"),(0,i.kt)("li",{parentName:"ul"},"Home Network Devices: Set-Top Boxes, PVRs, Digital Media Adapters"),(0,i.kt)("li",{parentName:"ul"},"Serial-to-Ethernet: Access Controls, LED displays, Wireless AP\nrelays, etc."),(0,i.kt)("li",{parentName:"ul"},"Parallel-to-Ethernet: POS / Mini Printers, Copiers"),(0,i.kt)("li",{parentName:"ul"},"USB-to-Ethernet: Storage Devices, Network Printers"),(0,i.kt)("li",{parentName:"ul"},"GPIO-to-Ethernet: Home Network Sensors"),(0,i.kt)("li",{parentName:"ul"},"Security Systems: DVRs, Network Cameras, Kiosks"),(0,i.kt)("li",{parentName:"ul"},"Factory, Building, Home Automations"),(0,i.kt)("li",{parentName:"ul"},"Medical Monitoring Equipment"),(0,i.kt)("li",{parentName:"ul"},"Embedded Servers"),(0,i.kt)("li",{parentName:"ul"},"Internet of Things (IoT) Devices"),(0,i.kt)("li",{parentName:"ul"},"IoT Cloud Devices")),(0,i.kt)("hr",null))}d.isMDXComponent=!0},35418:function(e,t,n){t.Z=n.p+"assets/images/w5100s_diagram-f974ca49b9a55fba8962efbefc4c911d.png"},98950:function(e,t,n){t.Z=n.p+"assets/images/w5100s_pinmap-573e93f97bf3f970f64693a74421a9c8.png"},38432:function(e,t,n){t.Z=n.p+"assets/images/w5100s_pm-b45bb30bfe0f881f00d407541d0ef828.png"}}]);