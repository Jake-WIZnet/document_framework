(window.webpackJsonp=window.webpackJsonp||[]).push([[210,211],{266:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(591),c=t(596),o=t(584);a.default=function(e){var a=e.metadata,t=e.items,n=a.allTagsPath,m=a.name,i=a.count;return r.a.createElement(l.a,{title:'Posts tagged "'+m+'"',description:'Blog | Tagged "'+m+'"'},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',m,'"'),r.a.createElement(o.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}},592:function(e,a,t){"use strict";var n=t(2),r=t(0),l=t.n(r),c=t(20),o=t(583),m=t(588),i=t(585),s=t(584),u=t(586),g=t(590),d=t(649),h=t(650),E=null;function b(e){var a=e.hit,t=e.children;return l.a.createElement(s.a,{to:a.url},t)}function f(e){var a=e.state,t=e.onClose,n=Object(g.a)().generateSearchPageLink;return l.a.createElement(s.a,{to:n(a.query),onClick:t},"See all ",a.context.nbHits," results")}function v(e){var a=Object(o.a)().siteMetadata,s=Object(i.b)().withBaseUrl,g=Object(m.useHistory)(),v=Object(r.useRef)(null),p=Object(r.useState)(!1),O=p[0],k=p[1],j=Object(r.useState)(null),N=j[0],w=j[1],_=Object(r.useCallback)((function(){return E?Promise.resolve():Promise.all([t.e(527).then(t.bind(null,594)),Promise.all([t.e(0),t.e(528)]).then(t.bind(null,593)),t.e(0).then(t.t.bind(null,47,7))]).then((function(e){var a=e[0].DocSearchModal;E=a}))}),[]),y=Object(r.useCallback)((function(){_().then((function(){k(!0)}))}),[_,k]),C=Object(r.useCallback)((function(){k(!1)}),[k]),P=Object(r.useCallback)((function(e){_().then((function(){k(!0),w(e.key)}))}),[_,k,w]);return Object(d.a)({isOpen:O,onOpen:y,onClose:C,onInput:P,searchButtonRef:v}),l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),l.a.createElement(h.a,{onTouchStart:_,onFocus:_,onMouseOver:_,onClick:y,ref:v}),O&&Object(c.createPortal)(l.a.createElement(E,Object(n.a)({onClose:C,initialScrollY:window.scrollY,initialQuery:N,navigator:{navigate:function(e){var a=e.suggestionUrl;g.push(a)}},transformItems:function(e){return e.map((function(e){var a=document.createElement("a");return a.href=e.url,Object.assign({},e,{url:s(""+a.pathname+a.hash)})}))},hitComponent:b,resultsFooterComponent:function(e){return l.a.createElement(f,Object(n.a)({},e,{onClose:C}))},transformSearchClient:function(e){return e.addAlgoliaAgent("docusaurus",a.docusaurusVersion),e}},e)),document.body))}a.a=function(){var e=Object(o.a)().siteConfig;return l.a.createElement(v,e.themeConfig.algolia)}},596:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(587),c=t(582),o=t(586),m=t(584),i=t(598),s=t(585),u=t(48),g=t.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,u,h,E=e.children,b=e.frontMatter,f=e.metadata,v=e.truncated,p=e.isBlogPostPage,O=void 0!==p&&p,k=f.date,j=f.permalink,N=f.tags,w=f.readingTime,_=b.author,y=b.title,C=b.image,P=b.keywords,M=b.author_url||b.authorURL,S=b.author_title||b.authorTitle,T=b.author_image_url||b.authorImageURL,F=Object(s.a)(C,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,P&&P.length&&r.a.createElement("meta",{name:"keywords",content:P.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:F}),C&&r.a.createElement("meta",{property:"twitter:image",content:F}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y})),r.a.createElement("article",{className:O?void 0:"margin-bottom--xl"},(a=O?"h1":"h2",t=k.substring(0,10).split("-"),n=t[0],u=d[parseInt(t[1],10)-1],h=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},O?y:r.a.createElement(m.a,{to:j},y)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:k,className:g.a.blogPostDate},u," ",h,", ",n," ",w&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(w)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},T&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:M,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:T,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:M,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},S)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:i.a},E)),(N.length>0||v)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:f.permalink,"aria-label":"Read more about "+y},r.a.createElement("strong",null,"Read More"))))))}}}]);