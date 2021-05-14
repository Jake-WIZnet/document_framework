(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[23303],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,k=u["".concat(c,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62824:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i={id:"how_to_use_gcc_for_w7500_peripherals_examples",title:"How to use GCC for W7500 Peripherals Examples",date:new Date("2020-04-20T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/documents/appnote/how_to_use_gcc_for_w7500_peripherals_examples",id:"Product/iMCU/W7500/documents/appnote/how_to_use_gcc_for_w7500_peripherals_examples",isDocsHomePage:!1,title:"How to use the makefile with windows7",description:"********************",source:"@site/docs/Product/iMCU/W7500/documents/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md",sourceDirName:"Product/iMCU/W7500/documents/appnote",slug:"/Product/iMCU/W7500/documents/appnote/how_to_use_gcc_for_w7500_peripherals_examples",permalink:"/Product/iMCU/W7500/documents/appnote/how_to_use_gcc_for_w7500_peripherals_examples",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/documents/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md",version:"current",frontMatter:{id:"how_to_use_gcc_for_w7500_peripherals_examples",title:"How to use GCC for W7500 Peripherals Examples",date:"2020-04-20T00:00:00.000Z"},sidebar:"docs",previous:{title:"How to make W7500 Keil Project",permalink:"/Product/iMCU/W7500/documents/appnote/how_to_make_keil_new_project_for_w7500"},next:{title:"How to use ISP tool",permalink:"/Product/iMCU/W7500/documents/appnote/how_to_use_isp_tool"}},c=[{value:"Step 1. Gunwin32 Installation",id:"step-1-gunwin32-installation",children:[]},{value:"Step 2. Arm gcc Installation",id:"step-2-arm-gcc-installation",children:[]},{value:"Step 3. Execute the makefile",id:"step-3-execute-the-makefile",children:[]}],s={toc:c};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,o.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,o.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,o.kt)("li",{parentName:"ul"},"brief   : Description use a makefile with windows7."),(0,o.kt)("li",{parentName:"ul"},"develop environment : Windows 7 32/64bits"),(0,o.kt)("li",{parentName:"ul"},"arm-gcc version : gcc-arm-none-eabi-4_9-2015q1-20150306-win32")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"step-1-gunwin32-installation"},"Step 1. Gunwin32 Installation"),(0,o.kt)("p",null,"\u203b For reference, gunwin32 operate both windows7 32bit and 64bit"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"gnuwin32")," in web search engine or visit the ",(0,o.kt)("a",{href:"http://gnuwin32.sourceforge.net/",title:"http://gnuwin32.sourceforge.net/"}," ",(0,o.kt)("a",{parentName:"p",href:"http://gnuwin32.sourceforge.net/"},"http://gnuwin32.sourceforge.net/")),"\n",(0,o.kt)("img",{alt:"gnuwin32",src:n(60262).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the packages in left category.\n",(0,o.kt)("img",{alt:"gnuwin32",src:n(34323).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the ",(0,o.kt)("strong",{parentName:"p"},"Make")," file using scroll and click, Click the ",(0,o.kt)("strong",{parentName:"p"},"Setup program")," in Download.\n",(0,o.kt)("img",{alt:"gnuwin32",src:n(13686).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When download time left as '0', you get the ",(0,o.kt)("strong",{parentName:"p"},"setup file"),".\n",(0,o.kt)("img",{alt:"gnuwin32",src:n(6150).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finish the setup,copy the program setup path(you reach until ",(0,o.kt)("strong",{parentName:"p"},"make.exe"),")"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gnuwin32",src:n(35766).Z})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"In my case,the setup path is ",(0,o.kt)("strong",{parentName:"li"},"C:\\Program Files\\GnuWin32\\bin"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gnuwin32",src:n(57896).Z})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Computer")," ",">"," ",(0,o.kt)("strong",{parentName:"li"},"click the right of mouse"),"  ",">","  ",(0,o.kt)("strong",{parentName:"li"},"properties")," ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Advanced")," ",">"," ",(0,o.kt)("strong",{parentName:"li"},"Environment Variables")," ",">"," ",(0,o.kt)("strong",{parentName:"li"},"System variables")," ",">","  ",(0,o.kt)("strong",{parentName:"li"},"Edit"),">","  ",(0,o.kt)("strong",{parentName:"li"}," variable value")," Copy and Paste.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gnuwin32",src:n(62265).Z})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"step-2-arm-gcc-installation"},"Step 2. Arm gcc Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can download the setup file from the ",(0,o.kt)("a",{parentName:"li",href:"https://launchpad.net/gcc-arm-embedded/+download"},'"https://launchpad.net/gcc-arm-embedded/+download"'),"\n(main post of ",(0,o.kt)("strong",null,"2015.04.16"),")")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"armgcc",src:n(49533).Z}),"\n2. Download the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe"},"gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe"))," because I use the Windows7 32bit."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After choice the Language selection, click the ",(0,o.kt)("strong",{parentName:"li"},"'OK'"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"armgcc",src:n(9841).Z})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"The installation path setup and click the ",(0,o.kt)("strong",{parentName:"li"},"'NEXT'"),", click the ",(0,o.kt)("strong",{parentName:"li"},"'NEXT'")," again.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"armgcc",src:n(96197).Z})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Finally,Check the box "',(0,o.kt)("strong",{parentName:"li"},"Add path to environment variale"),'" and click the ',(0,o.kt)("strong",{parentName:"li"},"'Finish'"),"\n(If you check the box, It will automatically set the environment variable.)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"armgcc",src:n(99229).Z})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"The command window will be opened,you can know the arm gcc setup path it. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"make",src:n(69221).Z})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Confirm the version of arm gcc using the command of below.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"arm-none-eabi-gcc --version")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"make",src:n(46662).Z})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"step-3-execute-the-makefile"},"Step 3. Execute the makefile"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You set the path, you want to compile gcc compile. and enter the ",(0,o.kt)("strong",{parentName:"li"},"make"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"make")," ")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"make",src:n(87332).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You can see the compile as below.\n",(0,o.kt)("img",{alt:"make",src:n(1357).Z}))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"If success, the files will create. The path of make file is a place the makefile.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"make",src:n(46109).Z})),(0,o.kt)("h1",{id:"when-compile-error-occur"},"When compile error occur"),(0,o.kt)("p",null,"If you can't compile or you don't create the files, you directly set the environment variable."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Computer")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"click the right of mouse"),"  ",">","  ",(0,o.kt)("strong",{parentName:"p"},"properties")," ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Environment Variables")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"System variables")," ",">","  ",(0,o.kt)("strong",{parentName:"p"},"Edit"),">","  ",(0,o.kt)("strong",{parentName:"p"},"variable value")," Copy and Paste."),(0,o.kt)("p",{parentName:"blockquote"},"Copy path is ",(0,o.kt)("strong",{parentName:"p"},"c:\\Program Files\\GNU Tools ARM Embedded\\4.9 2015q1\\bin")," : setup path")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gnuwin32",src:n(62265).Z})))}p.isMDXComponent=!0},46109:function(e,t,n){"use strict";t.Z=n.p+"assets/images/10_make-a6469fcd5d8b20b79df355edac3b1404.jpg"},49533:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1_armgcc-4c99cb7e5b21465382ae0709a0c12b9a.jpg"},60262:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1_gnuwin32-e09f03b16d60cc3aaec55281a69ff56e.jpg"},9841:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2_armgcc-8f436ef92bf60e0b72140847b1a8ddb6.jpg"},34323:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2_gnuwin32-8da64471b843528925b5cb85195b1731.jpg"},13686:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3_gnuwin32-c1f9cee6279a3a22b541b280a0176eb0.jpg"},96197:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4_armgcc-30824ecb6309247a20bda410b01e59b3.jpg"},6150:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4_gnuwin32-28735b93c8249f1386239d11a4e9750c.jpg"},99229:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5_armgcc-3299205618e712f721694c44da90e966.jpg"},35766:function(e,t){"use strict";t.Z="data:image/jpeg;base64,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"},57896:function(e,t,n){"use strict";t.Z=n.p+"assets/images/6_gnuwin32-6a7ffdcbb50b1e051c9b83df1da316cd.jpg"},69221:function(e,t,n){"use strict";t.Z=n.p+"assets/images/6_make-79d887e93a60cecd064899f6747ec1f9.jpg"},62265:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7_gnuwin32-223c205f57975be02cd5f73a1c8e9d4d.jpg"},46662:function(e,t,n){"use strict";t.Z=n.p+"assets/images/7_make-00946629e829bcc4799ed0e80a2035bc.jpg"},87332:function(e,t,n){"use strict";t.Z=n.p+"assets/images/8_make-c4cd6e31295a0e95eba0e63358495e81.jpg"},1357:function(e,t,n){"use strict";t.Z=n.p+"assets/images/9_make-0fb205357f3a09bd41850e87a7d11782.jpg"}}]);