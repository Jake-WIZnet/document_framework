"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[6628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>N});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,N=d["".concat(u,".").concat(c)]||d[c]||s[c]||l;return r?n.createElement(N,i(i({ref:t},m),{},{components:r})):n.createElement(N,i({ref:t},m))}));function N(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},38834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={id:"ssp",title:"Random number generator (RNG)",date:new Date("2020-04-03T00:00:00.000Z")},i=void 0,o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/ssp",id:"Product/iMCU/W7500/Peripherals-internal/ssp",title:"Random number generator (RNG)",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/ssp.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/ssp",permalink:"/Product/iMCU/W7500/Peripherals-internal/ssp",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/ssp.md",tags:[],version:"current",frontMatter:{id:"ssp",title:"Random number generator (RNG)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"EXTI Sleep example",permalink:"/Product/iMCU/W7500/Peripherals-internal/sleep"},next:{title:"System tick timer",permalink:"/Product/iMCU/W7500/Peripherals-internal/systick"}},u={},p=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3},{value:"Flow Chart",id:"flow-chart",level:3}],m={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file    : Random_number_generation/readme.md"),(0,a.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,a.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,a.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,a.kt)("li",{parentName:"ul"},"brief   : Description of random number generation example.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"example-description"},"Example Description"),(0,a.kt)("p",null,"This example shows how to use RNG of W7500."),(0,a.kt)("p",null,"In this example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1) Read power on initial random number"),(0,a.kt)("li",{parentName:"ul"},"2) Read manual random number"),(0,a.kt)("li",{parentName:"ul"},"3) Change Seed value & polynomial and read manual random number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/main.c                                (Main program)"),(0,a.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_it.c                           (Interrupt Handlers)"),(0,a.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_it.h                           (Interrupt Handlers Header file)"),(0,a.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_conf.h                         (Library Configuration file)"),(0,a.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/MDK/W7500x_Random_number_generation.uvproj     (MDK Project file)"),(0,a.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/GCC/Makefile                          (GCC Make file)")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No need to hardware setup")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,a.kt)("p",null,"In order to make the program work, you must do the following :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,a.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,a.kt)("li",{parentName:"ul"},"Run the example."),(0,a.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,a.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"',(0,a.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"flow-chart"},"Flow Chart"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read power on random number"),(0,a.kt)("li",{parentName:"ul"},"Intialize to change RNG mode to manual run"),(0,a.kt)("li",{parentName:"ul"},"Run RNG and STOP"),(0,a.kt)("li",{parentName:"ul"},"Read generated random number"),(0,a.kt)("li",{parentName:"ul"},"Change seed value or polynomial"),(0,a.kt)("li",{parentName:"ul"},"And Run RNG and STOP again & read random number")),(0,a.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}s.isMDXComponent=!0}}]);