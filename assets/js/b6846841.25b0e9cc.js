(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[63025],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=i.createContext({}),d=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,w=c["".concat(u,".").concat(m)]||c[m]||p[m]||n;return r?i.createElement(w,o(o({ref:t},s),{},{components:r})):i.createElement(w,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<n;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},30395:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var i=r(22122),a=r(19756),n=(r(67294),r(3905)),o=["components"],l={id:"wiz107sr",title:"WIZ107SR",date:new Date("2021-07-21T00:00:00.000Z")},u=void 0,d={unversionedId:"Product/S2E-Module/WIZ107SR/wiz107sr",id:"Product/S2E-Module/WIZ107SR/wiz107sr",isDocsHomePage:!1,title:"WIZ107SR",description:"Overview",source:"@site/docs/Product/S2E-Module/WIZ107SR/wiz107sr.md",sourceDirName:"Product/S2E-Module/WIZ107SR",slug:"/Product/S2E-Module/WIZ107SR/wiz107sr",permalink:"/Product/S2E-Module/WIZ107SR/wiz107sr",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ107SR/wiz107sr.md",tags:[],version:"current",frontMatter:{id:"wiz107sr",title:"WIZ107SR",date:"2021-07-21T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ105SR-EVB",permalink:"/Product/S2E-Module/WIZ105SR/wiz105sr-evb"},next:{title:"WIZ107SR-EVB",permalink:"/Product/S2E-Module/WIZ107SR/wiz107sr-evb"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Hardware Specification",id:"hardware-specification",children:[]},{value:"Utilities",id:"utilities",children:[]},{value:"Pin Assignment",id:"pin-assignment",children:[]},{value:"Download",id:"download",children:[{value:"Documents",id:"documents",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Utilities",id:"utilities-1",children:[]},{value:"Hardware Design Guide",id:"hardware-design-guide",children:[]}]}],p={toc:s};function c(e){var t=e.components,l=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(47020).Z})),(0,n.kt)("p",null,"WIZ107SR is the compact sized serial to Ethernet module using W7100A, WIZnet iMCU, 8051.  WIZ107SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to a serial equipment."),(0,n.kt)("p",null,"It complies with industrial temperature standard and supports the serial interface of RS-232."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Serial to Ethernet Module based on W7100A"),(0,n.kt)("li",{parentName:"ul"},"Pin-header type & RJ-45 mounted module"),(0,n.kt)("li",{parentName:"ul"},"Serial signals : TXD, RXD, RTS, CTS, GND, (RS-232 transceiver optionally built-in)"),(0,n.kt)("li",{parentName:"ul"},"Support the configuration method of AT command & Configuration tool program"),(0,n.kt)("li",{parentName:"ul"},"Support password function for the security"),(0,n.kt)("li",{parentName:"ul"},"10/100Mbps Ethernet & Max.230kbps serial speed"),(0,n.kt)("li",{parentName:"ul"},"Support WIZ VSP (Virtual Serial Port) program")),(0,n.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pin Header Connector Type : 2.54mm Pitch (6\xd72)"),(0,n.kt)("li",{parentName:"ul"},"Dimension (mm) : 48(L) x 30 (W) x 18 (H)"),(0,n.kt)("li",{parentName:"ul"},"Input Voltage : 3.3V"),(0,n.kt)("li",{parentName:"ul"},"Max. Power Consumption : 250mA"),(0,n.kt)("li",{parentName:"ul"},"Operation Temperature : -40 ~ 85\u2103"),(0,n.kt)("li",{parentName:"ul"},"RoHS, SVHC Compliant")),(0,n.kt)("h2",{id:"utilities"},"Utilities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configuration Tool for Windows"),(0,n.kt)("li",{parentName:"ul"},"WizVSP: Virtual Serial Port (COM port) for User\u2019s Programs")),(0,n.kt)("h2",{id:"pin-assignment"},"Pin Assignment"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(44879).Z})),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("h3",{id:"documents"},"Documents"),(0,n.kt)("h4",{id:"wiz107sr-user-manual-v172"},"WIZ107SR User Manual V1.72"),(0,n.kt)("p",null,"Last Update: 2017.06.19"),(0,n.kt)("a",{href:"/img/products/wiz107sr/WIZ107SR_UM.pdf",target:"_blank"},"Download"),(0,n.kt)("h4",{id:"wiz107sr-wiz108sr-network-configuration-guide-v10"},"WIZ107SR/ WIZ108SR Network Configuration Guide V1.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last Update: 2012.11.15"),(0,n.kt)("li",{parentName:"ul"},"Guide Document for Network Configuration with using multiple WIZ107SR, WIZ108SR modules")),(0,n.kt)("a",{href:"/img/products/wiz107sr/WIZ107SR_AN_Public_IP_v100E.pdf",target:"_blank"},"Download"),(0,n.kt)("h4",{id:"wiz107srwiz108sr-configuration-communication-protocol-guide-v10"},"WIZ107SR/WIZ108SR Configuration Communication Protocol Guide V1.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last Update: 2013.12.23"),(0,n.kt)("li",{parentName:"ul"},"WIZ107/108SR Communication Protocol Format for Custom configuration tool development")),(0,n.kt)("a",{href:"/img/products/wiz107sr/WIZ107_108SR_AN_S2E-Programming-Guide_V100E.pdf",target:"_blank"},"Download"),(0,n.kt)("h3",{id:"firmware"},"Firmware"),(0,n.kt)("h4",{id:"firmware-v406-latest"},"Firmware v4.0.6 (Latest)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last Update: 2016.06.09"),(0,n.kt)("li",{parentName:"ul"},"WIZ107SR(HW Ver. 1.3 / 1.4) Firmware")),(0,n.kt)("a",{href:"/img/products/wiz107sr/wiz107srv4_06.zip",target:"_blank"},"Download"),(0,n.kt)("h4",{id:"firmware-v405"},"Firmware v4.0.5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last Update: 2015.09.15"),(0,n.kt)("li",{parentName:"ul"},"WIZ107SR(HW Ver. 1.3 / 1.4) Firmware")),(0,n.kt)("a",{href:"/img/products/wiz107sr/wiz107srv4_05.zip",target:"_blank"},"Download"),(0,n.kt)("h4",{id:"firmware-v404"},"Firmware v4.04"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last Update: 2014.11.26"),(0,n.kt)("li",{parentName:"ul"},"WIZ107SR(HW Ver. 1.3 / 1.4) Firmware")),(0,n.kt)("a",{href:"/img/products/wiz107sr/WIZ107SRv4_04.zip",target:"_blank"},"Download"),(0,n.kt)("h4",{id:"wiz107sr-old-firmware"},"WIZ107SR Old Firmware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"V4.03 (2014.04.23) WIZ107SR(HW Ver. 1.3 / 1.4) Firmware"),(0,n.kt)("li",{parentName:"ul"},"V3.14 (2013.11.07) WIZ107SR(HW Ver. 1.3) Firmware"),(0,n.kt)("li",{parentName:"ul"},"V3.11 (2013.06.10) WIZ107SR(HW Ver. 1.3) Firmware"),(0,n.kt)("li",{parentName:"ul"},"V3.10 (2013.02.22) WIZ107SR(HW Ver. 1.3) Firmware"),(0,n.kt)("li",{parentName:"ul"},"V3.07 (2013.02.08) WIZ107SR(HW Ver. 1.3) Firmware"),(0,n.kt)("li",{parentName:"ul"},"V3.04 (2012.11.15) WIZ107SR(HW Ver. 1.3) Firmware"),(0,n.kt)("li",{parentName:"ul"},"V2.20 (2013.02.22) WIZ107SR(Old HW Ver. 1.1) Firmware"),(0,n.kt)("li",{parentName:"ul"},"V2.17 (2013.02.08) WIZ107SR(Old HW Ver. 1.1) Firmware")),(0,n.kt)("a",{href:"/img/products/wiz107sr/107_old_FW.zip",target:"_blank"},"Download"),(0,n.kt)("h3",{id:"utilities-1"},"Utilities"),(0,n.kt)("h4",{id:"wiz107sr-wiz108sr-config-tool-for-windows-v1441"},"WIZ107SR /WIZ108SR Config Tool for Windows v1.4.4.1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last Update: 2013.11.07"),(0,n.kt)("li",{parentName:"ul"},"WIZ107SR/ WIZ108SR Config Tool Installation Package"),(0,n.kt)("li",{parentName:"ul"},"WIZ107SR/WIZ108SR Config Tool Source Code")),(0,n.kt)("a",{href:"/img/products/wiz107sr/WIZ107_108_config_tool.zip",target:"_blank"},"Download"),(0,n.kt)("h4",{id:"device-terminal-program-for-windows"},"Device Terminal Program for Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last Update: 2015.08.05"),(0,n.kt)("li",{parentName:"ul"},"Simple Configuration & Testing for WIZnet Serial to Ethernet Modules")),(0,n.kt)("a",{href:"/img/products/wiz100sr/Device_Terminal.zip",target:"_blank"},"Download"),(0,n.kt)("h4",{id:"wizvsp-program-for-windows"},"WIZVSP Program for Windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Last Update: 2017. 04. 28"),(0,n.kt)("li",{parentName:"ul"},"Virtual Serial COM Port program: It can be used to change the device that is connected to the PC through the existing serial interface to control by the remote Ethernet network."),(0,n.kt)("li",{parentName:"ul"},"If you agree with the End User License Agreement for WIZVSP, you will be able to download the program and get a registration key. When registering the product with license agreement, the MAC address of the product in use and the email address of the contact person are required.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://wizvsp.wiznet.io/"},"Download")),(0,n.kt)("h3",{id:"hardware-design-guide"},"Hardware Design Guide"),(0,n.kt)("a",{href:"/img/products/wiz107sr/WIZ107SR_HW.zip",target:"_blank"},"Reference Schematic for WIZ107SR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WIZ107SR Hardware Schematic V1.4"),(0,n.kt)("li",{parentName:"ul"},"WIZ107SR Hardware Schematic V1.3")))}c.isMDXComponent=!0},47020:function(e,t,r){"use strict";t.Z=r.p+"assets/images/WIZ108SR-1-e1429085175138-d5b5f4eea696bf0b8af0fa44ca49de08.jpg"},44879:function(e,t,r){"use strict";t.Z=r.p+"assets/images/pin_map1-4a4b53e66266377c85a42a92447ad80e.jpg"}}]);