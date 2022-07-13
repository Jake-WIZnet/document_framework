"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[8096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=i,k=c["".concat(s,".").concat(u)]||c[u]||w[u]||n;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>w,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(87462),i=(r(67294),r(3905));const n={id:"how-to-start-wizwiki-w7500-board",title:"How to start WIZwiki-W7500 Board",date:new Date("2020-04-07T00:00:00.000Z")},o=void 0,l={unversionedId:"Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-start-wizwiki-w7500-board",id:"Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-start-wizwiki-w7500-board",title:"How to start WIZwiki-W7500 Board",description:"When you get a WIZwiki-W7500 platform board first on your hand, the",source:"@site/docs/Product/Mbed-WIZwiki-Platform/Getting-Started/How_to_start_WIZwiki_W7500_Board.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/Getting-Started",slug:"/Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-start-wizwiki-w7500-board",permalink:"/Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-start-wizwiki-w7500-board",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/Getting-Started/How_to_start_WIZwiki_W7500_Board.md",tags:[],version:"current",frontMatter:{id:"how-to-start-wizwiki-w7500-board",title:"How to start WIZwiki-W7500 Board",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZwiki-W7500-ECO Ethernet Shield",permalink:"/Product/Mbed-WIZwiki-Platform/wizwiki-w7500-eco-shield"},next:{title:"How to install WIZwiki-W7500 serial driver",permalink:"/Product/Mbed-WIZwiki-Platform/Getting-Started/how-to-install-wizwiki-7500-serial-driver"}},s={},d=[{value:"To install the serial driver",id:"to-install-the-serial-driver",level:2},{value:"Hardware self-test",id:"hardware-self-test",level:2}],p={toc:d};function w(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you get a WIZwiki-W7500 platform board first on your hand, the\nserial driver installation and hardware test are needed. Because\nWIZwiki-W7500 uses CMSIS-DAP firmware writing and serial\ncommunicates through UART1 on W7500 (Target MCU).  "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"to-install-the-serial-driver"},"To install the serial driver"),(0,i.kt)("p",null,"To install the serial driver from ARM mbed, please refer to the below\nlink."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"how-to-install-wizwiki-7500-serial-driver"},"How to install WIZwiki-W7500 serial driver"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"hardware-self-test"},"Hardware self-test"),(0,i.kt)("p",null,"WIZwiki-W7500 has a built-in default firmware. You can do self-test with\nthe default firmware as below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"how-to-write-firmware-into-wizwiki-w7500#examples-binary"},"Download WIZwiki-W7500 Examples Binary"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test Sequence")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect Ethernet cable, USB cable to WIZwiki-W7500. If you have a SD\ncard, insert the SD card.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the Device Manager in Control panel and check which COM port is\nallocated to the USB port on WIZwiki-W7500.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Press Reset SW, then LED 'D4' on WIZwiki-W7500 will be turned on. If\nD4 is turned off, then press the Reset SW again."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"<Serial setting>\nBaud rate : 115200\nData bits : 8\nParity : None\nStop bits : 1\nFlow : None\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"  If you have a SD card,\nthe state of D4 will turn like this: White => White Blink => Yellow\nThe following message prints out to the serial port."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Messages in case of a SD card inserted",src:r(83175).Z,width:"600",height:"703"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"If you do not have a SD card,\nD4 of the state will turn like this: White => White Blink => Red\nThe following message prints out to the serial port.\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Message in case of a SD card not inserted",src:r(84795).Z,width:"600",height:"703"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run a command window and proceed with the ping test to\nWIZwiki-W7500.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"WIZwiki-W7500 operates as loopback server.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make proceed with the ping test or loopback test with an IP of\n192.168.077.009 on WIZwiki-W7500."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Necessarily, IP of the PC must also be set to 192.168.077.XXX.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you can do everything well, then your WIZwiki-W7500 doesn't have\nany problem."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w7500/overview/w7500x_wztoe_manu.zip",target:"_blank"},"Hardware test binary download"))))))}w.isMDXComponent=!0},83175:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/wizwiki_serial_ok-b43d97571d95edda51edef229ccd8d33.png"},84795:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/wizwiki_serial_sdcard-9db341370baf27e3c7a9974849fdd6af.png"}}]);