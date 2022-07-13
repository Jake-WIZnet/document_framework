"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,N=s["".concat(p,".").concat(d)]||s[d]||c[d]||a;return n?r.createElement(N,l(l({ref:t},m),{},{components:n})):r.createElement(N,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={id:"dmdnsclient",title:"DNS Client for TCP/IP Offload Engine example",date:new Date("2020-06-10T00:00:00.000Z")},l=void 0,o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/dmdnsclient",id:"Product/iMCU/W7500/Peripherals-internal/dmdnsclient",title:"DNS Client for TCP/IP Offload Engine example",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/dnsclient.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/dmdnsclient",permalink:"/Product/iMCU/W7500/Peripherals-internal/dmdnsclient",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/dnsclient.md",tags:[],version:"current",frontMatter:{id:"dmdnsclient",title:"DNS Client for TCP/IP Offload Engine example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Direct Memory Access (DMA)",permalink:"/Product/iMCU/W7500/Peripherals-internal/dma"},next:{title:"I2C and M24CXX EEPROM communication example",permalink:"/Product/iMCU/W7500/Peripherals-internal/eeprom"}},p={},u=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : WZTOE/DNSClient/readme.md"),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of the TCP adn UDP Loopback example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example shows how to use DNS Client in UDP mode."),(0,i.kt)("p",null,"In this example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1) Domain Name Service Client in UDP mode"),(0,i.kt)("li",{parentName:"ul"},"2) For more detail, please visit ",(0,i.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/tcp-function"},"TCP Function description"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WZTOE/ioLibrary/Ethernet/socket.c                     (socket APIs)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/ioLibrary/Ethernet/wizchip_config.c             (WZTOE Config.)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/ioLibrary/Internet/dhcp.c                       (DHCP Client)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/ioLibrary/Internet/dns.c                        (DNS Client)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/ioLibrary/MDIO/W7500x_miim.c                    (mdio via gpio)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/DNSClient/main.c                                (Main program)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/DNSClient/W7500x_it.c                           (Interrupt Handlers)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/DNSClient/W7500x_it.h                           (Interrupt Handlers Header file)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/DNSClient/W7500x_conf.h                         (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/DNSClient/MDK/W7500x_WZTOE_DNSClient.uvproj  (MDK Project file)"),(0,i.kt)("li",{parentName:"ul"},"WZTOE/DNSClient/GCC/Makefile                          (GCC Make file)")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use PB_14 and PB_15 for MDIO"),(0,i.kt)("li",{parentName:"ul"},"In order to use IC+101 PHY to be set Pull-up and Strength at TXD","[3:0]"," and TXE"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hardware Connection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"PB_14 --- MDIO (@IC+101)"),(0,i.kt)("li",{parentName:"ul"},"PB_15 --- MDC  (@IC+101)")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,i.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,i.kt)("li",{parentName:"ul"},"Run the example."),(0,i.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,i.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"',(0,i.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,i.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0}}]);