"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[8071],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(i),m=r,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||n;return i?a.createElement(h,l(l({ref:t},d),{},{components:i})):a.createElement(h,l({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,l=new Array(n);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<n;s++)l[s]=i[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},90607:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=i(87462),r=(i(67294),i(3905));const n={id:"wizarduino_mega_wifi_eng",title:"WizArduino MEGA WIFI (ENG)",date:new Date("2020-04-03T00:00:00.000Z")},l=void 0,o={unversionedId:"Product/Open-Source-Hardware/wizarduino_mega_wifi_eng",id:"Product/Open-Source-Hardware/wizarduino_mega_wifi_eng",title:"WizArduino MEGA WIFI (ENG)",description:"-----",source:"@site/docs/Product/Open-Source-Hardware/WizArduino_MEGA_WIFI_eng.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/wizarduino_mega_wifi_eng",permalink:"/Product/Open-Source-Hardware/wizarduino_mega_wifi_eng",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/WizArduino_MEGA_WIFI_eng.md",tags:[],version:"current",frontMatter:{id:"wizarduino_mega_wifi_eng",title:"WizArduino MEGA WIFI (ENG)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"WizArduino MEGA WIFI (KOR)",permalink:"/Product/Open-Source-Hardware/wizarduino_mega_wifi"},next:{title:"WizFi310 Shield (Discontinued)",permalink:"/Product/Open-Source-Hardware/wizfi310_shield"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Hardware Features",id:"hardware-features",level:3},{value:"WiFi Features",id:"wifi-features",level:3},{value:"Pinout",id:"pinout",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Basic",id:"basic",level:3},{value:"WiFi",id:"wifi",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"WiFi Library",id:"wifi-library",level:2},{value:"GitHub",id:"github",level:3},{value:"Sketch",id:"sketch",level:3},{value:"Examples",id:"examples",level:2},{value:"IoT",id:"iot",level:3},{value:"Maker Projects",id:"maker-projects",level:2},{value:"Technical Reference",id:"technical-reference",level:2},{value:"Schematic &amp; Reference Design",id:"schematic--reference-design",level:3},{value:"Dimension",id:"dimension",level:3},{value:"Part List",id:"part-list",level:3},{value:"FAQ",id:"faq",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(78464).Z,width:"3990",height:"2898"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"WizArduino MEGA WIFI is composed of \ud83c\udf0e",(0,r.kt)("a",{parentName:"p",href:"http://www.arduino.org/products/boards/arduino-mega-2560"},"MEGA 2560 board")," and ",(0,r.kt)("a",{parentName:"p",href:"/Product/Wi-Fi-Module/WizFi310/"},"WizFi310"),", which makes it as simple as the Arduino UNO platform and applicable for IoT development."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(46506).Z,width:"2077",height:"567"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WizArduino Mega WIFI is an ideal board to start any IoT, Home Automation, Robot, drone, and DIY project")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"hardware-features"},"Hardware Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Microcontroller : ATmega2560"),(0,r.kt)("li",{parentName:"ul"},"Operating Voltage : 5V"),(0,r.kt)("li",{parentName:"ul"},"Digital I/O Pins : 20 (of which 12 provide PWM output)"),(0,r.kt)("li",{parentName:"ul"},"Analog Input Pins : 6"),(0,r.kt)("li",{parentName:"ul"},"DC Current per I/O Pin : 20 mA"),(0,r.kt)("li",{parentName:"ul"},"DC Current for 3.3V Pin : 50 mA"),(0,r.kt)("li",{parentName:"ul"},"Flash Memory : 256 KB of which 8 KB used by bootloader"),(0,r.kt)("li",{parentName:"ul"},"SRAM : 8 KB"),(0,r.kt)("li",{parentName:"ul"},"EEPROM : 4 KB"),(0,r.kt)("li",{parentName:"ul"},"Clock Speed : 16 MHz"),(0,r.kt)("li",{parentName:"ul"},"PCB Size : 53 x 68.5mm")),(0,r.kt)("h3",{id:"wifi-features"},"WiFi Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single band 2.4GHz IEEE 802.11b/g/n"),(0,r.kt)("li",{parentName:"ul"},"Serial Interface : UART"),(0,r.kt)("li",{parentName:"ul"},"UART Max Baud : 921600 bps"),(0,r.kt)("li",{parentName:"ul"},"Soft AP : Enough memory retention, Wi-Fi Security (WEP,\nWPA/WPA2PSK), L2 Switching"),(0,r.kt)("li",{parentName:"ul"},"OTA(Over The Air F/W Upgrading)"),(0,r.kt)("li",{parentName:"ul"},"For more details refer to ",(0,r.kt)("a",{parentName:"li",href:"/Product/Wi-Fi-Module/WizFi310/"},"WizFi310 page"),".")),(0,r.kt)("h3",{id:"pinout"},"Pinout"),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(75558).Z,width:"1135",height:"982"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"basic"},"Basic"),(0,r.kt)("p",null,"WizArduino MEGA WIFI is compatible with Arduino MEGA 2560 board. Install Arduino IDE and connect your board. Choose Arduino MEGA 2560 when prompted to Select board."),(0,r.kt)("p",null,"For more details refer to next page."),(0,r.kt)("p",null,"\ud83c\udf0e ",(0,r.kt)("a",{parentName:"p",href:"http://www.arduino.org/learning/tutorials/first-steps-with-arduino-ide"},"Arduino org")," "),(0,r.kt)("p",null,"\ud83c\udf0e ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/HomePage"},"Arduino cc"),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(70095).Z,width:"1063",height:"788"})),(0,r.kt)("h3",{id:"wifi"},"WiFi"),(0,r.kt)("h4",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"To use WiFi functions it is necessary to install jumper on 2x2 Pin Header as shown in image above."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"WiFi"),(0,r.kt)("th",{parentName:"tr",align:null},"MCU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RX"),(0,r.kt)("td",{parentName:"tr",align:null},"TX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TX"),(0,r.kt)("td",{parentName:"tr",align:null},"RX")))),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("p",null,"WizFi310 is connected to the main chip (ATmega 2560) by serial (Serial #3) inside of WizArduino MEGA WIFI. It is necessary to initialize it as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "WizFi310.h"\nvoid setup()\n{\n    Serial3.begin(115200);\n    WiFi.init(&Serial3);\n}\n')),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"#examples"},(0,r.kt)("strong",{parentName:"a"},"Examples/IoT"))," section for more information on WiFi usage."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"wifi-library"},"WiFi Library"),(0,r.kt)("p",null,"Users must use the library for WizFi310 to program WizArduino MEGA WIFI."),(0,r.kt)("p",null,"Refer to below guide for downloading and installing Arduino sketch from Github."),(0,r.kt)("h3",{id:"github"},"GitHub"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download \ud83c\udf0e",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WizFi310_arduino_library"},"WizFi310 Arduino Library"),"\n",(0,r.kt)("img",{src:i(39528).Z,width:"1462",height:"532"}),"\n",(0,r.kt)("img",{src:i(19761).Z,width:"1465",height:"531"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unzip downloaded file and copy to ",(0,r.kt)("strong",{parentName:"p"},"Documents/Arduino/Libraries")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There will be one more folder once archive is unzipped. Copy that folder"),(0,r.kt)("li",{parentName:"ul"},"\\WizFi310\\arduino\\library-master\\ ",(0,r.kt)("strong",{parentName:"li"},"WizFi310_arduino_library-master")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you can see WizFi310 examples as shown below, then library was installed properly."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:i(64509).Z,width:"1267",height:"985"})))),(0,r.kt)("h3",{id:"sketch"},"Sketch"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In menu Sketch -> Include library -> ",(0,r.kt)("strong",{parentName:"li"},"Manage libraries"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(30892).Z,width:"999",height:"1120"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Search for ",(0,r.kt)("strong",{parentName:"li"},"wizfi")," in pop-up window")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(74893).Z,width:"1228",height:"693"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Find and install WizFi310 library")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(56043).Z,width:"1228",height:"693"}),"\n",(0,r.kt)("img",{src:i(33564).Z,width:"1228",height:"693"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Wait for installation and check sample projects.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(76989).Z,width:"1228",height:"693"}),"\n",(0,r.kt)("img",{src:i(5445).Z,width:"1168",height:"1509"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"iot"},"IoT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"http://wiznetian.com/article/wizarduino-wifi-thingspeak-%EC%97%B0%EB%8F%99%ED%95%98%EA%B3%A0-%EC%84%BC%EC%84%9C-%EA%B0%92%EC%9D%84-%EB%B3%B4%EB%82%B4%EA%B8%B0/"},"Connect to ThingSpeak")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"http://wiznetian.com/article/wizarduino-wifi%EB%A1%9C-openweathermap-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90%EC%84%9C-%EB%82%A0%EC%94%A8%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0/"},"Connect to OpenWeatherMap")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"http://wiznetian.com/article/wizarduino-wifi-cloud%ec%97%90-%ec%84%bc%ec%84%9c-%ec%a0%95%eb%b3%b4-%ec%a0%80%ec%9e%a5%ed%95%98%ea%b8%b0-dweet-io/"},"Connect to Dweet.io")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"http://wiznetian.com/article/wizaruino-wifi-coap-%ed%86%b5%ec%8b%a0%ed%95%98%ea%b8%b0/"},"Connect to CoAP")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"http://wiznetian.com/article/wizarduino-wifi-ubidots-%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c-%ec%97%b0%eb%8f%99/"},"Connect to Ubidots")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"http://wiznetian.com/article/wizarduino-wifimqtt-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/"},"MQTT")),(0,r.kt)("li",{parentName:"ul"},"You can find more examples at\n\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WizFi310_arduino_library/tree/master/examples"},"WizFi310_arduino_library/examples"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"maker-projects"},"Maker Projects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Coming Soon")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"technical-reference"},"Technical Reference"),(0,r.kt)("h3",{id:"schematic--reference-design"},"Schematic & Reference Design"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_sch_170314.pdf",target:"_blank"},"schematic.pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_design_170314.zip",target:"_blank"},"reference design.zip"))),(0,r.kt)("h3",{id:"dimension"},"Dimension"),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(54306).Z,width:"2649",height:"1689"})),(0,r.kt)("h3",{id:"part-list"},"Part List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_ver1.0_pl_170320.pdf",target:"_blank"},"Part List"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What are the differences between WizFi310 and other WiFi modules?"),"WizFi310 description",(0,r.kt)("p",null,"There are many Embedded WiFi modules these days, and the technology has been leveled to some extent (except for some low-cost WiFi modules), so there is no special difference in specifications or features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Control using AT Command through UART interface."),(0,r.kt)("li",{parentName:"ul"},"802.11 bgn support."),(0,r.kt)("li",{parentName:"ul"},"Support for WEP, WPA/WPA2, TKIP/AES."),(0,r.kt)("li",{parentName:"ul"},"Support for Soft AP mode."),(0,r.kt)("li",{parentName:"ul"},"It can be set up/controlled using a smartphone."),(0,r.kt)("li",{parentName:"ul"},"TCP/UDP, SSL, MQTT/MQTTS, and multi-socket support."),(0,r.kt)("li",{parentName:"ul"},"WizFi 310 also supports all of the above specifications.")),(0,r.kt)("p",null,"However, it is a product developed directly by Wiznet, so we can say that its advantage is that WizFi310 can be easily connected to IoT platforms of domestic telecommunication companies such as SKT Thingplug and KT IoT Makers."),(0,r.kt)("p",null,"The Wiznet Academy provides training sessions for using WizFi310 with SKT Thingplug, which has a built-in ThingPlug connection, and KT IoTMakers is registered as the official Compatible Product (for the first time as a WiFi module)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://wiznetacademy.com/index.php?module=lecture&act=dispLectureView&lecture_seq=2253&schedule_seq=3"},"Training")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://iotmakers.kt.com/openp/index.html#/home"},"GIGA IoTMakers"))),(0,r.kt)("p",null,"It would be a particularly good choice for customers who want to connect to SKT or KT's IoT platforms through Wi-Fi.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is WiFi range?"),"As a result of internal testing, WizFi310 signal can range up to 160m outdoors. (However, in this case, there could be a difference in performance depending on the antenna of the router used.)"),(0,r.kt)("hr",null))}p.isMDXComponent=!0},78464:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/1st_1894_1-1985fe8a2ec0582facc027e775a4397c.png"},64509:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/github3-a256e8eb20aca6837e64c9224c3b9f7e.png"},39528:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/github_1-1039467650e251d1efd9c11d53168688.png"},19761:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/github_2-f90c1ec9367e5d43ed1421c2444e6a4c.png"},46506:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/mega2560_wizfi310_1-59cb50f873745189bd8b8f8e108dee60.png"},54306:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizarduino_mega_wifi_o_ver1.0_dimension_170315-328affe9bf77e6e4734bb24486f92bb8.png"},70095:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizarduino_mega_wifi_o_ver1.0_jumper_cap_170320-ac0b46cf390024e7666f83edefb56ec3.png"},75558:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizarduino_mega_wifi_o_ver1.0_pinout_170316-379fc6fafebe50197b7e9459455d463e.png"},30892:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizfi310_library_manager1-a8adf54fdfc4a20a28b5e9c1609d7ece.png"},74893:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizfi310_library_manager3-26486bdb013c5915fe14fdbbaa56dc88.png"},56043:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizfi310_library_manager4-2b3a652b8b3dc0554ec606aeb8d477c6.png"},33564:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizfi310_library_manager5-af0b7d41984958d86e9b571e21030b9b.png"},76989:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizfi310_library_manager6-8fd93cf0d03bac9ea5165637e7591165.png"},5445:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/wizfi310_library_manager7-df4e9fca51ea5a37b984e91963687283.png"}}]);