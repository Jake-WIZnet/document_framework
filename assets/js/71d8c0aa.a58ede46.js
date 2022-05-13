"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[4904],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return r?i.createElement(m,o(o({ref:t},p),{},{components:r})):i.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19333:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var i=r(83117),n=r(80102),a=(r(67294),r(3905)),o=["components"],s={id:"firmware_upgrade_using_serial_interface",title:"Firmware Upgrade(Using Serial Interface)",date:new Date("2020-05-13T00:00:00.000Z")},l=void 0,u={unversionedId:"Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface",id:"Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface",title:"Firmware Upgrade(Using Serial Interface)",description:"WizFi310 can be upgraded using serial interface. These are methods how",source:"@site/docs/Product/Wi-Fi-Module/WizFi310/Programers-Guide/Firmware-Upgrade-Using-Serial-Interface.md",sourceDirName:"Product/Wi-Fi-Module/WizFi310/Programers-Guide",slug:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface",permalink:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi310/Programers-Guide/Firmware-Upgrade-Using-Serial-Interface.md",tags:[],version:"current",frontMatter:{id:"firmware_upgrade_using_serial_interface",title:"Firmware Upgrade(Using Serial Interface)",date:"2020-05-13T00:00:00.000Z"},sidebar:"docs",previous:{title:"AT Commands",permalink:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/at_commands"},next:{title:"Firmware Upgrade(Using OTA)",permalink:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_ota"}},p={},c=[{value:"Using Firmware Upgrade Tool",id:"using-firmware-upgrade-tool",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Using TeraTerm",id:"using-teraterm",level:2},{value:"Step 1",id:"step-1-1",level:4},{value:"Step 2",id:"step-2-1",level:4},{value:"Step 3",id:"step-3-1",level:4},{value:"Step 4",id:"step-4",level:4}],d={toc:c};function f(e){var t=e.components,s=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"WizFi310 can be upgraded using serial interface. These are methods how\nto upload firmware using serial interface."),(0,a.kt)("h2",{id:"using-firmware-upgrade-tool"},"Using Firmware Upgrade Tool"),(0,a.kt)("p",null,"WIZnet supports ","<","WizFi310_Update_Tool",">"," for uploading firmware. This\ntool used XMODEM protocol with WizFi310 and it can be downloaded at\n",(0,a.kt)("a",{parentName:"p",href:"/Product/Wi-Fi-Module/WizFi310/wizfi310_firmware_using_serial"},"WizFi310 Firmware(Using Serial)"),"."),(0,a.kt)("h3",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,'Execute "WizFi310_Update_Tool.exe" and select serial port and baud\nrate. For your information, WizFi310 is set to 115200 for default\nbaudrate.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(99694).Z,width:"481",height:"383"})),(0,a.kt)("h3",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"If you push ","<","browse",">"," button, you can select binary file."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(66941).Z,width:"481",height:"383"})),(0,a.kt)("h3",{id:"step-3"},"Step 3"),(0,a.kt)("p",null,"If you select ","<","Upload",">"," button, This tool will try to upload firmware\nto WizFi310 as below."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1993).Z,width:"481",height:"383"})),(0,a.kt)("p",null,"If it is done successfully, you can see message as below."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(14351).Z,width:"310",height:"134"})),(0,a.kt)("p",null,"If this tool is displayed error message as below, you have to check your\nbinary whether it is right."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(88065).Z,width:"176",height:"130"})),(0,a.kt)("h2",{id:"using-teraterm"},"Using TeraTerm"),(0,a.kt)("p",null,"TeraTerm is terminal emulator. This software is open source software\nunder BSD License. For more detailed information, Refer to it. \ud83c\udf0e(",(0,a.kt)("a",{parentName:"p",href:"https://ttssh2.osdn.jp/"},"https://ttssh2.osdn.jp/"),") You can download TeraTerm at this URL. \ud83c\udf0e(",(0,a.kt)("a",{parentName:"p",href:"https://en.osdn.jp/projects/ttssh2/releases/"},"https://en.osdn.jp/projects/ttssh2/releases/"),")"),(0,a.kt)("p",null,"In order to set for upgrading firmware, You can use\n",(0,a.kt)("a",{parentName:"p",href:"/"},"AT+MUPGRADE"),"\ncommand."),(0,a.kt)("h4",{id:"step-1-1"},"Step 1"),(0,a.kt)("p",null,"After enter\n",(0,a.kt)("a",{parentName:"p",href:"/"},"AT+MUPGRADE"),"\nin TeraTerm after WizFi310 restart. It will display 'C' message as\nbelow."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(34666).Z,width:"601",height:"173"})),(0,a.kt)("h4",{id:"step-2-1"},"Step 2"),(0,a.kt)("p",null,"Select ","[File]","-","[Transfer]","-","[XMODEM]","-","[Send]","\n",(0,a.kt)("img",{src:r(22568).Z,width:"546",height:"453"})),(0,a.kt)("h4",{id:"step-3-1"},"Step 3"),(0,a.kt)("p",null,"Select binary file. ( In this case, you have to use CRC option. )"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(37743).Z,width:"532",height:"333"})),(0,a.kt)("h4",{id:"step-4"},"Step 4"),(0,a.kt)("p",null,"After select binary, Teraterm will send binary via XMODEM and If it is\ndone successfully, WizFi310 will restart and display firmware version as\nbelow."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(50298).Z,width:"300",height:"228"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(71568).Z,width:"600",height:"213"})))}f.isMDXComponent=!0},34666:function(e,t,r){t.Z=r.p+"assets/images/teraterm_1-d22dbd1a38f02e94446393f6a161a955.png"},22568:function(e,t,r){t.Z=r.p+"assets/images/teraterm_2-4a9ee0b4f7e7e11890c302b161ba6751.png"},37743:function(e,t,r){t.Z=r.p+"assets/images/teraterm_3-9074c28ad79533ff3ab06433be0e0f0f.png"},50298:function(e,t,r){t.Z=r.p+"assets/images/teraterm_4-9c1ac1d16c6727b230167c74c3d428a0.png"},71568:function(e,t,r){t.Z=r.p+"assets/images/teraterm_5-ef190a99ff36867bf7ca846ec32c7b08.png"},99694:function(e,t,r){t.Z=r.p+"assets/images/upgrade_tool_1-fcd94e7e4ed1fae931af963d5eb98caa.png"},66941:function(e,t,r){t.Z=r.p+"assets/images/upgrade_tool_2-cc809ced97c1bd55d0fa06372bd48800.png"},1993:function(e,t,r){t.Z=r.p+"assets/images/upgrade_tool_3-cb9833eec1e40e91803faa9cf2833432.png"},14351:function(e,t,r){t.Z=r.p+"assets/images/upgrade_tool_4-1fc7b8a940e6c48709b791d28ac88580.png"},88065:function(e,t,r){t.Z=r.p+"assets/images/upgrade_tool_5-18efacd7e11c60815b3fecdc1938afba.png"}}]);