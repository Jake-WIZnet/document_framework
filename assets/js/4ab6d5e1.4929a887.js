(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[99698],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93468:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"loopback",title:"SSP Loopback example",date:new Date("2020-04-03T00:00:00.000Z")},p=void 0,u={unversionedId:"Product/iMCU/W7500/Peripherals-internal/loopback",id:"Product/iMCU/W7500/Peripherals-internal/loopback",isDocsHomePage:!1,title:"SSP Loopback example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/Loopback.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/loopback",permalink:"/Product/iMCU/W7500/Peripherals-internal/loopback",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/Loopback.md",tags:[],version:"current",frontMatter:{id:"loopback",title:"SSP Loopback example",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"I2C and LM75 Temperature Sensor communication example",permalink:"/Product/iMCU/W7500/Peripherals-internal/lm75_temperature"},next:{title:"Pad Controller (PADCON)",permalink:"/Product/iMCU/W7500/Peripherals-internal/padcon"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"file    : SSP/Loopback/readme.md"),(0,o.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,o.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,o.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,o.kt)("li",{parentName:"ul"},"brief   : Description of the SSP Loopback example.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"example-description"},"Example Description"),(0,o.kt)("p",null,"This example provides a description of how to set a communication between two SSPs in MO mode and performs a transfer from Master to Slave by Interrnal Loopback."),(0,o.kt)("p",null,"SSP0 is configured as master and SSP1 as slave both are with 16bit data size."),(0,o.kt)("p",null,"After enabling both SSPs, the first data from set value 0x50 followed by the first data send by the master. The same procedure is done for the remaining data to transfer except the last ones."),(0,o.kt)("p",null,"Last data from SSP0 transmit buffer is save to SSP1 receive buffer."),(0,o.kt)("p",null,"Once the transfer is completed a comparison is done and TransferStatus gives the data transfer status for each data transfer direction where it is PASSED if transmitted and received data are the same otherwise it is FAILED.\nAfter check of TransferStatus, if Status is PASSED LED ON GREEN and if Status is FAILED LED ON RED."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SSP/Loopback/main.c                                   (Main program)"),(0,o.kt)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.c                              (Interrupt Handlers)"),(0,o.kt)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.h                              (Interrupt Handlers Header file)"),(0,o.kt)("li",{parentName:"ul"},"SSP/Loopback/W7500x_conf.h                            (Library Configuration file)"),(0,o.kt)("li",{parentName:"ul"},"SSP/Loopback/MDK/W7500x_SSP_Loopback.uvproj           (MDK Project file)"),(0,o.kt)("li",{parentName:"ul"},"SSP/Loopback/GCC/Makefile                             (GCC Make file)")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set SSP0 is master and datasize is 16bits"),(0,o.kt)("li",{parentName:"ul"},"Set SSP1 is Slave and datasize is 16bits"),(0,o.kt)("li",{parentName:"ul"},"Connect SSP0 SSEL (PA.05) pin to SSP1 SSEL (PB.00) Pin"),(0,o.kt)("li",{parentName:"ul"},"Connect SSP0 SCLK (PA.06) pin to SSP1 SCLK (PB.01) Pin"),(0,o.kt)("li",{parentName:"ul"},"Connect SSP0 MISO (PA.07) pin to SSP1 MISO (PB.02) Pin"),(0,o.kt)("li",{parentName:"ul"},"Connect SSP0 MOSI (PA.08) pin to SSP1 MOSI (PB.03) Pin"),(0,o.kt)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),(0,o.kt)("li",{parentName:"ul"},"Use LED(G) connected to PC_09 pin."),(0,o.kt)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1.")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,o.kt)("p",null,"In order to make the program work, you must do the following :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,o.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,o.kt)("li",{parentName:"ul"},"Run the example."),(0,o.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,o.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'"',(0,o.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,o.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd.>"))}m.isMDXComponent=!0}}]);