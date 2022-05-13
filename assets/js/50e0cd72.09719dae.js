"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[6621],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,s=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},25132:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={id:"documents",title:"Documents",date:new Date("2020-04-03T00:00:00.000Z")},o=void 0,d={unversionedId:"Product/iMCU/W7500P/documents",id:"Product/iMCU/W7500P/documents",title:"Documents",description:"The DataSheet provides the ordering information and mechanical device characteristics of the W7500/W7500P microcontrollers.",source:"@site/docs/Product/iMCU/W7500P/Documents.md",sourceDirName:"Product/iMCU/W7500P",slug:"/Product/iMCU/W7500P/documents",permalink:"/Product/iMCU/W7500P/documents",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500P/Documents.md",tags:[],version:"current",frontMatter:{id:"documents",title:"Documents",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"W7500P Reference Schematics",permalink:"/Product/iMCU/W7500P/w7500p-ref-schematic"},next:{title:"Peripheral description and examples",permalink:"/Product/iMCU/W7500P/peripherals"}},m={},u=[{value:"Data Sheet",id:"data-sheet",level:3},{value:"Reference Manual",id:"reference-manual",level:3},{value:"PHY Reference",id:"phy-reference",level:3},{value:"Errata Sheet",id:"errata-sheet",level:3},{value:"Limitation Note ARP problem in the NLB environment",id:"limitation-note-arp-problem-in-the-nlb-environment",level:3},{value:"Getting Started",id:"getting-started",level:2}],k={toc:u};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"DataSheet")," provides the ordering information and mechanical device characteristics of the W7500/W7500P microcontrollers.",(0,l.kt)("br",{parentName:"p"}),"\n","The ",(0,l.kt)("strong",{parentName:"p"},"Reference Manual")," provides the register map of peripherals and brief description.",(0,l.kt)("br",{parentName:"p"}),"\n","The ",(0,l.kt)("strong",{parentName:"p"},"PHY Reference")," provides the How to Access W7500x PHY Register and description of W7500P Internal PHY.",(0,l.kt)("br",{parentName:"p"}),"\n","The ",(0,l.kt)("strong",{parentName:"p"},"Errata Sheet")," describes error Phenomenon and solution .",(0,l.kt)("br",{parentName:"p"}),"\n","The ",(0,l.kt)("strong",{parentName:"p"},"Getting Started")," user's guide describes the installation of MDK: How to make KEIL new project for W7500, How to use MDK for W7500 Peripherals Examples, How to use GCC for W7500 Peripherals Examples and How to use ISP tool from starting a project to using the ISP tool."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"data-sheet"},"Data Sheet"),(0,l.kt)("a",{href:"/img/products/w7500/w7500x_ds_v110.pdf",target:"_blank"},"W7500x Datasheet v1.1.0 - English"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"20DEC2019"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed 3.17 UART speed to 460.8 Kbit/s from 3 Mbit/s.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Old Datasheet History")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"18SEP2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial Release")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"26OCT2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed value Driving Strength condition in PADCON.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.2"),(0,l.kt)("td",{parentName:"tr",align:null},"09NOV2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed Typo I/O Pad Characteristics VOL description (high -",">"," low)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"30NOV2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed figure 8. (W7500P Pin out)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.4"),(0,l.kt)("td",{parentName:"tr",align:null},"18DEC2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Add Reset & PLL characteristics.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"30JAN2018"),(0,l.kt)("td",{parentName:"tr",align:null},"1","."," Fixed figure 8 (W7500P Pin layout) / Added subhead (4.2.1 W7500, 4.2.2 W7500P) / Fixed table 8(modified Symbol name)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},"2","."," Modified SRAM description (2. Description)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.6"),(0,l.kt)("td",{parentName:"tr",align:null},"05FEB2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Add info about W7500P power consumption.(Current Characteristics)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.7"),(0,l.kt)("td",{parentName:"tr",align:null},"27JUL2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed figure 2. CRG Diagram (Input Information of WDOGCLK, TIMCLK0,TIMCLK1).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.8"),(0,l.kt)("td",{parentName:"tr",align:null},"17OCT2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed Power Supply description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.9"),(0,l.kt)("td",{parentName:"tr",align:null},"11NOV2019"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed Power Supply description")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"reference-manual"},"Reference Manual"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/img/products/w7500/w7500x_rm_v112_20181017_.pdf",target:"_blank"},"W7500x Reference Manual v1.1.2 - English"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.1.2"),(0,l.kt)("td",{parentName:"tr",align:null},"17OCT2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Power supply description")))),(0,l.kt)("p",null," ++++ Old Reference Manual History |"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"18SEP2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial Release")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"12OCT2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Flash Chapter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.2"),(0,l.kt)("td",{parentName:"tr",align:null},"26OCT2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit GPIO,PADCON Register and added Open Drain function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"27OCT2017"),(0,l.kt)("td",{parentName:"tr",align:null},"TCKCNTR, RTR, Sn","_","RTR, Sn","_","KATMR Additional description added.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.4"),(0,l.kt)("td",{parentName:"tr",align:null},"09NOV2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit PADCON register description CS,DS inverted value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"17NOV2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit UARTCR register description about UARTEN.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.6"),(0,l.kt)("td",{parentName:"tr",align:null},"29NOV2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit WZTOE Sn","_","KATMR description about timer trigger.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.7"),(0,l.kt)("td",{parentName:"tr",align:null},"26JAN2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit typo about PWM preodic mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.8"),(0,l.kt)("td",{parentName:"tr",align:null},"12FAB2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Base Address about RTC (4000","_","4000 -",">"," 4000","_","E000)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0.9"),(0,l.kt)("td",{parentName:"tr",align:null},"05MAR2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit UART2 description & register map.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"11APR2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Systick description & PADCON register table fix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Register Table about SSP0, SSP1 (Add FRF)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit DSS about SSP0, SSP1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit Register map about SSP0, SSP1 (Add FRF)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.1.1"),(0,l.kt)("td",{parentName:"tr",align:null},"27JUL2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed figure 4. CRG Diagram (Input Information of WDOGCLK, TIMCLK0,TIMCLK1).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},"Flash memory lock function Additional description added (11.1)")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"phy-reference"},"PHY Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/img/products/w7500p/ref_sch/how_to_access_phy_application_note_v100.pdf",target:"_blank"},"How to Access W7500x PHY Register - English")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"http://www.bdtic.com/DataSheet/ICplus/IP101G_DS_R01_20121224.pdf",target:"_blank"},"W7500P Internal PHY Datasheet - English"))),(0,l.kt)("p",null,"How to Access W7500x PHY Register"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"7AUG2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial Release")))),(0,l.kt)("p",null,"W7500P Internal PHY Datasheet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"7AUG2018"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial Release")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"errata-sheet"},"Errata Sheet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/img/products/w7500/w7500x_erratasheet_v120e.pdf",target:"_blank"},"W7500x Erratasheet v1.2.0 - English")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{href:"/img/products/w7500/w7500x_erratasheet_v120k.pdf",target:"_blank"},"W7500x Erratasheet v1.2.0 - Korean"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"13MAR2019"),(0,l.kt)("td",{parentName:"tr",align:null},"Erratum 3 \u2013 IAP Function Call Failure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},"Erratum 4 \u2013 Two Image Banks Failure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},":::"),(0,l.kt)("td",{parentName:"tr",align:null},"Erratum 5 \u2013 Cold Booting Failure")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"11JUL2016"),(0,l.kt)("td",{parentName:"tr",align:null},"erratum 1 \u2013 W7500x I2C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.2"),(0,l.kt)("td",{parentName:"tr",align:null},"8DEC2016"),(0,l.kt)("td",{parentName:"tr",align:null},"Correct SCL speed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V1.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"18JUN2018"),(0,l.kt)("td",{parentName:"tr",align:null},"erratum 2 \u2013 W7500P Transmission Delay Case")))),(0,l.kt)("p",null,"++++"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"limitation-note-arp-problem-in-the-nlb-environment"},"Limitation Note ARP problem in the NLB environment"),(0,l.kt)("a",{href:"/img/products/w7500/w7500_arp_problem_in_the_nlb.pdf",target:"_blank"},"Limitation Note ARP problem in the NLB environment V1.0"),(0,l.kt)("p",null,"ARP problem in the NLB environment V1.0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Decription"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V 1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"12MAR18"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial Document")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/documents/appnote/how_to_install_KEIL"},"How to install KEIL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/documents/appnote/how-to-make-keil-new-project-for-w7500"},"How to make KEIL new project for W7500"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../W7500/documents/appnote/how-to-use-mdk-for-w7500-peripherals-examples"},"How to use MDK for W7500 Peripherals Examples"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/documents/appnote/how-to-use-gcc-for-w7500-peripherals-examples"},"How to use GCC for W7500 Peripherals Examples"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/documents/appnote/how-to-use-isp-tool"},"How to use ISP tool")))),(0,l.kt)("hr",null))}N.isMDXComponent=!0}}]);