"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3085],{92865:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(67294);var r=t(90512),i=t(35463),l=t(23702),s=t(71131),a=t(72477),o=t(83811),d=t(69501);const c={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(85893);function h(e){const{content:n}=e,{metadata:{title:t,description:h,frontMatter:m,unlisted:x},assets:f}=n,{keywords:g,wrapperClassName:v,hide_table_of_contents:p}=m,j=f.image??m.image;return(0,u.jsx)(i.FG,{className:(0,r.Z)(v??l.k.wrapper.mdxPages,l.k.page.mdxPage),children:(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(i.d,{title:t,description:h,keywords:g,image:j}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,r.Z)("row",c.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,r.Z)("col",!p&&"col--8"),children:[x&&(0,u.jsx)(d.Z,{}),(0,u.jsx)("article",{children:(0,u.jsx)(a.Z,{children:(0,u.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(o.Z,{toc:n.toc,minHeadingLevel:m.toc_min_heading_level,maxHeadingLevel:m.toc_max_heading_level})})]})})]})})}},83811:(e,n,t)=>{t.d(n,{Z:()=>d});t(67294);var r=t(90512),i=t(2728);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(85893);const a="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function d(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,r.Z)(l.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(i.Z,{...t,linkClassName:a,linkActiveClassName:o})})}},2728:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(67294),i=t(20107);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):r.push(i)})),r}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>a(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function d(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){const n=(0,r.useRef)(void 0),t=d();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:s}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let i=n;i<=t;i+=1)r.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),d=o(a,{anchorTopOffset:t.current}),c=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var u=t(83699),h=t(85893);function m(e){let{toc:n,className:t,linkClassName:r,isChild:i}=e;return n.length?(0,h.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(u.Z,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(m,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const x=r.memo(m);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u,...m}=e;const f=(0,i.L)(),g=d??f.tableOfContents.minHeadingLevel,v=u??f.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,r.useMemo)((()=>s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:g,maxHeadingLevel:v});return c((0,r.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:v}}),[a,o,g,v])),(0,h.jsx)(x,{toc:p,className:t,linkClassName:a,...m})}},69501:(e,n,t)=>{t.d(n,{Z:()=>m});t(67294);var r=t(90512),i=t(97325),l=t(31514),s=t(85893);function a(){return(0,s.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,s.jsx)(l.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=t(23702),u=t(60554);function h(e){let{className:n}=e;return(0,s.jsx)(u.Z,{type:"caution",title:(0,s.jsx)(a,{}),className:(0,r.Z)(n,c.k.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{}),(0,s.jsx)(h,{...e})]})}},44773:(e,n,t)=>{t.d(n,{Z:()=>R});var r=t(67294),i=t(90512),l=t(51048),s=t(20076),a=t(97325),o=t(39962),d=t(10748),c=t(4779),u=t(73256);const h={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var m=t(39903),x=t(89423),f=t(97120),g=t(85893);const v=()=>(0,g.jsx)(g.Fragment,{children:"Please connect to your Server first to use this Feature"}),p=e=>{let{children:n}=e;return(0,g.jsx)(m.k6,{fallback:(0,g.jsx)(v,{}),children:(0,g.jsx)(x.J,{fallback:(0,g.jsx)(v,{}),children:(0,g.jsx)(f.SS,{fallback:(0,g.jsx)(v,{}),children:n})})})};var j=t(69345);t(50085);const b=e=>{const{activeTree:n}=(0,j.UK)();return(0,g.jsx)("div",{className:"overflow-y-auto",children:n&&(0,g.jsx)(j.mp,{group:n,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")})})};var y=t(37274),N=t(1616),C=t(11061);function k(e){const n=e.isHeadersEditorEnabled??!0,t=(0,C._i)({nonNull:!0}),i=((0,C.JB)({nonNull:!0}),(0,C.J5)({nonNull:!0}),(0,C.bN)(),(0,C.gp)()),{theme:l,setTheme:s}=((0,C.Xd)({onCopyQuery:e.onCopyQuery}),(0,C.pQ)(),(0,C.fE)(),(0,C.Fg)()),a=(0,C.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:i?.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&i?.setVisiblePlugin(null)},sizeThresholdSecond:200,storageKey:"docExplorerFlex"}),o=(0,C.Xx)({direction:"horizontal",storageKey:"editorFlex"}),d=(0,C.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":t.initialVariables||t.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[c,u]=(0,r.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!t.initialVariables&&t.initialHeaders&&n?"headers":"variables")),[h,m]=(0,r.useState)(null),[x,f]=(0,r.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return(0,g.jsx)("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative",children:(0,g.jsx)("div",{className:"graphiql-main",children:(0,g.jsx)("div",{className:"graphiql-sessions",children:(0,g.jsx)("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${t.activeTabIndex}`,children:(0,g.jsx)("div",{ref:o.firstRef,children:(0,g.jsx)("div",{className:"graphiql-editors"+(1===t.tabs.length?" full-height":""),children:(0,g.jsx)("div",{ref:d.firstRef,children:(0,g.jsx)("section",{className:"graphiql-query-editor","aria-label":"Query Editor",children:(0,g.jsx)("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700",children:(0,g.jsx)(C.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===a.hiddenElement&&a.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})})})})})})})})})})}const E=e=>{let{query:n,onEditQuery:t}=e;const{config:i}=(0,f.rM)(),{token:l}=(0,x.gX)(),[s,o]=(0,r.useState)(),d=(0,y.nq)({url:i?.endpointUrl||"",headers:{Authorization:`Bearer ${l}`}});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 ",children:(0,g.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Live"})}),(0,g.jsx)("div",{className:"h-[300px]",children:(0,g.jsx)(N.j$,{fetcher:d,query:n,children:(0,g.jsx)(k,{onEditQuery:t})})})]})};var H=t(31230);const L=e=>{const{setActiveQueryData:n}=(0,j.UK)(),{client:t}=(0,f.rM)();return(0,r.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{t.query({query:(0,H.ZP)(e.code)}).then((e=>{n(e.data)}))}catch(r){console.log("e",r)}}}),[e.code]),(0,g.jsx)(b,{})};function w(e){const[n,t]=(0,r.useState)(),[i,l]=(0,r.useState)();return(0,r.useEffect)((()=>{let e=new j.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:j.b0}}}),t(e);let n=new j.HD({name:"fallback",object:"fallback",Component:e=>(0,g.jsx)("div",{children:JSON.stringify(e.value)})});n.registerSmart({name:"Omero",object:"Omero",Component:e=>(0,g.jsxs)("div",{className:"bg-slate-900 p-3 rounded rounded-md",children:["This is the Omero file ",JSON.stringify(e.value)]})}),l(n)}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md",children:(0,g.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,g.jsx)("div",{children:(0,g.jsx)(d.Z,{fallback:(0,g.jsx)("div",{children:"Hallo"}),children:()=>(0,g.jsx)(p,{children:i&&n&&(0,g.jsx)(j.z0,{chartRegistry:n,smartRegistry:i,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]},children:(0,g.jsx)(L,{code:e.code})})})})})]})}const Z=e=>{let{code:n,playgroundPosition:t}=e;const[i,l]=(0,r.useState)(n);return(0,g.jsx)("div",{className:"border-slate-300  p-1 ",children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(E,{query:i,onEditQuery:l}),(0,g.jsx)(w,{code:i})]})})};function _(e){let{children:n}=e;return(0,g.jsx)("div",{className:(0,i.Z)(h.playgroundHeader),children:n})}function T(){return(0,g.jsx)("div",{children:"Loading..."})}function q(e){let{error:n,tryAgain:t}=e;return(0,g.jsx)("div",{className:h.errorFallback,children:(0,g.jsx)("p",{children:n.message})})}function S(){return(0,g.jsx)(d.Z,{fallback:(0,g.jsx)(T,{}),children:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.Z,{fallback:e=>(0,g.jsx)(q,{...e}),children:(0,g.jsx)(s.i5,{})}),(0,g.jsx)(s.IF,{})]})})}function P(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(_,{children:(0,g.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,g.jsx)("div",{className:h.playgroundPreview,children:(0,g.jsx)(p,{children:(0,g.jsx)(S,{})})})]})}function F(){const e=(0,l.Z)();return(0,g.jsx)(s.uz,{className:h.playgroundEditor},String(e))}function O(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(_,{children:(0,g.jsx)(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,g.jsx)(F,{})]})}function R(e){let{children:n,transformCode:t,...r}=e;const{siteConfig:{themeConfig:i}}=(0,o.Z)(),{liveCodeBlock:{playgroundPosition:l}}=i,a=(0,c.p)();if(console.log(r),"language-kraphql"===r.className)return(0,g.jsx)(d.Z,{children:()=>(0,g.jsx)(Z,{code:n,playgroundPosition:l})});const u=r.metastring?.includes("noInline")??!1;return(0,g.jsx)("div",{className:h.playgroundContainer,children:(0,g.jsx)(s.nu,{code:n.replace(/\n$/,""),noInline:u,transformCode:t??(e=>`${e};`),theme:a,...r,children:"top"===l?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(P,{}),(0,g.jsx)(O,{})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(O,{}),(0,g.jsx)(P,{})]})})})}},5522:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(67294),i=t(97120),l=t(60203),s=t(21127),a=t(85893);var o=t(31230);const d={React:r,...r,withMikro:i.R1,useMikroQuery:i.WE,BioImage:e=>{let{image:n}=e;const{s3resolve:t}=(0,l.th)();return(0,a.jsxs)("div",{className:"h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow ",children:[n.store&&n.shape&&(0,a.jsx)(s.Yr,{path:t(n.store),shape:n.shape}),(0,a.jsxs)("div",{className:"absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent",children:[n.name," "]})]})},useDatalayer:l.th,gql:o.Ps}}}]);