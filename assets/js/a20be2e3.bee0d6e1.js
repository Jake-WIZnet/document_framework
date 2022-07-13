"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[4491],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var u=n.createContext({}),d=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,o=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),s=d(r),m=l,k=s["".concat(u,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(k,i(i({ref:e},c),{},{components:r})):n.createElement(k,i({ref:e},c))}));function m(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=r.length,i=new Array(o);i[0]=s;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:l,i[1]=a;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},53794:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(87462),l=(r(67294),r(3905));const o={id:"migration-from-w5200",title:"Migration from W5200",date:new Date("2020-04-03T00:00:00.000Z")},i="Migration from W5200 to W5500",a={unversionedId:"Product/iEthernet/W5500/migration-from-w5200",id:"Product/iEthernet/W5500/migration-from-w5200",title:"Migration from W5200",description:"This page explains migration materials to W5200 users.",source:"@site/docs/Product/iEthernet/W5500/Migration-from-W5200.md",sourceDirName:"Product/iEthernet/W5500",slug:"/Product/iEthernet/W5500/migration-from-w5200",permalink:"/Product/iEthernet/W5500/migration-from-w5200",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/Migration-from-W5200.md",tags:[],version:"current",frontMatter:{id:"migration-from-w5200",title:"Migration from W5200",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Reference Schematic",permalink:"/Product/iEthernet/W5500/ref-schematic"},next:{title:"W5500 Application",permalink:"/Product/iEthernet/W5500/Application/"}},u={},d=[{value:"Driver for W5200 Users",id:"driver-for-w5200-users",level:3},{value:"W5500 vs W5200 Chip in Comparison",id:"w5500-vs-w5200-chip-in-comparison",level:3}],c={toc:d};function p(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"migration-from-w5200-to-w5500"},"Migration from W5200 to W5500"),(0,l.kt)("p",null,"This page explains migration materials to W5200 users."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"driver-for-w5200-users"},"Driver for W5200 Users"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download :  ",(0,l.kt)("a",{href:"/img/products/w5500/w5500_cortexm3_firmware_for_legacy.zip",target:"_blank"},"w5500_cortexm3_firmware_for_legacy.zip"))),(0,l.kt)("p",null,"This driver is provided only for current W5200 users to help with a fast migration to W5500. TTo ",(0,l.kt)("strong",{parentName:"p"},"get the new or latest BSD version driver"),", please refer to the ",(0,l.kt)("a",{parentName:"p",href:"driver"},"W5500 Driver")," page."),(0,l.kt)("h3",{id:"w5500-vs-w5200-chip-in-comparison"},"W5500 vs W5200 Chip in Comparison"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Device"),(0,l.kt)("th",null,"W5500"),(0,l.kt)("th",null,"W5200")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Process"),(0,l.kt)("td",null,"0.13um"),(0,l.kt)("td",null,"0.18um")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Package"),(0,l.kt)("td",null,"48 LQFP (7*7 mm^2)"),(0,l.kt)("td",null,"48 QFN  (7*7 mm^2)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"IO Voltage / Core Voltage"),(0,l.kt)("td",null,"3.3V / 1.2V "),(0,l.kt)("td",null,"3.3V / 1.8V ")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Number of sockets"),(0,l.kt)("td",null,"8 ea"),(0,l.kt)("td",null,"8 ea")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"4"},"SPI Frame"),(0,l.kt)("td",null,"ADD1|ADD2|Control|Data0|Data1\u2026"),(0,l.kt)("td",null,"ADD1|ADD0|OP+LEN1|LEN0|Data\u2026")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"8bit |8bit |8bit |8bit | 8bit"),(0,l.kt)("td",null,"8bit |8bit |1bit +7bit |8bit | 8bit")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Control 1 byte (Block selection, Read/Write selection, SPI mode selection)"),(0,l.kt)("td",null,"OP Code 1 bit (Read/Write Selection)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"No Data Length field"),(0,l.kt)("td",null,"Data Length 15bit")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Memory Access"),(0,l.kt)("td",null,"TX Memory and RX Memory can be used for general data memory."),(0,l.kt)("td",null,"TX Memory can be used for general data memory.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"MCU Bus Interface"),(0,l.kt)("td",null,"SPI"),(0,l.kt)("td",null,"SPI / 8bit parallel indirect bus mode")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Regulator Related Circuit"),(0,l.kt)("td",null,"LDO output pin needs the capacitor. No need to supply the chip power (1.2V)."),(0,l.kt)("td",null,"LDO output voltage (1.8V) must be applied to the chip power (1.8V) at the outer side of the chip package.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"PHY Power Down Setting"),(0,l.kt)("td",null,"PHY's power down mode can be set by configuring PHY Register."),(0,l.kt)("td",null,"PHY's power down mode can be set by external pin.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"WOL Function"),(0,l.kt)("td",null,"WOL over UDP Support"),(0,l.kt)("td",null,"WOL over Ethernet Support")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"PHY Mode Setting"),(0,l.kt)("td",null,"PHY mode can be set by Firmware"),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Status LED"),(0,l.kt)("td",null,"4 LEDs (SPD / DUP / ACT / Link)"),(0,l.kt)("td",null,"3 LEDs (SPD / DUP / Link)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"PHY Auto MDIX Function"),(0,l.kt)("td",null,"No Support"),(0,l.kt)("td",null,"Support")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Operating Current @100Mbps Full Link"),(0,l.kt)("td",null,"Typical 132mA"),(0,l.kt)("td",null,"Typical 160mA")))))}p.isMDXComponent=!0}}]);