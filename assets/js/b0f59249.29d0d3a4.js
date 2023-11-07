(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[9036],{3040:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/segmentation.452be31.640.png 640w,"+a.p+"assets/ideal-img/segmentation.9c18098.1320.png 1320w,"+a.p+"assets/ideal-img/segmentation.57e8a2f.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/segmentation.452be31.640.png",width:640,height:313},{path:a.p+"assets/ideal-img/segmentation.9c18098.1320.png",width:1320,height:646},{path:a.p+"assets/ideal-img/segmentation.57e8a2f.2000.png",width:2e3,height:979}],src:a.p+"assets/ideal-img/segmentation.452be31.640.png",toString:function(){return a.p+"assets/ideal-img/segmentation.452be31.640.png"},placeholder:void 0,width:640,height:313},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVQImQHNADL/ACgoKP0uLi79Kioq+CwsLf8wMCN1AACpLSIOgf88Hn3+EQuD/jUbf/8AMTEx/zAwMP8xMTH7Kios/1paRJ+1oqF0ORmF/0Yhf/8jC4r+MxeC/wAvLy/6MDAw+zMzM/cqKiv/TE09kPbbq2ZROoL/NBOC+i8UhvoOCIf6ACoqKv8rKyv/Ly8v/y8vMP8eIBp8EQChMCQZev8uGXz/JxV+/xgLhf8ALCwsh0hISJhTU1OXOzs8nS0tHz4HAKEaJCGMlmlNhppJNpScIhiMjYzvTWkrbiOaAAAAAElFTkSuQmCC"}},71698:(e,t,a)=>{"use strict";a.d(t,{I:()=>m});var n=a(37887),i=a(69819),r=a(31230),o=a(67294);const l=r.ZP`
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
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",m=(0,i.Zh)((e=>{let{branch:t,repo:a,user:r}=e;const{client:m}=(0,i.AA)(),p=`${r}/${a}:${t}`,{data:c,refetch:u}=(0,n.a)(s,{client:m,variables:{tag:p},pollInterval:3e3});return o.createElement(o.Fragment,null,c?.githubRepo?o.createElement("button",{className:d+"bg-green-300"}," \u2705 ",p):o.createElement("button",{onClick:async()=>{try{const{data:e}=await m.mutate({mutation:l,variables:{branch:t,repo:a,user:r}});await u(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",p))}),o.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},21262:(e,t,a)=>{"use strict";a.d(t,{n:()=>ot});var n=a(67294),i=a(98268),r=a(83117);a(86180);const o=e=>console.log("flow loaded:",e),l=e=>{let{edgeTypes:t,nodeTypes:a,nodes:l,edges:s,children:d,...m}=e;return n.createElement(i.tV,null,n.createElement(i.x$,(0,r.Z)({nodes:l,edges:s,onInit:o,nodeTypes:a,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))};function s(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,m=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function p(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(m,"{");console.log(t);let a=JSON.parse(t);return console.log(a),a}const c=e=>e?.map((e=>{if(e){const{id:t,position:a,__typename:n,...i}=e;return{type:n,id:t,position:a,data:{__typename:n,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(s)||[],u=e=>e?.map((e=>{if(e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,__typename:o,...l}=e;return{id:t,type:o,source:a,sourceHandle:n,target:i,targetHandle:r,data:{__typename:o,...l}}}})).filter(s)||[],h=n.createContext({}),g=()=>(0,n.useContext)(h);var f=a(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),k=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const b=f.Ps`
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
`),N=f.Ps`
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
  ${w}
  ${N}
`,_=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${v}
`,C=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${v}
`,$=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${_}
  ${C}
  ${b}
`,E=f.Ps`
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
  ${$}
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
  ${$}
  ${E}
`,A=f.Ps`
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
  ${$}
  ${E}
`,P=f.Ps`
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
  ${$}
  ${E}
`,R=f.Ps`
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
  ${R}
`,L=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,I=f.Ps`
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
`,S=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,D=f.Ps`
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
  ${I}
  ${S}
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
  ${I}
  ${S}
  ${D}
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
  ${I}
  ${S}
  ${W}
`,M=f.Ps`
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
  ${M}
  ${O}
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
  ${M}
  ${O}
`,H=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${M}
`,q=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${M}
`,G=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${M}
`,z=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${M}
`,Y=f.Ps`
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
  ${M}
  ${O}
`,j=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${M}
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
  ${B}
  ${H}
  ${q}
  ${G}
  ${z}
  ${Y}
  ${j}
`,K=f.Ps`
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
`,Z=f.Ps`
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
  ${K}
`,V=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${Z}
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
  ${X}
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
  ${R}
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
`,pe=f.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,ce=f.Ps`
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
`,ue=f.Ps`
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
`,he=f.Ps`
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
  ${A}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${P}
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
  ${R}
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
  ${pe}
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
  ${he}
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
  ${he}
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
  ${he}
`;f.Ps`
  query DetailRun($id: ID, $assignation: ID) {
    run(id: $id, assignation: $assignation) {
      ...Run
    }
  }
  ${ce}
`;f.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${ue}
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
  ${R}
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
`;const ge=e=>{const{}=g(),{id:t,sourcePosition:a,targetPosition:r,sourceX:o,sourceY:l,targetX:s,targetY:d,style:m,markerStart:p,markerEnd:c,data:u}=e,[h,f,y]=(0,i.OW)({sourcePosition:a,targetPosition:r,sourceX:o,sourceY:l,targetX:s,targetY:d});return n.createElement(n.Fragment,null,n.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:h}),n.createElement(i.XQ,null,n.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},u?.stream.map(((e,t)=>n.createElement("span",{className:"text-xs",key:t},(e?.kind==k.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var fe=a(1706);const ye=n.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),ke=e=>{let{id:t,children:a,expandedHeight:i=200,expandedWidth:r=400,collapsedWidth:o=170,collapsedHeight:l=70}=e;const[s,d]=(0,n.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:o,height:l});return n.createElement(fe.Resizable,{key:t,height:s.height,width:s.width,onResize:(e,t)=>{let{size:a,handle:n}=t;d((e=>({...e,width:a.width,height:a.height,isExpanded:a.height>200&&a.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},n.createElement(ye.Provider,{value:{...s,toggleExpanded:()=>{d((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?o:r,height:e.isExpanded?l:i})))}}},n.createElement("div",{style:{width:s.width+"px",height:s.height+"px"},className:"flex flex-col"},a)))},be=e=>t=>n.createElement(ke,{id:t.id},n.createElement(e,t)),we={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},Ne=e=>{let{children:t,id:a,color:i="white"}=e;const[r,o]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${we[i]}`},t))};var ve=a(55770),_e=a(52203),Ce=a(90512),$e=a(57851);function Ee(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,$e.m)((0,Ce.W)(t))}const xe=_e.fC,Ae=_e.xz,Pe=n.forwardRef(((e,t)=>{let{className:a,align:i="center",sideOffset:o=4,...l}=e;return n.createElement(_e.h_,null,n.createElement(_e.VY,(0,r.Z)({ref:t,align:i,sideOffset:o,className:Ee("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},l)))}));Pe.displayName=_e.VY.displayName;const Re=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Te=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Le=(e,t,a)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,a)))),Ie=e=>{const{data:t,error:a,loading:i}=(0,ve.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return n.createElement(n.Fragment,null,a?n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Re,null),n.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.name," ")):n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Te,null),n.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")))},Se=e=>{const{flow:t}=g(),a=e.data.defaults&&Object.keys(e.data.defaults).filter((a=>e.data.defaults[a]&&null!=e.data.defaults[a]&&0!=e.data.defaults[a]||Le(t,e.id,a)))||[];return n.createElement(xe,null,n.createElement(Ae,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full "},n.createElement(ve.Z6,{fallback:n.createElement(n.Fragment,null," ",e.data?.name)},n.createElement(Ie,{hash:e.data.hash,name:e.data.name}))),n.createElement(Pe,{className:"text-xs bg-back-800 my-auto  "}," ",e.data?.description,a&&a.length>0&&n.createElement("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3"},n.createElement("div",{className:"font-semibold text-md mb-2"},"Constants "),n.createElement("div",{className:"flex flex-row gap-2 text-white"},n.createElement("div",{className:"flex grid grid-cols-2 gap-2"},a.map((a=>{const i=Le(t,e.id,a);return n.createElement(n.Fragment,null,n.createElement("div",{className:" my-auto"}," ",a," "),i?n.createElement("div",{className:"text-primary-300"}," ",n.createElement("div",{className:"font-bold inline"},"Global "),i.port.key," "):n.createElement("div",{className:"my-auto"}," ",e.data.defaults[a]," "))})))))))},De=be((e=>{const{isExpanded:t,toggleExpanded:a}=(0,n.useContext)(ye);return n.createElement(Ne,{id:e.id},e.data.instream.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),n.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden "},n.createElement(Se,e)))})),We=be((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(Ne,{color:"blue",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>n.createElement(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r}))))}));var Fe=a(63750);const Me=be((e=>{let{data:{constream:t},id:a}=e;const[i,r]=(0,n.useState)(!1),[o,l]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(Ne,{color:"green",id:a},!o&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex"},t?.map(((e,t)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+a},n.createElement("div",{className:"flex justify-between"},n.createElement("button",{type:"button",onClick:()=>alert("implement")},n.createElement(Fe.yvY,null))))))))),n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!o)},"Constants"," "),n.createElement("p",{className:"text-gray-700 text-base"}))))})),Oe=be((e=>{let{data:{outstream:t,instream:a},id:r}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(Ne,{color:"red",id:r},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),n.createElement("p",{className:"text-gray-700 text-base"},n.createElement(n.Fragment,null,a[0]?.map((e=>e?.kind)).join(" | "),n.createElement("br",null)),!s&&n.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0)},"Add Documentation")))),a.map(((e,t)=>n.createElement(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),Ue="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Be={ArkitektNode:De,ArkitektFilterNode:De,LocalNode:De,ReactiveNode:e=>{let{data:{outstream:t,instream:a,constream:r,implementation:o,defaults:l},id:s}=e;const d=(0,i.Bn)();return(0,n.useEffect)((()=>{console.log("Update node internals",s,o),d(s)}),[t,a,r]),n.createElement(n.Fragment,null,n.createElement("div",{className:"custom-drag-handle text-xs "},o&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.Gate].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})),o&&[y.Split].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(o)&&n.createElement("div",{className:Ue},o," ",l?.number&&n.createElement("b",{className:"font-bold"},l.number)),o&&[y.Ensure].includes(o)&&n.createElement("div",{className:Ue},n.createElement("h1",null,"!")),o&&[y.ToList].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,o)),o&&[y.Omit].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},o)),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.If].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"If")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),o&&[y.And].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"And")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),r?.map(((e,t,a)=>n.createElement(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),a?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/a.length*t+45/a.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,a)=>n.createElement(i.HH,{key:t,type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/a.length*t+46/a.length+"%",background:"#555"}})))))},ArgNode:We,ReturnNode:Oe,KwargNode:Me,GraphNode:()=>null},He={LabeledEdge:ge,FancyEdge:ge},qe=e=>{let{flow:t}=e;const[a,r,o]=(0,i.Rr)(c(t.graph?.nodes)),[s,d,m]=(0,i.ll)(u(t.graph?.edges));return n.createElement(h.Provider,{value:{flow:t}},n.createElement(l,{nodes:a,edges:s,onNodesChange:o,onEdgesChange:m,elementsSelectable:!0,nodeTypes:Be,edgeTypes:He,fitView:!0,attributionPosition:"bottom-right"}))};var Ge=a(30210),ze=a(39903);const Ye=e=>{const{user:t}=(0,Ge.gX)(),{fakts:a}=(0,ze.sT)();return n.createElement("div",{className:"relative "+e.className},e.children,!t||!a&&n.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var je=a(68947),Xe=a(50319),Ke=a(12854),Ze=a(79592);const Ve=Ke.fC,Je=(Ke.xz,Ke.h_),Qe=(Ke.x8,n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ke.aV,(0,r.Z)({ref:t,className:Ee("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},i))})));Qe.displayName=Ke.aV.displayName;const et=n.forwardRef(((e,t)=>{let{className:a,children:i,...o}=e;return n.createElement(Je,null,n.createElement(Qe,null),n.createElement(Ke.VY,(0,r.Z)({ref:t,className:Ee("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a)},o),i,n.createElement(Ke.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(Ze.Z,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));et.displayName=Ke.VY.displayName;const tt=e=>{let{className:t,...a}=e;return n.createElement("div",(0,r.Z)({className:Ee("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};tt.displayName="DialogHeader";const at=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ke.Dx,(0,r.Z)({ref:t,className:Ee("text-lg font-semibold leading-none tracking-tight",a)},i))}));at.displayName=Ke.Dx.displayName;const nt=n.forwardRef(((e,t)=>{let{className:a,...i}=e;return n.createElement(Ke.dk,(0,r.Z)({ref:t,className:Ee("text-sm text-muted-foreground",a)},i))}));nt.displayName=Ke.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rt=e=>{let{flow:t,blockImport:a}=e;const{client:i}=(0,je.dB)(),[r,o]=(0,Xe.D)(it,{client:i}),[l,d]=(0,n.useState)(!1),m=async()=>{try{const a=(e=c(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:a,type:n,parentNode:i,data:{outstream:r,constream:o,instream:l,...d}}=e;return{outstream:r?.map((e=>e?e.filter(s).map(p):[]))||[[]],constream:o?.map((e=>e?e.filter(s).map(p):[]))||[[]],instream:l?.map((e=>e?e.filter(s).map(p):[]))||[[]],id:t,position:{x:a.x,y:a.y},typename:n||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:i,interface:d.interface}}})).filter(s)||[]||[]),n=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:a,sourceHandle:n,target:i,targetHandle:r,type:o,data:l}=e;return{id:t,typename:o||"Fake type",source:a,sourceHandle:n||"returns",target:i,targetHandle:r||"args",stream:l?.stream.filter(s).map(p)||[]}}})).filter(s)||[])(u(t.graph.edges));let i={nodes:a.filter(s).map(p),edges:n.filter(s).map(p),globals:t.graph.globals.filter(s).map(p),args:t.graph.args.filter(s).map(p),returns:t.graph.returns.filter(s).map(p)};await r({variables:{name:t.name,graph:i}});d(!0)}catch(a){alert(a.message)}var e};return n.createElement(n.Fragment,null,n.createElement(Ve,{open:l,onOpenChange:d},n.createElement(et,null,n.createElement(tt,null,n.createElement(at,null,"Succesfully imported workflow"),n.createElement(nt,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),n.createElement("button",{onClick:()=>m(),disabled:a,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},ot=e=>n.createElement("div",{className:"border border-1 rounded border-gray-800"},n.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},n.createElement(qe,{flow:e.flow})),n.createElement(Ye,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},n.createElement(je.Ot,null,n.createElement(rt,{flow:e.flow,blockImport:e.blockImport}))))},70905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>c,toc:()=>h});var n=a(83117),i=(a(67294),a(3905));a(83177),a(68648),a(21262),a(15944),a(3040);const r=a.p+"assets/medias/create_context-9bf4e77dc321d9190d5d777740f711e6.webm",o=a.p+"assets/medias/inspect_container-fbdd49c2415484201abc9b0a52f3d8af.webm",l=a.p+"assets/medias/train_care-524e8c37237b8c795ebed8e08f084a67.webm",s=a.p+"assets/medias/upload_train_data-fb6a967290132ae4c8d5433f3bb5831a.webm";var d=a(71698);const m={title:"Train a Deep Learning Model",sidebar_label:"Train a Deep Learning Model",sidebar_position:3},p=void 0,c={unversionedId:"introduction/advanced_tutorial/training",id:"introduction/advanced_tutorial/training",title:"Train a Deep Learning Model",description:"Deep Learning powered methods in Bioimage analysis have changed the way we analysis images, however they are still not widely used in the community.",source:"@site/docs/introduction/advanced_tutorial/training.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/training",permalink:"/docs/introduction/advanced_tutorial/training",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/training.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Train a Deep Learning Model",sidebar_label:"Train a Deep Learning Model",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Parallelization",permalink:"/docs/introduction/advanced_tutorial/parallelization"},next:{title:"Live Analysis",permalink:"/docs/introduction/advanced_tutorial/live_analysis"}},u={},h=[{value:"What we are trying to achieve",id:"what-we-are-trying-to-achieve",level:2},{value:"Training with Arkitekt",id:"training-with-arkitekt",level:2},{value:"Training Context",id:"training-context",level:3},{value:"Lets get to this",id:"lets-get-to-this",level:3},{value:"Creating a Context",id:"creating-a-context",level:3},{value:"Training a CARE model",id:"training-a-care-model",level:3},{value:"Inspecting the Model",id:"inspecting-the-model",level:3},{value:"Using the Model",id:"using-the-model",level:2},{value:"The developers perspective",id:"the-developers-perspective",level:2}],g={toc:h},f="wrapper";function y(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Deep Learning powered methods in Bioimage analysis have changed the way we analysis images, however they are still not widely used in the community.\nThis is arguabley due to the lack of easy to use tools and the inability to adapt a published model to a new paradigm, such as a new microscope or a new cell type."),(0,i.kt)("p",null,"With Arkitekt we aimed to make it easy to both use already trained deep learning models in your analysis pipeline, and to make it easy to adapt a model to your specific needs.\nIn this tutorial we will show you how to train your own deep learning model using CARE, a popular method for image restoration, and how to use it in your analysis pipeline.\nWe advise you to first read the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41592-018-0216-7"},"CARE paper")," to understand the methodology of care, as well as following both the\nfirst steps of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps/interface"},"Arkitekt tutorial")," and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/advanced_tutorial/deep_learning"},"Deep Learning Bridge tutorial"),"."),(0,i.kt)("p",null,"This tutorial aims to cover the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our conceptional understanding of Deep Learning Training"),(0,i.kt)("li",{parentName:"ul"},"What is a training ",(0,i.kt)("inlineCode",{parentName:"li"},"Context")," and how to use it"),(0,i.kt)("li",{parentName:"ul"},"How to train a CARE model")),(0,i.kt)("h2",{id:"what-we-are-trying-to-achieve"},"What we are trying to achieve"),(0,i.kt)("p",null,"In this tutorial we would like to train a deep learning model that can be used to restore images that have been acquired with a confocal microscope. We are using the training\ndataset from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41592-018-0216-7"},"CARE paper"),", which is a dataset of confocal images of the Tribolium Castaneum embryo, that vary in\ntheir signal-to-roise ratio. We here will aim to train a model that will help us in a second step to restore images that have been acquired with the same microscope."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"For the purpose of this tutorial we will only train a model on a subset of the data, and we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"same")," data for training and validation. This is ",(0,i.kt)("em",{parentName:"p"},"NOT AT ALL")," how you should train a model,\nand we are doing this only for the purpose of this tutorial. Training, Testing, and Validation should always be done on different datasets. This is just a demo.")),(0,i.kt)("h2",{id:"training-with-arkitekt"},"Training with Arkitekt"),(0,i.kt)("p",null,"With Arkitekt we wanted to make it easy to train deep learning models, but also to give developers the flexibility to adapt their full training process to their needs. This is why\nwe have a very simple conceptional understanding of training, which is that training a deep learning model is simply a ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," that returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," that in a second step can be used to\nmake predictions (in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Prediction Node"),"). This means that training a model is as simple as running a ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," that returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Model"),". The developer can then decide how to train the model, and to save it in\na way that makes sense for their use case. Importantly with Arkitekt we didn't want to limit the developer to speicifc models like image-to-image, or classifications, but to give them the flexibility to\ninteract with every datatype and model type. But with great power comes great responsibility, this is why we have developed ",(0,i.kt)("inlineCode",{parentName:"p"},"Contexts")," "),(0,i.kt)("h3",{id:"training-context"},"Training Context"),(0,i.kt)("p",null,"When training a deep learning model, we need data to train on, which often comes in the form of a dataset, that relates two specific datatypes. For example, in the case of CARE we need a dataset that relates\n",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Image"),". This is where ",(0,i.kt)("inlineCode",{parentName:"p"},"Contexts")," come in."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Context")," in Arkitekt are a way to define ",(0,i.kt)("strong",{parentName:"p"},"arbitrary")," relationships between different Data Types inside the platform. This means that in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," you ",(0,i.kt)("strong",{parentName:"p"},"can")," relate a ",(0,i.kt)("inlineCode",{parentName:"p"},"ROI")," with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Image"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Table"),"\nor a ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Metric"),",  it all depends on the use case and what type of relationship you want to define. In the case of CARE we want to define a relationship between two ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," datatypes, which is what we will\ndo in this tutorial. We just want to note that ",(0,i.kt)("inlineCode",{parentName:"p"},"Contexts")," are not limited to this use case, and can be used in many different ways. Importantly you can have also have multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Contexts")," that relate the same images in different\nways (for example a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," that relates ",(0,i.kt)("inlineCode",{parentName:"p"},"Image A ")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Image B")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," that relates ",(0,i.kt)("inlineCode",{parentName:"p"},"Image A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Image C")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Image B")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Table A"),")."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"One more thing: Relationships inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," can be named, so that you can for example have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," that relates ",(0,i.kt)("inlineCode",{parentName:"p"},"Image A")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"is High SNR")," of  ",(0,i.kt)("inlineCode",{parentName:"p"},"Image B")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," that relates ",(0,i.kt)("inlineCode",{parentName:"p"},"Image A")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"is Low SNR")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"Image B"),".\nDevelopers can then use these names to define their training process.")),(0,i.kt)("h3",{id:"lets-get-to-this"},"Lets get to this"),(0,i.kt)("p",null,"Lets see how we can train a CARE model using Arkitekt. Of course we will need ",(0,i.kt)("inlineCode",{parentName:"p"},"CARE")," for that, but lets wait for a moment and first see how we can define a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," that relates two ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," datatypes.\nIndeed this relationship has nothing to do with CARE, and we can use it for many different things. But lets start with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")," that we will use for training. We will use the same data as in the CARE pape,\nwhich you can download ",(0,i.kt)("a",{parentName:"p",href:"/static/nGFP_high_snr.tif"},"here")," and ",(0,i.kt)("a",{parentName:"p",href:"/static/nGFP_low_snr.tif"},"here"),". We will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"same")," data for training and validation, but as we said before, this is just for the purpose of this tutorial."),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:s})),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," Uploading an converting the data")),(0,i.kt)("p",null,"This steps should seem ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/first_steps/interface"},"familiar"),", just a few notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We are batch uploading the data by selecting both files and ",(0,i.kt)("inlineCode",{parentName:"li"},"multi-dropping")," them on the webinterface"),(0,i.kt)("li",{parentName:"ul"},"Then we are batch converting the data through the ",(0,i.kt)("inlineCode",{parentName:"li"},"Convert Omero")," node, which will convert the data to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Image")," datatype."),(0,i.kt)("li",{parentName:"ul"},"We now have two ",(0,i.kt)("inlineCode",{parentName:"li"},"Image")," datatypes in our project, which we can see in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Data")," tab.")),(0,i.kt)("h3",{id:"creating-a-context"},"Creating a Context"),(0,i.kt)("p",null,"Now that we have our data, we can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," that relates the two ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," datatypes. To do this we could either use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Context")," button, or have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," that returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," datatype, and\ncreates this ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," for us. However we can of course do this also directly on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Data")," tab, using the similar pattern of drag-and-drop. "),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:r})),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," Creating a Context and a Relationship")),(0,i.kt)("p",null,"A few notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can always relate items in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Data")," tab by dragging one item on top of the other. This will open a dialog that will ask you to relate the two items by specifying a ",(0,i.kt)("inlineCode",{parentName:"li"},"Context")," and a ",(0,i.kt)("inlineCode",{parentName:"li"},"Relationship"),"."),(0,i.kt)("li",{parentName:"ul"},"You will see a ",(0,i.kt)("em",{parentName:"li"},"left")," to ",(0,i.kt)("em",{parentName:"li"},"right")," relationship displayed, and you can give an arbitrary name to the relationship. In this case we are using ",(0,i.kt)("inlineCode",{parentName:"li"},"gt")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"ground truth")," as our high SNR image is our ground truth\nfor the low SNR image. Just read it out loud in your head: ",(0,i.kt)("inlineCode",{parentName:"li"},"Image A")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"ground truth")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"Image B")," inside the context of ",(0,i.kt)("inlineCode",{parentName:"li"},"Tribolium Denoising"),"."),(0,i.kt)("li",{parentName:"ul"},"If the relationship or the Context did not exists before it will be created for you, otherwise you will find existing context in the dropdown."),(0,i.kt)("li",{parentName:"ul"},"Once submited your images are now related. You can see this by cliking on the newly created ",(0,i.kt)("inlineCode",{parentName:"li"},"Context")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Data")," tab, and you will see the two images related by the relationship you specified.")),(0,i.kt)("h3",{id:"training-a-care-model"},"Training a CARE model"),(0,i.kt)("p",null,"And thats it, you created a training dataset for CARE. You can of course relate more items in the same context, but for now lets leave it at that. Now we can train a CARE model (on the GPU if you have one).\nFor this we will need the ",(0,i.kt)("inlineCode",{parentName:"p"},"KARE")," app, which is just ",(0,i.kt)("inlineCode",{parentName:"p"},"CARE")," but enabled as an Arkitekt app (this freaking K is for Arkitekt, get it?). You can install it by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Install Repo")," button below."),(0,i.kt)(d.I,{repo:"kare",user:"jhnnsrs",branch:"master",mdxType:"InstallRepoButton"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Make sure to appify and deploy the plugin."),(0,i.kt)("p",null,"This app provides only two nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"Predict CARE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Train CARE"),", which allow you to train and predict CARE models, with your data. The Train CARE node will take a ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," as input, and will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," as output.\nand the ",(0,i.kt)("inlineCode",{parentName:"p"},"Predict CARE")," node will take a ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," as input and will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"Predicted Image")," as output. Nodes all the way down. Lets see how we can train a CARE model."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Sadly with modern deep learning frameworks there is not yet a ",(0,i.kt)("em",{parentName:"p"},"reliable")," way see if another process is using the GPU and some deep learning methods like Stardist and CARE sometimes still linger in the GPU memory even after\nthe process has finished. So if you run into the problem that you can't train a CARE model, because the GPU is already in use, simply stop any other deep learning process that might be running. We are working on a more user\nfriendly solution for this (also for better multi-gpu support).")),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:l})),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," Reserving and training a CARE Model")),(0,i.kt)("p",null,"A few notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You know the drill. Search for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Train CARE")," node and ",(0,i.kt)("inlineCode",{parentName:"li"},"Reserve it")," to make it available."),(0,i.kt)("li",{parentName:"ul"},"Navigate back to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Data tab")," and run it directly from your just created ",(0,i.kt)("inlineCode",{parentName:"li"},"Context"),"."),(0,i.kt)("li",{parentName:"ul"},"You will be prompted by the ",(0,i.kt)("inlineCode",{parentName:"li"},"Assign Dialog"),", which will now ask you training parameters. These are specific to CARE, and you can read more about them in the ",(0,i.kt)("a",{parentName:"li",href:"https://www.nature.com/articles/s41592-018-0216-7"},"CARE paper"),".\nWe just leave the default parameters for now, but be aware that you can change them to your needs. The default paramters are not optimal for this dataset, but we are just doing this for the purpose of this tutorial."),(0,i.kt)("li",{parentName:"ul"},"Once you submit the dialog, the training will start. You can see the progress in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Dashboard")," tab, and you will see the ",(0,i.kt)("inlineCode",{parentName:"li"},"Train CARE")," node turning green once the training is done.\nYou can also monitor the progress right there. Looking at the progress bar.")),(0,i.kt)("h3",{id:"inspecting-the-model"},"Inspecting the Model"),(0,i.kt)("p",null,"Training CARE with the default parameters can take a LOOOONG time, and depending on your hardware you might have to wait for a while until the progress bar moves. You can of course always\ncheck the output of the Deep Learning process in the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginApps")," tab, by clicking on the running ",(0,i.kt)("inlineCode",{parentName:"p"},"kare")," container and inspecting the output of the training process of the container"),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:o})),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," Inpsecting the deep learning output")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"While we are working on providing a few feedback graphs, that illustrate the training process, we are pretty much settled on the idea, that we don't want to provide a full fledged training\ninterface inside Arkitekt. We think that this is best left to the deep learning frameworks and software projects like ",(0,i.kt)("a",{parentName:"p",href:"https://wandb.ai/site"},"wandb")," that are specifically designed for this purpose.\nWe rather think Arkitekt should be seen as a tool for ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer learning")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"model adaptation"),", and not as a tool for developing deep learning models from scratch. But hey we are open to feedback,\nand you can always just integrate your favorite deep learning framework into Arkitekt and use it as you like.")),(0,i.kt)("h2",{id:"using-the-model"},"Using the Model"),(0,i.kt)("p",null,"Your training is going to take time. But at some point it will end, promise! Once it is done you can use the model to make predictions.\nFor this we will now reserve the ",(0,i.kt)("inlineCode",{parentName:"p"},"Predict CARE")," node, which in this case will take a ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," as input and return an image."),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:l})),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null," Inpsecting the deep learning output")),(0,i.kt)("p",null,"And thats it, you trained a CARE model and used it to make predictions. You can now use this model in your analysis pipeline, and you can also use it to adapt it to your specific needs.\nAlso of course you can download the model and share it with others, just like we did with the models that we are using in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/showcases/intro"},"Showcases"),"."),(0,i.kt)("h2",{id:"the-developers-perspective"},"The developers perspective"),(0,i.kt)("p",null,"If you are a developer and you want to know how to integrate your own deep learning app into Arkitekt, you can read our Developer Tutorial on how to do this ",(0,i.kt)("a",{parentName:"p",href:"/docs/developers/python/basics/deep_learning"},"here"),".\nBut also please just find here ",(0,i.kt)("strong",{parentName:"p"},"ALL")," the code for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Train CARE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Predict CARE")," nodes, which are just a few lines of code, and should be easy to understand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from arkitekt import register\nfrom mikro.api.schema import (\n    from_xarray,\n    ModelFragment,\n    create_model,\n    ModelKind,\n    RepresentationFragment,\n    links,\n    LinkableModels,\n    ContextFragment,\n)\nimport numpy as np\nfrom csbdeep.io import load_training_data\nfrom csbdeep.models import Config, CARE\nimport numpy as np\nimport uuid\nimport shutil\nfrom csbdeep.data import RawData, create_patches\nimport numpy as np\n\nfrom csbdeep.io import load_training_data\nfrom csbdeep.models import Config, CARE\nfrom arkitekt.tqdm import tqdm\n\n\n@register()\ndef train_care_model(\n    context: ContextFragment,\n    epochs: int = 100,\n    patches_per_image: int = 1024,\n    trainsteps_per_epoch: int = 400,\n    validation_split: float = 0.1,\n) -> ModelFragment:\n    """Train Care Model\n\n    Trains a care model according on a specific context.\n\n    Args:\n        context (ContextFragment): The context\n        epochs (int, optional): Number of epochs. Defaults to 10.\n        patches_per_image (int, optional): Number of patches per image. Defaults to 1024.\n        trainsteps_per_epoch (int, optional): Number of trainsteps per epoch. Defaults to 10.\n        validation_split (float, optional): Validation split. Defaults to 0.1.\n\n\n    Returns:\n        ModelFragment: The Model\n    """\n\n    training_data_id = f"context_data{context.id}"\n\n    x = links(\n        LinkableModels.GRUNNLAG_REPRESENTATION, # only works with images\n        LinkableModels.GRUNNLAG_REPRESENTATION, # that are related to each other\n        "gt", # trhough the `gt` relationship\n        context=context, # inside the given context\n    ) # HERE WE ARE GETTING THE DATA FROM THE CONTEXT, \n\n    # we are getting computing data from boths sides of the relationship\n    X = [t.left.data.sel(t=0, c=0).compute() for t in x] \n    Y = [t.right.data.sel(t=0, c=0).compute() for t in x]\n\n\n    # This is all CARE specific, and you can read more about it in the CARE paper\n    raw_data = RawData.from_arrays(X, Y, axes="ZYX")\n    print(raw_data)\n\n    X, Y, XY_axes = create_patches(\n        raw_data=raw_data,\n        patch_size=(16, 64, 64),\n        n_patches_per_image=patches_per_image,\n        save_file=f"data/{training_data_id}.npz",\n    )\n\n    (X, Y), (X_val, Y_val), axes = load_training_data(\n        f"data/{training_data_id}.npz",\n        validation_split=validation_split,\n        verbose=True,\n    )\n    config = Config(axes, train_steps_per_epoch=trainsteps_per_epoch)\n\n    model = CARE(config, training_data_id, basedir=".trainedmodels")\n\n\n    # Here we are training the model, we are utilizing a patch tqdm progress bar, that will just update\n    # the progress bar every time we train on a new patch on the Arkitekt Interface\n    for i in tqdm(range(epochs)):\n        model.train(X, Y, validation_data=(X_val, Y_val), epochs=1)\n\n    shutil.make_archive(\n        "active_model", "zip", f".trainedmodels/{training_data_id}"\n    )\n\n    # Here we are creating a model from the trained model, and we are saving it as an Akritekt Model\n    model = create_model(\n        "active_model.zip",\n        kind=ModelKind.TENSORFLOW,\n        name=f"Care Model of {context.name}",\n        contexts=[context],\n    )\n\n\n\n    shutil.rmtree(f"data")\n    return model\n\n\n@register()\ndef predict(\n    representation: RepresentationFragment, model: ModelFragment\n) -> RepresentationFragment:\n    """Predict Care\n\n    Use a care model and some images to generate images\n\n    Args:\n        model (ImageToImageModelFragment): The model\n        representations (List[RepresentationFragment]): The images\n\n    Returns:\n        List[RepresentationFragment]: The predicted images\n    """\n\n    random_dir = str(uuid.uuid4())\n    generated = []\n\n    # We are downloading the model into a temporary directory\n    with model.data as f:\n        # We are unpacking the model into a temporary directory\n\n        shutil.unpack_archive(f, f".modelcache/{random_dir}")\n\n        image_data = representation.data.sel(c=0, t=0).data.compute()\n        # We are loading the model from the temporary directory\n        care_model = CARE(config=None, name=random_dir, basedir=".modelcache")\n        # We are predicting the image\n        restored = care_model.predict(\n            image_data, "ZXY"\n        )\n        \n        # We are creating a new representation from the predicted image\n        generated = from_xarray(\n            restored,\n            name=f"Care denoised of {representation.name}",\n            tags=["denoised"],\n            origins=[representation],\n        )\n\n        shutil.rmtree(f".modelcache/{random_dir}")\n\n\n    return generated\n\n\n\n\n')))}y.isMDXComponent=!0},83177:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},68648:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);