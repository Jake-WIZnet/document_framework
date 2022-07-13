"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"socket-less-command",title:"SOCKET-less Command",date:new Date("2020-04-03T00:00:00.000Z")},l=void 0,i={unversionedId:"Product/iEthernet/W5100S/Application-Note/socket-less-command",id:"Product/iEthernet/W5100S/Application-Note/socket-less-command",title:"SOCKET-less Command",description:"Overview",source:"@site/docs/Product/iEthernet/W5100S/Application-Note/SOCKET-less_Command.md",sourceDirName:"Product/iEthernet/W5100S/Application-Note",slug:"/Product/iEthernet/W5100S/Application-Note/socket-less-command",permalink:"/Product/iEthernet/W5100S/Application-Note/socket-less-command",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Application-Note/SOCKET-less_Command.md",tags:[],version:"current",frontMatter:{id:"socket-less-command",title:"SOCKET-less Command",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"PPPoE",permalink:"/Product/iEthernet/W5100S/Application-Note/pppoe"},next:{title:"Interrupt",permalink:"/Product/iEthernet/W5100S/Application-Note/interrupt"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Development Environment",id:"development-environment",level:2},{value:"Application note",id:"application-note",level:2},{value:"Revision history",id:"revision-history",level:3},{value:"Reference Code",id:"reference-code",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SLC(SOCKET-less Command)")," can handle ARP and PING Request Packet without SOCKET Open.\nIf ARP and PING Reply Packet are received within the Retransmission Time configured by SLRCR and SLRTR, ARP and PING Interrupt are occurred. "),(0,o.kt)("h2",{id:"development-environment"},"Development Environment"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MCU : Not yet"),(0,o.kt)("li",{parentName:"ul"},"Used program: ")),(0,o.kt)("h2",{id:"application-note"},"Application note"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"revision-history"},"Revision history"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",{class:"header"},(0,o.kt)("th",null,"Version"),(0,o.kt)("th",null,"Date"),(0,o.kt)("th",null,"Download"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",{class:"odd"},(0,o.kt)("td",null,"1.0.0"),(0,o.kt)("td",null,"2018-04-01"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_slc_v100k.pdf",target:"_blank"},"w5100s_an_slc_v100k.pdf"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_slc_v100e.pdf",target:"_blank"},"w5100s_an_slc_v100e.pdf"))))),(0,o.kt)("h2",{id:"reference-code"},"Reference Code"),(0,o.kt)("hr",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Date"),(0,o.kt)("th",{parentName:"tr",align:null},"Download"),(0,o.kt)("th",{parentName:"tr",align:null},"ETC"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,o.kt)("td",{parentName:"tr",align:null},"2018-09-03"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"/img/products/w5100s/application/w5100s_evb_an_coide_slc_v100.zip",target:"_blank"},"W5100S","_","EVB","_","AN","_","CoIDE","_","SLC","_","V100.zip")),(0,o.kt)("td",{parentName:"tr",align:null},"Initial Version")))),(0,o.kt)("p",null,"For more information about W5100S chip please also refer to the ",(0,o.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/document#data-sheet"},"chip's datasheet"),"."))}d.isMDXComponent=!0}}]);