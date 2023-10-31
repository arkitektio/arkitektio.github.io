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
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",m=(0,i.Zh)((e=>{let{branch:t,repo:a,user:r}=e;const{client:m}=(0,i.AA)(),u=`${r}/${a}:${t}`,{data:p,refetch:c}=(0,n.a)(s,{client:m,variables:{tag:u},pollInterval:3e3});return o.createElement(o.Fragment,null,p?.githubRepo?o.createElement("button",{className:d+"bg-green-300"}," \u2705 ",u):o.createElement("button",{onClick:async()=>{try{const{data:e}=await m.mutate({mutation:l,variables:{branch:t,repo:a,user:r}});await c(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",u))}),o.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},21262:(e,t,a)=>{"use strict";a.d(t,{n:()=>ot});var n=a(67294),i=a(98268),r=a(83117);a(86180);const o=e=>console.log("flow loaded:",e),l=e=>{let{edgeTypes:t,nodeTypes:a,nodes:l,edges:s,children:d,...m}=e;return n.createElement(i.tV,null,n.createElement(i.x$,(0,r.Z)({nodes:l,edges:s,onInit:o,nodeTypes:a,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))};function s(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,m=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function u(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(m,"{");console.log(t);let a=JSON.parse(t);return console.log(a),a}const p=e=>e?.map((e=>{if(e){const{id:t,position:a,__typename:n,...i}=e;return{type:n,id:t,position:a,data:{__typename:n,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(s)||[],c=e=>e?.map((e=>{if(e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,__typename:o,...l}=e;return{id:t,type:o,source:a,sourceHandle:n,target:i,targetHandle:r,data:{__typename:o,...l}}}})).filter(s)||[],g=n.createContext({}),h=()=>(0,n.useContext)(g);var f=a(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),k=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const b=f.Ps`
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
  ${b}
  ${w}
  ${v}
`,N=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${$}
`,_=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${$}
`,E=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${N}
  ${_}
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
  ${E}
`,x=f.Ps`
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
  ${E}
  ${P}
`,C=f.Ps`
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
  ${E}
  ${P}
`,S=f.Ps`
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
  ${E}
  ${P}
`,A=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,I=f.Ps`
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
`,L=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,T=f.Ps`
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
`,D=f.Ps`
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
  ${T}
  ${D}
`,W=f.Ps`
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
  ${T}
  ${D}
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
  ${T}
  ${D}
  ${W}
`,U=f.Ps`
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
`,O=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,H=f.Ps`
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
  ${U}
  ${O}
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
  ${U}
  ${O}
`,B=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${U}
`,M=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${U}
`,G=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${U}
`,z=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${U}
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
  ${U}
  ${O}
`,J=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${U}
`,Z=f.Ps`
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
  ${H}
  ${q}
  ${B}
  ${M}
  ${G}
  ${z}
  ${j}
  ${J}
`,Y=f.Ps`
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
`,K=f.Ps`
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
  ${Y}
`,V=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${K}
`,X=f.Ps`
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
  ${Z}
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
`,oe=f.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${re}
`,le=f.Ps`
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
`,ue=f.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,pe=f.Ps`
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
`,ce=f.Ps`
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
  ${x}
`;f.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${x}
`;f.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${x}
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
  ${le}
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
  ${le}
`;f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${le}
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
  ${x}
`;f.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${C}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${S}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${L}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${I}
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
  ${le}
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
  ${oe}
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
  ${oe}
`;f.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${oe}
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
  ${ue}
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
  ${pe}
`;f.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${ce}
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
  ${oe}
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
`;const he=e=>{const{}=h(),{id:t,sourcePosition:a,targetPosition:r,sourceX:o,sourceY:l,targetX:s,targetY:d,style:m,markerStart:u,markerEnd:p,data:c}=e,[g,f,y]=(0,i.OW)({sourcePosition:a,targetPosition:r,sourceX:o,sourceY:l,targetX:s,targetY:d});return n.createElement(n.Fragment,null,n.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:g}),n.createElement(i.XQ,null,n.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},c?.stream.map(((e,t)=>n.createElement("span",{className:"text-xs",key:t},(e?.kind==k.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var fe=a(1706);const ye=n.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),ke=e=>{let{id:t,children:a,expandedHeight:i=200,expandedWidth:r=400,collapsedWidth:o=170,collapsedHeight:l=70}=e;const[s,d]=(0,n.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:o,height:l});return n.createElement(fe.Resizable,{key:t,height:s.height,width:s.width,onResize:(e,t)=>{let{size:a,handle:n}=t;d((e=>({...e,width:a.width,height:a.height,isExpanded:a.height>200&&a.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},n.createElement(ye.Provider,{value:{...s,toggleExpanded:()=>{d((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?o:r,height:e.isExpanded?l:i})))}}},n.createElement("div",{style:{width:s.width+"px",height:s.height+"px"},className:"flex flex-col"},a)))},be=e=>t=>n.createElement(ke,{id:t.id},n.createElement(e,t)),we={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},ve=e=>{let{children:t,id:a,color:i="white"}=e;const[r,o]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${we[i]}`},t))};var $e=a(55770),Ne=a(52203),_e=a(90512),Ee=a(57851);function Pe(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ee.m)((0,_e.W)(t))}const xe=Ne.fC,Ce=Ne.xz,Se=n.forwardRef(((e,t)=>{let{className:a,align:i="center",sideOffset:o=4,...l}=e;return n.createElement(Ne.h_,null,n.createElement(Ne.VY,(0,r.Z)({ref:t,align:i,sideOffset:o,className:Pe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},l)))}));Se.displayName=Ne.VY.displayName;const Ae=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Ie=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Le=(e,t,a)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,a)))),Te=e=>{const{data:t,error:a,loading:i}=(0,$e.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return n.createElement(n.Fragment,null,a?n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Ae,null),n.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.name," ")):n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Ie,null),n.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")))},De=e=>{const{flow:t}=h(),a=e.data.defaults&&Object.keys(e.data.defaults).filter((a=>e.data.defaults[a]&&null!=e.data.defaults[a]&&0!=e.data.defaults[a]||Le(t,e.id,a)))||[];return n.createElement(xe,null,n.createElement(Ce,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full "},n.createElement($e.Z6,{fallback:n.createElement(n.Fragment,null," ",e.data?.name)},n.createElement(Te,{hash:e.data.hash,name:e.data.name}))),n.createElement(Se,{className:"text-xs bg-back-800 my-auto  "}," ",e.data?.description,a&&a.length>0&&n.createElement("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3"},n.createElement("div",{className:"font-semibold text-md mb-2"},"Constants "),n.createElement("div",{className:"flex flex-row gap-2 text-white"},n.createElement("div",{className:"flex grid grid-cols-2 gap-2"},a.map((a=>{const i=Le(t,e.id,a);return n.createElement(n.Fragment,null,n.createElement("div",{className:" my-auto"}," ",a," "),i?n.createElement("div",{className:"text-primary-300"}," ",n.createElement("div",{className:"font-bold inline"},"Global "),i.port.key," "):n.createElement("div",{className:"my-auto"}," ",e.data.defaults[a]," "))})))))))},Re=be((e=>{const{isExpanded:t,toggleExpanded:a}=(0,n.useContext)(ye);return n.createElement(ve,{id:e.id},e.data.instream.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),n.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden "},n.createElement(De,e)))})),We=be((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(ve,{color:"blue",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r}))))}));var Fe=a(63750);const Ue=be((e=>{let{data:{constream:t},id:a}=e;const[i,r]=(0,n.useState)(!1),[o,l]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(ve,{color:"green",id:a},!o&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex"},t?.map(((e,t)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+a},n.createElement("div",{className:"flex justify-between"},n.createElement("button",{type:"button",onClick:()=>alert("implement")},n.createElement(Fe.yvY,null))))))))),n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!o)},"Constants"," "),n.createElement("p",{className:"text-gray-700 text-base"}))))})),Oe=be((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(ve,{color:"red",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),n.createElement("p",{className:"text-gray-700 text-base"},n.createElement(n.Fragment,null,a[0]?.map((e=>e?.kind)).join(" | "),n.createElement("br",null)),!s&&n.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0)},"Add Documentation")))),a.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),He="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",qe={ArkitektNode:Re,ArkitektFilterNode:Re,LocalNode:Re,ReactiveNode:e=>{let{data:{outstream:t,instream:a,constream:r,implementation:o,defaults:l},id:s}=e;const d=(0,i.Bn)();return(0,n.useEffect)((()=>{console.log("Update node internals",s,o),d(s)}),[t,a,r]),n.createElement(n.Fragment,null,n.createElement("div",{className:"custom-drag-handle text-xs "},o&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.Gate].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})),o&&[y.Split].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(o)&&n.createElement("div",{className:He},o," ",l?.number&&n.createElement("b",{className:"font-bold"},l.number)),o&&[y.Ensure].includes(o)&&n.createElement("div",{className:He},n.createElement("h1",null,"!")),o&&[y.ToList].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,o)),o&&[y.Omit].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},o)),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.If].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"If")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),o&&[y.And].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"And")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),r?.map(((e,t,a)=>n.createElement(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),a?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/a.length*t+45/a.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/a.length*t+46/a.length+"%",background:"#555"}})))))},ArgNode:We,ReturnNode:Oe,KwargNode:Ue,GraphNode:()=>null},Be={LabeledEdge:he,FancyEdge:he},Me=e=>{let{flow:t}=e;const[a,r,o]=(0,i.Rr)(p(t.graph?.nodes)),[s,d,m]=(0,i.ll)(c(t.graph?.edges));return n.createElement(g.Provider,{value:{flow:t}},n.createElement(l,{nodes:a,edges:s,onNodesChange:o,onEdgesChange:m,elementsSelectable:!0,nodeTypes:qe,edgeTypes:Be,fitView:!0,attributionPosition:"bottom-right"}))};var Ge=a(30210),ze=a(39903);const je=e=>{const{user:t}=(0,Ge.gX)(),{fakts:a}=(0,ze.sT)();return n.createElement("div",{className:"relative "+e.className},e.children,!t||!a&&n.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var Je=a(68947),Ze=a(50319),Ye=a(12854),Ke=a(79592);const Ve=Ye.fC,Xe=(Ye.xz,Ye.h_),Qe=(Ye.x8,n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ye.aV,(0,r.Z)({ref:t,className:Pe("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},i))})));Qe.displayName=Ye.aV.displayName;const et=n.forwardRef(((e,t)=>{let{className:a,children:i,...o}=e;return n.createElement(Xe,null,n.createElement(Qe,null),n.createElement(Ye.VY,(0,r.Z)({ref:t,className:Pe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a)},o),i,n.createElement(Ye.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(Ke.Z,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));et.displayName=Ye.VY.displayName;const tt=e=>{let{className:t,...a}=e;return n.createElement("div",(0,r.Z)({className:Pe("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};tt.displayName="DialogHeader";const at=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ye.Dx,(0,r.Z)({ref:t,className:Pe("text-lg font-semibold leading-none tracking-tight",a)},i))}));at.displayName=Ye.Dx.displayName;const nt=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ye.dk,(0,r.Z)({ref:t,className:Pe("text-sm text-muted-foreground",a)},i))}));nt.displayName=Ye.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rt=e=>{let{flow:t,blockImport:a}=e;const{client:i}=(0,Je.dB)(),[r,o]=(0,Ze.D)(it,{client:i}),[l,d]=(0,n.useState)(!1),m=async()=>{try{const a=(e=p(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:a,type:n,parentNode:i,data:{outstream:r,constream:o,instream:l,...d}}=e;return{outstream:r?.map((e=>e?e.filter(s).map(u):[]))||[[]],constream:o?.map((e=>e?e.filter(s).map(u):[]))||[[]],instream:l?.map((e=>e?e.filter(s).map(u):[]))||[[]],id:t,position:{x:a.x,y:a.y},typename:n||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:i,interface:d.interface}}})).filter(s)||[]||[]),n=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,type:o,data:l}=e;return{id:t,typename:o||"Fake type",source:a,sourceHandle:n||"returns",target:i,targetHandle:r||"args",stream:l?.stream.filter(s).map(u)||[]}}})).filter(s)||[])(c(t.graph.edges));let i={nodes:a.filter(s).map(u),edges:n.filter(s).map(u),globals:t.graph.globals.filter(s).map(u),args:t.graph.args.filter(s).map(u),returns:t.graph.returns.filter(s).map(u)};await r({variables:{name:t.name,graph:i}});d(!0)}catch(a){alert(a.message)}var e};return n.createElement(n.Fragment,null,n.createElement(Ve,{open:l,onOpenChange:d},n.createElement(et,null,n.createElement(tt,null,n.createElement(at,null,"Succesfully imported workflow"),n.createElement(nt,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),n.createElement("button",{onClick:()=>m(),disabled:a,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},ot=e=>n.createElement("div",{className:"border border-1 rounded border-gray-800"},n.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},n.createElement(Me,{flow:e.flow})),n.createElement(je,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},n.createElement(Je.Ot,null,n.createElement(rt,{flow:e.flow,blockImport:e.blockImport}))))},41848:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var n=a(83117),i=(a(67294),a(3905)),r=a(83177),o=a(68648),l=a(21262),s=a(15944),d=a(3040),m=a.n(d),u=a(73266),p=a(71698);const c={title:"Bridging Deep Learning",sidebar_label:"Deep Learning Bridge",sidebar_position:3},g=void 0,h={unversionedId:"introduction/advanced_tutorial/deep_learning",id:"introduction/advanced_tutorial/deep_learning",title:"Bridging Deep Learning",description:"Deep learning is taking over the world of bioimage analysis, and for good reason. However it is not always easy to get started and use",source:"@site/docs/introduction/advanced_tutorial/deep_learning.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/deep_learning",permalink:"/docs/introduction/advanced_tutorial/deep_learning",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/deep_learning.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Bridging Deep Learning",sidebar_label:"Deep Learning Bridge",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction/advanced_tutorial/intro"},next:{title:"Parallelization",permalink:"/docs/introduction/advanced_tutorial/parallelization"}},f={},y=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The problems we are trying to solve",id:"the-problems-we-are-trying-to-solve",level:2},{value:"How to use Deep Learning in Arkitekt",id:"how-to-use-deep-learning-in-arkitekt",level:2},{value:"Testing the plugin",id:"testing-the-plugin",level:3},{value:"Integrate with ImageJ",id:"integrate-with-imagej",level:2},{value:"Integrate with Napari",id:"integrate-with-napari",level:2},{value:"Our own model",id:"our-own-model",level:2}],k={toc:y},b="wrapper";function w(e){let{components:t,...a}=e;return(0,i.kt)(b,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Deep learning is taking over the world of bioimage analysis, and for good reason. However it is not always easy to get started and use\nthe deep learning tools that are available.\nIn this section of the documentation we will try to show you how to get started with deep learning and how Arkitekt can help you,\nby showing you how to create a simple "deep learning enabled" workflow, that you can use to predict the segmentation of nuclei in a cell culture.'),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To get started with deep learning and Arkitekt you should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Have a basic understanding of deep learning, in the sense of what the words "Training" and "Inference" mean.'),(0,i.kt)("li",{parentName:"ul"},"Have gone through the ",(0,i.kt)("a",{parentName:"li",href:"/docs/introduction/first_steps"},"basics of Arkitekt"),"."),(0,i.kt)("li",{parentName:"ul"},"Have a CUDA capable GPU. If you don't have a GPU, you should still be able to follow along, but the prediction\nwill be very slow."),(0,i.kt)("li",{parentName:"ul"},"Either Mikro-Napari or Fiji with MikroJ installed. If you don't have either of these, you can still follow along, but you won't be able to run the workflow.")),(0,i.kt)("h1",{id:"our-task"},"Our task"),(0,i.kt)("p",null,"We would like to create a workflow that can take an image of nuclei in a cell culture and predict the segmentation of the nuclei.\nWe will be using a deep learning model based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stardist/stardist"},"Stardist")," to do the prediction.\nWe will be using the same dataset that we have used in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps"},"basics of Arkitekt"),"."),(0,i.kt)(s.Z,{img:m(),mdxType:"Image"}),(0,i.kt)("h2",{id:"the-problems-we-are-trying-to-solve"},"The problems we are trying to solve"),(0,i.kt)("p",null,"In this tutorial we would like to show you how to create a simple deep learning workflow in Arkitekt, and how Arkitekt can solve some common issues,\nthat you might encounter when trying to create your own deep learning workflows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to maintain the ",(0,i.kt)("strong",{parentName:"p"},"complex software requirements")," that is needed for deep learning."),(0,i.kt)("p",{parentName:"li"},"That's a perfect fit for ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginApps"),". Arkitekt plugins are containerized, so developers can already add in\nall of the software requirements that are needed for their specific deep learning algorithm. No need to install anything on your computer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"How to ",(0,i.kt)("strong",{parentName:"p"},"integrate")," deep learning into your favourite bioimage analysis app."),(0,i.kt)("p",{parentName:"li"},"That's what we have ",(0,i.kt)("strong",{parentName:"p"},"bridging")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Workflows")," for. You can create a workflow in Arkitekt, that will take your image from you\nbioimage analysis app of choice, offload them to the Arkitet server, and just pipe the result back to the bioimage app, so you can continue your analysis\nin the app you are used to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"I ",(0,i.kt)("strong",{parentName:"p"},"don't have GPUs")," available on my computer, how can I still use deep learning?"),(0,i.kt)("p",{parentName:"li"},"Easy. Just use the distributed workflow to offload the prediction to any computer that has a GPU available (here you Arkitekt Server) but potentially\nalso another computer in your lab / and or the ominous cloud. Oh and if you don't have a GPU available at all, you can still use the CPU version of Stardist."))),(0,i.kt)("admonition",{title:"On other solutions",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We are not the only ones trying to solve these problems. There are other great solutions out there, that you should definitely check out. One of it is ",(0,i.kt)("a",{parentName:"p",href:"https://deepimagej.github.io"},"DeepImageJ"),".\nArkitet is not trying to replace these solutions, but rather complement them. We are rather trying to provide a solution that is as generic as possible, so that you can use it with ",(0,i.kt)("em",{parentName:"p"},"any")," deep learning algorithm\n(that might use a different framework, rely on heavy pre and postprocessing, ...) and ",(0,i.kt)("em",{parentName:"p"},"integrate")," with any bioimage analysis app.")),(0,i.kt)("h2",{id:"how-to-use-deep-learning-in-arkitekt"},"How to use Deep Learning in Arkitekt"),(0,i.kt)("p",null,"So how do we install Stardist? Well just like any other plugin. You can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"segmentor")," repository to your Arkitekt installation by clicking on the button below."),(0,i.kt)(p.I,{repo:"segmentor",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"And then you can install the latest version of segmentor by deploying it as an plugin, as you learned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps/first_tool#installing-our-first-app"},"basics of Arkitekt"),".\nFor the rest of this tutorial we will assume that you have installed the ",(0,i.kt)("inlineCode",{parentName:"p"},"segmentor")," plugin."),(0,i.kt)("h3",{id:"testing-the-plugin"},"Testing the plugin"),(0,i.kt)("p",null,"Once the plugin is installed you can easily test it out by running it on images that are stored on your arkitekt image. For this tutorial we will be using a pretrained model, that is already included in the plugin.\nYou can run the prediction on your image by utilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Segment Fluo2")," node."),(0,i.kt)("h2",{id:"integrate-with-imagej"},"Integrate with ImageJ"),(0,i.kt)("p",null,"Now that we have tested our plugin, we would like to integrate it with our favourite bioimage analysis app. In this case we will be using Fiji through MikroJ, but you can use any other app that is supported by Arkitekt.\nFor this we will be using two nodes provided by Fiji, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Image")," node and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show Image")," node. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Image")," node will take the image from Fiji and upload it to the Arkitekt server,\nwhere it will be processed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Segment Fluo2")," node of the ",(0,i.kt)("inlineCode",{parentName:"p"},"segmentor")," plugin. The result will then be piped back to Fiji, where it will be shown using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show Image")," node."),(0,i.kt)(l.n,{flow:r,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," ","This is the workflow we would like to create. Upload our active image, segment it using a pretrained model, and show the result on ImageJ")),(0,i.kt)("p",null,"Just import this workflow into your Arkitekt instance, and deploy it on the ",(0,i.kt)("inlineCode",{parentName:"p"},"reaktor")," scheduler just like you did in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_workflows#reserving-a-scheduler"},"basics of Arkitekt"),".\nFeel free to also create that workflow on your own, if you want to get some more practice."),(0,i.kt)("p",null,"After reserving the workflow, you can run it directly from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard")," of Orkestrator. Just make sure that you have an image open in Fiji, and then click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Run")," button of the workflow."),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:u.Z})),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," The workflow in action utilizing MikroJ")),(0,i.kt)("h2",{id:"integrate-with-napari"},"Integrate with Napari"),(0,i.kt)("p",null,"Now that we have seen how to integrate with ImageJ, let's try to do the same with Napari. Its quite similar to the ImageJ integration, but this time we will be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Layer")," node and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show on Napari")," node provided by Napari."),(0,i.kt)(l.n,{flow:o,mdxType:"DisplayWorkflow"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," ","This is the workflow we would like to create. Upload our active image, segment it using a pretrained model, and show the result on ImageJ")),(0,i.kt)("p",null,"Import, deploy, reserve and run, just like you did with the ImageJ workflow. Its the same workflow, just with different nodes."),(0,i.kt)("admonition",{title:"On universal Workflows",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You might have noticed that the workflow, is similar to the one we created for ImageJ, but not the same. We could have created a universal workflow, that would work for both ImageJ and Napari, by\nutilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Image")," node and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show Image")," node, and before deployment let the user choose which app he wants to use. This will be thematized in a later tutorial.")),(0,i.kt)("h2",{id:"our-own-model"},"Our own model"),(0,i.kt)("p",null,"Here we have used a pretrained model, but what if we want to use our own model? Well that's easy. Training your own model on the segmentor plugin is also quite easy, but lets explore that in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/advanced_tutorial/training"},"next tutorial")))}w.isMDXComponent=!0},73266:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/medias/fiji_segmentation-36956e47929d30213356456ff3c0b1e3.webm"},83177:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},68648:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);