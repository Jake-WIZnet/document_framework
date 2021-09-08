(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[9830],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80761:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"ipraw",title:"IPRAW",date:new Date("2020-04-03T00:00:00.000Z")},p=void 0,c={unversionedId:"Product/iEthernet/W5100S/Application-Note/ipraw",id:"Product/iEthernet/W5100S/Application-Note/ipraw",isDocsHomePage:!1,title:"IPRAW",description:"Overview",source:"@site/docs/Product/iEthernet/W5100S/Application-Note/IPRAW.md",sourceDirName:"Product/iEthernet/W5100S/Application-Note",slug:"/Product/iEthernet/W5100S/Application-Note/ipraw",permalink:"/Product/iEthernet/W5100S/Application-Note/ipraw",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Application-Note/IPRAW.md",tags:[],version:"current",frontMatter:{id:"ipraw",title:"IPRAW",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"W5100S UDP Function",permalink:"/Product/iEthernet/W5100S/Application-Note/udp"},next:{title:"PPPoE",permalink:"/Product/iEthernet/W5100S/Application-Note/pppoe"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Development Environment",id:"development-environment",children:[]},{value:"Application note",id:"application-note",children:[{value:"Revision history",id:"revision-history",children:[]}]},{value:"Reference Code",id:"reference-code",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IPRAW Mode")," can handle Internet Protocol(IPv4) Layer\nCommunication by supporting variable Internet Protocol such as\n",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"},"ICMP"),"(0x01),",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Internet_Group_Management_Protocol"},"IGMP"),"(0x02),",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_in_IP"},"IPinIP"),"(0x04)\nand etc. PING Message is one type of ICMP Messages and W5100S supports\nPING Message by Hardware and SOCKET-less Command. But also, ",(0,o.kt)("strong",{parentName:"p"},"IPRAW\nMode")," supports PING Message and the other types of ICMP Messages by\nHOST Process."),(0,o.kt)("h2",{id:"development-environment"},"Development Environment"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MCU"),(0,o.kt)("li",{parentName:"ul"},"Used program")),(0,o.kt)("h2",{id:"application-note"},"Application note"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"revision-history"},"Revision history"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",{class:"header"},(0,o.kt)("th",null,"Version"),(0,o.kt)("th",null,"Date"),(0,o.kt)("th",null,"Download"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",{class:"odd"},(0,o.kt)("td",null,"1.0.0"),(0,o.kt)("td",null,"2018-04-01"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_ipraw_v110k.pdf",target:"_blank"},"w5100s_an_ipraw_v110k.pdf"),(0,o.kt)("br",null),(0,o.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_ipraw_v110e.pdf",target:"_blank"},"w5100s_an_ipraw_v110e.pdf"))))),(0,o.kt)("h2",{id:"reference-code"},"Reference Code"),(0,o.kt)("hr",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Date"),(0,o.kt)("th",{parentName:"tr",align:null},"Download"),(0,o.kt)("th",{parentName:"tr",align:null},"Etc"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,o.kt)("td",{parentName:"tr",align:null},"2018-05-25"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{href:"/img/products/w5100s/application/w5100s_evb_an_coide_ipraw_v100.zip.zip",target:"_blank"},"W5100S","_","EVB","_","AN","_","CoIDE","_","IPRAW","_","V100.zip")),(0,o.kt)("td",{parentName:"tr",align:null},"Initial Version")))),(0,o.kt)("p",null,"For more information about W5100S chip please also refer to the ",(0,o.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/document#data-sheet"},"chip's datasheet"),"."))}d.isMDXComponent=!0}}]);