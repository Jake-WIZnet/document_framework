"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[9079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),c=n,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||o;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},81530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"firmware-update-guide",title:"Firmware Update Guide",date:new Date("2022-06-28T00:00:00.000Z")},i=void 0,l={unversionedId:"Product/S2E-Module/WIZ5xxSR-RP-Series/firmware-update-guide",id:"Product/S2E-Module/WIZ5xxSR-RP-Series/firmware-update-guide",title:"Firmware Update Guide",description:"-----",source:"@site/docs/Product/S2E-Module/WIZ5xxSR-RP-Series/firmware-update-guide-en.md",sourceDirName:"Product/S2E-Module/WIZ5xxSR-RP-Series",slug:"/Product/S2E-Module/WIZ5xxSR-RP-Series/firmware-update-guide",permalink:"/Product/S2E-Module/WIZ5xxSR-RP-Series/firmware-update-guide",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ5xxSR-RP-Series/firmware-update-guide-en.md",tags:[],version:"current",frontMatter:{id:"firmware-update-guide",title:"Firmware Update Guide",date:"2022-06-28T00:00:00.000Z"},sidebar:"docs",previous:{title:"Configuration Tool Manual",permalink:"/Product/S2E-Module/WIZ5xxSR-RP-Series/configuration-tool-manual"},next:{title:"MQTT Connection Guide",permalink:"/Product/S2E-Module/WIZ5xxSR-RP-Series/mqtt-connection-guide"}},d={},p=[{value:"WIZ5xxSR-RP Firmware Update Overview",id:"wiz5xxsr-rp-firmware-update-overview",level:2},{value:"Memory Map",id:"memory-map",level:3},{value:"Firmware Update Sequence",id:"firmware-update-sequence",level:3},{value:"How to Upload or Update the Firmware of WIZ5xxSR-RP",id:"how-to-upload-or-update-the-firmware-of-wiz5xxsr-rp",level:2},{value:"Using the Configuration Tool",id:"using-the-configuration-tool",level:2},{value:"Required Hardware and Software",id:"required-hardware-and-software",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"How to Upload or Update the Firmware",id:"how-to-upload-or-update-the-firmware",level:3},{value:"Step 1: Setup Environment to Use WIZ5xxSR-RP",id:"step-1-setup-environment-to-use-wiz5xxsr-rp",level:4},{value:"Step 2: Upload Firmware",id:"step-2-upload-firmware",level:4},{value:"Step 3: Done",id:"step-3-done",level:4}],u={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"wiz5xxsr-rp-firmware-update-overview"},"WIZ5xxSR-RP Firmware Update Overview"),(0,n.kt)("h3",{id:"memory-map"},"Memory Map"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Internal Flash",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Main flash size: 2 Mbytes")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"}," Top Flash Memory Address /-------------------------------------------\\  0x10200000\n                          |                                           |\n                          |             Parameters (64KB)             |\n                          |-------------------------------------------|  0x101F0000\n                          |                                           |\n                          |              Reserved (448KB)             |\n                          |                                           |\n                          |-------------------------------------------|  0x10180000\n                          |                                           |\n                          |                                           |\n                          |        Firmware Binary Bank (512KB)       |\n                          |                                           |\n                          |                                           |\n                          |-------------------------------------------|  0x10100000\n                          |                                           |\n                          |                                           |\n                          |          Application Bank (512KB)         |\n                          |                                           |\n                          |                                           |\n                          |-------------------------------------------|  0x10080000\n                          |                                           |\n      Page 1 (256KB)      |                                           |\n                          |             Bootloader (512KB)            |\n      Page 0 (256KB)      |                                           |\n                          |                                           |\n                          \\-------------------------------------------/  0x100000000\n")),(0,n.kt)("h3",{id:"firmware-update-sequence"},"Firmware Update Sequence"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:r(53694).Z,width:"944",height:"720"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,n.kt)("strong",{parentName:"td"},"Firmware Update Sequence"))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"how-to-upload-or-update-the-firmware-of-wiz5xxsr-rp"},"How to Upload or Update the Firmware of WIZ5xxSR-RP"),(0,n.kt)("p",null,"The WIZ5xxSR-RP provides one method of uploading or updating firmware."),(0,n.kt)("p",null,"That's the way over ethernet using the Configuration Tool."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#using-the-configuration-tool"},"Using the Configuration Tool"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"using-the-configuration-tool"},"Using the Configuration Tool"),(0,n.kt)("h3",{id:"required-hardware-and-software"},"Required Hardware and Software"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WIZ5xxSR-RP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/overview"},"WIZ500SR-RP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/overview"},"WIZ505SR-RP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/overview"},"WIZ510SR-RP")))),(0,n.kt)("li",{parentName:"ul"},"WIZ5xxSR-RP Evaluation Board (WIZ510SR-RP can be used without WIZ5xxSR-RP Evaluation Board.)"),(0,n.kt)("li",{parentName:"ul"},"5V Power adapter"),(0,n.kt)("li",{parentName:"ul"},"Cables (Ethernet / Serial)")),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WIZnet S2E Configuration Tool",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.5.0"},"Download the Latest Version")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases"},"Download the Older Versions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI"},"GitHub Repository"))))),(0,n.kt)("h3",{id:"how-to-upload-or-update-the-firmware"},"How to Upload or Update the Firmware"),(0,n.kt)("h4",{id:"step-1-setup-environment-to-use-wiz5xxsr-rp"},"Step 1: Setup Environment to Use WIZ5xxSR-RP"),(0,n.kt)("p",null,"The process of setup environment to use the WIZ5xxSR-RP each product is available at the ",(0,n.kt)("strong",{parentName:"p"},"'Getting Started'")," document below."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/getting-started"},"Getting Started: WIZ500SR-RP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ505SR-RP/getting-started"},"Getting Started: WIZ505SR-RP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ510SR-RP/getting-started"},"Getting Started: WIZ510SR-RP"))),(0,n.kt)("h4",{id:"step-2-upload-firmware"},"Step 2: Upload Firmware"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Firmware Upload")," button")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:r(20692).Z,width:"834",height:"722"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,n.kt)("strong",{parentName:"td"},"Click Firmware Upload button"))))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Select the uploaded firmware")),(0,n.kt)("p",null,"When selecting firmware, you must select ",(0,n.kt)("strong",{parentName:"p"},".bin"),"(*_linker.bin)."),(0,n.kt)("p",null,"Firmware in a file format other than .bin cannot be uploaded or updated properly."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:r(48254).Z,width:"834",height:"722"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,n.kt)("strong",{parentName:"td"},"Select uploaded firmware"))))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Uploading the firmware")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:r(85560).Z,width:"834",height:"722"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,n.kt)("strong",{parentName:"td"},"Uploading firmware"))))),(0,n.kt)("h4",{id:"step-3-done"},"Step 3: Done"),(0,n.kt)("p",null,"Firmware upload or update completed!"),(0,n.kt)("p",null,"WIZ5xxSR-RP is searched after about 5 seconds in the Configuration Tool after firmware upload or update completed."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{src:r(57179).Z,width:"834",height:"722"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,n.kt)("strong",{parentName:"td"},"Firmware upload or update complete"))))),(0,n.kt)("hr",null))}m.isMDXComponent=!0},20692:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/click_firmware_upload_button-53f75302626b4242bede55ae68867b17.png"},53694:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/firmware_update_sequence-5bc9a579008251d010613dc8c3dc3abe.png"},57179:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/firmware_upload_or_update_complete-6b6feb922403e3891d83fa12aefdae7e.png"},48254:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/select_uploaded_firmware-54f797d8b9f22654a7eb3dca7e9b40e2.png"},85560:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/uploading_firmware-c5e752f0f6ac538f80de8f55e7a3966d.png"}}]);