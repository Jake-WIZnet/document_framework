"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[85417],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(k,l(l({ref:e},c),{},{components:n})):r.createElement(k,l({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67781:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={id:"dma",title:"DMA",date:new Date("2020-04-03T00:00:00.000Z")},p=void 0,u={unversionedId:"Product/iEthernet/W5100S/Application-Note/dma",id:"Product/iEthernet/W5100S/Application-Note/dma",isDocsHomePage:!1,title:"DMA",description:"Overview",source:"@site/docs/Product/iEthernet/W5100S/Application-Note/DMA.md",sourceDirName:"Product/iEthernet/W5100S/Application-Note",slug:"/Product/iEthernet/W5100S/Application-Note/dma",permalink:"/Product/iEthernet/W5100S/Application-Note/dma",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Application-Note/DMA.md",tags:[],version:"current",frontMatter:{id:"dma",title:"DMA",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Interrupt",permalink:"/Product/iEthernet/W5100S/Application-Note/interrupt"},next:{title:"W5100S-EVB",permalink:"/Product/iEthernet/W5100S/w5100s_evb"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Development Environment",id:"development-environment",children:[{value:"Revision history",id:"revision-history",children:[],level:3}],level:2},{value:"Reference Code",id:"reference-code",children:[{value:"Revision history",id:"revision-history-1",children:[],level:3}],level:2},{value:"Comparison table",id:"comparison-table",children:[],level:2}],d={toc:c};function m(t){var e=t.components,o=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"W5100S-EVB support DMA(Direct Memory Addressing) of SPI Mode. To operate at its maximum speed, the SPI needs to be fed with the data for transmission and the data received on the Rx buffer should be read to avoid overrun."),(0,i.kt)("h2",{id:"development-environment"},"Development Environment"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MCU : STM32F103VC "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"System Clock : 72MHz,  SPI2 clock : 18MHz(Max clock))"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Used program: Atollic True STUDIO ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"W5100S Setting"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Socket size : 8K, No Delay Ack ")),(0,i.kt)("h2",{parentName:"li",id:"application-note"},"Application note"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"revision-history"},"Revision history"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"Download"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,i.kt)("td",{parentName:"tr",align:null},"2018-12-14"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf",target:"_blank"},"W5100S","_","AN","_","DMA","_","V100K.pdf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},":::"),(0,i.kt)("td",{parentName:"tr",align:null},"2019-04-16"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_dma_v100e.pdf",target:"_blank"},"W5100S","_","AN","_","DMA","_","V100E.pdf"))))),(0,i.kt)("h2",{id:"reference-code"},"Reference Code"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," : DMA reference code is designed for W5100S. But if you use the\nMCU of STM32F1xx,the other chips(W5100, W5100S, W5200, W5300, W5500) can\nuse this application."),(0,i.kt)("h3",{id:"revision-history-1"},"Revision history"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"Download"),(0,i.kt)("th",{parentName:"tr",align:null},"ETC"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,i.kt)("td",{parentName:"tr",align:null},"2018-12-14"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://github.com/Wiznet/W5100S-EVB",target:"_blank"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Wiznet/W5100S-EVB"},"https://github.com/Wiznet/W5100S-EVB"))),(0,i.kt)("td",{parentName:"tr",align:null},"Initial Version")))),(0,i.kt)("h2",{id:"comparison-table"},"Comparison table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Opearation Peripherals"),(0,i.kt)("th",{parentName:"tr",align:null},"Figure"),(0,i.kt)("th",{parentName:"tr",align:null},"Opearation Peripherals"),(0,i.kt)("th",{parentName:"tr",align:null},"Figure"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(74048).Z})),(0,i.kt)("td",{parentName:"tr",align:null},"SPI","_","DMA"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(33714).Z}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BUS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(33554).Z})),(0,i.kt)("td",{parentName:"tr",align:null},"BUS","_","DMA"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(57908).Z}))))))}m.isMDXComponent=!0},33554:function(t,e,n){e.Z=n.p+"assets/images/bus_3.7mhz_8k_nd-7e8a168e24406ddd185f66622c943342.jpg"},57908:function(t,e,n){e.Z=n.p+"assets/images/bus_dma_9.6mhz_8k_nd-3378ef4b0a11be22788cb5a19365d00c.jpg"},74048:function(t,e,n){e.Z=n.p+"assets/images/spi_0.8mhz_8k_nd_2-97a870b1f92119949dcf8bef43053f0b.jpg"},33714:function(t,e,n){e.Z=n.p+"assets/images/spi_dma_6.4mhz_8k_nd-435dab3c27ee13f0c04146eeb1178b60.jpg"}}]);