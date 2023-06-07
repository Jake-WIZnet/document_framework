"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[5252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,b=p["".concat(d,".").concat(u)]||p[u]||m[u]||l;return n?i.createElement(b,a(a({ref:t},s),{},{components:n})):i.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const l={id:"exercise-1-led-eng",title:"Exercise 1. LED(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},a="Blinking LED",o={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-1-led-eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-1-led-eng",title:"Exercise 1. LED(Eng)",description:"Outline",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise-1.LED-Eng.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-1-led-eng",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-1-led-eng",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise-1.LED-Eng.md",tags:[],version:"current",frontMatter:{id:"exercise-1-led-eng",title:"Exercise 1. LED(Eng)",date:"2020-04-08T00:00:00.000Z"},sidebar:"docs",previous:{title:"Sign-up at ARM mbed(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign-up-at-arm-mbed-eng"},next:{title:"Exercise 2. Serial port(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-2-serial-port-eng"}},d={},c=[{value:"Outline",id:"outline",level:2},{value:"What you need",id:"what-you-need",level:2},{value:"Log on to mbed website",id:"log-on-to-mbed-website",level:2},{value:"Connect the PC with mbed platform board",id:"connect-the-pc-with-mbed-platform-board",level:4},{value:"Open the mbed compiler",id:"open-the-mbed-compiler",level:4},{value:"Example Code",id:"example-code",level:3},{value:"Run exercise and Check test result",id:"run-exercise-and-check-test-result",level:3},{value:"Related Links",id:"related-links",level:2}],s={toc:c},p="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,i.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blinking-led"},"Blinking LED"),(0,r.kt)("h2",{id:"outline"},"Outline"),(0,r.kt)("p",null,"Users can connect the mbed platform board with the PC and compile\nonline. Users can also blink the LED using the example program provided\nfor the platform board."),(0,r.kt)("h2",{id:"what-you-need"},"What you need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WIZwiki-W7500 board"),(0,r.kt)("li",{parentName:"ul"},"USB cable")),(0,r.kt)("h2",{id:"log-on-to-mbed-website"},"Log on to mbed website"),(0,r.kt)("p",null,"Please log on to \ud83c\udf0e",(0,r.kt)("a",{parentName:"p",href:"https://os.mbed.com"},"mbed website"),"mbed website\nfor further testing. If you haven\u2019t signed up yet, please sign up.\n",(0,r.kt)("a",{parentName:"p",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign-up-at-arm-mbed-eng"},"Sign-up at ARM mbed Developer Site")),(0,r.kt)("h4",{id:"connect-the-pc-with-mbed-platform-board"},"Connect the PC with mbed platform board"),(0,r.kt)("p",null,"Connect the PC with WIZwiki-W7500 using the USB cable.\n",(0,r.kt)("img",{src:n(61710).Z,width:"992",height:"584"})," The PC will\nread the driver like a USB driver."),(0,r.kt)("h4",{id:"open-the-mbed-compiler"},"Open the mbed compiler"),(0,r.kt)("p",null,"Click \u201cOpen mbed Compiler\u201d as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92580).Z,width:"1319",height:"901"})),(0,r.kt)("p",null,"A pop-up will appear and \u201cBlinky LED Hello World\u201d will be set as the\ntemplate and \u201cmbed","_","blinky\u201d will be set as the Default program name."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(87262).Z,width:"1308",height:"723"})),(0,r.kt)("p",null,"Click OK and the mbed","_","blinky program will be copied to my Program\nWorkspace."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(66621).Z,width:"1311",height:"379"})),(0,r.kt)("p",null,"Clik the Compile icon from the menu to compile the example code. Success\nmessage will appear below if an error is not occurred during compiling."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(97258).Z,width:"1161",height:"754"})),(0,r.kt)("p",null,"Once compiling is successful, download the\nmbed","_","blinky","_","WIZWIKI-W7500.bin file to the PC."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88842).Z,width:"1165",height:"307"})),(0,r.kt)("h3",{id:"example-code"},"Example Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include "mbed.h"\n\nDigitalOut myled(LED1);\n\nint main(/) {\n    while(1) {\n        myled = 1;\n        wait(0.2);\n        myled = 0;\n        wait(0.2);\n    }\n}\n')),(0,r.kt)("h3",{id:"run-exercise-and-check-test-result"},"Run exercise and Check test result"),(0,r.kt)("p",null,"Copy and paste the mbed","_","blinky","_","WIZWIKI","_","W7500.bin file to the mbed\ndriver (E: or F:) ",(0,r.kt)("img",{src:n(26669).Z,width:"1155",height:"705"})),(0,r.kt)("p",null,"Then press the reset pin. The LED (blue circle) shown in the below image\nwill blink every 0.2 second. ",(0,r.kt)("img",{alt:"WIZwiki-W7500 LED1",src:n(96116).Z,width:"423",height:"699"})),(0,r.kt)("p",null,"If the LED blinks successfully, it means that the example code is\noperating on the WIZwiki-W7500 board. This exercise making the LED blink\nis called \u201cHello World.\u201d"),(0,r.kt)("p",null,"Users can test with different time value of the wait function."),(0,r.kt)("h2",{id:"related-links"},"Related Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-eng"},"Starter Kit Tutorial"))))}m.isMDXComponent=!0},92580:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/105_wizwiki-24eedf13e093a362c30a586c2472c94d.png"},87262:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/106_program_name-ecbddd7bccb2d417cee671e1df3febf4.png"},66621:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/107_mbed_blinky_main-8f8ff3295051525fcb9f5f390a8dcb1a.png"},97258:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/108_compile_end-34f156a066f3325617cc78dc63cfa512.png"},88842:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/109_bin-60250d6f31625f4943232d3eb99c667f.png"},26669:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/110_copy-827488c85db54fa1ddfce6484842c18e.png"},61710:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bd_usb_connected-c34716494f10d73f5b25ae272208caf4.jpg"},96116:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/wizwiki_led1-c183bd633f70fdb5617bc79ad70b4384.png"}}]);