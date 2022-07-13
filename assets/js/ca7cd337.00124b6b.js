"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[4124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"deadzonegeneration",title:"Dead-Zone generation example",date:new Date("2020-06-10T00:00:00.000Z")},l=void 0,i={unversionedId:"Product/iMCU/W7500/Peripherals-internal/deadzonegeneration",id:"Product/iMCU/W7500/Peripherals-internal/deadzonegeneration",title:"Dead-Zone generation example",description:"(C) COPYRIGHT 2015 WIZnet",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/deadzonegeneration.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/deadzonegeneration",permalink:"/Product/iMCU/W7500/Peripherals-internal/deadzonegeneration",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/deadzonegeneration.md",tags:[],version:"current",frontMatter:{id:"deadzonegeneration",title:"Dead-Zone generation example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Clock Reset Generator (CRG)",permalink:"/Product/iMCU/W7500/Peripherals-internal/crg"},next:{title:"Delay example (System tick timer example)",permalink:"/Product/iMCU/W7500/Peripherals-internal/delay"}},u={},p=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file    : PWM/DeadZoneGeneration/readme.md"),(0,a.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,a.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,a.kt)("li",{parentName:"ul"},"date    : 01-May-2015"),(0,a.kt)("li",{parentName:"ul"},"brief   : Description of the Dead-zone generation example.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"example-description"},"Example Description"),(0,a.kt)("p",null,"This example shows how to use the PWM peripheral to run Dead-zone generation."),(0,a.kt)("p",null,"The PWM channel 0 frequency is set to SystemCoreClock(Hz), the Prescaler is 2\nso the PWM channel 0 counter clock is 10 MHz. SystemCoreClock is set to 20 MHz."),(0,a.kt)("p",null,"The PWM channel 0 is set as up-count and periodic mode, and the dead-zone counter value is set as 100. The PWM output is enabled. So as a result, the output of PWM channel 1 is inverted the PWM channel 0 output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"note:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you want to use the PWM channel 0 as dead-zone generation, the PWM channel 1 output MUST be disabled.")))),(0,a.kt)("p",null,"The PWM channel 0 output is mapped to PC_00, and inverted output is mapped to PC_01(The PWM channel 1 output). "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/main.c                        (Main program) "),(0,a.kt)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/W7500x_it.c                   (Interrupt Handlers)"),(0,a.kt)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/W7500x_it.h                   (Interrupt Handlers Header file)"),(0,a.kt)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/W7500x_conf.h                 (Library Configuration file)"),(0,a.kt)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/MDK/W7500x_PWM_DeadZoneGeneration.uvproj (MDK Project file)"),(0,a.kt)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/GCC/Makefile                  (GCC Make file)")),(0,a.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),(0,a.kt)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),(0,a.kt)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PA_00 pin generates the PWM channel 0 output signal."),(0,a.kt)("li",{parentName:"ul"},"PA_01 pin generates the inverted PWM channel 0 output signal.        "),(0,a.kt)("li",{parentName:"ul"},"In order to use the PWM channel 0(PA_00) to be changed from PAD_AF0 to PAD_AF2."),(0,a.kt)("li",{parentName:"ul"},"In order to use the inverted PWM channel 0(PA_01) to be changed from PAD_AF0 to PAD_AF2.")))),(0,a.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,a.kt)("p",null,"In order to make the program work, you must do the following :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,a.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,a.kt)("li",{parentName:"ul"},"Run the example."),(0,a.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,a.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"',(0,a.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,a.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0}}]);