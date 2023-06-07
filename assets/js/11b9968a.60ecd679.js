"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[3662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>S});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,S=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return n?a.createElement(S,r(r({ref:t},d),{},{components:n})):a.createElement(S,r({ref:t},d))}));function S(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={id:"tcp",title:"W5500 TCP Function",date:new Date("2020-04-07T00:00:00.000Z")},r=void 0,s={unversionedId:"Product/iEthernet/W5500/Application/tcp",id:"Product/iEthernet/W5500/Application/tcp",title:"W5500 TCP Function",description:"By setting some register and memory operation, W5500 provides internet",source:"@site/docs/Product/iEthernet/W5500/Application/TCP.md",sourceDirName:"Product/iEthernet/W5500/Application",slug:"/Product/iEthernet/W5500/Application/tcp",permalink:"/Product/iEthernet/W5500/Application/tcp",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/Application/TCP.md",tags:[],version:"current",frontMatter:{id:"tcp",title:"W5500 TCP Function",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"W5500 Application",permalink:"/Product/iEthernet/W5500/Application/"},next:{title:"W5500 UDP Function",permalink:"/Product/iEthernet/W5500/Application/udp"}},c={},l=[{value:"Initialization",id:"initialization",level:2},{value:"Basic Setting",id:"basic-setting",level:3},{value:"Setting network information",id:"setting-network-information",level:2},{value:"Set socket memory information",id:"set-socket-memory-information",level:2},{value:"Data Communications",id:"data-communications",level:2},{value:"TCP",id:"tcp",level:2},{value:"TCP SERVER",id:"tcp-server",level:2},{value:"SOCKET Initialization",id:"socket-initialization",level:3},{value:"LISTEN",id:"listen",level:3},{value:"ESTABLISHMENT",id:"establishment",level:3},{value:"ESTABLISHMENT : Check received data",id:"establishment--check-received-data",level:3},{value:"ESTABLISHMENT : Receiving process",id:"establishment--receiving-process",level:3},{value:"ESTABLISHMENT: Check send data / Send process",id:"establishment-check-send-data--send-process",level:3},{value:"ESTABLISHMENT : Check disconnect-request(FIN packet)",id:"establishment--check-disconnect-requestfin-packet",level:3},{value:"ESTABLISHMENT : Check disconnect / disconnecting process",id:"establishment--check-disconnect--disconnecting-process",level:3},{value:"ESTABLISHMENT : Check closed",id:"establishment--check-closed",level:3},{value:"ESTABLISHMENT: Timeout",id:"establishment-timeout",level:3},{value:"SOCKET Close",id:"socket-close",level:3},{value:"TCP CLIENT",id:"tcp-client",level:2},{value:"CONNECT",id:"connect",level:3}],d={toc:l},h="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By setting some register and memory operation, W5500 provides internet\nconnectivity. This chapter describes how it can be operated."),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("p",null," You ",(0,i.kt)("strong",{parentName:"p"},"must check PHY LINK"),"\n",(0,i.kt)("em",{parentName:"p"},"(0 bit of PHYCFGR)")," ",(0,i.kt)("strong",{parentName:"p"},"before attempting to make a network connection"),"\nusing sockets. "),(0,i.kt)("h3",{id:"basic-setting"},"Basic Setting"),(0,i.kt)("p",null,"For the W5500 operation, select and utilize appropriate registers shown\nbelow."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mode Register (MR)"),(0,i.kt)("li",{parentName:"ol"},"Interrupt Mask Register (IMR)"),(0,i.kt)("li",{parentName:"ol"},"Retry Time-value Register (RTR)"),(0,i.kt)("li",{parentName:"ol"},"Retry Count Register (RCR)")),(0,i.kt)("p",null,"For more information of above registers, refer to the \u201cRegister\nDescriptions.\u201d"),(0,i.kt)("h2",{id:"setting-network-information"},"Setting network information"),(0,i.kt)("p",null,"Basic network information setting for communication: It must be set the\nbasic network information."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"SHAR(Source Hardware Address Register)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is prescribed that the source hardware addresses, which is\nset by SHAR, use unique hardware addresses (Ethernet MAC\naddress) in the Ethernet MAC layer. The IEEE manages the MAC\naddress allocation. The manufacturer which produces the network\ndevice allocates the MAC address to product."),(0,i.kt)("li",{parentName:"ul"},"Details on MAC address allocation refer to the website as below."),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://www.ieee.org/"},"http://www.ieee.org/")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,i.kt)("a",{parentName:"li",href:"http://standards.ieee.org/regauth/oui/index.shtml"},"http://standards.ieee.org/regauth/oui/index.shtml")))),(0,i.kt)("li",{parentName:"ol"},"GAR(Gateway Address Register)"),(0,i.kt)("li",{parentName:"ol"},"SUBR(Subnet Mask Register)"),(0,i.kt)("li",{parentName:"ol"},"SIPR(Source IP Address Register)")),(0,i.kt)("h2",{id:"set-socket-memory-information"},"Set socket memory information"),(0,i.kt)("p",null,"This stage sets the socket tx/rx memory information. The base address\nand mask address of each socket are fixed and saved in this stage."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"In case of, assign 2KB rx, tx memroy per SOCKET"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"In case of, assign 2KB rx, tx memory per SOCKET\n{\nSn_RXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET\nSn_TXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET\n\n/* Same method, set gS1_TX_BASE, gS1_TX_MASK, gS2_TX_BASE, gS2_TX_MASK,\ngS3_TX_BASE, gS3_TX_MASK, gS4_TX_BASE, gS4_TX_MASK, gS5_TX_BASE, gS5_TX_MASK,\ngS6_TX_BASE, gS6_tx_MASK, gS7_TX_BASE, gS7_TX_MASK */\n}\n")),(0,i.kt)("h2",{id:"data-communications"},"Data Communications"),(0,i.kt)("p",null,"After the initialization process, W5500 can transmit and receive the\ndata with others by \u2018open\u2019 the SOCKET of TCP, UDP, IPRAW, and MACRAW\nmode. The W5500 supports the independently and simultaneously usable 8\nSOCKETS. In this section, the communication method for each mode will be\nintroduced."),(0,i.kt)("h2",{id:"tcp"},"TCP"),(0,i.kt)("p",null,"The TCP is a connection-oriented protocol. The TCP make the connection\nSOCKET by using its own IP address, port number and destination IP\naddress, port number. Then transmits and receives the data by using this\nSOCKET. Methods of making the connection to SOCKET are \u201cTCP SERVER\u201d and\n\u201cTCP CLIENT\u201d. It is divided by transmitting the connect-request (SYN\npacket). The \u201cTCP SERVER\u201d listens to the connect-request from the \u201cTCP\nCLIENT\u201d, and makes connection SOCKET by accepting the transmitted\nconnect-request (Passive-open). The \u201cTCP CLIENT\u201d transmits the\nconnect-request first to \u201cTCP SERVER\u201d to make the connection\n(Active-open)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TCP SERVER and TCP CLIENT",src:n(8646).Z,width:"869",height:"586"})),(0,i.kt)("h2",{id:"tcp-server"},"TCP SERVER"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TCP SERVER Operation Flow",src:n(65326).Z,width:"614",height:"564"})),(0,i.kt)("h3",{id:"socket-initialization"},"SOCKET Initialization"),(0,i.kt)("p",null,"SOCKET initialization is required for TCP data communication. The\ninitialization is opening the SOCKET. The SOCKET opening process selects\none SOCKET from 8 SOCKETS of the W5500, and sets the protocol mode\n(Sn","_","MR) and Sn","_","PORT0 which is source port number (Listen port number\nin \u201cTCP SERVER\u201d) in the selected SOCKET, and then executes OPEN command.\nAfter the OPEN command, if the status of Sn","_","SR is changed to\nSOCK","_","INIT, the SOCKET initialization process is completed. The SOCKET\ninitialization process is identically applied in \u201cTCP SERVER\u201d and \u201cTCP\nCLIENT.\u201dThe Initialization process of Socket n in TCP mode is shown\nbelow."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"{\nSTART:\nSn_MR = 0x01; // sets TCP mode\nSn_PORT0 = source_port; // sets source port number\nSn_CR = OPEN; // sets OPEN command\n/* wait until Sn_SR is changed to SOCK_INIT */\nif (Sn_SR != SOCK_INIT) Sn_CR = CLOSE; goto START;\n}\n")),(0,i.kt)("p",null," After W5500 ",(0,i.kt)("strong",{parentName:"p"},"accepts the\ncommand, the Sn","_","CR register is automatically cleared to 0x00"),". Even\nthough Sn","_","CR is cleared to 0x00, the command is still being processed.\n",(0,i.kt)("em",{parentName:"p"},"To check whether the command is completed or not, please check the\nSn","_","IR or Sn","_","SR.")),(0,i.kt)("h3",{id:"listen"},"LISTEN"),(0,i.kt)("p",null,"Run as \u201cTCP SERVER\u201d by LISTEN command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* listen SOCKET */\nSn_CR = LISTEN;\n/* wait until Sn_SR is changed to SOCK_LISTEN */\nif (Sn_SR != SOCK_LISTEN) Sn_CR = CLOSE; goto START;\n}\n")),(0,i.kt)("h3",{id:"establishment"},"ESTABLISHMENT"),(0,i.kt)("p",null,"When the status of Sn","_","SR is SOCK","_","LISTEN, if it receives a SYN packet,\nthe status of Sn","_","SR is changed to SOCK","_","SYNRECV and transmits the\nSYN/ACK packet. After that, the Socket n makes a connection. After it\nmakes the connection of Socket n , it enables the data communication.\nThere are two methods to confirm the connection of Socket n ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"First method :\n{\nif (Sn_IR(CON) == \u20181\u2019)\n/* When an interrupt occurs and the mask bit of Sn_IMR is \u20181\u2019, the interrupt bit of Sn_IR\nbecomes \u20181\u2019 */\nSn_IR(CON) = \u20181\u2019;\n/*In order to clear the Sn_IR bit, the host should write the bit as \u20181\u2019. When all the bits of\nSn_IR is cleared (\u20180\u2019), IR(n) is automatically cleared.*/\ngoto ESTABLISHED stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond method :\n{\nif (Sn_SR == SOCK_ESTABLISHED) goto ESTABLISHED stage;\n}\n")),(0,i.kt)("h3",{id:"establishment--check-received-data"},"ESTABLISHMENT : Check received data"),(0,i.kt)("p",null,"Confirm the reception of the TCP data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"First method :\n{\nif (Sn_IR(RECV) == \u20181\u2019) Sn_IR(RECV) = \u20181\u2019; goto Receiving Process stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond Method :\n{\nif (Sn_RX_RSR0 != 0x0000) goto Receiving Process stage;\n}\n")),(0,i.kt)("p",null,"The First method: set the Sn","_","IR(RECV) to \u20181\u2019 whenever you receive a\nDATA packet. If the host receives the next DATA packet without setting\nthe Sn","_","IR(RECV) as \u20181\u2019 in the prior DATA packet, it cannot recognize\nthe Sn","_","IR(RECV) of the next DATA packet. This is due to the prior\nSn","_","IR(RECV) and next Sn","_","IR(RECV) being overlapped. So this method is\nnot recommended if the host cannot perfectly process the DATA packets of\neach Sn","_","IR(RECV)."),(0,i.kt)("h3",{id:"establishment--receiving-process"},"ESTABLISHMENT : Receiving process"),(0,i.kt)("p",null,"In this process, it processes the TCP data which was received in the\nInternal RX memory. At the TCP mode, the W5500 cannot receive the data\nif the size of received data is larger than the RX memory free size of\nSocket n . If the prior stated condition is happened, the W5500 holds on\nto the connection (pauses), and waits until the RX memory\u2019s free size is\nlarger than the size of the received data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* first, get the received size */\nlen = Sn_RX_RSR; // len is received size\n/* select RX memory, refer to Datasheet 14 page */\ncntl_byte = Socket_n_RX_Buffer \n/* Get offset address */\nsrc_ptr = Sn_RX_RD;\n/* set memory copy len bytes of source_ptr to destination_address */\nfor (i=0; i<len; i++)\n{\n   *(dst_ptr+i) = W5500_READ(addr, cntl_byte, src_ptr+i);\n}\n/* increase Sn_RX_RD as length of len */\nSn_RX_RD += len;\n/* set RECV command */\nSn_CR = RECV;\n}\n")),(0,i.kt)("h3",{id:"establishment-check-send-data--send-process"},"ESTABLISHMENT: Check send data / Send process"),(0,i.kt)("p",null,"The size of the transmit data cannot be larger than assigned internal TX\nmemory of Socket n. If the size of transmit data is larger than\nconfigured MSS, it is divided by size of MSS and transmits. To transmit\nthe next data, user must check the completion of prior SEND command. An\nerror may occur if the SEND command executes before completion of prior\nSEND command. The larger the data size, the more time to complete the\nSEND command. So the user should properly divide the data to transmit.",(0,i.kt)("br",{parentName:"p"}),"\n","To check the completion of the SEND command, it should be check that the\nsend data length is equal with the actual sent data length. The actual\nsent data length is calculated by the difference of the Sn","_","TX","_","RD\nbefore and after performing the SEND command. If the actual sent data is\nless than the send data length, the SEND command is retried for sending\nthe left data. The send process is therefore completed the SENDwhen the\nsum of the actual sent data is equal the send data length. A simple\nexample of the send process is as below",(0,i.kt)("br",{parentName:"p"}),"\n","Ex) Send Data Length Size= 10,",(0,i.kt)("br",{parentName:"p"}),"\n","-"," ",(0,i.kt)("strong",{parentName:"p"},"Execute SEND Command with send data length")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Calculate the actual sent data length"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the actual sent data length is 7 (=\nSn","_","TX","_","RD","_","after","_","SEND-Sn","_","TX","_","RD","_","befor","_","SEND),"),(0,i.kt)("li",{parentName:"ul"},"the left Data length= 3"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Retry SEND Command until the sum of the actual sent data length is\nsame the send data length."),(0,i.kt)("br",{parentName:"li"}),"Note: Don\u2019t copy data until the sum of the actual sent data length\nis the send data length.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* first, get the free TX memory size */\nFREESIZE:\nfreesize = Sn_TX_FSR;\nif (freesize<len) goto FREESIZE; // len is send size\n\n/* select TX memory, refer to Datasheet 14 page */\ncntl_byte = Socket_n_TX_Buffer \n/* Get offset address */\ndst_ptr = Sn_TX_RD;\n/* set memory copy len bytes of source_ptr to destination_address */\nfor (i=0; i<len; i++)\n{\n   W5500_WRITE(addr, cntl_byte, dst_ptr+i);\n}\n\n/* increase Sn_TX_WR as length of len */\nSn_TX_WR += send_size;\n/* set SEND command */\nSn_CR = SEND;\n/* return real packet size */\nreturn len;\n}\n")),(0,i.kt)("h3",{id:"establishment--check-disconnect-requestfin-packet"},"ESTABLISHMENT : Check disconnect-request(FIN packet)"),(0,i.kt)("p",null,"Check if the Disconnect-request(FIN packet) has been received. User can\nconfirm the reception of FIN packet as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"First method :\n{\nif (Sn_IR(DISCON) == \u20181\u2019) Sn_IR(DISCON)=\u20181\u2019; goto CLOSED stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond method :\n{\nif (Sn_SR == SOCK_CLOSE_WAIT) goto CLOSED stage;\n}\n")),(0,i.kt)("h3",{id:"establishment--check-disconnect--disconnecting-process"},"ESTABLISHMENT : Check disconnect / disconnecting process"),(0,i.kt)("p",null,"When the user does not need data communication with others, or receives\na FIN packet, disconnect the connection SOCKET."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* set DISCON command */\nSn_CR = DISCON;\n}\n")),(0,i.kt)("h3",{id:"establishment--check-closed"},"ESTABLISHMENT : Check closed"),(0,i.kt)("p",null,"Confirm that the Socket n is disconnected or closed by DISCON or close\ncommand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"First method :\n{\nif (Sn_IR(DISCON) == \u20181\u2019) goto CLOSED stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond method :\n{\nif (Sn_SR == SOCK_CLOSED) goto CLOSED stage;\n}\n")),(0,i.kt)("h3",{id:"establishment-timeout"},"ESTABLISHMENT: Timeout"),(0,i.kt)("p",null,"The timeout can occur by Connect-request(SYN packet) or its\nresponse(SYN/ACK packet), the DATA packet or its response(DATA/ACK\npacket), the Disconnect request FIN packet) or its response(FIN/ACK\npacket) and transmission all TCP packet. If it cannot transmit the above\npackets within \u2018timeout\u2019 which is configured at RTR and RCR, the TCP\nfinal timeout(TCP",(0,i.kt)("sub",null,"TO"),") occurs and the state of Sn","_","SR is set to\nSOCK","_","CLOSED. Confirming method of the TCP",(0,i.kt)("sub",null,"TO")," is as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"First method :\n{\nif (Sn_IR(TIMEOUT bit) == \u20181\u2019) Sn_IR(TIMEOUT)=\u20181\u2019; goto CLOSED stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond method :\n{\nif (Sn_SR == SOCK_CLOSED) goto CLOSED stage;\n}\n")),(0,i.kt)("h3",{id:"socket-close"},"SOCKET Close"),(0,i.kt)("p",null,"It can be used to close the Socket n , which disconnected by\ndisconnect-process, or closed by TCP",(0,i.kt)("sub",null,"TO")," or closed by host\u2019s\nneed without disconnect-process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"{\n/* clear the remained interrupts of Socket n */\nSn_IR = 0xFF;\nIR(n) = \u20181\u2019;\n/* set CLOSE command */\nSn_CR = CLOSE;\n}\n")),(0,i.kt)("h2",{id:"tcp-client"},"TCP CLIENT"),(0,i.kt)("p",null,'It is same as TCP server except \u2018CONNECT\u2019 state. User can refer to the\nabove "TCP SERVER\u201d section.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TCP CLIENT Operation Flow",src:n(23071).Z,width:"624",height:"529"})),(0,i.kt)("h3",{id:"connect"},"CONNECT"),(0,i.kt)("p",null,"Transmit the connect-request (SYN packet) to \u201cTCP SERVER\u201d. It may occurs\nthe timeout such as ARP",(0,i.kt)("sub",null,"TO"),", TCP",(0,i.kt)("sub",null,"TO")," when make the\n\u201cconnection SOCKET\u201d with \u201cTCP SERVER\u201d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"{\nSn_DIPR0 = server_ip; /* set TCP SERVER IP address*/\nSn_DPORT0 = server_port; /* set TCP SERVER listen port number*/\nSn_CR = CONNECT; /* set CONNECT command */\n}\n")))}p.isMDXComponent=!0},23071:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/client_flow-04da672c829305cf8744e516eea840c0.jpg"},65326:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/server_flow-6cf61961e097a0578af9ed20276e28bd.jpg"},8646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/serverclient-908557ee7b67f55d5fb06eb580113be1.jpg"}}]);