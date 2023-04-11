"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[8303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,d=function(e,t){if(null==e)return{};var r,n,d={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(d[r]=e[r]);return d}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(d[r]=e[r])}return d}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,d=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(r),s=d,g=p["".concat(l,".").concat(s)]||p[s]||O[s]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var i=r.length,a=new Array(i);a[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:d,a[1]=u;for(var o=2;o<i;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},20452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>O,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var n=r(87462),d=(r(67294),r(3905));const i={id:"network-exercise-2-led-with-tcp-kor",title:"\ub124\ud2b8\uc6cc\ud06c \uc608\uc81c2. TCP \ud1b5\uc2e0\uc73c\ub85c LED \uc81c\uc5b4\ud558\uae30",date:new Date("2020-04-08T00:00:00.000Z")},a=void 0,u={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-kor",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-kor",title:"\ub124\ud2b8\uc6cc\ud06c \uc608\uc81c2. TCP \ud1b5\uc2e0\uc73c\ub85c LED \uc81c\uc5b4\ud558\uae30",description:"\uac1c\uc694",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Network-Exercise-2.LED-with-TCP-Kor.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-kor",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-2-led-with-tcp-kor",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Network-Exercise-2.LED-with-TCP-Kor.md",tags:[],version:"current",frontMatter:{id:"network-exercise-2-led-with-tcp-kor",title:"\ub124\ud2b8\uc6cc\ud06c \uc608\uc81c2. TCP \ud1b5\uc2e0\uc73c\ub85c LED \uc81c\uc5b4\ud558\uae30",date:"2020-04-08T00:00:00.000Z"},sidebar:"docs",previous:{title:"\ub124\ud2b8\uc6cc\ud06c \uc608\uc81c1. TCP \ub8e8\ud504\ubc31 \ud1b5\uc2e0 \ud14c\uc2a4\ud2b8\ud558\uae30",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network-exercise-1-tcp-loopback-kor"},next:{title:"Kit \uad6c\uc131\ubb3c \ub370\uc774\ud130\uc2dc\ud2b8",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit-parts-datasheet-kor"}},l={},o=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc900\ube44\ubb3c",id:"\uc900\ube44\ubb3c",level:2},{value:"\ud558\ub4dc\uc6e8\uc5b4",id:"\ud558\ub4dc\uc6e8\uc5b4",level:2},{value:"\ud68c\ub85c\ub3c4",id:"\ud68c\ub85c\ub3c4",level:3},{value:"\uc5f0\uacb0\ub3c4",id:"\uc5f0\uacb0\ub3c4",level:3},{value:"\uc18c\ud504\ud2b8\uc6e8\uc5b4",id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4",level:2},{value:"\ud14c\uc2a4\ud2b8\uc6a9 \ud504\ub85c\uadf8\ub7a8",id:"\ud14c\uc2a4\ud2b8\uc6a9-\ud504\ub85c\uadf8\ub7a8",level:3},{value:"Example Code",id:"example-code",level:3},{value:"\uc2e4\ud589 \ubc29\ubc95 \ubc0f \uacb0\uacfc",id:"\uc2e4\ud589-\ubc29\ubc95-\ubc0f-\uacb0\uacfc",level:3},{value:"\ud559\uc2b5 \uc790\ub8cc",id:"\ud559\uc2b5-\uc790\ub8cc",level:2},{value:"\uad00\ub828 \ub9c1\ud06c",id:"\uad00\ub828-\ub9c1\ud06c",level:2}],c={toc:o},p="wrapper";function O(e){let{components:t,...i}=e;return(0,d.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,d.kt)("p",null,"TCP \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud574\uc11c \uc6d0\uaca9\uc73c\ub85c ",(0,d.kt)("strong",{parentName:"p"},"LED \ucf1c\uae30\uc640 \ub044\uae30"),"\ub97c \uc2e4\ud589\uc2dc\ucf1c \ubcf4\ub294 \uc608\uc81c\uc774\ub2e4. PC\ub97c TCP Client\ub85c \ub3d9\uc791\uc2dc\ud0a4\uace0,\nWIZwiki \ubcf4\ub4dc\ub294 TCP Server\ub85c \ub3d9\uc791\uc2dc\ud0a8\ub2e4. W7500\uc758 TOE (TCP/IP Offload Engine)\uc744 \uc774\uc6a9\ud574\uc11c\n\ub124\ud2b8\uc6cc\ud06c\ub97c \uad6c\ub3d9\uc2dc\ud0a4\uba74\uc11c \uc704\uc988\uc704\ud0a4\uc5d0 \uc5f0\uacb0\ub41c \ucef4\ud3ec\ub10c\ud2b8 (\uc5ec\uae30\uc120 LED)\ub97c \uad6c\ub3d9\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \ud559\uc2b5\ud560 \uc218 \uc788\ub2e4."),(0,d.kt)("h2",{id:"\uc900\ube44\ubb3c"},"\uc900\ube44\ubb3c"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"WIZwiki-W7500 \ubcf4\ub4dc"),(0,d.kt)("li",{parentName:"ul"},"USB \ucf00\uc774\ube14"),(0,d.kt)("li",{parentName:"ul"},"LAN \ucf00\uc774\ube14"),(0,d.kt)("li",{parentName:"ul"},"\uacf5\uc720\uae30 (DHCP\uac00 \uc9c0\uc6d0\ub418\ub294 \uc720\uc120 \uacf5\uc720\uae30 \ub610\ub294 \uc720\ubb34\uc120 \uacf5\uc720\uae30)")),(0,d.kt)("h2",{id:"\ud558\ub4dc\uc6e8\uc5b4"},"\ud558\ub4dc\uc6e8\uc5b4"),(0,d.kt)("h3",{id:"\ud68c\ub85c\ub3c4"},"\ud68c\ub85c\ub3c4"),(0,d.kt)("p",null,"\ud2b9\ubcc4\ud55c \ubd80\uac00 \ud68c\ub85c\uac00 \ud544\uc694\uc5c6\ub2e4."),(0,d.kt)("h3",{id:"\uc5f0\uacb0\ub3c4"},"\uc5f0\uacb0\ub3c4"),(0,d.kt)("p",null,"DHCP\uac00 \uc9c0\uc6d0\ub418\ub294 \uacf5\uc720\uae30\uc640 PC\ub97c LAN \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. \uacf5\uc720\uae30\uc640 WIZwiki \ubcf4\ub4dc\ub97c LAN \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. PC\uc640\nWIZwiki \ubcf4\ub4dc\ub97c USB \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4."),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(45732).Z,width:"381",height:"343"})),(0,d.kt)("h2",{id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4"),(0,d.kt)("h3",{id:"\ud14c\uc2a4\ud2b8\uc6a9-\ud504\ub85c\uadf8\ub7a8"},"\ud14c\uc2a4\ud2b8\uc6a9 \ud504\ub85c\uadf8\ub7a8"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"Terminal program",(0,d.kt)("ul",{parentName:"li"},(0,d.kt)("li",{parentName:"ul"},"EX) Teraterm, Hercules, Hyperterminal \ub4f1"),(0,d.kt)("li",{parentName:"ul"},"\uc2dc\ub9ac\uc5bc\ud3ec\ud2b8 \uba54\uc2dc\uc9c0 \ud655\uc778\uc6a9"),(0,d.kt)("li",{parentName:"ul"},"\uc2dc\ub9ac\uc5bc\ud3ec\ud2b8 \uc0ac\uc6a9 \uc608\uc81c\ub294 \uc544\ub798 \ub9c1\ud06c\ub97c \ucc38\uc870",(0,d.kt)("ul",{parentName:"li"},(0,d.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,d.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise-2-serial-port-kor"},"\ud29c\ud1a0\ub9ac\uc5bc \uc608\uc81c2. \uc2dc\ub9ac\uc5bc \ud3ec\ud2b8\ub97c \uc774\uc6a9\ud574 \ub370\uc774\ud130\n\ucd9c\ub825\ud558\uae30"))))))),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"TCP/IP Client Server terminal program",(0,d.kt)("ul",{parentName:"li"},(0,d.kt)("li",{parentName:"ul"},"EX) Hercules \ub4f1"),(0,d.kt)("li",{parentName:"ul"},"TCP/IP Client Server terminal \uc744 \uc774\uc6a9\ud574 \uba54\uc2dc\uc9c0 \uc1a1\uc218\uc2e0\uc5d0 \uc0ac\uc6a9")))),(0,d.kt)("h3",{id:"example-code"},"Example Code"),(0,d.kt)("p",null,"\uc544\ub798 \ud398\uc774\uc9c0\uc758 \uc608\uc81c \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),(0,d.kt)("p",null,"\ud83c\udf0e",(0,d.kt)("a",{parentName:"p",href:"https://os.mbed.com/teams/WIZnet/code/TCP_LED_Control-WIZwiki-W7500/"},"https://os.mbed.com/teams/WIZnet/code/TCP_LED_Control-WIZwiki-W7500/")),(0,d.kt)("h3",{id:"\uc2e4\ud589-\ubc29\ubc95-\ubc0f-\uacb0\uacfc"},"\uc2e4\ud589 \ubc29\ubc95 \ubc0f \uacb0\uacfc"),(0,d.kt)("p",null,"PC\uc640 WIZwiki \ubcf4\ub4dc\ub97c USB \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. (\ubcf4\ub4dc\uc5d0 \uc804\uc6d0\uc774 \uacf5\uae09\ub418\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ubbf8 \uc5f0\uacb0 \ub418\uc5b4 \uc788\uc744 \uac83\uc774\ub2e4.)\nPC\uc5d0\uc11c \uc2dc\ub9ac\uc5bc\ud130\ubbf8\ub110 \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\uc2dc\ud0a8\ub2e4. WIZwiki \ubcf4\ub4dc\uc758 Reset \uc2a4\uc704\uce58\ub97c \ub20c\ub7ec\uc900 \ud6c4\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud55c\ub2e4. DHCP\uac00\n\ub3d9\uc791\ud574\uc11c Server\uc758 IP \uc8fc\uc18c(ex: 192.168.0.8)\uac00 \ud560\ub2f9\ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(19773).Z,width:"828",height:"511"})),(0,d.kt)("p",null,"PC\uc5d0\uc11c Hercules \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\ub3d9\ud55c\ub2e4. Hercules\uc5d0\uc11c TCP Client \uba54\ub274\ub97c \uc124\uc815\ud55c\ub2e4. \uc811\uc18d\ud558\uace0\uc790 \ud558\ub294\nServer\uc758 IP \uc8fc\uc18c (ex: 192.168.0.8)\ub97c \uc785\ub825\ud558\uace0, Ping\uc744 \ud074\ub9ad\ud558\uace0, Connect\ub97c \ud074\ub9ad\ud55c \ud6c4\uc758 \ubaa8\uc2b5\uc774\ub2e4."),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(77060).Z,width:"631",height:"547"})),(0,d.kt)("p",null,"TCP Server \uc5d0\uc11c \ucd9c\ub825\ud558\ub294 \uba54\uc2dc\uc9c0\ub97c Teraterm \uc5d0\uc11c \ubcf8 \ud654\uba74\uc774\ub2e4. PC\uc758 Client\uc5d0\uc11c Server\ub85c\nConnection \ub418\uc5c8\uc74c\uc744 \ud560 \uc218 \uc788\ub2e4. (ex: Connection from: 192.168.0.6)"),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(5052).Z,width:"832",height:"517"}),"\n\uc774\uc81c\ubd80\ud130 WIZwiki \ubcf4\ub4dc\uc5d0 LED\ub97c \uc81c\uc5b4\ud574\ubcf8\ub2e4."),(0,d.kt)("p",null,"PC\uc758 TCP Client\uc5d0\uc11c ",(0,d.kt)("strong",{parentName:"p"},'"LED',"_",'ON"'),'\uc774\ub77c\ub294 \uba54\uc2dc\uc9c0\ub97c WIZwiki \ubcf4\ub4dc (TCP Server)\ub85c \ubcf4\ub0b4\uba74 LED\uac00\n\ucf1c\uc9c4\ub2e4. \uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c "LED',"_",'ON" \ubd80\ubd84\uc758 Send \ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c\ub2e4.'),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(75881).Z,width:"633",height:"549"})),(0,d.kt)("p",null,"\uc774 LED","_","ON \uba54\uc2dc\uc9c0\ub294 TCP Server \uce21\uc5d0\uc11c Parsing\uc774 \ub418\uace0, LED\uac00 \ucf1c\uc9c4\ub2e4. \uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c \ud30c\ub780\uc0c9 \ub3d9\uadf8\ub77c\ubbf8\n\ubd80\ubd84\uc758 LED\uac00 \ucf1c\uc9d0\uc744 \ud655\uc778\ud55c\ub2e4."),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(58e3).Z,width:"423",height:"699"})),(0,d.kt)("p",null,"LED\uac00 \ucf1c\uc9c0\ub294 \ub3d9\uc791 \uc774\uc678\uc5d0 \ub2e4\ub978 \uba54\uc2dc\uc9c0\ub3c4 \ud45c\uc2dc\ub41c\ub2e4. TCP Client \ud504\ub85c\uadf8\ub7a8\uc774 WIZwiki \ubcf4\ub4dc\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uace0,\nWIZwiki \ubcf4\ub4dc\uac00 \uba54\uc2dc\uc9c0\ub97c \ubc18\ub300\uc758 \uc21c\uc11c\ub85c TCP Client\ub85c \ubcf4\ub0b8\ub2e4."),(0,d.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774 \uc2dc\ub9ac\uc5bc \ud3ec\ud2b8\ub85c Loopback \ub41c \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud55c\ub2e4."),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(35593).Z,width:"832",height:"514"})),(0,d.kt)("p",null,'PC\uc758 TCP Client\uc5d0\uc11c "LED',"_",'ON"\uc774 \uc544\ub2cc ',(0,d.kt)("strong",{parentName:"p"},'"\uc544\ubb34 \uba54\uc2dc\uc9c0"'),"(ex: TEST)\ub97c WIZwiki \ubcf4\ub4dc (TCP\nServer)\ub85c \ubcf4\ub0b4\uba74 LED\uac00 \uaebc\uc9c4\ub2e4."),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(52035).Z,width:"631",height:"546"})),(0,d.kt)("p",null,"LED\uac00 \uaebc\uc9c0\ub294 \ub3d9\uc791 \uc774\uc678\uc5d0 \ub2e4\ub978 \uba54\uc2dc\uc9c0\ub3c4 \ud45c\uc2dc\ub41c\ub2e4. TCP Client \ud504\ub85c\uadf8\ub7a8\uc774 WIZwiki \ubcf4\ub4dc\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uace0,\nWIZwiki \ubcf4\ub4dc\uac00 \uba54\uc2dc\uc9c0\ub97c \ubc18\ub300\uc758 \uc21c\uc11c\ub85c TCP Client\ub85c \ubcf4\ub0b8\ub2e4."),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(24888).Z,width:"827",height:"512"})),(0,d.kt)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c \ud30c\ub780\uc0c9 \ub3d9\uadf8\ub77c\ubbf8 \ubd80\ubd84\uc758 LED\uac00 \uaebc\uc9d0\uc744 \ud655\uc778\ud55c\ub2e4."),(0,d.kt)("p",null,(0,d.kt)("img",{src:r(58e3).Z,width:"423",height:"699"})),(0,d.kt)("h2",{id:"\ud559\uc2b5-\uc790\ub8cc"},"\ud559\uc2b5 \uc790\ub8cc"),(0,d.kt)("p",null,"\uc544\ub798\uc5d0 \uc704\uc988\ub124\ud2b8 \uc81c\ud488\uc5d0 \uc0ac\uc6a9\ud560 mbed \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc608\uc81c\ub4e4\uc774 \uc788\ub2e4."),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,d.kt)("a",{parentName:"li",href:"https://os.mbed.com/teams/WIZnet/"},"WIZnet \ud300 \ud398\uc774\uc9c0"))),(0,d.kt)("p",null,"\uc544\ub798\uc5d0 \uc704\uc988\ub124\ud2b8\uc758 Hardware TCP/IP chip (W5500) \uacfc WIZnet TCP/IP Offload Engine\n(W7500)\uc744 \uc704\ud55c mbed \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,d.kt)("p",null,"\uac00 \uc788\ub2e4."),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,d.kt)("a",{parentName:"li",href:"https://os.mbed.com/teams/WIZnet/code/WIZnetInterface/"},"WIZnetInterface \ud398\uc774\uc9c0"))),(0,d.kt)("h2",{id:"\uad00\ub828-\ub9c1\ud06c"},"\uad00\ub828 \ub9c1\ud06c"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/tutorial-kor"},"\uc2a4\ud0c0\ud130 \ud0b7 \ud29c\ud1a0\ub9ac\uc5bc"))))}O.isMDXComponent=!0},19773:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcp_led_dhcp_1-dcc4aa6aa05da08dd7164f0f4a191925.jpg"},77060:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcp_led_client_1-cec7d486d7a31262a1dd62e056b61216.jpg"},52035:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcp_led_off_client-5297048b41922ebc40a12cab9df6c978.jpg"},24888:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcp_led_off_server-51df1a54ecb62843703ed46c1ab65f4c.jpg"},75881:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcp_led_on_client-675e55fed0969499ec3d7b344a9124df.jpg"},58e3:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcp_led_on_off-c183bd633f70fdb5617bc79ad70b4384.png"},35593:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcp_led_on_server-23716f1c939fd47019cf1b271e8badcd.jpg"},5052:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tcp_led_server_1-981d132acb961506bdf0e853b3877670.jpg"},45732:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);