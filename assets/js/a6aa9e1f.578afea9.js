"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3089],{9928:(e,r,i)=>{i.r(r),i.d(r,{default:()=>x});i(67294);var t=i(90512),s=i(39962),l=i(79488),n=i(23702),a=i(88385),o=i(42568),d=i(33647),c=i(88389),h=i(85893);function u(e){const{metadata:r}=e,{siteConfig:{title:i}}=(0,s.Z)(),{blogDescription:t,blogTitle:n,permalink:a}=r,o="/"===a?i:n;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.d,{title:o,description:t}),(0,h.jsx)(d.Z,{tag:"blog_posts_list"})]})}function g(e){const{metadata:r,items:i,sidebar:t}=e;return(0,h.jsxs)(a.Z,{sidebar:t,children:[(0,h.jsx)(c.Z,{items:i}),(0,h.jsx)(o.Z,{metadata:r})]})}function x(e){return(0,h.jsxs)(l.FG,{className:(0,t.Z)(n.k.wrapper.blogPages,n.k.page.blogListPage),children:[(0,h.jsx)(u,{...e}),(0,h.jsx)(g,{...e})]})}},42568:(e,r,i)=>{i.d(r,{Z:()=>n});i(67294);var t=i(97325),s=i(23672),l=i(85893);function n(e){const{metadata:r}=e,{previousPage:i,nextPage:n}=r;return(0,l.jsxs)("nav",{className:"pagination-nav","aria-label":(0,t.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[i&&(0,l.jsx)(s.Z,{permalink:i,title:(0,l.jsx)(t.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),n&&(0,l.jsx)(s.Z,{permalink:n,title:(0,l.jsx)(t.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},88389:(e,r,i)=>{i.d(r,{Z:()=>n});i(67294);var t=i(79107),s=i(339),l=i(85893);function n(e){let{items:r,component:i=s.Z}=e;return(0,l.jsx)(l.Fragment,{children:r.map((e=>{let{content:r}=e;return(0,l.jsx)(t.n,{content:r,children:(0,l.jsx)(i,{children:(0,l.jsx)(r,{})})},r.metadata.permalink)}))})}},44773:(e,r,i)=>{i.d(r,{Z:()=>z});var t=i(67294),s=i(90512),l=i(51048),n=i(20076),a=i(97325),o=i(39962),d=i(10748),c=i(4779),h=i(73256);const u={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var g=i(98756),x=i(89423),p=i(97120),m=i(85893);const j=()=>(0,m.jsx)(m.Fragment,{children:"Please connect to your Server first to use this Feature"}),f=e=>{let{children:r}=e;return(0,m.jsx)(g.k6,{fallback:(0,m.jsx)(j,{}),children:(0,m.jsx)(x.J,{fallback:(0,m.jsx)(j,{}),children:(0,m.jsx)(p.SS,{fallback:(0,m.jsx)(j,{}),children:r})})})};var b=i(69345);i(50085);const v=e=>{const{activeTree:r}=(0,b.UK)();return(0,m.jsx)("div",{className:"overflow-y-auto",children:r&&(0,m.jsx)(b.mp,{group:r,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")})})};var y=i(37274),k=i(1616),E=i(11061);function N(e){const r=e.isHeadersEditorEnabled??!0,i=(0,E._i)({nonNull:!0}),s=((0,E.JB)({nonNull:!0}),(0,E.J5)({nonNull:!0}),(0,E.bN)(),(0,E.gp)()),{theme:l,setTheme:n}=((0,E.Xd)({onCopyQuery:e.onCopyQuery}),(0,E.pQ)(),(0,E.fE)(),(0,E.Fg)()),a=(0,E.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:s?.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&s?.setVisiblePlugin(null)},sizeThresholdSecond:200,storageKey:"docExplorerFlex"}),o=(0,E.Xx)({direction:"horizontal",storageKey:"editorFlex"}),d=(0,E.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":i.initialVariables||i.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[c,h]=(0,t.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!i.initialVariables&&i.initialHeaders&&r?"headers":"variables")),[u,g]=(0,t.useState)(null),[x,p]=(0,t.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return(0,m.jsx)("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative",children:(0,m.jsx)("div",{className:"graphiql-main",children:(0,m.jsx)("div",{className:"graphiql-sessions",children:(0,m.jsx)("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${i.activeTabIndex}`,children:(0,m.jsx)("div",{ref:o.firstRef,children:(0,m.jsx)("div",{className:"graphiql-editors"+(1===i.tabs.length?" full-height":""),children:(0,m.jsx)("div",{ref:d.firstRef,children:(0,m.jsx)("section",{className:"graphiql-query-editor","aria-label":"Query Editor",children:(0,m.jsx)("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700",children:(0,m.jsx)(E.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===a.hiddenElement&&a.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly})})})})})})})})})})}const w=e=>{let{query:r,onEditQuery:i}=e;const{config:s}=(0,p.rM)(),{token:l}=(0,x.gX)(),[n,o]=(0,t.useState)(),d=(0,y.nq)({url:s?.endpointUrl||"",headers:{Authorization:`Bearer ${l}`}});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 ",children:(0,m.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Live"})}),(0,m.jsx)("div",{className:"h-[300px]",children:(0,m.jsx)(k.j$,{fetcher:d,query:r,children:(0,m.jsx)(N,{onEditQuery:i})})})]})};var Z=i(31230);const C=e=>{const{setActiveQueryData:r}=(0,b.UK)(),{client:i}=(0,p.rM)();return(0,t.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{i.query({query:(0,Z.ZP)(e.code)}).then((e=>{r(e.data)}))}catch(t){console.log("e",t)}}}),[e.code]),(0,m.jsx)(v,{})};function T(e){const[r,i]=(0,t.useState)(),[s,l]=(0,t.useState)();return(0,t.useEffect)((()=>{let e=new b.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:b.b0}}}),i(e);let r=new b.HD({name:"fallback",object:"fallback",Component:e=>(0,m.jsx)("div",{children:JSON.stringify(e.value)})});r.registerSmart({name:"Omero",object:"Omero",Component:e=>(0,m.jsxs)("div",{className:"bg-slate-900 p-3 rounded rounded-md",children:["This is the Omero file ",JSON.stringify(e.value)]})}),l(r)}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md",children:(0,m.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,m.jsx)("div",{children:(0,m.jsx)(d.Z,{fallback:(0,m.jsx)("div",{children:"Hallo"}),children:()=>(0,m.jsx)(f,{children:s&&r&&(0,m.jsx)(b.z0,{chartRegistry:r,smartRegistry:s,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]},children:(0,m.jsx)(C,{code:e.code})})})})})]})}const q=e=>{let{code:r,playgroundPosition:i}=e;const[s,l]=(0,t.useState)(r);return(0,m.jsx)("div",{className:"border-slate-300  p-1 ",children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(w,{query:s,onEditQuery:l}),(0,m.jsx)(T,{code:s})]})})};function F(e){let{children:r}=e;return(0,m.jsx)("div",{className:(0,s.Z)(u.playgroundHeader),children:r})}function P(){return(0,m.jsx)("div",{children:"Loading..."})}function S(e){let{error:r,tryAgain:i}=e;return(0,m.jsx)("div",{className:u.errorFallback,children:(0,m.jsx)("p",{children:r.message})})}function H(){return(0,m.jsx)(d.Z,{fallback:(0,m.jsx)(P,{}),children:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.Z,{fallback:e=>(0,m.jsx)(S,{...e}),children:(0,m.jsx)(n.i5,{})}),(0,m.jsx)(n.IF,{})]})})}function Q(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(F,{children:(0,m.jsx)(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,m.jsx)("div",{className:u.playgroundPreview,children:(0,m.jsx)(f,{children:(0,m.jsx)(H,{})})})]})}function R(){const e=(0,l.Z)();return(0,m.jsx)(n.uz,{className:u.playgroundEditor},String(e))}function V(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(F,{children:(0,m.jsx)(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,m.jsx)(R,{})]})}function z(e){let{children:r,transformCode:i,...t}=e;const{siteConfig:{themeConfig:s}}=(0,o.Z)(),{liveCodeBlock:{playgroundPosition:l}}=s,a=(0,c.p)();if(console.log(t),"language-kraphql"===t.className)return(0,m.jsx)(d.Z,{children:()=>(0,m.jsx)(q,{code:r,playgroundPosition:l})});const h=t.metastring?.includes("noInline")??!1;return(0,m.jsx)("div",{className:u.playgroundContainer,children:(0,m.jsx)(n.nu,{code:r.replace(/\n$/,""),noInline:h,transformCode:i??(e=>`${e};`),theme:a,...t,children:"top"===l?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Q,{}),(0,m.jsx)(V,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(V,{}),(0,m.jsx)(Q,{})]})})})}},5522:(e,r,i)=>{i.d(r,{Z:()=>d});var t=i(67294),s=i(97120),l=i(60203),n=i(21127),a=i(85893);var o=i(31230);const d={React:t,...t,withMikro:s.R1,useMikroQuery:s.WE,BioImage:e=>{let{image:r}=e;const{s3resolve:i}=(0,l.th)();return(0,a.jsxs)("div",{className:"h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow ",children:[r.store&&r.shape&&(0,a.jsx)(n.Yr,{path:i(r.store),shape:r.shape}),(0,a.jsxs)("div",{className:"absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent",children:[r.name," "]})]})},useDatalayer:l.th,gql:o.Ps}}}]);