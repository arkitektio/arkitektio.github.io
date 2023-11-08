(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3358],{70128:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/node-stream.21fd498.640.png 640w,"+a.p+"assets/ideal-img/node-stream.8e1706c.1320.png 1320w,"+a.p+"assets/ideal-img/node-stream.2e31447.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/node-stream.21fd498.640.png",width:640,height:414},{path:a.p+"assets/ideal-img/node-stream.8e1706c.1320.png",width:1320,height:853},{path:a.p+"assets/ideal-img/node-stream.2e31447.2000.png",width:2e3,height:1293}],src:a.p+"assets/ideal-img/node-stream.21fd498.640.png",toString:function(){return a.p+"assets/ideal-img/node-stream.21fd498.640.png"},placeholder:void 0,width:640,height:414},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAUlEQVQImQH2AAn/AG27zQw2jr5NNJDFZ1WlxxcAAAAAVpKnFKZlwVutacdUaMLYFUN2hhMAOEhNNCtlhtkrcJb/M0pUaG59xQBCWWkygVGV9IFQkuMzR0tgN19qGwAeGhpwJiAd+SQXD+UhHhzXKCoiAB8dG08XIxvtIisk6iYkIu0EAAATAFWGlUgtbpPEK3ys3ztjdT//3f8AWj5sFKNfvd2MV6O+QWx1REZ1hBwALjY5ZCg8SPMrTFz3KC0tk0M+VAAuKDM4WkBm+085VekkKiulL0BFFgAfHR1jJiMhziUcFcAiIB6qHh4WABwdHEMaIRjEHCAYwR4dHsEfGhgSUZtS6uwOIb8AAAAASUVORK5CYII="}},71698:(e,t,a)=>{"use strict";a.d(t,{I:()=>m});var n=a(37887),i=a(69819),r=a(31230),l=a(67294);const o=r.ZP`
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
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",m=(0,i.Zh)((e=>{let{branch:t,repo:a,user:r}=e;const{client:m}=(0,i.AA)(),c=`${r}/${a}:${t}`,{data:u,refetch:p}=(0,n.a)(s,{client:m,variables:{tag:c},pollInterval:3e3});return l.createElement(l.Fragment,null,u?.githubRepo?l.createElement("button",{className:d+"bg-green-300"}," \u2705 ",c):l.createElement("button",{onClick:async()=>{try{const{data:e}=await m.mutate({mutation:o,variables:{branch:t,repo:a,user:r}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",c))}),l.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},21262:(e,t,a)=>{"use strict";a.d(t,{n:()=>lt});var n=a(67294),i=a(98268),r=a(83117);a(86180);const l=e=>console.log("flow loaded:",e),o=e=>{let{edgeTypes:t,nodeTypes:a,nodes:o,edges:s,children:d,...m}=e;return n.createElement(i.tV,null,n.createElement(i.x$,(0,r.Z)({nodes:o,edges:s,onInit:l,nodeTypes:a,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))};function s(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,m=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function c(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(m,"{");console.log(t);let a=JSON.parse(t);return console.log(a),a}const u=e=>e?.map((e=>{if(e){const{id:t,position:a,__typename:n,...i}=e;return{type:n,id:t,position:a,data:{__typename:n,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(s)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,__typename:l,...o}=e;return{id:t,type:l,source:a,sourceHandle:n,target:i,targetHandle:r,data:{__typename:l,...o}}}})).filter(s)||[],g=n.createContext({}),h=()=>(0,n.useContext)(g);var f=a(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),k=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const b=f.Ps`
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
  ${b}
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
`,v=f.Ps`
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
  ${_}
  ${w}
`,$=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${v}
`,E=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${v}
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
`,L=f.Ps`
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
`,S=f.Ps`
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
`,x=f.Ps`
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
`,A=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,T=f.Ps`
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
  ${A}
`,R=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,W=f.Ps`
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
`,C=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,I=f.Ps`
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
  ${W}
  ${C}
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
  ${W}
  ${C}
  ${I}
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
  ${W}
  ${C}
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
`,G=f.Ps`
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
`,q=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${O}
`,H=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
`,M=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
`,z=f.Ps`
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
`,Z=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
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
  ${B}
  ${G}
  ${q}
  ${H}
  ${M}
  ${z}
  ${j}
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
  ${K}
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
  ${A}
  ${ae}
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
`,le=f.Ps`
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
  ${L}
`;f.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${L}
`;f.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${L}
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
  ${L}
`;f.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${S}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${x}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${R}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${T}
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
  ${ne}
`;f.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${A}
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
  ${re}
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
  ${A}
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
`;const he=e=>{const{}=h(),{id:t,sourcePosition:a,targetPosition:r,sourceX:l,sourceY:o,targetX:s,targetY:d,style:m,markerStart:c,markerEnd:u,data:p}=e,[g,f,y]=(0,i.OW)({sourcePosition:a,targetPosition:r,sourceX:l,sourceY:o,targetX:s,targetY:d});return n.createElement(n.Fragment,null,n.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:g}),n.createElement(i.XQ,null,n.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},p?.stream.map(((e,t)=>n.createElement("span",{className:"text-xs",key:t},(e?.kind==k.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var fe=a(1706);const ye=n.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),ke=e=>{let{id:t,children:a,expandedHeight:i=200,expandedWidth:r=400,collapsedWidth:l=170,collapsedHeight:o=70}=e;const[s,d]=(0,n.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:l,height:o});return n.createElement(fe.Resizable,{key:t,height:s.height,width:s.width,onResize:(e,t)=>{let{size:a,handle:n}=t;d((e=>({...e,width:a.width,height:a.height,isExpanded:a.height>200&&a.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},n.createElement(ye.Provider,{value:{...s,toggleExpanded:()=>{d((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?l:r,height:e.isExpanded?o:i})))}}},n.createElement("div",{style:{width:s.width+"px",height:s.height+"px"},className:"flex flex-col"},a)))},be=e=>t=>n.createElement(ke,{id:t.id},n.createElement(e,t)),_e={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},we=e=>{let{children:t,id:a,color:i="white"}=e;const[r,l]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${_e[i]}`},t))};var ve=a(55770),$e=a(52203),Ee=a(90512),Ne=a(57851);function Pe(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ne.m)((0,Ee.W)(t))}const Le=$e.fC,Se=$e.xz,xe=n.forwardRef(((e,t)=>{let{className:a,align:i="center",sideOffset:l=4,...o}=e;return n.createElement($e.h_,null,n.createElement($e.VY,(0,r.Z)({ref:t,align:i,sideOffset:l,className:Pe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},o)))}));xe.displayName=$e.VY.displayName;const Ae=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Te=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Re=(e,t,a)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,a)))),We=e=>{const{data:t,error:a,loading:i}=(0,ve.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return n.createElement(n.Fragment,null,a?n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Ae,null),n.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.name," ")):n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Te,null),n.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")))},Ce=e=>{const{flow:t}=h(),a=e.data.defaults&&Object.keys(e.data.defaults).filter((a=>e.data.defaults[a]&&null!=e.data.defaults[a]&&0!=e.data.defaults[a]||Re(t,e.id,a)))||[];return n.createElement(Le,null,n.createElement(Se,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full "},n.createElement(ve.Z6,{fallback:n.createElement(n.Fragment,null," ",e.data?.name)},n.createElement(We,{hash:e.data.hash,name:e.data.name}))),n.createElement(xe,{className:"text-xs bg-back-800 my-auto  "}," ",e.data?.description,a&&a.length>0&&n.createElement("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3"},n.createElement("div",{className:"font-semibold text-md mb-2"},"Constants "),n.createElement("div",{className:"flex flex-row gap-2 text-white"},n.createElement("div",{className:"flex grid grid-cols-2 gap-2"},a.map((a=>{const i=Re(t,e.id,a);return n.createElement(n.Fragment,null,n.createElement("div",{className:" my-auto"}," ",a," "),i?n.createElement("div",{className:"text-primary-300"}," ",n.createElement("div",{className:"font-bold inline"},"Global "),i.port.key," "):n.createElement("div",{className:"my-auto"}," ",e.data.defaults[a]," "))})))))))},Ie=be((e=>{const{isExpanded:t,toggleExpanded:a}=(0,n.useContext)(ye);return n.createElement(we,{id:e.id},e.data.instream.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),n.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden "},n.createElement(Ce,e)))})),De=be((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[l,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(we,{color:"blue",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r}))))}));var Fe=a(63750);const Oe=be((e=>{let{data:{constream:t},id:a}=e;const[i,r]=(0,n.useState)(!1),[l,o]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(we,{color:"green",id:a},!l&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex"},t?.map(((e,t)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+a},n.createElement("div",{className:"flex justify-between"},n.createElement("button",{type:"button",onClick:()=>alert("implement")},n.createElement(Fe.yvY,null))))))))),n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>o(!l)},"Constants"," "),n.createElement("p",{className:"text-gray-700 text-base"}))))})),Ue=be((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[l,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(we,{color:"red",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),n.createElement("p",{className:"text-gray-700 text-base"},n.createElement(n.Fragment,null,a[0]?.map((e=>e?.kind)).join(" | "),n.createElement("br",null)),!s&&n.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>o(!0)},"Add Documentation")))),a.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),Be="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Ge={ArkitektNode:Ie,ArkitektFilterNode:Ie,LocalNode:Ie,ReactiveNode:e=>{let{data:{outstream:t,instream:a,constream:r,implementation:l,defaults:o},id:s}=e;const d=(0,i.Bn)();return(0,n.useEffect)((()=>{console.log("Update node internals",s,l),d(s)}),[t,a,r]),n.createElement(n.Fragment,null,n.createElement("div",{className:"custom-drag-handle text-xs "},l&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l&&[y.Gate].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})),l&&[y.Split].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(l)&&n.createElement("div",{className:Be},l," ",o?.number&&n.createElement("b",{className:"font-bold"},o.number)),l&&[y.Ensure].includes(l)&&n.createElement("div",{className:Be},n.createElement("h1",null,"!")),l&&[y.ToList].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,l)),l&&[y.Omit].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},l)),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),l&&[y.If].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"If")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),l&&[y.And].includes(l)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"And")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),r?.map(((e,t,a)=>n.createElement(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),a?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/a.length*t+45/a.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/a.length*t+46/a.length+"%",background:"#555"}})))))},ArgNode:De,ReturnNode:Ue,KwargNode:Oe,GraphNode:()=>null},qe={LabeledEdge:he,FancyEdge:he},He=e=>{let{flow:t}=e;const[a,r,l]=(0,i.Rr)(u(t.graph?.nodes)),[s,d,m]=(0,i.ll)(p(t.graph?.edges));return n.createElement(g.Provider,{value:{flow:t}},n.createElement(o,{nodes:a,edges:s,onNodesChange:l,onEdgesChange:m,elementsSelectable:!0,nodeTypes:Ge,edgeTypes:qe,fitView:!0,attributionPosition:"bottom-right"}))};var Me=a(30210),ze=a(39903);const je=e=>{const{user:t}=(0,Me.gX)(),{fakts:a}=(0,ze.sT)();return n.createElement("div",{className:"relative "+e.className},e.children,!t||!a&&n.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var Ze=a(68947),Ke=a(50319),Ve=a(12854),Ye=a(79592);const Xe=Ve.fC,Je=(Ve.xz,Ve.h_),Qe=(Ve.x8,n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ve.aV,(0,r.Z)({ref:t,className:Pe("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},i))})));Qe.displayName=Ve.aV.displayName;const et=n.forwardRef(((e,t)=>{let{className:a,children:i,...l}=e;return n.createElement(Je,null,n.createElement(Qe,null),n.createElement(Ve.VY,(0,r.Z)({ref:t,className:Pe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a)},l),i,n.createElement(Ve.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(Ye.Z,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));et.displayName=Ve.VY.displayName;const tt=e=>{let{className:t,...a}=e;return n.createElement("div",(0,r.Z)({className:Pe("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};tt.displayName="DialogHeader";const at=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ve.Dx,(0,r.Z)({ref:t,className:Pe("text-lg font-semibold leading-none tracking-tight",a)},i))}));at.displayName=Ve.Dx.displayName;const nt=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ve.dk,(0,r.Z)({ref:t,className:Pe("text-sm text-muted-foreground",a)},i))}));nt.displayName=Ve.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rt=e=>{let{flow:t,blockImport:a}=e;const{client:i}=(0,Ze.dB)(),[r,l]=(0,Ke.D)(it,{client:i}),[o,d]=(0,n.useState)(!1),m=async()=>{try{const a=(e=u(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:a,type:n,parentNode:i,data:{outstream:r,constream:l,instream:o,...d}}=e;return{outstream:r?.map((e=>e?e.filter(s).map(c):[]))||[[]],constream:l?.map((e=>e?e.filter(s).map(c):[]))||[[]],instream:o?.map((e=>e?e.filter(s).map(c):[]))||[[]],id:t,position:{x:a.x,y:a.y},typename:n||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:i,interface:d.interface}}})).filter(s)||[]||[]),n=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,type:l,data:o}=e;return{id:t,typename:l||"Fake type",source:a,sourceHandle:n||"returns",target:i,targetHandle:r||"args",stream:o?.stream.filter(s).map(c)||[]}}})).filter(s)||[])(p(t.graph.edges));let i={nodes:a.filter(s).map(c),edges:n.filter(s).map(c),globals:t.graph.globals.filter(s).map(c),args:t.graph.args.filter(s).map(c),returns:t.graph.returns.filter(s).map(c)};await r({variables:{name:t.name,graph:i}});d(!0)}catch(a){alert(a.message)}var e};return n.createElement(n.Fragment,null,n.createElement(Xe,{open:o,onOpenChange:d},n.createElement(et,null,n.createElement(tt,null,n.createElement(at,null,"Succesfully imported workflow"),n.createElement(nt,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),n.createElement("button",{onClick:()=>m(),disabled:a,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},lt=e=>n.createElement("div",{className:"border border-1 rounded border-gray-800"},n.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},n.createElement(He,{flow:e.flow})),n.createElement(je,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},n.createElement(Ze.Ot,null,n.createElement(rt,{flow:e.flow,blockImport:e.blockImport}))))},54860:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var n=a(83117),i=(a(67294),a(3905));const r=JSON.parse('{"__typename":"Flow","id":"54","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","position":{"__typename":"Position","x":352,"y":35},"typename":"ArkitektNode","parentNode":null,"hash":"f8031ef4200cdae6e7bd8f5f214d2428900488ee80f042336f55cb87e406ddcc","kind":"GENERATOR","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset to stream to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"regexp","label":"regexp","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"A regular expression to filter the files","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"indefinitely","label":"indefinitely","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Should we stream waiting for new files?. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream Files","description":"Streams files from a folder to Mikro","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","position":{"__typename":"Position","x":1045,"y":91},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","position":{"__typename":"Position","x":605,"y":63},"typename":"ArkitektNode","parentNode":null,"hash":"0abdf2faf07b0a322bd75e410a128fee96dabec2e9f74c3b07addaed949a211f","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"file","label":"file","identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The File to be converted","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The created series in this file","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"stage","label":"stage","identifier":"@mikro/stage","scope":"GLOBAL","kind":"STRUCTURE","description":"The Stage in which to put the Image. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_stages($search: String, $values: [ID]) {\\n  options: stages(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"era","label":"era","identifier":"@mikro/era","scope":"GLOBAL","kind":"STRUCTURE","description":"The Era in which to put the Image.. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchEras($search: String, $values: [ID]) {\\n  options: eras(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset in which to put the Image. Defaults to the file dataset.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_from_planes","label":"position_from_planes","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a position from the first planes (only if stage is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_from_time","label":"timepoint_from_time","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a timepoint from the first time (only if era is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channels_from_channels","label":"channels_from_channels","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a channel from the channels. Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_tolerance","label":"position_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the position. Defaults to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_tolerance","label":"timepoint_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the timepoint. Defaults  to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Convert Omero","description":"Converts an Omero File in a set of Mikrodata","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","position":{"__typename":"Position","x":840,"y":95},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of rep","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe created series in this file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","position":{"__typename":"Position","x":1244,"y":-48},"typename":"ArkitektNode","parentNode":null,"hash":"6aef2e0b4cfe28139854a42edf795346d1df5f822014c8901080728d4af875cd","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Max","description":"Measures the maxium value of an image","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ffarg_0","source":"1","sourceHandle":"return_0","target":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ffreturn_0-arkid-d983e818-030b-4160-8ab4-cee4107a880carg_0","source":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","sourceHandle":"return_0","target":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/omerofile","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-d983e818-030b-4160-8ab4-cee4107a880creturn_0-reactive-729ad2c6-295c-4d54-a378-33fb26b77aadarg_0","source":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","sourceHandle":"return_0","target":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-729ad2c6-295c-4d54-a378-33fb26b77aadreturn_0-arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2darg_0","source":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","sourceHandle":"return_0","target":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2dreturn_0-arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8arg_0","source":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","sourceHandle":"return_0","target":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8return_0-2arg_0","source":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[],"args":[],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"Live Analysis","screenshot":null,"createdAt":"2023-11-07T12:25:11.832245+00:00","workspace":{"__typename":"Workspace","id":"34"}}');a(68648);var l=a(21262),o=a(15944),s=a(70128),d=a.n(s),m=(a(73266),a(71698));const c={title:"Live Analysis",sidebar_label:"Live Analysis",sidebar_position:4},u="Live (Streaming) Analysis",p={unversionedId:"introduction/advanced_tutorial/live_analysis",id:"introduction/advanced_tutorial/live_analysis",title:"Live Analysis",description:"With Arkitekt we wanted to provide new ways of performing and scheduling our analysis. Today analysis is often done in",source:"@site/docs/introduction/advanced_tutorial/live_analysis.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/live_analysis",permalink:"/docs/introduction/advanced_tutorial/live_analysis",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/live_analysis.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Live Analysis",sidebar_label:"Live Analysis",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Train a Deep Learning Model",permalink:"/docs/introduction/advanced_tutorial/training"},next:{title:"Services",permalink:"/docs/category/services"}},g={},h=[{value:"Why Streaming Analysis?",id:"why-streaming-analysis",level:3},{value:"Streaming Analysis in Arkitekt",id:"streaming-analysis-in-arkitekt",level:3},{value:"Stream Nodes",id:"stream-nodes",level:3},{value:"Lets not imaging, lets do it!",id:"lets-not-imaging-lets-do-it",level:3},{value:"Other Requirements",id:"other-requirements",level:3}],f={toc:h},y="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"live-streaming-analysis"},"Live (Streaming) Analysis"),(0,i.kt)("p",null,"With Arkitekt we wanted to provide new ways of performing and scheduling our analysis. Today analysis is often done in\nbatch mode, where we run scripts and tools are run on a set of images a long time after the initial production. This is such a common approach that\nmost of the tools we use are designed around this workflow. However, this is not the only way to do analysis, and in many\ncases, you might (need to) consider doing analysis in a live mode, where your results are generated as your images are acquired, in\na continous stream-like fashion."),(0,i.kt)("p",null,"In this tutorial we will show you how to build a ",(0,i.kt)("a",{parentName:"p",href:"/docs/design/real-time"},"Streaming Analysis Workflow")," in Arkitekt, and how to run it on live data.\nThis tutorial will cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Why streaming analysis?"),(0,i.kt)("li",{parentName:"ul"},"How we model Streaming Analysis in Arkitekt (Generator Nodes)"),(0,i.kt)("li",{parentName:"ul"},"Constructing a streaming analysis workflow"),(0,i.kt)("li",{parentName:"ul"},"Challenges of streaming analysis")),(0,i.kt)("h3",{id:"why-streaming-analysis"},"Why Streaming Analysis?"),(0,i.kt)("p",null,"There are manifold reasons why you might want to consider doing live analysis. Here are some of the most common ones:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Real-Time Monitoring"),": For live cell imaging where immediate feedback is necessary, such as adjusting experimental conditions based on cell behavior, streaming analysis is crucial."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"High-Content Screening"),": In high-throughput assays, streaming analysis can quickly identify hits or interesting events, which may be critical in pharmaceutical research."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Adaptive Experiments"),": Streaming analysis allows researchers to modify experiments on the fly in response to the data being collected, which can be advantageous for exploratory research or complex biological systems.")),(0,i.kt)("h3",{id:"streaming-analysis-in-arkitekt"},"Streaming Analysis in Arkitekt"),(0,i.kt)("p",null,"Arkitekt was conceptualized and specifically build around the idea of ",(0,i.kt)("a",{parentName:"p",href:"/docs/design/real-time"},"Streaming Analysis"),". We wanted to make it easy to build analysis workflows that can\nbe adapted from batch to streaming analysis. To do this, we needed to make sure that the analysis workflows are compatible  and manageable in both modes, and that the platform can handle the multifold challenges of streaming analysis. "),(0,i.kt)("p",null,"Inherently when you build a workflow in Arkitekt you ",(0,i.kt)("em",{parentName:"p"},"always")," build a streaming analysis workflow. Just a very simple one, where the real-time functionality does not matter. In a basic workflow\nthat just pipes images from one node to the next, the data will still stream through the workflow and the results will be generated as the images are processed.\nHowever Workflows can be designed to take advantage of the streaming nature of the data, and to do this we need to understand how Arkitekt handles streaming data."),(0,i.kt)("h3",{id:"stream-nodes"},"Stream Nodes"),(0,i.kt)("p",null,"As discussed in the first steps tutorial, Arkitekt is build around the concept of nodes, that define a procedure that can happen on a specific item, and are defined by their input and outputs.\nSo far we  got to know ",(0,i.kt)("inlineCode",{parentName:"p"},"Functional Nodes"),", that get their name from programming function that take item(s) and return item(s) ",(0,i.kt)("em",{parentName:"p"},"once"),". There is however another type of node, that is called a ",(0,i.kt)("inlineCode",{parentName:"p"},"Stream Node")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Generator Node"),",\nand which is a node that can take an item and returns (yields) item(s) ",(0,i.kt)("em",{parentName:"p"},"multiple times")," and importantly ",(0,i.kt)("strong",{parentName:"p"},"over time")),(0,i.kt)(o.Z,{img:d(),mdxType:"Image"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," Functional Nodes vs Stream Nodes also with their programming equivalent")),(0,i.kt)("p",null,"This means when a stream node is called within a workflow, it will return a stream of items, ",(0,i.kt)("strong",{parentName:"p"},"each of which")," will be processed by the next node in the workflow, at the time they are generated.\nImaging a workflow that runs a timeseries on the microscope, and once started will pipe the images directly to the analysis node, which will then generate results for each image as it is acquired."),(0,i.kt)("h3",{id:"lets-not-imaging-lets-do-it"},"Lets not imaging, lets do it!"),(0,i.kt)("p",null,"Well, lets do exactly that. For this tutorial we will use a simple workflow that takes images that are put into a folder  and then pipes them through a small analysis\npipeline. This pipeline will for now just consist of a simple segmentation and a measurement of the area of the segmented objects. We will use the same deep learning\nnode that we know from our Deep Learning tutorial."),(0,i.kt)("p",null,"But first things first, how to we get the images into the workflow? And especially how to we get them of the microscope, onto our analysis machine? Well, there is an App\nfor that. ",(0,i.kt)("a",{parentName:"p",href:"/docs/apps/gucker"},(0,i.kt)("strong",{parentName:"a"},"Gucker"))," is a simple app that watches a folder and then puts any images that are put into that folder into the workflow. So lets install it\nand get started."),(0,i.kt)("h3",{id:"other-requirements"},"Other Requirements"),(0,i.kt)("p",null,"If you followed both the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/advanced_tutorial/deep-learning"},"Deep Learning")," and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps/interface"},"First Steps")," tutorial,\nyou should have all the requirements installed. If not, please install the following:"),(0,i.kt)("div",{className:"flex flex-row gap-2"},(0,i.kt)(m.I,{repo:"omero",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,i.kt)(m.I,{repo:"reaktor",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,i.kt)(m.I,{repo:"segmentor",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"})),(0,i.kt)("p",null,"Of course you can also use any other node that you have installed, but for this tutorial we will construct the following\nworkflow:"),(0,i.kt)(l.n,{flow:r,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," ","This is the workflow we would like to create. Stream our Files, Convert them to Images, Segment them and Measure them."," ")))}k.isMDXComponent=!0},73266:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/medias/fiji_segmentation-36956e47929d30213356456ff3c0b1e3.webm"},68648:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);