"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5444],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=l,E=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(E,i(i({ref:t},s),{},{components:r})):n.createElement(E,i({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={id:"led-toggle",title:"EXTI LED Toggle example",date:new Date("2020-06-10T00:00:00.000Z")},i=void 0,o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/led-toggle",id:"Product/iMCU/W7500/Peripherals-internal/led-toggle",title:"EXTI LED Toggle example",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/led-toggle.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/led-toggle",permalink:"/Product/iMCU/W7500/Peripherals-internal/led-toggle",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/led-toggle.md",tags:[],version:"current",frontMatter:{id:"led-toggle",title:"EXTI LED Toggle example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"UART Interrupts example",permalink:"/Product/iMCU/W7500/Peripherals-internal/inter"},next:{title:"I2C and LM75 Temperature Sensor communication example",permalink:"/Product/iMCU/W7500/Peripherals-internal/lm75-temperature"}},u={},p=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"file    : EXTI/LED_Toggle/readme.md"),(0,l.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,l.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,l.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,l.kt)("li",{parentName:"ul"},"brief   : Description of the EXTI LED Toggle example.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"example-description"},"Example Description"),(0,l.kt)("p",null,"This example shows how to configure external interrupt lines.\nIn this example, EXTI line is configured to generate an interrupt on each rising or falling edge. In the interrupt routine a LED connected to a specific GPIO pin is toggled.\nIn this example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EXTI line is mapped to PA.00")),(0,l.kt)("p",null,"After EXTI configuration, a software interrupt is generated on the EXTI toggles LED(R).\nAfter that, when rising edge is detected on EXTI, LED(R) toggles.\nIf WIZwiki W7500 is used, when button is pressed, LED(R) toggles but, Button has to be configured separately."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/main.c                                (Main program)"),(0,l.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/W7500x_it.c                           (Interrupt Handlers)"),(0,l.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/W7500x_it.h                           (Interrupt Handlers Header file)"),(0,l.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/W7500x_conf.h                         (Library Configuration file)"),(0,l.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/MDK/W7500x_EXTI_LED_Toggle.uvproj     (MDK Project file)"),(0,l.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/GCC/Makefile                          (GCC Make file)")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),(0,l.kt)("li",{parentName:"ul"},"Use EXTI connected to PA_00 pin."),(0,l.kt)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1."),(0,l.kt)("li",{parentName:"ul"},"Button has to be configured separately.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,l.kt)("p",null,"In order to make the program work, you must do the following :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,l.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,l.kt)("li",{parentName:"ul"},"Run the example."),(0,l.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,l.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,l.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0}}]);