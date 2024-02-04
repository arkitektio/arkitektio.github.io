"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3866],{41746:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var o=s(67294),a=s(39962),n=s(78126),r=s(37274),l=s(1616),i=s(10748),c=s(85398),d=s(61872),h=s(28087),p=s(83699),m=s(85893);const f=(0,c.o)({}),k=e=>{let t=`graphiql:${e}.`;return{getItem:e=>localStorage.getItem(`${t}.${e}`),setItem:(e,s)=>{localStorage.setItem(`${t}.${e}`,s)},removeItem:e=>{localStorage.removeItem(`${t}.${e}`)},clear:()=>{for(let e=0;e<localStorage.length;e++){const s=localStorage.key(e);s&&s.startsWith(t)&&localStorage.removeItem(s)}},get length(){let e=0;for(let s=0;s<localStorage.length;s++){const o=localStorage.key(s);o&&o.startsWith(t)&&e++}return e}}},u=e=>{const{token:t}=(0,d.PB)(),{fakts:s}=(0,d.pJ)(),o=(0,r.nq)({url:s[e.faktsKey]?.endpoint_url,headers:{Authorization:`Bearer ${t}`}}),a=k(e.storageKey);return(0,m.jsx)("div",{className:"h-full",children:(0,m.jsx)("div",{className:"h-full",children:o&&(0,m.jsx)(l.yB,{fetcher:o,defaultQuery:"",plugins:[f],storage:a})})})},x=e=>{const t=(e=>{const t=(0,r.nq)({url:e.faktsKey,headers:{}});return console.log("Initiated fetcher",t),(t,s)=>(console.log("Fetcher",t,s),"IntrospectionQuery"===t.operationName?(console.log("IntrospectionQuery",e.schema),fetch(e.schema).then((e=>e.json())).then((e=>(console.log("Response",e),{data:e,errors:[]}))).catch((t=>(console.error(t),{data:{},errors:[new h.__("Could not fetch schema from "+e.schema)]})))):Promise.resolve({data:{},errors:[{message:"Live features only availabe if your connect your Arkitekt Instance"}]}))})(e),s=k(e.storageKey);return(0,m.jsx)("div",{className:"flex-grow",children:(0,m.jsx)("div",{className:"h-full",children:t&&(0,m.jsx)(l.yB,{fetcher:t,defaultQuery:"",plugins:[f],storage:s})})})},g=e=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"flex flex-grow h-full flex-col",children:(0,m.jsx)("div",{className:"flex-grow flex overflow-y-auto",children:(0,m.jsx)(d._H,{noAppFallback:(0,m.jsx)(m.Fragment,{children:"Not connected"}),notConnectedFallback:(0,m.jsx)(x,{faktsKey:e.faktsKey,storageKey:e.faktsKey,schema:e.schema}),notLoggedInFallback:(0,m.jsx)(x,{faktsKey:e.faktsKey,storageKey:e.faktsKey,schema:e.schema}),children:(0,m.jsx)(u,{faktsKey:e.faktsKey,storageKey:e.faktsKey})})})})}),y=e=>{let{onChange:t,value:s,options:o}=e;return(0,m.jsxs)("div",{className:"flex-initial flex flex-row pl-20 gap-2 h-10 mt-2 pr-10",children:[(0,m.jsx)("div",{className:"py-2 px-2 h-10 my-auto text-slate-600",children:" Core Services"}),o.filter((e=>e.core)).map((e=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("button",{onClick:()=>t(e),disabled:e.faktsKey==s.faktsKey,className:"appearance-none bg-slate-700 hover:bg-slate-400 text-slate-200 font-light py-2 px-2 rounded inline-flex items-center cursor-pointer disabled:opacity-100 opacity-30 transition duration-500 ease-in-out",children:e.label})}))),(0,m.jsx)("div",{className:"py-2 px-2 h-10 my-auto text-slate-600",children:" Optional Services"}),o.filter((e=>!e.core)).map((e=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("button",{onClick:()=>t(e),disabled:e.faktsKey==s.faktsKey,className:"appearance-none bg-slate-700 hover:bg-slate-400 text-slate-200 font-light py-2 px-2 rounded inline-flex items-center cursor-pointer disabled:opacity-100 opacity-30 transition duration-500 ease-in-out",children:e.label})}))),(0,m.jsx)("div",{className:"flex-grow"}),(0,m.jsx)("div",{className:"flex-initial px-3  text-slate-600 my-auto max-w-50",children:s.description}),(0,m.jsx)(p.Z,{to:"docs/design/api",className:"flex-initial my-auto",children:"What am I Seeing?"})]})},j=e=>{let{options:t}=e;const[s,a]=o.useState(t.at(0));return(0,m.jsxs)("div",{className:"flex flex-col h-[95%] w-full overflow-y-auto",children:[(0,m.jsx)(g,{...s}),(0,m.jsx)(y,{value:s,onChange:e=>a(e),options:t})]})},K=[{faktsKey:"mikro",label:"Mikro",schema:"/introspections/mikro.introspection.json",description:"Mikro handles all things microscopy",core:!0},{faktsKey:"rekuest",label:"Rekuest",schema:"/introspections/rekuest.introspection.json",description:"Rekuest manages Nodes and Tasks",core:!0},{faktsKey:"port",label:"Port",schema:"/introspections/port.introspection.json",description:"Port manages containers and apps",core:!0},{faktsKey:"unlok",label:"Lok",schema:"/introspections/unlok.introspection.json",description:"User management and authentication",core:!0},{faktsKey:"fluss",label:"Fluss",schema:"/introspections/fluss.introspection.json",description:"Workflow management and execution log",core:!0},{faktsKey:"kabinet",label:"Kabinet",schema:"/introspections/kabinet.introspection.json",description:"Kabinet will manage all things apps in the future"},{faktsKey:"kluster",label:"Kluster",schema:"/introspections/kluster.introspection.json",description:"Kluster spawns and manages dask clusters on demand"},{faktsKey:"konviktion",label:"Konviktion",schema:"/introspections/konviktion.introspection.json",description:"Connects your data to notion and back"},{faktsKey:"mikro_next",label:"Mikro (Next)",schema:"/introspections/mikro_next.introspection.json",description:"Mikro handles all things microscopy"},{faktsKey:"omero_ark",label:"OmeroArk (Next)",schema:"/introspections/omero_ark.introspection.json",description:"Your Omero server gateway"}],b=()=>(0,m.jsx)(i.Z,{fallback:(0,m.jsx)("div",{children:"Hallo"}),children:()=>(0,m.jsx)(j,{options:K})});function v(){const{siteConfig:e}=(0,a.Z)();return(0,m.jsx)(n.Z,{title:`${e.title} Explorer`,description:"This is the graphql explorer for the api.",children:(0,m.jsx)("main",{className:"h-screen",children:(0,m.jsx)(b,{})})})}}}]);