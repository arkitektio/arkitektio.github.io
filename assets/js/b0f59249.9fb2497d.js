(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[9036],{3040:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/segmentation.452be31.640.png 640w,"+a.p+"assets/ideal-img/segmentation.9c18098.1320.png 1320w,"+a.p+"assets/ideal-img/segmentation.57e8a2f.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/segmentation.452be31.640.png",width:640,height:313},{path:a.p+"assets/ideal-img/segmentation.9c18098.1320.png",width:1320,height:646},{path:a.p+"assets/ideal-img/segmentation.57e8a2f.2000.png",width:2e3,height:979}],src:a.p+"assets/ideal-img/segmentation.452be31.640.png",toString:function(){return a.p+"assets/ideal-img/segmentation.452be31.640.png"},placeholder:void 0,width:640,height:313},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVQImQHNADL/ACgoKP0uLi79Kioq+CwsLf8wMCN1AACpLSIOgf88Hn3+EQuD/jUbf/8AMTEx/zAwMP8xMTH7Kios/1paRJ+1oqF0ORmF/0Yhf/8jC4r+MxeC/wAvLy/6MDAw+zMzM/cqKiv/TE09kPbbq2ZROoL/NBOC+i8UhvoOCIf6ACoqKv8rKyv/Ly8v/y8vMP8eIBp8EQChMCQZev8uGXz/JxV+/xgLhf8ALCwsh0hISJhTU1OXOzs8nS0tHz4HAKEaJCGMlmlNhppJNpScIhiMjYzvTWkrbiOaAAAAAElFTkSuQmCC"}},71698:(e,t,a)=>{"use strict";a.d(t,{I:()=>m});var n=a(37887),r=a(69819),i=a(31230),o=a(67294);const l=i.ZP`
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
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",m=(0,r.Zh)((e=>{let{branch:t,repo:a,user:i}=e;const{client:m}=(0,r.AA)(),c=`${i}/${a}:${t}`,{data:u,refetch:p}=(0,n.a)(s,{client:m,variables:{tag:c},pollInterval:3e3});return o.createElement(o.Fragment,null,u?.githubRepo?o.createElement("button",{className:d+"bg-green-300"}," \u2705 ",c):o.createElement("button",{onClick:async()=>{try{const{data:e}=await m.mutate({mutation:l,variables:{branch:t,repo:a,user:i}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",c))}),o.createElement("div",{className:d+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},21262:(e,t,a)=>{"use strict";a.d(t,{n:()=>ot});var n=a(67294),r=a(98268),i=a(83117);a(86180);const o=e=>console.log("flow loaded:",e),l=e=>{let{edgeTypes:t,nodeTypes:a,nodes:l,edges:s,children:d,...m}=e;return n.createElement(r.tV,null,n.createElement(r.x$,(0,i.Z)({nodes:l,edges:s,onInit:o,nodeTypes:a,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),d))};function s(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,m=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function c(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(m,"{");console.log(t);let a=JSON.parse(t);return console.log(a),a}const u=e=>e?.map((e=>{if(e){const{id:t,position:a,__typename:n,...r}=e;return{type:n,id:t,position:a,data:{__typename:n,...r},dragHandle:".custom-drag-handle",parentNode:r.parentNode?r.parentNode:void 0}}})).filter(s)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:a,sourceHandle:n,target:r,targetHandle:i,__typename:o,...l}=e;return{id:t,type:o,source:a,sourceHandle:n,target:r,targetHandle:i,data:{__typename:o,...l}}}})).filter(s)||[],g=n.createContext({}),f=()=>(0,n.useContext)(g);var h=a(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),b=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const $=h.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,k=(h.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${$}
`,h.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),_=h.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,v=h.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${$}
  ${k}
  ${_}
`,w=h.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${v}
`,E=h.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${v}
`,N=h.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${w}
  ${E}
  ${$}
`,P=h.Ps`
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
`,x=h.Ps`
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
`,C=h.Ps`
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
`,S=h.Ps`
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
`,L=h.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,A=h.Ps`
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
`,R=h.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,D=h.Ps`
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
`,T=h.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,I=h.Ps`
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
  ${D}
  ${T}
`,W=h.Ps`
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
  ${D}
  ${T}
  ${I}
`,F=h.Ps`
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
  ${D}
  ${T}
  ${W}
`,U=h.Ps`
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
`,O=h.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,H=h.Ps`
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
`,M=h.Ps`
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
`,q=h.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${U}
`,B=h.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${U}
`,G=h.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${U}
`,z=h.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${U}
`,Z=h.Ps`
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
`,K=h.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${U}
`,Y=h.Ps`
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
  ${M}
  ${q}
  ${B}
  ${G}
  ${z}
  ${Z}
  ${K}
