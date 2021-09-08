(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[92983],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},19013:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],l={id:"overview-EN",title:"Product Overview [EN]",date:new Date("2020-04-16T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/S2E-Module/WIZ550SR/overview-EN",id:"Product/S2E-Module/WIZ550SR/overview-EN",isDocsHomePage:!1,title:"Product Overview [EN]",description:"Overview",source:"@site/docs/Product/S2E-Module/WIZ550SR/Overview-[EN].md",sourceDirName:"Product/S2E-Module/WIZ550SR",slug:"/Product/S2E-Module/WIZ550SR/overview-EN",permalink:"/Product/S2E-Module/WIZ550SR/overview-EN",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ550SR/Overview-[EN].md",tags:[],version:"current",frontMatter:{id:"overview-EN",title:"Product Overview [EN]",date:"2020-04-16T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ550SR",permalink:"/Product/S2E-Module/WIZ550SR/wiz550sr"},next:{title:"Product Overview [KO]",permalink:"/Product/S2E-Module/WIZ550SR/overview-KO"}},m=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]}],c={toc:m};function s(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"WIZ550SR Overview",src:r(80192).Z})),(0,i.kt)("p",null,"WIZ550SR is Serial to Ethernet module, It's mounted TCP/IP chip W5500 of\nWIZnet and Cortex-M3-based STM32F103RCT6 of STmicro. WIZ550SR does not\ncontain RJ45 because very small size type. WIZ550SR provides the user\nInterface 2.00mm Pitch Pin header."),(0,i.kt)("p",null,"WIZ550SR is the protocol converter that transmits the data sent by\nserial equipment as TCP/IP data type, and converts back the TCP/IP data\nreceived through the network into serial data to transmit back to a\nserial equipment. It complies with industrial temperature standard and\nsupports the serial interfaces of UART."),(0,i.kt)("p",null,"WIZ550SR is is compatible with the Configuration Tool of WIZ550S2E and\nWIZ550WEB, and will use the same AT Command."),(0,i.kt)("p",null,"However, Configuration Tool must use the latest version."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Very small size Serial to Ethernet Module. 22mm x 24mm x 13mm."),(0,i.kt)("li",{parentName:"ul"},"WIZnet, TCP/IP Chip ",(0,i.kt)("strong",{parentName:"li"},"W5500"),"."),(0,i.kt)("li",{parentName:"ul"},"STmicro, Cortex-M3 based STM32F103RCT6."),(0,i.kt)("li",{parentName:"ul"},"Not include a transformer and RJ45."),(0,i.kt)("li",{parentName:"ul"},"2.00mm Pitch Pin Header Type, 1x11."),(0,i.kt)("li",{parentName:"ul"},"Support the ",(0,i.kt)("strong",{parentName:"li"},"MDI"),"(Medium Dependent Interface).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TXN, TXP, RXN, RXP"))),(0,i.kt)("li",{parentName:"ul"},"Support the ",(0,i.kt)("strong",{parentName:"li"},"UART")," Interface.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)"),(0,i.kt)("li",{parentName:"ul"},"Buad Rate : 600bps to 230.4kbps"),(0,i.kt)("li",{parentName:"ul"},"Length : 8bit"),(0,i.kt)("li",{parentName:"ul"},"Parity bit : None, Odd, Even"),(0,i.kt)("li",{parentName:"ul"},"Stop bit : 1bit, 2bit"),(0,i.kt)("li",{parentName:"ul"},"Support the RS-232C Interface."),(0,i.kt)("li",{parentName:"ul"},"Will be supported the RS-422/485 Interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Default : 115200, 8, n, 1")))),(0,i.kt)("li",{parentName:"ul"},"Support the Debug UART.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DEBUG RXD, DEBUG TXD"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Default : 115200, 8, n, 1")))),(0,i.kt)("li",{parentName:"ul"},"Support the PHY Status Output.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Active LED, Link LED"))),(0,i.kt)("li",{parentName:"ul"},"Support the STATUS Output.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"LOW : TCP Connect."),(0,i.kt)("li",{parentName:"ul"},"HIGH : TCP Diconnect."))),(0,i.kt)("li",{parentName:"ul"},"System Pin.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RESET : System Reset, Active Low."),(0,i.kt)("li",{parentName:"ul"},"BOOT0 : MCU BOOT mode operation, Active High."),(0,i.kt)("li",{parentName:"ul"},"H/W TRIG : App BOOT mode operation, Active Low."))),(0,i.kt)("li",{parentName:"ul"},"Support the Indicator LED.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Power LED(LD3)."),(0,i.kt)("li",{parentName:"ul"},"LED 0(LD1) : "),(0,i.kt)("li",{parentName:"ul"},"LED 1(LD2) : "))),(0,i.kt)("li",{parentName:"ul"},"Support the Pin Header Hole for firmware upload.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"2.54mm Pitch, Not Mount."))),(0,i.kt)("li",{parentName:"ul"},"Support the Pin Header Hole for SWD.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1.27mm Pitch, Not Mount."))),(0,i.kt)("li",{parentName:"ul"},"Include eeprom for data storage."),(0,i.kt)("li",{parentName:"ul"},"Support the AT Command for the set of WIZ550SR."),(0,i.kt)("li",{parentName:"ul"},"Support the WIZ VSP (Virtual Serial Port)."),(0,i.kt)("li",{parentName:"ul"},"Operation Temperature : -40\u2103 ","~"," 85\u2103"),(0,i.kt)("li",{parentName:"ul"},"Size : 22mm x 24mm x 13mm")))}s.isMDXComponent=!0},80192:function(e,t,r){"use strict";t.Z=r.p+"assets/images/wiz550sr_overview-3c126ce48216df84f1a4199900d12b29.png"}}]);