(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[40794],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return r?i.createElement(f,o(o({ref:t},d),{},{components:r})):i.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},30998:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var i=r(22122),n=r(19756),a=(r(67294),r(3905)),o=["components"],l={id:"wiz100sr",title:"WIZ100SR",date:new Date("2021-07-21T00:00:00.000Z")},u=void 0,s={unversionedId:"Product/S2E-Module/WIZ100SR/wiz100sr",id:"Product/S2E-Module/WIZ100SR/wiz100sr",isDocsHomePage:!1,title:"WIZ100SR",description:"Overview",source:"@site/docs/Product/S2E-Module/WIZ100SR/wiz100sr.md",sourceDirName:"Product/S2E-Module/WIZ100SR",slug:"/Product/S2E-Module/WIZ100SR/wiz100sr",permalink:"/Product/S2E-Module/WIZ100SR/wiz100sr",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ100SR/wiz100sr.md",tags:[],version:"current",frontMatter:{id:"wiz100sr",title:"WIZ100SR",date:"2021-07-21T00:00:00.000Z"},sidebar:"docs",previous:{title:"AWS Connection Guide",permalink:"/Product/S2E-Module/WIZ510SSL/aws_connection_guide"},next:{title:"WIZ100SR-EVB",permalink:"/Product/S2E-Module/WIZ100SR/wiz100sr-evb"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Hardware Specification",id:"hardware-specification",children:[]},{value:"Utilities",id:"utilities",children:[]},{value:"Pin Assignment",id:"pin-assignment",children:[]},{value:"Download",id:"download",children:[{value:"Documents",id:"documents",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Utilities",id:"utilities-1",children:[]},{value:"Hardware Design Guide",id:"hardware-design-guide",children:[]}]}],c={toc:d};function p(e){var t=e.components,l=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(55172).Z})),(0,a.kt)("p",null,"WIZ100SR is the serial to Ethernet module using W5100 & 8051 MCU.  WIZ100SR is the protocol converter that transmits the data sent by serial equipment as TCP/IP data type, and converts back the TCP/IP data received through the network into serial data to transmit back to the equipment."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serial to Ethernet Module based on W5100 & 8051"),(0,a.kt)("li",{parentName:"ul"},"Pin-header type module"),(0,a.kt)("li",{parentName:"ul"},"Serial signals : TXD, RXD, RTS, CTS, GND"),(0,a.kt)("li",{parentName:"ul"},"Support the configuration method of AT command & Configuration tool program"),(0,a.kt)("li",{parentName:"ul"},"10/100Mbps Ethernet & Max.230kbps serial speed"),(0,a.kt)("li",{parentName:"ul"},"Support WIZ VSP (Virtual Serial Port) program")),(0,a.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pin Header Connector Type : 2mm Pitch (2x12mm)"),(0,a.kt)("li",{parentName:"ul"},"Dimension (mm) : 50(L) x 30 (W) x 12 (H)"),(0,a.kt)("li",{parentName:"ul"},"Input Voltage : 3.3V"),(0,a.kt)("li",{parentName:"ul"},"Max. Power Consumption : 200mA"),(0,a.kt)("li",{parentName:"ul"},"Operation Temperature : 0~80\u2103"),(0,a.kt)("li",{parentName:"ul"},"RoHS, SVHC Compliant")),(0,a.kt)("h2",{id:"utilities"},"Utilities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuration Tool for Windows"),(0,a.kt)("li",{parentName:"ul"},"WizVSP: Virtual Serial Port (COM port) for User\u2019s Programs")),(0,a.kt)("h2",{id:"pin-assignment"},"Pin Assignment"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(37445).Z})),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("h3",{id:"documents"},"Documents"),(0,a.kt)("h4",{id:"wiz100sr-user-manual-v220"},"WIZ100SR User Manual v2.2.0"),(0,a.kt)("p",null,"Last Update: 2017.02.28"),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ100SR_UM_v220e.pdf",target:"_blank"},"English Version"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ100SR_UM_v220k.pdf",target:"_blank"},"Korean Version"),(0,a.kt)("h4",{id:"wiz100sr-wiz105sr-wiz110sr-programmers-guide"},"WIZ100SR/ WIZ105SR/ WIZ110SR Programmer\u2019s Guide"),(0,a.kt)("p",null,"Last Update: 2013.06.19"),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ1x0SR_AN_S2E-Programming-Guide_V030E.pdf",target:"_blank"},"Download"),(0,a.kt)("h4",{id:"wiz100sr-temperature-test-report"},"WIZ100SR Temperature Test Report"),(0,a.kt)("p",null,"Last Update: 2010.05.26"),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ100SR_Temperature_Test.pdf",target:"_blank"},"Download"),(0,a.kt)("h3",{id:"firmware"},"Firmware"),(0,a.kt)("h4",{id:"wiz100sr-firmware-v513"},"WIZ100SR Firmware v5.13"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2015.03.27"),(0,a.kt)("li",{parentName:"ul"},"Improved the exception for infinite loop during using socket functions : Apply time-out mechanism"),(0,a.kt)("li",{parentName:"ul"},"Bug Fixed : side effect of AT command")),(0,a.kt)("a",{href:"/img/products/wiz100sr/APP_100sr_0513.zip",target:"_blank"},"Download"),(0,a.kt)("h4",{id:"wiz100sr-old-firmware"},"WIZ100SR Old Firmware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V5.11 (2015.01.21)"),(0,a.kt)("li",{parentName:"ul"},"5.10 (2014.01.14)"),(0,a.kt)("li",{parentName:"ul"},"4.32 (2013.11.21)"),(0,a.kt)("li",{parentName:"ul"},"4.31 (2013.01.30)"),(0,a.kt)("li",{parentName:"ul"},"4.1 (2012-04-03)")),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ100SR_old_FW.zip",target:"_blank"},"Download"),(0,a.kt)("h3",{id:"utilities-1"},"Utilities"),(0,a.kt)("h4",{id:"wiz100sr-wiz105sr-wiz110sr-config-tool-for-windows-v302"},"WIZ100SR /WIZ105SR /WIZ110SR Config Tool for Windows v3.0.2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2013.06.27"),(0,a.kt)("li",{parentName:"ul"},"WIZ1xxSR Config Tool Installation Package"),(0,a.kt)("li",{parentName:"ul"},"WIZ1xxSR Config Tool Source Code")),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ1xxSR_Config.zip",target:"_blank"},"Download"),(0,a.kt)("h4",{id:"device-terminal-program-for-windows"},"Device Terminal Program for Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2015.08.05"),(0,a.kt)("li",{parentName:"ul"},"Simple Configuration & Testing for WIZnet Serial to Ethernet Modules")),(0,a.kt)("a",{href:"/img/products/wiz100sr/Device_Terminal.zip",target:"_blank"},"Download"),(0,a.kt)("h4",{id:"wizvsp-program-for-windows"},"WIZVSP Program for Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Last Update: 2017. 04. 28"),(0,a.kt)("li",{parentName:"ul"},"Virtual Serial COM Port program: It can be used to change the device that is connected to the PC through the existing serial interface to control by the remote Ethernet network."),(0,a.kt)("li",{parentName:"ul"},"If you agree with the End User License Agreement for WIZVSP, you will be able to download the program and get a registration key. When registering the product with license agreement, the MAC address of the product in use and the email address of the contact person are required.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://wizvsp.wiznet.io/"},"Download")),(0,a.kt)("h3",{id:"hardware-design-guide"},"Hardware Design Guide"),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ100SR_schematic.zip",target:"_blank"},"Reference Schematic for WIZ100SR V2.0"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"/img/products/wiz100sr/WIZ100SR_HEADER-PIN.pdf",target:"_blank"},"WIZ100SR Pin Header Description "))}p.isMDXComponent=!0},37445:function(e,t,r){"use strict";t.Z=r.p+"assets/images/pinmap4-0c40444079cc2364e1cbab7a585c41f1.jpg"},55172:function(e,t,r){"use strict";t.Z=r.p+"assets/images/wiz100sr_web_280-e6fdc82132ca891a11d8f8e519180cad.jpg"}}]);