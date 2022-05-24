"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[2480],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(r),h=a,m=s["".concat(u,".").concat(h)]||s[h]||c[h]||l;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},58454:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),i=["components"],o={id:"w5500_ethernet_shield_kor",title:"W5500 Ethernet Shield (KOR)",date:new Date("2020-04-03T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/Open-Source-Hardware/w5500_ethernet_shield_kor",id:"Product/Open-Source-Hardware/w5500_ethernet_shield_kor",title:"W5500 Ethernet Shield (KOR)",description:"Overview",source:"@site/docs/Product/Open-Source-Hardware/W5500_Ethernet_Shield_kor.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/w5500_ethernet_shield_kor",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield_kor",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/W5500_Ethernet_Shield_kor.md",tags:[],version:"current",frontMatter:{id:"w5500_ethernet_shield_kor",title:"W5500 Ethernet Shield (KOR)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"W5500 Ethernet Shield",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield"},next:{title:"W5500 \u30a4\u30fc\u30b5\u30cd\u30c3\u30c8\u30b7\u30fc\u30eb\u30c9",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield_jp"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Available Board List",id:"available-board-list",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Language",id:"language",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Configuration",id:"hardware-configuration",level:2},{value:"Pins usage on Arduino &amp; ARM mbed",id:"pins-usage-on-arduino--arm-mbed",level:2},{value:"SPI Operation &amp; Timing Diagram",id:"spi-operation--timing-diagram",level:2},{value:"Technical Reference",id:"technical-reference",level:2},{value:"Etc.",id:"etc",level:2}],s={toc:c};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ARM mbed compatible")," operation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Arduino Pin-compatible")),(0,l.kt)("li",{parentName:"ul"},"Ethernet (W5500 Hardwired TCP/IP chip)")),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(6785).Z,width:"1485",height:"1345"})),(0,l.kt)("p",null,"W5500 Ethernet shield\ub294 W5500 \uae30\ubc18\uc73c\ub85c \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. W5500\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 \ub9c1\ud06c\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.\nW5500 Ethernet shield\ub294 3.3V & 5V \ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc774 Ethernet Shield\ub294 Arduino\nPlatform\uacfc ARM mbed Platform\uc5d0 \ud638\ud658\ub418\uc5b4 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"available-board-list"},"Available Board List"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ARM mbed Board",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://os.mbed.com/platforms/"},"ARM mbed Platform")," : ARM\nmbed platform Site"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://os.mbed.com/platforms/KL25Z/"},"FRDM-KL25Z")," :\nFreescale"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://os.mbed.com/platforms/NXP-LPC800-MAX/"},"NXP LPC800-MAX"),"\n: NXP"))),(0,l.kt)("li",{parentName:"ul"},"Arduino Board",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.arduino.cc/en/Main/Products"},"Arduino board (e.g. the Uno, Mega, Due)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://arduino.cc/en/Main/ArduinoBoardLeonardo"},"Arduino Leonardo")))),(0,l.kt)("li",{parentName:"ul"},"Arduino-compatible Board",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.seeedstudio.com/wiki/Seeeduino_v3.0"},"Seeeduino v3.0"),"\n: Based on ",(0,l.kt)("a",{parentName:"li",href:"http://arduino.cc/en/Main/ArduinoBoardDuemilanove"},"Arduino Duemilanove"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"W5500 Ethernet Shield\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 Arduino IDE (Sketch Program)\uc5d0 \ud3ec\ud568\ub41c\nWIZnet Ethernet Library\uc758 Update\uac00 \ud544\uc694\ud558\ub2e4. (",(0,l.kt)("strong",{parentName:"li"},"\ud544\uc218"),")"),(0,l.kt)("li",{parentName:"ul"},"\uc544\ub798 \ub9c1\ud06c\ub97c \ucc38\uc870\ud558\uae30 \ubc14\ub780\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Follow this URL: ",(0,l.kt)("a",{parentName:"li",href:"/Product/Open-Source-Hardware/getting_started_arduino_kr"},"Getting Started","_","kor"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"language"},"Language"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Product/Open-Source-Hardware/w5500_ethernet_shield"},"Eng.Ver")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Product/Open-Source-Hardware/w5500_ethernet_shield_jp"},"Jp.Ver"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Suppport 3.3V / 5V DC "),(0,l.kt)("li",{parentName:"ul"},"High Speed Ethernet controller W5500 chip"),(0,l.kt)("li",{parentName:"ul"},"User Select GPIO pin"),(0,l.kt)("li",{parentName:"ul"},"SPI interface"),(0,l.kt)("li",{parentName:"ul"},"Internal 32Kbytes Tx/Rx buffer"),(0,l.kt)("li",{parentName:"ul"},"10/100 Ethernet PHY embedded"),(0,l.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full / Half duplex, 10 / 100-based)"),(0,l.kt)("li",{parentName:"ul"},"Hardware TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE"),(0,l.kt)("li",{parentName:"ul"},"Support SD-card slot for storgae"),(0,l.kt)("li",{parentName:"ul"},"Support I2C, UART interface")),(0,l.kt)("h2",{id:"hardware-configuration"},"Hardware Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RJ-45 with Transformer : Ethernet Port"),(0,l.kt)("li",{parentName:"ul"},"W5500 : a hardware TCP/IP Ethernet Controller"),(0,l.kt)("li",{parentName:"ul"},"RESET : Reset Ethernet shield and Arduino when pressed"),(0,l.kt)("li",{parentName:"ul"},"SD-Slot : support Micro SD card in FAT16 or FAT32 ; (Please Read the\nCaution)"),(0,l.kt)("li",{parentName:"ul"},"I2C : interface"),(0,l.kt)("li",{parentName:"ul"},"UART : interface")),(0,l.kt)("h2",{id:"pins-usage-on-arduino--arm-mbed"},"Pins usage on Arduino & ARM mbed"),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(13711).Z,width:"1574",height:"951"})),(0,l.kt)("p",null,"W5500 Ethernet shield is Possible to User Select GPIO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 Chip Select \ubcc0\uacbd\ud558\uc5ec \ub2e4\ub978 Module \uc0ac\uc6a9 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \ubcf4\ub4dc\uc640 \uc911\ucca9\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Caution)")," \uc0ac\uc6a9\uc790\uac00 5V Platform\uc744 \uc0ac\uc6a9\ud560 \ub54c, SD-CARD\ub3d9\uc791\uc758 \ub0ae\uc740 \uc2e0\ub8b0\uc131\uc774 \uc694\uad6c\ub41c\ub2e4. \ud558\uc9c0\ub9cc, \ucda9\ubd84\ud55c\n\ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ud574\ub3c4 \ubb34\ubc29\ud558\ub2e4. \uc2e0\ub8b0\uc131 \uc788\ub294 \ub3d9\uc791\uc744 \uc6d0\ud55c\ub2e4\uba74 buffer\uc640 100nF Capacitor\ub97c \uc2e4\uc7a5\ud558\uc5ec\n\uc0ac\uc6a9\ubc14\ub780\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"spi-operation--timing-diagram"},"SPI Operation & Timing Diagram"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SPI Operation")),(0,l.kt)("p",null,"W5500 Ethernet shield\ub294 W5500 \uae30\ubc18\uc73c\ub85c \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c SPI \ub3d9\uc791 & \ud0c0\uc774\ubc0d \ub4f1\uc740 W5500\nDatasheet\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694. \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \uc6d0\ud558\uc2dc\uba74",(0,l.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5500/overview"},"W5500"),"\uacfc\nDatasheet \ud655\uc778\ud574\uc8fc\uc138\uc694."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/img/products/w5500/w5500_ds_v106e_141230.pdf",target:"_blank"},"W5500 Datasheet v1.0.6 - English")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/img/products/w5500/w5500_ds_v106k_141230.pdf",target:"_blank"},"W5500 Datasheet v1.0.6 - Korean"))),(0,l.kt)("p",null,"-","--"),(0,l.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Block Diagram")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Not buffer")),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(96530).Z,width:"1200",height:"675"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using buffer")),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(74069).Z,width:"1400",height:"725"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Schematic")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch_zip.zip",target:"_blank"},"W5500 Ethernet shield Rev1.0 Schematic(Eagle CAD) with PCB file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch.pdf",target:"_blank"},"W5500 Ethernet shield Rev1.0 Schematic(PDF)"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Part list")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:r(7270).Z},"W5500 Ethernet shield Rev1.0 Part list"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Dimension")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"W5500 Ethernet shield Rev1.0 Dimension")),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(80766).Z,width:"1381",height:"1133"})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"etc"},"Etc."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ethernet shield Library \ucd94\uac00\ud558\uae30")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Product/Open-Source-Hardware/ethernet_library_for_ioShield_A"},"Ethernet Library for ioShield-A"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arduino \uc608\uc81c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"twitter_test"},"Twitter test"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ethernet Library")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZ_Ethernet_Library"},"https://github.com/Wiznet/WIZ_Ethernet_Library"))),(0,l.kt)("hr",null))}h.isMDXComponent=!0},7270:function(e,t,r){t.Z=r.p+"assets/files/w5500_ethernet_shield_v1.0_pl_150414-0791ee844754a7b9cc2f8b1cf2f75d75.xlsx"},13711:function(e,t,r){t.Z=r.p+"assets/images/gpio_select-5d926f41ee5755ad03612c1743dbf237.png"},96530:function(e,t,r){t.Z=r.p+"assets/images/w5500-ethernet-shield_blockdiagram-c89c669f962c815544062f2a12d82357.gif"},74069:function(e,t,r){t.Z=r.p+"assets/images/w5500-ethernet-shield_blockdiagram_buffer-9d48956ceda575fdfde4bbe55a4fa3c9.jpg"},6785:function(e,t,r){t.Z=r.p+"assets/images/w5500_main_picture2-503b66733a318af37eb0874700a279b8.png"},80766:function(e,t,r){t.Z=r.p+"assets/images/w5500_shield_dimension-2c640c4529998932c331fe96661f1ee3.png"}}]);