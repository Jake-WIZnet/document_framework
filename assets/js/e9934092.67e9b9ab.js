"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[3668],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42603:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={id:"hardware_design_guide",title:"Hardware Design Guide",date:new Date("2020-04-02T00:00:00.000Z")},s=void 0,u={unversionedId:"Design-Guide/hardware_design_guide",id:"Design-Guide/hardware_design_guide",title:"Hardware Design Guide",description:"Summary",source:"@site/docs/Design-Guide/Hardware_Design_Guide.md",sourceDirName:"Design-Guide",slug:"/Design-Guide/hardware_design_guide",permalink:"/Design-Guide/hardware_design_guide",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Design-Guide/Hardware_Design_Guide.md",tags:[],version:"current",frontMatter:{id:"hardware_design_guide",title:"Hardware Design Guide",date:"2020-04-02T00:00:00.000Z"},sidebar:"docs",previous:{title:"Design Guide",permalink:"/Design-Guide/design_guide"},next:{title:"Package Information",permalink:"/Design-Guide/package_information"}},m={},p=[{value:"Summary",id:"summary",level:2},{value:"MDI signal Schematic",id:"mdi-signal-schematic",level:2},{value:"Parts Placement",id:"parts-placement",level:2},{value:"Power supply &amp; GND",id:"power-supply--gnd",level:2},{value:"MDI routing",id:"mdi-routing",level:2},{value:"MII routing (Only W7500)",id:"mii-routing-only-w7500",level:2},{value:"ESD &amp; EMI",id:"esd--emi",level:2},{value:"ETC",id:"etc",level:2}],c={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"This document is a Design Guide for WIZnet Chip to be used for PCB. It\ncontains reference for PCB design using W5100, W5300, W5500, W7100A,\nW7500, and W7500P. Contents of MDI (Medium-dependent interface) signal,\npower supply, parts placement, MII (Media Independent Interface), etc.\nare included and you must follow the instructions below. If you do not\nfollow the instructions, you are likely to experience degraded Ethernet\nperformance."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"mdi-signal-schematic"},"MDI signal Schematic"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MDI signal Schematic",src:n(20124).Z,width:"800",height:"511"}),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The above circuit is the most used for Ethernet implementation.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"W5100, W5300, W7100 should be configured as shown above."),(0,l.kt)("li",{parentName:"ul"},"For the W5500, please follow the URL below for your reference.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,l.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5500/ref-schematic"},"Ref. Schematic")))),(0,l.kt)("li",{parentName:"ul"},"Since the W7500 must use an external PHY, you should contact the\nmanufacturer of PHY you are using.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,l.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/w7500-ref-schematic"},"Ref. Schematic")))),(0,l.kt)("li",{parentName:"ul"},"W7500P has built in PHY, and the circuit should be constructed by\nremoving part A from the above diagram.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,l.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500P/w7500p-ref-schematic"},"Ref. Schematic"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parts-placement"},"Parts Placement"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Parts Placement",src:n(94609).Z,width:"800",height:"537"}),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Place A and B parts as close as possible to the Transformer.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you are using a RJ-45 Connector which is separated from the\nTransformer, you should place both as close to each other as\npossible.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Distance must be more than 2.5mm (100mil) and less than 25mm\n(1000mil)."))),(0,l.kt)("li",{parentName:"ul"},"All PCB layers under the Transformer and RJ45 Connector must have no\npower and GND plane."),(0,l.kt)("li",{parentName:"ul"},"Between PHY and RJ45 Connector, there should be no routing for a\ndigital signal.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prevention of signal interference."))),(0,l.kt)("li",{parentName:"ul"},"There should be no high-frequency device and routing near the TX+/-\nand RX+/- signals.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prevention of signal interference."))),(0,l.kt)("li",{parentName:"ul"},"We generally recommend you to use a connector that combines a\nTransformer and RJ-45 Connector."),(0,l.kt)("li",{parentName:"ul"},"High electric currents cause to increase EMI noise; therefore do not\nplace the devices near that consume high currents."),(0,l.kt)("li",{parentName:"ul"},"Place the Crystal and Oscillator as close as possible.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"power-supply--gnd"},"Power supply & GND"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Connect the RJ-45 connector Shield to Chassis GND.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"External ESD protection."))),(0,l.kt)("li",{parentName:"ul"},"Separate Chassis GND and System GND by 1nF/200V Capacitor.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"External ESD protection."))),(0,l.kt)("li",{parentName:"ul"},"Make GND as wide as possible."),(0,l.kt)("li",{parentName:"ul"},"The analog GND pin and digital GND pin should be maintained in a\ngood path.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"We recommend you not to separate analog and digital GND."))),(0,l.kt)("li",{parentName:"ul"},"Place a 0.1uF Bypass Capacitor near the input pin to reduce noise\nfrom power supply.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Place as close as possible to the input pin through the Bypass\nCapacitor."),(0,l.kt)("li",{parentName:"ul"},"Place additional 10uF, 4.7uF Capacitors."))),(0,l.kt)("li",{parentName:"ul"},"Input power through Ferrite Bead or 0 Ohm Resistor.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Functions as power filter and blocks noise."))),(0,l.kt)("li",{parentName:"ul"},"Use a 3.3V Regulator with at least 300mA output current. "),(0,l.kt)("li",{parentName:"ul"},"We recommend you to design one power Plane and GND for PCB to input\nlow Impedance power.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"mdi-routing"},"MDI routing"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MDI routing",src:n(93965).Z,width:"800",height:"808"}),"  "),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Min")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Typ")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"MAX")),(0,l.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"D"))),(0,l.kt)("td",{parentName:"tr",align:null},"6mil"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"12mil"),(0,l.kt)("td",{parentName:"tr",align:null},"TX+/- and RX+/- Trace thickness, ",(0,l.kt)("strong",{parentName:"td"},"ex) 8mil"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"L"))),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"10mil"),(0,l.kt)("td",{parentName:"tr",align:null},"Distance between +/- Differential signal, ",(0,l.kt)("strong",{parentName:"td"},"ex) 4mil"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"W"))),(0,l.kt)("td",{parentName:"tr",align:null},"20mil"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Distance between TX+/- and RX+/- signals, ",(0,l.kt)("strong",{parentName:"td"},"ex) 30mil"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("em",{parentName:"strong"},"K"))),(0,l.kt)("td",{parentName:"tr",align:null},"20mil"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Distance between TX+/- and RX+/- signals and others & power, ",(0,l.kt)("strong",{parentName:"td"},"ex) 30mil"),", separate by GND.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The MDI (medium-dependent interface) signal is connected to the\nRJ-45 Connector through the Transformer."),(0,l.kt)("li",{parentName:"ul"},"The individual impedance of the TX+/- and RX+/- signals is kept\nbelow 50\u03a9.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Impedance of +/- Differential signal should be maintained at\n100\u03a9."))),(0,l.kt)("li",{parentName:"ul"},"Connect TX+/- and RX+/- signals as short as possible."),(0,l.kt)("li",{parentName:"ul"},"Recommended signal length is less than 25mm (1000 mil).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Less than 75mm (3000mil)."))),(0,l.kt)("li",{parentName:"ul"},"Connect TX+/TX- and RX+/RX- with the same length as possible.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"+","/- Differential signal should be same length."),(0,l.kt)("li",{parentName:"ul"},"Timing problems may occur depending on the Trace length."))),(0,l.kt)("li",{parentName:"ul"},"Wire connections between TX+/- and RX+/- are prohibited.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If necessary, use a twisted cable to connect as short as\npossible. (75mm or less)"))),(0,l.kt)("li",{parentName:"ul"},"Routing for TX+/- and RX+/- should be connected at 45\xb0 or curved\nlines except 90\xb0."),(0,l.kt)("li",{parentName:"ul"},"TX+/- and RX+/- signals prohibit Via or Layer changes.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"mii-routing-only-w7500"},"MII routing (Only W7500)"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"MII routing",src:n(17030).Z,width:"800",height:"319"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MII (Media Independent Interface) connects to the PHY MAC (Media\nAccess Controller)."),(0,l.kt)("li",{parentName:"ul"},"MII is a bus signal that needs to be maintained 68\uf057 Impedance\naccording to the IEEE specification."),(0,l.kt)("li",{parentName:"ul"},"MII Data signals (RXD","[","0:3","]",", TXD","[","0:3","]",") should be routed as close\nas possible."),(0,l.kt)("li",{parentName:"ul"},"MII Clock signals (RX","_","CLK, TX","_","CLK) should be routed at enough\ndistance from the data signal."),(0,l.kt)("li",{parentName:"ul"},"Trace length should be as short as possible.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Trace length should be less than 150mm(6000mil)."),(0,l.kt)("li",{parentName:"ul"},"If the Trace length is long, it becomes vulnerable to external\nnoise, and it causes EMI emission, also it is highly to\ninterfere with external signals."))),(0,l.kt)("li",{parentName:"ul"},"All Trace length difference should be less than 50mm(2000mil).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Timing problems may occur depending on the length of Trace."))),(0,l.kt)("li",{parentName:"ul"},"Routing for Data and Clock signals should be connected at 45\xb0 or\ncurved lines except 90\xb0."),(0,l.kt)("li",{parentName:"ul"},"Data and Clock signals prohibit Via or Layer changes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Must be routed in the same GND Plane.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"esd--emi"},"ESD & EMI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chassis GND and System GND should be separated more than 80mil."),(0,l.kt)("li",{parentName:"ul"},"Protect the circuit from external ESD shocks by using TVS diode."),(0,l.kt)("li",{parentName:"ul"},"Use a metal RJ45 Connector.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Connect Shield to Chassis GND.")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"etc"},"ETC"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In case of using 25MHz crystal, use a 50ppm crystal or less.")),(0,l.kt)("hr",null))}d.isMDXComponent=!0},17030:function(e,t,n){t.Z=n.p+"assets/images/mii-53f50efe901e725f054b17eb54f2cc0c.jpg"},94609:function(e,t,n){t.Z=n.p+"assets/images/placement-cf30e0452b221c96d7bb10d96cae728d.jpg"},20124:function(e,t,n){t.Z=n.p+"assets/images/schematic-25aa6ca04754833345e61675171e0470.jpg"},93965:function(e,t,n){t.Z=n.p+"assets/images/trace_2-2bc1b0c5e5bcf73759018160a60be2b3.jpg"}}]);