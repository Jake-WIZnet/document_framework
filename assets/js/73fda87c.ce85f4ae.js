"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[4696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(h,c(c({ref:t},p),{},{components:r})):o.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:n,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={id:"new-project-truestudio",title:"Make New W6100-EVB Projects using TrueSTUDIO",date:new Date("2020-04-03T00:00:00.000Z")},c=void 0,a={unversionedId:"Product/iEthernet/W6100/new-project-truestudio",id:"Product/iEthernet/W6100/new-project-truestudio",title:"Make New W6100-EVB Projects using TrueSTUDIO",description:"This page introduces how to make the project for W6100-EVB with",source:"@site/docs/Product/iEthernet/W6100/make-a-new-projects-truestudio.md",sourceDirName:"Product/iEthernet/W6100",slug:"/Product/iEthernet/W6100/new-project-truestudio",permalink:"/Product/iEthernet/W6100/new-project-truestudio",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W6100/make-a-new-projects-truestudio.md",tags:[],version:"current",frontMatter:{id:"new-project-truestudio",title:"Make New W6100-EVB Projects using TrueSTUDIO",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Make New W6100-EVB Projects using STM32CubeIDE",permalink:"/Product/iEthernet/W6100/new-project-stm32cubeide"},next:{title:"Make New W5100S-EVB Projects using Eclipse",permalink:"/Product/iEthernet/W6100/new-project-eclipse"}},s={},l=[{value:"Make a new W6100-EVB project with TrueSTUDIO IDE",id:"make-a-new-w6100-evb-project-with-truestudio-ide",level:2},{value:"0. Download and install Dev. enviroment &amp; compiler",id:"0-download-and-install-dev-enviroment--compiler",level:3},{value:"1. Import libraries to TrueSTUDIO IDE workspace",id:"1-import-libraries-to-truestudio-ide-workspace",level:3},{value:"2. Project build And Complete settings",id:"2-project-build-and-complete-settings",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page introduces how to make the project for W6100-EVB with\ndifferent IDEs such as STMicroelectronics TrueSTUDIO."),(0,n.kt)("h2",{id:"make-a-new-w6100-evb-project-with-truestudio-ide"},"Make a new W6100-EVB project with TrueSTUDIO IDE"),(0,n.kt)("h3",{id:"0-download-and-install-dev-enviroment--compiler"},"0","."," Download and install Dev. enviroment & compiler"),(0,n.kt)("p",null,"TrueSTUDIO provides a free Dev. Environment incl. It include IDE and C\ncompiler.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Download the IDE + compiler here:"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://atollic.com/resources/download/"},"https://atollic.com/resources/download/"),"  "),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-import-libraries-to-truestudio-ide-workspace"},"1","."," Import libraries to TrueSTUDIO IDE workspace"),(0,n.kt)("p",null,"You should import provided projects to your new project for easy to\nconfigure."),(0,n.kt)("p",null,"Download the projects for W6100-EVB from\n",(0,n.kt)("img",{src:r(96703).Z,width:"16",height:"16"}),(0,n.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/W6100-EVB/tree/truestudio_ver"},"W6100","_","EVB GitHub repository"),". After downloading,\nimport the required project to your workspace."),(0,n.kt)("p",null,"1","."," mouse right click \u2192 click to Import",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{src:r(49212).Z,width:"1010",height:"760"})),(0,n.kt)("p",null,"2","."," Select General \u2192 Existing Projects into Workspace",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{src:r(50802).Z,width:"511",height:"570"})),(0,n.kt)("p",null,"3","."," Select Folder from Github repository",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{src:r(55850).Z,width:"1009",height:"761"})),(0,n.kt)("p",null,"4","."," Click Finish",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{src:r(25320).Z,width:"1008",height:"760"})),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2-project-build-and-complete-settings"},"2","."," Project build And Complete settings"),(0,n.kt)("p",null,"Before Complete, Users should check build project"),(0,n.kt)("p",null,"1","."," Project mouse right click -",">"," Click clean project\n",(0,n.kt)("img",{src:r(28166).Z,width:"513",height:"545"})),(0,n.kt)("p",null,"2","."," Project mouse right click -",">"," Click project build\n",(0,n.kt)("img",{src:r(1483).Z,width:"662",height:"583"})),(0,n.kt)("p",null,"From now on, you can make your own application project based on the\nnewly created project for W6100-EVB","!",(0,n.kt)("br",{parentName:"p"}),"\n","Enjoy W6100-EVB ","!","!"),(0,n.kt)("hr",null))}d.isMDXComponent=!0},96703:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHElEQVQ4T42RjU0CQRBGoQIt4TpQKgAqUCtQKhArkBKkArADqcCjArUD6IAO9L1zJtlAFm6Tl539+b6dmR0O+o1rrr3CPRi38AK7YQ+9gk+4hb0iGMMBRpcMSvE7gkUYPDGvYHPO4FisqByWcVMzuCTWyFIGNYM3zp7BtH25SUGksGZ+hGXNQHebZOOy3hHxN6T5D/GkNDDtCXzAL2xj7Z6/sAG/0XMzcv+QBlmz35SX7oin0AZ+nfc9d88Mu42yYUvWczD1L5jBGnZejpcj/J80OG5YXmhCqEHXsDA/Mai6x+uKu4ZBl3Y5zMBNu+uFcuTLVXGWYFdt2AMYO3qJ06CJDK6YW3AtZ1/OVPMbFdhMy7AkM1lEXJZ1Ev8BtedKUMpzOn4AAAAASUVORK5CYII="},49212:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/true_tool_set1-6ad97cf119e984da6cd17e04712906e8.png"},50802:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/true_tool_set2-136fe767dc854b408fc65557f91469f9.png"},55850:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/true_tool_set3-97e760fedb9628ec8bf14474bef7202a.png"},25320:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/true_tool_set4-e6022e91837d0a9d8686b0e56995f7f1.png"},28166:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/true_tool_set5-54c3f9eccd013f95871e8525af96f10b.png"},1483:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/true_tool_set6-72a8a83453d70cd076c3f3b65c354f25.png"}}]);