(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[4207],{5584:(e,n,t)=>{"use strict";t.d(n,{W:()=>te});var i=t(2135),a=t(96540),r=t(10518),o=t(31635),s=t(60144),l=t(15381),d=t(75443),u=t(9211),c=t(70111);var p=t(25395),g=t(76234),h=t(64721);const m="kabinet",f=(e,n)=>function(e,n){var t=(0,c.m)(null==n?void 0:n.client);(0,d.D$)(e,d.KG.Mutation);var i=a.useState({called:!1,loading:!1,client:t}),r=i[0],p=i[1],g=a.useRef({result:r,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(g.current,{client:t,options:n,mutation:e});var h=a.useCallback((function(e){void 0===e&&(e={});var n=g.current,t=n.options,i=n.mutation,a=(0,o.__assign)((0,o.__assign)({},t),{mutation:i}),r=e.client||g.current.client;g.current.result.loading||a.ignoreResults||!g.current.isMounted||p(g.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var d=++g.current.mutationId,c=(0,s.l)(a,e);return r.mutate(c).then((function(n){var t,i,a=n.data,o=n.errors,s=o&&o.length>0?new u.K4({graphQLErrors:o}):void 0,h=e.onError||(null===(t=g.current.options)||void 0===t?void 0:t.onError);if(s&&h&&h(s,c),d===g.current.mutationId&&!c.ignoreResults){var m={called:!0,loading:!1,data:a,error:s,client:r};g.current.isMounted&&!(0,l.L)(g.current.result,m)&&p(g.current.result=m)}var f=e.onCompleted||(null===(i=g.current.options)||void 0===i?void 0:i.onCompleted);return s||null==f||f(n.data,c),n})).catch((function(n){var t;if(d===g.current.mutationId&&g.current.isMounted){var i={loading:!1,error:n,data:void 0,called:!0,client:r};(0,l.L)(g.current.result,i)||p(g.current.result=i)}var a=e.onError||(null===(t=g.current.options)||void 0===t?void 0:t.onError);if(a)return a(n,c),{data:void 0,errors:n};throw n}))}),[]),m=a.useCallback((function(){g.current.isMounted&&p({called:!1,loading:!1,client:t})}),[]);return a.useEffect((function(){return g.current.isMounted=!0,function(){g.current.isMounted=!1}}),[]),[h,(0,o.__assign)({reset:m},r)]}(e,{...n,client:(0,g.h1)(m).client,onError:e=>{h.oR.error("Error in useMutation: "+e.message)}}),b={};const y=i.J1`
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
    `,k=i.J1`
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
    ${k}
${_}`,v=i.J1`
    fragment StringAssignWidget on StringAssignWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `,A=i.J1`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `,x=i.J1`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `,$=i.J1`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${A}
${x}`,j=i.J1`
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
    ${$}`,L=i.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${j}`,W=i.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,R=i.J1`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `,S=i.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,I=i.J1`
    fragment StateChoiceAssignWidget on StateChoiceAssignWidget {
  __typename
  kind
  followValue
  stateChoices
}
    `,N=i.J1`
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
${L}
${W}
${R}
${S}
${I}`,T=i.J1`
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
    ${N}
${$}`,P=i.J1`
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
    ${T}
${N}
${$}`,C=i.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,J=i.J1`
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
${N}
${$}
${P}
${C}`,D=i.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,E=i.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,U=i.J1`
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
    ${D}
${E}`,O=i.J1`
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
    ${J}
${U}`,F=i.J1`
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
    `,q=i.J1`
    fragment Flavour on Flavour {
  ...ListFlavour
  description
}
    ${U}`,G=i.J1`
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
    `,B=i.J1`
    fragment ListResource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
}
    `,M=i.J1`
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
    ${G}
${B}`,H=i.J1`
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
    ${M}
${B}`,z=i.J1`
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
    ${U}`,K=i.J1`
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
    ${U}`,V=i.J1`
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
    ${G}`,Q=i.J1`
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
    ${y}`;i.J1`
    query GetBackend($id: ID!) {
  backend(id: $id) {
    ...Backend
  }
}
    ${M}`;i.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${O}`;i.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${F}`;i.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${F}`;i.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${F}`;i.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${U}`;i.J1`
    query GetFlavour($id: ID!) {
  flavour(id: $id) {
    ...Flavour
  }
}
    ${q}`;i.J1`
    query ListPod {
  pods {
    ...ListPod
  }
}
    ${G}`;i.J1`
    query GetPod($id: ID!) {
  pod(id: $id) {
    ...Pod
  }
}
    ${H}`;i.J1`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${H}`;i.J1`
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
    ${z}`;const X=i.J1`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${V}`;function Z(e){const n={...b,...e};return((e,n)=>{const t=(0,g.h1)(m);return(0,p.I)(e,{...n,client:t.client})})(X,n)}i.J1`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${B}`;i.J1`
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
    ${F}
${U}`;var ee=t(74848);i.Ay`
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
`;const ne="my-2 p-2 rounded-md text-black text-center w-60 ",te=({branch:e,repo:n,user:t})=>(0,ee.jsx)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(ie,{branch:e,repo:n,user:t})}),ie=({branch:e,repo:n,user:t})=>{const[i]=function(e){const n={...b,...e};return f(Q,n)}(),o=`${t}/${n}:${e}`,[s,l]=a.useState(!1),{data:d,refetch:u,error:c}=Z({variables:{filters:{repo:n,user:t,branch:e}}}),p=d?.githubRepos.at(0);return(0,ee.jsxs)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[c&&(0,ee.jsxs)("div",{className:ne+"bg-red-300",children:["Error: ",c.message]}),p?(0,ee.jsxs)("button",{className:ne+"bg-green-300",children:[" \u2705 ",o]}):(0,ee.jsx)("button",{onClick:async()=>{try{l(!0),i({variables:{identifier:o}}),await u(),console.log(d),l(!1)}catch(e){console.log(e)}},className:ne+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",o," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",o]})})]})}},12527:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},33314:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')},34964:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>h,metadata:()=>i,toc:()=>b});const i=JSON.parse('{"id":"introduction/advanced/deep_learning","title":"Bridging Deep Learning","description":"Deep learning is taking over the world of bioimage analysis, and for good reason. However it is not always easy to get started and use","source":"@site/docs/introduction/advanced/deep_learning.mdx","sourceDirName":"introduction/advanced","slug":"/introduction/advanced/deep_learning","permalink":"/docs/introduction/advanced/deep_learning","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/advanced/deep_learning.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Bridging Deep Learning","sidebar_label":"Deep Learning Bridge","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"A bit more advanced","permalink":"/docs/introduction/advanced/"},"next":{"title":"Local Workflows","permalink":"/docs/introduction/advanced/local_workflows"}}');var a=t(74848),r=t(28453),o=t(12527),s=t(33314),l=t(97470),d=t(90547),u=t(73856),c=t.n(u),p=t(72018),g=t(5584);const h={title:"Bridging Deep Learning",sidebar_label:"Deep Learning Bridge",sidebar_position:3},m=void 0,f={},b=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The problems we are trying to solve",id:"the-problems-we-are-trying-to-solve",level:2},{value:"How to use Deep Learning in Arkitekt",id:"how-to-use-deep-learning-in-arkitekt",level:2},{value:"Testing the plugin",id:"testing-the-plugin",level:3},{value:"Integrate with ImageJ",id:"integrate-with-imagej",level:2},{value:"Integrate with Napari",id:"integrate-with-napari",level:2},{value:"Our own model",id:"our-own-model",level:2}];function y(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:'Deep learning is taking over the world of bioimage analysis, and for good reason. However it is not always easy to get started and use\nthe deep learning tools that are available.\nIn this section of the documentation we will try to show you how to get started with deep learning and how Arkitekt can help you,\nby showing you how to create a simple "deep learning enabled" workflow, that you can use to predict the segmentation of nuclei in a cell culture.'}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"To get started with deep learning and Arkitekt you should:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Have a basic understanding of deep learning, in the sense of what the words "Training" and "Inference" mean.'}),"\n",(0,a.jsxs)(n.li,{children:["Have gone through the ",(0,a.jsx)(n.a,{href:"/docs/introduction/first_steps",children:"basics of Arkitekt"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Have a CUDA capable GPU. If you don't have a GPU, you should still be able to follow along, but the prediction\nwill be very slow."}),"\n",(0,a.jsx)(n.li,{children:"Either Mikro-Napari or Fiji with MikroJ installed. If you don't have either of these, you can still follow along, but you won't be able to run the workflow."}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"our-task",children:"Our task"}),"\n",(0,a.jsxs)(n.p,{children:["We would like to create a workflow that can take an image of nuclei in a cell culture and predict the segmentation of the nuclei.\nWe will be using a deep learning model based on ",(0,a.jsx)(n.a,{href:"https://github.com/stardist/stardist",children:"Stardist"})," to do the prediction.\nWe will be using the same dataset that we have used in the ",(0,a.jsx)(n.a,{href:"/docs/introduction/first_steps",children:"basics of Arkitekt"}),"."]}),"\n",(0,a.jsx)(d.A,{img:c()}),"\n",(0,a.jsx)(n.h2,{id:"the-problems-we-are-trying-to-solve",children:"The problems we are trying to solve"}),"\n",(0,a.jsx)(n.p,{children:"In this tutorial we would like to show you how to create a simple deep learning workflow in Arkitekt, and how Arkitekt can solve some common issues,\nthat you might encounter when trying to create your own deep learning workflows."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["How to maintain the ",(0,a.jsx)(n.strong,{children:"complex software requirements"})," that is needed for deep learning."]}),"\n",(0,a.jsxs)(n.p,{children:["That's a perfect fit for ",(0,a.jsx)(n.code,{children:"PluginApps"}),". Arkitekt plugins are containerized, so developers can already add in\nall of the software requirements that are needed for their specific deep learning algorithm. No need to install anything on your computer."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["How to ",(0,a.jsx)(n.strong,{children:"integrate"})," deep learning into your favourite bioimage analysis app."]}),"\n",(0,a.jsxs)(n.p,{children:["That's what we have ",(0,a.jsx)(n.strong,{children:"bridging"})," ",(0,a.jsx)(n.code,{children:"Workflows"})," for. You can create a workflow in Arkitekt, that will take your image from you\nbioimage analysis app of choice, offload them to the Arkitet server, and just pipe the result back to the bioimage app, so you can continue your analysis\nin the app you are used to."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["I ",(0,a.jsx)(n.strong,{children:"don't have GPUs"})," available on my computer, how can I still use deep learning?"]}),"\n",(0,a.jsx)(n.p,{children:"Easy. Just use the distributed workflow to offload the prediction to any computer that has a GPU available (here you Arkitekt Server) but potentially\nalso another computer in your lab / and or the ominous cloud. Oh and if you don't have a GPU available at all, you can still use the CPU version of Stardist."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{title:"On other solutions",type:"note",children:(0,a.jsxs)(n.p,{children:["We are not the only ones trying to solve these problems. There are other great solutions out there, that you should definitely check out. One of it is ",(0,a.jsx)(n.a,{href:"https://deepimagej.github.io",children:"DeepImageJ"}),".\nArkitet is not trying to replace these solutions, but rather complement them. We are rather trying to provide a solution that is as generic as possible, so that you can use it with ",(0,a.jsx)(n.em,{children:"any"})," deep learning algorithm\n(that might use a different framework, rely on heavy pre and postprocessing, ...) and ",(0,a.jsx)(n.em,{children:"integrate"})," with any bioimage analysis app."]})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-deep-learning-in-arkitekt",children:"How to use Deep Learning in Arkitekt"}),"\n",(0,a.jsxs)(n.p,{children:["So how do we install Stardist? Well just like any other plugin. You can add the ",(0,a.jsx)(n.code,{children:"segmentor"})," repository to your Arkitekt installation by clicking on the button below."]}),"\n",(0,a.jsx)(g.W,{repo:"segmentor",user:"arkitektio-apps",branch:"master"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.p,{children:["And then you can install the latest version of segmentor by deploying it as an plugin, as you learned in the ",(0,a.jsx)(n.a,{href:"/docs/introduction/first_steps/first_tool",children:"basics of Arkitekt"}),".\nFor the rest of this tutorial we will assume that you have installed the ",(0,a.jsx)(n.code,{children:"segmentor"})," plugin."]}),"\n",(0,a.jsx)(n.h3,{id:"testing-the-plugin",children:"Testing the plugin"}),"\n",(0,a.jsxs)(n.p,{children:["Once the plugin is installed you can easily test it out by running it on images that are stored on your arkitekt image. For this tutorial we will be using a pretrained model, that is already included in the plugin.\nYou can run the prediction on your image by utilizing the ",(0,a.jsx)(n.code,{children:"Segment Fluo2"})," node."]}),"\n",(0,a.jsx)(n.h2,{id:"integrate-with-imagej",children:"Integrate with ImageJ"}),"\n",(0,a.jsxs)(n.p,{children:["Now that we have tested our plugin, we would like to integrate it with our favourite bioimage analysis app. In this case we will be using Fiji through MikroJ, but you can use any other app that is supported by Arkitekt.\nFor this we will be using two nodes provided by Fiji, the ",(0,a.jsx)(n.code,{children:"Upload Image"})," node and the ",(0,a.jsx)(n.code,{children:"Show Image"})," node. The ",(0,a.jsx)(n.code,{children:"Upload Image"})," node will take the image from Fiji and upload it to the Arkitekt server,\nwhere it will be processed by the ",(0,a.jsx)(n.code,{children:"Segment Fluo2"})," node of the ",(0,a.jsx)(n.code,{children:"segmentor"})," plugin. The result will then be piped back to Fiji, where it will be shown using the ",(0,a.jsx)(n.code,{children:"Show Image"})," node."]}),"\n",(0,a.jsx)(l.W,{flow:o}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsxs)("small",{children:[" ",(0,a.jsx)(n.p,{children:"This is the workflow we would like to create. Upload our active image, segment\nit using a pretrained model, and show the result on ImageJ"})]})}),"\n",(0,a.jsxs)(n.p,{children:["Just import this workflow into your Arkitekt instance, and deploy it on the ",(0,a.jsx)(n.code,{children:"reaktor"})," scheduler just like you did in the ",(0,a.jsx)(n.a,{href:"/docs/introduction/first_steps/first_workflow",children:"basics of Arkitekt"}),".\nFeel free to also create that workflow on your own, if you want to get some more practice."]}),"\n",(0,a.jsxs)(n.p,{children:["After reserving the workflow, you can run it directly from the ",(0,a.jsx)(n.code,{children:"Dashboard"})," of Orkestrator. Just make sure that you have an image open in Fiji, and then click on the ",(0,a.jsx)(n.code,{children:"Run"})," button of the workflow."]}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,a.jsx)("source",{src:p.A})}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" The workflow in action utilizing MikroJ"})}),"\n",(0,a.jsx)(n.h2,{id:"integrate-with-napari",children:"Integrate with Napari"}),"\n",(0,a.jsxs)(n.p,{children:["Now that we have seen how to integrate with ImageJ, let's try to do the same with Napari. Its quite similar to the ImageJ integration, but this time we will be using the ",(0,a.jsx)(n.code,{children:"Upload Layer"})," node and the ",(0,a.jsx)(n.code,{children:"Show on Napari"})," node provided by Napari."]}),"\n",(0,a.jsx)(l.W,{flow:s}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsxs)("small",{children:[" ",(0,a.jsx)(n.p,{children:"This is the workflow we would like to create. Upload our active image, segment\nit using a pretrained model, and show the result on ImageJ"})]})}),"\n",(0,a.jsx)(n.p,{children:"Import, deploy, reserve and run, just like you did with the ImageJ workflow. Its the same workflow, just with different nodes."}),"\n",(0,a.jsx)(n.admonition,{title:"On universal Workflows",type:"info",children:(0,a.jsxs)(n.p,{children:["You might have noticed that the workflow, is similar to the one we created for ImageJ, but not the same. We could have created a universal workflow, that would work for both ImageJ and Napari, by\nutilizing the ",(0,a.jsx)(n.code,{children:"Upload Image"})," node and the ",(0,a.jsx)(n.code,{children:"Show Image"})," node, and before deployment let the user choose which app he wants to use. This will be thematized in a later tutorial."]})}),"\n",(0,a.jsx)(n.h2,{id:"our-own-model",children:"Our own model"}),"\n",(0,a.jsxs)(n.p,{children:["Here we have used a pretrained model, but what if we want to use our own model? Well that's easy. Training your own model on the segmentor plugin is also quite easy, but lets explore that in the ",(0,a.jsx)(n.a,{href:"/docs/introduction/advanced/training",children:"next tutorial"})]})]})}function k(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},72018:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});const i=t.p+"assets/medias/fiji_segmentation-36956e47929d30213356456ff3c0b1e3.webm"},73856:(e,n,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/segmentation.9e71a21.640.png 640w,"+t.p+"assets/ideal-img/segmentation.869719e.1320.png 1320w,"+t.p+"assets/ideal-img/segmentation.065c1e5.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/segmentation.9e71a21.640.png",width:640,height:313},{path:t.p+"assets/ideal-img/segmentation.869719e.1320.png",width:1320,height:646},{path:t.p+"assets/ideal-img/segmentation.065c1e5.2000.png",width:2e3,height:979}],src:t.p+"assets/ideal-img/segmentation.9e71a21.640.png",toString:function(){return t.p+"assets/ideal-img/segmentation.9e71a21.640.png"},placeholder:void 0,width:640,height:313},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVR4nAHNADL/ACgoKP0tLS39Kioq+DAwMf80NCV1AACmNCIQhf86HX7+EguC/jYcf/8AMTEx/zAwMP8xMTH8LS0v/11bRZ6vm6J2OhmG/0kjf/8hC4r/NxmB/wAvLy/8MDAw/TMzM/ktLS3/T1A/kfrdqmpTO4b/NROC/C0Sh/0QCYb8AC0tLf8wMDD/MzMz+jc2OP8mKSB2NRirNCoch/8zHYP+LBiG/hgMjv8ALCwsjkVFRZ5RUVGdOzs7pCsrH0AIAJ4dIyCLnWNIhp9INJGhIhiJlO6RTpxHDPovAAAAAElFTkSuQmCC"}},97470:(e,n,t)=>{"use strict";t.d(n,{W:()=>a});t(96540);var i=t(74848);const a=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Show Workflow"}),(0,i.jsx)("p",{children:"This component is under construction."})]})}}]);