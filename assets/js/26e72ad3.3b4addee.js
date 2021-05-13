(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[23378],{3905:function(e,t,r){"use strict";r.d(t,{kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66809:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o={id:"dualtimer",title:"Dual Timer",date:new Date("2020-06-10T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/dualtimer",id:"Product/iMCU/W7500/Peripherals-internal/dualtimer",isDocsHomePage:!1,title:"Dual Timer",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/dualtimer.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/dualtimer",permalink:"/Product/iMCU/W7500/Peripherals-internal/dualtimer",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/dualtimer.md",version:"current",frontMatter:{id:"dualtimer",title:"Dual Timer",date:"2020-06-10T00:00:00.000Z"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Clock and clock enable",id:"clock-and-clock-enable",children:[]},{value:"Timer size",id:"timer-size",children:[]},{value:"Prescaler",id:"prescaler",children:[]},{value:"Repetition mode",id:"repetition-mode",children:[]},{value:"Interrupt",id:"interrupt",children:[]},{value:"Operation",id:"operation",children:[]},{value:"How to set the dual timers",id:"how-to-set-the-dual-timers",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],s={toc:u};function c(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The dual timer consists two programmable 32-bit or 16-bit Free-running counters(FRCs) that can generate interrupts when they reach 0. There are two dual timers and 4 FRCs. One dual timers has one interrupt handler, resulting in two interrupts of timers. Also one dual timer has one clock but two clock enable signals. Users can select one repetition modes one-shot or wrapping mode, and wrapping mode consists free-running and periodic mode. Two FRCs are one set so two FRCs has one clock, reset, and interrupt but each FRC has an individual clock enable. "),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One dual timer has two Free-Running Counters(FRCs)."),(0,a.kt)("li",{parentName:"ul"},"One dual timer has one interrupt handler and one clock."),(0,a.kt)("li",{parentName:"ul"},"One dual timer has two clock enable signals."),(0,a.kt)("li",{parentName:"ul"},"There are 2 dual timers."),(0,a.kt)("li",{parentName:"ul"},"A 32-bit or a 16-bit down counter."),(0,a.kt)("li",{parentName:"ul"},"One of the following repetition modes: one-shot and wrapping mode."),(0,a.kt)("li",{parentName:"ul"},"One of the following wrapping modes: Free-running and periodic mode."),(0,a.kt)("li",{parentName:"ul"},"There is prescaler that can divide down the clock rate by 1, 16, or 256.")),(0,a.kt)("p",null,'![](/img/products/w7500p/peripheral/dualtimer_block_diagram.jpg"Figure 1 DualTimer block diagram")'),(0,a.kt)("h2",{id:"functional-description"},"Functional description"),(0,a.kt)("h3",{id:"clock-and-clock-enable"},"Clock and clock enable"),(0,a.kt)("p",null,"The dual timers contain PCLK and TIMERCLK clock inputs. PCLK is the main APB system clock and is used by the register interface. TIMERCLK is the input to the prescale units and the decrementing counters. PCLK and TIMERCLK are synchronous."),(0,a.kt)("p",null,"The dual timers consist two programmable 32-bit Free-Running Counters(FRC) which operate independently. The two timers operate from one TIMERCLK but Each FRC is controlled independently by individual clock enable."),(0,a.kt)("h3",{id:"timer-size"},"Timer size"),(0,a.kt)("p",null,"User can select FRC as 16-bit or 32-bit by using control register."),(0,a.kt)("h3",{id:"prescaler"},"Prescaler"),(0,a.kt)("p",null,"The timer has a prescaler that can divide down the enabled clock rate by 1, 16 or 256."),(0,a.kt)("h3",{id:"repetition-mode"},"Repetition mode"),(0,a.kt)("p",null,"There are two repetition mode: one-shot and wrapping mode.",(0,a.kt)("br",{parentName:"p"}),"\n","Wrapping mode has two mode: free-running and periodic mode."),(0,a.kt)("h4",{id:"one-shot-mode"},"One-shot mode"),(0,a.kt)("p",null,"The counter generates an interrupt once. When the counter reaches 0, it halts until users reprogram it. Users can do this as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clear the one-shot count bit in the control register, in which case the count proceeds according to the selection of wrapping mode(free-running or periodic mode)."),(0,a.kt)("li",{parentName:"ul"},"Writing a new value to the Load Value register.")),(0,a.kt)("h4",{id:"wrapping-mode"},"Wrapping mode"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Free-running mode")),(0,a.kt)("p",null,"The counter wraps after reaching its zero value, and continues to count down from the maximum value. This is the default mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Periodic mode")),(0,a.kt)("p",null,"The counter generates an interrupt at a constant interval, reloading the original value after wrapping past zero."),(0,a.kt)("h3",{id:"interrupt"},"Interrupt"),(0,a.kt)("p",null,"An interrupt is generated when the counter reaches 0 and is only cleared when the interrupt clear register is accessed.",(0,a.kt)("br",{parentName:"p"}),"\n","The register holds the value until the interrupt is cleared."),(0,a.kt)("p",null,"Users can mask interrupts by writing 0 to the Interrupt Enable bit in the control register.",(0,a.kt)("br",{parentName:"p"}),"\n","Users can read the following from status registers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raw interrupt status before masking."),(0,a.kt)("li",{parentName:"ul"},"Final interrupt status after masking.")),(0,a.kt)("p",null,"The interrupts from the individual timers after masking are logically ORed into a combined interrupt."),(0,a.kt)("h3",{id:"operation"},"Operation"),(0,a.kt)("p",null,"The operation of each timer is identical. The timer is loaded by writing to the load register and counts down to 0 if enabled. When a counter is already running, writing to the load register causes the counter to immediately restart at the new value. Writing to the background load value has no effect on the current count. In periodic mode, the counter continues to decrease to 0 and restart from the new load value."),(0,a.kt)("p",null,"An interrupt is generated when 0 is reached. Users can clear the interrupt by writing to the clear register. If users select one-shot mode, the counter halts when it reaches 0 until users deselect one-shot mode or write a new load value."),(0,a.kt)("p",null,"Otherwise, after reaching a zero count, if the timer is operating in free-running mode, it continues to decrease from its maximum value. If users select periodic mode, the timer reloads the count value from the load register and continues to decrease. In this mode, the counter effectively generates a periodic interrupt."),(0,a.kt)("h3",{id:"how-to-set-the-dual-timers"},"How to set the dual timers"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9015).Z,title:"Figure 2 The DualTimer setting flow"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/timerrun"},"Dual Timer Timerun example"))))}c.isMDXComponent=!0},9015:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dualtimer_flow_chart-2e6a5b577ea4c5b4cc059409203c5a93.jpg"}}]);