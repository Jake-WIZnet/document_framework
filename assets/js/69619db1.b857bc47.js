"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[4449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(r),p=n,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},98078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const i={id:"exercise-6-temperature-sensor-eng",title:"Exercise 6. Temperature sensor(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},o="Reading the temperature sensor value",l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-eng",title:"Exercise 6. Temperature sensor(Eng)",description:"Summary",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise-6.Temperature-sensor-Eng.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-eng",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-eng",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise-6.Temperature-sensor-Eng.md",tags:[],version:"current",frontMatter:{id:"exercise-6-temperature-sensor-eng",title:"Exercise 6. Temperature sensor(Eng)",date:"2020-04-08T00:00:00.000Z"},sidebar:"docs",previous:{title:"Exercise 5. Variable resistor(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-5-variable-resistor-eng"},next:{title:"Exercise 7. Photoresistor(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-eng"}},s={},m=[{value:"Summary",id:"summary",level:2},{value:"Materials",id:"materials",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Schematic",id:"schematic",level:3},{value:"Connection diagram",id:"connection-diagram",level:3},{value:"Software",id:"software",level:2},{value:"Example Code",id:"example-code",level:3},{value:"Methods and results",id:"methods-and-results",level:3},{value:"Learning materials",id:"learning-materials",level:2},{value:"Related links",id:"related-links",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reading-the-temperature-sensor-value"},"Reading the temperature sensor value"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This is an example of reading analog temperature sensor value using ADC. Convert analog values \u200b\u200bto Celsius and Fahrenheit using formulas. The converted value\nIt is displayed on the screen through the serial port.."),(0,n.kt)("h2",{id:"materials"},"Materials"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WIZwiki-W7500 board"),(0,n.kt)("li",{parentName:"ul"},"USB cable"),(0,n.kt)("li",{parentName:"ul"},"Breadboard"),(0,n.kt)("li",{parentName:"ul"},"Jumper wire"),(0,n.kt)("li",{parentName:"ul"},"Temperature Sensor TMP36GT9 (Low Voltage Temperature Sensor)")),(0,n.kt)("h2",{id:"hardware"},"Hardware"),(0,n.kt)("h3",{id:"schematic"},"Schematic"),(0,n.kt)("p",null,"The overall circuit diagram is as follows.\n",(0,n.kt)("img",{src:r(49982).Z,width:"840",height:"807"})),(0,n.kt)("h3",{id:"connection-diagram"},"Connection diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(72545).Z,width:"720",height:"389"})),(0,n.kt)("h2",{id:"software"},"Software"),(0,n.kt)("h3",{id:"example-code"},"Example Code"),(0,n.kt)("p",null,"Here is an example code."),(0,n.kt)("p",null,'Open the page below and compile by importing the program with "Import this program".'),(0,n.kt)("p",null,"\ud83c\udf0e",(0,n.kt)("a",{parentName:"p",href:"https://os.mbed.com/teams/IOP/code/Temp36_HelloWorld_WIZwiki-W7500/"},"https://os.mbed.com/teams/IOP/code/Temp36_HelloWorld_WIZwiki-W7500/")),(0,n.kt)("p",null,"Or, compile after copying and pasting the following code to main.c in the mbed environment."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'/* Analog Input "Temp36" Temperature Sensor Example Program */\n \n#include "mbed.h"\n \n// Initialize a pins to perform analog input fucntions\nAnalogIn   ain(A2); // connect A0(WIZwiki-W7500) to Vout(Temp36)\n \nint main(void)\n{\n    while (1)\n    {\n        float V = ain.read(/) * 3.3; // connect Vs(Temp36) to 3.3V(WIZwiki-W7500) \n        //float V = ain.read(/) * 5; // connect Vs(Temp36) to 5V(WIZwiki-W7500)\n        \n        float tempC = (V-0.5) * 100; // calculate temperature C\n        float tempF = (tempC * 9 / 5) + 32.0; // calculate temperature F\n        \n        printf("tempC value : %5.2f C \\r\\n", tempC);\n        printf("tempF value : %5.2f F \\r\\n", tempF);\n        \n        wait(1.0);\n    }\n}\n')),(0,n.kt)("h3",{id:"methods-and-results"},"Methods and results"),(0,n.kt)("p",null,"The following is an example execution screen. Celsius and Fahrenheit temperature values alternate."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(18855).Z,width:"831",height:"512"})),(0,n.kt)("h2",{id:"learning-materials"},"Learning materials"),(0,n.kt)("p",null,"See the link below for temperature sensor data."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[Kit Configuration Data Sheet]"," (/) ")),(0,n.kt)("h2",{id:"related-links"},"Related links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-eng"},"Starter Kit Tutorial"))))}d.isMDXComponent=!0},72545:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/exam_temp_sensor-b821ccbc6d28264d75cf6a3634e26706.png"},18855:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/temp_sensor_result-531e4dc35839ade6f8981a5aea1e53cd.jpg"},49982:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/temp_sensor_schem-ed4f3f66bdd316d71684a43843faa636.png"}}]);