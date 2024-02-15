(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3518],{68134:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/local_scheduler.b91c9d2.640.png 640w,"+n.p+"assets/ideal-img/local_scheduler.717e3a3.1320.png 1320w,"+n.p+"assets/ideal-img/local_scheduler.b84e69a.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/local_scheduler.b91c9d2.640.png",width:640,height:743},{path:n.p+"assets/ideal-img/local_scheduler.717e3a3.1320.png",width:1320,height:1532},{path:n.p+"assets/ideal-img/local_scheduler.b84e69a.2000.png",width:2e3,height:2322}],src:n.p+"assets/ideal-img/local_scheduler.b91c9d2.640.png",toString:function(){return n.p+"assets/ideal-img/local_scheduler.b91c9d2.640.png"},placeholder:void 0,width:640,height:743},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB90lEQVR4nAHsARP+AAAAAAAAAAAAAAAAAP///wH///8D////AwAAAAAAAAAAAAAAAAAAAAAAlOjmf5rl5WWWyPOtms3zgpfM85uXzPGblszyjZfL9Z6T399ojuDgdgCk2eQwjLi/KIrN/y5/u+gigsrxJ57j/yWW1/8nmcbvMp3S0iKZzs41AH949EZ/dN0uf6abLsz2/1Ww5PBEWoSRT1yerzpf5/8gbNP0L4/X5CcAKTH/Pk5FtD6hqJyW9vn8/Nbf5dFKTE//VmdppY3//xJt//8jUP//EwA7Rv8vRESvLZmgk5HZ4eD/wNDc1GpnZv1haW29Kz1EmS07Pq81XWs5ADE6/zlbUbo4kZyak8DN0f6/zdLUaWZm/F1ear8sPkObLzw/sDdmbzcAOET/LVFLrSyapKSTztrd/8TS19NlY2P9XF9tuy1IUHsvSEyMQYKUKwAyO/84U0qwN5egnpLQ3e7+xcnD0mppavxiZnC6L0VPhzBERZ0zZ3E2ADhC/zZMOZk1lp6XkrnYzP+rwbjSaGVm/2Ftca8zZnVVNlxoaz+FmSgAOUP/MWRbrTiWop2Szuna+r/W0NBNTlP7WWpto3///xRu//8lY///FwA0NP8dXkKqG5+vpyD/+v833eP5LlhrcDRggpAlVczuD1271hNV4v8J/eP+oygkIUQAAAAASUVORK5CYII="}},85659:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var a=n(85893),i=n(11151),r=(n(98555),n(60624),n(21262),n(15944)),s=n(68134),o=n.n(s);const l=n.p+"assets/medias/local_workflow_creation-0b57cda6d8ec66ee9df4920dfb156053.webm",d=n.p+"assets/medias/local_workflow_execution-ab8a134066f2e9fd0134c3feb5b9bf8d.webm";n(71698);const c={title:"Local Workflows",sidebar_label:"Local Workflows",sidebar_position:3},m=void 0,u={id:"introduction/advanced/local_workflows",title:"Local Workflows",description:"Local Workflows",source:"@site/docs/introduction/advanced/local_workflows.mdx",sourceDirName:"introduction/advanced",slug:"/introduction/advanced/local_workflows",permalink:"/docs/introduction/advanced/local_workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/advanced/local_workflows.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Local Workflows",sidebar_label:"Local Workflows",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deep Learning Bridge",permalink:"/docs/introduction/advanced/deep_learning"},next:{title:"Train a Deep Learning Model",permalink:"/docs/introduction/advanced/training"}},p={},g=[{value:"Local Workflows",id:"local-workflows",level:2},{value:"Differences",id:"differences",level:3},{value:"Lets see how to create a local workflow",id:"lets-see-how-to-create-a-local-workflow",level:3}];function h(e){const t={admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"local-workflows",children:"Local Workflows"}),"\n",(0,a.jsx)(t.p,{children:"While Arkitekt can be a great tool for orchestrating workflows on a multiple computers, spanning multiple programming languages, its modular design\nalso makes it a great tool for orchestrating workflows on a single computer and inside a single (python) process. This is due to the nature\nthat apps themselves are the schedulers of workflows, and that apps can become their own scheduler."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"While this is a fully functionaly feature at the moment, it is still in its infancy and will be improved upon in the future.\nNot also that you need only two services to run a workflow locally (fluss and rekuest)"})}),"\n",(0,a.jsxs)("div",{className:"mt-2 p-6 w-full",children:[(0,a.jsx)(r.Z,{img:o()}),(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:(0,a.jsx)(t.p,{children:"The local scheduler running a workflow. The workflow is running in the same process as the scheduler."})})})]}),"\n",(0,a.jsx)(t.h3,{id:"differences",children:"Differences"}),"\n",(0,a.jsx)(t.p,{children:"Everything is in memory, so there is no need to serialize and deserialize data. This means that you can pass around\nlarge objects without worrying about the performance hit of serialization and deserialization. This also means that\nyou can pass around objects that are not serializable, such as open file handles, or objects that are not pickleable."}),"\n",(0,a.jsx)(t.p,{children:"Additionally everything is hyper fast, as there is no network latency, and no need to wait for other computers to finish\ntheir work. This means that you can run workflows that are very fast, and that you can run workflows that are very slow\nwithout worrying about the network latency."}),"\n",(0,a.jsx)(t.h3,{id:"lets-see-how-to-create-a-local-workflow",children:"Lets see how to create a local workflow"}),"\n",(0,a.jsx)(t.p,{children:"Creating a local workflow is virtually equivalent to creating a workflow that runs in a distributed fashion. The only difference is that\nwhen"}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,a.jsx)("source",{src:l})}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" Creation of local Workflow"})}),"\n",(0,a.jsx)(t.p,{children:"And execution is the same as well. Just start the workflow and it will run in the same process."}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,a.jsx)("source",{src:d})}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" Execution"})})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>m});var a=n(37887),i=n(69819),r=n(31230),s=n(67294),o=n(85893);const l=r.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,d=r.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,c="my-2 p-2 rounded-md text-black text-center w-60 ",m=e=>{let{branch:t,repo:n,user:a}=e;const{client:r}=(0,i.AA)();return r?(0,o.jsx)(u,{branch:t,repo:n,user:a}):(0,o.jsxs)("div",{className:c+"bg-back-800 text-white bg-opacity-1 my-2",onDoubleClick:()=>alert("You need to be logged in to install repos."),children:[" ",a,"/",n,":",t]})},u=e=>{let{branch:t,repo:n,user:r}=e;const{client:m}=(0,i.AA)(),u=`${r}/${n}:${t}`,[p,g]=s.useState(!1),{data:h,refetch:f}=(0,a.a)(d,{client:m,variables:{tag:u},pollInterval:3e3});return(0,o.jsx)(o.Fragment,{children:h?.githubRepo?(0,o.jsxs)("button",{className:c+"bg-green-300",children:[" \u2705 ",u]}):(0,o.jsx)("button",{onClick:async()=>{try{g(!0);const{data:e}=await m.mutate({mutation:l,variables:{branch:t,repo:n,user:r}});await f(),console.log(e),g(!1)}catch(e){console.log(e)}},className:c+"cursor-pointer bg-yellow-200"+(p?" animate-pulse":""),children:p?(0,o.jsxs)(o.Fragment,{children:[" Installing ",u," "]}):(0,o.jsxs)(o.Fragment,{children:["\ud83e\ude84 Install ",u]})})})}},21262:(e,t,n)=>{"use strict";n.d(t,{n:()=>st});var a=n(67294),i=n(98268),r=(n(49263),n(85893));const s=e=>console.log("flow loaded:",e),o=e=>{let{edgeTypes:t,nodeTypes:n,nodes:a,edges:o,children:l,...d}=e;return(0,r.jsx)(i.tV,{children:(0,r.jsx)(i.x$,{nodes:a,edges:o,onInit:s,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right",...d,children:l})})};function l(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,c=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function m(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(c,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const u=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...i}=e;return{type:a,id:t,position:n,data:{__typename:a,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(l)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,__typename:s,...o}=e;return{id:t,type:s,source:n,sourceHandle:a,target:i,targetHandle:r,data:{__typename:s,...o}}}})).filter(l)||[],g=a.createContext({}),h=()=>(0,a.useContext)(g);var f=n(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),b=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const x=f.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,k=(f.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${x}
`,f.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),w=f.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,$=f.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${x}
  ${k}
  ${w}
`,_=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${$}
`,v=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${$}
`,N=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${_}
  ${v}
  ${x}
`,P=f.Ps`
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
  ${N}
`,A=f.Ps`
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
  ${N}
  ${P}
`,j=f.Ps`
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
  ${N}
  ${P}
`,L=f.Ps`
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
  ${N}
  ${P}
`,S=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,C=f.Ps`
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
  ${S}
`,D=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,R=f.Ps`
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
`,T=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,W=f.Ps`
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
  ${R}
  ${T}
`,I=f.Ps`
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
  ${R}
  ${T}
  ${W}
`,E=f.Ps`
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
  ${R}
  ${T}
  ${I}
`,F=f.Ps`
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
  ${E}
`,U=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,O=f.Ps`
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
  ${F}
  ${U}
`,B=f.Ps`
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
  ${F}
  ${U}
`,H=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${F}
`,q=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,z=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,G=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,M=f.Ps`
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
  ${F}
  ${U}
`,Z=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,K=f.Ps`
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
  ${O}
  ${B}
  ${H}
  ${q}
  ${z}
  ${G}
  ${M}
  ${Z}
`,V=f.Ps`
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
`,Y=f.Ps`
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
  ${V}
`,X=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${Y}
`,J=f.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${X}
`,Q=f.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${X}
`,ee=f.Ps`
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
  ${J}
  ${Q}
`,te=f.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${E}
`,ne=f.Ps`
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
  ${K}
  ${ee}
  ${te}
  ${E}
`,ae=f.Ps`
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
  ${S}
  ${ne}
`,ie=f.Ps`
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
`,re=f.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,se=f.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${re}
`,oe=f.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${ne}
`,le=(f.Ps`
  fragment RunLog on RunLog {
    id
    node
    log
  }
`,f.Ps`
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
  ${E}
`),de=f.Ps`
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
`,ce=f.Ps`
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
  ${de}
`,me=f.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,ue=f.Ps`
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
  ${de}
  ${ne}
`,pe=f.Ps`
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
  ${de}
  ${ne}
`,ge=f.Ps`
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
`;f.Ps`
  mutation CreateComment(
    $id: ID!
    $model: CommentableModels!
    $descendents: [DescendendInput]!
    $parent: ID
  ) {
    createComment(
      object: $id
      type: $model
      descendents: $descendents
      parent: $parent
    ) {
      ...ListComment
    }
  }
  ${A}
`;f.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${A}
`;f.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${A}
`;f.Ps`
  mutation DeleteCondition($id: ID!) {
    deleteCondition(id: $id) {
      id
    }
  }
`;f.Ps`
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
`;f.Ps`
  mutation UpdateFlow($id: ID!, $graph: GraphInput!, $screenshot: ImageFile) {
    updateworkspace(id: $id, graph: $graph, screenshot: $screenshot) {
      ...Workspace
    }
  }
  ${oe}
`;f.Ps`
  mutation DeleteFlow($id: ID!) {
    deleteFlow(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation CreateVanillaDiagram($name: String, $restrict: [String]) {
    drawvanilla(name: $name, restrict: $restrict) {
      ...Workspace
    }
  }
  ${oe}
`;f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${oe}
`;f.Ps`
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
`;f.Ps`
  mutation DeleteSnapshot($id: ID!) {
    deleteSnapshot(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation DeleteRun($id: ID!) {
    deleteRun(id: $id) {
      id
    }
  }
`;f.Ps`
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
`;f.Ps`
  mutation DeleteWorkspace($id: ID!) {
    deleteWorkspace(id: $id) {
      id
    }
  }
`;f.Ps`
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
`;f.Ps`
  query CommentsFor($id: ID!, $model: CommentableModels!) {
    commentsfor(model: $model, id: $id) {
      ...ListComment
    }
  }
  ${A}
`;f.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${j}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${L}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${D}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${C}
`;f.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${ie}
`;f.Ps`
  query MyConditions(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myconditions(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListCondition
    }
  }
  ${ie}
`;f.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${ae}
`;f.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${S}
`;f.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${ne}
`;f.Ps`
  query Workspace($id: ID!) {
    workspace(id: $id) {
      ...Workspace
    }
  }
  ${oe}
`;f.Ps`
  query MyWorkspaces(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myworkspaces(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListWorkspace
    }
  }
  ${se}
`;f.Ps`
  query PinnedWorkspaces(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
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
  ${se}
`;f.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${se}
`;f.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${re}
`;f.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${me}
`;f.Ps`
  query DetailSnapshot($id: ID!) {
    snapshot(id: $id) {
      ...Snapshot
    }
  }
  ${ce}
`;f.Ps`
  query Runs {
    runs {
      ...ListRun
    }
  }
  ${ge}
`;f.Ps`
  query MyRuns(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myruns(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListRun
    }
  }
  ${ge}
`;f.Ps`
  query PinnedRuns(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
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
  ${ge}
`;f.Ps`
  query DetailRun($id: ID, $assignation: ID) {
    run(id: $id, assignation: $assignation) {
      ...Run
    }
  }
  ${ue}
`;f.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${pe}
`;f.Ps`
  query EventsBetween($id: ID!, $min: Int, $max: Int) {
    eventsBetween(run: $id, min: $min, max: $max) {
      ...RunEvent
    }
  }
  ${de}
`;f.Ps`
  query FlussGlobalSearch($search: String) {
    workspaces(search: $search) {
      ...ListWorkspace
    }
  }
  ${se}
`;f.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${le}
`;f.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${le}
`;f.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${le}
`;f.Ps`
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
  ${S}
`;f.Ps`
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
  ${de}
`;const he=e=>{const{}=h(),{id:t,sourcePosition:n,targetPosition:a,sourceX:s,sourceY:o,targetX:l,targetY:d,style:c,markerStart:m,markerEnd:u,data:p}=e,[g,f,y]=(0,i.OW)({sourcePosition:n,targetPosition:a,sourceX:s,sourceY:o,targetX:l,targetY:d});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{id:t,style:c,className:"react-flow__edge-path",d:g}),(0,r.jsx)(i.XQ,{children:(0,r.jsx)("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex ",children:p?.stream.map(((e,t)=>(0,r.jsx)("span",{className:"text-xs",children:(e?.kind==b.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")},t)))})})]})};var fe=n(1706);const ye=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),be=e=>{let{id:t,children:n,expandedHeight:i=200,expandedWidth:s=400,collapsedWidth:o=170,collapsedHeight:l=70}=e;const[d,c]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:o,height:l});return(0,r.jsx)(fe.Resizable,{height:d.height,width:d.width,onResize:(e,t)=>{let{size:n,handle:a}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40],children:(0,r.jsx)(ye.Provider,{value:{...d,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?o:s,height:e.isExpanded?l:i})))}},children:(0,r.jsx)("div",{style:{width:d.width+"px",height:d.height+"px"},className:"flex flex-col",children:n})})},t)},xe=e=>t=>(0,r.jsx)(be,{id:t.id,children:(0,r.jsx)(e,{...t})}),ke={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},we=e=>{let{children:t,id:n,color:i="white"}=e;const[s,o]=a.useState(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${ke[i]}`,children:t})})};var $e=n(55770),_e=n(86419),ve=n(90512),Ne=n(57851);function Pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,Ne.m)((0,ve.W)(t))}const Ae=_e.fC,je=_e.xz,Le=a.forwardRef(((e,t)=>{let{className:n,align:a="center",sideOffset:i=4,...s}=e;return(0,r.jsx)(_e.h_,{children:(0,r.jsx)(_e.VY,{ref:t,align:a,sideOffset:i,className:Pe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...s})})}));Le.displayName=_e.VY.displayName;const Se=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Ce=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),De=(e,t,n)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,n)))),Re=e=>{const{data:t,error:n,loading:a}=(0,$e.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Se,{}),(0,r.jsxs)("div",{className:"text-yellow-500 my-auto",children:[" ",e.name," "]})]}):(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Ce,{}),(0,r.jsxs)("div",{className:"text-green-500 my-auto",children:[" ",t?.node?.name," "]})]})})},Te=e=>{const{flow:t}=h(),n=e.data.defaults&&Object.keys(e.data.defaults).filter((n=>e.data.defaults[n]&&null!=e.data.defaults[n]&&0!=e.data.defaults[n]||De(t,e.id,n)))||[];return(0,r.jsxs)(Ae,{children:[(0,r.jsx)(je,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full ",children:(0,r.jsx)($e.Z6,{fallback:(0,r.jsxs)(r.Fragment,{children:[" ",e.data?.name]}),children:(0,r.jsx)(Re,{hash:e.data.hash,name:e.data.name})})}),(0,r.jsxs)(Le,{className:"text-xs bg-back-800 my-auto  ",children:[" ",e.data?.description,n&&n.length>0&&(0,r.jsxs)("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3",children:[(0,r.jsx)("div",{className:"font-semibold text-md mb-2",children:"Constants "}),(0,r.jsx)("div",{className:"flex flex-row gap-2 text-white",children:(0,r.jsx)("div",{className:"flex grid grid-cols-2 gap-2",children:n.map((n=>{const a=De(t,e.id,n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:" my-auto",children:[" ",n," "]}),a?(0,r.jsxs)("div",{className:"text-primary-300",children:[" ",(0,r.jsx)("div",{className:"font-bold inline",children:"Global "}),a.port.key," "]}):(0,r.jsxs)("div",{className:"my-auto",children:[" ",e.data.defaults[n]," "]})]})}))})})]})]})]})},We=xe((e=>{const{isExpanded:t,toggleExpanded:n}=(0,a.useContext)(ye);return(0,r.jsxs)(we,{id:e.id,children:[e.data.instream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),(0,r.jsx)("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden ",children:(0,r.jsx)(Te,{...e})})]})})),Ie=xe((e=>{let{data:{outstream:t,instream:n},id:s}=e;const[o,l]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(we,{color:"blue",id:s,children:(0,r.jsx)("div",{className:"px-2 py-2",children:(0,r.jsxs)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:["Inputs"," "]})})}),t.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+s})))]})}));var Ee=n(63750);const Fe=xe((e=>{let{data:{constream:t},id:n}=e;const[i,s]=(0,a.useState)(!1),[o,l]=(0,a.useState)(!0);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(we,{color:"green",id:n,children:[!o&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex",children:t?.map(((e,t)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n,children:(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsx)("button",{type:"button",onClick:()=>alert("implement"),children:(0,r.jsx)(Ee.yvY,{})})})},t)})))})}),(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsxs)("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!o),children:["Constants"," "]}),(0,r.jsx)("p",{className:"text-gray-700 text-base"})]})]})})})),Ue=xe((e=>{let{data:{outstream:t,instream:n},id:s}=e;const[o,l]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(we,{color:"red",id:s,children:(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsx)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:"Outputs"}),(0,r.jsxs)("p",{className:"text-gray-700 text-base",children:[(0,r.jsxs)(r.Fragment,{children:[n[0]?.map((e=>e?.kind)).join(" | "),(0,r.jsx)("br",{})]}),!d&&(0,r.jsx)("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0),children:"Add Documentation"})]})]})}),n.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}})))]})})),Oe="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Be={ArkitektNode:We,ArkitektFilterNode:We,LocalNode:We,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:s,implementation:o,defaults:l},id:d}=e;const c=(0,i.Bn)();return(0,a.useEffect)((()=>{console.log("Update node internals",d,o),c(d)}),[t,n,s]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"custom-drag-handle text-xs ",children:[o&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(o)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),o&&[y.Gate].includes(o)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})}),o&&[y.Split].includes(o)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),o&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(o)&&(0,r.jsxs)("div",{className:Oe,children:[o," ",l?.number&&(0,r.jsx)("b",{className:"font-bold",children:l.number})]}),o&&[y.Ensure].includes(o)&&(0,r.jsx)("div",{className:Oe,children:(0,r.jsx)("h1",{children:"!"})}),o&&[y.ToList].includes(o)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),(0,r.jsx)("text",{children:o})]}),o&&[y.Omit].includes(o)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"},children:o})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})]}),o&&[y.If].includes(o)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"If"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),o&&[y.And].includes(o)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"And"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),s?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,style:{background:"#555",marginTop:10,height:"1em"}},t))),n?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}},t))),t?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}},t)))]})})},ArgNode:Ie,ReturnNode:Ue,KwargNode:Fe,GraphNode:()=>null},He={LabeledEdge:he,FancyEdge:he},qe=e=>{let{flow:t}=e;const[n,a,s]=(0,i.Rr)(u(t.graph?.nodes)),[l,d,c]=(0,i.ll)(p(t.graph?.edges));return(0,r.jsx)(g.Provider,{value:{flow:t},children:(0,r.jsx)(o,{nodes:n,edges:l,onNodesChange:s,onEdgesChange:c,elementsSelectable:!0,nodeTypes:Be,edgeTypes:He,fitView:!0,attributionPosition:"bottom-right"})})};var ze=n(89423),Ge=n(98756);const Me=e=>{const{user:t}=(0,ze.gX)(),{fakts:n}=(0,Ge.sT)();return(0,r.jsxs)("div",{className:"relative "+e.className,children:[e.children,!t||!n&&(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center",children:e.hideLabel})," "]})};var Ze=n(81154),Ke=n(50319),Ve=n(12854),Ye=n(79592);const Xe=Ve.fC,Je=(Ve.xz,Ve.h_),Qe=(Ve.x8,a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.aV,{ref:t,className:Pe("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a})})));Qe.displayName=Ve.aV.displayName;const et=a.forwardRef(((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(Je,{children:[(0,r.jsx)(Qe,{}),(0,r.jsxs)(Ve.VY,{ref:t,className:Pe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",n),...i,children:[a,(0,r.jsxs)(Ve.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(Ye.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}));et.displayName=Ve.VY.displayName;const tt=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:Pe("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};tt.displayName="DialogHeader";const nt=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.Dx,{ref:t,className:Pe("text-lg font-semibold leading-none tracking-tight",n),...a})}));nt.displayName=Ve.Dx.displayName;const at=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.dk,{ref:t,className:Pe("text-sm text-muted-foreground",n),...a})}));at.displayName=Ve.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rt=e=>{let{flow:t,blockImport:n}=e;const{client:i}=(0,Ze.dB)(),[s,o]=(0,Ke.D)(it,{client:i}),[d,c]=(0,a.useState)(!1),g=async()=>{try{const n=(e=u(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:a,parentNode:i,data:{outstream:r,constream:s,instream:o,...d}}=e;return{outstream:r?.map((e=>e?e.filter(l).map(m):[]))||[[]],constream:s?.map((e=>e?e.filter(l).map(m):[]))||[[]],instream:o?.map((e=>e?e.filter(l).map(m):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:a||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:i,interface:d.interface}}})).filter(l)||[]||[]),a=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,type:s,data:o}=e;return{id:t,typename:s||"Fake type",source:n,sourceHandle:a||"returns",target:i,targetHandle:r||"args",stream:o?.stream.filter(l).map(m)||[]}}})).filter(l)||[])(p(t.graph.edges));let i={nodes:n.filter(l).map(m),edges:a.filter(l).map(m),globals:t.graph.globals.filter(l).map(m),args:t.graph.args.filter(l).map(m),returns:t.graph.returns.filter(l).map(m)};await s({variables:{name:t.name,graph:i}});c(!0)}catch(n){alert(n.message)}var e};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Xe,{open:d,onOpenChange:c,children:(0,r.jsx)(et,{children:(0,r.jsxs)(tt,{children:[(0,r.jsx)(nt,{children:"Succesfully imported workflow"}),(0,r.jsx)(at,{children:"We have imported the workflow into Arkitekt. You can now use it in your flows."})]})})}),(0,r.jsx)("button",{onClick:()=>g(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer",children:"Re-Import into Arkitekt"})]})},st=e=>(0,r.jsxs)("div",{className:"border border-1 rounded border-gray-800",children:[(0,r.jsx)("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative",children:(0,r.jsx)(qe,{flow:e.flow})}),(0,r.jsx)(Me,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow",children:(0,r.jsx)(Ze.Ot,{children:(0,r.jsx)(rt,{flow:e.flow,blockImport:e.blockImport})})})]})},98555:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},60624:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);