(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8950],{60699:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/node_explaination.075aecc.640.png 640w,"+n.p+"assets/ideal-img/node_explaination.f7550c2.1320.png 1320w,"+n.p+"assets/ideal-img/node_explaination.2d491dd.1980.png 1980w",images:[{path:n.p+"assets/ideal-img/node_explaination.075aecc.640.png",width:640,height:261},{path:n.p+"assets/ideal-img/node_explaination.f7550c2.1320.png",width:1320,height:539},{path:n.p+"assets/ideal-img/node_explaination.2d491dd.1980.png",width:1980,height:808}],src:n.p+"assets/ideal-img/node_explaination.075aecc.640.png",toString:function(){return n.p+"assets/ideal-img/node_explaination.075aecc.640.png"},placeholder:void 0,width:640,height:261},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVQImQGkAFv/ANvJK/XJuSn/xbYo+9C/Kv/PvymJ3csrxdHAKv/Htyj5zr4q/8e3KI8AcGgd/ayfJvvq1y74gngi/2pjG5lWUBzMm48k/+3aLveGfCP/aGAcngDdyyz/6tcu/+7bL//o1S//wrMnoBoZFdmAdiH/9+Mw/+bULv/DsyimANfGKpnRwCmrzr0pptTDKbOwoiNdZV4bfZuPIrHSwSmm1MMqsqyfImQJPF3a07r9PAAAAABJRU5ErkJggg=="}},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>p});var a=n(85914),o=n(69819),i=n(31230),r=n(67294);const l=i.ZP`
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
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",p=(0,o.Zh)((e=>{let{branch:t,repo:n,user:i}=e;const{client:p}=(0,o.AA)(),u=`${i}/${n}:${t}`,{data:m,refetch:c}=(0,a.a)(s,{client:p,variables:{tag:u},pollInterval:3e3});return r.createElement(r.Fragment,null,m?.githubRepo?r.createElement("button",{className:d+"bg-green-300"}," \u2705 ",u):r.createElement("button",{onClick:async()=>{try{const{data:e}=await p.mutate({mutation:l,variables:{branch:t,repo:n,user:i}});await c(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",u))}),r.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},30433:(e,t,n)=>{"use strict";n.d(t,{n:()=>A});var a=n(67294),o=n(72457),i=n(97724);function r(e){return null!=e}const l=a.createContext({});var s=n(20263);const d=e=>{const{}=(0,a.useContext)(l),{id:t,sourcePosition:n,targetPosition:i,sourceX:r,sourceY:d,targetX:p,targetY:u,style:m,markerStart:c,markerEnd:h,data:k}=e,[g,w,f]=(0,o.OW)({sourcePosition:n,targetPosition:i,sourceX:r,sourceY:d,targetX:p,targetY:u});return a.createElement(a.Fragment,null,a.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:g}),a.createElement(o.XQ,null,a.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${w}px,${f}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},k?.stream.map(((e,t)=>a.createElement("span",{className:"text-xs",key:t},(e?.kind==s.XTL.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var p=n(54706);const u="border-slate-200 shadow-slate-200/50 dark:border-slate-200 dark:shadow-slate-200/10",m=e=>{let{children:t,id:n,color:o="white"}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:`px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 dark:text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${u}`},t))};var c=n(55770),h=n(31230);const k=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),g=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),w=e=>{const{data:t,error:n,loading:o}=(0,c.un)(h.ZP`
    { node(hash: "${e.data.hash}") {
      name
    }
    }
    `);return n?a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(k,null),a.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.data?.name," ")):a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(g,null),a.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," "))},f=(0,p.XC)((e=>{let{data:t,id:n}=e;const{isExpanded:i,toggleExpanded:r}=(0,p.Tm)();t.kind;return a.createElement(m,{id:n},t.instream.map(((e,t)=>a.createElement(o.HH,{type:"target",position:o.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),t.outstream.map(((e,t)=>a.createElement(o.HH,{type:"source",position:o.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event"}))),a.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full"},a.createElement(c.Z6,{fallback:a.createElement(a.Fragment,null," ",t?.name)},a.createElement(w,{data:t})),i&&a.createElement(a.Fragment,null,a.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"}))))})),y=(0,p.XC)((e=>{let{data:{outstream:t,instream:n},id:i}=e;const[r,l]=(0,a.useState)(!1),[s,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(m,{color:"blue",id:i},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>a.createElement(o.HH,{type:"source",position:o.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+i}))))}));var b=n(63750);const N=(0,p.XC)((e=>{let{data:{constream:t},id:n}=e;const[o,i]=(0,a.useState)(!1),[r,l]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(m,{color:"green",id:n},!r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"flex"},t?.map(((e,t)=>a.createElement(a.Fragment,null,a.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n},a.createElement("div",{className:"flex justify-between"},a.createElement("button",{type:"button",onClick:()=>alert("implement")},a.createElement(b.yvY,null))))))))),a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!r)},"Constants"," "),a.createElement("p",{className:"text-gray-700 text-base"}))))})),v={ArkitektNode:f,ArkitektFilterNode:f,LocalNode:f,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:i,implementation:r},id:l}=e;return a.createElement(a.Fragment,null,a.createElement("div",{style:{width:40},className:"custom-drag-handle"},r&&[s.J5d.Combinelatest,s.J5d.Withlatest].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r&&[s.J5d.Gate].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-500)"}})),r&&[s.J5d.Filter].includes(r)&&a.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},a.createElement("h1",null,r)),r&&[s.J5d.Split].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r&&[s.J5d.ToList,s.J5d.BufferComplete].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,r)),r&&[s.J5d.Chunk].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,r)),r&&[s.J5d.Omit].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},r)),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),i?.map(((e,t,n)=>a.createElement(o.HH,{type:"target",position:o.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),n?.map(((e,t,n)=>a.createElement(o.HH,{key:t,type:"target",position:o.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,n)=>a.createElement(o.HH,{key:t,type:"source",position:o.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}})))))},ArgNode:y,ReturnNode:(0,p.XC)((e=>{let{data:{outstream:t,instream:n},id:i}=e;const[r,l]=(0,a.useState)(!1),[s,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(m,{color:"red",id:i},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),a.createElement("p",{className:"text-gray-700 text-base"},a.createElement(a.Fragment,null,n[0]?.map((e=>e?.kind)).join(" | "),a.createElement("br",null)),!s&&a.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0)},"Add Documentation")))),n.map(((e,t)=>a.createElement(o.HH,{type:"target",position:o.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),KwargNode:N,GraphNode:()=>null},$={LabeledEdge:d,FancyEdge:d},C=e=>{let{flow:t}=e;const[n,s,d]=(0,o.Rr)((e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...o}=e;return{type:a,id:t,position:n,data:{__typename:a,...o},dragHandle:".custom-drag-handle",parentNode:o.parentNode?o.parentNode:void 0}}})).filter(r)||[])(t.graph?.nodes)),[p,u,m]=(0,o.ll)((e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:o,targetHandle:i,__typename:r,...l}=e;return{id:t,type:r,source:n,sourceHandle:a,target:o,targetHandle:i,data:{__typename:r,...l}}}})).filter(r)||[])(t.graph?.edges));return a.createElement(l.Provider,{value:{flow:t}},a.createElement(i.k,{nodes:n,edges:p,onNodesChange:d,onEdgesChange:m,elementsSelectable:!0,nodeTypes:v,edgeTypes:$,fitView:!0,attributionPosition:"bottom-right"}))};var _=n(30210),E=n(39903);const P=e=>{const{user:t}=(0,_.gX)(),{fakts:n}=(0,E.sT)();return a.createElement("div",{className:"relative "+e.className},e.children,!t||!n&&a.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")},A=e=>a.createElement("div",{className:"border border-1 rounded border-gray-800"},a.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},a.createElement(C,{flow:e.flow})),a.createElement(P,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},a.createElement("button",{onClick:()=>alert("implement"),disabled:e.blockImport,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800"},"Import into Arkitekt")))},20263:(e,t,n)=>{"use strict";n.d(t,{J5d:()=>o,XTL:()=>i});var a=n(31230);let o=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),i=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const r=a.Ps`
    fragment Leaf on Leaf {
  typename: __typename
  bold
  italic
  code
  text
}
    `,l=(a.Ps`
    fragment LevelDownDescendent on Descendent {
  typename: __typename
  ...Leaf
}
    ${r}`,a.Ps`
    fragment LevelDownParagraph on ParagraphDescendent {
  size
  untypedChildren
}
    `),s=a.Ps`
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
    ${r}
