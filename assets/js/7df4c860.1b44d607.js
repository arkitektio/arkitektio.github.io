(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1635],{86515:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/interactive.69d3fc1.640.png 640w,"+a.p+"assets/ideal-img/interactive.d54f224.1320.png 1320w,"+a.p+"assets/ideal-img/interactive.903a6b0.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/interactive.69d3fc1.640.png",width:640,height:461},{path:a.p+"assets/ideal-img/interactive.d54f224.1320.png",width:1320,height:949},{path:a.p+"assets/ideal-img/interactive.903a6b0.2000.png",width:2e3,height:1438}],src:a.p+"assets/ideal-img/interactive.69d3fc1.640.png",toString:function(){return a.p+"assets/ideal-img/interactive.69d3fc1.640.png"},placeholder:void 0,width:640,height:461},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVQYlQEfAeD+ADY+QwA8KE0ARyBaACUEPQBYPWgA////AD8IXvE/C2BjHGieIjRLhxcANjxBWzYnRWQ6HUthbDhoiWtJbGbFxsaPhV962a6XobRZcJH1MVB8QgA4RUn5Zi6G/4gjs/+CLar/i1Ol/8TJwG8AAAAAXKPTSK+yrMG0rKxsACgzNepoKYn9kyzH94spwP9/H6q97Kf/ABkA8AINivAyip/RJmBFd/EAHCUm8mYmiP+XKc3/jUWw/4lfndL///8A6c2sAP///wCjorEzuK6qrwAmLDDYPiNR7UINW+iYjp39ytLI/6qpqpLPyc9ForTIjVRdjOlNUYNnACsoNA0rXBoYAAAAD5CTj4C7obHGv7C1frnQz+O50M/YraCQapiIZSiVT4frY5LVSwAAAABJRU5ErkJggg=="}},33850:(e,t,a)=>{"use strict";a(61872),a(97120),a(67294),a(30210)},71698:(e,t,a)=>{"use strict";a.d(t,{I:()=>m});var n=a(37887),r=a(69819),i=a(31230),l=a(67294);const o=i.ZP`
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
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",m=(0,r.Zh)((e=>{let{branch:t,repo:a,user:i}=e;const{client:m}=(0,r.AA)(),c=`${i}/${a}:${t}`,{data:u,refetch:p}=(0,n.a)(s,{client:m,variables:{tag:c},pollInterval:3e3});return l.createElement(l.Fragment,null,u?.githubRepo?l.createElement("button",{className:d+"bg-green-300"}," \u2705 ",c):l.createElement("button",{onClick:async()=>{try{const{data:e}=await m.mutate({mutation:o,variables:{branch:t,repo:a,user:i}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",c))}),l.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},88545:(e,t,a)=>{"use strict";a.d(t,{x:()=>s});var n=a(97120),r=a(31230),i=a(67294);const l=r.ZP`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`,o="my-2 p-2 rounded-md text-black text-center w-60 ",s=(0,n.nk)((e=>{let{url:t,name:a,kind:r}=e;const{client:s}=(0,n.rM)();return i.createElement(i.Fragment,null,i.createElement("button",{onClick:async()=>{console.log(t);try{const e=await fetch(t);if(!e.ok)throw new Error("Failed fetching file from Documentation");const n=await e.blob(),i=new File([n],"model.zip",{type:n.type}),{data:o}=await s.mutate({mutation:l,variables:{name:a,kind:r,data:i}});console.log(o)}catch(e){console.log(e)}},className:o+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",a))}),i.createElement("div",{className:o+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},27859:(e,t,a)=>{"use strict";a.d(t,{Dr:()=>o,Hp:()=>l});var n=a(67294),r=a(63750),i=a(89583);const l=e=>{let{children:t}=e;return n.createElement("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 "},n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto "},n.createElement("div",{className:"my-auto mr-2"},n.createElement(i._Aq,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Linux")),n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(r.L1p,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Windows")),n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(i.oPZ,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Mac")))},o=e=>{let{children:t}=e;return n.createElement("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 "},n.createElement("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto "},n.createElement("div",{className:"my-auto mr-2"},n.createElement(i._Aq,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Linux")),n.createElement("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(r.L1p,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Windows")),n.createElement("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(i.oPZ,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Mac")))}},21262:(e,t,a)=>{"use strict";a.d(t,{n:()=>lt});var n=a(67294),r=a(98268),i=a(83117);a(86180);const l=e=>console.log("flow loaded:",e),o=e=>{let{edgeTypes:t,nodeTypes:a,nodes:o,edges:s,children:d,...m}=e;return n.createElement(r.tV,null,n.createElement(r.x$,(0,i.Z)({nodes:o,edges:s,onInit:l,nodeTypes:a,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))};function s(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,m=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function c(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(m,"{");console.log(t);let a=JSON.parse(t);return console.log(a),a}const u=e=>e?.map((e=>{if(e){const{id:t,position:a,__typename:n,...r}=e;return{type:n,id:t,position:a,data:{__typename:n,...r},dragHandle:".custom-drag-handle",parentNode:r.parentNode?r.parentNode:void 0}}})).filter(s)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:a,sourceHandle:n,target:r,targetHandle:i,__typename:l,...o}=e;return{id:t,type:l,source:a,sourceHandle:n,target:r,targetHandle:i,data:{__typename:l,...o}}}})).filter(s)||[],g=n.createContext({}),h=()=>(0,n.useContext)(g);var f=a(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),k=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const b=f.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,w=(f.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${b}
`,f.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),v=f.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,_=f.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${b}
  ${w}
  ${v}
