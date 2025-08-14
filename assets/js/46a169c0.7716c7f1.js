(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[4125],{5584:(e,n,i)=>{"use strict";i.d(n,{W:()=>ie});var l=i(2135),t=i(96540),a=i(10518),r=i(31635),s=i(60144),o=i(15381),d=i(75443),u=i(9211),c=i(70111);var p=i(25395),m=i(76234),h=i(64721);const g="kabinet",f=(e,n)=>function(e,n){var i=(0,c.m)(null==n?void 0:n.client);(0,d.D$)(e,d.KG.Mutation);var l=t.useState({called:!1,loading:!1,client:i}),a=l[0],p=l[1],m=t.useRef({result:a,mutationId:0,isMounted:!0,client:i,mutation:e,options:n});Object.assign(m.current,{client:i,options:n,mutation:e});var h=t.useCallback((function(e){void 0===e&&(e={});var n=m.current,i=n.options,l=n.mutation,t=(0,r.__assign)((0,r.__assign)({},i),{mutation:l}),a=e.client||m.current.client;m.current.result.loading||t.ignoreResults||!m.current.isMounted||p(m.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:a});var d=++m.current.mutationId,c=(0,s.l)(t,e);return a.mutate(c).then((function(n){var i,l,t=n.data,r=n.errors,s=r&&r.length>0?new u.K4({graphQLErrors:r}):void 0,h=e.onError||(null===(i=m.current.options)||void 0===i?void 0:i.onError);if(s&&h&&h(s,c),d===m.current.mutationId&&!c.ignoreResults){var g={called:!0,loading:!1,data:t,error:s,client:a};m.current.isMounted&&!(0,o.L)(m.current.result,g)&&p(m.current.result=g)}var f=e.onCompleted||(null===(l=m.current.options)||void 0===l?void 0:l.onCompleted);return s||null==f||f(n.data,c),n})).catch((function(n){var i;if(d===m.current.mutationId&&m.current.isMounted){var l={loading:!1,error:n,data:void 0,called:!0,client:a};(0,o.L)(m.current.result,l)||p(m.current.result=l)}var t=e.onError||(null===(i=m.current.options)||void 0===i?void 0:i.onError);if(t)return t(n,c),{data:void 0,errors:n};throw n}))}),[]),g=t.useCallback((function(){m.current.isMounted&&p({called:!1,loading:!1,client:i})}),[]);return t.useEffect((function(){return m.current.isMounted=!0,function(){m.current.isMounted=!1}}),[]),[h,(0,r.__assign)({reset:g},a)]}(e,{...n,client:(0,m.h1)(g).client,onError:e=>{h.oR.error("Error in useMutation: "+e.message)}}),b={};const _=l.J1`
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
    `,k=l.J1`
    fragment CustomEffect on CustomEffect {
  __typename
  kind
  hook
  ward
}
    `,y=l.J1`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `,v=l.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${k}
${y}`,L=l.J1`
    fragment StringAssignWidget on StringAssignWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `,W=l.J1`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `,w=l.J1`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `,T=l.J1`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${W}
${w}`,$=l.J1`
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
    ${T}`,A=l.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${$}`,S=l.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,x=l.J1`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `,R=l.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,P=l.J1`
    fragment StateChoiceAssignWidget on StateChoiceAssignWidget {
  __typename
  kind
  followValue
  stateChoices
}
    `,I=l.J1`
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
    ${L}
${A}
${S}
${x}
${R}
${P}`,O=l.J1`
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
    ${I}
${T}`,G=l.J1`
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
    ${O}
${I}
${T}`,j=l.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,C=l.J1`
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
    ${v}
${I}
${T}
${G}
${j}`,D=l.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,N=l.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,q=l.J1`
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
${N}`,B=l.J1`
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
    ${C}
${q}`,U=l.J1`
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
    `,E=l.J1`
    fragment Flavour on Flavour {
  ...ListFlavour
  description
}
    ${q}`,z=l.J1`
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
    `,F=l.J1`
    fragment ListResource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
}
    `,M=l.J1`
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
    ${z}
${F}`,J=l.J1`
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
${F}`,H=l.J1`
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
    ${q}`,K=l.J1`
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
    ${q}`,X=l.J1`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `,V=l.J1`
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
    ${z}`,Q=l.J1`
    mutation CreateGithubRepo($identifier: String!) {
  createGithubRepo(input: {identifier: $identifier}) {
    id
  }
}
    `;l.J1`
    mutation RescanRepos {
  rescanRepos {
    id
  }
}
    `;l.J1`
    query ListBackends {
  backends {
    ...ListBackend
  }
}
    ${_}`;l.J1`
    query GetBackend($id: ID!) {
  backend(id: $id) {
    ...Backend
  }
}
    ${M}`;l.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${B}`;l.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${U}`;l.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${U}`;l.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${U}`;l.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${q}`;l.J1`
    query GetFlavour($id: ID!) {
  flavour(id: $id) {
    ...Flavour
  }
}
    ${E}`;l.J1`
    query ListPod {
  pods {
    ...ListPod
  }
}
    ${z}`;l.J1`
    query GetPod($id: ID!) {
  pod(id: $id) {
    ...Pod
  }
}
    ${J}`;l.J1`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${J}`;l.J1`
    query ListReleases {
  releases {
    ...ListRelease
  }
}
    ${K}`;l.J1`
    query GetRelease($id: ID!) {
  release(id: $id) {
    ...Release
  }
}
    ${H}`;const Y=l.J1`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${X}`;function Z(e){const n={...b,...e};return((e,n)=>{const i=(0,m.h1)(g);return(0,p.I)(e,{...n,client:i.client})})(Y,n)}l.J1`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${F}`;l.J1`
    query GetResource($id: ID!) {
  resource(id: $id) {
    ...Resource
  }
}
    ${V}`;l.J1`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${U}
${q}`;var ee=i(74848);l.Ay`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,l.Ay`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`;const ne="my-2 p-2 rounded-md text-black text-center w-60 ",ie=({branch:e,repo:n,user:i})=>(0,ee.jsx)(a.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(le,{branch:e,repo:n,user:i})}),le=({branch:e,repo:n,user:i})=>{const[l]=function(e){const n={...b,...e};return f(Q,n)}(),r=`${i}/${n}:${e}`,[s,o]=t.useState(!1),{data:d,refetch:u,error:c}=Z({variables:{filters:{repo:n,user:i,branch:e}}}),p=d?.githubRepos.at(0);return(0,ee.jsxs)(a.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[c&&(0,ee.jsxs)("div",{className:ne+"bg-red-300",children:["Error: ",c.message]}),p?(0,ee.jsxs)("button",{className:ne+"bg-green-300",children:[" \u2705 ",r]}):(0,ee.jsx)("button",{onClick:async()=>{try{o(!0),l({variables:{identifier:r}}),await u(),console.log(d),o(!1)}catch(e){console.log(e)}},className:ne+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",r," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",r]})})]})}},35403:(e,n,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/smart.8ca3fea.640.png 640w,"+i.p+"assets/ideal-img/smart.7f6e585.1320.png 1320w,"+i.p+"assets/ideal-img/smart.ef5c323.2000.png 2000w",images:[{path:i.p+"assets/ideal-img/smart.8ca3fea.640.png",width:640,height:736},{path:i.p+"assets/ideal-img/smart.7f6e585.1320.png",width:1320,height:1517},{path:i.p+"assets/ideal-img/smart.ef5c323.2000.png",width:2e3,height:2299}],src:i.p+"assets/ideal-img/smart.8ca3fea.640.png",toString:function(){return i.p+"assets/ideal-img/smart.8ca3fea.640.png"},placeholder:void 0,width:640,height:736},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAInAAACJwG+ElQIAAABa0lEQVR4nGNgYGBg+P//P2PazDOs9f//M4H4DAz/GUFiIAxiMyCD45evB+9+8kQYxp/Y/Uxr0dw35jCDwIJzTz1xWXnp4ew1H35VzLl3T37Vju8qG9b+K1yz6lfdnm3/9eCmhRlXrM1JmfVm3Zf/d+c/edQ2b/uL9sbY9Xc70ld/mlRzoR6usHPekTlV3VtvFbRvODnh1KWO6duetQZLV5+MVUy935+7tQiu8OD//1NnnX12ITqwb1/fmSvLp+55Mc1PIH+PG3fotYakbblwhVN33+hpnX3ocGndmi0zbtxqm7XvRX116PrNpf4LTkysupQGV+ivnNucFT99x4bv/9csfvHEee6qp4ElgQvWN8bM2D2pZH8CXGGoTlFtftqcdZu+/1887/EDp3nrnvoXx85fVhI7ZeOUtmPRcIU5iTM963u2pW348j9uwaNHZrM23rdINuiOTzHuzGhM2GYKVwiLhf9IsYCIGQgAACwnw1gK2aiDAAAAAElFTkSuQmCC"}},39387:(e,n,i)=>{"use strict";i.d(n,{L:()=>t});i(96540);var l=i(74848);const t=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Show Workflow"}),(0,l.jsx)("p",{children:"This component is under construction."})]})},64357:(e,n,i)=>{"use strict";i.d(n,{d:()=>a});var l=i(2135),t=(i(96540),i(74848));l.Ay`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`;const a=({url:e,name:n,kind:i})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("button",{onClick:async()=>{console.log(e);try{const n=await fetch(e);if(!n.ok)throw new Error("Failed fetching file from Documentation");const i=await n.blob();new File([i],"model.zip",{type:i.type});console.log(data)}catch(n){console.log(n)}},className:"my-2 p-2 rounded-md text-black text-center w-60 cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",n]})})},76524:(e,n,i)=>{"use strict";i(96540),i(10518),i(74848)},79568:(e,n,i)=>{"use strict";i.r(n),i.d(n,{assets:()=>g,contentTitle:()=>h,default:()=>_,frontMatter:()=>m,metadata:()=>l,toc:()=>f});const l=JSON.parse('{"id":"showcases/paper/smart_microscopy_workflow","title":"Smart Microscopy","description":"Arkitekt was designed for the increasingly complex real-time microscopy workflows of today.","source":"@site/docs/showcases/paper/smart_microscopy_workflow.mdx","sourceDirName":"showcases/paper","slug":"/showcases/paper/smart_microscopy_workflow","permalink":"/docs/showcases/paper/smart_microscopy_workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/showcases/paper/smart_microscopy_workflow.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Smart Microscopy","sidebar_label":"Smart Microscopy","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Streaming Analysis","permalink":"/docs/showcases/paper/streaming_workflow"},"next":{"title":"Next","permalink":"/docs/roadmap/"}}');var t=i(74848),a=i(28453),r=i(90547),s=i(35403),o=i.n(s),d=(i(39387),i(97470)),u=i(5584);i(64357),i(76524);const c=JSON.parse('{"__typename":"Flow","id":"5","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":2030,"y":194},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","position":{"__typename":"Position","x":257,"y":-69},"typename":"ArkitektNode","parentNode":null,"hash":"db259ac8c61a25c28459670ce0dc432fd5ece046f366037d8a5f3992a91f4a57","kind":"FUNCTION","defaults":{"channel":null,"position":null,"objective":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channel","label":"channel","identifier":"@mikro/channel","scope":"GLOBAL","kind":"STRUCTURE","description":"The channel to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchChannels($search: String, $values: [ID]) {\\n  options: channels(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire 2D","description":"Acquire a 2D image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","position":{"__typename":"Position","x":1437,"y":172},"typename":"ArkitektNode","parentNode":null,"hash":"1da09dd41ff6c5496b3cc4a56ac94181ded98473f60a63065b0a35c21caafe41","kind":"FUNCTION","defaults":{"z_step":0.3,"channel":null,"z_steps":2,"position":null,"objective":null,"crop_physical_width":null,"crop_physical_height":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_height","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_width","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channel","label":"channel","identifier":"@mikro/channel","scope":"GLOBAL","kind":"STRUCTURE","description":"The channel to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchChannels($search: String, $values: [ID]) {\\n  options: channels(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_height","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_width","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire Stack","description":"Acquire a 3D image stack, allowing to move to a new Position, setting \\nan Objective, and an active channel.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","position":{"__typename":"Position","x":567,"y":-3},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","position":{"__typename":"Position","x":394,"y":252},"typename":"ArkitektNode","parentNode":null,"hash":"fef37534407806c68cb8d452739c94dbd09cf1d15b26197d70a1731be561d683","kind":"FUNCTION","defaults":{"c":0,"t":0,"z":0,"rep":null,"limit":null,"distance":null,"max_size":null,"min_size":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image to label outliers for","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The rois for the clusters","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/roi","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"c","label":"c","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The channel to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"t","label":"t","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The timepoint to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z","label":"z","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The z-slice to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Mark Clusters","description":"Takes a masked image and marks rois based on dense clusters of a certain size \\nand density of their center of mass","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","position":{"__typename":"Position","x":625,"y":282},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of roi","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/roi","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe rois for the clusters","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","position":{"__typename":"Position","x":868,"y":416},"typename":"ArkitektNode","parentNode":null,"hash":"4ad8b904209cb3f29528a2855b452b1ea62acaa4c64f8dc4a2523407405d3348","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":"roi","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"The roi to measure","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Rectangular Roi to Dimensions","description":"Measures the size of a Rectangular Roi in microns\\n(only works for Rectangular ROIS)","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","position":{"__typename":"Position","x":809,"y":84},"typename":"ArkitektNode","parentNode":null,"hash":"eaa2b35a454c9b3209797c68842a1057c62dbff001feadb49f5fed3b646c8e7c","kind":"FUNCTION","defaults":{"roi":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":null,"identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Roi to Position","description":"Transforms a ROI into a Position on the governing stage","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","position":{"__typename":"Position","x":1109,"y":419},"typename":"ReactiveNode","parentNode":null,"implementation":"ADD","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ReactiveNode","id":"reactive-64242809-5547-4154-99bf-e895dbd7a991","position":{"__typename":"Position","x":1193,"y":265},"typename":"ReactiveNode","parentNode":null,"implementation":"ZIP","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ReactiveNode","id":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","position":{"__typename":"Position","x":1682,"y":238},"typename":"ReactiveNode","parentNode":null,"implementation":"BUFFER_COMPLETE","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7arg_0","source":"1","sourceHandle":"return_0","target":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7return_0-arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fearg_0","source":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","sourceHandle":"return_0","target":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fereturn_0-arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0arg_0","source":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","sourceHandle":"return_0","target":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0return_0-reactive-a43ba94d-4129-4802-9052-0047d7b48a12arg_0","source":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","sourceHandle":"return_0","target":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-a43ba94d-4129-4802-9052-0047d7b48a12return_0-arkid-983b6436-a397-4427-ac20-06d1a2447cddarg_0","source":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","sourceHandle":"return_0","target":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"roi","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-a43ba94d-4129-4802-9052-0047d7b48a12return_0-arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3arg_0","source":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","sourceHandle":"return_0","target":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"roi","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3return_0-reactive-7b559888-d3f7-4381-9532-dcab3b898a68arg_0","source":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","sourceHandle":"return_0","target":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null},{"__typename":"StreamItem","key":"return1","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-983b6436-a397-4427-ac20-06d1a2447cddreturn_0-reactive-64242809-5547-4154-99bf-e895dbd7a991arg_0","source":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","sourceHandle":"return_0","target":"reactive-64242809-5547-4154-99bf-e895dbd7a991","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-7b559888-d3f7-4381-9532-dcab3b898a68return_0-reactive-64242809-5547-4154-99bf-e895dbd7a991arg_1","source":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","sourceHandle":"return_0","target":"reactive-64242809-5547-4154-99bf-e895dbd7a991","targetHandle":"arg_1","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null},{"__typename":"StreamItem","key":"return1","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-64242809-5547-4154-99bf-e895dbd7a991return_0-arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40arg_0","source":"reactive-64242809-5547-4154-99bf-e895dbd7a991","sourceHandle":"return_0","target":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"position","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":true,"child":null,"variants":null},{"__typename":"StreamItem","key":"crop_physical_height","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":true,"child":null,"variants":null},{"__typename":"StreamItem","key":"crop_physical_width","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":true,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40return_0-reactive-e3907290-8f82-49ce-8046-d4f8b5056356arg_0","source":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","sourceHandle":"return_0","target":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-e3907290-8f82-49ce-8046-d4f8b5056356return_0-2arg_0","source":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"buffer","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position"],"port":{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.distance"],"port":{"__typename":"Port","key":"distance","label":"distance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The distance between points in a cluster (eps in DBSCAN) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of a cluster (min_samples in DBSCAN) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit"],"port":{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to  Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number"],"port":{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to Add)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to Acquire Stack)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps"],"port":{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to Acquire Stack)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step"],"port":{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to  Acquire Stack)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[],"returns":[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]},"restrict":[],"name":"shaky-pink-tiger","screenshot":null,"createdAt":"2023-10-31T13:48:13.898239+00:00","workspace":{"__typename":"Workspace","id":"3"}}'),p=JSON.parse('{"__typename":"Flow","id":"8","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":2030,"y":194},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","position":{"__typename":"Position","x":1284,"y":87},"typename":"ArkitektNode","parentNode":null,"hash":"3557c04acfe85b887752a96ab40ed44f12ec2b42f17d30a1e420a77f1f9b0086","kind":"GENERATOR","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire Clusters","description":"No Description","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","position":{"__typename":"Position","x":482,"y":98},"typename":"ArkitektNode","parentNode":null,"hash":"16145ad360ed5299339345dbff246eba3e3e0e294d6cea842a85945e6f1bb1cb","kind":"FUNCTION","defaults":{},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/position","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Retrieve Positions","description":"retrieves positions within a stage context established\\nright here","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","position":{"__typename":"Position","x":900,"y":132},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of position","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/position","kind":"STRUCTURE","scope":"GLOBAL","nullable":true,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofnull","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-703a790c-030f-4b7f-858e-854aeef0a603arg_0","source":"1","sourceHandle":"return_0","target":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-703a790c-030f-4b7f-858e-854aeef0a603return_0-reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486arg_0","source":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","sourceHandle":"return_0","target":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486return_0-arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8arg_0","source":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","sourceHandle":"return_0","target":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"position","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":true,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8return_0-2arg_0","source":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"buffer","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.limit"],"port":{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.limit)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.number"],"port":{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.number)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_steps"],"port":{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_steps)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_step"],"port":{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_step)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.distance"],"port":{"__typename":"Port","key":"distance","label":"distance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The distance between points in a cluster (eps in DBSCAN) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.distance) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.distance)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of a cluster (min_samples in DBSCAN) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.min_size) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.min_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iteration_sleep"],"port":{"__typename":"Port","key":"iteration_sleep","label":"Iteration Sleep (ms)","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"How long should the node sleep between iterations (maps to reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iteration_sleep)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iterations"],"port":{"__typename":"Port","key":"iterations","label":"Iterations","identifier":null,"scope":"GLOBAL","kind":"INT","description":"How many times should the node go through the list (maps to reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iterations)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}}],"args":[],"returns":[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]},"restrict":[],"name":"silly-persimmon-gecko","screenshot":null,"createdAt":"2023-10-31T13:58:10.213381+00:00","workspace":{"__typename":"Workspace","id":"2"}}'),m={title:"Smart Microscopy",sidebar_label:"Smart Microscopy",sidebar_position:4},h=void 0,g={},f=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Acquisition Computer",id:"acquisition-computer",level:4},{value:"Installing the Workflows",id:"installing-the-workflows",level:2},{value:"Acquire Clusters Workflow",id:"acquire-clusters-workflow",level:3},{value:"Deploying the Workflow",id:"deploying-the-workflow",level:3},{value:"Multi Dimensional Workflow",id:"multi-dimensional-workflow",level:3}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Arkitekt was designed for the increasingly complex real-time microscopy workflows of today.\nTo illustrate Arkitekt readiness for ",(0,t.jsx)(n.code,{children:"Smart Microscopy"}),", we deviced this simply no-code example\nof a ",(0,t.jsx)(n.code,{children:"Smart Microscopy"})," workflow to perform the 3D live monitoring of cell\nclusters with a 40X objective, while scanning a large field of view with a 20X objective."]}),"\n",(0,t.jsx)(n.p,{children:"In this workflow, the Micro-Manager open-source software (Edelstein et al. 2014) is setup for a\nmultidimensional acquisition. The user then interactively sets up a grid of positions on large sample\narea (2.61mm x 2.61mm, corresponding to 4*4 stage positions) containing living fluorescent\ncells."}),"\n",(0,t.jsx)(n.p,{children:"During the workflow defined positions are then acquired at 20X magnification every 30 minutes for 24 hours.\nFor every acquired 20X magnification image, nuclei are then automatically segmented on a remote\ncomputer using the Stardist (Weigert et al. 2020) algorithm, and cell clusters are computed with the help of\nDBSCAN (Ester et al. 1996).\nWhen one or more of such identified clusters are detected, the ROIs central coordinates and\ndimensions are translated back to stage coordinates and sent back to the microscope. 3D stacks\nof these positions (25 planes, 0.5\xb5m step size) are then collected at higher magnification\n(40X) on a well-adjusted cameroa ROI fitting the cell clusters size. After all the positive events are\ndetected, acquired in 3D high-resolution and displayed on the web-interface, the next image\nis acquired at 20X magnification"}),"\n",(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsx)(r.A,{img:o()}),(0,t.jsx)("div",{className:"text-gray-400 mb-2",children:(0,t.jsx)("small",{children:"The Smart Microscopy Workflow"})})]}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.admonition,{title:"Please read",type:"tip",children:(0,t.jsxs)(n.p,{children:["We ",(0,t.jsx)(n.strong,{children:"strongly"})," suggest to go through the ",(0,t.jsx)(n.a,{href:"/docs/introduction/first_steps",children:"Getting Started"})," guide before attempting to run this workflow.\nIt will guide you through the installation of the Arkitekt platform and the setup of your first workflow, as well as how to install plugins\nand apps."]})}),"\n",(0,t.jsx)(n.p,{children:"This workflow is designed to run on a microscope computer running Windows 10 as well as on a remote analysis computer\nthat will power the Arkitekt platform and the image analysis. To enable GPU acceleration for the Stardist\nsegmentation, the analysis computer needs to have access to a CUDA 11 enabled GPU (tested on Nvidia GeforceRTX 2080Ti).\nThe microscope computer will need to be connected to the same network as the remote computer."}),"\n",(0,t.jsx)(n.h4,{id:"acquisition-computer",children:"Acquisition Computer"}),"\n",(0,t.jsx)(n.p,{children:"Additionally to run this workflow you will need to have the following installed on your microscope computer:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://micro-manager.org/",children:"Micro-Manager"})," (version 2.0.1 2023.05.23 (later versions might work as well))"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/arkitektio-apps/mikro-manager",children:"MikroManager"})," (version 0.0.1) ",(0,t.jsx)(n.a,{href:"https://github.com/arkitektio-apps/mikro-manager/releases/latest",children:"Download here"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As well as the following plugins installed on your Arkitekt computer:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Reaktor Plugin (>=0.0.3) from the repository ",(0,t.jsx)(n.a,{href:"https://github.com/arkitektio-apps/reaktor",children:"https://github.com/arkitektio-apps/reaktor"})]}),"\n",(0,t.jsxs)(n.li,{children:["Stdlib Plugin (>=version 0.3.10) from the repository ",(0,t.jsx)(n.a,{href:"https://github.com/arkitektio-apps/stdlib",children:"https://github.com/arkitektio-apps/stdlib"})]}),"\n",(0,t.jsxs)(n.li,{children:["Segmentor Plugin (>version 0.3.4 ) from the repository ",(0,t.jsx)(n.a,{href:"https://github.com/arkitektio-apps/segmentor",children:"https://github.com/arkitektio-apps/segmentor"})]}),"\n"]}),"\n",(0,t.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,t.jsx)(u.W,{repo:"stdlib",user:"arkitektio-apps",branch:"master"}),(0,t.jsx)(u.W,{repo:"segmentor",user:"arkitektio-apps",branch:"master"}),(0,t.jsx)(u.W,{repo:"reaktor",user:"arkitektio-apps",branch:"master"})]}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-workflows",children:"Installing the Workflows"}),"\n",(0,t.jsxs)(n.p,{children:["This Smart Microscopy workflow is composed of two smaller workflows, the ",(0,t.jsx)(n.code,{children:"Acquire Clusters"})," workflow and the ",(0,t.jsx)(n.code,{children:"Multi Dimensional"})," workflow.\nIn Which the ",(0,t.jsx)(n.code,{children:"Acquire Clusters"})," workflow will be nested in the ",(0,t.jsx)(n.code,{children:"Multi Dimensional"})," workflow."]}),"\n",(0,t.jsx)(n.h3,{id:"acquire-clusters-workflow",children:"Acquire Clusters Workflow"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Acquire Clusters"})," workflow is the workflow that will acquire a 20X Image, segment it, detect cluster and send the coordinates\nto the microscope to acquire all clusters with a 40X objective. To install this workflow connect this website to you Arkitekt instance and click on the Import buttom below:"]}),"\n",(0,t.jsx)(d.W,{flow:c}),"\n",(0,t.jsx)(n.p,{children:"A few things to note about this workflow:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["This workflow utilizes a pretrained Stardist model to segment the nuclei in the image. This model comes preinstalled with the Segmentor plugin, by changing this node\nwith a ",(0,t.jsx)(n.code,{children:"Predict Stardist"})," node you can use your own Stardist model."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The parameters to the Cell Cluster Detection are Global Variables of the Workflow"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deploying-the-workflow",children:"Deploying the Workflow"}),"\n",(0,t.jsxs)(n.p,{children:["During the Deployment of the smaller workflow it is imperative that you name the workflow ",(0,t.jsx)(n.code,{children:"Acquire Clusters"})," as this and the parameters of the workflow will be used by the ",(0,t.jsx)(n.code,{children:"Multi Dimensional"})," workflow,\nto adequately detect the workflow. If you choose to name the workflow differently you will need to change the respective ",(0,t.jsx)(n.code,{children:"Acquire Clusters"})," node in the ",(0,t.jsx)(n.code,{children:"Multi Dimensional"})," workflow.\nYou do not need to reserve this workflow, as it will be reserved by the ",(0,t.jsx)(n.code,{children:"Multi Dimensional"})," workflow."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This imperative naming need is a current bug and will be fixed in a future release of Arkitekt."})}),"\n",(0,t.jsx)(n.h3,{id:"multi-dimensional-workflow",children:"Multi Dimensional Workflow"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Multi Dimensional"})," workflow is the workflow that will run the above workflow in a multidimensional acquistions for all position every X minutes for X hours."]}),"\n",(0,t.jsx)(d.W,{flow:p}),"\n",(0,t.jsx)("div",{className:"text-gray-400 mb-2",children:(0,t.jsx)("small",{children:(0,t.jsx)(n.p,{children:"Once connected this pane will also give you an overview over the apps that\nstill need to be installed, nodes in green have been installed, nodes in\nyellow still lack an implementation. Of course feel free to explore this\ngraph more interactively in your orkestrator interface"})})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Test Environment"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:"This workflow was tested on the following environments:"}),(0,t.jsx)("br",{}),(0,t.jsx)(n.p,{children:"Acquisition Computer:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Intel Xeon CPU E5-2620 v4 @ 2.10GHz"}),"\n",(0,t.jsx)(n.li,{children:"128GB RAM"}),"\n",(0,t.jsx)(n.li,{children:"Nikon Ti2-E Microscope"}),"\n",(0,t.jsx)(n.li,{children:"Windows 10"}),"\n",(0,t.jsx)(n.li,{children:"Micro-Manager 2.0.1 2023.05.23"}),"\n",(0,t.jsx)(n.li,{children:"MikroManager 0.0.1"}),"\n"]}),(0,t.jsx)(n.p,{children:"Analysis Computer"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Intel(R) Core(TM) i9-10900KF CPU @ 3.70GHz"}),"\n",(0,t.jsx)(n.li,{children:"Ubuntu 22.04"}),"\n",(0,t.jsx)(n.li,{children:"Arkitekt Paper Channel"}),"\n",(0,t.jsx)(n.li,{children:"Segmentor Plugin 0.3.4"}),"\n",(0,t.jsx)(n.li,{children:"Stdlib Plugin 0.3.9"}),"\n"]})]})]})]})}function _(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},97470:(e,n,i)=>{"use strict";i.d(n,{W:()=>t});i(96540);var l=i(74848);const t=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Show Workflow"}),(0,l.jsx)("p",{children:"This component is under construction."})]})}}]);