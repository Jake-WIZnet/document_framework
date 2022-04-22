"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5654],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54237:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={id:"adc",title:"Analog to Digital Converter (ADC)",date:new Date("2020-06-10T00:00:00.000Z")},c=void 0,u={unversionedId:"Product/iMCU/W7500/Peripherals-internal/adc",id:"Product/iMCU/W7500/Peripherals-internal/adc",title:"Analog to Digital Converter (ADC)",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/adc.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/adc",permalink:"/Product/iMCU/W7500/Peripherals-internal/adc",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/adc.md",tags:[],version:"current",frontMatter:{id:"adc",title:"Analog to Digital Converter (ADC)",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Library and Peripheral Example",permalink:"/Product/iMCU/W7500/libraries-examples"},next:{title:"Alternate Function Controller (AFC)",permalink:"/Product/iMCU/W7500/Peripherals-internal/afc"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Functional description",id:"functional-description",level:2},{value:"Peripheral_Examples",id:"peripheral_examples",level:2}],d={toc:s};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"ADC is a 12bit analog-to-digital converter. It has up to 9 multiplexed channels allowing to measure signals from 8 externals and 1 internal source.\nADC of various channels can be performed in single mode. The result of the ADC is stored in 12 bit register."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"12bit configuration resolution"),(0,a.kt)("li",{parentName:"ul"},"Conversion time : Max 10MHz (Sampling time can be programmable)"),(0,a.kt)("li",{parentName:"ul"},"8 channel for external analog inputs",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CH0 : PC_15"),(0,a.kt)("li",{parentName:"ul"},"CH1 : PC_14"),(0,a.kt)("li",{parentName:"ul"},"CH2 : PC_13"),(0,a.kt)("li",{parentName:"ul"},"CH3 : PC_12"),(0,a.kt)("li",{parentName:"ul"},"CH4 : PC_11"),(0,a.kt)("li",{parentName:"ul"},"CH5 : PC_10"),(0,a.kt)("li",{parentName:"ul"},"CH6 : PC_09"),(0,a.kt)("li",{parentName:"ul"},"CH7 : PC_08"))),(0,a.kt)("li",{parentName:"ul"},"1 channel for internal LDO(1.5v) voltage.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CH15 : Internal voltage"))),(0,a.kt)("li",{parentName:"ul"},"Start of conversion can be initiated by software."),(0,a.kt)("li",{parentName:"ul"},"Convert selected inputs once per trigger."),(0,a.kt)("li",{parentName:"ul"},"Interrupt generation at the end of conversion.")),(0,a.kt)("h2",{id:"functional-description"},"Functional description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69462).Z,title:"Figure 1 ADC block diagram",width:"1062",height:"620"})),(0,a.kt)("p",null,"###Operation ADC with non interrupt\nThe below Figure shows the flowchart of ADC operation with non-interrupt.",(0,a.kt)("br",{parentName:"p"}),"\n","ADC can be used as below:  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"ADC needs to be initialized before operation.",(0,a.kt)("br",{parentName:"li"}),"To initialize the ADC, clear the PWD bit first.  "),(0,a.kt)("li",{parentName:"ol"},"Select the ADC channel from 0 to 7 and 15 (initial core voltage).  "),(0,a.kt)("li",{parentName:"ol"},"Run start ADC conversion by set ADC_SRT bit.  "),(0,a.kt)("li",{parentName:"ol"},"Check INT bit to know finish of conversion.  "),(0,a.kt)("li",{parentName:"ol"},"If INT bit is high (1), read ADC conversion data.  "),(0,a.kt)("li",{parentName:"ol"},"Finally, ADC operation is finished by setting the PWD bit.  ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62635).Z,title:"Figure 2 ADC flow chart",width:"935",height:"874"})),(0,a.kt)("p",null,"###Operation ADC with interrupt\nThe below Figure shows the flowchart of ADC operation with interrupt.\nOperation is almost the same as the non-interrupt mode except checking INT register to know when enabling interrupt mask bit and conversion is completed. "),(0,a.kt)("p",null,'![](/img/products/w7500p/peripheral/adc_flow_chart2.jpg"Figure 3 ADC flow chart2")'),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/illumination-sensor"},"ADC Illumination example"))))}m.isMDXComponent=!0},69462:function(e,t,n){t.Z=n.p+"assets/images/adc_block_diagram-467428fd6d6b6301f73e0fa7bc3f87a8.jpg"},62635:function(e,t,n){t.Z=n.p+"assets/images/adc_flow_chart-4fe9d1ee2fe2ae50d0406ef23f7b985a.jpg"}}]);