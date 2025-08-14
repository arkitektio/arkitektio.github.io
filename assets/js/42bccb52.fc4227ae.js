"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[2990],{488:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"apps/plugins/kare","title":"Kare","description":"Kare","source":"@site/docs/apps/plugins/kare.mdx","sourceDirName":"apps/plugins","slug":"/apps/plugins/kare","permalink":"/docs/apps/plugins/kare","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/apps/plugins/kare.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"kare","title":"Kare","sidebar_label":"Kare (CARE)","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Plugins","permalink":"/docs/apps/plugins/"},"next":{"title":"Segmentor (Stardist)","permalink":"/docs/apps/plugins/segmentor"}}');var r=n(74848),s=n(28453),a=n(5584);const o={id:"kare",title:"Kare",sidebar_label:"Kare (CARE)",sidebar_position:1},d=void 0,l={},c=[{value:"Kare",id:"kare",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const i={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"kare",children:"Kare"}),"\n",(0,r.jsx)(i.p,{children:"Kare is just CARE (content-aware restoration of fluorescence microscopy images) with a K and enabled as an Arkitekt Plugin.\nWhen installing Kare, you can rely on two major features:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Training"}),": Train a CARE model using your own data."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Prediction"}),": Use a trained CARE model to restore images."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(i.p,{children:'To install Kare, you can use the Arkitekt Plugin Service "Port" to install it.'}),"\n",(0,r.jsx)(a.W,{repo:"kare",user:"arkitektio-apps",branch:"master"}),"\n",(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(i.p,{children:"If you want to use Kare in your project, you can check out one of the following tutorials or showcases:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docs/introduction/advanced/training",children:"Training a CARE model"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"/docs/showcases/paper/interactive_workflow",children:"Interactive Analysis with Napari"})}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5584:(e,i,n)=>{n.d(i,{W:()=>ne});var t=n(2135),r=n(96540),s=n(10518),a=n(31635),o=n(60144),d=n(15381),l=n(75443),c=n(9211),u=n(70111);var g=n(25395),p=n(76234),f=n(64721);const m="kabinet",h=(e,i)=>function(e,i){var n=(0,u.m)(null==i?void 0:i.client);(0,l.D$)(e,l.KG.Mutation);var t=r.useState({called:!1,loading:!1,client:n}),s=t[0],g=t[1],p=r.useRef({result:s,mutationId:0,isMounted:!0,client:n,mutation:e,options:i});Object.assign(p.current,{client:n,options:i,mutation:e});var f=r.useCallback((function(e){void 0===e&&(e={});var i=p.current,n=i.options,t=i.mutation,r=(0,a.__assign)((0,a.__assign)({},n),{mutation:t}),s=e.client||p.current.client;p.current.result.loading||r.ignoreResults||!p.current.isMounted||g(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:s});var l=++p.current.mutationId,u=(0,o.l)(r,e);return s.mutate(u).then((function(i){var n,t,r=i.data,a=i.errors,o=a&&a.length>0?new c.K4({graphQLErrors:a}):void 0,f=e.onError||(null===(n=p.current.options)||void 0===n?void 0:n.onError);if(o&&f&&f(o,u),l===p.current.mutationId&&!u.ignoreResults){var m={called:!0,loading:!1,data:r,error:o,client:s};p.current.isMounted&&!(0,d.L)(p.current.result,m)&&g(p.current.result=m)}var h=e.onCompleted||(null===(t=p.current.options)||void 0===t?void 0:t.onCompleted);return o||null==h||h(i.data,u),i})).catch((function(i){var n;if(l===p.current.mutationId&&p.current.isMounted){var t={loading:!1,error:i,data:void 0,called:!0,client:s};(0,d.L)(p.current.result,t)||g(p.current.result=t)}var r=e.onError||(null===(n=p.current.options)||void 0===n?void 0:n.onError);if(r)return r(i,u),{data:void 0,errors:i};throw i}))}),[]),m=r.useCallback((function(){p.current.isMounted&&g({called:!1,loading:!1,client:n})}),[]);return r.useEffect((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[f,(0,a.__assign)({reset:m},s)]}(e,{...i,client:(0,p.h1)(m).client,onError:e=>{f.oR.error("Error in useMutation: "+e.message)}}),$={};const k=t.J1`
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
    `,v=t.J1`
    fragment CustomEffect on CustomEffect {
  __typename
  kind
  hook
  ward
}
    `,b=t.J1`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `,R=t.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${v}
${b}`,y=t.J1`
    fragment StringAssignWidget on StringAssignWidget {
  __typename
  kind
  placeholder
  asParagraph
}
    `,J=t.J1`
    fragment CustomReturnWidget on CustomReturnWidget {
  __typename
  kind
  hook
  ward
}
    `,W=t.J1`
    fragment ChoiceReturnWidget on ChoiceReturnWidget {
  __typename
  choices {
    label
    value
    description
  }
}
    `,C=t.J1`
    fragment ReturnWidget on ReturnWidget {
  __typename
  kind
  ...CustomReturnWidget
  ...ChoiceReturnWidget
}
    ${J}
${W}`,_=t.J1`
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
    ${C}`,A=t.J1`
    fragment SearchAssignWidget on SearchAssignWidget {
  __typename
  kind
  query
  ward
  filters {
    ...FilterPort
  }
}
    ${_}`,x=t.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,P=t.J1`
    fragment ChoiceAssignWidget on ChoiceAssignWidget {
  __typename
  kind
  choices {
    value
    label
    description
  }
}
    `,I=t.J1`
    fragment CustomAssignWidget on CustomAssignWidget {
  __typename
  ward
  hook
}
    `,S=t.J1`
    fragment StateChoiceAssignWidget on StateChoiceAssignWidget {
  __typename
  kind
  followValue
  stateChoices
}
    `,j=t.J1`
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
    ${y}
${A}
${x}
${P}
${I}
${S}`,L=t.J1`
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
    ${j}
${C}`,D=t.J1`
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
    ${L}
${j}
${C}`,w=t.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,E=t.J1`
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
    ${R}
${j}
${C}
${D}
${w}`,F=t.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,q=t.J1`
    fragment RocmSelector on RocmSelector {
  apiVersion
  apiThing
}
    `,G=t.J1`
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
    ${F}
${q}`,M=t.J1`
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
${G}`,K=t.J1`
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
    `,T=t.J1`
    fragment Flavour on Flavour {
  ...ListFlavour
  description
}
    ${G}`,B=t.J1`
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
    `,N=t.J1`
    fragment ListResource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
}
    `,O=t.J1`
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
${N}`,U=t.J1`
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
    ${O}
${N}`,V=t.J1`
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
    ${G}`,Q=t.J1`
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
    ${G}`,z=t.J1`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `,H=t.J1`
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
    ${B}`,X=t.J1`
    mutation CreateGithubRepo($identifier: String!) {
  createGithubRepo(input: {identifier: $identifier}) {
    id
  }
}
    `;t.J1`
    mutation RescanRepos {
  rescanRepos {
    id
  }
}
    `;t.J1`
    query ListBackends {
  backends {
    ...ListBackend
  }
}
    ${k}`;t.J1`
    query GetBackend($id: ID!) {
  backend(id: $id) {
    ...Backend
  }
}
    ${O}`;t.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${M}`;t.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${K}`;t.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${K}`;t.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${K}`;t.J1`
    query ListFlavours {
  flavours {
    ...ListFlavour
  }
}
    ${G}`;t.J1`
    query GetFlavour($id: ID!) {
  flavour(id: $id) {
    ...Flavour
  }
}
    ${T}`;t.J1`
    query ListPod {
  pods {
    ...ListPod
  }
}
    ${B}`;t.J1`
    query GetPod($id: ID!) {
  pod(id: $id) {
    ...Pod
  }
}
    ${U}`;t.J1`
    query GetPodForAgent($clientId: ID!, $instanceId: ID!) {
  podForAgent(clientId: $clientId, instanceId: $instanceId) {
    ...Pod
  }
}
    ${U}`;t.J1`
    query ListReleases {
  releases {
    ...ListRelease
  }
}
    ${Q}`;t.J1`
    query GetRelease($id: ID!) {
  release(id: $id) {
    ...Release
  }
}
    ${V}`;const Y=t.J1`
    query ListGithubRepos($filters: GithubRepoFilter!) {
  githubRepos(filters: $filters) {
    ...GithubRepo
  }
}
    ${z}`;function Z(e){const i={...$,...e};return((e,i)=>{const n=(0,p.h1)(m);return(0,g.I)(e,{...i,client:n.client})})(Y,i)}t.J1`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${N}`;t.J1`
    query GetResource($id: ID!) {
  resource(id: $id) {
    ...Resource
  }
}
    ${H}`;t.J1`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${K}
${G}`;var ee=n(74848);t.Ay`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,t.Ay`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`;const ie="my-2 p-2 rounded-md text-black text-center w-60 ",ne=({branch:e,repo:i,user:n})=>(0,ee.jsx)(s.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(te,{branch:e,repo:i,user:n})}),te=({branch:e,repo:i,user:n})=>{const[t]=function(e){const i={...$,...e};return h(X,i)}(),a=`${n}/${i}:${e}`,[o,d]=r.useState(!1),{data:l,refetch:c,error:u}=Z({variables:{filters:{repo:i,user:n,branch:e}}}),g=l?.githubRepos.at(0);return(0,ee.jsxs)(s.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[u&&(0,ee.jsxs)("div",{className:ie+"bg-red-300",children:["Error: ",u.message]}),g?(0,ee.jsxs)("button",{className:ie+"bg-green-300",children:[" \u2705 ",a]}):(0,ee.jsx)("button",{onClick:async()=>{try{d(!0),t({variables:{identifier:a}}),await c(),console.log(l),d(!1)}catch(e){console.log(e)}},className:ie+"cursor-pointer bg-yellow-200"+(o?" animate-pulse":""),children:o?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",a," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",a]})})]})}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var t=n(96540);const r={},s=t.createContext(r);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);