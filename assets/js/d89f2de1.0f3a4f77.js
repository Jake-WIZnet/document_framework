"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(n),p=r,f=g["".concat(d,".").concat(p)]||g[p]||c[p]||a;return n?i.createElement(f,l(l({ref:t},s),{},{components:n})):i.createElement(f,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={id:"design_guide",title:"Design Guide",date:new Date("2020-04-03T00:00:00.000Z")},l=void 0,o={unversionedId:"Design-Guide/design_guide",id:"Design-Guide/design_guide",title:"Design Guide",description:"Overview",source:"@site/docs/Design-Guide/Design_Guide.md",sourceDirName:"Design-Guide",slug:"/Design-Guide/design_guide",permalink:"/Design-Guide/design_guide",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Design-Guide/Design_Guide.md",tags:[],version:"current",frontMatter:{id:"design_guide",title:"Design Guide",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"WizFi210-EVB",permalink:"/Product/Wi-Fi-Module/WizFi210/wizfi210-evb"},next:{title:"Hardware Design Guide",permalink:"/Design-Guide/hardware_design_guide"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Design Guide List",id:"design-guide-list",level:2},{value:"Design Guide Download",id:"design-guide-download",level:2},{value:"Limitation Note",id:"limitation-note",level:2}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"You must refer to the Design Guide to make a product using WIZnet's\nchips. The Ethernet signal is a very sensitive signal for fast\nswitching. In addition, this Design Guide will help you design Hardware\nusing WIZnet's chips.: easily, quickly, accurately"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"design-guide-list"},"Design Guide List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Design-Guide/hardware_design_guide"},"Hardware Design Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Design-Guide/package_information"},"Package Information")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ir_reflow_profile"},"IR Reflow profile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"eagle_cad_library_of_wiznet_products"},"Eagle CAD Library of WIZnet Products"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"design-guide-download"},"Design Guide Download"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/img/design_guide/Wiznet Ethernet Design Guide_ENG.pdf",target:"_blank"},"Hardware Design Guide(ENG)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/img/design_guide/Wiznet Ethernet Design Guide_KOR.pdf",target:"_blank"},"Hardware Design Guide(KOR)"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"limitation-note"},"Limitation Note"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(97972).Z},"English")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(21921).Z},"\ud55c\uae00"))),(0,r.kt)("hr",null))}c.isMDXComponent=!0},97972:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/limitation_note_-_arp_problem_in_the_nlb_environment_-_english_0312_-b8d367a148e870c05217389964f76f15.pdf"},21921:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/limitation_note_-_arp_problem_in_the_nlb_environment_-_korean_0312_-34070007a8ded6c4782d68730993cdfa.pdf"}}]);