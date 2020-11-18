(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{198:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(6),a=(r(0),r(582)),o={id:"pwm",title:"Pulse Width Modulation (PWM)",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/pwm",id:"Product/iMCU/W7500/Peripherals-internal/pwm",isDocsHomePage:!1,title:"Pulse Width Modulation (PWM)",description:"Introduction",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\pwm.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/pwm",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/pwm.md",sidebar:"docs",previous:{title:"UART Polling example",permalink:"/Product/iMCU/W7500/Peripherals-internal/printf"},next:{title:"PWM Output example",permalink:"/Product/iMCU/W7500/Peripherals-internal/pwmoutput"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Timer/Counter control",id:"timercounter-control",children:[]},{value:"PWM mode",id:"pwm-mode",children:[]},{value:"Interrupt",id:"interrupt",children:[]},{value:"Dead zone generation",id:"dead-zone-generation",children:[]},{value:"Capture event",id:"capture-event",children:[]},{value:"How to set the PWM",id:"how-to-set-the-pwm",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],c={rightToc:u};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The PWM consists a 8-channel 32-bit Timer/Counter driven by a programmable prescaler. The function of the PWM is based on the basic Timer. Each timer and counter runs independently."),Object(a.b)("p",null,"The PWM can be used to control the width of the pulse, formally the pulse duration, to generate output waveform or to count the counter triggered by external input."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Counter or Timer operation can use the peripheral clock, external clock source, or one of the capture inputs as the clock source."),Object(a.b)("li",{parentName:"ul"},"Eight independent 32-bit Timer/Counter driven by a programmable 6 bits prescaler runs as the PWM or standard timer if the PWM mode is not enabled."),Object(a.b)("li",{parentName:"ul"},"Eight PWM output waveforms."),Object(a.b)("li",{parentName:"ul"},"Each of Timer/Counter can have different or same clock source."),Object(a.b)("li",{parentName:"ul"},"Counter or timer operation."),Object(a.b)("li",{parentName:"ul"},"Eight capture registers that can take the timer value when an external input signal. A capture event can generate an interrupt signal optionally."),Object(a.b)("li",{parentName:"ul"},"32-bit match register and limit register.")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_block_diagram.jpg",alt:null,title:"Figure 1 PWM block diagram"}))),Object(a.b)("h2",{id:"functional-description"},"Functional description"),Object(a.b)("h3",{id:"timercounter-control"},"Timer/Counter control"),Object(a.b)("p",null,"The PWM has 8 Timer/Counter clocks, which can be divided by a prescaler. Each Timer/Counter runs independently. The Timer/Counter is designed to count cycles of the clocks or external input signal and generate interrupts when specified timer values are occurred based on match register and limit register. The Timer/Counter can count up or down."),Object(a.b)("p",null,"The PWM has match registers and limit registers. The match registers control the duty cycle of PWM output waveform. The limit registers control the period of the PWM output waveform. The Timer/Counter becomes 0 when it reaches value of the limit register. If PDMR(Periodic Mode Register) is set, the Timer/Counter counts repeatedly and if PDMR is reset, the Timer/Counter stops counting.\nMatch register should be smaller than limit register(LR). If not, match interrupt is not occurred and PWM output waveform is always 1."),Object(a.b)("h4",{id:"repetition-mode"},"Repetition mode"),Object(a.b)("p",null,"The Timer/Counter has two repetition mode: periodic and one-shot mode. In periodic mode, the Timer/Counter recycles and then restarts when the Timer/Counter reaches the value of limit register. The below Figure shows periodic mode timing diagram"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_periodic_mode.jpg",alt:null,title:"Figure 2 Periodic mode"}))),Object(a.b)("p",null,"In one-shot mode, the Timer/Counter resets to the initial value and then stops when the Timer/Counter reaches the value of limit register. The below Figure shows one-shot mode timing diagram."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_oneshot_mode.jpg",alt:null,title:"Figure 3 One shot mode"}))),Object(a.b)("h4",{id:"counting-mode"},"Counting mode"),Object(a.b)("p",null,"The Timer/Counter has two counting mode: Up-count and Down-count mode. In up-count mode, the Timer/Counter counts up from 0 to the limit register value and then recycles. If repetition mode is periodic, the Timer/Counter restarts and if repetition mode is one-shot mode, the Timer/Counter stops. The below Figure shows up-count mode timing diagram."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_upcount_mode.jpg",alt:null,title:"Figure 4 Up count mode"}))),Object(a.b)("p",null,"In Down-count mode, the Timer/Counter counts from 0xFFFF_FFFF, then recycles. If repetition mode is periodic, the Timer/Counter restarts and if repetition mode is one-shot mode, the Timer/Counter stops. The below Figure shows down-count mode timing diagram."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_downcount_mode.jpg",alt:null,title:"Figure 5 Down count mode"}))),Object(a.b)("h4",{id:"timer-and-counter-mode"},"Timer and Counter mode"),Object(a.b)("p",null,"The Timer/Counter can run in timer mode or counter mode. In timer mode, the Timer/Counter is counted by PWMCLK after Prescale counter is overflowed. If prescale is set by 0, the Timer/Counter counts every PWMCLK period. In counter mode, the Timer/Counter is counted by external input signal. There are three counting method: rising edge, falling edge, and both edge. The counter mode has up-count or down-count mode and also has periodic or one-shot mode. The external input pin and PWM output pin are the same, so PWM output is disabled in counter mode."),Object(a.b)("p",null,'The below Figure is counter mode example with rising edge mode.\n![](/img/products/w7500p/peripheral/pwm_counter_mode1.jpg" Figure 6 Counter mode with rising edge")'),Object(a.b)("p",null,"The below Figure is with falling edge mode.\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_counter_mode2.jpg",alt:null,title:"Figure 7 Counter mode with falling edge"}))),Object(a.b)("p",null,"The below Figure is with both rising and falling edge mode.\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_counter_mode3.jpg",alt:null,title:"Figure 8 Counter mode with rising and falling edge"}))),Object(a.b)("h4",{id:"prescaler-description"},"Prescaler description"),Object(a.b)("p",null,"The PWM has 6-bit prescale counter(PC) and the prescaler can divide the Timer/Counter clock frequency. Users can control it by Prescale Register(PR)."),Object(a.b)("p",null,"The below Figures show some examples of the Timer/Counter timing with prescale register is 2, match register is 2, limit register is 12, timer mode, periodic mode, up-count mode, and no interrupt clear."),Object(a.b)("p",null,"The below Figure shows Timer/Counter timing diagram with match interrupt."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_timing_diagram1.jpg",alt:null,title:"Figure 9 Timer/Counter timing diagram with match interrupt"}))),Object(a.b)("p",null,"The below Figure Timer/Counter timing diagram with overflow interrupt."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_timing_diagram2.jpg",alt:null,title:"Figure 10 Timer/Counter timing diagram with overflow interrupt"}))),Object(a.b)("h3",{id:"pwm-mode"},"PWM mode"),Object(a.b)("p",null,"Pulse Width Modulation mode generates a waveform with a period determined by the value of limit register and a duty cycle determined by the value of the match register. "),Object(a.b)("p",null,"The PWM output becomes always 1 when the Timer/Counter starts to count. Then the PWM output becomes 0 when the Timer/Counter reaches the value of match register. If the Timer/Counter is in periodic mode, the PWM output becomes 1 again when the Timer/Counter reaches the value of limit register. In one-shot mode, the PWM output does not change to 1 but stays 0 and the Timer/Counter stops."),Object(a.b)("p",null,"The PWM mode can be selected independently on each channel(0~7) by PWM output enable and external input enable register. The external input pin and PWM output pin are the same, so external input is disabled in PWM mode."),Object(a.b)("p",null,"The below Figure is an example of the PWM output waveform when the Timer/Counter is reached to the value of match register."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_timing_diagram2.jpg",alt:null,title:"Figure 11 The PWM output up to match register"}))),Object(a.b)("p",null,"The below Figure is example of the PWM output waveform when to the Timer/Counter is reached to the value of limit register."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_timing_diagram2.jpg",alt:null,title:"Figure 12 The PWM output up to limit register"}))),Object(a.b)("p",null,"If match register is set as 0, the PWM output will be 1 while the Timer/Counter is 0.\nIf the match register is bigger than the limit register, the PWM output is always 1."),Object(a.b)("h3",{id:"interrupt"},"Interrupt"),Object(a.b)("p",null,"The PWM has 8-bit interrupt enable register(IER) and each bit of IER corresponds to each interrupt of channel. Each PWM channel has Channel-n Interrupt Enable register(CHn_IER). The CHn_IER includes three types of interrupt: match, overflow, and capture. The match interrupt occurs when the Timer/Counter is reached to value of match register. The overflow interrupt occurs when the Timer/Counter is reached to value of limit register. The capture interrupt occurs when external input is entered for capture."),Object(a.b)("p",null,"If interrupt occurs, corresponded bit of Channel-x interrupt register(CHn_IR) bit is set and PWM channel-n interrupt signal is generated. All CHn_IR is cleared by channel-n interrupt clear register(CHn_ICR) and then PWM channel-n interrupt signal is cleared."),Object(a.b)("h3",{id:"dead-zone-generation"},"Dead zone generation"),Object(a.b)("p",null,"Each PWM channel can output two complementary signals with dead zone time and it can be enabled by Channel-n Dead Zone Enable Register(CHn_DZER). Only 4 channels can be enabled because there are 8 PWM output pins. Channel 0 and 1 are a pair, channel 2 and 3 are a pair, channel 4 and 5 are a pair, and channel 6 and 7 are a pair. If users want to use channel-0 dead zone generation, channel-1 should be disabled. If channel 0 and 1 dead zone generation are enabled both, all outputs are 0. In that case, users should choose 1 channel."),Object(a.b)("p",null,"Dead zone time are generated by the value of Channel-n Dead Zone Counter Register(DZCR). The dead zone counter counts up to value of DZCR. During the dead zone time, both complementary signals are both 0. Users have to adjust the signal depending on the devices that are connected to the outputs and their characteristics. If DZCR is bigger than the limit register, main output signal is toggled 0 to1 and then 1 to 0 while 1 PWMCLK and inverted output signal is always 0."),Object(a.b)("p",null,"The below Figure shows two complementary PWM outputs with dead zone time. During dead zone time, both outputs are 0."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_deadzone.jpg",alt:null,title:"Figure 13 PWM waveform with dead zone time"}))),Object(a.b)("p",null,"The below Figure shows a more detailed timing with dead zone counter."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_deadzone_counter.jpg",alt:null,title:"Figure 14 PWM waveform with dead zone counter"}))),Object(a.b)("p",null,"The dead zone counter and the Timer/Counter starts to count together and PWM output is 0 until dead zone counter is reached to value of dead zone counter register. The PWM output becomes 1 and 0 when the Timer/Counter is reached to value of match register. The inverted PWM output is also 0 until dead zone counter is reached to value of dead zone counter register. Then inverted PWM output becomes 1 after dead zone counter is reached to the value of dead zone counter register."),Object(a.b)("h3",{id:"capture-event"},"Capture event"),Object(a.b)("p",null,"Each PWM channel can capture its Timer/Counter value when an external input signal changes. Any channel could use any method of rising or falling edges. If capture interrupt is enabled, capture interrupt occurs when the external input signal is toggled. The Timer/Counter value is saved in Channel-n Capture Register(CHn_CR) and the capture register is not overwritten until capture interrupt is cleared. The below Figure shows the capture event timing diagram. There is no interrupt clear, so second capture does not save during second rising edge detection. "),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_nointerrupt.jpg",alt:null,title:"Figure 15 Capture event with no interrupt clear"}))),Object(a.b)("p",null,"The below Figure shows, the capture event timing diagram with interrupt clear. The second capture is saved at the second rising edge detection because there is interrupt clear."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_interrupt.jpg",alt:null,title:"Figure 16 Capture event with interrupt clear"}))),Object(a.b)("h3",{id:"how-to-set-the-pwm"},"How to set the PWM"),Object(a.b)("p",null,"The below Figure shows the PWM setting flow step by step. "),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/pwm_flow_chart.jpg",alt:null,title:"Figure 17 The PWM setting flow"}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/capturemode"}),"CaptureMode example")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/countermode"}),"CounterMode example")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/deadzonegeneration"}),"DeadZoneGeneration example")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/pwmoutput"}),"PWMOutput example")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/timermode"}),"TimerMode example"))))}p.isMDXComponent=!0},582:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),h=n,m=s["".concat(o,".").concat(h)]||s[h]||d[h]||a;return r?i.a.createElement(m,l(l({ref:t},c),{},{components:r})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);