(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[21390],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),s=o,h=d["".concat(u,".").concat(s)]||d[s]||m[s]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66242:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],l={id:"countermode",title:"PWM Counter Mode example",date:new Date("2020-06-10T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/iMCU/W7500/Peripherals-internal/countermode",id:"Product/iMCU/W7500/Peripherals-internal/countermode",isDocsHomePage:!1,title:"PWM Counter Mode example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/countermode.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/countermode",permalink:"/Product/iMCU/W7500/Peripherals-internal/countermode",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/countermode.md",tags:[],version:"current",frontMatter:{id:"countermode",title:"PWM Counter Mode example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"PWM Timer Mode example",permalink:"/Product/iMCU/W7500/Peripherals-internal/capturemode"},next:{title:"Clock Reset Generator (CRG)",permalink:"/Product/iMCU/W7500/Peripherals-internal/crg"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : PWM/CounterMode/readme.md"),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 01-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of the PWM Counter Mode example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example shows how to use the PWM peripheral to run counter mode."),(0,i.kt)("p",null,"The PWM channel 0 frequency is set to SystemCoreClock(Hz). SystemCoreClock is set to 20 MHz."),(0,i.kt)("p",null,"The PWM channel 0 is configured in rising edge counter mode, up-count mode, periodic mode. So the PWM channel 0 Timer/Counter is counted when input signal is triggered. 2 interrupts out of 3 interrupts are enabled: match and overflow interupt(capture interrupt is excepted)."),(0,i.kt)("p",null,"The PWM channel 0 output pin(PC_00) is used for input."),(0,i.kt)("p",null,"When the Timer/Counter reaches the match value, RED LED(PC_08) is toggled every times,\nand when the Tiemr/Counter reaches the limit value, GREEN LED(PC_09) is toggled every times."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PWM/CounterMode/main.c                  (Main program) "),(0,i.kt)("li",{parentName:"ul"},"PWM/CounterMode/W7500x_it.c             (Interrupt Handlers)"),(0,i.kt)("li",{parentName:"ul"},"PWM/CounterMode/W7500x_it.h             (Interrupt Handlers Header file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/CounterMode/W7500x_conf.h           (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/CounterMode/MDK/W7500x_PWM_CounterMode.uvproj    (MDK Project file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/CounterMode/GCC/Makefile            (GCC Make file)")),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),(0,i.kt)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),(0,i.kt)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use RED LED connected to PC_08 pin."),(0,i.kt)("li",{parentName:"ul"},"Use GREEN LED connected to PC_09 pin."),(0,i.kt)("li",{parentName:"ul"},"Use PC_00 for input signal."),(0,i.kt)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),(0,i.kt)("li",{parentName:"ul"},"In order to use the GREEN LED(PC_09) to be changed from PAD_AF0 to PAD_AF1."),(0,i.kt)("li",{parentName:"ul"},"In order to use the PC_00 to be changed from PAD_AF0 to PAD_AF2."),(0,i.kt)("li",{parentName:"ul"},"External input button has to be configured separately. ")))),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open your preferred toolchain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run the example.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have any questions, please use the forum site."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"',(0,i.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))),(0,i.kt)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}d.isMDXComponent=!0}}]);