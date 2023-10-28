(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8777],{3040:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/segmentation.452be31.640.png 640w,"+n.p+"assets/ideal-img/segmentation.9c18098.1320.png 1320w,"+n.p+"assets/ideal-img/segmentation.57e8a2f.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/segmentation.452be31.640.png",width:640,height:313},{path:n.p+"assets/ideal-img/segmentation.9c18098.1320.png",width:1320,height:646},{path:n.p+"assets/ideal-img/segmentation.57e8a2f.2000.png",width:2e3,height:979}],src:n.p+"assets/ideal-img/segmentation.452be31.640.png",toString:function(){return n.p+"assets/ideal-img/segmentation.452be31.640.png"},placeholder:void 0,width:640,height:313},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVQImQHNADL/ACgoKP0uLi79Kioq+CwsLf8wMCN1AACpLSIOgf88Hn3+EQuD/jUbf/8AMTEx/zAwMP8xMTH7Kios/1paRJ+1oqF0ORmF/0Yhf/8jC4r+MxeC/wAvLy/6MDAw+zMzM/cqKiv/TE09kPbbq2ZROoL/NBOC+i8UhvoOCIf6ACoqKv8rKyv/Ly8v/y8vMP8eIBp8EQChMCQZev8uGXz/JxV+/xgLhf8ALCwsh0hISJhTU1OXOzs8nS0tHz4HAKEaJCGMlmlNhppJNpScIhiMjYzvTWkrbiOaAAAAAElFTkSuQmCC"}},2085:(e,t,n)=>{"use strict";n.d(t,{n:()=>z});var a=n(67294),i=n(40196),r=n(97724);function o(e){return null!=e}const s=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,l=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function d(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(s,"").replace(l,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const m=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...i}=e;return{type:a,id:t,position:n,data:{__typename:a,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(o)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,__typename:o,...s}=e;return{id:t,type:o,source:n,sourceHandle:a,target:i,targetHandle:r,data:{__typename:o,...s}}}})).filter(o)||[],c=a.createContext({});var u=n(20263);const g=e=>{const{}=(0,a.useContext)(c),{id:t,sourcePosition:n,targetPosition:r,sourceX:o,sourceY:s,targetX:l,targetY:d,style:m,markerStart:p,markerEnd:g,data:h}=e,[f,y,k]=(0,i.OW)({sourcePosition:n,targetPosition:r,sourceX:o,sourceY:s,targetX:l,targetY:d});return a.createElement(a.Fragment,null,a.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:f}),a.createElement(i.XQ,null,a.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${y}px,${k}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},h?.stream.map(((e,t)=>a.createElement("span",{className:"text-xs",key:t},(e?.kind==u.XTL.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var h=n(54706);const f="border-slate-200 shadow-slate-200/50 dark:border-slate-200 dark:shadow-slate-200/10",y=e=>{let{children:t,id:n,color:i="white"}=e;const[r,o]=a.useState(!1);return a.createElement(a.Fragment,null,a.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${f}`},t))};var k=n(55770),$=n(31230),b=n(83117),w=n(51550),v=n(90512),E=n(57851);function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,E.m)((0,v.W)(t))}const P=w.fC,_=w.xz,C=a.forwardRef(((e,t)=>{let{className:n,align:i="center",sideOffset:r=4,...o}=e;return a.createElement(w.h_,null,a.createElement(w.VY,(0,b.Z)({ref:t,align:i,sideOffset:r,className:N("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n)},o)))}));C.displayName=w.VY.displayName;const x=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),D=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),S=e=>{const{data:t,error:n,loading:i}=(0,k.un)($.ZP`
    { node(hash: "${e.data.hash}") {
      name
    }
    }
    `);return a.createElement("div",{className:"flex flex-row gap-2 h-full"}," ",n?a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(x,null),a.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.data?.name," ")):a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(D,null),a.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")),a.createElement(P,null,a.createElement(_,{className:"bg-back-700 rounded rounded-md cursor-pointer"},"?"),a.createElement(C,{className:"text-xs bg-back-800 my-auto"}," ",e.data?.description)))},A=(0,h.XC)((e=>{let{data:t,id:n}=e;const{isExpanded:r,toggleExpanded:o}=(0,h.Tm)();t.kind;return a.createElement(y,{id:n},t.instream.map(((e,t)=>a.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),t.outstream.map(((e,t)=>a.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event"}))),a.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full "},a.createElement(k.Z6,{fallback:a.createElement(a.Fragment,null," ",t?.name)},a.createElement(S,{data:t})),r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"}))))})),L=(0,h.XC)((e=>{let{data:{outstream:t,instream:n},id:r}=e;const[o,s]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(y,{color:"blue",id:r},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!l)},"Inputs"," "))),t.map(((e,t)=>a.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r}))))}));var I=n(63750);const T=(0,h.XC)((e=>{let{data:{constream:t},id:n}=e;const[i,r]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(y,{color:"green",id:n},!o&&a.createElement(a.Fragment,null,a.createElement("div",{className:"flex"},t?.map(((e,t)=>a.createElement(a.Fragment,null,a.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n},a.createElement("div",{className:"flex justify-between"},a.createElement("button",{type:"button",onClick:()=>alert("implement")},a.createElement(I.yvY,null))))))))),a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>s(!o)},"Constants"," "),a.createElement("p",{className:"text-gray-700 text-base"}))))})),R={ArkitektNode:A,ArkitektFilterNode:A,LocalNode:A,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:r,implementation:o},id:s}=e;return a.createElement(a.Fragment,null,a.createElement("div",{style:{width:40},className:"custom-drag-handle"},o&&[u.J5d.Combinelatest,u.J5d.Withlatest].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[u.J5d.Gate].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-500)"}})),o&&[u.J5d.Filter].includes(o)&&a.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},a.createElement("h1",null,o)),o&&[u.J5d.Split].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[u.J5d.ToList,u.J5d.BufferComplete].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,o)),o&&[u.J5d.Chunk].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,o)),o&&[u.J5d.Omit].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},o)),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r?.map(((e,t,n)=>a.createElement(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),n?.map(((e,t,n)=>a.createElement(i.HH,{key:t,type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,n)=>a.createElement(i.HH,{key:t,type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}})))))},ArgNode:L,ReturnNode:(0,h.XC)((e=>{let{data:{outstream:t,instream:n},id:r}=e;const[o,s]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(y,{color:"red",id:r},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!l)},"Outputs"),a.createElement("p",{className:"text-gray-700 text-base"},a.createElement(a.Fragment,null,n[0]?.map((e=>e?.kind)).join(" | "),a.createElement("br",null)),!l&&a.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>s(!0)},"Add Documentation")))),n.map(((e,t)=>a.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),KwargNode:T,GraphNode:()=>null},F={LabeledEdge:g,FancyEdge:g},W=e=>{let{flow:t}=e;const[n,o,s]=(0,i.Rr)(m(t.graph?.nodes)),[l,d,u]=(0,i.ll)(p(t.graph?.edges));return a.createElement(c.Provider,{value:{flow:t}},a.createElement(r.k,{nodes:n,edges:l,onNodesChange:s,onEdgesChange:u,elementsSelectable:!0,nodeTypes:R,edgeTypes:F,fitView:!0,attributionPosition:"bottom-right"}))};var H=n(30210),U=n(39903);const q=e=>{const{user:t}=(0,H.gX)(),{fakts:n}=(0,U.sT)();return a.createElement("div",{className:"relative "+e.className},e.children,!t||!n&&a.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var O=n(68947),M=n(50319);const B=$.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
}
`,G=e=>{let{flow:t,blockImport:n}=e;const{client:i}=(0,O.dB)(),[r,s]=(0,M.D)(B,{client:i}),l=async()=>{try{const n=(e=m(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:a,parentNode:i,data:{outstream:r,constream:s,instream:l,...m}}=e;return{outstream:r?.map((e=>e?e.filter(o).map(d):[]))||[[]],constream:s?.map((e=>e?e.filter(o).map(d):[]))||[[]],instream:l?.map((e=>e?e.filter(o).map(d):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:a||"Fake type",name:m.name,description:m.description,hash:m.hash,implementation:m.implementation,kind:m.kind,defaults:m.defaults,mapStrategy:m.mapStrategy,allowLocal:m.allowLocal,maxRetries:m.maxRetries,retryDelay:m.retryDelay,binds:m.binds,parentNode:i,interface:m.interface}}})).filter(o)||[]||[]),a=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,type:s,data:l}=e;return{id:t,typename:s||"Fake type",source:n,sourceHandle:a||"returns",target:i,targetHandle:r||"args",stream:l?.stream.filter(o).map(d)||[]}}})).filter(o)||[])(p(t.graph.edges));let i={nodes:n,edges:a,globals:t.graph.globals.filter(o).map(d),args:t.graph.args.filter(o).map(d),returns:t.graph.returns.filter(o).map(d)};await r({variables:{name:t.name,graph:i}})}catch(n){alert(n.message)}var e};return a.createElement("button",{onClick:()=>l(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt")},z=e=>a.createElement("div",{className:"border border-1 rounded border-gray-800"},a.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},a.createElement(W,{flow:e.flow})),a.createElement(q,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},a.createElement(O.Ot,null,a.createElement(G,{flow:e.flow,blockImport:e.blockImport}))))},20263:(e,t,n)=>{"use strict";n.d(t,{J5d:()=>i,XTL:()=>r});var a=n(31230);let i=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),r=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const o=a.Ps`
    fragment Leaf on Leaf {
  typename: __typename
  bold
  italic
  code
  text
}
    `,s=(a.Ps`
    fragment LevelDownDescendent on Descendent {
  typename: __typename
  ...Leaf
}
    ${o}`,a.Ps`
    fragment LevelDownParagraph on ParagraphDescendent {
  size
  untypedChildren
}
    `),l=a.Ps`
    fragment LevelDownMention on MentionDescendent {
  user {
    sub
  }
}
    `,d=a.Ps`
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
${s}
${l}`,m=a.Ps`
    fragment Mention on MentionDescendent {
  user {
    sub
  }
  ...Node
}
    ${d}`,p=a.Ps`
    fragment Paragraph on ParagraphDescendent {
  size
  ...Node
}
    ${d}`,c=a.Ps`
    fragment Descendent on Descendent {
  typename: __typename
  ...Mention
  ...Paragraph
  ...Leaf
}
    ${m}
${p}
${o}`,u=a.Ps`
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
    ${c}`,g=a.Ps`
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
    ${c}
${u}`,h=a.Ps`
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
    ${c}
${u}`,f=a.Ps`
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
    ${c}
${u}`,y=a.Ps`
    fragment ConditionEvent on ConditionEvent {
  id
  source
  createdAt
  value
  state
}
    `,k=a.Ps`
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
    ${y}`,$=a.Ps`
    fragment ListConditionSnapshot on ConditionSnapshot {
  id
  condition {
    id
    provision
  }
}
    `,b=a.Ps`
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
    `,w=a.Ps`
    fragment ReturnWidget on ReturnWidget {
  kind
  query
  choices {
    value
    label
  }
}
    `,v=a.Ps`
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
    ${b}
${w}`,E=a.Ps`
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
    ${b}
${w}
${v}`,N=a.Ps`
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
    ${b}
${w}
${E}`,P=a.Ps`
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
    ${N}`,_=a.Ps`
    fragment RetriableNode on RetriableNode {
  maxRetries
  retryDelay
}
    `,C=a.Ps`
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
    ${P}
${_}`,x=a.Ps`
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
    ${P}
${_}`,D=a.Ps`
    fragment ReactiveNode on ReactiveNode {
  ...FlowNodeCommons
  __typename
  implementation
  defaults
}
    ${P}`,S=a.Ps`
    fragment ArgNode on ArgNode {
  ...FlowNodeCommons
  __typename
}
    ${P}`,A=a.Ps`
    fragment KwargNode on KwargNode {
  ...FlowNodeCommons
  __typename
}
    ${P}`,L=a.Ps`
    fragment ReturnNode on ReturnNode {
  ...FlowNodeCommons
  __typename
}
    ${P}`,I=a.Ps`
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
    ${P}
${_}`,T=a.Ps`
    fragment GraphNode on GraphNode {
  ...FlowNodeCommons
  __typename
}
    ${P}`,R=a.Ps`
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
    ${C}
${x}
${D}
${S}
${A}
${L}
${I}
${T}`,F=a.Ps`
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
    `,W=a.Ps`
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
    ${F}`,H=a.Ps`
    fragment FlowEdgeCommons on FlowEdgeCommons {
  stream {
    ...StreamItem
  }
}
    ${W}`,U=a.Ps`
    fragment LabeledEdge on LabeledEdge {
  ...FlowEdgeCommons
  __typename
}
    ${H}`,q=a.Ps`
    fragment FancyEdge on FancyEdge {
  ...FlowEdgeCommons
  __typename
}
    ${H}`,O=a.Ps`
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
${q}`,M=a.Ps`
    fragment Global on Global {
  toKeys
  port {
    ...Port
  }
}
    ${N}`,B=a.Ps`
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
${O}
${M}
${N}`,G=a.Ps`
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
${B}`,z=a.Ps`
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
    `,j=a.Ps`
    fragment ListFlow on Flow {
  id
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    `,J=a.Ps`
    fragment ListWorkspace on Workspace {
  id
  name
  latestFlow {
    ...ListFlow
  }
}
    ${j}`,X=a.Ps`
    fragment Workspace on Workspace {
  id
  name
  latestFlow {
    ...Flow
  }
}
    ${B}`,K=(a.Ps`
    fragment RunLog on RunLog {
  id
  node
  log
}
    `,a.Ps`
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
    ${N}`),Y=a.Ps`
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
    `,Z=a.Ps`
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
    ${Y}`,V=a.Ps`
    fragment ListSnapshot on Snapshot {
  id
  run {
    id
    assignation
  }
  t
}
    `,Q=a.Ps`
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
${B}`,ee=a.Ps`
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
${B}`,te=a.Ps`
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
    `;a.Ps`
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
    ${g}`;a.Ps`
    mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
  replyTo(descendents: $descendents, parent: $parent) {
    ...ListComment
  }
}
    ${g}`;a.Ps`
    mutation ResolveComment($id: ID!) {
  resolveComment(id: $id) {
    ...ListComment
  }
}
    ${g}`;a.Ps`
    mutation DeleteCondition($id: ID!) {
  deleteCondition(id: $id) {
    id
  }
}
    `;a.Ps`
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
    `;a.Ps`
    mutation UpdateFlow($id: ID!, $graph: GraphInput!, $screenshot: ImageFile) {
  updateworkspace(id: $id, graph: $graph, screenshot: $screenshot) {
    ...Workspace
  }
}
    ${X}`;a.Ps`
    mutation DeleteFlow($id: ID!) {
  deleteFlow(id: $id) {
    id
  }
}
    `;a.Ps`
    mutation CreateVanillaDiagram($name: String, $restrict: [String]) {
  drawvanilla(name: $name, restrict: $restrict) {
    ...Workspace
  }
}
    ${X}`;a.Ps`
    mutation ImportFlow($name: String, $graph: GraphInput!) {
  importflow(name: $name, graph: $graph) {
    ...Workspace
  }
}
    ${X}`;a.Ps`
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
    `;a.Ps`
    mutation DeleteSnapshot($id: ID!) {
  deleteSnapshot(id: $id) {
    id
  }
}
    `;a.Ps`
    mutation DeleteRun($id: ID!) {
  deleteRun(id: $id) {
    id
  }
}
    `;a.Ps`
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
    `;a.Ps`
    mutation DeleteWorkspace($id: ID!) {
  deleteWorkspace(id: $id) {
    id
  }
}
    `;a.Ps`
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
    `;a.Ps`
    query CommentsFor($id: ID!, $model: CommentableModels!) {
  commentsfor(model: $model, id: $id) {
    ...ListComment
  }
}
    ${g}`;a.Ps`
    query MyMentions {
  mymentions {
    ...MentionComment
  }
}
    ${h}`;a.Ps`
    query DetailComment($id: ID!) {
  comment(id: $id) {
    ...DetailComment
  }
}
    ${f}`;a.Ps`
    query ConditionSnapshots {
  conditionSnapshots {
    ...ListConditionSnapshot
  }
}
    ${$}`;a.Ps`
    query DetailConditionSnapshot($id: ID!) {
  conditionSnapshot(id: $id) {
    ...ConditionSnapshot
  }
}
    ${k}`;a.Ps`
    query Conditions {
  conditions {
    ...ListCondition
  }
}
    ${z}`;a.Ps`
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
    ${z}`;a.Ps`
    query DetailCondition($id: ID, $provision: ID) {
  condition(id: $id, provision: $provision) {
    ...Condition
  }
}
    ${G}`;a.Ps`
    query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
  conditionEventsBetween(condition: $id, min: $min, max: $max) {
    ...ConditionEvent
  }
}
    ${y}`;a.Ps`
    query Flow($id: ID) {
  flow(id: $id) {
    ...Flow
  }
}
    ${B}`;a.Ps`
    query Workspace($id: ID!) {
  workspace(id: $id) {
    ...Workspace
  }
}
    ${X}`;a.Ps`
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
    ${J}`;a.Ps`
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
    ${J}`;a.Ps`
    query SearchWorkspaces($name: String) {
  workspaces(name: $name) {
    ...ListWorkspace
  }
}
    ${J}`;a.Ps`
    query SearchFlows($name: String, $workspace: ID) {
  flows(name: $name, workspace: $workspace) {
    ...ListFlow
  }
}
    ${j}`;a.Ps`
    query Snapshots {
  snapshots {
    ...ListSnapshot
  }
}
    ${V}`;a.Ps`
    query DetailSnapshot($id: ID!) {
  snapshot(id: $id) {
    ...Snapshot
  }
}
    ${Z}`;a.Ps`
    query Runs {
  runs {
    ...ListRun
  }
}
    ${te}`;a.Ps`
    query MyRuns($limit: Int, $offset: Int, $order: String, $createdDay: DateTime) {
  myruns(limit: $limit, offset: $offset, order: $order, createdDay: $createdDay) {
    ...ListRun
  }
}
    ${te}`;a.Ps`
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
    ${te}`;a.Ps`
    query DetailRun($id: ID, $assignation: ID) {
  run(id: $id, assignation: $assignation) {
    ...Run
  }
}
    ${Q}`;a.Ps`
    query ExportRun($id: ID) {
  run(id: $id) {
    ...ExportRun
  }
}
    ${ee}`;a.Ps`
    query EventsBetween($id: ID!, $min: Int, $max: Int) {
  eventsBetween(run: $id, min: $min, max: $max) {
    ...RunEvent
  }
}
    ${Y}`;a.Ps`
    query FlussGlobalSearch($search: String) {
  workspaces(search: $search) {
    ...ListWorkspace
  }
}
    ${J}`;a.Ps`
    query ReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${K}`;a.Ps`
    query DetailReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${K}`;a.Ps`
    query ReactiveTemplates($search: String) {
  reactivetemplates(name: $search) {
    ...ReactiveTemplate
  }
}
    ${K}`;a.Ps`
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
    ${y}`;a.Ps`
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
    ${Y}`},97724:(e,t,n)=>{"use strict";n.d(t,{k:()=>s});var a=n(83117),i=n(67294),r=n(40196);n(86180);const o=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:t,nodeTypes:n,nodes:s,edges:l,children:d,...m}=e;return i.createElement(r.tV,null,i.createElement(r.x$,(0,a.Z)({nodes:s,edges:l,onInit:o,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))}},54706:(e,t,n)=>{"use strict";n.d(t,{Tm:()=>o,XC:()=>l});var a=n(67294),i=n(1706);const r=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),o=()=>(0,a.useContext)(r),s=e=>{let{id:t,children:n,expandedHeight:o=200,expandedWidth:s=400,collapsedWidth:l=170,collapsedHeight:d=70}=e;const[m,p]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:l,height:d});return a.createElement(i.Resizable,{key:t,height:m.height,width:m.width,onResize:(e,t)=>{let{size:n,handle:a}=t;p((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},a.createElement(r.Provider,{value:{...m,toggleExpanded:()=>{p((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?l:s,height:e.isExpanded?d:o})))}}},a.createElement("div",{style:{width:m.width+"px",height:m.height+"px"},className:"flex flex-col"},n)))},l=e=>t=>a.createElement(s,{id:t.id},a.createElement(e,t))},72910:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>c,toc:()=>g});var a=n(83117),i=(n(67294),n(3905));const r=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}');var o=n(2085),s=n(15944),l=n(3040),d=n.n(l);const m={title:"Deep Learning",sidebar_label:"Deep Learning",sidebar_position:1},p="Deep Learning",c={unversionedId:"introduction/advanced_tutorial/deep_learning",id:"introduction/advanced_tutorial/deep_learning",title:"Deep Learning",description:"Deep learning is taking over the world of bioimage analysis, and for good reason. However it is not always easy to get started and use",source:"@site/docs/introduction/advanced_tutorial/deep_learning.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/deep_learning",permalink:"/docs/introduction/advanced_tutorial/deep_learning",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/deep_learning.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Deep Learning",sidebar_label:"Deep Learning",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"A bit more advanced...",permalink:"/docs/category/a-bit-more-advanced"},next:{title:"Introduction",permalink:"/docs/introduction/advanced_tutorial/intro"}},u={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The problem we are trying to solve",id:"the-problem-we-are-trying-to-solve",level:2},{value:"Fiji Segmentation",id:"fiji-segmentation",level:2}],h={toc:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deep-learning"},"Deep Learning"),(0,i.kt)("p",null,'Deep learning is taking over the world of bioimage analysis, and for good reason. However it is not always easy to get started and use\nthe deep learning tools that are available.\nIn this section of the documentation we will try to show you how to get started with deep learning and how Arkitekt can help you,\nby showing you how to create a simple "deep learning enabled" workflow. '),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To get started with deep learning and Arkitekt you should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Have a basic understanding of deep learning, in the sense of what the words "Training" and "Inference" mean.'),(0,i.kt)("li",{parentName:"ul"},"Have gone through the ",(0,i.kt)("a",{parentName:"li",href:"/docs/introduction/first_steps"},"basics of Arkitekt"),"."),(0,i.kt)("li",{parentName:"ul"},"Have a CUDA capable GPU. If you don't have a GPU, you should still be able to follow along, but the prediction\nwill be very slow.")),(0,i.kt)("h1",{id:"our-task-at-hand"},"Our task at hand"),(0,i.kt)("p",null,"We would like to create a workflow that can take an image of nuclei in a cell culture and predict the segmentation of the nuclei.\nWe will be using a deep learning model based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stardist/stardist"},"Stardist")," to do the prediction.\nWe will be using the same dataset that we have used in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps"},"basics of Arkitekt"),". "),(0,i.kt)(s.Z,{img:d(),mdxType:"Image"}),(0,i.kt)("h2",{id:"the-problem-we-are-trying-to-solve"},"The problem we are trying to solve"),(0,i.kt)("p",null,"In this tutorial we would like to show you how to create a simple deep learning workflow in Arkitekt, and how Arkitekt can solve some common issues,\nthat you might encounter when trying to create your own deep learning workflows. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to maintain the ",(0,i.kt)("strong",{parentName:"p"},"complex software requirements")," that is needed for deep learning."),(0,i.kt)("p",{parentName:"li"},"That's a perfect fit for ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginApps"),". Arkitekt plugins are containerized, so developers can already add in\nall of the software requirements that are needed for their specific deep learning algorithm. No need to install anything on your computer."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to ",(0,i.kt)("strong",{parentName:"p"},"integrate")," deep learning into your favourite bioimage analysis app."),(0,i.kt)("p",{parentName:"li"},"That's what we have ",(0,i.kt)("strong",{parentName:"p"},"bridging")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Workflows")," for. You can create a workflow in Arkitekt, that will take your image from you\nbioimage analysis app of choice, offload them to the Arkitet server, and just pipe the result back to the bioimage app, so you can continue your analysis\nin the app you are used to."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"I ",(0,i.kt)("strong",{parentName:"p"},"don't have GPUs")," available on my computer, how can I still use deep learning?"),(0,i.kt)("p",{parentName:"li"},"Easy. Just use the distributed workflow to offload the prediction to any computer that has a GPU available (here you Arkitekt Server) but potentially\nalso another computer in your lab / and or the ominous cloud. Oh and if you don't have a GPU available at all, you can still use the CPU version of Stardist."))),(0,i.kt)("admonition",{title:"On other solutions",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We are not the only ones trying to solve these problems. There are other great solutions out there, that you should definitely check out. One of it is ",(0,i.kt)("a",{parentName:"p",href:"https://deepimagej.github.io"},"DeepImageJ"),".\nArkitet is not trying to replace these solutions, but rather complement them. We are rather trying to provide a solution that is as generic as possible, so that you can use it with ",(0,i.kt)("em",{parentName:"p"},"any")," deep learning algorithm\n(that might use a different framework, rely on heavy pre and postprocessing, ...) and ",(0,i.kt)("em",{parentName:"p"},"integrate")," with any bioimage analysis app.")),(0,i.kt)("h2",{id:"fiji-segmentation"},"Fiji Segmentation"),(0,i.kt)("p",null,"Lets first have a look at the workflow we would like to create. We will be using Fiji for this example, buy further down we will also show you how to do the same thing in ",(0,i.kt)("a",{parentName:"p",href:"#napari-segmentation"},(0,i.kt)("inlineCode",{parentName:"a"},"Napari")),"."),(0,i.kt)(o.n,{flow:r,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," This is the workflow we would like to create. Upload our active image, segment it using a pretrained model, and show the result on ImageJ")))}y.isMDXComponent=!0}}]);