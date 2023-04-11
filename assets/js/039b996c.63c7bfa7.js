"use strict";(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),h=a,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(44996);const o={id:"asg210-running-application",title:"Running Application",date:new Date("2021-06-03T00:00:00.000Z")},p=void 0,l={unversionedId:"Product/Azure-Sphere/asg210-running-application",id:"Product/Azure-Sphere/asg210-running-application",title:"Running Application",description:"This section describes how to run Dual-Ethernet Application on ASG210 (For the more details, please refer to Dual Ethernet Operating System Block Diagram. ASG210 Dual-Ethernet Application consists of High-level application and Real-time capable application.",source:"@site/docs/Product/Azure-Sphere/Running-application.md",sourceDirName:"Product/Azure-Sphere",slug:"/Product/Azure-Sphere/asg210-running-application",permalink:"/Product/Azure-Sphere/asg210-running-application",draft:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Azure-Sphere/Running-application.md",tags:[],version:"current",frontMatter:{id:"asg210-running-application",title:"Running Application",date:"2021-06-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/Product/Azure-Sphere/asg210-getting-started"},next:{title:"iMCU",permalink:"/Product/iMCU/"}},u={},c=[{value:"Step 1. Clone repository",id:"step-1-clone-repository",level:2},{value:"Step 2. Network configuration",id:"step-2-network-configuration",level:2},{value:"Step 3. Real-time Capable Application",id:"step-3-real-time-capable-application",level:2},{value:"Set Local Network Information",id:"set-local-network-information",level:3},{value:"Set up Static network",id:"set-up-static-network",level:4},{value:"Set up DHCP network",id:"set-up-dhcp-network",level:4},{value:"Build and download",id:"build-and-download",level:3},{value:"Step 4. Set High-Level application",id:"step-4-set-high-level-application",level:2},{value:"Set up Azure IoT Hub for ASG210",id:"set-up-azure-iot-hub-for-asg210",level:3},{value:"Set Azure Cloud Parameters",id:"set-azure-cloud-parameters",level:3},{value:"Azure DPS Scope ID",id:"azure-dps-scope-id",level:4},{value:"Azure IoT Hub endpoint URL",id:"azure-iot-hub-endpoint-url",level:4},{value:"Azure Sphere Tenant ID",id:"azure-sphere-tenant-id",level:4},{value:"Set Wi-Fi Information",id:"set-wi-fi-information",level:3},{value:"Set up Public Ethernet interface",id:"set-up-public-ethernet-interface",level:3},{value:"Build and download",id:"build-and-download-1",level:3},{value:"Step 5. Check application operation",id:"step-5-check-application-operation",level:2},{value:"Send data to ASG210 from Local Network",id:"send-data-to-asg210-from-local-network",level:3},{value:"Check the data in Azure Cloud",id:"check-the-data-in-azure-cloud",level:3},{value:"Auto Switch in ASG210 Network Interface",id:"auto-switch-in-asg210-network-interface",level:3}],s={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to run Dual-Ethernet Application on ASG210 (For the more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/Product/Azure-Sphere/asg210-datasheet#dual-ethernet-operating-system-block-diagram"},"Dual Ethernet Operating System Block Diagram"),". ASG210 Dual-Ethernet Application consists of High-level application and Real-time capable application."),(0,a.kt)("h2",{id:"step-1-clone-repository"},"Step 1. Clone repository"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WIZnet-Azure-Sphere/ASG210_App"},"repository")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ git clone https://github.com/WIZnet-Azure-Sphere/ASG210_App\n")),(0,a.kt)("h2",{id:"step-2-network-configuration"},"Step 2. Network configuration"),(0,a.kt)("p",null,"This application sends local data to Azure cloud. User should configure ASG210 connection to Local network and Global network as shown below."),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/network_config.png"),width:"750"}),(0,a.kt)("h2",{id:"step-3-real-time-capable-application"},"Step 3. Real-time Capable Application"),(0,a.kt)("h3",{id:"set-local-network-information"},"Set Local Network Information"),(0,a.kt)("p",null,"To run Real-time capable application, user should set Local Network information. User can select static network and DHCP network."),(0,a.kt)("h4",{id:"set-up-static-network"},"Set up Static network"),(0,a.kt)("p",null,"User can set up static network in ASG210_RTApp code. Go to this directory in ASG210_App, ASG210_App/Software/ASG210_RTApp_W5500_SPI_BareMetal and open main.c. Enable ",(0,a.kt)("strong",{parentName:"p"},"#define NETINFO_USE_MANUAL")," and set local network information."),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/static_network.png"),width:"750"}),(0,a.kt)("h4",{id:"set-up-dhcp-network"},"Set up DHCP network"),(0,a.kt)("p",null,"User can set up DHCP network in ASG210_RTApp code. Go to this directory in ASG210_App, ASG210_App/Software/ASG210_RTApp_W5500_SPI_BareMetal and open main.c. Disable ",(0,a.kt)("strong",{parentName:"p"},"#define NETINFO_USE_MANUAL"),"."),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/dhcp_network.png"),width:"750"}),(0,a.kt)("h3",{id:"build-and-download"},"Build and download"),(0,a.kt)("p",null,"From the Select Startup Item menum on the tool bar, select GDB Debugger (RTCore). Click Build All on Build menu. Press F5 or Click Startup Item to start the RT application with debugging.\n(Please check Azure Sphere Development mode with Azure Sphere Developer Command Prompt.)"),(0,a.kt)("p",null,"Prepare Azure Sphere development mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azsphere device enable-development\n")),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/rtapp_debugging.png"),width:"750"}),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/initiall_rtapp_serialdata.png"),width:"750"}),(0,a.kt)("h2",{id:"step-4-set-high-level-application"},"Step 4. Set High-Level application"),(0,a.kt)("h3",{id:"set-up-azure-iot-hub-for-asg210"},"Set up Azure IoT Hub for ASG210"),(0,a.kt)("p",null,"To run this application, user should set up user\u2019s own Azure IoT Hub service for ASG210. In this link, it describes how to create Azure IoT Hub and DPS service, then guides ASG210 authentication using DPS service."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure-sphere/app-development/setup-iot-hub"},"https://docs.microsoft.com/en-us/azure-sphere/app-development/setup-iot-hub")),(0,a.kt)("h3",{id:"set-azure-cloud-parameters"},"Set Azure Cloud Parameters"),(0,a.kt)("p",null,"To connect Azure Cloud, user must fullfil the parameters about Azure IoT Hub, DPS and Tenant ID on app_manifest.json in ASG210_HLApp."),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/cloud_parameters.png"),width:"750"}),(0,a.kt)("h4",{id:"azure-dps-scope-id"},"Azure DPS Scope ID"),(0,a.kt)("p",null,"Copy the ID Scope from Device Provisioning Service in Azure Portal."),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/scope_id.png"),width:"750"}),(0,a.kt)("h4",{id:"azure-iot-hub-endpoint-url"},"Azure IoT Hub endpoint URL"),(0,a.kt)("p",null,"Copy the IoT Hub endpoint URL from IoT Hun in Azure Portal."),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/iothub_endpoint.png"),width:"750"}),(0,a.kt)("h4",{id:"azure-sphere-tenant-id"},"Azure Sphere Tenant ID"),(0,a.kt)("p",null,"Copy the Azure Sphere Tenant ID from Azure Sphere Developer Command Prompt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azsphere tenant show-selected\n")),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/tenant_id.png"),width:"750"}),(0,a.kt)("h3",{id:"set-wi-fi-information"},"Set Wi-Fi Information"),(0,a.kt)("p",null,"ASG210 supports auto switching between Public Ethernet and Wi-Fi. Public Ethernet interface has high priority. Please refer ",(0,a.kt)("a",{parentName:"p",href:"/Product/Azure-Sphere/asg210-getting-started#configuration-wi-fi-network-settings"},"Configuration Wi-Fi Network Settings"),"."),(0,a.kt)("h3",{id:"set-up-public-ethernet-interface"},"Set up Public Ethernet interface"),(0,a.kt)("p",null,"To enable ethernet interface for public network and communication with Azure IoT, install ethernet imagepackage by deploying a board configuration image to ASG210. The board configuration image contains information that the Azure Sphere Security Service requires to add support for Ethernet to the Azure Sphere OS."),(0,a.kt)("p",null,"Follow these steps to enable public ethernet interface:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a board configuration image package")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azsphere image-package pack-board-config \u2013-preset lan-enc28j60-isu0-int5 \u2013-output \n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Prepare ASG210 for development mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azsphere device enable-development\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sideload a board configuration image package")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Check the sideloaded imagepackage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azsphere device image list-installed\n")),(0,a.kt)("h3",{id:"build-and-download-1"},"Build and download"),(0,a.kt)("p",null,"From the Select Startup Item menum on the tool bar, select GDB Debugger (HLCore). Click Build All on Build menu. Press F5 or Click Startup Item to start the HL application with debugging.\n(Please check Azure Sphere Development mode with Azure Sphere Developer Command Prompt.)"),(0,a.kt)("p",null,"Prepare Azure Sphere development mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azsphere device enable-development\n")),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/start_hl_app.png"),width:"750"}),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/debugging_message.png"),width:"750"}),(0,a.kt)("h2",{id:"step-5-check-application-operation"},"Step 5. Check application operation"),(0,a.kt)("h3",{id:"send-data-to-asg210-from-local-network"},"Send data to ASG210 from Local Network"),(0,a.kt)("p",null,"Set user device network address range and connect to ASG210 network address in Local network with TCP Client. After connection between user device and ASG210, user device can send JSON format data to transmit it to Azure Cloud through ASG210. "),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/network_address.png"),width:"750"}),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/send_json.png"),width:"750"}),(0,a.kt)("h3",{id:"check-the-data-in-azure-cloud"},"Check the data in Azure Cloud"),(0,a.kt)("p",null,"ASG210 sends user device data to Azure Cloud. User can check the data sent from user device in Azure Cosmos DB or Storage. "),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/azure_cosmosdb.png"),width:"750"}),(0,a.kt)("h3",{id:"auto-switch-in-asg210-network-interface"},"Auto Switch in ASG210 Network Interface"),(0,a.kt)("p",null,"This application supports auto switching network interface to guarantee Azure Cloud connection. If Ethernet connection is not working anymore, ASG210 switches from Ethernet to Wi-Fi interface and re-connects to Azure Cloud. (Vice versa works as well.)"),(0,a.kt)("img",{src:(0,i.Z)("img/AzureSphere/running_app/autonetwork_switching.png"),width:"750"}))}h.isMDXComponent=!0}}]);