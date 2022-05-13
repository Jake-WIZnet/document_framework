"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[4036],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,h=d["".concat(p,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={id:"wiznet_ethernet_hat",title:"WIZnet Ethernet HAT",date:new Date("2021-09-07T00:00:00.000Z"),keywords:["Raspberry Pi Pico","Ethernet HAT","RP2040","Ethernet","wiznet-ethernet-hat","wiznet"],description:"WIZnet Ethernet HAT - easiest way to add Ethernet to Raspberry Pi Pico"},p=void 0,u={unversionedId:"Product/Open-Source-Hardware/wiznet_ethernet_hat",id:"Product/Open-Source-Hardware/wiznet_ethernet_hat",title:"WIZnet Ethernet HAT",description:"WIZnet Ethernet HAT - easiest way to add Ethernet to Raspberry Pi Pico",source:"@site/docs/Product/Open-Source-Hardware/WIZnet-Ethernet-HAT.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/wiznet_ethernet_hat",permalink:"/Product/Open-Source-Hardware/wiznet_ethernet_hat",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/WIZnet-Ethernet-HAT.md",tags:[],version:"current",frontMatter:{id:"wiznet_ethernet_hat",title:"WIZnet Ethernet HAT",date:"2021-09-07T00:00:00.000Z",keywords:["Raspberry Pi Pico","Ethernet HAT","RP2040","Ethernet","wiznet-ethernet-hat","wiznet"],description:"WIZnet Ethernet HAT - easiest way to add Ethernet to Raspberry Pi Pico"},sidebar:"docs",previous:{title:"Open Source Hardware",permalink:"/Product/Open-Source-Hardware/open_source_hardware"},next:{title:"WizFi360-EVB-Pico",permalink:"/Product/Open-Source-Hardware/wizfi360-evb-pico"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Specification",id:"hardware-specification",level:2},{value:"Pin-out",id:"pin-out",level:3},{value:"Pin Description",id:"pin-description",level:3},{value:"Electrical Specification",id:"electrical-specification",level:2},{value:"Technical Reference",id:"technical-reference",level:2},{value:"W5100S Datasheet",id:"w5100s-datasheet",level:3},{value:"Schematic &amp; Part list &amp; Gerber File",id:"schematic--part-list--gerber-file",level:3},{value:"Schematic",id:"schematic",level:3},{value:"Dimension (Unit : mm)",id:"dimension-unit--mm",level:3},{value:"Firmware Examples",id:"firmware-examples",level:3},{value:"How to buy",id:"how-to-buy",level:2}],d={toc:m};function s(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"WIZnet Ethernet HAT (Hardware Attached on Top) is a Raspberry Pi Pico pin-compatible board that utilizes W5100S and supports both 3.3V & 5V."),(0,i.kt)("p",null,"Please refer to this link to find more information about ",(0,i.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/overview"},"W5100S"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raspberry Pi Pico Pin-Compatible"),(0,i.kt)("li",{parentName:"ul"},"Ethernet (W5100S Hardwired TCP/IP CHIP)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(29348).Z,width:"884",height:"296"})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Includes W5100S",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Supports Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE"),(0,i.kt)("li",{parentName:"ul"},"Supports 4 Independent Hardware SOCKETs simultaneously"),(0,i.kt)("li",{parentName:"ul"},"Internal 16 Kbytes Memory for TX/ RX Buffers"))),(0,i.kt)("li",{parentName:"ul"},"Operation Voltage 3.3V / 5V",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Built-in LDO (LM8805SF5-33V)"))),(0,i.kt)("li",{parentName:"ul"},"SPI Interface",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"5V I/O tolerance"))),(0,i.kt)("li",{parentName:"ul"},"10 / 100 Ethernet PHY embedded"),(0,i.kt)("li",{parentName:"ul"},"Supports Auto Negotiation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Full / Half Duplex"),(0,i.kt)("li",{parentName:"ul"},"10 / 100 Based"))),(0,i.kt)("li",{parentName:"ul"},"Built-in RJ45 (RB1-125BAG1A)")),(0,i.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,i.kt)("h3",{id:"pin-out"},"Pin-out"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZnet-Ethernet-HAT-Pinout",src:n(91331).Z,width:"871",height:"1270"})),(0,i.kt)("h3",{id:"pin-description"},"Pin Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"I/O"),(0,i.kt)("th",{parentName:"tr",align:null},"Pin Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P"),(0,i.kt)("td",{parentName:"tr",align:null},"VBUS"),(0,i.kt)("td",{parentName:"tr",align:null},"Power supply, 4.3~5.5 Voltage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P"),(0,i.kt)("td",{parentName:"tr",align:null},"3V3"),(0,i.kt)("td",{parentName:"tr",align:null},"Power supply, 3.3 Voltage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"P"),(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Power ground")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"INTn"),(0,i.kt)("td",{parentName:"tr",align:null},"W5100S Interrupt : Low activity.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"RSTn"),(0,i.kt)("td",{parentName:"tr",align:null},"W5100S Reset : Low activity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI0 TX"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI MOSI (Master Out Slave In)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI0 SCK"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI Clock")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI0 CSn"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI Slave Select")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"O"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI0 RX"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI MISO(Master In Slave Out)")))),(0,i.kt)("h2",{id:"electrical-specification"},"Electrical Specification"),(0,i.kt)("p",null,"TBA"),(0,i.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,i.kt)("h3",{id:"w5100s-datasheet"},"W5100S Datasheet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/w5100s_ds_v125e.pdf",target:"_blank"},"W5100S Datasheet v1.2.5"))),(0,i.kt)("h3",{id:"schematic--part-list--gerber-file"},"Schematic & Part list & Gerber File"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/08_OSHW/WIZnet_Ethernet_HAT/WIZnet_Ethernet_HAT_V100"},"Go to Github"))),(0,i.kt)("h3",{id:"schematic"},"Schematic"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZnet-Ethernet-HAT-Schematic",src:n(6495).Z,width:"1272",height:"841"})),(0,i.kt)("h3",{id:"dimension-unit--mm"},"Dimension (Unit : mm)"),(0,i.kt)("p",null,"21 x 68 x 18 (mm)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZnet-Ethernet-HAT-Dimension",src:n(40020).Z,width:"1602",height:"593"})),(0,i.kt)("h3",{id:"firmware-examples"},"Firmware Examples"),(0,i.kt)("p",null,"Please refer to below links to find firmware example."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/RP2040-HAT-C"},"C/C++ Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/RP2040-HAT-CircuitPython"},"CircuitPython Examples"))),(0,i.kt)("h2",{id:"how-to-buy"},"How to buy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://eshop.wiznet.io/shop/module/wiznet-ethernet-hat"},(0,i.kt)("img",{alt:"WIZnetUS Online Shop, USA",src:n(42119).Z,width:"40",height:"40"})),"\n",(0,i.kt)("a",{parentName:"p",href:"http://wiznetshop.co.kr/product/detail.html?product_no=1048&cate_no=1&display_group=2"},(0,i.kt)("img",{alt:"WIZnetKorea Online Shop, Korea",src:n(36170).Z,width:"40",height:"40"}))))}s.isMDXComponent=!0},40020:function(e,t,n){t.Z=n.p+"assets/images/wiznet-ethernet-hat-dimension-75ee75cfd2af378e1eb8861da04bbc24.png"},91331:function(e,t,n){t.Z=n.p+"assets/images/wiznet-ethernet-hat-pinout-90b02a1ece212ac2deca26e0481eab5c.png"},6495:function(e,t,n){t.Z=n.p+"assets/images/wiznet-ethernet-hat-schematic-b6084f28bc321d0ab4808e12460ffecd.png"},29348:function(e,t,n){t.Z=n.p+"assets/images/wiznet-ethernet-hat-c8220ff29095e0b95a364782826a1a18.png"},42119:function(e,t){t.Z="data:image/png;base64,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"},36170:function(e,t){t.Z="data:image/png;base64,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"}}]);