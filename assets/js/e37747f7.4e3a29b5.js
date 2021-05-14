(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[23448],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return d}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(i),d=n,w=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return i?r.createElement(w,o(o({ref:t},p),{},{components:i})):r.createElement(w,o({ref:t},p))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},91383:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=i(74034),n=i(79973),a=(i(67294),i(3905)),o={id:"how_to_write_firmware_into_wizwiki_w7500",title:"How to write the firmware into WIZwiki-W7500",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",isDocsHomePage:!1,title:"How to write the firmware into WIZwiki-W7500",description:"There are four ways to write firmware into WIZwiki-W7500.",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_write_the_firmware_into_WIZwiki_W7500.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_write_the_firmware_into_WIZwiki_W7500.md",version:"current",frontMatter:{id:"how_to_write_firmware_into_wizwiki_w7500",title:"How to write the firmware into WIZwiki-W7500",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"How to install WIZwiki-W7500 serial driver",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_install_wizwiki_7500_serial_driver"},next:{title:"How to Debug WIZwiki-W7500",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_debug_wizwiki_w7500"}},s=[{value:"Examples Binary",id:"examples-binary",children:[]},{value:"Using the CMSIS-DAP (Drag and Drop)",id:"using-the-cmsis-dap-drag-and-drop",children:[]},{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow",children:[]},{value:"Reference",id:"reference",children:[]}]},{value:"Using the ISP",id:"using-the-isp",children:[]},{value:"How to connect an external SWD debugger to WIZwiki-W7500",id:"how-to-connect-an-external-swd-debugger-to-wizwiki-w7500",children:[{value:"Using the SWD debugger",id:"using-the-swd-debugger",children:[]},{value:"Reference",id:"reference-1",children:[]}]}],c={toc:s};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are four ways to write firmware into WIZwiki-W7500.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the CMSIS-DAP (Drag and Drop)"),(0,a.kt)("li",{parentName:"ul"},"Using the CMSIS-DAP (through Keil uVision5)"),(0,a.kt)("li",{parentName:"ul"},"Go to ISP tool manual & Program download"),(0,a.kt)("li",{parentName:"ul"},"Using the SWD Debugger")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples-binary"},"Examples Binary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/w7500/overview/w7500x_wztoe_manu.zip",target:"_blank"},"Hardware test & Loop back binary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/w7500/overview/wizwki-w7500_led_blink.zip",target:"_blank"},"LED Blink binary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/w7500/overview/wizwki-w7500_serial_led.zip",target:"_blank"},"Serial Out binary"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"using-the-cmsis-dap-drag-and-drop"},"Using the CMSIS-DAP (Drag and Drop)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When you connect the USB cable to the WIZwiki-W7500, PC recognized\nas a removable disk. Removable disk name is MBED.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You "drag and drop" or copy the firmware to the removable disk, the\nfirmware writing progress has completed.',(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Drag and drop",src:i(45176).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After completing the firmware writing, open to check the removable\ndisk.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'If "fail.txt" file is exists in the removable disk, it means writing\nthe firmware has failed.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After pressing the Reset button (SW1) of WIZwiki- W7500, please\nrepeat the steps from step 2."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),(0,a.kt)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",(0,a.kt)("a",{parentName:"p",href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"},"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),(0,a.kt)("h3",{id:"to-follow"},"To Follow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",(0,a.kt)("img",{src:i(60585).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",(0,a.kt)("img",{src:i(41140).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",(0,a.kt)("img",{src:i(37796).Z}),"  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",(0,a.kt)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",(0,a.kt)("img",{src:i(8028).Z})))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null," ",(0,a.kt)("a",{parentName:"p",href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"},"Set Flash Algorithm")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"using-the-isp"},"Using the ISP"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"W7500 ISP Program")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../iMCU/W7500/documents/appnote/how_to_use_isp_tool"},"Go to ISP tool manual & Program download")),(0,a.kt)("p",null,"When W7500 is in the boot mode, firmware writing is possible via the ISP\nsince WIZwiki-W7500 has built-in an ISP header. As ISP header supports\nthe UART signals, you need a converter like TTL to RS232 or TTL to USB\nin order to connect to your PC.",(0,a.kt)("br",{parentName:"p"}),"\n","Please refer the block diagram setting as below.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ISP Block Diagram",src:i(31341).Z})),(0,a.kt)("p",null,"To follow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Run "W7500',"_",'ISP (20xxxxxx) .exe".  ')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ISP Program",src:i(80732).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"To make WIZwiki-W7500 enter the Boot Mode, supply power once while pressing the SW2,BOOT switch."),"  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Select the device connected to the ISP header from "Serial Port" and\nclick "Open". If you entered Boot Mode successfully, then "Serial Open\nComplete" message will be printed on the status bar at the bottom of\nwindow.  '))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Before click the open button of ISP tool, we suggest you to test it\nin other terminal windows.",(0,a.kt)("br",{parentName:"strong"}),'After opening serial port using the terminal windows,enter the capital\n"U". If it is in the ISP mode, you can see the returned character.'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ISP Program Setting",src:i(82706).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click "Browse" to select the binary file.',(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"ISP Program Binary Select",src:i(23749).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click "ISP Start" button, then the firmware writing will be\nperformed.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the firmware writing completes, the window like below will pop\nup."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ISP Complete",src:i(54507).Z})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-connect-an-external-swd-debugger-to-wizwiki-w7500"},"How to connect an external SWD debugger to WIZwiki-W7500"),(0,a.kt)("p",null,"This page shows how to write and debug firmware in WIZwiki-W7500 with an external SWD debugger. When you need to debug firmware, you have two ways. One is debugging with an external SWD debugger and the other is using the CMSIS-DAP debugger. In this page, how to debug firmware with the SWD debugger is posted only."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"using-the-swd-debugger"},"Using the SWD debugger"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can find SWD Header in the middle of WIZwiki-W7500 and Debugger Sel Jumper with three caps above it.",(0,a.kt)("br",{parentName:"p"}),"\n","Then open the J3, J4, J5 jumper cap in Debugger Sel Jumper.",(0,a.kt)("br",{parentName:"p"}),"\n","Now, your WIZwiki-W7500 is ready to connect the SWD debugger.\n",(0,a.kt)("img",{src:i(86039).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect ULINK debugger and SWD Header. At this moment, be careful of matching pin number.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setting ",(0,a.kt)("a",{parentName:"p",href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"},"Flash Algorithm")," and ULINK debugger in Keil and",(0,a.kt)("br",{parentName:"p"}),"\n","Download on WIZwiki-W7500. Then you can check the success message."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(59774).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(40043).Z})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"reference-1"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"},"How to set Flash Algorithm"))),(0,a.kt)("hr",null))}p.isMDXComponent=!0},60585:function(e,t,i){"use strict";t.Z=i.p+"assets/images/cmsis_debug_1-735323a25e7faa2d7aaffc5cac65ede3.jpg"},41140:function(e,t,i){"use strict";t.Z=i.p+"assets/images/cmsis_debug_2-1-c50d0d1bfdefb8acdf35983e8de68f0c.jpg"},37796:function(e,t,i){"use strict";t.Z=i.p+"assets/images/cmsis_debug_3-1-beeed2970ff5e4736a7ec230e9784e9e.jpg"},8028:function(e,t,i){"use strict";t.Z=i.p+"assets/images/cmsis_debug_4-87e0563f91f297c38f51f4401d41ec9c.jpg"},80732:function(e,t,i){"use strict";t.Z=i.p+"assets/images/isp-d99c8c2773cb153fc3e5c3dbb74cbcbd.png"},31341:function(e,t,i){"use strict";t.Z=i.p+"assets/images/isp_block_2-58c81e7bb7c77d53f841a6f280f278a4.png"},54507:function(e,t,i){"use strict";t.Z=i.p+"assets/images/isp_complete-d58f285a67bbe16016b3372d8bc320a6.png"},82706:function(e,t,i){"use strict";t.Z=i.p+"assets/images/isp_set-c4026973798fe0b5b2acce904a282be5.png"},23749:function(e,t,i){"use strict";t.Z=i.p+"assets/images/isp_start-1bf7055c13fb87d7e1c0a25d42c34348.png"},40043:function(e,t,i){"use strict";t.Z=i.p+"assets/images/set_flash_in_keil-4219575f18a20f318e4b64c41ff4e7c4.png"},59774:function(e,t,i){"use strict";t.Z=i.p+"assets/images/set_ulink_in_keil5-3861c92d8c9c6bd44c39aed252c2fd5e.png"},45176:function(e,t,i){"use strict";t.Z=i.p+"assets/images/drap_n_drop-d54d2406de3f2035c73ef7a42b4c036b.png"},86039:function(e,t,i){"use strict";t.Z=i.p+"assets/images/swd_header_debugger_jumper-12974f2a215d87f003e58ad633a8c9e8.png"}}]);