`,j=h.Ps`
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
`,V=h.Ps`
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
  ${j}
`,X=h.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${V}
`,J=h.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${X}
`,Q=h.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${X}
`,ee=h.Ps`
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
`,te=h.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${F}
`,ae=h.Ps`
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
`,ne=h.Ps`
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
`,re=h.Ps`
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
`,ie=h.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,oe=h.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${ie}
`,le=h.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${ae}
`,se=(h.Ps`
  fragment RunLog on RunLog {
    id
    node
    log
  }
`,h.Ps`
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
`),de=h.Ps`
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
`,me=h.Ps`
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
`,ce=h.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,ue=h.Ps`
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
`,pe=h.Ps`
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
`,ge=h.Ps`
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
`;h.Ps`
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
`;h.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${x}
`;h.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${x}
`;h.Ps`
  mutation DeleteCondition($id: ID!) {
    deleteCondition(id: $id) {
      id
    }
  }
`;h.Ps`
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
`;h.Ps`
  mutation UpdateFlow($id: ID!, $graph: GraphInput!, $screenshot: ImageFile) {
    updateworkspace(id: $id, graph: $graph, screenshot: $screenshot) {
      ...Workspace
    }
  }
  ${le}
`;h.Ps`
  mutation DeleteFlow($id: ID!) {
    deleteFlow(id: $id) {
      id
    }
  }
`;h.Ps`
  mutation CreateVanillaDiagram($name: String, $restrict: [String]) {
    drawvanilla(name: $name, restrict: $restrict) {
      ...Workspace
    }
  }
  ${le}
`;h.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${le}
`;h.Ps`
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
`;h.Ps`
  mutation DeleteSnapshot($id: ID!) {
    deleteSnapshot(id: $id) {
      id
    }
  }
`;h.Ps`
  mutation DeleteRun($id: ID!) {
    deleteRun(id: $id) {
      id
    }
  }
`;h.Ps`
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
`;h.Ps`
  mutation DeleteWorkspace($id: ID!) {
    deleteWorkspace(id: $id) {
      id
    }
  }
`;h.Ps`
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
`;h.Ps`
  query CommentsFor($id: ID!, $model: CommentableModels!) {
    commentsfor(model: $model, id: $id) {
      ...ListComment
    }
  }
  ${x}
`;h.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${C}
`;h.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${S}
`;h.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${R}
`;h.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${A}
`;h.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${re}
`;h.Ps`
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
`;h.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${ne}
`;h.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${L}
`;h.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${ae}
`;h.Ps`
  query Workspace($id: ID!) {
    workspace(id: $id) {
      ...Workspace
    }
  }
  ${le}
`;h.Ps`
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
`;h.Ps`
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
`;h.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${oe}
`;h.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${ie}
`;h.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${ce}
`;h.Ps`
  query DetailSnapshot($id: ID!) {
    snapshot(id: $id) {
      ...Snapshot
    }
  }
  ${me}
`;h.Ps`
  query Runs {
    runs {
      ...ListRun
    }
  }
  ${ge}
`;h.Ps`
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
`;h.Ps`
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
`;h.Ps`
  query DetailRun($id: ID, $assignation: ID) {
    run(id: $id, assignation: $assignation) {
      ...Run
    }
  }
  ${ue}
