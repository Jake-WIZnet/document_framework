"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[9892],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),s=i,h=c["".concat(u,".").concat(s)]||c[s]||d[s]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},42056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),i=(r(67294),r(3905));const a={id:"timermode",title:"PWM Timer Mode example",date:new Date("2020-04-03T00:00:00.000Z")},o=void 0,l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/timermode",id:"Product/iMCU/W7500/Peripherals-internal/timermode",title:"PWM Timer Mode example",description:"(C) COPYRIGHT 2015 WIZnet",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/timermode.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/timermode",permalink:"/Product/iMCU/W7500/Peripherals-internal/timermode",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/timermode.md",tags:[],version:"current",frontMatter:{id:"timermode",title:"PWM Timer Mode example",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"W7500 TCP Function",permalink:"/Product/iMCU/W7500/Peripherals-internal/tcp-function"},next:{title:"Dual Timer TimerRun example",permalink:"/Product/iMCU/W7500/Peripherals-internal/timerrun"}},u={},m=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3}],p={toc:m},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : PWM/TimerMode/readme.md"),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 01-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of the PWM Timer Mode example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example shows how to use the PWM peripheral to run time mode."),(0,i.kt)("p",null,"The PWM channel 0 frequency is set to SystemCoreClock(Hz), the Prescaler is 2\nso the PWM0 counter clock is 10 MHz.\nSystemCoreClock is set to 20 MHz."),(0,i.kt)("p",null,"The PWM channel 0 is configured in Timer Mode and duty cycle is 50 %.\nTimer/Counter is up-count mode and periodic mode. 2 interrupts out of 3 interrupts\nare enabled: match and overflow interupt(capture interrupt is excepted)."),(0,i.kt)("p",null,"When the Timer/Counter reaches the match value, RED LED(PC_08) is toggled every times,\nand when the Tiemr/Counter reaches the limit value, GREEN LED(PC_09) is toggled every times."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PWM/TimerMode/main.c                  (Main program) "),(0,i.kt)("li",{parentName:"ul"},"PWM/TimerMode/W7500x_it.c             (Interrupt Handlers)"),(0,i.kt)("li",{parentName:"ul"},"PWM/TimerMode/W7500x_it.h             (Interrupt Handlers Header file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/TimerMode/W7500x_conf.h           (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/TimerMode/MDK/W7500x_PWM_TimerMode.uvproj    (MDK Project file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/TimerMode/GCC/Makefile            (GCC Make file)")),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),(0,i.kt)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),(0,i.kt)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use RED LED connected to PC_08 pin."),(0,i.kt)("li",{parentName:"ul"},"Use GREEN LED connected to PC_09 pin."),(0,i.kt)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),(0,i.kt)("li",{parentName:"ul"},"In order to use the GREEN LED(PC_09) to be changed from PAD_AF0 to PAD_AF1.")))),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,i.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,i.kt)("li",{parentName:"ul"},"Run the example."),(0,i.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,i.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"',(0,i.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,i.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}d.isMDXComponent=!0}}]);