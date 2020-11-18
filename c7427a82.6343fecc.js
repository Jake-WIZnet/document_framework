(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{460:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),l=(r(0),r(582)),i={id:"w5500_ethernet_shield_kor",title:"W5500 Ethernet Shield (KOR)",date:new Date("2020-04-03T00:00:00.000Z")},b={unversionedId:"Product/Open-Source-Hardware/w5500_ethernet_shield_kor",id:"Product/Open-Source-Hardware/w5500_ethernet_shield_kor",isDocsHomePage:!1,title:"W5500 Ethernet Shield (KOR)",description:"Overview",source:"@site/docs\\Product\\Open-Source-Hardware\\W5500_Ethernet_Shield_kor.md",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield_kor",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/W5500_Ethernet_Shield_kor.md",sidebar:"docs",previous:{title:"W5500 Ethernet Shield",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield"},next:{title:"W5500 \u30a4\u30fc\u30b5\u30cd\u30c3\u30c8\u30b7\u30fc\u30eb\u30c9",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield_jp"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Available Board List",id:"available-board-list",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Language",id:"language",children:[]},{value:"Features",id:"features",children:[]},{value:"Hardware Configuration",id:"hardware-configuration",children:[]},{value:"Pins usage on Arduino &amp; ARM mbed",id:"pins-usage-on-arduino--arm-mbed",children:[]},{value:"SPI Operation &amp; Timing Diagram",id:"spi-operation--timing-diagram",children:[]},{value:"Technical Reference",id:"technical-reference",children:[]},{value:"Etc.",id:"etc",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Where to Buy",id:"where-to-buy",children:[]}],o={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"ARM mbed compatible")," operation"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Arduino Pin-compatible")),Object(l.b)("li",{parentName:"ul"},"Ethernet (W5500 Hardwired TCP/IP chip)")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/w5500_ethernet_shield/w5500_main_picture2.png",alt:null}))),Object(l.b)("p",null,"W5500 Ethernet shield\ub294 W5500 \uae30\ubc18\uc73c\ub85c \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. W5500\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 \ub9c1\ud06c\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.\nW5500 Ethernet shield\ub294 3.3V & 5V \ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc774 Ethernet Shield\ub294 Arduino\nPlatform\uacfc ARM mbed Platform\uc5d0 \ud638\ud658\ub418\uc5b4 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),Object(l.b)("h2",{id:"available-board-list"},"Available Board List"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ARM mbed Board",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://developer.mbed.org/platforms/"}),"ARM mbed Platform")," : ARM\nmbed platform Site"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://developer.mbed.org/platforms/KL25Z/"}),"FRDM-KL25Z")," :\nFreescale"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://developer.mbed.org/platforms/NXP-LPC800-MAX/"}),"NXP\nLPC800-MAX"),"\n: NXP"))),Object(l.b)("li",{parentName:"ul"},"Arduino Board",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.arduino.cc/en/Main/Products"}),"Arduino board (e.g. the Uno, Mega,\nDue)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Main/ArduinoBoardLeonardo"}),"Arduino\nLeonardo")))),Object(l.b)("li",{parentName:"ul"},"Arduino-compatible Board",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.seeedstudio.com/wiki/Seeeduino_v3.0"}),"Seeeduino v3.0"),"\n: Based on ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Main/ArduinoBoardDuemilanove"}),"Arduino\nDuemilanove"))))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"getting-started"},"Getting Started"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"W5500 Ethernet Shield\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 Arduino IDE (Sketch Program)\uc5d0 \ud3ec\ud568\ub41c\nWIZnet Ethernet Library\uc758 Update\uac00 \ud544\uc694\ud558\ub2e4. (",Object(l.b)("strong",{parentName:"li"},"\ud544\uc218"),")"),Object(l.b)("li",{parentName:"ul"},"\uc544\ub798 \ub9c1\ud06c\ub97c \ucc38\uc870\ud558\uae30 \ubc14\ub780\ub2e4.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Follow this URL: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"getting_started_arduino_kr"}),"Getting\nStarted","_","kor"))))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"language"},"Language"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"w5500_ethernet_shield"}),"Eng.Ver")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"w5500_ethernet_shield_jp"}),"Jp.Ver"))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Suppport 3.3V / 5V DC "),Object(l.b)("li",{parentName:"ul"},"High Speed Ethernet controller W5500 chip"),Object(l.b)("li",{parentName:"ul"},"User Select GPIO pin"),Object(l.b)("li",{parentName:"ul"},"SPI interface"),Object(l.b)("li",{parentName:"ul"},"Internal 32Kbytes Tx/Rx buffer"),Object(l.b)("li",{parentName:"ul"},"10/100 Ethernet PHY embedded"),Object(l.b)("li",{parentName:"ul"},"Support Auto Negotiation (Full / Half duplex, 10 / 100-based)"),Object(l.b)("li",{parentName:"ul"},"Hardware TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE"),Object(l.b)("li",{parentName:"ul"},"Support SD-card slot for storgae"),Object(l.b)("li",{parentName:"ul"},"Support I2C, UART interface")),Object(l.b)("h2",{id:"hardware-configuration"},"Hardware Configuration"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RJ-45 with Transformer : Ethernet Port"),Object(l.b)("li",{parentName:"ul"},"W5500 : a hardware TCP/IP Ethernet Controller"),Object(l.b)("li",{parentName:"ul"},"RESET : Reset Ethernet shield and Arduino when pressed"),Object(l.b)("li",{parentName:"ul"},"SD-Slot : support Micro SD card in FAT16 or FAT32 ; (Please Read the\nCaution)"),Object(l.b)("li",{parentName:"ul"},"I2C : interface"),Object(l.b)("li",{parentName:"ul"},"UART : interface")),Object(l.b)("h2",{id:"pins-usage-on-arduino--arm-mbed"},"Pins usage on Arduino & ARM mbed"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/w5500_ethernet_shield/gpio_select.png",alt:null}))),Object(l.b)("p",null,"W5500 Ethernet shield is Possible to User Select GPIO"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 Chip Select \ubcc0\uacbd\ud558\uc5ec \ub2e4\ub978 Module \uc0ac\uc6a9 \uac00\ub2a5"),Object(l.b)("li",{parentName:"ul"},"\ub2e4\ub978 \ubcf4\ub4dc\uc640 \uc911\ucca9\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Caution)")," \uc0ac\uc6a9\uc790\uac00 5V Platform\uc744 \uc0ac\uc6a9\ud560 \ub54c, SD-CARD\ub3d9\uc791\uc758 \ub0ae\uc740 \uc2e0\ub8b0\uc131\uc774 \uc694\uad6c\ub41c\ub2e4. \ud558\uc9c0\ub9cc, \ucda9\ubd84\ud55c\n\ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ud574\ub3c4 \ubb34\ubc29\ud558\ub2e4. \uc2e0\ub8b0\uc131 \uc788\ub294 \ub3d9\uc791\uc744 \uc6d0\ud55c\ub2e4\uba74 buffer\uc640 100nF Capacitor\ub97c \uc2e4\uc7a5\ud558\uc5ec\n\uc0ac\uc6a9\ubc14\ub780\ub2e4."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"spi-operation--timing-diagram"},"SPI Operation & Timing Diagram"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"SPI Operation")),Object(l.b)("p",null,"W5500 Ethernet shield\ub294 W5500 \uae30\ubc18\uc73c\ub85c \uc81c\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ubbc0\ub85c SPI \ub3d9\uc791 & \ud0c0\uc774\ubc0d \ub4f1\uc740 W5500\nDatasheet\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694. \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \uc6d0\ud558\uc2dc\uba74",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"../iEthernet/W5500/overview"}),"W5500"),"\uacfc\nDatasheet \ud655\uc778\ud574\uc8fc\uc138\uc694."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/w5500/w5500_ds_v106e_141230.pdf"}),"W5500 Datasheet v1.0.6 -\nEnglish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/w5500/w5500_ds_v106k_141230.pdf"}),"W5500 Datasheet v1.0.6 -\nKorean"))),Object(l.b)("p",null,"-","--"),Object(l.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Block Diagram")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Not buffer")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram.gif",alt:null}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Using buffer")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/w5500_ethernet_shield/w5500-ethernet-shield_blockdiagram_buffer.jpg",alt:null}))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Schematic")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch_zip.zip"}),"W5500 Ethernet shield Rev1.0 Schematic(Eagle CAD) with PCB\nfile")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v10_sch.pdf"}),"W5500 Ethernet shield Rev1.0\nSchematic(PDF)"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Part list")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/img/osh/w5500_ethernet_shield/w5500_ethernet_shield_v1.0_pl_150414.xlsx"}),"W5500 Ethernet shield Rev1.0 Part\nlist"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Dimension")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"W5500 Ethernet shield Rev1.0 Dimension")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/w5500_ethernet_shield/w5500_shield_dimension.png",alt:null}))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"etc"},"Etc."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Ethernet shield Library \ucd94\uac00\ud558\uae30")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"ethernet_library_for_ioShield_A"}),"Ethernet Library for ioShield-A"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arduino \uc608\uc81c")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"twitter_test"}),"Twitter test"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Ethernet Library")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ_Ethernet_Library"}),"https://github.com/Wiznet/WIZ_Ethernet_Library"))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"see-also"},"See Also"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://forum.wiznet.io/"}),"WizWiki\nForum")," : WIZnet Forum for Technical\nsupport and Project shared"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"ethernet_library_for_ioShield_A"}),"Ethernet Library for ioShield-A")," : WIZnet\nWIZ550io Technical support"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/download.png",alt:null}))," Product brief: will be\nadded"),Object(l.b)("hr",null),Object(l.b)("h2",{id:"where-to-buy"},"Where to Buy"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/buynow.png",alt:"WIZnet Online Shop"})),Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.shopwiznet.com/"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/dollar.png",alt:"WIZnetUS Online Shop,\nUSA"}))),"\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://shop.wiznet.eu/"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/european-euro.png",alt:"WIZnetEU Online Shop,\nGermany"}))),"\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://shop.wiznet.co.kr/"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/won.png",alt:"WIZnetKorea Online Shop,\nKorea"})))),Object(l.b)("hr",null))}p.isMDXComponent=!0},582:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(i,".").concat(d)]||u[d]||O[d]||l;return r?a.a.createElement(h,b(b({ref:t},o),{},{components:r})):a.a.createElement(h,b({ref:t},o))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);