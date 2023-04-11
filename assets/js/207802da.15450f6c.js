"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[5777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"udp",title:"W5100S UDP Function",date:new Date("2020-04-03T00:00:00.000Z")},s=void 0,o={unversionedId:"Product/iEthernet/W5100S/Application-Note/udp",id:"Product/iEthernet/W5100S/Application-Note/udp",title:"W5100S UDP Function",description:"By setting some register and memory operation, W5100S provides internet",source:"@site/docs/Product/iEthernet/W5100S/Application-Note/UDP.md",sourceDirName:"Product/iEthernet/W5100S/Application-Note",slug:"/Product/iEthernet/W5100S/Application-Note/udp",permalink:"/Product/iEthernet/W5100S/Application-Note/udp",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Application-Note/UDP.md",tags:[],version:"current",frontMatter:{id:"udp",title:"W5100S UDP Function",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"W5100S TCP Function",permalink:"/Product/iEthernet/W5100S/Application-Note/tcp"},next:{title:"IPRAW",permalink:"/Product/iEthernet/W5100S/Application-Note/ipraw"}},c={},d=[{value:"Initialization",id:"initialization",level:2},{value:"Basic Setting",id:"basic-setting",level:3},{value:"Setting network information",id:"setting-network-information",level:3},{value:"Set SOCKET memory information",id:"set-socket-memory-information",level:3},{value:"Data Communications",id:"data-communications",level:2},{value:"UDP",id:"udp",level:3},{value:"Unicast and Broadcast",id:"unicast-and-broadcast",level:3},{value:"Note: Broadcast IP",id:"note-broadcast-ip",level:5},{value:"SOCKET Initialization",id:"socket-initialization",level:5},{value:"Check received data",id:"check-received-data",level:5},{value:"Receiving process",id:"receiving-process",level:5},{value:"Check send data / sending process",id:"check-send-data--sending-process",level:5},{value:"Check complete sending / Timeout",id:"check-complete-sending--timeout",level:5},{value:"Check Finished / SOCKET close",id:"check-finished--socket-close",level:4},{value:"Multicast",id:"multicast",level:3},{value:"SOCKET Initialization",id:"socket-initialization-1",level:5},{value:"Check received data",id:"check-received-data-1",level:5},{value:"Receiving process",id:"receiving-process-1",level:5},{value:"Check send data / Sending Process",id:"check-send-data--sending-process-1",level:5},{value:"Check complete sending / Timeout",id:"check-complete-sending--timeout-1",level:5},{value:"Check finished / SOCKET close",id:"check-finished--socket-close-1",level:5}],l={toc:d},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By setting some register and memory operation, W5100S provides internet\nconnectivity. This chapter describes how it can be operated."),(0,r.kt)("h2",{id:"initialization"},"Initialization"),(0,r.kt)("h3",{id:"basic-setting"},"Basic Setting"),(0,r.kt)("p",null,"For the W5100S operation, select and utilize appropriate registers shown\nbelow."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mode Register (MR)"),(0,r.kt)("li",{parentName:"ol"},"Interrupt Mask Register (IMR)"),(0,r.kt)("li",{parentName:"ol"},"Retry Time-value Register (RTR)"),(0,r.kt)("li",{parentName:"ol"},"Retry Count Register (RCR)")),(0,r.kt)("p",null,"For more information of above registers, refer to the \u201cRegister\nDescriptions.\u201d"),(0,r.kt)("h3",{id:"setting-network-information"},"Setting network information"),(0,r.kt)("p",null,"Basic network information setting for communication: It must be set the\nbasic network information."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SHAR(Source Hardware Address Register)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It is prescribed that the source hardware addresses, which is\nset by SHAR, use unique hardware addresses (Ethernet MAC\naddress) in the Ethernet MAC layer. The IEEE manages the MAC\naddress allocation. The manufacturer which produces the network\ndevice allocates the MAC address to product."),(0,r.kt)("li",{parentName:"ul"},"Details on MAC address allocation refer to the website as below."),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"http://www.ieee.org/"},"http://www.ieee.org/")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,r.kt)("a",{parentName:"li",href:"http://standards.ieee.org/regauth/oui/index.shtml"},"http://standards.ieee.org/regauth/oui/index.shtml")))),(0,r.kt)("li",{parentName:"ol"},"GAR(Gateway Address Register)"),(0,r.kt)("li",{parentName:"ol"},"SUBR(Subnet Mask Register)"),(0,r.kt)("li",{parentName:"ol"},"SIPR(Source IP Address Register)")),(0,r.kt)("h3",{id:"set-socket-memory-information"},"Set SOCKET memory information"),(0,r.kt)("p",null,"This stage sets the socket TX/RX memory information. The base address\nand mask address of each SOCKET are fixed and saved in this stage."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"In case of, assign 2Kbytes TX/RX memory per SOCKET"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"In case of, assign 2Kbytes TX/RX memory per SOCKET\n{\nSn_RXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET\nSn_TXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET\n\n/* Same method, set gS1_TX_BASE, gS1_TX_MASK, gS2_TX_BASE, gS2_TX_MASK,\ngS3_TX_BASE, gS3_TX_MASK, gS4_TX_BASE, gS4_TX_MASK*/\n}\n")),(0,r.kt)("h2",{id:"data-communications"},"Data Communications"),(0,r.kt)("p",null,"After the initialization process, W5100S can transmit and receive the\ndata with others by \u2018open\u2019 the SOCKET of TCP, UDP, IPRAW, and MACRAW\nmode. The W5100S supports the independently and simultaneously usable 4\nSOCKETs. In this section, the communication method for each mode will be\nintroduced."),(0,r.kt)("h3",{id:"udp"},"UDP"),(0,r.kt)("p",null,"The UDP is a Connection-less protocol. It communicates without\n\u201cconnection SOCKET\u201d. The TCP protocol guarantees reliable data\ncommunication, but the UDP protocol uses datagram communication which\nhas no guarantees of data communication. Because the UDP does not use\n\u201cconnection SOCKET\u201d, it can communicate with many other devices with\nthe known host IP address and port number. This is a great advantage,\ncommunication with many others by using just one SOCKET. But also it has\nmany problems such as loss of transmitted data, unwanted data received\nfrom others, etc. To avoid these problems and guarantee reliability, the\nhost retransmits damaged data or ignores the unwanted data which is\nreceived from others. The UDP protocol supports unicast, broadcast, and\nmulticast communication. It follows the below communication flow."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"UDP Operation Flow",src:n(981).Z,width:"327",height:"323"})),(0,r.kt)("h3",{id:"unicast-and-broadcast"},"Unicast and Broadcast"),(0,r.kt)("p",null,"The unicast is one method of UDP communication. It transmits data to one\ndestination at one time. On the other hand, the broadcast communication\ntransmits data to all receivable destinations by using \u2018broadcast IP\naddress (255.255.255.255)\u2019. For example, suppose that the user transmits\ndata to destination A, B, and C. The unicast communication transmits\neach destination A, B, and C at each time. At this time, the\nARP",(0,r.kt)("sub",null,"TO")," can also occur when the user gets the destination\nhardware address of destinations A, B and C. User cannot transmit data\nto destinations which have ARP",(0,r.kt)("sub",null,"TO"),". The broadcast communication\ncan simultaneously transmit data to destination A, B and C at one time\nby using \u201c255.255.255.255\u201d or \u201clocal address | (","~","subnet address)\u201d IP\naddress. At this time, there is no need to get the destination hardware\naddress about destination A, B and C, and also ARP",(0,r.kt)("sub",null,"TO"),"is not\noccurred."),(0,r.kt)("h5",{id:"note-broadcast-ip"},"Note: Broadcast IP"),(0,r.kt)("p",null,"\u21d2 The Broadcast IP address can be obtained by performing a bit-wise\nlogical OR operation between the bit complement of the subnet mask and\nthe host\u2019s IP address.",(0,r.kt)("br",{parentName:"p"}),"\n","ex",">"," If IP:\u201d222.98.173.123\u201d and the subnet mask:\u201c255.255.255.0\u201d,\nbroadcast IP is \u201c222.98.173.255\u201d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("th",{parentName:"tr",align:null},"Binary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HOST IP"),(0,r.kt)("td",{parentName:"tr",align:null},"222.098.173.123"),(0,r.kt)("td",{parentName:"tr",align:null},"11011110.01100010.10101101.01111011")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Complement Subnet mask"),(0,r.kt)("td",{parentName:"tr",align:null},"000.000.000.255"),(0,r.kt)("td",{parentName:"tr",align:null},"00000000.00000000.00000000.11111111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise OR"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Broadcast IP"),(0,r.kt)("td",{parentName:"tr",align:null},"222.098.173.255"),(0,r.kt)("td",{parentName:"tr",align:null},"11011110.01100010.10101101.11111111")))),(0,r.kt)("h5",{id:"socket-initialization"},"SOCKET Initialization"),(0,r.kt)("p",null,"For the UDP data communication, SOCKET initialization is required; it\nopens the SOCKET. The SOCKET open process is as followed. At first,\nchoose one SOCKET among the 4 SOCKETS of W5100S, then set the protocol\nmode (Sn","_","MR(P3:P0)) of the chosen SOCKET and set the source port number\nSn","_","PORT0 for communication. Finally, execute the OPEN command. After\nthe OPEN command, the state of Sn","_","SR is changed to SOCK","_","UDP. Then the\nSOCKET initialization is complete."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{\nSTART:\nSn_MR = 0x02; /* sets UDP mode */\nSn_PORT0 = source_port; /* sets source port number */\nSn_CR = OPEN; /* sets OPEN command */\n/* wait until Sn_SR is changed to SOCK_UDP */\nif (Sn_SR != SOCK_UDP) Sn_CR = CLOSE; goto START;\n}\n")),(0,r.kt)("h5",{id:"check-received-data"},"Check received data"),(0,r.kt)("p",null,"Check the reception of UDP data from destination. User can also check\nfor received data via TCP communication. It is strongly recommended to\nuse the second method because of the same reasoning from TCP. Please\nrefer to the \u201cTCP SERVER\u201d section. ",(0,r.kt)("a",{parentName:"p",href:"/Product/iEthernet/W5100S/Application-Note/tcp#tcp-server"},"TCP SERVER")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"First method :\n{\nif (Sn_IR(RECV) == \u20181\u2019) Sn_IR(RECV) = \u20181\u2019; goto Receiving Process stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond Method :\n{\nif (Sn_RX_RSR0 != 0x0000) goto Receiving Process stage;\n}\n")),(0,r.kt)("h5",{id:"receiving-process"},"Receiving process"),(0,r.kt)("p",null,"Process the received UDP data in Internal RX memory.",(0,r.kt)("br",{parentName:"p"}),"\n","The structure of received UDP data is as below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Received UDP data format",src:n(63766).Z,width:"752",height:"97"})),(0,r.kt)("p",null,"The received UDP data consists of 8bytes PACKET-INFO, and DATA packet.\nThe PACKET-INFO contains transmitter\u2019s information (IP address, Port\nnumber) and the length of DATA packet. The UDP can receive UDP data from\nmany others. User can classify the transmitter by transmitter\u2019s\ninformation of PACKET-INFO. It also receives broadcast SOCKET by using\n\u201c255.255.255.255\u201d IP address. So the host should ignore unwanted\nreception by analysis of transmitter\u2019s information. If the DATA size of\nSOCKET n is larger than Internal RX memory free size, user cannot\nreceive that DATA and also cannot receive fragmented DATA."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* Get offset address */\nsrc_ptr = Sn_RX_RD;\n/* select RX memory, refer to RMSR(Rx Memory Size Register) */\ncntl_byte = Socket_n_RX_Buffer \n/* read head information (8 bytes) */\nheader_size = 8;\n/* copy header_size bytes of get_start_address to header_address */\nfor(i=0; i<header_size; i++)\n{\n  header[i] = W5100S_READ(src_ptr, header);\n}\n/* update src_ptr */\nsrc_ptr += header_size;\n\n/* save remote peer information & received data size */\npeer_ip = header[0 to 3];\npeer_port = header[4 to 5];\nget_size = header[6 to 7];\n\n/* copy len bytes of src_ptr to destination_address */\nfor(i=0; i<get_size; i++)\n{\n  *(dst_ptr+i) = W5100S_READ(addr, cntl_byte, src_ptr+1);\n}\n/* increase Sn_RX_RD as length of len+ header_size */\nSn_RX_RD += get_size;\n/* set RECV command */\nSn_CR = RECV;\n}\n")),(0,r.kt)("h5",{id:"check-send-data--sending-process"},"Check send data / sending process"),(0,r.kt)("p",null,"The size of DATA that the user wants to transmit cannot be larger than\nInternal TX memory. If it is larger than MTU, it is automatically\ndivided by MTU unit and transmitted. The Sn","_","DIPR0 is set\n\u201c255.255.255.255\u201d when user wants to broadcast."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* first, get the free TX memory size */\nFREESIZE:\nfreesize = Sn_TX_FSR0;\nif (freesize<len) goto FREESIZE; // len is send size\n\n/* Write the value of remote_ip, remote_port to the Socket n Destination IP Address\nRegister(Sn_DIPR), Socket n Destination Port Register(Sn_DPORT). */\nSn_DIPR0 = remote_ip;\nSn_DPORT0 = remote_port;\n\n/* Get offset address */\ndst_ptr = Sn_TX_WR;\n/* select TX memory, refer to TMSR(Tx Memory Size Register) */\ncntl_byte = Socket_n_TX_Buffer \n/* copy len bytes of source_address to dst_ptr */\nfor(i=0; i<len; i++)\n{\n  W5100S_WRITE(addr, cntl_byte, dst_ptr+i);\n}\n/* increase Sn_TX_WR0 as length of len */\nSn_TX_WR += len;\n/* set SEND command */\nSn_CR = SEND;\n}\n")),(0,r.kt)("h5",{id:"check-complete-sending--timeout"},"Check complete sending / Timeout"),(0,r.kt)("p",null,"To transmit the next data, user must check that the prior SEND command\nis completed. The larger the data size, the more time to complete the\nSEND command. Therefore, the user must properly divide the data to\ntransmit. The ARP",(0,r.kt)("sub",null,"TO")," can occur when user transmits UDP data.\nIf ARP",(0,r.kt)("sub",null,"TO")," occurs, the UDP data transmission has failed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"First method :\n{\n/* check SEND command completion */\nwhile(Sn_IR(SENDOK)==\u20180\u2019) /* wait interrupt of SEND completion */\n{\n/* check ARPTO */\nif (Sn_IR(TIMEOUT)==\u20181\u2019) Sn_IR(TIMEOUT)=\u20181\u2019; goto Next stage;\n}\nSn_IR(SENDOK) = \u20181\u2019; /* clear previous interrupt of SEND completion */\n}\nSecond method :\n{\nIf (Sn_CR == 0x00) transmission is completed.\nIf (Sn_IR(TIMEOUT bit) == \u20181\u2019) goto next stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to\nInterrupt Register(IR), Interrupt Mask Register (IMR) and Socket n Interrupt Register (Sn_IR).\n*/\n}\n")),(0,r.kt)("h4",{id:"check-finished--socket-close"},"Check Finished / SOCKET close"),(0,r.kt)("p",null,"If user doesn\u2019t need the communication any more, close the SOCKET n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* clear remained interrupts */\nSn_IR = 0x00FF;\nIR(n) = \u20181\u2019;\n/* set CLOSE command */\nSn_CR = CLOSE;\n}\n")),(0,r.kt)("h3",{id:"multicast"},"Multicast"),(0,r.kt)("p",null,"The broadcast communication communicates with many and unspecified\nothers. But the multicast communication communicates with many specified\nothers who registered at a multicast-group. Suppose that A, B, and C are\nregistered at a specified multicast-group. If user transmits data to\nmulticast-group (contains A), B and C also receive the DATA for A. To\nuse multicast communication, the destination list registers to\nmulticast-group by using IGMP protocol. The multicast-group consists of\n\u2018Group hardware address,\u2019 \u2018Group IP address,\u2019 and \u2018Group port number.\u2019\nUser cannot change the \u2018Group hardware address\u2019 and \u2018Group IP address.\u2019\nBut the \u2018Group port number\u2019 can be changed.",(0,r.kt)("br",{parentName:"p"}),"\n","The \u2018Group hardware address\u2019 is selected at the assigned range (From\n\u201c01:00:5e:00:00:00\u201dto \u201c01:00:5e:7f:ff:ff\u201d) and the \u2018Group IP address\u2019\nis selected in D-class IP address (From \u201c224.0.0.0\u201d to\n\u201c239.255.255.255\u201d, please refer to the website;\n\ud83c\udf0e",(0,r.kt)("a",{parentName:"p",href:"http://www.iana.org/assignments/multicast-addresses"},"http://www.iana.org/assignments/multicast-addresses"),").",(0,r.kt)("br",{parentName:"p"}),"\n","When selecting, the upper 23bits of 6bytes \u2018Group hardware address\u2019 and\nthe 4bytes \u2018Group IP address\u2019 must be the same. For example, if the user\nselects the \u2018Group IP address\u2019 to \u201c244.1.1.11,\u201d the \u2018Group hardware\naddress\u2019 is selected to \u201c01:00:5e:01:01:0b.\u201d Please refer to the\n\u201cRFC1112\u201d (\ud83c\udf0e",(0,r.kt)("a",{parentName:"p",href:"http://www.ietf.org/rfc.html"},"http://www.ietf.org/rfc.html"),").",(0,r.kt)("br",{parentName:"p"}),"\n","In the W5100S, IGMP processing to register the multicast-group is\ninternally (automatically) processed. When the user opens the SOCKET n\nwith multicast mode, the \u201cJoin\u201d message is internally transmitted. If\nthe user closes it, the \u201cLeave\u201d message is internally transmitted. After\nthe SOCKET opens, the \u201cReport\u201d message is periodically and internally\ntransmitted when the user communicates.",(0,r.kt)("br",{parentName:"p"}),"\n","The W5100S support IGMP version 1 and version 2 only. If user wants use\nan updated version, the host processes IGMP directly by using the IPRAW\nmode SOCKET."),(0,r.kt)("h5",{id:"socket-initialization-1"},"SOCKET Initialization"),(0,r.kt)("p",null,"Choose one SOCKET for multicast communication among 4 SOCKETs of W5100S.\nSet the Sn","_","DHAR0 to \u2018Multicast-group hardware address\u2019 and set the\nSn","_","DIPR0 to \u2018Multicastgroup IP address.\u2019 Then set the Sn","_","PORT0 and\nSn","_","DPORT0 to \u2018Multicast-group port number.\u2019 Set the Sn","_","MR(P3:P0) to\nUDP and set the Sn","_","MR(MULTI) to \u20181.\u2019 Finally, execute OPEN command. If\nthe state of Sn","_","SR is changed to SOCK","_","UDP after the OPEN command, the\nSOCKET initialization is completed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{\nSTART:\n/* set Multicast-Group information */\n/* set Multicast-Group H/W address(01:00:5e:01:01:0b) */\nSn_DHAR[0:5] = {0x01,0x00,0x5e,0x01,0x01,0x0b}; \n\n/* set Multicast-Group IP address(211.1.1.11) */\nSn_DIPR[0:3] = {211,1,1,11};\n\nSn_DPORT[0:1] ={0x0B,0xB8}; /* set Multicast-GroupPort number(3000) */\nSn_PORT[0:1] = {0x0B,0xB8}; /* set SourcePort number(3000) */\nSn_MR = 0x02 | 0x80; /* set UDP mode & Multicast on Socket n Mode Register */\nSn_CR = OPEN; /* set OPEN command */\n/* wait until Sn_SR is changed to SOCK_UDP */\nif (Sn_SR != SOCK_UDP) Sn_CR = CLOSE; goto START;\n}\n")),(0,r.kt)("h5",{id:"check-received-data-1"},"Check received data"),(0,r.kt)("p",null,"Refer to the \u201cUnicast & Broadcast.\u201d section."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#unicast-and-broadcast"},"Unicast & Broadcast")),(0,r.kt)("h5",{id:"receiving-process-1"},"Receiving process"),(0,r.kt)("p",null,"Refer to the \u201cUnicast & Broadcast.\u201d section. ",(0,r.kt)("a",{parentName:"p",href:"#unicast-and-broadcast"},"Unicast & Broadcast")),(0,r.kt)("h5",{id:"check-send-data--sending-process-1"},"Check send data / Sending Process"),(0,r.kt)("p",null,"Since the user sets the information about multicast-group at SOCKET\ninitialization, user does not need to set IP address and port number for\ndestination any more. Therefore, copy the transmission data to internal\nTX memory and executes SEND command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* first, get the free TX memory size */\nFREESIZE:\nfreesize = Sn_TX_FSR;\nif (freesize<len) goto FREESIZE; // len is send size\n/* calculate offset address */\ndst_mask = Sn_TX_WR0 &gSn_TX_MASK; // dst_mask is offset address\n/* calculate start address(physical address) */\ndst_ptr = gSn_TX_BASE + dst_mask; // dst_ptr is physical start address\n/* if overflow SOCKETTX memory */\nif ( (dst_mask + len) > (gSn_TX_MASK + 1) )\n{\n/* copy upper_size bytes of source_addr to destination_address */\nupper_size = (gSn_TX_MASK + 1) ? dst_mask;\nmemcpy((0x0000 + source_addr), (0x0000 + dst_ptr), upper_size);\n/* update source_addr*/\nsource_addr += upper_size;\n/* copy left_size bytes of source_addr to gSn_TX_BASE */\nleft_size = len ? upper_size;\nmemcpy( source_addr, gSn_TX_BASE, left_size);\n}\nelse\n{\n/* copy len bytes of source_addr to dst_ptr */\nmemcpy( source_addr, dst_ptr, len);\n}\n/* increase Sn_TX_WR as length of len */\nSn_TX_WR0 += send_size;\n/* set SEND command */\nSn_CR = SEND;\n}\n")),(0,r.kt)("h5",{id:"check-complete-sending--timeout-1"},"Check complete sending / Timeout"),(0,r.kt)("p",null,"Since the host manages all protocol process for data communication,\ntimeout cannot occur."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* check SEND command completion */\nwhile(S0_IR(SENDOK)==\u20180\u2019); /* wait interrupt of SEND completion */\nS0_IR(SENDOK) = \u20181\u2019; /* clear previous interrupt of SEND completion */\n}\n")),(0,r.kt)("h5",{id:"check-finished--socket-close-1"},"Check finished / SOCKET close"),(0,r.kt)("p",null,"Refer to the \u201cUnicast & Broadcast.\u201d section. ",(0,r.kt)("a",{parentName:"p",href:"#unicast-and-broadcast"},"Unicast & Broadcast")))}u.isMDXComponent=!0},63766:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/received_udp_data-e0e149ec8f5c7d5adf6bcf1321b812c0.jpg"},981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/udp_flow-ef79aaa7b60e7be7c674fd177a99cfdd.jpg"}}]);