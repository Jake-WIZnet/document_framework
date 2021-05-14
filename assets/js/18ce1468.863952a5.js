(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[97149],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return g}});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),w=s(i),g=n,f=w["".concat(c,".").concat(g)]||w[g]||d[g]||r;return i?o.createElement(f,a(a({ref:t},u),{},{components:i})):o.createElement(f,a({ref:t},u))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=w;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<r;s++)a[s]=i[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}w.displayName="MDXCreateElement"},57713:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var o=i(74034),n=i(79973),r=(i(67294),i(3905)),a={id:"how_to_debug_wizwiki_w7500eco",title:"How to Debug WIZwiki-W7500ECO",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco",isDocsHomePage:!1,title:"How to Debug WIZwiki-W7500ECO",description:"On the WIZwiki-W7500ECO, there is CMSIS-DAP to debug WIZwiki-W7500ECO.",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco.md",version:"current",frontMatter:{id:"how_to_debug_wizwiki_w7500eco",title:"How to Debug WIZwiki-W7500ECO",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"Ethernet Shield",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/eco-shield"},next:{title:"How to start WIZwiki-W7500ECO Board",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board"}},c=[{value:"Set Flash Algorithm",id:"set-flash-algorithm",children:[{value:"Download",id:"download",children:[]},{value:"To follow",id:"to-follow",children:[]}]},{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow-1",children:[]}]}],s={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On the WIZwiki-W7500ECO, there is CMSIS-DAP to debug WIZwiki-W7500ECO.\nAt first, you need to set Flash Algorithm to use debugging. This page\nshows how to set Flash Algorithm and how to use CMSIS-DAP Debugger."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"set-flash-algorithm"},"Set Flash Algorithm"),(0,r.kt)("h3",{id:"download"},"Download"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"W7500 128KB Flash project:",(0,r.kt)("a",{href:"/img/products/wizwiki_w7500/start_getting_started/w7500_128KB_flash.zip",target:"_blank"},"Download")),(0,r.kt)("li",{parentName:"ul"},"W7500 128KB Flash file:",(0,r.kt)("a",{href:"/img/products/wizwiki_w7500/start_getting_started/w7500_128_flm.zip",target:"_blank"},"Download"))),(0,r.kt)("h3",{id:"to-follow"},"To follow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the attached File and unzip. Then you can find one folder\nand one file in it. In 'W7500","_","flash","_","algo","_","mdk' folder, open the\nproject and Build it.\n",(0,r.kt)("img",{src:i(43446).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After build, you can check the generated files in project folder.\nBack to 'W7500","_","128","_","Flash' folder and copy 'W7500","_","128","_","FLM' flash\nalgorithm file into the Flash folder in Keil.\n",(0,r.kt)("strong",{parentName:"p"},"C:","\\","Keil","_","v5","\\","ARM","\\","Flash"),"\n",(0,r.kt)("img",{src:i(60063).Z})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),(0,r.kt)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",(0,r.kt)("a",{parentName:"p",href:"../WIZwiki-W7500/how_to_debug_wizwiki_w7500#set_flash_algorithm"},"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil."),(0,r.kt)("h3",{id:"to-follow-1"},"To Follow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set\n'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",(0,r.kt)("img",{src:i(89384).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings'\nmenu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight\nSW-DP' set on SW Device.\n",(0,r.kt)("img",{src:i(85704).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase\nFull Chip' in Download Function, '0x20000000 to 0x4000' in RAM for\nAlgorithm, Add 'W7500","_","128KB","_","FLASH' on Programming Algorithm. After\nchecking it with below figure, click 'OK'.\n",(0,r.kt)("img",{src:i(43862).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete\nmessage and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon'\nor ",(0,r.kt)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",(0,r.kt)("img",{src:i(81074).Z})))))}u.isMDXComponent=!0},89384:function(e,t,i){"use strict";t.Z=i.p+"assets/images/cmsis_debug_1-735323a25e7faa2d7aaffc5cac65ede3.jpg"},85704:function(e,t,i){"use strict";t.Z=i.p+"assets/images/cmsis_debug_2-1-c50d0d1bfdefb8acdf35983e8de68f0c.jpg"},43862:function(e,t,i){"use strict";t.Z=i.p+"assets/images/cmsis_debug_3-1-beeed2970ff5e4736a7ec230e9784e9e.jpg"},81074:function(e,t,i){"use strict";t.Z=i.p+"assets/images/cmsis_debug_4-87e0563f91f297c38f51f4401d41ec9c.jpg"},43446:function(e,t,i){"use strict";t.Z=i.p+"assets/images/flash_set-b3c106f9ec25aa6f9024334d037cee7b.jpg"},60063:function(e,t,i){"use strict";t.Z=i.p+"assets/images/set_flash_algo2-76bb23c13ec7bac015dc3632df9ccf30.png"}}]);