"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[9224],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40054:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={id:"ssl-connection-guide",title:"SSL Connection Guide",date:new Date("2022-06-02T00:00:00.000Z")},s=void 0,p={unversionedId:"Product/S2E-Module/WIZ5xxSR-RP-Series/ssl-connection-guide",id:"Product/S2E-Module/WIZ5xxSR-RP-Series/ssl-connection-guide",title:"SSL Connection Guide",description:"-----",source:"@site/docs/Product/S2E-Module/WIZ5xxSR-RP-Series/ssl-connection-guide-en.md",sourceDirName:"Product/S2E-Module/WIZ5xxSR-RP-Series",slug:"/Product/S2E-Module/WIZ5xxSR-RP-Series/ssl-connection-guide",permalink:"/Product/S2E-Module/WIZ5xxSR-RP-Series/ssl-connection-guide",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ5xxSR-RP-Series/ssl-connection-guide-en.md",tags:[],version:"current",frontMatter:{id:"ssl-connection-guide",title:"SSL Connection Guide",date:"2022-06-02T00:00:00.000Z"},sidebar:"docs",previous:{title:"MQTT Connection Guide",permalink:"/Product/S2E-Module/WIZ5xxSR-RP-Series/mqtt-connection-guide"},next:{title:"Overview",permalink:"/Product/S2E-Module/WIZ5xxSR-RP-Series/WIZ500SR-RP/overview"}},u={},c=[{value:"WIZ5xxSR-RP SSL Connection Overview",id:"wiz5xxsr-rp-ssl-connection-overview",level:2},{value:"Required Hardware and Software",id:"required-hardware-and-software",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"How to Connect to SSL Server through OpenSSL",id:"how-to-connect-to-ssl-server-through-openssl",level:2},{value:"Step 1: Setup Environment to Use WIZ5xxSR-RP",id:"step-1-setup-environment-to-use-wiz5xxsr-rp",level:3},{value:"Step 2: Setup OpenSSL",id:"step-2-setup-openssl",level:3},{value:"Step 3: Run SSL Server through OpenSSL",id:"step-3-run-ssl-server-through-openssl",level:3},{value:"Step 4: Setup WIZ5xxSR-RP through WIZnet S2E Configuration Tool for SSL Server Connection",id:"step-4-setup-wiz5xxsr-rp-through-wiznet-s2e-configuration-tool-for-ssl-server-connection",level:3},{value:"Step 5: Done",id:"step-5-done",level:3},{value:"Appendix",id:"appendix",level:2},{value:"What If I Need Certificates to Connect to SSL Server?",id:"what-if-i-need-certificates-to-connect-to-ssl-server",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"wiz5xxsr-rp-ssl-connection-overview"},"WIZ5xxSR-RP SSL Connection Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WIZ5xxSR-RP")," supports ",(0,o.kt)("strong",{parentName:"p"},"SSL TCP client")," mode."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-hardware-and-software"},"Required Hardware and Software"),(0,o.kt)("h3",{id:"hardware"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WIZ5xxSR-RP",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./WIZ500SR-RP/overview_en.md"},"WIZ500SR-RP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./WIZ505SR-RP/overview_en.md"},"WIZ505SR-RP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./WIZ510SR-RP/overview_en.md"},"WIZ510SR-RP")))),(0,o.kt)("li",{parentName:"ul"},"WIZ5xxSR-RP Evaluation Board (WIZ510SR-RP can be used without WIZ5xxSR-RP Evaluation Board.)"),(0,o.kt)("li",{parentName:"ul"},"5V Power adapter"),(0,o.kt)("li",{parentName:"ul"},"Cables (Ethernet / Serial)")),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WIZnet S2E Configuration Tool",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases/tag/V1.4.2"},"Download the Latest Version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI/releases"},"Download the Older Versions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/WIZnet-S2E-Tool-GUI"},"GitHub Repository")))),(0,o.kt)("li",{parentName:"ul"},"OpenSSL:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://slproweb.com/products/Win32OpenSSL.html"},"Download Link"))))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"how-to-connect-to-ssl-server-through-openssl"},"How to Connect to SSL Server through OpenSSL"),(0,o.kt)("h3",{id:"step-1-setup-environment-to-use-wiz5xxsr-rp"},"Step 1: Setup Environment to Use WIZ5xxSR-RP"),(0,o.kt)("p",null,"The process of setup environment to use the WIZ5xxSR-RP each product is available at the ",(0,o.kt)("strong",{parentName:"p"},"'Getting Started'")," document below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./WIZ500SR-RP/getting-started_en.md"},"Getting Started: WIZ500SR-RP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./WIZ505SR-RP/getting-started_en.md"},"Getting Started: WIZ505SR-RP")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./WIZ510SR-RP/getting-started_en.md"},"Getting Started: WIZ510SR-RP"))),(0,o.kt)("h3",{id:"step-2-setup-openssl"},"Step 2: Setup OpenSSL"),(0,o.kt)("p",null,"Setup OpenSSL to use as the SSL Server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"genrsa -des3 -out [key_name].key 2048\nreq -new -key [key_name].key -out [csr_name].csr\nx509 -req -days [days] -in [csr_name].csr -signkey [key_name].key -out [crt_name].crt\n\nEx>\ngenrsa -des3 -out server.key 2048\nreq -new -key server.key -out server.csr\nx509 -req -days 365 -in server.csr -signkey server.key -out server.crt\n")),(0,o.kt)("h3",{id:"step-3-run-ssl-server-through-openssl"},"Step 3: Run SSL Server through OpenSSL"),(0,o.kt)("p",null,"If you have setup the OpenSSL to use as the SSL server, run the SSL server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"s_server -accept [port] -cert [crt_name].crt -key [key_name].key\n\nEx>\ns_server -accept 443 -cert server.crt -key server.key\n")),(0,o.kt)("h3",{id:"step-4-setup-wiz5xxsr-rp-through-wiznet-s2e-configuration-tool-for-ssl-server-connection"},"Step 4: Setup WIZ5xxSR-RP through WIZnet S2E Configuration Tool for SSL Server Connection"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"SSL TCP client")," mode in the ",(0,o.kt)("strong",{parentName:"li"},"Operation mode")," setting section")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:r(22659).Z,width:"834",height:"722"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,o.kt)("strong",{parentName:"td"},"Select SSL TCP client mode"))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Setup the ",(0,o.kt)("strong",{parentName:"li"},"remote host IP (or URL)")," and ",(0,o.kt)("strong",{parentName:"li"},"remote port")," in the ",(0,o.kt)("strong",{parentName:"li"},"Remote host / port")," section")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:r(4113).Z,width:"834",height:"722"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,o.kt)("strong",{parentName:"td"},"Setup remote host IP and remote port"))))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Apply Settings")," button to save the settings")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:r(1650).Z,width:"834",height:"722"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,o.kt)("strong",{parentName:"td"},"Click Apply Settings button"))))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:r(69695).Z,width:"834",height:"722"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,o.kt)("strong",{parentName:"td"},"Saved settings"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": If you need certificates to connect to the SSL server, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"#what-if-i-need-certificates-to-connect-to-ssl-server?"},(0,o.kt)("strong",{parentName:"a"},"'What If I Need Certificates to Connect to SSL Server'"))," section below.")),(0,o.kt)("h3",{id:"step-5-done"},"Step 5: Done"),(0,o.kt)("p",null,"WIZ5xxSR-RP is successfully connected to the SSL server!"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"appendix"},"Appendix"),(0,o.kt)("h3",{id:"what-if-i-need-certificates-to-connect-to-ssl-server"},"What If I Need Certificates to Connect to SSL Server?"),(0,o.kt)("p",null,"You can upload certificates below in the '",(0,o.kt)("strong",{parentName:"p"},"Certificate manager"),"' tab of the'WIZnet S2E Configuration Tool'."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Root CA"),(0,o.kt)("li",{parentName:"ul"},"Client Certificate"),(0,o.kt)("li",{parentName:"ul"},"Private key")),(0,o.kt)("p",null,"Upload and setup the certificates required by the SSL server you want to connect to."),(0,o.kt)("p",null,"After loading the certificate by clicking the '",(0,o.kt)("strong",{parentName:"p"},"Load file"),"' button, be sure to save it by clicking the '",(0,o.kt)("strong",{parentName:"p"},"Save to device"),"' button."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:r(23707).Z,width:"834",height:"722"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Figure: ",(0,o.kt)("strong",{parentName:"td"},"Upload certificates"))))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If there is any problem?"),(0,o.kt)("br",{parentName:"p"}),"\n","Please refer to our ",(0,o.kt)("strong",{parentName:"p"},"Troubleshooting Guide"),"!"),(0,o.kt)("hr",null))}m.isMDXComponent=!0},1650:function(e,t,r){t.Z=r.p+"assets/images/click_apply_settings_button-a1dbdfce0d44a58f6057c63d16d4f13f.png"},69695:function(e,t,r){t.Z=r.p+"assets/images/saved_settings-0952fa155f96a276ed2e32209f9405dc.png"},22659:function(e,t,r){t.Z=r.p+"assets/images/select_ssl_tcp_client_mode-365cd5b64617142dfe1b001dee60b78a.png"},4113:function(e,t,r){t.Z=r.p+"assets/images/setup_remote_host_ip_and_remote_port-dc047d8e262c1a968586bd515333b1a1.png"},23707:function(e,t,r){t.Z=r.p+"assets/images/upload_certificates-b6cad63498eb43278cc373a306221609.png"}}]);