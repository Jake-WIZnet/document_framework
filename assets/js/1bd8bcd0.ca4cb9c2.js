(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[44222],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||l[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91605:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"w5100s_getting_started",title:"Getting Started with W5100S-EVB",date:new Date("2020-04-09T00:00:00.000Z")},s={unversionedId:"Product/iEthernet/W5100S/w5100s_getting_started",id:"Product/iEthernet/W5100S/w5100s_getting_started",isDocsHomePage:!1,title:"Getting Started with W5100S-EVB",description:"Check the board",source:"@site/docs/Product/iEthernet/W5100S/w5100s_getting_started.md",sourceDirName:"Product/iEthernet/W5100S",slug:"/Product/iEthernet/W5100S/w5100s_getting_started",permalink:"/Product/iEthernet/W5100S/w5100s_getting_started",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/w5100s_getting_started.md",version:"current",frontMatter:{id:"w5100s_getting_started",title:"Getting Started with W5100S-EVB",date:"2020-04-09T00:00:00.000Z"},sidebar:"docs",previous:{title:"W5100S-EVB",permalink:"/Product/iEthernet/W5100S/w5100s_evb"},next:{title:"Make New W5100S-EVB Projects using TrueSTUDIO",permalink:"/Product/iEthernet/W5100S/w5100s_projects_truestudio"}},c=[{value:"Check the board",id:"check-the-board",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"How to upload firmware",id:"how-to-upload-firmware",children:[{value:"Flash programming via UART",id:"flash-programming-via-uart",children:[]}]}],p={toc:c};function l(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"check-the-board"},"Check the board"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you've just purchased W5100S-EVB, let the following points for the\nchecking board check & operation at the first time."),(0,o.kt)("br",{parentName:"p"}),"\n","Connect your board to a PC using USB and connect LAN cable. ",(0,o.kt)("strong",{parentName:"p"},"USB is\nMicro B USB type.")," W5100S-EVB doesn't care uses Micro USB B type or\nDC-JACK(DC-5V)"),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Don't forget: It must be supplied DC-5V"),(0,o.kt)("br",{parentName:"p"}),"\n","The W5100S-EVB can use be Micro USB B type or DC-JACK to the power\nsupply. Users can the choice that one of both."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When users did connect to LAN cable, users should be check\nRJ-45(ethernet connector) LEDs. There are two indicator LEDs in RJ-45.\nOrange LED indicates 100M ACT. Green LED indicates LINK."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"hello-world"},"Hello World"),(0,o.kt)("p",null,'This section is descriptive to W5100S-EVB operation. let the following\npoints for the board operation. W5100S-EVB supported to eclipse loopback\nexample code. Make new W5100S-EVB Project is clicking on this link. If\nyou want to know "How to download the program" click on this link.'),(0,o.kt)("h4",{id:"1-serial-debug-message-print-out"},"1","."," Serial Debug message print out"),(0,o.kt)("p",null,'The board outputs serial "debug" message via Micro B USB port (virtual\nCOM Port). This will give you info about network configuration and\nloopback socket.',(0,o.kt)("br",{parentName:"p"}),"\n","Check the virtual COM port number in your system's properties.",(0,o.kt)("br",{parentName:"p"}),"\n","Please connect with any terminal to that serial port with\n",(0,o.kt)("strong",{parentName:"p"},"115200.8.N.1"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(16909).Z})),(0,o.kt)("h4",{id:"4-loopback-test"},"4","."," Loopback test"),(0,o.kt)("p",null,"If you need detailed figures, please refer to the below link.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(34957).Z})," ",(0,o.kt)("a",{parentName:"p",href:"../../Open-Source-Hardware/cookie#tcp-server-loopback"},"TCP and UDP loopback test")),(0,o.kt)("p",null,"The loopback example runs with a TCP session and a UDP session."),(0,o.kt)("p",null,"First, Board and your PC should have the network config with the same\nnetwork range.",(0,o.kt)("br",{parentName:"p"}),"\n","If you want to modify board-side, edit the following code in\n","[","src",">",">","LB","_","main.c","]"," with the same range which your PC has. If you want\nto modify your PC-side, refer to ",(0,o.kt)("a",{parentName:"p",href:"../../Open-Source-Hardware/cookie#ip-configuration"},"IP configuration"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"wiz_NetInfo gWIZNETINFO = { .mac = {0x00, 0x08, 0xdc,0x00, 0xab, 0xcd}, //<-mac should be unique.\n                            .ip = {192, 168, 11, 15},\n                            .sn = {255,255,255,0},\n                            .gw = {192, 168, 11, 1},\n                            .dns = {168,126,63,1},\n                            .dhcp = NETINFO_STATIC };\n")),(0,o.kt)("h5",{id:"tcp"},"TCP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect to Board ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"../../Open-Source-Hardware/cookie#tcp-server-loopback"},"Hercules test program")," or\nothers, try to connect to board with xxx.xxx.xxx.xxx listen port\n5000."))),(0,o.kt)("li",{parentName:"ol"},"When connected",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"send data to board "),(0,o.kt)("li",{parentName:"ul"},"check whether the loopback data is same to what it sent before."))),(0,o.kt)("li",{parentName:"ol"},"When failed to connect",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check link status."),(0,o.kt)("li",{parentName:"ul"},"Check ping test"),(0,o.kt)("li",{parentName:"ul"},"Check network config."),(0,o.kt)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),(0,o.kt)("h5",{id:"udp"},"UDP"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Send data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"/../../Open-Source-Hardware/cookie#tcp-server-loopback"},"Hercules test program")," or\nothers, send to board's xxx.xxx.xxx.xxx port 3000."))),(0,o.kt)("li",{parentName:"ol"},"When success",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"check to the loopback data"))),(0,o.kt)("li",{parentName:"ol"},"When fail ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check link status."),(0,o.kt)("li",{parentName:"ul"},"Check ping test"),(0,o.kt)("li",{parentName:"ul"},"Check network config."),(0,o.kt)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"firmware"},"Firmware"),(0,o.kt)("p",null,"W5100S-EVB firmware project based on Eclipse IDE. For more details about\nEclipse IDE, please refer to below link."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"}," Download the Libraries and Application example source code for W5100S-EVB "),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(97694).Z}),"(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/W5100S-EVB"},"https://github.com/Wiznet/W5100S-EVB"),")"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-upload-firmware"},"How to upload firmware"),(0,o.kt)("h3",{id:"flash-programming-via-uart"},"Flash programming via UART"),(0,o.kt)("h4",{id:"1-how-to-use-w5100s-evb-isp-mode"},"1","."," How to use W5100S-EVB ISP mode"),(0,o.kt)("p",null,"Press the 'Boot0' push button switch on board until turn on the board\nafter reset or power supply."),(0,o.kt)("h4",{id:"2-run-the-stmicroelectronics-flash-loader-demonstrator"},"2","."," Run the STMicroelectronics Flash loader demonstrator"),(0,o.kt)("p",null,"STMicroelectronics Flash loader demonstrator is a program to perform\nin-system programming (ISP) of the MCU flash via its UART.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(34957).Z})," ",(0,o.kt)("a",{parentName:"p",href:"http://www.st.com/en/development-tools/flasher-stm32.html"},"'ST Flash loader demonstrator' download page")),(0,o.kt)("h4",{id:"3-tool-settings"},"3","."," Tool settings"),(0,o.kt)("p",null,"Set the settings on main window of Flash loader demonstrator program. It\nis easy to set along with each step.",(0,o.kt)("br",{parentName:"p"}),"\n","The figure below shows the default configuration for W5100S-EVB."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(55466).Z})),(0,o.kt)("h4",{id:"4-click-to-next-button"},"4","."," Click to 'Next' button"),(0,o.kt)("p",null,"refer to below pictures If you do not go to the next page in flash\nloader demonstrator, users try again this action. 'Press the 'Boot0'\npush button switch on board until turn on the board after reset or power\nsupply.' ",(0,o.kt)("img",{src:n(11056).Z}),"\n",(0,o.kt)("img",{src:n(24179).Z}),"\n",(0,o.kt)("img",{src:n(23208).Z}),"\n",(0,o.kt)("img",{src:n(47966).Z})),(0,o.kt)("h4",{id:"5-run-the-new-program"},"5","."," Run the new program"),(0,o.kt)("p",null,"After finish to flash programming and board reset, The MCU do running\nthe program",(0,o.kt)("br",{parentName:"p"}),"\n","When the running to loopback program, as below picture serial debug\nmessage print out. ",(0,o.kt)("img",{src:n(16909).Z})),(0,o.kt)("hr",null))}l.isMDXComponent=!0},55466:function(e,t,n){"use strict";t.Z=n.p+"assets/images/flash_down-b854d70f72d487e1b8aad6a1f7199b04.png"},11056:function(e,t,n){"use strict";t.Z=n.p+"assets/images/flash_down2-f830a677f40122b3ef88bafd2469bda6.png"},24179:function(e,t,n){"use strict";t.Z=n.p+"assets/images/flash_down3-994f78b1a427379460bf10ec11bf110a.png"},23208:function(e,t,n){"use strict";t.Z=n.p+"assets/images/flash_down4-13aae15b651ffde03011ec68762126f2.png"},47966:function(e,t,n){"use strict";t.Z=n.p+"assets/images/flash_down5-4175c3ae609d534d00fe2f3a9da6f92d.png"},16909:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAACFCAIAAACSbnl6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA0NSURBVHhe7dpRlhu3DgTQt93sfwF5EAuCIBAg2a0W1Y7rfswBCyBbHomxPc7//vnnn3+JaAveN6J9eN+I9nm7b/970jURXep13/w1O3fl9lzUo0/hfz7oPnjfiPbJ//5mn1H/YQ21CUlYCiRC141fotvTdhOSsBRIBGqEBi2i30rum/90pnX4+Pb5dEBUtZkeMhjwLV8T/Va8b+HTmX5wq09wNZDmVW3SUEzzMFDNE+135r4JqY1GbgC5ZzkKUdXeY+eTRt1Gz0IUEJZEP5T//c3D53Xwqe0/6NWwz6u60h8edk1zop+b/P4mkPi8+kD3BaR5VZvpIeGENBdVTrTf/L6JPpTEaNTYEi1AIlZq77H5SaPGlmiJEKIwYYDoV+Z/nhT8pBJdYnLf5KbxshFdZen3NyK6BO8b0T68b0T78L4R7cP7RrTP675VP4fc+fPJO7yGQB5tNCpCT3uNRgu7vJUZgzO9PkcSaK/RqAlLD8OeNoa7CHjfHhafi+U0PLcrGLRgujcM9GE6gKJq9azVNpVjBG/3rf9+peH3VM/69mtYfC6W0/DcrmDQguneMNCH6QAMWsFgF/WO3TcsQaNGo0ajjrYbjRqNWoivgFCgthBffWKQgEaNRo1GjUa1MINlGnrndgkJATVCgRA0qtlMGO73Dgb64dT0ERTEP0/233RLwndzmnsre6Veya0Wvha2PJpX0vnpIdWAFAaJ50M/43MRlj0/8DjlSSMnhH6ZzvcGJ1DqwH0LLK8GBqq9p3OoxkyVV9Lz09C7cJcvVvjh6kBPQk/TtYf2Myu7/nLJz0tQhCVI7VmIYgxbjIUo4EQeaOO9pVGjUaNRLcxgmYbehbt8scIPVwdWBntT/czKrr/cgfsWvptVnlrcezofq8aqY036uGl44S5fBH1enQBYVqcJ3xofJdJzBocTJPdNpHUI01yEJfjwsTPbezQX1fLD3KTz0/DzXVLb0ueiykU1CVj6cDA/aEGfiDQk78B9E1IDaoQCIWjU0Xa9FzVCgVCgthCFaSNKo0ajRqNGo0ajIR1tNFo4RHuNRkd2oUYoEIJGmb6LLaDRO+01GjVh2UsHprvodd+I6Nt434j24X0j2of3jWgf3jeifXjfiPbhfSPa53Xf7B9PpAiQn1Nt//DYC/Wv5PFrftKoCIO+hXnQ6OxRYjAPYeDxgHfaoB/J7xsK88n7VO3d+d4PniWt0E2X4xmQcDyG5XgGJOzzNPT6gfE87fe33zcRuulyPGNWxs4dBdWwWTycfuWj+ya50ajRqIX4CggFagvx1ScGCWjUaNRo1Gh0RNg1XkL1oBN7F4+CatgsHk6/cv6+VW+tz6Veya0Wvha2PJqvG5/QHzh4RL/X0/Q916iTtgbzEAYeD3A0pd+57OclNhbmT+dQjZkqX9efIImnaROWwXgYy8UD07waNuPDp9vp25Z+f6vIpGchCjiRB9p4b2nUaNRodMR4l+9Ozw8D6XI8Y9K8Gjbjgel2+rbz9y2MVdtP52PVWJqPz1zsjscgzKTL8YxJ82rYjAem2+nbrrlvUtvyk1xUy6O5l4ZmfAKWi8eeOCoNRZ+IdK83HkjPpJ2u+fMkaoQCoUCNUCAUqC1EYdqI0qjRqNGo0ajR6Ih+F46CPgGE6Jo0MRoV56MwfSJCuLJLEqMR/c7rvhHRt/G+Ee3D+0a0D+8b0T68b0T78L4R7cP7RrTP233Tf6Z50rTlWr1L80PDK05vrMiBpk+gCgNtNH0CVRhoo+kTqMJAG41GdA+v+9a/N5ZUb1uaHxpecW7j4svAMh2ePvcPOopuYvW+pd0+FGmehovObax2hRzLdHj63D/oKLqJ0X0z0uq7aSjSPIRYgkaNRo1GLdTqvb4EDkyPPfqsmxwVBo4+mr4q//ubrp+Q+LxPzHQ47FrPw8Dn/MneIKzYAIbNIKzYAIbNIPRCmM7Qr7zdN9Peytf7hHqcmEPDwvLxQNU9zR8YDk+fOHgBtzpqOkA/lN83sLcqFH3urQxL7Wn6nmv0DHVxkfGBabfacrejQjI+kzZb/XmJL/rcmw6HXWFpwnw1VhnMT49KB9ZDb/9RIZkeSzsdu2+iqs10OIRpLvo8DIxVw2keQiynYRiA6S7Rh2EAprtEH6YDdBP5z0tA0/rt9LVZ3AioEQqEoFF9yDnt7Dd9jkTourEEhUDu9TkSoevGEhQCudfnSISuG0tQAFqgEd3D6O9vRHQt3jeifXjfiPbhfSPah/eNaB/eN6J9eN+I9on3Tf/VptHoP6r/BeJXDRqtfUP6FuZBo7NHicE8TAfoJt7uW3jbVt7FO7/Tg9cmrdBNl+MZkHA8huV4BiTs8zT0pgN0H6/7lr5n0zfyzu/0+LWFbrocz5iVsXNHQTVspgN0E5P75smACUlYCiSBz9P6sfMJiajqD4Wjxkuonn5i7+JRUA2b6QDdxOp9C11b9gWkp/mwr6sTql0fqh4H/YMGj+73epq+5xp10tZgHqYDdBP5fZPaaPTO8r6AdKMPq9pYOJ08pz9KEk/TJiyD8TCWiwemeTVspgN0Ewf+/ia1Z6EVAfIAef8VpPYsRCF8/aHxUYceGgbS5XjGpHk1bKYDdBOr9y10+zzd3sNY/9UX4JdhctF4frG78tAwky7HMybNq2EzHaCbeN030X8mLPGtNLcCwtLzrUHdt3yyYjwfuukyPaEPTxyVhqJPRLrXS3fRDb3dNyHvnMESuUAoUCMUVremQpLy3TDZtj6gRghh+bn+wMeDn/oEEKJr0sRoVJyPwvSJCOHiLrqheN9uix8p+g/4A+6b3DReNvpv+GN+fyP6D+B9I9qH941oH943on1434j2ed03/BjQIISwFD5p4y+adrT9pOmd9K8KLxU0KsKgb2EeNFo4SnuNRmdfAN3B231DAX75eGOLbshFn4jFsW8bPFRaoZsuxzMg4XgMy/GMOLdLSJjm9HPlfROWtLcvf5tDLvpELI592/ihobvyC6kOHI9hWe016cD4ZDM9nH5i9b75pQitqfGYdI1Gzy0W4itY3ZoKiUAdwhVhPt2+MiPGj0Z3PCOmA+LcC6BfOXDf0kJIDbou6FA3FhJbttm3p2j1rH0ibClFaC0Ku3CO0fQ916iz0moHvCD0tPGkaaPRqRdAP3TBfTMSpnkQxsIWW1a5QL24cV11IGA5njEr+fSo6YBIQ1Hl9FvH7ptAPXg7By3PHx5YjsIg8QOB5SiOChvT5XjGpPl4b79lOiDSUFQ5/dbh+yZkWbVEn4jBWDovqi0nNppBS4RuuhzPmD6fJosD011Q5fRb5X3zy75lSWiJPhGDsdCqcvDhoY0waInqQMByJRTpWDA9ajog0lD0Cd3B233zEEJYCp+08RdNO9p+0rTRqNEoe6gIYduhNCo2rug3toOVRllohQlJm33T55agALRAo4Vdok/oDl73jYi+jfeNaB/eN6J9eN+I9uF9I9qH941oH943+mO0fwF50PUu+tQrnvt23/TURiNnPfyq9uoi7RW/BF072rify1/bVQfe4ZsWXoMsgz5HInTdaHQkFGF5zuu+paf7MH3e9EVMB07rTw6JLaeT93H5C7vqwG3fscGDQiudTGc+DCG0zvn0vk1d8ipT6QtO9a3vvaoPXf7Crjpw23ds8KDQSifTmQ9DCK1zJvfNS58XXpAJSVgKJELXT5ouCMODvX2rGpbcaNRo1Gj0PMRCfAWrW1MhEahDCD7BAGjUaNRo9H6mQChQIxQIQaNGo0ajRqPnOeDrHrqPzQ1C0KjRqJsHtIKQp2PpzIchhNY5l923avv6AITlwPrGvpUOVwcOct/qa58IW0oRWsbPoICV3LdWchSwnoeBngz4Gat9KHzuW74OQqvte7EQBWD5YQihdc637pupBqb51PpGaQXaeLeY27LKBerFjV41c3keVPMGedX1wkx18jTvjSex/EYIoXXOd/88KaxG7lmOAsJyYH3joTONRu8hWI7CIPEDgeUoetXM5bmQ2rMQReBnxsKYLY/mvUFLoJue9mEIoXXOpz8vqV6E5X0RhLwa661vXD/Ts13V9j5HcmKjqfb+KjfIq663ePI07w1aAt30tA9DCK1zLrtv6fa0gGkuQivou9VR43PM4vbxsT48tBGqmZXct1ZyFKKNJLnocz8QhkHCdMaHYpr3xpNYfiOE0Drndd+EnGg0crThIERXIASNGluiBUiEr8WgFaRdCY1Gs3M8bASNGo0ajeoXoFXTdiiNio0QxoxGjUaNRs+NCAVCgRqhQAgaPQcQCoSgUTcQCg+hfAWEoFGjUXZIn0A6aTT6TijC8py3+3Yrl/zy/h77v13VE7/3SuRk0PUu+tQrnnvf+0aHXPJpuMR9XskN8b4R7cP7RrQP7xvRPrxvRPvwvhHtw/tGtA/vG9E+vG9E+/C+Ee3D/xWAaB/eN6J9eN+I9uF9I9qH941oH943on1434h2+fff/wMNcdf5VkbA+gAAAABJRU5ErkJggg=="},97694:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVQ4T6WT7Q2CMBCGYQJxAnEC3UDcADdgA3UDnUDdgBHcQJlAmEBG0An0fUzPNA3+QJq8SXvcPffREkcDVzwwPjLAWaCZVEon6fEDnMi+lgqpkXIDvLyAVnuUBZCrzqmTfYoNQMZRz3ae8k8MQMZJTwAxUwAb6dAz2Ny3AOht8SegAmADpKfcAY3H1Fn+rRQ6H21mPmAlI9dJRUCXQVW+/ds2gFriDYRXGj4yqxR7Kt2lhgPl8DjGrlQysbKOCsw+1+Ym7QHQZyvtHCyI6zziSxuplQmR/i9SKVUdYSSi1UJiPgy89vvEASNKnbPP4e1TKYlI8lmD/8Y3/gQyn/wkO/QAAAAASUVORK5CYII="},34957:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVQ4T42RjU0CQRBGoQIt4TpQKgAqUCtQKhArkBKkArADqcCjArUD6IAO9L1zJtlAFm6Tl539+b6dmR0O+o1rrr3CPRi38AK7YQ+9gk+4hb0iGMMBRpcMSvE7gkUYPDGvYHPO4FisqByWcVMzuCTWyFIGNYM3zp7BtH25SUGksGZ+hGXNQHebZOOy3hHxN6T5D/GkNDDtCXzAL2xj7Z6/sAG/0XMzcv+QBlmz35SX7oin0AZ+nfc9d88Mu42yYUvWczD1L5jBGnZejpcj/J80OG5YXmhCqEHXsDA/Mai6x+uKu4ZBl3Y5zMBNu+uFcuTLVXGWYFdt2AMYO3qJ06CJDK6YW3AtZ1/OVPMbFdhMy7AkM1lEXJZ1Ev8BtedKUMpzOn4AAAAASUVORK5CYII="}}]);