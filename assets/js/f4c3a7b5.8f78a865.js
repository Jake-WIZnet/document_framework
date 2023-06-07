"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[8565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,h=s["".concat(p,".").concat(d)]||s[d]||c[d]||l;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={id:"iap-example",title:"Flash example (IAP example)",date:new Date("2020-06-10T00:00:00.000Z")},i=void 0,o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/iap-example",id:"Product/iMCU/W7500/Peripherals-internal/iap-example",title:"Flash example (IAP example)",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/IAP-Example.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/iap-example",permalink:"/Product/iMCU/W7500/Peripherals-internal/iap-example",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/IAP-Example.md",tags:[],version:"current",frontMatter:{id:"iap-example",title:"Flash example (IAP example)",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Inter-Integrated Circuit (I2C)",permalink:"/Product/iMCU/W7500/Peripherals-internal/i2c"},next:{title:"ADC example (Illumination sensor)",permalink:"/Product/iMCU/W7500/Peripherals-internal/illumination-sensor"}},p={},u=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3}],m={toc:u},s="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"file    : Flash/IAP_Example/readme.md"),(0,n.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,n.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,n.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,n.kt)("li",{parentName:"ul"},"brief   : Description of IAP example.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"example-description"},"Example Description"),(0,n.kt)("p",null,"This example shows how to use IAP of W7500."),(0,n.kt)("p",null,"In this example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SET Start address of Data memory & flash memory"),(0,n.kt)("li",{parentName:"ul"},"Data0 area Erase , Read and Write Test (Start address :  0x0003_FE00, Size : 256)"),(0,n.kt)("li",{parentName:"ul"},"Data1 area Erase, Read and Write Test (Start address : 0x0003_FF00, Size : 256)"),(0,n.kt)("li",{parentName:"ul"},"Code Flash Block Rease, Read and Write Test (Start address : 0x0001F000, Size : 4096)")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Flash/IAP_Example/main.c                                (Main program)"),(0,n.kt)("li",{parentName:"ul"},"Flash/IAP_Example/W7500x_it.c                           (Interrupt Handlers)"),(0,n.kt)("li",{parentName:"ul"},"Flash/IAP_Example/W7500x_it.h                           (Interrupt Handlers Header file)"),(0,n.kt)("li",{parentName:"ul"},"Flash/IAP_Example/W7500x_conf.h                         (Library Configuration file)"),(0,n.kt)("li",{parentName:"ul"},"Flash/IAP_Example/MDK/W7500x_IAP_Example.uvproj     (MDK Project file)"),(0,n.kt)("li",{parentName:"ul"},"Flash/IAP_Example/GCC/Makefile                          (GCC Make file)")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"No need to hardware setup")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,n.kt)("p",null,"In order to make the program work, you must do the following :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,n.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,n.kt)("li",{parentName:"ul"},"Run the example."),(0,n.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,n.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'"',(0,n.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0}}]);