"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[9031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={id:"ioshield_k",title:"ioShield-K (discontinued)",date:new Date("2020-04-03T00:00:00.000Z")},o=void 0,s={unversionedId:"Product/Open-Source-Hardware/ioshield_k",id:"Product/Open-Source-Hardware/ioshield_k",title:"ioShield-K (discontinued)",description:"Please note that this product was discontinued.",source:"@site/docs/Product/Open-Source-Hardware/ioShield-K.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/ioshield_k",permalink:"/Product/Open-Source-Hardware/ioshield_k",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/ioShield-K.md",tags:[],version:"current",frontMatter:{id:"ioshield_k",title:"ioShield-K (discontinued)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"ioShield-A (discontinued)",permalink:"/Product/Open-Source-Hardware/ioshield_a"},next:{title:"ioShield-L (discontinued)",permalink:"/Product/Open-Source-Hardware/ioshield_l"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"GADGET RENESAS",id:"gadget-renesas",level:2},{value:"GR-KURUMI",id:"gr-kurumi",level:2}],c={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this product was discontinued.\nWe do not recommend using it in new design. ")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7006).Z,width:"356",height:"323"})," "),(0,a.kt)("p",null,"ioShield-K is an Ethernet Shield for GR-KURUMI(Gadget Renesas KURUMI). The ioShield-K allows a GR-KURUMI board to connect to the internet. It is based on the Wiznet W5500 ethernet chip (",(0,a.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5500/datasheet"},"W5500 Datasheet"),"). The Wiznet W5500 provides a network (IP) stack capable of both TCP and UDP. It supports up to eight simultaneous socket connections. Use the Ethernet library(\ud83d\udcc4",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZ_Ethernet_Library"},"WIZ_Ethernet_Library"),") to write sketches which connect to the internet using the shield. The ioShield-K connects to an GR-KURUMI board using long wire-wrap headers which extend through the shield."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7006).Z,width:"356",height:"323"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hardware Ver1.0 Design file(",(0,a.kt)("a",{href:"/img/osh/ioshield-k/ioshield-k.pdf",target:"_blank"},"PDF"),") / ",(0,a.kt)("a",{target:"_blank",href:r(68153).Z},"Eagle CAD")," and ",(0,a.kt)("a",{href:"/img/osh/ioshield-k/ioshield-k_v1_0_pl_130904.pdf",target:"_blank"},"Part List")," of ioShield-K"),(0,a.kt)("li",{parentName:"ul"},"Hardware Ver1.1 Design file(",(0,a.kt)("a",{href:"/img/osh/ioshield-k/ioshield-k_v1.1_sch.pdf",target:"_blank"},"PDF"),") / ",(0,a.kt)("a",{target:"_blank",href:r(76423).Z},"Eagle CAD")," and ",(0,a.kt)("a",{href:"/img/osh/ioshield-k/ioshield-k_v1_1_pl_140120.pdf",target:"_blank"},"Part List")," of ioShield-K")),(0,a.kt)("h2",{id:"gadget-renesas"},"GADGET RENESAS"),(0,a.kt)("p",null,"Gadget Renesas is a promotion project to offer a series of boards and\n\u201ceasy to start with\u201d cloud-based software environment for people who\nhave no embedded programming experience, for embedded professionals to\ndo rapid prototyping. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Board        : GR-SAKURA (RX63N) / ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("strong",{parentName:"strong"},"GR-KURUMI (RL78/G13)"))),(0,a.kt)("li",{parentName:"ul"},"Web-Complier :",(0,a.kt)("a",{parentName:"li",href:"http://www.renesas.com/products/promotion/gr/index.jsp"},"Web-Based Complier")," "),(0,a.kt)("li",{parentName:"ul"},"Library      :",(0,a.kt)("a",{parentName:"li",href:"http://tool-cloud.renesas.com/Renesas/ref_kurumi/gr_reference_j.html"},"KURUMI SKETCH (Japanese)"))),(0,a.kt)("h2",{id:"gr-kurumi"},"GR-KURUMI"),(0,a.kt)("p",null,"GR-KURUMI is the reference board that incorporates the RL78G14 (Renesas\n16-bit low-power consumption MCU). Compatible with Arduino Pro Mini,\nthis new board can use existing sample codes, ensuring easy use with\nArduino language and standard libraries from both hardware and software\naspects. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"H/W"),(0,a.kt)("li",{parentName:"ul"},"S/W ",(0,a.kt)("a",{parentName:"li",href:"http://renesasrulz.com/app_kits_and_demo_boards/gadget_renesas_user_forum/f/128/t/3968.aspx"},"KURUMI Library (Japanese)"))))}p.isMDXComponent=!0},76423:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/io_shield-k_ver1_1-cd712d834ae6b08ddf7e8b83a4023215.zip"},68153:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/ioshield-k_eaglecad-eefecee5acf05af85715a2ab94a3b456.zip"},7006:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/io_s_k-aa366acc54ef001e2f9ddc0ddec26ca2.png"}}]);