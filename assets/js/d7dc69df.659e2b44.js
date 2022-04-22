"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5781],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={id:"getting-started",title:"Getting Started",date:new Date("2020-04-07T00:00:00.000Z")},s=void 0,p={unversionedId:"Product/iEthernet/W5500/W5500-EVB/getting-started",id:"Product/iEthernet/W5500/W5500-EVB/getting-started",title:"Getting Started",description:"Connect your board",source:"@site/docs/Product/iEthernet/W5500/W5500-EVB/Getting-Started.md",sourceDirName:"Product/iEthernet/W5500/W5500-EVB",slug:"/Product/iEthernet/W5500/W5500-EVB/getting-started",permalink:"/Product/iEthernet/W5500/W5500-EVB/getting-started",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/W5500-EVB/Getting-Started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"W5500-EVB",permalink:"/Product/iEthernet/W5500/W5500-EVB/"},next:{title:"Make New Projects",permalink:"/Product/iEthernet/W5500/W5500-EVB/make-new-projects"}},u={},c=[{value:"Connect your board",id:"connect-your-board",level:2},{value:"1. RGB LED blinky",id:"1-rgb-led-blinky",level:4},{value:"2. On/Off the RGB LED blinky",id:"2-onoff-the-rgb-led-blinky",level:4},{value:"3. Serial Debug message print out",id:"3-serial-debug-message-print-out",level:4},{value:"4. Loopback test",id:"4-loopback-test",level:4},{value:"TCP",id:"tcp",level:5},{value:"UDP",id:"udp",level:5},{value:"Firmware",id:"firmware",level:2},{value:"Download a new program",id:"download-a-new-program",level:2},{value:"Flash programming via UART",id:"flash-programming-via-uart",level:3},{value:"1. W5500 EVB enter the ISP mode",id:"1-w5500-evb-enter-the-isp-mode",level:4},{value:"2. Run the Flash Magic tool",id:"2-run-the-flash-magic-tool",level:4},{value:"3. Tool settings",id:"3-tool-settings",level:4},{value:"4. Flash programming start",id:"4-flash-programming-start",level:4},{value:"5. Run the new program",id:"5-run-the-new-program",level:4}],d={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connect-your-board"},"Connect your board"),(0,o.kt)("p",null,"If you've just purchased W5500 EVB, follow below steps to start working with your board for the first time."),(0,o.kt)("p",null,"Connect your board to a PC using USB and connect LAN cable. ",(0,o.kt)("strong",{parentName:"p"},"Don't forget : LAN cable should be\nconnected to the board"),(0,o.kt)("br",{parentName:"p"}),"\n","The W5500 EVB Need to be LAN cable connected because default demo\nfirmware checks the PHY link status periodically. If the LAN cable is not\nconnected, the board will not operate and RGB LED will not be not blinking."),(0,o.kt)("h4",{id:"1-rgb-led-blinky"},"1. RGB LED blinky"),(0,o.kt)("p",null,"If the board operate normal at the first time, On board RGB LED is\nblinking forever. The red, green and blue LEDs are blink alternated."),(0,o.kt)("h4",{id:"2-onoff-the-rgb-led-blinky"},"2. On/Off the RGB LED blinky"),(0,o.kt)("p",null,"The RGB LED status will be changed if the button1 (SW1) pressed (LED\nBlinky On/Off). In this case, the board outputs 'On' or 'Off' message\nvia serial debug port."),(0,o.kt)("h4",{id:"3-serial-debug-message-print-out"},"3. Serial Debug message print out"),(0,o.kt)("p",null,'The board outputs serial "debug" message via USB port (virtual COM\nPort). This will give you info about network configuration and loopback\nsocket.',(0,o.kt)("br",{parentName:"p"}),"\n","Check the the virtual COM port number in your systems properties.",(0,o.kt)("br",{parentName:"p"}),"\n","Please connect with any terminal to that serial port with\n",(0,o.kt)("strong",{parentName:"p"},"115200.8.N.1"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(83777).Z,width:"348",height:"288"})),(0,o.kt)("h4",{id:"4-loopback-test"},"4. Loopback test"),(0,o.kt)("p",null,"The loopback example runs with a TCP session and a UDP session."),(0,o.kt)("p",null,"First, Board and your PC should have the network config with the same\nnetwork range.",(0,o.kt)("br",{parentName:"p"}),"\n","If you want to modify board-side, edit the following code in\n","[","src",">",">","LB","_","main.c","]"," with the same range which your PC has."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"wiz_NetInfo gWIZNETINFO = { .mac = {0x00, 0x08, 0xdc,0x00, 0xab, 0xcd}, //<-mac should be unique.\n                            .ip = {192, 168, 1, 123},\n                            .sn = {255,255,255,0},\n                            .gw = {192, 168, 1, 1},\n                            .dns = {0,0,0,0},\n                            .dhcp = NETINFO_STATIC };\n")),(0,o.kt)("h5",{id:"tcp"},"TCP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect to Board ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://www.hw-group.com/software/hercules-setup-utility"},"Hercules test program")," or\nothers, try to connect to board with xxx.xxx.xxx.xxx listen port\n5000."))),(0,o.kt)("li",{parentName:"ol"},"When connected",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"send data to board "),(0,o.kt)("li",{parentName:"ul"},"check whether the loopback data is same to what it sent before."))),(0,o.kt)("li",{parentName:"ol"},"When failed to connect",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check link status."),(0,o.kt)("li",{parentName:"ul"},"Check ping test"),(0,o.kt)("li",{parentName:"ul"},"Check network config."),(0,o.kt)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),(0,o.kt)("h5",{id:"udp"},"UDP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Send data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://www.hw-group.com/software/hercules-setup-utility"},"Hercules test program")," or\nothers, send to board's xxx.xxx.xxx.xxx port 3000."))),(0,o.kt)("li",{parentName:"ol"},"When success",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"check to the loopback data"))),(0,o.kt)("li",{parentName:"ol"},"When fail ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check link status."),(0,o.kt)("li",{parentName:"ul"},"Check ping test"),(0,o.kt)("li",{parentName:"ul"},"Check network config."),(0,o.kt)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"firmware"},"Firmware"),(0,o.kt)("p",null,"W5500 EVB firmware project based on LPCXpresso IDE. For more details about LPCXpresso IDE, please refer to ",(0,o.kt)("img",{src:n(96703).Z,width:"16",height:"16"})," ",(0,o.kt)("a",{parentName:"p",href:"http://www.lpcware.com/lpcxpresso"},"NXP LPCXpresso platform page"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LPCXpresso IDE Install & Activation Guide"),"\n",(0,o.kt)("img",{src:n(96703).Z,width:"16",height:"16"})," ",(0,o.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5500/W5500-EVB/how-to-install-and-activate-lpcxpresso"},"How to Install and Activate LPCXpresso IDE")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download the Libraries and Application example source code for W5500-EVB")," ",(0,o.kt)("img",{src:n(18896).Z,width:"16",height:"16"})," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/W5500_EVB"},"https://github.com/Wiznet/W5500_EVB")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"download-a-new-program"},"Download a new program"),(0,o.kt)("h3",{id:"flash-programming-via-uart"},"Flash programming via UART"),(0,o.kt)("h4",{id:"1-w5500-evb-enter-the-isp-mode"},"1. W5500 EVB enter the ISP mode"),(0,o.kt)("p",null,"Press the 'ISP' push button switch on board until turn on the board\nafter reset or power supply."),(0,o.kt)("h4",{id:"2-run-the-flash-magic-tool"},"2. Run the Flash Magic tool"),(0,o.kt)("p",null,"Flash Magic is a program to perform in-system programming (ISP) of the\nLPC flash via its UART.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(44376).Z,width:"16",height:"16"}),(0,o.kt)("a",{parentName:"p",href:"http://www.flashmagictool.com/"},"'Flash Magic' download page")),(0,o.kt)("h4",{id:"3-tool-settings"},"3. Tool settings"),(0,o.kt)("p",null,"Set the settings on main window of Flash Magic program. It is easy to\nset along with each step.",(0,o.kt)("br",{parentName:"p"}),"\n","The figure below shows the default configuration for W5500 EVB."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(29601).Z,width:"483",height:"448"})),(0,o.kt)("h4",{id:"4-flash-programming-start"},"4. Flash programming start"),(0,o.kt)("p",null,"Press the 'Start' button on main window of Flash Magic program."),(0,o.kt)("h4",{id:"5-run-the-new-program"},"5. Run the new program"),(0,o.kt)("p",null,"After flash programming and board reset, The MCU is now running the\nprogram;",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(87383).Z,width:"385",height:"233"})),(0,o.kt)("hr",null))}h.isMDXComponent=!0},18896:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVQ4T6WT7Q2CMBCGYQJxAnEC3UDcADdgA3UDnUDdgBHcQJlAmEBG0An0fUzPNA3+QJq8SXvcPffREkcDVzwwPjLAWaCZVEon6fEDnMi+lgqpkXIDvLyAVnuUBZCrzqmTfYoNQMZRz3ae8k8MQMZJTwAxUwAb6dAz2Ny3AOht8SegAmADpKfcAY3H1Fn+rRQ6H21mPmAlI9dJRUCXQVW+/ds2gFriDYRXGj4yqxR7Kt2lhgPl8DjGrlQysbKOCsw+1+Ym7QHQZyvtHCyI6zziSxuplQmR/i9SKVUdYSSi1UJiPgy89vvEASNKnbPP4e1TKYlI8lmD/8Y3/gQyn/wkO/QAAAAASUVORK5CYII="},96703:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVQ4T42RjU0CQRBGoQIt4TpQKgAqUCtQKhArkBKkArADqcCjArUD6IAO9L1zJtlAFm6Tl539+b6dmR0O+o1rrr3CPRi38AK7YQ+9gk+4hb0iGMMBRpcMSvE7gkUYPDGvYHPO4FisqByWcVMzuCTWyFIGNYM3zp7BtH25SUGksGZ+hGXNQHebZOOy3hHxN6T5D/GkNDDtCXzAL2xj7Z6/sAG/0XMzcv+QBlmz35SX7oin0AZ+nfc9d88Mu42yYUvWczD1L5jBGnZejpcj/J80OG5YXmhCqEHXsDA/Mai6x+uKu4ZBl3Y5zMBNu+uFcuTLVXGWYFdt2AMYO3qJ06CJDK6YW3AtZ1/OVPMbFdhMy7AkM1lEXJZ1Ev8BtedKUMpzOn4AAAAASUVORK5CYII="},29601:function(e,t,n){t.Z=n.p+"assets/images/downloading_nxp_flashmagic_3_tempsensor_box-ad8d3a1f6783481201549f141bc00737.jpg"},83777:function(e,t,n){t.Z=n.p+"assets/images/downloading_serial_printout_on_terminal-5aec92264a093f05b30e2987a9131b00.jpg"},87383:function(e,t,n){t.Z=n.p+"assets/images/downloading_serial_printout_on_terminal_tempsensor-01fb26554316b6656d84423dc17aa75d.jpg"},44376:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVQ4T42RjU0CQRBGoQIt4TpQKgAqUCtQKhArkBKkArADqcCjArUD6IAO9L1zJtlAFm6Tl539+b6dmR0O+o1rrr3CPRi38AK7YQ+9gk+4hb0iGMMBRpcMSvE7gkUYPDGvYHPO4FisqByWcVMzuCTWyFIGNYM3zp7BtH25SUGksGZ+hGXNQHebZOOy3hHxN6T5D/GkNDDtCXzAL2xj7Z6/sAG/0XMzcv+QBlmz35SX7oin0AZ+nfc9d88Mu42yYUvWczD1L5jBGnZejpcj/J80OG5YXmhCqEHXsDA/Mai6x+uKu4ZBl3Y5zMBNu+uFcuTLVXGWYFdt2AMYO3qJ06CJDK6YW3AtZ1/OVPMbFdhMy7AkM1lEXJZ1Ev8BtedKUMpzOn4AAAAASUVORK5CYII="}}]);