${l}
${s}`,p=a.Ps`
    fragment Mention on MentionDescendent {
  user {
    sub
  }
  ...Node
}
    ${d}`,u=a.Ps`
    fragment Paragraph on ParagraphDescendent {
  size
  ...Node
}
    ${d}`,m=a.Ps`
    fragment Descendent on Descendent {
  typename: __typename
  ...Mention
  ...Paragraph
  ...Leaf
}
    ${p}
${u}
${r}`,c=a.Ps`
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
    ${m}`,h=a.Ps`
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
    ${m}
${c}`,k=a.Ps`
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
    ${m}
${c}`,g=a.Ps`
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
    ${m}
${c}`,w=a.Ps`
    fragment ConditionEvent on ConditionEvent {
  id
  source
  createdAt
  value
  state
}
    `,f=a.Ps`
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
    ${w}`,y=a.Ps`
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
    `,N=a.Ps`
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
${N}`,$=a.Ps`
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
${N}
${v}`,C=a.Ps`
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
${N}
${$}`,_=a.Ps`
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
    ${C}`,E=a.Ps`
    fragment RetriableNode on RetriableNode {
  maxRetries
  retryDelay
}
    `,P=a.Ps`
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
    ${_}
${E}`,A=a.Ps`
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
    ${_}
${E}`,T=a.Ps`
    fragment ReactiveNode on ReactiveNode {
  ...FlowNodeCommons
  __typename
  implementation
  defaults
}
    ${_}`,S=a.Ps`
    fragment ArgNode on ArgNode {
  ...FlowNodeCommons
  __typename
}
    ${_}`,x=a.Ps`
    fragment KwargNode on KwargNode {
  ...FlowNodeCommons
  __typename
}
    ${_}`,D=a.Ps`
    fragment ReturnNode on ReturnNode {
  ...FlowNodeCommons
  __typename
}
    ${_}`,I=a.Ps`
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
    ${_}
