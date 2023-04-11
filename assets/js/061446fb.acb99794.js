"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[7598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>w});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=i,w=m["".concat(d,".").concat(c)]||m[c]||p[c]||n;return r?a.createElement(w,l(l({ref:t},s),{},{components:r})):a.createElement(w,l({ref:t},s))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},73628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(87462),i=(r(67294),r(3905));const n={id:"wiz140sr",title:"WIZ140SR",date:new Date("2021-07-22T00:00:00.000Z")},l=void 0,o={unversionedId:"Product/S2E-Module/WIZ140SR/wiz140sr",id:"Product/S2E-Module/WIZ140SR/wiz140sr",title:"WIZ140SR",description:"Overview",source:"@site/docs/Product/S2E-Module/WIZ140SR/wiz140sr.md",sourceDirName:"Product/S2E-Module/WIZ140SR",slug:"/Product/S2E-Module/WIZ140SR/",permalink:"/Product/S2E-Module/WIZ140SR/",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ140SR/wiz140sr.md",tags:[],version:"current",frontMatter:{id:"wiz140sr",title:"WIZ140SR",date:"2021-07-22T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ125SR",permalink:"/Product/S2E-Module/WIZ125SR/"},next:{title:"WIZ140SR-EVB",permalink:"/Product/S2E-Module/WIZ140SR/wiz140sr-evb"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Specification",id:"hardware-specification",level:2},{value:"Utilities",id:"utilities",level:2},{value:"Pin Assignment",id:"pin-assignment",level:2},{value:"Download",id:"download",level:2},{value:"Documents",id:"documents",level:3},{value:"WIZ140SR &amp; WIZ145SR User\u2019s Munual v2.0.1",id:"wiz140sr--wiz145sr-users-munual-v201",level:4},{value:"WIZ140SR &amp; WIZ145SR Datasheet v1.1.0",id:"wiz140sr--wiz145sr-datasheet-v110",level:4},{value:"Firmware",id:"firmware",level:3},{value:"Firmware v1.7.0",id:"firmware-v170",level:4},{value:"Firmware v1.6.8",id:"firmware-v168",level:4},{value:"Firmware v1.6.5",id:"firmware-v165",level:4},{value:"Old firmware",id:"old-firmware",level:4},{value:"Utilities",id:"utilities-1",level:3},{value:"WIZ140SR/WIZ145SR Configuration Tool for Windows v1.7",id:"wiz140srwiz145sr-configuration-tool-for-windows-v17",level:4},{value:"Device Terminal Program for Windows",id:"device-terminal-program-for-windows",level:4},{value:"WIZVSP Program for Windows",id:"wizvsp-program-for-windows",level:4},{value:"Hardware Design Guide",id:"hardware-design-guide",level:3},{value:"Reference Schematic for WIZ140SR &amp; WIZ145SR V1.0",id:"reference-schematic-for-wiz140sr--wiz145sr-v10",level:4}],s={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(97956).Z,width:"300",height:"297"})),(0,i.kt)("p",null,"WIZ140SR is an embedded module based on WIZnet W5300 &  ARM Cortex-M3. WIZ140SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serial to Ethernet Module based on W5300 & Cortex-M3"),(0,i.kt)("li",{parentName:"ul"},"Pin-header mounted module"),(0,i.kt)("li",{parentName:"ul"},"Serial signals : TXD, RXD, RTS, CTS, GND signals (4 UART/RS-232C)"),(0,i.kt)("li",{parentName:"ul"},"Support the configuration method of AT command & Configuration tool program"),(0,i.kt)("li",{parentName:"ul"},"10/100Mbps Ethernet & Max.115.2kbps serial speed"),(0,i.kt)("li",{parentName:"ul"},"Support WIZ VSP (Virtual Serial Port) program")),(0,i.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pin Header Connector Type : 2.5mm Pitch (1\xd714, 2\xd714)"),(0,i.kt)("li",{parentName:"ul"},"Dimension (mm) : 48 x 36 x 16"),(0,i.kt)("li",{parentName:"ul"},"Input Voltage : 3.3V"),(0,i.kt)("li",{parentName:"ul"},"Max. Power Consumption : 250mA"),(0,i.kt)("li",{parentName:"ul"},"Operation Temperature : 0 ~ 70\u2103"),(0,i.kt)("li",{parentName:"ul"},"RoHS, SVHC Compliant")),(0,i.kt)("h2",{id:"utilities"},"Utilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configuration Tool for Windows"),(0,i.kt)("li",{parentName:"ul"},"WizVSP: Virtual Serial Port (COM port) for User\u2019s Programs")),(0,i.kt)("h2",{id:"pin-assignment"},"Pin Assignment"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(84885).Z,width:"878",height:"376"})),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("h3",{id:"documents"},"Documents"),(0,i.kt)("h4",{id:"wiz140sr--wiz145sr-users-munual-v201"},"WIZ140SR & WIZ145SR User\u2019s Munual v2.0.1"),(0,i.kt)("p",null,"Last Update: 2013.07.13"),(0,i.kt)("a",{href:"/img/products/wiz140sr/WIZ14xSR_UM_v201e.pdf",target:"_blank"},"Download"),(0,i.kt)("h4",{id:"wiz140sr--wiz145sr-datasheet-v110"},"WIZ140SR & WIZ145SR Datasheet v1.1.0"),(0,i.kt)("p",null,"Last Update: 2020.11.17"),(0,i.kt)("a",{href:"/img/products/wiz140sr/WIZ140SR_WIZ145SR_DS_V110e.pdf",target:"_blank"},"Download"),(0,i.kt)("h3",{id:"firmware"},"Firmware"),(0,i.kt)("h4",{id:"firmware-v170"},"Firmware v1.7.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Last Update: 2021.04.20"),(0,i.kt)("li",{parentName:"ul"},"Update buffer management")),(0,i.kt)("a",{href:"/img/products/wiz140sr/WIZ140v1_7_0_210209.zip",target:"_blank"},"Download"),(0,i.kt)("h4",{id:"firmware-v168"},"Firmware v1.6.8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Last Update: 2019.03.29"),(0,i.kt)("li",{parentName:"ul"},"Update buffer management")),(0,i.kt)("a",{href:"/img/products/wiz140sr/WIZ140v1_6_8_190209.zip",target:"_blank"},"Download"),(0,i.kt)("h4",{id:"firmware-v165"},"Firmware v1.6.5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Last Update: 2015.06.10"),(0,i.kt)("li",{parentName:"ul"},"Update buffer management")),(0,i.kt)("a",{href:"/img/products/wiz140sr/WIZ140v1_6_5_150610.zip",target:"_blank"},"Download"),(0,i.kt)("h4",{id:"old-firmware"},"Old firmware"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firmware v1.6.4"),(0,i.kt)("td",{parentName:"tr",align:null},"- Last Update: 2015.01.07",(0,i.kt)("br",null),"- Telnet mode is added",(0,i.kt)("br",null),"- Bug fix about serial data corruption with data from ethernet",(0,i.kt)("br",null),"- Bug fix with Data packing condition \u2018Size\u2019")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firmware v1.6.1"),(0,i.kt)("td",{parentName:"tr",align:null},"- Last Update: 2013.11.18",(0,i.kt)("br",null),"- Bug fixed : The previous firmware has error, when trying to connect to the remote server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firmware v1.6.0"),(0,i.kt)("td",{parentName:"tr",align:null},"- Last Update: 2013.08.07",(0,i.kt)("br",null),"- Baud rate : 600 bps added",(0,i.kt)("br",null),"- The format of Serial cmd WnBU/RnBU got changed",(0,i.kt)("br",null),"- Debug message displays current network information",(0,i.kt)("br",null),"- The notation of firmware version was changed to x.x.x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firmware v1.5.2"),(0,i.kt)("td",{parentName:"tr",align:null},"- Last Update: 2013.06.11",(0,i.kt)("br",null),"- Bug fixed : When transmitting to WIZ140/145SR more than  8K bytes data continuously, some data is lost")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firmware v1.5"),(0,i.kt)("td",{parentName:"tr",align:null},"- Last Update: 2013.04.18",(0,i.kt)("br",null),"- Optimize the code by reflecting W5300 erratum4 & erratum5")))),(0,i.kt)("a",{href:"/img/products/wiz140sr/WIZ14x_old_FW.zip",target:"_blank"},"Download"),(0,i.kt)("h3",{id:"utilities-1"},"Utilities"),(0,i.kt)("h4",{id:"wiz140srwiz145sr-configuration-tool-for-windows-v17"},"WIZ140SR/WIZ145SR Configuration Tool for Windows v1.7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Last Update: 2015.01.07")),(0,i.kt)("a",{href:"/img/products/wiz140sr/WIZ14xSRConfig_Rev1_7.zip",target:"_blank"},"Download"),(0,i.kt)("h4",{id:"device-terminal-program-for-windows"},"Device Terminal Program for Windows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Last Update: 2015.08.05"),(0,i.kt)("li",{parentName:"ul"},"Simple Configuration & Testing for WIZnet Serial to Ethernet Modules")),(0,i.kt)("a",{href:"/img/products/wiz100sr/Device_Terminal.zip",target:"_blank"},"Download"),(0,i.kt)("h4",{id:"wizvsp-program-for-windows"},"WIZVSP Program for Windows"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Product/S2E-Module/serial-to-ethernet-guide#wiz-vsp"},(0,i.kt)("strong",{parentName:"a"},"Go to WIZ VSP Guide page"))),(0,i.kt)("h3",{id:"hardware-design-guide"},"Hardware Design Guide"),(0,i.kt)("h4",{id:"reference-schematic-for-wiz140sr--wiz145sr-v10"},"Reference Schematic for WIZ140SR & WIZ145SR V1.0"),(0,i.kt)("p",null,"Last Update: 2010.04.27"),(0,i.kt)("a",{href:"/img/products/wiz140sr/WIZ14xSR_Ref_Schematic.pdf",target:"_blank"},"Download"))}p.isMDXComponent=!0},84885:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/140_pin-e5b4ce19f3977428a0043b316b088d46.jpg"},97956:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/wiz140sr-web-2-ea8042542d43ff51ba03e11902c69e67.jpg"}}]);