(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[83129],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63901:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),l={id:"w6100_evb",title:"W6100-EVB",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iEthernet/W6100/w6100_evb",id:"Product/iEthernet/W6100/w6100_evb",isDocsHomePage:!1,title:"W6100-EVB",description:"- W6100 chip development platform for net-enabled microcontroller",source:"@site/docs/Product/iEthernet/W6100/W6100-EVB.md",sourceDirName:"Product/iEthernet/W6100",slug:"/Product/iEthernet/W6100/w6100_evb",permalink:"/Product/iEthernet/W6100/w6100_evb",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W6100/W6100-EVB.md",version:"current",frontMatter:{id:"w6100_evb",title:"W6100-EVB",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Application Note",permalink:"/Product/iEthernet/W6100/application_note"},next:{title:"Getting Started with the W6100-EVB",permalink:"/Product/iEthernet/W6100/getting_started_w6100evb"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Make New EVB Projects",id:"make-new-evb-projects",children:[]},{value:"Technical Reference",id:"technical-reference",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:s};function p(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"W6100 chip development platform for ",(0,i.kt)("strong",{parentName:"li"},"net-enabled")," microcontroller\napplications",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ethernet (W6100 Hardwired TCP/IP chip) and 32-bit ARM\xae Cortex\u2122-M3\nbased designs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Arduino Pin-compatible")," platform hardware.")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"W6100-EVB is an evaluation board for W6100 chip based on the 32-bit ARM\xae\nCortex\u2122-M3 microcontroller. It is the easy way to develop internet\nconnection for efficient and small embedded systems using W6100,\nWIZnet's hardwired TCP/IP embedded Ethernet controller. It has been\ndesigned to be hardware pin-compatible with 'Arduino shields' for the\n'Arduino UNO Rev3' and other footprint-compatible boards."),(0,i.kt)("p",null,"It is based on the STM STM32F103VCT6 MCU with a 32-bit ARM\xae Cortex\u2122-M3\ncore running at Maximum 72MHz. It includes 256 or 512kB Flash memory,\n64kB SRAM various interfaces, including BUS(Flexible static memory\ncontroller), SPI/SSP, I2C, UART, ADC, PWM and other I/O interfaces.\nAdditionally, Two programmable push button switches, one RGB LED and a\n10/100 Base-Tx RJ-45 connector with an integrated transformer are on\nboard to implement embedded networking applications."),(0,i.kt)("p",null,"The W6100-EVB provides benefits in developing easier and powerful\nnetwork applications on small form-factor and non-OS based embedded\ndevices using the W6100 chip."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(27753).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WIZnet W6100 Hardwired TCP/IP chip")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hardwired TCP/IP embedded Ethernet controller"),(0,i.kt)("li",{parentName:"ul"},"Parallel Host Interface (External BUS Interface)"),(0,i.kt)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface) Microcontroller Interface"),(0,i.kt)("li",{parentName:"ul"},"32kB internal Tx/Rx socket buffer memory (8 socket)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Support SOCKET-less Command: ARP-Request, PING-Request")),(0,i.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),(0,i.kt)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),(0,i.kt)("li",{parentName:"ul"},"Hardwired TCP/IP stack supports TCP, UDP, ",(0,i.kt)("strong",{parentName:"li"},"IPv6"),", IPv4,\n",(0,i.kt)("strong",{parentName:"li"},"ICMPv6"),", ICMPv4, IGMP, ",(0,i.kt)("strong",{parentName:"li"},"MLDv1"),", ARP, PPPoE protocols")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:n(11534).Z})," ",(0,i.kt)("a",{parentName:"li",href:"overview"},"W6100 Product\npage"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STMicroelectronics STM32F103VCT6 MCU")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"32-bit ARM\xae Cortex\u2122-M3 microcontroller running at up to 75MHz"),(0,i.kt)("li",{parentName:"ul"},"256 Kbytes of Flash memory"),(0,i.kt)("li",{parentName:"ul"},"48 Kbytes of SRAM"),(0,i.kt)("li",{parentName:"ul"},"5 \xd7 USARTs"),(0,i.kt)("li",{parentName:"ul"},"4 \xd7 16-bit timers, 2 \xd7 basic timers"),(0,i.kt)("li",{parentName:"ul"},"3 \xd7 SPIs, 2 \xd7 I2Ss, 2 \xd7 I2Cs"),(0,i.kt)("li",{parentName:"ul"},"USB, CAN, 2 \xd7 PWM timers"),(0,i.kt)("li",{parentName:"ul"},"3 \xd7 ADCs, 2 \xd7 DACs, 1 \xd7 SDIO"),(0,i.kt)("li",{parentName:"ul"},"FSMC (100- and 144-pin packages)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:n(34957).Z})," ",(0,i.kt)("a",{parentName:"li",href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"},"STMicroelectronics\nSTM32F103VCT6 Product\npage"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connectors")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1-Channel 10/100Mbps Ethernet Connector (RJ45 with transformer)"),(0,i.kt)("li",{parentName:"ul"},"Virtual COM Port(UART via Micro USB B type) \u2013\n\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"},"CP2104 Drivers\nDownload\nPage")),(0,i.kt)("li",{parentName:"ul"},"Expansion 80 GPIOs (Include analog Peripheral using 12bit ADC)"),(0,i.kt)("li",{parentName:"ul"},"Pin-compatible with Arduino Shields designed for the UNO Rev3"),(0,i.kt)("li",{parentName:"ul"},"Digital pins D0 to D15, Analog inputs A0 to A5, the power header and\nEtc."),(0,i.kt)("li",{parentName:"ul"},"ARM standard debug connector: 5-pin Cortex debug connector for SWD\n(Serial Wire Debug)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Others")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2 x User's Push button switches"),(0,i.kt)("li",{parentName:"ul"},"1 x RGB LED"),(0,i.kt)("li",{parentName:"ul"},"Industrial temperature specified (-40 to +85 degrees Celsius)"),(0,i.kt)("li",{parentName:"ul"},"[","Reset","]"," and ","[","boot0","]"," ISP access push button switch")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Form-factor")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dimension : 90 X 80 X 15(H) (Unit : mm)"),(0,i.kt)("li",{parentName:"ul"},"5V DC power supply"),(0,i.kt)("li",{parentName:"ul"},"GPIO Input Voltage : 0 ","~"," 5V"),(0,i.kt)("li",{parentName:"ul"},"GPIO Output Voltage : 0 ","~"," 3.3V"),(0,i.kt)("li",{parentName:"ul"},"4-layer PCB (FR-4 material, 1.6T, 1oz)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arduino Compatible with SWD Header Pinout")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79106).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"External Pinout (left side)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(39950).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"External Pinout (Right side)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1169).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"firmware"},"Firmware"),(0,i.kt)("p",null,"W6100-EVB firmware project based on Eclipse IDE. For more details about\nEclipse IDE, please refer to below link."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Download the Libraries and\nApplication example source code for W6100-EVB"),"\n",(0,i.kt)("img",{src:n(44964).Z}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/W6100_EVB"},"https://github.com/Wiznet/W6100_EVB")," "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"\ud83c\udf0e",(0,i.kt)("a",{parentName:"p",href:"getting_started_w6100evb"},"Getting Started")),(0,i.kt)("p",null,"\ud83c\udf0e",(0,i.kt)("a",{parentName:"p",href:"getting_started_w6100evb#how-to-upload-firmware"},"How to upload firmware")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"make-new-evb-projects"},"Make New EVB Projects"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It is the same as W5100-EVB")),(0,i.kt)("p",null,"\ud83c\udf0e",(0,i.kt)("a",{parentName:"p",href:"/Product/iEthernet/W6100/new_project_eclipse"},"Make New EVB Projects\nusing Eclipse")),(0,i.kt)("p",null,"\ud83c\udf0e",(0,i.kt)("a",{parentName:"p",href:"/Product/iEthernet/W6100/new_project_truestudio"},"Make New EVB Projects\nusing\nTrueSTUDIO")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Datasheet")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/"},"W6100 Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"},"STMicroelectronics STM32F103VCT6 Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"},"Virtual COM Port: CP2104 COM Port Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"http://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf",target:"_blank"},"SINGLE INVERTER GATE SN74LVC1G04DBVR Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf",target:"_blank"},"Octal D-type transparent latch; 3-state 74HC573PW Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://www.nxp.com/docs/en/data-sheet/74CBTLV3257.pdf",target:"_blank"},"Quad 1-of-2 multiplexer 74CBTLV3257PW Datasheet"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Schematic & Part list")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6100"},"Go to\nGithub"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dimension")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"W6100-EVB Rev1.1 Dimension(unit:mm)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(34543).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.wiznet.io/product-item/w6100"},"WIZnet Website -\nW6100")," : W6100 Chip features,\nPin assignment and Hardware Ref. Design Guide"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://forum.wiznet.io/"},"WizWiki\nForum")," : WIZnet Forum for Technical support\nand Project shared"),(0,i.kt)("hr",null))}p.isMDXComponent=!0},44964:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVQ4T6WT7Q2CMBCGYQJxAnEC3UDcADdgA3UDnUDdgBHcQJlAmEBG0An0fUzPNA3+QJq8SXvcPffREkcDVzwwPjLAWaCZVEon6fEDnMi+lgqpkXIDvLyAVnuUBZCrzqmTfYoNQMZRz3ae8k8MQMZJTwAxUwAb6dAz2Ny3AOht8SegAmADpKfcAY3H1Fn+rRQ6H21mPmAlI9dJRUCXQVW+/ds2gFriDYRXGj4yqxR7Kt2lhgPl8DjGrlQysbKOCsw+1+Ym7QHQZyvtHCyI6zziSxuplQmR/i9SKVUdYSSi1UJiPgy89vvEASNKnbPP4e1TKYlI8lmD/8Y3/gQyn/wkO/QAAAAASUVORK5CYII="},11534:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVQ4T42RjU0CQRBGoQIt4TpQKgAqUCtQKhArkBKkArADqcCjArUD6IAO9L1zJtlAFm6Tl539+b6dmR0O+o1rrr3CPRi38AK7YQ+9gk+4hb0iGMMBRpcMSvE7gkUYPDGvYHPO4FisqByWcVMzuCTWyFIGNYM3zp7BtH25SUGksGZ+hGXNQHebZOOy3hHxN6T5D/GkNDDtCXzAL2xj7Z6/sAG/0XMzcv+QBlmz35SX7oin0AZ+nfc9d88Mu42yYUvWczD1L5jBGnZejpcj/J80OG5YXmhCqEHXsDA/Mai6x+uKu4ZBl3Y5zMBNu+uFcuTLVXGWYFdt2AMYO3qJ06CJDK6YW3AtZ1/OVPMbFdhMy7AkM1lEXJZ1Ev8BtedKUMpzOn4AAAAASUVORK5CYII="},34957:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVQ4T42RjU0CQRBGoQIt4TpQKgAqUCtQKhArkBKkArADqcCjArUD6IAO9L1zJtlAFm6Tl539+b6dmR0O+o1rrr3CPRi38AK7YQ+9gk+4hb0iGMMBRpcMSvE7gkUYPDGvYHPO4FisqByWcVMzuCTWyFIGNYM3zp7BtH25SUGksGZ+hGXNQHebZOOy3hHxN6T5D/GkNDDtCXzAL2xj7Z6/sAG/0XMzcv+QBlmz35SX7oin0AZ+nfc9d88Mu42yYUvWczD1L5jBGnZejpcj/J80OG5YXmhCqEHXsDA/Mai6x+uKu4ZBl3Y5zMBNu+uFcuTLVXGWYFdt2AMYO3qJ06CJDK6YW3AtZ1/OVPMbFdhMy7AkM1lEXJZ1Ev8BtedKUMpzOn4AAAAASUVORK5CYII="},27753:function(e,t,n){"use strict";t.Z=n.p+"assets/images/w6100-evb_callout-d5d88d99555cd8b78d6a8327b849cd58.png"},79106:function(e,t,n){"use strict";t.Z=n.p+"assets/images/w6100-evb_pinout_1-09e4d4e3d62eebce50b7fcbddf327a17.png"},39950:function(e,t,n){"use strict";t.Z=n.p+"assets/images/w6100-evb_pinout_2-948a788361e5a216464b9f97c5721514.png"},1169:function(e,t,n){"use strict";t.Z=n.p+"assets/images/w6100-evb_pinout_3-fab1afd733476ec35ba6031eff59659d.png"},34543:function(e,t,n){"use strict";t.Z=n.p+"assets/images/w6100_wiki_dimension-20f925e8d949483e8f373db2b73d78f6.png"}}]);