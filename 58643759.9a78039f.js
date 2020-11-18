(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{221:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(582)),l={id:"sleep",title:"EXTI Sleep example",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/sleep",id:"Product/iMCU/W7500/Peripherals-internal/sleep",isDocsHomePage:!1,title:"EXTI Sleep example",description:"********************",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\sleep.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/sleep",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/sleep.md",sidebar:"docs",previous:{title:"SSP SD card LED example",permalink:"/Product/iMCU/W7500/Peripherals-internal/sd_card_led"},next:{title:"Random number generator (RNG)",permalink:"/Product/iMCU/W7500/Peripherals-internal/ssp"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],p={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : EXTI/Sleep/readme.md"),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of the EXTI Sleep example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example shows how to configure external interrupt lines.\nIn this example, EXTI line is configured to generate an interrupt on each rising or falling edge. In the interrupt routine connected to a specific GPIO pin."),Object(i.b)("p",null,"In this example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"EXTI line is mapped to PA.00")),Object(i.b)("p",null,"After Go to Sleep Mode.\nAfter EXTI configuration, a software interrupt is generated nothing.\nAfter that, when rising edge is detected on EXTI, Wake-up!!"),Object(i.b)("p",null,"If WIZwiki W7500 is used, when button is pressed, Wake-up!!\nbut, Button has to be configured separately."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"EXTI/Sleep/main.c                                (Main program)"),Object(i.b)("li",{parentName:"ul"},"EXTI/Sleep/W7500x_it.c                           (Interrupt Handlers)"),Object(i.b)("li",{parentName:"ul"},"EXTI/Sleep/W7500x_it.h                           (Interrupt Handlers Header file)"),Object(i.b)("li",{parentName:"ul"},"EXTI/Sleep/W7500x_conf.h                         (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"EXTI/Sleep/MDK/W7500x_EXTI_Sleep.uvproj          (MDK Project file)"),Object(i.b)("li",{parentName:"ul"},"EXTI/Sleep/GCC/Makefile                          (GCC Make file)")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use LED(B) connected to PC_05 pin."),Object(i.b)("li",{parentName:"ul"},"Use EXTI connected to PA_00 pin."),Object(i.b)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1."),Object(i.b)("li",{parentName:"ul"},"Button has to be configured separately.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(i.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(i.b)("li",{parentName:"ul"},"Run the example."),Object(i.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(i.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://forum.wiznet.io/%22"}),'https://forum.wiznet.io/"'))))),Object(i.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}u.isMDXComponent=!0},582:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(r),O=n,m=b["".concat(l,".").concat(O)]||b[O]||s[O]||i;return r?a.a.createElement(m,o(o({ref:t},p),{},{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);