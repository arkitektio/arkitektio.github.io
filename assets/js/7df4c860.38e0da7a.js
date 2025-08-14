(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8995],{5584:(e,i,t)=>{"use strict";t.d(i,{W:()=>te});var a=t(2135),n=t(96540),r=t(10518),l=t(31635),s=t(60144),o=t(15381),d=t(75443),u=t(9211),c=t(70111);var m=t(25395),p=t(76234),g=t(64721);const h="kabinet",f=(e,i)=>function(e,i){var t=(0,c.m)(null==i?void 0:i.client);(0,d.D$)(e,d.KG.Mutation);var a=n.useState({called:!1,loading:!1,client:t}),r=a[0],m=a[1],p=n.useRef({result:r,mutationId:0,isMounted:!0,client:t,mutation:e,options:i});Object.assign(p.current,{client:t,options:i,mutation:e});var g=n.useCallback((function(e){void 0===e&&(e={});var i=p.current,t=i.options,a=i.mutation,n=(0,l.__assign)((0,l.__assign)({},t),{mutation:a}),r=e.client||p.current.client;p.current.result.loading||n.ignoreResults||!p.current.isMounted||m(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var d=++p.current.mutationId,c=(0,s.l)(n,e);return r.mutate(c).then((function(i){var t,a,n=i.data,l=i.errors,s=l&&l.length>0?new u.K4({graphQLErrors:l}):void 0,g=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(s&&g&&g(s,c),d===p.current.mutationId&&!c.ignoreResults){var h={called:!0,loading:!1,data:n,error:s,client:r};p.current.isMounted&&!(0,o.L)(p.current.result,h)&&m(p.current.result=h)}var f=e.onCompleted||(null===(a=p.current.options)||void 0===a?void 0:a.onCompleted);return s||null==f||f(i.data,c),i})).catch((function(i){var t;if(d===p.current.mutationId&&p.current.isMounted){var a={loading:!1,error:i,data:void 0,called:!0,client:r};(0,o.L)(p.current.result,a)||m(p.current.result=a)}var n=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(n)return n(i,c),{data:void 0,errors:i};throw i}))}),[]),h=n.useCallback((function(){p.current.isMounted&&m({called:!1,loading:!1,client:t})}),[]);return n.useEffect((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[g,(0,l.__assign)({reset:h},r)]}(e,{...i,client:(0,p.h1)(h).client,onError:e=>{g.oR.error("Error in useMutation: "+e.message)}}),$={};const b=a.J1`
    fragment ListBackend on Backend {
  id
  user {
    sub
  }
  client {
    clientId
  }
  name
  kind
}
    `,k=a.J1`
    fragment CustomEffect on CustomEffect {
  __typename
  kind
  hook
  ward
}
    `,y=a.J1`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `,_=a.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${k}
${y}`,w=a.J1`
    fragment StringAssignWidget on StringAssignWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `,v=a.J1`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `,x=a.J1`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `,I=a.J1`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${v}
${x}`,S=a.J1`
    fragment FilterPort on Port {
  __typename
  kind
  key
  identifier
  assignWidget {
    ... on SearchAssignWidget {
      query
    }
  }
  returnWidget {
    ...ReturnWidget
  }
  description
  nullable
}
    ${I}`,R=a.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${S}`,W=a.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,L=a.J1`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `,A=a.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,P=a.J1`
    fragment StateChoiceAssignWidget on StateChoiceAssignWidget {
  __typename
  kind
  followValue
  stateChoices
}
    `,T=a.J1`
    fragment AssignWidget on AssignWidget {
  __typename
  kind
  ...StringAssignWidget
  ...SearchAssignWidget
  ...SliderAssignWidget
  ...ChoiceAssignWidget
  ...CustomAssignWidget
  ...StateChoiceAssignWidget
}
    ${w}
${R}
${W}
${L}
${A}
${P}`,D=a.J1`
    fragment ChildPortNested on Port {
  __typename
  kind
  key
  identifier
  children {
    kind
    identifier
    assignWidget {
      ...AssignWidget
    }
    returnWidget {
      ...ReturnWidget
    }
  }
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  description
  nullable
}
    ${T}
${I}`,J=a.J1`
    fragment ChildPort on Port {
  __typename
  kind
  key
  identifier
  children {
    ...ChildPortNested
  }
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  nullable
  description
}
    ${D}
${T}
${I}`,C=a.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,j=a.J1`
    fragment Port on Port {
  __typename
  key
  label
  nullable
  description
  effects {
    ...PortEffect
  }
  assignWidget {
    ...AssignWidget
  }
  returnWidget {
    ...ReturnWidget
  }
  kind
  identifier
  children {
    ...ChildPort
  }
  default
  nullable
  validators {
    ...Validator
  }
}
    ${_}
${T}
${I}
${J}
${C}`,q=a.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,O=a.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,V=a.J1`
    fragment ListFlavour on Flavour {
  id
  name
  release {
    id
    version
    app {
      identifier
    }
  }
  selectors {
    ...CudaSelector
    ...RocmSelector
  }
}
    ${q}
${O}`,N=a.J1`
    fragment Definition on Definition {
  id
  name
  hash
  description
  args {
    ...Port
  }
  returns {
    ...Port
  }
  flavours {
    ...ListFlavour
  }
}
    ${j}
${V}`,G=a.J1`
    fragment ListDefinition on Definition {
  id
  name
  hash
  description
  flavours {
    id
    name
    release {
      id
      version
      app {
        identifier
      }
    }
  }
}
    `,M=a.J1`
    fragment Flavour on Flavour {
  ...ListFlavour
  description
}
    ${V}`,F=a.J1`
    fragment ListPod on Pod {
  id
  podId
  backend {
    user {
      sub
    }
    client {
      clientId
    }
    name
  }
  deployment {
    id
    flavour {
      release {
        id
        version
        app {
          identifier
        }
      }
    }
  }
  clientId
  resource {
    id
    name
  }
  status
}
    `,U=a.J1`
    fragment ListResource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
}
    `,B=a.J1`
    fragment Backend on Backend {
  id
  user {
    sub
  }
  client {
    clientId
  }
  clientId
  instanceId
  name
  kind
  pods {
    ...ListPod
  }
  resources {
    ...ListResource
  }
}
    ${F}
${U}`,E=a.J1`
    fragment Pod on Pod {
  id
  podId
  backend {
    ...Backend
  }
  status
  latestLogDump {
    logs
    createdAt
  }
  clientId
  resource {
    ...ListResource
  }
  deployment {
    id
    flavour {
      release {
        id
        version
        app {
          identifier
        }
      }
    }
  }
}
    ${B}
${U}`,z=a.J1`
    fragment Release on Release {
  id
  version
  app {
    identifier
  }
  flavours {
    ...ListFlavour
  }
  scopes
  colour
  description
}
    ${V}`,H=a.J1`
    fragment ListRelease on Release {
  id
  version
  app {
    identifier
  }
  installed
  scopes
  flavours {
    ...ListFlavour
  }
  colour
  description
}
    ${V}`,X=a.J1`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `,K=a.J1`
    fragment Resource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
  pods {
    ...ListPod
  }
}
    ${F}`,Y=a.J1`
    mutation CreateGithubRepo($identifier: String!) {
  createGithubRepo(input: {identifier: $identifier}) {
    id
  }
}
    `;a.J1`
    mutation RescanRepos {
  rescanRepos {
    id
  }
}
    `;a.J1`
    query ListBackends {
  backends {
    ...ListBackend
  }
}
    ${b}`;a.J1`
    query GetBackend($id: ID!) {
  backend(id: $id) {
    ...Backend
  }
}
    ${B}`;a.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${N}`;a.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${G}`;a.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${G}`;a.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${G}`;a.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${V}`;a.J1`
    query GetFlavour($id: ID!) {
  flavour(id: $id) {
    ...Flavour
  }
}
    ${M}`;a.J1`
    query ListPod {
  pods {
    ...ListPod
  }
}
    ${F}`;a.J1`
    query GetPod($id: ID!) {
  pod(id: $id) {
    ...Pod
  }
}
    ${E}`;a.J1`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${E}`;a.J1`
    query ListReleases {
  releases {
    ...ListRelease
  }
}
    ${H}`;a.J1`
    query GetRelease($id: ID!) {
  release(id: $id) {
    ...Release
  }
}
    ${z}`;const Z=a.J1`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${X}`;function Q(e){const i={...$,...e};return((e,i)=>{const t=(0,p.h1)(h);return(0,m.I)(e,{...i,client:t.client})})(Z,i)}a.J1`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${U}`;a.J1`
    query GetResource($id: ID!) {
  resource(id: $id) {
    ...Resource
  }
}
    ${K}`;a.J1`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${G}
${V}`;var ee=t(74848);a.Ay`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,a.Ay`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`;const ie="my-2 p-2 rounded-md text-black text-center w-60 ",te=({branch:e,repo:i,user:t})=>(0,ee.jsx)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(ae,{branch:e,repo:i,user:t})}),ae=({branch:e,repo:i,user:t})=>{const[a]=function(e){const i={...$,...e};return f(Y,i)}(),l=`${t}/${i}:${e}`,[s,o]=n.useState(!1),{data:d,refetch:u,error:c}=Q({variables:{filters:{repo:i,user:t,branch:e}}}),m=d?.githubRepos.at(0);return(0,ee.jsxs)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[c&&(0,ee.jsxs)("div",{className:ie+"bg-red-300",children:["Error: ",c.message]}),m?(0,ee.jsxs)("button",{className:ie+"bg-green-300",children:[" \u2705 ",l]}):(0,ee.jsx)("button",{onClick:async()=>{try{o(!0),a({variables:{identifier:l}}),await u(),console.log(d),o(!1)}catch(e){console.log(e)}},className:ie+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",l," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",l]})})]})}},12200:(e,i,t)=>{"use strict";t.d(i,{A:()=>a});const a=t.p+"assets/files/training-de8069a9441ffc363f8f3ee381f7c139.zip"},25110:(e,i,t)=>{"use strict";t.d(i,{NS:()=>l,z4:()=>s});t(96540);var a=t(96710),n=t(1612),r=t(74848);const l=({children:e})=>(0,r.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,r.jsxs)("a",{href:"https://github.com/arkitektio/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(n.Ucx,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,r.jsxs)("a",{href:"https://github.com/arkitektio/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.VjQ,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,r.jsxs)("a",{href:"https://github.com/arkitektio/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(n.eMv,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Mac"})]})]}),s=({children:e})=>(0,r.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,r.jsxs)("a",{href:"https://github.com/arkitektio/orkestrator/releases/download/v0.0.7/orkestrator_0.0.7_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(n.Ucx,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,r.jsxs)("a",{href:"https://github.com/arkitektio/orkestrator/releases/download/v0.0.7/orkestrator_0.0.7_x64-setup.exe",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.VjQ,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,r.jsxs)("a",{href:"https://github.com/arkitektio/orkestrator/releases/download/v0.0.7/orkestrator_0.0.7_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(n.eMv,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Mac"})]})]})},39387:(e,i,t)=>{"use strict";t.d(i,{L:()=>n});t(96540);var a=t(74848);const n=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Show Workflow"}),(0,a.jsx)("p",{children:"This component is under construction."})]})},45723:(e,i,t)=>{"use strict";t.d(i,{A:()=>a});const a=t.p+"assets/files/noisy_stack-6ff2a5732916fc1a6ddebe87490f875c.tif"},64357:(e,i,t)=>{"use strict";t.d(i,{d:()=>r});var a=t(2135),n=(t(96540),t(74848));a.Ay`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`;const r=({url:e,name:i,kind:t})=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("button",{onClick:async()=>{console.log(e);try{const i=await fetch(e);if(!i.ok)throw new Error("Failed fetching file from Documentation");const t=await i.blob();new File([t],"model.zip",{type:t.type});console.log(data)}catch(i){console.log(i)}},className:"my-2 p-2 rounded-md text-black text-center w-60 cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",i]})})},73281:(e,i,t)=>{"use strict";t.r(i),t.d(i,{assets:()=>ge,contentTitle:()=>pe,default:()=>$e,frontMatter:()=>me,metadata:()=>a,toc:()=>he});const a=JSON.parse('{"id":"showcases/paper/interactive_workflow","title":"Interactive Workflow","description":"The following workflow and online showcase is an example of how arkitekt enables an interactive workflow, spanning multiple bioimage apps and deep learning enabled","source":"@site/docs/showcases/paper/interactive_workflow.mdx","sourceDirName":"showcases/paper","slug":"/showcases/paper/interactive_workflow","permalink":"/docs/showcases/paper/interactive_workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/showcases/paper/interactive_workflow.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Interactive Workflow","sidebar_label":"Interactive Workflow","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Paper","permalink":"/docs/showcases/paper/"},"next":{"title":"Streaming Analysis","permalink":"/docs/showcases/paper/streaming_workflow"}}');var n=t(74848),r=t(28453),l=(t(25110),t(90547)),s=t(85936),o=t.n(s),d=(t(39387),t(97470)),u=t(5584),c=t(64357),m=t(2135);t(76234),t(64721);const p=m.J1`
    fragment Camera on Camera {
  sensorSizeX
  sensorSizeY
  pixelSizeX
  pixelSizeY
  name
  serialNumber
}
    `,g=m.J1`
    fragment Credentials on Credentials {
  accessKey
  status
  secretKey
  bucket
  key
  sessionToken
  store
}
    `,h=m.J1`
    fragment AccessCredentials on AccessCredentials {
  accessKey
  secretKey
  bucket
  key
  sessionToken
  path
}
    `,f=m.J1`
    fragment PresignedPostCredentials on PresignedPostCredentials {
  xAmzAlgorithm
  xAmzCredential
  xAmzDate
  xAmzSignature
  key
  bucket
  datalayer
  policy
  store
}
    `,$=m.J1`
    fragment ProvenanceEntry on ProvenanceEntry {
  id
  during
  kind
  user {
    sub
  }
  client {
    clientId
  }
  date
  effectiveChanges {
    field
    oldValue
    newValue
  }
}
    `,b=m.J1`
    fragment ListImage on Image {
  latestSnapshot {
    id
    store {
      key
      presignedUrl
    }
  }
  id
  name
}
    `,k=m.J1`
    fragment ListFile on File {
  id
  name
}
    `,y=m.J1`
    fragment ListDataset on Dataset {
  id
  name
  description
  isDefault
}
    `,_=m.J1`
    fragment Dataset on Dataset {
  id
  name
  description
  provenanceEntries {
    ...ProvenanceEntry
  }
  images {
    ...ListImage
  }
  files {
    ...ListFile
  }
  children {
    ...ListDataset
  }
  isDefault
  pinned
  createdAt
  creator {
    sub
  }
  tags
}
    ${$}
${b}
${k}
${y}`,w=m.J1`
    fragment BigFileStore on BigFileStore {
  id
  key
  bucket
  path
  presignedUrl
}
    `,v=m.J1`
    fragment File on File {
  origins {
    id
  }
  id
  name
  store {
    ...BigFileStore
  }
  views {
    id
    seriesIdentifier
    image {
      ...ListImage
    }
  }
  provenanceEntries {
    ...ProvenanceEntry
  }
  organization {
    slug
  }
}
    ${w}
${b}
${$}`,x=m.J1`
    fragment ZarrStore on ZarrStore {
  id
  key
  bucket
  path
  shape
  dtype
  chunks
  version
}
    `,I=m.J1`
    fragment View on View {
  xMin
  xMax
  yMin
  yMax
  tMin
  tMax
  cMin
  cMax
  zMin
  zMax
}
    `,S=m.J1`
    fragment ChannelView on ChannelView {
  ...View
  id
  channelName: name
  excitationWavelength
  emissionWavelength
  acquisitionMode
}
    ${I}`,R=m.J1`
    fragment AffineTransformationView on AffineTransformationView {
  ...View
  id
  affineMatrix
  stage {
    id
    name
  }
}
    ${I}`,W=m.J1`
    fragment MaskView on MaskView {
  ...View
  id
  referenceView {
    id
    image {
      id
      name
    }
  }
}
    ${I}`,L=m.J1`
    fragment InstanceMaskView on InstanceMaskView {
  ...View
  id
  referenceView {
    id
    image {
      id
      name
    }
  }
}
    ${I}`,A=m.J1`
    fragment Era on Era {
  id
  begin
  name
}
    `,P=m.J1`
    fragment TimepointView on TimepointView {
  ...View
  id
  msSinceStart
  indexSinceStart
  era {
    ...Era
  }
}
    ${I}
${A}`,T=m.J1`
    fragment OpticsView on OpticsView {
  ...View
  id
  objective {
    id
    name
    serialNumber
  }
  camera {
    id
    name
    serialNumber
  }
  instrument {
    id
    name
    serialNumber
  }
}
    ${I}`,D=m.J1`
    fragment AcquisitionView on AcquisitionView {
  ...View
  id
  description
  acquiredAt
  operator {
    sub
  }
}
    ${I}`,J=m.J1`
    fragment HistogramView on HistogramView {
  ...View
  id
  bins
  min
  max
  histogram
}
    ${I}`,C=m.J1`
    fragment RGBView on RGBView {
  ...View
  id
  contexts {
    id
    name
  }
  name
  image {
    id
    store {
      ...ZarrStore
    }
    derivedScaleViews {
      id
      image {
        id
        store {
          ...ZarrStore
        }
      }
      scaleX
      scaleY
      scaleZ
      scaleT
      scaleC
    }
  }
  congruentViews(types: [HISTOGRAM]) {
    ...HistogramView
  }
  colorMap
  contrastLimitMin
  contrastLimitMax
  gamma
  active
  fullColour
  baseColor
}
    ${I}
${x}
${J}`,j=m.J1`
    fragment WellPositionView on WellPositionView {
  ...View
  id
  column
  row
  well {
    id
    rows
    columns
    name
  }
}
    ${I}`,q=m.J1`
    fragment DerivedView on DerivedView {
  ...View
  id
  originImage {
    id
    name
  }
  operation
}
    ${I}`,O=m.J1`
    fragment ROIView on ROIView {
  ...View
  id
  roi {
    id
    name
  }
}
    ${I}`,V=m.J1`
    fragment FileView on FileView {
  ...View
  id
  seriesIdentifier
  file {
    id
    name
  }
}
    ${I}`,N=m.J1`
    fragment Snapshot on Snapshot {
  id
  store {
    key
    presignedUrl
  }
}
    `,G=m.J1`
    fragment Video on Video {
  id
  store {
    key
    presignedUrl
  }
}
    `,M=m.J1`
    fragment ListRGBContext on RGBContext {
  image {
    id
    store {
      ...ZarrStore
    }
    derivedScaleViews {
      id
      image {
        id
        store {
          ...ZarrStore
        }
      }
      scaleX
      scaleY
      scaleZ
      scaleT
      scaleC
    }
  }
  id
  name
  views {
    ...RGBView
  }
  blending
  t
  z
  c
}
    ${x}
${C}`,F=m.J1`
    fragment ListROI on ROI {
  id
  image {
    id
    name
  }
  kind
  vectors
}
    `,U=m.J1`
    fragment Image on Image {
  id
  name
  store {
    ...ZarrStore
  }
  views {
    ...ChannelView
    ...AffineTransformationView
    ...MaskView
    ...InstanceMaskView
    ...TimepointView
    ...OpticsView
    ...AcquisitionView
    ...RGBView
    ...WellPositionView
    ...DerivedView
    ...ROIView
    ...FileView
    ...HistogramView
  }
  derivedFromViews {
    image {
      id
      name
    }
  }
  pinned
  renders {
    ...Snapshot
    ...Video
  }
  dataset {
    name
    id
  }
  createdAt
  provenanceEntries {
    ...ProvenanceEntry
  }
  creator {
    sub
  }
  tags
  rgbContexts {
    ...ListRGBContext
  }
  rois {
    ...ListROI
  }
}
    ${x}
${S}
${R}
${W}
${L}
${P}
${T}
${D}
${C}
${j}
${q}
${O}
${V}
${J}
${N}
${G}
${$}
${M}
${F}`,B=m.J1`
    fragment Instrument on Instrument {
  model
  name
  serialNumber
}
    `,E=m.J1`
    fragment MeshStore on MeshStore {
  id
  key
  presignedUrl
}
    `,z=m.J1`
    fragment Mesh on Mesh {
  id
  name
  store {
    ...MeshStore
  }
}
    ${E}`,H=m.J1`
    fragment ListMesh on Mesh {
  id
  name
}
    `,X=m.J1`
    fragment MultiWellPlate on MultiWellPlate {
  id
  views {
    ...WellPositionView
  }
  name
}
    ${j}`,K=m.J1`
    fragment ListMultiWellPlate on MultiWellPlate {
  id
  name
}
    `,Y=m.J1`
    fragment Objective on Objective {
  na
  name
  serialNumber
}
    `,Z=m.J1`
    fragment RGBContext on RGBContext {
  id
  views {
    ...RGBView
  }
  image {
    id
    store {
      ...ZarrStore
    }
    derivedScaleViews {
      id
      image {
        id
        store {
          ...ZarrStore
        }
      }
      scaleX
      scaleY
      scaleZ
      scaleT
      scaleC
    }
  }
  pinned
  name
  z
  t
  c
  blending
}
    ${C}
${x}`,Q=m.J1`
    fragment RGBImage on Image {
  name
  rgbContexts {
    ...ListRGBContext
  }
}
    ${M}`,ee=m.J1`
    fragment ROI on ROI {
  id
  pinned
  image {
    id
    ...RGBImage
  }
  createdAt
  creator {
    sub
  }
  provenanceEntries {
    ...ProvenanceEntry
  }
  kind
  vectors
}
    ${Q}
${$}`,ie=m.J1`
    fragment Stage on Stage {
  id
  affineViews {
    ...AffineTransformationView
    image {
      id
      store {
        shape
      }
      name
    }
  }
  pinned
  name
}
    ${R}`,te=m.J1`
    fragment ListStage on Stage {
  id
  name
}
    `,ae=(m.J1`
    fragment MediaStore on MediaStore {
  id
  key
  presignedUrl
}
    `,m.J1`
    fragment ParquetStore on ParquetStore {
  id
  key
  bucket
  path
}
    `),ne=m.J1`
    fragment Accessor on Accessor {
  id
  keys
  minIndex
  maxIndex
}
    `,re=m.J1`
    fragment ImageAccessor on ImageAccessor {
  ...Accessor
  id
}
    ${ne}`,le=m.J1`
    fragment LabelAccessor on LabelAccessor {
  ...Accessor
  maskView {
    id
  }
}
    ${ne}`,se=m.J1`
    fragment Table on Table {
  origins {
    id
  }
  id
  name
  store {
    ...ParquetStore
  }
  columns {
    name
    type
    accessors {
      ...Accessor
      ...ImageAccessor
      ...LabelAccessor
    }
  }
  accessors {
    ...ImageAccessor
    ...LabelAccessor
  }
}
    ${ae}
${ne}
${re}
${le}`,oe=m.J1`
    fragment ListTable on Table {
  origins {
    id
  }
  id
  name
  store {
    ...ParquetStore
  }
}
    ${ae}`,de=(m.J1`
    fragment ReferenceView on ReferenceView {
  ...View
  id
}
    ${I}`,m.J1`
    fragment ContinousScanView on ContinousScanView {
  ...View
  id
  direction
}
    ${I}`);m.J1`
    mutation CreateCamera($serialNumber: String!, $name: String, $pixelSizeX: Micrometers, $pixelSizeY: Micrometers, $sensorSizeX: Int, $sensorSizeY: Int) {
  createCamera(
    input: {name: $name, pixelSizeX: $pixelSizeX, serialNumber: $serialNumber, pixelSizeY: $pixelSizeY, sensorSizeX: $sensorSizeX, sensorSizeY: $sensorSizeY}
  ) {
    id
    name
  }
}
    `;m.J1`
    mutation EnsureCamera($serialNumber: String!, $name: String, $pixelSizeX: Micrometers, $pixelSizeY: Micrometers, $sensorSizeX: Int, $sensorSizeY: Int) {
  ensureCamera(
    input: {name: $name, pixelSizeX: $pixelSizeX, serialNumber: $serialNumber, pixelSizeY: $pixelSizeY, sensorSizeX: $sensorSizeX, sensorSizeY: $sensorSizeY}
  ) {
    id
    name
  }
}
    `;m.J1`
    mutation CreateDataset($name: String!) {
  createDataset(input: {name: $name}) {
    id
    name
  }
}
    `;m.J1`
    mutation UpdateDataset($id: ID!, $name: String!) {
  updateDataset(input: {id: $id, name: $name}) {
    id
    name
  }
}
    `;m.J1`
    mutation PinDataset($id: ID!, $pin: Boolean!) {
  pinDataset(input: {id: $id, pin: $pin}) {
    ...Dataset
  }
}
    ${_}`;m.J1`
    mutation PutDatasetsInDataset($selfs: [ID!]!, $other: ID!) {
  putDatasetsInDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${_}`;m.J1`
    mutation ReleaseDatasetsFromDataset($selfs: [ID!]!, $other: ID!) {
  releaseDatasetsFromDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${_}`;m.J1`
    mutation PutImagesInDataset($selfs: [ID!]!, $other: ID!) {
  putImagesInDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${_}`;m.J1`
    mutation ReleaseImagesFromDataset($selfs: [ID!]!, $other: ID!) {
  releaseImagesFromDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${_}`;m.J1`
    mutation PutFilesInDataset($selfs: [ID!]!, $other: ID!) {
  putFilesInDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${_}`;m.J1`
    mutation ReleaseFilesFromDataset($selfs: [ID!]!, $other: ID!) {
  releaseFilesFromDataset(input: {selfs: $selfs, other: $other}) {
    ...Dataset
  }
}
    ${_}`;m.J1`
    mutation RevertDataset($dataset: ID!, $history: ID!) {
  revertDataset(input: {id: $dataset, historyId: $history}) {
    id
    name
    description
  }
}
    `;m.J1`
    mutation DeleteDataset($id: ID!) {
  deleteDataset(input: {id: $id})
}
    `;m.J1`
    mutation CreateEra($name: String!, $begin: DateTime) {
  createEra(input: {name: $name, begin: $begin}) {
    id
    begin
  }
}
    `;m.J1`
    mutation from_file_like($file: FileLike!, $name: String!, $origins: [ID!], $dataset: ID) {
  fromFileLike(
    input: {file: $file, fileName: $name, origins: $origins, dataset: $dataset}
  ) {
    ...File
  }
}
    ${v}`;m.J1`
    mutation RequestFileUpload($key: String!, $datalayer: String!) {
  requestFileUpload(input: {fileName: $key, datalayer: $datalayer}) {
    ...Credentials
  }
}
    ${g}`;m.J1`
    mutation RequestFileUploadPresigned($key: String!, $datalayer: String!) {
  requestFileUploadPresigned(input: {fileName: $key, datalayer: $datalayer}) {
    ...PresignedPostCredentials
  }
}
    ${f}`;m.J1`
    mutation RequestFileAccess($store: ID!, $duration: Int) {
  requestFileAccess(input: {store: $store, duration: $duration}) {
    ...AccessCredentials
  }
}
    ${h}`;m.J1`
    mutation DeleteFile($id: ID!) {
  deleteFile(input: {id: $id})
}
    `;m.J1`
    mutation RequestUpload($key: String!, $datalayer: String!) {
  requestUpload(input: {key: $key, datalayer: $datalayer}) {
    ...Credentials
  }
}
    ${g}`;m.J1`
    mutation RequestAccess($store: ID!, $duration: Int) {
  requestAccess(input: {store: $store, duration: $duration}) {
    ...AccessCredentials
  }
}
    ${h}`;m.J1`
    mutation PinImage($id: ID!, $pin: Boolean!) {
  pinImage(input: {id: $id, pin: $pin}) {
    ...Image
  }
}
    ${U}`;m.J1`
    mutation UpdateImage($input: UpdateImageInput!) {
  updateImage(input: $input) {
    ...Image
  }
}
    ${U}`;m.J1`
    mutation DeleteImage($id: ID!) {
  deleteImage(input: {id: $id})
}
    `;m.J1`
    mutation CreateInstrument($serialNumber: String!, $name: String, $model: String) {
  createInstrument(
    input: {name: $name, model: $model, serialNumber: $serialNumber}
  ) {
    id
    name
  }
}
    `;m.J1`
    mutation EnsureInstrument($serialNumber: String!, $name: String, $model: String) {
  ensureInstrument(
    input: {name: $name, model: $model, serialNumber: $serialNumber}
  ) {
    id
    name
  }
}
    `;m.J1`
    mutation RequestMediaUpload($key: String!, $datalayer: String!) {
  requestMediaUpload(input: {fileName: $key, datalayer: $datalayer}) {
    ...PresignedPostCredentials
  }
}
    ${f}`;m.J1`
    mutation CreateMultiWellPlate($input: MultiWellPlateInput!) {
  createMultiWellPlate(input: $input) {
    ...MultiWellPlate
  }
}
    ${X}`;m.J1`
    mutation AutoCreateMultiWellPlate($input: String!) {
  result: createMultiWellPlate(input: {name: $input}) {
    label: name
    value: id
  }
}
    `;m.J1`
    mutation CreateObjective($serialNumber: String!, $name: String, $na: Float, $magnification: Float) {
  createObjective(
    input: {name: $name, na: $na, serialNumber: $serialNumber, magnification: $magnification}
  ) {
    id
    name
  }
}
    `;m.J1`
    mutation EnsureObjective($serialNumber: String!, $name: String, $na: Float, $magnification: Float) {
  ensureObjective(
    input: {name: $name, na: $na, serialNumber: $serialNumber, magnification: $magnification}
  ) {
    id
    name
  }
}
    `;m.J1`
    mutation AssignUserPermissions($input: AssignUserPermissionInput!) {
  assignUserPermission(input: $input) {
    user {
      sub
    }
    permission
  }
}
    `;m.J1`
    mutation CreateRGBContext($input: CreateRGBContextInput!) {
  createRgbContext(input: $input) {
    ...RGBContext
  }
}
    ${Z}`;m.J1`
    mutation UpdateRGBContext($input: UpdateRGBContextInput!) {
  updateRgbContext(input: $input) {
    ...RGBContext
  }
}
    ${Z}`;m.J1`
    mutation PinROI($id: ID!, $pin: Boolean!) {
  pinRoi(input: {id: $id, pin: $pin}) {
    ...ROI
  }
}
    ${ee}`;m.J1`
    mutation CreateROI($input: RoiInput!) {
  createRoi(input: $input) {
    ...ROI
  }
}
    ${ee}`;m.J1`
    mutation DeleteROI($id: ID!) {
  deleteRoi(input: {id: $id})
}
    `;m.J1`
    mutation CreateSnapshot($image: ID!, $file: ImageFileLike!) {
  createSnapshot(input: {file: $file, image: $image}) {
    ...Snapshot
  }
}
    ${N}`;m.J1`
    mutation CreateStage($name: String!) {
  createStage(input: {name: $name}) {
    id
    name
  }
}
    `;m.J1`
    mutation PinStage($id: ID!, $pin: Boolean!) {
  pinStage(input: {id: $id, pin: $pin}) {
    ...Stage
  }
}
    ${ie}`;m.J1`
    mutation from_parquet_like($dataframe: ParquetLike!, $name: String!, $origins: [ID!], $dataset: ID) {
  fromParquetLike(
    input: {dataframe: $dataframe, name: $name, origins: $origins, dataset: $dataset}
  ) {
    ...Table
  }
}
    ${se}`;m.J1`
    mutation RequestTableUpload($key: String!, $datalayer: String!) {
  requestTableUpload(input: {key: $key, datalayer: $datalayer}) {
    ...Credentials
  }
}
    ${g}`;m.J1`
    mutation RequestTableAccess($store: ID!, $duration: Int) {
  requestTableAccess(input: {store: $store, duration: $duration}) {
    ...AccessCredentials
  }
}
    ${h}`;m.J1`
    mutation CreateAffineTransformationView($image: ID!, $affineMatrix: FourByFourMatrix!, $stage: ID) {
  createAffineTransformationView(
    input: {image: $image, affineMatrix: $affineMatrix, stage: $stage}
  ) {
    ...AffineTransformationView
  }
}
    ${R}`;m.J1`
    mutation DeleteAffineTransformationView($id: ID!) {
  deleteAffineTransformationView(input: {id: $id})
}
    `;m.J1`
    mutation DeleteRGBView($id: ID!) {
  deleteRgbView(input: {id: $id})
}
    `;m.J1`
    mutation DeleteChannelView($id: ID!) {
  deleteChannelView(input: {id: $id})
}
    `;m.J1`
    mutation DeleteHistogramView($id: ID!) {
  deleteHistogramView(input: {id: $id})
}
    `;m.J1`
    mutation CreateRgbView($image: ID!, $context: ID!, $gamma: Float, $contrastLimitMax: Float, $contrastLimitMin: Float, $rescale: Boolean, $active: Boolean, $colorMap: ColorMap) {
  createRgbView(
    input: {image: $image, context: $context, gamma: $gamma, contrastLimitMax: $contrastLimitMax, contrastLimitMin: $contrastLimitMin, rescale: $rescale, active: $active, colorMap: $colorMap}
  ) {
    id
  }
}
    `;m.J1`
    mutation CreateWellPositionView($input: WellPositionViewInput!) {
  createWellPositionView(input: $input) {
    ...WellPositionView
  }
}
    ${j}`;m.J1`
    mutation CreateContinousScanView($input: ContinousScanViewInput!) {
  createContinousScanView(input: $input) {
    ...ContinousScanView
  }
}
    ${de}`;m.J1`
    mutation CreateMaskView($input: MaskViewInput!) {
  createMaskView(input: $input) {
    ...MaskView
  }
}
    ${W}`;m.J1`
    mutation CreateInstanceMaskView($input: InstanceMaskViewInput!) {
  createInstanceMaskView(input: $input) {
    ...InstanceMaskView
  }
}
    ${L}`;m.J1`
    mutation UpdateRGBView($input: UpdateRGBViewInput!) {
  updateRgbView(input: $input) {
    ...RGBView
  }
}
    ${C}`;m.J1`
    mutation CreateViewCollection($name: String!) {
  createViewCollection(input: {name: $name}) {
    id
    name
  }
}
    `;m.J1`
    query GetCamera($id: ID!) {
  camera(id: $id) {
    ...Camera
  }
}
    ${p}`;m.J1`
    query Children($id: ID!, $pagination: ChildrenPaginationInput) {
  children(parent: $id, pagination: $pagination) {
    ...ListFile
    ...ListImage
    ...ListDataset
  }
}
    ${k}
${b}
${y}`;m.J1`
    query GetDataset($id: ID!) {
  dataset(id: $id) {
    ...Dataset
  }
}
    ${_}`;m.J1`
    query GetDatasets($filters: DatasetFilter, $pagination: OffsetPaginationInput) {
  datasets(filters: $filters, pagination: $pagination) {
    ...ListDataset
  }
}
    ${y}`;m.J1`
    query GetFile($id: ID!) {
  file(id: $id) {
    ...File
  }
}
    ${v}`;m.J1`
    query GetFiles($filters: FileFilter, $pagination: OffsetPaginationInput) {
  files(filters: $filters, pagination: $pagination) {
    ...ListFile
  }
}
    ${k}`;m.J1`
    query GlobalSearch($search: String, $noImages: Boolean!, $noFiles: Boolean!, $noDatasets: Boolean!, $pagination: OffsetPaginationInput) {
  images: images(filters: {search: $search}, pagination: $pagination) @skip(if: $noImages) {
    ...ListImage
  }
  files: files(filters: {search: $search}, pagination: $pagination) @skip(if: $noFiles) {
    ...ListFile
  }
  datasets: datasets(filters: {search: $search}, pagination: $pagination) @skip(if: $noDatasets) {
    ...ListDataset
  }
}
    ${b}
${k}
${y}`;m.J1`
    query Images {
  images {
    id
  }
}
    `;m.J1`
    query GetImage($id: ID!) {
  image(id: $id) {
    ...Image
  }
}
    ${U}`;m.J1`
    query GetImages($filters: ImageFilter, $pagination: OffsetPaginationInput, $order: ImageOrder) {
  images(filters: $filters, pagination: $pagination, order: $order) {
    ...ListImage
  }
}
    ${b}`;m.J1`
    query GetInstrument($id: ID!) {
  instrument(id: $id) {
    ...Instrument
  }
}
    ${B}`;m.J1`
    query DetailMesh($id: ID!) {
  mesh(id: $id) {
    ...Mesh
  }
}
    ${z}`;m.J1`
    query ListMeshes($filters: MeshFilter, $pagination: OffsetPaginationInput) {
  meshes(filters: $filters, pagination: $pagination) {
    ...ListMesh
  }
}
    ${H}`;m.J1`
    query GetMultiWellPlate($id: ID!) {
  multiWellPlate(id: $id) {
    ...MultiWellPlate
  }
}
    ${X}`;m.J1`
    query GetMultiWellPlates($filters: MultiWellPlateFilter, $pagination: OffsetPaginationInput) {
  multiWellPlates(filters: $filters, pagination: $pagination) {
    ...ListMultiWellPlate
  }
}
    ${K}`;m.J1`
    query MultiWellPlateOptions($search: String, $values: [ID!]) {
  options: multiWellPlates(
    filters: {search: $search, ids: $values}
    pagination: {limit: 10}
  ) {
    value: id
    label: name
  }
}
    `;m.J1`
    query GetObjective($id: ID!) {
  objective(id: $id) {
    ...Objective
  }
}
    ${Y}`;m.J1`
    query GetPermissions($identifier: String!, $object: ID!) {
  permissions(identifier: $identifier, object: $object) {
    user {
      sub
    }
    permission
  }
}
    `;m.J1`
    query PermissionOptions($identifier: String!, $search: String, $values: [ID!]) {
  options: availablePermissions(
    identifier: $identifier
    search: $search
    values: $values
  ) {
    value
    label
  }
}
    `;m.J1`
    query GetMaskedPixelInfo($id: ID!) {
  maskedPixelInfo(id: $id) {
    label
  }
}
    `;m.J1`
    query GetRGBContext($id: ID!) {
  rgbcontext(id: $id) {
    ...RGBContext
  }
}
    ${Z}`;m.J1`
    query GetRGBContexts($filters: RGBContextFilter, $pagination: OffsetPaginationInput) {
  rgbcontexts(filters: $filters, pagination: $pagination) {
    ...ListRGBContext
  }
}
    ${M}`;m.J1`
    query RGBContextOptions($search: String, $values: [ID!]) {
  options: rgbcontexts(
    filters: {search: $search, ids: $values}
    pagination: {limit: 10}
  ) {
    value: id
    label: name
  }
}
    `;m.J1`
    query GetROI($id: ID!) {
  roi(id: $id) {
    ...ROI
  }
}
    ${ee}`;m.J1`
    query GetROIs($filters: ROIFilter, $pagination: OffsetPaginationInput, $order: ROIOrder) {
  rois(filters: $filters, pagination: $pagination, order: $order) {
    ...ListROI
  }
}
    ${F}`;m.J1`
    query Rows($table: ID!, $filters: RowFilter, $pagination: TablePaginationInput) {
  rows(table: $table, filters: $filters, pagination: $pagination)
}
    `;m.J1`
    query GetStage($id: ID!) {
  stage(id: $id) {
    ...Stage
  }
}
    ${ie}`;m.J1`
    query GetStages($filters: StageFilter, $pagination: OffsetPaginationInput) {
  stages(filters: $filters, pagination: $pagination) {
    ...ListStage
  }
}
    ${te}`;m.J1`
    query StageOptions($search: String, $values: [ID!]) {
  options: stages(
    filters: {search: $search, ids: $values}
    pagination: {limit: 10}
  ) {
    value: id
    label: name
  }
}
    `;m.J1`
    query GetTable($id: ID!) {
  table(id: $id) {
    ...Table
  }
}
    ${se}`;m.J1`
    query GetTables($filters: TableFilter, $pagination: OffsetPaginationInput) {
  tables(filters: $filters, pagination: $pagination) {
    ...ListTable
  }
}
    ${oe}`;m.J1`
    query GetRGBView($id: ID!) {
  rgbView(id: $id) {
    ...RGBView
  }
}
    ${C}`;m.J1`
    query SearchRGBViews($search: String, $values: [ID!]) {
  options: rgbViews(
    filters: {search: $search, ids: $values}
    pagination: {limit: 10}
  ) {
    value: id
    label: name
  }
}
    `;m.J1`
    subscription WatchImages($dataset: ID) {
  images(dataset: $dataset) {
    create {
      ...ListImage
    }
    delete
    update {
      ...ListImage
    }
  }
}
    ${b}`;m.J1`
    subscription WatchRois($image: ID!) {
  rois(image: $image) {
    create {
      ...ListROI
    }
    delete
    update {
      ...ListROI
    }
  }
}
    ${F}`;m.J1`
    subscription WatchTransformationViews($stage: ID!) {
  affineTransformationViews(stage: $stage) {
    create {
      ...AffineTransformationView
      image {
        id
        store {
          shape
        }
        name
      }
    }
    delete
    update {
      ...AffineTransformationView
      image {
        id
        store {
          shape
        }
        name
      }
    }
  }
}
    ${R}`;t(96540);t(76524);const ue=JSON.parse('{"__typename":"Flow","id":"4","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1788,"y":103},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"The merged table","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","position":{"__typename":"Position","x":240,"y":-3},"typename":"ArkitektNode","parentNode":null,"hash":"da4e74c9f67d7ffc8855087ebb6268ce996c58df4a7050066bed4269fbe5c9b0","kind":"GENERATOR","defaults":{"rep":null,"show_old_rois":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"rois (List[RoiFragment]): The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"show_old_rois","label":"show_old_rois","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Show already marked rois. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream ROIs","description":"Asks the user to mark rois on the image, once user deams done, the rois are returned","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","position":{"__typename":"Position","x":494,"y":-81},"typename":"ArkitektNode","parentNode":null,"hash":"26dbfdcb8b5f98b157a960bcf6fe3085acee863931ce7a5e05b48adbbf897824","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":"roi","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"The Omero File","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation to be cropped. Defaults to the one of the ROI.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Crop Image","description":"Crops an Image based on a ROI","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","position":{"__typename":"Position","x":770,"y":-172},"typename":"ArkitektNode","parentNode":null,"hash":"0441be4d576765367c37786d2ef743f33865d4a4f146ad100e0c04d5283edb0e","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"representation","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The predicted images","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Predict Care","description":"Use a care model and some images to generate images","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","position":{"__typename":"Position","x":545,"y":151},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","position":{"__typename":"Position","x":971,"y":200},"typename":"ArkitektNode","parentNode":null,"hash":"79e5ee236b35dc83dd7b972d7cd8445face31a26beff022e6a0c6b1c0be1fa6f","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":"image","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"The analyzed particle table","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of the particles (default: 0)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of the particles (default: None)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"min_circularity","label":"min_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The minimum circularity of the particles (default: 0.0)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_circularity","label":"max_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The maximum circularity of the particles (default: 1.0)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Analyze Particles","description":"Analyzes particles in an image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","position":{"__typename":"Position","x":769,"y":70},"typename":"ArkitektNode","parentNode":null,"hash":"57d45410523b5fc52e33a89c2ae0174666ef7afefe2028df1e16649a750bf0a4","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to be thresholded","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The thresholded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"gaussian_blur","label":"gaussian_blur","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to apply a gaussian blur before thresholding (kernel_size=5)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Otsu Thresholding","description":"Binarizes the image based on a threshold, using Otsu\'s method\\nwith option to guassian blur the image before, images are normalized\\nfor each x,y slice before thresholding.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","position":{"__typename":"Position","x":1237,"y":37},"typename":"ArkitektNode","parentNode":null,"hash":"e4ca5250ef61b70fa987f45c142be459fa1b626df7b539b14153b2fa236784d1","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"table","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"Table to open","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Open Table in Sidebar","description":"Opens the table in an accessible sidebar widget.","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-cf83d475-2bad-455e-83ac-b12972f898bd","position":{"__typename":"Position","x":1302,"y":298},"typename":"ReactiveNode","parentNode":null,"implementation":"BUFFER_COMPLETE","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"The analyzed particle table","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/table","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-e325ab86-f6f7-4078-a851-c62991f4cf6b","position":{"__typename":"Position","x":1602,"y":322},"typename":"ArkitektNode","parentNode":null,"hash":"51e55332165de1b0ea2415d0f56df0d763c4ebe525873341f8f23e8bfcd3b272","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"table","label":"table","identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The tables to merge","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/table","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"The merged table","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Merge Tables","description":"Merges a list of tables into a single table","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-2aead44b-cb77-4fff-8311-e98f6135dc13arg_0","source":"1","sourceHandle":"return_0","target":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-2aead44b-cb77-4fff-8311-e98f6135dc13return_0-arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4arg_0","source":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","sourceHandle":"return_0","target":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4return_0-arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29arg_0","source":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","sourceHandle":"return_0","target":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29return_0-arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285arg_0","source":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","sourceHandle":"return_0","target":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285return_0-arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7arg_0","source":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","sourceHandle":"return_0","target":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7return_0-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37arg_0","source":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","sourceHandle":"return_0","target":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37return_0-arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88arg_0","source":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","sourceHandle":"return_0","target":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/table","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37return_0-reactive-cf83d475-2bad-455e-83ac-b12972f898bdarg_0","source":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","sourceHandle":"return_0","target":"reactive-cf83d475-2bad-455e-83ac-b12972f898bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/table","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-cf83d475-2bad-455e-83ac-b12972f898bdreturn_0-arkid-e325ab86-f6f7-4078-a851-c62991f4cf6barg_0","source":"reactive-cf83d475-2bad-455e-83ac-b12972f898bd","sourceHandle":"return_0","target":"arkid-e325ab86-f6f7-4078-a851-c62991f4cf6b","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"table","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/table","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-e325ab86-f6f7-4078-a851-c62991f4cf6breturn_0-2arg_0","source":"arkid-e325ab86-f6f7-4078-a851-c62991f4cf6b","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/table","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29.model"],"port":{"__typename":"Port","key":"model","label":"model","identifier":"@mikro/model","scope":"GLOBAL","kind":"STRUCTURE","description":"The model (maps to arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29.model)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_models($search: String, $values: [ID]) {\\n  options: models(name: $search, limit: 20, ids: $values) {\\n    label: name\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of the particles (default: 0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of the particles (default: None) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_circularity"],"port":{"__typename":"Port","key":"min_circularity","label":"min_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The minimum circularity of the particles (default: 0.0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_circularity)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_circularity"],"port":{"__typename":"Port","key":"max_circularity","label":"max_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The maximum circularity of the particles (default: 1.0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_circularity)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"The merged table","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"Interactive Analysis","screenshot":null,"createdAt":"2024-02-17T10:26:09.427420+00:00","workspace":{"__typename":"Workspace","id":"2"}}'),ce=t.p+"assets/files/test-f768396e8fcb14511bc32fbe99bccdbb.zip",me={title:"Interactive Workflow",sidebar_label:"Interactive Workflow",sidebar_position:2},pe=void 0,ge={},he=[{value:"Why?",id:"why",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Napari",id:"napari",level:4},{value:"Kare Denoising",id:"kare-denoising",level:4},{value:"Fiji",id:"fiji",level:4},{value:"MikroJ",id:"mikroj",level:4},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Model Preparation",id:"model-preparation",level:2},{value:"The Workflow",id:"the-workflow",level:2},{value:"Running the Workflow",id:"running-the-workflow",level:2}];function fe(e){const i={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=i;return a||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"The following workflow and online showcase is an example of how arkitekt enables an interactive workflow, spanning multiple bioimage apps and deep learning enabled\ndenoising. With this workflow we would like to demonstrate that by leveraging a tight and timely interaction between the apps, users can get immediate\nfeedback on the results of their actions."}),"\n",(0,n.jsx)(i.p,{children:"Here we set out to use Arkitekt to build a workflow that allows users to interactively denoise and segment cells in regions of interest in a 3D image.\nThe workflow is composed of three apps:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Napari"})," a python based 3D volume viewer that will allow the users to interactively annotate regions of interest in an image, while eeasily exploring\nthe 3D volume, as well as the app that will be used to display the results of the workflow."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Care Denoising"}),", a deep learning based denoising app that will be used to denoise the regions of interest selected by the user in Napari."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Fiji"}),' (ImageJ), and its "Analyze Particles" plugin, that will be used to segment the denoised regions of interest.']}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)("div",{className:"mt-2 p-6",children:[(0,n.jsx)(l.A,{img:o()}),(0,n.jsx)("div",{className:"text-gray-400 mb-2",children:(0,n.jsx)("small",{children:"The interactive workflow with loopback analytical insight "})})]}),"\n",(0,n.jsx)(i.h2,{id:"why",children:"Why?"}),"\n",(0,n.jsx)(i.p,{children:"The main motivation for showcasing this workflow, is the core believe that interactive workflows are a key component of the current and future bioimage analysis\nlandscape. We believe that the ability to interactively explore and annotate data, and to get immediate feedback on the results of the analysis, is a key necessity\nfor the current analysis where human insight is determing where we look for when analysis our data. And while automation will continue to grow in importance,\nwe believe that the human in the loop will, continue to play a key component of the analtical process."}),"\n",(0,n.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(i.p,{children:["Well lets jump right in and see how we can run this workflow. You could of course build this workflow from scratch, but we have already done that for you, and\nyou can easily import it into your arkitekt instance. To do so, please ",(0,n.jsx)(i.a,{href:"/docs/apps/",children:"connect"}),' this website to your arkitekt instance and then simply click on the "import" button below,\nwhich will import it directly into your arkitekt instance.']}),"\n",(0,n.jsx)(i.p,{children:"If you havent installed any of the apps yet, your Arkitekt instance will tell you that you are missing some apps implementing the nodes. So of course make sure you\ninstall the apps that are missing. In this case you will need to install the following apps:"}),"\n",(0,n.jsx)(i.h4,{id:"napari",children:(0,n.jsx)(i.a,{href:"https://napari.org/stable/",children:"Napari"})}),"\n",(0,n.jsxs)(i.p,{children:["With the mikro-napari plugin, which you can install easily via the napari plugin manager.\nor via the command line with ",(0,n.jsx)(i.code,{children:"pip install mikro-napari"})]}),"\n",(0,n.jsx)(i.h4,{id:"kare-denoising",children:(0,n.jsx)(i.a,{href:"https://github.com/arkitektio-apps/kare",children:"Kare Denoising"})}),"\n",(0,n.jsx)(i.p,{children:"An Arkitekt plugin that allows you to denoise images using deep learning. You can install it through the PluginStore or when connected, by clicking on the button below."}),"\n",(0,n.jsx)(u.W,{repo:"kare",user:"arkitektio-apps",branch:"master"}),"\n",(0,n.jsx)(i.h4,{id:"fiji",children:(0,n.jsx)(i.a,{href:"https://imagej.net/Fiji",children:"Fiji"})}),"\n",(0,n.jsx)(i.p,{children:'A ImageJ instance with the "Analyze Particles" plugin installed (comes preinstalled with Fiji)'}),"\n",(0,n.jsx)(i.h4,{id:"mikroj",children:(0,n.jsx)(i.a,{href:"https://github.com/arkitektio-apps/mikroj",children:"MikroJ"})}),"\n",(0,n.jsx)(i.p,{children:"The Arkitekt enabled FIJI wrapper app that allows your Fiji instance to be connected to Arkitekt. Please install\nthe latest version of MikroJ."}),"\n",(0,n.jsx)(i.h2,{id:"data-preparation",children:"Data Preparation"}),"\n",(0,n.jsxs)(i.p,{children:["This workflow was designed to work with the ",(0,n.jsx)(i.a,{href:"https://publications.mpi-cbg.de/publications-sites/7207/",children:"Tribolium"})," Dataset. However the examplary data used in this\nworkflow is only on noisy stack of the Tribolium dataset, which you can download ",(0,n.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(45723).A+"",children:"here"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["The Image Data was converted through the ",(0,n.jsx)(i.code,{children:"Convert Omero"})," Node provided by"]}),"\n",(0,n.jsx)(u.W,{repo:"omero",user:"arkitektio-apps",branch:"master"}),"\n",(0,n.jsx)(i.h2,{id:"model-preparation",children:"Model Preparation"}),"\n",(0,n.jsx)(i.p,{children:"For this workflow you can either use a pretrained model, or train your own model. If you want to train your own model, you can follow the instructions in the\nDeep Learning Training Tutorial to train your own model. If you want to use a pretrained model, you can upload the pretrained model directly from the link below."}),"\n",(0,n.jsx)(c.d,{url:ce,name:"Tribolium Model",kind:"TENSORFLOW"}),"\n",(0,n.jsxs)(i.p,{children:["This model was trained on ",(0,n.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(12200).A+"",children:"this dataset here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"the-workflow",children:"The Workflow"}),"\n",(0,n.jsx)(i.p,{children:"Once you have installed all the apps, you can simply import the workflow by connecting your arkitekt instance and clicking on the button below."}),"\n",(0,n.jsx)(d.W,{flow:ue}),"\n",(0,n.jsx)("div",{className:"text-gray-400 mb-2",children:(0,n.jsx)("small",{children:(0,n.jsx)(i.p,{children:"Once connected this pane will also give you an overview over the apps that\nstill need to be installed, nodes in green have been installed, nodes in\nyellow still lack an implementation. Of course feel free to explore this\ngraph more interactively in your orkestrator interface"})})}),"\n",(0,n.jsx)(i.h2,{id:"running-the-workflow",children:"Running the Workflow"}),"\n",(0,n.jsx)(i.p,{children:"For the execution of the Workflow you will need to start the following apps:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Napari"}),"\n",(0,n.jsx)(i.li,{children:"Kare Denoising (through deployment of the kare plugin)"}),"\n",(0,n.jsx)(i.li,{children:"Fiji (through MikroJ)"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Once you have started all the apps, you can run the workflow directly from an image uploaded to your arkitekt instance. To do so, simply\nstart the workflow and select the image the converted you want to run the workflow on."}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Test Environment"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.p,{children:"This workflow was tested on the following environments:"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.p,{children:"Analysis Computer"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Intel Core i9-8700K CPU @ 3.70GHz"}),"\n",(0,n.jsx)(i.li,{children:"Ubuntu 22.04"}),"\n",(0,n.jsx)(i.li,{children:"Arkitekt Paper Channel"}),"\n",(0,n.jsx)(i.li,{children:"Segmentor Plugin 0.3.1"}),"\n",(0,n.jsx)(i.li,{children:"Stdlib Plugin 0.3.6"}),"\n"]}),(0,n.jsx)(i.p,{children:"Analysis Computer"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Intel Core i9-8700K CPU @ 3.70GHz"}),"\n",(0,n.jsx)(i.li,{children:"Windows 10"}),"\n",(0,n.jsx)(i.li,{children:"Arkitekt Paper Channel"}),"\n",(0,n.jsx)(i.li,{children:"Segmentor Plugin 0.3.1"}),"\n",(0,n.jsx)(i.li,{children:"Stdlib Plugin 0.3.6"}),"\n"]})]})]})]})}function $e(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(fe,{...e})}):fe(e)}},76524:(e,i,t)=>{"use strict";t(96540),t(10518),t(74848)},85936:(e,i,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/interactive.5ae68f1.640.png 640w,"+t.p+"assets/ideal-img/interactive.44c5422.1320.png 1320w,"+t.p+"assets/ideal-img/interactive.172b860.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/interactive.5ae68f1.640.png",width:640,height:460},{path:t.p+"assets/ideal-img/interactive.44c5422.1320.png",width:1320,height:949},{path:t.p+"assets/ideal-img/interactive.172b860.2000.png",width:2e3,height:1438}],src:t.p+"assets/ideal-img/interactive.5ae68f1.640.png",toString:function(){return t.p+"assets/ideal-img/interactive.5ae68f1.640.png"},placeholder:void 0,width:640,height:460},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nGNgQAL//zMwgug043ouF67kN/4yOVmqiVPMld2aZRnM7ZyL7DX8a93lYypzzPIXFHqV1h09dnR+X1bdsc3zlqxPrpz1ySG2w53B2sPnfb7hpP+T1A7+6zXc9X9S6Pq/R87siwaZbDvtuvu2nes3rJyztIpBVd/wdYZm579peqd+9Ksf/V8luWwfSNGq0P/MEt2ftCbMO6Ca4VP9gUFeXeNdpkb3/+kaZ/9ODdj2f0LeoutmHip89fX/mRgkZ3J19q7x2rl5wzIGNR3Do5aKXjcsOP0vz5u+8MODZ3f+r1+3fuGNs+dj1u88OTc2bcLTwJCmFIbQ0FDm0g1JvAwMDKyzp8/O2T1v/cpD67dkrb9y5c6qC+eubFvcHbJkSpI8AMc3gNsuGSVIAAAAAElFTkSuQmCC"}},97470:(e,i,t)=>{"use strict";t.d(i,{W:()=>n});t(96540);var a=t(74848);const n=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Show Workflow"}),(0,a.jsx)("p",{children:"This component is under construction."})]})}}]);