"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5444],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(83117),l=n(80102),i=(n(67294),n(3905)),a=["components"],o={id:"led-toggle",title:"EXTI LED Toggle example",date:new Date("2020-06-10T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/iMCU/W7500/Peripherals-internal/led-toggle",id:"Product/iMCU/W7500/Peripherals-internal/led-toggle",title:"EXTI LED Toggle example",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/led-toggle.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/led-toggle",permalink:"/Product/iMCU/W7500/Peripherals-internal/led-toggle",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/led-toggle.md",tags:[],version:"current",frontMatter:{id:"led-toggle",title:"EXTI LED Toggle example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"UART Interrupts example",permalink:"/Product/iMCU/W7500/Peripherals-internal/inter"},next:{title:"I2C and LM75 Temperature Sensor communication example",permalink:"/Product/iMCU/W7500/Peripherals-internal/lm75-temperature"}},c={},s=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : EXTI/LED_Toggle/readme.md"),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of the EXTI LED Toggle example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example shows how to configure external interrupt lines.\nIn this example, EXTI line is configured to generate an interrupt on each rising or falling edge. In the interrupt routine a LED connected to a specific GPIO pin is toggled.\nIn this example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EXTI line is mapped to PA.00")),(0,i.kt)("p",null,"After EXTI configuration, a software interrupt is generated on the EXTI toggles LED(R).\nAfter that, when rising edge is detected on EXTI, LED(R) toggles.\nIf WIZwiki W7500 is used, when button is pressed, LED(R) toggles but, Button has to be configured separately."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/main.c                                (Main program)"),(0,i.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/W7500x_it.c                           (Interrupt Handlers)"),(0,i.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/W7500x_it.h                           (Interrupt Handlers Header file)"),(0,i.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/W7500x_conf.h                         (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/MDK/W7500x_EXTI_LED_Toggle.uvproj     (MDK Project file)"),(0,i.kt)("li",{parentName:"ul"},"EXTI/Blink_LED/GCC/Makefile                          (GCC Make file)")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),(0,i.kt)("li",{parentName:"ul"},"Use EXTI connected to PA_00 pin."),(0,i.kt)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1."),(0,i.kt)("li",{parentName:"ul"},"Button has to be configured separately.")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,i.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,i.kt)("li",{parentName:"ul"},"Run the example."),(0,i.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,i.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"',(0,i.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,i.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}d.isMDXComponent=!0}}]);