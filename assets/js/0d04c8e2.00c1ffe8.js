(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8950],{60699:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/node_explaination.075aecc.640.png 640w,"+n.p+"assets/ideal-img/node_explaination.f7550c2.1320.png 1320w,"+n.p+"assets/ideal-img/node_explaination.2d491dd.1980.png 1980w",images:[{path:n.p+"assets/ideal-img/node_explaination.075aecc.640.png",width:640,height:261},{path:n.p+"assets/ideal-img/node_explaination.f7550c2.1320.png",width:1320,height:539},{path:n.p+"assets/ideal-img/node_explaination.2d491dd.1980.png",width:1980,height:808}],src:n.p+"assets/ideal-img/node_explaination.075aecc.640.png",toString:function(){return n.p+"assets/ideal-img/node_explaination.075aecc.640.png"},placeholder:void 0,width:640,height:261},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVQImQGkAFv/ANvJK/XJuSn/xbYo+9C/Kv/PvymJ3csrxdHAKv/Htyj5zr4q/8e3KI8AcGgd/ayfJvvq1y74gngi/2pjG5lWUBzMm48k/+3aLveGfCP/aGAcngDdyyz/6tcu/+7bL//o1S//wrMnoBoZFdmAdiH/9+Mw/+bULv/DsyimANfGKpnRwCmrzr0pptTDKbOwoiNdZV4bfZuPIrHSwSmm1MMqsqyfImQJPF3a07r9PAAAAABJRU5ErkJggg=="}},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>u});var a=n(85914),i=n(69819),r=n(31230),o=n(67294);const l=r.ZP`
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
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",u=(0,i.Zh)((e=>{let{branch:t,repo:n,user:r}=e;const{client:u}=(0,i.AA)(),m=`${r}/${n}:${t}`,{data:c,refetch:p}=(0,a.a)(s,{client:u,variables:{tag:m},pollInterval:3e3});return o.createElement(o.Fragment,null,c?.githubRepo?o.createElement("button",{className:d+"bg-green-300"}," \u2705 ",m):o.createElement("button",{onClick:async()=>{try{const{data:e}=await u.mutate({mutation:l,variables:{branch:t,repo:n,user:r}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",m))}),o.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},30433:(e,t,n)=>{"use strict";n.d(t,{n:()=>x});var a=n(67294),i=n(72457),r=n(97724);function o(e){return null!=e}const l=a.createContext({});var s=n(20263);const d=e=>{const{}=(0,a.useContext)(l),{id:t,sourcePosition:n,targetPosition:r,sourceX:o,sourceY:d,targetX:u,targetY:m,style:c,markerStart:p,markerEnd:h,data:g}=e,[f,k,y]=(0,i.OW)({sourcePosition:n,targetPosition:r,sourceX:o,sourceY:d,targetX:u,targetY:m});return a.createElement(a.Fragment,null,a.createElement("path",{id:t,style:c,className:"react-flow__edge-path",d:f}),a.createElement(i.XQ,null,a.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${k}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},g?.stream.map(((e,t)=>a.createElement("span",{className:"text-xs",key:t},(e?.kind==s.XTL.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var u=n(54706);const m="border-slate-200 shadow-slate-200/50 dark:border-slate-200 dark:shadow-slate-200/10",c=e=>{let{children:t,id:n,color:i="white"}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:`px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 dark:text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${m}`},t))};var p=n(55770),h=n(31230);const g=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),f=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),k=e=>{const{data:t,error:n,loading:i}=(0,p.un)(h.ZP`
    { node(hash: "${e.data.hash}") {
      name
    }
    }
    `);return n?a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(g,null),a.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.data?.name," ")):a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(f,null),a.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," "))},y=(0,u.XC)((e=>{let{data:t,id:n}=e;const{isExpanded:r,toggleExpanded:o}=(0,u.Tm)();t.kind;return a.createElement(c,{id:n},t.instream.map(((e,t)=>a.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),t.outstream.map(((e,t)=>a.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event"}))),a.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full"},a.createElement(p.Z6,{fallback:a.createElement(a.Fragment,null," ",t?.name)},a.createElement(k,{data:t})),r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"}))))})),w=(0,u.XC)((e=>{let{data:{outstream:t,instream:n},id:r}=e;const[o,l]=(0,a.useState)(!1),[s,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(c,{color:"blue",id:r},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>a.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r}))))}));var b=n(63750);const $=(0,u.XC)((e=>{let{data:{constream:t},id:n}=e;const[i,r]=(0,a.useState)(!1),[o,l]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(c,{color:"green",id:n},!o&&a.createElement(a.Fragment,null,a.createElement("div",{className:"flex"},t?.map(((e,t)=>a.createElement(a.Fragment,null,a.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n},a.createElement("div",{className:"flex justify-between"},a.createElement("button",{type:"button",onClick:()=>alert("implement")},a.createElement(b.yvY,null))))))))),a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!o)},"Constants"," "),a.createElement("p",{className:"text-gray-700 text-base"}))))})),v={ArkitektNode:y,ArkitektFilterNode:y,LocalNode:y,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:r,implementation:o},id:l}=e;return a.createElement(a.Fragment,null,a.createElement("div",{style:{width:40},className:"custom-drag-handle"},o&&[s.J5d.Combinelatest,s.J5d.Withlatest].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[s.J5d.Gate].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-500)"}})),o&&[s.J5d.Filter].includes(o)&&a.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},a.createElement("h1",null,o)),o&&[s.J5d.Split].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[s.J5d.ToList,s.J5d.BufferComplete].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,o)),o&&[s.J5d.Chunk].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,o)),o&&[s.J5d.Omit].includes(o)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},o)),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r?.map(((e,t,n)=>a.createElement(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),n?.map(((e,t,n)=>a.createElement(i.HH,{key:t,type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,n)=>a.createElement(i.HH,{key:t,type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}})))))},ArgNode:w,ReturnNode:(0,u.XC)((e=>{let{data:{outstream:t,instream:n},id:r}=e;const[o,l]=(0,a.useState)(!1),[s,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(c,{color:"red",id:r},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),a.createElement("p",{className:"text-gray-700 text-base"},a.createElement(a.Fragment,null,n[0]?.map((e=>e?.kind)).join(" | "),a.createElement("br",null)),!s&&a.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0)},"Add Documentation")))),n.map(((e,t)=>a.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),KwargNode:$,GraphNode:()=>null},N={LabeledEdge:d,FancyEdge:d},_=e=>{let{flow:t}=e;const[n,s,d]=(0,i.Rr)((e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...i}=e;return{type:a,id:t,position:n,data:{__typename:a,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(o)||[])(t.graph?.nodes)),[u,m,c]=(0,i.ll)((e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,__typename:o,...l}=e;return{id:t,type:o,source:n,sourceHandle:a,target:i,targetHandle:r,data:{__typename:o,...l}}}})).filter(o)||[])(t.graph?.edges));return a.createElement(l.Provider,{value:{flow:t}},a.createElement(r.k,{nodes:n,edges:u,onNodesChange:d,onEdgesChange:c,elementsSelectable:!0,nodeTypes:v,edgeTypes:N,fitView:!0,attributionPosition:"bottom-right"}))};var E=n(30210),P=n(39903);const C=e=>{const{user:t}=(0,E.gX)(),{fakts:n}=(0,P.sT)();return a.createElement("div",{className:"relative "+e.className},e.children,!t||!n&&a.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")},x=e=>a.createElement("div",{className:"border border-1 rounded border-gray-800"},a.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},a.createElement(_,{flow:e.flow})),a.createElement(C,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},a.createElement("button",{onClick:()=>alert("implement"),disabled:e.blockImport,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800"},"Import into Arkitekt")))},20263:(e,t,n)=>{"use strict";n.d(t,{J5d:()=>i,XTL:()=>r});var a=n(31230);let i=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),r=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const o=a.Ps`
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
    ${o}`,a.Ps`
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
    ${o}
