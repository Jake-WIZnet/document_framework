(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[64036],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,k=m["".concat(u,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71686:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l=["components"],o={id:"wiznet_ethernet_hat",title:"WIZnet Ethernet HAT",date:new Date("2021-09-07T00:00:00.000Z")},u=void 0,c={unversionedId:"Product/Open-Source-Hardware/wiznet_ethernet_hat",id:"Product/Open-Source-Hardware/wiznet_ethernet_hat",isDocsHomePage:!1,title:"WIZnet Ethernet HAT",description:"Overview",source:"@site/docs/Product/Open-Source-Hardware/WIZnet-Ethernet-HAT.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/wiznet_ethernet_hat",permalink:"/Product/Open-Source-Hardware/wiznet_ethernet_hat",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/WIZnet-Ethernet-HAT.md",tags:[],version:"current",frontMatter:{id:"wiznet_ethernet_hat",title:"WIZnet Ethernet HAT",date:"2021-09-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"Open Source Hardware",permalink:"/Product/Open-Source-Hardware/open_source_hardware"},next:{title:"W5100S (MKR-)Ethernet Shield",permalink:"/Product/Open-Source-Hardware/w5100s_mkr_ethernet_shield"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Hardware Specification",id:"hardware-specification",children:[{value:"Pin-out",id:"pin-out",children:[]},{value:"Pin Description",id:"pin-description",children:[]}]},{value:"Electrical Specification",id:"electrical-specification",children:[]},{value:"Technical Reference",id:"technical-reference",children:[{value:"W5100S Datasheet",id:"w5100s-datasheet",children:[]},{value:"Schematic",id:"schematic",children:[]},{value:"Dimension (Unit : mm)",id:"dimension-unit--mm",children:[]}]}],d={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"WIZnet Ethernet HAT (Hardware Attached on Top) is a Raspberry Pi Pico pin-compatible board that utilizes W5100S and supports both 3.3V & 5V."),(0,i.kt)("p",null,"Please refer to this link to find more information about ",(0,i.kt)("a",{parentName:"p",href:"../../Product/iEthernet/W5100S/overview"},"W5100S"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raspberry Pi Pico Pin-Compatible"),(0,i.kt)("li",{parentName:"ul"},"Ethernet (W5100S Hardwired TCP/IP CHIP)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(86191).Z})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Includes W5100S",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Supports Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE"),(0,i.kt)("li",{parentName:"ul"},"Supports 4 Independent Hardware SOCKETs simultaneously"),(0,i.kt)("li",{parentName:"ul"},"Internal 16 Kbytes Memory for TX/ RX Buffers"))),(0,i.kt)("li",{parentName:"ul"},"Operation Voltage 3.3V / 5V",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Built-in LDO (LM8805SF5-33V)"))),(0,i.kt)("li",{parentName:"ul"},"SPI Interface",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"5V I/O tolerance"))),(0,i.kt)("li",{parentName:"ul"},"10 / 100 Ethernet PHY embedded"),(0,i.kt)("li",{parentName:"ul"},"Supports Auto Negotiation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Full / Half Duplex"),(0,i.kt)("li",{parentName:"ul"},"10 / 100 Based"))),(0,i.kt)("li",{parentName:"ul"},"Built-in RJ45 (RB1-125BAG1A)")),(0,i.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,i.kt)("h3",{id:"pin-out"},"Pin-out"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZnet_Ethernet_HAT_3D_Pinout",src:n(66488).Z})),(0,i.kt)("h3",{id:"pin-description"},"Pin Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"I/O"),(0,i.kt)("th",{parentName:"tr",align:null},"Pin Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P"),(0,i.kt)("td",{parentName:"tr",align:null},"VBUS"),(0,i.kt)("td",{parentName:"tr",align:null},"Power supply, 4.3~5.5 Voltage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P"),(0,i.kt)("td",{parentName:"tr",align:null},"3V3"),(0,i.kt)("td",{parentName:"tr",align:null},"Power supply, 3.3 Voltage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P"),(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Power ground")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"INTn"),(0,i.kt)("td",{parentName:"tr",align:null},"W5100S Interrupt : Low activity.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"RSTn"),(0,i.kt)("td",{parentName:"tr",align:null},"W5100S Reset : Low activity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI0 TX"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI MOSI (Master Out Slave In)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI0 SCK"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI Clock")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI0 CSn"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI Slave Select")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"O"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI0 RX"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI MISO(Master In Slave Out)")))),(0,i.kt)("h2",{id:"electrical-specification"},"Electrical Specification"),(0,i.kt)("p",null,"TBA"),(0,i.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,i.kt)("h3",{id:"w5100s-datasheet"},"W5100S Datasheet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/osh/w5100s_ethernet_shield/start/w5100s_ethernet_shield_ds_v100e.pdf",target:"_blank"},"Download"))),(0,i.kt)("h3",{id:"schematic"},"Schematic"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZnet_Ethernet_HAT_Schematic",src:n(53370).Z})),(0,i.kt)("h3",{id:"dimension-unit--mm"},"Dimension (Unit : mm)"),(0,i.kt)("p",null,"21 x 68 x 18 (mm)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZnet_Ethernet_HAT_Dimension",src:n(24879).Z})))}m.isMDXComponent=!0},86191:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wiznet_ethernet_hat_3d_main-4e6e3e92ada0cc5146c2209294edd2de.png"},24879:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wiznet_ethernet_hat_dimension-75ee75cfd2af378e1eb8861da04bbc24.png"},66488:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wiznet_ethernet_hat_pinout-90b02a1ece212ac2deca26e0481eab5c.png"},53370:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wiznet_ethernet_hat_schematic-b6084f28bc321d0ab4808e12460ffecd.png"}}]);