"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[48807],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88936:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),l=["components"],o={id:"init",title:"I2C Read/Write example",date:new Date("2020-06-10T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/iMCU/W7500/Peripherals-internal/init",id:"Product/iMCU/W7500/Peripherals-internal/init",isDocsHomePage:!1,title:"I2C Read/Write example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/init.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/init",permalink:"/Product/iMCU/W7500/Peripherals-internal/init",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/init.md",tags:[],version:"current",frontMatter:{id:"init",title:"I2C Read/Write example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"ADC example (Illumination sensor)",permalink:"/Product/iMCU/W7500/Peripherals-internal/illumination_sensor"},next:{title:"UART Interrupts example",permalink:"/Product/iMCU/W7500/Peripherals-internal/inter"}},c=[{value:"Example Description",id:"example-description",children:[],level:3},{value:"Directory contents",id:"directory-contents",children:[],level:3},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[],level:3},{value:"How to use it ?",id:"how-to-use-it-",children:[],level:3},{value:"Flow Chart",id:"flow-chart",children:[],level:3}],m={toc:c};function s(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file    : I2C/I2C_Init/readme.md "),(0,a.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,a.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,a.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,a.kt)("li",{parentName:"ul"},"brief   : Description of the I2C Data Read/Write example.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"example-description"},"Example Description"),(0,a.kt)("p",null,"This example provides a description of how to use a Read/Write operation.\nThis example provides the elementary steps to control the following modules and\nuse them in an application:"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I2C/I2C_Init/main.c                            (Main program)"),(0,a.kt)("li",{parentName:"ul"},"I2C/I2C_Init/W7500x_it.c                       (Interrupt Handlers)"),(0,a.kt)("li",{parentName:"ul"},"I2C/I2C_Init/W7500x_it.h                       (Interrupt Handlers Header file)"),(0,a.kt)("li",{parentName:"ul"},"I2C/I2C_Init/W7500x_conf.h                     (Library Configuration file)"),(0,a.kt)("li",{parentName:"ul"},"I2C/I2C_Init/MDK/W7500x_I2C_Init.uvproj         (Project file)"),(0,a.kt)("li",{parentName:"ul"},"I2C/I2C_Init/GCC/Makefile                      (GCC Make file)")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,a.kt)("p",null,"   | --W7500--    ---slave--   |\n|         |      |          |\n|     SDA |------| SDA      |\n|     SCL |------| SCL      |\n|         |      |          |\n|         |      |          |"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"---------       -----------\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,a.kt)("p",null,"In order to make the program work, you must do the following :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open your preferred toolchain."),(0,a.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),(0,a.kt)("li",{parentName:"ul"},"Run the example."),(0,a.kt)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),(0,a.kt)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"',(0,a.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"flow-chart"},"Flow Chart"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Master Init"),(0,a.kt)("li",{parentName:"ul"},"Device address send from W7500 to EEPROM"),(0,a.kt)("li",{parentName:"ul"},"START enable"),(0,a.kt)("li",{parentName:"ul"},"Confirm the Ack Receive"),(0,a.kt)("li",{parentName:"ul"},"Slave address send from W7500 to EEPROM"),(0,a.kt)("li",{parentName:"ul"},"Confirm the Ack Receive"),(0,a.kt)("li",{parentName:"ul"},"Send the data from W7500 to EEPROM"),(0,a.kt)("li",{parentName:"ul"},"Restart enable"),(0,a.kt)("li",{parentName:"ul"},"Confirm the Ack Receive"),(0,a.kt)("li",{parentName:"ul"},"Receive the data"),(0,a.kt)("li",{parentName:"ul"},"Transmit the Ack transmission"),(0,a.kt)("li",{parentName:"ul"},"STOP enable")),(0,a.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}s.isMDXComponent=!0}}]);