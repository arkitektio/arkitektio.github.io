"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3303,7918],{18679:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(34334);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},t)}},73992:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(83117),n=r(67294),l=r(34334),i=r(72957),o=r(16550),s=r(75238),u=r(33609),c=r(92560);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=m(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=s??d;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var b=r(51048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==o&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,l.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return n.createElement(E,(0,a.Z)({key:String(t)},e))}},88373:(e,t,r)=>{r.d(t,{Z:()=>R});var a=r(83117),n=r(67294),l=r(90512),i=r(51048),o=r(55607),s=r(97325),u=r(39962),c=r(10748),d=r(4779),m=r(73256);const p={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var h=r(39903),f=r(30210),b=r(97120);const v=()=>n.createElement(n.Fragment,null,"Please connect to your Server first to use this Feature"),g=e=>{let{children:t}=e;return n.createElement(h.k6,{fallback:n.createElement(v,null)},n.createElement(f.J,{fallback:n.createElement(v,null)},n.createElement(b.SS,{fallback:n.createElement(v,null)},t)))};var y=r(61132);r(50085);const E=e=>{const{activeTree:t}=(0,y.UK)();return n.createElement("div",{className:"overflow-y-auto"},t&&n.createElement(y.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))};var k=r(32181),w=r(1616),N=r(74842);function T(e){const t=e.isHeadersEditorEnabled??!0,r=(0,N._i)({nonNull:!0}),a=((0,N.JB)({nonNull:!0}),(0,N.J5)({nonNull:!0}),(0,N.bN)(),(0,N.gp)()),{theme:l,setTheme:i}=((0,N.Xd)({onCopyQuery:e.onCopyQuery}),(0,N.pQ)(),(0,N.fE)(),(0,N.Fg)()),o=(0,N.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:a?.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&a?.setVisiblePlugin(null)},sizeThresholdSecond:200,storageKey:"docExplorerFlex"}),s=(0,N.Xx)({direction:"horizontal",storageKey:"editorFlex"}),u=(0,N.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":r.initialVariables||r.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[c,d]=(0,n.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!r.initialVariables&&r.initialHeaders&&t?"headers":"variables")),[m,p]=(0,n.useState)(null),[h,f]=(0,n.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return n.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},n.createElement("div",{className:"graphiql-main"},n.createElement("div",{className:"graphiql-sessions"},n.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${r.activeTabIndex}`},n.createElement("div",{ref:s.firstRef},n.createElement("div",{className:"graphiql-editors"+(1===r.tabs.length?" full-height":"")},n.createElement("div",{ref:u.firstRef},n.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},n.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},n.createElement(N.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===o.hiddenElement&&o.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const q=e=>{let{query:t,onEditQuery:r}=e;const{config:a}=(0,b.rM)(),{token:l}=(0,f.gX)(),[i,o]=(0,n.useState)(),u=(0,k.nq)({url:a?.endpointUrl||"",headers:{Authorization:`Bearer ${l}`}});return n.createElement(n.Fragment,null,n.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 "},n.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),n.createElement("div",{className:"h-[300px]"},n.createElement(w.j$,{fetcher:u,query:t},n.createElement(T,{onEditQuery:r}))))};var x=r(31230);const I=e=>{const{setActiveQueryData:t}=(0,y.UK)(),{client:r}=(0,b.rM)();return(0,n.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{r.query({query:(0,x.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(a){console.log("e",a)}}}),[e.code]),n.createElement(E,null)};function C(e){const[t,r]=(0,n.useState)(),[a,l]=(0,n.useState)();return(0,n.useEffect)((()=>{let e=new y.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:y.b0}}}),r(e);let t=new y.HD({name:"fallback",object:"fallback",Component:e=>n.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>n.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),l(t)}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},n.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),n.createElement("div",null,n.createElement(c.Z,{fallback:n.createElement("div",null,"Hallo")},(()=>n.createElement(g,null,a&&t&&n.createElement(y.z0,{chartRegistry:t,smartRegistry:a,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},n.createElement(I,{code:e.code})))))))}const S=e=>{let{code:t,playgroundPosition:r}=e;const[a,l]=(0,n.useState)(t);return n.createElement("div",{className:"border-slate-300  p-1 "},n.createElement(n.Fragment,null,n.createElement(q,{query:a,onEditQuery:l}),n.createElement(C,{code:a})))};function Z(e){let{children:t}=e;return n.createElement("div",{className:(0,l.Z)(p.playgroundHeader)},t)}function V(){return n.createElement("div",null,"Loading...")}function P(e){let{error:t,tryAgain:r}=e;return n.createElement("div",{className:p.errorFallback},n.createElement("p",null,t.message))}function j(){return n.createElement(c.Z,{fallback:n.createElement(V,null)},(()=>n.createElement(n.Fragment,null,n.createElement(m.Z,{fallback:e=>n.createElement(P,e)},n.createElement(o.i5,null)),n.createElement(o.IF,null))))}function A(){return n.createElement(n.Fragment,null,n.createElement(Z,null,n.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),n.createElement("div",{className:p.playgroundPreview},n.createElement(g,null,n.createElement(j,null))))}function F(){const e=(0,i.Z)();return n.createElement(o.uz,{key:String(e),className:p.playgroundEditor})}function M(){return n.createElement(n.Fragment,null,n.createElement(Z,null,n.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),n.createElement(F,null))}function R(e){let{children:t,transformCode:r,...l}=e;const{siteConfig:{themeConfig:i}}=(0,u.Z)(),{liveCodeBlock:{playgroundPosition:s}}=i,m=(0,d.p)();if(console.log(l),"language-kraphql"===l.className)return n.createElement(c.Z,null,(()=>n.createElement(S,{code:t,playgroundPosition:s})));const h=l.metastring?.includes("noInline")??!1;return n.createElement("div",{className:p.playgroundContainer},n.createElement(o.nu,(0,a.Z)({code:t.replace(/\n$/,""),noInline:h,transformCode:r??(e=>`${e};`),theme:m},l),"top"===s?n.createElement(n.Fragment,null,n.createElement(A,null),n.createElement(M,null)):n.createElement(n.Fragment,null,n.createElement(M,null),n.createElement(A,null))))}},5522:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(97120),l=r(60203),i=r(21127);var o=r(31230);const s={React:a,...a,withMikro:n.R1,useMikroQuery:n.WE,BioImage:e=>{let{image:t}=e;const{s3resolve:r}=(0,l.th)();return a.createElement("div",{className:"h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow "},t.store&&t.shape&&a.createElement(i.Yr,{path:r(t.store),shape:t.shape}),a.createElement("div",{className:"absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent"},t.name," "))},useDatalayer:l.th,gql:o.Ps}},81930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=r(83117),n=(r(67294),r(3905)),l=r(73992),i=r(18679),o=r(83696);const s={id:"installation",title:"Installation",sidebar_label:"Installation"},u="Installation",c={unversionedId:"developers/javascript/installation",id:"developers/javascript/installation",title:"Installation",description:"Prerequisites",source:"@site/docs/developers/javascript/installation.mdx",sourceDirName:"developers/javascript",slug:"/developers/javascript/installation",permalink:"/docs/developers/javascript/installation",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/developers/javascript/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Javascript/Typescript",permalink:"/docs/category/javascripttypescript"},next:{title:"Python",permalink:"/docs/category/python"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation-1",level:2},{value:"Usage",id:"usage",level:2}],p={toc:m},h="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation"},"Installation"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Arkitekt Web is build on react and therefore requires react >16 to be installed."),(0,n.kt)("admonition",{title:"React only",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Arkitekt Web support is currently relying exlusively on React and its ecoystem. We are working on\nrefactoring the codebase to support other frameworks as well.")),(0,n.kt)("h2",{id:"installation-1"},"Installation"),(0,n.kt)("p",null,"The fully working arkitekt with all subservices can be installed via npm or yarn."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"npm install @jhnnsrs/arkitekt")),(0,n.kt)(i.Z,{value:"yarb",label:"yarn",mdxType:"TabItem"},(0,n.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"yarn add @jhnnsrs/arkitekt"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Arkitekts functionaly is within the Arkitekt Provider that itself sets up providers for\nthe related services."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ArkitektProvider } from "@jhnnsrs/arkitekt";\nimport { useMikroQuery, MikroGuard } from "@jhnnsrs/mikro";\n\nexport const InnerApp = () => {\n  const [data] = useMikroQuery(\n    gql```\n    query {\n      myrepresentations {\n        id\n        name\n      }\n    }\n  ```\n  ); // Once configured this will return the data from the query\n\n  return <>{JSON.stringify(data)}</>\n};\n\nexport const App = () => {\n  return (\n    <ArkitektProvider>\n        <MikroGuard fallback={<div>Mikro is not connected</div>}> {/* // This will only render the children if mikro is connected */}\n           <InnerApp>\n      </MikroGuard>\n    </ArkitektProvider>\n  );\n};\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This app will not work as is. You need to use both ",(0,n.kt)("inlineCode",{parentName:"p"},"fakts")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"herre")," to first\nconfigure the connected and then authenticate with them.")),(0,n.kt)("p",null,'This documentation provides examples to be used with "react-router" and authenticating\nyour web app as a public app (an app that users can login in with and authorize).'))}f.isMDXComponent=!0}}]);