`;h.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${pe}
`;h.Ps`
  query EventsBetween($id: ID!, $min: Int, $max: Int) {
    eventsBetween(run: $id, min: $min, max: $max) {
      ...RunEvent
    }
  }
  ${de}
`;h.Ps`
  query FlussGlobalSearch($search: String) {
    workspaces(search: $search) {
      ...ListWorkspace
    }
  }
  ${oe}
`;h.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${se}
`;h.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${se}
`;h.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${se}
`;h.Ps`
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
`;h.Ps`
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
`;const fe=e=>{const{}=f(),{id:t,sourcePosition:a,targetPosition:i,sourceX:o,sourceY:l,targetX:s,targetY:d,style:m,markerStart:c,markerEnd:u,data:p}=e,[g,h,y]=(0,r.OW)({sourcePosition:a,targetPosition:i,sourceX:o,sourceY:l,targetX:s,targetY:d});return n.createElement(n.Fragment,null,n.createElement("path",{id:t,style:m,className:"react-flow__edge-path",d:g}),n.createElement(r.XQ,null,n.createElement("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${h}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex "},p?.stream.map(((e,t)=>n.createElement("span",{className:"text-xs",key:t},(e?.kind==b.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")))))))};var he=a(1706);const ye=n.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),be=e=>{let{id:t,children:a,expandedHeight:r=200,expandedWidth:i=400,collapsedWidth:o=170,collapsedHeight:l=70}=e;const[s,d]=(0,n.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:o,height:l});return n.createElement(he.Resizable,{key:t,height:s.height,width:s.width,onResize:(e,t)=>{let{size:a,handle:n}=t;d((e=>({...e,width:a.width,height:a.height,isExpanded:a.height>200&&a.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},n.createElement(ye.Provider,{value:{...s,toggleExpanded:()=>{d((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?o:i,height:e.isExpanded?l:r})))}}},n.createElement("div",{style:{width:s.width+"px",height:s.height+"px"},className:"flex flex-col"},a)))},$e=e=>t=>n.createElement(be,{id:t.id},n.createElement(e,t)),ke={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},_e=e=>{let{children:t,id:a,color:r="white"}=e;const[i,o]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${ke[r]}`},t))};var ve=a(55770),we=a(52203),Ee=a(90512),Ne=a(57851);function Pe(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,Ne.m)((0,Ee.W)(t))}const xe=we.fC,Ce=we.xz,Se=n.forwardRef(((e,t)=>{let{className:a,align:r="center",sideOffset:o=4,...l}=e;return n.createElement(we.h_,null,n.createElement(we.VY,(0,i.Z)({ref:t,align:r,sideOffset:o,className:Pe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a)},l)))}));Se.displayName=we.VY.displayName;const Le=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Ae=()=>n.createElement("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Re=(e,t,a)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,a)))),De=e=>{const{data:t,error:a,loading:r}=(0,ve.un)(h.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return n.createElement(n.Fragment,null,a?n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Le,null),n.createElement("div",{className:"text-yellow-500 my-auto"}," ",e.name," ")):n.createElement("div",{className:"flex flex-row gap-2"},n.createElement(Ae,null),n.createElement("div",{className:"text-green-500 my-auto"}," ",t?.node?.name," ")))},Te=e=>{const{flow:t}=f(),a=e.data.defaults&&Object.keys(e.data.defaults).filter((a=>e.data.defaults[a]&&null!=e.data.defaults[a]&&0!=e.data.defaults[a]||Re(t,e.id,a)))||[];return n.createElement(xe,null,n.createElement(Ce,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full "},n.createElement(ve.Z6,{fallback:n.createElement(n.Fragment,null," ",e.data?.name)},n.createElement(De,{hash:e.data.hash,name:e.data.name}))),n.createElement(Se,{className:"text-xs bg-back-800 my-auto  "}," ",e.data?.description,a&&a.length>0&&n.createElement("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3"},n.createElement("div",{className:"font-semibold text-md mb-2"},"Constants "),n.createElement("div",{className:"flex flex-row gap-2 text-white"},n.createElement("div",{className:"flex grid grid-cols-2 gap-2"},a.map((a=>{const r=Re(t,e.id,a);return n.createElement(n.Fragment,null,n.createElement("div",{className:" my-auto"}," ",a," "),r?n.createElement("div",{className:"text-primary-300"}," ",n.createElement("div",{className:"font-bold inline"},"Global "),r.port.key," "):n.createElement("div",{className:"my-auto"}," ",e.data.defaults[a]," "))})))))))},Ie=$e((e=>{const{isExpanded:t,toggleExpanded:a}=(0,n.useContext)(ye);return n.createElement(_e,{id:e.id},e.data.instream.map(((e,t)=>n.createElement(r.HH,{type:"target",position:r.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>n.createElement(r.HH,{type:"source",position:r.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),n.createElement("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden "},n.createElement(Te,e)))})),We=$e((e=>{let{data:{outstream:t,instream:a},id:i}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(_e,{color:"blue",id:i},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Inputs"," "))),t.map(((e,t)=>n.createElement(r.HH,{type:"source",position:r.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+i}))))}));var Fe=a(63750);const Ue=$e((e=>{let{data:{constream:t},id:a}=e;const[r,i]=(0,n.useState)(!1),[o,l]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(_e,{color:"green",id:a},!o&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex"},t?.map(((e,t)=>n.createElement(n.Fragment,null,n.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+a},n.createElement("div",{className:"flex justify-between"},n.createElement("button",{type:"button",onClick:()=>alert("implement")},n.createElement(Fe.yvY,null))))))))),n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!o)},"Constants"," "),n.createElement("p",{className:"text-gray-700 text-base"}))))})),Oe=$e((e=>{let{data:{outstream:t,instream:a},id:i}=e;const[o,l]=(0,n.useState)(!1),[s,d]=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement(_e,{color:"red",id:i},n.createElement("div",{className:"px-2 py-2"},n.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s)},"Outputs"),n.createElement("p",{className:"text-gray-700 text-base"},n.createElement(n.Fragment,null,a[0]?.map((e=>e?.kind)).join(" | "),n.createElement("br",null)),!s&&n.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0)},"Add Documentation")))),a.map(((e,t)=>n.createElement(r.HH,{type:"target",position:r.Ly.Left,id:"arg_"+t,style:{background:"#555"}}))))})),He="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Me={ArkitektNode:Ie,ArkitektFilterNode:Ie,LocalNode:Ie,ReactiveNode:e=>{let{data:{outstream:t,instream:a,constream:i,implementation:o,defaults:l},id:s}=e;const d=(0,r.Bn)();return(0,n.useEffect)((()=>{console.log("Update node internals",s,o),d(s)}),[t,a,i]),n.createElement(n.Fragment,null,n.createElement("div",{className:"custom-drag-handle text-xs "},o&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.Gate].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})),o&&[y.Split].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(o)&&n.createElement("div",{className:He},o," ",l?.number&&n.createElement("b",{className:"font-bold"},l.number)),o&&[y.Ensure].includes(o)&&n.createElement("div",{className:He},n.createElement("h1",null,"!")),o&&[y.ToList].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),n.createElement("text",null,o)),o&&[y.Omit].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"}},o)),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})),o&&[y.If].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"If")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),o&&[y.And].includes(o)&&n.createElement("svg",{height:"40",width:"40"},n.createElement("text",null,n.createElement("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"}},"And")),n.createElement("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})),i?.map(((e,t,a)=>n.createElement(r.HH,{type:"target",position:r.Ly.Bottom,id:`kwarg_${t}`,key:t,style:{background:"#555",marginTop:10,height:"1em"}}))),a?.map(((e,t,a)=>n.createElement(r.HH,{key:t,type:"target",position:r.Ly.Left,id:`arg_${t}`,style:{top:100/a.length*t+45/a.length+"%",background:"#555",height:"1em"}}))),t?.map(((e,t,a)=>n.createElement(r.HH,{key:t,type:"source",position:r.Ly.Right,id:`return_${t}`,style:{top:100/a.length*t+46/a.length+"%",background:"#555"}})))))},ArgNode:We,ReturnNode:Oe,KwargNode:Ue,GraphNode:()=>null},qe={LabeledEdge:fe,FancyEdge:fe},Be=e=>{let{flow:t}=e;const[a,i,o]=(0,r.Rr)(u(t.graph?.nodes)),[s,d,m]=(0,r.ll)(p(t.graph?.edges));return n.createElement(g.Provider,{value:{flow:t}},n.createElement(l,{nodes:a,edges:s,onNodesChange:o,onEdgesChange:m,elementsSelectable:!0,nodeTypes:Me,edgeTypes:qe,fitView:!0,attributionPosition:"bottom-right"}))};var Ge=a(30210),ze=a(39903);const Ze=e=>{const{user:t}=(0,Ge.gX)(),{fakts:a}=(0,ze.sT)();return n.createElement("div",{className:"relative "+e.className},e.children,!t||!a&&n.createElement("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center"},e.hideLabel)," ")};var Ke=a(68947),Ye=a(50319),je=a(12854),Ve=a(79592);const Xe=je.fC,Je=(je.xz,je.h_),Qe=(je.x8,n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(je.aV,(0,i.Z)({ref:t,className:Pe("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},r))})));Qe.displayName=je.aV.displayName;const et=n.forwardRef(((e,t)=>{let{className:a,children:r,...o}=e;return n.createElement(Je,null,n.createElement(Qe,null),n.createElement(je.VY,(0,i.Z)({ref:t,className:Pe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a)},o),r,n.createElement(je.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},n.createElement(Ve.Z,{className:"h-4 w-4"}),n.createElement("span",{className:"sr-only"},"Close"))))}));et.displayName=je.VY.displayName;const tt=e=>{let{className:t,...a}=e;return n.createElement("div",(0,i.Z)({className:Pe("flex flex-col space-y-1.5 text-center sm:text-left",t)},a))};tt.displayName="DialogHeader";const at=n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(je.Dx,(0,i.Z)({ref:t,className:Pe("text-lg font-semibold leading-none tracking-tight",a)},r))}));at.displayName=je.Dx.displayName;const nt=n.forwardRef(((e,t)=>{let{className:a,...r}=e;return n.createElement(je.dk,(0,i.Z)({ref:t,className:Pe("text-sm text-muted-foreground",a)},r))}));nt.displayName=je.dk.displayName;const rt=h.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,it=e=>{let{flow:t,blockImport:a}=e;const{client:r}=(0,Ke.dB)(),[i,o]=(0,Ye.D)(rt,{client:r}),[l,d]=(0,n.useState)(!1),m=async()=>{try{const a=(e=u(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:a,type:n,parentNode:r,data:{outstream:i,constream:o,instream:l,...d}}=e;return{outstream:i?.map((e=>e?e.filter(s).map(c):[]))||[[]],constream:o?.map((e=>e?e.filter(s).map(c):[]))||[[]],instream:l?.map((e=>e?e.filter(s).map(c):[]))||[[]],id:t,position:{x:a.x,y:a.y},typename:n||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:r,interface:d.interface}}})).filter(s)||[]||[]),n=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:a,sourceHandle:n,target:r,targetHandle:i,type:o,data:l}=e;return{id:t,typename:o||"Fake type",source:a,sourceHandle:n||"returns",target:r,targetHandle:i||"args",stream:l?.stream.filter(s).map(c)||[]}}})).filter(s)||[])(p(t.graph.edges));let r={nodes:a.filter(s).map(c),edges:n.filter(s).map(c),globals:t.graph.globals.filter(s).map(c),args:t.graph.args.filter(s).map(c),returns:t.graph.returns.filter(s).map(c)};await i({variables:{name:t.name,graph:r}});d(!0)}catch(a){alert(a.message)}var e};return n.createElement(n.Fragment,null,n.createElement(Xe,{open:l,onOpenChange:d},n.createElement(et,null,n.createElement(tt,null,n.createElement(at,null,"Succesfully imported workflow"),n.createElement(nt,null,"We have imported the workflow into Arkitekt. You can now use it in your flows.")))),n.createElement("button",{onClick:()=>m(),disabled:a,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"},"Re-Import into Arkitekt"))},ot=e=>n.createElement("div",{className:"border border-1 rounded border-gray-800"},n.createElement("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative"},n.createElement(Be,{flow:e.flow})),n.createElement(Ze,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow"},n.createElement(Ke.Ot,null,n.createElement(it,{flow:e.flow,blockImport:e.blockImport}))))},98575:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));a(83177),a(68648),a(21262),a(15944),a(3040),a(73266),a(71698);const i={title:"Train a Deep Learning Model",sidebar_label:"Train a Deep Learning Model",sidebar_position:3},o="Coming Soon",l={unversionedId:"introduction/advanced_tutorial/training",id:"introduction/advanced_tutorial/training",title:"Train a Deep Learning Model",description:"",source:"@site/docs/introduction/advanced_tutorial/training.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/training",permalink:"/docs/introduction/advanced_tutorial/training",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/training.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Train a Deep Learning Model",sidebar_label:"Train a Deep Learning Model",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Parallelization",permalink:"/docs/introduction/advanced_tutorial/parallelization"},next:{title:"Live Analysis",permalink:"/docs/introduction/advanced_tutorial/live_analysis"}},s={},d=[],m={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"coming-soon"},"Coming Soon"))}u.isMDXComponent=!0},73266:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/medias/fiji_segmentation-36956e47929d30213356456ff3c0b1e3.webm"},83177:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},68648:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);