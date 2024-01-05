"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[6103],{324:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});t(67294);var r=t(90512),i=t(35463),l=t(23702),s=t(79107),a=t(88385),o=t(339),d=t(97325),c=t(23672),u=t(85893);function h(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(c.Z,{...t,subLabel:(0,u.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(c.Z,{...n,subLabel:(0,u.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function m(){const{assets:e,metadata:n}=(0,s.C)(),{title:t,description:r,date:l,tags:a,authors:o,frontMatter:d}=n,{keywords:c}=d,h=e.image??d.image;return(0,u.jsxs)(i.d,{title:t,description:r,keywords:c,image:h,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:l}),o.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),a.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:a.map((e=>e.label)).join(",")})]})}var g=t(83811),x=t(69501);function f(e){let{sidebar:n,children:t}=e;const{metadata:r,toc:i}=(0,s.C)(),{nextItem:l,prevItem:d,frontMatter:c,unlisted:m}=r,{hide_table_of_contents:f,toc_min_heading_level:p,toc_max_heading_level:v}=c;return(0,u.jsxs)(a.Z,{sidebar:n,toc:!f&&i.length>0?(0,u.jsx)(g.Z,{toc:i,minHeadingLevel:p,maxHeadingLevel:v}):void 0,children:[m&&(0,u.jsx)(x.Z,{}),(0,u.jsx)(o.Z,{children:t}),(l||d)&&(0,u.jsx)(h,{nextItem:l,prevItem:d})]})}function p(e){const n=e.content;return(0,u.jsx)(s.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage),children:[(0,u.jsx)(m,{}),(0,u.jsx)(f,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},83811:(e,n,t)=>{t.d(n,{Z:()=>d});t(67294);var r=t(90512),i=t(2728);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(85893);const a="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function d(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,r.Z)(l.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(i.Z,{...t,linkClassName:a,linkActiveClassName:o})})}},2728:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(67294),i=t(20107);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):r.push(i)})),r}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>a(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function d(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){const n=(0,r.useRef)(void 0),t=d();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:s}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let i=n;i<=t;i+=1)r.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),d=o(a,{anchorTopOffset:t.current}),c=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var u=t(83699),h=t(85893);function m(e){let{toc:n,className:t,linkClassName:r,isChild:i}=e;return n.length?(0,h.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(u.Z,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(m,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const g=r.memo(m);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u,...m}=e;const x=(0,i.L)(),f=d??x.tableOfContents.minHeadingLevel,p=u??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,r.useMemo)((()=>s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:f,maxHeadingLevel:p});return c((0,r.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:f,maxHeadingLevel:p}}),[a,o,f,p])),(0,h.jsx)(g,{toc:v,className:t,linkClassName:a,...m})}},69501:(e,n,t)=>{t.d(n,{Z:()=>m});t(67294);var r=t(90512),i=t(97325),l=t(31514),s=t(85893);function a(){return(0,s.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,s.jsx)(l.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=t(23702),u=t(60554);function h(e){let{className:n}=e;return(0,s.jsx)(u.Z,{type:"caution",title:(0,s.jsx)(a,{}),className:(0,r.Z)(n,c.k.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{}),(0,s.jsx)(h,{...e})]})}},44773:(e,n,t)=>{t.d(n,{Z:()=>O});var r=t(67294),i=t(90512),l=t(51048),s=t(20076),a=t(97325),o=t(39962),d=t(10748),c=t(4779),u=t(73256);const h={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var m=t(39903),g=t(89423),x=t(97120),f=t(85893);const p=()=>(0,f.jsx)(f.Fragment,{children:"Please connect to your Server first to use this Feature"}),v=e=>{let{children:n}=e;return(0,f.jsx)(m.k6,{fallback:(0,f.jsx)(p,{}),children:(0,f.jsx)(g.J,{fallback:(0,f.jsx)(p,{}),children:(0,f.jsx)(x.SS,{fallback:(0,f.jsx)(p,{}),children:n})})})};var j=t(69345);t(50085);const b=e=>{const{activeTree:n}=(0,j.UK)();return(0,f.jsx)("div",{className:"overflow-y-auto",children:n&&(0,f.jsx)(j.mp,{group:n,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")})})};var y=t(37274),N=t(1616),C=t(11061);function k(e){const n=e.isHeadersEditorEnabled??!0,t=(0,C._i)({nonNull:!0}),i=((0,C.JB)({nonNull:!0}),(0,C.J5)({nonNull:!0}),(0,C.bN)(),(0,C.gp)()),{theme:l,setTheme:s}=((0,C.Xd)({onCopyQuery:e.onCopyQuery}),(0,C.pQ)(),(0,C.fE)(),(0,C.Fg)()),a=(0,C.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:i?.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&i?.setVisiblePlugin(null)},sizeThresholdSecond:200,storageKey:"docExplorerFlex"}),o=(0,C.Xx)({direction:"horizontal",storageKey:"editorFlex"}),d=(0,C.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":t.initialVariables||t.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[c,u]=(0,r.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!t.initialVariables&&t.initialHeaders&&n?"headers":"variables")),[h,m]=(0,r.useState)(null),[g,x]=(0,r.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return(0,f.jsx)("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative",children:(0,f.jsx)("div",{className:"graphiql-main",children:(0,f.jsx)("div",{className:"graphiql-sessions",children:(0,f.jsx)("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${t.activeTabIndex}`,children:(0,f.jsx)("div",{ref:o.firstRef,children:(0,f.jsx)("div",{className:"graphiql-editors"+(1===t.tabs.length?" full-height":""),children:(0,f.jsx)("div",{ref:d.firstRef,children:(0,f.jsx)("section",{className:"graphiql-query-editor","aria-label":"Query Editor",children:(0,f.jsx)("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700",children:(0,f.jsx)(C.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===a.hiddenElement&&a.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})})})})})})})})})})}const L=e=>{let{query:n,onEditQuery:t}=e;const{config:i}=(0,x.rM)(),{token:l}=(0,g.gX)(),[s,o]=(0,r.useState)(),d=(0,y.nq)({url:i?.endpointUrl||"",headers:{Authorization:`Bearer ${l}`}});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 ",children:(0,f.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Live"})}),(0,f.jsx)("div",{className:"h-[300px]",children:(0,f.jsx)(N.j$,{fetcher:d,query:n,children:(0,f.jsx)(k,{onEditQuery:t})})})]})};var E=t(31230);const H=e=>{const{setActiveQueryData:n}=(0,j.UK)(),{client:t}=(0,x.rM)();return(0,r.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{t.query({query:(0,E.ZP)(e.code)}).then((e=>{n(e.data)}))}catch(r){console.log("e",r)}}}),[e.code]),(0,f.jsx)(b,{})};function w(e){const[n,t]=(0,r.useState)(),[i,l]=(0,r.useState)();return(0,r.useEffect)((()=>{let e=new j.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:j.b0}}}),t(e);let n=new j.HD({name:"fallback",object:"fallback",Component:e=>(0,f.jsx)("div",{children:JSON.stringify(e.value)})});n.registerSmart({name:"Omero",object:"Omero",Component:e=>(0,f.jsxs)("div",{className:"bg-slate-900 p-3 rounded rounded-md",children:["This is the Omero file ",JSON.stringify(e.value)]})}),l(n)}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md",children:(0,f.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,f.jsx)("div",{children:(0,f.jsx)(d.Z,{fallback:(0,f.jsx)("div",{children:"Hallo"}),children:()=>(0,f.jsx)(v,{children:i&&n&&(0,f.jsx)(j.z0,{chartRegistry:n,smartRegistry:i,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]},children:(0,f.jsx)(H,{code:e.code})})})})})]})}const Z=e=>{let{code:n,playgroundPosition:t}=e;const[i,l]=(0,r.useState)(n);return(0,f.jsx)("div",{className:"border-slate-300  p-1 ",children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(L,{query:i,onEditQuery:l}),(0,f.jsx)(w,{code:i})]})})};function T(e){let{children:n}=e;return(0,f.jsx)("div",{className:(0,i.Z)(h.playgroundHeader),children:n})}function _(){return(0,f.jsx)("div",{children:"Loading..."})}function P(e){let{error:n,tryAgain:t}=e;return(0,f.jsx)("div",{className:h.errorFallback,children:(0,f.jsx)("p",{children:n.message})})}function q(){return(0,f.jsx)(d.Z,{fallback:(0,f.jsx)(_,{}),children:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{fallback:e=>(0,f.jsx)(P,{...e}),children:(0,f.jsx)(s.i5,{})}),(0,f.jsx)(s.IF,{})]})})}function S(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(T,{children:(0,f.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,f.jsx)("div",{className:h.playgroundPreview,children:(0,f.jsx)(v,{children:(0,f.jsx)(q,{})})})]})}function I(){const e=(0,l.Z)();return(0,f.jsx)(s.uz,{className:h.playgroundEditor},String(e))}function F(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(T,{children:(0,f.jsx)(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,f.jsx)(I,{})]})}function O(e){let{children:n,transformCode:t,...r}=e;const{siteConfig:{themeConfig:i}}=(0,o.Z)(),{liveCodeBlock:{playgroundPosition:l}}=i,a=(0,c.p)();if(console.log(r),"language-kraphql"===r.className)return(0,f.jsx)(d.Z,{children:()=>(0,f.jsx)(Z,{code:n,playgroundPosition:l})});const u=r.metastring?.includes("noInline")??!1;return(0,f.jsx)("div",{className:h.playgroundContainer,children:(0,f.jsx)(s.nu,{code:n.replace(/\n$/,""),noInline:u,transformCode:t??(e=>`${e};`),theme:a,...r,children:"top"===l?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S,{}),(0,f.jsx)(F,{})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(F,{}),(0,f.jsx)(S,{})]})})})}},5522:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(67294),i=t(97120),l=t(60203),s=t(21127),a=t(85893);var o=t(31230);const d={React:r,...r,withMikro:i.R1,useMikroQuery:i.WE,BioImage:e=>{let{image:n}=e;const{s3resolve:t}=(0,l.th)();return(0,a.jsxs)("div",{className:"h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow ",children:[n.store&&n.shape&&(0,a.jsx)(s.Yr,{path:t(n.store),shape:n.shape}),(0,a.jsxs)("div",{className:"absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent",children:[n.name," "]})]})},useDatalayer:l.th,gql:o.Ps}}}]);