(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[69391],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=l,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68633:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var r=n(74034),l=n(79973),i=(n(67294),n(3905)),a={id:"polling",title:"UART Printf example",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/polling",id:"Product/iMCU/W7500/Peripherals-internal/polling",isDocsHomePage:!1,title:"UART Printf example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/polling.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/polling",permalink:"/Product/iMCU/W7500/Peripherals-internal/polling",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/polling.md",version:"current",frontMatter:{id:"polling",title:"UART Printf example",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Pad Controller (PADCON)",permalink:"/Product/iMCU/W7500/Peripherals-internal/padcon"},next:{title:"UART Polling example",permalink:"/Product/iMCU/W7500/Peripherals-internal/printf"}},u=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : UART/Printf/readme.md "),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of the UART Printf example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example shows how to retarget the C library printf function to the UART.\nThis implementation output the printf message on the Hyperterminal using UARTx.\nUARTx can be UART0 or UART1 depending on the board you are using"),(0,i.kt)("p",null,"The UART0/UART1 is configured as follow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BaudRate = 115200 baud  "),(0,i.kt)("li",{parentName:"ul"},"Word Length = 8 Bits"),(0,i.kt)("li",{parentName:"ul"},"One Stop Bit"),(0,i.kt)("li",{parentName:"ul"},"No parity"),(0,i.kt)("li",{parentName:"ul"},"Hardware flow control disable"),(0,i.kt)("li",{parentName:"ul"},"Receive and transmit enable")),(0,i.kt)("p",null,"This example describes that the data send from UART0 to PC."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UART/Printf/main.c                                            (Main program)"),(0,i.kt)("li",{parentName:"ul"},"UART/Printf/W7500x_conf.h                                     (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"UART/Printf/W7500x_it.h                                       (Interrupt handlers header file)"),(0,i.kt)("li",{parentName:"ul"},"UART/Printf/W7500x_it.c                                       (Interrupt handlers)"),(0,i.kt)("li",{parentName:"ul"},"UART/Printf/MDK/W7500x_Uart_Print.uvproj                      (Project file)"),(0,i.kt)("li",{parentName:"ul"},"UART/Printf/GCC/Makefile                        \t\t   \t  (GCC Make file)")),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This example runs on W7500 Connectivity line Devices."),(0,i.kt)("li",{parentName:"ul"},"W7500 Set-up")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   --------------            --------------\n  |    UART0     |          |       PC     |\n  |              |          |              |\n  |   (PA_13)TXD |----------|   RXD        |\n  |   (PA_14)RXD |----------|   TXD        |\n  |              |          |              |\n  |              |          |              |\n   --------------            --------------\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TXD(PA13) and RXD of PC connected."),(0,i.kt)("li",{parentName:"ul"},"RXD(PA14) and TXD of PC connected.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),(0,i.kt)("li",{parentName:"ul"},"Open your preferred toolchain "),(0,i.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),(0,i.kt)("li",{parentName:"ul"},"Run the example ")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0}}]);