`,$=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${_}
`,E=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${_}
`,N=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${$}
  ${E}
  ${b}
`,x=f.Ps`
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
`,P=f.Ps`
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
  ${x}
`,T=f.Ps`
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
  ${x}
`,A=f.Ps`
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
  ${x}
`,L=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,S=f.Ps`
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
  ${L}
`,W=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,C=f.Ps`
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
`,I=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,R=f.Ps`
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
  ${C}
  ${I}
`,D=f.Ps`
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
  ${C}
  ${I}
  ${R}
`,F=f.Ps`
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
  ${C}
  ${I}
  ${D}
`,O=f.Ps`
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
  ${F}
`,U=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,B=f.Ps`
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
  ${O}
  ${U}
`,q=f.Ps`
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
  ${O}
  ${U}
`,G=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${O}
`,z=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
`,H=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
`,M=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
`,j=f.Ps`
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
  ${O}
  ${U}
`,K=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
`,Y=f.Ps`
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
  ${B}
  ${q}
  ${G}
  ${z}
  ${H}
  ${M}
  ${j}
  ${K}
`,Z=f.Ps`
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
`,V=f.Ps`
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
  ${Z}
`,J=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${V}
`,X=f.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${J}
`,Q=f.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${J}
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
  ${X}
  ${Q}
`,te=f.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${F}
`,ae=f.Ps`
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
  ${Y}
  ${ee}
  ${te}
  ${F}
`,ne=f.Ps`
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
  ${L}
  ${ae}
`,re=f.Ps`
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
`,ie=f.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,le=f.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${ie}
`,oe=f.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${ae}
`,se=(f.Ps`
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
  ${F}
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
`,me=f.Ps`
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
`,ce=f.Ps`
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
  ${ae}
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
  ${ae}
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
  ${P}
`;f.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${P}
`;f.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${P}
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
  ${P}
`;f.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${T}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${A}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${W}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${S}
`;f.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${re}
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
  ${re}
`;f.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${ne}
`;f.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${L}
`;f.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${ae}
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
  ${le}
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
  ${le}
`;f.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${le}
`;f.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${ie}
`;f.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${ce}
`;f.Ps`
  query DetailSnapshot($id: ID!) {
    snapshot(id: $id) {
      ...Snapshot
    }
  }
  ${me}
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
  ${le}
