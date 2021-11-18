"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[63301],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(r),p=i,m=g["".concat(u,".").concat(p)]||g[p]||d[p]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},26981:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return g}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],c={id:"using-cmsis-dap-debugger",title:"Using CMSIS-DAP Debugger",date:new Date("2020-04-07T00:00:00.000Z")},u=void 0,l={unversionedId:"Product/Mbed-WIZwiki-Platform/Getting-Started/using-cmsis-dap-debugger",id:"Product/Mbed-WIZwiki-Platform/Getting-Started/using-cmsis-dap-debugger",isDocsHomePage:!1,title:"Using CMSIS-DAP Debugger",description:"CMSIS-DAP does support USB cable and Debugger as well. You need to Set Flash Algorithm to use CMSIS-DAP Debugger in Keil.",source:"@site/docs/Product/Mbed-WIZwiki-Platform/Getting-Started/Using_the_CMSIS-DAP.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/Getting-Started",slug:"/Product/Mbed-WIZwiki-Platform/Getting-Started/using-cmsis-dap-debugger",permalink:"/Product/Mbed-WIZwiki-Platform/Getting-Started/using-cmsis-dap-debugger",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/Getting-Started/Using_the_CMSIS-DAP.md",tags:[],version:"current",frontMatter:{id:"using-cmsis-dap-debugger",title:"Using CMSIS-DAP Debugger",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"How to write the firmware into CMSIS-DAP",permalink:"/Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-write-firmware-into-cmsis-dap"},next:{title:"WIZwiki-W7500 Mbed Starter Kit",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/wizwiki_w7500_mbed_starter_kit"}},s=[{value:"To Follow",id:"to-follow",children:[],level:3}],d={toc:s};function g(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",(0,o.kt)("a",{parentName:"p",href:"how-to-debug-wizwiki-w7500#set-flash-algorithm"},"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),(0,o.kt)("h3",{id:"to-follow"},"To Follow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",(0,o.kt)("img",{src:r(60585).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",(0,o.kt)("img",{src:r(41140).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",(0,o.kt)("img",{src:r(37796).Z}),"  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",(0,o.kt)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",(0,o.kt)("img",{src:r(8028).Z})))))}g.isMDXComponent=!0},60585:function(e,t,r){t.Z=r.p+"assets/images/cmsis_debug_1-735323a25e7faa2d7aaffc5cac65ede3.jpg"},41140:function(e,t,r){t.Z=r.p+"assets/images/cmsis_debug_2-1-c50d0d1bfdefb8acdf35983e8de68f0c.jpg"},37796:function(e,t,r){t.Z=r.p+"assets/images/cmsis_debug_3-1-beeed2970ff5e4736a7ec230e9784e9e.jpg"},8028:function(e,t,r){t.Z=r.p+"assets/images/cmsis_debug_4-87e0563f91f297c38f51f4401d41ec9c.jpg"}}]);