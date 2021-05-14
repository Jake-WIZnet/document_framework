(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[41699],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9202:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(74034),a=r(79973),o=(r(67294),r(3905)),i={id:"ref_schematic",title:"Reference Schematic",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/iEthernet/W5500/ref_schematic",id:"Product/iEthernet/W5500/ref_schematic",isDocsHomePage:!1,title:"Reference Schematic",description:"External Transformer Type",source:"@site/docs/Product/iEthernet/W5500/Ref._Schematic.md",sourceDirName:"Product/iEthernet/W5500",slug:"/Product/iEthernet/W5500/ref_schematic",permalink:"/Product/iEthernet/W5500/ref_schematic",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/Ref._Schematic.md",version:"current",frontMatter:{id:"ref_schematic",title:"Reference Schematic",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Driver",permalink:"/Product/iEthernet/W5500/driver"},next:{title:"Migration from W5200 to W5500",permalink:"/Product/iEthernet/W5500/migration_from_w5200"}},s=[{value:"External Transformer Type",id:"external-transformer-type",children:[]},{value:"RJ45 with Transformer Type",id:"rj45-with-transformer-type",children:[]},{value:"RJ45 with integrated Transformer and connected CT",id:"rj45-with-integrated-transformer-and-connected-ct",children:[]},{value:"Recommended RJ45 using W5500",id:"recommended-rj45-using-w5500",children:[]}],l={toc:s};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"external-transformer-type"},"External Transformer Type"),(0,o.kt)("a",{href:"/img/products/w5500/w5500_sch_v110_use_trans_.pdf",target:"_blank"},"W5500 Ref.Schematic - External Transformer"),"![W5500 Ref.Schematic (External Transformer)](/img/products/w5500/w5500_sch_v110_use_trans_.png)",(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"rj45-with-transformer-type"},"RJ45 with Transformer Type"),(0,o.kt)("a",{href:"/img/products/w5500/w5500_sch_v110_use_trans_.pdf",target:"_blank"},"W5500 Ref.Schematic - RJ45 with Transformer"),"![W5500 Reference Schematic (RJ45 with Transformer)](/img/products/w5500/w5500_sch_v110_use_mag_.png)",(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"rj45-with-integrated-transformer-and-connected-ct"},"RJ45 with integrated Transformer and connected CT"),(0,o.kt)("p",null,"For using connected CT signals inside the Transformer or inside RJ45 the\nmatching network (2x 50R) of the RX+/- signals must be isolated from CT\n(3.3V). For that isolation we need C23 and C24.",(0,o.kt)("br",{parentName:"p"}),"\n","Please refer to the following schematic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"C23 and C24 must be added. Otherwise, W5500 won't operate well.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"And by connected center tap, Power dissipation may be raised.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"So, you'd better use a MAGJACK without connected center tap except\nthe case that you have to use one with connected center tap."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"w5500_schematic-connected-cts_003.jpg",src:r(33303).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","The RJ45 from UDE (RB1-125BAG1A) is used in many of our ",(0,o.kt)("strong",{parentName:"p"},"W5100")," and\n",(0,o.kt)("strong",{parentName:"p"},"W7100A")," related Modules."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"recommended-rj45-using-w5500"},"Recommended RJ45 using W5500"),(0,o.kt)("h4",{id:"external-transformer"},"External Transformer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"H1102NL from Pulse",(0,o.kt)("a",{href:"/img/products/w5500/01.h1102nl_h325.pdf",target:"_blank"},"datasheet")),(0,o.kt)("li",{parentName:"ul"},"LCZ3A1CB from CETUS",(0,o.kt)("a",{href:"/img/products/w5500/02.lcz3a1cb.pdf",target:"_blank"},"datasheet"))),(0,o.kt)("h4",{id:"rj45-with-integrated-transformer"},"RJ45 with integrated Transformer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"J1B121ZCCD from CETUS",(0,o.kt)("a",{href:"/img/blob/master/static/img/products/w5500/1.j1b121zccd-v0-101115.pdf",target:"_blank"},"datasheet")),(0,o.kt)("li",{parentName:"ul"},"J1B1211CCD from CETUS (used in * 1)",(0,o.kt)("a",{href:"/img/products/w5500/2.j1b1211ccd.pdf",target:"_blank"},"datasheet")),(0,o.kt)("li",{parentName:"ul"},"RB1-1D5B8K1A from UDE",(0,o.kt)("a",{href:"/img/products/w5500/3.rb1-1d5b8k1a_287-00_.pdf",target:"_blank"},"datasheet")),(0,o.kt)("li",{parentName:"ul"},"RB1-125BAG1A from UDE (used in * 2)",(0,o.kt)("a",{href:"/img/products/w5500/rb1-125bag1a_111-00_.pdf",target:"_blank"},"datasheet")),(0,o.kt)("li",{parentName:"ul"},"J0011D21BNL from Pulse",(0,o.kt)("a",{href:"/img/products/w5500/4.j0011d21bnl.pdf",target:"_blank"},"datasheet"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1) we use the J1B1211CCD from CETUS in our\n",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/Product/iEthernet/W5500/W5500-EVB/w5500_evb"},"W5500-EVB")),",\n",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/Product/ioModule/WIZ550io/overview"},"WIZ550io")),",\n",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/Product/S2E-Module/WIZ550S2E/wiz550s2e"},"WIZ550S2E"))," and\n",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/Product/App-Module/WIZ550web/wiz550web"},"WIZ550web"))," Modules.  "),(0,o.kt)("li",{parentName:"ul"},"2) we use the RB1-125BAG1A from UDE in most of our our ",(0,o.kt)("strong",{parentName:"li"},"W5100")," &\n",(0,o.kt)("strong",{parentName:"li"},"W7100A")," related Plug-In and Serial-to-Ethernet (S2E) Modules.  ")),(0,o.kt)("hr",null))}u.isMDXComponent=!0},33303:function(e,t,r){"use strict";t.Z=r.p+"assets/images/w5500_schematic-connected-cts_003-cd3d18a8736283ecf62d7e27997ccde3.jpg"}}]);