${l}
${s}`,u=a.Ps`
    fragment Mention on MentionDescendent {
  user {
    sub
  }
  ...Node
}
    ${d}`,m=a.Ps`
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
    ${u}
${m}
${o}`,p=a.Ps`
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
    ${c}`,h=a.Ps`
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
${p}`,g=a.Ps`
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
${p}`,f=a.Ps`
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
${p}`,k=a.Ps`
    fragment ConditionEvent on ConditionEvent {
  id
  source
  createdAt
  value
  state
}
    `,y=a.Ps`
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
    ${k}`,w=a.Ps`
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
    `,$=a.Ps`
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
${$}`,N=a.Ps`
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
${$}
${v}`,_=a.Ps`
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
${$}
${N}`,E=a.Ps`
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
    ${_}`,P=a.Ps`
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
    ${E}
${P}`,x=a.Ps`
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
${P}`,T=a.Ps`
    fragment ReactiveNode on ReactiveNode {
  ...FlowNodeCommons
  __typename
  implementation
  defaults
}
    ${E}`,A=a.Ps`
    fragment ArgNode on ArgNode {
  ...FlowNodeCommons
  __typename
}
    ${E}`,S=a.Ps`
    fragment KwargNode on KwargNode {
  ...FlowNodeCommons
  __typename
}
    ${E}`,L=a.Ps`
    fragment ReturnNode on ReturnNode {
  ...FlowNodeCommons
  __typename
}
    ${E}`,I=a.Ps`
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
${P}`,R=a.Ps`
    fragment GraphNode on GraphNode {
  ...FlowNodeCommons
  __typename
}
    ${E}`,D=a.Ps`
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
${T}
${A}
${S}
${L}
${I}
${R}`,W=a.Ps`
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
    ${W}`,B=a.Ps`
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
${O}`,G=a.Ps`
    fragment Global on Global {
  toKeys
  port {
    ...Port
  }
}
    ${_}`,H=a.Ps`
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
    ${D}
