(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[63215],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,f=p["".concat(u,".").concat(h)]||p[h]||s[h]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8089:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"ioshield_a",title:"ioShield-A",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/Open-Source-Hardware/ioshield_a",id:"Product/Open-Source-Hardware/ioshield_a",isDocsHomePage:!1,title:"ioShield-A",description:"Overview",source:"@site/docs/Product/Open-Source-Hardware/ioShield-A.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/ioshield_a",permalink:"/Product/Open-Source-Hardware/ioshield_a",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/ioShield-A.md",version:"current",frontMatter:{id:"ioshield_a",title:"ioShield-A",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"W5500 \u30a4\u30fc\u30b5\u30cd\u30c3\u30c8\u30b7\u30fc\u30eb\u30c9",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield_jp"},next:{title:"Using WIZnet Ethernet Library for ioShield-A",permalink:"/Product/Open-Source-Hardware/ethernet_library_for_ioShield_A"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Available Board List",id:"available-board-list",children:[]},{value:"Available Resource",id:"available-resource",children:[]}],c={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(50474).Z})," ioShield-A allows an Arduino board to\nconnect to the Internet."),(0,i.kt)("p",null,"It is based on the ",(0,i.kt)("a",{parentName:"p",href:"../ioModule/WIZ550io/overview"},"WIZ550io network module"),"\nwhich uses ",(0,i.kt)("a",{parentName:"p",href:"../iEthernet/W5500/datasheet"},"WIZnet W5500 ethernet chip(W5500\nDatasheet)"),". The WIZnet W5500 provides a\nnetwork (TCP/IP) stack capable of both TCP and UDP. It supports up to\neight simultaneous socket connections. And, when Powered on and nRESET\ntriggered, WIZ550io initializes itself with embedded real MAC and\ndefault IP address and can be pinged from user\u2019s computer."),(0,i.kt)("p",null,"As ioShield uses W5500 chipset, instead of W5100 which was used before\nin the Arduino Ethernet Shield, users needs to use ",(0,i.kt)("a",{parentName:"p",href:"/"},"WIZnet Ethernet\nLibrary"),"."),(0,i.kt)("h2",{id:"available-board-list"},"Available Board List"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arduino Board",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://arduino.cc/en/Main/ArduinoBoardUno"},"Arduino board (e.g. the\nUno)")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://arduino.cc/en/Main/ArduinoBoardLeonardo"},"Arduino\nLeonardo")))),(0,i.kt)("li",{parentName:"ul"},"Arduino-compatible Board",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://www.seeedstudio.com/wiki/Seeeduino_v3.0"},"Seeeduino v3.0"),"\n: Based on \ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://arduino.cc/en/Main/ArduinoBoardDuemilanove"},"Arduino\nDuemilanove"))))),(0,i.kt)("hr",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," Although you have non-AVR\nArduino-compatible board, you could use ioShield Hardware. But you\nshould use adequate S/W libraries for each chipsets. please refer to\neach product's web site.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cookie Board : Based on ARM Cortex-M3/M0\n\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://www.coocox.org/Cookie.html"},"http://www.coocox.org/Cookie.html")),(0,i.kt)("li",{parentName:"ul"},"GR-Sakura Board : Based on Renesas 32-bit RX63N\n\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://www.renesas.com/products/promotion/gr/index.jsp#board"},"http://www.renesas.com/products/promotion/gr/index.jsp#board")),(0,i.kt)("li",{parentName:"ul"},"Chipkit : Based on Microchip PIC series \ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://chipkit.net/"},"http://chipkit.net/"))),(0,i.kt)("blockquote",null),(0,i.kt)("h2",{id:"available-resource"},"Available Resource"),(0,i.kt)("p",null,"All design files and source codes for the ioShield can be found on\nGitHub:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hardware Ver1.0: schematic(",(0,i.kt)("a",{href:"/img/osh/ioshield-a/ioshield-a_v1_0_pl_130904.pdf",target:"_blank"},"PDF file](/img/osh/ioshield-a/ioshield-a.pdf)), schematic & PCB file(",(0,i.kt)("a",{target:"_blank",href:r(60702).Z},"Eagle CAD"),"), Part List([PDF file"),")"),(0,i.kt)("li",{parentName:"ul"},"Hardware Ver1.1: schematic(",(0,i.kt)("a",{href:"/img/osh/ioshield-a/ioshield-a_v1_1_pl_140120.pdf",target:"_blank"},"PDF file](/img/osh/ioshield-a/ioshield-a_v1.1_sch.pdf)), schematic & PCB file(",(0,i.kt)("a",{target:"_blank",href:r(90079).Z},"Eagle CAD"),"), Part List([PDF file"),")"),(0,i.kt)("li",{parentName:"ul"},"Ethernet Library : \ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZ_Ethernet_Library"},"https://github.com/Wiznet/WIZ_Ethernet_Library"))))}d.isMDXComponent=!0},60702:function(e,t,r){"use strict";t.Z=r.p+"assets/files/ioshield-a_eaglecad-81b47fbc4868c45f5d5a20b689a764c6.zip"},90079:function(e,t,r){"use strict";t.Z=r.p+"assets/files/ver1_1-1e00dad010ff95be4ab269432c850f8d.zip"},50474:function(e,t,r){"use strict";t.Z=r.p+"assets/images/io_s_a-7f6aeb17ae1c9d84d6be49055304cfff.png"}}]);