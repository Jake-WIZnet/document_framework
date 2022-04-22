"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5875],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80258:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),l=["components"],o={id:"sd-card-led",title:"SSP SD card LED example",date:new Date("2020-04-03T00:00:00.000Z")},u=void 0,s={unversionedId:"Product/iMCU/W7500/Peripherals-internal/sd-card-led",id:"Product/iMCU/W7500/Peripherals-internal/sd-card-led",title:"SSP SD card LED example",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/SD-Card-LED.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/sd-card-led",permalink:"/Product/iMCU/W7500/Peripherals-internal/sd-card-led",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/SD-Card-LED.md",tags:[],version:"current",frontMatter:{id:"sd-card-led",title:"SSP SD card LED example",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Random number generator (RNG)",permalink:"/Product/iMCU/W7500/Peripherals-internal/rng"},next:{title:"EXTI Sleep example",permalink:"/Product/iMCU/W7500/Peripherals-internal/sleep"}},c={},p=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : SSP/SD_Card_LED/readme.md"),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of the SSP SD_Card_LED example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example provides a description of how to set a communication to SDCard."),(0,i.kt)("p",null,"SDCard is configured SSP1 as master are with 8bit data size."),(0,i.kt)("p",null,"After enabling both SSP1, the first single data block to transfer Buffer Block Tx except the last ones.\nblock size is 512 and receive Buffer Block Rx read to SDCard except the last ones."),(0,i.kt)("p",null,"Once the transfer is completed a comparison is done and TransferStatus1 gives the data transfer status for each data transfer direction where it is PASSED if transmitted and received data are the same otherwise it is FAILED.\nAfter check of TransferStatus1, if Status is PASSED LED ON BLUE and if Status is FAILED LED ON RED."),(0,i.kt)("p",null,"After single data block test, the second multi block data to transfer Buffer MultiBlock Tx except the last ones.\nblock size is 512 * 32 and receive Buffer MultiBlock Rx read to SDCard except the last ones."),(0,i.kt)("p",null,"Once the transfer is completed a comparison is done and TransferStatus2 gives the data transfer status for each data transfer direction where it is PASSED if transmitted and received data are the same otherwise it is FAILED.\nAfter check of TransferStatus2, if Status is PASSED LED ON GREEN and if Status is FAILED LED ON RED."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SSP/Loopback/main.c                                   (Main program)"),(0,i.kt)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.c                              (Interrupt Handlers)"),(0,i.kt)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.h                              (Interrupt Handlers Header file)"),(0,i.kt)("li",{parentName:"ul"},"SSP/Loopback/W7500x_conf.h                            (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"SSP/Loopback/MDK/W7500x_SSP_SD_Card_LED.uvproj        (MDK Project file)"),(0,i.kt)("li",{parentName:"ul"},"SSP/Loopback/GCC/Makefile                             (GCC Make file)")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"input micro SD card"),(0,i.kt)("li",{parentName:"ul"},"Set SSP1 is master and datasize is 8bits"),(0,i.kt)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),(0,i.kt)("li",{parentName:"ul"},"Use LED(G) connected to PC_09 pin."),(0,i.kt)("li",{parentName:"ul"},"Use LED(B) connected to PC_05 pin."),(0,i.kt)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,i.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,i.kt)("li",{parentName:"ul"},"Run the example."),(0,i.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,i.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"',(0,i.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,i.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}m.isMDXComponent=!0}}]);