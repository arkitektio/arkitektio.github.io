(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8804],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),p=o,f=c["".concat(d,".").concat(p)]||c[p]||u[p]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20263:(e,t,n)=>{"use strict";n.d(t,{J5d:()=>o,XTL:()=>r});var a=n(31230);let o=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),r=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const i=a.Ps`
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
    ${i}`,a.Ps`
    fragment LevelDownParagraph on ParagraphDescendent {
  size
  untypedChildren
}
    `),d=a.Ps`
    fragment LevelDownMention on MentionDescendent {
  user {
    sub
  }
}
    `,l=a.Ps`
    fragment Node on CommentNode {
  typename: __typename
  children {
    typename: __typename
    ...Leaf
    ...LevelDownParagraph
    ...LevelDownMention
  }
}
    ${i}
${s}
${d}`,m=a.Ps`
    fragment Mention on MentionDescendent {
  user {
    sub
  }
  ...Node
}
    ${l}`,c=a.Ps`
    fragment Paragraph on ParagraphDescendent {
  size
  ...Node
}
    ${l}`,u=a.Ps`
    fragment Descendent on Descendent {
  typename: __typename
  ...Mention
  ...Paragraph
  ...Leaf
}
    ${m}
${c}
${i}`,p=a.Ps`
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
    ${u}`,f=a.Ps`
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
    ${u}
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
    ${u}
${p}`,$=a.Ps`
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
    ${u}
${p}`,y=a.Ps`
    fragment ConditionEvent on ConditionEvent {
  id
  source
  createdAt
  value
  state
}
    `,h=a.Ps`
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
    ${y}`,v=a.Ps`
    fragment ListConditionSnapshot on ConditionSnapshot {
  id
  condition {
    id
    provision
  }
}
    `,w=a.Ps`
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
    `,P=a.Ps`
    fragment ReturnWidget on ReturnWidget {
  kind
  query
  choices {
    value
    label
  }
}
    `,E=a.Ps`
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
    ${w}
${P}`,b=a.Ps`
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
    ${w}
${P}
${E}`,k=a.Ps`
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
    ${w}
${P}
${b}`,D=a.Ps`
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
    ${k}`,C=a.Ps`
    fragment RetriableNode on RetriableNode {
  maxRetries
  retryDelay
}
    `,x=a.Ps`
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
    ${D}
${C}`,N=a.Ps`
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
    ${D}
${C}`,I=a.Ps`
    fragment ReactiveNode on ReactiveNode {
  ...FlowNodeCommons
  __typename
  implementation
  defaults
}
    ${D}`,S=a.Ps`
    fragment ArgNode on ArgNode {
  ...FlowNodeCommons
  __typename
}
    ${D}`,R=a.Ps`
    fragment KwargNode on KwargNode {
  ...FlowNodeCommons
  __typename
}
    ${D}`,T=a.Ps`
    fragment ReturnNode on ReturnNode {
  ...FlowNodeCommons
  __typename
}
    ${D}`,F=a.Ps`
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
    ${D}
${C}`,L=a.Ps`
    fragment GraphNode on GraphNode {
  ...FlowNodeCommons
  __typename
}
    ${D}`,W=a.Ps`
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
    ${x}
${N}
${I}
${S}
${R}
${T}
${F}
${L}`,O=a.Ps`
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
    `,_=a.Ps`
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
    ${O}`,A=a.Ps`
    fragment FlowEdgeCommons on FlowEdgeCommons {
  stream {
    ...StreamItem
  }
}
    ${_}`,M=a.Ps`
    fragment LabeledEdge on LabeledEdge {
  ...FlowEdgeCommons
  __typename
}
    ${A}`,j=a.Ps`
    fragment FancyEdge on FancyEdge {
  ...FlowEdgeCommons
  __typename
}
    ${A}`,q=a.Ps`
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
    ${M}
${j}`,H=a.Ps`
    fragment Global on Global {
  toKeys
  port {
    ...Port
  }
}
    ${k}`,B=a.Ps`
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
${k}`,U=a.Ps`
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
${B}`,z=a.Ps`
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
    `,G=a.Ps`
    fragment ListFlow on Flow {
  id
  name
  screenshot
  createdAt
  workspace {
    id
  }
}
    `,X=a.Ps`
    fragment ListWorkspace on Workspace {
  id
  name
  latestFlow {
    ...ListFlow
  }
}
    ${G}`,J=a.Ps`
    fragment Workspace on Workspace {
  id
  name
  latestFlow {
    ...Flow
  }
}
    ${B}`,K=(a.Ps`
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
    ${k}`),Y=a.Ps`
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
    ${Y}`,V=a.Ps`
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
    ${Y}
${B}`,ee=a.Ps`
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
    ${Y}
${B}`,te=a.Ps`
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
    ${f}`;a.Ps`
    mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
  replyTo(descendents: $descendents, parent: $parent) {
    ...ListComment
  }
}
    ${f}`;a.Ps`
    mutation ResolveComment($id: ID!) {
  resolveComment(id: $id) {
    ...ListComment
  }
}
    ${f}`;a.Ps`
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
    ${f}`;a.Ps`
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
    ${$}`;a.Ps`
    query ConditionSnapshots {
  conditionSnapshots {
    ...ListConditionSnapshot
  }
}
    ${v}`;a.Ps`
    query DetailConditionSnapshot($id: ID!) {
  conditionSnapshot(id: $id) {
    ...ConditionSnapshot
  }
}
    ${h}`;a.Ps`
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
    ${U}`;a.Ps`
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
    ${B}`;a.Ps`
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
    ${X}`;a.Ps`
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
    ${X}`;a.Ps`
    query SearchWorkspaces($name: String) {
  workspaces(name: $name) {
    ...ListWorkspace
  }
}
    ${X}`;a.Ps`
    query SearchFlows($name: String, $workspace: ID) {
  flows(name: $name, workspace: $workspace) {
    ...ListFlow
  }
}
    ${G}`;a.Ps`
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
    ${Y}`;a.Ps`
    query FlussGlobalSearch($search: String) {
  workspaces(search: $search) {
    ...ListWorkspace
  }
}
    ${X}`;a.Ps`
    query ReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${K}`;a.Ps`
    query DetailReactiveTemplate($id: ID, $implementation: ReactiveImplementationModelInput) {
  reactivetemplate(id: $id, implementation: $implementation) {
    ...ReactiveTemplate
  }
}
    ${K}`;a.Ps`
    query ReactiveTemplates($search: String) {
  reactivetemplates(name: $search) {
    ...ReactiveTemplate
  }
}
    ${K}`;a.Ps`
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
    ${Y}`},97724:(e,t,n)=>{"use strict";n.d(t,{k:()=>s});var a=n(87462),o=n(67294),r=n(72457);n(86180);const i=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:t,nodeTypes:n,nodes:s,edges:d,children:l,...m}=e;return o.createElement(r.tV,null,o.createElement(r.x$,(0,a.Z)({nodes:s,edges:d,onInit:i,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right"},m),l))}},54706:(e,t,n)=>{"use strict";n.d(t,{Tm:()=>i,XC:()=>d});var a=n(67294),o=n(1706);const r=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),i=()=>(0,a.useContext)(r),s=e=>{let{id:t,children:n,expandedHeight:i=200,expandedWidth:s=400,collapsedWidth:d=170,collapsedHeight:l=70}=e;const[m,c]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:d,height:l});return a.createElement(o.Resizable,{key:t,height:m.height,width:m.width,onResize:(e,t)=>{let{size:n,handle:a}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},a.createElement(r.Provider,{value:{...m,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?d:s,height:e.isExpanded?l:i})))}}},a.createElement("div",{style:{width:m.width+"px",height:m.height+"px"},className:"flex flex-col"},n)))},d=e=>t=>a.createElement(s,{id:t.id},a.createElement(e,t))},86833:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>$,contentTitle:()=>f,default:()=>w,frontMatter:()=>p,metadata:()=>g,toc:()=>y});var a=n(87462),o=n(67294),r=n(3905);const i=o.createContext({setRunState:()=>{console.error("WE ARE LACKING AN ENGINE")}}),s=()=>(0,o.useContext)(i);var d=n(72457);var l=n(54706);const m={ERROR:"border-red-900 dark:border-red-900 dark:shadow--200/10 animate-pulse dark:bg-red-800",NEXT:"border-blue-900 dark:border-blue-900 dark:shadow-blue-200/10",COMPLETE:"border-green-900 dark:border-green-900 dark:shadow-green-200/10 dark:bg-slate-800 opacity-0.8"},c=e=>{let{children:t,id:n,color:a="pink"}=e;const{runState:r}=s(),{isExpanded:i}=(0,l.Tm)();let d=r?.events?.find((e=>e?.source===n)),c=d?m[d.type]:"";return o.createElement(o.Fragment,null,o.createElement("div",{className:"px-2 py-2 z-50 shadow-xl rounded-md bg-gray-800 text-white border border-1 flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 "+c},t))};(0,l.XC)((e=>{let{data:t,id:n}=e;const{runState:a}=s(),{isExpanded:r,toggleExpanded:i}=(0,l.Tm)(),[m,u]=(0,o.useState)(),p=m||a?.events?.find((e=>e?.source===n));t.kind;return o.createElement(c,{id:n},t.instream.map(((e,t)=>o.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),t.outstream.map(((e,t)=>o.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),o.createElement("div",{className:"flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate",onDoubleClick:()=>i()},o.createElement("div",{className:"w-full flex flex-row justify-between"},t?.name)),o.createElement("p",{className:"flex-initial text-xs font-extralight truncate"},t?.name),r&&o.createElement(o.Fragment,null,o.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"},JSON.stringify(p?.value))))}));var u=n(63750);(0,l.XC)((e=>{let{data:t,id:n}=e;const{runState:a}=s(),{isExpanded:r,toggleExpanded:i}=(0,l.Tm)(),[m,p]=(0,o.useState)(),f=m||a?.events?.find((e=>e?.source===n));t.kind;return o.createElement(c,{id:n},t.instream.map(((e,t)=>o.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),t.outstream.map(((e,t)=>o.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),o.createElement("div",{className:"flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate",onDoubleClick:()=>i()},o.createElement("div",{className:"w-full flex flex-row justify-between"},t.name," ",o.createElement("button",{type:"button",className:"text-md font-light",onClick:()=>p(null==m?f:void 0),title:"Toggle freeze","aria-details":"Toggles freezing the node at the current event"},null==m?o.createElement(u.xO1,null):o.createElement(u.cuI,null)))),o.createElement("p",{className:"flex-initial text-xs font-extralight truncate"},t?.hash,f?.value),r&&o.createElement(o.Fragment,null,o.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"},f.value)))}));n(20263);(0,l.XC)((e=>{let{data:{outstream:t,instream:n},id:a}=e;const{runState:r}=s(),[i,l]=(0,o.useState)(!1),[m,u]=(0,o.useState)(!0),[p,f]=(0,o.useState)();p||r?.events?.find((e=>e?.source===a));return o.createElement(o.Fragment,null,o.createElement(c,{color:"blue",id:a},o.createElement("div",{className:"px-2 py-2"},o.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>u(!m)},"Inputs"),o.createElement("p",{className:"text-base"}))),t.map(((e,t)=>o.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+a}))))})),(0,l.XC)((e=>{let{data:{constream:t},id:n}=e;const[a,r]=(0,o.useState)(!1),[i,s]=(0,o.useState)(!0);return o.createElement(o.Fragment,null,o.createElement(c,{color:"green",id:n},!i&&o.createElement(o.Fragment,null,o.createElement("div",{className:"flex"},t?.map(((e,t)=>o.createElement(o.Fragment,null,o.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n},o.createElement("div",{className:"flex justify-between"},o.createElement("button",{type:"button",onClick:()=>alert("implement")},o.createElement(u.yvY,null))))))))),o.createElement("div",{className:"px-2 py-2"},o.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>s(!i)},"Constants"," "),o.createElement("p",{className:"text-gray-700 text-base"}))))})),(0,l.XC)((e=>{let{data:{outstream:t,instream:n},id:a}=e;const[r,i]=(0,o.useState)(!1),[s,l]=(0,o.useState)(!0);return o.createElement(o.Fragment,null,o.createElement(c,{color:"red",id:a},o.createElement("div",{className:"px-2 py-2"},o.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!s)},"Outputs"),o.createElement("p",{className:"text-gray-700 text-base"},!s&&o.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>i(!0)},"Add Documentation")))),n.map(((e,t)=>o.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.kind)).join(" | "),"data-for":"tooltip"+a}))))}));n(97724),n(32738);const p={title:"Worfklows",sidebar_label:"Workflows",sidebar_position:1},f=void 0,g={unversionedId:"features/workflows",id:"features/workflows",title:"Worfklows",description:"Workflows are a core feature of the arkitekt platform",source:"@site/docs/features/workflows.mdx",sourceDirName:"features",slug:"/features/workflows",permalink:"/docs/features/workflows",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/features/workflows.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Worfklows",sidebar_label:"Workflows",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Arkitekt trough a VPN",permalink:"/docs/features/vpn"}},$={},y=[],h={toc:y},v="wrapper";function w(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Workflows are a core feature of the arkitekt platform"))}w.isMDXComponent=!0},32738:(e,t,n)=>{var a=n(67294);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var r=function(e,t){switch(e){case"second":case"minute":case"hour":case"day":case"week":case"month":case"year":return t+" "+e+(1==t?"":"s");case"d_ago":return t+" ago";case"in_d":return"in "+t;default:return e}},i=function(e){if(!e)return new Date;if("number"==typeof e||""+parseInt(e,10)==e){if(e=parseInt(e,10),isNaN(e))return null;e=new Date(1e3*e)}if(e=new Date(e),isNaN(e.getTime()))return null;var t=e.toJSON().split(/[:\-\+TZ\. ]/);for(var n in t)if(""!==t[n]&&isNaN(parseInt(t[n],10)))return null;return e},s=function(e,t){var n,a,i;void 0===t&&(t={}),(t=o({format:"full",includeDay:!1,twentyFourHour:!1},t)).twentyFourHour?(n=e.getHours().toString(),i=""):(n=e.getHours()%12==0?"12":(e.getHours()%12).toString(),i=e.getHours()>11?"pm":"am"),a=e.getMinutes()<10?"0"+e.getMinutes():""+e.getMinutes();var s=t.translate||r,d=[s("Jan"),s("Feb"),s("Mar"),s("Apr"),s("May"),s("Jun"),s("Jul"),s("Aug"),s("Sep"),s("Oct"),s("Nov"),s("Dec")],l=[s("Sunday"),s("Monday"),s("Tuesday"),s("Wednesday"),s("Thursday"),s("Friday"),s("Saturday")],m=t.includeDay?l[e.getDay()]+", ":"";switch(t.format){case"date":return""+m+e.getDate()+" "+d[e.getMonth()]+" "+e.getFullYear();case"time":return n+":"+a+i;case"json":return e.toJSON();default:return""+m+e.getDate()+" "+d[e.getMonth()]+" "+e.getFullYear()+", "+n+":"+a+i}};e.exports=function(e){var t=e.className,n=void 0===t?"":t,o=e.style,d=void 0===o?{}:o,l=e.component,m=e.date,c=e.relative,u=e.relativeTo,p=e.options,f=e.autoUpdate,g=a.useState(0),$=g[0],y=g[1];a.useEffect((function(){if(f){var e=setInterval((function(){return y($+1)}),6e4);return function(){return clearInterval(e)}}}),[]);var h=l||"time",v=i(m);if(!v)return a.createElement(h,{},["Invalid date"]);var w=function(e,t){return Math.floor((t.getTime()-e.getTime())/1e3)}(v,i(u)||new Date),P=c&&Math.abs(w)<31536e3||u?function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=r);var a,o=e>=0,i=n||r;return e=Math.abs(e),t&&e<60?i(o?"just now":"soon"):(a=e<60?i("second",e):e<3600?i("minute",Math.round(e/60)):e<86400?i("hour",Math.round(e/3600)):e<604800?i("day",Math.round(e/86400)):e<2628e3?i("week",Math.round(e/604800)):e<31536e3?i("month",Math.round(e/2628e3)):i("year",Math.round(e/31536e3)),t?i(o?"d_ago":"in_d",a):a)}(w,!u,null==p?void 0:p.translate):s(v,p);return a.createElement(h,{className:n,style:d,timestamp:s(v,{format:"json"})},P)}}}]);