`;f.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${se}
`;f.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${se}
`;f.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${se}
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
  ${L}
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
`;const he=e=>{const{}=h(),{id:t,sourcePosition:a,targetPosition:i,sourceX:l,sourceY:o,targetX:s,targetY:d,style:m,markerStart:c,markerEnd:u,data:p}=e,[g,f,y]=(0,r.OW)({sourcePosition:a,targetPosition:i,sourceX:l,sourceY:o,targetX:s,targetY:d});return n.createElement(n.Fragment,null,n.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:g}),n.createElement(r.XQ,null,n.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},p?.stream.map(((e,t)=>n.createElement("span",{className:"text-xs",key:t},(e?.kind==k.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var fe=a(1706);const ye=n.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),ke=e=>{let{id:t,children:a,expandedHeight:r=200,expandedWidth:i=400,collapsedWidth:l=170,collapsedHeight:o=70}=e;const[s,d]=(0,n.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:l,height:o});return n.createElement(fe.Resizable,{key:t,height:s.height,width:s.width,onResize:(e,t)=>{let{size:a,handle:n}=t;d((e=>({...e,width:a.width,height:a.height,isExpanded:a.height>200&&a.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},n.createElement(ye.Provider,{value:{...s,toggleExpanded:()=>{d((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?l:i,height:e.isExpanded?o:r})))}}},n.createElement("div",{style:{width:s.width+"px",height:s.height+"px"},className:"flex flex-col"},a)))},be=e=>t=>n.createElement(ke,{id:t.id},n.createElement(e,t)),we={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},ve=e=>{let{children:t,id:a,color:r="white"}=e;const[i,l]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${we[r]}`},t))};var _e=a(55770),$e=a(52203),Ee=a(90512),Ne=a(57851);function xe(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ne.m)((0,Ee.W)(t))}const Pe=$e.fC,Te=$e.xz,Ae=n.forwardRef(((e,t)=>{let{className:a,align:r="center",sideOffset:l=4,...o}=e;return n.createElement($e.h_,null,n.createElement($e.VY,(0,i.Z)({ref:t,align:r,sideOffset:l,className:xe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},o)))}));Ae.displayName=$e.VY.displayName;const Le=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Se=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),We=(e,t,a)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,a)))),Ce=e=>{const{data:t,error:a,loading:r}=(0,_e.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return n.createElement(n.Fragment,null,a?n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Le,null),n.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.name," ")):n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Se,null),n.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")))},Ie=e=>{const{flow:t}=h(),a=e.data.defaults&&Object.keys(e.data.defaults).filter((a=>e.data.defaults[a]&&null!=e.data.defaults[a]&&0!=e.data.defaults[a]||We(t,e.id,a)))||[];return n.createElement(Pe,null,n.createElement(Te,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full "},n.createElement(_e.Z6,{fallback:n.createElement(n.Fragment,null," ",e.data?.name)},n.createElement(Ce,{hash:e.data.hash,name:e.data.name}))),n.createElement(Ae,{className:"text-xs bg-back-800 my-auto  "}," ",e.data?.description,a&&a.length>0&&n.createElement("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3"},n.createElement("div",{className:"font-semibold text-md mb-2"},"Constants "),n.createElement("div",{className:"flex flex-row gap-2 text-white"},n.createElement("div",{className:"flex grid grid-cols-2 gap-2"},a.map((a=>{const r=We(t,e.id,a);return n.createElement(n.Fragment,null,n.createElement("div",{className:" my-auto"}," ",a," "),r?n.createElement("div",{className:"text-primary-300"}," ",n.createElement("div",{className:"font-bold inline"},"Global "),r.port.key," "):n.createElement("div",{className:"my-auto"}," ",e.data.defaults[a]," "))})))))))},Re=be((e=>{const{isExpanded:t,toggleExpanded:a}=(0,n.useContext)(ye);return n.createElement(ve,{id:e.id},e.data.instream.map(((e,t)=>n.createElement(r.HH,{type:"target",position:r.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>n.createElement(r.HH,{type:"source",position:r.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),n.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden "},n.createElement(Ie,e)))})),De=be((e=>{let{data:{outstream:t,instream:a},id:i}=e;const[l,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(ve,{color:"blue",id:i},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>n.createElement(r.HH,{type:"source",position:r.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+i}))))}));var Fe=a(63750);const Oe=be((e=>{let{data:{constream:t},id:a}=e;const[r,i]=(0,n.useState)(!1),[l,o]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(ve,{color:"green",id:a},!l&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex"},t?.map(((e,t)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+a},n.createElement("div",{className:"flex justify-between"},n.createElement("button",{type:"button",onClick:()=>alert("implement")},n.createElement(Fe.yvY,null))))))))),n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>o(!l)},"Constants"," "),n.createElement("p",{className:"text-gray-700 text-base"}))))})),Ue=be((e=>{let{data:{outstream:t,instream:a},id:i}=e;const[l,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(ve,{color:"red",id:i},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),n.createElement("p",{className:"text-gray-700 text-base"},n.createElement(n.Fragment,null,a[0]?.map((e=>e?.kind)).join(" | "),n.createElement("br",null)),!s&&n.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>o(!0)},"Add Documentation")))),a.map(((e,t)=>n.createElement(r.HH,{type:"target",position:r.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),Be="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",qe={ArkitektNode:Re,ArkitektFilterNode:Re,LocalNode:Re,ReactiveNode:e=>{let{data:{outstream:t,instream:a,constream:i,implementation:l,defaults:o},id:s}=e;const d=(0,r.Bn)();return(0,n.useEffect)((()=>{console.log("Update node internals",s,l),d(s)}),[t,a,i]),n.createElement(n.Fragment,null,n.createElement("div",{className:"custom-drag-handle text-xs "},l&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l&&[y.Gate].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})),l&&[y.Split].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(l)&&n.createElement("div",{className:Be},l," ",o?.number&&n.createElement("b",{className:"font-bold"},o.number)),l&&[y.Ensure].includes(l)&&n.createElement("div",{className:Be},n.createElement("h1",null,"!")),l&&[y.ToList].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,l)),l&&[y.Omit].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},l)),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l&&[y.If].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"If")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),l&&[y.And].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"And")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),i?.map(((e,t,a)=>n.createElement(r.HH,{type:"target",position:r.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),a?.map(((e,t,a)=>n.createElement(r.HH,{key:t,type:"target",position:r.Ly.Left,id:`arg_${t}`,style:{top:100/a.length*t+45/a.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,a)=>n.createElement(r.HH,{key:t,type:"source",position:r.Ly.Right,id:`return_${t}`,style:{top:100/a.length*t+46/a.length+"%",background:"#555"}})))))},ArgNode:De,ReturnNode:Ue,KwargNode:Oe,GraphNode:()=>null},Ge={LabeledEdge:he,FancyEdge:he},ze=e=>{let{flow:t}=e;const[a,i,l]=(0,r.Rr)(u(t.graph?.nodes)),[s,d,m]=(0,r.ll)(p(t.graph?.edges));return n.createElement(g.Provider,{value:{flow:t}},n.createElement(o,{nodes:a,edges:s,onNodesChange:l,onEdgesChange:m,elementsSelectable:!0,nodeTypes:qe,edgeTypes:Ge,fitView:!0,attributionPosition:"bottom-right"}))};var He=a(30210),Me=a(39903);const je=e=>{const{user:t}=(0,He.gX)(),{fakts:a}=(0,Me.sT)();return n.createElement("div",{className:"relative "+e.className},e.children,!t||!a&&n.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var Ke=a(68947),Ye=a(50319),Ze=a(12854),Ve=a(79592);const Je=Ze.fC,Xe=(Ze.xz,Ze.h_),Qe=(Ze.x8,n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(Ze.aV,(0,i.Z)({ref:t,className:xe("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},r))})));Qe.displayName=Ze.aV.displayName;const et=n.forwardRef(((e,t)=>{let{className:a,children:r,...l}=e;return n.createElement(Xe,null,n.createElement(Qe,null),n.createElement(Ze.VY,(0,i.Z)({ref:t,className:xe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a)},l),r,n.createElement(Ze.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(Ve.Z,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));et.displayName=Ze.VY.displayName;const tt=e=>{let{className:t,...a}=e;return n.createElement("div",(0,i.Z)({className:xe("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};tt.displayName="DialogHeader";const at=n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(Ze.Dx,(0,i.Z)({ref:t,className:xe("text-lg font-semibold leading-none tracking-tight",a)},r))}));at.displayName=Ze.Dx.displayName;const nt=n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(Ze.dk,(0,i.Z)({ref:t,className:xe("text-sm text-muted-foreground",a)},r))}));nt.displayName=Ze.dk.displayName;const rt=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,it=e=>{let{flow:t,blockImport:a}=e;const{client:r}=(0,Ke.dB)(),[i,l]=(0,Ye.D)(rt,{client:r}),[o,d]=(0,n.useState)(!1),m=async()=>{try{const a=(e=u(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:a,type:n,parentNode:r,data:{outstream:i,constream:l,instream:o,...d}}=e;return{outstream:i?.map((e=>e?e.filter(s).map(c):[]))||[[]],constream:l?.map((e=>e?e.filter(s).map(c):[]))||[[]],instream:o?.map((e=>e?e.filter(s).map(c):[]))||[[]],id:t,position:{x:a.x,y:a.y},typename:n||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:r,interface:d.interface}}})).filter(s)||[]||[]),n=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:a,sourceHandle:n,target:r,targetHandle:i,type:l,data:o}=e;return{id:t,typename:l||"Fake type",source:a,sourceHandle:n||"returns",target:r,targetHandle:i||"args",stream:o?.stream.filter(s).map(c)||[]}}})).filter(s)||[])(p(t.graph.edges));let r={nodes:a.filter(s).map(c),edges:n.filter(s).map(c),globals:t.graph.globals.filter(s).map(c),args:t.graph.args.filter(s).map(c),returns:t.graph.returns.filter(s).map(c)};await i({variables:{name:t.name,graph:r}});d(!0)}catch(a){alert(a.message)}var e};return n.createElement(n.Fragment,null,n.createElement(Je,{open:o,onOpenChange:d},n.createElement(et,null,n.createElement(tt,null,n.createElement(at,null,"Succesfully imported workflow"),n.createElement(nt,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),n.createElement("button",{onClick:()=>m(),disabled:a,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},lt=e=>n.createElement("div",{className:"border border-1 rounded border-gray-800"},n.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},n.createElement(ze,{flow:e.flow})),n.createElement(je,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},n.createElement(Ke.Ot,null,n.createElement(it,{flow:e.flow,blockImport:e.blockImport}))))},33346:(e,t,a)=>{"use strict";a.d(t,{L:()=>r});var n=a(67294);const r=e=>n.createElement(n.Fragment,null,"CONNECTED")},94928:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var n=a(83117),r=(a(67294),a(3905)),i=(a(27859),a(15944)),l=a(86515),o=a.n(l),s=(a(33346),a(21262)),d=a(71698),m=a(88545);a(97120);a(33850);const c=JSON.parse('{"__typename":"Flow","id":"37","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1496,"y":55},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","position":{"__typename":"Position","x":240,"y":-3},"typename":"ArkitektNode","parentNode":null,"hash":"da4e74c9f67d7ffc8855087ebb6268ce996c58df4a7050066bed4269fbe5c9b0","kind":"GENERATOR","defaults":{"rep":null,"show_old_rois":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"rois (List[RoiFragment]): The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"show_old_rois","label":"show_old_rois","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Show already marked rois. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream ROIs","description":"Asks the user to mark rois on the image, once user deams done, the rois are returned","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","position":{"__typename":"Position","x":494,"y":-81},"typename":"ArkitektNode","parentNode":null,"hash":"26dbfdcb8b5f98b157a960bcf6fe3085acee863931ce7a5e05b48adbbf897824","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":"roi","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"The Omero File","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation to be cropped. Defaults to the one of the ROI.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Crop Image","description":"Crops an Image based on a ROI","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","position":{"__typename":"Position","x":770,"y":-172},"typename":"ArkitektNode","parentNode":null,"hash":"0441be4d576765367c37786d2ef743f33865d4a4f146ad100e0c04d5283edb0e","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"representation","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The predicted images","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Predict Care","description":"Use a care model and some images to generate images","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","position":{"__typename":"Position","x":545,"y":151},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","position":{"__typename":"Position","x":971,"y":200},"typename":"ArkitektNode","parentNode":null,"hash":"79e5ee236b35dc83dd7b972d7cd8445face31a26beff022e6a0c6b1c0be1fa6f","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":"image","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"The analyzed particle table","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of the particles (default: 0)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of the particles (default: None)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"min_circularity","label":"min_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The minimum circularity of the particles (default: 0.0)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_circularity","label":"max_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The maximum circularity of the particles (default: 1.0)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Analyze Particles","description":"Analyzes particles in an image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","position":{"__typename":"Position","x":769,"y":70},"typename":"ArkitektNode","parentNode":null,"hash":"57d45410523b5fc52e33a89c2ae0174666ef7afefe2028df1e16649a750bf0a4","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to be thresholded","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The thresholded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"gaussian_blur","label":"gaussian_blur","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to apply a gaussian blur before thresholding (kernel_size=5)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Otsu Thresholding","description":"Binarizes the image based on a threshold, using Otsu\'s method\\nwith option to guassian blur the image before, images are normalized\\nfor each x,y slice before thresholding.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","position":{"__typename":"Position","x":1237,"y":37},"typename":"ArkitektNode","parentNode":null,"hash":"e4ca5250ef61b70fa987f45c142be459fa1b626df7b539b14153b2fa236784d1","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"table","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"Table to open","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Open Table in Sidebar","description":"Opens the table in an accessible sidebar widget.","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-2aead44b-cb77-4fff-8311-e98f6135dc13arg_0","source":"1","sourceHandle":"return_0","target":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-2aead44b-cb77-4fff-8311-e98f6135dc13return_0-arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4arg_0","source":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","sourceHandle":"return_0","target":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4return_0-arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29arg_0","source":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","sourceHandle":"return_0","target":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29return_0-arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285arg_0","source":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","sourceHandle":"return_0","target":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285return_0-arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7arg_0","source":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","sourceHandle":"return_0","target":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7return_0-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37arg_0","source":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","sourceHandle":"return_0","target":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37return_0-arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88arg_0","source":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","sourceHandle":"return_0","target":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/table","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88return_0-2arg_0","source":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[{"__typename":"Global","toKeys":["arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29.model"],"port":{"__typename":"Port","key":"model","label":"model","identifier":"@mikro/model","scope":"GLOBAL","kind":"STRUCTURE","description":"The model (maps to arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29.model)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_models($search: String, $values: [ID]) {\\n  options: models(name: $search, limit: 20, ids: $values) {\\n    label: name\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of the particles (default: 0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of the particles (default: None) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_circularity"],"port":{"__typename":"Port","key":"min_circularity","label":"min_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The minimum circularity of the particles (default: 0.0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_circularity)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_circularity"],"port":{"__typename":"Port","key":"max_circularity","label":"max_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The maximum circularity of the particles (default: 1.0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_circularity)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],"returns":[]},"restrict":[],"name":"Interactive Analysis","screenshot":null,"createdAt":"2023-10-28T15:10:19.503243+00:00","workspace":{"__typename":"Workspace","id":"24"}}'),u=a.p+"assets/files/test-f768396e8fcb14511bc32fbe99bccdbb.zip",p={title:"Interactive Workflow",sidebar_label:"Interactive Workflow",sidebar_position:2},g=void 0,h={unversionedId:"showcases/paper/interactive_workflow",id:"showcases/paper/interactive_workflow",title:"Interactive Workflow",description:"The following workflow and online showcase is an example of how arkitekt enables an interactive workflow, spanning multiple bioimage apps and deep learning enabled",source:"@site/docs/showcases/paper/interactive_workflow.mdx",sourceDirName:"showcases/paper",slug:"/showcases/paper/interactive_workflow",permalink:"/docs/showcases/paper/interactive_workflow",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/showcases/paper/interactive_workflow.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Interactive Workflow",sidebar_label:"Interactive Workflow",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/showcases/paper/intro"},next:{title:"Streaming Analysis",permalink:"/docs/showcases/paper/streaming_workflow"}},f={},y=[{value:"Why?",id:"why",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Napari",id:"napari",level:4},{value:"Kare Denoising",id:"kare-denoising",level:4},{value:"Fiji",id:"fiji",level:4},{value:"MikroJ",id:"mikroj",level:4},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Model Preparation",id:"model-preparation",level:2},{value:"The Workflow",id:"the-workflow",level:2},{value:"Running the Workflow",id:"running-the-workflow",level:2}],k={toc:y},b="wrapper";function w(e){let{components:t,...l}=e;return(0,r.kt)(b,(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following workflow and online showcase is an example of how arkitekt enables an interactive workflow, spanning multiple bioimage apps and deep learning enabled\ndenoising. With this workflow we would like to demonstrate that by leveraging a tight and timely interaction between the apps, users can get immediate\nfeedback on the results of their actions."),(0,r.kt)("p",null,"Here we set out to use Arkitekt to build a workflow that allows users to interactively denoise and segment cells in regions of interest in a 3D image.\nThe workflow is composed of three apps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Napari")," a python based 3D volume viewer that will allow the users to interactively annotate regions of interest in an image, while eeasily exploring\nthe 3D volume, as well as the app that will be used to display the results of the workflow.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Care Denoising"),", a deep learning based denoising app that will be used to denoise the regions of interest selected by the user in Napari.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fiji"),' (ImageJ), and its "Analyze Particles" plugin, that will be used to segment the denoised regions of interest.'))),(0,r.kt)("div",{className:"mt-2 p-6"},(0,r.kt)(i.Z,{img:o(),mdxType:"Image"}),(0,r.kt)("div",{className:"text-gray-400 mb-2"},(0,r.kt)("small",null,"The interactive workflow with loopback analytical insight "))),(0,r.kt)("h2",{id:"why"},"Why?"),(0,r.kt)("p",null,"The main motivation for showcasing this workflow, is the core believe that interactive workflows are a key component of the current and future bioimage analysis\nlandscape. We believe that the ability to interactively explore and annotate data, and to get immediate feedback on the results of the analysis, is a key necessity\nfor the current analysis where human insight is determing where we look for when analysis our data. And while automation will continue to grow in importance,\nwe believe that the human in the loop will, continue to play a key component of the analtical process."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Well lets jump right in and see how we can run this workflow. You could of course build this workflow from scratch, but we have already done that for you, and\nyou can easily import it into your arkitekt instance. To do so, please ",(0,r.kt)("a",{parentName:"p",href:"/docs/apps/"},"connect"),' this website to your arkitekt instance and then simply click on the "import" button below,\nwhich will import it directly into your arkitekt instance.'),(0,r.kt)("p",null,"If you havent installed any of the apps yet, your Arkitekt instance will tell you that you are missing some apps implementing the nodes. So of course make sure you\ninstall the apps that are missing. In this case you will need to install the following apps:"),(0,r.kt)("h4",{id:"napari"},(0,r.kt)("a",{parentName:"h4",href:"https://napari.org/stable/"},"Napari")),(0,r.kt)("p",null,"With the mikro-napari plugin, which you can install easily via the napari plugin manager.\nor via the command line with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install mikro-napari")),(0,r.kt)("h4",{id:"kare-denoising"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/jhnnsrs/kare"},"Kare Denoising")),(0,r.kt)("p",null,"An Arkitekt plugin that allows you to denoise images using deep learning. You can install it through the PluginStore or when connected, by clicking on the button below."),(0,r.kt)(d.I,{repo:"kare",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,r.kt)("h4",{id:"fiji"},(0,r.kt)("a",{parentName:"h4",href:"https://imagej.net/Fiji"},"Fiji")),(0,r.kt)("p",null,'A ImageJ instance with the "Analyze Particles" plugin installed (comes preinstalled with Fiji)'),(0,r.kt)("h4",{id:"mikroj"},(0,r.kt)("a",{parentName:"h4",href:"https://github.com/jhnnsrs/mikroj"},"MikroJ")),(0,r.kt)("p",null,"The Arkitekt enabled FIJI wrapper app that allows your Fiji instance to be connected to Arkitekt. Please install\nthe latest version of MikroJ."),(0,r.kt)("h2",{id:"data-preparation"},"Data Preparation"),(0,r.kt)("p",null,"This workflow was designed to work with the ",(0,r.kt)("a",{parentName:"p",href:"https://publications.mpi-cbg.de/publications-sites/7207/"},"Tribolium")," Dataset. However the examplary data used in this\nworkflow is only on noisy stack of the Tribolium dataset, which you can download ",(0,r.kt)("a",{target:"_blank",href:a(91574).Z},"here"),"."),(0,r.kt)("p",null,"The Image Data was converted through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Convert Omero")," Node provided by"),(0,r.kt)(d.I,{repo:"omero",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,r.kt)("h2",{id:"model-preparation"},"Model Preparation"),(0,r.kt)("p",null,"For this workflow you can either use a pretrained model, or train your own model. If you want to train your own model, you can follow the instructions in the\nDeep Learning Training Tutorial to train your own model. If you want to use a pretrained model, you can upload the pretrained model directly from the link below."),(0,r.kt)(m.x,{url:u,name:"Tribolium Model",kind:"TENSORFLOW",mdxType:"UploadModelButton"}),(0,r.kt)("p",null,"This model was trained on ",(0,r.kt)("a",{target:"_blank",href:a(15094).Z},"this dataset here"),"."),(0,r.kt)("h2",{id:"the-workflow"},"The Workflow"),(0,r.kt)("p",null,"Once you have installed all the apps, you can simply import the workflow by connecting your arkitekt instance and clicking on the button below."),(0,r.kt)(s.n,{flow:c,mdxType:"DisplayWorkflow"}),(0,r.kt)("div",{className:"text-gray-400 mb-2"},(0,r.kt)("small",null,"Once connected this pane will also give you an overview over the apps that still need to be installed, nodes in green have been installed, nodes in yellow still lack an implementation. Of course feel free to explore this graph more interactively in your orkestrator interface")),(0,r.kt)("h2",{id:"running-the-workflow"},"Running the Workflow"),(0,r.kt)("p",null,"For the execution of the Workflow you will need to start the following apps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Napari"),(0,r.kt)("li",{parentName:"ul"},"Kare Denoising (through deployment of the kare plugin)"),(0,r.kt)("li",{parentName:"ul"},"Fiji (through MikroJ)")),(0,r.kt)("p",null,"Once you have started all the apps, you can run the workflow directly from an image uploaded to your arkitekt instance. To do so, simply\nstart the workflow and select the image the converted you want to run the workflow on."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Test Environment"),(0,r.kt)("div",null,"This workflow was tested on the following environments:",(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Analysis Computer\n    - Intel Core i9-8700K CPU @ 3.70GHz\n    - Ubuntu 22.04\n    - Arkitekt Paper Channel\n    - Segmentor Plugin 0.3.1\n    - Stdlib Plugin 0.3.6\n\nAnalysis Computer\n    - Intel Core i9-8700K CPU @ 3.70GHz\n    - Windows 10\n    - Arkitekt Paper Channel\n    - Segmentor Plugin 0.3.1\n    - Stdlib Plugin 0.3.6\n")))))}w.isMDXComponent=!0},91574:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/noisy_stack-6ff2a5732916fc1a6ddebe87490f875c.tif"},15094:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/training-de8069a9441ffc363f8f3ee381f7c139.zip"}}]);