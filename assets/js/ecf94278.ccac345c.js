"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[3316],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,v=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(v,a(a({ref:e},u),{},{components:n})):r.createElement(v,a({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44371:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"interrupt",title:"Interrupt",date:new Date("2020-04-03T00:00:00.000Z")},a=void 0,l={unversionedId:"Product/iEthernet/W5100S/Application-Note/interrupt",id:"Product/iEthernet/W5100S/Application-Note/interrupt",title:"Interrupt",description:"Overview",source:"@site/docs/Product/iEthernet/W5100S/Application-Note/Interrupt.md",sourceDirName:"Product/iEthernet/W5100S/Application-Note",slug:"/Product/iEthernet/W5100S/Application-Note/interrupt",permalink:"/Product/iEthernet/W5100S/Application-Note/interrupt",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Application-Note/Interrupt.md",tags:[],version:"current",frontMatter:{id:"interrupt",title:"Interrupt",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"SOCKET-less Command",permalink:"/Product/iEthernet/W5100S/Application-Note/socket-less-command"},next:{title:"DMA",permalink:"/Product/iEthernet/W5100S/Application-Note/dma"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Development Environment",id:"development-environment",level:2},{value:"Application note",id:"application-note",level:2},{value:"Revision history",id:"revision-history",level:3},{value:"Reference Code",id:"reference-code",level:2},{value:"Revision history",id:"revision-history-1",level:3}],u={toc:c};function s(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"W5100S provides ",(0,i.kt)("strong",{parentName:"p"},"INTn(Interrupt Pin)")," and HOST is notified when an Ethernet Communication\nEvent has occurred through ",(0,i.kt)("strong",{parentName:"p"},"INTn"),". When an Ethernet Communication Process Event\n(IP Collision, WOL Packet Reception, Data Transmission, Reception for each\nSOCKET, etc.) occurs, the ",(0,i.kt)("strong",{parentName:"p"},"INTn")," is asserted low"),(0,i.kt)("h2",{id:"development-environment"},"Development Environment"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MCU : "),(0,i.kt)("li",{parentName:"ul"},"Used program:-")),(0,i.kt)("h2",{id:"application-note"},"Application note"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"revision-history"},"Revision history"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",{class:"header"},(0,i.kt)("th",null,"Version"),(0,i.kt)("th",null,"Date"),(0,i.kt)("th",null,"Download"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",{class:"odd"},(0,i.kt)("td",null,"1.0.0"),(0,i.kt)("td",null,"2018-04-01"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v110k.pdf",target:"_blank"},"w5100s_an_interrupt_v110k.pdf"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf",target:"_blank"},"w5100s_an_interrupt_v100e.pdf"))))),(0,i.kt)("h2",{id:"reference-code"},"Reference Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"revision-history-1"},"Revision history"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"Download"),(0,i.kt)("th",{parentName:"tr",align:null},"ETC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v110k.pdf",target:"_blank"},"w5100s_an_interrupt_v110k.pdf")," ",(0,i.kt)("br",null),(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf",target:"_blank"},"w5100s_an_interrupt_v100e.pdf")),(0,i.kt)("td",{parentName:"tr",align:null},"Initial Version")))),(0,i.kt)("p",null,"For more information ",(0,i.kt)("a",{parentName:"p",href:"../document"},"W5100s")," chip please\nalso refer to the chip's datasheet:"))}s.isMDXComponent=!0}}]);