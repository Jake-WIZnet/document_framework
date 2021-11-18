"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[3974],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70218:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],l={id:"driver",title:"Driver",date:new Date("2020-04-03T00:00:00.000Z")},c=void 0,u={unversionedId:"Product/iEthernet/W5100S/driver",id:"Product/iEthernet/W5100S/driver",isDocsHomePage:!1,title:"Driver",description:'The ioLibrary means "Internet Offload Library" for WIZnet chip. It',source:"@site/docs/Product/iEthernet/W5100S/Driver.md",sourceDirName:"Product/iEthernet/W5100S",slug:"/Product/iEthernet/W5100S/driver",permalink:"/Product/iEthernet/W5100S/driver",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Driver.md",tags:[],version:"current",frontMatter:{id:"driver",title:"Driver",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Document",permalink:"/Product/iEthernet/W5100S/document"},next:{title:"Reference Schematics",permalink:"/Product/iEthernet/W5100S/ref_schematic"}},p=[{value:"ioLibrary",id:"iolibrary",children:[{value:"Overview",id:"overview",children:[],level:4},{value:"Download",id:"download",children:[],level:4}],level:2}],s={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ioLibrary means ",(0,o.kt)("strong",{parentName:"p"},'"Internet Offload Library"')," for WIZnet chip. It\nincludes ",(0,o.kt)("strong",{parentName:"p"},"drivers")," and ",(0,o.kt)("strong",{parentName:"p"},"application protocols"),". The ioLibrary can be\nused for ",(0,o.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/overview"},"W5100S")," application designs. These\nwill be updated continuously."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"iolibrary"},"ioLibrary"),(0,o.kt)("h4",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This driver provides the Berkeley Socket type APIs. The function names\nof this ioLibrary","_","BSD are the same as the function names of the\nioLibrary."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Directory Structure ",(0,o.kt)("img",{src:r(69486).Z}),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ethernet : SOCKET APIs like BSD & WIZCHIP(W5500,W5200 and etc)\nDriver"),(0,o.kt)("li",{parentName:"ul"},"Internet : ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"DHCP client "),(0,o.kt)("li",{parentName:"ul"},"DNS client "),(0,o.kt)("li",{parentName:"ul"},"FTP client"),(0,o.kt)("li",{parentName:"ul"},"FTP Server"),(0,o.kt)("li",{parentName:"ul"},"Http Server"),(0,o.kt)("li",{parentName:"ul"},"SNMP"),(0,o.kt)("li",{parentName:"ul"},"SNTP"),(0,o.kt)("li",{parentName:"ul"},"TFTP")))))),(0,o.kt)("h4",{id:"download"},"Download"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ioLibrary : latest version")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ioLibrary GitHub Repository")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/Wiznet/ioLibrary_Driver"},"https://github.com/Wiznet/ioLibrary_Driver"))),(0,o.kt)("p",null,"For more information on ioLibrary, click \ud83c\udf0e",(0,o.kt)("a",{parentName:"p",href:"../W5500/driver"},"W5500 Driver")))}d.isMDXComponent=!0},69486:function(e,t,r){t.Z=r.p+"assets/images/w5100s_iolibrary-638223977bb31d0e4d3fc2f991a09214.png"}}]);