${q}
${G}
${_}`,M=a.Ps`
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
    ${k}
${H}`,j=a.Ps`
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
    `,z=a.Ps`
    fragment ListFlow on Flow {
  id
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    `,Y=a.Ps`
    fragment ListWorkspace on Workspace {
  id
  name
  latestFlow {
    ...ListFlow
  }
}
    ${z}`,J=a.Ps`
    fragment Workspace on Workspace {
  id
  name
  latestFlow {
    ...Flow
  }
}
    ${H}`,X=(a.Ps`
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
    ${_}`),K=a.Ps`
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
${H}`,ee=a.Ps`
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
${H}`,te=a.Ps`
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
    ${g}`;a.Ps`
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
    ${w}`;a.Ps`
    query DetailConditionSnapshot($id: ID!) {
  conditionSnapshot(id: $id) {
    ...ConditionSnapshot
  }
}
    ${y}`;a.Ps`
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
    ${k}`;a.Ps`
    query Flow($id: ID) {
  flow(id: $id) {
    ...Flow
  }
}
    ${H}`;a.Ps`
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
    ${Y}`;a.Ps`
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
    ${Y}`;a.Ps`
    query SearchWorkspaces($name: String) {
  workspaces(name: $name) {
    ...ListWorkspace
  }
}
    ${Y}`;a.Ps`
    query SearchFlows($name: String, $workspace: ID) {
  flows(name: $name, workspace: $workspace) {
    ...ListFlow
  }
}
    ${z}`;a.Ps`
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
    ${Y}`;a.Ps`
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
    ${k}`;a.Ps`
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
    ${K}`},97724:(e,t,n)=>{"use strict";n.d(t,{k:()=>l});var a=n(87462),i=n(67294),r=n(72457);n(86180);const o=e=>console.log("flow loaded:",e),l=e=>{let{edgeTypes:t,nodeTypes:n,nodes:l,edges:s,children:d,...u}=e;return i.createElement(r.tV,null,i.createElement(r.x$,(0,a.Z)({nodes:l,edges:s,onInit:o,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},u),d))}},54706:(e,t,n)=>{"use strict";n.d(t,{Tm:()=>o,XC:()=>s});var a=n(67294),i=n(1706);const r=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),o=()=>(0,a.useContext)(r),l=e=>{let{id:t,children:n,expandedHeight:o=200,expandedWidth:l=400,collapsedWidth:s=170,collapsedHeight:d=70}=e;const[u,m]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:d});return a.createElement(i.Resizable,{key:t,height:u.height,width:u.width,onResize:(e,t)=>{let{size:n,handle:a}=t;m((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},a.createElement(r.Provider,{value:{...u,toggleExpanded:()=>{m((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:l,height:e.isExpanded?d:o})))}}},a.createElement("div",{style:{width:u.width+"px",height:u.height+"px"},className:"flex flex-col"},n)))},s=e=>t=>a.createElement(l,{id:t.id},a.createElement(e,t))},35148:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var a=n(87462),i=(n(67294),n(3905)),r=(n(15944),n(75557),n(60699),n(30210)),o=n(71698),l=n(30433);const s=JSON.parse('{"__typename":"Flow","id":"4","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":-84,"y":102},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-a3a43b05-31b7-4e19-a2d5-8dc695df5a3f","position":{"__typename":"Position","x":727,"y":50},"typename":"ArkitektNode","parentNode":null,"hash":"c428c5d61f9147bd7a662b22a0dcf620567199c9ca5a3bfae674a696068d0f46","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to be thresholded","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The thresholded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"gaussian_blur","label":"gaussian_blur","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to apply a gaussian blur before thresholding (kernel_size=5)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Otsu Thresholding","description":"Binarizes the image based on a threshold, using Otsu\'s method\\nwith option to guassian blur the image before, images are normalized\\nfor each x,y slice before thresholding.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-fce17644-45b1-4534-8e49-bf61e53c606d","position":{"__typename":"Position","x":316,"y":56},"typename":"ArkitektNode","parentNode":null,"hash":"eb469fdae3318571be7eead640ef0ef0bcc3bcb7949d23fd63e77b871255b357","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-861ff8a3-da54-4e17-b8d0-361b8c8d96ef","position":{"__typename":"Position","x":1171,"y":62},"typename":"ArkitektNode","parentNode":null,"hash":"c9322c23e8bd87a95a6c329d42caad5b3cb4f162d7b428ebfa937068aab97eb8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"value","label":null,"identifier":null,"scope":"GLOBAL","kind":"INT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Fraction","description":"Measures the appearance of this value in the image (0-1)","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-fce17644-45b1-4534-8e49-bf61e53c606darg_0","source":"1","sourceHandle":"return_0","target":"arkid-fce17644-45b1-4534-8e49-bf61e53c606d","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-fce17644-45b1-4534-8e49-bf61e53c606dreturn_0-arkid-a3a43b05-31b7-4e19-a2d5-8dc695df5a3farg_0","source":"arkid-fce17644-45b1-4534-8e49-bf61e53c606d","sourceHandle":"return_0","target":"arkid-a3a43b05-31b7-4e19-a2d5-8dc695df5a3f","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-a3a43b05-31b7-4e19-a2d5-8dc695df5a3freturn_0-arkid-861ff8a3-da54-4e17-b8d0-361b8c8d96efarg_0","source":"arkid-a3a43b05-31b7-4e19-a2d5-8dc695df5a3f","sourceHandle":"return_0","target":"arkid-861ff8a3-da54-4e17-b8d0-361b8c8d96ef","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-861ff8a3-da54-4e17-b8d0-361b8c8d96efreturn_0-2arg_0","source":"arkid-861ff8a3-da54-4e17-b8d0-361b8c8d96ef","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[],"args":[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"trippy-carmine-capuchin","screenshot":null,"createdAt":"2023-10-25T16:23:21.647792+00:00","workspace":{"__typename":"Workspace","id":"1"}}'),d=n.p+"assets/medias/create_workflow-4fea74d9bb7da6cade25a7556d176f62.webm",u={title:"Our first workflow",sidebar_label:"6. Our first workflow",sidebar_position:6},m=void 0,c={unversionedId:"introduction/first_steps/first_workflow",id:"introduction/first_steps/first_workflow",title:"Our first workflow",description:"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now lets put it all together and create our first workflow,",source:"@site/docs/introduction/first_steps/first_workflow.mdx",sourceDirName:"introduction/first_steps",slug:"/introduction/first_steps/first_workflow",permalink:"/docs/introduction/first_steps/first_workflow",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/first_steps/first_workflow.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Our first workflow",sidebar_label:"6. Our first workflow",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"6. A brief interlude",permalink:"/docs/introduction/first_steps/brief_interlude"},next:{title:"Services",permalink:"/docs/category/services"}},p={},h=[{value:"Before we start",id:"before-we-start",level:2},{value:"Enough talking, lets create our first workflow",id:"enough-talking-lets-create-our-first-workflow",level:2},{value:"New plugins",id:"new-plugins",level:2},{value:"Creating the workflow",id:"creating-the-workflow",level:2}],g={toc:h},f="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now lets put it all together and create our first workflow,\nspanning the most basic nodes."),(0,i.kt)("p",null,"Here we will use our uploaded image, max project it,  threshold it (yeah analysis), and then measure the fraction of the image that is above the threshold (\nyeah quantification). "),(0,i.kt)("h2",{id:"before-we-start"},"Before we start"),(0,i.kt)("p",null,"You are familiar with this by now.. There are a few things we need to do before we can start.\nFirst what do we mean with ",(0,i.kt)("inlineCode",{parentName:"p"},"Workflow"),"? "),(0,i.kt)("p",null,"A workflow in the arkitekt sense is a processing pipeline, that uses a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"Nodes")," to process your data in a stream. Nodes just like\nour previously mentioned ",(0,i.kt)("inlineCode",{parentName:"p"},"Show on Napari")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Convert File")," nodes. You can either stitch them together in the GUI or you can import them from a file or\neven this website. We will do the first, for this one. To familiarize you a bit more with the UI . "),(0,i.kt)("p",null,"Lets look first at the workflow we would like to create, and then we will go through the steps to create it."),(0,i.kt)(l.n,{flow:s,blockImport:!0,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," This is the workflow we would like to create. For now we disabled the import feature.. You should really try to create it on your own ")),(0,i.kt)("p",null,"This is probably the most basic workflow you can create, but it will teach you a lot about the Arkitekt workflow and its design. A few things to note here."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This is an ",(0,i.kt)("strong",{parentName:"p"},"Arkitekt workflow")," that we just exported from Arkitekt and then provided to this website. "),(0,i.kt)("p",{parentName:"li"},"Arkitekt workflows are just visual representations of a workflow. They are stored in a JSON file, and can be imported and exported from Arkitekt.\nYou can also import them from this website, but we will get to that later.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"About the ",(0,i.kt)("inlineCode",{parentName:"p"},"Nodes"),"."),(0,i.kt)("p",{parentName:"li"},"Nodes in Arkitekt Workflows are front and center. They are the building blocks of your workflow, and thusly the building blocks of your analysis. Each node\nhas inputs and outputs that you can connect to other nodes. This connection then defines the flow of data through your workflow. Importantly you will\nnotice the node termed ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Output"),". These are special nodes that are part of each workflow. They are the entry and exit points, to your analysis.\nWhen you connect a node to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," node, you are telling Arkitekt that your workflow will expect the input type of that node as a parameter when you run it.\nEqually you connect a node to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Output")," node, you are telling Arkitekt that your workflow will return the output type of that node when you run it. "),(0,i.kt)("admonition",{parentName:"li",title:"Workflows are Just Nodes",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This abstraction of Input and Output nodes is core to the concept of a workflow in Arkitekt. Each workflow has exactly one ",(0,i.kt)("inlineCode",{parentName:"p"},"Input")," and one ",(0,i.kt)("inlineCode",{parentName:"p"},"Output")," node.\nAnd as our workflows are just nodes, these inputs and outputs will then be the inputs and outputs of the workflow node. This means that you can use workflows\nin workflows, and you can use workflows just as nodes on your data. But we will get to that later."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"About their colors:    "),(0,i.kt)("p",{parentName:"li"},"If you have connected the website and followed the tutorial just until now, you might notice that the color of the ",(0,i.kt)("inlineCode",{parentName:"p"},"All Nodes")," node is yellow. This is because\nwe have not yet installed apps that provide the functionality for the nodes in this workflow. This illustrates another core feature of Arkitekt. The separation\nof the workflow design and the workflow execution. You can design and share a workflow, irrespective of the apps that provide the functionality for the nodes in the workflow.\nThis means that you can design a workflow, and potentially share it with others, even though they might run in on completely different apps. This makes workflows\na great way to share analysis pipelines, and to make them reproducible and ",(0,i.kt)("strong",{parentName:"p"},"universal"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"About the data as a stream:"),(0,i.kt)("p",{parentName:"li"},"Arkitekt workflows are adapted to process your data as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/design/real-time"},"stream"),", rather than as a batch. This means that each node will process your data as it comes in, and then\npass it on to the next node. Nodes will not wait for all data to be processed, but will process it as it comes in. This means that you can process data as fast as\npossible, and importantly you can process data that is still being generated. This is a core feature of Arkitekt, and we will get to it later"))),(0,i.kt)("h2",{id:"enough-talking-lets-create-our-first-workflow"},"Enough talking, lets create our first workflow"),(0,i.kt)("p",null,'Lets start by creating a new workflow. You can do this by clicking on the "Workflow" tab in the sidebar, and then clicking on the "Create Workflow" button.'),(0,i.kt)("h2",{id:"new-plugins"},"New plugins"),(0,i.kt)(r.J,{fallback:(0,i.kt)("div",null,(0,i.kt)("p",null,"But don't you worry, we will guide you through it."),(0,i.kt)("p",null,"We will need two new plugins for this workflow, so lets install them. One plugin will provide the functionality to actually crop the image and to max project it.\nThe other plugin will be used to actually run the workflow in the background. So lets install them."),(0,i.kt)("p",null,"First lets install the Standard Libary plugin ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jhnnsrs/stdlib"},(0,i.kt)("inlineCode",{parentName:"a"},"Stdlib")),' plugin, which provides a battery of basic\nimage processing nodes. You can install it by clicking on the "Plugin Store", and adding the "Stdlib" repository.\nUsers: ',(0,i.kt)("inlineCode",{parentName:"p"},"jhnnsrs"),", Repository: ",(0,i.kt)("inlineCode",{parentName:"p"},"stdlib"),", Branch: ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),". You then follow the ",(0,i.kt)("a",{parentName:"p",href:"./first_tool#installing-our-first-app"},"previously outlined")," steps to Appify the latest stdlib version, and deploy it\nto your server. "),(0,i.kt)("p",null,"Then we will need the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jhnnsrs/reaktor"},(0,i.kt)("inlineCode",{parentName:"a"},"Reaktor"))," plugin, which will acts a ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduler"),' for our workflow. Don\'t worry\nyou will understand what that means in a second. You can install it by clicking on the "Plugin Store", and adding the "Reaktor" repository.\nUsers: ',(0,i.kt)("inlineCode",{parentName:"p"},"jhnnsrs"),", Repository: ",(0,i.kt)("inlineCode",{parentName:"p"},"reaktor"),", Branch: ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),". Again followig the ",(0,i.kt)("a",{parentName:"p",href:"./first_tool#installing-our-first-app"},"previously outlined")," steps to Appify the latest reaktor version, and deploy it"),(0,i.kt)("p",null,"If you now search for ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy Flow")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Crop Image")," in the search bar, you should find the two nodes we just installed.\nIf you don't, make sure you have the correct repository selected in the search bar, and your installation was successful.")),mdxType:"HerreGuard"},(0,i.kt)("div",{className:"flex flex-row gap-2"},(0,i.kt)(o.I,{repo:"stdlib",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,i.kt)(o.I,{repo:"reaktor",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}))),(0,i.kt)("h2",{id:"creating-the-workflow"},"Creating the workflow"),(0,i.kt)("p",null,'Now that we have the nodes we need, lets create the workflow. For this we can finally go to the "Workflow" tab in the sidebar.\nHere we can see a list of all our workflows, and we can create a new one by clicking on the "Create Workflow" button.'),(0,i.kt)("p",null,"You will be presented by the Arkitekt Workflow Designer, which is a drag and drop interface to create workflows.\nYou can drag nodes from the nodes side bar into the workflow, and connect them by dragging the output of one node to the input of another."),(0,i.kt)("p",null,"Lets see the design in progress."),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:d})))}k.isMDXComponent=!0},75557:(e,t,n)=>{"use strict";n.p}}]);