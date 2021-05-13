(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[66972],{3905:function(e,t,r){"use strict";r.d(t,{kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66700:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"internal_memory_and_sfr",title:"Internal Data Memory (256 Byte) and SFR",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7100/internal_memory_and_sfr",id:"Product/iMCU/W7100/internal_memory_and_sfr",isDocsHomePage:!1,title:"Internal Data Memory (256 Byte) and SFR",description:"The Figure below shows the Internal Memory and Special Function",source:"@site/docs/Product/iMCU/W7100/internal_Memory_and_SFR.md",sourceDirName:"Product/iMCU/W7100",slug:"/Product/iMCU/W7100/internal_memory_and_sfr",permalink:"/Product/iMCU/W7100/internal_memory_and_sfr",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7100/internal_Memory_and_SFR.md",version:"current",frontMatter:{id:"internal_memory_and_sfr",title:"Internal Data Memory (256 Byte) and SFR",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"All pages",permalink:"/Product/iMCU/W7500P/all_pages"},next:{title:"P0\\PU (0xEB)",permalink:"/Product/iMCU/W7100/p0_pu"}},c=[],s={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Figure below shows the Internal Memory and Special Function\nRegisters (SFR) map."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"0xFF .. 0x80"),(0,i.kt)("th",{parentName:"tr",align:null},"Upper Internal RAM shared with Stack space (indirect addressing)"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"SFR.md"},"SFR Special Function Registers (direct addressing)")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x7F .. 0x30"),(0,i.kt)("td",{parentName:"tr",align:null},"Lower Internal RAM shared with Stack space (direct & indirect addressing)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x2F .. 0x20"),(0,i.kt)("td",{parentName:"tr",align:null},"bit addressable area"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0x1F .. 0x00"),(0,i.kt)("td",{parentName:"tr",align:null},"4 banks, R0-R7 each"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"The lower internal RAM consists of four register banks with eight\nregisters each, a bit- addressable segment with 128 bits (16 bytes) that\nbegins at 0x20, and a scratchpad area with 208 bytes is embedded. With\nindirect addressing mode ranging from 0x80 to 0xFF, the highest 128\nbytes is accessed as an internal memory.",(0,i.kt)("br",{parentName:"p"}),"\n","But with direct addressing mode ranging from 0x80 to 0xFF, this area is\naccessed as a ",(0,i.kt)("strong",{parentName:"p"},"SFR")," memory:"))}d.isMDXComponent=!0}}]);