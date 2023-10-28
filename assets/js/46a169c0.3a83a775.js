(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8248],{60253:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/smart.c0844d9.640.png 640w,"+n.p+"assets/ideal-img/smart.49c228a.1320.png 1320w,"+n.p+"assets/ideal-img/smart.29fe11f.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/smart.c0844d9.640.png",width:640,height:736},{path:n.p+"assets/ideal-img/smart.49c228a.1320.png",width:1320,height:1517},{path:n.p+"assets/ideal-img/smart.29fe11f.2000.png",width:2e3,height:2299}],src:n.p+"assets/ideal-img/smart.c0844d9.640.png",toString:function(){return n.p+"assets/ideal-img/smart.c0844d9.640.png"},placeholder:void 0,width:640,height:736},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAInAAACJwG+ElQIAAAByUlEQVQYlWOwXjGV4djJv4wMJm2M7suPM177/59h2rLPjAwMuxkYGE4yTOj6zliS85mBYfnRuwxLzj1hOH/1itfRkwd5Nn99zjBvxVeGjoYHCrMmPzOeO+sPw6QJv5kYGqvmMiy6/tp67a1n09d++lMy/+d3ubVH/8pv3fI/c/OW/xX79v3XunLzPwMYRFnWrspOmfVu3Zf/j+bfu9M6d/vz5vrYdfebk1Z8mVxzobUufBUDgwQDF0PHnMPTq7u23Cro2HBy4tmrnTN3v2yOUKo/nqSRdb8/d2tppX0FA8P///8ZDvz/P3H2+WcXogJ79/ccv7Bk6r6Xk4PEyne5c4RfbUjYUpigWcHAkOM7mWHW4fsdHQuOHimqWrl1+pXrrbP2Pa+tClq7qcBj9on+ygtZVaGrIW4MUM1ryI6btn3Ln/9rln1447Nwy6vg4oA5a+uiJu/uK9ybXOLcBlEYqlNclZs0c/2mH/+XLHj6xHXRlpe+Vamrltamzd00u+t0fH/JYojCvKRZnnUdWzLXf/6ftPD+PfOZG++ZJ+q3J8XptGTXxm2zjFSpgXjm////jP///2da+/Y/06xjJxjaLx4FiTFBMUiOAQBX/e+wg0vZgAAAAABJRU5ErkJggg=="}},33850:(e,t,n)=>{"use strict";n(61872),n(97120),n(67294),n(30210)},2085:(e,t,n)=>{"use strict";n.d(t,{n:()=>z});var a=n(67294),i=n(40196),l=n(97724);function r(e){return null!=e}const s=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,o=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function d(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(s,"").replace(o,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const u=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...i}=e;return{type:a,id:t,position:n,data:{__typename:a,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(r)||[],c=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:l,__typename:r,...s}=e;return{id:t,type:r,source:n,sourceHandle:a,target:i,targetHandle:l,data:{__typename:r,...s}}}})).filter(r)||[],m=a.createContext({});var p=n(20263);const g=e=>{const{}=(0,a.useContext)(m),{id:t,sourcePosition:n,targetPosition:l,sourceX:r,sourceY:s,targetX:o,targetY:d,style:u,markerStart:c,markerEnd:g,data:h}=e,[f,y,k]=(0,i.OW)({sourcePosition:n,targetPosition:l,sourceX:r,sourceY:s,targetX:o,targetY:d});return a.createElement(a.Fragment,null,a.createElement("path",{id:t,style:u,className:"react-flow__edge-path",d:f}),a.createElement(i.XQ,null,a.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${y}px,${k}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},h?.stream.map(((e,t)=>a.createElement("span",{className:"text-xs",key:t},(e?.kind==p.XTL.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var h=n(54706);const f="border-slate-200 shadow-slate-200/50 dark:border-slate-200 dark:shadow-slate-200/10",y=e=>{let{children:t,id:n,color:i="white"}=e;const[l,r]=a.useState(!1);return a.createElement(a.Fragment,null,a.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${f}`},t))};var k=n(55770),b=n(31230),_=n(83117),v=n(51550),$=n(90512),w=n(57851);function L(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,w.m)((0,$.W)(t))}const P=v.fC,E=v.xz,T=a.forwardRef(((e,t)=>{let{className:n,align:i="center",sideOffset:l=4,...r}=e;return a.createElement(v.h_,null,a.createElement(v.VY,(0,_.Z)({ref:t,align:i,sideOffset:l,className:L("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n)},r)))}));T.displayName=v.VY.displayName;const S=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),N=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),A=e=>{const{data:t,error:n,loading:i}=(0,k.un)(b.ZP`
    { node(hash: "${e.data.hash}") {
      name
    }
    }
    `);return a.createElement("div",{className:"flex flex-row gap-2 h-full"}," ",n?a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(S,null),a.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.data?.name," ")):a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(N,null),a.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")),a.createElement(P,null,a.createElement(E,{className:"bg-back-700 rounded rounded-md cursor-pointer"},"?"),a.createElement(T,{className:"text-xs bg-back-800 my-auto"}," ",e.data?.description)))},W=(0,h.XC)((e=>{let{data:t,id:n}=e;const{isExpanded:l,toggleExpanded:r}=(0,h.Tm)();t.kind;return a.createElement(y,{id:n},t.instream.map(((e,t)=>a.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),t.outstream.map(((e,t)=>a.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event"}))),a.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full "},a.createElement(k.Z6,{fallback:a.createElement(a.Fragment,null," ",t?.name)},a.createElement(A,{data:t})),l&&a.createElement(a.Fragment,null,a.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"}))))})),R=(0,h.XC)((e=>{let{data:{outstream:t,instream:n},id:l}=e;const[r,s]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(y,{color:"blue",id:l},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!o)},"Inputs"," "))),t.map(((e,t)=>a.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+l}))))}));var C=n(63750);const x=(0,h.XC)((e=>{let{data:{constream:t},id:n}=e;const[i,l]=(0,a.useState)(!1),[r,s]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(y,{color:"green",id:n},!r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"flex"},t?.map(((e,t)=>a.createElement(a.Fragment,null,a.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n},a.createElement("div",{className:"flex justify-between"},a.createElement("button",{type:"button",onClick:()=>alert("implement")},a.createElement(C.yvY,null))))))))),a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>s(!r)},"Constants"," "),a.createElement("p",{className:"text-gray-700 text-base"}))))})),I={ArkitektNode:W,ArkitektFilterNode:W,LocalNode:W,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:l,implementation:r},id:s}=e;return a.createElement(a.Fragment,null,a.createElement("div",{style:{width:40},className:"custom-drag-handle"},r&&[p.J5d.Combinelatest,p.J5d.Withlatest].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r&&[p.J5d.Gate].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-500)"}})),r&&[p.J5d.Filter].includes(r)&&a.createElement("div",{className:"px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10"},a.createElement("h1",null,r)),r&&[p.J5d.Split].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r&&[p.J5d.ToList,p.J5d.BufferComplete].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,r)),r&&[p.J5d.Chunk].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,r)),r&&[p.J5d.Omit].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},r)),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l?.map(((e,t,n)=>a.createElement(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),n?.map(((e,t,n)=>a.createElement(i.HH,{key:t,type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,n)=>a.createElement(i.HH,{key:t,type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}})))))},ArgNode:R,ReturnNode:(0,h.XC)((e=>{let{data:{outstream:t,instream:n},id:l}=e;const[r,s]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(y,{color:"red",id:l},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!o)},"Outputs"),a.createElement("p",{className:"text-gray-700 text-base"},a.createElement(a.Fragment,null,n[0]?.map((e=>e?.kind)).join(" | "),a.createElement("br",null)),!o&&a.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>s(!0)},"Add Documentation")))),n.map(((e,t)=>a.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),KwargNode:x,GraphNode:()=>null},D={LabeledEdge:g,FancyEdge:g},O=e=>{let{flow:t}=e;const[n,r,s]=(0,i.Rr)(u(t.graph?.nodes)),[o,d,p]=(0,i.ll)(c(t.graph?.edges));return a.createElement(m.Provider,{value:{flow:t}},a.createElement(l.k,{nodes:n,edges:o,onNodesChange:s,onEdgesChange:p,elementsSelectable:!0,nodeTypes:I,edgeTypes:D,fitView:!0,attributionPosition:"bottom-right"}))};var F=n(30210),B=n(39903);const U=e=>{const{user:t}=(0,F.gX)(),{fakts:n}=(0,B.sT)();return a.createElement("div",{className:"relative "+e.className},e.children,!t||!n&&a.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var G=n(68947),q=n(50319);const H=b.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
}
`,M=e=>{let{flow:t,blockImport:n}=e;const{client:i}=(0,G.dB)(),[l,s]=(0,q.D)(H,{client:i}),o=async()=>{try{const n=(e=u(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:a,parentNode:i,data:{outstream:l,constream:s,instream:o,...u}}=e;return{outstream:l?.map((e=>e?e.filter(r).map(d):[]))||[[]],constream:s?.map((e=>e?e.filter(r).map(d):[]))||[[]],instream:o?.map((e=>e?e.filter(r).map(d):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:a||"Fake type",name:u.name,description:u.description,hash:u.hash,implementation:u.implementation,kind:u.kind,defaults:u.defaults,mapStrategy:u.mapStrategy,allowLocal:u.allowLocal,maxRetries:u.maxRetries,retryDelay:u.retryDelay,binds:u.binds,parentNode:i,interface:u.interface}}})).filter(r)||[]||[]),a=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:l,type:s,data:o}=e;return{id:t,typename:s||"Fake type",source:n,sourceHandle:a||"returns",target:i,targetHandle:l||"args",stream:o?.stream.filter(r).map(d)||[]}}})).filter(r)||[])(c(t.graph.edges));let i={nodes:n,edges:a,globals:t.graph.globals.filter(r).map(d),args:t.graph.args.filter(r).map(d),returns:t.graph.returns.filter(r).map(d)};await l({variables:{name:t.name,graph:i}})}catch(n){alert(n.message)}var e};return a.createElement("button",{onClick:()=>o(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt")},z=e=>a.createElement("div",{className:"border border-1 rounded border-gray-800"},a.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},a.createElement(O,{flow:e.flow})),a.createElement(U,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},a.createElement(G.Ot,null,a.createElement(M,{flow:e.flow,blockImport:e.blockImport}))))},33346:(e,t,n)=>{"use strict";n.d(t,{L:()=>i});var a=n(67294);const i=e=>a.createElement(a.Fragment,null,"CONNECTED")},20263:(e,t,n)=>{"use strict";n.d(t,{J5d:()=>i,XTL:()=>l});var a=n(31230);let i=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),l=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const r=a.Ps`
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
    ${r}`,a.Ps`
    fragment LevelDownParagraph on ParagraphDescendent {
  size
  untypedChildren
}
    `),o=a.Ps`
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
${s}
${o}`,u=a.Ps`
    fragment Mention on MentionDescendent {
  user {
    sub
  }
  ...Node
}
    ${d}`,c=a.Ps`
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
    ${u}
${c}
${r}`,p=a.Ps`
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
    ${m}`,g=a.Ps`
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
${p}`,h=a.Ps`
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
    ${m}
${p}`,y=a.Ps`
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
    ${y}`,b=a.Ps`
    fragment ListConditionSnapshot on ConditionSnapshot {
  id
  condition {
    id
    provision
  }
}
    `,_=a.Ps`
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
    `,v=a.Ps`
    fragment ReturnWidget on ReturnWidget {
  kind
  query
  choices {
    value
    label
  }
}
    `,$=a.Ps`
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
    ${_}
${v}`,w=a.Ps`
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
    ${_}
${v}
${$}`,L=a.Ps`
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
    ${_}
${v}
${w}`,P=a.Ps`
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
    ${L}`,E=a.Ps`
    fragment RetriableNode on RetriableNode {
  maxRetries
  retryDelay
}
    `,T=a.Ps`
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
${E}`,S=a.Ps`
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
${E}`,N=a.Ps`
    fragment ReactiveNode on ReactiveNode {
  ...FlowNodeCommons
  __typename
  implementation
  defaults
}
    ${P}`,A=a.Ps`
    fragment ArgNode on ArgNode {
  ...FlowNodeCommons
  __typename
}
    ${P}`,W=a.Ps`
    fragment KwargNode on KwargNode {
  ...FlowNodeCommons
  __typename
}
    ${P}`,R=a.Ps`
    fragment ReturnNode on ReturnNode {
  ...FlowNodeCommons
  __typename
}
    ${P}`,C=a.Ps`
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
${E}`,x=a.Ps`
    fragment GraphNode on GraphNode {
  ...FlowNodeCommons
  __typename
}
    ${P}`,I=a.Ps`
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
    ${T}
${S}
${N}
${A}
${W}
${R}
${C}
${x}`,D=a.Ps`
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
    `,O=a.Ps`
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
    ${D}`,F=a.Ps`
    fragment FlowEdgeCommons on FlowEdgeCommons {
  stream {
    ...StreamItem
  }
}
    ${O}`,B=a.Ps`
    fragment LabeledEdge on LabeledEdge {
  ...FlowEdgeCommons
  __typename
}
    ${F}`,U=a.Ps`
    fragment FancyEdge on FancyEdge {
  ...FlowEdgeCommons
  __typename
}
    ${F}`,G=a.Ps`
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
    ${B}
${U}`,q=a.Ps`
    fragment Global on Global {
  toKeys
  port {
    ...Port
  }
}
    ${L}`,H=a.Ps`
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
${G}
${q}
${L}`,M=a.Ps`
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
${H}`,z=a.Ps`
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
    `,X=a.Ps`
    fragment ListFlow on Flow {
  id
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    `,j=a.Ps`
    fragment ListWorkspace on Workspace {
  id
  name
  latestFlow {
    ...ListFlow
  }
}
    ${X}`,J=a.Ps`
    fragment Workspace on Workspace {
  id
  name
  latestFlow {
    ...Flow
  }
}
    ${H}`,Y=(a.Ps`
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
    ${L}`),K=a.Ps`
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
    ${b}`;a.Ps`
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
    ${M}`;a.Ps`
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
    ${j}`;a.Ps`
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
    ${j}`;a.Ps`
    query SearchWorkspaces($name: String) {
  workspaces(name: $name) {
    ...ListWorkspace
  }
}
    ${j}`;a.Ps`
    query SearchFlows($name: String, $workspace: ID) {
  flows(name: $name, workspace: $workspace) {
    ...ListFlow
  }
}
    ${X}`;a.Ps`
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
    ${j}`;a.Ps`
    query ReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${Y}`;a.Ps`
    query DetailReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${Y}`;a.Ps`
    query ReactiveTemplates($search: String) {
  reactivetemplates(name: $search) {
    ...ReactiveTemplate
  }
}
    ${Y}`;a.Ps`
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
    ${K}`},97724:(e,t,n)=>{"use strict";n.d(t,{k:()=>s});var a=n(83117),i=n(67294),l=n(40196);n(86180);const r=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:t,nodeTypes:n,nodes:s,edges:o,children:d,...u}=e;return i.createElement(l.tV,null,i.createElement(l.x$,(0,a.Z)({nodes:s,edges:o,onInit:r,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},u),d))}},54706:(e,t,n)=>{"use strict";n.d(t,{Tm:()=>r,XC:()=>o});var a=n(67294),i=n(1706);const l=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),r=()=>(0,a.useContext)(l),s=e=>{let{id:t,children:n,expandedHeight:r=200,expandedWidth:s=400,collapsedWidth:o=170,collapsedHeight:d=70}=e;const[u,c]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:o,height:d});return a.createElement(i.Resizable,{key:t,height:u.height,width:u.width,onResize:(e,t)=>{let{size:n,handle:a}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},a.createElement(l.Provider,{value:{...u,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?o:s,height:e.isExpanded?d:r})))}}},a.createElement("div",{style:{width:u.width+"px",height:u.height+"px"},className:"flex flex-col"},n)))},o=e=>t=>a.createElement(s,{id:t.id},a.createElement(e,t))},19498:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var a=n(83117),i=(n(67294),n(3905)),l=n(15944),r=n(60253),s=n.n(r),o=(n(33346),n(2085));n(33850);const d=JSON.parse('{"__typename":"Flow","id":"212","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"position","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1891,"y":40},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-e7290f0a-91cc-445a-8322-75e3472e6d04","position":{"__typename":"Position","x":270,"y":-143},"typename":"ArkitektNode","parentNode":null,"hash":"6a32880712cbcbbea2f07ddda964cf1be0a782632c120dd0c52a4bd1ea1546c5","kind":"FUNCTION","defaults":{"channel":null,"position":null,"objective":"5"},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":2000,"yieldTimeout":2000,"reserveTimeout":2000,"maxRetries":0,"instream":[[{"__typename":"Port","key":"position","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"Acquire 2D (with offset)","description":"No description","retryDelay":1000},{"__typename":"ArkitektNode","id":"arkid-967a8594-cd47-49b7-a3eb-e16e52495b5f","position":{"__typename":"Position","x":763,"y":-233},"typename":"ArkitektNode","parentNode":null,"hash":"9f1a4c1bb8d13493c9372a587747fccf05991a80cafa66548bc71175b3c24c98","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":2000,"yieldTimeout":2000,"reserveTimeout":2000,"maxRetries":0,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"Segment Flou2","description":"No description","retryDelay":1000},{"__typename":"ArkitektNode","id":"arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5","position":{"__typename":"Position","x":744,"y":49},"typename":"ArkitektNode","parentNode":null,"hash":"3301eb51f35a15ff0422e037c4bc3e41736db7b837701046ca7e4ef8be6a0cf0","kind":"FUNCTION","defaults":{"c":0,"t":0,"z":0,"rep":null,"limit":null,"distance":null,"max_size":null,"min_size":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":2000,"yieldTimeout":2000,"reserveTimeout":2000,"maxRetries":0,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image to label outliers for","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The rois for the clusters","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/roi","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID]) {\\n  options: rois(repname: $search, ids: $values) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"Mark dense clusters","description":"No description","retryDelay":1000},{"__typename":"ReactiveNode","id":"reactive-b951a2d4-d488-4785-9188-a54f3c812baf","position":{"__typename":"Position","x":989,"y":108},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The rois for the clusters","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/roi","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID]) {\\n  options: rois(repname: $search, ids: $values) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe rois for the clusters","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID]) {\\n  options: rois(repname: $search, ids: $values) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-9ca213ad-d3ff-4a6c-9e95-996218c01505","position":{"__typename":"Position","x":1113,"y":-84},"typename":"ArkitektNode","parentNode":null,"hash":"002fcbbaa1fbb3cdfde68bd4fa28acd3bc9e70d5d3a02cec6ca2b2999a0ac293","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":2000,"yieldTimeout":2000,"reserveTimeout":2000,"maxRetries":0,"instream":[[{"__typename":"Port","key":"roi","label":null,"identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID]) {\\n  options: rois(repname: $search, ids: $values) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"Roi to Position","description":"No description","retryDelay":1000},{"__typename":"ArkitektNode","id":"arkid-8ec51ad5-2812-4496-b3ab-16100a36fa4f","position":{"__typename":"Position","x":1139,"y":261},"typename":"ArkitektNode","parentNode":null,"hash":"2814f4285b51e3a7973b600e2e48c5b4ed815ea2c5a880e26f9255b854200177","kind":"FUNCTION","defaults":{"roi":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":2000,"yieldTimeout":2000,"reserveTimeout":2000,"maxRetries":0,"instream":[[{"__typename":"Port","key":"roi","label":"roi","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"The roi to measure","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID]) {\\n  options: rois(repname: $search, ids: $values) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"Rectangular Roi to Dimensions","description":"No description","retryDelay":1000},{"__typename":"ArkitektNode","id":"arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63","position":{"__typename":"Position","x":1356,"y":-629},"typename":"ArkitektNode","parentNode":null,"hash":"497ae414fc52749c6799647e15c02e320adf3555500a95036b8ef63323c8f1ba","kind":"FUNCTION","defaults":{"z_step":0.3,"channel":null,"z_steps":2,"position":null,"objective":"7","crop_physical_width":null,"crop_physical_height":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":2000,"yieldTimeout":2000,"reserveTimeout":2000,"maxRetries":0,"instream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The postion","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_height","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_width","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"Acquire Stack","description":"No description","retryDelay":1000},{"__typename":"ReactiveNode","id":"reactive-fc4a2dd8-7957-4ab9-91a4-5acc91909f00","position":{"__typename":"Position","x":1325,"y":6},"typename":"ReactiveNode","parentNode":null,"implementation":"ZIP","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ReactiveNode","id":"reactive-134b5136-d22b-49d5-bbe0-9787f1522ea9","position":{"__typename":"Position","x":1206,"y":93},"typename":"ReactiveNode","parentNode":null,"implementation":"ADD","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ReactiveNode","id":"reactive-728b3803-308b-4989-b39f-42713a34b36f","position":{"__typename":"Position","x":1822,"y":-221},"typename":"ReactiveNode","parentNode":null,"implementation":"BUFFER_COMPLETE","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-e7290f0a-91cc-445a-8322-75e3472e6d04arg_0","source":"1","sourceHandle":"return_0","target":"arkid-e7290f0a-91cc-445a-8322-75e3472e6d04","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"position","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":true,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-e7290f0a-91cc-445a-8322-75e3472e6d04return_0-arkid-967a8594-cd47-49b7-a3eb-e16e52495b5farg_0","source":"arkid-e7290f0a-91cc-445a-8322-75e3472e6d04","sourceHandle":"return_0","target":"arkid-967a8594-cd47-49b7-a3eb-e16e52495b5f","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-967a8594-cd47-49b7-a3eb-e16e52495b5freturn_0-arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5arg_0","source":"arkid-967a8594-cd47-49b7-a3eb-e16e52495b5f","sourceHandle":"return_0","target":"arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5return_0-reactive-b951a2d4-d488-4785-9188-a54f3c812bafarg_0","source":"arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5","sourceHandle":"return_0","target":"reactive-b951a2d4-d488-4785-9188-a54f3c812baf","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-b951a2d4-d488-4785-9188-a54f3c812bafreturn_0-arkid-9ca213ad-d3ff-4a6c-9e95-996218c01505arg_0","source":"reactive-b951a2d4-d488-4785-9188-a54f3c812baf","sourceHandle":"return_0","target":"arkid-9ca213ad-d3ff-4a6c-9e95-996218c01505","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"roi","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-b951a2d4-d488-4785-9188-a54f3c812bafreturn_0-arkid-8ec51ad5-2812-4496-b3ab-16100a36fa4farg_0","source":"reactive-b951a2d4-d488-4785-9188-a54f3c812baf","sourceHandle":"return_0","target":"arkid-8ec51ad5-2812-4496-b3ab-16100a36fa4f","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"roi","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-9ca213ad-d3ff-4a6c-9e95-996218c01505return_0-reactive-fc4a2dd8-7957-4ab9-91a4-5acc91909f00arg_0","source":"arkid-9ca213ad-d3ff-4a6c-9e95-996218c01505","sourceHandle":"return_0","target":"reactive-fc4a2dd8-7957-4ab9-91a4-5acc91909f00","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-fc4a2dd8-7957-4ab9-91a4-5acc91909f00return_0-arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63arg_0","source":"reactive-fc4a2dd8-7957-4ab9-91a4-5acc91909f00","sourceHandle":"return_0","target":"arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"position","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":true,"child":null,"variants":null},{"__typename":"StreamItem","key":"crop_physical_height","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":true,"child":null,"variants":null},{"__typename":"StreamItem","key":"crop_physical_width","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":true,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-8ec51ad5-2812-4496-b3ab-16100a36fa4freturn_0-reactive-134b5136-d22b-49d5-bbe0-9787f1522ea9arg_0","source":"arkid-8ec51ad5-2812-4496-b3ab-16100a36fa4f","sourceHandle":"return_0","target":"reactive-134b5136-d22b-49d5-bbe0-9787f1522ea9","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null},{"__typename":"StreamItem","key":"return1","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-134b5136-d22b-49d5-bbe0-9787f1522ea9return_0-reactive-fc4a2dd8-7957-4ab9-91a4-5acc91909f00arg_1","source":"reactive-134b5136-d22b-49d5-bbe0-9787f1522ea9","sourceHandle":"return_0","target":"reactive-fc4a2dd8-7957-4ab9-91a4-5acc91909f00","targetHandle":"arg_1","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null},{"__typename":"StreamItem","key":"return1","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63return_0-reactive-728b3803-308b-4989-b39f-42713a34b36farg_0","source":"arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63","sourceHandle":"return_0","target":"reactive-728b3803-308b-4989-b39f-42713a34b36f","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-728b3803-308b-4989-b39f-42713a34b36freturn_0-2arg_0","source":"reactive-728b3803-308b-4989-b39f-42713a34b36f","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"buffer","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of a cluster (min_samples in DBSCAN) (maps to arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5.min_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5.distance"],"port":{"__typename":"Port","key":"distance","label":"distance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The distance between points in a cluster (eps in DBSCAN) (maps to arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5.distance)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5.limit"],"port":{"__typename":"Port","key":"limit","label":null,"identifier":null,"scope":"GLOBAL","kind":"INT","description":" (maps to arkid-acf9c5da-1031-4fd0-9d98-80020d74cbe5.limit)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63.z_steps"],"port":{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63.z_steps)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63.z_step"],"port":{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to arkid-85e4fa4d-2694-4221-a5a9-93e724a35f63.z_step)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["reactive-134b5136-d22b-49d5-bbe0-9787f1522ea9.number"],"port":{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to reactive-134b5136-d22b-49d5-bbe0-9787f1522ea9.number)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[{"__typename":"Port","key":"position","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}],"returns":[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]},"restrict":["ha"],"name":"messy-zucchini-macaque","screenshot":"/flussmedia/screenshots/download_39_2XHlHsc.png?AWSAccessKeyId=lumpychestnutseahorse&Signature=M%2FGMPT1fBIBAGSVTB4iY18%2FJOxY%3D&Expires=1697556382","createdAt":"2023-05-26T13:49:35.920350+00:00","workspace":{"__typename":"Workspace","id":"77"}}'),u={title:"Smart Microscopy",sidebar_label:"Smart Microscopy",sidebar_position:4},c=void 0,m={unversionedId:"showcases/paper/smart_microscopy_workflow",id:"showcases/paper/smart_microscopy_workflow",title:"Smart Microscopy",description:"Arkitekt was designed for the increasingly complex real-time microscopy workflows of today.",source:"@site/docs/showcases/paper/smart_microscopy_workflow.mdx",sourceDirName:"showcases/paper",slug:"/showcases/paper/smart_microscopy_workflow",permalink:"/docs/showcases/paper/smart_microscopy_workflow",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/showcases/paper/smart_microscopy_workflow.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Smart Microscopy",sidebar_label:"Smart Microscopy",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Streaming Analysis",permalink:"/docs/showcases/paper/streaming_workflow"},next:{title:"Troubleshooting",permalink:"/docs/category/troubleshooting"}},p={},g=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing the Workflows",id:"installing-the-workflows",level:3}],h={toc:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Arkitekt was designed for the increasingly complex real-time microscopy workflows of today.\nTo illustrate Arkitekt readiness for ",(0,i.kt)("inlineCode",{parentName:"p"},"Smart Microscopy"),", we deviced this simply no-code example\nof a ",(0,i.kt)("inlineCode",{parentName:"p"},"Smart Microscopy")," workflow to perform the 3D live monitoring of cell\nclusters with a 40X objective, while scanning a large field of view with a 20X objective. "),(0,i.kt)("p",null,"In this workflow, the Micro-Manager open-source software (Edelstein et al. 2014) is setup for a\nmultidimensional acquisition. The user then interactively sets up a grid of positions on large sample\narea (2.61mm x 2.61mm, corresponding to 4*4 stage positions) containing living fluorescent\ncells. "),(0,i.kt)("p",null,"During the workflow defined positions are then acquired at 20X magnification every 30 minutes for 24 hours.\nFor every acquired 20X magnification image, nuclei are then automatically segmented on a remote\ncomputer using the Stardist (Weigert et al. 2020) algorithm, and cell clusters are computed with the help of\nDBSCAN (Ester et al. 1996).\nWhen one or more of such identified clusters are detected, the ROIs central coordinates and\ndimensions are translated back to stage coordinates and sent back to the microscope. 3D stacks\nof these positions (25 planes, 0.5\xb5m step size) are then collected at higher magnification\n(40X) on a well-adjusted cameroa ROI fitting the cell clusters size. After all the positive events are\ndetected, acquired in 3D high-resolution and displayed on the web-interface, the next image\nis acquired at 20X magnification"),(0,i.kt)("div",{className:"mt-2"},(0,i.kt)(l.Z,{img:s(),mdxType:"Image"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null,"The Smart Microscopy Workflow"))),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("admonition",{title:"Please read ",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We ",(0,i.kt)("strong",{parentName:"p"},"strongly")," suggest to go through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps"},"Getting Started")," guide before attempting to run this workflow.\nIt will guide you through the installation of the Arkitekt platform and the setup of your first workflow, as well as how to install plugins\nand apps.")),(0,i.kt)("p",null,"This workflow is designed to run on a microscope computer running Windows 10 as well as on a remote analysis computer\nthat will power the Arkitekt platform and the image analysis. To enable GPU acceleration for the Stardist\nsegmentation, the analysis computer needs to have access to a CUDA 11 enabled GPU (tested on Nvidia GeforceRTX 2080Ti).\nThe microscope computer will need to be connected to thevthe same network as the remote computer."),(0,i.kt)("p",null,"Additionally to run this workflow you will need to have the following installed on your microscope computer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://micro-manager.org/"},"Micro-Manager")," (version 2.0.1 2023.05.23 (later versions might work as well))"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/mikro-manager"},"MikroManager")," (version 0.0.1) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/mikro-manager/releases/tag/6589964173"},"Download here"))),(0,i.kt)("p",null,"As well as the following plugins installed on your Arkitekt computer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stdlib Plugin (version 0.3.6) from the repository ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/stdlib"},"https://github.com/jhnnsrs/stdlib")),(0,i.kt)("li",{parentName:"ul"},"Segmentor Plugin (version 0.3.1 ) from the repository ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/segmentor"},"https://github.com/jhnnsrs/segmentor"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Test Environment"),(0,i.kt)("div",null,"This workflow was tested on the following environments:",(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Acquisition Computer:\n    - Intel Core i7-8700K CPU @ 3.70GHz\n    - 32GB RAM\n    - Nikon Ti2-E Microscope\n    - Windows 10\n    - Micro-Manager 2.0.1 2023.05.23\n    - MikroManager 0.0.1\n\nAnalysis Computer\n    - Intel Core i9-8700K CPU @ 3.70GHz\n    - Ubuntu 22.04\n    - Arkitekt Paper Channel\n    - Segmentor Plugin 0.3.1\n    - Stdlib Plugin 0.3.6\n")))),(0,i.kt)("h3",{id:"installing-the-workflows"},"Installing the Workflows"),(0,i.kt)("p",null,"This workflow is composed of two workflows, with one workflow being nested in the other. The first workflow is the\n",(0,i.kt)("inlineCode",{parentName:"p"},"acquire_small")," workflow, which is the workflow that will acquire a 20X Image, segment it, detect cluster and send the coordinates\nto the microscope to acquire all clusters with a 40X objective. The second workflow is the ",(0,i.kt)("inlineCode",{parentName:"p"},"acquire_large")," workflow, which is the\nworkflow that will run this workflow in a multidimensional acquistions for all position every 30 minutes for 24 hours."),(0,i.kt)("p",null,"To install these workflows connect this website to you Arkitekt instance and click on the button below:"),(0,i.kt)(o.n,{flow:d,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null,"Once connected this pane will also give you an overview over the apps that still need to be installed, nodes in green have been installed, nodes in yellow still lack an implementation. Of course feel free to explore this graph more interactively in your orkestrator interface")))}y.isMDXComponent=!0}}]);