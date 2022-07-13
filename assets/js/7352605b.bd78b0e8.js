"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1509],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},51825:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={id:"rng",title:"Random number generator (RNG)",date:new Date("2020-04-03T00:00:00.000Z")},i=void 0,l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/rng",id:"Product/iMCU/W7500/Peripherals-internal/rng",title:"Random number generator (RNG)",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/rng.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/rng",permalink:"/Product/iMCU/W7500/Peripherals-internal/rng",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/rng.md",tags:[],version:"current",frontMatter:{id:"rng",title:"Random number generator (RNG)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"RNG example (Random number generation example)",permalink:"/Product/iMCU/W7500/Peripherals-internal/rng-ex"},next:{title:"SSP SD card LED example",permalink:"/Product/iMCU/W7500/Peripherals-internal/sd-card-led"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Functional description.",id:"functional-description",level:2},{value:"Operation-RNG",id:"operation-rng",level:3},{value:"Peripheral_Examples",id:"peripheral_examples",level:2}],c={toc:p};function d(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"RNG is a 32bit random number generator. RNG generates power on random number when power on reset. RNG can run/stop by software. RNG seed value and polynomial of RNG can be modified by software."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"32bit pseudo random number generator"),(0,a.kt)("li",{parentName:"ul"},"Formula of pseudo random number generator (polynomial) can be modified."),(0,a.kt)("li",{parentName:"ul"},"Seed value of random generator can be modified."),(0,a.kt)("li",{parentName:"ul"},"Support power on reset random value"),(0,a.kt)("li",{parentName:"ul"},"Random value can be obtained by control start/stop by software.")),(0,a.kt)("h2",{id:"functional-description"},"Functional description."),(0,a.kt)("p",null,"The below Figure shows the RNG block diagram."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 1 RNG block diagram",src:t(75422).Z,width:"1157",height:"800"})),(0,a.kt)("h3",{id:"operation-rng"},"Operation-RNG"),(0,a.kt)("p",null,"A random number is automatically generated after powering on reset,\nFollow the procedure below to manually generate a random number."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change MODE to start/stop by register."),(0,a.kt)("li",{parentName:"ol"},"Change clock source/seed value/polynomial value if need."),(0,a.kt)("li",{parentName:"ol"},"Run and Stop the RNG."),(0,a.kt)("li",{parentName:"ol"},"Read Random value.")),(0,a.kt)("p",null,"The below Figure show the flowchart of RNG operation. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(36172).Z,width:"207",height:"659"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/rng-ex"},"Random Number Generation example"))))}d.isMDXComponent=!0},75422:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/rng_block_diagram-795719f9c86c7a14f6d64cf5c522bd57.jpg"},36172:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/rng_flow_chart-09cb9f407ef8639d6461aefe3fd4c0ed.jpg"}}]);