"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3866],{70358:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var s=l(67294),r=l(39962),n=l(71131),a=l(37274),c=l(1616),o=l(10748),i=l(85398),d=l(61872),x=l(85893);const u=(0,i.o)({}),h=e=>{let{url:t}=e;const{token:l}=(0,d.PB)(),s=(0,a.nq)({url:t,headers:{Authorization:`Bearer ${l}`}}),r=(e=>{let t=`graphiql:${e}.`;return{getItem:e=>localStorage.getItem(`${t}.${e}`),setItem:(e,l)=>{localStorage.setItem(`${t}.${e}`,l)},removeItem:e=>{localStorage.removeItem(`${t}.${e}`)},clear:()=>{for(let e=0;e<localStorage.length;e++){const l=localStorage.key(e);l&&l.startsWith(t)&&localStorage.removeItem(l)}},get length(){let e=0;for(let l=0;l<localStorage.length;l++){const s=localStorage.key(l);s&&s.startsWith(t)&&e++}return e}}})(t);return(0,x.jsx)("div",{className:"h-full",children:(0,x.jsx)("div",{className:"h-full",children:s&&(0,x.jsx)(c.yB,{fetcher:s,defaultQuery:"",plugins:[u],storage:r})})})},m=e=>{let{onChange:t,value:l,options:s}=e;return(0,x.jsxs)("div",{className:"flex flex-row px-4",children:[(0,x.jsxs)("div",{className:"flex flex-col",children:[(0,x.jsxs)("div",{className:"flex  p-2  text-xl font-light text-slate-200 rounded-t-md border-none border-0",children:["API Explorer"," "]}),(0,x.jsxs)("div",{className:"px-2 my-auto text-xs text-slate-200",children:[" ","Explore your connected GraphQL Apis"]})]}),(0,x.jsx)("div",{className:"flex-grow"}),(0,x.jsxs)("div",{className:"flex flex-col",children:[(0,x.jsxs)("div",{className:" my-auto text-xs text-slate-200 text-end",children:["API Endpoint"," "]}),(0,x.jsx)("div",{className:"flex flex-row gap-2 my-auto ",children:s.map((e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("button",{onClick:()=>t(e.url),disabled:e.url==l,className:"appearance-none bg-slate-700 hover:bg-slate-400 text-slate-200 font-light py-2 px-2 rounded inline-flex items-center cursor-pointer disabled:opacity-100 opacity-30 ",children:e.label})})))})]})]})},p=e=>{let{options:t}=e;const[l,r]=s.useState(t.at(0).url);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{value:l,onChange:e=>r(e),options:t}),(0,x.jsx)(h,{url:l}),";"]})},f=()=>{const[e,t]=s.useState([]),{fakts:l}=(0,d.pJ)();return s.useEffect((()=>{if(!l)return;let e=[];Object.keys(l).forEach((t=>{console.log(t);const s=l[t].endpoint_url,r=t;s&&s.includes("graphql")&&e.push({url:s,label:r})})),t(e)}),[l]),(0,x.jsx)("div",{className:"h-full",children:e&&e.length>=1&&(0,x.jsx)(p,{options:e})})},g=()=>{const{login:e,loading:t}=(0,d.PB)(),{fakts:l,remove:s}=(0,d.pJ)();return(0,x.jsxs)("div",{className:"h-full flex flex-col flex-1 items-center justify-center dark:text-white ",children:[(0,x.jsxs)("div",{className:"px-2 py-2 flex flex-col items-center justify-center",children:[(0,x.jsx)("div",{className:"text-slate-200 justify-center  items-center align-center",children:"You are connected!"}),(0,x.jsx)("div",{className:"text-slate-600 text-xs",children:"You are logged in with this demo website with arkitekt. Just authenticate yourself and you are ready to go"})]}),(0,x.jsx)("div",{className:"flex flex-row w-full gap-2 justify-center p-3",children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{className:"px-2  py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md "+(t?"animate-pulse":""),onClick:()=>e(),children:(0,x.jsx)("div",{className:"text-md text-center",children:"Login"})}),(0,x.jsx)("button",{className:"px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md text-md",onClick:()=>s(),children:" Unconnect"})]})})]})},j=()=>{const{registeredEndpoints:e,load:t,fakts:l,loading:s}=(0,d.pJ)();return(0,x.jsxs)("div",{className:"h-full flex flex-col flex-1 items-center justify-center dark:text-white ",children:[(0,x.jsx)("div",{className:"text-slate-200 justify-center ",children:"Lets get you connected!"}),(0,x.jsx)("div",{className:"text-slate-600 text-xs",children:"You are not currently connected. Here connectable instances will appear (currently restricted to local arkitekt instance)"}),(0,x.jsx)("div",{className:"flex flex-row gap-2 justify-start p-3",children:s?(0,x.jsx)("div",{className:"animate-pulse cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md px-2 py-2 ",onClick:()=>t(),children:"Cancel connection"}):e.map((e=>(0,x.jsxs)("button",{className:"px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md flex flex-col",onClick:()=>t({endpoint:e,requestPublic:!0}),children:[" ",(0,x.jsx)("div",{className:"text-2xl text-center",children:e.name}),e.base_url]})))})]})},y=e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(d._H,{noAppFallback:(0,x.jsx)(x.Fragment,{children:"Not connected"}),notConnectedFallback:(0,x.jsx)(j,{}),notLoggedInFallback:(0,x.jsx)(g,{}),children:e.children})}),v=()=>(0,x.jsx)(o.Z,{fallback:(0,x.jsx)("div",{children:"Hallo"}),children:()=>(0,x.jsx)(y,{children:(0,x.jsx)(f,{})})});function b(){const{siteConfig:e}=(0,r.Z)();return(0,x.jsx)(n.Z,{title:`${e.title} Explorer`,description:"This is the graphql explorer for the api.",children:(0,x.jsx)("main",{className:"h-screen",children:(0,x.jsx)(v,{})})})}}}]);