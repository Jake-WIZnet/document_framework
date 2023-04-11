"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[2602],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"w5100s-evb",title:"W5100S-EVB",date:new Date("2020-04-03T00:00:00.000Z")},l=void 0,o={unversionedId:"Product/iEthernet/W5100S/w5100s-evb",id:"Product/iEthernet/W5100S/w5100s-evb",title:"W5100S-EVB",description:"- W5100S chip development platform for net-enabled microcontroller",source:"@site/docs/Product/iEthernet/W5100S/W5100S-EVB.md",sourceDirName:"Product/iEthernet/W5100S",slug:"/Product/iEthernet/W5100S/w5100s-evb",permalink:"/Product/iEthernet/W5100S/w5100s-evb",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/W5100S-EVB.md",tags:[],version:"current",frontMatter:{id:"w5100s-evb",title:"W5100S-EVB",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"DMA",permalink:"/Product/iEthernet/W5100S/Application-Note/dma"},next:{title:"W5100S-EVB-Pico",permalink:"/Product/iEthernet/W5100S/w5100s-evb-pico"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Firmware",id:"firmware",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Make New W5100S-EVB Projects",id:"make-new-w5100s-evb-projects",level:2},{value:"Technical Reference",id:"technical-reference",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"W5100S chip development platform for ",(0,a.kt)("strong",{parentName:"li"},"net-enabled")," microcontroller\napplications",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ethernet (W5100S Hardwired TCP/IP chip) and 32-bit ARM\xae Cortex\u2122-M3\nbased designs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Arduino Pin-compatible")," platform hardware.")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"W5100S-EVB is an evaluation board for W5100S chip based on the 32-bit\nARM\xae Cortex\u2122-M3 microcontroller. It is the easy way to develop internet\nconnection for efficient and small embedded systems using W5100S,\nWIZnet's hardwired TCP/IP embedded Ethernet controller. It has been\ndesigned to be hardware pin-compatible with 'Arduino shields' for the\n'Arduino UNO Rev3' and other footprint-compatible boards."),(0,a.kt)("p",null,"It is based on the STM STM32F103VCT6 MCU with a 32-bit ARM\xae Cortex\u2122-M3\ncore running at Maximum 72MHz. It includes 256 or 512kB Flash memory,\n64kB SRAM various interfaces, including BUS(Flexible static memory\ncontroller), SPI/SSP, I2C, UART, ADC, PWM and other I/O interfaces.\nAdditionally, Two programmable push button switches, one RGB LED and a\n10/100 Base-Tx RJ-45 connector with an integrated transformer are on\nboard to implement embedded networking applications."),(0,a.kt)("p",null,"The W5100S-EVB provides benefits in developing easier and powerful\nnetwork applications on small form-factor and non-OS based embedded\ndevices using the W5100S chip."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5258).Z,width:"795",height:"850"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WIZnet W5100S Hardwired TCP/IP chip")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hardwired TCP/IP embedded Ethernet controller"),(0,a.kt)("li",{parentName:"ul"},"Parallel Host Interface (External BUS Interface)"),(0,a.kt)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface) Microcontroller Interface"),(0,a.kt)("li",{parentName:"ul"},"16kB internal Tx/Rx socket buffer memory (4 socket)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Support SOCKET-less Command: ARP-Request, PING-Request")),(0,a.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),(0,a.kt)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),(0,a.kt)("li",{parentName:"ul"},"Hardwired TCP/IP stack supports TCP, UDP, WOL over UDP, ICMP,\nIGMPv1/v2, IPv4, ARP,PPPoE protocols"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{src:r(96703).Z,width:"16",height:"16"})," ",(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/overview"},"W5100s Product page"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STMicroelectronics STM32F103VCT6 MCU")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"32-bit ARM\xae Cortex\u2122-M3 microcontroller running at up to 50MHz"),(0,a.kt)("li",{parentName:"ul"},"256 Kbytes of Flash memory"),(0,a.kt)("li",{parentName:"ul"},"48 Kbytes of SRAM"),(0,a.kt)("li",{parentName:"ul"},"5 \xd7 USARTs"),(0,a.kt)("li",{parentName:"ul"},"4 \xd7 16-bit timers, 2 \xd7 basic timers"),(0,a.kt)("li",{parentName:"ul"},"3 \xd7 SPIs, 2 \xd7 I2Ss, 2 \xd7 I2Cs"),(0,a.kt)("li",{parentName:"ul"},"USB, CAN, 2 \xd7 PWM timers"),(0,a.kt)("li",{parentName:"ul"},"3 \xd7 ADCs, 2 \xd7 DACs, 1 \xd7 SDIO"),(0,a.kt)("li",{parentName:"ul"},"FSMC (100- and 144-pin packages)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{src:r(96703).Z,width:"16",height:"16"})," ",(0,a.kt)("a",{parentName:"li",href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"},"STMicroelectronics STM32F103VCT6 Product page"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Connectors")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1-Channel 10/100Mbps Ethernet Connector (RJ45 with transformer)"),(0,a.kt)("li",{parentName:"ul"},"Virtual COM Port(UART via Micro USB B type) \u2013\n",(0,a.kt)("img",{src:r(96703).Z,width:"16",height:"16"})," ",(0,a.kt)("a",{parentName:"li",href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"},"CP2104 Drivers Download Page")),(0,a.kt)("li",{parentName:"ul"},"Expansion 80 GPIOs (Include analog Peripheral using 12bit ADC)"),(0,a.kt)("li",{parentName:"ul"},"Pin-compatible with Arduino Shields designed for the UNO Rev3"),(0,a.kt)("li",{parentName:"ul"},"Digital pins D0 to D15, Analog inputs A0 to A5, the power header and\nEtc."),(0,a.kt)("li",{parentName:"ul"},"ARM standard debug connector: 5-pin Cortex debug connector for SWD\n(Serial Wire Debug)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Others")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 x User's Push button switches"),(0,a.kt)("li",{parentName:"ul"},"1 x RGB LED"),(0,a.kt)("li",{parentName:"ul"},"Industrial temperature specified (-40 to +85 degrees Celsius)"),(0,a.kt)("li",{parentName:"ul"},"[","Reset","]"," and ","[","boot0","]"," ISP access push button switch")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Form-factor")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dimension : 90 X 80 X 15(H) (Unit : mm)"),(0,a.kt)("li",{parentName:"ul"},"5V DC power supply"),(0,a.kt)("li",{parentName:"ul"},"GPIO Input Voltage : 0 ","~"," 5V"),(0,a.kt)("li",{parentName:"ul"},"GPIO Output Voltage : 0 ","~"," 3.3V"),(0,a.kt)("li",{parentName:"ul"},"4-layer PCB (FR-4 material, 1.6T, 1oz)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arduino Compatible with SWD Header Pinout")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(30551).Z,width:"1438",height:"894"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"External Pinout (left side)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(31238).Z,width:"1198",height:"851"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"External Pinout (Right side)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(63905).Z,width:"1534",height:"883"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"firmware"},"Firmware"),(0,a.kt)("p",null,"W5100S-EVB firmware project based on Eclipse IDE. For more details about\nEclipse IDE, please refer to below link. ",(0,a.kt)("strong",{parentName:"p"},"DMA example")," has been added\nto the project."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download the Libraries and Application example source code for W5100S-EVB")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(18896).Z,width:"16",height:"16"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/W5100S-EVB"},"https://github.com/Wiznet/W5100S-EVB")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DMA User Guide")),(0,a.kt)("a",{href:"/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf",target:"_blank"},"W5100S DMA V1.0.0 Korean.pdf"),(0,a.kt)("p",null,"For More information about DMA, click ",(0,a.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/Application-Note/dma"},"DMA")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(96703).Z,width:"16",height:"16"})," ",(0,a.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/w5100s-getting-started"},"Getting Started")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(96703).Z,width:"16",height:"16"})," ",(0,a.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/w5100s-getting-started#how-to-upload-firmware"},"How to upload firmware")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"make-new-w5100s-evb-projects"},"Make New W5100S-EVB Projects"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(96703).Z,width:"16",height:"16"})," ",(0,a.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/w5100s-projects-eclipse"},"Make New W5100S-EVB Projects using Eclipse")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(96703).Z,width:"16",height:"16"})," ",(0,a.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/w5100s-projects-truestudio"},"Make New W5100S-EVB Projects using TrueSTUDIO")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Datasheet")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/document"},"datasheet","#","W5100S Datasheet")),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"},"STMicroelectronics STM32F103VCT6 Datasheet")),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"},"Virtual COM Port:\nCP2104 COM Port Datasheet")),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{href:"http://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf",target:"_blank"},"SINGLE INVERTER GATE SN74LVC1G04DBVR Datasheet")),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{href:"https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf",target:"_blank"},"Octal D-type transparent latch; 3-state 74HC573PW Datasheet")),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{href:"https://www.nxp.com/docs/en/data-sheet/74CBTLV3257.pdf",target:"_blank"},"Quad 1-of-2 multiplexer 74CBTLV3257PW Datasheet"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Schematic & Part list")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S"},"Go to Github"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dimension")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"W5100S-EVB Rev1.0 Dimension(unit:mm)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(87983).Z,width:"856",height:"905"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0},18896:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVQ4T6WT7Q2CMBCGYQJxAnEC3UDcADdgA3UDnUDdgBHcQJlAmEBG0An0fUzPNA3+QJq8SXvcPffREkcDVzwwPjLAWaCZVEon6fEDnMi+lgqpkXIDvLyAVnuUBZCrzqmTfYoNQMZRz3ae8k8MQMZJTwAxUwAb6dAz2Ny3AOht8SegAmADpKfcAY3H1Fn+rRQ6H21mPmAlI9dJRUCXQVW+/ds2gFriDYRXGj4yqxR7Kt2lhgPl8DjGrlQysbKOCsw+1+Ym7QHQZyvtHCyI6zziSxuplQmR/i9SKVUdYSSi1UJiPgy89vvEASNKnbPP4e1TKYlI8lmD/8Y3/gQyn/wkO/QAAAAASUVORK5CYII="},96703:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVQ4T42RjU0CQRBGoQIt4TpQKgAqUCtQKhArkBKkArADqcCjArUD6IAO9L1zJtlAFm6Tl539+b6dmR0O+o1rrr3CPRi38AK7YQ+9gk+4hb0iGMMBRpcMSvE7gkUYPDGvYHPO4FisqByWcVMzuCTWyFIGNYM3zp7BtH25SUGksGZ+hGXNQHebZOOy3hHxN6T5D/GkNDDtCXzAL2xj7Z6/sAG/0XMzcv+QBlmz35SX7oin0AZ+nfc9d88Mu42yYUvWczD1L5jBGnZejpcj/J80OG5YXmhCqEHXsDA/Mai6x+uKu4ZBl3Y5zMBNu+uFcuTLVXGWYFdt2AMYO3qJ06CJDK6YW3AtZ1/OVPMbFdhMy7AkM1lEXJZ1Ev8BtedKUMpzOn4AAAAASUVORK5CYII="},30551:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/arduino_swd_pinout-6dd964d0354541e6aa999bfee62d903a.png"},31238:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/expansion_pinout_left_v3-0c83eddd276bc8f4af413d9f7e50cb79.png"},63905:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/expansion_pinout_right_v3-06712f1ef8b750365707af62baa36920.png"},87983:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5100s-evb_dimension-8e3a51d7e2e8d307f6788fdac5dc26d3.png"},5258:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5100s-evb_partdescription-4acac870af3c52e6da2d6e5b20907f9e.png"}}]);