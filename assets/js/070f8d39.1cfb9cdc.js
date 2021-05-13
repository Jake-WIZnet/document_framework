(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[31985],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return p}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72915:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var i=n(74034),r=n(79973),a=(n(67294),n(3905)),o={id:"mqtt_example",title:"WizFi310 MQTT Example",date:new Date("2020-04-15T00:00:00.000Z")},l={unversionedId:"Product/Wi-Fi-Module/WizFi310/Programers-Guide/mqtt_example",id:"Product/Wi-Fi-Module/WizFi310/Programers-Guide/mqtt_example",isDocsHomePage:!1,title:"WizFi310 MQTT Example",description:"MQTT",source:"@site/docs/Product/Wi-Fi-Module/WizFi310/Programers-Guide/mqtt_example.md",sourceDirName:"Product/Wi-Fi-Module/WizFi310/Programers-Guide",slug:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/mqtt_example",permalink:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/mqtt_example",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi310/Programers-Guide/mqtt_example.md",version:"current",frontMatter:{id:"mqtt_example",title:"WizFi310 MQTT Example",date:"2020-04-15T00:00:00.000Z"},sidebar:"docs",previous:{title:"WizFi310 ThingPlug Example",permalink:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/thingplug_example"},next:{title:"Quick Start Guide",permalink:"/Product/Wi-Fi-Module/WizFi310/quick_start_guide"}},u=[{value:"MQTT",id:"mqtt",children:[]},{value:"How to use MQTT in WizFi310",id:"how-to-use-mqtt-in-wizfi310",children:[{value:"MQTT AT Command Set",id:"mqtt-at-command-set",children:[]},{value:"Example AT Command",id:"example-at-command",children:[]}]},{value:"MQTT Example",id:"mqtt-example",children:[{value:"Setup the Broker",id:"setup-the-broker",children:[]},{value:"Make Topic",id:"make-topic",children:[]},{value:"Connect to Adafruit Broker",id:"connect-to-adafruit-broker",children:[]},{value:"Publish the message",id:"publish-the-message",children:[]},{value:"Display the message in io.adafruit.com",id:"display-the-message-in-ioadafruitcom",children:[]}]}],s={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"mqtt"},"MQTT"),(0,a.kt)("p",null,'MQTT is a light weight messaging protocol for use on top of the TCP/IP\nprotocol. It is designed for connections with remote locations where a\n"small code footprint" is required or the network bandwidth is\nlimited.',(0,a.kt)("br",{parentName:"p"}),"\n","It is a communication protocol which almost can link all networked\nobjects with the external, and it is used as a sensor.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MQTT"},"Wikipedia"),"  "),(0,a.kt)("h2",{id:"how-to-use-mqtt-in-wizfi310"},"How to use MQTT in WizFi310"),(0,a.kt)("h3",{id:"mqtt-at-command-set"},"MQTT AT Command Set"),(0,a.kt)("p",null,"There are the necessary Commands for MQTT protocol in the WizFi310.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AT+MQTTSET=<UserName>,<Password>,<ClientID>,<AliveTime>  \nAT+MQTTCON=<Con/Discon>,<BrokerIP>,<BrokerPort>,<SSL_Enable>  \nAT+MQTTSUB=<Sub/Unsub>,<Topic>  \nAT+MQTTPUB=<Topic>,<Length>  \n")),(0,a.kt)("p",null,"You can find the detailed description about the AT Commands for MQTT\nat the link below.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/products/wizfi310/wizfi310pg/at_command_set-mqtt_commands"},"AT Commands list for MQTT")),(0,a.kt)("h3",{id:"example-at-command"},"Example AT Command"),(0,a.kt)("h4",{id:"connection"},"Connection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to Broker with non SSL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Already Joined AP.\n    \nAT+MQTTSET=wiznet,8df22daf1fc8427999953b796cdfb1df,wizfi310,60\n[OK]\nAT+MQTTCON=1,52.70.203.194,1883,0\n    \n[MQTT CONNECT]\n[OK]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to Broker with SSL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Already Joined AP.\n    \nAT+MQTTSET=wiznet,8df22daf1fc8427999953b796cdfb1df,wizfi310_ssl,60\n[OK]\nAT+MQTTCON=1,52.70.203.194,8883,1\n    \n[MQTT CONNECT]\n[OK]\n")),(0,a.kt)("h4",{id:"subscribe--unsubscribe"},"Subscribe & Unsubscribe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Subscribe & Receive Message")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Already Connected with MQTT broker.\n    \nAT+MQTTSUB=1,wiznet/f/WizFi310\n[OK]\n...\nwhen the message received.\n...\n{Q,wiznet/f/WizFi310,,9}test_data\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unsubscribe")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Already Connected with MQTT broker.\n\nAT+MQTTSUB=0,wiznet/f/WizFi310\n[OK]\n\n")),(0,a.kt)("h4",{id:"publish"},"Publish"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Already Connected with MQTT broker.\n\nAT+MQTTPUB=wiznet/f/WizFi310,3\n[3]\n...\nInput 3bytes to Serial interface.\n...\n[OK]\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"mqtt-example"},"MQTT Example"),(0,a.kt)("h3",{id:"setup-the-broker"},"Setup the Broker"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://io.adafruit.com/"},"Adafruit")," Broker would be used at this\nExample. Adafruit MQTT broker can support non SSL and SSL Connection and\nthe Adafruit shows the collected data as the Dashboard.  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/adafruit-io/mqtt-api"},"Adafruit MQTT API\nGuide"),"  "),(0,a.kt)("h3",{id:"make-topic"},"Make Topic"),(0,a.kt)("p",null,"Create the Feeds in Adafruit. it is equal to Topic in MQTT.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:n(93959).Z}),"\n",(0,a.kt)("img",{src:n(4870).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","Then, You can see the graph that was made up of raw data.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:n(57509).Z})),(0,a.kt)("h3",{id:"connect-to-adafruit-broker"},"Connect to Adafruit Broker"),(0,a.kt)("p",null,"Before connection, you have to know the information about below.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Username"),(0,a.kt)("li",{parentName:"ul"},"Adafruit AIO Key"),(0,a.kt)("li",{parentName:"ul"},"Adafruit IP & Port")),(0,a.kt)("h4",{id:"adafruit-username"},"Adafruit Username"),(0,a.kt)("p",null,"It is a username registered in Adafruit.  "),(0,a.kt)("h4",{id:"adafruit-aio-key"},"Adafruit AIO Key"),(0,a.kt)("p",null,'It is an authentication key for connection to broker. It can be found in\n"VIEW AIO KEYS" button.',(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:n(252).Z}),"  "),(0,a.kt)("h4",{id:"adafruit-ip--port"},"Adafruit IP & Port"),(0,a.kt)("p",null,"It is a information about Connection."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can see the IP address using ",(0,a.kt)("strong",{parentName:"li"}," AT+FDNS=io.adafruiot.com ")," Command."),(0,a.kt)("li",{parentName:"ul"},"non SSL Port is ",(0,a.kt)("strong",{parentName:"li"}," 1883 "),", or SSL Port is ",(0,a.kt)("strong",{parentName:"li"}," 8883 "),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," There are AT Commands for setting up the WizFi310. That is used\nwhen using above information and non SSL connection. "),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AT+FDNS=io.adafruit.com,3000\n52.70.203.194\n[OK]\nAT+MQTTSET=wiznet,8df22daf1fc8427999953b796cdfb1df,wiznet_1,60\n[OK]\nAT+MQTTCON=1,52.70.203.194,8883,1\n    \n[MQTT CONNECT]\n[OK]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Client ID(wiznet","_","1) is identifier of each MQTT Client and it\nshould be unique per broker. "),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"KeepAlive time(60 seconds)"),"  "),(0,a.kt)("h3",{id:"publish-the-message"},"Publish the message"),(0,a.kt)("p",null,"Adafruit IO's MQTT API exposes feed data using special topics. You can\npublish a new value for a feed to its topic, or you can subscribe to a\nfeed's topic to be notified when the feed has a new value. Any one of\nthe following topic forms is valid for a feed",(0,a.kt)("br",{parentName:"p"}),"\n","For Examples."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"wiznet/feeds/WizFi310"),(0,a.kt)("li",{parentName:"ul"},"wiznet/f/WizFi310")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AT+MQTTPUB=wiznet/f/WizFi310,4\n[4]\n...\nInput 4bytes to Serial interface.\n...\n[OK]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 2nd parameter of AT+MQTTPUB command is '4'. it means that you can publish the 4 byte. ")),(0,a.kt)("h3",{id:"display-the-message-in-ioadafruitcom"},"Display the message in io.adafruit.com"),(0,a.kt)("p",null,"You can see the published data in io.adafruit.com."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6820).Z})))}d.isMDXComponent=!0},93959:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1_feeds-4e8af76b3d3851c9f2c3bf3ac360f114.png"},4870:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2_newfeed-c1b43ad06581f4dcaec0d5611031b9cb.png"},57509:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3_create_aio_key_1-6621660c16f141ad7d9f510567135cbc.png"},252:function(e,t,n){"use strict";t.Z=n.p+"assets/images/4_create_aio_key_2-8823017364bfaedad82241943af97739.png"},6820:function(e,t,n){"use strict";t.Z=n.p+"assets/images/5_display_value-1e6c9d56edc60a2d4d351d8e2af02ef8.png"}}]);