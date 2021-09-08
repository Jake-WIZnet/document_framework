(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[63723],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return s}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(t),s=o,b=c["".concat(d,".").concat(s)]||c[s]||g[s]||a;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var u={};for(var d in r)hasOwnProperty.call(r,d)&&(u[d]=r[d]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},13919:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,{b:function(){return n},Z:function(){return o}})},44996:function(e,r,t){"use strict";t.d(r,{C:function(){return a},Z:function(){return i}});var n=t(52263),o=t(13919);function a(){var e=(0,n.Z)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,a=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,u=void 0!==i&&i,d=a.absolute,l=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(u)return r+t;var p=t.startsWith(r)?t:r+t.replace(/^\//,"");return l?e+p:p}(a,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(e,r)}},48581:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return g},default:function(){return s}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=t(44996),u=["components"],d={id:"asg210_debugger",title:"Debugger Board",date:new Date("2021-06-03T00:00:00.000Z")},l=void 0,p={unversionedId:"Product/Azure-Sphere/asg210_debugger",id:"Product/Azure-Sphere/asg210_debugger",isDocsHomePage:!1,title:"Debugger Board",description:"Description",source:"@site/docs/Product/Azure-Sphere/ASG210_debugger.md",sourceDirName:"Product/Azure-Sphere",slug:"/Product/Azure-Sphere/asg210_debugger",permalink:"/Product/Azure-Sphere/asg210_debugger",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Azure-Sphere/ASG210_debugger.md",tags:[],version:"current",frontMatter:{id:"asg210_debugger",title:"Debugger Board",date:"2021-06-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Datasheet",permalink:"/Product/Azure-Sphere/asg210_datasheet"},next:{title:"Resources",permalink:"/Product/Azure-Sphere/asg210_resources"}},g=[{value:"Description",id:"description",children:[]},{value:"USB-Debug/Prog. UART Interface",id:"usb-debugprog-uart-interface",children:[]},{value:"Installation Overview",id:"installation-overview",children:[{value:"ASG Debugger board connector",id:"asg-debugger-board-connector",children:[]}]}],c={toc:g};function s(e){var r=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"ASG Debugger board supports programming and debugging Azure Sphere 3 Cores, A7 Core and Dual M4 Cores, and downloading and debugging Uart BLE module in MT3620 combo. There are 2 Micro-USB connectors and 1 JLINK interface pin-header. Each Micro USB connectors support Azure Sphere Cores debugging and JLINK interface pin-header supports BLE software download and debugging."),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/debugger/asg210_debuggerboard.png"),width:"300"}),(0,a.kt)("h2",{id:"usb-debugprog-uart-interface"},"USB-Debug/Prog. UART Interface"),(0,a.kt)("p",null,"ASG210 supports Debuger Connector for ASG Debugger board to debug and program. ASG Debugger board includes on-board, the Microsoft-specified FTDI 4-port USB to Serial bridge implementation of the RECOVERY, SERVICE, DEBUG and SWD interfaces. These interfaces are primarily used for software application development and/or programming of USI Azure Sphere Combo module onboarded on ASG210. This requires a USB cable to be connected from Micro-USB PortA, to a Windows-10 (or Linux) computer on which Azure Sphere SDK and the relevant USB drivers have been installed."),(0,a.kt)("p",null,"ASG Debugger board also supports Micro-USB PortB to debug M4 cores and BT SWD to download/debug BT in USI Azure Sphere Combo module. User can debug M4 cores using Micro-USB PortB with baud rate of 115200. "),(0,a.kt)("p",null,"A simplified block diagram of ASG Debugger board is shown below:"),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/debugger/debugger_blockdiagram.png"),width:"750"}),(0,a.kt)("h2",{id:"installation-overview"},"Installation Overview"),(0,a.kt)("p",null,"Users need ASG Debugger board to install ASG210 with Micro usb cable and 5V2A power adaptor. ASG Debugger board can be attached to ASG210\u2019s debugger connector for debugging and programing. ASG Debugger board supports 2",(0,a.kt)("em",{parentName:"p"},"Micro usb connectors and JLINK pin header.\n2"),"Micro usb connectors are for programming and debugging Azure Sphere MT3620 A7/Dual M4 Cores. It also supports Azure Sphere CLI connection. JLINK pin header is for download and debugging BLE."),(0,a.kt)("p",null,"User applications for ASG210 are developed in C using Microsoft\u2019s Visual Studio IDE and Azure Sphere SDK. Visual Studio provides a powerful development environment for compiling and debugging application codes. And Azure Sphere SDK also supports Azure Sphere Development command prompt to set Azure Sphere module for user application development. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"These components are optional. Needed additional purchase.")),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/debugger/asg210_components.png"),width:"750"}),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/debugger/asg210_with_debugger.png"),width:"750"}),(0,a.kt)("h3",{id:"asg-debugger-board-connector"},"ASG Debugger board connector"),(0,a.kt)("p",null,"ASG Debugger board supports connectors and interface as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AZURE Debugger"),(0,a.kt)("td",{parentName:"tr",align:null},"Micro USB PortA"),(0,a.kt)("td",{parentName:"tr",align:null},"A7 Core program and debugger port ",(0,a.kt)("br",null)," Supports Aure Sphere CLI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"M4 Debugger"),(0,a.kt)("td",{parentName:"tr",align:null},"Micro USB PortB"),(0,a.kt)("td",{parentName:"tr",align:null},"Dual M4 Cores program and debugger port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JLINK"),(0,a.kt)("td",{parentName:"tr",align:null},"3V3"),(0,a.kt)("td",{parentName:"tr",align:null},"3V3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"SWDIO"),(0,a.kt)("td",{parentName:"tr",align:null},"Data I/O Pin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"SWDCLK"),(0,a.kt)("td",{parentName:"tr",align:null},"Clock Pin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"BTRST"),(0,a.kt)("td",{parentName:"tr",align:null},"BLE Reset Pin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"GND")))),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/debugger/debugger_connectors.png"),width:"750"}))}s.isMDXComponent=!0}}]);