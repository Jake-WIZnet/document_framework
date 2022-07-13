"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1601],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,k=c["".concat(o,".").concat(d)]||c[d]||s[d]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),l=a(86010),i=a(72389),u=a(67392),o=a(7094),p=a(12466);const m="tabList__CuJ",s="tabItem_LNqP";function c(e){var t,a;const{lazy:i,block:c,defaultValue:d,values:k,groupId:N,className:v}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),T=(0,u.l)(h,((e,t)=>e.value===t.value));if(T.length>0)throw new Error('Docusaurus error: Duplicate values "'+T.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(t=null!=d?d:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:S,setTabGroupChoices:g}=(0,o.U)(),[P,E]=(0,n.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:y}=(0,p.o5)();if(null!=N){const e=S[N];null!=e&&e!==P&&h.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,a=I.indexOf(t),r=h[a].value;r!==P&&(y(t),E(r),null!=N&&g(N,String(r)))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=I.indexOf(e.currentTarget)+1;a=null!=(r=I[t])?r:I[0];break}case"ArrowLeft":{var n;const t=I.indexOf(e.currentTarget)-1;a=null!=(n=I[t])?n:I[I.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},h.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>I.push(e),onKeyDown:w,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,i.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},11490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>u,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),i=a(85162);const u={id:"overview-test",title:"Product Overview",date:new Date("2020-04-16T00:00:00.000Z")},o=void 0,p={unversionedId:"Product/S2E-Module/WIZ550SR/overview-test",id:"Product/S2E-Module/WIZ550SR/overview-test",title:"Product Overview",description:"",source:"@site/docs/Product/S2E-Module/WIZ550SR/overview.md",sourceDirName:"Product/S2E-Module/WIZ550SR",slug:"/Product/S2E-Module/WIZ550SR/overview-test",permalink:"/Product/S2E-Module/WIZ550SR/overview-test",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ550SR/overview.md",tags:[],version:"current",frontMatter:{id:"overview-test",title:"Product Overview",date:"2020-04-16T00:00:00.000Z"}},m={},s=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2}],c={toc:s};function d(e){let{components:t,...u}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)(l.Z,{groupId:"language_settings",defaultValue:"English",values:[{label:"English",value:"English"},{label:"\ud55c\uad6d\uc5b4",value:"Korean"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"English",mdxType:"TabItem"},(0,n.kt)("a",{target:"_blank",href:a(4375).Z},(0,n.kt)("img",{src:a(4375).Z,alt:"WIZ550SR Overview"})),(0,n.kt)("p",null,"WIZ550SR is Serial to Ethernet module, It's mounted TCP/IP chip W5500 of\nWIZnet and Cortex-M3-based STM32F103RCT6 of STmicro. WIZ550SR does not\ncontain RJ45 because very small size type. WIZ550SR provides the user\nInterface 2.00mm Pitch Pin header."),(0,n.kt)("p",null,"WIZ550SR is the protocol converter that transmits the data sent by\nserial equipment as TCP/IP data type, and converts back the TCP/IP data\nreceived through the network into serial data to transmit back to a\nserial equipment. It complies with industrial temperature standard and\nsupports the serial interfaces of UART."),(0,n.kt)("p",null,"WIZ550SR is is compatible with the Configuration Tool of WIZ550S2E and\nWIZ550WEB, and will use the same AT Command."),(0,n.kt)("p",null,"However, Configuration Tool must use the latest version.")),(0,n.kt)(i.Z,{value:"Korean",mdxType:"TabItem"},(0,n.kt)("a",{target:"_blank",href:a(4375).Z},(0,n.kt)("img",{src:a(4375).Z,alt:"WIZ550SR Overview"})),(0,n.kt)("p",null,"WIZ550SR\uc740 WIZnet\uc758 TCP/IP Chip\uc778 ",(0,n.kt)("strong",{parentName:"p"},"W5500"),"\uacfc Cortex-M3 \uae30\ubc18\uc73c\ub85c STmicro\uc758\n",(0,n.kt)("strong",{parentName:"p"},"STM32F103RCT6")," MCU\uac00 \ud0d1\uc7ac\ub41c Serial to Ethernet \ubaa8\ub4c8 \uc81c\ud488\uc785\ub2c8\ub2e4. \uc774 \uc81c\ud488\uc740 RJ45\ub97c \ud3ec\ud568\ud558\uace0\n\uc788\uc9c0 \uc54a\uc544 \ub9e4\uc6b0 \uc791\uc740 \uc0ac\uc774\uc988\uc758 \ud615\ud0dc\ub97c \ud558\uace0 \uc788\uace0, \uc0ac\uc6a9\uc790\uc758 Interface \ub294 2.00mm Pitch Pin header \ub97c\n\uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"WIZ550SR\uc740 \uc2dc\ub9ac\uc5bc \uc7a5\ube44\uac00 \ubcf4\ub0b8 \ub370\uc774\ud130\ub97c TCP/IP \ud328\ud0b7\uc73c\ub85c \ubcc0\ud658\ud558\uc5ec \uc774\ub354\ub137 \ub124\ud2b8\uc6cc\ud06c\ub85c \uc804\uc1a1\uc2dc\ud0a4\uba70, \ubc18\ub300\ub85c \ub124\ud2b8\uc6cc\ud06c\ub85c\ubd80\ud130\n\ubc1b\uc740 TCP/IP \ud328\ud0b7\uc744 \uc2dc\ub9ac\uc5bc \ub370\uc774\ud130\ub85c \ubcc0\ud658\ud558\uc5ec \uace0\uac1d\uc758 \uc2dc\ub9ac\uc5bc \uc7a5\ube44\ub85c \uc804\ub2ec\ud558\ub294 \uc5ed\ud560\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. \uc774 \uc81c\ud488\uc744 \ud65c\uc6a9\ud558\uba74 \uc2dc\ub9ac\uc5bc\n\uc778\ud130\ud398\uc774\uc2a4\ub97c \uc9c0\uc6d0\ud558\ub294 \uc7a5\uce58\uc5d0 \uc190\uc27d\uac8c \ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0 \uae30\ub2a5\uc744 \ucd94\uac00 \ud560 \uc218 \uc788\uc5b4, \uc774\ub354\ub137 \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \uc2dc\ub9ac\uc5bc \uc7a5\ube44\ub97c \uc81c\uc5b4\ud558\ub294 \uac83\uc774\n\uac00\ub2a5\ud574\uc9d1\ub2c8\ub2e4."),(0,n.kt)("p",null,"WIZ550SR\uc740 WIZ550S2E, WIZ550WEB\uc758 Configuration Tool\uacfc \ud638\ud658\uc774 \uac00\ub2a5\ud558\uba70, \ub3d9\uc77c\ud55c AT\nCommand\ub85c \uc0ac\uc6a9\uc774 \ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub2e8, Configuration Tool\uc740 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4."))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)(l.Z,{groupId:"language_settings",defaultValue:"English",values:[{label:"English",value:"English"},{label:"\ud55c\uad6d\uc5b4",value:"Korean"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"English",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Very small size Serial to Ethernet Module. 22mm x 24mm x 13mm.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"WIZnet, TCP/IP Chip ",(0,n.kt)("strong",{parentName:"li"},"W5500"),"."),(0,n.kt)("li",{parentName:"ul"},"STmicro, Cortex-M3 based STM32F103RCT6."),(0,n.kt)("li",{parentName:"ul"},"Not include a transformer and RJ45."),(0,n.kt)("li",{parentName:"ul"},"2.00mm Pitch Pin Header Type, 1x11."),(0,n.kt)("li",{parentName:"ul"},"Support the ",(0,n.kt)("strong",{parentName:"li"},"MDI"),"(Medium Dependent Interface).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TXN, TXP, RXN, RXP"))),(0,n.kt)("li",{parentName:"ul"},"Support the ",(0,n.kt)("strong",{parentName:"li"},"UART")," Interface.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)"),(0,n.kt)("li",{parentName:"ul"},"Buad Rate : 600bps to 230.4kbps"),(0,n.kt)("li",{parentName:"ul"},"Length : 8bit"),(0,n.kt)("li",{parentName:"ul"},"Parity bit : None, Odd, Even"),(0,n.kt)("li",{parentName:"ul"},"Stop bit : 1bit, 2bit"),(0,n.kt)("li",{parentName:"ul"},"Support the RS-232C Interface."),(0,n.kt)("li",{parentName:"ul"},"Will be supported the RS-422/485 Interface."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default : 115200, 8, n, 1")))),(0,n.kt)("li",{parentName:"ul"},"Support the Debug UART.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DEBUG RXD, DEBUG TXD"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default : 115200, 8, n, 1")))),(0,n.kt)("li",{parentName:"ul"},"Support the PHY Status Output.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Active LED, Link LED"))),(0,n.kt)("li",{parentName:"ul"},"Support the STATUS Output.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LOW : TCP Connect."),(0,n.kt)("li",{parentName:"ul"},"HIGH : TCP Diconnect."))),(0,n.kt)("li",{parentName:"ul"},"System Pin.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RESET : System Reset, Active Low."),(0,n.kt)("li",{parentName:"ul"},"BOOT0 : MCU BOOT mode operation, Active High."),(0,n.kt)("li",{parentName:"ul"},"H/W TRIG : App BOOT mode operation, Active Low."))),(0,n.kt)("li",{parentName:"ul"},"Support the Indicator LED.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Power LED(LD3)."),(0,n.kt)("li",{parentName:"ul"},"LED 0(LD1) : "),(0,n.kt)("li",{parentName:"ul"},"LED 1(LD2) : "))),(0,n.kt)("li",{parentName:"ul"},"Support the Pin Header Hole for firmware upload.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2.54mm Pitch, Not Mount."))),(0,n.kt)("li",{parentName:"ul"},"Support the Pin Header Hole for SWD.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1.27mm Pitch, Not Mount."))),(0,n.kt)("li",{parentName:"ul"},"Include eeprom for data storage."),(0,n.kt)("li",{parentName:"ul"},"Support the AT Command for the set of WIZ550SR."),(0,n.kt)("li",{parentName:"ul"},"Support the WIZ VSP (Virtual Serial Port)."),(0,n.kt)("li",{parentName:"ul"},"Operation Temperature : -40\u2103 ","~"," 85\u2103"),(0,n.kt)("li",{parentName:"ul"},"Size : 22mm x 24mm x 13mm"))))),(0,n.kt)(i.Z,{value:"Korean",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WIZnet\uc758 TCP/IP Chip\uc778 ",(0,n.kt)("strong",{parentName:"li"},"W5500")," \uae30\ubc18\uc758 Serial to Ethernet Module.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"STmicro\uc758 ",(0,n.kt)("strong",{parentName:"li"},"STM32F103RCT6")," \uae30\ubc18\uc758 Serial to Ethernet Module."),(0,n.kt)("li",{parentName:"ul"},"\ub9e4\uc6b0 \uc791\uc740 \uc0ac\uc774\uc988, 22mm x 24mm x 13mm."),(0,n.kt)("li",{parentName:"ul"},"2.00mm Pitch Pin Header 1x11 2ea \uc9c0\uc6d0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MDI"),"(Medium Dependent Interface) \uc9c0\uc6d0.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"TXN, TXP, RXN, RXP"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"UART")," Interface \uc9c0\uc6d0.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)"),(0,n.kt)("li",{parentName:"ul"},"Buad Rate : 600bps to 230.4kbps"),(0,n.kt)("li",{parentName:"ul"},"Length : 8bit"),(0,n.kt)("li",{parentName:"ul"},"Parity bit : None, Odd, Even"),(0,n.kt)("li",{parentName:"ul"},"Stop bit : 1bit, 2bit"),(0,n.kt)("li",{parentName:"ul"},"RS-232C Interface \uc9c0\uc6d0 \uac00\ub2a5."),(0,n.kt)("li",{parentName:"ul"},"RS-422/485 Interface \uc9c0\uc6d0 \uc608\uc815."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default : 115200, 8, n, 1")))),(0,n.kt)("li",{parentName:"ul"},"Debug UART \uc9c0\uc6d0.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DEBUG RXD, DEBUG TXD"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default : 115200, 8, n, 1")))),(0,n.kt)("li",{parentName:"ul"},"PHY Status Output \uc9c0\uc6d0.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Active LED, Link LED"))),(0,n.kt)("li",{parentName:"ul"},"STATUS Output \uc9c0\uc6d0.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"LOW : TCP Connect \uc0c1\ud0dc."),(0,n.kt)("li",{parentName:"ul"},"HIGH : TCP Diconnect \uc0c1\ud0dc."))),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \ud540.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RESET : \uc2dc\uc2a4\ud15c \ub9ac\uc14b, Active Low."),(0,n.kt)("li",{parentName:"ul"},"BOOT0 : MCU BOOT \ubaa8\ub4dc \uc9c4\uc785, Active High."),(0,n.kt)("li",{parentName:"ul"},"H/W TRIG : App BOOT \ubaa8\ub4dc \uc9c4\uc785, Active Low."))),(0,n.kt)("li",{parentName:"ul"},"Indicator LED \uc9c0\uc6d0.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Power LED(LD3)."),(0,n.kt)("li",{parentName:"ul"},"LED 0(LD1) : "),(0,n.kt)("li",{parentName:"ul"},"LED 1(LD2) : "))),(0,n.kt)("li",{parentName:"ul"},"Firmware \uc5c5\ub85c\ub4dc\uc6a9 Pin Header Hole \uc9c0\uc6d0.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2.54mm Pitch, Not Mount."))),(0,n.kt)("li",{parentName:"ul"},"SWD \uc6a9 Pin Header Hole \uc9c0\uc6d0.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1.27mm Pitch, Not Mount."))),(0,n.kt)("li",{parentName:"ul"},"Data \uc800\uc7a5\uc6a9 EEPROM \ub0b4\uc7a5."),(0,n.kt)("li",{parentName:"ul"},"\uc81c\ud488\uc758 \uc124\uc815\uc744 \uc704\ud55c Conriguration Tool \uc9c0\uc6d0."),(0,n.kt)("li",{parentName:"ul"},"\uc81c\ud488\uc758 \uc124\uc815\uc744 \uc704\ud55c AT Command \uc9c0\uc6d0."),(0,n.kt)("li",{parentName:"ul"},"WIZ VSP (Virtual Serial Port) \ud504\ub85c\uadf8\ub7a8 \uc9c0\uc6d0"),(0,n.kt)("li",{parentName:"ul"},"Operation Temperature : -40\u2103 ","~"," 85\u2103"),(0,n.kt)("li",{parentName:"ul"},"Size : 22mm x 24mm x 13mm")))))))}d.isMDXComponent=!0},4375:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/wiz550sr_overview-3c126ce48216df84f1a4199900d12b29.png"}}]);