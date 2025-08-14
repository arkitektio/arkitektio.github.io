(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[7960],{5584:(e,n,t)=>{"use strict";t.d(n,{W:()=>te});var a=t(2135),i=t(96540),r=t(10518),o=t(31635),s=t(60144),d=t(15381),l=t(75443),c=t(9211),h=t(70111);var u=t(25395),p=t(76234),m=t(64721);const g="kabinet",f=(e,n)=>function(e,n){var t=(0,h.m)(null==n?void 0:n.client);(0,l.D$)(e,l.KG.Mutation);var a=i.useState({called:!1,loading:!1,client:t}),r=a[0],u=a[1],p=i.useRef({result:r,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(p.current,{client:t,options:n,mutation:e});var m=i.useCallback((function(e){void 0===e&&(e={});var n=p.current,t=n.options,a=n.mutation,i=(0,o.__assign)((0,o.__assign)({},t),{mutation:a}),r=e.client||p.current.client;p.current.result.loading||i.ignoreResults||!p.current.isMounted||u(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var l=++p.current.mutationId,h=(0,s.l)(i,e);return r.mutate(h).then((function(n){var t,a,i=n.data,o=n.errors,s=o&&o.length>0?new c.K4({graphQLErrors:o}):void 0,m=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(s&&m&&m(s,h),l===p.current.mutationId&&!h.ignoreResults){var g={called:!0,loading:!1,data:i,error:s,client:r};p.current.isMounted&&!(0,d.L)(p.current.result,g)&&u(p.current.result=g)}var f=e.onCompleted||(null===(a=p.current.options)||void 0===a?void 0:a.onCompleted);return s||null==f||f(n.data,h),n})).catch((function(n){var t;if(l===p.current.mutationId&&p.current.isMounted){var a={loading:!1,error:n,data:void 0,called:!0,client:r};(0,d.L)(p.current.result,a)||u(p.current.result=a)}var i=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(i)return i(n,h),{data:void 0,errors:n};throw n}))}),[]),g=i.useCallback((function(){p.current.isMounted&&u({called:!1,loading:!1,client:t})}),[]);return i.useEffect((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[m,(0,o.__assign)({reset:g},r)]}(e,{...n,client:(0,p.h1)(g).client,onError:e=>{m.oR.error("Error in useMutation: "+e.message)}}),y={};const b=a.J1`
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
    `,w=a.J1`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `,x=a.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${_}
${w}`,k=a.J1`
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
    `,j=a.J1`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `,A=a.J1`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${v}
${j}`,R=a.J1`
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
    ${A}`,C=a.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${R}`,T=a.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,$=a.J1`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `,L=a.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,W=a.J1`
    fragment StateChoiceAssignWidget on StateChoiceAssignWidget {
  __typename
  kind
  followValue
  stateChoices
}
    `,N=a.J1`
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
    ${k}
${C}
${T}
${$}
${L}
${W}`,E=a.J1`
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
${A}`,I=a.J1`
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
    ${E}
${N}
${A}`,S=a.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,P=a.J1`
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
    ${x}
${N}
${A}
${I}
${S}`,D=a.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,M=a.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,O=a.J1`
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
${M}`,J=a.J1`
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
    ${P}
${O}`,F=a.J1`
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
    ${O}`,U=a.J1`
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
    `,q=a.J1`
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
    ${U}
${B}`,H=a.J1`
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
    ${q}
${B}`,Y=a.J1`
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
    ${O}`,K=a.J1`
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
    ${O}`,z=a.J1`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `,X=a.J1`
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
    ${U}`,V=a.J1`
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
    ${q}`;a.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${J}`;a.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${F}`;a.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${F}`;a.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${F}`;a.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${O}`;a.J1`
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
    ${U}`;a.J1`
    query GetPod($id: ID!) {
  pod(id: $id) {
    ...Pod
  }
}
    ${H}`;a.J1`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${H}`;a.J1`
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
    ${Y}`;const Q=a.J1`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${z}`;function Z(e){const n={...y,...e};return((e,n)=>{const t=(0,p.h1)(g);return(0,u.I)(e,{...n,client:t.client})})(Q,n)}a.J1`
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
    ${X}`;a.J1`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${F}
${O}`;var ee=t(74848);a.Ay`
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
`;const ne="my-2 p-2 rounded-md text-black text-center w-60 ",te=({branch:e,repo:n,user:t})=>(0,ee.jsx)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(ae,{branch:e,repo:n,user:t})}),ae=({branch:e,repo:n,user:t})=>{const[a]=function(e){const n={...y,...e};return f(V,n)}(),o=`${t}/${n}:${e}`,[s,d]=i.useState(!1),{data:l,refetch:c,error:h}=Z({variables:{filters:{repo:n,user:t,branch:e}}}),u=l?.githubRepos.at(0);return(0,ee.jsxs)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[h&&(0,ee.jsxs)("div",{className:ne+"bg-red-300",children:["Error: ",h.message]}),u?(0,ee.jsxs)("button",{className:ne+"bg-green-300",children:[" \u2705 ",o]}):(0,ee.jsx)("button",{onClick:async()=>{try{d(!0),a({variables:{identifier:o}}),await c(),console.log(l),d(!1)}catch(e){console.log(e)}},className:ne+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",o," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",o]})})]})}},11360:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});const a=t.p+"assets/files/nGFP_low_snr-9c0e2931e93709a33c9e489e02a97988.tif"},12527:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},30465:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>h,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"introduction/advanced/training","title":"Train a Deep Learning Model","description":"Deep Learning powered methods in Bioimage analysis have changed the way we analysis images, however they are still not widely used in the community.","source":"@site/docs/introduction/advanced/training.mdx","sourceDirName":"introduction/advanced","slug":"/introduction/advanced/training","permalink":"/docs/introduction/advanced/training","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/advanced/training.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Train a Deep Learning Model","sidebar_label":"Train a Deep Learning Model","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Local Workflows","permalink":"/docs/introduction/advanced/local_workflows"},"next":{"title":"Live Analysis","permalink":"/docs/introduction/advanced/live"}}');var i=t(74848),r=t(28453);t(12527),t(33314),t(97470),t(90547),t(73856);const o=t.p+"assets/medias/create_context-9bf4e77dc321d9190d5d777740f711e6.webm",s=t.p+"assets/medias/inspect_container-fbdd49c2415484201abc9b0a52f3d8af.webm",d=t.p+"assets/medias/train_care-524e8c37237b8c795ebed8e08f084a67.webm",l=t.p+"assets/medias/upload_train_data-fb6a967290132ae4c8d5433f3bb5831a.webm";var c=t(5584);const h={title:"Train a Deep Learning Model",sidebar_label:"Train a Deep Learning Model",sidebar_position:3},u=void 0,p={},m=[{value:"What we are trying to achieve",id:"what-we-are-trying-to-achieve",level:2},{value:"Training with Arkitekt",id:"training-with-arkitekt",level:2},{value:"Training Context",id:"training-context",level:3},{value:"Lets get to this",id:"lets-get-to-this",level:3},{value:"Creating a Context",id:"creating-a-context",level:3},{value:"Training a CARE model",id:"training-a-care-model",level:3},{value:"Inspecting the Model",id:"inspecting-the-model",level:3},{value:"Using the Model",id:"using-the-model",level:2},{value:"The developers perspective",id:"the-developers-perspective",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Deep Learning powered methods in Bioimage analysis have changed the way we analysis images, however they are still not widely used in the community.\nThis is arguabley due to the lack of easy to use tools and the inability to adapt a published model to a new paradigm, such as a new microscope or a new cell type."}),"\n",(0,i.jsxs)(n.p,{children:["With Arkitekt we aimed to make it easy to both use already trained deep learning models in your analysis pipeline, and to make it easy to adapt a model to your specific needs.\nIn this tutorial we will show you how to train your own deep learning model using CARE, a popular method for image restoration, and how to use it in your analysis pipeline.\nWe advise you to first read the ",(0,i.jsx)(n.a,{href:"https://www.nature.com/articles/s41592-018-0216-7",children:"CARE paper"})," to understand the methodology of care, as well as following both the\nfirst steps of the ",(0,i.jsx)(n.a,{href:"/docs/introduction/first_steps/interface",children:"Arkitekt tutorial"})," and the ",(0,i.jsx)(n.a,{href:"/docs/introduction/advanced/deep_learning",children:"Deep Learning Bridge tutorial"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This tutorial aims to cover the following topics:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Our conceptional understanding of Deep Learning Training"}),"\n",(0,i.jsxs)(n.li,{children:["What is a training ",(0,i.jsx)(n.code,{children:"Context"})," and how to use it"]}),"\n",(0,i.jsx)(n.li,{children:"How to train a CARE model"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"what-we-are-trying-to-achieve",children:"What we are trying to achieve"}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial we would like to train a deep learning model that can be used to restore images that have been acquired with a confocal microscope. We are using the training\ndataset from the ",(0,i.jsx)(n.a,{href:"https://www.nature.com/articles/s41592-018-0216-7",children:"CARE paper"}),", which is a dataset of confocal images of the Tribolium Castaneum embryo, that vary in\ntheir signal-to-roise ratio. We here will aim to train a model that will help us in a second step to restore images that have been acquired with the same microscope."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["For the purpose of this tutorial we will only train a model on a subset of the data, and we will use the ",(0,i.jsx)(n.code,{children:"same"})," data for training and validation. This is ",(0,i.jsx)(n.em,{children:"NOT AT ALL"})," how you should train a model,\nand we are doing this only for the purpose of this tutorial. Training, Testing, and Validation should always be done on different datasets. This is just a demo."]})}),"\n",(0,i.jsx)(n.h2,{id:"training-with-arkitekt",children:"Training with Arkitekt"}),"\n",(0,i.jsxs)(n.p,{children:["With Arkitekt we wanted to make it easy to train deep learning models, but also to give developers the flexibility to adapt their full training process to their needs. This is why\nwe have a very simple conceptional understanding of training, which is that training a deep learning model is simply a ",(0,i.jsx)(n.code,{children:"Node"})," that returns a ",(0,i.jsx)(n.code,{children:"Model"})," that in a second step can be used to\nmake predictions (in a ",(0,i.jsx)(n.code,{children:"Prediction Node"}),"). This means that training a model is as simple as running a ",(0,i.jsx)(n.code,{children:"Node"})," that returns a ",(0,i.jsx)(n.code,{children:"Model"}),". The developer can then decide how to train the model, and to save it in\na way that makes sense for their use case. Importantly with Arkitekt we didn't want to limit the developer to speicifc models like image-to-image, or classifications, but to give them the flexibility to\ninteract with every datatype and model type. But with great power comes great responsibility, this is why we have developed ",(0,i.jsx)(n.code,{children:"Contexts"})]}),"\n",(0,i.jsx)(n.h3,{id:"training-context",children:"Training Context"}),"\n",(0,i.jsxs)(n.p,{children:["When training a deep learning model, we need data to train on, which often comes in the form of a dataset, that relates two specific datatypes. For example, in the case of CARE we need a dataset that relates\n",(0,i.jsx)(n.code,{children:"Image"})," and ",(0,i.jsx)(n.code,{children:"Image"}),". This is where ",(0,i.jsx)(n.code,{children:"Contexts"})," come in."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Context"})," in Arkitekt are a way to define ",(0,i.jsx)(n.strong,{children:"arbitrary"})," relationships between different Data Types inside the platform. This means that in a ",(0,i.jsx)(n.code,{children:"Context"})," you ",(0,i.jsx)(n.strong,{children:"can"})," relate a ",(0,i.jsx)(n.code,{children:"ROI"})," with an ",(0,i.jsx)(n.code,{children:"Image"}),", an ",(0,i.jsx)(n.code,{children:"Image"})," with a ",(0,i.jsx)(n.code,{children:"Table"}),"\nor a ",(0,i.jsx)(n.code,{children:"Table"})," with a ",(0,i.jsx)(n.code,{children:"Metric"}),", it all depends on the use case and what type of relationship you want to define. In the case of CARE we want to define a relationship between two ",(0,i.jsx)(n.code,{children:"Image"})," datatypes, which is what we will\ndo in this tutorial. We just want to note that ",(0,i.jsx)(n.code,{children:"Contexts"})," are not limited to this use case, and can be used in many different ways. Importantly you can have also have multiple ",(0,i.jsx)(n.code,{children:"Contexts"})," that relate the same images in different\nways (for example a ",(0,i.jsx)(n.code,{children:"Context"})," that relates ",(0,i.jsx)(n.code,{children:"Image A "})," and ",(0,i.jsx)(n.code,{children:"Image B"})," and a ",(0,i.jsx)(n.code,{children:"Context"})," that relates ",(0,i.jsx)(n.code,{children:"Image A"})," and ",(0,i.jsx)(n.code,{children:"Image C"})," or ",(0,i.jsx)(n.code,{children:"Image B"})," and ",(0,i.jsx)(n.code,{children:"Table A"}),")."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["One more thing: Relationships inside a ",(0,i.jsx)(n.code,{children:"Context"})," can be named, so that you can for example have a ",(0,i.jsx)(n.code,{children:"Context"})," that relates ",(0,i.jsx)(n.code,{children:"Image A"})," as ",(0,i.jsx)(n.code,{children:"is High SNR"})," of ",(0,i.jsx)(n.code,{children:"Image B"})," and a ",(0,i.jsx)(n.code,{children:"Context"})," that relates ",(0,i.jsx)(n.code,{children:"Image A"})," as ",(0,i.jsx)(n.code,{children:"is Low SNR"})," of ",(0,i.jsx)(n.code,{children:"Image B"}),".\nDevelopers can then use these names to define their training process."]})}),"\n",(0,i.jsx)(n.h3,{id:"lets-get-to-this",children:"Lets get to this"}),"\n",(0,i.jsxs)(n.p,{children:["Lets see how we can train a CARE model using Arkitekt. Of course we will need ",(0,i.jsx)(n.code,{children:"CARE"})," for that, but lets wait for a moment and first see how we can define a ",(0,i.jsx)(n.code,{children:"Context"})," that relates two ",(0,i.jsx)(n.code,{children:"Image"})," datatypes.\nIndeed this relationship has nothing to do with CARE, and we can use it for many different things. But lets start with the ",(0,i.jsx)(n.code,{children:"Data"})," that we will use for training. We will use the same data as in the CARE pape,\nwhich you can download ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(79052).A+"",children:"here"})," and ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(11360).A+"",children:"here"}),". We will use the ",(0,i.jsx)(n.code,{children:"same"})," data for training and validation, but as we said before, this is just for the purpose of this tutorial."]}),"\n",(0,i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,i.jsx)("source",{src:l})}),"\n",(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:" Uploading an converting the data"})}),"\n",(0,i.jsxs)(n.p,{children:["This steps should seem ",(0,i.jsx)(n.a,{href:"/docs/introduction/first_steps/interface",children:"familiar"}),", just a few notes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We are batch uploading the data by selecting both files and ",(0,i.jsx)(n.code,{children:"multi-dropping"})," them on the webinterface"]}),"\n",(0,i.jsxs)(n.li,{children:["Then we are batch converting the data through the ",(0,i.jsx)(n.code,{children:"Convert Omero"})," node, which will convert the data to the ",(0,i.jsx)(n.code,{children:"Image"})," datatype."]}),"\n",(0,i.jsxs)(n.li,{children:["We now have two ",(0,i.jsx)(n.code,{children:"Image"})," datatypes in our project, which we can see in the ",(0,i.jsx)(n.code,{children:"Data"})," tab."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-context",children:"Creating a Context"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have our data, we can create a ",(0,i.jsx)(n.code,{children:"Context"})," that relates the two ",(0,i.jsx)(n.code,{children:"Image"})," datatypes. To do this we could either use the ",(0,i.jsx)(n.code,{children:"Create Context"})," button, or have a ",(0,i.jsx)(n.code,{children:"Node"})," that returns a ",(0,i.jsx)(n.code,{children:"Context"})," datatype, and\ncreates this ",(0,i.jsx)(n.code,{children:"Context"})," for us. However we can of course do this also directly on the ",(0,i.jsx)(n.code,{children:"Data"})," tab, using the similar pattern of drag-and-drop."]}),"\n",(0,i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,i.jsx)("source",{src:o})}),"\n",(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:" Creating a Context and a Relationship"})}),"\n",(0,i.jsx)(n.p,{children:"A few notes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can always relate items in the ",(0,i.jsx)(n.code,{children:"Data"})," tab by dragging one item on top of the other. This will open a dialog that will ask you to relate the two items by specifying a ",(0,i.jsx)(n.code,{children:"Context"})," and a ",(0,i.jsx)(n.code,{children:"Relationship"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You will see a ",(0,i.jsx)(n.em,{children:"left"})," to ",(0,i.jsx)(n.em,{children:"right"})," relationship displayed, and you can give an arbitrary name to the relationship. In this case we are using ",(0,i.jsx)(n.code,{children:"gt"})," for ",(0,i.jsx)(n.code,{children:"ground truth"})," as our high SNR image is our ground truth\nfor the low SNR image. Just read it out loud in your head: ",(0,i.jsx)(n.code,{children:"Image A"})," is ",(0,i.jsx)(n.code,{children:"ground truth"})," of ",(0,i.jsx)(n.code,{children:"Image B"})," inside the context of ",(0,i.jsx)(n.code,{children:"Tribolium Denoising"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"If the relationship or the Context did not exists before it will be created for you, otherwise you will find existing context in the dropdown."}),"\n",(0,i.jsxs)(n.li,{children:["Once submited your images are now related. You can see this by cliking on the newly created ",(0,i.jsx)(n.code,{children:"Context"})," in the ",(0,i.jsx)(n.code,{children:"Data"})," tab, and you will see the two images related by the relationship you specified."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"training-a-care-model",children:"Training a CARE model"}),"\n",(0,i.jsxs)(n.p,{children:["And thats it, you created a training dataset for CARE. You can of course relate more items in the same context, but for now lets leave it at that. Now we can train a CARE model (on the GPU if you have one).\nFor this we will need the ",(0,i.jsx)(n.code,{children:"KARE"})," app, which is just ",(0,i.jsx)(n.code,{children:"CARE"})," but enabled as an Arkitekt app (this freaking K is for Arkitekt, get it?). You can install it by clicking on the ",(0,i.jsx)(n.code,{children:"Install Repo"})," button below."]}),"\n",(0,i.jsx)(c.W,{repo:"kare",user:"arkitektio-apps",branch:"master"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Make sure to appify and deploy the plugin."}),"\n",(0,i.jsxs)(n.p,{children:["This app provides only two nodes ",(0,i.jsx)(n.code,{children:"Predict CARE"})," and ",(0,i.jsx)(n.code,{children:"Train CARE"}),", which allow you to train and predict CARE models, with your data. The Train CARE node will take a ",(0,i.jsx)(n.code,{children:"Context"})," as input, and will return a ",(0,i.jsx)(n.code,{children:"Model"})," as output.\nand the ",(0,i.jsx)(n.code,{children:"Predict CARE"})," node will take a ",(0,i.jsx)(n.code,{children:"Model"})," and an ",(0,i.jsx)(n.code,{children:"Image"})," as input and will return a ",(0,i.jsx)(n.code,{children:"Predicted Image"})," as output. Nodes all the way down. Lets see how we can train a CARE model."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Sadly with modern deep learning frameworks there is not yet a ",(0,i.jsx)(n.em,{children:"reliable"})," way see if another process is using the GPU and some deep learning methods like Stardist and CARE sometimes still linger in the GPU memory even after\nthe process has finished. So if you run into the problem that you can't train a CARE model, because the GPU is already in use, simply stop any other deep learning process that might be running. We are working on a more user\nfriendly solution for this (also for better multi-gpu support)."]})}),"\n",(0,i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,i.jsx)("source",{src:d})}),"\n",(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:" Reserving and training a CARE Model"})}),"\n",(0,i.jsx)(n.p,{children:"A few notes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You know the drill. Search for the ",(0,i.jsx)(n.code,{children:"Train CARE"})," node and ",(0,i.jsx)(n.code,{children:"Reserve it"})," to make it available."]}),"\n",(0,i.jsxs)(n.li,{children:["Navigate back to the ",(0,i.jsx)(n.code,{children:"Data tab"})," and run it directly from your just created ",(0,i.jsx)(n.code,{children:"Context"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You will be prompted by the ",(0,i.jsx)(n.code,{children:"Assign Dialog"}),", which will now ask you training parameters. These are specific to CARE, and you can read more about them in the ",(0,i.jsx)(n.a,{href:"https://www.nature.com/articles/s41592-018-0216-7",children:"CARE paper"}),".\nWe just leave the default parameters for now, but be aware that you can change them to your needs. The default paramters are not optimal for this dataset, but we are just doing this for the purpose of this tutorial."]}),"\n",(0,i.jsxs)(n.li,{children:["Once you submit the dialog, the training will start. You can see the progress in the ",(0,i.jsx)(n.code,{children:"Dashboard"})," tab, and you will see the ",(0,i.jsx)(n.code,{children:"Train CARE"})," node turning green once the training is done.\nYou can also monitor the progress right there. Looking at the progress bar."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"inspecting-the-model",children:"Inspecting the Model"}),"\n",(0,i.jsxs)(n.p,{children:["Training CARE with the default parameters can take a LOOOONG time, and depending on your hardware you might have to wait for a while until the progress bar moves. You can of course always\ncheck the output of the Deep Learning process in the ",(0,i.jsx)(n.code,{children:"PluginApps"})," tab, by clicking on the running ",(0,i.jsx)(n.code,{children:"kare"})," container and inspecting the output of the training process of the container"]}),"\n",(0,i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,i.jsx)("source",{src:s})}),"\n",(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:" Inpsecting the deep learning output"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["While we are working on providing a few feedback graphs, that illustrate the training process, we are pretty much settled on the idea, that we don't want to provide a full fledged training\ninterface inside Arkitekt. We think that this is best left to the deep learning frameworks and software projects like ",(0,i.jsx)(n.a,{href:"https://wandb.ai/site",children:"wandb"})," that are specifically designed for this purpose.\nWe rather think Arkitekt should be seen as a tool for ",(0,i.jsx)(n.code,{children:"transfer learning"})," and ",(0,i.jsx)(n.code,{children:"model adaptation"}),", and not as a tool for developing deep learning models from scratch. But hey we are open to feedback,\nand you can always just integrate your favorite deep learning framework into Arkitekt and use it as you like."]})}),"\n",(0,i.jsx)(n.h2,{id:"using-the-model",children:"Using the Model"}),"\n",(0,i.jsxs)(n.p,{children:["Your training is going to take time. But at some point it will end, promise! Once it is done you can use the model to make predictions.\nFor this we will now reserve the ",(0,i.jsx)(n.code,{children:"Predict CARE"})," node, which in this case will take a ",(0,i.jsx)(n.code,{children:"Model"})," and an ",(0,i.jsx)(n.code,{children:"Image"})," as input and return an image."]}),"\n",(0,i.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,i.jsx)("source",{src:d})}),"\n",(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:" Inpsecting the deep learning output"})}),"\n",(0,i.jsxs)(n.p,{children:["And thats it, you trained a CARE model and used it to make predictions. You can now use this model in your analysis pipeline, and you can also use it to adapt it to your specific needs.\nAlso of course you can download the model and share it with others, just like we did with the models that we are using in our ",(0,i.jsx)(n.a,{href:"/docs/showcases",children:"Showcases"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"the-developers-perspective",children:"The developers perspective"}),"\n",(0,i.jsxs)(n.p,{children:["If you are a developer and you want to know how to integrate your own deep learning app into Arkitekt, you can read our Developer Tutorial on how to do this ",(0,i.jsx)(n.a,{href:"/docs/developers/python",children:"here"}),".\nBut also please just find here ",(0,i.jsx)(n.strong,{children:"ALL"})," the code for the ",(0,i.jsx)(n.code,{children:"Train CARE"})," and ",(0,i.jsx)(n.code,{children:"Predict CARE"})," nodes, which are just a few lines of code, and should be easy to understand."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from arkitekt import register\nfrom mikro.api.schema import (\n    from_xarray,\n    ModelFragment,\n    create_model,\n    ModelKind,\n    RepresentationFragment,\n    links,\n    LinkableModels,\n    ContextFragment,\n)\nimport numpy as np\nfrom csbdeep.io import load_training_data\nfrom csbdeep.models import Config, CARE\nimport numpy as np\nimport uuid\nimport shutil\nfrom csbdeep.data import RawData, create_patches\nimport numpy as np\n\nfrom csbdeep.io import load_training_data\nfrom csbdeep.models import Config, CARE\nfrom arkitekt.tqdm import tqdm\n\n\n@register()\ndef train_care_model(\n    context: ContextFragment,\n    epochs: int = 100,\n    patches_per_image: int = 1024,\n    trainsteps_per_epoch: int = 400,\n    validation_split: float = 0.1,\n) -> ModelFragment:\n    """Train Care Model\n\n    Trains a care model according on a specific context.\n\n    Args:\n        context (ContextFragment): The context\n        epochs (int, optional): Number of epochs. Defaults to 10.\n        patches_per_image (int, optional): Number of patches per image. Defaults to 1024.\n        trainsteps_per_epoch (int, optional): Number of trainsteps per epoch. Defaults to 10.\n        validation_split (float, optional): Validation split. Defaults to 0.1.\n\n\n    Returns:\n        ModelFragment: The Model\n    """\n\n    training_data_id = f"context_data{context.id}"\n\n    x = links(\n        LinkableModels.GRUNNLAG_REPRESENTATION, # only works with images\n        LinkableModels.GRUNNLAG_REPRESENTATION, # that are related to each other\n        "gt", # trhough the `gt` relationship\n        context=context, # inside the given context\n    ) # HERE WE ARE GETTING THE DATA FROM THE CONTEXT,\n\n    # we are getting computing data from boths sides of the relationship\n    X = [t.left.data.sel(t=0, c=0).compute() for t in x]\n    Y = [t.right.data.sel(t=0, c=0).compute() for t in x]\n\n\n    # This is all CARE specific, and you can read more about it in the CARE paper\n    raw_data = RawData.from_arrays(X, Y, axes="ZYX")\n    print(raw_data)\n\n    X, Y, XY_axes = create_patches(\n        raw_data=raw_data,\n        patch_size=(16, 64, 64),\n        n_patches_per_image=patches_per_image,\n        save_file=f"data/{training_data_id}.npz",\n    )\n\n    (X, Y), (X_val, Y_val), axes = load_training_data(\n        f"data/{training_data_id}.npz",\n        validation_split=validation_split,\n        verbose=True,\n    )\n    config = Config(axes, train_steps_per_epoch=trainsteps_per_epoch)\n\n    model = CARE(config, training_data_id, basedir=".trainedmodels")\n\n\n    # Here we are training the model, we are utilizing a patch tqdm progress bar, that will just update\n    # the progress bar every time we train on a new patch on the Arkitekt Interface\n    for i in tqdm(range(epochs)):\n        model.train(X, Y, validation_data=(X_val, Y_val), epochs=1)\n\n    shutil.make_archive(\n        "active_model", "zip", f".trainedmodels/{training_data_id}"\n    )\n\n    # Here we are creating a model from the trained model, and we are saving it as an Akritekt Model\n    model = create_model(\n        "active_model.zip",\n        kind=ModelKind.TENSORFLOW,\n        name=f"Care Model of {context.name}",\n        contexts=[context],\n    )\n\n\n\n    shutil.rmtree(f"data")\n    return model\n\n\n@register()\ndef predict(\n    representation: RepresentationFragment, model: ModelFragment\n) -> RepresentationFragment:\n    """Predict Care\n\n    Use a care model and some images to generate images\n\n    Args:\n        model (ImageToImageModelFragment): The model\n        representations (List[RepresentationFragment]): The images\n\n    Returns:\n        List[RepresentationFragment]: The predicted images\n    """\n\n    random_dir = str(uuid.uuid4())\n    generated = []\n\n    # We are downloading the model into a temporary directory\n    with model.data as f:\n        # We are unpacking the model into a temporary directory\n\n        shutil.unpack_archive(f, f".modelcache/{random_dir}")\n\n        image_data = representation.data.sel(c=0, t=0).data.compute()\n        # We are loading the model from the temporary directory\n        care_model = CARE(config=None, name=random_dir, basedir=".modelcache")\n        # We are predicting the image\n        restored = care_model.predict(\n            image_data, "ZXY"\n        )\n\n        # We are creating a new representation from the predicted image\n        generated = from_xarray(\n            restored,\n            name=f"Care denoised of {representation.name}",\n            tags=["denoised"],\n            origins=[representation],\n        )\n\n        shutil.rmtree(f".modelcache/{random_dir}")\n\n\n    return generated\n\n\n\n\n'})})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},33314:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')},73856:(e,n,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/segmentation.9e71a21.640.png 640w,"+t.p+"assets/ideal-img/segmentation.869719e.1320.png 1320w,"+t.p+"assets/ideal-img/segmentation.065c1e5.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/segmentation.9e71a21.640.png",width:640,height:313},{path:t.p+"assets/ideal-img/segmentation.869719e.1320.png",width:1320,height:646},{path:t.p+"assets/ideal-img/segmentation.065c1e5.2000.png",width:2e3,height:979}],src:t.p+"assets/ideal-img/segmentation.9e71a21.640.png",toString:function(){return t.p+"assets/ideal-img/segmentation.9e71a21.640.png"},placeholder:void 0,width:640,height:313},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVR4nAHNADL/ACgoKP0tLS39Kioq+DAwMf80NCV1AACmNCIQhf86HX7+EguC/jYcf/8AMTEx/zAwMP8xMTH8LS0v/11bRZ6vm6J2OhmG/0kjf/8hC4r/NxmB/wAvLy/8MDAw/TMzM/ktLS3/T1A/kfrdqmpTO4b/NROC/C0Sh/0QCYb8AC0tLf8wMDD/MzMz+jc2OP8mKSB2NRirNCoch/8zHYP+LBiG/hgMjv8ALCwsjkVFRZ5RUVGdOzs7pCsrH0AIAJ4dIyCLnWNIhp9INJGhIhiJlO6RTpxHDPovAAAAAElFTkSuQmCC"}},79052:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});const a=t.p+"assets/files/nGFP_high_snr-5f3b5ee45918d71084d036dfb56a5e33.tif"},97470:(e,n,t)=>{"use strict";t.d(n,{W:()=>i});t(96540);var a=t(74848);const i=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Show Workflow"}),(0,a.jsx)("p",{children:"This component is under construction."})]})}}]);