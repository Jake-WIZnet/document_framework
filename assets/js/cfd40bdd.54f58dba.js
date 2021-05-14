(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[88425],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34892:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var o=n(74034),r=n(79973),a=(n(67294),n(3905)),i={id:"cookie",title:"Cookie",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/Open-Source-Hardware/cookie",id:"Product/Open-Source-Hardware/cookie",isDocsHomePage:!1,title:"Cookie",description:"Overview",source:"@site/docs/Product/Open-Source-Hardware/cookie.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/cookie",permalink:"/Product/Open-Source-Hardware/cookie",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/cookie.md",version:"current",frontMatter:{id:"cookie",title:"Cookie",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Twitter Test",permalink:"/Product/Open-Source-Hardware/twitter_test"},next:{title:"CooCox",permalink:"/Product/Open-Source-Hardware/open_source_hardware_coocox"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Cookie board",id:"cookie-board",children:[]},{value:"CooCox",id:"coocox",children:[{value:"Installation",id:"installation",children:[]},{value:"CooCox Open IDE",id:"coocox-open-ide",children:[]},{value:"Tool-chains setting in CoIDE",id:"tool-chains-setting-in-coide",children:[]},{value:"CoX-Peripheral Interface",id:"cox-peripheral-interface",children:[]}]},{value:"Tutorial",id:"tutorial",children:[{value:"Before Tutorial",id:"before-tutorial",children:[]},{value:"Tutorial Using CoIDE",id:"tutorial-using-coide",children:[]},{value:"Tutorial Using W5500",id:"tutorial-using-w5500",children:[]},{value:"Change code before compile",id:"change-code-before-compile",children:[]},{value:"Example",id:"example",children:[]}]},{value:"IP Configuration",id:"ip-configuration",children:[]},{value:"TCP Server Loopback",id:"tcp-server-loopback",children:[]},{value:"UDP Loopback",id:"udp-loopback",children:[]}],p={toc:c};function s(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Cookie is Open-Source Hardware platform and is provided\nfrom CooCox. Cookie is Hardware compatible Arduino Board and based on\nCortex M core instead of AVR. So, it can use with Arduino Shield as\n",(0,a.kt)("a",{parentName:"p",href:"ioshield_a"},"ioShield-A"),".\n",(0,a.kt)("a",{parentName:"p",href:"ioshield_a"},"ioShield-A")," allows\nCookie to connect to the Internet."),(0,a.kt)("p",null,"Cookie is developed on IDE as CoIDE provided from CooCox, and For\nreducing host dependency code provides with CoX peripheral interface\nlibrary."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"cookie-board"},"Cookie board"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Cookie is an open-source Arduino\u2122 form-factor compatible\nARM prototyping platform based on 32-bit ARM Cortex M0/3/4 MCUs plus\nhardware and software building blocks."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(35846).Z})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/Cookie.html"},"Learn more")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/Cookie/Cookie_Nuvoton.html"},"Cookie Numirco Edition")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"coocox"},"CooCox"),(0,a.kt)("p",null,"Visit to the Web site"),(0,a.kt)("p",null,"URL :\ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/Index.html"},"http://www.coocox.org/Index.html"),"]","(",(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/Index.html"},"http://www.coocox.org/Index.html"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"CoIDE just provides development environment without\ntool-chains. So you need to install tool-chains at first. We use ARM gcc\n4.7 for tool-chains."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ARM GCC 4.7 Features:")),(0,a.kt)("p",null,"-"," All GCC 4.7 features, plus latest mainline features - Additional code\nsize optimizations - Newlib-nano: newlib branch optimized for code size"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://launchpad.net/gcc-arm-embedded/+download"},"Download the latest\narm-gcc-embbed")),(0,a.kt)("h3",{id:"coocox-open-ide"},"CooCox Open IDE"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CooCox")," provides integration development environment\ncalled ",(0,a.kt)("strong",{parentName:"p"},"CoIDE")," for ARM Cortex M series microcontrollers. ",(0,a.kt)("strong",{parentName:"p"},"CoIDE"),"\nsupports ARM gcc based development environment of ",(0,a.kt)("strong",{parentName:"p"},"eclipse"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"System requirements:")),(0,a.kt)("p",null,"-"," Windows XP SP3 / Windows Vista / Windows 7"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("p",null,"-"," Free to use - Full functional IDE - Component-oriented development\nplatform - Internet-based, efficient integration of network resources -\nIntegrates CoOS - Peripheral registers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/CooCox_CoIDE.htm"},"CoIDE Download and learn\nmore")," "),(0,a.kt)("h3",{id:"tool-chains-setting-in-coide"},"Tool-chains setting in CoIDE"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before you use CoIDE to start your project, you need to\nconfig the GCC compiler at first."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/CoIDE/Compiler_Settings.html"},"Compiler Setting in\nCoIDE")),(0,a.kt)("h3",{id:"cox-peripheral-interface"},"CoX-Peripheral Interface"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cox-Peripheral interface")," is Common Wrapper Interface to\nport peripheral easily which is different in each vendors. If SPI is\ndesigned by Cox-Peripheral Interface starting as x(e.g. xGPIOModeSet),\nyou can operate by changing just SPI interface PIN setting in each MCUs\nor EVB-boards."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/COX.html"},"Learn more")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"before-tutorial"},"Before Tutorial"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27734).Z})),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download program file(CoIDE) and USB drive(ColinkEx) from ",(0,a.kt)("a",{parentName:"li",href:"http://www.coocox.org/CoCenter.html"},"http://www.coocox.org/CoCenter.htm"),".")),(0,a.kt)("h3",{id:"tutorial-using-coide"},"Tutorial Using CoIDE"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click the CoIDE icon"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(10050).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The welcome page is a convenient entry for \u201cBrowse in Repository\u201d,\n\u201cCreate a New Project\u201d, \u201cOpen a Project\u201d, refer to \u201cUser Guide\u201d and go\nto \u201cForum"'))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30585).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A wizard window will pop up, enter a name for the project (my project\nname: LoopbackTest)),You can also modify the Project Path.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62295).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choose a model. For example, select ''Chip Model', then click \u201cNext\u201d."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9767).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Select a chip. For example, select "M0516LBN"'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(13910).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Click "Finish". CoIDE automatically generates LoopbackTest.coproj\nfile and one configuration: "LoopbackTest".')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click the Repository Button "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(1491).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Check a component; for example, select 'GPIO",(0,a.kt)("inlineCode",{parentName:"p"},"SPI"),"UART",(0,a.kt)("inlineCode",{parentName:"p"},"CoX.cookie.M051.config"),"C library''Retarget printf'. CoIDE will automatically check the components, which are depended by the checked component. "))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(30968).Z})),(0,a.kt)("h3",{id:"tutorial-using-w5500"},"Tutorial Using W5500"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"change-code-before-compile"},"Change code before compile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Select the file "stdio.h/printf.c". You want to use "printf", you have\nto add as below.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="printf.c"',title:'"printf.c"'},"void PrintChar(char c)\n{\n    /* Send a char like: \n       while(Transfer not completed);\n       Transmit a char;\n    */  \n   xUARTCharPut(xUART0_BASE,c); // additional items\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Select the define variable in "ethernet/w5500". You\nshould select interface mode and kind of chip. ')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'title="wizfonfig.h"',title:'"wizfonfig.h"'},'#define _WIZCHIP_                      5500   // 5100, 5200, 5500\n\n#if (_WIZCHIP_ == 5500)\n  #define _WIZCHIP_ID_                 "W5500\\0"\n//   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_FDM_\n  #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_VDM_\n  #include "W5500/w5500.h"\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Select the define variable in "common/common.h". You can modify the Log Level. ')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//------------------------------ Etc ------------------------------\n#define WIZ_LOG_LEVEL   2       // 0: No print,  1: Error,  2: Error+Log,  3: Error+Log+Debug\n")),(0,a.kt)("p",null,"**",(0,a.kt)("a",{href:"/img/osh/cookie/w5500_cookie_v100.zip",target:"_blank"},"Download:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter the menu (view ",">"," Configuration)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(23735).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can select the Hardware Adapter type(Colink EX)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(95369).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the project view, select the parent directory in which you want to\ncreate the Group (If you do not select the parent directory, the default\nis the root directory of the project), select Add Group and Add file in\ncontext menu")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2259).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should make up same file path")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(35938).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the complie button. If necessary, you can select Rebuild to\nrecompile your project or select Clean to clean-up the project that has\nbeen compiled.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(33273).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"compile result"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(41205).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Click the "Download" button to download code to flash'))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(18495).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"download result"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(37375).Z}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can confirm the serial value through terminal program"))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#tcp-server-loopback"},"Example for cookie board"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"ip-configuration"},"IP Configuration"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If IP address of your PC and WIZ550io are different, you\nneed to configure your PC network setting."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the Start Menu and open the Control Panel."),(0,a.kt)("li",{parentName:"ul"},"Enter to'Network and Internet' and enter to Network and Sharing Center."),(0,a.kt)("li",{parentName:"ul"},"Click'Change adapter settings at left side.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(38325).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Double click Local Area Connection icon and click Properties and\nenter IPv4 Properties.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59499).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then, set your IP address and subnet mask as same as WIZ550io's IP\naddress and subnet mask. "),(0,a.kt)("li",{parentName:"ul"},"Or, you can add IP address by setting\nAdvanced. Click Advanced.. button.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56665).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click Add... button and add IP address and subnet mask.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75791).Z})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"tcp-server-loopback"},"TCP Server Loopback"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Download : ",(0,a.kt)("a",{href:"/img/osh/cookie/w5500_cookie_v100.zip",target:"_blank"},"Project download"),",",(0,a.kt)("a",{parentName:"strong",href:"http://www.hw-group.com/products/hercules/index_en.html"},"Hercules test program")," ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select TCP Client tab in Hercules and type Server IP address\ndisplaying in Tera Term at Module IP and port number box.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74975).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click Connect. "),(0,a.kt)("li",{parentName:"ul"},"If connection is done successfully, you can see\nmessage as follows.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(72065).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send\nstring data, uncheck HEX checkbox. "),(0,a.kt)("li",{parentName:"ul"},"After send data, you can see sent\ndata and received data.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(82029).Z})),(0,a.kt)("h2",{id:"udp-loopback"},"UDP Loopback"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select UDP tab in Hercules and type IP address and port number displaying in Tera Term at Module IP and Port box in Hercules. And then, type port number you want in Local port box and click Listen button. Now, UDP socket opened.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5371).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send string data, uncheck HEX checkbox. "),(0,a.kt)("li",{parentName:"ul"},"After send data, you can see sent data and received data.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87478).Z})))}s.isMDXComponent=!0},27734:function(e,t,n){"use strict";t.Z=n.p+"assets/images/0-f5cbb8bc24cfcc453e34955d11a808de.jpg"},10050:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1-ebf4c8fd41304687bda2890c5f5ec2bd.jpg"},41205:function(e,t,n){"use strict";t.Z=n.p+"assets/images/10-fb95025d4c5e6340d08264b2d52d4ff6.jpg"},18495:function(e,t,n){"use strict";t.Z=n.p+"assets/images/10_1-e8e1349af3471b230b14bd3a00615935.jpg"},37375:function(e,t,n){"use strict";t.Z=n.p+"assets/images/11-1f869836edbc2522824603382615aabc.jpg"},30585:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2-2b3218721de67c000129e847fede8bb0.jpg"},62295:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4-16dbaa2797c7a060f4cf4cd2b7e119df.jpg"},9767:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5_chip-c0842068ac7522b2fe9f8ce72e486f4c.jpg"},13910:function(e,t,n){"use strict";t.Z=n.p+"assets/images/6_chip-dde8c0f5a7dbc4e217506fc29a89bef4.jpg"},1491:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7-6f77b9584ef65eedd6f854e6d823c305.jpg"},30968:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7_2-ed76a2fbcfc022dd9cdc67c160b09b7b.jpg"},23735:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7_3-52283c25a9391d603685d684cde68b1c.jpg"},95369:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7_4-172fad3caa2c35acd0b46f34ae240365.jpg"},2259:function(e,t,n){"use strict";t.Z=n.p+"assets/images/8-2caeb6d62e38f5b2a4306e7ace661f6e.jpg"},35938:function(e,t,n){"use strict";t.Z=n.p+"assets/images/9-cb02921699ce1878bd9ac9f1bd067964.jpg"},33273:function(e,t,n){"use strict";t.Z=n.p+"assets/images/9_1-583bbdc53d0613458b3e4626b14b24a3.jpg"},35846:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cookie_numicro_v1_s-cc262b5fb899ca0df73b2d7ff15480b5.png"},74975:function(e,t,n){"use strict";t.Z=n.p+"assets/images/loopback2-21dcd3fa6fa13aa8155a6533907a33d6.jpg"},72065:function(e,t,n){"use strict";t.Z=n.p+"assets/images/loopback4-545e3acf2eeda824107a3a4ed023e987.jpg"},82029:function(e,t,n){"use strict";t.Z=n.p+"assets/images/loopback5-adff5ab4266b1d6fdc1f5070528f6ef1.jpg"},5371:function(e,t,n){"use strict";t.Z=n.p+"assets/images/loopback7-5f2e37089e1c2144590c1181c9f4b9f5.jpg"},87478:function(e,t,n){"use strict";t.Z=n.p+"assets/images/loopback8-4d804d9b858f2bb2ee366ccc3fa27cc5.jpg"},38325:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sharing_center-a760e4f9c13bd0633c200ed4b316b98a.jpg"},59499:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sharing_center2-75d1180128a0ef215ff2c811eda611fc.png"},56665:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sharing_center3-39632de65d98f51ee917248ab602fd42.jpg"},75791:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sharing_center4-eb8ab66fe66851cae0f0c829fd8050a6.png"}}]);