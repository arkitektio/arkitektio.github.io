(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[9283],{5584:(e,n,t)=>{"use strict";t.d(n,{W:()=>te});var a=t(2135),i=t(96540),r=t(10518),l=t(31635),s=t(60144),o=t(15381),d=t(75443),u=t(9211),c=t(70111);var p=t(25395),m=t(76234),g=t(64721);const f="kabinet",h=(e,n)=>function(e,n){var t=(0,c.m)(null==n?void 0:n.client);(0,d.D$)(e,d.KG.Mutation);var a=i.useState({called:!1,loading:!1,client:t}),r=a[0],p=a[1],m=i.useRef({result:r,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(m.current,{client:t,options:n,mutation:e});var g=i.useCallback((function(e){void 0===e&&(e={});var n=m.current,t=n.options,a=n.mutation,i=(0,l.__assign)((0,l.__assign)({},t),{mutation:a}),r=e.client||m.current.client;m.current.result.loading||i.ignoreResults||!m.current.isMounted||p(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var d=++m.current.mutationId,c=(0,s.l)(i,e);return r.mutate(c).then((function(n){var t,a,i=n.data,l=n.errors,s=l&&l.length>0?new u.K4({graphQLErrors:l}):void 0,g=e.onError||(null===(t=m.current.options)||void 0===t?void 0:t.onError);if(s&&g&&g(s,c),d===m.current.mutationId&&!c.ignoreResults){var f={called:!0,loading:!1,data:i,error:s,client:r};m.current.isMounted&&!(0,o.L)(m.current.result,f)&&p(m.current.result=f)}var h=e.onCompleted||(null===(a=m.current.options)||void 0===a?void 0:a.onCompleted);return s||null==h||h(n.data,c),n})).catch((function(n){var t;if(d===m.current.mutationId&&m.current.isMounted){var a={loading:!1,error:n,data:void 0,called:!0,client:r};(0,o.L)(m.current.result,a)||p(m.current.result=a)}var i=e.onError||(null===(t=m.current.options)||void 0===t?void 0:t.onError);if(i)return i(n,c),{data:void 0,errors:n};throw n}))}),[]),f=i.useCallback((function(){m.current.isMounted&&p({called:!1,loading:!1,client:t})}),[]);return i.useEffect((function(){return m.current.isMounted=!0,function(){m.current.isMounted=!1}}),[]),[g,(0,l.__assign)({reset:f},r)]}(e,{...n,client:(0,m.h1)(f).client,onError:e=>{g.oR.error("Error in useMutation: "+e.message)}}),b={};const y=a.J1`
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
    `,_=a.J1`
    fragment CustomEffect on CustomEffect {
  __typename
  kind
  hook
  ward
}
    `,k=a.J1`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `,A=a.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${_}
${k}`,v=a.J1`
    fragment StringAssignWidget on StringAssignWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `,w=a.J1`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `,$=a.J1`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `,W=a.J1`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${w}
${$}`,L=a.J1`
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
    ${W}`,R=a.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${L}`,S=a.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,P=a.J1`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `,N=a.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,x=a.J1`
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
    ${v}
${R}
${S}
${P}
${N}
${x}`,C=a.J1`
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
${W}`,E=a.J1`
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
${T}
${W}`,I=a.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,D=a.J1`
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
    ${A}
${T}
${W}
${E}
${I}`,J=a.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,j=a.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,U=a.J1`
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
    ${J}
${j}`,O=a.J1`
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
    ${D}
${U}`,q=a.J1`
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
    `,G=a.J1`
    fragment Flavour on Flavour {
  ...ListFlavour
  description
}
    ${U}`,F=a.J1`
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
    `,B=a.J1`
    fragment ListResource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
}
    `,M=a.J1`
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
${B}`,z=a.J1`
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
${B}`,H=a.J1`
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
    ${U}`,K=a.J1`
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
    ${U}`,V=a.J1`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `,Z=a.J1`
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
    ${F}`,X=a.J1`
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
    ${y}`;a.J1`
    query GetBackend($id: ID!) {
  backend(id: $id) {
    ...Backend
  }
}
    ${M}`;a.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${O}`;a.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${q}`;a.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${q}`;a.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${q}`;a.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${U}`;a.J1`
    query GetFlavour($id: ID!) {
  flavour(id: $id) {
    ...Flavour
  }
}
    ${G}`;a.J1`
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
    ${z}`;a.J1`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${z}`;a.J1`
    query ListReleases {
  releases {
    ...ListRelease
  }
}
    ${K}`;a.J1`
    query GetRelease($id: ID!) {
  release(id: $id) {
    ...Release
  }
}
    ${H}`;const Y=a.J1`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${V}`;function Q(e){const n={...b,...e};return((e,n)=>{const t=(0,m.h1)(f);return(0,p.I)(e,{...n,client:t.client})})(Y,n)}a.J1`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${B}`;a.J1`
    query GetResource($id: ID!) {
  resource(id: $id) {
    ...Resource
  }
}
    ${Z}`;a.J1`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${q}
${U}`;var ee=t(74848);a.Ay`
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
`;const ne="my-2 p-2 rounded-md text-black text-center w-60 ",te=({branch:e,repo:n,user:t})=>(0,ee.jsx)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(ae,{branch:e,repo:n,user:t})}),ae=({branch:e,repo:n,user:t})=>{const[a]=function(e){const n={...b,...e};return h(X,n)}(),l=`${t}/${n}:${e}`,[s,o]=i.useState(!1),{data:d,refetch:u,error:c}=Q({variables:{filters:{repo:n,user:t,branch:e}}}),p=d?.githubRepos.at(0);return(0,ee.jsxs)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[c&&(0,ee.jsxs)("div",{className:ne+"bg-red-300",children:["Error: ",c.message]}),p?(0,ee.jsxs)("button",{className:ne+"bg-green-300",children:[" \u2705 ",l]}):(0,ee.jsx)("button",{onClick:async()=>{try{o(!0),a({variables:{identifier:l}}),await u(),console.log(d),o(!1)}catch(e){console.log(e)}},className:ne+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",l," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",l]})})]})}},12527:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},33314:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')},40815:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"introduction/advanced/local_workflows","title":"Local Workflows","description":"Local Workflows","source":"@site/docs/introduction/advanced/local_workflows.mdx","sourceDirName":"introduction/advanced","slug":"/introduction/advanced/local_workflows","permalink":"/docs/introduction/advanced/local_workflows","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/advanced/local_workflows.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Local Workflows","sidebar_label":"Local Workflows","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Deep Learning Bridge","permalink":"/docs/introduction/advanced/deep_learning"},"next":{"title":"Train a Deep Learning Model","permalink":"/docs/introduction/advanced/training"}}');var i=t(74848),r=t(28453),l=(t(12527),t(33314),t(97470),t(90547)),s=t(84975),o=t.n(s);const d=t.p+"assets/medias/local_workflow_creation-0b57cda6d8ec66ee9df4920dfb156053.webm",u=t.p+"assets/medias/local_workflow_execution-ab8a134066f2e9fd0134c3feb5b9bf8d.webm";t(5584);const c={title:"Local Workflows",sidebar_label:"Local Workflows",sidebar_position:3},p=void 0,m={},g=[{value:"Local Workflows",id:"local-workflows",level:2},{value:"Differences",id:"differences",level:3},{value:"Lets see how to create a local workflow",id:"lets-see-how-to-create-a-local-workflow",level:3}];function f(e){const n={admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"local-workflows",children:"Local Workflows"}),"\n",(0,i.jsx)(n.p,{children:"While Arkitekt can be a great tool for orchestrating workflows on a multiple computers, spanning multiple programming languages, its modular design\nalso makes it a great tool for orchestrating workflows on a single computer and inside a single (python) process. This is due to the nature\nthat apps themselves are the schedulers of workflows, and that apps can become their own scheduler."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"While this is a fully functionaly feature at the moment, it is still in its infancy and will be improved upon in the future.\nNot also that you need only two services to run a workflow locally (fluss and rekuest)"})}),"\n",(0,i.jsxs)("div",{className:"mt-2 p-6 w-full",children:[(0,i.jsx)(l.A,{img:o()}),(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:(0,i.jsx)(n.p,{children:"The local scheduler running a workflow. The workflow is running in the same process as the scheduler."})})})]}),"\n",(0,i.jsx)(n.h3,{id:"differences",children:"Differences"}),"\n",(0,i.jsx)(n.p,{children:"Everything is in memory, so there is no need to serialize and deserialize data. This means that you can pass around\nlarge objects without worrying about the performance hit of serialization and deserialization. This also means that\nyou can pass around objects that are not serializable, such as open file handles, or objects that are not pickleable."}),"\n",(0,i.jsx)(n.p,{children:"Additionally everything is hyper fast, as there is no network latency, and no need to wait for other computers to finish\ntheir work. This means that you can run workflows that are very fast, and that you can run workflows that are very slow\nwithout worrying about the network latency."}),"\n",(0,i.jsx)(n.h3,{id:"lets-see-how-to-create-a-local-workflow",children:"Lets see how to create a local workflow"}),"\n",(0,i.jsx)(n.p,{children:"Creating a local workflow is virtually equivalent to creating a workflow that runs in a distributed fashion. The only difference is that\nwhen"}),"\n",(0,i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,i.jsx)("source",{src:d})}),"\n",(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:" Creation of local Workflow"})}),"\n",(0,i.jsx)(n.p,{children:"And execution is the same as well. Just start the workflow and it will run in the same process."}),"\n",(0,i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,i.jsx)("source",{src:u})}),"\n",(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:" Execution"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},84975:(e,n,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/local_scheduler.b91c9d2.640.png 640w,"+t.p+"assets/ideal-img/local_scheduler.717e3a3.1320.png 1320w,"+t.p+"assets/ideal-img/local_scheduler.b84e69a.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/local_scheduler.b91c9d2.640.png",width:640,height:743},{path:t.p+"assets/ideal-img/local_scheduler.717e3a3.1320.png",width:1320,height:1532},{path:t.p+"assets/ideal-img/local_scheduler.b84e69a.2000.png",width:2e3,height:2322}],src:t.p+"assets/ideal-img/local_scheduler.b91c9d2.640.png",toString:function(){return t.p+"assets/ideal-img/local_scheduler.b91c9d2.640.png"},placeholder:void 0,width:640,height:743},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB90lEQVR4nAHsARP+AAAAAAAAAAAAAAAAAP///wH///8D////AwAAAAAAAAAAAAAAAAAAAAAAlOjmf5rl5WWWyPOtms3zgpfM85uXzPGblszyjZfL9Z6T399ojuDgdgCk2eQwjLi/KIrN/y5/u+gigsrxJ57j/yWW1/8nmcbvMp3S0iKZzs41AH949EZ/dN0uf6abLsz2/1Ww5PBEWoSRT1yerzpf5/8gbNP0L4/X5CcAKTH/Pk5FtD6hqJyW9vn8/Nbf5dFKTE//VmdppY3//xJt//8jUP//EwA7Rv8vRESvLZmgk5HZ4eD/wNDc1GpnZv1haW29Kz1EmS07Pq81XWs5ADE6/zlbUbo4kZyak8DN0f6/zdLUaWZm/F1ear8sPkObLzw/sDdmbzcAOET/LVFLrSyapKSTztrd/8TS19NlY2P9XF9tuy1IUHsvSEyMQYKUKwAyO/84U0qwN5egnpLQ3e7+xcnD0mppavxiZnC6L0VPhzBERZ0zZ3E2ADhC/zZMOZk1lp6XkrnYzP+rwbjSaGVm/2Ftca8zZnVVNlxoaz+FmSgAOUP/MWRbrTiWop2Szuna+r/W0NBNTlP7WWpto3///xRu//8lY///FwA0NP8dXkKqG5+vpyD/+v833eP5LlhrcDRggpAlVczuD1271hNV4v8J/eP+oygkIUQAAAAASUVORK5CYII="}},97470:(e,n,t)=>{"use strict";t.d(n,{W:()=>i});t(96540);var a=t(74848);const i=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Show Workflow"}),(0,a.jsx)("p",{children:"This component is under construction."})]})}}]);