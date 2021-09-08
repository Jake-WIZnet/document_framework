(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[53471],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},68795:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=r(22122),i=r(19756),n=(r(67294),r(3905)),o=["components"],l={id:"uart",title:"Universal Asynchronous Receive Transmit (UART)",date:new Date("2020-04-03T00:00:00.000Z")},s=void 0,c={unversionedId:"Product/iMCU/W7500/Peripherals-internal/uart",id:"Product/iMCU/W7500/Peripherals-internal/uart",isDocsHomePage:!1,title:"Universal Asynchronous Receive Transmit (UART)",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/uart.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/uart",permalink:"/Product/iMCU/W7500/Peripherals-internal/uart",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/uart.md",tags:[],version:"current",frontMatter:{id:"uart",title:"Universal Asynchronous Receive Transmit (UART)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"TCP/IP core Offload Engine (TOE)",permalink:"/Product/iMCU/W7500/Peripherals-internal/toe"},next:{title:"Watchdog Timer (WDT)",permalink:"/Product/iMCU/W7500/Peripherals-internal/wdt"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Baud rate calculation",id:"baud-rate-calculation",children:[]},{value:"Data transmission",id:"data-transmission",children:[]},{value:"Data receive",id:"data-receive",children:[]},{value:"Hardware flow control",id:"hardware-flow-control",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],d={toc:u};function p(e){var t=e.components,l=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The UART supports synchronous one-way communication, half-duplex single wire communication, and multiprocessor communications(CTS/RTS).  "),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Serial-to-parallel conversion on data received from a peripheral device"),(0,n.kt)("li",{parentName:"ul"},"Parallel-to-serial conversion on data transmitted to the peripheral device"),(0,n.kt)("li",{parentName:"ul"},"Data size of 5,6,7 and 8 its"),(0,n.kt)("li",{parentName:"ul"},"One or two stop bits"),(0,n.kt)("li",{parentName:"ul"},"Even, odd, stick, or no-parity bit generation and detection"),(0,n.kt)("li",{parentName:"ul"},"Support of hardware flow control"),(0,n.kt)("li",{parentName:"ul"},"Programmable FIFO disabling for 1-byte depth."),(0,n.kt)("li",{parentName:"ul"},"Programmable use of UART or IrDA SIR input/output"),(0,n.kt)("li",{parentName:"ul"},"False start bit detection")),(0,n.kt)("h2",{id:"functional-description"},"Functional description"),(0,n.kt)("p",null,"UART bidirectional communication requires a minimum of two pins: RX, TX\nThe frame are comprised of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An Idle Line prior to transmission or reception "),(0,n.kt)("li",{parentName:"ul"},"A start bit "),(0,n.kt)("li",{parentName:"ul"},"A data word (8 or 9 bits) least significant bit first"),(0,n.kt)("li",{parentName:"ul"},"1, 1.5, 2 Stop bits indicating that the frame is complete "),(0,n.kt)("li",{parentName:"ul"},"The USART interface uses a baud rate generator "),(0,n.kt)("li",{parentName:"ul"},"A status register (UART1_RISR) "),(0,n.kt)("li",{parentName:"ul"},"data registers (UART1DR) "),(0,n.kt)("li",{parentName:"ul"},"A baud rate register (UART1_IBRD,UART1_FBRD)")),(0,n.kt)("p",null,"The below figure shows UART0,1 Block diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(22443).Z,title:"Figure 1 UART block diagram"})),(0,n.kt)("p",null,"The below Figure shows the UART character frame"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(44626).Z,title:"Figure 2 UART character frame"})),(0,n.kt)("h3",{id:"baud-rate-calculation"},"Baud rate calculation"),(0,n.kt)("p",null,"UARTx can operate with or without using the Fractional Divider. The baud rate divisor is a 22-bit number consisting the UARTxIBRD(16-bit integer) and the UARTxFBRD(6-bit fractional).\nThis is used by the baud rate generator to determine the bit period."),(0,n.kt)("img",{src:"http://latex.codecogs.com/gif.latex?Baud&space;Rate&space;Divisor&space;=",title:"Baud Rate Divisor ="}),"      ",(0,n.kt)("img",{src:"http://latex.codecogs.com/gif.latex?UARTCLK/((16*baud&space;rate))=&space;\u3016BRD\u3017_I&plus;&space;\u3016BRD\u3017_F",title:"UARTCLK/((16*baud rate))= \u3016BRD\u3017_I+ \u3016BRD\u3017_F"}),(0,n.kt)("p",null,"The below Figure shows UART divider flow chart"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(78950).Z,title:"Figure 3 UART divider flow chart"})),(0,n.kt)("p",null,"The below Figure shows how to set the UART Initial value."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(98410).Z,title:"Figure 4 UART Initial setting flow chart"})),(0,n.kt)("h3",{id:"data-transmission"},"Data transmission"),(0,n.kt)("p",null,"Data transmitted is stored in a 32-byte FIFOs. Transmit data is written into the transmit FIFO for transmission. If UART is enabled, it causes a data frame to start transmitting with parameters indicated in the UARTxLCR_H.\nData continues to transmit until there is no data left in the transmit FIFO. The BUSY bit of UARTxFR is \u20181\u2019 as soon as data is written to the transmit FIFO, which means the FIFO is not empty, and remains as \u20181\u2019 while data is being transmitted. "),(0,n.kt)("h3",{id:"data-receive"},"Data receive"),(0,n.kt)("p",null,"Received data is stored in the 32-byte FIFOs. When a start bit has been received, it begins running and data is sampled on the eighth cycle of that counter in UART mode. A valid stop bit is confirmed if UARTRXD is \u20181\u2019. When a full word is received, the data is stored in the receive FIFO. Error bit is stored in bit","[10:8]"," of UARTxCR and overrun is stored in bit","[11]"," of UARTxCR."),(0,n.kt)("p",null,"The below figure shows Transmit and Receive data flow chart."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(41732).Z,title:"Figure 5 Transmit and Receive data flow chart"})),(0,n.kt)("h3",{id:"hardware-flow-control"},"Hardware flow control"),(0,n.kt)("p",null,"The below Figure shows Hardware flow control description."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(22797).Z,title:"Figure 6 Hardware flow control description"})),(0,n.kt)("p",null,"The RTS flow control is enabled by setting the RTSen of UARTxCR. If RTS is enabled, the data flow is controlled as follows.\nWhen the receiver FIFO level reaches the programmed trigger level, nUARTRTS(pin) is asserted(to a low value). nUARTRTS is reasserted(to a low level) once the receiver FIFO has reached the previous trigger level. The reasserted of nUARTRTS signals to the sending UART to continue transmitting data."),(0,n.kt)("p",null,"The CTS flow control is enabled, the transmitter can only transmit data when nUARTCTS is asserted. When nUARTCTR is re-asserted(to a low) the transmitter sends the next byte. To stop the transmitter from sending the following byte, nUARTCTS must be released before the middle of the last stop bit that is currently being sent."),(0,n.kt)("p",null,"The below Figure shows CTS Functinoal Timing."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(30744).Z,title:"Figure 7 CTS Functional Timing"})),(0,n.kt)("p",null,"The below Figure shows how software should use the RTS/CTR."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(83327).Z,title:"Figure 8 Algorithm for setting CTS/RTS flowchart"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/inter"},"UART Interrupt example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/printf"},"UART Printf example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/polling"},"UART Polling example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/flowcontrol"},"UART Hardware FlowControl example"))))}p.isMDXComponent=!0},22443:function(e,t,r){"use strict";t.Z=r.p+"assets/images/uart_block_diagram-50abce4a05d13a3cc80cdb7b8d4eb63d.jpg"},44626:function(e,t,r){"use strict";t.Z=r.p+"assets/images/uart_character_frame-b2966e834e5d57d63ead553d0d2a3f10.jpg"},30744:function(e,t,r){"use strict";t.Z=r.p+"assets/images/uart_cts_timing-674747e7a2cea062abf6f82ea14391e8.jpg"},78950:function(e,t,r){"use strict";t.Z=r.p+"assets/images/uart_divider_flow_chart-83eb98fd4adbbc19a44ea0c68574465d.jpg"},22797:function(e,t,r){"use strict";t.Z=r.p+"assets/images/uart_hw_flow_chart-865681530af58cd0f79c5991533428cb.jpg"},98410:function(e,t,r){"use strict";t.Z=r.p+"assets/images/uart_init_flow_chart-7cadc259955c3d0a658bb1bb637f6f49.jpg"},83327:function(e,t,r){"use strict";t.Z=r.p+"assets/images/uart_set_flow_chart-f0a776d0413dc28ce8b5114e061af167.jpg"},41732:function(e,t,r){"use strict";t.Z=r.p+"assets/images/uart_txrxdata_flow_chart-300a2f9966b85ec056dd9b333a1e36ac.jpg"}}]);