"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[7274],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},30893:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],l={id:"exercise-7-photoresistor-eng",title:"Exercise 7. Photoresistor(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},s="Reading light sensor value",d={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-eng",title:"Exercise 7. Photoresistor(Eng)",description:"Summary",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise-7.Photoresistor-Eng.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-eng",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-7-photoresistor-eng",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise-7.Photoresistor-Eng.md",tags:[],version:"current",frontMatter:{id:"exercise-7-photoresistor-eng",title:"Exercise 7. Photoresistor(Eng)",date:"2020-04-08T00:00:00.000Z"},sidebar:"docs",previous:{title:"Exercise 6. Temperature sensor(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-6-temperature-sensor-eng"},next:{title:"Network Exercise 1. TCP loopback(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-eng"}},c={},u=[{value:"Summary",id:"summary",level:2},{value:"Materials",id:"materials",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Schematic",id:"schematic",level:3},{value:"Connection diagram",id:"connection-diagram",level:3},{value:"Software",id:"software",level:2},{value:"Example Code",id:"example-code",level:3},{value:"Methods and results",id:"methods-and-results",level:3},{value:"Learning materials",id:"learning-materials",level:2},{value:"Related Links",id:"related-links",level:2}],p={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reading-light-sensor-value"},"Reading light sensor value"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This is an example of reading the light sensor value using ADC. Convert the analog value to a formula and serial it with a value between 0 \\ ~ 3.3V\nIt shows on the screen through the port. Turns the LED on or off compared to the specified analog value."),(0,a.kt)("h2",{id:"materials"},"Materials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WIZwiki-W7500 board"),(0,a.kt)("li",{parentName:"ul"},"USB cable"),(0,a.kt)("li",{parentName:"ul"},"Breadboard"),(0,a.kt)("li",{parentName:"ul"},"Jumper wire"),(0,a.kt)("li",{parentName:"ul"},"PGM5537D (CDS Photo Resistor)")),(0,a.kt)("h2",{id:"hardware"},"Hardware"),(0,a.kt)("h3",{id:"schematic"},"Schematic"),(0,a.kt)("p",null,"The overall circuit diagram is as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(59372).Z,width:"819",height:"807"})),(0,a.kt)("h3",{id:"connection-diagram"},"Connection diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(66158).Z,width:"686",height:"367"})),(0,a.kt)("h2",{id:"software"},"Software"),(0,a.kt)("h3",{id:"example-code"},"Example Code"),(0,a.kt)("p",null,"Here is an example code."),(0,a.kt)("p",null,'Open the page below and compile by importing the program with "Import this program".'),(0,a.kt)("p",null,"\ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"https://developer.mbed.org/teams/IOP/code/CDS_HelloWorld_WIZwiki-W7500/"},"https://developer.mbed.org/teams/IOP/code/CDS_HelloWorld_WIZwiki-W7500/")),(0,a.kt)("p",null,"Or, compile after copying and pasting the following code to main.c in the mbed environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "mbed.h"\n \nDigitalOut redled(LED1); // RED\nDigitalOut blueled(LED3); // BLUE\nAnalogIn CDS(A0);\n \nint main(/) {\n    printf("Hello WizWIki-W7500!\\n\\r");\n    printf("===========================================\\n\\r");\n    \n    int CDS_data = 0;\n    double CDS_vol = 0;\n    \n    while(1) {\n        CDS_data = CDS.read(/)*1000;\n        CDS_vol = CDS.read(/)*3.3;\n        \n        //CDS Seneor ADC Low Data\n        printf("CDS Data : %3d\\r\\n",CDS_data);      \n        //CDS Sensor Voltage data\n        printf("CDS Voltage : %3.3lfV\\r\\n",CDS_vol);\n        printf("===========================================\\n\\r");\n        \n        wait(1);     \n        //Status is bright.\n        if(CDS_data < 500){\n            redled = 1;\n            blueled = 0;\n        }\n        //Status is dark.\n        else  {\n            redled = 0;\n            blueled = 1;\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"methods-and-results"},"Methods and results"),(0,a.kt)("p",null,"The following is an example execution screen. The CDS value and the CDS voltage value measured based on 3.3V are shown alternately.\n! ",(0,a.kt)("a",{target:"_blank",href:r(30839).Z})),(0,a.kt)("h2",{id:"learning-materials"},"Learning materials"),(0,a.kt)("p",null,"Refer to the link below for the specifications of the illuminance sensor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit-parts-datasheet"},"Kit data sheet"))),(0,a.kt)("h2",{id:"related-links"},"Related Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-eng"},"Starter Kit Tutorial"))))}m.isMDXComponent=!0},30839:function(e,t,r){t.Z=r.p+"assets/files/cds_sensor_result-d618a4199e4e60fe4c71f810259a6e96.jpg"},59372:function(e,t,r){t.Z=r.p+"assets/images/cds_sensor_schem-6601b09c5ea262afd3fdd00b0f3712a1.png"},66158:function(e,t,r){t.Z=r.p+"assets/images/exam_cds_sensor-a7149851539ded910fe47dfe6491d911.png"}}]);