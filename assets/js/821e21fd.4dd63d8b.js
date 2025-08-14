(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[2290],{5584:(e,n,t)=>{"use strict";t.d(n,{W:()=>te});var i=t(2135),a=t(96540),r=t(10518),l=t(31635),s=t(60144),o=t(15381),d=t(75443),u=t(9211),c=t(70111);var m=t(25395),p=t(76234),g=t(64721);const h="kabinet",f=(e,n)=>function(e,n){var t=(0,c.m)(null==n?void 0:n.client);(0,d.D$)(e,d.KG.Mutation);var i=a.useState({called:!1,loading:!1,client:t}),r=i[0],m=i[1],p=a.useRef({result:r,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(p.current,{client:t,options:n,mutation:e});var g=a.useCallback((function(e){void 0===e&&(e={});var n=p.current,t=n.options,i=n.mutation,a=(0,l.__assign)((0,l.__assign)({},t),{mutation:i}),r=e.client||p.current.client;p.current.result.loading||a.ignoreResults||!p.current.isMounted||m(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var d=++p.current.mutationId,c=(0,s.l)(a,e);return r.mutate(c).then((function(n){var t,i,a=n.data,l=n.errors,s=l&&l.length>0?new u.K4({graphQLErrors:l}):void 0,g=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(s&&g&&g(s,c),d===p.current.mutationId&&!c.ignoreResults){var h={called:!0,loading:!1,data:a,error:s,client:r};p.current.isMounted&&!(0,o.L)(p.current.result,h)&&m(p.current.result=h)}var f=e.onCompleted||(null===(i=p.current.options)||void 0===i?void 0:i.onCompleted);return s||null==f||f(n.data,c),n})).catch((function(n){var t;if(d===p.current.mutationId&&p.current.isMounted){var i={loading:!1,error:n,data:void 0,called:!0,client:r};(0,o.L)(p.current.result,i)||m(p.current.result=i)}var a=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(a)return a(n,c),{data:void 0,errors:n};throw n}))}),[]),h=a.useCallback((function(){p.current.isMounted&&m({called:!1,loading:!1,client:t})}),[]);return a.useEffect((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[g,(0,l.__assign)({reset:h},r)]}(e,{...n,client:(0,p.h1)(h).client,onError:e=>{g.oR.error("Error in useMutation: "+e.message)}}),y={};const b=i.J1`
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
    `,v=i.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${k}
${_}`,w=i.J1`
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
    `,L=i.J1`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `,W=i.J1`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${A}
${L}`,$=i.J1`
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
    ${W}`,S=i.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${$}`,T=i.J1`
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
    `,x=i.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,P=i.J1`
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
    ${w}
${S}
${T}
${R}
${x}
${P}`,C=i.J1`
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
${W}`,I=i.J1`
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
${N}
${W}`,j=i.J1`
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
    ${v}
${N}
${W}
${I}
${j}`,O=i.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,G=i.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,q=i.J1`
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
    ${O}
${G}`,U=i.J1`
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
${q}`,D=i.J1`
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
    ${q}`,J=i.J1`
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
    ${J}
${F}`,H=i.J1`
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
${F}`,K=i.J1`
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
    ${q}`,V=i.J1`
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
    ${q}`,z=i.J1`
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
    ${J}`,Z=i.J1`
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
    ${b}`;i.J1`
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
    ${U}`;i.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${D}`;i.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${D}`;i.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${D}`;i.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${q}`;i.J1`
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
    ${J}`;i.J1`
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
    ${V}`;i.J1`
    query GetRelease($id: ID!) {
  release(id: $id) {
    ...Release
  }
}
    ${K}`;const Q=i.J1`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${z}`;function X(e){const n={...y,...e};return((e,n)=>{const t=(0,p.h1)(h);return(0,m.I)(e,{...n,client:t.client})})(Q,n)}i.J1`
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
    ${D}
${q}`;var ee=t(74848);i.Ay`
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
`;const ne="my-2 p-2 rounded-md text-black text-center w-60 ",te=({branch:e,repo:n,user:t})=>(0,ee.jsx)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(ie,{branch:e,repo:n,user:t})}),ie=({branch:e,repo:n,user:t})=>{const[i]=function(e){const n={...y,...e};return f(Z,n)}(),l=`${t}/${n}:${e}`,[s,o]=a.useState(!1),{data:d,refetch:u,error:c}=X({variables:{filters:{repo:n,user:t,branch:e}}}),m=d?.githubRepos.at(0);return(0,ee.jsxs)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[c&&(0,ee.jsxs)("div",{className:ne+"bg-red-300",children:["Error: ",c.message]}),m?(0,ee.jsxs)("button",{className:ne+"bg-green-300",children:[" \u2705 ",l]}):(0,ee.jsx)("button",{onClick:async()=>{try{o(!0),i({variables:{identifier:l}}),await u(),console.log(d),o(!1)}catch(e){console.log(e)}},className:ne+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",l," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",l]})})]})}},24469:(e,n,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/node-stream.1ee1637.640.png 640w,"+t.p+"assets/ideal-img/node-stream.01e5d8c.1320.png 1320w,"+t.p+"assets/ideal-img/node-stream.23f98d7.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/node-stream.1ee1637.640.png",width:640,height:414},{path:t.p+"assets/ideal-img/node-stream.01e5d8c.1320.png",width:1320,height:853},{path:t.p+"assets/ideal-img/node-stream.23f98d7.2000.png",width:2e3,height:1293}],src:t.p+"assets/ideal-img/node-stream.1ee1637.640.png",toString:function(){return t.p+"assets/ideal-img/node-stream.1ee1637.640.png"},placeholder:void 0,width:640,height:414},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVR4nGNI23SGy6T3YLDJ5BPZkTP3izAwMDAk964SWpVyJGF9zqnwzMOXBF3SOvgZLP2C7LQSG+5oZfb+NnYPzAMpdAhLt67x7ftU6d11z9jTN8cyqVieQVZMrFBDQ+u/moriF0VZmbMghSqKKqHKmpq/9A0Nv6grKTzi5uYWYwhtmeStndW7S6ti+Vmb5BJrkMIYywyx+TE7LrYGz97okFHk7lHWIcNgaOuUruHg+1nXL+67jr7hBJBCfW1j61jHzL9+lqEvVHV1F5t6hUowyMvKZqipKF9SkRU/qigntwKkUEZG3kNWWfqkgpL0MTkZuUMyMjJCAKSqTYAbkAs7AAAAAElFTkSuQmCC"}},33314:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')},68983:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"introduction/advanced/live","title":"Live Analysis","description":"With Arkitekt we wanted to provide new ways of performing and scheduling our analysis. Today analysis is often done in","source":"@site/docs/introduction/advanced/live.mdx","sourceDirName":"introduction/advanced","slug":"/introduction/advanced/live","permalink":"/docs/introduction/advanced/live","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/advanced/live.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Live Analysis","sidebar_label":"Live Analysis","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Train a Deep Learning Model","permalink":"/docs/introduction/advanced/training"},"next":{"title":"Design","permalink":"/docs/design/"}}');var a=t(74848),r=t(28453);const l=JSON.parse('{"__typename":"Flow","id":"54","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","position":{"__typename":"Position","x":352,"y":35},"typename":"ArkitektNode","parentNode":null,"hash":"f8031ef4200cdae6e7bd8f5f214d2428900488ee80f042336f55cb87e406ddcc","kind":"GENERATOR","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset to stream to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"regexp","label":"regexp","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"A regular expression to filter the files","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"indefinitely","label":"indefinitely","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Should we stream waiting for new files?. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream Files","description":"Streams files from a folder to Mikro","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","position":{"__typename":"Position","x":1045,"y":91},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","position":{"__typename":"Position","x":605,"y":63},"typename":"ArkitektNode","parentNode":null,"hash":"0abdf2faf07b0a322bd75e410a128fee96dabec2e9f74c3b07addaed949a211f","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"file","label":"file","identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The File to be converted","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The created series in this file","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"stage","label":"stage","identifier":"@mikro/stage","scope":"GLOBAL","kind":"STRUCTURE","description":"The Stage in which to put the Image. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_stages($search: String, $values: [ID]) {\\n  options: stages(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"era","label":"era","identifier":"@mikro/era","scope":"GLOBAL","kind":"STRUCTURE","description":"The Era in which to put the Image.. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchEras($search: String, $values: [ID]) {\\n  options: eras(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset in which to put the Image. Defaults to the file dataset.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_from_planes","label":"position_from_planes","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a position from the first planes (only if stage is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_from_time","label":"timepoint_from_time","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a timepoint from the first time (only if era is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channels_from_channels","label":"channels_from_channels","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a channel from the channels. Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_tolerance","label":"position_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the position. Defaults to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_tolerance","label":"timepoint_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the timepoint. Defaults  to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Convert Omero","description":"Converts an Omero File in a set of Mikrodata","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","position":{"__typename":"Position","x":840,"y":95},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of rep","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe created series in this file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","position":{"__typename":"Position","x":1244,"y":-48},"typename":"ArkitektNode","parentNode":null,"hash":"6aef2e0b4cfe28139854a42edf795346d1df5f822014c8901080728d4af875cd","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Max","description":"Measures the maxium value of an image","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ffarg_0","source":"1","sourceHandle":"return_0","target":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ffreturn_0-arkid-d983e818-030b-4160-8ab4-cee4107a880carg_0","source":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","sourceHandle":"return_0","target":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/omerofile","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-d983e818-030b-4160-8ab4-cee4107a880creturn_0-reactive-729ad2c6-295c-4d54-a378-33fb26b77aadarg_0","source":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","sourceHandle":"return_0","target":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-729ad2c6-295c-4d54-a378-33fb26b77aadreturn_0-arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2darg_0","source":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","sourceHandle":"return_0","target":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2dreturn_0-arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8arg_0","source":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","sourceHandle":"return_0","target":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8return_0-2arg_0","source":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[],"args":[],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"Live Analysis","screenshot":null,"createdAt":"2023-11-07T12:25:11.832245+00:00","workspace":{"__typename":"Workspace","id":"34"}}');t(33314);var s=t(97470),o=t(90547),d=t(24469),u=t.n(d),c=(t(72018),t(5584));const m={title:"Live Analysis",sidebar_label:"Live Analysis",sidebar_position:4},p="Live (Streaming) Analysis",g={},h=[{value:"Why Streaming Analysis?",id:"why-streaming-analysis",level:3},{value:"Streaming Analysis in Arkitekt",id:"streaming-analysis-in-arkitekt",level:3},{value:"Stream Nodes",id:"stream-nodes",level:3},{value:"Lets not imaging, lets do it!",id:"lets-not-imaging-lets-do-it",level:3},{value:"Other Requirements",id:"other-requirements",level:3}];function f(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"live-streaming-analysis",children:"Live (Streaming) Analysis"})}),"\n",(0,a.jsx)(n.p,{children:"With Arkitekt we wanted to provide new ways of performing and scheduling our analysis. Today analysis is often done in\nbatch mode, where we run scripts and tools are run on a set of images a long time after the initial production. This is such a common approach that\nmost of the tools we use are designed around this workflow. However, this is not the only way to do analysis, and in many\ncases, you might (need to) consider doing analysis in a live mode, where your results are generated as your images are acquired, in\na continous stream-like fashion."}),"\n",(0,a.jsxs)(n.p,{children:["In this tutorial we will show you how to build a ",(0,a.jsx)(n.a,{href:"/docs/design/real-time",children:"Streaming Analysis Workflow"})," in Arkitekt, and how to run it on live data.\nThis tutorial will cover:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Why streaming analysis?"}),"\n",(0,a.jsx)(n.li,{children:"How we model Streaming Analysis in Arkitekt (Generator Nodes)"}),"\n",(0,a.jsx)(n.li,{children:"Constructing a streaming analysis workflow"}),"\n",(0,a.jsx)(n.li,{children:"Challenges of streaming analysis"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"why-streaming-analysis",children:"Why Streaming Analysis?"}),"\n",(0,a.jsx)(n.p,{children:"There are manifold reasons why you might want to consider doing live analysis. Here are some of the most common ones:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Real-Time Monitoring"}),": For live cell imaging where immediate feedback is necessary, such as adjusting experimental conditions based on cell behavior, streaming analysis is crucial."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"High-Content Screening"}),": In high-throughput assays, streaming analysis can quickly identify hits or interesting events, which may be critical in pharmaceutical research."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Adaptive Experiments"}),": Streaming analysis allows researchers to modify experiments on the fly in response to the data being collected, which can be advantageous for exploratory research or complex biological systems."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"streaming-analysis-in-arkitekt",children:"Streaming Analysis in Arkitekt"}),"\n",(0,a.jsxs)(n.p,{children:["Arkitekt was conceptualized and specifically build around the idea of ",(0,a.jsx)(n.a,{href:"/docs/design/real-time",children:"Streaming Analysis"}),". We wanted to make it easy to build analysis workflows that can\nbe adapted from batch to streaming analysis. To do this, we needed to make sure that the analysis workflows are compatible and manageable in both modes, and that the platform can handle the multifold challenges of streaming analysis."]}),"\n",(0,a.jsxs)(n.p,{children:["Inherently when you build a workflow in Arkitekt you ",(0,a.jsx)(n.em,{children:"always"})," build a streaming analysis workflow. Just a very simple one, where the real-time functionality does not matter. In a basic workflow\nthat just pipes images from one node to the next, the data will still stream through the workflow and the results will be generated as the images are processed.\nHowever Workflows can be designed to take advantage of the streaming nature of the data, and to do this we need to understand how Arkitekt handles streaming data."]}),"\n",(0,a.jsx)(n.h3,{id:"stream-nodes",children:"Stream Nodes"}),"\n",(0,a.jsxs)(n.p,{children:["As discussed in the first steps tutorial, Arkitekt is build around the concept of nodes, that define a procedure that can happen on a specific item, and are defined by their input and outputs.\nSo far we got to know ",(0,a.jsx)(n.code,{children:"Functional Nodes"}),", that get their name from programming function that take item(s) and return item(s) ",(0,a.jsx)(n.em,{children:"once"}),". There is however another type of node, that is called a ",(0,a.jsx)(n.code,{children:"Stream Node"})," or ",(0,a.jsx)(n.code,{children:"Generator Node"}),",\nand which is a node that can take an item and returns (yields) item(s) ",(0,a.jsx)(n.em,{children:"multiple times"})," and importantly ",(0,a.jsx)(n.strong,{children:"over time"})]}),"\n",(0,a.jsx)(o.A,{img:u()}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsxs)("small",{children:[" ",(0,a.jsx)(n.p,{children:"Functional Nodes vs Stream Nodes also with their programming equivalent"})]})}),"\n",(0,a.jsxs)(n.p,{children:["This means when a stream node is called within a workflow, it will return a stream of items, ",(0,a.jsx)(n.strong,{children:"each of which"})," will be processed by the next node in the workflow, at the time they are generated.\nImaging a workflow that runs a timeseries on the microscope, and once started will pipe the images directly to the analysis node, which will then generate results for each image as it is acquired."]}),"\n",(0,a.jsx)(n.h3,{id:"lets-not-imaging-lets-do-it",children:"Lets not imaging, lets do it!"}),"\n",(0,a.jsx)(n.p,{children:"Well, lets do exactly that. For this tutorial we will use a simple workflow that takes images that are put into a folder and then pipes them through a small analysis\npipeline. This pipeline will for now just consist of a simple segmentation and a measurement of the area of the segmented objects. We will use the same deep learning\nnode that we know from our Deep Learning tutorial."}),"\n",(0,a.jsxs)(n.p,{children:["But first things first, how to we get the images into the workflow? And especially how to we get them of the microscope, onto our analysis machine? Well, there is an App\nfor that. ",(0,a.jsx)(n.a,{href:"/docs/apps/standalones/gucker",children:(0,a.jsx)(n.strong,{children:"Gucker"})})," is a simple app that watches a folder and then puts any images that are put into that folder into the workflow. So lets install it\nand get started."]}),"\n",(0,a.jsx)(n.h3,{id:"other-requirements",children:"Other Requirements"}),"\n",(0,a.jsxs)(n.p,{children:["If you followed both the ",(0,a.jsx)(n.a,{href:"/docs/introduction/advanced/deep_learning",children:"Deep Learning"})," and the ",(0,a.jsx)(n.a,{href:"/docs/introduction/first_steps/interface",children:"First Steps"})," tutorial,\nyou should have all the requirements installed. If not, please install the following:"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)(c.W,{repo:"omero",user:"arkitektio-apps",branch:"master"}),(0,a.jsx)(c.W,{repo:"reaktor",user:"arkitektio-apps",branch:"master"}),(0,a.jsx)(c.W,{repo:"segmentor",user:"arkitektio-apps",branch:"master"})]}),"\n",(0,a.jsx)(n.p,{children:"Of course you can also use any other node that you have installed, but for this tutorial we will construct the following\nworkflow:"}),"\n",(0,a.jsx)(s.W,{flow:l}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsxs)("small",{children:[" ",(0,a.jsxs)(n.p,{children:["This is the workflow we would like to create. Stream our Files, Convert them\nto Images, Segment them and Measure them."," "]})]})})]})}function y(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},72018:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});const i=t.p+"assets/medias/fiji_segmentation-36956e47929d30213356456ff3c0b1e3.webm"},97470:(e,n,t)=>{"use strict";t.d(n,{W:()=>a});t(96540);var i=t(74848);const a=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Show Workflow"}),(0,i.jsx)("p",{children:"This component is under construction."})]})}}]);