"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[7976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"wdtreset",title:"WDT Reset example",date:new Date("2020-04-03T00:00:00.000Z")},l=void 0,o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/wdtreset",id:"Product/iMCU/W7500/Peripherals-internal/wdtreset",title:"WDT Reset example",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/wdtreset.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/wdtreset",permalink:"/Product/iMCU/W7500/Peripherals-internal/wdtreset",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/wdtreset.md",tags:[],version:"current",frontMatter:{id:"wdtreset",title:"WDT Reset example",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Watchdog Timer (WDT)",permalink:"/Product/iMCU/W7500/Peripherals-internal/wdt"},next:{title:"How to install KEIL",permalink:"/Product/iMCU/W7500/documents/appnote/how_to_install_KEIL"}},u={},p=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3}],s={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file    : WDT/WDTReset/readme.md"),(0,a.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,a.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,a.kt)("li",{parentName:"ul"},"date    : 01-May-2015"),(0,a.kt)("li",{parentName:"ul"},"brief   : Description of the Watchdog timer reset example.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"example-description"},"Example Description"),(0,a.kt)("p",null,"This example shows how to use the Watchdog timer peripheral to run and generate watchdog reset request signal. External interrupt is used for generating hardfault and watchdog timer reset. EXTI line is mapped to PA_00"),(0,a.kt)("p",null,"The Watchdog timer frequency is set to SystemCoreClock(Hz). SystemCoreClock is set to 20 MHz."),(0,a.kt)("p",null,"Reset information is checked at first, and then if reset is not occurred by watchdog timer, watchdog timer is set and started. Untill external interrupt is occurred, WDT counter is set and RED LED(PC_08) is toggled when WDT counter is under 0x1000."),(0,a.kt)("p",null,"If reset is occurred by watchdog timer, WDT interrupt is cleared and RED LED(PC_08) is off and GREEN LED(PC_09) is on."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WDT/WDTReset/main.c                  (Main program) "),(0,a.kt)("li",{parentName:"ul"},"WDT/WDTReset/W7500x_it.c             (Interrupt Handlers)"),(0,a.kt)("li",{parentName:"ul"},"WDT/WDTReset/W7500x_it.h             (Interrupt Handlers Header file)"),(0,a.kt)("li",{parentName:"ul"},"WDT/WDTReset/W7500x_conf.h           (Library Configuration file)"),(0,a.kt)("li",{parentName:"ul"},"WDT/WDTReset/MDK/W7500x_WDT_WDTReset.uvproj     (MDK Project file)"),(0,a.kt)("li",{parentName:"ul"},"WDT/WDTReset/GCC/Makefile            (GCC Make file)")),(0,a.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),(0,a.kt)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example.  "),(0,a.kt)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use RED LED connected to PC_08 pin."),(0,a.kt)("li",{parentName:"ul"},"Use GREEN LED connected to PC_09 pin."),(0,a.kt)("li",{parentName:"ul"},"Use EXTI connected to PA_00 pin."),(0,a.kt)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),(0,a.kt)("li",{parentName:"ul"},"In order to use the GREEN LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),(0,a.kt)("li",{parentName:"ul"},"External input button has to be configured separately.  ")))),(0,a.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,a.kt)("p",null,"In order to make the program work, you must do the following :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open your preferred toolchain.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the example.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you have any questions, please use the forum site."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"',(0,a.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))),(0,a.kt)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}d.isMDXComponent=!0}}]);