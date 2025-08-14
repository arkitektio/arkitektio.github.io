(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[133],{5584:(e,t,n)=>{"use strict";n.d(t,{W:()=>ne});var i=n(2135),a=n(96540),r=n(10518),l=n(31635),s=n(60144),o=n(15381),d=n(75443),c=n(9211),u=n(70111);var h=n(25395),p=n(76234),m=n(64721);const g="kabinet",f=(e,t)=>function(e,t){var n=(0,u.m)(null==t?void 0:t.client);(0,d.D$)(e,d.KG.Mutation);var i=a.useState({called:!1,loading:!1,client:n}),r=i[0],h=i[1],p=a.useRef({result:r,mutationId:0,isMounted:!0,client:n,mutation:e,options:t});Object.assign(p.current,{client:n,options:t,mutation:e});var m=a.useCallback((function(e){void 0===e&&(e={});var t=p.current,n=t.options,i=t.mutation,a=(0,l.__assign)((0,l.__assign)({},n),{mutation:i}),r=e.client||p.current.client;p.current.result.loading||a.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var d=++p.current.mutationId,u=(0,s.l)(a,e);return r.mutate(u).then((function(t){var n,i,a=t.data,l=t.errors,s=l&&l.length>0?new c.K4({graphQLErrors:l}):void 0,m=e.onError||(null===(n=p.current.options)||void 0===n?void 0:n.onError);if(s&&m&&m(s,u),d===p.current.mutationId&&!u.ignoreResults){var g={called:!0,loading:!1,data:a,error:s,client:r};p.current.isMounted&&!(0,o.L)(p.current.result,g)&&h(p.current.result=g)}var f=e.onCompleted||(null===(i=p.current.options)||void 0===i?void 0:i.onCompleted);return s||null==f||f(t.data,u),t})).catch((function(t){var n;if(d===p.current.mutationId&&p.current.isMounted){var i={loading:!1,error:t,data:void 0,called:!0,client:r};(0,o.L)(p.current.result,i)||h(p.current.result=i)}var a=e.onError||(null===(n=p.current.options)||void 0===n?void 0:n.onError);if(a)return a(t,u),{data:void 0,errors:t};throw t}))}),[]),g=a.useCallback((function(){p.current.isMounted&&h({called:!1,loading:!1,client:n})}),[]);return a.useEffect((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[m,(0,l.__assign)({reset:g},r)]}(e,{...t,client:(0,p.h1)(g).client,onError:e=>{m.oR.error("Error in useMutation: "+e.message)}}),y={};const k=i.J1`
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
    `,b=i.J1`
    fragment CustomEffect on CustomEffect {
  __typename
  kind
  hook
  ward
}
    `,_=i.J1`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `,w=i.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${b}
${_}`,v=i.J1`
    fragment StringAssignWidget on StringAssignWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `,x=i.J1`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `,A=i.J1`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `,T=i.J1`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${x}
${A}`,W=i.J1`
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
    ${T}`,S=i.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${W}`,j=i.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,L=i.J1`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `,$=i.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,R=i.J1`
    fragment StateChoiceAssignWidget on StateChoiceAssignWidget {
  __typename
  kind
  followValue
  stateChoices
}
    `,P=i.J1`
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
    ${v}
${S}
${j}
${L}
${$}
${R}`,C=i.J1`
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
    ${P}
${T}`,O=i.J1`
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
    ${C}
${P}
${T}`,I=i.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,E=i.J1`
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
    ${w}
${P}
${T}
${O}
${I}`,N=i.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,q=i.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,G=i.J1`
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
    ${N}
${q}`,D=i.J1`
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
    ${E}
${G}`,U=i.J1`
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
    `,B=i.J1`
    fragment Flavour on Flavour {
  ...ListFlavour
  description
}
    ${G}`,M=i.J1`
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
    `,F=i.J1`
    fragment ListResource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
}
    `,J=i.J1`
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
    ${M}
${F}`,z=i.J1`
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
    ${J}
${F}`,H=i.J1`
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
    ${G}`,K=i.J1`
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
    ${G}`,V=i.J1`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `,Y=i.J1`
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
    ${M}`,Z=i.J1`
    mutation CreateGithubRepo($identifier: String!) {
  createGithubRepo(input: {identifier: $identifier}) {
    id
  }
}
    `;i.J1`
    mutation RescanRepos {
  rescanRepos {
    id
  }
}
    `;i.J1`
    query ListBackends {
  backends {
    ...ListBackend
  }
}
    ${k}`;i.J1`
    query GetBackend($id: ID!) {
  backend(id: $id) {
    ...Backend
  }
}
    ${J}`;i.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${D}`;i.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${U}`;i.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${U}`;i.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${U}`;i.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${G}`;i.J1`
    query GetFlavour($id: ID!) {
  flavour(id: $id) {
    ...Flavour
  }
}
    ${B}`;i.J1`
    query ListPod {
  pods {
    ...ListPod
  }
}
    ${M}`;i.J1`
    query GetPod($id: ID!) {
  pod(id: $id) {
    ...Pod
  }
}
    ${z}`;i.J1`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${z}`;i.J1`
    query ListReleases {
  releases {
    ...ListRelease
  }
}
    ${K}`;i.J1`
    query GetRelease($id: ID!) {
  release(id: $id) {
    ...Release
  }
}
    ${H}`;const Q=i.J1`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${V}`;function X(e){const t={...y,...e};return((e,t)=>{const n=(0,p.h1)(g);return(0,h.I)(e,{...t,client:n.client})})(Q,t)}i.J1`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${F}`;i.J1`
    query GetResource($id: ID!) {
  resource(id: $id) {
    ...Resource
  }
}
    ${Y}`;i.J1`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${U}
${G}`;var ee=n(74848);i.Ay`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,i.Ay`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`;const te="my-2 p-2 rounded-md text-black text-center w-60 ",ne=({branch:e,repo:t,user:n})=>(0,ee.jsx)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(ie,{branch:e,repo:t,user:n})}),ie=({branch:e,repo:t,user:n})=>{const[i]=function(e){const t={...y,...e};return f(Z,t)}(),l=`${n}/${t}:${e}`,[s,o]=a.useState(!1),{data:d,refetch:c,error:u}=X({variables:{filters:{repo:t,user:n,branch:e}}}),h=d?.githubRepos.at(0);return(0,ee.jsxs)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[u&&(0,ee.jsxs)("div",{className:te+"bg-red-300",children:["Error: ",u.message]}),h?(0,ee.jsxs)("button",{className:te+"bg-green-300",children:[" \u2705 ",l]}):(0,ee.jsx)("button",{onClick:async()=>{try{o(!0),i({variables:{identifier:l}}),await c(),console.log(d),o(!1)}catch(e){console.log(e)}},className:te+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",l," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",l]})})]})}},25110:(e,t,n)=>{"use strict";n.d(t,{NS:()=>l,z4:()=>s});n(96540);var i=n(96710),a=n(1612),r=n(74848);const l=({children:e})=>(0,r.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,r.jsxs)("a",{href:"https://github.com/arkitektio/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.Ucx,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,r.jsxs)("a",{href:"https://github.com/arkitektio/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i.VjQ,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,r.jsxs)("a",{href:"https://github.com/arkitektio/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.eMv,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Mac"})]})]}),s=({children:e})=>(0,r.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,r.jsxs)("a",{href:"https://github.com/arkitektio/orkestrator/releases/download/v0.0.7/orkestrator_0.0.7_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.Ucx,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,r.jsxs)("a",{href:"https://github.com/arkitektio/orkestrator/releases/download/v0.0.7/orkestrator_0.0.7_x64-setup.exe",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i.VjQ,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,r.jsxs)("a",{href:"https://github.com/arkitektio/orkestrator/releases/download/v0.0.7/orkestrator_0.0.7_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.eMv,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Mac"})]})]})},55525:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>_,frontMatter:()=>g,metadata:()=>i,toc:()=>k});const i=JSON.parse('{"id":"showcases/paper/streaming_workflow","title":"Streaming Analysis","description":"Biological systems can be highly reactive, and closely monitoring them during long-run acquisitions is necessary for ensuring a stable environment in an ongoing experiment. This can range from just checking that the acquisition is running properly (e.g., no loss of focus or some illumination problem), to monitoring the evolution of live biological samples (e.g., premature cell death). Classically, images are batch-processed once the acquisition is complete, i.e., when all of the data have been fully acquired and stored, leaving no chance for real-time analysis and feedback. In this second workflow, we illustrate how Arkitekt with its ability for streaming analysis (i.e., processing immediately after each acquisition event), enables to display real-time feedback on the running acquisition.","source":"@site/docs/showcases/paper/streaming_workflow.mdx","sourceDirName":"showcases/paper","slug":"/showcases/paper/streaming_workflow","permalink":"/docs/showcases/paper/streaming_workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/showcases/paper/streaming_workflow.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Streaming Analysis","sidebar_label":"Streaming Analysis","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Interactive Workflow","permalink":"/docs/showcases/paper/interactive_workflow"},"next":{"title":"Smart Microscopy","permalink":"/docs/showcases/paper/smart_microscopy_workflow"}}');var a=n(74848),r=n(28453),l=(n(25110),n(90547)),s=n(79160),o=n.n(s),d=n(97470),c=n(5584),u=n(64357);const h=n.p+"assets/files/organoid_model-654578336cf0240c4431c098064132ea.zip",p=JSON.parse('{"__typename":"Flow","id":"45","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75","position":{"__typename":"Position","x":235,"y":-53},"typename":"ArkitektNode","parentNode":null,"hash":"f8031ef4200cdae6e7bd8f5f214d2428900488ee80f042336f55cb87e406ddcc","kind":"GENERATOR","defaults":{"regexp":null,"dataset":null,"indefinitely":true},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset to stream to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"regexp","label":"regexp","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"A regular expression to filter the files","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"indefinitely","label":"indefinitely","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Should we stream waiting for new files?. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream Files","description":"Streams files from a folder to Mikro","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-cebbe0d8-8853-4568-bc39-cec39b74b250","position":{"__typename":"Position","x":518,"y":-96},"typename":"ArkitektNode","parentNode":null,"hash":"0abdf2faf07b0a322bd75e410a128fee96dabec2e9f74c3b07addaed949a211f","kind":"FUNCTION","defaults":{"era":null,"file":null,"stage":null,"dataset":null,"position_tolerance":40,"timepoint_from_time":true,"timepoint_tolerance":null,"position_from_planes":true,"channels_from_channels":true},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"file","label":"file","identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The File to be converted","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The created series in this file","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"stage","label":"stage","identifier":"@mikro/stage","scope":"GLOBAL","kind":"STRUCTURE","description":"The Stage in which to put the Image. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_stages($search: String, $values: [ID]) {\\n  options: stages(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"era","label":"era","identifier":"@mikro/era","scope":"GLOBAL","kind":"STRUCTURE","description":"The Era in which to put the Image.. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchEras($search: String, $values: [ID]) {\\n  options: eras(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset in which to put the Image. Defaults to the file dataset.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_from_planes","label":"position_from_planes","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a position from the first planes (only if stage is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_from_time","label":"timepoint_from_time","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a timepoint from the first time (only if era is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channels_from_channels","label":"channels_from_channels","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a channel from the channels. Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_tolerance","label":"position_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the position. Defaults to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_tolerance","label":"timepoint_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the timepoint. Defaults  to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Convert Omero","description":"Converts an Omero File in a set of Mikrodata","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-e1cb5e42-2235-47b8-a57a-4b0fb0a328e7","position":{"__typename":"Position","x":1100,"y":-258},"typename":"ArkitektNode","parentNode":null,"hash":"6aef2e0b4cfe28139854a42edf795346d1df5f822014c8901080728d4af875cd","kind":"FUNCTION","defaults":{"key":"Intensity","rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Max","description":"Measures the maxium value of an image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-5512bfce-587b-4266-b985-5c2378b73de6","position":{"__typename":"Position","x":830,"y":-237},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83","position":{"__typename":"Position","x":1223,"y":91},"typename":"ArkitektNode","parentNode":null,"hash":"6aef2e0b4cfe28139854a42edf795346d1df5f822014c8901080728d4af875cd","kind":"FUNCTION","defaults":{"key":"Cell Count","rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Max","description":"Measures the maxium value of an image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-db65a500-23da-4a9d-a3d6-f879399a33b1","position":{"__typename":"Position","x":973,"y":151},"typename":"ArkitektNode","parentNode":null,"hash":"61c20bbf15a1a19c914bc4d0135417b8d8782ed7626447e043f39a2dda413d2c","kind":"FUNCTION","defaults":{"rep":null,"model":null},"mapStrategy":"AS_COMPLETED","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to segment.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Predict Stardist","description":"Segments Cells using the stardist algorithm","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4","position":{"__typename":"Position","x":702,"y":121},"typename":"ArkitektNode","parentNode":null,"hash":"70c8f94e3bb881cee5fc4f2c2ec613666601abb66ee95b0eff6389bb27e41774","kind":"FUNCTION","defaults":{"rep":null,"rescale_x":0.6,"rescale_y":0.6,"rescale_z":1,"anti_alias":true,"pad_method":"PAD_ZEROS","crop_method":"CENTER","ensure_dim_x":900,"ensure_dim_y":900,"ensure_dim_z":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image we should resized","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The resized image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"rescale_x","label":"rescale_x","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The physical size of the x dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"rescale_y","label":"rescale_y","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The physical size of the y dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"rescale_z","label":"rescale_z","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The physical size of the z dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"ensure_dim_x","label":"ensure_dim_x","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The size of the x dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"ensure_dim_y","label":"ensure_dim_y","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The size of the y dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"ensure_dim_z","label":"ensure_dim_z","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The size of the z dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_method","label":"crop_method","identifier":"app.cropmethod","scope":"GLOBAL","kind":"STRUCTURE","description":"The method to crop the image. Defaults to crop center.","assignWidget":{"__typename":"Widget","kind":"ChoiceWidget","query":null,"hook":null,"ward":null,"min":null,"step":null,"placeholder":null,"max":null,"choices":[{"__typename":"Choice","value":"CENTER","label":"CENTER"},{"__typename":"Choice","value":"TOP_LEFT","label":"TOP_LEFT"},{"__typename":"Choice","value":"BOTTOM_RIGHT","label":"BOTTOM_RIGHT"}],"asParagraph":null},"returnWidget":{"__typename":"ReturnWidget","kind":"ChoiceReturnWidget","query":null,"choices":[{"__typename":"Choice","value":"CENTER","label":"CENTER"},{"__typename":"Choice","value":"TOP_LEFT","label":"TOP_LEFT"},{"__typename":"Choice","value":"BOTTOM_RIGHT","label":"BOTTOM_RIGHT"}]},"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"pad_method","label":"pad_method","identifier":"app.expandmethod","scope":"GLOBAL","kind":"STRUCTURE","description":"The method to pad the image. Defaults to expand with zeros.","assignWidget":{"__typename":"Widget","kind":"ChoiceWidget","query":null,"hook":null,"ward":null,"min":null,"step":null,"placeholder":null,"max":null,"choices":[{"__typename":"Choice","value":"PAD_ZEROS","label":"PAD_ZEROS"}],"asParagraph":null},"returnWidget":{"__typename":"ReturnWidget","kind":"ChoiceReturnWidget","query":null,"choices":[{"__typename":"Choice","value":"PAD_ZEROS","label":"PAD_ZEROS"}]},"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"anti_alias","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Resize to Physical","description":"Resize the image to match the physical size of the dimensions,\\nif the physical size is not provided, it will be assumed to be 1.\\n\\nAdditional dimensions will be cropped or padded according to the\\ncrop_method and pad_method if the ensure_dim is provided","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7","position":{"__typename":"Position","x":732,"y":-98},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of rep","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe created series in this file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75arg_0","source":"1","sourceHandle":"return_0","target":"arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75return_0-arkid-cebbe0d8-8853-4568-bc39-cec39b74b250arg_0","source":"arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75","sourceHandle":"return_0","target":"arkid-cebbe0d8-8853-4568-bc39-cec39b74b250","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/omerofile","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-cebbe0d8-8853-4568-bc39-cec39b74b250return_0-reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7arg_0","source":"arkid-cebbe0d8-8853-4568-bc39-cec39b74b250","sourceHandle":"return_0","target":"reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7return_0-arkid-5512bfce-587b-4266-b985-5c2378b73de6arg_0","source":"reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7","sourceHandle":"return_0","target":"arkid-5512bfce-587b-4266-b985-5c2378b73de6","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-5512bfce-587b-4266-b985-5c2378b73de6return_0-arkid-e1cb5e42-2235-47b8-a57a-4b0fb0a328e7arg_0","source":"arkid-5512bfce-587b-4266-b985-5c2378b73de6","sourceHandle":"return_0","target":"arkid-e1cb5e42-2235-47b8-a57a-4b0fb0a328e7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7return_0-arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4arg_0","source":"reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7","sourceHandle":"return_0","target":"arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4return_0-arkid-db65a500-23da-4a9d-a3d6-f879399a33b1arg_0","source":"arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4","sourceHandle":"return_0","target":"arkid-db65a500-23da-4a9d-a3d6-f879399a33b1","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-db65a500-23da-4a9d-a3d6-f879399a33b1return_0-arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83arg_0","source":"arkid-db65a500-23da-4a9d-a3d6-f879399a33b1","sourceHandle":"return_0","target":"arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83return_0-2arg_0","source":"arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-db65a500-23da-4a9d-a3d6-f879399a33b1.model"],"port":{"__typename":"Port","key":"model","label":"model","identifier":"@mikro/model","scope":"GLOBAL","kind":"STRUCTURE","description":"The model to use for segmentation (maps to arkid-db65a500-23da-4a9d-a3d6-f879399a33b1.model)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_models($search: String, $values: [ID]) {\\n  options: models(name: $search, limit: 20, ids: $values) {\\n    label: name\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75.regexp"],"port":{"__typename":"Port","key":"regexp","label":"regexp","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"A regular expression to filter the files (maps to arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75.regexp)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-cebbe0d8-8853-4568-bc39-cec39b74b250.stage"],"port":{"__typename":"Port","key":"stage","label":"stage","identifier":"@mikro/stage","scope":"GLOBAL","kind":"STRUCTURE","description":"The Stage in which to put the Image. Defaults to None. (maps to arkid-cebbe0d8-8853-4568-bc39-cec39b74b250.stage)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_stages($search: String, $values: [ID]) {\\n  options: stages(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-cebbe0d8-8853-4568-bc39-cec39b74b250.era"],"port":{"__typename":"Port","key":"era","label":"era","identifier":"@mikro/era","scope":"GLOBAL","kind":"STRUCTURE","description":"The Era in which to put the Image.. Defaults to None. (maps to arkid-cebbe0d8-8853-4568-bc39-cec39b74b250.era)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchEras($search: String, $values: [ID]) {\\n  options: eras(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"beady-taupe-reindeer","screenshot":null,"createdAt":"2023-10-30T11:19:43.239149+00:00","workspace":{"__typename":"Workspace","id":"29"}}'),m=n.p+"assets/medias/organoid_workflow_creation-d688056645cf56515848cec30d3cc59b.webm",g={title:"Streaming Analysis",sidebar_label:"Streaming Analysis",sidebar_position:3},f=void 0,y={},k=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Microscope Software",id:"microscope-software",level:4},{value:"Gucker",id:"gucker",level:4},{value:"Mikro-Napari and Napari",id:"mikro-napari-and-napari",level:4},{value:"PluginApps",id:"pluginapps",level:4},{value:"Preparations",id:"preparations",level:2},{value:"Analysis Computer",id:"analysis-computer",level:3},{value:"Acquisition Computer",id:"acquisition-computer",level:3},{value:"Optional: Parallel Processing Computers",id:"optional-parallel-processing-computers",level:3},{value:"Installing the Workflows",id:"installing-the-workflows",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Context Preparation",id:"context-preparation",level:2},{value:"Reserving and Running the Workflow",id:"reserving-and-running-the-workflow",level:2},{value:"Results",id:"results",level:2}];function b(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Biological systems can be highly reactive, and closely monitoring them during long-run acquisitions is necessary for ensuring a stable environment in an ongoing experiment. This can range from just checking that the acquisition is running properly (e.g., no loss of focus or some illumination problem), to monitoring the evolution of live biological samples (e.g., premature cell death). Classically, images are batch-processed once the acquisition is complete, i.e., when all of the data have been fully acquired and stored, leaving no chance for real-time analysis and feedback. In this second workflow, we illustrate how Arkitekt with its ability for streaming analysis (i.e., processing immediately after each acquisition event), enables to display real-time feedback on the running acquisition.\nHere we used Arkitekt to perform real-time quantitative monitoring of soSPIM 21,22 3D microscopy data using the popular StarDist 23 deep-learning segmentation algorithm, while they were being acquired (Fig. 3). A user-defined directory located on the microscope\u2019s computer was monitored for new data, and all the analysis steps were performed remotely on each newly acquired data, in parallel with the acquisition, minimizing the risks of slowing the acquisition down or causing its crash.\nAs the deep learning-based segmentation steps can be highly time-consuming, several processes were run in parallel and distributed on 3 different available hardware. Visualization of both the 3D acquisition and the results were performed in Napari 7 on a remote and mobile computer, as well as through the web-interface, where results (here the number of nuclei and the average volume) were plotted on a live-dashboard, accessible to other remote members of the lab. (see Supp. Video 5)"}),"\n",(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)(l.A,{img:o()}),(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:"The Streaming Microscopy Workflow"})})]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.admonition,{title:"Please read",type:"tip",children:(0,a.jsxs)(t.p,{children:["We ",(0,a.jsx)(t.strong,{children:"strongly"})," suggest to go through the ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps",children:"Getting Started"})," guide before attempting to run this workflow.\nIt will guide you through the installation of the Arkitekt platform and the setup of your first workflow, as well as how to install plugins\nand apps. Additionally, we suggest to go through the ",(0,a.jsx)(t.a,{href:"/docs/introduction/advanced/live",children:"Live Analysis Basics"})," guide to get familiar with the Streaming\ncapabilities of Arkitekt."]})}),"\n",(0,a.jsx)(t.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,a.jsx)(t.p,{children:"This workflow is designed to run on a microscope computer running Windows 10 as well as on a remote analysis computer\nthat will power the Arkitekt platform and the image analysis (in the illustrated example running Ubuntu 22.04, but equally tested on\na Windows 10 Machine). To enable GPU acceleration for the Stardist segmentation, the analysis computer needs to have access to a CUDA 11 enabled GPU (tested on Nvidia GeforceRTX 2080Ti).\nThe microscope computer will need to be connected to the same network as the remote computer."}),"\n",(0,a.jsx)(t.p,{children:"Additionally to use the parallel processing capabilities of this workflow, you will need to have similarly configured computers (Ubuntu 22.04 or Windows 10, with a CUDA 11 enabled GPU, with Docker installed)\nthat will be used to run the parallel processes. These computers will need to be connected to the same network as the remote computer."}),"\n",(0,a.jsx)(t.h3,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,a.jsx)(t.h4,{id:"microscope-software",children:"Microscope Software"}),"\n",(0,a.jsxs)(t.p,{children:["Your microscope Software of choice (tested with ",(0,a.jsx)(t.a,{href:"https://www.moleculardevices.com/",children:"Metamorph"}),", that is able to stream images to a directory on the microscope computer, in an\nOME compliant format."]}),"\n",(0,a.jsx)(t.h4,{id:"gucker",children:(0,a.jsx)(t.a,{href:"https://github.com/arkitektio-apps/gucker",children:"Gucker"})}),"\n",(0,a.jsxs)(t.p,{children:["This workflow uses the Gucker App to watch a directory for new files opn the Acquisition Computer. To install Gucker, download the latest release from the ",(0,a.jsx)(t.a,{href:"https://github.com/jhnnsrs/arkitektio-apps/releases/latest",children:"Gucker Releases"}),".\nYou can also choose to install Gucker from source by following the instructions on the ",(0,a.jsx)(t.a,{href:"https://github.com/arkitektio-apps/gucker",children:"Gucker Github"}),"."]}),"\n",(0,a.jsxs)(t.h4,{id:"mikro-napari-and-napari",children:[(0,a.jsx)(t.a,{href:"https://github.com/arkitektio-apps/mikro-napari",children:"Mikro-Napari"})," and ",(0,a.jsx)(t.a,{href:"https://napari.org/",children:"Napari"})]}),"\n",(0,a.jsxs)(t.p,{children:["For visualization of the 3D data, we use the Napari App. To install Napari, follow the instructions on the ",(0,a.jsx)(t.a,{href:"https://napari.org/",children:"Napari Website"}),", as well as install\nthe mikro-napari plugin by following the instructions ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps/first_app",children:"here"})," or ",(0,a.jsx)(t.a,{href:"/docs/apps/standalones/mikro-napari",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"pluginapps",children:"PluginApps"}),"\n",(0,a.jsxs)(t.p,{children:["This workflow uses the following ",(0,a.jsx)(t.code,{children:"PluginApps"})," installed through the Arkitekt Plugin Store. To install these plugins follow the instructions ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps/first_tool",children:"here"}),",\nor connect this website to your Arkitekt instance and click on the button below:"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)(c.W,{repo:"stdlib",user:"arkitektio-apps",branch:"master"}),(0,a.jsx)(c.W,{repo:"omero",user:"arkitektio-apps",branch:"master"}),(0,a.jsx)(c.W,{repo:"segmentor",user:"arkitektio-apps",branch:"master"})]}),"\n",(0,a.jsxs)(t.p,{children:["To enable the parallelization of the Stardist segmentation, you will need to have access to a Docker enabled computer (Ubuntu 22.04 or Windows 10) with a CUDA 11 enabled GPU.\nArkitekt does not need to be installed on this computer, but we will run the Segmentor Plugin on this computer through a ",(0,a.jsx)(t.code,{children:"docker run"})," command."]}),"\n",(0,a.jsx)(t.h2,{id:"preparations",children:"Preparations"}),"\n",(0,a.jsx)(t.h3,{id:"analysis-computer",children:"Analysis Computer"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Install Arkitekt on your analysis computer following the instructions ",(0,a.jsx)(t.a,{href:"/docs/introduction/installation",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Depending if you want to reproduce the results illustrated in the Paper, you can either install the Stardist Model which we used for the demo data, via the button below or train your own model by following the instructions ",(0,a.jsx)(t.a,{href:"/docs/introduction/advanced/training",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(u.d,{url:h,name:"Organoid Model",kind:"TENSORFLOW"}),"\n",(0,a.jsx)(t.h3,{id:"acquisition-computer",children:"Acquisition Computer"}),"\n",(0,a.jsx)(t.p,{children:"TODO: Video"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["On the Acquisition Computer, you will need to setup your microscope software to save the images in an OME compliant format to a directory that is accessible to the analysis computer.\nFor this example, we will assume that the images are saved to the directory ",(0,a.jsx)(t.code,{children:"C://Data"})," on the microscope computer, any other directory can be used, but will need to be specified correctly in the Gucker App."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Unzip the Gucker App, and execute on ",(0,a.jsx)(t.code,{children:"Gucker.exe"}),'. Initial startup might take a few seconds, as Gucker will need to precompile some code. Once the App is running, select your respective directory\nin the "Choose Directory" field. Additionally as Gucker also acts as a Data Exporter, you need to specify an "Export Directory". This should not be the same as the "Import Directory", but can be any other directory\non your computer with write access.']}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Connect and Login with the Arkitekt instance (if your Arkitekt instance does not show up, make sure you are ",(0,a.jsx)(t.a,{href:"/docs/introduction/installation#advertisting",children:"advertising"})," it)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"optional-parallel-processing-computers",children:"Optional: Parallel Processing Computers"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"To enable the parallel processing of the Stardist segmentation, we will manually start the Segmentor plugin on each of the parallel processing computers. This can be done by executing the following command in a terminal on each of the parallel processing computers:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"docker run -t --gpus all jhnnsrs/segmentor:0.3.4 arkitekt run prod -h --url $ANALYSIS_COMPUTER_HOSTNAME:8000 -i $THIS_INSTANCE_ID\n"})}),"\n",(0,a.jsxs)(t.p,{children:["where ",(0,a.jsx)(t.code,{children:"$ANALYSIS_COMPUTER_HOSTNAME"})," is the hostname of your analysis computer, and ",(0,a.jsx)(t.code,{children:"$THIS_INSTANCE_ID"})," is the ID of the parallel processing computer. This ID can be any string, but needs to be unique for each parallel processing computer."]}),"\n",(0,a.jsx)(t.h2,{id:"installing-the-workflows",children:"Installing the Workflows"}),"\n",(0,a.jsx)(t.p,{children:"The streaming analysis workflow can be installed by clicking on the button below. One installed all correspoinding\nnodes should light up in the Arkitekt Workflow Editor."}),"\n",(0,a.jsx)(d.W,{flow:p}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:"You can also follow the following steps to install the workflow manually:"}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md my-3",width:"100%",children:(0,a.jsx)("source",{src:m})}),"\n",(0,a.jsx)(t.p,{children:"A few notes on this workflow:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"On the dashboard we can see that three seperate instances of the segmentor app are currently active and\nconnected. These are the three parallel processing computers that we started in the previous step. If you do not see\nany instances, make sure that you have started the Segmentor App on each of the parallel processing computers. Of course\nyou can also skip this part and just run the workflow on your analysis computer, but then the Stardist segmentation will\nbe run sequentially and not in parallel."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Creating the Workflow follows the same patterns as illustrated in the Tutorials."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Connect the nodes by dragging the output ports of one node to the input ports of another node. As illustrated in the ",(0,a.jsx)(t.a,{href:"/docs/introduction/advanced/live",children:"Live Analysis"}),", the\n",(0,a.jsx)(t.code,{children:"Convert Omero"})," node is returning a list of Images (as some OME formats can contain multiple series), which is why we need to ",(0,a.jsx)(t.code,{children:"Chunk"})," the list of images into single images, before we can\nrun the rest of the workflow on each image individually."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You see that some parameters of the workflow are set to specific parameters right in the workflow. This are inherently linked to the workflow as you can then just copy the workflow to another\nArkitekt instance and it will work out of the box. Some parameters like the ",(0,a.jsx)(t.code,{children:"Segmentation Model"})," of the ",(0,a.jsx)(t.code,{children:"Predict Stardist"}),' node are set to be "global parameters" (by clicking the \u2b06\ufe0f next to parameter,\nturning it bright red). This means that they will asked as constants when the workflow is run. This is useful if you want to run the same workflow with different parameters (e.g. different segmentatoin\nmodels), without having to change the workflow itself.']}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["During the creation of the workflow around (2:25) we see the ",(0,a.jsx)(t.code,{children:"Predict Stardist"})," node being configured. Here we can see that the ",(0,a.jsx)(t.code,{children:"Segmentation Model"}),' parameter is set to be a global parameter, and that\nwe are changing the "Reserve Params" to manually point to all three segmentor instances that we started in the previous step. This will send out incoming requests in a round robin manner to the three\nsegmentor instances, and will thus distribute the workload evenly between the three instances. ',(0,a.jsx)(t.em,{children:"However"}),' in the default configuratoin this will not parallelize the segmentation but rather wait for\nthe first instance to finish, before sending the next image to the next instance. To enable parallelization, we can go to the "Advanced" tab and set the Map Strategy to "As completed". This will cause\nArkitekt to ',(0,a.jsx)(t.em,{children:"NOT"}),' wait for the first instance to finish, but send immediately the next image to the next instance. This will cause the three instances to run in parallel, and thus speed up the segmentation\nn, however this may also cause the images to be segmented in a different order than they were acquired. If you want to make sure that the images are segmented in the same order as they were acquired, you\ncan set the Map Strategy to "Ordered", however this is not the most efficient way to parallelize the segmentation, as potential longer running segmentations will block the pipeline.']}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:"On Parallization in Arkitekt",type:"note",children:(0,a.jsx)(t.p,{children:"As you can see Arkitekt supports various parellization patterns, each coming with their own advantages and disadvantages."})}),"\n",(0,a.jsx)(t.h2,{id:"deployment",children:"Deployment"}),"\n",(0,a.jsx)(t.p,{children:'To deploy the workflow, click on the "Deploy" button in the Arkitekt Workflow Editor. This will deploy the workflow to your Arkitekt instance. If you want to enable\nthe parellization feature and have imported the workflow, please make sure that you have selected all of the participating computers in the "Predict StarDist" node,\nbefore deploying the workflow.'}),"\n",(0,a.jsx)(t.h2,{id:"context-preparation",children:"Context Preparation"}),"\n",(0,a.jsxs)(t.p,{children:["During the creationg of our workflow, we set the Stage parameters of our ",(0,a.jsx)(t.code,{children:"Convert Omero"})," node as a global parameter to our workflow. A few words about what that entails:"]}),"\n",(0,a.jsx)(t.p,{children:'A "Stage" is a metadata container provided by Arkitekt, specifically through its Mikro service.\nIts primary purpose is to put acquired data into a relevant biological context.'}),"\n",(0,a.jsx)(t.p,{children:"For instance, in our example, when we capture multiple positions using our microscope, each position is saved as a separate file which passes as a single item through our workflow.\nThis raises a question: How can we inform Arkitekt that all these files are part of the same multi-position acquisition?"}),"\n",(0,a.jsxs)(t.p,{children:['Well that\'s where the "Stage" comes in. In Arkitekt, a "Stage" is essentially a metadata label that groups positions, helping to recreate, for example, the spatial arrangement of our samples on the microscope.\nAnd since our files adhere to the OME standard, they contain position information in the OME metadata. By grouping our files by position, we can recreate the spatial arrangement of our samples on the microscope.\nautomatically, and on the fly, and we can explore our data in a spatial context, directly from the webinterface. This is also why we gave the "Convert Omero" node a ',(0,a.jsx)(t.code,{children:"Position Tolerance"})," parameter set to 40\xb5m so that\nall motion-correcteed images that share the same position within 40\xb5m will be grouped into the same position on the same stage."]}),"\n",(0,a.jsxs)(t.p,{children:["For this to work, we need to create a new ",(0,a.jsx)(t.code,{children:"Stage"})," on the Arkitekt webinterface by going to the ",(0,a.jsx)(t.code,{children:"Data"})," section and clicking on ",(0,a.jsx)(t.code,{children:"Create New Stage"}),". Here we can give our stage a name, which could be\nthe name of multi-well experiment. This now empty stage can be passed as a parameter to our workflow and bthe ",(0,a.jsx)(t.code,{children:"Convert Omero"})," node will use our stage to group all of passed throug images into\nthe same stage. This will allow us to explore our data in a spatial context, directly from the webinterface."]}),"\n",(0,a.jsx)(t.admonition,{title:"On Stages",type:"note",children:(0,a.jsxs)(t.p,{children:["If you are re-running the workflow on the multi-well sample you won't need to change the ",(0,a.jsx)(t.code,{children:"Stage"}),", as the phyiscal position of the samples will not change. However if you are running the workflow on a different\nsample, or you have moved the sample on the microscope, you will need to create a new ",(0,a.jsx)(t.code,{children:"Stage"})," for the new sample. You can do this by going to the ",(0,a.jsx)(t.code,{children:"Data"})," section and clicking on ",(0,a.jsx)(t.code,{children:"Create New Stage"}),".\nYou can also use the ",(0,a.jsx)(t.code,{children:"Create New Stage"})," node to create a new stage directly from within the workflow."]})}),"\n",(0,a.jsx)(t.h2,{id:"reserving-and-running-the-workflow",children:"Reserving and Running the Workflow"}),"\n",(0,a.jsx)(t.p,{children:"Reserve the deployed workflow either on the Arkitekt Workflow interface or on the Dashboard and once all of the Applications are started, Arkitekt should guide you\non which applications need to be started. Once all of the applications are started, you can start the workflow, through right-click start on the Workflow. During the\nassignment Arkitekt will ask you for the global Parameters that we set in the workflow."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Model: Please choose here the model that we installed in the "Preparations" step. If you have trained your own model, you can also choose that model here.'}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:['RegExp: This is a regular expression that will be used to filter the files that are found in the "Import Directory". In our case we want to only segment the images\nthat are saved in the TIF format, so we used the regular expression ',(0,a.jsx)(t.code,{children:"*.TIF"})," to only select these files. If you want to segment other files, you can change\nthis regular expression to match your files."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Stage: Just select the stage that you created in the "Context Preparation" step.'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"After assigned you should be shown the Workflow Run interface which will show you the progress of the workflow.\nIt will automatically update as new images are put into the directory on the microscope computer. You can now\nstart the acquisition on the microscope computer and the workflow will automatically start processing the images."}),"\n",(0,a.jsx)(t.h2,{id:"results",children:"Results"}),"\n",(0,a.jsx)(t.p,{children:"In addition to the Run Interface which should give you live feedback on the progress of the workflow, you can also use the stage view to explore the results of the workflow.\nHere Positions are shown as they were acquired on the microscope, and you can click on each position to see the results of the segmentation ( if it was already processed)"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Test Environment"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.p,{children:"This workflow was tested on the following environments:"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.p,{children:"Acquisition Computer:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Intel Xeon CPU E5-2620 v4 @ 2.10GHz"}),"\n",(0,a.jsx)(t.li,{children:"128GB RAM"}),"\n",(0,a.jsx)(t.li,{children:"Nikon Ti2-E Microscope"}),"\n",(0,a.jsx)(t.li,{children:"Windows 10"}),"\n",(0,a.jsx)(t.li,{children:"Micro-Manager 2.0.1 2023.05.23"}),"\n",(0,a.jsx)(t.li,{children:"MikroManager 0.0.1"}),"\n"]}),(0,a.jsx)(t.p,{children:"Analysis Computer"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Intel(R) Core(TM) i9-10900KF CPU @ 3.70GHz"}),"\n",(0,a.jsx)(t.li,{children:"Ubuntu 22.04"}),"\n",(0,a.jsx)(t.li,{children:"Arkitekt Paper Channel"}),"\n",(0,a.jsx)(t.li,{children:"Segmentor Plugin 0.3.4"}),"\n",(0,a.jsx)(t.li,{children:"Stdlib Plugin 0.3.9"}),"\n"]})]})]})]})}function _(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},64357:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var i=n(2135),a=(n(96540),n(74848));i.Ay`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`;const r=({url:e,name:t,kind:n})=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("button",{onClick:async()=>{console.log(e);try{const t=await fetch(e);if(!t.ok)throw new Error("Failed fetching file from Documentation");const n=await t.blob();new File([n],"model.zip",{type:n.type});console.log(data)}catch(t){console.log(t)}},className:"my-2 p-2 rounded-md text-black text-center w-60 cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",t]})})},79160:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/streaming.492e399.640.png 640w,"+n.p+"assets/ideal-img/streaming.f331c77.1320.png 1320w,"+n.p+"assets/ideal-img/streaming.623b188.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/streaming.492e399.640.png",width:640,height:220},{path:n.p+"assets/ideal-img/streaming.f331c77.1320.png",width:1320,height:453},{path:n.p+"assets/ideal-img/streaming.623b188.2000.png",width:2e3,height:686}],src:n.p+"assets/ideal-img/streaming.492e399.640.png",toString:function(){return n.p+"assets/ideal-img/streaming.492e399.640.png"},placeholder:void 0,width:640,height:220},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nAF7AIT/ACEyWbZRYIavnZG2r52SuL+ppLOe0rhrg1UjXodjSHCKPy1NjU8/Zn0AOUZv/2FokPOCcqn3gnSy/6GQo93hv2KZUzFr3GxCbcpaTWL/WExpsACAgHyNk6amTqzDzFquydBpz9fIQdnEdGCfuMRTqL/WOKCwqlG2r45tJOlBr4U3UQcAAAAASUVORK5CYII="}},97470:(e,t,n)=>{"use strict";n.d(t,{W:()=>a});n(96540);var i=n(74848);const a=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Show Workflow"}),(0,i.jsx)("p",{children:"This component is under construction."})]})}}]);