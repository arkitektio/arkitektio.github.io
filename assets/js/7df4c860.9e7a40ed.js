(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1635],{86515:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/interactive.69d3fc1.640.png 640w,"+a.p+"assets/ideal-img/interactive.d54f224.1320.png 1320w,"+a.p+"assets/ideal-img/interactive.903a6b0.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/interactive.69d3fc1.640.png",width:640,height:461},{path:a.p+"assets/ideal-img/interactive.d54f224.1320.png",width:1320,height:949},{path:a.p+"assets/ideal-img/interactive.903a6b0.2000.png",width:2e3,height:1438}],src:a.p+"assets/ideal-img/interactive.69d3fc1.640.png",toString:function(){return a.p+"assets/ideal-img/interactive.69d3fc1.640.png"},placeholder:void 0,width:640,height:461},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVQYlQEfAeD+ADY+QwA8KE0ARyBaACUEPQBYPWgA////AD8IXvE/C2BjHGieIjRLhxcANjxBWzYnRWQ6HUthbDhoiWtJbGbFxsaPhV962a6XobRZcJH1MVB8QgA4RUn5Zi6G/4gjs/+CLar/i1Ol/8TJwG8AAAAAXKPTSK+yrMG0rKxsACgzNepoKYn9kyzH94spwP9/H6q97Kf/ABkA8AINivAyip/RJmBFd/EAHCUm8mYmiP+XKc3/jUWw/4lfndL///8A6c2sAP///wCjorEzuK6qrwAmLDDYPiNR7UINW+iYjp39ytLI/6qpqpLPyc9ForTIjVRdjOlNUYNnACsoNA0rXBoYAAAAD5CTj4C7obHGv7C1frnQz+O50M/YraCQapiIZSiVT4frY5LVSwAAAABJRU5ErkJggg=="}},33850:(e,t,a)=>{"use strict";a(61872),a(97120),a(67294),a(30210)},71698:(e,t,a)=>{"use strict";a.d(t,{I:()=>m});var n=a(37887),i=a(69819),r=a(31230),l=a(67294);const o=r.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,s=r.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",m=(0,i.Zh)((e=>{let{branch:t,repo:a,user:r}=e;const{client:m}=(0,i.AA)(),c=`${r}/${a}:${t}`,{data:u,refetch:p}=(0,n.a)(s,{client:m,variables:{tag:c},pollInterval:3e3});return l.createElement(l.Fragment,null,u?.githubRepo?l.createElement("button",{className:d+"bg-green-300"}," \u2705 ",c):l.createElement("button",{onClick:async()=>{try{const{data:e}=await m.mutate({mutation:o,variables:{branch:t,repo:a,user:r}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",c))}),l.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},88545:(e,t,a)=>{"use strict";a.d(t,{x:()=>s});var n=a(97120),i=a(31230),r=a(67294);const l=i.ZP`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`,o="my-2 p-2 rounded-md text-black text-center w-60 ",s=(0,n.nk)((e=>{let{url:t,name:a,kind:i}=e;const{client:s}=(0,n.rM)();return r.createElement(r.Fragment,null,r.createElement("button",{onClick:async()=>{console.log(t);try{const e=await fetch(t);if(!e.ok)throw new Error("Failed fetching file from Documentation");const n=await e.blob(),r=new File([n],"model.zip",{type:n.type}),{data:o}=await s.mutate({mutation:l,variables:{name:a,kind:i,data:r}});console.log(o)}catch(e){console.log(e)}},className:o+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",a))}),r.createElement("div",{className:o+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},27859:(e,t,a)=>{"use strict";a.d(t,{Dr:()=>o,Hp:()=>l});var n=a(67294),i=a(63750),r=a(89583);const l=e=>{let{children:t}=e;return n.createElement("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 "},n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto "},n.createElement("div",{className:"my-auto mr-2"},n.createElement(r._Aq,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Linux")),n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(i.L1p,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Windows")),n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(r.oPZ,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Mac")))},o=e=>{let{children:t}=e;return n.createElement("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 "},n.createElement("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto "},n.createElement("div",{className:"my-auto mr-2"},n.createElement(r._Aq,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Linux")),n.createElement("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(i.L1p,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Windows")),n.createElement("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(r.oPZ,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Mac")))}},30681:(e,t,a)=>{"use strict";a.d(t,{n:()=>ee});var n=a(67294),i=a(98268),r=a(97724);function l(e){return null!=e}const o=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,s=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function d(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(o,"").replace(s,"{");console.log(t);let a=JSON.parse(t);return console.log(a),a}const m=e=>e?.map((e=>{if(e){const{id:t,position:a,__typename:n,...i}=e;return{type:n,id:t,position:a,data:{__typename:n,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(l)||[],c=e=>e?.map((e=>{if(e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,__typename:l,...o}=e;return{id:t,type:l,source:a,sourceHandle:n,target:i,targetHandle:r,data:{__typename:l,...o}}}})).filter(l)||[],u=n.createContext({});var p=a(20263);const g=e=>{const{}=(0,n.useContext)(u),{id:t,sourcePosition:a,targetPosition:r,sourceX:l,sourceY:o,targetX:s,targetY:d,style:m,markerStart:c,markerEnd:g,data:h}=e,[f,y,k]=(0,i.OW)({sourcePosition:a,targetPosition:r,sourceX:l,sourceY:o,targetX:s,targetY:d});return n.createElement(n.Fragment,null,n.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:f}),n.createElement(i.XQ,null,n.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${y}px,${k}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},h?.stream.map(((e,t)=>n.createElement("span",{className:"text-xs",key:t},(e?.kind==p.XTL.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var h=a(54706);const f="border-slate-200 shadow-slate-200/50 dark:border-slate-200 dark:shadow-slate-200/10",y=e=>{let{children:t,id:a,color:i="white"}=e;const[r,l]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${f}`},t))};var k=a(55770),b=a(31230),w=a(83117),_=a(52203),v=a(90512),$=a(57851);function E(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,$.m)((0,v.W)(t))}const N=_.fC,x=_.xz,P=n.forwardRef(((e,t)=>{let{className:a,align:i="center",sideOffset:r=4,...l}=e;return n.createElement(_.h_,null,n.createElement(_.VY,(0,w.Z)({ref:t,align:i,sideOffset:r,className:E("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},l)))}));P.displayName=_.VY.displayName;const T=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),L=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),A=e=>{const{data:t,error:a,loading:i}=(0,k.un)(b.ZP`
    { node(hash: "${e.data.hash}") {
      name
    }
    }
    `);return n.createElement("div",{className:"flex flex-row gap-2 h-full"}," ",a?n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(T,null),n.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.data?.name," ")):n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(L,null),n.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")),n.createElement(N,null,n.createElement(x,{className:"bg-back-700 rounded rounded-md cursor-pointer"},"?"),n.createElement(P,{className:"text-xs bg-back-800 my-auto"}," ",e.data?.description)))},S=(0,h.XC)((e=>{let{data:t,id:a}=e;const{isExpanded:r,toggleExpanded:l}=(0,h.Tm)();t.kind;return n.createElement(y,{id:a},t.instream.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+a}))),t.outstream.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event"}))),n.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full "},n.createElement(k.Z6,{fallback:n.createElement(n.Fragment,null," ",t?.name)},n.createElement(A,{data:t})),r&&n.createElement(n.Fragment,null,n.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"}))))})),C=(0,h.XC)((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[l,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"blue",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r}))))}));var W=a(63750);const I=(0,h.XC)((e=>{let{data:{constream:t},id:a}=e;const[i,r]=(0,n.useState)(!1),[l,o]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"green",id:a},!l&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex"},t?.map(((e,t)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+a},n.createElement("div",{className:"flex justify-between"},n.createElement("button",{type:"button",onClick:()=>alert("implement")},n.createElement(W.yvY,null))))))))),n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>o(!l)},"Constants"," "),n.createElement("p",{className:"text-gray-700 text-base"}))))})),R={ArkitektNode:S,ArkitektFilterNode:S,LocalNode:S,ReactiveNode:e=>{let{data:{outstream:t,instream:a,constream:r,implementation:l},id:o}=e;return n.createElement(n.Fragment,null,n.createElement("div",{style:{width:40},className:"custom-drag-handle"},l&&[p.J5d.Combinelatest,p.J5d.Withlatest].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l&&[p.J5d.Gate].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-500)"}})),l&&[p.J5d.Filter].includes(l)&&n.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},n.createElement("h1",null,l)),l&&[p.J5d.Split].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l&&[p.J5d.ToList,p.J5d.BufferComplete].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,l)),l&&[p.J5d.Chunk].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,l)),l&&[p.J5d.Omit].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},l)),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r?.map(((e,t,a)=>n.createElement(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),a?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/a.length*t+45/a.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/a.length*t+46/a.length+"%",background:"#555"}})))))},ArgNode:C,ReturnNode:(0,h.XC)((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[l,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"red",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),n.createElement("p",{className:"text-gray-700 text-base"},n.createElement(n.Fragment,null,a[0]?.map((e=>e?.kind)).join(" | "),n.createElement("br",null)),!s&&n.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>o(!0)},"Add Documentation")))),a.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),KwargNode:I,GraphNode:()=>null},D={LabeledEdge:g,FancyEdge:g},F=e=>{let{flow:t}=e;const[a,l,o]=(0,i.Rr)(m(t.graph?.nodes)),[s,d,p]=(0,i.ll)(c(t.graph?.edges));return n.createElement(u.Provider,{value:{flow:t}},n.createElement(r.k,{nodes:a,edges:s,onNodesChange:o,onEdgesChange:p,elementsSelectable:!0,nodeTypes:R,edgeTypes:D,fitView:!0,attributionPosition:"bottom-right"}))};var O=a(30210),U=a(39903);const B=e=>{const{user:t}=(0,O.gX)(),{fakts:a}=(0,U.sT)();return n.createElement("div",{className:"relative "+e.className},e.children,!t||!a&&n.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var q=a(68947),G=a(50319),H=a(12854),z=a(79592);const M=H.fC,j=(H.xz,H.h_),K=(H.x8,n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(H.aV,(0,w.Z)({ref:t,className:E("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},i))})));K.displayName=H.aV.displayName;const Y=n.forwardRef(((e,t)=>{let{className:a,children:i,...r}=e;return n.createElement(j,null,n.createElement(K,null),n.createElement(H.VY,(0,w.Z)({ref:t,className:E("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a)},r),i,n.createElement(H.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(z.Z,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));Y.displayName=H.VY.displayName;const J=e=>{let{className:t,...a}=e;return n.createElement("div",(0,w.Z)({className:E("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};J.displayName="DialogHeader";const Z=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(H.Dx,(0,w.Z)({ref:t,className:E("text-lg font-semibold leading-none tracking-tight",a)},i))}));Z.displayName=H.Dx.displayName;const X=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(H.dk,(0,w.Z)({ref:t,className:E("text-sm text-muted-foreground",a)},i))}));X.displayName=H.dk.displayName;const V=b.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
}
`,Q=e=>{let{flow:t,blockImport:a}=e;const{client:i}=(0,q.dB)(),[r,o]=(0,G.D)(V,{client:i}),[s,u]=(0,n.useState)(!1),p=async()=>{try{const a=(e=m(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:a,type:n,parentNode:i,data:{outstream:r,constream:o,instream:s,...m}}=e;return{outstream:r?.map((e=>e?e.filter(l).map(d):[]))||[[]],constream:o?.map((e=>e?e.filter(l).map(d):[]))||[[]],instream:s?.map((e=>e?e.filter(l).map(d):[]))||[[]],id:t,position:{x:a.x,y:a.y},typename:n||"Fake type",name:m.name,description:m.description,hash:m.hash,implementation:m.implementation,kind:m.kind,defaults:m.defaults,mapStrategy:m.mapStrategy,allowLocal:m.allowLocal,maxRetries:m.maxRetries,retryDelay:m.retryDelay,binds:m.binds,parentNode:i,interface:m.interface}}})).filter(l)||[]||[]),n=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,type:o,data:s}=e;return{id:t,typename:o||"Fake type",source:a,sourceHandle:n||"returns",target:i,targetHandle:r||"args",stream:s?.stream.filter(l).map(d)||[]}}})).filter(l)||[])(c(t.graph.edges));let i={nodes:a.filter(l).map(d),edges:n.filter(l).map(d),globals:t.graph.globals.filter(l).map(d),args:t.graph.args.filter(l).map(d),returns:t.graph.returns.filter(l).map(d)};await r({variables:{name:t.name,graph:i}});u(!0)}catch(a){alert(a.message)}var e};return n.createElement(n.Fragment,null,n.createElement(M,{open:s,onOpenChange:u},n.createElement(Y,null,n.createElement(J,null,n.createElement(Z,null,"Succesfully imported workflow"),n.createElement(X,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),n.createElement("button",{onClick:()=>p(),disabled:a,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},ee=e=>n.createElement("div",{className:"border border-1 rounded border-gray-800"},n.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},n.createElement(F,{flow:e.flow})),n.createElement(B,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},n.createElement(q.Ot,null,n.createElement(Q,{flow:e.flow,blockImport:e.blockImport}))))},33346:(e,t,a)=>{"use strict";a.d(t,{L:()=>i});var n=a(67294);const i=e=>n.createElement(n.Fragment,null,"CONNECTED")},20263:(e,t,a)=>{"use strict";a.d(t,{J5d:()=>i,XTL:()=>r});var n=a(31230);let i=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),r=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const l=n.Ps`
    fragment Leaf on Leaf {
  typename: __typename
  bold
  italic
  code
  text
}
    `,o=(n.Ps`
    fragment LevelDownDescendent on Descendent {
  typename: __typename
  ...Leaf
}
    ${l}`,n.Ps`
    fragment LevelDownParagraph on ParagraphDescendent {
  size
  untypedChildren
}
    `),s=n.Ps`
    fragment LevelDownMention on MentionDescendent {
  user {
    sub
  }
}
    `,d=n.Ps`
    fragment Node on CommentNode {
  typename: __typename
  children {
    typename: __typename
    ...Leaf
    ...LevelDownParagraph
    ...LevelDownMention
  }
}
    ${l}
${o}
${s}`,m=n.Ps`
    fragment Mention on MentionDescendent {
  user {
    sub
  }
  ...Node
}
    ${d}`,c=n.Ps`
    fragment Paragraph on ParagraphDescendent {
  size
  ...Node
}
    ${d}`,u=n.Ps`
    fragment Descendent on Descendent {
  typename: __typename
  ...Mention
  ...Paragraph
  ...Leaf
}
    ${m}
${c}
${l}`,p=n.Ps`
    fragment SubthreadComment on Comment {
  user {
    sub
  }
  parent {
    id
  }
  createdAt
  descendents {
    ...Descendent
  }
}
    ${u}`,g=n.Ps`
    fragment ListComment on Comment {
  user {
    sub
  }
  parent {
    id
  }
  descendents {
    ...Descendent
  }
  resolved
  resolvedBy {
    sub
  }
  id
  createdAt
  children {
    ...SubthreadComment
  }
}
    ${u}
${p}`,h=n.Ps`
    fragment MentionComment on Comment {
  user {
    sub
  }
  parent {
    id
  }
  descendents {
    ...Descendent
  }
  id
  createdAt
  children {
    ...SubthreadComment
  }
  mentions {
    id
    sub
  }
  resolved
  resolvedBy {
    sub
  }
  objectId
  contentType
}
    ${u}
${p}`,f=n.Ps`
    fragment DetailComment on Comment {
  user {
    sub
  }
  parent {
    id
  }
  descendents {
    ...Descendent
  }
  id
  resolved
  resolvedBy {
    sub
  }
  createdAt
  children {
    ...SubthreadComment
  }
  mentions {
    sub
  }
  objectId
  contentType
}
    ${u}
${p}`,y=n.Ps`
    fragment ConditionEvent on ConditionEvent {
  id
  source
  createdAt
  value
  state
}
    `,k=n.Ps`
    fragment ConditionSnapshot on ConditionSnapshot {
  id
  condition {
    id
    provision
  }
  status
  events {
    ...ConditionEvent
  }
}
    ${y}`,b=n.Ps`
    fragment ListConditionSnapshot on ConditionSnapshot {
  id
  condition {
    id
    provision
  }
}
    `,w=n.Ps`
    fragment Widget on Widget {
  kind
  query
  hook
  ward
  min
  step
  placeholder
  max
  choices {
    value
    label
  }
  asParagraph
}
    `,_=n.Ps`
    fragment ReturnWidget on ReturnWidget {
  kind
  query
  choices {
    value
    label
  }
}
    `,v=n.Ps`
    fragment PortChildNested on PortChild {
  scope
  identifier
  kind
  nullable
  assignWidget {
    ...Widget
  }
  returnWidget {
    ...ReturnWidget
  }
  child {
    identifier
    scope
    kind
    nullable
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
  }
  variants {
    identifier
    scope
    kind
    nullable
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
  }
}
    ${w}
${_}`,$=n.Ps`
    fragment PortChild on PortChild {
  identifier
  kind
  scope
  nullable
  assignWidget {
    ...Widget
  }
  returnWidget {
    ...ReturnWidget
  }
  child {
    ...PortChildNested
  }
  variants {
    ...PortChildNested
  }
}
    ${w}
${_}
${v}`,E=n.Ps`
    fragment Port on Port {
  key
  label
  identifier
  scope
  kind
  description
  assignWidget {
    ...Widget
  }
  returnWidget {
    ...ReturnWidget
  }
  child {
    ...PortChild
  }
  variants {
    ...PortChild
  }
  nullable
}
    ${w}
${_}
${$}`,N=n.Ps`
    fragment FlowNodeCommons on FlowNodeCommons {
  instream {
    ...Port
  }
  outstream {
    ...Port
  }
  constream {
    ...Port
  }
  constants
  name
  description
}
    ${E}`,x=n.Ps`
    fragment RetriableNode on RetriableNode {
  maxRetries
  retryDelay
}
    `,P=n.Ps`
    fragment ArkitektNode on ArkitektNode {
  ...FlowNodeCommons
  ...RetriableNode
  __typename
  hash
  kind
  defaults
  mapStrategy
  allowLocal
  binds {
    clients
    templates
  }
  assignTimeout
  yieldTimeout
  reserveTimeout
  maxRetries
}
    ${N}
${x}`,T=n.Ps`
    fragment ArkitektFilterNode on ArkitektFilterNode {
  ...FlowNodeCommons
  ...RetriableNode
  __typename
  hash
  kind
  defaults
  mapStrategy
  allowLocal
  binds {
    clients
    templates
  }
  assignTimeout
  yieldTimeout
  reserveTimeout
  maxRetries
}
    ${N}
${x}`,L=n.Ps`
    fragment ReactiveNode on ReactiveNode {
  ...FlowNodeCommons
  __typename
  implementation
  defaults
}
    ${N}`,A=n.Ps`
    fragment ArgNode on ArgNode {
  ...FlowNodeCommons
  __typename
}
    ${N}`,S=n.Ps`
    fragment KwargNode on KwargNode {
  ...FlowNodeCommons
  __typename
}
    ${N}`,C=n.Ps`
    fragment ReturnNode on ReturnNode {
  ...FlowNodeCommons
  __typename
}
    ${N}`,W=n.Ps`
    fragment LocalNode on LocalNode {
  ...FlowNodeCommons
  ...RetriableNode
  __typename
  interface
  hash
  kind
  defaults
  mapStrategy
  allowLocal
  assignTimeout
  yieldTimeout
  maxRetries
}
    ${N}
${x}`,I=n.Ps`
    fragment GraphNode on GraphNode {
  ...FlowNodeCommons
  __typename
}
    ${N}`,R=n.Ps`
    fragment FlowNode on FlowNode {
  id
  position {
    x
    y
  }
  typename
  parentNode
  ...ArkitektNode
  ...ArkitektFilterNode
  ...ReactiveNode
  ...ArgNode
  ...KwargNode
  ...ReturnNode
  ...LocalNode
  ...GraphNode
}
    ${P}
${T}
${L}
${A}
${S}
${C}
${W}
${I}`,D=n.Ps`
    fragment StreamItemChild on StreamItemChild {
  kind
  identifier
  scope
  nullable
  child {
    scope
    kind
    nullable
    identifier
  }
  variants {
    scope
    kind
    nullable
    identifier
  }
}
    `,F=n.Ps`
    fragment StreamItem on StreamItem {
  key
  kind
  identifier
  scope
  nullable
  child {
    ...StreamItemChild
  }
  variants {
    ...StreamItemChild
  }
}
    ${D}`,O=n.Ps`
    fragment FlowEdgeCommons on FlowEdgeCommons {
  stream {
    ...StreamItem
  }
}
    ${F}`,U=n.Ps`
    fragment LabeledEdge on LabeledEdge {
  ...FlowEdgeCommons
  __typename
}
    ${O}`,B=n.Ps`
    fragment FancyEdge on FancyEdge {
  ...FlowEdgeCommons
  __typename
}
    ${O}`,q=n.Ps`
    fragment FlowEdge on FlowEdge {
  id
  source
  sourceHandle
  target
  targetHandle
  typename
  ...LabeledEdge
  ...FancyEdge
}
    ${U}
${B}`,G=n.Ps`
    fragment Global on Global {
  toKeys
  port {
    ...Port
  }
}
    ${E}`,H=n.Ps`
    fragment Flow on Flow {
  __typename
  id
  graph {
    nodes {
      ...FlowNode
    }
    edges {
      ...FlowEdge
    }
    globals {
      ...Global
    }
    args {
      ...Port
    }
    returns {
      ...Port
    }
  }
  restrict
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    ${R}
${q}
${G}
${E}`,z=n.Ps`
    fragment Condition on Condition {
  id
  snapshots {
    id
    status
    createdAt
  }
  provision
  createdAt
  latestSnapshot {
    createdAt
    events {
      ...ConditionEvent
    }
  }
  flow {
    ...Flow
  }
}
    ${y}
${H}`,M=n.Ps`
    fragment ListCondition on Condition {
  id
  provision
  createdAt
  flow {
    id
    name
    workspace {
      name
    }
  }
}
    `,j=n.Ps`
    fragment ListFlow on Flow {
  id
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    `,K=n.Ps`
    fragment ListWorkspace on Workspace {
  id
  name
  latestFlow {
    ...ListFlow
  }
}
    ${j}`,Y=n.Ps`
    fragment Workspace on Workspace {
  id
  name
  latestFlow {
    ...Flow
  }
}
    ${H}`,J=(n.Ps`
    fragment RunLog on RunLog {
  id
  node
  log
}
    `,n.Ps`
    fragment ReactiveTemplate on ReactiveTemplate {
  constream {
    ...Port
  }
  instream {
    ...Port
  }
  outstream {
    ...Port
  }
  name
  implementation
  description
  id
  constants {
    ...Port
  }
}
    ${E}`),Z=n.Ps`
    fragment RunEvent on RunEvent {
  id
  source
  handle
  type
  createdAt
  value
  t
  causedBy
}
    `,X=n.Ps`
    fragment Snapshot on Snapshot {
  id
  run {
    id
    assignation
  }
  status
  events {
    ...RunEvent
  }
  t
}
    ${Z}`,V=n.Ps`
    fragment ListSnapshot on Snapshot {
  id
  run {
    id
    assignation
  }
  t
}
    `,Q=n.Ps`
    fragment Run on Run {
  id
  status
  assignation
  snapshots {
    id
    status
    t
    createdAt
  }
  createdAt
  latestSnapshot {
    createdAt
    events {
      ...RunEvent
    }
    t
  }
  flow {
    ...Flow
  }
}
    ${Z}
${H}`,ee=n.Ps`
    fragment ExportRun on Run {
  id
  status
  assignation
  snapshots {
    id
    status
    t
    createdAt
  }
  createdAt
  events {
    ...RunEvent
  }
  flow {
    ...Flow
  }
}
    ${Z}
${H}`,te=n.Ps`
    fragment ListRun on Run {
  id
  status
  assignation
  createdAt
  flow {
    id
    name
    workspace {
      name
    }
  }
}
    `;n.Ps`
    mutation CreateComment($id: ID!, $model: CommentableModels!, $descendents: [DescendendInput]!, $parent: ID) {
  createComment(
    object: $id
    type: $model
    descendents: $descendents
    parent: $parent
  ) {
    ...ListComment
  }
}
    ${g}`;n.Ps`
    mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
  replyTo(descendents: $descendents, parent: $parent) {
    ...ListComment
  }
}
    ${g}`;n.Ps`
    mutation ResolveComment($id: ID!) {
  resolveComment(id: $id) {
    ...ListComment
  }
}
    ${g}`;n.Ps`
    mutation DeleteCondition($id: ID!) {
  deleteCondition(id: $id) {
    id
  }
}
    `;n.Ps`
    mutation pinCondition($id: ID!, $pin: Boolean!) {
  pinCondition(id: $id, pin: $pin) {
    id
    pinnedBy {
      id
      email
    }
    pinned
  }
}
    `;n.Ps`
    mutation UpdateFlow($id: ID!, $graph: GraphInput!, $screenshot: ImageFile) {
  updateworkspace(id: $id, graph: $graph, screenshot: $screenshot) {
    ...Workspace
  }
}
    ${Y}`;n.Ps`
    mutation DeleteFlow($id: ID!) {
  deleteFlow(id: $id) {
    id
  }
}
    `;n.Ps`
    mutation CreateVanillaDiagram($name: String, $restrict: [String]) {
  drawvanilla(name: $name, restrict: $restrict) {
    ...Workspace
  }
}
    ${Y}`;n.Ps`
    mutation ImportFlow($name: String, $graph: GraphInput!) {
  importflow(name: $name, graph: $graph) {
    ...Workspace
  }
}
    ${Y}`;n.Ps`
    mutation pinFlow($id: ID!, $pin: Boolean!) {
  pinFlow(id: $id, pin: $pin) {
    id
    pinnedBy {
      id
      email
    }
    pinned
  }
}
    `;n.Ps`
    mutation DeleteSnapshot($id: ID!) {
  deleteSnapshot(id: $id) {
    id
  }
}
    `;n.Ps`
    mutation DeleteRun($id: ID!) {
  deleteRun(id: $id) {
    id
  }
}
    `;n.Ps`
    mutation PinRun($id: ID!, $pin: Boolean!) {
  pinRun(id: $id, pin: $pin) {
    id
    pinnedBy {
      id
      email
    }
    pinned
  }
}
    `;n.Ps`
    mutation DeleteWorkspace($id: ID!) {
  deleteWorkspace(id: $id) {
    id
  }
}
    `;n.Ps`
    mutation PinWorkspace($id: ID!, $pin: Boolean!) {
  pinWorkspace(id: $id, pin: $pin) {
    id
    pinnedBy {
      id
      email
    }
    pinned
  }
}
    `;n.Ps`
    query CommentsFor($id: ID!, $model: CommentableModels!) {
  commentsfor(model: $model, id: $id) {
    ...ListComment
  }
}
    ${g}`;n.Ps`
    query MyMentions {
  mymentions {
    ...MentionComment
  }
}
    ${h}`;n.Ps`
    query DetailComment($id: ID!) {
  comment(id: $id) {
    ...DetailComment
  }
}
    ${f}`;n.Ps`
    query ConditionSnapshots {
  conditionSnapshots {
    ...ListConditionSnapshot
  }
}
    ${b}`;n.Ps`
    query DetailConditionSnapshot($id: ID!) {
  conditionSnapshot(id: $id) {
    ...ConditionSnapshot
  }
}
    ${k}`;n.Ps`
    query Conditions {
  conditions {
    ...ListCondition
  }
}
    ${M}`;n.Ps`
    query MyConditions($limit: Int, $offset: Int, $order: String, $createdDay: DateTime) {
  myconditions(
    limit: $limit
    offset: $offset
    order: $order
    createdDay: $createdDay
  ) {
    ...ListCondition
  }
}
    ${M}`;n.Ps`
    query DetailCondition($id: ID, $provision: ID) {
  condition(id: $id, provision: $provision) {
    ...Condition
  }
}
    ${z}`;n.Ps`
    query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
  conditionEventsBetween(condition: $id, min: $min, max: $max) {
    ...ConditionEvent
  }
}
    ${y}`;n.Ps`
    query Flow($id: ID) {
  flow(id: $id) {
    ...Flow
  }
}
    ${H}`;n.Ps`
    query Workspace($id: ID!) {
  workspace(id: $id) {
    ...Workspace
  }
}
    ${Y}`;n.Ps`
    query MyWorkspaces($limit: Int, $offset: Int, $order: String, $createdDay: DateTime) {
  myworkspaces(
    limit: $limit
    offset: $offset
    order: $order
    createdDay: $createdDay
  ) {
    ...ListWorkspace
  }
}
    ${K}`;n.Ps`
    query PinnedWorkspaces($limit: Int, $offset: Int, $order: String, $createdDay: DateTime) {
  workspaces(
    limit: $limit
    offset: $offset
    order: $order
    pinned: true
    createdDay: $createdDay
  ) {
    ...ListWorkspace
  }
}
    ${K}`;n.Ps`
    query SearchWorkspaces($name: String) {
  workspaces(name: $name) {
    ...ListWorkspace
  }
}
    ${K}`;n.Ps`
    query SearchFlows($name: String, $workspace: ID) {
  flows(name: $name, workspace: $workspace) {
    ...ListFlow
  }
}
    ${j}`;n.Ps`
    query Snapshots {
  snapshots {
    ...ListSnapshot
  }
}
    ${V}`;n.Ps`
    query DetailSnapshot($id: ID!) {
  snapshot(id: $id) {
    ...Snapshot
  }
}
    ${X}`;n.Ps`
    query Runs {
  runs {
    ...ListRun
  }
}
    ${te}`;n.Ps`
    query MyRuns($limit: Int, $offset: Int, $order: String, $createdDay: DateTime) {
  myruns(limit: $limit, offset: $offset, order: $order, createdDay: $createdDay) {
    ...ListRun
  }
}
    ${te}`;n.Ps`
    query PinnedRuns($limit: Int, $offset: Int, $order: String, $createdDay: DateTime) {
  runs(
    limit: $limit
    offset: $offset
    order: $order
    pinned: true
    createdDay: $createdDay
  ) {
    ...ListRun
  }
}
    ${te}`;n.Ps`
    query DetailRun($id: ID, $assignation: ID) {
  run(id: $id, assignation: $assignation) {
    ...Run
  }
}
    ${Q}`;n.Ps`
    query ExportRun($id: ID) {
  run(id: $id) {
    ...ExportRun
  }
}
    ${ee}`;n.Ps`
    query EventsBetween($id: ID!, $min: Int, $max: Int) {
  eventsBetween(run: $id, min: $min, max: $max) {
    ...RunEvent
  }
}
    ${Z}`;n.Ps`
    query FlussGlobalSearch($search: String) {
  workspaces(search: $search) {
    ...ListWorkspace
  }
}
    ${K}`;n.Ps`
    query ReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${J}`;n.Ps`
    query DetailReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${J}`;n.Ps`
    query ReactiveTemplates($search: String) {
  reactivetemplates(name: $search) {
    ...ReactiveTemplate
  }
}
    ${J}`;n.Ps`
    subscription ConditionEvents($id: ID!) {
  conditionevents(id: $id) {
    deleted
    create {
      ...ConditionEvent
    }
    update {
      ...ConditionEvent
    }
  }
}
    ${y}`;n.Ps`
    subscription Events($id: ID!) {
  events(id: $id) {
    deleted
    create {
      ...RunEvent
    }
    update {
      ...RunEvent
    }
  }
}
    ${Z}`},97724:(e,t,a)=>{"use strict";a.d(t,{k:()=>o});var n=a(83117),i=a(67294),r=a(98268);a(86180);const l=e=>console.log("flow loaded:",e),o=e=>{let{edgeTypes:t,nodeTypes:a,nodes:o,edges:s,children:d,...m}=e;return i.createElement(r.tV,null,i.createElement(r.x$,(0,n.Z)({nodes:o,edges:s,onInit:l,nodeTypes:a,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))}},54706:(e,t,a)=>{"use strict";a.d(t,{Tm:()=>l,XC:()=>s});var n=a(67294),i=a(1706);const r=n.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),l=()=>(0,n.useContext)(r),o=e=>{let{id:t,children:a,expandedHeight:l=200,expandedWidth:o=400,collapsedWidth:s=170,collapsedHeight:d=70}=e;const[m,c]=(0,n.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:d});return n.createElement(i.Resizable,{key:t,height:m.height,width:m.width,onResize:(e,t)=>{let{size:a,handle:n}=t;c((e=>({...e,width:a.width,height:a.height,isExpanded:a.height>200&&a.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},n.createElement(r.Provider,{value:{...m,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:o,height:e.isExpanded?d:l})))}}},n.createElement("div",{style:{width:m.width+"px",height:m.height+"px"},className:"flex flex-col"},a)))},s=e=>t=>n.createElement(o,{id:t.id},n.createElement(e,t))},94928:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var n=a(83117),i=(a(67294),a(3905)),r=(a(27859),a(15944)),l=a(86515),o=a.n(l),s=(a(33346),a(30681)),d=a(71698),m=a(88545);a(97120);a(33850);const c=JSON.parse('{"__typename":"Flow","id":"37","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1496,"y":55},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","position":{"__typename":"Position","x":240,"y":-3},"typename":"ArkitektNode","parentNode":null,"hash":"da4e74c9f67d7ffc8855087ebb6268ce996c58df4a7050066bed4269fbe5c9b0","kind":"GENERATOR","defaults":{"rep":null,"show_old_rois":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"rois (List[RoiFragment]): The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"show_old_rois","label":"show_old_rois","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Show already marked rois. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream ROIs","description":"Asks the user to mark rois on the image, once user deams done, the rois are returned","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","position":{"__typename":"Position","x":494,"y":-81},"typename":"ArkitektNode","parentNode":null,"hash":"26dbfdcb8b5f98b157a960bcf6fe3085acee863931ce7a5e05b48adbbf897824","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":"roi","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"The Omero File","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation to be cropped. Defaults to the one of the ROI.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Crop Image","description":"Crops an Image based on a ROI","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","position":{"__typename":"Position","x":770,"y":-172},"typename":"ArkitektNode","parentNode":null,"hash":"0441be4d576765367c37786d2ef743f33865d4a4f146ad100e0c04d5283edb0e","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"representation","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The predicted images","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Predict Care","description":"Use a care model and some images to generate images","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","position":{"__typename":"Position","x":545,"y":151},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","position":{"__typename":"Position","x":971,"y":200},"typename":"ArkitektNode","parentNode":null,"hash":"79e5ee236b35dc83dd7b972d7cd8445face31a26beff022e6a0c6b1c0be1fa6f","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":"image","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"The analyzed particle table","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of the particles (default: 0)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of the particles (default: None)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"min_circularity","label":"min_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The minimum circularity of the particles (default: 0.0)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_circularity","label":"max_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The maximum circularity of the particles (default: 1.0)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Analyze Particles","description":"Analyzes particles in an image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","position":{"__typename":"Position","x":769,"y":70},"typename":"ArkitektNode","parentNode":null,"hash":"57d45410523b5fc52e33a89c2ae0174666ef7afefe2028df1e16649a750bf0a4","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to be thresholded","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The thresholded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"gaussian_blur","label":"gaussian_blur","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to apply a gaussian blur before thresholding (kernel_size=5)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Otsu Thresholding","description":"Binarizes the image based on a threshold, using Otsu\'s method\\nwith option to guassian blur the image before, images are normalized\\nfor each x,y slice before thresholding.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","position":{"__typename":"Position","x":1237,"y":37},"typename":"ArkitektNode","parentNode":null,"hash":"e4ca5250ef61b70fa987f45c142be459fa1b626df7b539b14153b2fa236784d1","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"table","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"Table to open","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Open Table in Sidebar","description":"Opens the table in an accessible sidebar widget.","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-2aead44b-cb77-4fff-8311-e98f6135dc13arg_0","source":"1","sourceHandle":"return_0","target":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-2aead44b-cb77-4fff-8311-e98f6135dc13return_0-arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4arg_0","source":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","sourceHandle":"return_0","target":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4return_0-arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29arg_0","source":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","sourceHandle":"return_0","target":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29return_0-arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285arg_0","source":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","sourceHandle":"return_0","target":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285return_0-arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7arg_0","source":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","sourceHandle":"return_0","target":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7return_0-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37arg_0","source":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","sourceHandle":"return_0","target":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37return_0-arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88arg_0","source":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","sourceHandle":"return_0","target":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/table","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88return_0-2arg_0","source":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[{"__typename":"Global","toKeys":["arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29.model"],"port":{"__typename":"Port","key":"model","label":"model","identifier":"@mikro/model","scope":"GLOBAL","kind":"STRUCTURE","description":"The model (maps to arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29.model)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_models($search: String, $values: [ID]) {\\n  options: models(name: $search, limit: 20, ids: $values) {\\n    label: name\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of the particles (default: 0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of the particles (default: None) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_circularity"],"port":{"__typename":"Port","key":"min_circularity","label":"min_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The minimum circularity of the particles (default: 0.0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_circularity)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_circularity"],"port":{"__typename":"Port","key":"max_circularity","label":"max_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The maximum circularity of the particles (default: 1.0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_circularity)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],"returns":[]},"restrict":[],"name":"Interactive Analysis","screenshot":null,"createdAt":"2023-10-28T15:10:19.503243+00:00","workspace":{"__typename":"Workspace","id":"24"}}'),u=a.p+"assets/files/test-f768396e8fcb14511bc32fbe99bccdbb.zip",p={title:"Interactive Workflow",sidebar_label:"Interactive Workflow",sidebar_position:2},g=void 0,h={unversionedId:"showcases/paper/interactive_workflow",id:"showcases/paper/interactive_workflow",title:"Interactive Workflow",description:"The following workflow and online showcase is an example of how arkitekt enables an interactive workflow, spanning multiple bioimage apps and deep learning enabled",source:"@site/docs/showcases/paper/interactive_workflow.mdx",sourceDirName:"showcases/paper",slug:"/showcases/paper/interactive_workflow",permalink:"/docs/showcases/paper/interactive_workflow",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/showcases/paper/interactive_workflow.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Interactive Workflow",sidebar_label:"Interactive Workflow",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/showcases/paper/intro"},next:{title:"Streaming Analysis",permalink:"/docs/showcases/paper/streaming_workflow"}},f={},y=[{value:"Why?",id:"why",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Napari",id:"napari",level:4},{value:"Kare Denoising",id:"kare-denoising",level:4},{value:"Fiji",id:"fiji",level:4},{value:"MikroJ",id:"mikroj",level:4},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Model Preparation",id:"model-preparation",level:2},{value:"The Workflow",id:"the-workflow",level:2},{value:"Running the Workflow",id:"running-the-workflow",level:2}],k={toc:y},b="wrapper";function w(e){let{components:t,...l}=e;return(0,i.kt)(b,(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following workflow and online showcase is an example of how arkitekt enables an interactive workflow, spanning multiple bioimage apps and deep learning enabled\ndenoising. With this workflow we would like to demonstrate that by leveraging a tight and timely interaction between the apps, users can get immediate\nfeedback on the results of their actions."),(0,i.kt)("p",null,"Here we set out to use Arkitekt to build a workflow that allows users to interactively denoise and segment cells in regions of interest in a 3D image.\nThe workflow is composed of three apps: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Napari")," a python based 3D volume  viewer that will allow the users to interactively annotate regions of interest in an image, while eeasily exploring\nthe 3D volume, as well as the app that will be used to display the results of the workflow.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Care Denoising"),", a deep learning based denoising app that will be used to denoise the regions of interest selected by the user in Napari.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Fiji"),' (ImageJ), and its "Analyze Particles" plugin, that will be used to segment the denoised regions of interest.'))),(0,i.kt)("div",{className:"mt-2 p-6"},(0,i.kt)(r.Z,{img:o(),mdxType:"Image"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null,"The interactive workflow with loopback analytical insight "))),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("p",null,"The main motivation for showcasing this workflow, is the core believe that interactive workflows are a key component of the current and future bioimage analysis\nlandscape. We believe that the ability to interactively explore and annotate data, and to get immediate feedback on the results of the analysis, is a key necessity\nfor the current analysis where human insight is determing where we look for when analysis our data.  And while automation will continue to grow in importance,\nwe believe that the human in the loop will, continue to play a key component of the analtical process."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Well lets jump right in and see how we can run this workflow. You could of course build this workflow from scratch, but we have already done that for you, and\nyou can easily import it into your arkitekt instance. To do so, please ",(0,i.kt)("a",{parentName:"p",href:"/docs/apps/"},"connect"),' this website to your arkitekt instance and then simply click on the "import" button below,\nwhich will import it directly into your arkitekt instance.'),(0,i.kt)("p",null,"If you havent installed any of the apps yet, your Arkitekt instance will tell you that you are missing some apps implementing the nodes. So of course make sure you\ninstall the apps that are missing. In this case you will need to install the following apps:"),(0,i.kt)("h4",{id:"napari"},(0,i.kt)("a",{parentName:"h4",href:"https://napari.org/stable/"},"Napari")),(0,i.kt)("p",null,"With the mikro-napari plugin, which you can install easily via the napari plugin manager.\nor via the command line with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install mikro-napari")),(0,i.kt)("h4",{id:"kare-denoising"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/jhnnsrs/kare"},"Kare Denoising")),(0,i.kt)("p",null,"An Arkitekt plugin that allows you to denoise images using deep learning. You can install it through the PluginStore or when connected, by clicking on the button below."),(0,i.kt)(d.I,{repo:"kare",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,i.kt)("h4",{id:"fiji"},(0,i.kt)("a",{parentName:"h4",href:"https://imagej.net/Fiji"},"Fiji")),(0,i.kt)("p",null,'A ImageJ instance with the "Analyze Particles" plugin installed (comes preinstalled with Fiji)'),(0,i.kt)("h4",{id:"mikroj"},(0,i.kt)("a",{parentName:"h4",href:"https://github.com/jhnnsrs/mikroj"},"MikroJ")),(0,i.kt)("p",null,"The Arkitekt enabled FIJI wrapper app that allows your Fiji instance to be connected to Arkitekt. Please install\nthe latest version of MikroJ."),(0,i.kt)("h2",{id:"data-preparation"},"Data Preparation"),(0,i.kt)("p",null,"This workflow was designed to work with the ",(0,i.kt)("a",{parentName:"p",href:"https://publications.mpi-cbg.de/publications-sites/7207/"},"Tribolium")," Dataset. However the examplary data used in this\nworkflow is only on noisy stack of the Tribolium dataset, which you can download ",(0,i.kt)("a",{target:"_blank",href:a(91574).Z},"here"),"."),(0,i.kt)("p",null,"The Image Data was converted through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Convert Omero")," Node provided by"),(0,i.kt)(d.I,{repo:"omero",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,i.kt)("h2",{id:"model-preparation"},"Model Preparation"),(0,i.kt)("p",null,"For this workflow you can either use a pretrained model, or train your own model. If you want to train your own model, you can follow the instructions in the\nDeep Learning Training Tutorial to train your own model. If you want to use a pretrained model, you can upload the pretrained model directly from the link below."),(0,i.kt)(m.x,{url:u,name:"Tribolium Model",kind:"TENSORFLOW",mdxType:"UploadModelButton"}),(0,i.kt)("p",null,"This model was trained on ",(0,i.kt)("a",{target:"_blank",href:a(15094).Z},"this dataset here"),"."),(0,i.kt)("h2",{id:"the-workflow"},"The Workflow"),(0,i.kt)("p",null,"Once you have installed all the apps, you can simply import the workflow by connecting your arkitekt instance and clicking on the button below."),(0,i.kt)(s.n,{flow:c,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null,"Once connected this pane will also give you an overview over the apps that still need to be installed, nodes in green have been installed, nodes in yellow still lack an implementation. Of course feel free to explore this graph more interactively in your orkestrator interface")),(0,i.kt)("h2",{id:"running-the-workflow"},"Running the Workflow"),(0,i.kt)("p",null,"For the execution of the Workflow you will need to start the following apps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Napari"),(0,i.kt)("li",{parentName:"ul"},"Kare Denoising (through deployment of the kare plugin)"),(0,i.kt)("li",{parentName:"ul"},"Fiji (through MikroJ)")),(0,i.kt)("p",null,"Once you have started all the apps, you can run the workflow directly from an image uploaded to your arkitekt instance. To do so, simply\nstart the workflow and select the image the converted you want to run the workflow on."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Test Environment"),(0,i.kt)("div",null,"This workflow was tested on the following environments:",(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Analysis Computer\n    - Intel Core i9-8700K CPU @ 3.70GHz\n    - Ubuntu 22.04\n    - Arkitekt Paper Channel\n    - Segmentor Plugin 0.3.1\n    - Stdlib Plugin 0.3.6\n\nAnalysis Computer\n    - Intel Core i9-8700K CPU @ 3.70GHz\n    - Windows 10\n    - Arkitekt Paper Channel\n    - Segmentor Plugin 0.3.1\n    - Stdlib Plugin 0.3.6\n")))))}w.isMDXComponent=!0},91574:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/noisy_stack-6ff2a5732916fc1a6ddebe87490f875c.tif"},15094:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/training-de8069a9441ffc363f8f3ee381f7c139.zip"}}]);