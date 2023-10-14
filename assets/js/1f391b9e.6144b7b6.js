"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3085,7918],{88373:(e,t,l)=>{l.d(t,{Z:()=>O});var r=l(87462),a=l(67294),n=l(86010),o=l(51048),i=l(55607),s=l(97325),c=l(39962),d=l(10748),u=l(4779),m=l(73256);const E={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var g=l(39903),f=l(30210),p=l(27393);const h=()=>a.createElement(a.Fragment,null,"Please connect to your Server first to use this Feature"),y=e=>{let{children:t}=e;return a.createElement(g.k6,{fallback:a.createElement(h,null)},a.createElement(f.J,{fallback:a.createElement(h,null)},a.createElement(p.SS,{fallback:a.createElement(h,null)},t)))};var b=l(9733);l(50085);const v=e=>{const{activeTree:t}=(0,b.UK)();return a.createElement("div",{className:"overflow-y-auto"},t&&a.createElement(b.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))};var k=l(32181),N=l(1616),w=l(74842);function C(e){const t=e.isHeadersEditorEnabled??!0,l=(0,w._i)({nonNull:!0}),r=((0,w.JB)({nonNull:!0}),(0,w.J5)({nonNull:!0}),(0,w.bN)(),(0,w.gp)()),{theme:n,setTheme:o}=((0,w.Xd)({onCopyQuery:e.onCopyQuery}),(0,w.pQ)(),(0,w.fE)(),(0,w.Fg)()),i=(0,w.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:r?.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&r?.setVisiblePlugin(null)},sizeThresholdSecond:200,storageKey:"docExplorerFlex"}),s=(0,w.Xx)({direction:"horizontal",storageKey:"editorFlex"}),c=(0,w.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":l.initialVariables||l.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[d,u]=(0,a.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!l.initialVariables&&l.initialHeaders&&t?"headers":"variables")),[m,E]=(0,a.useState)(null),[g,f]=(0,a.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return a.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},a.createElement("div",{className:"graphiql-main"},a.createElement("div",{className:"graphiql-sessions"},a.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${l.activeTabIndex}`},a.createElement("div",{ref:s.firstRef},a.createElement("div",{className:"graphiql-editors"+(1===l.tabs.length?" full-height":"")},a.createElement("div",{ref:c.firstRef},a.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},a.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},a.createElement(w.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===i.hiddenElement&&i.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const q=e=>{let{query:t,onEditQuery:l}=e;const{config:r}=(0,p.rM)(),{token:n}=(0,f.gX)(),[o,i]=(0,a.useState)(),c=(0,k.nq)({url:r?.endpointUrl||"",headers:{Authorization:`Bearer ${n}`}});return a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 "},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),a.createElement("div",{className:"h-[300px]"},a.createElement(N.j$,{fetcher:c,query:t},a.createElement(C,{onEditQuery:l}))))};var x=l(31230);const T=e=>{const{setActiveQueryData:t}=(0,b.UK)(),{client:l}=(0,p.rM)();return(0,a.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{l.query({query:(0,x.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(r){console.log("e",r)}}}),[e.code]),a.createElement(v,null)};function S(e){const[t,l]=(0,a.useState)(),[r,n]=(0,a.useState)();return(0,a.useEffect)((()=>{let e=new b.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:b.b0}}}),l(e);let t=new b.HD({name:"fallback",object:"fallback",Component:e=>a.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>a.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),n(t)}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",null,a.createElement(d.Z,{fallback:a.createElement("div",null,"Hallo")},(()=>a.createElement(y,null,r&&t&&a.createElement(b.z0,{chartRegistry:t,smartRegistry:r,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},a.createElement(T,{code:e.code})))))))}const F=e=>{let{code:t,playgroundPosition:l}=e;const[r,n]=(0,a.useState)(t);return a.createElement("div",{className:"border-slate-300  p-1 "},a.createElement(a.Fragment,null,a.createElement(q,{query:r,onEditQuery:n}),a.createElement(S,{code:r})))};function P(e){let{children:t}=e;return a.createElement("div",{className:(0,n.default)(E.playgroundHeader)},t)}function Z(){return a.createElement("div",null,"Loading...")}function H(e){let{error:t,tryAgain:l}=e;return a.createElement("div",{className:E.errorFallback},a.createElement("p",null,t.message))}function Q(){return a.createElement(d.Z,{fallback:a.createElement(Z,null)},(()=>a.createElement(a.Fragment,null,a.createElement(m.Z,{fallback:e=>a.createElement(H,e)},a.createElement(i.i5,null)),a.createElement(i.IF,null))))}function R(){return a.createElement(a.Fragment,null,a.createElement(P,null,a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:E.playgroundPreview},a.createElement(y,null,a.createElement(Q,null))))}function V(){const e=(0,o.Z)();return a.createElement(i.uz,{key:String(e),className:E.playgroundEditor})}function z(){return a.createElement(a.Fragment,null,a.createElement(P,null,a.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(V,null))}function O(e){let{children:t,transformCode:l,...n}=e;const{siteConfig:{themeConfig:o}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:s}}=o,m=(0,u.p)();if(console.log(n),"language-kraphql"===n.className)return a.createElement(d.Z,null,(()=>a.createElement(F,{code:t,playgroundPosition:s})));const g=n.metastring?.includes("noInline")??!1;return a.createElement("div",{className:E.playgroundContainer},a.createElement(i.nu,(0,r.Z)({code:t.replace(/\n$/,""),noInline:g,transformCode:l??(e=>`${e};`),theme:m},n),"top"===s?a.createElement(a.Fragment,null,a.createElement(R,null),a.createElement(z,null)):a.createElement(a.Fragment,null,a.createElement(z,null),a.createElement(R,null))))}},5522:(e,t,l)=>{l.d(t,{Z:()=>s});var r=l(67294),a=l(27393),n=l(60203),o=l(21127);var i=l(31230);const s={React:r,...r,withMikro:a.R1,useMikroQuery:a.WE,BioImage:e=>{let{image:t}=e;const{s3resolve:l}=(0,n.th)();return r.createElement("div",{className:"h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow "},t.store&&t.shape&&r.createElement(o.Yr,{path:l(t.store),shape:t.shape}),r.createElement("div",{className:"absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent"},t.name," "))},useDatalayer:n.th,gql:i.Ps}}}]);