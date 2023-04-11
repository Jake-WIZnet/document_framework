"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[6895],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(f,i(i({ref:t},s),{},{components:o})):r.createElement(f,i({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},79730:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={id:"open_source_hardware_coocox",title:"CooCox",date:new Date("2020-04-03T00:00:00.000Z")},i="CooCox",c={unversionedId:"Product/Open-Source-Hardware/open_source_hardware_coocox",id:"Product/Open-Source-Hardware/open_source_hardware_coocox",title:"CooCox",description:"Visit to the Web site",source:"@site/docs/Product/Open-Source-Hardware/CooCox.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/open_source_hardware_coocox",permalink:"/Product/Open-Source-Hardware/open_source_hardware_coocox",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/CooCox.md",tags:[],version:"current",frontMatter:{id:"open_source_hardware_coocox",title:"CooCox",date:"2020-04-03T00:00:00.000Z"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"CooCox Open IDE",id:"coocox-open-ide",level:2},{value:"Tool-chains setting in CoIDE",id:"tool-chains-setting-in-coide",level:2},{value:"CoX-Peripheral Interface",id:"cox-peripheral-interface",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coocox"},"CooCox"),(0,n.kt)("p",null,"Visit to the Web site"),(0,n.kt)("p",null,"URL :\ud83c\udf0e",(0,n.kt)("a",{parentName:"p",href:"http://www.coocox.org/Index.html"},"http://www.coocox.org/Index.html"),"]","(",(0,n.kt)("a",{parentName:"p",href:"http://www.coocox.org/Index.html"},"http://www.coocox.org/Index.html"),"."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"CoIDE just provides development environment without\ntool-chains. So you need to install tool-chains at first. We use ARM gcc\n4.7 for tool-chains."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ARM GCC 4.7 Features:")),(0,n.kt)("p",null,"-"," All GCC 4.7 features, plus latest mainline features - Additional code\nsize optimizations - Newlib-nano: newlib branch optimized for code size"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://launchpad.net/gcc-arm-embedded/+download"},"Download the latest\narm-gcc-embbed")),(0,n.kt)("h2",{id:"coocox-open-ide"},"CooCox Open IDE"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CooCox")," provides integration development environment\ncalled ",(0,n.kt)("strong",{parentName:"p"},"CoIDE")," for ARM Cortex M series microcontrollers. ",(0,n.kt)("strong",{parentName:"p"},"CoIDE"),"\nsupports ARM gcc based development environment of ",(0,n.kt)("strong",{parentName:"p"},"eclipse"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"System requirements:")),(0,n.kt)("p",null,"-"," Windows XP SP3 / Windows Vista / Windows 7"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Features:")),(0,n.kt)("p",null,"-"," Free to use - Full functional IDE - Component-oriented development\nplatform - Internet-based, efficient integration of network resources -\nIntegrates CoOS - Peripheral registers"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.coocox.org/CooCox_CoIDE.htm"},"CoIDE Download and learn\nmore")," "),(0,n.kt)("h2",{id:"tool-chains-setting-in-coide"},"Tool-chains setting in CoIDE"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Before you use CoIDE to start your project, you need to\nconfig the GCC compiler at first."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.coocox.org/CoIDE/Compiler_Settings.html"},"Compiler Setting in\nCoIDE")),(0,n.kt)("h2",{id:"cox-peripheral-interface"},"CoX-Peripheral Interface"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cox-Peripheral interface")," is Common Wrapper Interface to\nport peripheral easily which is different in each vendors. If SPI is\ndesigned by Cox-Peripheral Interface starting as x(e.g. xGPIOModeSet),\nyou can operate by changing just SPI interface PIN setting in each MCUs\nor EVB-boards."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.coocox.org/COX.html"},"Learn more")))}d.isMDXComponent=!0}}]);