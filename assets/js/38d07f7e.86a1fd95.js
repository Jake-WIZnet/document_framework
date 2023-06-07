"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[1399],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,f=c["".concat(u,".").concat(k)]||c[k]||s[k]||a;return n?l.createElement(f,i(i({ref:e},p),{},{components:n})):l.createElement(f,i({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},10380:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var l=n(87462),r=(n(67294),n(3905));const a={id:"padcon",title:"Pad Controller (PADCON)",date:new Date("2020-04-03T00:00:00.000Z")},i=void 0,o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/padcon",id:"Product/iMCU/W7500/Peripherals-internal/padcon",title:"Pad Controller (PADCON)",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/padcon.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/padcon",permalink:"/Product/iMCU/W7500/Peripherals-internal/padcon",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/padcon.md",tags:[],version:"current",frontMatter:{id:"padcon",title:"Pad Controller (PADCON)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"SSP Loopback example",permalink:"/Product/iMCU/W7500/Peripherals-internal/loopback"},next:{title:"UART Printf example",permalink:"/Product/iMCU/W7500/Peripherals-internal/polling"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Functional description",id:"functional-description",level:2}],p={toc:d},c="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,l.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Pads of W7500 are controllable. User can control pad\u2019s characteristic."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"W7500 have digital I/O pads and digital/analog mux I/O pads"),(0,r.kt)("li",{parentName:"ul"},"Controllable characteristics of pad are pull-up, pull-down, driving strength, input enable and CMOS/Schmitt trigger input buffer"),(0,r.kt)("li",{parentName:"ul"},"Each pad can be control individually by register.")),(0,r.kt)("h2",{id:"functional-description"},"Functional description"),(0,r.kt)("p",null,"The below Figure shows the function schematic of digital I/O pad of W7500."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(42703).Z,title:"Figure 1 function schematic of digital I/O pad",width:"555",height:"582"})),(0,r.kt)("p",null,"The below Figure shows the function schematic of digital/analog mux IO pad of W7500"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(29480).Z,title:"Figure 2 function schematic of analog/digital mux I/O pad",width:"626",height:"625"})),(0,r.kt)("p",null,"Initials of Pad diagram is same as below."),(0,r.kt)("p",null,"P - PAD",(0,r.kt)("br",{parentName:"p"}),"\n","YA \u2013 Analog Input (connect to ADC input)",(0,r.kt)("br",{parentName:"p"}),"\n","Y \u2013 Digital Input",(0,r.kt)("br",{parentName:"p"}),"\n","IE \u2013 Input buffer enable "),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Condition"),(0,r.kt)("th",null,"A"),(0,r.kt)("th",null,"Y"),(0,r.kt)("th",null,"P")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"2"},"Input buffer enable",(0,r.kt)("br",null),"(IE =1)"),(0,r.kt)("td",null,"Output mode"),(0,r.kt)("td",null,"OUT"),(0,r.kt)("td",null,"OUT"),(0,r.kt)("td",null,"OUT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Input mode"),(0,r.kt)("td",null,"No use"),(0,r.kt)("td",null,"IN"),(0,r.kt)("td",null,"IN")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"2"},"Input buffer enable",(0,r.kt)("br",null),"(IE = 0)"),(0,r.kt)("td",null,"Output mode"),(0,r.kt)("td",null,"OUT"),(0,r.kt)("td",null,"Low(0)"),(0,r.kt)("td",null,"OUT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Input mode"),(0,r.kt)("td",null,"No use"),(0,r.kt)("td",null,"IN"),(0,r.kt)("td",null,"IN"))),(0,r.kt)("p",null,"CS \u2013 CMOS/Schmitt trigger input buffer select",(0,r.kt)("br",{parentName:"p"}),"\n","PU \u2013 Pull-up enable",(0,r.kt)("br",{parentName:"p"}),"\n","A \u2013 Digital Output",(0,r.kt)("br",{parentName:"p"}),"\n","DS \u2013 Driving strength select"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"},"Condition"),(0,r.kt)("th",{colspan:"2"},"Rise/Fall Time(nSec)"),(0,r.kt)("th",{colspan:"2"},"Propagation Delay(nSec)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Driving Strength"),(0,r.kt)("td",null,"Capacitance loading"),(0,r.kt)("td",null,"Min"),(0,r.kt)("td",null,"Max"),(0,r.kt)("td",null,"Min"),(0,r.kt)("td",null,"Max")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"2"},"High",(0,r.kt)("br",null),"(DS = 1)"),(0,r.kt)("td",null,"25pF"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"18"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"27")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"100pF"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"53"),(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"44")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"2"},"Low",(0,r.kt)("br",null),"(DS = 0)"),(0,r.kt)("td",null,"25pF"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"16")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"100pF"),(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"7"),(0,r.kt)("td",null))),(0,r.kt)("p",null,"PD \u2013 Pull-down enable  "),(0,r.kt)("p",null,"User can set pad condition with IE, CS, PU/PD, DS by register.",(0,r.kt)("br",{parentName:"p"}),"\n","And pads are can be controlled individually."))}s.isMDXComponent=!0},29480:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/schem_a_d_iopad-1c2c890849a32bb73acb570a6dd213a4.jpg"},42703:(t,e,n)=>{n.d(e,{Z:()=>l});const l=n.p+"assets/images/schem_digital_iopad-d3069d61042a72357038cfde6db25bd1.jpg"}}]);