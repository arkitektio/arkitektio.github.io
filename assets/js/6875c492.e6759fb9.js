"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8610],{42568:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var s=r(97325),i=r(23672),n=r(85893);function l(e){const{metadata:t}=e,{previousPage:r,nextPage:l}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[r&&(0,n.jsx)(i.Z,{permalink:r,title:(0,n.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),l&&(0,n.jsx)(i.Z,{permalink:l,title:(0,n.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},88389:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var s=r(79107),i=r(339),n=r(85893);function l(e){let{items:t,component:r=i.Z}=e;return(0,n.jsx)(n.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,n.jsx)(s.n,{content:t,children:(0,n.jsx)(r,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)}))})}},74883:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});r(67294);var s=r(90512),i=r(97325),n=r(23777),l=r(79488),a=r(23702),o=r(34791),d=r(88385),c=r(42568),u=r(33647),h=r(88389),g=r(69501),x=r(60495),p=r(85893);function m(e){const t=function(){const{selectMessage:e}=(0,n.c)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const r=m(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.d,{title:r}),(0,p.jsx)(u.Z,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:r,sidebar:s,listMetadata:n}=e;const l=m(t);return(0,p.jsxs)(d.Z,{sidebar:s,children:[t.unlisted&&(0,p.jsx)(g.Z,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(x.Z,{as:"h1",children:l}),(0,p.jsx)(o.Z,{href:t.allTagsPath,children:(0,p.jsx)(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(h.Z,{items:r}),(0,p.jsx)(c.Z,{metadata:n})]})}function b(e){return(0,p.jsxs)(l.FG,{className:(0,s.Z)(a.k.wrapper.blogPages,a.k.page.blogTagPostListPage),children:[(0,p.jsx)(j,{...e}),(0,p.jsx)(f,{...e})]})}},69501:(e,t,r)=>{r.d(t,{Z:()=>g});r(67294);var s=r(90512),i=r(97325),n=r(31514),l=r(85893);function a(){return(0,l.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,l.jsx)(n.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=r(23702),u=r(60554);function h(e){let{className:t}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(a,{}),className:(0,s.Z)(t,c.k.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function g(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{}),(0,l.jsx)(h,{...e})]})}},44773:(e,t,r)=>{r.d(t,{Z:()=>z});var s=r(67294),i=r(90512),n=r(51048),l=r(20076),a=r(97325),o=r(39962),d=r(10748),c=r(4779),u=r(73256);const h={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var g=r(98756),x=r(89423),p=r(97120),m=r(85893);const j=()=>(0,m.jsx)(m.Fragment,{children:"Please connect to your Server first to use this Feature"}),f=e=>{let{children:t}=e;return(0,m.jsx)(g.k6,{fallback:(0,m.jsx)(j,{}),children:(0,m.jsx)(x.J,{fallback:(0,m.jsx)(j,{}),children:(0,m.jsx)(p.SS,{fallback:(0,m.jsx)(j,{}),children:t})})})};var b=r(69345);r(50085);const v=e=>{const{activeTree:t}=(0,b.UK)();return(0,m.jsx)("div",{className:"overflow-y-auto",children:t&&(0,m.jsx)(b.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")})})};var y=r(37274),k=r(1616),N=r(11061);function w(e){const t=e.isHeadersEditorEnabled??!0,r=(0,N._i)({nonNull:!0}),i=((0,N.JB)({nonNull:!0}),(0,N.J5)({nonNull:!0}),(0,N.bN)(),(0,N.gp)()),{theme:n,setTheme:l}=((0,N.Xd)({onCopyQuery:e.onCopyQuery}),(0,N.pQ)(),(0,N.fE)(),(0,N.Fg)()),a=(0,N.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:i?.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&i?.setVisiblePlugin(null)},sizeThresholdSecond:200,storageKey:"docExplorerFlex"}),o=(0,N.Xx)({direction:"horizontal",storageKey:"editorFlex"}),d=(0,N.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":r.initialVariables||r.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[c,u]=(0,s.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!r.initialVariables&&r.initialHeaders&&t?"headers":"variables")),[h,g]=(0,s.useState)(null),[x,p]=(0,s.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return(0,m.jsx)("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative",children:(0,m.jsx)("div",{className:"graphiql-main",children:(0,m.jsx)("div",{className:"graphiql-sessions",children:(0,m.jsx)("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${r.activeTabIndex}`,children:(0,m.jsx)("div",{ref:o.firstRef,children:(0,m.jsx)("div",{className:"graphiql-editors"+(1===r.tabs.length?" full-height":""),children:(0,m.jsx)("div",{ref:d.firstRef,children:(0,m.jsx)("section",{className:"graphiql-query-editor","aria-label":"Query Editor",children:(0,m.jsx)("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700",children:(0,m.jsx)(N.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===a.hiddenElement&&a.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})})})})})})})})})})}const Z=e=>{let{query:t,onEditQuery:r}=e;const{config:i}=(0,p.rM)(),{token:n}=(0,x.gX)(),[l,o]=(0,s.useState)(),d=(0,y.nq)({url:i?.endpointUrl||"",headers:{Authorization:`Bearer ${n}`}});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 ",children:(0,m.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Live"})}),(0,m.jsx)("div",{className:"h-[300px]",children:(0,m.jsx)(k.j$,{fetcher:d,query:t,children:(0,m.jsx)(w,{onEditQuery:r})})})]})};var E=r(31230);const T=e=>{const{setActiveQueryData:t}=(0,b.UK)(),{client:r}=(0,p.rM)();return(0,s.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{r.query({query:(0,E.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(s){console.log("e",s)}}}),[e.code]),(0,m.jsx)(v,{})};function C(e){const[t,r]=(0,s.useState)(),[i,n]=(0,s.useState)();return(0,s.useEffect)((()=>{let e=new b.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:b.b0}}}),r(e);let t=new b.HD({name:"fallback",object:"fallback",Component:e=>(0,m.jsx)("div",{children:JSON.stringify(e.value)})});t.registerSmart({name:"Omero",object:"Omero",Component:e=>(0,m.jsxs)("div",{className:"bg-slate-900 p-3 rounded rounded-md",children:["This is the Omero file ",JSON.stringify(e.value)]})}),n(t)}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md",children:(0,m.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,m.jsx)("div",{children:(0,m.jsx)(d.Z,{fallback:(0,m.jsx)("div",{children:"Hallo"}),children:()=>(0,m.jsx)(f,{children:i&&t&&(0,m.jsx)(b.z0,{chartRegistry:t,smartRegistry:i,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]},children:(0,m.jsx)(T,{code:e.code})})})})})]})}const P=e=>{let{code:t,playgroundPosition:r}=e;const[i,n]=(0,s.useState)(t);return(0,m.jsx)("div",{className:"border-slate-300  p-1 ",children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{query:i,onEditQuery:n}),(0,m.jsx)(C,{code:i})]})})};function q(e){let{children:t}=e;return(0,m.jsx)("div",{className:(0,i.Z)(h.playgroundHeader),children:t})}function F(){return(0,m.jsx)("div",{children:"Loading..."})}function S(e){let{error:t,tryAgain:r}=e;return(0,m.jsx)("div",{className:h.errorFallback,children:(0,m.jsx)("p",{children:t.message})})}function H(){return(0,m.jsx)(d.Z,{fallback:(0,m.jsx)(F,{}),children:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.Z,{fallback:e=>(0,m.jsx)(S,{...e}),children:(0,m.jsx)(l.i5,{})}),(0,m.jsx)(l.IF,{})]})})}function Q(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(q,{children:(0,m.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,m.jsx)("div",{className:h.playgroundPreview,children:(0,m.jsx)(f,{children:(0,m.jsx)(H,{})})})]})}function R(){const e=(0,n.Z)();return(0,m.jsx)(l.uz,{className:h.playgroundEditor},String(e))}function V(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(q,{children:(0,m.jsx)(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,m.jsx)(R,{})]})}function z(e){let{children:t,transformCode:r,...s}=e;const{siteConfig:{themeConfig:i}}=(0,o.Z)(),{liveCodeBlock:{playgroundPosition:n}}=i,a=(0,c.p)();if(console.log(s),"language-kraphql"===s.className)return(0,m.jsx)(d.Z,{children:()=>(0,m.jsx)(P,{code:t,playgroundPosition:n})});const u=s.metastring?.includes("noInline")??!1;return(0,m.jsx)("div",{className:h.playgroundContainer,children:(0,m.jsx)(l.nu,{code:t.replace(/\n$/,""),noInline:u,transformCode:r??(e=>`${e};`),theme:a,...s,children:"top"===n?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Q,{}),(0,m.jsx)(V,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(V,{}),(0,m.jsx)(Q,{})]})})})}},5522:(e,t,r)=>{r.d(t,{Z:()=>d});var s=r(67294),i=r(97120),n=r(60203),l=r(21127),a=r(85893);var o=r(31230);const d={React:s,...s,withMikro:i.R1,useMikroQuery:i.WE,BioImage:e=>{let{image:t}=e;const{s3resolve:r}=(0,n.th)();return(0,a.jsxs)("div",{className:"h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow ",children:[t.store&&t.shape&&(0,a.jsx)(l.Yr,{path:r(t.store),shape:t.shape}),(0,a.jsxs)("div",{className:"absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent",children:[t.name," "]})]})},useDatalayer:n.th,gql:o.Ps}}}]);