"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[9819],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),d=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return r?i.createElement(f,o(o({ref:t},s),{},{components:r})):i.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},83747:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var i=r(83117),n=r(80102),a=(r(67294),r(3905)),o=["components"],l={id:"wiz110sr",title:"WIZ110SR",date:new Date("2021-07-21T00:00:00.000Z")},u=void 0,d={unversionedId:"Product/S2E-Module/WIZ110SR/wiz110sr",id:"Product/S2E-Module/WIZ110SR/wiz110sr",title:"WIZ110SR",description:"Overview",source:"@site/docs/Product/S2E-Module/WIZ110SR/wiz110sr.md",sourceDirName:"Product/S2E-Module/WIZ110SR",slug:"/Product/S2E-Module/WIZ110SR/",permalink:"/Product/S2E-Module/WIZ110SR/",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ110SR/wiz110sr.md",tags:[],version:"current",frontMatter:{id:"wiz110sr",title:"WIZ110SR",date:"2021-07-21T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ108SR-EVB",permalink:"/Product/S2E-Module/WIZ108SR/wiz108sr-evb"},next:{title:"WIZ120SR",permalink:"/Product/S2E-Module/WIZ120SR/"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Specification",id:"hardware-specification",level:2},{value:"Utilities",id:"utilities",level:2},{value:"Hardware Interface",id:"hardware-interface",level:2},{value:"Download",id:"download",level:2},{value:"Documents",id:"documents",level:3},{value:"WIZ110SR User Manual v2.1.0",id:"wiz110sr-user-manual-v210",level:4},{value:"WIZ100SR/ WIZ105SR/ WIZ110SR Programmer\u2019s Guide",id:"wiz100sr-wiz105sr-wiz110sr-programmers-guide",level:4},{value:"Firmware",id:"firmware",level:3},{value:"Firmware v5.13",id:"firmware-v513",level:4},{value:"WIZ110SR Old Firmware",id:"wiz110sr-old-firmware",level:4},{value:"Utilities",id:"utilities-1",level:3},{value:"WIZ100SR /WIZ105SR /WIZ110SR Config Tool for Windows v3.0.2",id:"wiz100sr-wiz105sr-wiz110sr-config-tool-for-windows-v302",level:4},{value:"Device Terminal Program for Windows",id:"device-terminal-program-for-windows",level:4},{value:"WIZVSP Program for Windows",id:"wizvsp-program-for-windows",level:4}],p={toc:c};function m(e){var t=e.components,l=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(16680).Z,width:"300",height:"289"})),(0,a.kt)("p",null,"WIZ110SR is the serial to Ethernet module using W5100 & 8051 MCU.  WIZ110SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment."),(0,a.kt)("p",null,"Just by connecting LAN & Serial cable to the modules, you can easily add the \u2018Serial to Ethernet\u2019 function without additional hardware design."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serial to Ethernet Module based on W5100 & 8051"),(0,a.kt)("li",{parentName:"ul"},"DB-9 & RJ-45 mounted module"),(0,a.kt)("li",{parentName:"ul"},"Serial signals : TXD, RXD, RTS, CTS, GND, RS-232 transceiver built-in"),(0,a.kt)("li",{parentName:"ul"},"Support the configuration method of AT command & Configuration tool program"),(0,a.kt)("li",{parentName:"ul"},"10/100Mbps Ethernet & Max.230kbps serial speed"),(0,a.kt)("li",{parentName:"ul"},"Support WIZ VSP (Virtual Serial Port) program")),(0,a.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dmension (mm) : 75(L) x 50 (W) x 17 (H)"),(0,a.kt)("li",{parentName:"ul"},"Input Voltage : 5V"),(0,a.kt)("li",{parentName:"ul"},"Max. Power Consumption : 180mA"),(0,a.kt)("li",{parentName:"ul"},"Operation Temperature : 0~80\u2103"),(0,a.kt)("li",{parentName:"ul"},"RoHS, SVHC Compliant")),(0,a.kt)("h2",{id:"utilities"},"Utilities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuration Tool for Windows"),(0,a.kt)("li",{parentName:"ul"},"WizVSP: Virtual Serial Port (COM port) for User\u2019s Programs")),(0,a.kt)("h2",{id:"hardware-interface"},"Hardware Interface"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3892).Z,width:"555",height:"230"})),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("h3",{id:"documents"},"Documents"),(0,a.kt)("h4",{id:"wiz110sr-user-manual-v210"},"WIZ110SR User Manual v2.1.0"),(0,a.kt)("p",null,"Last Update: 2013.06.19"),(0,a.kt)("a",{href:"/img/products/wiz110sr/WIZ110SR_UM_v210e.pdf",target:"_blank"},"Download"),(0,a.kt)("h4",{id:"wiz100sr-wiz105sr-wiz110sr-programmers-guide"},"WIZ100SR/ WIZ105SR/ WIZ110SR Programmer\u2019s Guide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2013.06.19")),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ1x0SR_AN_S2E-Programming-Guide_V030E.pdf",target:"_blank"},"Download"),(0,a.kt)("h3",{id:"firmware"},"Firmware"),(0,a.kt)("h4",{id:"firmware-v513"},"Firmware v5.13"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2015.03.27"),(0,a.kt)("li",{parentName:"ul"},"Improved the exception for infinite loop during using socket functions : Apply time-out mechanism"),(0,a.kt)("li",{parentName:"ul"},"Bug Fixed : side effect of AT command")),(0,a.kt)("a",{href:"/img/products/wiz110sr/APP_110sr_0513.zip",target:"_blank"},"Download"),(0,a.kt)("h4",{id:"wiz110sr-old-firmware"},"WIZ110SR Old Firmware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V5.11 (2015.01.21)"),(0,a.kt)("li",{parentName:"ul"},"5.10 (2014.01.14)"),(0,a.kt)("li",{parentName:"ul"},"4.32 (2013.11.21)"),(0,a.kt)("li",{parentName:"ul"},"4.31 (2013.01.30)"),(0,a.kt)("li",{parentName:"ul"},"4.1 (2012-04-03)")),(0,a.kt)("a",{href:"/img/products/wiz110sr/WIZ110SR_old_FW.zip",target:"_blank"},"Download"),(0,a.kt)("h3",{id:"utilities-1"},"Utilities"),(0,a.kt)("h4",{id:"wiz100sr-wiz105sr-wiz110sr-config-tool-for-windows-v302"},"WIZ100SR /WIZ105SR /WIZ110SR Config Tool for Windows v3.0.2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2013.06.27"),(0,a.kt)("li",{parentName:"ul"},"WIZ1xxSR Config Tool Installation Package"),(0,a.kt)("li",{parentName:"ul"},"WIZ1xxSR Config Tool Source Code")),(0,a.kt)("a",{href:"/img/products/wiz110sr/WIZ1xxSR_Config.zip",target:"_blank"},"Download"),(0,a.kt)("h4",{id:"device-terminal-program-for-windows"},"Device Terminal Program for Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2015.08.05"),(0,a.kt)("li",{parentName:"ul"},"Simple Configuration & Testing for WIZnet Serial to Ethernet Modules")),(0,a.kt)("a",{href:"/img/products/wiz100sr/Device_Terminal.zip",target:"_blank"},"Download"),(0,a.kt)("h4",{id:"wizvsp-program-for-windows"},"WIZVSP Program for Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2017. 04. 28"),(0,a.kt)("li",{parentName:"ul"},"Virtual Serial COM Port program: It can be used to change the device that is connected to the PC through the existing serial interface to control by the remote Ethernet network."),(0,a.kt)("li",{parentName:"ul"},"If you agree with the End User License Agreement for WIZVSP, you will be able to download the program and get a registration key. When registering the product with license agreement, the MAC address of the product in use and the email address of the contact person are required.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://wizvsp.wiznet.io/"},"Download")))}m.isMDXComponent=!0},3892:function(e,t,r){t.Z=r.p+"assets/images/interface-8b1b9d2d1eb51cdcdff7f6ef9b9cdcc9.jpg"},16680:function(e,t,r){t.Z=r.p+"assets/images/wiz110sr-web-1-8dd494129778379938a569fad9ee4f5c.jpg"}}]);