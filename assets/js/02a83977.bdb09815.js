"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5524],{3905:(t,l,n)=>{n.d(l,{Zo:()=>d,kt:()=>c});var e=n(67294);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function u(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function o(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?u(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function k(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},u=Object.keys(t);for(e=0;e<u.length;e++)n=u[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(e=0;e<u.length;e++)n=u[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=e.createContext({}),i=function(t){var l=e.useContext(a),n=l;return t&&(n="function"==typeof t?t(l):o(o({},l),t)),n},d=function(t){var l=i(t.components);return e.createElement(a.Provider,{value:l},t.children)},s={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},p=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,u=t.originalType,a=t.parentName,d=k(t,["components","mdxType","originalType","parentName"]),p=i(n),c=r,m=p["".concat(a,".").concat(c)]||p[c]||s[c]||u;return n?e.createElement(m,o(o({ref:l},d),{},{components:n})):e.createElement(m,o({ref:l},d))}));function c(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=n.length,o=new Array(u);o[0]=p;var k={};for(var a in l)hasOwnProperty.call(l,a)&&(k[a]=l[a]);k.originalType=t,k.mdxType="string"==typeof t?t:r,o[1]=k;for(var i=2;i<u;i++)o[i]=n[i];return e.createElement.apply(null,o)}return e.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47457:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>o,default:()=>s,frontMatter:()=>u,metadata:()=>k,toc:()=>i});var e=n(87462),r=(n(67294),n(3905));const u={id:"W5100S-io",title:"W5100S-io",date:new Date("2022-07-19T00:00:00.000Z")},o=void 0,k={unversionedId:"Product/ioModule/W5100S-io",id:"Product/ioModule/W5100S-io",title:"W5100S-io",description:"Overview",source:"@site/docs/Product/ioModule/W5100S-io.md",sourceDirName:"Product/ioModule",slug:"/Product/ioModule/W5100S-io",permalink:"/Product/ioModule/W5100S-io",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/ioModule/W5100S-io.md",tags:[],version:"current",frontMatter:{id:"W5100S-io",title:"W5100S-io",date:"2022-07-19T00:00:00.000Z"},sidebar:"docs",previous:{title:"ioModule",permalink:"/Product/ioModule/"},next:{title:"W5500-io",permalink:"/Product/ioModule/W5500-io"}},a={},i=[{value:"Overview",id:"overview",level:2},{value:"Hardware Specification",id:"hardware-specification",level:2},{value:"W5100S-io",id:"w5100s-io",level:3},{value:"Pin Out",id:"pin-out",level:3},{value:"Pin Description",id:"pin-description",level:3},{value:"Characteristic",id:"characteristic",level:2},{value:"DC Characteristic",id:"dc-characteristic",level:3},{value:"Power Dissipation",id:"power-dissipation",level:3},{value:"SPI Operations",id:"spi-operations",level:2},{value:"Schematic &amp; Artwork",id:"schematic--artwork",level:2},{value:"Part list",id:"part-list",level:2},{value:"Dimension",id:"dimension",level:2}],d={toc:i};function s(t){let{components:l,...u}=t;return(0,r.kt)("wrapper",(0,e.Z)({},d,u,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"W5100S-io is a compact size network module that includes a W5100S (TCP/IP\nhardwired chip and PHY embedded).It can be used\nas a component and no effort is required to interface W5100S.\nThe W5100S-io an ideal option for users who want to\ndevelop their Internet enabling systems rapidly. W5100S-io is hardware\ncompatible with W5500-io and W6100-io."),(0,r.kt)("p",null,"For the detailed information on implementation of Hardware TCP/IP, refer\nto the ",(0,r.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/document"},"W5100S Datasheet"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"W5100S-io",src:n(70164).Z,width:"561",height:"466"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,r.kt)("h3",{id:"w5100s-io"},"W5100S-io"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plugin Network Module."),(0,r.kt)("li",{parentName:"ul"},"Hardware compatible with W5500-io, W6100-io."),(0,r.kt)("li",{parentName:"ul"},"Usable without H/W design for W5100S."),(0,r.kt)("li",{parentName:"ul"},"Fast evaluation for W5100S & MCU in the target board."),(0,r.kt)("li",{parentName:"ul"},"Support high speed SPI interface."),(0,r.kt)("li",{parentName:"ul"},"Support power down mode and Wake-on-LAN function"),(0,r.kt)("li",{parentName:"ul"},"Very small form factor : 20mm x 24mm x 2.6mm")),(0,r.kt)("h3",{id:"pin-out"},"Pin Out"),(0,r.kt)("img",{src:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/05_Network_Module/W5100S-io/Pictures/W5100S-io%20Pinout.png",width:"800"}),(0,r.kt)("h3",{id:"pin-description"},"Pin Description"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",{class:"header"},(0,r.kt)("th",null,(0,r.kt)("strong",null,"Pin No.")),(0,r.kt)("th",null),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Pin Type")),(0,r.kt)("th",null,"Pin Name"),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Description")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"J1"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"1")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"I")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"RX_P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"RX_P"))),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"2")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"I")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"RX_N")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"RX_N"))),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"3")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"RCT")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"RX Center Tap"),(0,r.kt)("br",null),"This pin should be connect with external pulse transformer's RCT pin")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"4")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"TCT")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"TX Center Tap"),(0,r.kt)("br",null),"This pin should be connect with external pulse transformer's TCT pin")),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"5")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"O")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"TX_P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"TX_P"))),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"6")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"O")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"TX_N")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"TX_N"))))),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",{class:"header"},(0,r.kt)("th",null,(0,r.kt)("strong",null,"Pin No.")),(0,r.kt)("th",null),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Pin Type")),(0,r.kt)("th",null,"Pin Name"),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Description")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"J2"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"1")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"GND")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Ground"))),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"2")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"GND")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Ground"))),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"3")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"I")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"MOSI")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Master Out Slave In"),(0,r.kt)("br",null),"This pin is used for SPI MOSI signal pin")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"4")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"I")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"SCLK")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"SPI clock input"))),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"5")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"I")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"CSn")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Chip select input"))),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"6")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"O")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"INTn")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Interrupt output"),(0,r.kt)("br",null),"Low: Interrupt asserted from W5100S",(0,r.kt)("br",null),"High: No interrupt")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"7")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"O")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"LINK")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"LINK status output"),(0,r.kt)("br",null),"Low : Link",(0,r.kt)("br",null),"High : Un Link")))),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",{class:"header"},(0,r.kt)("th",null,(0,r.kt)("strong",null,"Pin No.")),(0,r.kt)("th",null),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Pin Type")),(0,r.kt)("th",null,"Pin Name"),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Description")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"J3"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"1")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"GND")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Ground"))),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"2")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"3.3V")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Power")," : 3.3V power supply")),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"3")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"P")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"3.3V")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Power")," : 3.3V power supply")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"4")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"-")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"NC")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Not Connect"))),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"5")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"I")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"RSTn")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Reset")," : Low activity",(0,r.kt)("br",null),"Hold at least 500us after asserted to LOW and keep HIGH until next Reset needed.")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"6")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"O")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"MISO")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"SPI Master In Slave Out"),(0,r.kt)("br",null),"This pin is used for SPI MISO signal pin")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,":::"),(0,r.kt)("td",null,(0,r.kt)("strong",null,"7")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"O")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"ACTn")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Active LED"),(0,r.kt)("br",null),"Low: Carrier sense from the active PMD",(0,r.kt)("br",null),"High: No carrier sense")))),"-----",(0,r.kt)("h2",{id:"characteristic"},"Characteristic"),(0,r.kt)("h3",{id:"dc-characteristic"},"DC Characteristic"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",{class:"header"},(0,r.kt)("th",null,"Symbol"),(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Pins"),(0,r.kt)("th",null,"Min"),(0,r.kt)("th",null,"Typ"),(0,r.kt)("th",null,"Max"),(0,r.kt)("th",null,"Unit"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"V",(0,r.kt)("em",null,"DD")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Supply voltage")),(0,r.kt)("td",null,"3.3V"),(0,r.kt)("td",null,"2.97"),(0,r.kt)("td",null,"3.3"),(0,r.kt)("td",null,"3.63"),(0,r.kt)("td",null,"V")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,"V",(0,r.kt)("em",null,"IL")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"High level input voltage")),(0,r.kt)("td",null,"ALL"),(0,r.kt)("td",null,"2.0"),(0,r.kt)("td",null),(0,r.kt)("td",null,"5.5"),(0,r.kt)("td",null,"V")),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"V",(0,r.kt)("em",null,"IH")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Low level input voltage")),(0,r.kt)("td",null,"ALL"),(0,r.kt)("td",null,"-0.3"),(0,r.kt)("td",null),(0,r.kt)("td",null,"0.8"),(0,r.kt)("td",null,"V")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,"V",(0,r.kt)("em",null,"OL")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Low level output voltage")),(0,r.kt)("td",null,"ALL"),(0,r.kt)("td",null),(0,r.kt)("td",null),(0,r.kt)("td",null,"0.4"),(0,r.kt)("td",null,"V")),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"V",(0,r.kt)("em",null,"OH")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"High level output voltage")),(0,r.kt)("td",null,"ALL"),(0,r.kt)("td",null,"2.4"),(0,r.kt)("td",null),(0,r.kt)("td",null),(0,r.kt)("td",null,"V")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,"L",(0,r.kt)("em",null,"OL")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Low level output Current")),(0,r.kt)("td",null,"ALL"),(0,r.kt)("td",null,"8.6"),(0,r.kt)("td",null,"13.9"),(0,r.kt)("td",null,"18.9"),(0,r.kt)("td",null,"mA")),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"L",(0,r.kt)("em",null,"OH")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"High level output Current")),(0,r.kt)("td",null,"ALL"),(0,r.kt)("td",null,"12.5"),(0,r.kt)("td",null,"26.9"),(0,r.kt)("td",null,"47.1"),(0,r.kt)("td",null,"mA")),(0,r.kt)("tr",{class:"even"},(0,r.kt)("td",null,"I",(0,r.kt)("em",null,"DD")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Supply Current",(0,r.kt)("br",null),"(Normal operation mode)")),(0,r.kt)("td",null,"3.3V"),(0,r.kt)("td",null),(0,r.kt)("td",null,"132"),(0,r.kt)("td",null),(0,r.kt)("td",null,"mA")),(0,r.kt)("tr",{class:"odd"},(0,r.kt)("td",null,"L",(0,r.kt)("em",null,"OH")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Supply Current",(0,r.kt)("br",null),"(Power Down mode)")),(0,r.kt)("td",null,"3.3V"),(0,r.kt)("td",null),(0,r.kt)("td",null,"13"),(0,r.kt)("td",null),(0,r.kt)("td",null,"mA")))),(0,r.kt)("h3",{id:"power-dissipation"},"Power Dissipation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Condition"),(0,r.kt)("th",{parentName:"tr",align:null},"Min"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Max"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100M Link"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"93"),(0,r.kt)("td",{parentName:"tr",align:null},"110"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10M Link"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"93"),(0,r.kt)("td",{parentName:"tr",align:null},"210"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Un-Link (Auto-negotiation mode)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"43"),(0,r.kt)("td",{parentName:"tr",align:null},"170"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power Down mode"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"spi-operations"},"SPI Operations"),(0,r.kt)("p",null,"As W5100S-io consists of W5100S and others, SPI operation of W5100S-io\nfollows one of W5100S. For more information about SPI operation of\nW5100S-io, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/document"},"W5100S Datasheet"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schematic--artwork"},"Schematic & Artwork"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Revision 1.0 ",(0,r.kt)("a",{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/05_Network_Module/W5100S-io/W5100S-io_V100/Schematic/W5100S-io_SCH_V100.pdf",target:"_blank"},"W5100S-io V100 Schematic(PDF)")),(0,r.kt)("li",{parentName:"ul"},"Revision 1.0 ",(0,r.kt)("a",{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/05_Network_Module/W5100S-io/W5100S-io_V100/Schematic/W5100S-io_V100_Final.zip",target:"_blank"},"W5100S-io V100 Schematic(Altium)"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"part-list"},"Part list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Revision 1.0 ",(0,r.kt)("a",{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/05_Network_Module/W5100S-io/W5100S-io_V100/Partlist/W5100S-io_PL_V100.pdf",target:"_blank"},"W5100S-io V100 Part list(PDF)")),(0,r.kt)("li",{parentName:"ul"},"Revision 1.0 ",(0,r.kt)("a",{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/raw/master/05_Network_Module/W5100S-io/W5100S-io_V100/Partlist/W5100S-io_PL_V100.xlsx",target:"_blank"},"W5100S-io V100 Part list(Excel)"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dimension"},"Dimension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"W5100S-io V100 Dimension",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"24mm x 20mm x 1.0mm ( PCB board size )"),(0,r.kt)("li",{parentName:"ul"},"24mm x 20mm x 2.6mm ( Included part size )")))),(0,r.kt)("img",{src:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/blob/master/05_Network_Module/W5100S-io/Pictures/W5100S-io%20dimension.png?raw=true",width:"600"}))}s.isMDXComponent=!0},70164:(t,l,n)=>{n.d(l,{Z:()=>e});const e=n.p+"assets/images/w5100s-io-side-0db1c5708968a2ac567100046fdcbefd.png"}}]);