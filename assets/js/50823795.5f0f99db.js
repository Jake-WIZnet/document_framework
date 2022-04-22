"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[6554],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=l.createContext({}),s=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),k=s(r),d=n,m=k["".concat(i,".").concat(d)]||k[d]||p[d]||a;return r?l.createElement(m,o(o({ref:t},u),{},{components:r})):l.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}k.displayName="MDXCreateElement"},29587:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var l=r(83117),n=r(80102),a=(r(67294),r(3905)),o=["components"],c={id:"crg",title:"Clock Reset Generator (CRG)",date:new Date("2020-06-10T00:00:00.000Z")},i=void 0,s={unversionedId:"Product/iMCU/W7500/Peripherals-internal/crg",id:"Product/iMCU/W7500/Peripherals-internal/crg",title:"Clock Reset Generator (CRG)",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/crg.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/crg",permalink:"/Product/iMCU/W7500/Peripherals-internal/crg",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/crg.md",tags:[],version:"current",frontMatter:{id:"crg",title:"Clock Reset Generator (CRG)",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"PWM Counter Mode example",permalink:"/Product/iMCU/W7500/Peripherals-internal/countermode"},next:{title:"Dead-Zone generation example",permalink:"/Product/iMCU/W7500/Peripherals-internal/deadzonegeneration"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Reset",id:"reset",level:3},{value:"Clock",id:"clock",level:3},{value:"Functional description",id:"functional-description",level:2},{value:"External Oscillator Clock",id:"external-oscillator-clock",level:3},{value:"RC oscillator clock",id:"rc-oscillator-clock",level:3},{value:"PLL",id:"pll",level:3},{value:"Generated clock",id:"generated-clock",level:3}],k={toc:p};function d(e){var t=e.components,c=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"CRG is clock reset generator block for W7500 System. It provides every clock/reset for all other block include CPU and peripherals. CRG includes PLL and POR."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"reset"},"Reset"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Three type of reset \u2013 external reset, Power reset, system reset"),(0,a.kt)("li",{parentName:"ul"},"External reset is generated by low level on the RSTn pin (external reset)"),(0,a.kt)("li",{parentName:"ul"},"Power reset is generated by Power-on reset (POR)"),(0,a.kt)("li",{parentName:"ul"},"Power on reset is generated by POR"),(0,a.kt)("li",{parentName:"ul"},"System reset is generated when one of the following events occurs")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Watchdog event"),(0,a.kt)("li",{parentName:"ul"},"After remapping"),(0,a.kt)("li",{parentName:"ul"},"Software reset (SYSRESETREQ bis in Cortex-M0. Refer to the Cortex-M0 technical reference manual for more detail)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Power reset sets all registers to their reset values"),(0,a.kt)("li",{parentName:"ul"},"System reset sets all registers to their reset values except the CRG block registers and remap register to protect remap value")),(0,a.kt)("h3",{id:"clock"},"Clock"),(0,a.kt)("p",null,"Two clock sources can be used to drive the system clock."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"External oscillator clock (8MHz ~ 24MHz) (OCLK)"),(0,a.kt)("li",{parentName:"ul"},"Internal 8MHz RC oscillator clock (RCLK)")),(0,a.kt)("p",null,"One additional clock source"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"32.768KHz low speed external crystal which derives the real time clock.")),(0,a.kt)("p",null,"There is a PLL\nOne PLL is integrated"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Input clock range is from 8MHz to 24MHz"),(0,a.kt)("li",{parentName:"ul"},"Frequency can be generated by M/N/OD registers. (refer register description)"),(0,a.kt)("li",{parentName:"ul"},"Bypass option enabled")),(0,a.kt)("p",null,"There are many generated clocks for independent operating with system clock"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"System clock (FCLK) "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  ADC clock (ADCCLK)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  SSP0, SSP1 clock (SSPCLK)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  UART0, UART1 clock (UARTCLK)\n"))),(0,a.kt)("li",{parentName:"ul"},"Two Timer clocks (TIMCLK0, TIMCLK1)"),(0,a.kt)("li",{parentName:"ul"},"8ea PWM clocks (PWMCLK0 - PWMCLK7)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  Real time clock (RTCCLK)\n"))),(0,a.kt)("li",{parentName:"ul"},"WDOG clock (WDOGCLK)"),(0,a.kt)("li",{parentName:"ul"},"Random number generator clock (RNGCLK)")),(0,a.kt)("p",null,"RNGCLK have only one source (pll output) and no prescaler\nSome of the generated clocks turn off automatically when CPU enters sleep mode."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ADCCLK, RNGCLK")),(0,a.kt)("p",null,"Generate two Hardware TCPIP Clocks (MII_RXC, MII_TXC) are from external PADs.",(0,a.kt)("br",{parentName:"p"}),"\n","Hardware TCPIP Clocks can be gated by register control.",(0,a.kt)("br",{parentName:"p"}),"\n","All clocks generated from CRG can be monitored."),(0,a.kt)("h2",{id:"functional-description"},"Functional description"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(46271).Z,title:"CRG block diagram",width:"765",height:"417"})),(0,a.kt)("h3",{id:"external-oscillator-clock"},"External Oscillator Clock"),(0,a.kt)("p",null,"External oscillator clock (OCLK) can be generated from two possible clock source"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"External crystal/ceramic resonator (8 to 24MHz external oscillator)"),(0,a.kt)("li",{parentName:"ul"},"User external clock ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(22218).Z,title:"Table1. External oscillator clock sources",width:"814",height:"278"})),(0,a.kt)("h3",{id:"rc-oscillator-clock"},"RC oscillator clock"),(0,a.kt)("p",null,"RC oscillator clock (RCLK) signal is generated from an internal 8MHz RC oscillator.",(0,a.kt)("br",{parentName:"p"}),"\n","RC oscillator has the advantage of providing a clock source at low cost (no external components).",(0,a.kt)("br",{parentName:"p"}),"\n","However accuracy of RC oscillator is less than external crystal or ceramic resonator."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Accuracy : 1% at ",(0,a.kt)("a",{href:"http://www.codecogs.com/eqnedit.php?latex=T_A",target:"_blank"},(0,a.kt)("img",{src:"http://latex.codecogs.com/gif.latex?T_A",title:"T_A"})),"= 25\u2103 (User don\u2019t need to calibration)")),(0,a.kt)("h3",{id:"pll"},"PLL"),(0,a.kt)("p",null,"The internal PLL can be used to multiply the External Oscillator Clock (OCLK) or RC Oscillator Clock (RCLK). PLL input can be selected by register.\nPLL output clock can be generated by following the equations below."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(54241).Z,title:"PLL formula.jpg",width:"538",height:"153"})),(0,a.kt)("h3",{id:"generated-clock"},"Generated clock"),(0,a.kt)("p",null,"Each generated clock source can be selected among 3 clock source as independent by each clock source select register"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PLL output clock (MCLK)"),(0,a.kt)("li",{parentName:"ul"},"Internal 8MHz RC oscillator clock (RCLK)"),(0,a.kt)("li",{parentName:"ul"},"External oscillator clock (8MHz ~ 24MHz) (OCLK)")),(0,a.kt)("p",null,"Each generated clock has own prescaler which can be select individually by each prescale value register"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FCLK, ADCCLK, SSPCLK, UARTCLK : 1/1, 1/2, 1/4, 1/8"),(0,a.kt)("li",{parentName:"ul"},"TIMCLK0, TIMCLK1, PWMCLK0 \u2013 PWMCLK7, WDOGCLK : 1/1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128")))}d.isMDXComponent=!0},46271:function(e,t,r){t.Z=r.p+"assets/images/crg_block_diagram-80eccc1f70293e0862153c9413dba3cf.png"},54241:function(e,t,r){t.Z=r.p+"assets/images/pll_formula-1841a0c9c20de1c9f6f959d1f29bb287.jpg"},22218:function(e,t,r){t.Z=r.p+"assets/images/table1-bec912577e814435702972e28333a41f.jpg"}}]);