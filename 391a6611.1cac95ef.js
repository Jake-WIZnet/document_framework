(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(582)),o={id:"gpio",title:"General Purpose Input/Outputs (GPIO)",date:new Date("2020-06-10T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/gpio",id:"Product/iMCU/W7500/Peripherals-internal/gpio",isDocsHomePage:!1,title:"General Purpose Input/Outputs (GPIO)",description:"Introduction",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\gpio.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/gpio",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/gpio.md",sidebar:"docs",previous:{title:"UART Hardware Control example",permalink:"/Product/iMCU/W7500/Peripherals-internal/flowcontrol"},next:{title:"Inter-Integrated Circuit (I2C)",permalink:"/Product/iMCU/W7500/Peripherals-internal/i2c"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Masked access",id:"masked-access",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],s={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The GPIO(General-Purpose I/O Port) is composed of four physical GPIO blocks, each corresponding to an individual GPIO port(PORT A, PORT B, PORT C, PORT D). The GPIO supports up to 53 programmable input/output pins, depending on the peripherals being used."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("p",null,"The GPIO peripheral consists of the following feature."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GPIO_DATAOUT can SET/CLEAR by the SET register and CLEAR register.(1 for set and 0 for clear)  "),Object(i.b)("li",{parentName:"ul"},"Mask registers allow treating sets of port bits as a group leaving other bits unchanged."),Object(i.b)("li",{parentName:"ul"},"Up to 53 GPIOs, depending on configuration"),Object(i.b)("li",{parentName:"ul"},"Programmable control for GPIO interrupts")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Interrupt generation masking"),Object(i.b)("li",{parentName:"ul"},"Edge-triggered on rising, falling, or both")),Object(i.b)("h2",{id:"functional-description"},"Functional description"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/gpio_block_diagram.jpg",alt:null,title:"Figure 1 GPIO block diagram"}))),Object(i.b)("p",null,"The below Figure shows the operation sequences available for the GPIO.\nThe pad alternate function is using the pad alternate function select register.\nRefer to \u2018Alternate Function Controller (AFC)\u2019 for more details about each register.\nThe pad control supports pull-down, pull-up, input buffer, and summit trigger input buffer.\nRefer to \u2018Pad Controller (PADCON)\u2019 for more details about each register."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/gpio_flow_chart2.jpg",alt:null,title:"Figure 2 GPIO flow chart"}))),Object(i.b)("h3",{id:"masked-access"},"Masked access"),Object(i.b)("p",null,"The masked access feature permits individual bits or multiple bits to be read from or written to in a single transfer. This avoids software-based read-modify-write operations that are not thread safe. With the masked access operations, the 16-bit I/O is divided into two halves, lower byte and upper byte. The bit mask address spaces are defined as two arrays each containing 256 words."),Object(i.b)("p",null,"For example, to set bits","[1:0]"," to 1 and clear bits","[7:6]"," in a single operation, users can carry out the write to the lower byte mask access address space. The required bit mask is 0xC3, and users can write the operation as MASKLOWBYTE","[0xC3]"," = 0x03. "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/mask_lowbyte_access.jpg",alt:null,title:"Figure 3 mask lowbyte access"}))),Object(i.b)("p",null,"To update some of the bits in the upper eight bits of the GPIO port, users can use the MASKHIGHBYTE array as Figure below."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/mask_highbyte_access.jpg",alt:null,title:"Figure 4 mask highbyte access"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/blink_led"}),"GPIO Blink LED"))))}p.isMDXComponent=!0},582:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);