"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[1495],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},37393:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(44996);const i={id:"asg210-datasheet",title:"Datasheet",date:new Date("2021-06-03T00:00:00.000Z")},o=void 0,p={unversionedId:"Product/Azure-Sphere/asg210-datasheet",id:"Product/Azure-Sphere/asg210-datasheet",title:"Datasheet",description:"Specification",source:"@site/docs/Product/Azure-Sphere/ASG210-datasheet.md",sourceDirName:"Product/Azure-Sphere",slug:"/Product/Azure-Sphere/asg210-datasheet",permalink:"/Product/Azure-Sphere/asg210-datasheet",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Azure-Sphere/ASG210-datasheet.md",tags:[],version:"current",frontMatter:{id:"asg210-datasheet",title:"Datasheet",date:"2021-06-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Overview",permalink:"/Product/Azure-Sphere/asg210"},next:{title:"Debugger Board",permalink:"/Product/Azure-Sphere/asg210-debugger"}},d={},u=[{value:"Specification",id:"specification",level:2},{value:"Block Diagram",id:"block-diagram",level:2},{value:"Callout",id:"callout",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Electrical Characteristics",id:"electrical-characteristics",level:2},{value:"Operating Conditions",id:"operating-conditions",level:3},{value:"Hardware Function Description",id:"hardware-function-description",level:2},{value:"USI Azure Sphere Combo module",id:"usi-azure-sphere-combo-module",level:3},{value:"Ethernet Interface",id:"ethernet-interface",level:3},{value:"Public Network (ENC28J60)",id:"public-network-enc28j60",level:4},{value:"Private Network (W5500)",id:"private-network-w5500",level:3},{value:"Dual Band Wi-Fi- Interface",id:"dual-band-wi-fi--interface",level:3},{value:"BLE 5.0",id:"ble-50",level:3},{value:"GPIO Terminal Block",id:"gpio-terminal-block",level:3},{value:"UART Terminal Block (RS232/485/422)",id:"uart-terminal-block-rs232485422",level:3},{value:"I2C Connector",id:"i2c-connector",level:3},{value:"SD Card Slot",id:"sd-card-slot",level:3},{value:"LED Status",id:"led-status",level:3},{value:"System Architecture",id:"system-architecture",level:2},{value:"Block Diagram",id:"block-diagram-1",level:3},{value:"GPIOs, UART, I2C Operating System Block Diagram",id:"gpios-uart-i2c-operating-system-block-diagram",level:3},{value:"Dual Ethernet Operating System Block Diagram",id:"dual-ethernet-operating-system-block-diagram",level:3},{value:"Dimensions",id:"dimensions",level:2},{value:"ASG210 Connections",id:"asg210-connections",level:2},{value:"DC Power Cable Specification",id:"dc-power-cable-specification",level:2}],m={toc:u};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/ASG210_spec_table_20210210.png"),width:"550"}),(0,r.kt)("h2",{id:"block-diagram"},"Block Diagram"),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/asg210_blockdiagram.png"),width:"750"}),(0,r.kt)("h2",{id:"callout"},"Callout"),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/ASG210_board_description_20210210.png"),width:"750"}),(0,r.kt)("h2",{id:"pinout"},"Pinout"),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/asg210_pinout.png"),width:"750"}),(0,r.kt)("h2",{id:"electrical-characteristics"},"Electrical Characteristics"),(0,r.kt)("h3",{id:"operating-conditions"},"Operating Conditions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Min"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Max"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vcc"),(0,r.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vss"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VDDIO"),(0,r.kt)("td",{parentName:"tr",align:null},"Device supply votlage, I/O"),(0,r.kt)("td",{parentName:"tr",align:null},"Group 1"),(0,r.kt)("td",{parentName:"tr",align:null},"2.97"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3"),(0,r.kt)("td",{parentName:"tr",align:null},"3.63"),(0,r.kt)("td",{parentName:"tr",align:null},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VIH"),(0,r.kt)("td",{parentName:"tr",align:null},"Input High Voltage"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VIL"),(0,r.kt)("td",{parentName:"tr",align:null},"Input Low voltage"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VOH"),(0,r.kt)("td",{parentName:"tr",align:null},"Output High Voltage"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VOL"),(0,r.kt)("td",{parentName:"tr",align:null},"Output Low Voltage"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"hardware-function-description"},"Hardware Function Description"),(0,r.kt)("h3",{id:"usi-azure-sphere-combo-module"},"USI Azure Sphere Combo module"),(0,r.kt)("p",null,"Azure Sphere combo module is uniquely designed for IoT applications, with multi-functionality design-in support by standard SDK. Customers can easily migrate from discrete MCU solution."),(0,r.kt)("h3",{id:"ethernet-interface"},"Ethernet Interface"),(0,r.kt)("h4",{id:"public-network-enc28j60"},"Public Network (ENC28J60)"),(0,r.kt)("p",null,"The onboard ",(0,r.kt)("a",{parentName:"p",href:"https://www.microchip.com/wwwproducts/en/en022889"},"MicroChip ENC28J60")," ehternet controller device provides a 10 Mbps interface using TCP or UDP network protocols:\n\u2022\tPublic network, communicating with Azure IoT or other internet-based services"),(0,r.kt)("p",null,"Use of Ethernet requires a \u201cboard configuration image\u201d in addition to the user application image. This is required by the Azure Sphere Security Monitor to add Ethernet support to Azure Sphere OS. ISU0 is used for SPI0 interface signals to the ENC28J60 device, with interruptions on GPIO5."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:null},"GPIO"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCK"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO47"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU0(SPI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MOSI"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO46"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU0(SPI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MISO"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO45"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU0(SPI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CS"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO44"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU0(SPI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO5"),(0,r.kt)("td",{parentName:"tr",align:null},"Interrupt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RST_N"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO6"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Connected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SYSRST_N"),(0,r.kt)("td",{parentName:"tr",align:null},"SYSRST_N"),(0,r.kt)("td",{parentName:"tr",align:null},"Hardware System Reset")))),(0,r.kt)("p",null,"More detail on this topic is available here:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure-sphere/network/connect-ethernet"},"https://docs.microsoft.com/en-us/azure-sphere/network/connect-ethernet")),(0,r.kt)("h3",{id:"private-network-w5500"},"Private Network (W5500)"),(0,r.kt)("p",null,"The onboard W5500 chip is a Hardwired Internet controller designed as a full hardwired TCP/IP stack with WIZnet technology. It supports 10/100 Mbps interface using TCP or UDP network protocol:"),(0,r.kt)("p",null,"\u2022\tPrivate network, communicating with Brown-field various network protocol services"),(0,r.kt)("p",null,"W5500 supports TCP, UDP, IPv4, ICMP, ARP, IGMP, and PPPoE and 8 independent SOCKETs are used simultaneously and 32KB internal memory for data communication. User can develop an Ethernet application easily by using the simple W5500 SOCKET program instead of handling a complex Ethernet controller. W5500 also provides WOL(Wake on LAN) and a Power Down Mode in order to reduce power consumption."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:null},"GPIO"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCK"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO42"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU0(SPI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MOSI"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO41"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU0(SPI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MISO"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO40"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU0(SPI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CS"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO39"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU0(SPI)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nRDY"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO56"),(0,r.kt)("td",{parentName:"tr",align:null},"Ready to Read/Write")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO57"),(0,r.kt)("td",{parentName:"tr",align:null},"Interrupt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"W5500_RESET"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO58"),(0,r.kt)("td",{parentName:"tr",align:null},"W5500 Reset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SYSRST_N"),(0,r.kt)("td",{parentName:"tr",align:null},"SYSRST_N"),(0,r.kt)("td",{parentName:"tr",align:null},"Hardware System Reset")))),(0,r.kt)("p",null,"More detail on this topic is available here:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.wiznet.io/Product/iEthernet/W5500/overview"},"https://docs.wiznet.io/Product/iEthernet/W5500/overview")),(0,r.kt)("h3",{id:"dual-band-wi-fi--interface"},"Dual Band Wi-Fi- Interface"),(0,r.kt)("p",null,"The MT3620 on USI Azure Sphere Combo module integrates a Wi-Fi 802.11 bgn radio with on-board dual-band Ext. antenna connector. This is used to connect ASG210 to a wireless access point for Internet access."),(0,r.kt)("h3",{id:"ble-50"},"BLE 5.0"),(0,r.kt)("p",null,"USI Azure Sphere Combo module includes NRF52832 supports BLE 5.0 and antenna hole for external BT antenna. User can download and debug with BT SWD pin header on ASG Debugger board."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:null},"GPIO"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BT SWDIO"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO5"),(0,r.kt)("td",{parentName:"tr",align:null},"Serial wire debug I/O for debug and programming")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BT SWCLK"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO6"),(0,r.kt)("td",{parentName:"tr",align:null},"Serial wire clock input for debug and programming")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BT nRST"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO9"),(0,r.kt)("td",{parentName:"tr",align:null},"Configurable as pin reset")))),(0,r.kt)("p",null,"More detail on Application manifest is available here:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/samples/azure/azure-sphere-samples/wifi-setup-via-ble/"},"https://docs.microsoft.com/en-us/samples/azure/azure-sphere-samples/wifi-setup-via-ble/")),(0,r.kt)("h3",{id:"gpio-terminal-block"},"GPIO Terminal Block"),(0,r.kt)("p",null,"ASG210 supports 4-GPIOs terminal block to communicate with external devices as Brown-field devices."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:null},"GPIO"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPIO0"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO0"),(0,r.kt)("td",{parentName:"tr",align:null},"Digital Input/output port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPIO1"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO1"),(0,r.kt)("td",{parentName:"tr",align:null},"Digital Input/output port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPIO2"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO2"),(0,r.kt)("td",{parentName:"tr",align:null},"Digital Input/output port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPIO3"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO3"),(0,r.kt)("td",{parentName:"tr",align:null},"Digital Input/output port")))),(0,r.kt)("h3",{id:"uart-terminal-block-rs232485422"},"UART Terminal Block (RS232/485/422)"),(0,r.kt)("p",null,"ASG210 supports UART(RS232/485/422) terminal block to communicate with external devices as Brown-field devices. USI Azure Sphere Combo module supports ISU3 used as UART or I2C by user selection. To use ISU3 as UART, user should define UART Interface in Azure Sphere Application manifest file. And GPIO8(WIZNET_ASG210_ISU3_NSDA_RXD_SEL) should be \u201cHigh Level\u201d to select ISU3 RXD.\nASG210 UART interface supports RS232/485/422 and user can select Serial communication type with GPIO9,10."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ex1) RS485 selected by \u2018Low Level\u2019 GPIO10 and \u2018High Level\u2019 GPIO9."),"\n",(0,r.kt)("em",{parentName:"p"},"Ex2) RS232 selected by \u2018High Level\u2019 GPIO10.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:null},"GPIO"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S0"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO8"),(0,r.kt)("td",{parentName:"tr",align:null},"Select \u2018High Level\u2019 for ISU3 UART")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"485/422 SEL"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO9"),(0,r.kt)("td",{parentName:"tr",align:null},"Select \u2018High Level\u2019 for RS485 ",(0,r.kt)("br",null)," Select \u2018Low Level\u2019 for RS422")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"485/232 SEL"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO10"),(0,r.kt)("td",{parentName:"tr",align:null},"Select \u2018High Level\u2019 for RS485/422 ",(0,r.kt)("br",null)," Select \u2018Low Level\u2019 for RS232")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SERIAL_TXD"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO66"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(UART)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RTS3"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO67"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(UART)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RXD3"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO68"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(UART)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SERIAL_CTS"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO69"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(UART)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tx DE"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO70"),(0,r.kt)("td",{parentName:"tr",align:null},"This signal is used only for RS485/422 ",(0,r.kt)("br",null),"Select \u2018High Level\u2019 for Tx Enable",(0,r.kt)("br",null),"Select \u2018Low Level\u2019 for Tx Disable")))),(0,r.kt)("p",null,"More detail on Application manifest is available here:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/ko-kr/azure-sphere/app-development/app-manifest"},"https://docs.microsoft.com/ko-kr/azure-sphere/app-development/app-manifest")),(0,r.kt)("h3",{id:"i2c-connector"},"I2C Connector"),(0,r.kt)("p",null,"ASG210 supports I2C connector to communicate with external devices such as Brown-field devices. USI Azure Sphere Combo module supports ISU3 used as I2C or UART by user selection.\nTo use ISU3 as I2C, user should define I2C Interface in Azure Sphere Application manifest file, and GPIO8(WIZNET_ASG210_ISU3_NSDA_RXD_SEL) should be set to \u201cLow Level\u201d to select ISU3 SDA."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u201cCapabilities\u201d:\n{\n\u201cI2cMaster\u201d: [\u201c$WIZNET_ASG210_ISU3_NSDA_RXD_SEL\u201d]\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Signal Name"),(0,r.kt)("th",{parentName:"tr",align:null},"GPIO"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S0"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO8"),(0,r.kt)("td",{parentName:"tr",align:null},"Select \u2018Low Level\u2019 for ISU3 I2C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO66"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(I2C)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCL"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO67"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(I2C)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDA"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO68"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(I2C)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO69"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(I2C)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Null"),(0,r.kt)("td",{parentName:"tr",align:null},"GPIO70"),(0,r.kt)("td",{parentName:"tr",align:null},"ISU3(I2C)")))),(0,r.kt)("p",null,"More detail on Application manifest is available here:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/ko-kr/azure-sphere/app-development/app-manifest"},"https://docs.microsoft.com/ko-kr/azure-sphere/app-development/app-manifest")),(0,r.kt)("h3",{id:"sd-card-slot"},"SD Card Slot"),(0,r.kt)("p",null,"ASG210 includes ATmega328P-AU, UART to SDCard, module running at 16MHz. It supports MicroSD card size from 64MB to 16GB. And the baud rate is configurable from 300bps to 1000000bps (the default baud rate is 9600 bps). "),(0,r.kt)("p",null,"Verified SDCard class and size:\n\u2022\tSandisk microSDHC class4 4GB\n\u2022\tSandisk microSDHC 1 class4 8GB\n\u2022\tSandisk Ultra microSDHC 1 class10 16GB"),(0,r.kt)("h3",{id:"led-status"},"LED Status"),(0,r.kt)("p",null,"An overview of ASG210 LED status as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Status LEDs"),(0,r.kt)("th",{parentName:"tr",align:null},"Color"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED0"),(0,r.kt)("td",{parentName:"tr",align:null},"POWER"),(0,r.kt)("td",{parentName:"tr",align:null},"Red"),(0,r.kt)("td",{parentName:"tr",align:null},"Confirmation that 5V supply rail voltage is ok")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED1"),(0,r.kt)("td",{parentName:"tr",align:null},"AZURE"),(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Ready to communicate with Azure Cloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED2"),(0,r.kt)("td",{parentName:"tr",align:null},"Wi-Fi"),(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Activate Wi-Fi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED3"),(0,r.kt)("td",{parentName:"tr",align:null},"ETHERNET"),(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Activate WAN, ETH0 port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED4"),(0,r.kt)("td",{parentName:"tr",align:null},"INTERFACE"),(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Received data from LAN, ETH1 port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED5"),(0,r.kt)("td",{parentName:"tr",align:null},"BLUETOOTH"),(0,r.kt)("td",{parentName:"tr",align:null},"Green"),(0,r.kt)("td",{parentName:"tr",align:null},"Activate Blue-tooth")))),(0,r.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,r.kt)("p",null,"System Architecture describes entire system which is ASG210 applied to Brown-field network and connected to Cloud Server and Management service"),(0,r.kt)("h3",{id:"block-diagram-1"},"Block Diagram"),(0,r.kt)("p",null,"ASG210 can send data via various interfaces to the cloud server and management service."),(0,r.kt)("h3",{id:"gpios-uart-i2c-operating-system-block-diagram"},"GPIOs, UART, I2C Operating System Block Diagram"),(0,r.kt)("p",null,"In ASG210, M4 and A7 Cores of MT3620 can access to GPIOs, I2C, UART interface to communicate with user exsiting system, Brown field. ASG210 supports user-selected RS232/485/422 communication on mounted transceiver chip as well."),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/block_diagram.png"),width:"750"}),(0,r.kt)("p",null,"The received data from GPIOs/I2C/UART is sent to Azure cloud or management service on Azure Sphere security system via public network, Ethernet, or Wi-Fi. In the same manner, the exsiting system can receive data from Azure cloud or management service via Azure Sphere security system. It allows users to access the system remotely with guaranteed high-level security."),(0,r.kt)("h3",{id:"dual-ethernet-operating-system-block-diagram"},"Dual Ethernet Operating System Block Diagram"),(0,r.kt)("p",null,"In ASG200, M4 Core of MT3620 is connected to W5500, which is WIZnet\u2019s hardwired TCP/IP chip with SPI interface. Since the hardwired TCP/IP stack is embedded in W5500, software TCP/IP stack is not required on the M4 Core for ethernet communication. M4 Core only receives data parsed by W5500 then sends it to A7 Core on inter-core communication. A7 Core secures this data on Azure Sphere security system and sends it Azure Cloud via public network."),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/dual_ethernet.png"),width:"750"}),(0,r.kt)("p",null,"W5500 is only connected with the SPI interface to M4 Core. Hence, the data communication between the brownfield system and W5500 is out of Azure Sphere security system. However, W5500 can filter the ethernet packets used in data communication and allow reliable Ethernet communication even if heavy traffic occurs, such as a DDoS attack."),(0,r.kt)("h2",{id:"dimensions"},"Dimensions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Base PCB")),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/asg210_basepcb_dimensions.png"),width:"750"}),(0,r.kt)("h2",{id:"asg210-connections"},"ASG210 Connections"),(0,r.kt)("p",null,"An overview of how ASG210 interface to the equipment in local network is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Power provided to ASG210 with 5V2A power adapter, power status LED turned on."),(0,r.kt)("li",{parentName:"ol"},"For equipment with as Ethernet interface, connect Ethernet cable from ASG210\u2019s LAN port to the equipment."),(0,r.kt)("li",{parentName:"ol"},"Connect another Ethernet cable from ASG210\u2019s WAN port to internet router for public network."),(0,r.kt)("li",{parentName:"ol"},"Once connected, the LEDs on ASG210 should be as follows:")),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/2853_image.png"),width:"600"}),(0,r.kt)("h2",{id:"dc-power-cable-specification"},"DC Power Cable Specification"),(0,r.kt)("p",null,"Power to ASG210 is supplied directly via 5V2A DC connector or via the debugger board USB Micro B connector."),(0,r.kt)("img",{src:(0,l.Z)("img/AzureSphere/datasheet/asg210_dc_cablespec.png"),width:"300"}))}s.isMDXComponent=!0}}]);