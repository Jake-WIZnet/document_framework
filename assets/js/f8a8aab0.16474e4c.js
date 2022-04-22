"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1209],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(f,a(a({ref:t},s),{},{components:r})):o.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60911:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=r(83117),n=r(80102),i=(r(67294),r(3905)),a=["components"],l={id:"how-to-use-mdk-for-w7500-peripherals-examples",title:"How to use MDK for W7500 Peripherals Examples",date:new Date("2020-04-20T00:00:00.000Z")},p=void 0,c={unversionedId:"Product/iMCU/W7500/documents/appnote/how-to-use-mdk-for-w7500-peripherals-examples",id:"Product/iMCU/W7500/documents/appnote/how-to-use-mdk-for-w7500-peripherals-examples",title:"How to use MDK for W7500 Peripherals Examples",description:"(C) COPYRIGHT 2015 WIZnet",source:"@site/docs/Product/iMCU/W7500/documents/appnote/How-to-use-MDK-for-W7500-Peripherals-Examples.md",sourceDirName:"Product/iMCU/W7500/documents/appnote",slug:"/Product/iMCU/W7500/documents/appnote/how-to-use-mdk-for-w7500-peripherals-examples",permalink:"/Product/iMCU/W7500/documents/appnote/how-to-use-mdk-for-w7500-peripherals-examples",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/documents/appnote/How-to-use-MDK-for-W7500-Peripherals-Examples.md",tags:[],version:"current",frontMatter:{id:"how-to-use-mdk-for-w7500-peripherals-examples",title:"How to use MDK for W7500 Peripherals Examples",date:"2020-04-20T00:00:00.000Z"},sidebar:"docs",previous:{title:"How to use ISP tool",permalink:"/Product/iMCU/W7500/documents/appnote/how-to-use-isp-tool"},next:{title:"Overview",permalink:"/Product/iMCU/W7500P/overview"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Download W7500 library and example",id:"download-w7500-library-and-example",level:2},{value:"Directory structure",id:"directory-structure",level:2},{value:"Example of WZTOE directory",id:"example-of-wztoe-directory",level:2},{value:"Open Keil projects",id:"open-keil-projects",level:2},{value:"Compile",id:"compile",level:2},{value:"Download code",id:"download-code",level:2},{value:"Connect to WIZwiki-W7500 and do the loopback test",id:"connect-to-wizwiki-w7500-and-do-the-loopback-test",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-use-mdk-for-w7500-peripherals-examples"},"How to use MDK for W7500 Peripherals Examples"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of How to use W7500 Peripheral example with Keil project.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This application note guides user to use W7500 peripheral examples with Keil uVision compiler. Here we use TCP/IP core Offload Engine(TOE) among W7500 peripherals and loopback test example as sample."),(0,i.kt)("p",null,"This document is based on Keil uVision MDK-Lite version:5.14.0.0 compiler and WIZwiki-W7500 platform as hardware."),(0,i.kt)("h2",{id:"download-w7500-library-and-example"},"Download W7500 library and example"),(0,i.kt)("p",null,"You can download the library and example zip file at ","[link]","."),(0,i.kt)("p",null,"Download and abstract the file then you can see some folder."),(0,i.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,i.kt)("p",null,"The extracted files consist of the CMSIS, driver and peripheral example."),(0,i.kt)("p",null,"The W7500 standard peripheral library provides a rich set of examples covering the main features of each peripheral. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 1 W7500 library and example directory",src:r(87229).Z,width:"637",height:"686"})),(0,i.kt)("h2",{id:"example-of-wztoe-directory"},"Example of WZTOE directory"),(0,i.kt)("p",null,"In WZTOE folder, directory structure is as follows."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"directory3",src:r(28391).Z,width:"107",height:"88"})),(0,i.kt)("p",null,"DHCPClient, DNSClient and LoopbackTest are example project and ioLibrary contains library of socket APIs, DHCP APIs, DNS APIs and etc."),(0,i.kt)("p",null,"In LoopbackTest folder, directory structure is as follows."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"directory2",src:r(70943).Z,width:"127",height:"176"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"main.c")," file is main body of the project."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"retarget.c")," file is for using printf function for debug."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"W7500x_conf.h")," file contains all peripheral headers."),(0,i.kt)("p",null,"If you want to enable/disable peripheral header file, uncomment/comment the line."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"W7500x_it.c")," file contains interrupt handlers for the project."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"readme.md")," file contains the example description, hardware and software environment and description of how to use."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"MDK")," folder is for Keil IDE compiler and the ",(0,i.kt)("strong",{parentName:"p"},"GCC")," folder is for GCC compiler."),(0,i.kt)("h2",{id:"open-keil-projects"},"Open Keil projects"),(0,i.kt)("p",null,"In MDK directory is here a file: Keil project file. Double click the file, then Keil uVision will be opened."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"project_explorer",src:r(58549).Z,width:"268",height:"456"})),(0,i.kt)("p",null,"You can see upper image at left side on your uVision. In ",(0,i.kt)("strong",{parentName:"p"},"W7500x_Periph")," group are peripheral drivers which are used for this project."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"User")," group contains main function."),(0,i.kt)("h2",{id:"compile"},"Compile"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"compile",src:r(88470).Z,width:"953",height:"518"})),(0,i.kt)("p",null,"Click the build icon on menu bar or 'F7'. Then compile will be done. After compile, ",(0,i.kt)("strong",{parentName:"p"},"W7500x_WZTOE_Loopback.bin")," file is generated in Obj folder."),(0,i.kt)("h2",{id:"download-code"},"Download code"),(0,i.kt)("p",null,"WIZwiki-W7500 board supports CMSIS-DAP, so you can just drag & drop the code file to download into 'mbed' directory on your system."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"draganddrop",src:r(98941).Z,width:"1070",height:"550"})),(0,i.kt)("h2",{id:"connect-to-wizwiki-w7500-and-do-the-loopback-test"},"Connect to WIZwiki-W7500 and do the loopback test"),(0,i.kt)("p",null,"Now, WIZwiki-W7500 is running TCP server: IP - 192.168.77.9, PORT - 5000.\nType IP address and Port number(This application note use Hercules as TCP client program). And then click 'Connect' button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tcp_client1",src:r(17601).Z,width:"624",height:"537"})),(0,i.kt)("p",null,"After connection, send some string and you can see the same as you sent."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tcp_client2",src:r(51416).Z,width:"628",height:"544"})))}m.isMDXComponent=!0},88470:function(e,t,r){t.Z=r.p+"assets/images/compile-0ba772c89eb876753fe65a7f73d05e4e.jpg"},87229:function(e,t,r){t.Z=r.p+"assets/images/directory-6ad38b48d0d5e90ca1a047836d6be068.jpg"},70943:function(e,t,r){t.Z=r.p+"assets/images/directory2-d2c8a60c0aa356821e647033c1faf6c5.jpg"},28391:function(e,t,r){t.Z=r.p+"assets/images/directory3-50cde864cf025adbb9f10772fbc0e0e4.jpg"},98941:function(e,t,r){t.Z=r.p+"assets/images/draganddrop-d7bfbe7595abcd82ac6218dd4720c2f7.jpg"},58549:function(e,t,r){t.Z=r.p+"assets/images/project_explorer-823563afc0b1cad901a0d32910cb7007.jpg"},17601:function(e,t,r){t.Z=r.p+"assets/images/tcp_client1-474d1e4be9ca3df5369ece800686dd7c.jpg"},51416:function(e,t,r){t.Z=r.p+"assets/images/tcp_client2-6244b2a5482ebdf183bc085c9d7c2e7d.jpg"}}]);