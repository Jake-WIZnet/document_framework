"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[9879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=l,k=s["".concat(u,".").concat(d)]||s[d]||c[d]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={id:"illumination-sensor",title:"ADC example (Illumination sensor)",date:new Date("2020-06-10T00:00:00.000Z")},i=void 0,o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/illumination-sensor",id:"Product/iMCU/W7500/Peripherals-internal/illumination-sensor",title:"ADC example (Illumination sensor)",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/illumination-sensor.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/illumination-sensor",permalink:"/Product/iMCU/W7500/Peripherals-internal/illumination-sensor",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/illumination-sensor.md",tags:[],version:"current",frontMatter:{id:"illumination-sensor",title:"ADC example (Illumination sensor)",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Flash example (IAP example)",permalink:"/Product/iMCU/W7500/Peripherals-internal/iap-example"},next:{title:"I2C Read/Write example",permalink:"/Product/iMCU/W7500/Peripherals-internal/init"}},u={},p=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3},{value:"Flow Chart",id:"flow-chart",level:3}],m={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"file    : Illumination_regled/readme.md"),(0,l.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,l.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,l.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,l.kt)("li",{parentName:"ul"},"brief   : Description of the Illumination sensor & REG led toggle example.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"example-description"},"Example Description"),(0,l.kt)("p",null,"This example shows how to use ADC of W7500.\nIn this example, ADC input is connected with illumination sensor. And control RGB led by illumination sensor value."),(0,l.kt)("p",null,"In this example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set the Alternate function of PAD for this example."),(0,l.kt)("li",{parentName:"ul"},"Sensing analog value of Illumination sensor."),(0,l.kt)("li",{parentName:"ul"},"If dark, ON the led, if not, OFF the led with GPIO control.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ADC/Illumination_regled/main.c                                (Main program)"),(0,l.kt)("li",{parentName:"ul"},"ADC/Illumination_regled/W7500x_it.c                           (Interrupt Handlers)"),(0,l.kt)("li",{parentName:"ul"},"ADC/Illumination_regled/W7500x_it.h                           (Interrupt Handlers Header file)"),(0,l.kt)("li",{parentName:"ul"},"ADC/Illumination_regled/W7500x_conf.h                         (Library Configuration file)"),(0,l.kt)("li",{parentName:"ul"},"ADC/Illumination_regled/MDK/W7500x_Illumination_regled.uvproj     (MDK Project file)"),(0,l.kt)("li",{parentName:"ul"},"ADC/Illumination_regled/GCC/Makefile                          (GCC Make file)")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ADC input connected to PC_15(A0) pin."),(0,l.kt)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),(0,l.kt)("li",{parentName:"ul"},"Use LED(G) connected to PC_09 pin."),(0,l.kt)("li",{parentName:"ul"},"Use LED(B) connected to PC_05 pin."),(0,l.kt)("li",{parentName:"ul"},"In order to use the LEDs to be changed from PAD_AF0 to PAD_AF1.  "))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Hardware Connection"),(0,l.kt)("p",{parentName:"li"}," 5V - 10K ohm register - PC_15(A0) - Illumination sensor - GND"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,l.kt)("p",null,"In order to make the program work, you must do the following :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,l.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,l.kt)("li",{parentName:"ul"},"Run the example."),(0,l.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,l.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"flow-chart"},"Flow Chart"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Power on ADC"),(0,l.kt)("li",{parentName:"ul"},"Select ADC channel"),(0,l.kt)("li",{parentName:"ul"},"ADC start"),(0,l.kt)("li",{parentName:"ul"},"Wait until EOC (end of conversion)"),(0,l.kt)("li",{parentName:"ul"},"Read ADC value")),(0,l.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0}}]);