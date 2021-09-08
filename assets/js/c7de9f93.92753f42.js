(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[50219],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return k}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),k=i,A=p["".concat(s,".").concat(k)]||p[k]||d[k]||n;return r?a.createElement(A,o(o({ref:t},u),{},{components:r})):a.createElement(A,o({ref:t},u))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},75434:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=r(22122),i=r(19756),n=(r(67294),r(3905)),o=["components"],l={id:"exercise_5_variable_resistor_eng",title:"Exercise 5. Variable resistor(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},s="Reading the analog value using a variable resistor",c={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng",isDocsHomePage:!1,title:"Exercise 5. Variable resistor(Eng)",description:"Outline",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_5._Variable_resistor(Eng).md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_5._Variable_resistor(Eng).md",tags:[],version:"current",frontMatter:{id:"exercise_5_variable_resistor_eng",title:"Exercise 5. Variable resistor(Eng)",date:"2020-04-08T00:00:00.000Z"},sidebar:"docs",previous:{title:"Exercise 4. PWM(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_eng"},next:{title:"Exercise 6. Temperature sensor(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_6_temperature_sensor_eng"}},u=[{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Hardware",id:"hardware",children:[{value:"The Circuit",id:"the-circuit",children:[]},{value:"Connections",id:"connections",children:[]}]},{value:"Software",id:"software",children:[{value:"Example Code",id:"example-code",children:[]},{value:"How to run and test result",id:"how-to-run-and-test-result",children:[]}]},{value:"Learning Resources",id:"learning-resources",children:[]},{value:"Related Links",id:"related-links",children:[]}],d={toc:u};function p(e){var t=e.components,l=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"reading-the-analog-value-using-a-variable-resistor"},"Reading the analog value using a variable resistor"),(0,n.kt)("h2",{id:"outline"},"Outline"),(0,n.kt)("p",null,"This is an exercise to read Analog values made by variable resistor\n(potentiometer). The ADC (Analog Digital Converter) module of W7500 chip\nembedded in WIZwiki board is used. User can learn how to read sensor's\nanalog output data."),(0,n.kt)("h2",{id:"what-you-need"},"What you need"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WIZwiki-W7500"),(0,n.kt)("li",{parentName:"ul"},"USB cable"),(0,n.kt)("li",{parentName:"ul"},"Breadboard"),(0,n.kt)("li",{parentName:"ul"},"Jumper wire"),(0,n.kt)("li",{parentName:"ul"},"Rotary Potentiometer (10K Ohm)")),(0,n.kt)("h2",{id:"hardware"},"Hardware"),(0,n.kt)("h3",{id:"the-circuit"},"The Circuit"),(0,n.kt)("p",null,"This is the circuit for this example.\n",(0,n.kt)("img",{src:r(45086).Z})),(0,n.kt)("h3",{id:"connections"},"Connections"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WIZwiki and a variable resistor",src:r(70932).Z}),"\n",(0,n.kt)("img",{src:r(80111).Z}),"\n",(0,n.kt)("img",{src:r(32964).Z})),(0,n.kt)("h2",{id:"software"},"Software"),(0,n.kt)("h3",{id:"example-code"},"Example Code"),(0,n.kt)("p",null,"Below are the example codes. Delete the default code and copy/paste the\ncodes below and compile."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'#include "mbed.h"\n \nAnalogIn analog_value(A0);\n \nDigitalOut led(LED1);\n\nint main(/) {\n    float meas;\n    \n    printf("\\nAnalogIn example\\n");\n    \n    while(1) {\n        meas = analog_value.read(/); // Converts and read the analog input value (value from 0.0 to 1.0)\n        meas = meas * 3300; // Change the value to be in the 0 to 3300 range\n        printf("measure = %.0f mV\\n", meas);\n        if (meas > 2000) { // If the value is greater than 2V then switch the LED on\n          led = 0;\n        }\n        else {\n          led = 1;\n        }\n        wait(0.2); // 200 ms\n    }\n}\n')),(0,n.kt)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),(0,n.kt)("p",null,"When you download the compiled binary to the WIZwiki board and push the\nreset button, check the serial port message as rotating the dial of\npotentiometer. You can see the measured value (mV unit) periodically."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(431).Z})),(0,n.kt)("p",null,"If user rotates the dial clock-wise, the measured value will increase.\nIf the measured value is above than 2000mV, then the LED1 of WIZwiki\nboard turns on. If the measured value is less than 2000mV, then the LED1\nturns off."),(0,n.kt)("p",null,"The WIZwiki board can read analog values from external circuit and\nconvert them to digital values."),(0,n.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,n.kt)("p",null,"\ud83c\udf0e",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Potentiometer"},"Potentiometer, from wikipedia")),(0,n.kt)("p",null,"\ud83c\udf0e",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Analog-to-digital_converter"},"Analog-to-digital converter, from wikipedia")),(0,n.kt)("h2",{id:"related-links"},"Related Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"tutorial_eng"},"Starter Kit Tutorial"))))}p.isMDXComponent=!0},70932:function(e,t,r){"use strict";t.Z=r.p+"assets/images/5_board_all-3fe727ee0d1d03b558bc726e41dec7c1.jpg"},80111:function(e,t){"use strict";t.Z="data:image/jpeg;base64,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"},32964:function(e,t,r){"use strict";t.Z=r.p+"assets/images/5_board_analog2-b27c84bebb08079d4eb4a1763ed5662d.jpg"},45086:function(e,t,r){"use strict";t.Z=r.p+"assets/images/5_potentiometer_schem-f1dab25ddfe4361b1fb38c576f675675.png"},431:function(e,t,r){"use strict";t.Z=r.p+"assets/images/5_test_result-2162ec43d967b5bf20e91b2e403f4b63.jpg"}}]);