(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[94263],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91945:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"capturemode",title:"PWM Timer Mode example",date:new Date("2020-06-10T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/capturemode",id:"Product/iMCU/W7500/Peripherals-internal/capturemode",isDocsHomePage:!1,title:"PWM Timer Mode example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/capturemode.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/capturemode",permalink:"/Product/iMCU/W7500/Peripherals-internal/capturemode",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/capturemode.md",version:"current",frontMatter:{id:"capturemode",title:"PWM Timer Mode example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"GPIO Blink LED example",permalink:"/Product/iMCU/W7500/Peripherals-internal/blink_led"},next:{title:"PWM Counter Mode example",permalink:"/Product/iMCU/W7500/Peripherals-internal/countermode"}},u=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],p={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : PWM/CaptureMode/readme.md"),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 01-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of the PWM Capture Mode example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example shows how to use the PWM peripheral to run capture mode."),(0,i.kt)("p",null,"The PWM channel 0 frequency is set to SystemCoreClock(Hz), the Prescaler is 2\nso the PWM0 counter clock is 10 MHz. SystemCoreClock is set to 20 MHz."),(0,i.kt)("p",null,"The PWM channel 0 is configured in Timer Mode and duty cycle is 50 %.\nTimer/Counter is up-count mode and periodic mode. Capture mode is rising edge detection. 1 interrupts out of 3 interrupts\nare enabled: capture interupt(match and overflow interrupt is excepted)."),(0,i.kt)("p",null,"The Timer/Counter runs periodically and if capture signal(PC_00) is received, the Timer/Counter value is saved at capture register and capture interrupt is occurred. In capture interrupt handler, RED LED(PC_08) is toggled."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PWM/CaptureMode/main.c                  (Main program) "),(0,i.kt)("li",{parentName:"ul"},"PWM/CaptureMode/W7500x_it.c             (Interrupt Handlers)"),(0,i.kt)("li",{parentName:"ul"},"PWM/CaptureMode/W7500x_it.h             (Interrupt Handlers Header file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/CaptureMode/W7500x_conf.h           (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/CaptureMode/MDK/W7500x_PWM_CaptureMode.uvproj  (MDK Project file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/CaptureMode/GCC/Makefile            (GCC Make file)")),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),(0,i.kt)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),(0,i.kt)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use the RED LED connected to PC_08 pin."),(0,i.kt)("li",{parentName:"ul"},"Use the capture input connected to PC_00 pin."),(0,i.kt)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),(0,i.kt)("li",{parentName:"ul"},"In order to use the capature intput(PC_00) to be changed from PAD_AF0 to PAD_AF2."),(0,i.kt)("li",{parentName:"ul"},"External input button has to be configured separately.")))),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open your preferred toolchain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run the example.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have any questions, please use the forum site."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"',(0,i.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))),(0,i.kt)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}c.isMDXComponent=!0}}]);