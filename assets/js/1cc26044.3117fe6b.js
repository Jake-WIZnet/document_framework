(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[6736],{3905:function(t,n,l){"use strict";l.d(n,{Zo:function(){return d},kt:function(){return g}});var e=l(67294);function r(t,n,l){return n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}function a(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),l.push.apply(l,e)}return l}function i(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?a(Object(l),!0).forEach((function(n){r(t,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))}))}return t}function u(t,n){if(null==t)return{};var l,e,r=function(t,n){if(null==t)return{};var l,e,r={},a=Object.keys(t);for(e=0;e<a.length;e++)l=a[e],n.indexOf(l)>=0||(r[l]=t[l]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)l=a[e],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var k=e.createContext({}),o=function(t){var n=e.useContext(k),l=n;return t&&(l="function"==typeof t?t(n):i(i({},n),t)),l},d=function(t){var n=o(t.components);return e.createElement(k.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},A=e.forwardRef((function(t,n){var l=t.components,r=t.mdxType,a=t.originalType,k=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),A=o(l),g=r,p=A["".concat(k,".").concat(g)]||A[g]||s[g]||a;return l?e.createElement(p,i(i({ref:n},d),{},{components:l})):e.createElement(p,i({ref:n},d))}));function g(t,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=l.length,i=new Array(a);i[0]=A;var u={};for(var k in n)hasOwnProperty.call(n,k)&&(u[k]=n[k]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<a;o++)i[o]=l[o];return e.createElement.apply(null,i)}return e.createElement.apply(null,l)}A.displayName="MDXCreateElement"},91257:function(t,n,l){"use strict";l.r(n),l.d(n,{frontMatter:function(){return u},contentTitle:function(){return k},metadata:function(){return o},toc:function(){return d},default:function(){return A}});var e=l(22122),r=l(19756),a=(l(67294),l(3905)),i=["components"],u={id:"wiz850io",title:"WIZ850io",date:new Date("2020-04-15T00:00:00.000Z")},k=void 0,o={unversionedId:"Product/ioModule/wiz850io",id:"Product/ioModule/wiz850io",isDocsHomePage:!1,title:"WIZ850io",description:"Overview",source:"@site/docs/Product/ioModule/WIZ850io.md",sourceDirName:"Product/ioModule",slug:"/Product/ioModule/wiz850io",permalink:"/Product/ioModule/wiz850io",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/ioModule/WIZ850io.md",tags:[],version:"current",frontMatter:{id:"wiz850io",title:"WIZ850io",date:"2020-04-15T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ810SMJ",permalink:"/Product/ioModule/wiz810smj"},next:{title:"WIZ550io",permalink:"/Product/ioModule/wiz550io"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Hardware Specification",id:"hardware-specification",children:[{value:"WIZ850io",id:"wiz850io",children:[]},{value:"Pin Out",id:"pin-out",children:[]},{value:"Pin Description",id:"pin-description",children:[]}]},{value:"Characteristic",id:"characteristic",children:[{value:"DC Characteristic",id:"dc-characteristic",children:[]},{value:"Power Dissipation",id:"power-dissipation",children:[]}]},{value:"SPI Operations",id:"spi-operations",children:[]},{value:"Timing Diagram",id:"timing-diagram",children:[{value:"Reset Timing",id:"reset-timing",children:[]},{value:"SPI Timing",id:"spi-timing",children:[]}]},{value:"Schematic",id:"schematic",children:[]},{value:"Dimension",id:"dimension",children:[]}],s={toc:d};function A(t){var n=t.components,u=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,e.Z)({},s,u,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"WIZ850io is a compact size network module that includes a W5500 (TCP/IP\nhardwired chip and PHY embedded), a transformer and RJ45. It can be used\nas a component and no effort is required to interface W5500 and\nTransformer. The WIZ850io is an ideal option for users who want to\ndevelop their Internet enabling systems rapidly. WIZ850io is hardware\ncompatible with WIZ820io. WIZ820io users, to migrate to WIZ850io, need\nto modify the Firmware.  "),(0,a.kt)("p",null,"For the detailed information on implementation of Hardware TCP/IP, refer\nto the ",(0,a.kt)("a",{parentName:"p",href:"../../iEthernet/W5500/datasheet"},"W5500 Datasheet"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WIZ850io",src:l(65076).Z}),"  "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,a.kt)("h3",{id:"wiz850io"},"WIZ850io"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plugin Network Module."),(0,a.kt)("li",{parentName:"ul"},"Hardware compatible with WIZ820io."),(0,a.kt)("li",{parentName:"ul"},"Usable without H/W design for W5500, Transformer & RJ45."),(0,a.kt)("li",{parentName:"ul"},"Fast evaluation for W5500 & MCU in the target board."),(0,a.kt)("li",{parentName:"ul"},"Support high speed SPI interface."),(0,a.kt)("li",{parentName:"ul"},"Support power down mode and Wake-on-LAN function"),(0,a.kt)("li",{parentName:"ul"},"Very small form factor : 23mm x 25mm x 18mm"),(0,a.kt)("li",{parentName:"ul"},"1 x 6, 2.54mm Pin Header x 2")),(0,a.kt)("h3",{id:"pin-out"},"Pin Out"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WIZ850io Pinmap",src:l(30745).Z}),"  "),(0,a.kt)("h3",{id:"pin-description"},"Pin Description"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",{class:"header"},(0,a.kt)("th",null,(0,a.kt)("strong",null,"Pin No.")),(0,a.kt)("th",null),(0,a.kt)("th",null,(0,a.kt)("strong",null,"Pin Type")),(0,a.kt)("th",null,"Pin Name"),(0,a.kt)("th",null,(0,a.kt)("strong",null,"Description")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,"J1"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"1")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"P")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"GND")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Ground"))),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"2")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"P")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"GND")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Ground"))),(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"3")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"I")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"MOSI")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"SPI Master Out Slave In"),(0,a.kt)("br",null),"This pin is used for SPI MOSI signal pin")),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"4")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"I")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"SCLK")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"SPI Clock"),(0,a.kt)("br",null),"This pin is used for SPI Clock Signal pin")),(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"5")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"I")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"SCNn")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"SPI Slave Select"),(0,a.kt)("br",null),"This pin is used for SPI Slave Select Signal Pin when using SPI interface")),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"6")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"I")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"INTn")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"W5500 Interrupt")," : Low activity",(0,a.kt)("br",null),"This pin is used for indicating event like socket TCP connection, disconnection, data receiving timeout, WOL(Wake on Lan) and so on occurred in W5500 inside WIZ550io.",(0,a.kt)("br",null),"The interrupt is cleared by writing IR register or Sn_IR. All interrupts are maskable.")))),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",{class:"header"},(0,a.kt)("th",null,(0,a.kt)("strong",null,"Pin No.")),(0,a.kt)("th",null),(0,a.kt)("th",null,(0,a.kt)("strong",null,"Pin Type")),(0,a.kt)("th",null,"Pin Name"),(0,a.kt)("th",null,(0,a.kt)("strong",null,"Description")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,"J2"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"1")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"P")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"GND")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Ground"))),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"2")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"P")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"3.3V")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Power")," : 3.3V power supply")),(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"3")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"P")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"3.3V")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Power")," : 3.3V power supply")),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"4")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"-")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"NC")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Not Connect"))),(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"5")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"I")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"RSTn")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Reset")," : Low activity",(0,a.kt)("br",null),"Hold at least 500us after asserted to LOW and keep HIGH until next Reset needed.")),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,":::"),(0,a.kt)("td",null,(0,a.kt)("strong",null,"6")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"O")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"MISO")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"SPI Master In Slave Out"),(0,a.kt)("br",null),"This pin is used for SPI MISO signal pin")))),(0,a.kt)("p",null,"User need to wait for 50ms after this pin is changed to HIGH to\ncommunicate with WIZ850io. (Refer to 5. Timing Diagram)"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"characteristic"},"Characteristic"),(0,a.kt)("h3",{id:"dc-characteristic"},"DC Characteristic"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",{class:"header"},(0,a.kt)("th",null,"Symbol"),(0,a.kt)("th",null,"Parameter"),(0,a.kt)("th",null,"Pins"),(0,a.kt)("th",null,"Min"),(0,a.kt)("th",null,"Typ"),(0,a.kt)("th",null,"Max"),(0,a.kt)("th",null,"Unit"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,"V",(0,a.kt)("em",null,"DD")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Supply voltage")),(0,a.kt)("td",null,"3.3V"),(0,a.kt)("td",null,"2.97"),(0,a.kt)("td",null,"3.3"),(0,a.kt)("td",null,"3.63"),(0,a.kt)("td",null,"V")),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,"V",(0,a.kt)("em",null,"IL")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"High level input voltage")),(0,a.kt)("td",null,"ALL"),(0,a.kt)("td",null,"2.0"),(0,a.kt)("td",null),(0,a.kt)("td",null,"5.5"),(0,a.kt)("td",null,"V")),(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,"V",(0,a.kt)("em",null,"IH")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Low level input voltage")),(0,a.kt)("td",null,"ALL"),(0,a.kt)("td",null,"-0.3"),(0,a.kt)("td",null),(0,a.kt)("td",null,"0.8"),(0,a.kt)("td",null,"V")),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,"V",(0,a.kt)("em",null,"OL")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Low level output voltage")),(0,a.kt)("td",null,"ALL"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null,"0.4"),(0,a.kt)("td",null,"V")),(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,"V",(0,a.kt)("em",null,"OH")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"High level output voltage")),(0,a.kt)("td",null,"ALL"),(0,a.kt)("td",null,"2.4"),(0,a.kt)("td",null),(0,a.kt)("td",null),(0,a.kt)("td",null,"V")),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,"L",(0,a.kt)("em",null,"OL")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Low level output Current")),(0,a.kt)("td",null,"ALL"),(0,a.kt)("td",null,"8.6"),(0,a.kt)("td",null,"13.9"),(0,a.kt)("td",null,"18.9"),(0,a.kt)("td",null,"mA")),(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,"L",(0,a.kt)("em",null,"OH")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"High level output Current")),(0,a.kt)("td",null,"ALL"),(0,a.kt)("td",null,"12.5"),(0,a.kt)("td",null,"26.9"),(0,a.kt)("td",null,"47.1"),(0,a.kt)("td",null,"mA")),(0,a.kt)("tr",{class:"even"},(0,a.kt)("td",null,"I",(0,a.kt)("em",null,"DD")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Supply Current",(0,a.kt)("br",null),"(Normal operation mode)")),(0,a.kt)("td",null,"3.3V"),(0,a.kt)("td",null),(0,a.kt)("td",null,"132"),(0,a.kt)("td",null),(0,a.kt)("td",null,"mA")),(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,"L",(0,a.kt)("em",null,"OH")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Supply Current",(0,a.kt)("br",null),"(Power Down mode)")),(0,a.kt)("td",null,"3.3V"),(0,a.kt)("td",null),(0,a.kt)("td",null,"13"),(0,a.kt)("td",null),(0,a.kt)("td",null,"mA")))),(0,a.kt)("h3",{id:"power-dissipation"},"Power Dissipation"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Condition"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typ"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100M Link"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"128"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10M Link"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"75"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Un-Link (Auto-negotiation mode)"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"65"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100M Transmitting"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"132"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10M Transmitting"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"79"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Power Down mode"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"13"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"spi-operations"},"SPI Operations"),(0,a.kt)("p",null,"As WIZ850io consists of W5500 and others, SPI operation of WIZ850io\nfollows one of W5500. For more information about SPI operation of\nWIZ850io, please refer to ",(0,a.kt)("a",{parentName:"p",href:"../../iEthernet/W5500/datasheet"},"W5500 Datasheet"),")."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"timing-diagram"},"Timing Diagram"),(0,a.kt)("h3",{id:"reset-timing"},"Reset Timing"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WIZ850io Reset Timing",src:l(39818).Z})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TRC"),(0,a.kt)("td",{parentName:"tr",align:null},"Reset Cycle Time"),(0,a.kt)("td",{parentName:"tr",align:null},"500us"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TPL"),(0,a.kt)("td",{parentName:"tr",align:null},"Internal Auto Configuration Time"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"50ms")))),(0,a.kt)("h3",{id:"spi-timing"},"SPI Timing"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WIZ850io SPI Timing",src:l(321).Z})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Units"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fsck"),(0,a.kt)("td",{parentName:"tr",align:null},"SCLK Clock Frequency"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"80"),(0,a.kt)("td",{parentName:"tr",align:null},"MHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TWH"),(0,a.kt)("td",{parentName:"tr",align:null},"SCLK High duration"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"ns")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TWL"),(0,a.kt)("td",{parentName:"tr",align:null},"SCLK Low duration"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"ns")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TCS"),(0,a.kt)("td",{parentName:"tr",align:null},"nSCS High duration"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"ns")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"schematic"},"Schematic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Revision 1.0 ",(0,a.kt)("a",{href:"/img/products/wiz850io/wiz850io_sch_v100.pdf",target:"_blank"},"WIZ850io Rev1.0 Schematic(PDF)")),(0,a.kt)("li",{parentName:"ul"},"Revision 1.0 ",(0,a.kt)("a",{href:"/img/products/wiz850io/wiz850io_sch_v100.zip",target:"_blank"},"WIZ850io Rev1.0 Schematic(Altium)"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"dimension"},"Dimension"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WIZ850io V1.0 3D PDF :",(0,a.kt)("a",{href:"/img/products/wiz850io/wiz850io_v100_3d.pdf",target:"_blank"},"Download"),"\\* This PDF must be run using the 'Adobe Acrobat'.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WIZ850io Dimension",src:l(52007).Z})),(0,a.kt)("hr",null))}A.isMDXComponent=!0},321:function(t,n,l){"use strict";n.Z=l.p+"assets/images/spi_timing-e8261ebcf95474a19ce3b3fb1021e5a0.jpg"},65076:function(t,n,l){"use strict";n.Z=l.p+"assets/images/wiz850io-41f554f85534aae713aa30a55eedf7dc.png"},52007:function(t,n,l){"use strict";n.Z=l.p+"assets/images/wiz850io_dimension-6218f42df83dba3fc2ebceef2a08383b.png"},30745:function(t,n,l){"use strict";n.Z=l.p+"assets/images/wiz850io_pinmap-be9a84391b8479cae6cf707745b7214f.png"},39818:function(t,n){"use strict";n.Z="data:image/png;base64,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"}}]);