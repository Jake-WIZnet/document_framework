"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5945],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,f=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},41223:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={id:"download",title:"Download",date:new Date("2020-04-16T00:00:00.000Z")},u=void 0,c={unversionedId:"Product/S2E-Module/WIZ550S2E/download",id:"Product/S2E-Module/WIZ550S2E/download",title:"Download",description:"Firmware",source:"@site/docs/Product/S2E-Module/WIZ550S2E/Download.md",sourceDirName:"Product/S2E-Module/WIZ550S2E",slug:"/Product/S2E-Module/WIZ550S2E/download",permalink:"/Product/S2E-Module/WIZ550S2E/download",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ550S2E/Download.md",tags:[],version:"current",frontMatter:{id:"download",title:"Download",date:"2020-04-16T00:00:00.000Z"},sidebar:"docs",previous:{title:"Tutorial (Kor)",permalink:"/Product/S2E-Module/WIZ550S2E/tutorial-kor"},next:{title:"WIZ100SR",permalink:"/Product/S2E-Module/WIZ100SR/"}},d={},p=[{value:"Firmware",id:"firmware",level:2},{value:"Binary",id:"binary",level:3},{value:"Archive",id:"archive",level:3},{value:"Firmware upload(TFTP) guide",id:"firmware-uploadtftp-guide",level:3},{value:"Source code",id:"source-code",level:3},{value:"Configuration Tool",id:"configuration-tool",level:2},{value:"ConfigTool",id:"configtool",level:3},{value:"Configuration Tool \uc2e4\ud589 \uac00\uc774\ub4dc",id:"configuration-tool-\uc2e4\ud589-\uac00\uc774\ub4dc",level:3},{value:"Source code",id:"source-code-1",level:3}],s={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"firmware"},"Firmware"),(0,a.kt)("h3",{id:"binary"},"Binary"),(0,a.kt)("p",null,"We will use the \ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZ550S2E/releases"},"release")," page of WIZ550S2E's in github."),(0,a.kt)("a",{href:"https://github.com/Wiznet/WIZ550S2E-Modbus/releases/download/v1.4.1/Binary_v141.zip",target:"_blank"},"Ver 1.4.1 - Modbus Ver"),"- Added features - Modbus - Source code - https://github.com/Wiznet/WIZ550S2E-Modbus - v1.31 Configuration Tool or later is required.",(0,a.kt)("a",{href:"https://github.com/Wiznet/WIZ550S2E/releases/download/v1.3.0/Binary_v130.zip",target:"_blank"},"Ver 1.3.0 - MQTT Ver"),"- Added features - MQTT - Source code - https://github.com/Wiznet/WIZ550S2E - AT+MQTTSET : (AT command) This command is used to initialize the necessary parameters of MQTT connection(set information automatically saved) - AT+MQTTCON : (AT command) Implement MQTT to connect the Broker - AT+MQTTPUB : (AT command) Publish the message to subscribed Client(set topic automatically saved) - AT+MQTTSUB : (AT command) Such topics will be pushed to the WIZ550S2E when received by the Broker(set topic automatically saved)",(0,a.kt)("h3",{id:"archive"},"Archive"),(0,a.kt)("p",null,"For more information about the changes for each version, please see\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZ550S2E/blob/master/README.md#RevisionHistory"},"Revision History"),(0,a.kt)("br",{parentName:"p"}),"\n","For all revision binary files including below, you can see at the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZ550S2E/releases"},"release")," page of\nwiz550s2e's in GitHub."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/wiz550s2e/binary_v1.0.3.zip",target:"_blank"},"Ver 1.0.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/wiz550s2e/binary_v1.0.2.zip",target:"_blank"},"Ver 1.0.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/wiz550s2e/binary_v1.0.1.zip",target:"_blank"},"Ver 1.0.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/wiz550s2e/wiz550s2e.zip",target:"_blank"},"Ver 1.0.0"))),(0,a.kt)("h3",{id:"firmware-uploadtftp-guide"},"Firmware upload(TFTP) guide"),(0,a.kt)("a",{href:"/img/products/wiz550s2e/wiz550s2e_fw_uploading_tftp.pdf",target:"_blank"},"Guide Document"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Notice"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"a working gateway is needed"),(0,a.kt)("li",{parentName:"ul"},"pc and module has to same subnet"),(0,a.kt)("li",{parentName:"ul"},"WIZ550S2E must be done Factory reset, After a firmware update. (Factory reset pin Active Low > 5sec)")))),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:r(85255).Z},"Guide Video")),(0,a.kt)("h3",{id:"source-code"},"Source code"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(44104).Z,width:"16",height:"16"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZ550S2E"},"https://github.com/Wiznet/WIZ550S2E")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration-tool"},"Configuration Tool"),(0,a.kt)("h3",{id:"configtool"},"ConfigTool"),(0,a.kt)("p",null,"We will not upload files in here.",(0,a.kt)("br",{parentName:"p"}),"\n","We will use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZnet_Configuration_Tool/releases"},"release"),"\npage of configuration's in github.  "),(0,a.kt)("p",null,"Please refer to below compatibility table and use appropriate version."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"FW Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Configuration Tool Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.0.3"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0.3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.3.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1.3.2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.4.0"),(0,a.kt)("td",{parentName:"tr",align:null},"1.4.0 or 1.3.2")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet_Configuration_Tool/releases/download/1.3.2/WIZnet_Configuration_Tool.jar"},"Ver 1.3.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet_Configuration_Tool/releases/download/v1.3.1/WIZnet_Configuration_Tool.jar"},"Ver 1.3.1"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/wiz550s2e/wiznet_configuration_tool_ver1.10.zip",target:"_blank"},"Ver 1.1.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/wiz550sr/wiz550sr_download/wiznet_configuration_tool_ver1.03.zip",target:"_blank"},"Ver 1.0.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/wiz550s2e/wiznet_configuration_tool_ver1.02.zip",target:"_blank"},"Ver 1.0.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/products/wiz550s2e/wiz550s2e_configuration_tool_ver1.00_0724.zip",target:"_blank"},"Ver 1.0.0"))),(0,a.kt)("h3",{id:"configuration-tool-\uc2e4\ud589-\uac00\uc774\ub4dc"},"Configuration Tool \uc2e4\ud589 \uac00\uc774\ub4dc"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(18896).Z,width:"16",height:"16"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZ550S2E"},"https://github.com/Wiznet/WIZ550S2E")),(0,a.kt)("h3",{id:"source-code-1"},"Source code"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(18896).Z,width:"16",height:"16"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZnet_Configuration_Tool"},"https://github.com/Wiznet/WIZnet_Configuration_Tool")))}m.isMDXComponent=!0},85255:function(e,t,r){t.Z=r.p+"assets/files/without_subtitle-8e1ec14b703dcc017cbd697d3e5d85c9.mp4"},18896:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVQ4T6WT7Q2CMBCGYQJxAnEC3UDcADdgA3UDnUDdgBHcQJlAmEBG0An0fUzPNA3+QJq8SXvcPffREkcDVzwwPjLAWaCZVEon6fEDnMi+lgqpkXIDvLyAVnuUBZCrzqmTfYoNQMZRz3ae8k8MQMZJTwAxUwAb6dAz2Ny3AOht8SegAmADpKfcAY3H1Fn+rRQ6H21mPmAlI9dJRUCXQVW+/ds2gFriDYRXGj4yqxR7Kt2lhgPl8DjGrlQysbKOCsw+1+Ym7QHQZyvtHCyI6zziSxuplQmR/i9SKVUdYSSi1UJiPgy89vvEASNKnbPP4e1TKYlI8lmD/8Y3/gQyn/wkO/QAAAAASUVORK5CYII="},44104:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+0lEQVQ4T6WT7Q2CMBCGYQJxAnEC3UDcADdgA3UDnUDdgBHcQJlAmEBG0An0fUzPNA3+QJq8SXvcPffREkcDVzwwPjLAWaCZVEon6fEDnMi+lgqpkXIDvLyAVnuUBZCrzqmTfYoNQMZRz3ae8k8MQMZJTwAxUwAb6dAz2Ny3AOht8SegAmADpKfcAY3H1Fn+rRQ6H21mPmAlI9dJRUCXQVW+/ds2gFriDYRXGj4yqxR7Kt2lhgPl8DjGrlQysbKOCsw+1+Ym7QHQZyvtHCyI6zziSxuplQmR/i9SKVUdYSSi1UJiPgy89vvEASNKnbPP4e1TKYlI8lmD/8Y3/gQyn/wkO/QAAAAASUVORK5CYII="}}]);