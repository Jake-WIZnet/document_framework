"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5054],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,k=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(k,d(d({ref:t},c),{},{components:n})):r.createElement(k,d({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,d=new Array(i);d[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,d[1]=a;for(var u=2;u<i;u++)d[u]=n[u];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),d=["components"],a={id:"network-exercise-1-tcp-loopback-eng",title:"Network Exercise 1. TCP loopback(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},l="Testing TCP loopback communication",u={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-eng",title:"Network Exercise 1. TCP loopback(Eng)",description:"Outline",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Network-Exercise-1.TCP-loopback-Eng.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-eng",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Network-Exercise-1.TCP-loopback-Eng.md",tags:[],version:"current",frontMatter:{id:"network-exercise-1-tcp-loopback-eng",title:"Network Exercise 1. TCP loopback(Eng)",date:"2020-04-08T00:00:00.000Z"},sidebar:"docs",previous:{title:"Exercise 7. Photoresistor(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-eng"},next:{title:"Network Exercise 2. LED with TCP(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-eng"}},c={},s=[{value:"Outline",id:"outline",level:2},{value:"What you need",id:"what-you-need",level:2},{value:"Hardware",id:"hardware",level:2},{value:"The Circuit",id:"the-circuit",level:3},{value:"Connections",id:"connections",level:3},{value:"Software",id:"software",level:2},{value:"Test Software",id:"test-software",level:3},{value:"Example Code",id:"example-code",level:3},{value:"How to run and test result",id:"how-to-run-and-test-result",level:3},{value:"Learning Resources",id:"learning-resources",level:2},{value:"Related Links",id:"related-links",level:2}],p={toc:s};function m(e){var t=e.components,a=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing-tcp-loopback-communication"},"Testing TCP loopback communication"),(0,i.kt)("h2",{id:"outline"},"Outline"),(0,i.kt)("p",null,"This is an exercise to test TCP loopback communication. The PC runs as a\nTCP Client and the WIZwiki board runs as a TCP Server. The TCP server\nreturns the messages sent by the TCP client."),(0,i.kt)("p",null,"User can learn how to drive a network using the TOE (TCP/IP Offload\nEngine) of W7500."),(0,i.kt)("h2",{id:"what-you-need"},"What you need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WIZwiki-W7500"),(0,i.kt)("li",{parentName:"ul"},"USB cable"),(0,i.kt)("li",{parentName:"ul"},"LAN cable"),(0,i.kt)("li",{parentName:"ul"},"Hub switch (Router with DHCP function)")),(0,i.kt)("h2",{id:"hardware"},"Hardware"),(0,i.kt)("h3",{id:"the-circuit"},"The Circuit"),(0,i.kt)("p",null,"No special circuit."),(0,i.kt)("h3",{id:"connections"},"Connections"),(0,i.kt)("p",null,"Connect the PC and the router (with DHCP function) with LAN cable.\nConnect the router and the WIZwiki board with LAN cable. Connect the PC\nand the WIZwiki board with USB cable."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3483).Z,width:"381",height:"343"})),(0,i.kt)("h2",{id:"software"},"Software"),(0,i.kt)("h3",{id:"test-software"},"Test Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Terminal program",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"EX) Teraterm, Hercules, Hyperterminal, etc."),(0,i.kt)("li",{parentName:"ul"},"It is for serial port message checking"),(0,i.kt)("li",{parentName:"ul"},"Refer to the next link for the serial port example")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-2-serial-port-eng"},"Exercise 2. Data output using serial port"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TCP/IP Client Server terminal program",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"EX) Hercules, etc."),(0,i.kt)("li",{parentName:"ul"},"It is for transmitting message using the TCP/IP Client Server\nterminal")))),(0,i.kt)("h3",{id:"example-code"},"Example Code"),(0,i.kt)("p",null,"Use the example code in the page below."),(0,i.kt)("p",null,"\ud83c\udf0e",(0,i.kt)("a",{parentName:"p",href:"https://developer.mbed.org/teams/WIZnet/code/TCPEchoServer-WIZwiki-W7500/?platform=WIZwiki-W7500"},"https://developer.mbed.org/teams/WIZnet/code/TCPEchoServer-WIZwiki-W7500/?platform=WIZwiki-W7500")),(0,i.kt)("p",null,'Click on the red part of the "Import this program" section in the figure\nbelow.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5109).Z,width:"1197",height:"845"})),(0,i.kt)("p",null,"A pop-up window will appear as shown below.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:n(43497).Z,width:"400",height:"254"})),(0,i.kt)("p",null,'The "Source URL" and "Import As" have default values. User can change\nthe "Import Name" if one wants. If clicking on the red part of the\n"Import", the program is copied to the mbed compiler environment.'),(0,i.kt)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),(0,i.kt)("p",null,"Execute serial terminal in PC. First push Reset switch of WIZwiki board\nand check messages.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:n(39004).Z,width:"833",height:"513"})),(0,i.kt)("p",null,'Execute Hercules program in PC. Select TCP Client menu and configure the\nIP and Port. Click on the red part of the "Ping" button in the figure\nbelow. ',(0,i.kt)("img",{src:n(49036).Z,width:"629",height:"552"})),(0,i.kt)("p",null,'Click the "Connect" button and check connection.\n',(0,i.kt)("img",{src:n(54642).Z,width:"625",height:"545"})),(0,i.kt)("p",null,"The TCP Client sends a message to WIZwiki board and the WIZwiki board\nsends a reversed message to the TCP client. Check the Loopback message\nas shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(18424).Z,width:"633",height:"548"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97297).Z,width:"829",height:"514"})),(0,i.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,i.kt)("p",null,"The WIZnet team page in the ARM mbed provides mbed libraries and\nexamples for WIZnet products."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"https://developer.mbed.org/teams/WIZnet/"},"WIZnet Team page"))),(0,i.kt)("p",null,"There are mbed libraries below which are used for Hardware TCP/IP chip\n(W5500) and WIZnet TCP/IP Offload Engine (W7500)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"https://developer.mbed.org/teams/WIZnet/code/WIZnetInterface/"},"WIZnetInterface\npage"))),(0,i.kt)("h2",{id:"related-links"},"Related Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-eng"},"Starter Kit Tutorial"))))}m.isMDXComponent=!0},5109:function(e,t,n){t.Z=n.p+"assets/images/ex_tcp_loop_1-3c4c6612576f0c58b6d6bb870210fc6f.jpg"},43497:function(e,t,n){t.Z=n.p+"assets/images/ex_tcp_loop_2-9f905fb04081941a6a004582f5744e93.jpg"},49036:function(e,t,n){t.Z=n.p+"assets/images/ex_tcp_loop_client1-dada27e6ca70a7f245511f0fb4cc779c.jpg"},54642:function(e,t,n){t.Z=n.p+"assets/images/ex_tcp_loop_client2-e3bb3890999a8039def50c593522f569.jpg"},18424:function(e,t,n){t.Z=n.p+"assets/images/ex_tcp_loop_client3-d20a625aa89319149950a80a18e8c819.jpg"},39004:function(e,t,n){t.Z=n.p+"assets/images/ex_tcp_loop_server1-8c4e3d83e786bbe8341b125226123adc.jpg"},97297:function(e,t,n){t.Z=n.p+"assets/images/ex_tcp_loop_server2-6219f3ed4bf5c88e294db016c9aa9b58.jpg"},3483:function(e,t){t.Z="data:image/png;base64,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"}}]);