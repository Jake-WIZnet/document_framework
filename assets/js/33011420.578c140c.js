"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5648],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||a;return o?n.createElement(k,l(l({ref:t},d),{},{components:o})):n.createElement(k,l({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},78266:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={id:"serial-to-ethernet-guide",title:"Serial to Ethernet Tool guide",date:new Date("2020-04-03T00:00:00.000Z")},l=void 0,i={unversionedId:"Product/S2E-Module/serial-to-ethernet-guide",id:"Product/S2E-Module/serial-to-ethernet-guide",title:"Serial to Ethernet Tool guide",description:"Configuration Tool",source:"@site/docs/Product/S2E-Module/serial-to-ethernet-guide.md",sourceDirName:"Product/S2E-Module",slug:"/Product/S2E-Module/serial-to-ethernet-guide",permalink:"/Product/S2E-Module/serial-to-ethernet-guide",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/serial-to-ethernet-guide.md",tags:[],version:"current",frontMatter:{id:"serial-to-ethernet-guide",title:"Serial to Ethernet Tool guide",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Serial to Ethernet Module",permalink:"/Product/S2E-Module/s2e_module"},next:{title:"User's Manual-[EN]",permalink:"/Product/S2E-Module/WIZ750SR/users-manual-EN"}},u={},p=[{value:"Configuration Tool",id:"configuration-tool",level:2},{value:"WIZnet-S2E-Tool-GUI (wizconfig)",id:"wiznet-s2e-tool-gui-wizconfig",level:3},{value:"WIZ550 Series",id:"wiz550-series",level:3},{value:"Configuration Tool User guide",id:"configuration-tool-user-guide",level:4},{value:"Source code",id:"source-code",level:4},{value:"WIZ107/108SR",id:"wiz107108sr",level:3},{value:"WIZ100/105/110SR Series",id:"wiz100105110sr-series",level:3},{value:"WIZ120/125SR",id:"wiz120125sr",level:3},{value:"WIZ140/145SR",id:"wiz140145sr",level:3},{value:"W7500(P) ISP Tool",id:"w7500p-isp-tool",level:2},{value:"WIZ Mac Tool",id:"wiz-mac-tool",level:2},{value:"WIZ VSP",id:"wiz-vsp",level:2}],d={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"configuration-tool"},"Configuration Tool"),(0,r.kt)("p",null,"Configuration Tool selection guide for S2E(Serial to ethernet) devices."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The configuration tool used is different depending on the S2E product family, so need to use a tool suitable for the product.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wiznet-s2e-tool-gui-wizconfig"},"WIZnet-S2E-Tool-GUI (wizconfig)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Support Devices")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ750SR/"},"WIZ750SR-TTL/232/485")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ750SR-1xx-Series/"},"WIZ750SR-1xx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ752SR-12x-Series/"},"WIZ752SR-12x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ107SR/"},"WIZ107SR")," & ",(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ108SR/"},"WIZ108SR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/Pre-programmed-MCU/W7500P-S2E/w7500p-s2e-EN"},"W7500(P)-S2E")),(0,r.kt)("li",{parentName:"ul"},"WIZ5xxSR-RP Series",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/overview"},"WIZ500SR-RP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/overview"},"WIZ505SR-RP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/overview"},"WIZ510SR-RP"))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases"},(0,r.kt)("strong",{parentName:"a"},"Download the latest version (GitHub Repository)"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/wiki"},(0,r.kt)("strong",{parentName:"a"},"Open Wiki page"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(85857).Z,width:"902",height:"747"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wiz550-series"},"WIZ550 Series"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ550SR/"},"WIZ550SR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ550S2E/"},"WIZ550S2E"))),(0,r.kt)("h4",{id:"configuration-tool-user-guide"},"Configuration Tool User guide"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(44104).Z,width:"16",height:"16"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZ550S2E"},"https://github.com/Wiznet/WIZ550S2E")),(0,r.kt)("h4",{id:"source-code"},"Source code"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(44104).Z,width:"16",height:"16"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZnet_Configuration_Tool"},"https://github.com/Wiznet/WIZnet_Configuration_Tool")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(40804).Z,width:"856",height:"848"})," WIZ550SR/WIZ550S2E\nConfiguration Tool"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZnet_Configuration_Tool/releases"},(0,r.kt)("strong",{parentName:"a"},"WIZ550 Series Configuration Tool Release download"))),(0,r.kt)("p",null,"Please refer to below compatibility table and use appropriate version."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"F/W Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Configuration Tool Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.3"),(0,r.kt)("td",{parentName:"tr",align:null},"1.03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.3.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.33")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.4.1"),(0,r.kt)("td",{parentName:"tr",align:null},"1.33")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wiz107108sr"},"WIZ107/108SR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ750SR/"},"WIZ750SR-TTL/232/485")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ107SR/"},"WIZ107SR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ108SR/"},"WIZ108SR"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(34582).Z,width:"673",height:"597"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"WIZ107/108SR & WIZ750SR Configuration Tool")),(0,r.kt)("a",{href:"https://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ107_108SR/Utility/WIZ107_108_config_tool.zip",target:"_blank"},"Download WIZ107/108SR & WIZ750SR Configuration Tool"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wiz100105110sr-series"},"WIZ100/105/110SR Series"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ100SR/"},"WIZ100SR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ105SR/"},"WIZ105SR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ110SR/"},"WIZ110SR"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ100-105-110SR/Document/WIZ100SR_UM_v220e.pdf",target:"_blank"},"Download WIZ100SR User Manual v2.2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ100-105-110SR/Document/WIZ105SR_UM_v130e.pdf",target:"_blank"},"Download WIZ105SR User Manual v1.3.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ100-105-110SR/Document/WIZ110SR_UM_v210e.pdf",target:"_blank"},"Download WIZ110SR User Manual v2.1.0"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ100-105-110SR/Document/WIZ1x0SR_AN_S2E-Programming-Guide_V030E.pdf",target:"_blank"},"WIZ100SR/ WIZ105SR/ WIZ110SR Programmer\u2019s Guide"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(19982).Z,width:"584",height:"490"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"WIZ120/125SR Configuration Tool v1.1.0")),(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ120_125SR/Utility/WIZ12xSR_Config_V110.zip",target:"_blank"},"Download WIZ120/125SR Configuration Tool"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wiz120125sr"},"WIZ120/125SR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ120SR/"},"WIZ120SR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ125SR/"},"WIZ125SR"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ120_125SR/Document/WIZ120SR_UM_v110e.pdf",target:"_blank"},"WIZ120SR User manual")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ120_125SR/Document/WIZ125SR_User_Manual_EN_V1.0.pdf",target:"_blank"},"WIZ125SR User manual"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(13475).Z,width:"795",height:"554"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"WIZ120/125SR Configuration Tool v1.1.0")),(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ120_125SR/Utility/WIZ12xSR_Config_V110.zip",target:"_blank"},"Download WIZ120/125SR Configuration Tool"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"wiz140145sr"},"WIZ140/145SR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/Product/S2E-Module/WIZ140SR/"},"WIZ140SR"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/Product/S2E-Module/WIZ145SR/"},"WIZ145SR"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ140_145SR/Document/WIZ14xSR_UM_v201e.pdf",target:"_blank"},"WIZ140/145SR User manual"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(11053).Z,width:"854",height:"593"})),(0,r.kt)("a",{href:"http://www.wiznet.io/wp-content/uploads/wiznethome/S2E%20Module/WIZ140_145SR/Utility/WIZ14xSRConfig_Rev1_7.zip",target:"_blank"},"Download WIZ140/145SR Configuration Tool"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"w7500p-isp-tool"},"W7500(P) ISP Tool"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Product/iMCU/W7500/documents/appnote/how-to-use-isp-tool"},(0,r.kt)("strong",{parentName:"a"},"Go to ISP tool manual & Program download")),"  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wiz-mac-tool"},"WIZ Mac Tool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ750SR/developers-guide-EN#how-to-re-enter-the-mac-address-on-your-devices"},"How to re-enter the MAC address on your devices"))),(0,r.kt)("a",{href:"/img/products/wiz750sr/developers/restore-mac/wizmactool_v20151127.zip",target:"_blank"},"Download the WizMACTool Program"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wiz-vsp"},"WIZ VSP"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://wizvsp.wiznet.io/"},(0,r.kt)("strong",{parentName:"a"},"Go to WIZVSP Download page"))),(0,r.kt)("hr",null))}s.isMDXComponent=!0},13475:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wiz12xsr_configtool-92a298897a89f4ee4a8594b3c7f5631f.png"},11053:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wiz140sr-configtool-a138a4676205f3f8ecff52a588e10d76.png"},19982:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wiz1xx_configtool-322cd499e9307e46fda34c3732fdcb3a.png"},40804:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wiz550sr-configtool-d462f3a38b9685312b90a88903b98a2e.png"},44104:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVQ4T6WT7Q2CMBCGYQJxAnEC3UDcADdgA3UDnUDdgBHcQJlAmEBG0An0fUzPNA3+QJq8SXvcPffREkcDVzwwPjLAWaCZVEon6fEDnMi+lgqpkXIDvLyAVnuUBZCrzqmTfYoNQMZRz3ae8k8MQMZJTwAxUwAb6dAz2Ny3AOht8SegAmADpKfcAY3H1Fn+rRQ6H21mPmAlI9dJRUCXQVW+/ds2gFriDYRXGj4yqxR7Kt2lhgPl8DjGrlQysbKOCsw+1+Ym7QHQZyvtHCyI6zziSxuplQmR/i9SKVUdYSSi1UJiPgy89vvEASNKnbPP4e1TKYlI8lmD/8Y3/gQyn/wkO/QAAAAASUVORK5CYII="},85857:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/wizconfig_main_v1.0.0-8274661c9607addbb5d8cacd9bc26f71.png"},34582:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/configtool_overview-b0410832c2bbda0a1cbad13f121dec4c.png"}}]);