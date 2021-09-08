(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[98419],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return h}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),c=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=a,u=p["".concat(d,".").concat(h)]||p[h]||l[h]||i;return t?o.createElement(u,r(r({ref:n},m),{},{components:t})):o.createElement(u,r({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},33240:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var o=t(22122),a=t(19756),i=(t(67294),t(3905)),r=["components"],s={id:"examples_data_communication",title:"Examples - Data Communication",date:new Date("2020-04-24T00:00:00.000Z")},d=void 0,c={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_data_communication",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_data_communication",isDocsHomePage:!1,title:"Examples - Data Communication",description:"Method of setting TCP Client and exchanging data in Data Mode",source:"@site/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/Examples_Data_Communication.md",sourceDirName:"Product/Wi-Fi-Module/WizFi250/Programers-Guide",slug:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_data_communication",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_data_communication",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/Examples_Data_Communication.md",tags:[],version:"current",frontMatter:{id:"examples_data_communication",title:"Examples - Data Communication",date:"2020-04-24T00:00:00.000Z"}},m=[{value:"Method of setting TCP Client and exchanging data in Data Mode",id:"method-of-setting-tcp-client-and-exchanging-data-in-data-mode",children:[]},{value:"Method of setting TCP Server and exchanging data in Data Mode",id:"method-of-setting-tcp-server-and-exchanging-data-in-data-mode",children:[]},{value:"Method of setting UDP Client and exchanging data in Data Mode",id:"method-of-setting-udp-client-and-exchanging-data-in-data-mode",children:[]},{value:"Method of setting UDP Server and exchanging data in Data Mode",id:"method-of-setting-udp-server-and-exchanging-data-in-data-mode",children:[]},{value:"Method of setting TCP Client and exchanging data in Command Mode",id:"method-of-setting-tcp-client-and-exchanging-data-in-command-mode",children:[]},{value:"Method of setting TCP Server and exchanging data in Command Mode",id:"method-of-setting-tcp-server-and-exchanging-data-in-command-mode",children:[]},{value:"Method of setting UDP Client and exchanging data in Command Mode",id:"method-of-setting-udp-client-and-exchanging-data-in-command-mode",children:[]},{value:"Method of setting UDP Server and exchanging data in Command Mode",id:"method-of-setting-udp-server-and-exchanging-data-in-command-mode",children:[]},{value:"AT+SCON",id:"atscon",children:[]},{value:"Example of SSL Connection",id:"example-of-ssl-connection",children:[]},{value:"Example of Multi Socket Connection",id:"example-of-multi-socket-connection",children:[]},{value:"Air Command mode - WizFi250AirCmd",id:"air-command-mode---wizfi250aircmd",children:[]}],l={toc:m};function p(e){var n=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"method-of-setting-tcp-client-and-exchanging-data-in-data-mode"},"Method of setting TCP Client and exchanging data in Data Mode"),(0,i.kt)("h4",{id:"socket-open"},"Socket Open"),(0,i.kt)("p",null,"This section explains how to open < TCP Client Socket> and communicate with peer system. Below is an example showing how to set TCP Client and change the mode to data mode. It also explains parameters of < AT+SCON> command."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(AT+SCON=< OpenType>,< SocketType>,< RemoteIP>,< RemotePort>,< LocalPort>,< DataMode>)")),(0,i.kt)("p",null,"If you enter < O> or < SO> value to < Open Type> parameter, WizFi250 will try to connect to TCP Server immediately."),(0,i.kt)("p",null,"But when using < S> value, WizFi250 will try to connect to TCP Server after reboot and you have to set SocketType,RemoteIP,RemotePort and LocalPort as below"),(0,i.kt)("p",null,"In order to set WizFi250 to data mode, you have to enter 1 value to < Data Mode> parameter of AT+SCON command. For detailed information to this command, refer to AT+SCON. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mode: Data Mode, TCP Client"),(0,i.kt)("li",{parentName:"ul"},"Remote IP : 192.168.12.102"),(0,i.kt)("li",{parentName:"ul"},"Remote Port : 5000"),(0,i.kt)("li",{parentName:"ul"},"Local Port : 5001")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AP Association                    ( Refers to Association & Disassociation Example )\n\nAT+SCON=O,TCN,192.168.12.102,5000,5001,1 ( AT command connecting with a TCP Client Socket )\n[OK]\n\n[CONNECT 0]                          < = At this point, a TCP connection is done \n")),(0,i.kt)("h4",{id:"exchanging-data-with-a-peer-system"},"Exchanging data with a peer system"),(0,i.kt)("p",null,"If WizFi250 successfully connects to a peer system, WizFi250 will print ","[CONNECT(CID)]"," message and enter data mode. In data mode, WizFi250 can send serial data to peer system and receive network data from peer system without other translation."),(0,i.kt)("h4",{id:"socket-close"},"Socket Close"),(0,i.kt)("p",null,"In order to close TCP connection, WizFi250 has to switch to AT Command Mode. ( When +++ message entered, WizFi250 can be changed to AT Command Mode. ) After being changed to AT Command Mode, TCP Connection can be closed by using < AT+SMGMT=CID> or < AT+SMGMT=ALL> command."),(0,i.kt)("h4",{id:"checking-socket-status"},"Checking Socket Status"),(0,i.kt)("p",null,"After being changed to AT Command Mode, TCP Connection can be closed by using < AT+SMGMT=CID> or < AT+SMGMT=ALL> command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AT+SMGMT=?\nNumber of Sockets : 1 (SCID/Socket/Mode/Remote/Local/DataMode)\n0/TCN/192.168.12.23:5000/5001/1\n[OK]\n")),(0,i.kt)("h2",{id:"method-of-setting-tcp-server-and-exchanging-data-in-data-mode"},"Method of setting TCP Server and exchanging data in Data Mode"),(0,i.kt)("h4",{id:"socket-open-1"},"Socket Open"),(0,i.kt)("p",null,"This section explains how to open < TCP Server Socket> and communicate with peer system. Below is the example for setting TCP Server and then changing to data mode. For detailed information about < AT+SCON> command, refer to AT+SCON and Socket Open."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   * Mode : Data Mode, TCP Server\n   * Local Port : 5000\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AP Association              ( Refer to Association & Disassociation Example )\n\nAT+SCON=O,TSN, , ,5000,1        ( AT command listening with a TCP Server Socket )\n[OK]\n\n[CONNECT 0]          < = When TCP connection is done, you can see this message\n")),(0,i.kt)("h4",{id:"exchanging-data-with-a-peer-system-1"},"Exchanging data with a peer system"),(0,i.kt)("p",null,"Exchanging data with its peer system is the same as previous ",(0,i.kt)("a",{parentName:"p",href:"/"},"Exchanging data with a peer system.")),(0,i.kt)("h4",{id:"socket-close-1"},"Socket Close"),(0,i.kt)("p",null,"Closing socket connection is the same as previous ",(0,i.kt)("a",{parentName:"p",href:"/"},"Socket Close"),"."),(0,i.kt)("h4",{id:"checking-socket-status-1"},"Checking Socket Status"),(0,i.kt)("p",null,"Checking socket status is the same as previous ",(0,i.kt)("a",{parentName:"p",href:"/"},"Checking Socket Status.")),(0,i.kt)("h2",{id:"method-of-setting-udp-client-and-exchanging-data-in-data-mode"},"Method of setting UDP Client and exchanging data in Data Mode"),(0,i.kt)("h4",{id:"socket-open-2"},"Socket Open"),(0,i.kt)("p",null,"This section explains how to open < UDP Client Socket> and communicate to peer system. Below is an example for setting up UDP Client and changing into data mode. For detailed information about < AT+SCON> command, refer to ",(0,i.kt)("a",{parentName:"p",href:"/"},"AT+SCON")," and ",(0,i.kt)("a",{parentName:"p",href:"/"},"Socket Open.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   * Mode : Data Mode, UDP Client\n   * Remote IP : 192.168.12.23\n   * Remote Port : 5001\n   * Local Port : 5000\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AP Association              ( Refer to Association & Disassociation Example )\n\nAT+SCON=O,UCN,192.168.12.23,5001,5000,1 \n[OK]\n\n[CONNECT 0]                          < = At this point, a UDP connection is done \n")),(0,i.kt)("h4",{id:"exchanging-data-with-a-peer-system-2"},"Exchanging data with a peer system"),(0,i.kt)("p",null,"Exchanging data with its peer system is the same as previous ",(0,i.kt)("a",{parentName:"p",href:"/"},"Exchanging data with a peer system.")),(0,i.kt)("h4",{id:"socket-close-2"},"Socket Close"),(0,i.kt)("p",null,"Closing socket connection is the same as previous ",(0,i.kt)("a",{parentName:"p",href:"/"},"Socket Close.")),(0,i.kt)("h4",{id:"checking-socket-status-2"},"Checking Socket Status"),(0,i.kt)("p",null,"Checking socket status is the same as previous ",(0,i.kt)("a",{parentName:"p",href:"/"},"Checking Socket Status.")),(0,i.kt)("h2",{id:"method-of-setting-udp-server-and-exchanging-data-in-data-mode"},"Method of setting UDP Server and exchanging data in Data Mode"),(0,i.kt)("h4",{id:"socket-open-3"},"Socket Open"),(0,i.kt)("p",null,"This section explains how to open <  UDP Server Socket> and communicate to peer system. Below is an example for setting up UDP Server and changing into data mode. For detailed information about <  AT+SCON> command, refer to ",(0,i.kt)("a",{parentName:"p",href:"/"},"AT+SCON")," and ",(0,i.kt)("a",{parentName:"p",href:"/"},"Socket Open"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   * Mode: Data Mode, UDP Server\n   * Local Port: 5000\n\n AP Association              ( Refer to Association & Disassociation Example )\n\nAT+SCON=O,USN, , ,5000,1\n[OK]\n\n[CONNECT 0]                          < = At this point, a UDP connection is done \n")),(0,i.kt)("h4",{id:"exchanging-data-with-a-peer-system-3"},"Exchanging data with a peer system"),(0,i.kt)("p",null,"< UDP Server Mode> can connect UDP connection without peer systes information like IP address and port number. But before peer system is connected to WizFi250, WizFi250 does not send data to peer system because WizFi250 does not know its information. Thus peer system must send data to WizFi250 in order to know peer system\u2019s information like below.\n",(0,i.kt)("img",{src:t(23745).Z}),"\nThe other information for exchanging data is same as ",(0,i.kt)("a",{parentName:"p",href:"/"},"Exchanging data with a peer system.")),(0,i.kt)("h4",{id:"socket-close-3"},"Socket Close"),(0,i.kt)("p",null,"Closing socket connection is the same as previous Socket Close."),(0,i.kt)("h4",{id:"checking-socket-status-3"},"Checking Socket Status"),(0,i.kt)("p",null,"Checking socket status is the same as previous Checking Socket Status."),(0,i.kt)("h2",{id:"method-of-setting-tcp-client-and-exchanging-data-in-command-mode"},"Method of setting TCP Client and exchanging data in Command Mode"),(0,i.kt)("h4",{id:"socket-open-4"},"Socket Open"),(0,i.kt)("p",null,"This section explains how to set <  TCP Client> in <  Command Mode> and communicate to peer system. Below is the example for setting TCP Client on the Command Mode . In order to enter in the Command Mode, you have to enter 0 value to <  Data Mode> parameter of <  AT+SCON> command. For detailed information to this command, refer to AT+SCON"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   * Mode : Command Mode, TCP Client\n   * Remote IP: 192.168.12.23\n   * Remote Port : 5000\n   * Local Port : 5001\n\nAP Association              ( Refer to Association & Disassociation Example )\n\nAT+SCON=O,TCN,192.168.12.23,5000,5001,0\n[OK]\n\n[CONNECT 0]                            < = At this point, a TCP connection is done \n")),(0,i.kt)("h4",{id:"exchanging-data-with-a-peer-system-4"},"Exchanging data with a peer system"),(0,i.kt)("p",null,"If WizFi250 connects to peer system successfully, WizFi250 will print ","[CONNECT(CID)]"," message. At this time, WizFi250 is in command mode. In order to send data to peer system, you have to use <  AT+SSEND=CID, Destination IP, Destination Port, Data Length> command. If you input serial command like <  Data Length> , WizFi250 will send serial data to peer system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AT+SSEND=0,,,5   ( Sending data to a Socket with CID 0 )\nHello             < = When serial data is 5byte, WizFi250 send this data to peer system\n[OK]\n\n{0,192.168.12.23,5000,11}Hi WizFi250  ( Receiving data from pear system )\n")),(0,i.kt)("h4",{id:"socket-close-4"},"Socket Close"),(0,i.kt)("p",null,"In < AT Command Mode>, TCP connection can be closed through < AT+SMGMT=CID> or < AT+SMGMT=ALL> command."),(0,i.kt)("h4",{id:"checking-socket-status-4"},"Checking Socket Status"),(0,i.kt)("p",null,"In < AT Command Mode>, Information of connected sockets are shown by using < AT+SMGMT=?> command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AT+SMGMT=?\nNumber of Sockets : 1 (SCID/Socket/Mode/Remote/Local/DataMode)\n0/TCN/192.168.12.23:5000/5001/0\n[OK]\n")),(0,i.kt)("h2",{id:"method-of-setting-tcp-server-and-exchanging-data-in-command-mode"},"Method of setting TCP Server and exchanging data in Command Mode"),(0,i.kt)("h4",{id:"socket-open-5"},"Socket Open"),(0,i.kt)("p",null,"This section explains how to set < TCP Server> in < Command Mode> and communicate to peer system. Below is the example for setting TCP Server on the Command Mode. For detailed information about < AT+SCON> command, refer to AT+SCON and Socket Open."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   * Mode : Command Mode, TCP Server\n   * Local Port : 5000\n\n\n  AP Association              ( Refer to Association & Disassociation Example )\n\n  AT+SCON=O,TSN, , ,5000,0        ( AT command listening with a TCP Server Socket )\n  [OK]\n\n  [CONNECT 0] \n")),(0,i.kt)("h4",{id:"exchanging-data-with-a-peer-system-5"},"Exchanging data with a peer system"),(0,i.kt)("p",null,"Exchanging data with its peer system is the same with previous Exchanging data with a peer system."),(0,i.kt)("h4",{id:"socket-close-5"},"Socket Close"),(0,i.kt)("p",null,"Closing socket connection is the same with previous Socket Close."),(0,i.kt)("h2",{id:"method-of-setting-udp-client-and-exchanging-data-in-command-mode"},"Method of setting UDP Client and exchanging data in Command Mode"),(0,i.kt)("h4",{id:"socket-open-6"},"Socket Open"),(0,i.kt)("p",null,"This section explains how to set < UDP Client> in < Command Mode> and communicate to peer system. Below is an example for setting UDP Client on Command Mode. For detailed information about < AT+SCON> command, refer to AT+SCON and Socket Open."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"     * Mode : Command Mode, UDP Client\n     * Remote IP : 192.168.12.23\n     * Remote Port : 5001\n     * Local Port : 5000\n\n\n  AP Association              ( Refer to Association & Disassociation Example )\n\n  AT+SCON=O,UCN,192.168.12.23,5001,5000,0 \n  [OK]\n\n  [CONNECT 0]                          < = At this point, a UDP connection is done \n")),(0,i.kt)("h4",{id:"exchanging-data-with-a-peer-system-6"},"Exchanging data with a peer system"),(0,i.kt)("p",null,"Exchanging data with its peer system is the same as previous Exchanging data with a peer system."),(0,i.kt)("h4",{id:"socket-close-6"},"Socket Close"),(0,i.kt)("p",null,"Closing socket connection is the same as previous Socket Close."),(0,i.kt)("h2",{id:"method-of-setting-udp-server-and-exchanging-data-in-command-mode"},"Method of setting UDP Server and exchanging data in Command Mode"),(0,i.kt)("h4",{id:"socket-open-7"},"Socket Open"),(0,i.kt)("p",null,"This section explains how to open < UDP Server Socket> in Command Mode and communicate to peer system. Below is an example for setting UDP Server on Command Mode. For detailed information about < AT+SCON> command, refer to AT+SCON and Socket Open."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   * Mode : Command Mode, UDP Server\n   * Local Port : 5000\n\n\n  AP Association              ( Refer to Association & Disassociation Example )\n\n  AT+SCON=O,USN, , ,5000,0 \n  [OK]\n\n  [CONNECT 0] \n")),(0,i.kt)("h4",{id:"exchanging-data-with-a-peer-system-7"},"Exchanging data with a peer system"),(0,i.kt)("p",null,"< UDP Server Mode> of WizFi250 can connect UDP connection without peer system information like IP address and port number. Before peer system is connected to WizFi250, WizFi250 does not send data to peer system. So you should be careful when using < UDP Server Mode>."),(0,i.kt)("p",null,"{0,192.168.12.23,5001,11}Hi WizFi250  ( Receiving data from peer system )"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  AT+SSEND=0,,,5                     ( Sending data to a Socket with CID 0 )\n  Hello           < = When serial data is 5byte, WizFi250 send this data to peer system\n  [OK ]\n")),(0,i.kt)("h2",{id:"atscon"},"AT+SCON"),(0,i.kt)("p",null,"AT+SCON=< OpenType>,< SocketType>,< RemoteIP>,< RemotePort>,< LocalPort>,< DataMode>"),(0,i.kt)("p",null,"This section explains the usage of < Open Type> parameter of < AT+SCON> command. This table describes values of < Open Type> parameter."),(0,i.kt)("p",null,"Parameter\tMeaning\nS\tRegister as a Service\nO\tOpen at Once\nSO\tOpen at Once & Register as a Service\n< S> : Register as a Service\nWhen using this parameter, WizFi250 will try to connect to peer system using TCP or UDP when power is on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  AT+WLEAVE\n  [OK]\n\n  AT+WSET=0,WizFiDemoAP\n  [OK]\n\n  AT+WSEC=0,WPA2,12345678\n  [OK]\n\n  AT+WNET=1\n  [OK]\n\n  AT+SCON=S,TSN,,,5000,0\n  [OK]\n\n  AT+MPROF=S\n  [OK]\n\n  AT+MRESET\n  [OK]\n  WizFi250 Version 0.9.0.0 (WIZnet Co.Ltd)\n  Joining : WizFiDemoAP\n  Successfully joined : WizFiDemoAP\n\n  [Link-Up Event]\n    IP Addr    : 192.168.12.10\n    Gateway    : 192.168.12.1\n\n  AT+SMGMT=?\n  Number of Sockets : 1 (SCID/Mode/Remote/Local/DataMode)\n  0/TSN/0.0.0.0:0/5000/0\n  [OK]\n")),(0,i.kt)("p",null,"< O> : Open at Once\nWhen using this parameter, WizFi250 will try to connect to peer system using TCP or UDP when enter the < AT+SCON> command. For using this parameter, WizFi250 should be already associated with AP or running AP mode. In this section, we have only explained steps in Station Mode. In AP Mode, you can use this command like in Station Mode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  AT+WLEAVE\n  [OK]\n\n  AT+WSET=0,WizFiDemoAP\n  [OK]\n\n  AT+WSEC=0,WPA2,12345678\n  [OK]\n\n  AT+WNET=1\n  [OK]\n\n  AT+WJOIN\n  Joining : WizFiDemoAP\n  Successfully joined : WizFiDemoAP\n\n  [Link-Up Event]\n    IP Addr    : 192.168.12.10\n    Gateway    : 192.168.12.1\n  [OK]\n\n  AT+SCON=O,TCN,192.168.12.23,5000,,0\n  [OK]\n")),(0,i.kt)("p",null,"[CONNECT 0]","\n< SO> Open at Once & Register as a Service\nWhen using this parameter, you can use functions of < S> and < O> at the same time. When using this parameter, WizFi250 will try to connect to peer system momentarily. And if you restart WizFi250, WizFi250 will try to connect to AP and peer system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  AT+WLEAVE\n  [OK]\n\n  AT+WSET=0,WizFiDemoAP\n  [OK]\n\n  AT+WSEC=0,WPA2,12345678\n  [OK]\n\n  AT+WNET=1\n  [OK]\n\n  AT+WJOIN\n  Joining : WizFiDemoAP\n  Successfully joined : WizFiDemoAP\n\n  [Link-Up Event]\n    IP Addr    : 192.168.12.10\n    Gateway    : 192.168.12.1\n  [OK]\n\n  AT+SCON=SO,TCN,192.168.12.23,5000,,0\n  [OK]\n  [CONNECT 0]\n\n  AT+MPROF=S\n  [OK]\n\n  AT+MRESET\n  [OK]\n\n  WizFi250 Version 0.9.0.0 (WIZnet Co.Ltd)\n  Joining : WizFiDemoAP\n  Successfully joined : WizFiDemoAP\n\n  [Link-Up Event]\n    IP Addr    : 192.168.12.10\n    Gateway    : 192.168.12.1\n\n  [CONNECT 0]\n")),(0,i.kt)("h2",{id:"example-of-ssl-connection"},"Example of SSL Connection"),(0,i.kt)("p",null,"This section explains how to connect to and communicate with SSL server. To connect to SSL server, use < TCS(TCP Client SSL)> / < TSS(TCP Server SSL)> parameter of < AT+SCON> command. ( When using UDP, WizFi250 cannot use SSL Connection. ) In order to use SSL connection, you can use AT command as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  AT+SCON=SO,TCS,199.59.148.212,443,5000,0\n  [OK]\n\n  [CONNECT 0]\n  AT+SSEND=0,,,18\n  GET / HTTP/1.1{0x0d}{0x0a}\n  {0x0d}{0x0a}\n  [OK]\n  \n")),(0,i.kt)("p",null,"{0,173.194.33.38,443,990}HTTP/1.1 302 Found\nLocation: ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.co.kr/"},"https://www.google.co.kr/"),'\nCache-Control: private\nContent-Type: text/html; charset=UTF-8\nSet-Cookie: PREF=ID=3e64d81fb97c7e6c:FF=0:TM=1371553236:LM=1371553236:S=H3NKySD63UwelF_z; expires=Thu, 18-Jun-2015 11:00:36 GMT; path=/; domain=.google.com\nSet-Cookie: NID=67=vtzYXz5msxRYzO-KzH5EKgcnABE4_YOcbUG1RGXufiQM2PNc84gyr8O12VNkOOap8MUCmGNQfnfsGMarSS9Jlkb7MiZdIQxrJg-FL1uKUqgSBA2CGIEqI5syrKnNW2YK; expires=Wed, 18-Dec-2013 11:00:36 GMT; path=/; domain=.google.com; HttpOnly\nP3P: CP="This is not a P3P policy! See ',(0,i.kt)("a",{parentName:"p",href:"http://www.google.com/support/accounts/bin/answer.py?hl=en&answer=151657"},"http://www.google.com/support/accounts/bin/answer.py?hl=en&answer=151657"),' for more info."\nDate: Tue, 18 Jun 2013 11:00:36 GMT\nServer: gws\nContent-Length: 222\nX-XSS-Protection: 1; mode=block\nX-Frame-Options: SAMEORIGIN'),(0,i.kt)("p",null,'< HTML>< HEAD>< meta http-equiv="content-type" content="text/html;charset=utf-8">< TITLE>302 Moved< /TITLE>< /HEAD>< BODY>< H1>302 Moved< /H1>The document has moved< A HREF="',(0,i.kt)("a",{parentName:"p",href:"https://www.google.co.kr/%22%3Ehere"},'https://www.google.co.kr/">here'),"< /A>.\n< /BODY>< /HTML>\n","[DISCONNECT 0]"),(0,i.kt)("h2",{id:"example-of-multi-socket-connection"},"Example of Multi Socket Connection"),(0,i.kt)("p",null,"This section explains how to use < Multi Socket Connection> function. WizFi250 can use max 8 TCP or UDP sockets. In order to use < Multi Socket Connection> function, you can use AT command as below. In this example, the peer system was running a loop back program. So if peer system received data from WizFi250, peer system will send received data to WizFi250."),(0,i.kt)("h4",{id:"ap-association"},"AP Association"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  AT+SCON=O,TCN,192.168.12.23,5000,5001,0\n  [OK]\n\n  [CONNECT 0]\n  AT+SCON=O,TSN,,,6000,0\n  [OK]\n\n  [CONNECT 1]\n  AT+SCON=O,UCN,192.168.12.23,7000,7000,0\n  [OK]\n\n  [CONNECT 2]\n  AT+SCON=O,USN,,,8000,0\n  [OK]\n\n  [CONNECT 3]\n  AT+SMGMT=?\n  Number of Sockets : 4 (SCID/Socket/Mode/Remote/Local/DataMode)\n  0/TCN/192.168.12.23:5000/5001/0\n  1/TSN/192.168.12.23:58769/6000/0\n  2/UCN/192.168.12.23:7000/7000/0\n  3/USN/0.0.0.0:/8000/0\n  [OK]\n\n  AT+SSEND=0,,,16\n  Hello_TCP_Client\n  [OK]\n\n  {0,192.168.12.23,5000,16}Hello_TCP_Client\n\n  AT+SSEND=1,,,16\n  Hello_TCP_Server\n  [OK]\n\n  {1,192.168.12.23,58769,16}Hello_TCP_Server\n\n  AT+SSEND=2,,,16\n  Hello_UDP_Client\n  [OK]\n\n  {2,192.168.12.23,7000,16}Hello_UDP_Client\n  {3,192.168.12.23,8000,16}Hello_UDP_Server\n  AT+SSEND=3,,,16\n  Hello_UDP_Server\n  [OK]\n")),(0,i.kt)("h2",{id:"air-command-mode---wizfi250aircmd"},"Air Command mode - WizFi250AirCmd"),(0,i.kt)("p",null,"This section explains how to operate Air-command-mode of WizFi250. With this Air-command-mode included in the WizFi250, you can issue AT commands to the module via WiFi, while the WizFi250 is in the TCP server or UDP server operation mode."),(0,i.kt)("p",null,"Please have a look at the following hints:"),(0,i.kt)("p",null,"Air-command-mode should only be used for configuration of WizFi250. It is not recommended to use the command mode for other purpopses.\nThe Air-command-mode will automatically be started, when the module WizFi250 will be booted into the AP mode. The module can then be configured on the port 50001 on its IP address.\nThe AT command consists of following parts: Command header (WizFi250AirCmd:), AT command (for example: AT) and Carriage Return (\\r)."),(0,i.kt)("p",null,"The command should be sent with these conditions:"),(0,i.kt)("p",null,"The command header \u201cWizFi250AirCmd:\u201d is case sensitive and has to be sent in this kind. It is 15 Bytes long.\nA < Carriage Return, 0x1d> has to follow the AT command directly.\nAir-command header, AT command and Carriage Return should be combined into one packet.\nExample usage of the WizFi250AirCmd:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  AT+WSET=1,WizFi250_AIRCMD\n  [OK]\n  AT+WSEC=1,WPA2,123456789\n  [OK]\n  AT+WNET=0,192.168.11.1,255.255.255.0,192.168.11.1\n  [OK]\n  AT+WJOIN\n\n  [Link-Up Event]\n    IP Addr    : 192.168.11.1\n    Gateway    : 192.168.11.1\n  [OK]\n\n  AT+MAIRCMD=O,T,50001,0\n  [OK]\n")),(0,i.kt)("p",null,"Now, TCP Client can connect to the WizFi250 and issue the AT commands via WiFi as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  (TCP Client TX) \n  WizFi250AirCmd:AT+MINFO\\r (24 Byte)\n  (RX) \n  FW version/HW version\n  1.0.1.8/WizFi250 Rev 1.0\n  [OK]\n\n  (TCP Client TX) \n  WizFi250AirCmd:AT+WSEC=?\\r (25 Byte)\n  (RX) \n  1,WPA2,123456789\n  [OK]\n\n  (TCP Client TX) \n  WizFi250AirCmd:AT+WSEC=1,WPA2,aaaabbbb\\r (39 Byte)\n  (RX) \n  [OK]\n\n  (TCP Client TX) \n  WizFi250AirCmd:AT+MMAC=?\\r (25 Byte)\n  (RX) \n  00:08:DC:00:55:76\n  [OK]\n")))}p.isMDXComponent=!0},23745:function(e,n,t){"use strict";n.Z=t.p+"assets/images/caution_when_using_udp_server_mode-aaaf9d08e5adfc9cee8f49cbd5db07a4.png"}}]);