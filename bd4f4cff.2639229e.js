(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{436:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),l=(a(0),a(582)),i={id:"hardware_design_guide",title:"Hardware Design Guide",date:new Date("2020-04-02T00:00:00.000Z")},c={unversionedId:"Design-Guide/hardware_design_guide",id:"Design-Guide/hardware_design_guide",isDocsHomePage:!1,title:"Hardware Design Guide",description:"Summary",source:"@site/docs\\Design-Guide\\Hardware_Design_Guide.md",permalink:"/Design-Guide/hardware_design_guide",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Design-Guide/Hardware_Design_Guide.md",sidebar:"docs",previous:{title:"Design Guide",permalink:"/Design-Guide/design_guide"},next:{title:"Package Information",permalink:"/Design-Guide/package_information"}},b=[{value:"Summary",id:"summary",children:[]},{value:"MDI signal Schematic",id:"mdi-signal-schematic",children:[]},{value:"Parts Placement",id:"parts-placement",children:[]},{value:"Power supply &amp; GND",id:"power-supply--gnd",children:[]},{value:"MDI routing",id:"mdi-routing",children:[]},{value:"MII routing (Only W7500)",id:"mii-routing-only-w7500",children:[]},{value:"ESD &amp; EMI",id:"esd--emi",children:[]},{value:"ETC",id:"etc",children:[]}],o={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"summary"},"Summary"),Object(l.b)("p",null,"This document is a Design Guide for WIZnet Chip to be used for PCB. It\ncontains reference for PCB design using W5100, W5300, W5500, W7100A,\nW7500, and W7500P. Contents of MDI (Medium-dependent interface) signal,\npower supply, parts placement, MII (Media Independent Interface), etc.\nare included and you must follow the instructions below. If you do not\nfollow the instructions, you are likely to experience degraded Ethernet\nperformance."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"mdi-signal-schematic"},"MDI signal Schematic"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/design_guide/schematic.jpg",alt:"MDI signal Schematic"})),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The above circuit is the most used for Ethernet implementation.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"W5100, W5300, W7100 should be configured as shown above."),Object(l.b)("li",{parentName:"ul"},"For the W5500, please follow the URL below for your reference.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"../Product/iEthernet/W5500/ref_schematic"}),"Ref. Schematic")))),Object(l.b)("li",{parentName:"ul"},"Since the W7500 must use an external PHY, you should contact the\nmanufacturer of PHY you are using.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"../Product/iMCU/W7500/w7500_ref_schematic"}),"Ref. Schematic")))),Object(l.b)("li",{parentName:"ul"},"W7500P has built in PHY, and the circuit should be constructed by\nremoving part A from the above diagram.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"../Product/iMCU/W7500P/w7500p_ref_schematic"}),"Ref. Schematic"))))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"parts-placement"},"Parts Placement"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/design_guide/placement.jpg",alt:"Parts Placement"})),"  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Place A and B parts as close as possible to the Transformer.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If you are using a RJ-45 Connector which is separated from the\nTransformer, you should place both as close to each other as\npossible.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Distance must be more than 2.5mm (100mil) and less than 25mm\n(1000mil)."))),Object(l.b)("li",{parentName:"ul"},"All PCB layers under the Transformer and RJ45 Connector must have no\npower and GND plane."),Object(l.b)("li",{parentName:"ul"},"Between PHY and RJ45 Connector, there should be no routing for a\ndigital signal.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prevention of signal interference."))),Object(l.b)("li",{parentName:"ul"},"There should be no high-frequency device and routing near the TX+/-\nand RX+/- signals.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prevention of signal interference."))),Object(l.b)("li",{parentName:"ul"},"We generally recommend you to use a connector that combines a\nTransformer and RJ-45 Connector."),Object(l.b)("li",{parentName:"ul"},"High electric currents cause to increase EMI noise; therefore do not\nplace the devices near that consume high currents."),Object(l.b)("li",{parentName:"ul"},"Place the Crystal and Oscillator as close as possible.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"power-supply--gnd"},"Power supply & GND"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Connect the RJ-45 connector Shield to Chassis GND.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"External ESD protection."))),Object(l.b)("li",{parentName:"ul"},"Separate Chassis GND and System GND by 1nF/200V Capacitor.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"External ESD protection."))),Object(l.b)("li",{parentName:"ul"},"Make GND as wide as possible."),Object(l.b)("li",{parentName:"ul"},"The analog GND pin and digital GND pin should be maintained in a\ngood path.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"We recommend you not to separate analog and digital GND."))),Object(l.b)("li",{parentName:"ul"},"Place a 0.1uF Bypass Capacitor near the input pin to reduce noise\nfrom power supply.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Place as close as possible to the input pin through the Bypass\nCapacitor."),Object(l.b)("li",{parentName:"ul"},"Place additional 10uF, 4.7uF Capacitors."))),Object(l.b)("li",{parentName:"ul"},"Input power through Ferrite Bead or 0 Ohm Resistor.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Functions as power filter and blocks noise."))),Object(l.b)("li",{parentName:"ul"},"Use a 3.3V Regulator with at least 300mA output current. "),Object(l.b)("li",{parentName:"ul"},"We recommend you to design one power Plane and GND for PCB to input\nlow Impedance power.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"mdi-routing"},"MDI routing"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/design_guide/trace_2.jpg",alt:"MDI routing"})),"  "),Object(l.b)("hr",null),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Min")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"Typ")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"th"},"MAX")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descriptions"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"},"D"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6mil"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12mil"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TX+/- and RX+/- Trace thickness, ",Object(l.b)("strong",{parentName:"td"},"ex) 8mil"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"},"L"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10mil"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distance between +/- Differential signal, ",Object(l.b)("strong",{parentName:"td"},"ex) 4mil"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"},"W"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20mil"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distance between TX+/- and RX+/- signals, ",Object(l.b)("strong",{parentName:"td"},"ex) 30mil"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},Object(l.b)("em",{parentName:"strong"},"K"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20mil"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distance between TX+/- and RX+/- signals and others & power, ",Object(l.b)("strong",{parentName:"td"},"ex) 30mil"),", separate by GND.")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The MDI (medium-dependent interface) signal is connected to the\nRJ-45 Connector through the Transformer."),Object(l.b)("li",{parentName:"ul"},"The individual impedance of the TX+/- and RX+/- signals is kept\nbelow 50\u03a9.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Impedance of +/- Differential signal should be maintained at\n100\u03a9."))),Object(l.b)("li",{parentName:"ul"},"Connect TX+/- and RX+/- signals as short as possible."),Object(l.b)("li",{parentName:"ul"},"Recommended signal length is less than 25mm (1000 mil).",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Less than 75mm (3000mil)."))),Object(l.b)("li",{parentName:"ul"},"Connect TX+/TX- and RX+/RX- with the same length as possible.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"+","/- Differential signal should be same length."),Object(l.b)("li",{parentName:"ul"},"Timing problems may occur depending on the Trace length."))),Object(l.b)("li",{parentName:"ul"},"Wire connections between TX+/- and RX+/- are prohibited.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If necessary, use a twisted cable to connect as short as\npossible. (75mm or less)"))),Object(l.b)("li",{parentName:"ul"},"Routing for TX+/- and RX+/- should be connected at 45\xb0 or curved\nlines except 90\xb0."),Object(l.b)("li",{parentName:"ul"},"TX+/- and RX+/- signals prohibit Via or Layer changes.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"mii-routing-only-w7500"},"MII routing (Only W7500)"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/design_guide/mii.jpg",alt:"MII routing"}))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MII (Media Independent Interface) connects to the PHY MAC (Media\nAccess Controller)."),Object(l.b)("li",{parentName:"ul"},"MII is a bus signal that needs to be maintained 68\uf057 Impedance\naccording to the IEEE specification."),Object(l.b)("li",{parentName:"ul"},"MII Data signals (RXD","[","0:3","]",", TXD","[","0:3","]",") should be routed as close\nas possible."),Object(l.b)("li",{parentName:"ul"},"MII Clock signals (RX","_","CLK, TX","_","CLK) should be routed at enough\ndistance from the data signal."),Object(l.b)("li",{parentName:"ul"},"Trace length should be as short as possible.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Trace length should be less than 150mm(6000mil)."),Object(l.b)("li",{parentName:"ul"},"If the Trace length is long, it becomes vulnerable to external\nnoise, and it causes EMI emission, also it is highly to\ninterfere with external signals."))),Object(l.b)("li",{parentName:"ul"},"All Trace length difference should be less than 50mm(2000mil).",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Timing problems may occur depending on the length of Trace."))),Object(l.b)("li",{parentName:"ul"},"Routing for Data and Clock signals should be connected at 45\xb0 or\ncurved lines except 90\xb0."),Object(l.b)("li",{parentName:"ul"},"Data and Clock signals prohibit Via or Layer changes",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Must be routed in the same GND Plane.")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"esd--emi"},"ESD & EMI"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Chassis GND and System GND should be separated more than 80mil."),Object(l.b)("li",{parentName:"ul"},"Protect the circuit from external ESD shocks by using TVS diode."),Object(l.b)("li",{parentName:"ul"},"Use a metal RJ45 Connector.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Connect Shield to Chassis GND.")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"etc"},"ETC"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In case of using 25MHz crystal, use a 50ppm crystal or less.")),Object(l.b)("hr",null))}s.isMDXComponent=!0},582:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,d=u["".concat(i,".").concat(p)]||u[p]||m[p]||l;return a?r.a.createElement(d,c(c({ref:t},o),{},{components:a})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);