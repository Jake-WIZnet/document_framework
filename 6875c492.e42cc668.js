(window.webpackJsonp=window.webpackJsonp||[]).push([[210,211],{266:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(591),c=a(596),o=a(584);t.default=function(e){var t=e.metadata,a=e.items,n=t.allTagsPath,m=t.name,i=t.count;return r.a.createElement(l.a,{title:'Posts tagged "'+m+'"',description:'Blog | Tagged "'+m+'"'},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,i," ",function(e,t){return e>1?t+"s":t}(i,"post"),' tagged with "',m,'"'),r.a.createElement(o.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.a.createElement(c.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.a.createElement(t,null))})))))))}},592:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),c=a(20),o=a(583),m=a(588),i=a(585),s=a(584),u=a(586),g=a(590),d=a(649),h=a(650),E=null;function b(e){var t=e.hit,a=e.children;return l.a.createElement(s.a,{to:t.url},a)}function f(e){var t=e.state,a=e.onClose,n=Object(g.a)().generateSearchPageLink;return l.a.createElement(s.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function v(e){var t=Object(o.a)().siteMetadata,s=Object(i.b)().withBaseUrl,g=Object(m.useHistory)(),v=Object(r.useRef)(null),p=Object(r.useState)(!1),O=p[0],k=p[1],j=Object(r.useState)(null),N=j[0],w=j[1],_=Object(r.useCallback)((function(){return E?Promise.resolve():Promise.all([a.e(527).then(a.bind(null,594)),Promise.all([a.e(0),a.e(528)]).then(a.bind(null,593)),a.e(0).then(a.t.bind(null,47,7))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),y=Object(r.useCallback)((function(){_().then((function(){k(!0)}))}),[_,k]),C=Object(r.useCallback)((function(){k(!1)}),[k]),P=Object(r.useCallback)((function(e){_().then((function(){k(!0),w(e.key)}))}),[_,k,w]);return Object(d.a)({isOpen:O,onOpen:y,onClose:C,onInput:P,searchButtonRef:v}),l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),l.a.createElement(h.a,{onTouchStart:_,onFocus:_,onMouseOver:_,onClick:y,ref:v}),O&&Object(c.createPortal)(l.a.createElement(E,Object(n.a)({onClose:C,initialScrollY:window.scrollY,initialQuery:N,navigator:{navigate:function(e){var t=e.suggestionUrl;g.push(t)}},transformItems:function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:s(""+t.hash)})}))},hitComponent:b,resultsFooterComponent:function(e){return l.a.createElement(f,Object(n.a)({},e,{onClose:C}))},transformSearchClient:function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}},e)),document.body))}t.a=function(){var e=Object(o.a)().siteConfig;return l.a.createElement(v,e.themeConfig.algolia)}},596:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(587),c=a(582),o=a(586),m=a(584),i=a(598),s=a(585),u=a(48),g=a.n(u),d=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){var t,a,n,u,h,E=e.children,b=e.frontMatter,f=e.metadata,v=e.truncated,p=e.isBlogPostPage,O=void 0!==p&&p,k=f.date,j=f.permalink,N=f.tags,w=f.readingTime,_=b.author,y=b.title,C=b.image,P=b.keywords,M=b.author_url||b.authorURL,S=b.author_title||b.authorTitle,T=b.author_image_url||b.authorImageURL,F=Object(s.a)(C,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,P&&P.length&&r.a.createElement("meta",{name:"keywords",content:P.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:F}),C&&r.a.createElement("meta",{property:"twitter:image",content:F}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y})),r.a.createElement("article",{className:O?void 0:"margin-bottom--xl"},(t=O?"h1":"h2",a=k.substring(0,10).split("-"),n=a[0],u=d[parseInt(a[1],10)-1],h=parseInt(a[2],10),r.a.createElement("header",null,r.a.createElement(t,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},O?y:r.a.createElement(m.a,{to:j},y)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:k,className:g.a.blogPostDate},u," ",h,", ",n," ",w&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(w)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},T&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:M,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:T,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:M,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},S)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:i.a},E)),(N.length>0||v)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),N.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(m.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:f.permalink,"aria-label":"Read more about "+y},r.a.createElement("strong",null,"Read More"))))))}}}]);