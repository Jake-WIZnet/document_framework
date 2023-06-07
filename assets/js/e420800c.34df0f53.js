"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[9543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"ssl-connection-guide",title:"SSL Connection Guide",date:new Date("2021-05-21T00:00:00.000Z")},l=void 0,i={unversionedId:"Product/S2E-Module/WIZ510SSL/ssl-connection-guide",id:"Product/S2E-Module/WIZ510SSL/ssl-connection-guide",title:"SSL Connection Guide",description:"Using the OpenSSL",source:"@site/docs/Product/S2E-Module/WIZ510SSL/SSL-Connection-Guide-EN.md",sourceDirName:"Product/S2E-Module/WIZ510SSL",slug:"/Product/S2E-Module/WIZ510SSL/ssl-connection-guide",permalink:"/Product/S2E-Module/WIZ510SSL/ssl-connection-guide",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ510SSL/SSL-Connection-Guide-EN.md",tags:[],version:"current",frontMatter:{id:"ssl-connection-guide",title:"SSL Connection Guide",date:"2021-05-21T00:00:00.000Z"}},s={},p=[{value:"Using the OpenSSL",id:"using-the-openssl",level:2},{value:"Required Hardware and Software",id:"required-hardware-and-software",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"How to Connect to SSL Server through OpenSSL",id:"how-to-connect-to-ssl-server-through-openssl",level:2},{value:"Step 1: Set up environment to use the WIZ510SSL",id:"step-1-set-up-environment-to-use-the-wiz510ssl",level:3},{value:"Step 2: Set up and run the SSL server through OpenSSL",id:"step-2-set-up-and-run-the-ssl-server-through-openssl",level:3},{value:"Step 3: Set up the WIZ510SSL through the WIZnet S2E Configuration Tool for SSL server connection",id:"step-3-set-up-the-wiz510ssl-through-the-wiznet-s2e-configuration-tool-for-ssl-server-connection",level:3},{value:"Step 4: Done",id:"step-4-done",level:3},{value:"Upload Certificates",id:"upload-certificates",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"using-the-openssl"},"Using the OpenSSL"),(0,a.kt)("p",null,"The '",(0,a.kt)("strong",{parentName:"p"},"Using the OpenSSL"),"' section provides a guide to ",(0,a.kt)("strong",{parentName:"p"},"connecting to the SSL server")," through ",(0,a.kt)("strong",{parentName:"p"},"OpenSSL")),(0,a.kt)("h2",{id:"required-hardware-and-software"},"Required Hardware and Software"),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WIZ510SSL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WIZ510SSL-RS232/TTL-EVB Evaluation Board")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cables (Ethernet / Serial / Micro USB Type B)"))),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WIZnet S2E Configuration Tool"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/v1.4.0"},"Download the latest version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases"},"Download the older versions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI"},"GitHub Repository")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OpenSSL:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://slproweb.com/products/Win32OpenSSL.html"},"Download the latest version"))))),(0,a.kt)("h2",{id:"how-to-connect-to-ssl-server-through-openssl"},"How to Connect to SSL Server through OpenSSL"),(0,a.kt)("h3",{id:"step-1-set-up-environment-to-use-the-wiz510ssl"},"Step 1: Set up environment to use the WIZ510SSL"),(0,a.kt)("p",null,"The process of set up environment to use the WIZ510SS is available at the ",(0,a.kt)("a",{parentName:"p",href:"/Product/S2E-Module/WIZ510SSL/getting-started"},"WIZ510SSL Getting Started")," page."),(0,a.kt)("h3",{id:"step-2-set-up-and-run-the-ssl-server-through-openssl"},"Step 2: Set up and run the SSL server through OpenSSL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up the SSL server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"genrsa -des3 -out [key_name].key 2048              // Create the private key\nreq -new -key [key_name].key -out [csr_name].csr   // Create the CSR(Required for certificate signing request)\nx509 -req -days [days] -in [csr_name].csr -signkey [key_name].key -out [crt_name].crt   // Create the certificate\n\nEx>\ngenrsa -des3 -out server.key 2048\nreq -new -key server.key -out server.csr\nx509 -req -days 365 -in server.csr -signkey server.key -out server.crt\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the SSL server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"s_server -accept [port] -cert [crt_name].crt -key [key_name].key   // Run SSL the server\n\nEx>\ns_server -accept 443 -cert server.crt -key server.key\n")),(0,a.kt)("h3",{id:"step-3-set-up-the-wiz510ssl-through-the-wiznet-s2e-configuration-tool-for-ssl-server-connection"},"Step 3: Set up the WIZ510SSL through the WIZnet S2E Configuration Tool for SSL server connection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"SSL TCP client")," mode in the ",(0,a.kt)("strong",{parentName:"li"},"Operation mode")," setting section")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(73263).Z,width:"960",height:"832"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Figure: ",(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"Select SSL TCP client mode")))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Input the ",(0,a.kt)("strong",{parentName:"li"},"remote host IP (or URL)")," and ",(0,a.kt)("strong",{parentName:"li"},"remote port")," in the ",(0,a.kt)("strong",{parentName:"li"},"Remote host / port")," section")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(62728).Z,width:"960",height:"832"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Figure: ",(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"Input the remote host IP and remote port")))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Apply Settings")," button to save the settings")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(87949).Z,width:"960",height:"832"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Figure: ",(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"Click the Apply Settings button")))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(4788).Z,width:"960",height:"832"}))))),(0,a.kt)("p",null,"| Figure: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Saved settings"))),(0,a.kt)("p",null,"\u203b ",(0,a.kt)("strong",{parentName:"p"},"Note"),": If you need certificates to connect to SSL server, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"#upload_certificates"},(0,a.kt)("strong",{parentName:"a"},"'Upload Certificates'"))," section below."),(0,a.kt)("h3",{id:"step-4-done"},"Step 4: Done"),(0,a.kt)("p",null,"WIZ510SSL is successfully connected to SSL server through OpenSSL!"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(88677).Z,width:"960",height:"832"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Figure: ",(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"Status")))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(50954).Z,width:"960",height:"401"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Figure: ",(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"Connect to the SSL server")))))),(0,a.kt)("h4",{id:"upload-certificates"},"Upload Certificates"),(0,a.kt)("p",null,"You can upload certificates below in the '",(0,a.kt)("strong",{parentName:"p"},"Certificate manager"),"' tab of the'WIZnet S2E Configuration Tool'."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Root CA"),(0,a.kt)("li",{parentName:"ul"},"Client Certificate"),(0,a.kt)("li",{parentName:"ul"},"Private key")),(0,a.kt)("p",null,"Upload and set up the certificates required by the SSL server you want to connect to."),(0,a.kt)("p",null,"After loading the certificate by clicking the '",(0,a.kt)("strong",{parentName:"p"},"Load file"),"' button, be sure to save it by clicking the '",(0,a.kt)("strong",{parentName:"p"},"Save to device"),"' button."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:n(78250).Z,width:"960",height:"832"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Figure: ",(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"Upload Certificates")))))))}c.isMDXComponent=!0},87949:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/click_the_apply_settings_button-73b21bee99da7b4861da1d433f5b9fc2.png"},50954:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connect_to_the_ssl_server-3be1bd2982ef80a5cada2a5541d1bf8b.png"},62728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/input_the_remote_host_ip_and_remote_port-790178b4401c7f78a5ba5a19c6390910.png"},4788:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/saved_settings-073e63f288ff9982aa790596fcc9a0a1.png"},73263:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select_ssl_tcp_client_mode-6cd11e6c513b4bfe9e8f99bdc4f7c323.png"},88677:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/status-5f9770ac2b79cf8e44189adad991e9d3.png"},78250:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/upload_certificates-b2a81755fc366ead3d213cfd2bfd773b.png"}}]);