${E}`,R=a.Ps`
    fragment GraphNode on GraphNode {
  ...FlowNodeCommons
  __typename
}
    ${_}`,W=a.Ps`
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
${A}
${T}
${S}
${x}
${D}
${I}
${R}`,L=a.Ps`
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
    `,F=a.Ps`
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
    ${L}`,B=a.Ps`
    fragment FlowEdgeCommons on FlowEdgeCommons {
  stream {
    ...StreamItem
  }
}
    ${F}`,U=a.Ps`
    fragment LabeledEdge on LabeledEdge {
  ...FlowEdgeCommons
  __typename
}
    ${B}`,O=a.Ps`
    fragment FancyEdge on FancyEdge {
  ...FlowEdgeCommons
  __typename
}
    ${B}`,q=a.Ps`
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
${O}`,H=a.Ps`
    fragment Global on Global {
  toKeys
  port {
    ...Port
  }
}
    ${C}`,G=a.Ps`
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
    ${W}
${q}
${H}
${C}`,M=a.Ps`
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
    ${w}
${G}`,j=a.Ps`
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
    `,Y=a.Ps`
    fragment ListFlow on Flow {
  id
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    `,z=a.Ps`
    fragment ListWorkspace on Workspace {
  id
  name
  latestFlow {
    ...ListFlow
  }
}
    ${Y}`,J=a.Ps`
    fragment Workspace on Workspace {
  id
  name
  latestFlow {
    ...Flow
  }
}
    ${G}`,X=(a.Ps`
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
    ${C}`),K=a.Ps`
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
    ${K}`,V=a.Ps`
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
    ${K}
${G}`,ee=a.Ps`
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
    ${K}
${G}`,te=a.Ps`
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
    ${h}`;a.Ps`
    mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
  replyTo(descendents: $descendents, parent: $parent) {
    ...ListComment
  }
}
    ${h}`;a.Ps`
    mutation ResolveComment($id: ID!) {
  resolveComment(id: $id) {
    ...ListComment
  }
}
    ${h}`;a.Ps`
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
    ${J}`;a.Ps`
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
    ${J}`;a.Ps`
    mutation ImportFlow($name: String, $graph: GraphInput!) {
  importflow(name: $name, graph: $graph) {
    ...Workspace
  }
}
    ${J}`;a.Ps`
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
    ${h}`;a.Ps`
    query MyMentions {
  mymentions {
    ...MentionComment
  }
}
    ${k}`;a.Ps`
    query DetailComment($id: ID!) {
  comment(id: $id) {
    ...DetailComment
  }
}
    ${g}`;a.Ps`
    query ConditionSnapshots {
  conditionSnapshots {
    ...ListConditionSnapshot
  }
}
    ${y}`;a.Ps`
    query DetailConditionSnapshot($id: ID!) {
  conditionSnapshot(id: $id) {
    ...ConditionSnapshot
  }
}
    ${f}`;a.Ps`
    query Conditions {
  conditions {
    ...ListCondition
  }
}
    ${j}`;a.Ps`
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
    ${j}`;a.Ps`
    query DetailCondition($id: ID, $provision: ID) {
  condition(id: $id, provision: $provision) {
    ...Condition
  }
}
    ${M}`;a.Ps`
    query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
  conditionEventsBetween(condition: $id, min: $min, max: $max) {
    ...ConditionEvent
  }
}
    ${w}`;a.Ps`
    query Flow($id: ID) {
  flow(id: $id) {
    ...Flow
  }
}
    ${G}`;a.Ps`
    query Workspace($id: ID!) {
  workspace(id: $id) {
    ...Workspace
  }
}
    ${J}`;a.Ps`
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
    ${z}`;a.Ps`
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
    ${z}`;a.Ps`
    query SearchWorkspaces($name: String) {
  workspaces(name: $name) {
    ...ListWorkspace
  }
}
    ${z}`;a.Ps`
    query SearchFlows($name: String, $workspace: ID) {
  flows(name: $name, workspace: $workspace) {
    ...ListFlow
  }
}
    ${Y}`;a.Ps`
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
    ${K}`;a.Ps`
    query FlussGlobalSearch($search: String) {
  workspaces(search: $search) {
    ...ListWorkspace
  }
}
    ${z}`;a.Ps`
    query ReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${X}`;a.Ps`
    query DetailReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${X}`;a.Ps`
    query ReactiveTemplates($search: String) {
  reactivetemplates(name: $search) {
    ...ReactiveTemplate
  }
}
    ${X}`;a.Ps`
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
    ${w}`;a.Ps`
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
    ${K}`},97724:(e,t,n)=>{"use strict";n.d(t,{k:()=>l});var a=n(87462),o=n(67294),i=n(72457);n(86180);const r=e=>console.log("flow loaded:",e),l=e=>{let{edgeTypes:t,nodeTypes:n,nodes:l,edges:s,children:d,...p}=e;return o.createElement(i.tV,null,o.createElement(i.x$,(0,a.Z)({nodes:l,edges:s,onInit:r,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},p),d))}},54706:(e,t,n)=>{"use strict";n.d(t,{Tm:()=>r,XC:()=>s});var a=n(67294),o=n(1706);const i=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),r=()=>(0,a.useContext)(i),l=e=>{let{id:t,children:n,expandedHeight:r=200,expandedWidth:l=400,collapsedWidth:s=170,collapsedHeight:d=70}=e;const[p,u]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:d});return a.createElement(o.Resizable,{key:t,height:p.height,width:p.width,onResize:(e,t)=>{let{size:n,handle:a}=t;u((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},a.createElement(i.Provider,{value:{...p,toggleExpanded:()=>{u((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:l,height:e.isExpanded?d:r})))}}},a.createElement("div",{style:{width:p.width+"px",height:p.height+"px"},className:"flex flex-col"},n)))},s=e=>t=>a.createElement(l,{id:t.id},a.createElement(e,t))},9429:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>k});var a=n(87462),o=(n(67294),n(3905)),i=(n(15944),n(75557),n(60699),n(30210)),r=n(71698),l=n(30433);const s=JSON.parse('{"__typename":"Flow","id":"3","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","position":{"__typename":"Position","x":681,"y":46},"typename":"ArkitektNode","parentNode":null,"hash":"57d45410523b5fc52e33a89c2ae0174666ef7afefe2028df1e16649a750bf0a4","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to be thresholded","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The thresholded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"gaussian_blur","label":"gaussian_blur","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to apply a gaussian blur before thresholding (kernel_size=5)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Otsu Thresholding","description":"Binarizes the image based on a threshold, using Otsu\'s method\\nwith option to guassian blur the image before, images are normalized\\nfor each x,y slice before thresholding.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","position":{"__typename":"Position","x":344,"y":56},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","position":{"__typename":"Position","x":1093,"y":59},"typename":"ArkitektNode","parentNode":null,"hash":"a0a7371a828e5104e953d955e69d6d14ceba2d6d58ccd2fd8609f417732f0d8e","kind":"FUNCTION","defaults":{"key":"Background Fraction","rep":null,"value":0},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"value","label":null,"identifier":null,"scope":"GLOBAL","kind":"INT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Fraction","description":"Measures the appearance of this value in the image (0-1)","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-cb5fee92-01e0-4f97-8d81-80bed3757576arg_0","source":"1","sourceHandle":"return_0","target":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-cb5fee92-01e0-4f97-8d81-80bed3757576return_0-arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8arg_0","source":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","sourceHandle":"return_0","target":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8return_0-arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887arg_0","source":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","sourceHandle":"return_0","target":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887return_0-2arg_0","source":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[],"args":[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"scummy-green-sparrow","screenshot":null,"createdAt":"2023-10-27T16:42:25.175566+00:00","workspace":{"__typename":"Workspace","id":"2"}}'),d=n.p+"assets/medias/create_workflow-4fea74d9bb7da6cade25a7556d176f62.webm",p=n.p+"assets/medias/deploy_flow-f4ee546d9d941f8383b728d7cd85fb54.webm",u={title:"Designing your first workflow",sidebar_label:"7. Designing your first workflow",sidebar_position:7},m=void 0,c={unversionedId:"introduction/first_steps/first_workflow",id:"introduction/first_steps/first_workflow",title:"Designing your first workflow",description:"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now lets put it all together and create our first workflow,",source:"@site/docs/introduction/first_steps/first_workflow.mdx",sourceDirName:"introduction/first_steps",slug:"/introduction/first_steps/first_workflow",permalink:"/docs/introduction/first_steps/first_workflow",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/first_steps/first_workflow.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Designing your first workflow",sidebar_label:"7. Designing your first workflow",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. A brief interlude",permalink:"/docs/introduction/first_steps/brief_interlude"},next:{title:"8. Your first Workflow Run",permalink:"/docs/introduction/first_steps/first_run"}},h={},k=[{value:"Before we start",id:"before-we-start",level:2},{value:"Enough talking",id:"enough-talking",level:2},{value:"New plugins",id:"new-plugins",level:2},{value:"Reserving a Scheduler",id:"reserving-a-scheduler",level:2},{value:"Creating the workflow",id:"creating-the-workflow",level:2},{value:"Running the workflow",id:"running-the-workflow",level:2}],g={toc:k},w="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(w,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now lets put it all together and create our first workflow,\nspanning the most basic nodes."),(0,o.kt)("p",null,"Here we will use our uploaded image, max project it,  threshold it (yeah analysis), and then measure the fraction of the image that is above the threshold (\nyeah quantification). In the course of this tutorial you will get to understand:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What even are workflows?"),(0,o.kt)("li",{parentName:"ul"},"What is a Workflow Scheduler?"),(0,o.kt)("li",{parentName:"ul"},"How to create a workflow?"),(0,o.kt)("li",{parentName:"ul"},"How to deploy a workflow on a Scheduler?")),(0,o.kt)("h2",{id:"before-we-start"},"Before we start"),(0,o.kt)("p",null,"You are familiar with this by now.. There are a few things we need to do before we can start.\nFirst what do we mean with ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow"),"? "),(0,o.kt)("p",null,"A workflow in the arkitekt sense is a processing pipeline, that uses a series of ",(0,o.kt)("inlineCode",{parentName:"p"},"Nodes")," to process your data in a stream. Nodes just like\nour previously mentioned ",(0,o.kt)("inlineCode",{parentName:"p"},"Show on Napari")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Convert File")," nodes. You can either stitch them together in the GUI or you can import them from a file or\neven this website. We will do the first. Hopefully this will help you in familiarizing yourself a bit more with the UI . "),(0,o.kt)("p",null,"Lets look first at the workflow we would like to create, and then we will go through the steps to create it."),(0,o.kt)(l.n,{flow:s,blockImport:!0,mdxType:"DisplayWorkflow"}),(0,o.kt)("div",{className:"text-gray-400 mb-2"},(0,o.kt)("small",null," This is the workflow we would like to create. For now we disabled the import feature.. You should really try to create it on your own ")),(0,o.kt)("p",null,"This is probably the most basic workflow you can create, but it will teach you a lot about the Arkitekt ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," and its design. A few things to note here."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This is an Arkitekt ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," that we just exported from Arkitekt and then embeded in this website. "),(0,o.kt)("p",{parentName:"li"},"Arkitekt workflows are just visual representations of a processing workflow. They are stored in a JSON file, and can be imported and exported from Arkitekt.\nYou can also import them from this website, but we will get to that later.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"About the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nodes"),"."),(0,o.kt)("p",{parentName:"li"},"Nodes in Arkitekt Workflows are front and center. They are the building blocks of your workflow, and thusly the building blocks of your analysis. As you have seen\nin the previous section every ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," has inputs and outputs that you can connect to other nodes. This connection then defines the ",(0,o.kt)("strong",{parentName:"p"},"flow of data")," through your workflow. Importantly you will\nnotice the nodes termed ",(0,o.kt)("inlineCode",{parentName:"p"},"Input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Output"),". These are special nodes that are part of every workflow, and are the entry and exit points to your analysis.\nWhen you connect a node to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Input")," node, you are telling Arkitekt that your workflow will expect the input type of that node as a parameter when you run it.\nEqually you connect a node to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," node, you are telling Arkitekt that your workflow will return the output type of that node when you run it. "),(0,o.kt)("admonition",{parentName:"li",title:"Workflows are Just Nodes",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This abstraction of ",(0,o.kt)("inlineCode",{parentName:"p"},"Input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," nodes is core to the concept of a workflow in Arkitekt. Each workflow has exactly one ",(0,o.kt)("inlineCode",{parentName:"p"},"Input")," and one ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," node.\nAnd as our workflows are just nodes, these inputs and outputs will then be the inputs and outputs of the workflow node. This means that you can use workflows\nin workflows, and you can use workflows just as nodes on your data. But we will get to that later."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"About their colors:    "),(0,o.kt)("p",{parentName:"li"},"If you have connected the website and followed the tutorial until now, you might notice that the color of the nodes is yellow. This is because\nwe have not yet installed apps that provide the functionality for the nodes in this workflow. This illustrates another core feature of Arkitekt. The separation\nof the workflow design and the workflow execution. You can design and share a workflow, irrespective of the apps that provide the functionality for the nodes in the workflow.\nThis means that you can design a workflow, and potentially share it with others, even though they might run in on completely different apps. This makes workflows\na great way to share analysis pipelines, and to make them reproducible and ",(0,o.kt)("strong",{parentName:"p"},"universal"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"About the data as a stream:"),(0,o.kt)("p",{parentName:"li"},"Arkitekt workflows are adapted to process your data as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/real-time"},"stream"),", rather than as a batch. This means that each node will process your data as it comes in, and then\npass it on to the next node. Nodes will not wait for all data to be processed, but will process it autonomously as it comes in. This means that you can process data ridicously fast,\nand importantly you can process data that is still being generated. This is a core feature of Arkitekt, and we will get to it later. You will also\nnote that the edges are labeled with ",(0,o.kt)("inlineCode",{parentName:"p"},"@mikro/representatoin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@mikro/metric"),". These labels correspond to the data types that are passed between the nodes. The ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," symbol\nindicates that these are ",(0,o.kt)("a",{parentName:"p",href:"/docs/service/mikro"},"mikro")," data types and the ",(0,o.kt)("inlineCode",{parentName:"p"},"representation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"metric")," indicate the type of data.\nThe first two nodes will manipulate an image to an image (images are represented as ",(0,o.kt)("inlineCode",{parentName:"p"},"representation"),"), and the last node will return a ",(0,o.kt)("inlineCode",{parentName:"p"},"metric")," (metrics are scalar values attached\nto an image (here the fraction)). This ",(0,o.kt)("inlineCode",{parentName:"p"},"metric")," will also be the output of our node."))),(0,o.kt)("h2",{id:"enough-talking"},"Enough talking"),(0,o.kt)("p",null,"Lets start by creating this workflow. First we need to install the apps that provide the functionality for the nodes in this workflow.\nWe will need two new plugins for this workflow, so lets install them. One plugin will provide all of our functionality need to run this workflow in.\nThe other plugin will be used to actually run the workflow in the background. So lets install them."),(0,o.kt)("h2",{id:"new-plugins"},"New plugins"),(0,o.kt)("p",null,"First we need to install the apps that provide the functionality for the nodes in this workflow. "),(0,o.kt)(i.J,{fallback:(0,o.kt)("div",null,(0,o.kt)("p",null,"If appears you are not logged in. Its easier to login to install the plugins.\nBut don't you worry, we will guide you through it."),(0,o.kt)("p",null,"First lets install the Standard Libary plugin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jhnnsrs/stdlib"},(0,o.kt)("inlineCode",{parentName:"a"},"Stdlib")),' plugin, which provides a battery of basic\nimage processing nodes. You can install it by clicking on the "Plugin Store", and adding the "Stdlib" repository.\nUsers: ',(0,o.kt)("inlineCode",{parentName:"p"},"jhnnsrs"),", Repository: ",(0,o.kt)("inlineCode",{parentName:"p"},"stdlib"),", Branch: ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),". You then follow the ",(0,o.kt)("a",{parentName:"p",href:"./first_tool#installing-our-first-app"},"previously outlined")," steps to ",(0,o.kt)("inlineCode",{parentName:"p"},"Appify")," the latest stdlib version, and deploy it\nto your server. "),(0,o.kt)("p",null,"Then we will need the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jhnnsrs/reaktor"},(0,o.kt)("inlineCode",{parentName:"a"},"Reaktor"))," plugin, which will acts a ",(0,o.kt)("inlineCode",{parentName:"p"},"scheduler"),' for our workflow. Don\'t worry\nyou will understand what that means in a second. You can install it by clicking on the "Plugin Store", and adding the "Reaktor" repository.\nUsers: ',(0,o.kt)("inlineCode",{parentName:"p"},"jhnnsrs"),", Repository: ",(0,o.kt)("inlineCode",{parentName:"p"},"reaktor"),", Branch: ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),". Again followig the ",(0,o.kt)("a",{parentName:"p",href:"./first_tool#installing-our-first-app"},"previously outlined")," steps to ",(0,o.kt)("inlineCode",{parentName:"p"},"Appify"),"  the latest reaktor version, and deploy it"),(0,o.kt)("p",null,"If you now search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Crop Image")," in the search bar, you should find the two nodes we just installed.\nIf you don't, make sure you have the correct repository selected in the search bar, and your installation was successful.\nAlso if you refresh this page the nodes in the workflow should now appear green.")),mdxType:"HerreGuard"},(0,o.kt)("p",null,"You saw these button in the last section:"),(0,o.kt)("div",{className:"flex flex-row gap-2"},(0,o.kt)(r.I,{repo:"stdlib",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,o.kt)(r.I,{repo:"reaktor",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"})),(0,o.kt)("p",null,"Now follow ",(0,o.kt)("a",{parentName:"p",href:"./first_tool#installing-our-first-app"},"previously outlined")," steps to ",(0,o.kt)("inlineCode",{parentName:"p"},"Appify")," the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"stdlib")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"reaktor")," version, and deploy them to your server.\nYou should now be able to search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Otsu Threshold")," in the dashboard search bar, and find the two nodes we just installed.")),(0,o.kt)("h2",{id:"reserving-a-scheduler"},"Reserving a Scheduler"),(0,o.kt)("p",null,"Before we are creating a workflow that will be executed in the background, we will go ahead and decide on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler")," like so many things in Arkitekt\nis just a fancy ",(0,o.kt)("inlineCode",{parentName:"p"},"App"),", just like a ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," is just a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),". What this ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler")," App will do, is to actually ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," our workflow for us when we call it. It will take care\nof the execution of the workflow tasks, and will make sure to call the right node at the right time. Imaging it like a conductor of an orchestra. It will receive the inputs and\noutputs of all of the workflow nodes and pipe them together just like our workflow blueprint suggests."),(0,o.kt)("p",null,"In the Arkitekt ecosystem ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedulers")," play a vital role and we actually have installed the two major ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler")," types in our previous steps. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The first type are ",(0,o.kt)("inlineCode",{parentName:"p"},"fully distributed")," Schedulers: This type of Scheduler will call Arkitekt as a middleman for the handling of each workflow step. That means that when you assign a workflow to this type of Scheduler,\nit will call Arkitekt to run the first node, route the result to the node internal, and ask Arkitekt to run the second node on the result, and so on. This type of Scheduler is great where input and outputs span multiple apps\nand data is stored centrally (just like in our case). Its also a more fault-tolerant type of Scheduler, as it normally runs directly on the Arkitekt server and thus has direct access to the platform and won't\nsuffer from network errors. The downside is that it will be slower, as it will have to call Arkitekt for each step.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The second type are ",(0,o.kt)("inlineCode",{parentName:"p"},"partially distributed")," Schedulers."),(0,o.kt)("p",{parentName:"li"},"This one is a bit more complicated to explain: As mentioned ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedulers")," are just ",(0,o.kt)("inlineCode",{parentName:"p"},"Apps")," and indeed ",(0,o.kt)("strong",{parentName:"p"},"every")," app in Arkitekt can decide to become a Scheduler, if they implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," node.\nWouldn't it be great if they could just call their own nodes directly? Well they can.\n",(0,o.kt)("inlineCode",{parentName:"p"},"partially distributed")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"\xecn-app")," Schedulers are Schedulers that will call their own nodes directly, ",(0,o.kt)("em",{parentName:"p"},"without")," the need to call Arkitekt. This means that they can schedule tasks much faster, as they don't have to call Arkitekt for each step.\nThis type of Scheduler is great for workflows where nodes are contained mostly within a single app, and where performance is key. They are also immensly useful for workflow that work ",(0,o.kt)("inlineCode",{parentName:"p"},"completely")," local with ",(0,o.kt)("strong",{parentName:"p"},"in memory data")," in one app.\nYou can see an example of that in our experimental ",(0,o.kt)("a",{parentName:"p",href:"/docs/showcases/advanced"},"MikroJ in memory workflow"),". The downside is that they are more fault-prone, as they are not running on the Arkitekt server\nand if the Scheduling app goes down, the workflow will fail."))),(0,o.kt)("p",null,"The TLDR of which workflow scheduling to choose is: In 99% of cases you will want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"fully distributed")," Schedulers, as they are more fault tolerant to network errors."),(0,o.kt)("admonition",{title:"About Schedulers",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Schedulers are a core concept in Arkitekt. They are the conductor of your workflow, and they will make sure that your workflow is executed correctly. They are however also a quite advanced\nconcept, and you need to probably understand the Arkitekt design a bit better to fully understand their nuances. So don't worry if you don't understand them fully yet. We will try to give you some guidance\nin other parts of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/scheduler"},"documentation"),".")),(0,o.kt)("p",null,"But lets to just that and prepare a ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler")," for our workflow. For this we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reaktor")," app, which we installed in the previous step. ",(0,o.kt)("inlineCode",{parentName:"p"},"Reaktor")," is a distributed ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler")," app,\nthat will call Arkitekt for each step of the workflow. We will now go ahead and reserve the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," node of that app, which when called will associate that workflow with that app and\ncreate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," that is bound to that scheduler."),(0,o.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,o.kt)("source",{src:p})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard")," in the sidebar"),(0,o.kt)("p",{parentName:"li"},"You can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," node in the search bar. It is part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reaktor")," app, which we installed in the previous step. You can find it by searching for ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," in the search bar.\n")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reserve the Node by Drag and Drop ",(0,o.kt)("inlineCode",{parentName:"p"},"Reserve")),(0,o.kt)("p",{parentName:"li"},"In the upcoming Reserve Dialog this time do ",(0,o.kt)("strong",{parentName:"p"},"NOT"),' choose Reaktor as an App but rather directly reserve the "Reaktor app" by clicking. This will reserve the ',(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," node of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reaktor")," app.\nEvery workflow that you now give this node as an input, will be associated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reaktor")," app, and will be executed by it."))),(0,o.kt)("admonition",{title:"Workflow Deployment",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When you deploy a workflow, you are telling Arkitekt to associate that workflow with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler"),". This means that when ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow"),", you will call a functionality that dynamically creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),"\non the Arkitekt platform that is associated with that ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler"),". This newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," is then your new way of calling that workflow. You can then call that ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow Node")," just like any other ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," on your data.")),(0,o.kt)("admonition",{title:"About this process",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"While we believe the abstraction of workflows as nodes and their deployment again through nodes is a powerful one, we see how it can be a bit confusing at first. We will soon encapsulate this part of the process in a more user friendly way, but for now\nyou will have to go through this process. However if anything it should give you a better understanding of the Arkitekt design.")),(0,o.kt)("h2",{id:"creating-the-workflow"},"Creating the workflow"),(0,o.kt)("p",null,"Now that we have the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nodes")," we need and a potential ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler")," lets create the workflow. For this we can finally go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow"),' tab in the sidebar.\nHere we can see a list of all our workflows, and we can create a new one by clicking on the "Create Workflow" button.'),(0,o.kt)("p",null,"You will be presented by the Arkitekt Workflow Designer, which is a drag and drop interface to create workflows.\nYou can drag ",(0,o.kt)("inlineCode",{parentName:"p"},"Nodes")," from the nodes sidebar into the workflow, and connect them by dragging the output of one ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," to the input of another."),(0,o.kt)("p",null,"Lets see the design in progress."),(0,o.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,o.kt)("source",{src:d})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflows")," tab in the sidebar"),(0,o.kt)("p",{parentName:"li"},"The Worksflows tab is where you can create and manage your workflows, that you can create and run on your data."))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Workspace")," on the bottom right."),(0,o.kt)("p",{parentName:"li"},'Give it a Name like "Analysis Run" and click on "Create".\nA workspace is a place to create and manage versions of your workflow. Workflows are automatically versioned, that means\nif you change a workflow, you will create a new version of it. This is important for reproducibility and traceability of your analysis.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You are now presented with the Arkitekt Workflow Designer."),(0,o.kt)("p",{parentName:"li"},"The Arkitekt Workflow Designer is a drag and drop interface to create workflows. You can drag nodes from the nodes sidebar into the workflow,\nand connect them by dragging the output of one node to the input of another. Just search for your nodes in the search bar, and drag them into the workflow.\nMake sure to connect the ",(0,o.kt)("inlineCode",{parentName:"p"},"Input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," nodes to your workflow, as they are required for each workflow.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set necessary parameters on the sidebar."),(0,o.kt)("p",{parentName:"li"},"Some nodes require you to specify parameters. You can do that by clicking on the node, and then setting the parameters in the sidebar. For example the ",(0,o.kt)("inlineCode",{parentName:"p"},"Otsu Threshold")," node requires you to specify\nif you want to use a gaussian blur before thresholding.This is not necessary for our workflow, so we can leave it at the default value. However you can change the value that should be measure\nby the ",(0,o.kt)("inlineCode",{parentName:"p"},"Measure Fraction")," node. You can do that by clicking on the node, and then setting the parameters in the sidebar. We are interested in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Fraction"),' of the image that is below the threshold,\nso we can change it at to the 0 value. Also we can rename the Metric key to "Background Fraction", to be more descriptive.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the workflow"),(0,o.kt)("p",{parentName:"li"},'You can save the workflow by clicking on the "Save" button on the bottom right. This will save the workflow to your server, making it ready to be deployed.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy the workflow"),(0,o.kt)("p",{parentName:"li"},"This is now the final step. We now have a workflow, but we need to deploy it to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler"),". For this we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," node we reserved in the previous step.\nArkitekt will automatically prompt us with this Node when we click deploy on a workflow. So lets do that. Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," button on the bottom right. You will be prompted with a dialog\nwhere you can now select our ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," reservation. This will open an Assign dialog where you can give the Node a dedicated Name (this is the name of the node that will be created on the platform)\nand choose advanced paramters like the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream behaviour")," don't worry about that right now. You can leave it at the default value. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Assign")," and you are done. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should now see a Popup in the bottom right"),(0,o.kt)("p",{parentName:"li"},"If everything was successful you should now see a popup in the bottom right, that tells you that your workflow was successfully deployed. You can now close the workflow designer and go back to the dashboard."))),(0,o.kt)("admonition",{title:"About the Deployment ",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Once you pressed ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," you were prompted with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Assign Dialog"),". This Dialog is indeed the exact same type of dialog that we saw in the previous section, when we used the ",(0,o.kt)("inlineCode",{parentName:"p"},"Convert Omero")," node.\nAnd indeed the process is the same. When you deploy a workflow, you are just calling a functionality that dynamically creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," on the Arkitekt platform that is associated with that App (which is then its ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler"),"). We hope\nespecially Developers will appreciate that a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," can recursively create ",(0,o.kt)("inlineCode",{parentName:"p"},"Nodes"),". Indeed they can easily create powerful third party schedulers, that will feel native to the Arkitekt ecosystem.")),(0,o.kt)("h2",{id:"running-the-workflow"},"Running the workflow"),(0,o.kt)("p",null,"Well as a workflow is now just a Node, Running it on our data should seem quite straightforward. Lets see that in the next section..."))}f.isMDXComponent=!0},75557:(e,t,n)=>{"use strict";n.p}}]);