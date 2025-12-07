(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1531],{5584:(e,n,t)=>{"use strict";t.d(n,{W:()=>te});var i=t(2135),r=t(96540),o=t(10518),a=t(31635),s=t(60144),l=t(15381),d=t(75443),c=t(9211),u=t(70111);var h=t(25395),p=t(76234),f=t(64721);const g="kabinet",m=(e,n)=>function(e,n){var t=(0,u.m)(null==n?void 0:n.client);(0,d.D$)(e,d.KG.Mutation);var i=r.useState({called:!1,loading:!1,client:t}),o=i[0],h=i[1],p=r.useRef({result:o,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(p.current,{client:t,options:n,mutation:e});var f=r.useCallback((function(e){void 0===e&&(e={});var n=p.current,t=n.options,i=n.mutation,r=(0,a.__assign)((0,a.__assign)({},t),{mutation:i}),o=e.client||p.current.client;p.current.result.loading||r.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:o});var d=++p.current.mutationId,u=(0,s.l)(r,e);return o.mutate(u).then((function(n){var t,i,r=n.data,a=n.errors,s=a&&a.length>0?new c.K4({graphQLErrors:a}):void 0,f=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(s&&f&&f(s,u),d===p.current.mutationId&&!u.ignoreResults){var g={called:!0,loading:!1,data:r,error:s,client:o};p.current.isMounted&&!(0,l.L)(p.current.result,g)&&h(p.current.result=g)}var m=e.onCompleted||(null===(i=p.current.options)||void 0===i?void 0:i.onCompleted);return s||null==m||m(n.data,u),n})).catch((function(n){var t;if(d===p.current.mutationId&&p.current.isMounted){var i={loading:!1,error:n,data:void 0,called:!0,client:o};(0,l.L)(p.current.result,i)||h(p.current.result=i)}var r=e.onError||(null===(t=p.current.options)||void 0===t?void 0:t.onError);if(r)return r(n,u),{data:void 0,errors:n};throw n}))}),[]),g=r.useCallback((function(){p.current.isMounted&&h({called:!1,loading:!1,client:t})}),[]);return r.useEffect((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[f,(0,a.__assign)({reset:g},o)]}(e,{...n,client:(0,p.h1)(g).client,onError:e=>{f.oR.error("Error in useMutation: "+e.message)}}),w={};const k=i.J1`
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
    `,y=i.J1`
    fragment CustomEffect on CustomEffect {
  __typename
  kind
  hook
  ward
}
    `,b=i.J1`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `,_=i.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${y}
${b}`,v=i.J1`
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
    `,j=i.J1`
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
    ${x}
${j}`,A=i.J1`
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
    ${$}`,W=i.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${A}`,R=i.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,T=i.J1`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `,L=i.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,S=i.J1`
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
${W}
${R}
${T}
${L}
${S}`,I=i.J1`
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
${$}`,C=i.J1`
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
    ${I}
${P}
${$}`,J=i.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,N=i.J1`
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
${P}
${$}
${C}
${J}`,E=i.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,D=i.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,O=i.J1`
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
    ${E}
${D}`,q=i.J1`
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
    ${N}
${O}`,G=i.J1`
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
    `,F=i.J1`
    fragment Flavour on Flavour {
  ...ListFlavour
  description
}
    ${O}`,B=i.J1`
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
    `,U=i.J1`
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
    ${B}
${U}`,Y=i.J1`
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
${U}`,K=i.J1`
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
    ${O}`,H=i.J1`
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
    ${O}`,V=i.J1`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `,z=i.J1`
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
    ${B}`,X=i.J1`
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
    ${M}`;i.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${q}`;i.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${G}`;i.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${G}`;i.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${G}`;i.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${O}`;i.J1`
    query GetFlavour($id: ID!) {
  flavour(id: $id) {
    ...Flavour
  }
}
    ${F}`;i.J1`
    query ListPod {
  pods {
    ...ListPod
  }
}
    ${B}`;i.J1`
    query GetPod($id: ID!) {
  pod(id: $id) {
    ...Pod
  }
}
    ${Y}`;i.J1`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${Y}`;i.J1`
    query ListReleases {
  releases {
    ...ListRelease
  }
}
    ${H}`;i.J1`
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
    ${V}`;function Z(e){const n={...w,...e};return((e,n)=>{const t=(0,p.h1)(g);return(0,h.I)(e,{...n,client:t.client})})(Q,n)}i.J1`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${U}`;i.J1`
    query GetResource($id: ID!) {
  resource(id: $id) {
    ...Resource
  }
}
    ${z}`;i.J1`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${G}
${O}`;var ee=t(74848);i.Ay`
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
`;const ne="my-2 p-2 rounded-md text-black text-center w-60 ",te=({branch:e,repo:n,user:t})=>(0,ee.jsx)(o.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(ie,{branch:e,repo:n,user:t})}),ie=({branch:e,repo:n,user:t})=>{const[i]=function(e){const n={...w,...e};return m(X,n)}(),a=`${t}/${n}:${e}`,[s,l]=r.useState(!1),{data:d,refetch:c,error:u}=Z({variables:{filters:{repo:n,user:t,branch:e}}}),h=d?.githubRepos.at(0);return(0,ee.jsxs)(o.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[u&&(0,ee.jsxs)("div",{className:ne+"bg-red-300",children:["Error: ",u.message]}),h?(0,ee.jsxs)("button",{className:ne+"bg-green-300",children:[" \u2705 ",a]}):(0,ee.jsx)("button",{onClick:async()=>{try{l(!0),i({variables:{identifier:a}}),await c(),console.log(d),l(!1)}catch(e){console.log(e)}},className:ne+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",a," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",a]})})]})}},20637:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"introduction/first_steps/first_workflow","title":"Designing your first workflow","description":"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now lets put it all together and create our first workflow,","source":"@site/docs/introduction/first_steps/first_workflow.mdx","sourceDirName":"introduction/first_steps","slug":"/introduction/first_steps/first_workflow","permalink":"/docs/introduction/first_steps/first_workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/first_steps/first_workflow.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Designing your first workflow","sidebar_label":"7. Designing your first workflow","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"6. A brief interlude","permalink":"/docs/introduction/first_steps/brief_interlude"},"next":{"title":"8. Your first Workflow Run","permalink":"/docs/introduction/first_steps/first_run"}}');var r=t(74848),o=t(28453),a=(t(90547),t(91394),t(48055),t(5584)),s=t(97470);const l=JSON.parse('{"__typename":"Flow","id":"3","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","position":{"__typename":"Position","x":681,"y":46},"typename":"ArkitektNode","parentNode":null,"hash":"57d45410523b5fc52e33a89c2ae0174666ef7afefe2028df1e16649a750bf0a4","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to be thresholded","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The thresholded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"gaussian_blur","label":"gaussian_blur","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to apply a gaussian blur-sm before thresholding (kernel_size=5)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Otsu Thresholding","description":"Binarizes the image based on a threshold, using Otsu\'s method\\nwith option to guassian blur-sm the image before, images are normalized\\nfor each x,y slice before thresholding.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","position":{"__typename":"Position","x":344,"y":56},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","position":{"__typename":"Position","x":1093,"y":59},"typename":"ArkitektNode","parentNode":null,"hash":"a0a7371a828e5104e953d955e69d6d14ceba2d6d58ccd2fd8609f417732f0d8e","kind":"FUNCTION","defaults":{"key":"Background Fraction","rep":null,"value":0},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"value","label":null,"identifier":null,"scope":"GLOBAL","kind":"INT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Fraction","description":"Measures the appearance of this value in the image (0-1)","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-cb5fee92-01e0-4f97-8d81-80bed3757576arg_0","source":"1","sourceHandle":"return_0","target":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-cb5fee92-01e0-4f97-8d81-80bed3757576return_0-arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8arg_0","source":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","sourceHandle":"return_0","target":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8return_0-arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887arg_0","source":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","sourceHandle":"return_0","target":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887return_0-2arg_0","source":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[],"args":[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"scummy-green-sparrow","screenshot":null,"createdAt":"2023-10-27T16:42:25.175566+00:00","workspace":{"__typename":"Workspace","id":"2"}}'),d=t.p+"assets/medias/create_workflow-4fea74d9bb7da6cade25a7556d176f62.webm",c={title:"Designing your first workflow",sidebar_label:"7. Designing your first workflow",sidebar_position:7},u=void 0,h={},p=[{value:"Before we start",id:"before-we-start",level:2},{value:"Enough talking",id:"enough-talking",level:2},{value:"New plugins",id:"new-plugins",level:2},{value:"Creating the workflow",id:"creating-the-workflow",level:2},{value:"Running the workflow",id:"running-the-workflow",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now lets put it all together and create our first workflow,\nspanning the most basic nodes."}),"\n",(0,r.jsx)(n.p,{children:"Here we will use our uploaded image, max project it, threshold it (yeah analysis), and then measure the fraction of the image that is above the threshold (\nyeah quantification). In the course of this tutorial you will get to understand:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"What even are workflows?"}),"\n",(0,r.jsx)(n.li,{children:"What is a Workflow Scheduler?"}),"\n",(0,r.jsx)(n.li,{children:"How to create a workflow?"}),"\n",(0,r.jsx)(n.li,{children:"How to deploy a workflow on a Scheduler?"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"before-we-start",children:"Before we start"}),"\n",(0,r.jsxs)(n.p,{children:["You are familiar with this by now.. There are a few things we need to do before we can start.\nFirst what do we mean with ",(0,r.jsx)(n.code,{children:"Workflow"}),"?"]}),"\n",(0,r.jsxs)(n.p,{children:["A workflow in the arkitekt sense is a processing pipeline, that uses a series of ",(0,r.jsx)(n.code,{children:"Nodes"})," to process your data in a stream. Nodes just like\nour previously mentioned ",(0,r.jsx)(n.code,{children:"Show on Napari"})," or ",(0,r.jsx)(n.code,{children:"Convert File"})," nodes. You can either stitch them together in the GUI or you can import them from a file or\neven this website. We will do the first. Hopefully this will help you in familiarizing yourself a bit more with the UI ."]}),"\n",(0,r.jsx)(n.p,{children:"Lets look first at the workflow we would like to create, and then we will go through the steps to create it."}),"\n",(0,r.jsx)(s.W,{flow:l,blockImport:!0}),"\n",(0,r.jsx)("div",{className:"text-gray-400 mb-2",children:(0,r.jsxs)("small",{children:[" ",(0,r.jsxs)(n.p,{children:["This is the workflow we would like to create. For now we disabled the import\nfeature.. You should really try to create it on your own"," "]})]})}),"\n",(0,r.jsxs)(n.p,{children:["This is probably the most basic workflow you can create, but it will teach you a lot about the Arkitekt ",(0,r.jsx)(n.code,{children:"Workflow"})," and its design. A few things to note here."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["This is an Arkitekt ",(0,r.jsx)(n.code,{children:"Workflow"})," that we just exported from Arkitekt and then embeded in this website."]}),"\n",(0,r.jsx)(n.p,{children:"Arkitekt workflows are just visual representations of a processing workflow. They are stored in a JSON file, and can be imported and exported from Arkitekt.\nYou can also import them from this website, but we will get to that later."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["About the ",(0,r.jsx)(n.code,{children:"Nodes"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Nodes in Arkitekt Workflows are front and center. They are the building blocks of your workflow, and thusly the building blocks of your analysis. As you have seen\nin the previous section every ",(0,r.jsx)(n.code,{children:"Node"})," has inputs and outputs that you can connect to other nodes. This connection then defines the ",(0,r.jsx)(n.strong,{children:"flow of data"})," through your workflow. Importantly you will\nnotice the nodes termed ",(0,r.jsx)(n.code,{children:"Input"})," and ",(0,r.jsx)(n.code,{children:"Output"}),". These are special nodes that are part of every workflow, and are the entry and exit points to your analysis.\nWhen you connect a node to the ",(0,r.jsx)(n.code,{children:"Input"})," node, you are telling Arkitekt that your workflow will expect the input type of that node as a parameter when you run it.\nEqually you connect a node to the ",(0,r.jsx)(n.code,{children:"Output"})," node, you are telling Arkitekt that your workflow will return the output type of that node when you run it."]}),"\n",(0,r.jsx)(n.admonition,{title:"Workflows are Just Nodes",type:"info",children:(0,r.jsxs)(n.p,{children:["This abstraction of ",(0,r.jsx)(n.code,{children:"Input"})," and ",(0,r.jsx)(n.code,{children:"Output"})," nodes is core to the concept of a workflow in Arkitekt. Each workflow has exactly one ",(0,r.jsx)(n.code,{children:"Input"})," and one ",(0,r.jsx)(n.code,{children:"Output"})," node.\nAnd as our workflows are just nodes, these inputs and outputs will then be the inputs and outputs of the workflow node. This means that you can use workflows\nin workflows, and you can use workflows just as nodes on your data. But we will get to that later."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"About their colors:"}),"\n",(0,r.jsxs)(n.p,{children:["If you have connected the website and followed the tutorial until now, you might notice that the color of the nodes is yellow. This is because\nwe have not yet installed apps that provide the functionality for the nodes in this workflow. This illustrates another core feature of Arkitekt. The separation\nof the workflow design and the workflow execution. You can design and share a workflow, irrespective of the apps that provide the functionality for the nodes in the workflow.\nThis means that you can design a workflow, and potentially share it with others, even though they might run in on completely different apps. This makes workflows\na great way to share analysis pipelines, and to make them reproducible and ",(0,r.jsx)(n.strong,{children:"universal"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"About the data as a stream:"}),"\n",(0,r.jsxs)(n.p,{children:["Arkitekt workflows are adapted to process your data as a ",(0,r.jsx)(n.a,{href:"/docs/design/real-time",children:"stream"}),", rather than as a batch. This means that each node will process your data as it comes in, and then\npass it on to the next node. Nodes will not wait for all data to be processed, but will process it autonomously as it comes in. This means that you can process data ridicously fast,\nand importantly you can process data that is still being generated. This is a core feature of Arkitekt, and we will get to it later. You will also\nnote that the edges are labeled with ",(0,r.jsx)(n.code,{children:"@mikro/representatoin"})," and ",(0,r.jsx)(n.code,{children:"@mikro/metric"}),". These labels correspond to the data types that are passed between the nodes. The ",(0,r.jsx)(n.code,{children:"@"})," symbol\nindicates that these are ",(0,r.jsx)(n.a,{href:"/docs/design/services/mikro",children:"mikro"})," data types and the ",(0,r.jsx)(n.code,{children:"representation"})," and ",(0,r.jsx)(n.code,{children:"metric"})," indicate the type of data.\nThe first two nodes will manipulate an image to an image (images are represented as ",(0,r.jsx)(n.code,{children:"representation"}),"), and the last node will return a ",(0,r.jsx)(n.code,{children:"metric"})," (metrics are scalar values attached\nto an image (here the fraction)). This ",(0,r.jsx)(n.code,{children:"metric"})," will also be the output of our node."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"enough-talking",children:"Enough talking"}),"\n",(0,r.jsx)(n.p,{children:"Lets start by creating this workflow. First we need to install the apps that provide the functionality for the nodes in this workflow.\nWe will need two new plugins for this workflow, so lets install them. One plugin will provide all of our functionality need to run this workflow in.\nThe other plugin will be used to actually run the workflow in the background. So lets install them."}),"\n",(0,r.jsx)(n.h2,{id:"new-plugins",children:"New plugins"}),"\n",(0,r.jsx)(n.p,{children:"First we need to install the apps that provide the functionality for the nodes in this workflow.\nWe will need two new plugins for this workflow, so lets install them. One plugin will provide all of our functionality need to run this workflow in."}),"\n",(0,r.jsxs)(n.p,{children:["Make sure to install the ",(0,r.jsx)(n.code,{children:"stdlib"})," and ",(0,r.jsx)(n.code,{children:"reaktor"})," apps. You can do that by clicking on the ",(0,r.jsx)(n.code,{children:"Install"})," button below, or\nthe classic way by adding these Repositories to your plugin store."]}),"\n",(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(a.W,{repo:"stdlib",user:"arkitektio-apps",branch:"master"}),(0,r.jsx)(a.W,{repo:"reaktor",user:"arkitektio-apps",branch:"master"})]}),"\n",(0,r.jsxs)(n.p,{children:["Now follow ",(0,r.jsx)(n.a,{href:"./first_tool#installing-our-first-app",children:"previously outlined"})," steps to ",(0,r.jsx)(n.code,{children:"Appify"})," the latest ",(0,r.jsx)(n.code,{children:"stdlib"})," and ",(0,r.jsx)(n.code,{children:"reaktor"})," version, and deploy them to your server.\nYou should now be able to search for ",(0,r.jsx)(n.code,{children:"Otsu Threshold"})," in the dashboard search bar, and find the node we just installed."]}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-workflow",children:"Creating the workflow"}),"\n",(0,r.jsxs)(n.p,{children:["Now that we have the ",(0,r.jsx)(n.code,{children:"Nodes"})," we need lets create the workflow. For this we can finally go to the ",(0,r.jsx)(n.code,{children:"Workflow"}),' tab in the sidebar.\nHere we can see a list of all our workflows, and we can create a new one by clicking on the "Create Workflow" button.']}),"\n",(0,r.jsxs)(n.p,{children:["You will be presented by the Arkitekt Workflow Designer, which is a drag and drop interface to create workflows.\nYou can drag ",(0,r.jsx)(n.code,{children:"Nodes"})," from the nodes sidebar into the workflow, and connect them by dragging the output of one ",(0,r.jsx)(n.code,{children:"Node"})," to the input of another."]}),"\n",(0,r.jsx)(n.p,{children:"Lets see the design in progress."}),"\n",(0,r.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded-sm rounded-md",width:"100%",children:(0,r.jsx)("source",{src:d})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Open the ",(0,r.jsx)(n.code,{children:"Workflows"})," tab in the sidebar"]}),"\n",(0,r.jsx)(n.p,{children:"The Worksflows tab is where you can create and manage your workflows, that you can create and run on your data."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click on ",(0,r.jsx)(n.code,{children:"Create Workspace"})," on the bottom right."]}),"\n",(0,r.jsx)(n.p,{children:'Give it a Name like "Analysis Run" and click on "Create".\nA workspace is a place to create and manage versions of your workflow. Workflows are automatically versioned, that means\nif you change a workflow, you will create a new version of it. This is important for reproducibility and traceability of your analysis.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"You are now presented with the Arkitekt Workflow Designer."}),"\n",(0,r.jsxs)(n.p,{children:["The Arkitekt Workflow Designer is a drag and drop interface to create workflows. You can drag nodes from the nodes sidebar into the workflow,\nand connect them by dragging the output of one node to the input of another. Just search for your nodes in the search bar, and drag them into the workflow.\nMake sure to connect the ",(0,r.jsx)(n.code,{children:"Input"})," and ",(0,r.jsx)(n.code,{children:"Output"})," nodes to your workflow, as they are required for each workflow."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set necessary parameters on the sidebar."}),"\n",(0,r.jsxs)(n.p,{children:["Some nodes require you to specify parameters. You can do that by clicking on the node, and then setting the parameters in the sidebar. For example the ",(0,r.jsx)(n.code,{children:"Otsu Threshold"})," node requires you to specify\nif you want to use a gaussian blur before thresholding.This is not necessary for our workflow, so we can leave it at the default value. However you can change the value that should be measure\nby the ",(0,r.jsx)(n.code,{children:"Measure Fraction"})," node. You can do that by clicking on the node, and then setting the parameters in the sidebar. We are interested in the ",(0,r.jsx)(n.code,{children:"Fraction"}),' of the image that is below the threshold,\nso we can change it at to the 0 value. Also we can rename the Metric key to "Background Fraction", to be more descriptive.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save the workflow"}),"\n",(0,r.jsx)(n.p,{children:'You can save the workflow by clicking on the "Save" button on the bottom right. This will save the workflow to your server.'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Ready to Run",type:"info",children:(0,r.jsx)(n.p,{children:"Once saved, your workflow is immediately available to be run on your data. You don't need to deploy it manually anymore."})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-workflow",children:"Running the workflow"}),"\n",(0,r.jsx)(n.p,{children:"Running the workflow on our data should seem quite straightforward. Lets see that in the next section..."})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},48055:(e,n,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/node_explaination.8313684.640.png 640w,"+t.p+"assets/ideal-img/node_explaination.f45276e.1320.png 1320w,"+t.p+"assets/ideal-img/node_explaination.2d491dd.1980.png 1980w",images:[{path:t.p+"assets/ideal-img/node_explaination.8313684.640.png",width:640,height:261},{path:t.p+"assets/ideal-img/node_explaination.f45276e.1320.png",width:1320,height:539},{path:t.p+"assets/ideal-img/node_explaination.2d491dd.1980.png",width:1980,height:808}],src:t.p+"assets/ideal-img/node_explaination.8313684.640.png",toString:function(){return t.p+"assets/ideal-img/node_explaination.8313684.640.png"},placeholder:void 0,width:640,height:261},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVR4nAGkAFv/ANPCK/jJuin/ybkp/NbELP/GtiaD2ccr0tjGLP/Muin62Mct/8CxJoMAcWke/bSlJ/zn1S75h30k/2xkHJBJRBvXn5Ml/+3aLveMgSX/aWIcjwDy3jD//eoz//3sMvz/9DX/yLgokSMiFtmajyb///c0+v/0Nf/QwCqPANTEKo/Pvyqdzr8pmdLDKKKsnCNQbWUdeaKVJKLVxCmY0cIopK6eIlJjkV7a/ZVKVAAAAABJRU5ErkJggg=="}},91394:(e,n,t)=>{"use strict";t.p},97470:(e,n,t)=>{"use strict";t.d(n,{W:()=>r});t(96540);var i=t(74848);const r=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Show Workflow"}),(0,i.jsx)("p",{children:"This component is under construction."})]})}}]);