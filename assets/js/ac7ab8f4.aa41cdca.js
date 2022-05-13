"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1915],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51869:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={id:"getting-started-w6100evb",title:"Getting Started with the W6100-EVB",date:new Date("2020-04-03T00:00:00.000Z")},s=void 0,c={unversionedId:"Product/iEthernet/W6100/getting-started-w6100evb",id:"Product/iEthernet/W6100/getting-started-w6100evb",title:"Getting Started with the W6100-EVB",description:"Check the board",source:"@site/docs/Product/iEthernet/W6100/getting-started.md",sourceDirName:"Product/iEthernet/W6100",slug:"/Product/iEthernet/W6100/getting-started-w6100evb",permalink:"/Product/iEthernet/W6100/getting-started-w6100evb",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W6100/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started-w6100evb",title:"Getting Started with the W6100-EVB",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"W6100-EVB",permalink:"/Product/iEthernet/W6100/w6100-evb"},next:{title:"Make New W6100-EVB Projects using TrueSTUDIO",permalink:"/Product/iEthernet/W6100/new-project-truestudio"}},p={},u=[{value:"Check the board",id:"check-the-board",level:2},{value:"Hello World",id:"hello-world",level:2},{value:"1. Serial Debug message print out",id:"1-serial-debug-message-print-out",level:4},{value:"4. Loopback test",id:"4-loopback-test",level:4},{value:"TCP",id:"tcp",level:5},{value:"Firmware",id:"firmware",level:2},{value:"How to upload firmware",id:"how-to-upload-firmware",level:2},{value:"Flash programming via UART",id:"flash-programming-via-uart",level:3},{value:"1. How to use W6100-EVB ISP mode",id:"1-how-to-use-w6100-evb-isp-mode",level:4},{value:"2. Run the STMicroelectronics Flash loader demonstrator",id:"2-run-the-stmicroelectronics-flash-loader-demonstrator",level:4},{value:"3. Tool settings",id:"3-tool-settings",level:4},{value:"4. Click to &#39;Next&#39; button",id:"4-click-to-next-button",level:4},{value:"5. Run the new program",id:"5-run-the-new-program",level:4}],d={toc:u};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"check-the-board"},"Check the board"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you have just purchased W6100-EVB, follow the procedure presented below: "),(0,a.kt)("br",{parentName:"p"}),"\n","Connect your board to a PC using USB and connect LAN cable. ",(0,a.kt)("strong",{parentName:"p"},"USB is\nMicro B USB type.")," W6100-EVB doesn't care uses Micro USB B type or\nDC-JACK(DC-5V) ",(0,a.kt)("strong",{parentName:"p"},"Don't forget: It\nmust be supplied DC-5V"),(0,a.kt)("br",{parentName:"p"}),"\n","The W6100-EVB can use be Micro USB B type or DC-JACK to the power\nsupply. Users can chooseone of these options."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LAN Connector"),(0,a.kt)("br",{parentName:"p"}),"\n","When users did connect to LAN cable, users should be check\nRJ-45(ethernet connector) LEDs. There are two indicator LEDs in RJ-45.\nOrange LED indicates 100M ACT. Green LED indicates LINK."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hello-world"},"Hello World"),(0,a.kt)("p",null,'This section is descriptive to W6100-EVB operation. let the following\npoints for the board operation. W6100-EVB supported to eclipse loopback\nexample code. Make new W6100-EVB Project is clicking on this link. If\nyou want to know "How to download the program" click on this link.'),(0,a.kt)("h4",{id:"1-serial-debug-message-print-out"},"1","."," Serial Debug message print out"),(0,a.kt)("p",null,'The board outputs serial "debug" message via Micro B USB port (virtual\nCOM Port). This will give you info about network configuration and\nloopback socket.',(0,a.kt)("br",{parentName:"p"}),"\n","Check the virtual COM port number in your system's properties.",(0,a.kt)("br",{parentName:"p"}),"\n","Please connect with any terminal to that serial port with\n",(0,a.kt)("strong",{parentName:"p"},"115200.8.N.1"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(48246).Z,width:"316",height:"248"})),(0,a.kt)("h4",{id:"4-loopback-test"},"4","."," Loopback test"),(0,a.kt)("p",null,"If you need detailed figures, please refer\nto the below link.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/"},"TCP and\nUDP loopback\ntest")),(0,a.kt)("p",null,"The loopback example runs with a TCP session and a UDP session."),(0,a.kt)("p",null,"First, Board and your PC should have the network config with the same\nnetwork range.",(0,a.kt)("br",{parentName:"p"}),"\n","If you want to modify board-side, edit the following code in\n","[","src",">",">","LB","_","main.c","]"," with the same range which your PC has. If you want\nto modify your PC-side, refer to ",(0,a.kt)("a",{parentName:"p",href:"/"},"IP\nconfiguration"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"wiz_NetInfo gWIZNETINFO = { .mac = {0x00,0x08,0xdc,0x57,0x57,0x20},\n                            .ip = {192,168,11,16},\n                            .sn = {255, 255, 255, 0},\n                            .gw = {192, 168, 11, 1},\n                            .dns = {8, 8, 8, 8},\n                            .dhcp = NETINFO_STATIC,\n                            .lla = {0xfe,0x80, 0x00,0x00,\n                                 0x00,0x00, 0x00,0x00,\n                                 0x02,0x08, 0xdc,0xff,\n                                 0xfe,0x57, 0x57,0x61},\n                            .gua={0x20,0x01,0x02,0xb8,\n                                 0x00,0x10,0x00,0x01,\n                                 0x02,0x08,0xdc,0xff,\n                                 0xfe,0x57,0x57,0x61},\n                            .sn6={0xff,0xff,0xff,0xff,\n                                 0xff,0xff,0xff,0xff,\n                                 0x00,0x00,0x00, 0x00,\n                                 0x00,0x00,0x00,0x00},\n                            .gw6={0xfe, 0x80, 0x00,0x00,\n                                  0x00,0x00,0x00,0x00,\n                                  0x02,0x00, 0x87,0xff,\n                                  0xfe,0x08, 0x4c,0x81},\n                            };\n\n")),(0,a.kt)("h5",{id:"tcp"},"TCP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Port 5000 : IPv6"),(0,a.kt)("li",{parentName:"ul"},"Port 5001 : IPv4")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect to Board ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("a",{parentName:"li",href:"/"},"Hercules test program")," or\nothers, try to connect to board with xxx.xxx.xxx.xxx listen port\n5000."))),(0,a.kt)("li",{parentName:"ol"},"When connected",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"send data to board "),(0,a.kt)("li",{parentName:"ul"},"check whether the loopback data is same to what it sent before."))),(0,a.kt)("li",{parentName:"ol"},"When failed to connect",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Check link status."),(0,a.kt)("li",{parentName:"ul"},"Check ping test"),(0,a.kt)("li",{parentName:"ul"},"Check network config."),(0,a.kt)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"firmware"},"Firmware"),(0,a.kt)("p",null,"W6100-EVB firmware project based on TrueSTUDIO. For more details about\nTrueSTUDIO, please refer to below link."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download the Libraries and\nApplication example source code for W6100-EVB")),(0,a.kt)("p",null,"\ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/"},"https://github.com/Wiznet/")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-upload-firmware"},"How to upload firmware"),(0,a.kt)("h3",{id:"flash-programming-via-uart"},"Flash programming via UART"),(0,a.kt)("h4",{id:"1-how-to-use-w6100-evb-isp-mode"},"1","."," How to use W6100-EVB ISP mode"),(0,a.kt)("p",null,"Press the 'Boot0' push button switch on board until turn on the board\nafter reset or power supply."),(0,a.kt)("h4",{id:"2-run-the-stmicroelectronics-flash-loader-demonstrator"},"2","."," Run the STMicroelectronics Flash loader demonstrator"),(0,a.kt)("p",null,"STMicroelectronics Flash loader demonstrator is a program to perform\nin-system programming (ISP) of the MCU flash via its UART.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"http://www.st.com/en/development-tools/flasher-stm32.html"},"'ST Flash lodaer\ndemonstrator' download\npage")),(0,a.kt)("h4",{id:"3-tool-settings"},"3","."," Tool settings"),(0,a.kt)("p",null,"Set the settings on main window of Flash loader demonstrator program. It\nis easy to set along with each step.",(0,a.kt)("br",{parentName:"p"}),"\n","The figure below shows the default configuration for W6100-EVB."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(43701).Z,width:"400",height:"521"})),(0,a.kt)("h4",{id:"4-click-to-next-button"},"4","."," Click to 'Next' button"),(0,a.kt)("p",null,"refer to below pictures If you do not go to the next page in flash\nloader demonstrator, users try again this action. 'Press the 'Boot0'\npush button switch on board until turn on the board after reset or power\nsupply.'"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8618).Z,width:"400",height:"521"}),"\n",(0,a.kt)("img",{src:n(19249).Z,width:"400",height:"521"}),"\n",(0,a.kt)("img",{src:n(848).Z,width:"400",height:"521"}),"\n",(0,a.kt)("img",{src:n(329).Z,width:"400",height:"521"}),"\n",(0,a.kt)("img",{src:n(98458).Z,width:"400",height:"521"})),(0,a.kt)("h4",{id:"5-run-the-new-program"},"5","."," Run the new program"),(0,a.kt)("p",null,"After finish to flash programming and board reset, The MCU will be running\nthe program",(0,a.kt)("br",{parentName:"p"}),"\n","When running to loopback program, ie as below picture serial debug\nmessage print out. ",(0,a.kt)("img",{src:n(48246).Z,width:"316",height:"248"})),(0,a.kt)("hr",null))}h.isMDXComponent=!0},43701:function(e,t,n){t.Z=n.p+"assets/images/4-cde79329050311631cccb61d1f82cb80.png"},8618:function(e,t,n){t.Z=n.p+"assets/images/5-773eafe106c8a2abd8c26e9a8860892b.png"},19249:function(e,t,n){t.Z=n.p+"assets/images/6-3a073c218bce76b5c1dc0ed0ecc94639.png"},848:function(e,t,n){t.Z=n.p+"assets/images/7-592e303261cbb9d38841ee5690f1da0a.png"},329:function(e,t,n){t.Z=n.p+"assets/images/8-0ed517076027fe70192c0e39c7216d67.png"},98458:function(e,t,n){t.Z=n.p+"assets/images/9-fbf9fb3a4e91101903b0cf037a0472c1.png"},48246:function(e,t,n){t.Z=n.p+"assets/images/debug_msg-f1487c054041bb242f7426c0d9bbf6d4.jpg"}}]);