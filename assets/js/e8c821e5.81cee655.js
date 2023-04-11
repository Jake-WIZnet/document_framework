"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1817],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>h});var a=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,a,n=function(t,e){if(null==t)return{};var i,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var i=t.components,n=t.mdxType,r=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(i),s=n,h=c["".concat(p,".").concat(s)]||c[s]||m[s]||r;return i?a.createElement(h,l(l({ref:e},u),{},{components:i})):a.createElement(h,l({ref:e},u))}));function h(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=i.length,l=new Array(r);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:n,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}s.displayName="MDXCreateElement"},81297:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const r={id:"wizfi360-evb-pico",title:"WizFi360-EVB-Pico",date:new Date("2022-12-09T00:00:00.000Z"),keywords:["Raspberry-Pi-Pico","RP2040-Wifi","Wifi","WizFi360"],description:"WizFi360-EVB-Pico made for prototyping and testing Wifi capabilities on RP2040"},l=void 0,o={unversionedId:"Product/Open-Source-Hardware/wizfi360-evb-pico",id:"Product/Open-Source-Hardware/wizfi360-evb-pico",title:"WizFi360-EVB-Pico",description:"WizFi360-EVB-Pico made for prototyping and testing Wifi capabilities on RP2040",source:"@site/docs/Product/Open-Source-Hardware/WizFi360-EVB-Pico.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/wizfi360-evb-pico",permalink:"/Product/Open-Source-Hardware/wizfi360-evb-pico",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/WizFi360-EVB-Pico.md",tags:[],version:"current",frontMatter:{id:"wizfi360-evb-pico",title:"WizFi360-EVB-Pico",date:"2022-12-09T00:00:00.000Z",keywords:["Raspberry-Pi-Pico","RP2040-Wifi","Wifi","WizFi360"],description:"WizFi360-EVB-Pico made for prototyping and testing Wifi capabilities on RP2040"},sidebar:"docs",previous:{title:"RP2040 Based",permalink:"/Product/Open-Source-Hardware/rp2040_based"},next:{title:"W6100-EVB-Pico",permalink:"/Product/iEthernet/W6100/w6100-evb-pico"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Specification",id:"hardware-specification",level:2},{value:"Pin-out",id:"pin-out",level:3},{value:"Operation Condition",id:"operation-condition",level:3},{value:"Electrical Specification",id:"electrical-specification",level:2},{value:"Technical Reference",id:"technical-reference",level:2},{value:"RP2040 Datasheet",id:"rp2040-datasheet",level:3},{value:"WizFi360 Datasheet",id:"wizfi360-datasheet",level:3},{value:"Schematic",id:"schematic",level:3},{value:"Schematic &amp; Part list &amp; Gerber File",id:"schematic--part-list--gerber-file",level:3},{value:"Dimension (Unit : mm)",id:"dimension-unit--mm",level:3},{value:"Firmware Example",id:"firmware-example",level:3},{value:"AWS Qualification",id:"aws-qualification",level:3},{value:"Microsoft Azure Certification",id:"microsoft-azure-certification",level:3},{value:"How to buy",id:"how-to-buy",level:2}],u={toc:d},c="wrapper";function m(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"WizFi360-EVB-Pico is based on Raspberry Pi RP2040 and adds Wi-Fi connectivity using WizFi360. It is pin compatible with Raspberry Pi Pico board and can be used for IoT Solution development."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi Pico Clone"),(0,n.kt)("li",{parentName:"ul"},"Wi-Fi (",(0,n.kt)("a",{parentName:"li",href:"/Product/Wi-Fi-Module/WizFi360/"},"WizFi360"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devices.amazonaws.com/detail/a3G8a00000311vZEAQ/WizFi360-EVB-Pico"},"AWS IoT Core Qualified")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devicecatalog.azure.com/devices/34fb2c62-1d19-45b0-8339-56be64811387"},"Microsoft Azure Device Certified"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WizFi360-EVB-Pico_Main",src:i(59216).Z,width:"1240",height:"618"})),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RP2040 microcontroller with 2MByte Flash",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dual-core cortex M0+ at up to 133MHz"),(0,n.kt)("li",{parentName:"ul"},"264kByte multi-bank high performance SRAM"),(0,n.kt)("li",{parentName:"ul"},"External Quad-SPI Flash with eXecute In Place (XIP)"))),(0,n.kt)("li",{parentName:"ul"},"Includes WizFi360-PA",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WiFi 2.4G, 802.11 b/g/n"),(0,n.kt)("li",{parentName:"ul"},"Support Station / SoftAP / SoftAP+Station operation modes"),(0,n.kt)("li",{parentName:"ul"},"Support \u201cData pass-through\u201d and \u201cAT command data transfer\u201d mode"),(0,n.kt)("li",{parentName:"ul"},"Support serial AT command configuration"),(0,n.kt)("li",{parentName:"ul"},"Support TCP Server / TCP Client / UDP operating mode"),(0,n.kt)("li",{parentName:"ul"},"Support configuration of operating channel 0 ~ 13"),(0,n.kt)("li",{parentName:"ul"},"Support auto 20MHz / 40MHz bandwidth"),(0,n.kt)("li",{parentName:"ul"},"Support WPA_PSK / WPA2_PSK encryption"),(0,n.kt)("li",{parentName:"ul"},"Support built-in unique MAC address and user configurable"),(0,n.kt)("li",{parentName:"ul"},"Industrial grade (operating temperature range: -40 \xb0 C ~ 85 \xb0 C)"),(0,n.kt)("li",{parentName:"ul"},"CE, FCC certification"))),(0,n.kt)("li",{parentName:"ul"},"Includes 16M-bit Flash Memory"),(0,n.kt)("li",{parentName:"ul"},"Micro-USB B port for power and data (and for reprogramming the Flash)"),(0,n.kt)("li",{parentName:"ul"},"40 pin 21x51 'DIP' style 1mm thick PCB with 0.1\" through-hole pins also with edge castellations"),(0,n.kt)("li",{parentName:"ul"},"3-pin ARM Serial Wire Debug (SWD) port"),(0,n.kt)("li",{parentName:"ul"},"Built-in LDO")),(0,n.kt)("h2",{id:"hardware-specification"},"Hardware Specification"),(0,n.kt)("h3",{id:"pin-out"},"Pin-out"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WizFi360-EVB-Pico_Pinout_220405",src:i(89100).Z,width:"1794",height:"1419"})),(0,n.kt)("p",null,"WizFi-EVB-Pico pinout is directly connected to the GPIO of RP2040 as shown in the picture above. It has the same pinout as the Raspberry Pi Pico board. However, GPIO4, GPIO5, GPIO6, GPIO7, GPIO20 are connected to WizFi360 inside the board. These pins enable UART communication with WizFi360 to use Wi-Fi function. If you are using the Wi-Fi function, these pins cannot be used for any other purpose."),(0,n.kt)("p",null,"The RP2040 GPIO used inside WizFi360-EVB-Pico is as follows."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"I/O"),(0,n.kt)("th",{parentName:"tr",align:null},"Pin Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"O"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO4"),(0,n.kt)("td",{parentName:"tr",align:null},"Connected to RXD1 on WizFi360")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO5"),(0,n.kt)("td",{parentName:"tr",align:null},"Connected to TXD1 on WizFi360")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"O"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO6"),(0,n.kt)("td",{parentName:"tr",align:null},"Connected to RTS1 on WizFi360")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO7"),(0,n.kt)("td",{parentName:"tr",align:null},"Connected to CTS1 on WizFi360")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"O"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO20"),(0,n.kt)("td",{parentName:"tr",align:null},"Connected to RST on WizFi360")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO24"),(0,n.kt)("td",{parentName:"tr",align:null},"VBUS sense - high if VBUS is present, else low")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"O"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO25"),(0,n.kt)("td",{parentName:"tr",align:null},"Connected to user LED")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I"),(0,n.kt)("td",{parentName:"tr",align:null},"GPIO29"),(0,n.kt)("td",{parentName:"tr",align:null},"Used in ADC mode (ADC3) to measure VSYS/3")))),(0,n.kt)("p",null,"Apart from GPIO and ground pins, there are 7 other pins on the main 40-pin interface:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pin No."),(0,n.kt)("th",{parentName:"tr",align:null},"Pin Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PIN40"),(0,n.kt)("td",{parentName:"tr",align:null},"VBUS"),(0,n.kt)("td",{parentName:"tr",align:null},"Micro-USB input voltage, connected to micro-USB port pin 1. Nominally 5V.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PIN39"),(0,n.kt)("td",{parentName:"tr",align:null},"VSYS"),(0,n.kt)("td",{parentName:"tr",align:null},"Main system input voltage, which can vary in the allowed range 4.3V to 5.5V, and is used by the on-board LDO to generate the 3.3V .")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PIN37"),(0,n.kt)("td",{parentName:"tr",align:null},"3V3_EN"),(0,n.kt)("td",{parentName:"tr",align:null},"Connects to the on-board LDO enable pin. To disable the 3.3V (which also de-powers the RP2040 and WizFi360), short this pin low.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PIN36"),(0,n.kt)("td",{parentName:"tr",align:null},"3V3"),(0,n.kt)("td",{parentName:"tr",align:null},"Main 3.3V supply to RP2040 and WizFi360, generated by the on-board LDO.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PIN35"),(0,n.kt)("td",{parentName:"tr",align:null},"ADC_VREF"),(0,n.kt)("td",{parentName:"tr",align:null},"ADC power supply (and reference) voltage, and is generated on WizFi360-EVB-Pico by filtering the 3.3V supply.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PIN33"),(0,n.kt)("td",{parentName:"tr",align:null},"AGND"),(0,n.kt)("td",{parentName:"tr",align:null},"Ground reference for GPIO26-29.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PIN30"),(0,n.kt)("td",{parentName:"tr",align:null},"RUN"),(0,n.kt)("td",{parentName:"tr",align:null},"RP2040 enable pin, To reset RP2040, short this pin low.")))),(0,n.kt)("h3",{id:"operation-condition"},"Operation Condition"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operation Temperature MAX"),(0,n.kt)("td",{parentName:"tr",align:null},"85C (including self-heating)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operation Temperature MIN"),(0,n.kt)("td",{parentName:"tr",align:null},"-20C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VBUS"),(0,n.kt)("td",{parentName:"tr",align:null},"DC 5V (+/- 10%)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VSYS Min"),(0,n.kt)("td",{parentName:"tr",align:null},"DC 4.3V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VSYS Max"),(0,n.kt)("td",{parentName:"tr",align:null},"DC 5.5V")))),(0,n.kt)("h2",{id:"electrical-specification"},"Electrical Specification"),(0,n.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,n.kt)("h3",{id:"rp2040-datasheet"},"RP2040 Datasheet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://datasheets.raspberrypi.org/rp2040/rp2040-datasheet.pdf",target:"_blank"},"Download"))),(0,n.kt)("h3",{id:"wizfi360-datasheet"},"WizFi360 Datasheet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/Wi-Fi-Module/WizFi360/documents#datasheet"},"Download"))),(0,n.kt)("h3",{id:"schematic"},"Schematic"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WizFi360-EVB-Pico_SCH_V100-1",src:i(41086).Z,width:"2339",height:"1653"})),(0,n.kt)("h3",{id:"schematic--part-list--gerber-file"},"Schematic & Part list & Gerber File"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/08_OSHW/WizFi360-EVB-Pico"},"Go to Github"))),(0,n.kt)("h3",{id:"dimension-unit--mm"},"Dimension (Unit : mm)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WizFi360-EVB-Pico_V100_Dimension-1",src:i(89730).Z,width:"2339",height:"1653"})),(0,n.kt)("h3",{id:"firmware-example"},"Firmware Example"),(0,n.kt)("p",null,"Please refer to below links to find firmware example."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"C/C++",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WizFi360-EVB-Pico-C"},"Basic Examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WizFi360-EVB-Pico-AWS-C"},"AWS Examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WizFi360-EVB-Pico-AZURE-C"},"Azure Examples")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WizFi360-EVB-Pico-CircuitPython"},"CircuitPython Examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WizFi360-EVB-Pico-MicroPython"},"MicroPython Examples"))),(0,n.kt)("h3",{id:"aws-qualification"},"AWS Qualification"),(0,n.kt)("p",null,"WizFi360-EVB-Pico is RP2040-based device that got AWS IoT Core Qualification."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(50147).Z,width:"501",height:"192"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devices.amazonaws.com/detail/a3G8a00000311vZEAQ/WizFi360-EVB-Pico"},"AWS Partner Device Catalog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/img/products/wizfi360-evb-pico/wizfi360-evb-pico-getting-started-guide-for-aws-iot-core-v1-0-0.pdf",target:"_blank"},"Getting Started with AWS IoT Core"))),(0,n.kt)("h3",{id:"microsoft-azure-certification"},"Microsoft Azure Certification"),(0,n.kt)("p",null,"WizFi360-EVB-Pico is RP2040-based device certified to run with Microsoft Azure."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(64811).Z,width:"300",height:"300"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devicecatalog.azure.com/devices/34fb2c62-1d19-45b0-8339-56be64811387"},"Azure Certified Device Catalog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/img/products/wizfi360-evb-pico/wizfi360-evb-pico-getting-started-guide-for-azure-iot-v1-0-1.pdf",target:"_blank"},"Getting Started for Azure IoT"))),(0,n.kt)("h2",{id:"how-to-buy"},"How to buy"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://eshop.wiznet.io/shop/module/wizfi360-evb-pico/"},(0,n.kt)("img",{alt:"WIZnetUS Online Shop, USA",src:i(97224).Z,width:"40",height:"40"})),"\n",(0,n.kt)("a",{parentName:"p",href:"http://wiznetshop.io/product/detail.html?product_no=1054&cate_no=44&display_group=1"},(0,n.kt)("img",{alt:"WIZnetKorea Online Shop, Korea",src:i(87841).Z,width:"40",height:"40"}))))}m.isMDXComponent=!0},50147:(t,e,i)=>{i.d(e,{Z:()=>a});const a="data:image/png;base64,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"},64811:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/Azure-Certified-Device-Badge_RGB-37dc685e5f76d1caedd2480e08835e79.png"},59216:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/WizFi360-EVB-Pico_Main-9b7c937889c2fa7b853d254b13df5ae1.png"},89100:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/WizFi360-EVB-Pico_Pinout_220405-97312e88e09911a428ae152a94ab940b.png"},41086:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/WizFi360-EVB-Pico_SCH_V100-1-44628336cfa4d71657c04fbf4bf9b8c4.png"},89730:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/WizFi360-EVB-Pico_V100_Dimension-1-0e0a6ac2b32b0e3a825907a7046e0f6f.png"},97224:(t,e,i)=>{i.d(e,{Z:()=>a});const a="data:image/png;base64,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"},87841:(t,e,i)=>{i.d(e,{Z:()=>a});const a="data:image/png;base64,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"}}]);