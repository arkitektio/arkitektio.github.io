"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8804],{72813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>ge,contentTitle:()=>ue,default:()=>we,frontMatter:()=>pe,metadata:()=>$e,toc:()=>fe});var a=n(87462),o=n(67294),i=n(3905);const r=o.createContext({setRunState:()=>{console.error("WE ARE LACKING AN ENGINE")}}),s=()=>(0,o.useContext)(r);var d=n(72457);var l=n(1706);const m=o.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),c=()=>(0,o.useContext)(m),p=e=>{let{id:t,children:n,expandedHeight:a=200,expandedWidth:i=400,collapsedWidth:r=170,collapsedHeight:s=70}=e;const[d,c]=(0,o.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:r,height:s});return o.createElement(l.Resizable,{key:t,height:d.height,width:d.width,onResize:(e,t)=>{let{size:n,handle:a}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40]},o.createElement(m.Provider,{value:{...d,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?r:i,height:e.isExpanded?s:a})))}}},o.createElement("div",{style:{width:d.width+"px",height:d.height+"px"},className:"flex flex-col"},n)))},u=e=>t=>o.createElement(p,{id:t.id},o.createElement(e,t)),$={ERROR:"border-red-900 dark:border-red-900 dark:shadow--200/10 animate-pulse dark:bg-red-800",NEXT:"border-blue-900 dark:border-blue-900 dark:shadow-blue-200/10",COMPLETE:"border-green-900 dark:border-green-900 dark:shadow-green-200/10 dark:bg-slate-800 opacity-0.8"},g=e=>{let{children:t,id:n,color:a="pink"}=e;const{runState:i}=s(),{isExpanded:r}=c();let d=i?.events?.find((e=>e?.source===n)),l=d?$[d.type]:"";return o.createElement(o.Fragment,null,o.createElement("div",{className:"px-2 py-2 z-50 shadow-xl rounded-md bg-gray-800 text-white border border-1 flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 "+l},t))};u((e=>{let{data:t,id:n}=e;const{runState:a}=s(),{isExpanded:i,toggleExpanded:r}=c(),[l,m]=(0,o.useState)(),p=l||a?.events?.find((e=>e?.source===n));t.kind;return o.createElement(g,{id:n},t.instream.map(((e,t)=>o.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),t.outstream.map(((e,t)=>o.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),o.createElement("div",{className:"flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate",onDoubleClick:()=>r()},o.createElement("div",{className:"w-full flex flex-row justify-between"},t?.name)),o.createElement("p",{className:"flex-initial text-xs font-extralight truncate"},t?.name),i&&o.createElement(o.Fragment,null,o.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"},JSON.stringify(p?.value))))}));var f=n(63750);u((e=>{let{data:t,id:n}=e;const{runState:a}=s(),{isExpanded:i,toggleExpanded:r}=c(),[l,m]=(0,o.useState)(),p=l||a?.events?.find((e=>e?.source===n));t.kind;return o.createElement(g,{id:n},t.instream.map(((e,t)=>o.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),t.outstream.map(((e,t)=>o.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"},"data-tip":e&&e.length>0?e.map((e=>`${e?.kind} ${e?.key}`)).join("|"):"Event","data-for":"tooltip"+n}))),o.createElement("div",{className:"flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate",onDoubleClick:()=>r()},o.createElement("div",{className:"w-full flex flex-row justify-between"},t.name," ",o.createElement("button",{type:"button",className:"text-md font-light",onClick:()=>m(null==l?p:void 0),title:"Toggle freeze","aria-details":"Toggles freezing the node at the current event"},null==l?o.createElement(f.xO1,null):o.createElement(f.cuI,null)))),o.createElement("p",{className:"flex-initial text-xs font-extralight truncate"},t?.hash,p?.value),i&&o.createElement(o.Fragment,null,o.createElement("div",{className:"px-2 py-2 flex-grow flex flex-col overflow-hidden"},p.value)))}));var h=n(31230);const y=h.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,w=(h.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${y}
`,h.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),P=h.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,k=h.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${y}
  ${w}
  ${P}
`,v=h.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${k}
`,E=h.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${k}
`,x=h.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${v}
  ${E}
  ${y}
`,b=h.Ps`
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
  ${x}
`,C=h.Ps`
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
  ${x}
  ${b}
`,D=h.Ps`
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
  ${x}
  ${b}
`,N=h.Ps`
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
  ${x}
  ${b}
`,I=h.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,R=h.Ps`
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
  ${I}
`,S=h.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,L=h.Ps`
  fragment Widget on Widget {
    kind
    query
    hook
    ward
    min
    placeholder
    max
    choices {
      value
      label
    }
    asParagraph
  }
`,F=h.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
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
    }
  }
  ${L}
  ${F}
`,_=h.Ps`
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
    nullable
  }
  ${L}
  ${F}
  ${W}
`,q=h.Ps`
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
  }
  ${_}
`,T=h.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,A=h.Ps`
  fragment ArkitektNode on ArkitektNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    name
    description
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
  ${q}
  ${T}
`,M=h.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${q}
`,H=h.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${q}
`,B=h.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${q}
`,j=h.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${q}
`,z=h.Ps`
  fragment LocalNode on LocalNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    name
    description
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
  ${q}
  ${T}
`,G=h.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${q}
`,K=h.Ps`
  fragment FlowNode on FlowNode {
    id
    position {
      x
      y
    }
    typename
    parentNode
    ...ArkitektNode
    ...ReactiveNode
    ...ArgNode
    ...KwargNode
    ...ReturnNode
    ...LocalNode
    ...GraphNode
  }
  ${A}
  ${M}
  ${H}
  ${B}
  ${j}
  ${z}
  ${G}
`,O=h.Ps`
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
  }
`,X=h.Ps`
  fragment StreamItem on StreamItem {
    key
    kind
    identifier
    scope
    nullable
    child {
      ...StreamItemChild
    }
  }
  ${O}
`,U=h.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${X}
`,J=h.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${U}
`,Q=h.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${U}
`,V=h.Ps`
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
`,Y=h.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${_}
`,Z=h.Ps`
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
  ${V}
  ${Y}
  ${_}
`,ee=h.Ps`
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
  ${I}
  ${Z}
`,te=h.Ps`
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
`,ne=h.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,ae=h.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${ne}
`,oe=h.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${Z}
`,ie=(h.Ps`
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
  ${_}
`),re=h.Ps`
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
`,se=h.Ps`
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
  ${re}
`,de=h.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,le=h.Ps`
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
  ${re}
  ${Z}
`,me=h.Ps`
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
  ${re}
  ${Z}
`,ce=h.Ps`
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
  ${C}
`;h.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${C}
`;h.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${C}
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
  ${oe}
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
  ${oe}
`;h.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${oe}
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
  ${C}
`;h.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${D}
`;h.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${N}
`;h.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${S}
`;h.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${R}
`;h.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${te}
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
  ${te}
`;h.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${ee}
`;h.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${I}
`;h.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${Z}
`;h.Ps`
  query Workspace($id: ID!) {
    workspace(id: $id) {
      ...Workspace
    }
  }
  ${oe}
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
  ${ae}
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
  ${ae}
`;h.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${ae}
`;h.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${ne}
`;h.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${de}
`;h.Ps`
  query DetailSnapshot($id: ID!) {
    snapshot(id: $id) {
      ...Snapshot
    }
  }
  ${se}
`;h.Ps`
  query Runs {
    runs {
      ...ListRun
    }
  }
  ${ce}
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
  ${ce}
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
  ${ce}
`;h.Ps`
  query DetailRun($id: ID, $assignation: ID) {
    run(id: $id, assignation: $assignation) {
      ...Run
    }
  }
  ${le}
`;h.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${me}
`;h.Ps`
  query EventsBetween($id: ID!, $min: Int, $max: Int) {
    eventsBetween(run: $id, min: $min, max: $max) {
      ...RunEvent
    }
  }
  ${re}
`;h.Ps`
  query FlussGlobalSearch($search: String) {
    workspaces(search: $search) {
      ...ListWorkspace
    }
  }
  ${ae}
`;h.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${ie}
`;h.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${ie}
`;h.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${ie}
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
  ${I}
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
  ${re}
`;u((e=>{let{data:{outstream:t,instream:n},id:a}=e;const{runState:i}=s(),[r,l]=(0,o.useState)(!1),[m,c]=(0,o.useState)(!0),[p,u]=(0,o.useState)();p||i?.events?.find((e=>e?.source===a));return o.createElement(o.Fragment,null,o.createElement(g,{color:"blue",id:a},o.createElement("div",{className:"px-2 py-2"},o.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!m)},"Inputs"),o.createElement("p",{className:"text-base"}))),t.map(((e,t)=>o.createElement(d.HH,{type:"source",position:d.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+a}))))})),u((e=>{let{data:{constream:t},id:n}=e;const[a,i]=(0,o.useState)(!1),[r,s]=(0,o.useState)(!0);return o.createElement(o.Fragment,null,o.createElement(g,{color:"green",id:n},!r&&o.createElement(o.Fragment,null,o.createElement("div",{className:"flex"},t?.map(((e,t)=>o.createElement(o.Fragment,null,o.createElement("div",{key:t,className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n},o.createElement("div",{className:"flex justify-between"},o.createElement("button",{type:"button",onClick:()=>alert("implement")},o.createElement(f.yvY,null))))))))),o.createElement("div",{className:"px-2 py-2"},o.createElement("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>s(!r)},"Constants"," "),o.createElement("p",{className:"text-gray-700 text-base"}))))})),u((e=>{let{data:{outstream:t,instream:n},id:a}=e;const[i,r]=(0,o.useState)(!1),[s,l]=(0,o.useState)(!0);return o.createElement(o.Fragment,null,o.createElement(g,{color:"red",id:a},o.createElement("div",{className:"px-2 py-2"},o.createElement("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!s)},"Outputs"),o.createElement("p",{className:"text-gray-700 text-base"},!s&&o.createElement("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>r(!0)},"Add Documentation")))),n.map(((e,t)=>o.createElement(d.HH,{type:"target",position:d.Ly.Left,id:"arg_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.kind)).join(" | "),"data-for":"tooltip"+a}))))}));n(86180);n(32738);const pe={title:"Worfklows",sidebar_label:"Workflows",sidebar_position:1},ue=void 0,$e={unversionedId:"features/workflows",id:"features/workflows",title:"Worfklows",description:"Workflows are a core feature of the arkitekt platform",source:"@site/docs/features/workflows.mdx",sourceDirName:"features",slug:"/features/workflows",permalink:"/doks/docs/features/workflows",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/features/workflows.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Worfklows",sidebar_label:"Workflows",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Live Queries",permalink:"/doks/docs/features/live_queries"},next:{title:"Interactive Workflow",permalink:"/doks/docs/examples/interactive_workflow"}},ge={},fe=[],he={toc:fe},ye="wrapper";function we(e){let{components:t,...n}=e;return(0,i.kt)(ye,(0,a.Z)({},he,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Workflows are a core feature of the arkitekt platform"))}we.isMDXComponent=!0}}]);