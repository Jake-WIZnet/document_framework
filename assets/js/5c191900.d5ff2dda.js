"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,c=h["".concat(u,".").concat(m)]||h[m]||s[m]||i;return r?n.createElement(c,l(l({ref:t},d),{},{components:r})):n.createElement(c,l({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[h]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"w5500_ethernet_shield",title:"W5500 Ethernet Shield",date:new Date("2020-04-03T00:00:00.000Z")},l=void 0,o={unversionedId:"Product/Open-Source-Hardware/w5500_ethernet_shield",id:"Product/Open-Source-Hardware/w5500_ethernet_shield",title:"W5500 Ethernet Shield",description:"Overview",source:"@site/docs/Product/Open-Source-Hardware/W5500_Ethernet_Shield.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/w5500_ethernet_shield",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/W5500_Ethernet_Shield.md",tags:[],version:"current",frontMatter:{id:"w5500_ethernet_shield",title:"W5500 Ethernet Shield",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"WizFi310 Shield (Discontinued)",permalink:"/Product/Open-Source-Hardware/wizfi310_shield"},next:{title:"W5500 Ethernet Shield (KOR)",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield_kor"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Available Board List",id:"available-board-list",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Language",id:"language",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Configuration",id:"hardware-configuration",level:2},{value:"Pins usage on Arduino &amp; ARM mbed",id:"pins-usage-on-arduino--arm-mbed",level:2},{value:"SPI Operation &amp; Timing Diagram",id:"spi-operation--timing-diagram",level:2},{value:"Technical Reference",id:"technical-reference",level:2},{value:"Etc.",id:"etc",level:2}],d={toc:p},h="wrapper";function s(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ARM mbed compatible")," operation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Arduino Pin-compatible")),(0,a.kt)("li",{parentName:"ul"},"Ethernet (W5500 Hardwired TCP/IP chip)")),(0,a.kt)("p",null,"W5500 Ethernet shield is designed using the WIZnet W5500 chip. Please\nclick the link for the further information about\n",(0,a.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5500/overview"},"W5500"),". It supports both 3.3V & 5V. This\nEthernet Shield is compatible with Arduino and ARM mbed Platform."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6785).Z,width:"1485",height:"1345"})),(0,a.kt)("h2",{id:"available-board-list"},"Available Board List"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ARM mbed Board",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://os.mbed.com/platforms/"},"ARM mbed Platform")," : ARM\nmbed platform Site"),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://os.mbed.com/platforms/KL25Z/"},"FRDM-KL25Z")," :\nFreescale"),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://os.mbed.com/platforms/NXP-LPC800-MAX/"},"NXP LPC800-MAX"),"\n: NXP"))),(0,a.kt)("li",{parentName:"ul"},"Arduino Board",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://www.arduino.cc/en/Main/Products"},"Arduino board (e.g. the Uno, Mega, Due)")),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://arduino.cc/en/Main/ArduinoBoardLeonardo"},"Arduino Leonardo")))),(0,a.kt)("li",{parentName:"ul"},"Arduino-compatible Board",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://www.seeedstudio.com/wiki/Seeeduino_v3.0"},"Seeeduino v3.0"),"\n: Based on \ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://arduino.cc/en/Main/ArduinoBoardDuemilanove"},"Arduino Duemilanove"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need to update Arduino IDE to use W5500 Ethernet\nshield(",(0,a.kt)("strong",{parentName:"li"},"Required"),")"),(0,a.kt)("li",{parentName:"ul"},"Check the below.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"/Product/Open-Source-Hardware/getting_started_arduino"},"Getting Started"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"language"},"Language"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/Open-Source-Hardware/w5500_ethernet_shield_kor"},"Korean Ver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/Open-Source-Hardware/w5500_ethernet_shield_jp"},"Japanese Ver"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support 3.3V / 5V"),(0,a.kt)("li",{parentName:"ul"},"High Speed Ethernet controller W5500 chip"),(0,a.kt)("li",{parentName:"ul"},"SPI interface"),(0,a.kt)("li",{parentName:"ul"},"Internal 32Kbytes Tx/Rx buffer"),(0,a.kt)("li",{parentName:"ul"},"10/100 Ethernet PHY embedded"),(0,a.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full / Half duplex, 10 / 100-based)"),(0,a.kt)("li",{parentName:"ul"},"Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE"),(0,a.kt)("li",{parentName:"ul"},"User Selectable GPIO pin"),(0,a.kt)("li",{parentName:"ul"},"Support SD-card slot for storage"),(0,a.kt)("li",{parentName:"ul"},"Support I2C, UART interface")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(86109).Z,width:"1182",height:"990"})),(0,a.kt)("h2",{id:"hardware-configuration"},"Hardware Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RJ-45 with Transformer : Ethernet Port"),(0,a.kt)("li",{parentName:"ul"},"W5500 : a Hardwired TCP/IP Ethernet Controller"),(0,a.kt)("li",{parentName:"ul"},"RESET : Reset Ethernet shield and Arduino when pressed"),(0,a.kt)("li",{parentName:"ul"},"SD-Slot : support Micro SD card in FAT16 or FAT32 ; (Please read\n'Caution' below)"),(0,a.kt)("li",{parentName:"ul"},"I2C : I2C interface"),(0,a.kt)("li",{parentName:"ul"},"UART : UART interface")),(0,a.kt)("h2",{id:"pins-usage-on-arduino--arm-mbed"},"Pins usage on Arduino & ARM mbed"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6833).Z,width:"1574",height:"951"})),(0,a.kt)("p",null,"W5500 Ethernet shield has several configurable GPIOs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you operate it with other modules, you may need to change 'Chip\nSelect' pin to a different one."),(0,a.kt)("li",{parentName:"ul"},"W5500 INTn pin is linked to D2 (2,3 Short). So, if you need INTn\npin. You soldering to 0R Resistor to Dx pin")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Caution)")," When the user uses 5V Platform, we cannot confirm a stable\noperation of SD-CARD. Therefore, though 5V Platform is safe to use after\ngoing through enough tests, it is highly recommended to mount buffer &\n100nF Capacitor for a secure operation."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"spi-operation--timing-diagram"},"SPI Operation & Timing Diagram"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SPI Operation")),(0,a.kt)("p",null,"There is a W5500 inside W5500 Ethernet shield. Therefore SPI operation &\nTiming Diagram of Ethernet shield follows one of W5500. For more\ninformation about ",(0,a.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5500/overview"},"W5500")," chip please also refer\nto the chip's datasheet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/w5500_ethernet_shield/limitation_note_-_arp_problem_in_the_nlb_environment_-_korean_0312_.pdf",target:"_blank"},"W5500 Datasheet v1.0.6 - English")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/w5500_ethernet_shield/w5500_ds_v106k_141230.pdf",target:"_blank"},"W5500 Datasheet v1.0.6 - Korean"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Block Diagram")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Not buffer")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(96530).Z,width:"1200",height:"675"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using buffer")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(74069).Z,width:"1400",height:"725"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rev 1.0 Schematic")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch_zip.zip",target:"_blank"},"W5500 Ethernet shield Rev1.0 Schematic(Eagle CAD with PCB file)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch.pdf",target:"_blank"},"W5500 Ethernet shield Rev1.0 Schematic(PDF)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rev 1.1 Schematic")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v1.1.zip",target:"_blank"},"W5500 Ethernet shield Rev1.1 Schematic(Eagle CAD with PCB file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch.pdf",target:"_blank"},"W5500 Ethernet shield Rev1.1 Schematic(PDF)"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rev 1.01","_","Customize Schematic")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Do you want to develop new this product? Please look at the Rev\n1.01_Customize circuit")),(0,a.kt)("li",{parentName:"ul"},"Rev 1.01 removed the buffer ICs from Rev 1.0 circuit"),(0,a.kt)("li",{parentName:"ul"},"Because, Buffer IC was limited delay speed."),(0,a.kt)("li",{parentName:"ul"},"Arduino compatible INT(R25) remove")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v1.01.pdf",target:"_blank"},"W5500 Ethernet shield Rev1.01 Schematic"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Part list")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:r(7270).Z},"W5500 Ethernet shield Rev1.0 Part list"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dimension")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The board size of the W5500 Ethernet shield Rev1.1 is the same as\nRev1.0.")),(0,a.kt)("li",{parentName:"ul"},"W5500 Ethernet shield Rev1.0/1.1 Dimension")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(23571).Z,width:"1381",height:"1133"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"etc"},"Etc."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/Product/Open-Source-Hardware/ethernet_library_for_ioShield_A"},"Ethernet Library for ioShield-A")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"twitter_test"},"Twitter test"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ethernet Library")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZ_Ethernet_Library"},"https://github.com/Wiznet/WIZ_Ethernet_Library"))),(0,a.kt)("hr",null))}s.isMDXComponent=!0},7270:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/w5500_ethernet_shield_v1.0_pl_150414-0791ee844754a7b9cc2f8b1cf2f75d75.xlsx"},6833:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gpio_select_intn-8f8e28032e98c35ac1d46329ae574db7.png"},96530:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5500-ethernet-shield_blockdiagram-c89c669f962c815544062f2a12d82357.gif"},74069:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5500-ethernet-shield_blockdiagram_buffer-9d48956ceda575fdfde4bbe55a4fa3c9.jpg"},23571:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5500-ethernet-shield_dimension-2c640c4529998932c331fe96661f1ee3.png"},86109:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5500_ethernet_pin2-888759c4c71b9fc4bbd2242469570d7a.png"},6785:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/w5500_main_picture2-503b66733a318af37eb0874700a279b8.png"}}]);