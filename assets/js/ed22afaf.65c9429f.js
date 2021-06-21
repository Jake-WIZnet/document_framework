(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[21403],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return g}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37843:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var i=n(74034),o=n(79973),r=(n(67294),n(3905)),a={id:"how_to_debug_wizwiki_w7500",title:"How to Debug WIZwiki-W7500",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_debug_wizwiki_w7500",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_debug_wizwiki_w7500",isDocsHomePage:!1,title:"How to Debug WIZwiki-W7500",description:"On the WIZwiki-W7500, there are SWD Header and CMSIS-DAP to debug",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_debug_Wizwiki_W7500.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_debug_wizwiki_w7500",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_debug_wizwiki_w7500",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_debug_Wizwiki_W7500.md",version:"current",frontMatter:{id:"how_to_debug_wizwiki_w7500",title:"How to Debug WIZwiki-W7500",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"How to write the firmware into WIZwiki-W7500",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500"},next:{title:"How to write the firmware into CMSIS-DAP",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_cmsis_dap"}},u=[{value:"Set Flash Algorithm",id:"set-flash-algorithm",children:[{value:"Download",id:"download",children:[]},{value:"To follow",id:"to-follow",children:[]}]},{value:"Using ULINK Debugger",id:"using-ulink-debugger",children:[{value:"To Follow",id:"to-follow-1",children:[]}]},{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow-2",children:[]}]},{value:"When downloading multiple projects",id:"when-downloading-multiple-projects",children:[{value:"To Follow",id:"to-follow-3",children:[]},{value:"How to switch app &amp; boot for debug",id:"how-to-switch-app--boot-for-debug",children:[]}]}],s={toc:u};function c(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On the WIZwiki-W7500, there are SWD Header and CMSIS-DAP to debug\nWIZwiki-W7500. At first, you need to set Flash Algorithm to use\ndebugging. This page shows how to set Flash Algorithm and how to use\nULINK Debugger and CMSIS-DAP Debugger."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"set-flash-algorithm"},"Set Flash Algorithm"),(0,r.kt)("h3",{id:"download"},"Download"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"W7500 128KB Flash project: ",(0,r.kt)("a",{href:"/img/products/w7500/overview/w7500_128kb_flash.zip",target:"_blank"},"Download"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"W7500 128KB Flash file: ",(0,r.kt)("a",{href:"/img/products/w7500/overview/w7500_128_flm.zip",target:"_blank"},"Download")))),(0,r.kt)("h3",{id:"to-follow"},"To follow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the attached File and unzip. Then you can find one folder\nand one file in it. In 'W7500","_","flash","_","algo","_","mdk' folder, open the\nproject and Build it.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2849).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"After build, you can check the generated files in project folder.\nBack to 'W7500","_","128","_","Flash' folder and copy 'W7500","_","128","_","FLM' flash\nalgorithm file into the Flash folder in Keil.\n",(0,r.kt)("strong",{parentName:"li"},"C:","\\","Keil","_","v5","\\","ARM","\\","Flash"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(89110).Z})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"using-ulink-debugger"},"Using ULINK Debugger"),(0,r.kt)("p",null,"To use ULINK Debugger, you should uncap SWD Debugger Sel Jumper usually\ndisconnected with cap. Do not forget to connect USB cable to supply\npower to the board."),(0,r.kt)("h3",{id:"to-follow-1"},"To Follow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can find SWD Header in the middle of WIZwiki-W7500 and Debugger\nSel Jumper with three caps above it. Then open the J3, J4, J5 jumper cap\nin Debugger Sel Jumper. Now, your WIZwiki-W7500 is ready to connect the\nSWD debugger.  ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(26872).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect ULINK debugger and SWD Header. At this moment, be careful of\nmatching pin number.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set\n'Debug' on top menu with choosing 'ULINK2/ME Cortex Debugger'.  "))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74509).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Utilities' next Debug and choose 'CMSIS-DAP Debugger'. Open\n'Setting' menu and unchecked 'SWJ' in Debug on top menu. Then confirm\n'ARM CoreSight SW-DP' set on SW Device.\n",(0,r.kt)("img",{src:n(99705).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Flash Download'. Set 'Erase Full Chip' in Download Function,\ntype '0x20000000 to 0x4000' in RAM for Algorithm and Add\n'W7500","_","128KB","_","FLASH' on Programming Algorithm. After comparing with the\nfigure below, click 'OK'."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3003).Z})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Download the firmware into WIZwiki-W7500. You can check complete\nmessage and the ULINK Debugger at the bottom. Chick the 'Debug icon' or\n",(0,r.kt)("strong",{parentName:"li"},"Ctrl+F5")," to debug.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{src:n(34340).Z}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),(0,r.kt)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",(0,r.kt)("a",{parentName:"p",href:"#set_flash_algorithm"},"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),(0,r.kt)("h3",{id:"to-follow-2"},"To Follow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",(0,r.kt)("img",{src:n(60585).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",(0,r.kt)("img",{src:n(41140).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",(0,r.kt)("img",{src:n(37796).Z}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",(0,r.kt)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",(0,r.kt)("img",{src:n(8028).Z})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"when-downloading-multiple-projects"},"When downloading multiple projects"),(0,r.kt)("p",null,"In case of WIZ750SR code using W7500 chip, Boot and App project exist\nrespectively. Therefore, there is a problem when following the previous\nexplanations. Regardless of which debugger you use, you only need to pay\nattention to the following settings."),(0,r.kt)("h3",{id:"to-follow-3"},"To Follow"),(0,r.kt)("p",null,"-"," For general configuration, follow the previous instructions."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94841).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Utilities' in tap menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"And choose 'your debugger'.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open 'Setting' menu next to it and click 'Flash Download' in tap\nmenu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Only set 'Erase Sectors', 'Program', 'Verify' in Download Function.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click W7500 128KB FLASH in Programming Algorithm and fill the\n","[Start][Size]"," Box."))),(0,r.kt)("p",null," You can get ","[Start]"," address and ","[Size]"," from target information like figure below.\nIf everything is entered correctly, Click 'OK'."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(97240).Z})),(0,r.kt)("p",null,"The remaining steps can be followed by the previous description."),(0,r.kt)("h3",{id:"how-to-switch-app--boot-for-debug"},"How to switch app & boot for debug"),(0,r.kt)("p",null,"You just need reset device and debug that you want!"),(0,r.kt)("hr",null))}c.isMDXComponent=!0},94841:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cmsis_debug_multi_project_1-328c2122610d08287f9f7c5b89e4eab3.png"},97240:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cmsis_debug_target_info-f128ccc39a634f5d5836c624718081f5.png"},2849:function(e,t,n){"use strict";t.Z=n.p+"assets/images/flash_set-b3c106f9ec25aa6f9024334d037cee7b.jpg"},89110:function(e,t,n){"use strict";t.Z=n.p+"assets/images/set_flash_algo2-76bb23c13ec7bac015dc3632df9ccf30.png"},26872:function(e,t,n){"use strict";t.Z=n.p+"assets/images/swd_header_debugger_jumper-12974f2a215d87f003e58ad633a8c9e8.png"},74509:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ulink_set1-a1831e3151da5e9356873d76cc22c0b4.jpg"},99705:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ulink_set2-2832e8aa1d612798c176a6043dcc3e5e.jpg"},3003:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ulink_set3-1-857db7262f405ef6e1b0b4284d31750c.jpg"},34340:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ulink_set4-bdb3d3769b0e5a6723893e94c5cb5800.jpg"},60585:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cmsis_debug_1-735323a25e7faa2d7aaffc5cac65ede3.jpg"},41140:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cmsis_debug_2-1-c50d0d1bfdefb8acdf35983e8de68f0c.jpg"},37796:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cmsis_debug_3-1-beeed2970ff5e4736a7ec230e9784e9e.jpg"},8028:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cmsis_debug_4-87e0563f91f297c38f51f4401d41ec9c.jpg"}}]);