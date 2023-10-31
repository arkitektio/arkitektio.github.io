(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8248],{60253:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/smart.c0844d9.640.png 640w,"+n.p+"assets/ideal-img/smart.49c228a.1320.png 1320w,"+n.p+"assets/ideal-img/smart.29fe11f.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/smart.c0844d9.640.png",width:640,height:736},{path:n.p+"assets/ideal-img/smart.49c228a.1320.png",width:1320,height:1517},{path:n.p+"assets/ideal-img/smart.29fe11f.2000.png",width:2e3,height:2299}],src:n.p+"assets/ideal-img/smart.c0844d9.640.png",toString:function(){return n.p+"assets/ideal-img/smart.c0844d9.640.png"},placeholder:void 0,width:640,height:736},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAInAAACJwG+ElQIAAAByUlEQVQYlWOwXjGV4djJv4wMJm2M7suPM177/59h2rLPjAwMuxkYGE4yTOj6zliS85mBYfnRuwxLzj1hOH/1itfRkwd5Nn99zjBvxVeGjoYHCrMmPzOeO+sPw6QJv5kYGqvmMiy6/tp67a1n09d++lMy/+d3ubVH/8pv3fI/c/OW/xX79v3XunLzPwMYRFnWrspOmfVu3Zf/j+bfu9M6d/vz5vrYdfebk1Z8mVxzobUufBUDgwQDF0PHnMPTq7u23Cro2HBy4tmrnTN3v2yOUKo/nqSRdb8/d2tppX0FA8P///8ZDvz/P3H2+WcXogJ79/ccv7Bk6r6Xk4PEyne5c4RfbUjYUpigWcHAkOM7mWHW4fsdHQuOHimqWrl1+pXrrbP2Pa+tClq7qcBj9on+ygtZVaGrIW4MUM1ryI6btn3Ln/9rln1447Nwy6vg4oA5a+uiJu/uK9ybXOLcBlEYqlNclZs0c/2mH/+XLHj6xHXRlpe+Vamrltamzd00u+t0fH/JYojCvKRZnnUdWzLXf/6ftPD+PfOZG++ZJ+q3J8XptGTXxm2zjFSpgXjm////jP///2da+/Y/06xjJxjaLx4FiTFBMUiOAQBX/e+wg0vZgAAAAABJRU5ErkJggg=="}},33850:(e,t,n)=>{"use strict";n(61872),n(97120),n(67294),n(30210)},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>u});var a=n(37887),l=n(69819),i=n(31230),r=n(67294);const s=i.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,o=i.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",u=(0,l.Zh)((e=>{let{branch:t,repo:n,user:i}=e;const{client:u}=(0,l.AA)(),c=`${i}/${n}:${t}`,{data:m,refetch:p}=(0,a.a)(o,{client:u,variables:{tag:c},pollInterval:3e3});return r.createElement(r.Fragment,null,m?.githubRepo?r.createElement("button",{className:d+"bg-green-300"}," \u2705 ",c):r.createElement("button",{onClick:async()=>{try{const{data:e}=await u.mutate({mutation:s,variables:{branch:t,repo:n,user:i}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",c))}),r.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},88545:(e,t,n)=>{"use strict";n.d(t,{x:()=>o});var a=n(97120),l=n(31230),i=n(67294);const r=l.ZP`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`,s="my-2 p-2 rounded-md text-black text-center w-60 ",o=(0,a.nk)((e=>{let{url:t,name:n,kind:l}=e;const{client:o}=(0,a.rM)();return i.createElement(i.Fragment,null,i.createElement("button",{onClick:async()=>{console.log(t);try{const e=await fetch(t);if(!e.ok)throw new Error("Failed fetching file from Documentation");const a=await e.blob(),i=new File([a],"model.zip",{type:a.type}),{data:s}=await o.mutate({mutation:r,variables:{name:n,kind:l,data:i}});console.log(s)}catch(e){console.log(e)}},className:s+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",n))}),i.createElement("div",{className:s+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},21262:(e,t,n)=>{"use strict";n.d(t,{n:()=>rt});var a=n(67294),l=n(98268),i=n(83117);n(86180);const r=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:t,nodeTypes:n,nodes:s,edges:o,children:d,...u}=e;return a.createElement(l.tV,null,a.createElement(l.x$,(0,i.Z)({nodes:s,edges:o,onInit:r,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},u),d))};function o(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,u=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function c(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(u,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const m=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...l}=e;return{type:a,id:t,position:n,data:{__typename:a,...l},dragHandle:".custom-drag-handle",parentNode:l.parentNode?l.parentNode:void 0}}})).filter(o)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:l,targetHandle:i,__typename:r,...s}=e;return{id:t,type:r,source:n,sourceHandle:a,target:l,targetHandle:i,data:{__typename:r,...s}}}})).filter(o)||[],g=a.createContext({}),h=()=>(0,a.useContext)(g);var f=n(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),b=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const k=f.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,_=(f.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${k}
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
`,w=f.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${k}
  ${_}
  ${v}
`,$=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${w}
`,L=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${w}
`,T=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${$}
  ${L}
  ${k}
`,W=f.Ps`
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
  ${T}
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
  ${T}
  ${W}
`,N=f.Ps`
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
  ${T}
  ${W}
`,E=f.Ps`
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
  ${T}
  ${W}
`,S=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,A=f.Ps`
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
`,x=f.Ps`
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
`,I=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,C=f.Ps`
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
  ${R}
  ${I}
  ${C}
`,O=f.Ps`
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
  ${I}
  ${D}
`,G=f.Ps`
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
  ${O}
`,B=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,U=f.Ps`
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
  ${G}
  ${B}
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
  ${G}
  ${B}
`,F=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${G}
`,z=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${G}
`,j=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${G}
`,M=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${G}
`,H=f.Ps`
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
  ${G}
  ${B}
`,K=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${G}
`,X=f.Ps`
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
  ${U}
  ${q}
  ${F}
  ${z}
  ${j}
  ${M}
  ${H}
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
  ${Z}
`,V=f.Ps`
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
  ${V}
`,Q=f.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${V}
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
  ${O}
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
  ${X}
  ${ee}
  ${te}
  ${O}
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
`,le=f.Ps`
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
`,re=f.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${ie}
`,se=f.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${ne}
`,oe=(f.Ps`
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
  ${O}
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
`,ue=f.Ps`
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
`,me=f.Ps`
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
  ${se}
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
  ${se}
`;f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${se}
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
  ${N}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${E}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${x}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${A}
`;f.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${le}
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
  ${le}
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
  ${se}
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
  ${re}
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
  ${re}
`;f.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${re}
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
  ${ue}
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
  ${me}
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
  ${re}
`;f.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${oe}
`;f.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${oe}
`;f.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${oe}
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
`;const he=e=>{const{}=h(),{id:t,sourcePosition:n,targetPosition:i,sourceX:r,sourceY:s,targetX:o,targetY:d,style:u,markerStart:c,markerEnd:m,data:p}=e,[g,f,y]=(0,l.OW)({sourcePosition:n,targetPosition:i,sourceX:r,sourceY:s,targetX:o,targetY:d});return a.createElement(a.Fragment,null,a.createElement("path",{id:t,style:u,className:"react-flow__edge-path",d:g}),a.createElement(l.XQ,null,a.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},p?.stream.map(((e,t)=>a.createElement("span",{className:"text-xs",key:t},(e?.kind==b.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var fe=n(1706);const ye=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),be=e=>{let{id:t,children:n,expandedHeight:l=200,expandedWidth:i=400,collapsedWidth:r=170,collapsedHeight:s=70}=e;const[o,d]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:r,height:s});return a.createElement(fe.Resizable,{key:t,height:o.height,width:o.width,onResize:(e,t)=>{let{size:n,handle:a}=t;d((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},a.createElement(ye.Provider,{value:{...o,toggleExpanded:()=>{d((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?r:i,height:e.isExpanded?s:l})))}}},a.createElement("div",{style:{width:o.width+"px",height:o.height+"px"},className:"flex flex-col"},n)))},ke=e=>t=>a.createElement(be,{id:t.id},a.createElement(e,t)),_e={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},ve=e=>{let{children:t,id:n,color:l="white"}=e;const[i,r]=a.useState(!1);return a.createElement(a.Fragment,null,a.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${_e[l]}`},t))};var we=n(55770),$e=n(52203),Le=n(90512),Te=n(57851);function We(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,Te.m)((0,Le.W)(t))}const Pe=$e.fC,Ne=$e.xz,Ee=a.forwardRef(((e,t)=>{let{className:n,align:l="center",sideOffset:r=4,...s}=e;return a.createElement($e.h_,null,a.createElement($e.VY,(0,i.Z)({ref:t,align:l,sideOffset:r,className:We("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n)},s)))}));Ee.displayName=$e.VY.displayName;const Se=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Ae=()=>a.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),xe=(e,t,n)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,n)))),Re=e=>{const{data:t,error:n,loading:l}=(0,we.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return a.createElement(a.Fragment,null,n?a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(Se,null),a.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.name," ")):a.createElement("div",{className:"flex flex-row gap-2"},a.createElement(Ae,null),a.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")))},Ie=e=>{const{flow:t}=h(),n=e.data.defaults&&Object.keys(e.data.defaults).filter((n=>e.data.defaults[n]&&null!=e.data.defaults[n]&&0!=e.data.defaults[n]||xe(t,e.id,n)))||[];return a.createElement(Pe,null,a.createElement(Ne,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full "},a.createElement(we.Z6,{fallback:a.createElement(a.Fragment,null," ",e.data?.name)},a.createElement(Re,{hash:e.data.hash,name:e.data.name}))),a.createElement(Ee,{className:"text-xs bg-back-800 my-auto  "}," ",e.data?.description,n&&n.length>0&&a.createElement("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3"},a.createElement("div",{className:"font-semibold text-md mb-2"},"Constants "),a.createElement("div",{className:"flex flex-row gap-2 text-white"},a.createElement("div",{className:"flex grid grid-cols-2 gap-2"},n.map((n=>{const l=xe(t,e.id,n);return a.createElement(a.Fragment,null,a.createElement("div",{className:" my-auto"}," ",n," "),l?a.createElement("div",{className:"text-primary-300"}," ",a.createElement("div",{className:"font-bold inline"},"Global "),l.port.key," "):a.createElement("div",{className:"my-auto"}," ",e.data.defaults[n]," "))})))))))},Ce=ke((e=>{const{isExpanded:t,toggleExpanded:n}=(0,a.useContext)(ye);return a.createElement(ve,{id:e.id},e.data.instream.map(((e,t)=>a.createElement(l.HH,{type:"target",position:l.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>a.createElement(l.HH,{type:"source",position:l.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),a.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden "},a.createElement(Ie,e)))})),De=ke((e=>{let{data:{outstream:t,instream:n},id:i}=e;const[r,s]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(ve,{color:"blue",id:i},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!o)},"Inputs"," "))),t.map(((e,t)=>a.createElement(l.HH,{type:"source",position:l.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+i}))))}));var Oe=n(63750);const Ge=ke((e=>{let{data:{constream:t},id:n}=e;const[l,i]=(0,a.useState)(!1),[r,s]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(ve,{color:"green",id:n},!r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"flex"},t?.map(((e,t)=>a.createElement(a.Fragment,null,a.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n},a.createElement("div",{className:"flex justify-between"},a.createElement("button",{type:"button",onClick:()=>alert("implement")},a.createElement(Oe.yvY,null))))))))),a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>s(!r)},"Constants"," "),a.createElement("p",{className:"text-gray-700 text-base"}))))})),Be=ke((e=>{let{data:{outstream:t,instream:n},id:i}=e;const[r,s]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!0);return a.createElement(a.Fragment,null,a.createElement(ve,{color:"red",id:i},a.createElement("div",{className:"px-2 py-2"},a.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!o)},"Outputs"),a.createElement("p",{className:"text-gray-700 text-base"},a.createElement(a.Fragment,null,n[0]?.map((e=>e?.kind)).join(" | "),a.createElement("br",null)),!o&&a.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>s(!0)},"Add Documentation")))),n.map(((e,t)=>a.createElement(l.HH,{type:"target",position:l.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),Ue="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",qe={ArkitektNode:Ce,ArkitektFilterNode:Ce,LocalNode:Ce,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:i,implementation:r,defaults:s},id:o}=e;const d=(0,l.Bn)();return(0,a.useEffect)((()=>{console.log("Update node internals",o,r),d(o)}),[t,n,i]),a.createElement(a.Fragment,null,a.createElement("div",{className:"custom-drag-handle text-xs "},r&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r&&[y.Gate].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})),r&&[y.Split].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(r)&&a.createElement("div",{className:Ue},r," ",s?.number&&a.createElement("b",{className:"font-bold"},s.number)),r&&[y.Ensure].includes(r)&&a.createElement("div",{className:Ue},a.createElement("h1",null,"!")),r&&[y.ToList].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),a.createElement("text",null,r)),r&&[y.Omit].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},r)),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),r&&[y.If].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"If")),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),r&&[y.And].includes(r)&&a.createElement("svg",{height:"40",width:"40"},a.createElement("text",null,a.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"And")),a.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),i?.map(((e,t,n)=>a.createElement(l.HH,{type:"target",position:l.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),n?.map(((e,t,n)=>a.createElement(l.HH,{key:t,type:"target",position:l.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,n)=>a.createElement(l.HH,{key:t,type:"source",position:l.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}})))))},ArgNode:De,ReturnNode:Be,KwargNode:Ge,GraphNode:()=>null},Fe={LabeledEdge:he,FancyEdge:he},ze=e=>{let{flow:t}=e;const[n,i,r]=(0,l.Rr)(m(t.graph?.nodes)),[o,d,u]=(0,l.ll)(p(t.graph?.edges));return a.createElement(g.Provider,{value:{flow:t}},a.createElement(s,{nodes:n,edges:o,onNodesChange:r,onEdgesChange:u,elementsSelectable:!0,nodeTypes:qe,edgeTypes:Fe,fitView:!0,attributionPosition:"bottom-right"}))};var je=n(30210),Me=n(39903);const He=e=>{const{user:t}=(0,je.gX)(),{fakts:n}=(0,Me.sT)();return a.createElement("div",{className:"relative "+e.className},e.children,!t||!n&&a.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var Ke=n(68947),Xe=n(50319),Ze=n(12854),Ye=n(79592);const Ve=Ze.fC,Je=(Ze.xz,Ze.h_),Qe=(Ze.x8,a.forwardRef(((e,t)=>{let{className:n,...l}=e;return a.createElement(Ze.aV,(0,i.Z)({ref:t,className:We("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n)},l))})));Qe.displayName=Ze.aV.displayName;const et=a.forwardRef(((e,t)=>{let{className:n,children:l,...r}=e;return a.createElement(Je,null,a.createElement(Qe,null),a.createElement(Ze.VY,(0,i.Z)({ref:t,className:We("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",n)},r),l,a.createElement(Ze.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},a.createElement(Ye.Z,{className:"h-4 w-4"}),a.createElement("span",{className:"sr-only"},"Close"))))}));et.displayName=Ze.VY.displayName;const tt=e=>{let{className:t,...n}=e;return a.createElement("div",(0,i.Z)({className:We("flex flex-col space-y-1.5 text-center sm:text-left",t)},n))};tt.displayName="DialogHeader";const nt=a.forwardRef(((e,t)=>{let{className:n,...l}=e;return a.createElement(Ze.Dx,(0,i.Z)({ref:t,className:We("text-lg font-semibold leading-none tracking-tight",n)},l))}));nt.displayName=Ze.Dx.displayName;const at=a.forwardRef(((e,t)=>{let{className:n,...l}=e;return a.createElement(Ze.dk,(0,i.Z)({ref:t,className:We("text-sm text-muted-foreground",n)},l))}));at.displayName=Ze.dk.displayName;const lt=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,it=e=>{let{flow:t,blockImport:n}=e;const{client:l}=(0,Ke.dB)(),[i,r]=(0,Xe.D)(lt,{client:l}),[s,d]=(0,a.useState)(!1),u=async()=>{try{const n=(e=m(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:a,parentNode:l,data:{outstream:i,constream:r,instream:s,...d}}=e;return{outstream:i?.map((e=>e?e.filter(o).map(c):[]))||[[]],constream:r?.map((e=>e?e.filter(o).map(c):[]))||[[]],instream:s?.map((e=>e?e.filter(o).map(c):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:a||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:l,interface:d.interface}}})).filter(o)||[]||[]),a=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:a,target:l,targetHandle:i,type:r,data:s}=e;return{id:t,typename:r||"Fake type",source:n,sourceHandle:a||"returns",target:l,targetHandle:i||"args",stream:s?.stream.filter(o).map(c)||[]}}})).filter(o)||[])(p(t.graph.edges));let l={nodes:n.filter(o).map(c),edges:a.filter(o).map(c),globals:t.graph.globals.filter(o).map(c),args:t.graph.args.filter(o).map(c),returns:t.graph.returns.filter(o).map(c)};await i({variables:{name:t.name,graph:l}});d(!0)}catch(n){alert(n.message)}var e};return a.createElement(a.Fragment,null,a.createElement(Ve,{open:s,onOpenChange:d},a.createElement(et,null,a.createElement(tt,null,a.createElement(nt,null,"Succesfully imported workflow"),a.createElement(at,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),a.createElement("button",{onClick:()=>u(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},rt=e=>a.createElement("div",{className:"border border-1 rounded border-gray-800"},a.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},a.createElement(ze,{flow:e.flow})),a.createElement(He,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},a.createElement(Ke.Ot,null,a.createElement(it,{flow:e.flow,blockImport:e.blockImport}))))},33346:(e,t,n)=>{"use strict";n.d(t,{L:()=>l});var a=n(67294);const l=e=>a.createElement(a.Fragment,null,"CONNECTED")},61313:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>f});var a=n(83117),l=(n(67294),n(3905)),i=n(15944),r=n(60253),s=n.n(r),o=(n(33346),n(21262)),d=n(71698);n(88545),n(33850);const u=JSON.parse('{"__typename":"Flow","id":"5","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":2030,"y":194},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","position":{"__typename":"Position","x":257,"y":-69},"typename":"ArkitektNode","parentNode":null,"hash":"db259ac8c61a25c28459670ce0dc432fd5ece046f366037d8a5f3992a91f4a57","kind":"FUNCTION","defaults":{"channel":null,"position":null,"objective":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channel","label":"channel","identifier":"@mikro/channel","scope":"GLOBAL","kind":"STRUCTURE","description":"The channel to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchChannels($search: String, $values: [ID]) {\\n  options: channels(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire 2D","description":"Acquire a 2D image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","position":{"__typename":"Position","x":1437,"y":172},"typename":"ArkitektNode","parentNode":null,"hash":"1da09dd41ff6c5496b3cc4a56ac94181ded98473f60a63065b0a35c21caafe41","kind":"FUNCTION","defaults":{"z_step":0.3,"channel":null,"z_steps":2,"position":null,"objective":null,"crop_physical_width":null,"crop_physical_height":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_height","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_width","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channel","label":"channel","identifier":"@mikro/channel","scope":"GLOBAL","kind":"STRUCTURE","description":"The channel to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchChannels($search: String, $values: [ID]) {\\n  options: channels(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_height","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_width","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire Stack","description":"Acquire a 3D image stack, allowing to move to a new Position, setting \\nan Objective, and an active channel.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","position":{"__typename":"Position","x":567,"y":-3},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","position":{"__typename":"Position","x":394,"y":252},"typename":"ArkitektNode","parentNode":null,"hash":"fef37534407806c68cb8d452739c94dbd09cf1d15b26197d70a1731be561d683","kind":"FUNCTION","defaults":{"c":0,"t":0,"z":0,"rep":null,"limit":null,"distance":null,"max_size":null,"min_size":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image to label outliers for","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The rois for the clusters","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/roi","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"c","label":"c","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The channel to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"t","label":"t","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The timepoint to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z","label":"z","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The z-slice to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Mark Clusters","description":"Takes a masked image and marks rois based on dense clusters of a certain size \\nand density of their center of mass","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","position":{"__typename":"Position","x":625,"y":282},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of roi","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/roi","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe rois for the clusters","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","position":{"__typename":"Position","x":868,"y":416},"typename":"ArkitektNode","parentNode":null,"hash":"4ad8b904209cb3f29528a2855b452b1ea62acaa4c64f8dc4a2523407405d3348","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":"roi","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"The roi to measure","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Rectangular Roi to Dimensions","description":"Measures the size of a Rectangular Roi in microns\\n(only works for Rectangular ROIS)","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","position":{"__typename":"Position","x":809,"y":84},"typename":"ArkitektNode","parentNode":null,"hash":"eaa2b35a454c9b3209797c68842a1057c62dbff001feadb49f5fed3b646c8e7c","kind":"FUNCTION","defaults":{"roi":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":null,"identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Roi to Position","description":"Transforms a ROI into a Position on the governing stage","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","position":{"__typename":"Position","x":1109,"y":419},"typename":"ReactiveNode","parentNode":null,"implementation":"ADD","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ReactiveNode","id":"reactive-64242809-5547-4154-99bf-e895dbd7a991","position":{"__typename":"Position","x":1193,"y":265},"typename":"ReactiveNode","parentNode":null,"implementation":"ZIP","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ReactiveNode","id":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","position":{"__typename":"Position","x":1682,"y":238},"typename":"ReactiveNode","parentNode":null,"implementation":"BUFFER_COMPLETE","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7arg_0","source":"1","sourceHandle":"return_0","target":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7return_0-arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fearg_0","source":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","sourceHandle":"return_0","target":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fereturn_0-arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0arg_0","source":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","sourceHandle":"return_0","target":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0return_0-reactive-a43ba94d-4129-4802-9052-0047d7b48a12arg_0","source":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","sourceHandle":"return_0","target":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-a43ba94d-4129-4802-9052-0047d7b48a12return_0-arkid-983b6436-a397-4427-ac20-06d1a2447cddarg_0","source":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","sourceHandle":"return_0","target":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"roi","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-a43ba94d-4129-4802-9052-0047d7b48a12return_0-arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3arg_0","source":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","sourceHandle":"return_0","target":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"roi","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3return_0-reactive-7b559888-d3f7-4381-9532-dcab3b898a68arg_0","source":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","sourceHandle":"return_0","target":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null},{"__typename":"StreamItem","key":"return1","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-983b6436-a397-4427-ac20-06d1a2447cddreturn_0-reactive-64242809-5547-4154-99bf-e895dbd7a991arg_0","source":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","sourceHandle":"return_0","target":"reactive-64242809-5547-4154-99bf-e895dbd7a991","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-7b559888-d3f7-4381-9532-dcab3b898a68return_0-reactive-64242809-5547-4154-99bf-e895dbd7a991arg_1","source":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","sourceHandle":"return_0","target":"reactive-64242809-5547-4154-99bf-e895dbd7a991","targetHandle":"arg_1","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null},{"__typename":"StreamItem","key":"return1","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-64242809-5547-4154-99bf-e895dbd7a991return_0-arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40arg_0","source":"reactive-64242809-5547-4154-99bf-e895dbd7a991","sourceHandle":"return_0","target":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"position","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":true,"child":null,"variants":null},{"__typename":"StreamItem","key":"crop_physical_height","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":true,"child":null,"variants":null},{"__typename":"StreamItem","key":"crop_physical_width","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":true,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40return_0-reactive-e3907290-8f82-49ce-8046-d4f8b5056356arg_0","source":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","sourceHandle":"return_0","target":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-e3907290-8f82-49ce-8046-d4f8b5056356return_0-2arg_0","source":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"buffer","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position"],"port":{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.distance"],"port":{"__typename":"Port","key":"distance","label":"distance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The distance between points in a cluster (eps in DBSCAN) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of a cluster (min_samples in DBSCAN) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit"],"port":{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to  Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number"],"port":{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to Add)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to Acquire Stack)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps"],"port":{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to Acquire Stack)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step"],"port":{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to  Acquire Stack)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[],"returns":[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]},"restrict":[],"name":"shaky-pink-tiger","screenshot":null,"createdAt":"2023-10-31T13:48:13.898239+00:00","workspace":{"__typename":"Workspace","id":"3"}}'),c=JSON.parse('{"__typename":"Flow","id":"8","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":2030,"y":194},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","position":{"__typename":"Position","x":1284,"y":87},"typename":"ArkitektNode","parentNode":null,"hash":"3557c04acfe85b887752a96ab40ed44f12ec2b42f17d30a1e420a77f1f9b0086","kind":"GENERATOR","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire Clusters","description":"No Description","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","position":{"__typename":"Position","x":482,"y":98},"typename":"ArkitektNode","parentNode":null,"hash":"16145ad360ed5299339345dbff246eba3e3e0e294d6cea842a85945e6f1bb1cb","kind":"FUNCTION","defaults":{},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/position","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Retrieve Positions","description":"retrieves positions within a stage context established\\nright here","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","position":{"__typename":"Position","x":900,"y":132},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of position","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/position","kind":"STRUCTURE","scope":"GLOBAL","nullable":true,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofnull","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-703a790c-030f-4b7f-858e-854aeef0a603arg_0","source":"1","sourceHandle":"return_0","target":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-703a790c-030f-4b7f-858e-854aeef0a603return_0-reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486arg_0","source":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","sourceHandle":"return_0","target":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486return_0-arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8arg_0","source":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","sourceHandle":"return_0","target":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"position","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":true,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8return_0-2arg_0","source":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"buffer","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.limit"],"port":{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.limit)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.number"],"port":{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.number)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_steps"],"port":{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_steps)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_step"],"port":{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_step)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.distance"],"port":{"__typename":"Port","key":"distance","label":"distance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The distance between points in a cluster (eps in DBSCAN) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.distance) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.distance)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of a cluster (min_samples in DBSCAN) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.min_size) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.min_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iteration_sleep"],"port":{"__typename":"Port","key":"iteration_sleep","label":"Iteration Sleep (ms)","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"How long should the node sleep between iterations (maps to reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iteration_sleep)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iterations"],"port":{"__typename":"Port","key":"iterations","label":"Iterations","identifier":null,"scope":"GLOBAL","kind":"INT","description":"How many times should the node go through the list (maps to reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iterations)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}}],"args":[],"returns":[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]},"restrict":[],"name":"silly-persimmon-gecko","screenshot":null,"createdAt":"2023-10-31T13:58:10.213381+00:00","workspace":{"__typename":"Workspace","id":"2"}}'),m={title:"Smart Microscopy",sidebar_label:"Smart Microscopy",sidebar_position:4},p=void 0,g={unversionedId:"showcases/paper/smart_microscopy_workflow",id:"showcases/paper/smart_microscopy_workflow",title:"Smart Microscopy",description:"Arkitekt was designed for the increasingly complex real-time microscopy workflows of today.",source:"@site/docs/showcases/paper/smart_microscopy_workflow.mdx",sourceDirName:"showcases/paper",slug:"/showcases/paper/smart_microscopy_workflow",permalink:"/docs/showcases/paper/smart_microscopy_workflow",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/showcases/paper/smart_microscopy_workflow.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Smart Microscopy",sidebar_label:"Smart Microscopy",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Streaming Analysis",permalink:"/docs/showcases/paper/streaming_workflow"},next:{title:"Troubleshooting",permalink:"/docs/category/troubleshooting"}},h={},f=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Acquisition Computer",id:"acquisition-computer",level:4},{value:"Installing the Workflows",id:"installing-the-workflows",level:2},{value:"Acquire Clusters Workflow",id:"acquire-clusters-workflow",level:3},{value:"Deploying the Workflow",id:"deploying-the-workflow",level:3},{value:"Multi Dimensional Workflow",id:"multi-dimensional-workflow",level:3}],y={toc:f},b="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Arkitekt was designed for the increasingly complex real-time microscopy workflows of today.\nTo illustrate Arkitekt readiness for ",(0,l.kt)("inlineCode",{parentName:"p"},"Smart Microscopy"),", we deviced this simply no-code example\nof a ",(0,l.kt)("inlineCode",{parentName:"p"},"Smart Microscopy")," workflow to perform the 3D live monitoring of cell\nclusters with a 40X objective, while scanning a large field of view with a 20X objective."),(0,l.kt)("p",null,"In this workflow, the Micro-Manager open-source software (Edelstein et al. 2014) is setup for a\nmultidimensional acquisition. The user then interactively sets up a grid of positions on large sample\narea (2.61mm x 2.61mm, corresponding to 4","*","4 stage positions) containing living fluorescent\ncells."),(0,l.kt)("p",null,"During the workflow defined positions are then acquired at 20X magnification every 30 minutes for 24 hours.\nFor every acquired 20X magnification image, nuclei are then automatically segmented on a remote\ncomputer using the Stardist (Weigert et al. 2020) algorithm, and cell clusters are computed with the help of\nDBSCAN (Ester et al. 1996).\nWhen one or more of such identified clusters are detected, the ROIs central coordinates and\ndimensions are translated back to stage coordinates and sent back to the microscope. 3D stacks\nof these positions (25 planes, 0.5\xb5m step size) are then collected at higher magnification\n(40X) on a well-adjusted cameroa ROI fitting the cell clusters size. After all the positive events are\ndetected, acquired in 3D high-resolution and displayed on the web-interface, the next image\nis acquired at 20X magnification"),(0,l.kt)("div",{className:"mt-2"},(0,l.kt)(i.Z,{img:s(),mdxType:"Image"}),(0,l.kt)("div",{className:"text-gray-400 mb-2"},(0,l.kt)("small",null,"The Smart Microscopy Workflow"))),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("admonition",{title:"Please read",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"We ",(0,l.kt)("strong",{parentName:"p"},"strongly")," suggest to go through the ",(0,l.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps"},"Getting Started")," guide before attempting to run this workflow.\nIt will guide you through the installation of the Arkitekt platform and the setup of your first workflow, as well as how to install plugins\nand apps.")),(0,l.kt)("p",null,"This workflow is designed to run on a microscope computer running Windows 10 as well as on a remote analysis computer\nthat will power the Arkitekt platform and the image analysis. To enable GPU acceleration for the Stardist\nsegmentation, the analysis computer needs to have access to a CUDA 11 enabled GPU (tested on Nvidia GeforceRTX 2080Ti).\nThe microscope computer will need to be connected to the same network as the remote computer."),(0,l.kt)("h4",{id:"acquisition-computer"},"Acquisition Computer"),(0,l.kt)("p",null,"Additionally to run this workflow you will need to have the following installed on your microscope computer:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://micro-manager.org/"},"Micro-Manager")," (version 2.0.1 2023.05.23 (later versions might work as well))"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/mikro-manager"},"MikroManager")," (version 0.0.1) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/mikro-manager/releases/latest"},"Download here"))),(0,l.kt)("p",null,"As well as the following plugins installed on your Arkitekt computer:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reaktor Plugin (>=0.0.3) from the repository ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/reaktor"},"https://github.com/jhnnsrs/reaktor")),(0,l.kt)("li",{parentName:"ul"},"Stdlib Plugin (>=version 0.3.10) from the repository ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/stdlib"},"https://github.com/jhnnsrs/stdlib")),(0,l.kt)("li",{parentName:"ul"},"Segmentor Plugin (>version 0.3.4 ) from the repository ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/segmentor"},"https://github.com/jhnnsrs/segmentor"))),(0,l.kt)("div",{className:"flex flex-row gap-2"},(0,l.kt)(d.I,{repo:"stdlib",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,l.kt)(d.I,{repo:"segmentor",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,l.kt)(d.I,{repo:"reaktor",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"})),(0,l.kt)("h2",{id:"installing-the-workflows"},"Installing the Workflows"),(0,l.kt)("p",null,"This Smart Microscopy workflow is composed of two smaller workflows, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Acquire Clusters")," workflow and the ",(0,l.kt)("inlineCode",{parentName:"p"},"Multi Dimensional")," workflow.\nIn Which the ",(0,l.kt)("inlineCode",{parentName:"p"},"Acquire Clusters")," workflow will be nested in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Multi Dimensional")," workflow."),(0,l.kt)("h3",{id:"acquire-clusters-workflow"},"Acquire Clusters Workflow"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Acquire Clusters")," workflow is the workflow that will acquire a 20X Image, segment it, detect cluster and send the coordinates\nto the microscope to acquire all clusters with a 40X objective. To install this workflow connect this website to you Arkitekt instance and click on the Import buttom below:"),(0,l.kt)(o.n,{flow:u,mdxType:"DisplayWorkflow"}),(0,l.kt)("p",null,"A few things to note about this workflow:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"This workflow utilizes a pretrained Stardist model to segment the nuclei in the image. This model comes preinstalled with the Segmentor plugin, by changing this node\nwith a ",(0,l.kt)("inlineCode",{parentName:"p"},"Predict Stardist")," node you can use your own Stardist model.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The parameters to the Cell Cluster Detection are Global Variables of the Workflow"))),(0,l.kt)("h3",{id:"deploying-the-workflow"},"Deploying the Workflow"),(0,l.kt)("p",null,"During the Deployment of the smaller workflow it is imperative that you name the workflow ",(0,l.kt)("inlineCode",{parentName:"p"},"Acquire Clusters")," as this and the parameters of the workflow will be used by the ",(0,l.kt)("inlineCode",{parentName:"p"},"Multi Dimensional")," workflow,\nto adequately detect the workflow. If you choose to name the workflow differently you will need to change the respective ",(0,l.kt)("inlineCode",{parentName:"p"},"Acquire Clusters")," node in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Multi Dimensional")," workflow.\nYou do not need to reserve this workflow, as it will be reserved by the ",(0,l.kt)("inlineCode",{parentName:"p"},"Multi Dimensional")," workflow."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This imperative naming need is a current bug and will be fixed in a future release of Arkitekt.")),(0,l.kt)("h3",{id:"multi-dimensional-workflow"},"Multi Dimensional Workflow"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Multi Dimensional")," workflow is the workflow that will run the above workflow in a multidimensional acquistions for all position every X minutes for X hours."),(0,l.kt)(o.n,{flow:c,mdxType:"DisplayWorkflow"}),(0,l.kt)("div",{className:"text-gray-400 mb-2"},(0,l.kt)("small",null,"Once connected this pane will also give you an overview over the apps that still need to be installed, nodes in green have been installed, nodes in yellow still lack an implementation. Of course feel free to explore this graph more interactively in your orkestrator interface")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Test Environment"),(0,l.kt)("div",null,"This workflow was tested on the following environments:",(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Acquisition Computer:\n    - Intel Xeon CPU E5-2620 v4 @ 2.10GHz\n    - 128GB RAM\n    - Nikon Ti2-E Microscope\n    - Windows 10\n    - Micro-Manager 2.0.1 2023.05.23\n    - MikroManager 0.0.1\n\nAnalysis Computer\n    - Intel(R) Core(TM) i9-10900KF CPU @ 3.70GHz\n    - Ubuntu 22.04\n    - Arkitekt Paper Channel\n    - Segmentor Plugin 0.3.4\n    - Stdlib Plugin 0.3.9\n")))))}k.isMDXComponent=!0}}]);