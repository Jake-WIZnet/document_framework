"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5570],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(n),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65536:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={id:"aws-connection-guide",title:"AWS Connection Guide",date:new Date("2021-05-21T00:00:00.000Z")},s=void 0,c={unversionedId:"Product/S2E-Module/WIZ510SSL/aws-connection-guide",id:"Product/S2E-Module/WIZ510SSL/aws-connection-guide",title:"AWS Connection Guide",description:"Getting Started",source:"@site/docs/Product/S2E-Module/WIZ510SSL/AWS-Connection-Guide-EN.md",sourceDirName:"Product/S2E-Module/WIZ510SSL",slug:"/Product/S2E-Module/WIZ510SSL/aws-connection-guide",permalink:"/Product/S2E-Module/WIZ510SSL/aws-connection-guide",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ510SSL/AWS-Connection-Guide-EN.md",tags:[],version:"current",frontMatter:{id:"aws-connection-guide",title:"AWS Connection Guide",date:"2021-05-21T00:00:00.000Z"}},p={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Requirement",id:"hardware-requirement",level:3},{value:"Software Requirement",id:"software-requirement",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Device preparation",id:"device-preparation",level:2},{value:"Device connection",id:"device-connection",level:3},{value:"Configuration Description",id:"configuration-description",level:2},{value:"1. Configuration using AT commands",id:"1-configuration-using-at-commands",level:3},{value:"2. Configuration using Config Tool",id:"2-configuration-using-config-tool",level:3},{value:"Results",id:"results",level:2}],m={toc:d};function u(t){var e=t.components,l=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"hardware-requirement"},"Hardware Requirement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Desktop or laptop computer"),(0,r.kt)("li",{parentName:"ul"},"MicroUSB cable"),(0,r.kt)("li",{parentName:"ul"},"LAN cable"),(0,r.kt)("li",{parentName:"ul"},"WIZ510SSL"),(0,r.kt)("li",{parentName:"ul"},"WIZ510SSL-EVB")),(0,r.kt)("h3",{id:"software-requirement"},"Software Requirement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, YAT, etc.)"),(0,r.kt)("li",{parentName:"ul"},"AWS Console account")),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null," AWS IoT Core preparation before start"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ko/console/"},(0,r.kt)("strong",{parentName:"a"},"Sign to console"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-resources.html#create-aws-thing"},(0,r.kt)("strong",{parentName:"a"},"Create a thing"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-resources.html#create-iot-policy"},(0,r.kt)("strong",{parentName:"a"},"Create a policy")))),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," Save certificates and key during creation.\n",(0,r.kt)("img",{src:n(53321).Z,width:"982",height:"674"}),"\nAWS root CA can be downloaded from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/iot/latest/developerguide/server-authentication.html#server-authentication-certs"},(0,r.kt)("strong",{parentName:"a"},"here")))))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"AWS IoT provides secure, bi-directional communication between Internet-connected devices such as sensors, actuators, embedded micro-controllers, or smart appliances and the AWS Cloud.\nIt is possible to connect to AWS via ",(0,r.kt)("strong",{parentName:"p"},"WIZ510SSL")," and send data using MQTTS."),(0,r.kt)("p",null,"In this document we will provide guide how to connect to AWS services.\nProcess consists of following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creation of AWS account"),(0,r.kt)("li",{parentName:"ul"},"Creation & configuration of Thing in IoT Core"),(0,r.kt)("li",{parentName:"ul"},"Connection & Message transfer")),(0,r.kt)("p",null,"For this guide we used evaluation board ",(0,r.kt)("strong",{parentName:"p"},"WIZ510SSL-EVB")),(0,r.kt)("h2",{id:"device-preparation"},"Device preparation"),(0,r.kt)("h3",{id:"device-connection"},"Device connection"),(0,r.kt)("p",null,"Please check COM port number in Device Manager."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(71105).Z,width:"549",height:"280"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If COM port cannot be found in Device Manager, please install drivers below."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},"Silicon Labs CP210x USB to UART Driver"))))),(0,r.kt)("h2",{id:"configuration-description"},"Configuration Description"),(0,r.kt)("p",null,"There are two ways how to configure WIZ510SSL: using ConfigTool and using AT Commands."),(0,r.kt)("h3",{id:"1-configuration-using-at-commands"},"1. Configuration using AT commands"),(0,r.kt)("p",null,"Please refer to ","[Command Manual]"," to find information about all AT Commands.\nBelow we will describe commands created for AWS connection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set network configuration to DHCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IM1"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set operation mode to MQTTS client"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OP6"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set remote host"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RH","<","parameter",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use AWS endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set remote port to 8883"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RP8883"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set packing time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PT500"),(0,r.kt)("td",{parentName:"tr",align:"left"},"500 is given as example")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set Client ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"QC","<","parameter",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use Thing name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set Public Topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PU","<","parameter",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$aws/things/","<","Thing Name",">","/shadow/update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set Subscribe Topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"U0","<","parameter",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"$aws/things/","<","Thing Name",">","/shadow/update/accepted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set MQTT Keep Alive time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"QK60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"60 is given as example")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Set Root CA option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RC2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2 - required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable Client Certificate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CE1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 - enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Save Root CA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OC"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Save Client certificate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"LC"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Save Private Key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PK"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Save settings"),(0,r.kt)("td",{parentName:"tr",align:"left"},"SV"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Reboot device"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RT"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("p",null,"Please note that WIZ510SSL supports multiple command setup.\nIt is possible to make above settings as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'IM1\\r\\nOP6\\r\\nPT500\\r\\nQC"Thing Name"\\r\\nRH"End Point".amazonaws.com\\r\\nRP8883\\r\\nPU$aws/things/"Thing Name"/shadow/update\\r\\nU0$aws/things/"Thing Name"/shadow/update/accepted\\r\\nQK60\\r\\nRC2\\r\\nCE1\\r\\n\n')),(0,r.kt)("p",null,"To save Root CA, Client Certificate or Private Key we used YAT file transfer function."),(0,r.kt)("p",null,"First, add appropriate command name in the beginning of the file."),(0,r.kt)("p",null,"Refer to below example:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92460).Z,width:"1075",height:"679"})),(0,r.kt)("p",null,"Use following EOL settings:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37739).Z,width:"462",height:"561"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Each certificate shall be sent separately.")),(0,r.kt)("p",null,"It is necessary to save settings and reboot device."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"SV\\r\\nRT\\r\\n\n")),(0,r.kt)("h3",{id:"2-configuration-using-config-tool"},"2. Configuration using Config Tool"),(0,r.kt)("p",null,"Please refer to ","[Config Tool Manual]"," to find detail information about Config Tool.\nBelow we will show configuration required for AWS connection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")),(0,r.kt)("p",null,"Setup DHCP select following:\n",(0,r.kt)("img",{src:n(94287).Z,width:"1082",height:"386"})),(0,r.kt)("p",null,"Make settings in MQTT Options tab:\n",(0,r.kt)("img",{src:n(79321).Z,width:"1349",height:"1077"})),(0,r.kt)("p",null,"Make settings in Certificate Manager tab:\n",(0,r.kt)("img",{src:n(13049).Z,width:"1068",height:"366"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")),(0,r.kt)("p",null,"To load certificates/keys follow below steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click "Load File" button. File explorer window will appear.\n',(0,r.kt)("img",{src:n(2895).Z,width:"1078",height:"856"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Select file and click "Open"'),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Select original file, not the file with added AT command!")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click "Save to device" button. If succesful, "Upload Complete" pop-up window will appear.\n',(0,r.kt)("img",{src:n(41346).Z,width:"697",height:"252"})))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'When saving certificate or key, "Save to device" button shall be pressed for each one.\n"Apply settings" button will NOT save certificates/keys to device.'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")),(0,r.kt)("p",null,'Press "Apply settings" button to save settings made in Step 1.\nReboot device.'),(0,r.kt)("h2",{id:"results"},"Results"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send test message using Terminal")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(80631).Z,width:"1044",height:"485"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Since we subscribed to "updated" topic, when MQTT message is sent we can see reply message instantly.\nAlso it is possible to check in AWS IoT -> Manage -> Things -> Shadow or Activity')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(98835).Z,width:"981",height:"368"}),"\n",(0,r.kt)("img",{src:n(82338).Z,width:"979",height:"464"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations")),(0,r.kt)("p",null,"WIZ510SSL is successfully connected to AWS!"))}u.isMDXComponent=!0},71105:function(t,e,n){e.Z=n.p+"assets/images/DeviceManager-28ccc82fad0f0a9d4f23c2ae4ffcc40c.JPG"},82338:function(t,e,n){e.Z=n.p+"assets/images/activity_check-7eefc176338b05d3b13170f5a19ccfc5.png"},94287:function(t,e,n){e.Z=n.p+"assets/images/basic_settings-904aea5977cf4d9c48d88848221db8fe.png"},2895:function(t,e,n){e.Z=n.p+"assets/images/certificate_load-88179bde84f02e35edec25602621eb8f.png"},13049:function(t,e,n){e.Z=n.p+"assets/images/certificate_manager_settings-f8b8610d3fa9213dbd7dd485b40cbd37.png"},41346:function(t,e,n){e.Z=n.p+"assets/images/certificate_saved-d8863969a228fd74cf3ad4d47bd4af60.png"},92460:function(t,e,n){e.Z=n.p+"assets/images/certificate_with_command-92a8585412ed1d0a7cf122833d4f5702.png"},79321:function(t,e,n){e.Z=n.p+"assets/images/mqtt_options_settings-c2f7b1222b0f5d58ce7cdcecfac93721.png"},80631:function(t,e,n){e.Z=n.p+"assets/images/pub_message-d63d25d4fbd47879ad135f8e757c5673.png"},53321:function(t,e,n){e.Z=n.p+"assets/images/sdk-attach-policy-5621d3efed4252fc5547ba21ca4803d1.png"},98835:function(t,e,n){e.Z=n.p+"assets/images/shadow_state_check-d44a83b9dbb096eee16b54c231e1a760.png"},37739:function(t,e,n){e.Z=n.p+"assets/images/yat_settings-9b7cea99ecd40bb57dbbeeb0751ffd36.png"}}]);