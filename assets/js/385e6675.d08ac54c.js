(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[97694],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),u=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),s=u(n),c=a,g=s["".concat(d,".").concat(c)]||s[c]||m[c]||i;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71860:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),o={id:"io_pin",title:"IO Pin",date:new Date("2020-05-12T00:00:00.000Z")},l={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin",isDocsHomePage:!1,title:"IO Pin",description:"PIN Description",source:"@site/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/IO_Pin.md",sourceDirName:"Product/Wi-Fi-Module/WizFi250/Programers-Guide",slug:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/IO_Pin.md",version:"current",frontMatter:{id:"io_pin",title:"IO Pin",date:"2020-05-12T00:00:00.000Z"}},d=[{value:"PIN Description",id:"pin-description",children:[]},{value:"FUNCTION Pin Usage",id:"function-pin-usage",children:[]}],u={toc:d};function p(t){var e=t.components,o=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pin-description"},"PIN Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Pin Name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Direction")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BOOT"),(0,i.kt)("td",{parentName:"tr",align:null},"IN"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter into boot mode When boot or reset is performed, if this pin is tied low, it will enter into boot mode. Users can do APP/DCT(DCT : Device Configuration Table for WizFi250-Configuration-Data) upload or factory recovery in the boot mode through UART.",(0,i.kt)("em",{parentName:"td"}," LOW : Start as boot mode "),"  HIGH: Start as application mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FUNCTION"),(0,i.kt)("td",{parentName:"tr",align:null},"IN"),(0,i.kt)("td",{parentName:"tr",align:null},"Perform pre-defined action Perform pre-defined action at the booting or while running. This can be used when UART cannot be used.(Refer to ",(0,i.kt)("a",{parentName:"td",href:"#function-pin-usage"},"FUNCTION Pin Usage"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LED1"),(0,i.kt)("td",{parentName:"tr",align:null},"OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicate WiFi Association When WiFi is joined (associated) with router in STA mode or with station in AP mode, it will be changed to low state (LED On). And when left(disassociated), it will be returned to high state (LED Off).\u2666 LOW (LED ON) : WiFi is Associated \u2666 HIGH(LED OFF): WiFi is Not associated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LED2"),(0,i.kt)("td",{parentName:"tr",align:null},"OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicate Data/Command Mode If serial (UART or SPI) interface mode is data mode, this pin will be tied low state (LED On). And if it is command mode, it will be tied high state (LED Off).\u2666 LOW (LED ON) : Data Mode \u2666 HIGH(LED OFF): Command Mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPI_DATA_READY"),(0,i.kt)("td",{parentName:"tr",align:null},"OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates that there is data to send through SPI When WizFi250 has data to send in the SPI mode, this will be changed to high state. This pin can be used for awakening host MCU.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GPIO 1"),(0,i.kt)("td",{parentName:"tr",align:null},"IN/OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"User Defined GPIO 1 User can utilize this pin for GPIO through AT Command.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GPIO 5"),(0,i.kt)("td",{parentName:"tr",align:null},"IN/OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"User Defined GPIO 5 User can utilize this pin for GPIO through AT Command.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GPIO 6"),(0,i.kt)("td",{parentName:"tr",align:null},"IN/OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"User Defined GPIO 6 User can utilize this pin for GPIO through AT Command.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GPIO 7"),(0,i.kt)("td",{parentName:"tr",align:null},"IN/OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"User Defined GPIO 7 User can utilize this pin for GPIO through AT Command.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GPIO 8"),(0,i.kt)("td",{parentName:"tr",align:null},"IN/OUT"),(0,i.kt)("td",{parentName:"tr",align:null},"User Defined GPIO 8 User can utilize this pin for GPIO through AT Command.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Reserved for future use")))),(0,i.kt)("h2",{id:"function-pin-usage"},"FUNCTION Pin Usage"),(0,i.kt)("p",null,"Through the function pin, users can perform specific actions without AT Command."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Action")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"How to enter")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Factory Recovery"),(0,i.kt)("td",{parentName:"tr",align:null},"While booting or reset, keep low state (pressing the button) together with BOOT pin over 3.5 seconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AP Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"During running state, tie it to low state and release it for once.Refer to time diagram below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OTA Mode"),(0,i.kt)("td",{parentName:"tr",align:null},"While running state, tie it to low state and release it for twice.Refer to time diagram below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Factory Default"),(0,i.kt)("td",{parentName:"tr",align:null},"During running state, tie it to low state and release it for thrice.Refer to time diagram below.")))),(0,i.kt)("p",null,"Time sequence graph is as below.\n",(0,i.kt)("img",{src:n(45659).Z})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Variable")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Min")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Typ")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Max")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t1"),(0,i.kt)("td",{parentName:"tr",align:null},"100 ms"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"200 ms")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t2"),(0,i.kt)("td",{parentName:"tr",align:null},"100 ms"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"200 ms")))))}p.isMDXComponent=!0},45659:function(t,e,n){"use strict";e.Z=n.p+"assets/images/function_button_time_diagram-60d16d4c25c8ebe067000e962cedaf24.jpg"}}]);