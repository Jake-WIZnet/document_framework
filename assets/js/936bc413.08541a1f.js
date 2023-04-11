"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[4481],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=d(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37996:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={id:"wizfi250_quickstart",title:"Quickstart Guide",date:new Date("2021-06-21T00:00:00.000Z")},l=void 0,o={unversionedId:"Product/Wi-Fi-Module/WizFi250/wizfi250_quickstart",id:"Product/Wi-Fi-Module/WizFi250/wizfi250_quickstart",title:"Quickstart Guide",description:"WizFi250 Evaluation Board",source:"@site/docs/Product/Wi-Fi-Module/WizFi250/Quickstart_guide.md",sourceDirName:"Product/Wi-Fi-Module/WizFi250",slug:"/Product/Wi-Fi-Module/WizFi250/wizfi250_quickstart",permalink:"/Product/Wi-Fi-Module/WizFi250/wizfi250_quickstart",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Quickstart_guide.md",tags:[],version:"current",frontMatter:{id:"wizfi250_quickstart",title:"Quickstart Guide",date:"2021-06-21T00:00:00.000Z"},sidebar:"docs",previous:{title:"Programmer's guide",permalink:"/Product/Wi-Fi-Module/WizFi250/wizfi250_programmersguide"},next:{title:"WizFi250 vs. WizFi210/220 comparison",permalink:"/Product/Wi-Fi-Module/WizFi250/comparison"}},s={},d=[{value:"WizFi250 Evaluation Board",id:"wizfi250-evaluation-board",level:2},{value:"Feature Identification",id:"feature-identification",level:3},{value:"Button Description",id:"button-description",level:4},{value:"LED Description",id:"led-description",level:4},{value:"Pin Description",id:"pin-description",level:4},{value:"Interface Description",id:"interface-description",level:3},{value:"Interface Board PIN Map",id:"interface-board-pin-map",level:3},{value:"Interface Board Dimension",id:"interface-board-dimension",level:3},{value:"Stsart Serial to Wi-Fi",id:"stsart-serial-to-wi-fi",level:2},{value:"Using Function Button &amp; Web Server Interface",id:"using-function-button--web-server-interface",level:3},{value:"Using Serial Command",id:"using-serial-command",level:3},{value:"Exchanging data with a peer system",id:"exchanging-data-with-a-peer-system",level:3}],u={toc:d},p="wrapper";function c(t){let{components:e,...r}=t;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wizfi250-evaluation-board"},"WizFi250 Evaluation Board"),(0,i.kt)("p",null,"The WizFi250 EVB is the evaluation board for testing WizFi250 and prototyping development. WizFi250 EVB is composed of a WizFi250 evaluation board and a WizFi250 module."),(0,i.kt)("h3",{id:"feature-identification"},"Feature Identification"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41662).Z,width:"975",height:"754"})," "),(0,i.kt)("h4",{id:"button-description"},"Button Description"),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"WizFi250 Reset")),(0,i.kt)("th",{parentName:"tr",align:null},"Through this button, user can restart WizFi250 module."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Function")),(0,i.kt)("td",{parentName:"tr",align:null},"Through the function button, user can enter specific mode without AT Command.",(0,i.kt)("br",null),"\u2666 Factory Recovery : When doing Boot or Reset, press the button over 3.5 seconds",(0,i.kt)("br",null),"\u2666 AP Mode : When module is working, press it once.",(0,i.kt)("br",null),"\u2666 OTA Mode : When module is working, press it twice.",(0,i.kt)("br",null),"\u2666 Factory Default : When module is working, press it three times.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Arduino Board Reset")),(0,i.kt)("td",{parentName:"tr",align:null},"With this button, user can restart Arduino board")))),(0,i.kt)("h4",{id:"led-description"},"LED Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UART RX/TX"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicate UART RX/TX Status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Power LED"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicate Power On/Off of WizFi250")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mode LED"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicate Data/Command Mode ",(0,i.kt)("br",null),"\u2666 LOW(ON) : Data Mode ",(0,i.kt)("br",null),"\u2666 HIGH(OFF) : Command Mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wi-Fi LED"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicate Wi-Fi Association ",(0,i.kt)("br",null),"\u2666 LOW(ON) : Wi-Fi is associated ",(0,i.kt)("br",null),"\u2666 HIGH(OFF) : Wi-Fi is not associated")))),(0,i.kt)("h4",{id:"pin-description"},"Pin Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BOOT"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter boot mode ",(0,i.kt)("br",null),"\u2666 SHORT : Start in boot mode ",(0,i.kt)("br",null),"\u2666 OPEN : Start in application mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5V Power"),(0,i.kt)("td",{parentName:"tr",align:null},"Alternative choice for 5V power supply")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GPIO Pin"),(0,i.kt)("td",{parentName:"tr",align:null},"Through this pin, user can use GPIO signal")))),(0,i.kt)("h3",{id:"interface-description"},"Interface Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UART1 Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"Alternative choice for Serial interface.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPI Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"Through these pins, user can control SPI interface.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"USB Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"This provides power supply & Serial interface Default serial information:",(0,i.kt)("br",null),"\u2666 Baud rate : 115200",(0,i.kt)("br",null),"\u2666 Data rate : 8",(0,i.kt)("br",null),"\u2666 Stop bits : 1",(0,i.kt)("br",null),"\u2666 Parity : None",(0,i.kt)("br",null),"\u2666 Flow control : None")))),(0,i.kt)("h3",{id:"interface-board-pin-map"},"Interface Board PIN Map"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49325).Z,width:"1177",height:"775"})," "),(0,i.kt)("h3",{id:"interface-board-dimension"},"Interface Board Dimension"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(32974).Z,width:"1697",height:"1199"})," "),(0,i.kt)("h2",{id:"stsart-serial-to-wi-fi"},"Stsart Serial to Wi-Fi"),(0,i.kt)("p",null,"This chapter explains how to set WizFi250 in order to exchange data with\npeer system. This picture shows the environment for using Serial to\nWi-Fi as example. In this example, WizFi250 is set to the TCP server and\npeer system is set to the TCP client. And then data is exchanged between\nWizFi250 and the peer system."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(98162).Z,width:"788",height:"434"})),(0,i.kt)("h3",{id:"using-function-button--web-server-interface"},"Using Function Button & Web Server Interface"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This section explains how to set WizFi250 using web server in order to\nuse serial to Wi-Fi application. (If you Use the function button, you\ncan launch web server easily.)",(0,i.kt)("br",{parentName:"p"}),"\n","Procedure for setting serial to Wi-Fi is explained below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Press the \u201cFunction Button\u201d one time in order to run AP mode and\nlaunch the web server. If WizFi250 is changed to AP mode\nsuccessfully, Wi-Fi LED will be on and you can see WizFi250\u2019s SSID\nby your PC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Default information of WizFi250 AP Mode"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SSID"),(0,i.kt)("td",{parentName:"tr",align:null},"WizFi250","_","AP","_","0008DCXXXXXX")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Security"),(0,i.kt)("td",{parentName:"tr",align:null},"WPA2 Mixed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Security Key"),(0,i.kt)("td",{parentName:"tr",align:null},"123456789")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,i.kt)("td",{parentName:"tr",align:null},"192.168.12.1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Gateway Address"),(0,i.kt)("td",{parentName:"tr",align:null},"192.168.12.1")))),(0,i.kt)("p",null,"LED results of WIZFI250:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69925).Z,width:"623",height:"356"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect to WizFi250\u2019s SSID \u2026by inputting default password (123456789) and WizFi250\u2019s IP address or URL (wizfi250.wiznet.com) in your web browser. After that input the user id and user password. ( Default ID : admin, Default Password : admin )")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(397).Z,width:"994",height:"327"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you select \u201cS2W Setting & Scan Network\u201d menu, \u2026the web page will be shown as below.","\\"," If WizFi250 is set successfully, it shows the success message \u2026 as in the following picture on the right.","\\"," If you select <Next_Step> button, you can move to next page. ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"WizFi250 TCP/IP Settings guide"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Modes"),(0,i.kt)("td",{parentName:"tr",align:null},"AP or Station (connect to AP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,i.kt)("td",{parentName:"tr",align:null},"TCP/UDP (Server / Client)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Remote IP"),(0,i.kt)("td",{parentName:"tr",align:null},"Connecting device's IP address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Remote Port"),(0,i.kt)("td",{parentName:"tr",align:null},"Connecting device's Port")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Local Port"),(0,i.kt)("td",{parentName:"tr",align:null},"Module's Port")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(63127).Z,width:"635",height:"331"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:n(94265).Z,width:"633",height:"328"}))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select WizFi250's DHCP Mode. ","\\","   It includes ",(0,i.kt)("strong",{parentName:"li"},"DHCP")," or ",(0,i.kt)("strong",{parentName:"li"},"stactic IP")," setting.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(704).Z,width:"653",height:"371"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firstly, input the password of \u2026the AP you want to join and click \u201cJoin\u201c button to connect to that AP. ","\\"," ","\\"," After setting up, you will see ",(0,i.kt)("strong",{parentName:"li"},"\u201cDevice Started Web server and access point stopped. See UART for further information.\u201d")," message in web browser. It means that WizFi250 will try to connect to the selected AP.","\\"," ","\\"," Important note: If you input the wrong password of AP, you need to redo all procedures.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(54606).Z,width:"745",height:"613"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WizFi250 will be associated \u2026 to the AP you select\u2026 and you can use TCP server in WizFi250.","\\"," This picture is the serial message when WizFi250 has set successfully.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(16285).Z,width:"278",height:"139"})),(0,i.kt)("h3",{id:"using-serial-command"},"Using Serial Command"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This section explains how to connect to AP by using serial command.",(0,i.kt)("br",{parentName:"p"}),"\n","The module start by default in command mode. If the user inputs the AT\ncommands below, WizFi250 will be connected to AP by DHCP and run as TCP\nserver.",(0,i.kt)("br",{parentName:"p"}),"\n","In this example, the settings of AP will be created as below:",(0,i.kt)("br",{parentName:"p"}),"\n","( SSID : WizFiDemoAP, Security : WPA2, Key : 12345678 )"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AT                     (Sent AT command with 0x0d (Hex of Enter button))\n[OK]                          (response meaning successful execution)\n\nAT+WSET=0,WizFiDemoAP     (AT command for setting WiFi association)\n[OK]\n\nAT+WSEC=0,,12345678       (AT command for setting WiFi security)\n[OK]\n\nAT+WNET=1 (AT command for setting DHCP)\n[OK]\n\nAT+WJOIN                      (AT command executing AP association)\nJoining : WizFiDemoAP\nSuccessfully joined : WizFiDemoAP\n\n[Link-Up Event]\n IP Addr    : 192.168.3.104\n Gateway   : 192.168.3.1\n[OK]\n\nAT+SCON=SO,TSN, , ,5000,1      (AT command for setting TCP Server)\n[OK]\n\n[CONNECT 0]       (When TCP connection is done, it shows this message)\n")),(0,i.kt)("p",null,"Now, the green mode LED is on, and data can be exchanged from Serial I/F\nto connected client and back. This mode is called data mode.",(0,i.kt)("br",{parentName:"p"}),"\n","To exit this data mode or to enter into command mode again you need to\nsend a single ",(0,i.kt)("strong",{parentName:"p"},"'+++'")," string without CR or LF (0x0D, 0x0A) - just the\nthree 0x2B = '+' characters."),(0,i.kt)("h3",{id:"exchanging-data-with-a-peer-system"},"Exchanging data with a peer system"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This section explains how to exchange data between WizFi250 and Peer\nSystem.",(0,i.kt)("br",{parentName:"p"}),"\n","This example describes the structure of data flow.\n",(0,i.kt)("img",{src:n(9289).Z,width:"541",height:"508"})),(0,i.kt)("p",null,"After TCP connection is done and if WizFi250 receives serial data, the\nserial data will be sent to peer system immediately and Wizfi250 can\nreceive data from peer system.\n",(0,i.kt)("img",{src:n(36314).Z,width:"882",height:"548"})))}c.isMDXComponent=!0},49325:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250_interface_board_bottom_pin_map-b5bed1e3202ee9e5b9b9dd60fc38a19e.png"},32974:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250_interface_board_dimension-8141fe108277c2a56baaec0121110ef8.png"},69925:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250_leds-bd8d7cd662d2197cfcf7feb87321aa05.png"},41662:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-1-fd0707537676db330fbe2e7ea2e479f7.png"},98162:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-2-291a6dfa098f8fce78d0f9e1cacfe9c0.png"},397:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-3-e25521a2f9933033f588c864e5dd3cc7.png"},63127:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-4-8a88cf2853ec967e69e9f561d5167191.png"},704:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-5-1-b33c7458d5cd9da0a153139c5791a444.png"},94265:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-5-7b3b6f861b0312179523f0b9edb3c08c.png"},54606:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-6-b3e53895a9f83cc23adea760a343bc1b.png"},16285:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},9289:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-8-0de4db2e9ae5d3bc1777821a16676b8d.png"},36314:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/wizfi250qsg-9-65f0722685858a47af29760d8f7f67f7.png"}}]);