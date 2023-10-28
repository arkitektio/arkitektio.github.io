(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8777],{3040:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/segmentation.452be31.640.png 640w,"+a.p+"assets/ideal-img/segmentation.9c18098.1320.png 1320w,"+a.p+"assets/ideal-img/segmentation.57e8a2f.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/segmentation.452be31.640.png",width:640,height:313},{path:a.p+"assets/ideal-img/segmentation.9c18098.1320.png",width:1320,height:646},{path:a.p+"assets/ideal-img/segmentation.57e8a2f.2000.png",width:2e3,height:979}],src:a.p+"assets/ideal-img/segmentation.452be31.640.png",toString:function(){return a.p+"assets/ideal-img/segmentation.452be31.640.png"},placeholder:void 0,width:640,height:313},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVQImQHNADL/ACgoKP0uLi79Kioq+CwsLf8wMCN1AACpLSIOgf88Hn3+EQuD/jUbf/8AMTEx/zAwMP8xMTH7Kios/1paRJ+1oqF0ORmF/0Yhf/8jC4r+MxeC/wAvLy/6MDAw+zMzM/cqKiv/TE09kPbbq2ZROoL/NBOC+i8UhvoOCIf6ACoqKv8rKyv/Ly8v/y8vMP8eIBp8EQChMCQZev8uGXz/JxV+/xgLhf8ALCwsh0hISJhTU1OXOzs8nS0tHz4HAKEaJCGMlmlNhppJNpScIhiMjYzvTWkrbiOaAAAAAElFTkSuQmCC"}},71698:(e,t,a)=>{"use strict";a.d(t,{I:()=>m});var n=a(37887),i=a(69819),r=a(31230),o=a(67294);const l=r.ZP`
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
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",m=(0,i.Zh)((e=>{let{branch:t,repo:a,user:r}=e;const{client:m}=(0,i.AA)(),u=`${r}/${a}:${t}`,{data:p,refetch:c}=(0,n.a)(s,{client:m,variables:{tag:u},pollInterval:3e3});return o.createElement(o.Fragment,null,p?.githubRepo?o.createElement("button",{className:d+"bg-green-300"}," \u2705 ",u):o.createElement("button",{onClick:async()=>{try{const{data:e}=await m.mutate({mutation:l,variables:{branch:t,repo:a,user:r}});await c(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",u))}),o.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},30681:(e,t,a)=>{"use strict";a.d(t,{n:()=>ee});var n=a(67294),i=a(40196),r=a(97724);function o(e){return null!=e}const l=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,s=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function d(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(l,"").replace(s,"{");console.log(t);let a=JSON.parse(t);return console.log(a),a}const m=e=>e?.map((e=>{if(e){const{id:t,position:a,__typename:n,...i}=e;return{type:n,id:t,position:a,data:{__typename:n,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(o)||[],u=e=>e?.map((e=>{if(e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,__typename:o,...l}=e;return{id:t,type:o,source:a,sourceHandle:n,target:i,targetHandle:r,data:{__typename:o,...l}}}})).filter(o)||[],p=n.createContext({});var c=a(20263);const g=e=>{const{}=(0,n.useContext)(p),{id:t,sourcePosition:a,targetPosition:r,sourceX:o,sourceY:l,targetX:s,targetY:d,style:m,markerStart:u,markerEnd:g,data:h}=e,[f,y,k]=(0,i.OW)({sourcePosition:a,targetPosition:r,sourceX:o,sourceY:l,targetX:s,targetY:d});return n.createElement(n.Fragment,null,n.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:f}),n.createElement(i.XQ,null,n.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${y}px,${k}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},h?.stream.map(((e,t)=>n.createElement("span",{className:"text-xs",key:t},(e?.kind==c.XTL.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var h=a(54706);const f="border-slate-200 shadow-slate-200/50 dark:border-slate-200 dark:shadow-slate-200/10",y=e=>{let{children:t,id:a,color:i="white"}=e;const[r,o]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${f}`},t))};var k=a(55770),b=a(31230),w=a(83117),$=a(52203),v=a(90512),_=a(57851);function N(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,_.m)((0,v.W)(t))}const E=$.fC,P=$.xz,x=n.forwardRef(((e,t)=>{let{className:a,align:i="center",sideOffset:r=4,...o}=e;return n.createElement($.h_,null,n.createElement($.VY,(0,w.Z)({ref:t,align:i,sideOffset:r,className:N("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},o)))}));x.displayName=$.VY.displayName;const C=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),S=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),I=e=>{const{data:t,error:a,loading:i}=(0,k.un)(b.ZP`
    { node(hash: "${e.data.hash}") {
      name
    }
    }
    `);return n.createElement("div",{className:"flex flex-row gap-2 h-full"}," ",a?n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(C,null),n.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.data?.name," ")):n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(S,null),n.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")),n.createElement(E,null,n.createElement(P,{className:"bg-back-700 rounded rounded-md cursor-pointer"},"?"),n.createElement(x,{className:"text-xs bg-back-800 my-auto"}," ",e.data?.description)))},L=(0,h.XC)((e=>{let{data:t,id:a}=e;const{isExpanded:r,toggleExpanded:o}=(0,h.Tm)();t.kind;return n.createElement(y,{id:a},t.instream.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+a}))),t.outstream.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event"}))),n.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full "},n.createElement(k.Z6,{fallback:n.createElement(n.Fragment,null," ",t?.name)},n.createElement(I,{data:t})),r&&n.createElement(n.Fragment,null,n.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"}))))})),A=(0,h.XC)((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"blue",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r}))))}));var T=a(63750);const D=(0,h.XC)((e=>{let{data:{constream:t},id:a}=e;const[i,r]=(0,n.useState)(!1),[o,l]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"green",id:a},!o&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex"},t?.map(((e,t)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+a},n.createElement("div",{className:"flex justify-between"},n.createElement("button",{type:"button",onClick:()=>alert("implement")},n.createElement(T.yvY,null))))))))),n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!o)},"Constants"," "),n.createElement("p",{className:"text-gray-700 text-base"}))))})),R={ArkitektNode:L,ArkitektFilterNode:L,LocalNode:L,ReactiveNode:e=>{let{data:{outstream:t,instream:a,constream:r,implementation:o},id:l}=e;return n.createElement(n.Fragment,null,n.createElement("div",{style:{width:40},className:"custom-drag-handle"},o&&[c.J5d.Combinelatest,c.J5d.Withlatest].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[c.J5d.Gate].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-500)"}})),o&&[c.J5d.Filter].includes(o)&&n.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},n.createElement("h1",null,o)),o&&[c.J5d.Split].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[c.J5d.ToList,c.J5d.BufferComplete].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,o)),o&&[c.J5d.Chunk].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,o)),o&&[c.J5d.Omit].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},o)),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r?.map(((e,t,a)=>n.createElement(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),a?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/a.length*t+45/a.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/a.length*t+46/a.length+"%",background:"#555"}})))))},ArgNode:A,ReturnNode:(0,h.XC)((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(y,{color:"red",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),n.createElement("p",{className:"text-gray-700 text-base"},n.createElement(n.Fragment,null,a[0]?.map((e=>e?.kind)).join(" | "),n.createElement("br",null)),!s&&n.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0)},"Add Documentation")))),a.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),KwargNode:D,GraphNode:()=>null},W={LabeledEdge:g,FancyEdge:g},F=e=>{let{flow:t}=e;const[a,o,l]=(0,i.Rr)(m(t.graph?.nodes)),[s,d,c]=(0,i.ll)(u(t.graph?.edges));return n.createElement(p.Provider,{value:{flow:t}},n.createElement(r.k,{nodes:a,edges:s,onNodesChange:l,onEdgesChange:c,elementsSelectable:!0,nodeTypes:R,edgeTypes:W,fitView:!0,attributionPosition:"bottom-right"}))};var U=a(30210),O=a(39903);const H=e=>{const{user:t}=(0,U.gX)(),{fakts:a}=(0,O.sT)();return n.createElement("div",{className:"relative "+e.className},e.children,!t||!a&&n.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var q=a(68947),B=a(50319),M=a(12854),G=a(79592);const J=M.fC,z=(M.xz,M.h_),j=(M.x8,n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(M.aV,(0,w.Z)({ref:t,className:N("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},i))})));j.displayName=M.aV.displayName;const Z=n.forwardRef(((e,t)=>{let{className:a,children:i,...r}=e;return n.createElement(z,null,n.createElement(j,null),n.createElement(M.VY,(0,w.Z)({ref:t,className:N("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a)},r),i,n.createElement(M.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(G.Z,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));Z.displayName=M.VY.displayName;const X=e=>{let{className:t,...a}=e;return n.createElement("div",(0,w.Z)({className:N("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};X.displayName="DialogHeader";const Y=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(M.Dx,(0,w.Z)({ref:t,className:N("text-lg font-semibold leading-none tracking-tight",a)},i))}));Y.displayName=M.Dx.displayName;const K=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(M.dk,(0,w.Z)({ref:t,className:N("text-sm text-muted-foreground",a)},i))}));K.displayName=M.dk.displayName;const V=b.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
}
`,Q=e=>{let{flow:t,blockImport:a}=e;const{client:i}=(0,q.dB)(),[r,l]=(0,B.D)(V,{client:i}),[s,p]=(0,n.useState)(!1),c=async()=>{try{const a=(e=m(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:a,type:n,parentNode:i,data:{outstream:r,constream:l,instream:s,...m}}=e;return{outstream:r?.map((e=>e?e.filter(o).map(d):[]))||[[]],constream:l?.map((e=>e?e.filter(o).map(d):[]))||[[]],instream:s?.map((e=>e?e.filter(o).map(d):[]))||[[]],id:t,position:{x:a.x,y:a.y},typename:n||"Fake type",name:m.name,description:m.description,hash:m.hash,implementation:m.implementation,kind:m.kind,defaults:m.defaults,mapStrategy:m.mapStrategy,allowLocal:m.allowLocal,maxRetries:m.maxRetries,retryDelay:m.retryDelay,binds:m.binds,parentNode:i,interface:m.interface}}})).filter(o)||[]||[]),n=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,type:l,data:s}=e;return{id:t,typename:l||"Fake type",source:a,sourceHandle:n||"returns",target:i,targetHandle:r||"args",stream:s?.stream.filter(o).map(d)||[]}}})).filter(o)||[])(u(t.graph.edges));let i={nodes:a,edges:n,globals:t.graph.globals.filter(o).map(d),args:t.graph.args.filter(o).map(d),returns:t.graph.returns.filter(o).map(d)};await r({variables:{name:t.name,graph:i}});p(!0)}catch(a){alert(a.message)}var e};return n.createElement(n.Fragment,null,n.createElement(J,{open:s,onOpenChange:p},n.createElement(Z,null,n.createElement(X,null,n.createElement(Y,null,"Succesfully imported workflow"),n.createElement(K,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),n.createElement("button",{onClick:()=>c(),disabled:a,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},ee=e=>n.createElement("div",{className:"border border-1 rounded border-gray-800"},n.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},n.createElement(F,{flow:e.flow})),n.createElement(H,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},n.createElement(q.Ot,null,n.createElement(Q,{flow:e.flow,blockImport:e.blockImport}))))},20263:(e,t,a)=>{"use strict";a.d(t,{J5d:()=>i,XTL:()=>r});var n=a(31230);let i=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),r=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const o=n.Ps`
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
    ${d}`,u=n.Ps`
    fragment Paragraph on ParagraphDescendent {
  size
  ...Node
}
    ${d}`,p=n.Ps`
    fragment Descendent on Descendent {
  typename: __typename
  ...Mention
  ...Paragraph
  ...Leaf
}
    ${m}
${u}
${o}`,c=n.Ps`
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
    ${p}`,g=n.Ps`
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
    ${p}
${c}`,h=n.Ps`
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
    ${p}
${c}`,f=n.Ps`
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
    ${p}
${c}`,y=n.Ps`
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
    `,$=n.Ps`
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
${$}`,_=n.Ps`
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
${$}
${v}`,N=n.Ps`
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
${$}
${_}`,E=n.Ps`
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
    ${N}`,P=n.Ps`
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
    ${E}
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
    ${E}
${P}`,S=n.Ps`
    fragment ReactiveNode on ReactiveNode {
  ...FlowNodeCommons
  __typename
  implementation
  defaults
}
    ${E}`,I=n.Ps`
    fragment ArgNode on ArgNode {
  ...FlowNodeCommons
  __typename
}
    ${E}`,L=n.Ps`
    fragment KwargNode on KwargNode {
  ...FlowNodeCommons
  __typename
}
    ${E}`,A=n.Ps`
    fragment ReturnNode on ReturnNode {
  ...FlowNodeCommons
  __typename
}
    ${E}`,T=n.Ps`
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
    ${E}
${P}`,D=n.Ps`
    fragment GraphNode on GraphNode {
  ...FlowNodeCommons
  __typename
}
    ${E}`,R=n.Ps`
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
${S}
${I}
${L}
${A}
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
    ${W}`,U=n.Ps`
    fragment FlowEdgeCommons on FlowEdgeCommons {
  stream {
    ...StreamItem
  }
}
    ${F}`,O=n.Ps`
    fragment LabeledEdge on LabeledEdge {
  ...FlowEdgeCommons
  __typename
}
    ${U}`,H=n.Ps`
    fragment FancyEdge on FancyEdge {
  ...FlowEdgeCommons
  __typename
}
    ${U}`,q=n.Ps`
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
    ${O}
${H}`,B=n.Ps`
    fragment Global on Global {
  toKeys
  port {
    ...Port
  }
}
    ${N}`,M=n.Ps`
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
${B}
${N}`,G=n.Ps`
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
${M}`,J=n.Ps`
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
    `,z=n.Ps`
    fragment ListFlow on Flow {
  id
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    `,j=n.Ps`
    fragment ListWorkspace on Workspace {
  id
  name
  latestFlow {
    ...ListFlow
  }
}
    ${z}`,Z=n.Ps`
    fragment Workspace on Workspace {
  id
  name
  latestFlow {
    ...Flow
  }
}
    ${M}`,X=(n.Ps`
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
    ${N}`),Y=n.Ps`
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
    `,K=n.Ps`
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
    ${Y}`,V=n.Ps`
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
    ${Y}
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
    ${Y}
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
    ${J}`;n.Ps`
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
    ${J}`;n.Ps`
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
    ${j}`;n.Ps`
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
    ${j}`;n.Ps`
    query SearchWorkspaces($name: String) {
  workspaces(name: $name) {
    ...ListWorkspace
  }
}
    ${j}`;n.Ps`
    query SearchFlows($name: String, $workspace: ID) {
  flows(name: $name, workspace: $workspace) {
    ...ListFlow
  }
}
    ${z}`;n.Ps`
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
    ${K}`;n.Ps`
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
    ${Y}`;n.Ps`
    query FlussGlobalSearch($search: String) {
  workspaces(search: $search) {
    ...ListWorkspace
  }
}
    ${j}`;n.Ps`
    query ReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${X}`;n.Ps`
    query DetailReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${X}`;n.Ps`
    query ReactiveTemplates($search: String) {
  reactivetemplates(name: $search) {
    ...ReactiveTemplate
  }
}
    ${X}`;n.Ps`
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
    ${Y}`},97724:(e,t,a)=>{"use strict";a.d(t,{k:()=>l});var n=a(83117),i=a(67294),r=a(40196);a(86180);const o=e=>console.log("flow loaded:",e),l=e=>{let{edgeTypes:t,nodeTypes:a,nodes:l,edges:s,children:d,...m}=e;return i.createElement(r.tV,null,i.createElement(r.x$,(0,n.Z)({nodes:l,edges:s,onInit:o,nodeTypes:a,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))}},54706:(e,t,a)=>{"use strict";a.d(t,{Tm:()=>o,XC:()=>s});var n=a(67294),i=a(1706);const r=n.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),o=()=>(0,n.useContext)(r),l=e=>{let{id:t,children:a,expandedHeight:o=200,expandedWidth:l=400,collapsedWidth:s=170,collapsedHeight:d=70}=e;const[m,u]=(0,n.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:d});return n.createElement(i.Resizable,{key:t,height:m.height,width:m.width,onResize:(e,t)=>{let{size:a,handle:n}=t;u((e=>({...e,width:a.width,height:a.height,isExpanded:a.height>200&&a.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},n.createElement(r.Provider,{value:{...m,toggleExpanded:()=>{u((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:l,height:e.isExpanded?d:o})))}}},n.createElement("div",{style:{width:m.width+"px",height:m.height+"px"},className:"flex flex-col"},a)))},s=e=>t=>n.createElement(l,{id:t.id},n.createElement(e,t))},41848:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var n=a(83117),i=(a(67294),a(3905)),r=a(83177),o=a(68648),l=a(30681),s=a(15944),d=a(3040),m=a.n(d),u=a(73266),p=a(71698);const c={title:"Bridging Deep Learning",sidebar_label:"Deep Learning Bridge",sidebar_position:3},g=void 0,h={unversionedId:"introduction/advanced_tutorial/deep_learning",id:"introduction/advanced_tutorial/deep_learning",title:"Bridging Deep Learning",description:"Deep learning is taking over the world of bioimage analysis, and for good reason. However it is not always easy to get started and use",source:"@site/docs/introduction/advanced_tutorial/deep_learning.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/deep_learning",permalink:"/docs/introduction/advanced_tutorial/deep_learning",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/deep_learning.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Bridging Deep Learning",sidebar_label:"Deep Learning Bridge",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction/advanced_tutorial/intro"},next:{title:"Train a Deep Learning Model",permalink:"/docs/introduction/advanced_tutorial/training"}},f={},y=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The problems we are trying to solve",id:"the-problems-we-are-trying-to-solve",level:2},{value:"How to use Deep Learning in Arkitekt",id:"how-to-use-deep-learning-in-arkitekt",level:2},{value:"Testing the plugin",id:"testing-the-plugin",level:3},{value:"Integrate with ImageJ",id:"integrate-with-imagej",level:2},{value:"Integrate with Napari",id:"integrate-with-napari",level:2},{value:"Our own model",id:"our-own-model",level:2}],k={toc:y},b="wrapper";function w(e){let{components:t,...a}=e;return(0,i.kt)(b,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Deep learning is taking over the world of bioimage analysis, and for good reason. However it is not always easy to get started and use\nthe deep learning tools that are available.\nIn this section of the documentation we will try to show you how to get started with deep learning and how Arkitekt can help you,\nby showing you how to create a simple "deep learning enabled" workflow, that you can use to predict the segmentation of nuclei in a cell culture.'),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To get started with deep learning and Arkitekt you should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Have a basic understanding of deep learning, in the sense of what the words "Training" and "Inference" mean.'),(0,i.kt)("li",{parentName:"ul"},"Have gone through the ",(0,i.kt)("a",{parentName:"li",href:"/docs/introduction/first_steps"},"basics of Arkitekt"),"."),(0,i.kt)("li",{parentName:"ul"},"Have a CUDA capable GPU. If you don't have a GPU, you should still be able to follow along, but the prediction\nwill be very slow."),(0,i.kt)("li",{parentName:"ul"},"Either Mikro-Napari or Fiji with MikroJ installed. If you don't have either of these, you can still follow along, but you won't be able to run the workflow.")),(0,i.kt)("h1",{id:"our-task"},"Our task"),(0,i.kt)("p",null,"We would like to create a workflow that can take an image of nuclei in a cell culture and predict the segmentation of the nuclei.\nWe will be using a deep learning model based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stardist/stardist"},"Stardist")," to do the prediction.\nWe will be using the same dataset that we have used in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps"},"basics of Arkitekt"),". "),(0,i.kt)(s.Z,{img:m(),mdxType:"Image"}),(0,i.kt)("h2",{id:"the-problems-we-are-trying-to-solve"},"The problems we are trying to solve"),(0,i.kt)("p",null,"In this tutorial we would like to show you how to create a simple deep learning workflow in Arkitekt, and how Arkitekt can solve some common issues,\nthat you might encounter when trying to create your own deep learning workflows. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to maintain the ",(0,i.kt)("strong",{parentName:"p"},"complex software requirements")," that is needed for deep learning."),(0,i.kt)("p",{parentName:"li"},"That's a perfect fit for ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginApps"),". Arkitekt plugins are containerized, so developers can already add in\nall of the software requirements that are needed for their specific deep learning algorithm. No need to install anything on your computer."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to ",(0,i.kt)("strong",{parentName:"p"},"integrate")," deep learning into your favourite bioimage analysis app."),(0,i.kt)("p",{parentName:"li"},"That's what we have ",(0,i.kt)("strong",{parentName:"p"},"bridging")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Workflows")," for. You can create a workflow in Arkitekt, that will take your image from you\nbioimage analysis app of choice, offload them to the Arkitet server, and just pipe the result back to the bioimage app, so you can continue your analysis\nin the app you are used to."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"I ",(0,i.kt)("strong",{parentName:"p"},"don't have GPUs")," available on my computer, how can I still use deep learning?"),(0,i.kt)("p",{parentName:"li"},"Easy. Just use the distributed workflow to offload the prediction to any computer that has a GPU available (here you Arkitekt Server) but potentially\nalso another computer in your lab / and or the ominous cloud. Oh and if you don't have a GPU available at all, you can still use the CPU version of Stardist."))),(0,i.kt)("admonition",{title:"On other solutions",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We are not the only ones trying to solve these problems. There are other great solutions out there, that you should definitely check out. One of it is ",(0,i.kt)("a",{parentName:"p",href:"https://deepimagej.github.io"},"DeepImageJ"),".\nArkitet is not trying to replace these solutions, but rather complement them. We are rather trying to provide a solution that is as generic as possible, so that you can use it with ",(0,i.kt)("em",{parentName:"p"},"any")," deep learning algorithm\n(that might use a different framework, rely on heavy pre and postprocessing, ...) and ",(0,i.kt)("em",{parentName:"p"},"integrate")," with any bioimage analysis app.")),(0,i.kt)("h2",{id:"how-to-use-deep-learning-in-arkitekt"},"How to use Deep Learning in Arkitekt"),(0,i.kt)("p",null,"So how do we install Stardist? Well just like any other plugin. You can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"segmentor")," repository to your Arkitekt installation by clicking on the button below."),(0,i.kt)(p.I,{repo:"segmentor",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"And then you can install the latest version of segmentor by deploying it as an plugin, as you learned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps/first_tool#installing-our-first-app"},"basics of Arkitekt"),".\nFor the rest of this tutorial we will assume that you have installed the ",(0,i.kt)("inlineCode",{parentName:"p"},"segmentor")," plugin."),(0,i.kt)("h3",{id:"testing-the-plugin"},"Testing the plugin"),(0,i.kt)("p",null,"Once the plugin is installed you can easily test it out by running it on images that are stored on your arkitekt image. For this tutorial we will be using a pretrained model, that is already included in the plugin.\nYou can run the prediction on your image by utilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Segment Fluo2")," node."),(0,i.kt)("h2",{id:"integrate-with-imagej"},"Integrate with ImageJ"),(0,i.kt)("p",null,"Now that we have tested our plugin, we would like to integrate it with our favourite bioimage analysis app. In this case we will be using Fiji through MikroJ, but you can use any other app that is supported by Arkitekt.\nFor this we will be using two nodes provided by Fiji, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Image")," node and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show Image")," node. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Image")," node will take the image from Fiji and upload it to the Arkitekt server,\nwhere it will be processed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Segment Fluo2")," node of the ",(0,i.kt)("inlineCode",{parentName:"p"},"segmentor")," plugin. The result will then be piped back to Fiji, where it will be shown using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show Image")," node."),(0,i.kt)(l.n,{flow:r,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," This is the workflow we would like to create. Upload our active image, segment it using a pretrained model, and show the result on ImageJ")),(0,i.kt)("p",null,"Just import this workflow into your Arkitekt instance, and deploy it on the ",(0,i.kt)("inlineCode",{parentName:"p"},"reaktor")," scheduler just like you did in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_workflows#reserving-a-scheduler"},"basics of Arkitekt"),".\nFeel free to also create that workflow on your own, if you want to get some more practice."),(0,i.kt)("p",null,"After reserving the workflow, you can run it directly from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard")," of Orkestrator. Just make sure that you have an image open in Fiji, and then click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Run")," button of the workflow."),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:u.Z})),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," The workflow in action utilizing MikroJ")),(0,i.kt)("h2",{id:"integrate-with-napari"},"Integrate with Napari"),(0,i.kt)("p",null,"Now that we have seen how to integrate with ImageJ, let's try to do the same with Napari. Its quite similar to the ImageJ integration, but this time we will be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Layer")," node and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show on Napari")," node provided by Napari."),(0,i.kt)(l.n,{flow:o,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," This is the workflow we would like to create. Upload our active image, segment it using a pretrained model, and show the result on ImageJ")),(0,i.kt)("p",null,"Import, deploy, reserve and run, just like you did with the ImageJ workflow. Its the same workflow, just with different nodes."),(0,i.kt)("admonition",{title:"On universal Workflows ",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You might have noticed that the workflow, is similar to the one we created for ImageJ, but not the same. We could have created a universal workflow, that would work for both ImageJ and Napari, by\nutilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Image")," node and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show Image")," node, and before deployment let the user choose which app he wants to use. This will be thematized in a later tutorial.")),(0,i.kt)("h2",{id:"our-own-model"},"Our own model"),(0,i.kt)("p",null,"Here we have used a pretrained model, but what if we want to use our own model? Well that's easy. Training your own model on the segmentor plugin is also quite easy, but lets explore that in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/advanced_tutorial/training"},"next tutorial")))}w.isMDXComponent=!0},73266:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/medias/fiji_segmentation-36956e47929d30213356456ff3c0b1e3.webm"},83177:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},68648:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);