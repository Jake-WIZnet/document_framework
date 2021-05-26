(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[39151],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19467:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i={id:"troubleshooting_guide-[en]",title:"Troubleshooting Guide",date:new Date("2021-04-21T00:00:00.000Z")},l={unversionedId:"Product/S2E-Module/WIZ510SSL/troubleshooting_guide-[en]",id:"Product/S2E-Module/WIZ510SSL/troubleshooting_guide-[en]",isDocsHomePage:!1,title:"Troubleshooting Guide",description:"Common Cases",source:"@site/docs/Product/S2E-Module/WIZ510SSL/Troubleshooting_Guide-[EN].md",sourceDirName:"Product/S2E-Module/WIZ510SSL",slug:"/Product/S2E-Module/WIZ510SSL/troubleshooting_guide-[en]",permalink:"/Product/S2E-Module/WIZ510SSL/troubleshooting_guide-[en]",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ510SSL/Troubleshooting_Guide-[EN].md",version:"current",frontMatter:{id:"troubleshooting_guide-[en]",title:"Troubleshooting Guide",date:"2021-04-21T00:00:00.000Z"},sidebar:"docs",previous:{title:"SSL Connection Guide",permalink:"/Product/S2E-Module/WIZ510SSL/ssl_connection_guide-[en]"},next:{title:"AWS Connection Guide",permalink:"/Product/S2E-Module/WIZ510SSL/aws_connection_guide-[en]"}},u=[{value:"Common Cases",id:"common-cases",children:[{value:"Where to find Configuration tool for WIZ510SSL?",id:"where-to-find-configuration-tool-for-wiz510ssl",children:[]},{value:"Module cannot be searched",id:"module-cannot-be-searched",children:[]},{value:"Module setting changes are not applied",id:"module-setting-changes-are-not-applied",children:[]},{value:"The firmware update is unsuccessful",id:"the-firmware-update-is-unsuccessful",children:[]}]},{value:"Still having troubles?",id:"still-having-troubles",children:[]}],s={toc:u};function c(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"common-cases"},"Common Cases"),(0,a.kt)("h3",{id:"where-to-find-configuration-tool-for-wiz510ssl"},"Where to find Configuration tool for WIZ510SSL?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The latest version Configuration tool can be downloaded at this download page.")),(0,a.kt)("h3",{id:"module-cannot-be-searched"},"Module cannot be searched"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Check the power and Ethernet cable\u2019s connection first.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Check if the ping request from PC to module is successful."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When using Windows",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Run ",">"," Enter 'cmd' (windows command line)"),(0,a.kt)("li",{parentName:"ol"},"ping 192.168.xxx.xxx (enter the allocated IP address)"),(0,a.kt)("li",{parentName:"ol"},"Check response"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("strong",{parentName:"p"},"UDP broadcast, port 50001")," in order to use the UDP\nSearch from the configuration tool of WIZ750SR. Please test after\nclosing the ",(0,a.kt)("strong",{parentName:"p"},"OS firewall and virus programs"),". ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If there is a problem with the UDP port, users can change the OS\ninbound / outbound port settings to open the Search & firmware\nupdate port (UDP/TCP 50001, TCP 50002).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If multiple network adaptors are used, an error can occur in sending\nthe packet in the correct order of the network interface Metric.\nDeactivate all other adaptors except the one that is used for OS\nsetting in order to test again."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This problem can occur because of the virtual Ethernet adaptor,\nwhich is used for the networking of Virtual Machines like VMware\nor Virtual Box is used.")))),(0,a.kt)("h3",{id:"module-setting-changes-are-not-applied"},"Module setting changes are not applied"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the \u2018Setting\u2019 icon from the Configuration tool after changing\nthe product setting; then the product will restart and the changes\nwill be applied.")),(0,a.kt)("h3",{id:"the-firmware-update-is-unsuccessful"},"The firmware update is unsuccessful"),(0,a.kt)("p",null,"WIZ510SSL operates two firmware banks. In case if wrong firmware bank version was selected during firmware upgrade, it is possible that board may become unresponsive."),(0,a.kt)("p",null,"Follow below steps to recover your board:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect to debug UART (UART2) either by USB-cable or using J6 pins. Open any Terminal and connect by following settings: Speed-115200, Data-8bit, Parity-N, Stopbit-1, Flow Control-N"),(0,a.kt)("li",{parentName:"ol"},"Confirm firmware bank by board reset. You should be able to see following messages in terminal.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87532).Z})," |"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Set BOOT0 to HIGH (insert jumper to J3) and reset board.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(93873).Z})," |"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Connect to your board using CubeProgrammer by UART using following settings: Speed-115200, Data-8bit, Parity-EVEN")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(47868).Z})," |"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Open necessary file, select appropriate memory address and download firmware. Please refer to below table to find bank version and address.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bank"),(0,a.kt)("th",{parentName:"tr",align:null},"Address"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bank 0"),(0,a.kt)("td",{parentName:"tr",align:null},"0x08010000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bank 1"),(0,a.kt)("td",{parentName:"tr",align:null},"0x08040000")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73982).Z})," |"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8105).Z})," |"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(88047).Z})," |"),(0,a.kt)("p",null,"It is recommended to upload firmware for both banks to prevent board becoming unresponsive again."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"still-having-troubles"},"Still having troubles?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Check related category in our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.wiznet.io/"},"WIZnet Forum"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All WIZnet products have a ",(0,a.kt)("strong",{parentName:"p"},"warranty of 1 year from the purchase date"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Contact the person you purchased the product from and request a ",(0,a.kt)("strong",{parentName:"p"},"RMA"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Contact our support team"))),(0,a.kt)("hr",null))}c.isMDXComponent=!0},93873:function(e,t,n){"use strict";t.Z=n.p+"assets/images/J3_pin-cf48d3d04c282624f1c465d749dfe82a.png"},88047:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cube_done-b8f59a4869aec9cf64e1ae71baa0910f.PNG"},8105:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cube_memory-f243b1d5fe51f50be13fd1344e50c848.png"},73982:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cube_open-08a785ce62e5fb8583c479384187b052.png"},47868:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cubeprogrammer_uart-19c427f5fdad8581bb3543e7d8255042.PNG"},87532:function(e,t,n){"use strict";t.Z=n.p+"assets/images/debug_uart-607e38af6193542a8fdc4fef955b4107.PNG"}}]);