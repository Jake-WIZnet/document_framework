(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{201:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var i=r(2),n=r(6),a=(r(0),r(582)),o={id:"how_to_write_firmware_into_wizwiki_w7500p",title:"How to write the firmware into WIZwiki-W7500p",date:new Date("2020-04-07T00:00:00.000Z")},b={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_write_firmware_into_wizwiki_w7500p",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_write_firmware_into_wizwiki_w7500p",isDocsHomePage:!1,title:"How to write the firmware into WIZwiki-W7500p",description:"There are four ways to write firmware into.",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500P\\How_to_write_the_firmware_into_WIZwiki_W7500P.md",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_write_firmware_into_wizwiki_w7500p",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/How_to_write_the_firmware_into_WIZwiki_W7500P.md",sidebar:"docs",previous:{title:"How to install WIZwiki-W7500p serial driver",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_install_wizwiki_w7500p_serial_driver"},next:{title:"How to Debug WIZwiki-W7500p",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_debug_wizwiki_w7500p"}},l=[{value:"Examples Binary",id:"examples-binary",children:[]},{value:"Using the CMSIS-DAP (Drag and Drop)",id:"using-the-cmsis-dap-drag-and-drop",children:[]},{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow",children:[]},{value:"Reference",id:"reference",children:[]}]},{value:"Using the ISP",id:"using-the-isp",children:[]},{value:"How to connect an external SWD debugger to WIZwiki-W7500",id:"how-to-connect-an-external-swd-debugger-to-wizwiki-w7500",children:[{value:"Using the SWD debugger",id:"using-the-swd-debugger",children:[]},{value:"Reference",id:"reference-1",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are four ways to write firmware into.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using the CMSIS-DAP (Drag and Drop)"),Object(a.b)("li",{parentName:"ul"},"Using the CMSIS-DAP (through Keil uVision5)"),Object(a.b)("li",{parentName:"ul"},"Go to ISP tool manual & Program download"),Object(a.b)("li",{parentName:"ul"},"Using the SWD Debugger")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"examples-binary"},"Examples Binary"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Hardware test & Loop back binary (WIZwiki-W7500 default binary) :",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/img/products/w7500/overview/w7500x_wztoe_manu.zip"}),"Download")),Object(a.b)("li",{parentName:"ul"},"LED Blink binary :",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/img/products/w7500/overview/wizwki-w7500_led_blink.zip"}),"Download")),Object(a.b)("li",{parentName:"ul"},"Serial Out binary :",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/img/products/w7500/overview/wizwki-w7500_serial_led.zip"}),"Download"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-the-cmsis-dap-drag-and-drop"},"Using the CMSIS-DAP (Drag and Drop)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When you connect the USB cable to the WIZwiki-W7500, PC recognized as a removable disk. Removable disk name is MBED.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'You "drag and drop" or copy the firmware to the removable disk, the firmware writing progress has completed.',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/w7500/overview/drap_n_drop.png",alt:"Drag and drop"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After completing the firmware writing, open to check the removable disk.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'If "fail.txt" file is exists in the removable disk, it means writing the firmware has failed.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After pressing the Reset button (SW1) of WIZwiki- W7500, please repeat the steps from step 2."))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),Object(a.b)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),Object(a.b)("h3",{id:"to-follow"},"To Follow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg",alt:null})),"  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",Object(a.b)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_4.jpg",alt:null}))))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reference"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[Set Flash Algorithm]","( ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"how_to_debug_wizwiki_w7500p#set-flash-algorithm"}),"Set Flash Algorithm"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-the-isp"},"Using the ISP"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"W7500P ISP Program")),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../../iMCU/W7500/documents/appnote/How_to_use_ISP_tool"}),"ISP")),Object(a.b)("p",null,"When W7500P is in the BOOT mode, firmware writing is possible via the\nUSB Cable. As USB Connector supports the UART2 signals, you need to\nconnect between your PC and WIZwiki-W7500P with Mini-USB Cable.",Object(a.b)("br",{parentName:"p"}),"\n","Please refer the block diagram setting as below.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500p/start_getting_started/write_firmware/wizwiki_w7500p_isp.png",alt:"ISP Block Diagram"}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"To follow")),Object(a.b)("p",null,"1",".",' Run "W7500',"_",'ISP (20xxxxxx) .exe"',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"W7500P uses the same as W7500 ISP Program.")," ",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp.png",alt:"ISP Program"}))),Object(a.b)("p",null,"2","."," ",Object(a.b)("strong",{parentName:"p"},"To make WIZwiki-W7500P enter the Boot Mode, supply power once\nwhile pressing the SW2,BOOT switch."),Object(a.b)("br",{parentName:"p"}),"\n","3",".",' Select the device connected to USB Cable from "Serial Port" and\nclick "Open". If you entered Boot Mode successfully, then "Serial Open\nComplete" message will be printed on the status bar at the bottom of\nwindow.  '),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Before click the open button of ISP tool, we suggest you to test it\nin other terminal windows.",Object(a.b)("br",{parentName:"strong"}),'After opening serial port using the terminal windows,enter the capital\n"U". If it is in the ISP mode, you can see the returned character.'))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_set.png",alt:"ISP Program Setting"}))),Object(a.b)("p",null,"4",".",' Click "Browse" to select the binary file.',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_start.png",alt:"ISP Program Binary Select"}))),Object(a.b)("p",null,"5",".",' Click "ISP Start" button, then the firmware writing will be\nperformed.',Object(a.b)("br",{parentName:"p"}),"\n","6","."," After the firmware writing completes, the window like below will pop\nup.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_complete.png",alt:"ISP Complete"}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"how-to-connect-an-external-swd-debugger-to-wizwiki-w7500"},"How to connect an external SWD debugger to WIZwiki-W7500"),Object(a.b)("p",null,"This page shows how to write and debug firmware in WIZwiki-W7500 with an external SWD debugger. When you need to debug firmware, you have two ways. One is debugging with an external SWD debugger and the other is using the CMSIS-DAP debugger. In this page, how to debug firmware with the SWD debugger is posted only."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"using-the-swd-debugger"},"Using the SWD debugger"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You can find SWD Header in the middle of WIZwiki-W7500 and Debugger Sel Jumper with three caps above it.",Object(a.b)("br",{parentName:"p"}),"\n","Then open the J3, J4, J5 jumper cap in Debugger Sel Jumper.",Object(a.b)("br",{parentName:"p"}),"\n","Now, your WIZwiki-W7500 is ready to connect the SWD debugger.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/swd_header_debugger_jumper.png",alt:null})),Object(a.b)("br",{parentName:"p"}),"\n","")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Connect ULINK debugger and SWD Header. At this moment, be careful of matching pin number.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Setting ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Flash Algorithm")," and ULINK debugger in Keil and",Object(a.b)("br",{parentName:"p"}),"\n","Download on WIZwiki-W7500. Then you can check the success message."))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/set_ulink_in_keil5.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/set_flash_in_keil.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reference-1"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"How to set Flash Algorithm"))),Object(a.b)("hr",null))}p.isMDXComponent=!0},582:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},w=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),w=i,m=s["".concat(o,".").concat(w)]||s[w]||u[w]||a;return r?n.a.createElement(m,b(b({ref:t},c),{},{components:r})):n.a.createElement(m,b({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=w;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:i,o[1]=b;for(var c=2;c<a;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}w.displayName="MDXCreateElement"}}]);