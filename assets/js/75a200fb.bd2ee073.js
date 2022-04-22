"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[9685],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=i,w=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(w,o(o({ref:t},c),{},{components:n})):r.createElement(w,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={id:"exercise-4-pwm-eng",title:"Exercise 4. PWM(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},u="Ringing a buzzer with PWM",d={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-4-pwm-eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-4-pwm-eng",title:"Exercise 4. PWM(Eng)",description:"Outline",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise-4.PWM-Eng.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-4-pwm-eng",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-4-pwm-eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise-4.PWM-Eng.md",tags:[],version:"current",frontMatter:{id:"exercise-4-pwm-eng",title:"Exercise 4. PWM(Eng)",date:"2020-04-08T00:00:00.000Z"},sidebar:"docs",previous:{title:"Exercise 3. Switch(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-3-switch-eng"},next:{title:"Exercise 5. Variable resistor(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-5-variable-resistor-eng"}},c={},p=[{value:"Outline",id:"outline",level:2},{value:"What you need",id:"what-you-need",level:2},{value:"Hardware",id:"hardware",level:2},{value:"The Circuit",id:"the-circuit",level:3},{value:"Connections",id:"connections",level:3},{value:"Software",id:"software",level:2},{value:"Example Code",id:"example-code",level:3},{value:"How to run and test result",id:"how-to-run-and-test-result",level:3},{value:"Learning Resources",id:"learning-resources",level:2},{value:"Related Links",id:"related-links",level:2}],s={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ringing-a-buzzer-with-pwm"},"Ringing a buzzer with PWM"),(0,a.kt)("h2",{id:"outline"},"Outline"),(0,a.kt)("p",null,"This is an exercise to ringing a buzzer with PWM. The PWM stands for\nPulse Width Modulation. The PWM is used for making digital waveform\nwhich has specific pulse width. The PWM module of W7500 chip embdded in\nWIZwiki board can makes various digital waveform. Using this PWM, user\ncan make high or low tone sound, control LED brightness and control\nmotor speeds."),(0,a.kt)("h2",{id:"what-you-need"},"What you need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WIZwiki-W7500"),(0,a.kt)("li",{parentName:"ul"},"USB cable"),(0,a.kt)("li",{parentName:"ul"},"Breadboard"),(0,a.kt)("li",{parentName:"ul"},"Jumper wire"),(0,a.kt)("li",{parentName:"ul"},"Magnetic Buzzer")),(0,a.kt)("h2",{id:"hardware"},"Hardware"),(0,a.kt)("h3",{id:"the-circuit"},"The Circuit"),(0,a.kt)("p",null,"This is the circuit for this example.\n",(0,a.kt)("img",{src:n(27265).Z,width:"654",height:"714"})),(0,a.kt)("h3",{id:"connections"},"Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(55117).Z,width:"1108",height:"716"})),(0,a.kt)("h2",{id:"software"},"Software"),(0,a.kt)("h3",{id:"example-code"},"Example Code"),(0,a.kt)("p",null,"Below are the example codes. Delete the default code and copy/paste the\ncodes below and compile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "mbed.h"\n\n#define VOLUME 0.02\n#define BPM 100.0\n\nPwmOut pwm_pin(D3);\n\n// Plays a sound with the defined frequency, duration, and volume\nvoid playNote(float frequency, float duration, float volume) {\n    pwm_pin.period(1.0/frequency);\n    pwm_pin = volume/2.0;\n    wait(duration);\n    pwm_pin = 0.0;\n}\n\nint main(/)\n{\n    float beat_duration;\n\n    // Calculate duration of a quarter note from bpm\n    beat_duration = 60.0 / BPM;\n\n    // Loop forever\n    while(1) {\n\nplayNote(261.626, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, (0.75 * beat_duration), VOLUME);\n\nplayNote(261.626, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, (0.75 * beat_duration), VOLUME);\n                        \nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, ((2 * beat_duration) - 0.1), VOLUME);\nwait(0.1);\n\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\n\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\n\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\n\n//playNote(261.626, ((2 * beat_duration) - 0.1), VOLUME);\nplayNote(261.626, ((3 * beat_duration) - 0.1), VOLUME);\nwait(0.1);\n\n    }\n}\n')),(0,a.kt)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),(0,a.kt)("p",null,"When you download the compiled binary to the WIZwiki board and push the\nreset button, then the PWM digital signal drives a buzzer and plays a\nsimple music."),(0,a.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PWM")),(0,a.kt)("p",null,"\ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pulse-width_modulation"},"https://en.wikipedia.org/wiki/Pulse-width_modulation")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Piano key frequencies")),(0,a.kt)("p",null,"\ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Piano_key_frequencies"},"https://en.wikipedia.org/wiki/Piano_key_frequencies")),(0,a.kt)("h2",{id:"related-links"},"Related Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-eng"},"Starter Kit Tutorial"))))}m.isMDXComponent=!0},55117:function(e,t,n){t.Z=n.p+"assets/images/4_board_all-0d8443e44d9f37a9e8e3607004926a03.jpg"},27265:function(e,t,n){t.Z=n.p+"assets/images/4_pwm_buzzer_schem-93885e39ccad85ca9c4d42e72da152c1.png"}}]);