(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3358],{3040:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/segmentation.452be31.640.png 640w,"+a.p+"assets/ideal-img/segmentation.9c18098.1320.png 1320w,"+a.p+"assets/ideal-img/segmentation.57e8a2f.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/segmentation.452be31.640.png",width:640,height:313},{path:a.p+"assets/ideal-img/segmentation.9c18098.1320.png",width:1320,height:646},{path:a.p+"assets/ideal-img/segmentation.57e8a2f.2000.png",width:2e3,height:979}],src:a.p+"assets/ideal-img/segmentation.452be31.640.png",toString:function(){return a.p+"assets/ideal-img/segmentation.452be31.640.png"},placeholder:void 0,width:640,height:313},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVQImQHNADL/ACgoKP0uLi79Kioq+CwsLf8wMCN1AACpLSIOgf88Hn3+EQuD/jUbf/8AMTEx/zAwMP8xMTH7Kios/1paRJ+1oqF0ORmF/0Yhf/8jC4r+MxeC/wAvLy/6MDAw+zMzM/cqKiv/TE09kPbbq2ZROoL/NBOC+i8UhvoOCIf6ACoqKv8rKyv/Ly8v/y8vMP8eIBp8EQChMCQZev8uGXz/JxV+/xgLhf8ALCwsh0hISJhTU1OXOzs8nS0tHz4HAKEaJCGMlmlNhppJNpScIhiMjYzvTWkrbiOaAAAAAElFTkSuQmCC"}},71698:(e,t,a)=>{"use strict";a.d(t,{I:()=>m});var n=a(37887),r=a(69819),i=a(31230),o=a(67294);const l=i.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,s=i.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",m=(0,r.Zh)((e=>{let{branch:t,repo:a,user:i}=e;const{client:m}=(0,r.AA)(),c=`${i}/${a}:${t}`,{data:u,refetch:p}=(0,n.a)(s,{client:m,variables:{tag:c},pollInterval:3e3});return o.createElement(o.Fragment,null,u?.githubRepo?o.createElement("button",{className:d+"bg-green-300"}," \u2705 ",c):o.createElement("button",{onClick:async()=>{try{const{data:e}=await m.mutate({mutation:l,variables:{branch:t,repo:a,user:i}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",c))}),o.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},30681:(e,t,a)=>{"use strict";a.d(t,{n:()=>ee});var n=a(67294),r=a(40196),i=a(97724);function o(e){return null!=e}const l=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,s=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function d(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(l,"").replace(s,"{");console.log(t);let a=JSON.parse(t);return console.log(a),a}const m=e=>e?.map((e=>{if(e){const{id:t,position:a,__typename:n,...r}=e;return{type:n,id:t,position:a,data:{__typename:n,...r},dragHandle:".custom-drag-handle",parentNode:r.parentNode?r.parentNode:void 0}}})).filter(o)||[],c=e=>e?.map((e=>{if(e){const{id:t,source:a,sourceHandle:n,target:r,targetHandle:i,__typename:o,...l}=e;return{id:t,type:o,source:a,sourceHandle:n,target:r,targetHandle:i,data:{__typename:o,...l}}}})).filter(o)||[],u=n.createContext({});var p=a(20263);const g=e=>{const{}=(0,n.useContext)(u),{id:t,sourcePosition:a,targetPosition:i,sourceX:o,sourceY:l,targetX:s,targetY:d,style:m,markerStart:c,markerEnd:g,data:h}=e,[f,y,b]=(0,r.OW)({sourcePosition:a,targetPosition:i,sourceX:o,sourceY:l,targetX:s,targetY:d});return n.createElement(n.Fragment,null,n.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:f}),n.createElement(r.XQ,null,n.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${y}px,${b}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},h?.stream.map(((e,t)=>n.createElement("span",{className:"text-xs",key:t},(e?.kind==p.XTL.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var h=a(54706);const f="border-slate-200 shadow-slate-200/50 dark:border-slate-200 dark:shadow-slate-200/10",y=e=>{let{children:t,id:a,color:r="white"}=e;const[i,o]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${f}`},t))};var b=a(55770),$=a(31230),k=a(83117),_=a(52203),v=a(90512),w=a(57851);function E(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,w.m)((0,v.W)(t))}const N=_.fC,P=_.xz,x=n.forwardRef(((e,t)=>{let{className:a,align:r="center",sideOffset:i=4,...o}=e;return n.createElement(_.h_,null,n.createElement(_.VY,(0,k.Z)({ref:t,align:r,sideOffset:i,className:E("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},o)))}));x.displayName=_.VY.displayName;const C=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),L=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),S=e=>{const{data:t,error:a,loading:r}=(0,b.un)($.ZP`
    { node(hash: "${e.data.hash}") {
      name
    }
    }
    `);return n.createElement("div",{className:"flex flex-row gap-2 h-full"}," ",a?n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(C,null),n.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.data?.name," ")):n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(L,null),n.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")),n.createElement(N,null,n.createElement(P,{className:"bg-back-700 rounded rounded-md cursor-pointer"},"?"),n.createElement(x,{className:"text-xs bg-back-800 my-auto"}," ",e.data?.description)))},A=(0,h.XC)((e=>{let{data:t,id:a}=e;const{isExpanded:i,toggleExpanded:o}=(0,h.Tm)();t.kind;return n.createElement(y,{id:a},t.instream.map(((e,t)=>n.createElement(r.HH,{type:"target",position:r.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+a}))),t.outstream.map(((e,t)=>n.createElement(r.HH,{type:"source",position:r.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event"}))),n.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full "},n.createElement(b.Z6,{fallback:n.createElement(n.Fragment,null," ",t?.name)},n.createElement(S,{data:t})),i&&n.createElement(n.Fragment,null,n.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"}))))})),R=(0,h.XC)((e=>{let{data:{outstream:t,instream:a},id:i}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"blue",id:i},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>n.createElement(r.HH,{type:"source",position:r.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+i}))))}));var T=a(63750);const D=(0,h.XC)((e=>{let{data:{constream:t},id:a}=e;const[r,i]=(0,n.useState)(!1),[o,l]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"green",id:a},!o&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex"},t?.map(((e,t)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+a},n.createElement("div",{className:"flex justify-between"},n.createElement("button",{type:"button",onClick:()=>alert("implement")},n.createElement(T.yvY,null))))))))),n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!o)},"Constants"," "),n.createElement("p",{className:"text-gray-700 text-base"}))))})),I={ArkitektNode:A,ArkitektFilterNode:A,LocalNode:A,ReactiveNode:e=>{let{data:{outstream:t,instream:a,constream:i,implementation:o},id:l}=e;return n.createElement(n.Fragment,null,n.createElement("div",{style:{width:40},className:"custom-drag-handle"},o&&[p.J5d.Combinelatest,p.J5d.Withlatest].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[p.J5d.Gate].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-500)"}})),o&&[p.J5d.Filter].includes(o)&&n.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},n.createElement("h1",null,o)),o&&[p.J5d.Split].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[p.J5d.ToList,p.J5d.BufferComplete].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,o)),o&&[p.J5d.Chunk].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,o)),o&&[p.J5d.Omit].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},o)),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),i?.map(((e,t,a)=>n.createElement(r.HH,{type:"target",position:r.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),a?.map(((e,t,a)=>n.createElement(r.HH,{key:t,type:"target",position:r.Ly.Left,id:`arg_${t}`,style:{top:100/a.length*t+45/a.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,a)=>n.createElement(r.HH,{key:t,type:"source",position:r.Ly.Right,id:`return_${t}`,style:{top:100/a.length*t+46/a.length+"%",background:"#555"}})))))},ArgNode:R,ReturnNode:(0,h.XC)((e=>{let{data:{outstream:t,instream:a},id:i}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"red",id:i},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),n.createElement("p",{className:"text-gray-700 text-base"},n.createElement(n.Fragment,null,a[0]?.map((e=>e?.kind)).join(" | "),n.createElement("br",null)),!s&&n.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0)},"Add Documentation")))),a.map(((e,t)=>n.createElement(r.HH,{type:"target",position:r.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),KwargNode:D,GraphNode:()=>null},W={LabeledEdge:g,FancyEdge:g},F=e=>{let{flow:t}=e;const[a,o,l]=(0,r.Rr)(m(t.graph?.nodes)),[s,d,p]=(0,r.ll)(c(t.graph?.edges));return n.createElement(u.Provider,{value:{flow:t}},n.createElement(i.k,{nodes:a,edges:s,onNodesChange:l,onEdgesChange:p,elementsSelectable:!0,nodeTypes:I,edgeTypes:W,fitView:!0,attributionPosition:"bottom-right"}))};var O=a(30210),U=a(39903);const H=e=>{const{user:t}=(0,O.gX)(),{fakts:a}=(0,U.sT)();return n.createElement("div",{className:"relative "+e.className},e.children,!t||!a&&n.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var q=a(68947),B=a(50319),M=a(12854),G=a(79592);const z=M.fC,J=(M.xz,M.h_),X=(M.x8,n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(M.aV,(0,k.Z)({ref:t,className:E("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},r))})));X.displayName=M.aV.displayName;const Z=n.forwardRef(((e,t)=>{let{className:a,children:r,...i}=e;return n.createElement(J,null,n.createElement(X,null),n.createElement(M.VY,(0,k.Z)({ref:t,className:E("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a)},i),r,n.createElement(M.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(G.Z,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));Z.displayName=M.VY.displayName;const K=e=>{let{className:t,...a}=e;return n.createElement("div",(0,k.Z)({className:E("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};K.displayName="DialogHeader";const j=n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(M.Dx,(0,k.Z)({ref:t,className:E("text-lg font-semibold leading-none tracking-tight",a)},r))}));j.displayName=M.Dx.displayName;const Y=n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(M.dk,(0,k.Z)({ref:t,className:E("text-sm text-muted-foreground",a)},r))}));Y.displayName=M.dk.displayName;const V=$.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
}
`,Q=e=>{let{flow:t,blockImport:a}=e;const{client:r}=(0,q.dB)(),[i,l]=(0,B.D)(V,{client:r}),[s,u]=(0,n.useState)(!1),p=async()=>{try{const a=(e=m(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:a,type:n,parentNode:r,data:{outstream:i,constream:l,instream:s,...m}}=e;return{outstream:i?.map((e=>e?e.filter(o).map(d):[]))||[[]],constream:l?.map((e=>e?e.filter(o).map(d):[]))||[[]],instream:s?.map((e=>e?e.filter(o).map(d):[]))||[[]],id:t,position:{x:a.x,y:a.y},typename:n||"Fake type",name:m.name,description:m.description,hash:m.hash,implementation:m.implementation,kind:m.kind,defaults:m.defaults,mapStrategy:m.mapStrategy,allowLocal:m.allowLocal,maxRetries:m.maxRetries,retryDelay:m.retryDelay,binds:m.binds,parentNode:r,interface:m.interface}}})).filter(o)||[]||[]),n=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:a,sourceHandle:n,target:r,targetHandle:i,type:l,data:s}=e;return{id:t,typename:l||"Fake type",source:a,sourceHandle:n||"returns",target:r,targetHandle:i||"args",stream:s?.stream.filter(o).map(d)||[]}}})).filter(o)||[])(c(t.graph.edges));let r={nodes:a,edges:n,globals:t.graph.globals.filter(o).map(d),args:t.graph.args.filter(o).map(d),returns:t.graph.returns.filter(o).map(d)};await i({variables:{name:t.name,graph:r}});u(!0)}catch(a){alert(a.message)}var e};return n.createElement(n.Fragment,null,n.createElement(z,{open:s,onOpenChange:u},n.createElement(Z,null,n.createElement(K,null,n.createElement(j,null,"Succesfully imported workflow"),n.createElement(Y,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),n.createElement("button",{onClick:()=>p(),disabled:a,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},ee=e=>n.createElement("div",{className:"border border-1 rounded border-gray-800"},n.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},n.createElement(F,{flow:e.flow})),n.createElement(H,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},n.createElement(q.Ot,null,n.createElement(Q,{flow:e.flow,blockImport:e.blockImport}))))},20263:(e,t,a)=>{"use strict";a.d(t,{J5d:()=>r,XTL:()=>i});var n=a(31230);let r=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),i=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const o=n.Ps`
    fragment Leaf on Leaf {
  typename: __typename
  bold
  italic
  code
  text
}
    `,l=(n.Ps`
    fragment LevelDownDescendent on Descendent {
  typename: __typename
  ...Leaf
}
    ${o}`,n.Ps`
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
    ${o}
${l}
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
${o}`,p=n.Ps`
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
    `,b=n.Ps`
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
    ${y}`,$=n.Ps`
    fragment ListConditionSnapshot on ConditionSnapshot {
  id
  condition {
    id
    provision
  }
}
    `,k=n.Ps`
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
    ${k}
${_}`,w=n.Ps`
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
    ${k}
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
    ${k}
${_}
${w}`,N=n.Ps`
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
    ${E}`,P=n.Ps`
    fragment RetriableNode on RetriableNode {
  maxRetries
  retryDelay
}
    `,x=n.Ps`
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
${P}`,C=n.Ps`
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
${P}`,L=n.Ps`
    fragment ReactiveNode on ReactiveNode {
  ...FlowNodeCommons
  __typename
  implementation
  defaults
}
    ${N}`,S=n.Ps`
    fragment ArgNode on ArgNode {
  ...FlowNodeCommons
  __typename
}
    ${N}`,A=n.Ps`
    fragment KwargNode on KwargNode {
  ...FlowNodeCommons
  __typename
}
    ${N}`,R=n.Ps`
    fragment ReturnNode on ReturnNode {
  ...FlowNodeCommons
  __typename
}
    ${N}`,T=n.Ps`
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
${P}`,D=n.Ps`
    fragment GraphNode on GraphNode {
  ...FlowNodeCommons
  __typename
}
    ${N}`,I=n.Ps`
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
    ${x}
${C}
${L}
${S}
${A}
${R}
${T}
${D}`,W=n.Ps`
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
    ${W}`,O=n.Ps`
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
    ${O}`,H=n.Ps`
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
${H}`,B=n.Ps`
    fragment Global on Global {
  toKeys
  port {
    ...Port
  }
}
    ${E}`,M=n.Ps`
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
    ${I}
${q}
${B}
${E}`,G=n.Ps`
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
${M}`,z=n.Ps`
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
    `,J=n.Ps`
    fragment ListFlow on Flow {
  id
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    `,X=n.Ps`
    fragment ListWorkspace on Workspace {
  id
  name
  latestFlow {
    ...ListFlow
  }
}
    ${J}`,Z=n.Ps`
    fragment Workspace on Workspace {
  id
  name
  latestFlow {
    ...Flow
  }
}
    ${M}`,K=(n.Ps`
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
    ${E}`),j=n.Ps`
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
    `,Y=n.Ps`
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
    ${j}`,V=n.Ps`
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
    ${j}
${M}`,ee=n.Ps`
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
    ${j}
${M}`,te=n.Ps`
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
    ${Z}`;n.Ps`
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
    ${Z}`;n.Ps`
    mutation ImportFlow($name: String, $graph: GraphInput!) {
  importflow(name: $name, graph: $graph) {
    ...Workspace
  }
}
    ${Z}`;n.Ps`
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
    ${$}`;n.Ps`
    query DetailConditionSnapshot($id: ID!) {
  conditionSnapshot(id: $id) {
    ...ConditionSnapshot
  }
}
    ${b}`;n.Ps`
    query Conditions {
  conditions {
    ...ListCondition
  }
}
    ${z}`;n.Ps`
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
    ${z}`;n.Ps`
    query DetailCondition($id: ID, $provision: ID) {
  condition(id: $id, provision: $provision) {
    ...Condition
  }
}
    ${G}`;n.Ps`
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
    ${M}`;n.Ps`
    query Workspace($id: ID!) {
  workspace(id: $id) {
    ...Workspace
  }
}
    ${Z}`;n.Ps`
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
    ${X}`;n.Ps`
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
    ${X}`;n.Ps`
    query SearchWorkspaces($name: String) {
  workspaces(name: $name) {
    ...ListWorkspace
  }
}
    ${X}`;n.Ps`
    query SearchFlows($name: String, $workspace: ID) {
  flows(name: $name, workspace: $workspace) {
    ...ListFlow
  }
}
    ${J}`;n.Ps`
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
    ${Y}`;n.Ps`
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
    ${j}`;n.Ps`
    query FlussGlobalSearch($search: String) {
  workspaces(search: $search) {
    ...ListWorkspace
  }
}
    ${X}`;n.Ps`
    query ReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${K}`;n.Ps`
    query DetailReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${K}`;n.Ps`
    query ReactiveTemplates($search: String) {
  reactivetemplates(name: $search) {
    ...ReactiveTemplate
  }
}
    ${K}`;n.Ps`
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
    ${j}`},97724:(e,t,a)=>{"use strict";a.d(t,{k:()=>l});var n=a(83117),r=a(67294),i=a(40196);a(86180);const o=e=>console.log("flow loaded:",e),l=e=>{let{edgeTypes:t,nodeTypes:a,nodes:l,edges:s,children:d,...m}=e;return r.createElement(i.tV,null,r.createElement(i.x$,(0,n.Z)({nodes:l,edges:s,onInit:o,nodeTypes:a,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))}},54706:(e,t,a)=>{"use strict";a.d(t,{Tm:()=>o,XC:()=>s});var n=a(67294),r=a(1706);const i=n.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),o=()=>(0,n.useContext)(i),l=e=>{let{id:t,children:a,expandedHeight:o=200,expandedWidth:l=400,collapsedWidth:s=170,collapsedHeight:d=70}=e;const[m,c]=(0,n.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:d});return n.createElement(r.Resizable,{key:t,height:m.height,width:m.width,onResize:(e,t)=>{let{size:a,handle:n}=t;c((e=>({...e,width:a.width,height:a.height,isExpanded:a.height>200&&a.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},n.createElement(i.Provider,{value:{...m,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:l,height:e.isExpanded?d:o})))}}},n.createElement("div",{style:{width:m.width+"px",height:m.height+"px"},className:"flex flex-col"},a)))},s=e=>t=>n.createElement(l,{id:t.id},n.createElement(e,t))},84009:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));a(83177),a(68648),a(30681),a(15944),a(3040),a(73266),a(71698);const i={title:"Live Analysis",sidebar_label:"Live Analysis",sidebar_position:4},o="Coming Soon",l={unversionedId:"introduction/advanced_tutorial/live_analysis",id:"introduction/advanced_tutorial/live_analysis",title:"Live Analysis",description:"",source:"@site/docs/introduction/advanced_tutorial/live_analysis.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/live_analysis",permalink:"/docs/introduction/advanced_tutorial/live_analysis",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/live_analysis.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Live Analysis",sidebar_label:"Live Analysis",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Train a Deep Learning Model",permalink:"/docs/introduction/advanced_tutorial/training"},next:{title:"Services",permalink:"/docs/category/services"}},s={},d=[],m={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coming-soon"},"Coming Soon"))}u.isMDXComponent=!0},73266:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/medias/fiji_segmentation-36956e47929d30213356456ff3c0b1e3.webm"},83177:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},68648:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);