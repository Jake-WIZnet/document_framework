"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[896],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),k=l,m=d["".concat(i,".").concat(k)]||d[k]||s[k]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30510:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=r(83117),l=r(80102),o=(r(67294),r(3905)),a=["components"],u={id:"power-supply",title:"Power Supply",date:new Date("2020-04-03T00:00:00.000Z")},i=void 0,p={unversionedId:"Product/iMCU/W7500/power-supply",id:"Product/iMCU/W7500/power-supply",title:"Power Supply",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Power-Supply.md",sourceDirName:"Product/iMCU/W7500",slug:"/Product/iMCU/W7500/power-supply",permalink:"/Product/iMCU/W7500/power-supply",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Power-Supply.md",tags:[],version:"current",frontMatter:{id:"power-supply",title:"Power Supply",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Interrupt and Event",permalink:"/Product/iMCU/W7500/interrupt-and-event"},next:{title:"Booting Sequence",permalink:"/Product/iMCU/W7500/booting-sequence"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Voltage regulator",id:"voltage-regulator",level:2},{value:"Power supply supervisor",id:"power-supply-supervisor",level:2},{value:"Low power modes",id:"low-power-modes",level:2},{value:"Sleep mode vs. Deep sleep mode",id:"sleep-mode-vs-deep-sleep-mode",level:3},{value:"Peripheral clock gating",id:"peripheral-clock-gating",level:3}],d={toc:s};function k(e){var t=e.components,u=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"W7500 embeds a voltage regulator in order to supply the internal 1.5V digital power domain."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Require a 2.7V ~ 5.5V operating supply voltage (VDD)"),(0,o.kt)("li",{parentName:"ul"},"ADC ref voltage is same as VDD")),(0,o.kt)("h2",{id:"voltage-regulator"},"Voltage regulator"),(0,o.kt)("p",null,"The voltage regulator is always enabled after Reset and works in only one mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In Run mode, the regulator supplies full power to the 1.5V domain."),(0,o.kt)("li",{parentName:"ul"},"There is no power down or sleep mode.")),(0,o.kt)("h2",{id:"power-supply-supervisor"},"Power supply supervisor"),(0,o.kt)("p",null,"W7500 has an integrated reset (POR) circuit which is always active and ensure proper operation above a threshold of 0.6V"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The POR monitors only the VDD supply voltage. During the startup phase VDD must arrive first and be greater than or equal to 0.6V")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 1 POR reset waveform",src:r(52003).Z,width:"400",height:"264"})),(0,o.kt)("h2",{id:"low-power-modes"},"Low power modes"),(0,o.kt)("p",null,"W7500 is in RUN mode after a system or power reset. There are two low power modes to save power when the CPU does not need to be kept running. These modes are useful when the CPU is waiting for an external interrupt. Please note that there is no power-off mode for W7500."),(0,o.kt)("p",null,"The device features two low power modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sleep mode"),(0,o.kt)("li",{parentName:"ul"},"Deep Sleep mode")),(0,o.kt)("p",null,"Additionally, the power consumption can be reduced by the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User can slow down the system clocks"),(0,o.kt)("li",{parentName:"ul"},"User can block the clocks to the peripherals while they are unused.")),(0,o.kt)("h3",{id:"sleep-mode-vs-deep-sleep-mode"},"Sleep mode vs. Deep sleep mode"),(0,o.kt)("p",null,"W7500 has two kinds of sleep modes. One is Sleep mode and the other is Deep sleep mode.\nTwo of them are almost the same except the clock gated peripherals kinds. "),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Mode"),(0,o.kt)("th",null,"Entry"),(0,o.kt)("th",null,"Wakeup"),(0,o.kt)("th",null,"Effect-on-clocks")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"2"},"Sleep mode"),(0,o.kt)("td",null,"DEEPSLEEP = 0",(0,o.kt)("br",null),"Enable WFI"),(0,o.kt)("td",null,"Any interrupt"),(0,o.kt)("td",{rowspan:"2"},"CPU Clock OFF",(0,o.kt)("br",null),"APB Bus Clock ON",(0,o.kt)("br",null),"AHB Bus Clock ON",(0,o.kt)("br",null),"Memory Clock ON")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"DEEPSLEEP = 0",(0,o.kt)("br",null),"Enable WFE"),(0,o.kt)("td",null,"Wakeup event")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"2"},"Deep Sleep mode"),(0,o.kt)("td",null,"DEEPSLEEP = 1",(0,o.kt)("br",null),"Enable WFI"),(0,o.kt)("td",null,"Any interrupt"),(0,o.kt)("td",{rowspan:"2"},"CPU Clock OFF",(0,o.kt)("br",null),"APB Bus Clock OFF",(0,o.kt)("br",null),"AHB Bus Clock OFF",(0,o.kt)("br",null),"Memory Clock OFF")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"DEEPSLEEP = 1",(0,o.kt)("br",null),"Enable WFE"),(0,o.kt)("td",null,"Wakeup event"))),(0,o.kt)("h3",{id:"peripheral-clock-gating"},"Peripheral clock gating"),(0,o.kt)("p",null,"In Run mode, individual clocks can be stopped at any time to reduce power.\nPeripheral clock gating is controlled by the CRG block.\nBelow is the list of clocks which can be gating in CRG block."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ADC clock (ADCCLK)"),(0,o.kt)("li",{parentName:"ul"},"SSP0, SSP1 clock (SSPCLK)"),(0,o.kt)("li",{parentName:"ul"},"UART0, UART1 clock (UARTCLK)"),(0,o.kt)("li",{parentName:"ul"},"Two Timer clocks (TIMCLK0, TIMCLK1)"),(0,o.kt)("li",{parentName:"ul"},"8 PWM clocks (PWMCLK0 ~ PWMCLK7)"),(0,o.kt)("li",{parentName:"ul"},"WDOG clock (WDOGCLK)"),(0,o.kt)("li",{parentName:"ul"},"Random number generator clock (RNGCLK)")))}k.isMDXComponent=!0},52003:function(e,t,r){t.Z=r.p+"assets/images/por_reset_waveform-f067bc83d7c3bb94ab4128eac423b267.jpg"}}]);