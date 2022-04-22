"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[6628],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=a,f=s["".concat(u,".").concat(c)]||s[c]||d[c]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],o={id:"ssp",title:"Random number generator (RNG)",date:new Date("2020-04-03T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/iMCU/W7500/Peripherals-internal/ssp",id:"Product/iMCU/W7500/Peripherals-internal/ssp",title:"Random number generator (RNG)",description:"(C) COPYRIGHT 2015 WIZnet Co.,Ltd.",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/ssp.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/ssp",permalink:"/Product/iMCU/W7500/Peripherals-internal/ssp",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/ssp.md",tags:[],version:"current",frontMatter:{id:"ssp",title:"Random number generator (RNG)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"EXTI Sleep example",permalink:"/Product/iMCU/W7500/Peripherals-internal/sleep"},next:{title:"System tick timer",permalink:"/Product/iMCU/W7500/Peripherals-internal/systick"}},m={},d=[{value:"Example Description",id:"example-description",level:3},{value:"Directory contents",id:"directory-contents",level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",level:3},{value:"How to use it ?",id:"how-to-use-it-",level:3},{value:"Flow Chart",id:"flow-chart",level:3}],s={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"file    : Random_number_generation/readme.md"),(0,l.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,l.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,l.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,l.kt)("li",{parentName:"ul"},"brief   : Description of random number generation example.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"example-description"},"Example Description"),(0,l.kt)("p",null,"This example shows how to use RNG of W7500."),(0,l.kt)("p",null,"In this example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1) Read power on initial random number"),(0,l.kt)("li",{parentName:"ul"},"2) Read manual random number"),(0,l.kt)("li",{parentName:"ul"},"3) Change Seed value & polynomial and read manual random number")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/main.c                                (Main program)"),(0,l.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_it.c                           (Interrupt Handlers)"),(0,l.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_it.h                           (Interrupt Handlers Header file)"),(0,l.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_conf.h                         (Library Configuration file)"),(0,l.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/MDK/W7500x_Random_number_generation.uvproj     (MDK Project file)"),(0,l.kt)("li",{parentName:"ul"},"RNG/Random_number_generation/GCC/Makefile                          (GCC Make file)")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No need to hardware setup")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,l.kt)("p",null,"In order to make the program work, you must do the following :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,l.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,l.kt)("li",{parentName:"ul"},"Run the example."),(0,l.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,l.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'"',(0,l.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"flow-chart"},"Flow Chart"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Read power on random number"),(0,l.kt)("li",{parentName:"ul"},"Intialize to change RNG mode to manual run"),(0,l.kt)("li",{parentName:"ul"},"Run RNG and STOP"),(0,l.kt)("li",{parentName:"ul"},"Read generated random number"),(0,l.kt)("li",{parentName:"ul"},"Change seed value or polynomial"),(0,l.kt)("li",{parentName:"ul"},"And Run RNG and STOP again & read random number")),(0,l.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0}}]);