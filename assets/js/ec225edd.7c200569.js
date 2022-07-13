"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=i(n),s=o,k=u["".concat(c,".").concat(s)]||u[s]||d[s]||a;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={id:"atcommand_tutorial-EN",title:"AT Command Tutorial-EN",date:new Date("2020-04-16T00:00:00.000Z")},l=void 0,p={unversionedId:"Product/S2E-Module/WIZ550SR/atcommand_tutorial-EN",id:"Product/S2E-Module/WIZ550SR/atcommand_tutorial-EN",title:"AT Command Tutorial-EN",description:"Example 1. Data communication in Static IP and TCP Server mode",source:"@site/docs/Product/S2E-Module/WIZ550SR/AT-command-Tutorial-EN.md",sourceDirName:"Product/S2E-Module/WIZ550SR",slug:"/Product/S2E-Module/WIZ550SR/atcommand_tutorial-EN",permalink:"/Product/S2E-Module/WIZ550SR/atcommand_tutorial-EN",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ550SR/AT-command-Tutorial-EN.md",tags:[],version:"current",frontMatter:{id:"atcommand_tutorial-EN",title:"AT Command Tutorial-EN",date:"2020-04-16T00:00:00.000Z"},sidebar:"docs",previous:{title:"User's Manual (Programmer's Guide)-[KO]",permalink:"/Product/S2E-Module/WIZ550SR/users_manual_programmers_guide-KO"},next:{title:"AT Command Tutorial [KO]",permalink:"/Product/S2E-Module/WIZ550SR/atcommand_tutorial-KO"}},c={},i=[{value:"Example 1. Data communication in Static IP and TCP Server mode",id:"example-1-data-communication-in-static-ip-and-tcp-server-mode",level:2},{value:"Example 2. Retrieving web page of www.google.com in Dynamic IP and TCP Client mode",id:"example-2-retrieving-web-page-of-wwwgooglecom-in-dynamic-ip-and-tcp-client-mode",level:2},{value:"Example 3. Data communication with more than two servers in Dynamic IP",id:"example-3-data-communication-with-more-than-two-servers-in-dynamic-ip",level:2},{value:"Example 4. Data communication with more than two devices in Static IP",id:"example-4-data-communication-with-more-than-two-devices-in-static-ip",level:2}],m={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"example-1-data-communication-in-static-ip-and-tcp-server-mode"},"Example 1. Data communication in Static IP and TCP Server mode"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Set WIZ550SR with Static IP"),"  "),(0,o.kt)("p",null,"Set Network IP(192.168.3.101), Subnet Mask(255.255.255.0) and\nGateway(192.168.3.1) of WIZ550SR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSET=S,192.168.3.101,255.255.255.0,192.168.3.1\\r\\n\n<RX> [S]\\r\\n\n")),(0,o.kt)("p",null,"If you check with AT+NSTAT command after above command, you can get\nresponse like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSTAT\\r\\n\n<RX> [S,,S,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Set operating mode of WIZ550SR with TCP Server mode whose port\nnumber is 5000"),"  "),(0,o.kt)("p",null,"Create a socket in WIZ550SR with local port number 5000"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NOPEN=S,5000\\r\\n\n<RX> [S]\\r\\n\n")),(0,o.kt)("p",null,"You can check the current status of the socket which you made with\nAT+NSOCK. Below is an example of it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSOCK=0\\r\\n\n<RX> [S,,S,5000]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. a TCP Client connects to WIZ550SR"),"  "),(0,o.kt)("p",null,"When A TCP Client of PC(or any Device) PC connected to WIZ550SR , you\nwill get a message from WIZ550SR like below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<RX> [V,0,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Send data to TCP Client"),"  "),(0,o.kt)("p",null,'If you send 5 bytes data "Hello" to TCP Client with AT+NSEND like below,\nyou will get two step response, Wait Response and Success Response.',(0,o.kt)("br",{parentName:"p"}),"\n","[","W, 0","]"," means that WIZ550SR recognized and is processing the command\nbut it is not completed yet. And '0' means socket ID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSEND=0,5\\r\\nHello\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'5. Receive data "Hi" from TCP Client'),"  "),(0,o.kt)("p",null,'If TCP Client sends 2 bytes data "Hi", then you will get response from\nWIZ550SR like below'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<RX> [R,0,2]\\r\\nHi\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Disconnect current TCP connection"),"  "),(0,o.kt)("p",null,"Do send command like below to disconnect current connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,"After above command, if you check the status of socket with AT+NSOCK\ncommand then you will get response like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSOCK=0\\r\\n\n<RX> [S,,I]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Appendix"),(0,o.kt)("br",{parentName:"p"}),"\n","Changing mode from Data mode to Coomand mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> +++\n<RX> \\r\\n\\r\\n\\r\\n[W,0]\\r\\n[S,0]\\r\\n (20 Byte)\n")),(0,o.kt)("p",null,"\\<Changing mode from Command mode to Data mode",">"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+MDATA\\r\\n\n<RX> [S]\\r\\n (5 Byte)\n")),(0,o.kt)("h2",{id:"example-2-retrieving-web-page-of-wwwgooglecom-in-dynamic-ip-and-tcp-client-mode"},"Example 2. Retrieving web page of ",(0,o.kt)("a",{parentName:"h2",href:"http://www.google.com"},"www.google.com")," in Dynamic IP and TCP Client mode"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Set WIZ550SR with Dynamic IP"),"  "),(0,o.kt)("p",null,"Set WIZ550SR with Dynamic IP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSET=D\\r\\n\n<RX> [S]\\r\\n\n")),(0,o.kt)("p",null,"If you check with AT+NSTAT command after above command, you can get\nresponse like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSTAT\\r\\n\n<RX> [S,,D,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Get IP address of ",(0,o.kt)("a",{parentName:"strong",href:"http://www.google.com"},"www.google.com")),"  "),(0,o.kt)("p",null,"Obtain IP address of ",(0,o.kt)("a",{parentName:"p",href:"http://www.google.com"},"www.google.com")," by DNS function like below command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+FDNS=www.google.com\\r\\n\n<RX> [S,,173.194.126.168]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Connect to google web server"),"  "),(0,o.kt)("p",null,"Make TCP Client socket to connect to google.com.",(0,o.kt)("br",{parentName:"p"}),"\n","AT+NOPEN needs Server's IP address not Domain name, so you should put IP\naddress which you got by above command AT","_","FDNS",(0,o.kt)("br",{parentName:"p"}),"\n","You can see that local port number was not written.",(0,o.kt)("br",{parentName:"p"}),"\n","If you don't write local port number, local port number will be\nallocated dynamically by WIZ550SR."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NOPEN=C,,173.194.126.168,80\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,"You can check the current status of the socket which you made with\nAT+NSOCK. Below is an example of it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSOCK=0\\r\\n\n<RX> [S,,C,2014,173.194.126.168,80]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Send data to google web server"),"  "),(0,o.kt)("p",null,"Let WIZ550SR send 18 bytes data to google.com with below command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSEND=0,18\\r\\nGET / HTTP/1.1\\r\\n\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. receive data from google.com"),"  "),(0,o.kt)("p",null,"If WIZ550SR receives data from google.com, you can know its data size\nand data like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<RX> [R,0,523]\\r\\nHTTP/1.1 302 Found\\r\\nCache-Control: private\\r\\nContent-Type: text/html; charset=UTF-8\\r\\n..............\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Disconnect current TCP connection"),"  "),(0,o.kt)("p",null,"Do send command like below to disconnect current connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("h2",{id:"example-3-data-communication-with-more-than-two-servers-in-dynamic-ip"},"Example 3. Data communication with more than two servers in Dynamic IP"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Set WIZ550SR with Dynamic IP"),"  "),(0,o.kt)("p",null,"Set WIZ550SR with Dynamic IP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSET=D\\r\\n\n<RX> [S]\\r\\n\n")),(0,o.kt)("p",null,"If you check with AT+NSTAT command after above command, you can get\nresponse like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSTAT\\r\\n\n<RX> [S,,D,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Connect to the first TCP Server"),"  "),(0,o.kt)("p",null,"If the first TCP Server's IP address is 192.168.3.201, its port number\nis 5000 and local port number is 2010, then You can send a command like\nbelow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NOPEN=C,2010,192.168.3.201,5000\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,"You can check the current status of the socket which you made with\nAT+NSOCK. Below is an example of it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSOCK=0\\r\\n\n<RX> [S,,C,2010,192.168.3.201,5000]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Send data to the first TCP Server"),"  "),(0,o.kt)("p",null,"Send 10 bytes data to the first TCP Server like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSEND=0,10\\r\\n1111111111\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Disconnect the connection with the first TCP Server"),"  "),(0,o.kt)("p",null,"Do below command in order to disconnect current connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Connect to the second TCP Server"),"  "),(0,o.kt)("p",null,"If the second TCP Server's IP address is 192.168.3.202, its port number\nis 5000 and local port number is 2011, then You can send a command like\nbelow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NOPEN=C,2011,192.168.3.202,5000\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Send data to the second TCP Server"),"  "),(0,o.kt)("p",null,"Send 10 bytes data to the second TCP Server like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSEND=0,10\\r\\n2222222222\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7. Disconnect the connection with the second TCP Server"),"  "),(0,o.kt)("p",null,"Do below command in order to disconnect current connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8. Connect to the third TCP Server"),"  "),(0,o.kt)("p",null,"If the third TCP Server's IP address is 192.168.3.203, its port number\nis 5000 and local port number is 2012, then You can send a command like\nbelow."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NOPEN=C,2012,192.168.3.203,5000\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"9. Send data to the third TCP Server"),"  "),(0,o.kt)("p",null,"Send 10 bytes data to the third TCP Server like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSEND=0,10\\r\\n3333333333\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"10. Disconnect the connection with the third TCP Server"),"  "),(0,o.kt)("p",null,"Do below command in order to disconnect current connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("h2",{id:"example-4-data-communication-with-more-than-two-devices-in-static-ip"},"Example 4. Data communication with more than two devices in Static IP"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Set WIZ550SR with Static IP"),"  "),(0,o.kt)("p",null,"Set Network IP(192.168.3.101), Subnet Mask(255.255.255.0) and\nGateway(192.168.3.1) in WIZ550SR."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSET=S,192.168.3.101,255.255.255.0,192.168.3.1\\r\\n\n<RX> [S]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Open a UDP socket"),(0,o.kt)("br",{parentName:"p"}),"\n","Open a UDP socket with its local port 5000."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NOPEN=U,5000\\r\\n\n<RX> [S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Get data from the first UDP device"),"  "),(0,o.kt)("p",null,'If the first UDP device, which its IP address is 192.168.3.201 and port\nnumber is 4001, sent "AAAAAAAAAA"',(0,o.kt)("br",{parentName:"p"}),"\n","then WIZ550SR notify to you like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<RX> [R,0,10,192.168.3.201,4001]\\r\\nAAAAAAAAAA\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Send data to the first UDP device"),"  "),(0,o.kt)("p",null,'Send 10 bytes data "aaaaaaaaaa" to the first UDP device.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSEND=0,10,192.168.3.201,4001\\r\\naaaaaaaaaa\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Get data from the second UDP device"),"  "),(0,o.kt)("p",null,'If the second UDP device, which its IP address is 192.168.3.202 and port\nnumber is 4002, sent "BBBBBBBBBB"',(0,o.kt)("br",{parentName:"p"}),"\n","then WIZ550SR notify to you like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<RX> [R,0,10,192.168.3.202,4002]\\r\\nBBBBBBBBBB\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6. Send data to the second UDP device"),"  "),(0,o.kt)("p",null,'Send 10 bytes data "bbbbbbbbbb" to the second UDP device.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSEND=0,10,192.168.3.202,4002\\r\\nbbbbbbbbbb\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7. Get data from the third UDP device"),"  "),(0,o.kt)("p",null,'If the third UDP device, which its IP address is 192.168.3.203 and port\nnumber is 4003, sent "CCCCCCCCCC"',(0,o.kt)("br",{parentName:"p"}),"\n","then WIZ550SR notify to you like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<RX> [R,0,10,192.168.3.203,4003]\\r\\nCCCCCCCCCC\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8. Send data to the third UDP device"),"  "),(0,o.kt)("p",null,'Send 10 bytes data "cccccccccc" to the second UDP device.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NSEND=0,10,192.168.3.203,4003\\r\\ncccccccccc\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"9. Close UDP socket"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")))}d.isMDXComponent=!0}}]);