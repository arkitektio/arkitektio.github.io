(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5710],{5584:(e,t,n)=>{"use strict";n.d(t,{W:()=>ne});var i=n(2135),o=n(96540),r=n(10518),a=n(31635),s=n(60144),d=n(15381),l=n(75443),c=n(9211),u=n(70111);var h=n(25395),p=n(76234),g=n(64721);const f="kabinet",m=(e,t)=>function(e,t){var n=(0,u.m)(null==t?void 0:t.client);(0,l.D$)(e,l.KG.Mutation);var i=o.useState({called:!1,loading:!1,client:n}),r=i[0],h=i[1],p=o.useRef({result:r,mutationId:0,isMounted:!0,client:n,mutation:e,options:t});Object.assign(p.current,{client:n,options:t,mutation:e});var g=o.useCallback((function(e){void 0===e&&(e={});var t=p.current,n=t.options,i=t.mutation,o=(0,a.__assign)((0,a.__assign)({},n),{mutation:i}),r=e.client||p.current.client;p.current.result.loading||o.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var l=++p.current.mutationId,u=(0,s.l)(o,e);return r.mutate(u).then((function(t){var n,i,o=t.data,a=t.errors,s=a&&a.length>0?new c.K4({graphQLErrors:a}):void 0,g=e.onError||(null===(n=p.current.options)||void 0===n?void 0:n.onError);if(s&&g&&g(s,u),l===p.current.mutationId&&!u.ignoreResults){var f={called:!0,loading:!1,data:o,error:s,client:r};p.current.isMounted&&!(0,d.L)(p.current.result,f)&&h(p.current.result=f)}var m=e.onCompleted||(null===(i=p.current.options)||void 0===i?void 0:i.onCompleted);return s||null==m||m(t.data,u),t})).catch((function(t){var n;if(l===p.current.mutationId&&p.current.isMounted){var i={loading:!1,error:t,data:void 0,called:!0,client:r};(0,d.L)(p.current.result,i)||h(p.current.result=i)}var o=e.onError||(null===(n=p.current.options)||void 0===n?void 0:n.onError);if(o)return o(t,u),{data:void 0,errors:t};throw t}))}),[]),f=o.useCallback((function(){p.current.isMounted&&h({called:!1,loading:!1,client:n})}),[]);return o.useEffect((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[g,(0,a.__assign)({reset:f},r)]}(e,{...t,client:(0,p.h1)(f).client,onError:e=>{g.oR.error("Error in useMutation: "+e.message)}}),y={};const v=i.J1`
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
    `,w=i.J1`
    fragment MessageEffect on MessageEffect {
  __typename
  kind
  message
}
    `,k=i.J1`
    fragment PortEffect on Effect {
  __typename
  kind
  dependencies
  ...CustomEffect
  ...MessageEffect
}
    ${b}
${w}`,x=i.J1`
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
    ${A}
${j}`,R=i.J1`
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
    ${R}`,_=i.J1`
    fragment SliderAssignWidget on SliderAssignWidget {
  __typename
  kind
  min
  max
}
    `,J=i.J1`
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
    `,C=i.J1`
    fragment StateChoiceAssignWidget on StateChoiceAssignWidget {
  __typename
  kind
  followValue
  stateChoices
}
    `,L=i.J1`
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
    ${x}
${W}
${_}
${J}
${S}
${C}`,I=i.J1`
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
    ${L}
${$}`,N=i.J1`
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
${L}
${$}`,P=i.J1`
    fragment Validator on Validator {
  function
  dependencies
  label
  errorMessage
}
    `,F=i.J1`
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
    ${k}
${L}
${$}
${N}
${P}`,M=i.J1`
    fragment CudaSelector on CudaSelector {
  cudaVersion
  cudaCores
}
    `,D=i.J1`
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
    ${M}
${D}`,E=i.J1`
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
    ${F}
${G}`,B=i.J1`
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
    ${G}`,T=i.J1`
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
    `,z=i.J1`
    fragment ListResource on Resource {
  id
  name
  qualifiers
  backend {
    id
    name
  }
}
    `,V=i.J1`
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
    ${T}
${z}`,Y=i.J1`
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
    ${V}
${z}`,K=i.J1`
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
    ${G}`,H=i.J1`
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
    ${G}`,O=i.J1`
    fragment GithubRepo on GithubRepo {
  id
  name
  addedAt
  updatedAt
}
    `,U=i.J1`
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
    ${T}`,X=i.J1`
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
    ${v}`;i.J1`
    query GetBackend($id: ID!) {
  backend(id: $id) {
    ...Backend
  }
}
    ${V}`;i.J1`
    query GetDefinition($id: ID!) {
  definition(id: $id) {
    ...Definition
  }
}
    ${E}`;i.J1`
    query ListDefinitions {
  definitions {
    ...ListDefinition
  }
}
    ${B}`;i.J1`
    query PrimaryDefinitions($pagination: OffsetPaginationInput, $identifier: String, $search: String, $order: DefinitionOrder) {
  definitions(
    order: $order
    pagination: $pagination
    filters: {demands: [{kind: ARGS, matches: [{at: 0, kind: STRUCTURE, identifier: $identifier}]}], search: $search}
  ) {
    ...ListDefinition
  }
}
    ${B}`;i.J1`
    query AllPrimaryDefinitions($pagination: OffsetPaginationInput, $filters: DefinitionFilter, $order: DefinitionOrder) {
  definitions(order: $order, pagination: $pagination, filters: $filters) {
    ...ListDefinition
  }
}
    ${B}`;i.J1`
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
    ${q}`;i.J1`
    query ListPod {
  pods {
    ...ListPod
  }
}
    ${T}`;i.J1`
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
    ${O}`;function Z(e){const t={...y,...e};return((e,t)=>{const n=(0,p.h1)(f);return(0,h.I)(e,{...t,client:n.client})})(Q,t)}i.J1`
    query ListResources {
  resources {
    ...ListResource
  }
}
    ${z}`;i.J1`
    query GetResource($id: ID!) {
  resource(id: $id) {
    ...Resource
  }
}
    ${U}`;i.J1`
    query GlobalSearch($search: String, $pagination: OffsetPaginationInput) {
  definitions: definitions(filters: {search: $search}, pagination: $pagination) {
    ...ListDefinition
  }
  flavours: flavours(filters: {search: $search}, pagination: $pagination) {
    ...ListFlavour
  }
}
    ${B}
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
`;const te="my-2 p-2 rounded-md text-black text-center w-60 ",ne=({branch:e,repo:t,user:n})=>(0,ee.jsx)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:(0,ee.jsx)(ie,{branch:e,repo:t,user:n})}),ie=({branch:e,repo:t,user:n})=>{const[i]=function(e){const t={...y,...e};return m(X,t)}(),a=`${n}/${t}:${e}`,[s,d]=o.useState(!1),{data:l,refetch:c,error:u}=Z({variables:{filters:{repo:t,user:n,branch:e}}}),h=l?.githubRepos.at(0);return(0,ee.jsxs)(r.wM.Kabinet,{fallback:(0,ee.jsx)(ee.Fragment,{children:"This server does not support kabinet"}),children:[u&&(0,ee.jsxs)("div",{className:te+"bg-red-300",children:["Error: ",u.message]}),h?(0,ee.jsxs)("button",{className:te+"bg-green-300",children:[" \u2705 ",a]}):(0,ee.jsx)("button",{onClick:async()=>{try{d(!0),i({variables:{identifier:a}}),await c(),console.log(l),d(!1)}catch(e){console.log(e)}},className:te+"cursor-pointer bg-yellow-200"+(s?" animate-pulse":""),children:s?(0,ee.jsxs)(ee.Fragment,{children:[" Installing ",a," "]}):(0,ee.jsxs)(ee.Fragment,{children:["\ud83e\ude84 Install ",a]})})]})}},48055:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/node_explaination.8313684.640.png 640w,"+n.p+"assets/ideal-img/node_explaination.f45276e.1320.png 1320w,"+n.p+"assets/ideal-img/node_explaination.2d491dd.1980.png 1980w",images:[{path:n.p+"assets/ideal-img/node_explaination.8313684.640.png",width:640,height:261},{path:n.p+"assets/ideal-img/node_explaination.f45276e.1320.png",width:1320,height:539},{path:n.p+"assets/ideal-img/node_explaination.2d491dd.1980.png",width:1980,height:808}],src:n.p+"assets/ideal-img/node_explaination.8313684.640.png",toString:function(){return n.p+"assets/ideal-img/node_explaination.8313684.640.png"},placeholder:void 0,width:640,height:261},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVR4nAGkAFv/ANPCK/jJuin/ybkp/NbELP/GtiaD2ccr0tjGLP/Muin62Mct/8CxJoMAcWke/bSlJ/zn1S75h30k/2xkHJBJRBvXn5Ml/+3aLveMgSX/aWIcjwDy3jD//eoz//3sMvz/9DX/yLgokSMiFtmajyb///c0+v/0Nf/QwCqPANTEKo/Pvyqdzr8pmdLDKKKsnCNQbWUdeaKVJKLVxCmY0cIopK6eIlJjkV7a/ZVKVAAAAABJRU5ErkJggg=="}},59820:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"introduction/first_steps/brief_interlude","title":"Brief Interlude","description":"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now before we continue, lets address a few things.","source":"@site/docs/introduction/first_steps/brief_interlude.mdx","sourceDirName":"introduction/first_steps","slug":"/introduction/first_steps/brief_interlude","permalink":"/docs/introduction/first_steps/brief_interlude","draft":false,"unlisted":false,"editUrl":"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/first_steps/brief_interlude.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Brief Interlude","sidebar_label":"6. A brief interlude","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"5. Visualize in Napari/Fiji","permalink":"/docs/introduction/first_steps/first_app"},"next":{"title":"7. Designing your first workflow","permalink":"/docs/introduction/first_steps/first_workflow"}}');var o=n(74848),r=n(28453),a=(n(90547),n(91394),n(10518)),s=(n(48055),n(5584)),d=n(78330);const l={title:"Brief Interlude",sidebar_label:"6. A brief interlude",sidebar_position:6},c=void 0,u={},h=[{value:"\ud83d\ude2d So many steps...",id:"-so-many-steps",level:3},{value:"We have an App for that!",id:"we-have-an-app-for-that",level:3},{value:"What that means for you",id:"what-that-means-for-you",level:3},{value:"First plugin: Standard Library",id:"first-plugin-standard-library",level:4},{value:"Second plugin: Reaktor",id:"second-plugin-reaktor",level:4}];function p(e){const t={admonition:"admonition",code:"code",div:"div",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return a.qw||f("App",!1),a.qw.Guard||f("App.Guard",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now before we continue, lets address a few things."}),"\n",(0,o.jsx)(t.h3,{id:"-so-many-steps",children:"\ud83d\ude2d So many steps..."}),"\n",(0,o.jsx)(t.p,{children:"You may have noticed that we have to do a lot of steps to get to the point where we can visualize our data on an app. You might think that's to much hassle for nothing (and\nyou might be right). But let us briefly explain we think its actually a good thing."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Seperation of Concerns"}),": We already installed 3 Apps to our Arkitekt instance. Omero, Napari and Fiji. Their provided functionality would\nhave been easily possible to implement in a single App (actually Fiji would have been able to do that easily) But we think that seperating the functionality into multiple Apps has a few advantages.\nFirst of all, it allows these tools to concentrate on what they are really good at. Napari is first and foremost a visualization tool, it does not need to know anything about how to convert\ndata from one format to another. Secondly it allows App developers to easily update their Apps without having to worry about breaking other Apps."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Reusability"}),": The concept of Nodes might seem alien at the start, but it allows for a more worry free design of your workflows. You can easily use nodes from different apps\nin your workflow, and not worry about how they are implemented."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Customizability"}),": The concept of Nodes and Plugins allows you to easily extend the functionality of your Arkitekt instance, without having to worry about breaking anything. Arkitekt\nonly provides very little functionality out of the box, but you can easily extend and customize your installtion with the functionality you need."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"That being said.."}),"\n",(0,o.jsx)(t.p,{children:"We understand that their might be alot of installation of tools or management of plugins involved and for a platform that is supposed to be used for automation, this is a bit\nironic. But don't you worry. .."}),"\n",(0,o.jsx)(t.h3,{id:"we-have-an-app-for-that",children:"We have an App for that!"}),"\n",(0,o.jsxs)(t.p,{children:["Yes. Apps to the rescue. But this one is especially sweet because there is no installation. And you have been using it all along.\nWhat? It's actually ",(0,o.jsx)(t.strong,{children:"this"})," documentation website."]}),"\n",(0,o.jsx)(t.p,{children:"You see, a lot of things can be an Arkitekt app and that includes this website. So we can actually use this website to install repositories or workflows to our Arkitekt instance."}),"\n",(0,o.jsxs)(t.p,{children:["You might have noticed the ",(0,o.jsx)(t.code,{children:"Connect"})," button in the top right corner of this website. And if you click on it and you run this website on the same machine as your Arkitekt instance,\nyou will see a familiar connect screen that will prompt you to connect to your Arkitekt instance."]}),"\n",(0,o.jsx)(t.p,{children:"So just connect. We will wait here."}),"\n",(0,o.jsxs)(a.qw.Guard,{fallback:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.div,{className:"bg-back-800 p-3 text-center rounded rounded-md mb-2",children:"\ud83d\ude0a Just one connection away..."}),(0,o.jsx)(d.A,{type:"warning",title:"Not able to connect?",children:"If you are not able to connect to your Arkitekt instance (because you cannot have a webbrowser where you installed arkitekt). You can always install the plugins manually through the same interface we saw before. We just can't give you to much interactive help about it."})]}),children:[(0,o.jsx)("div",{className:"bg-green-300 text-center text-black p-3 rounded rounded-md ",children:(0,o.jsx)(t.p,{children:"You did it \ud83e\udd70! We are connected"})}),(0,o.jsx)(t.h3,{id:"what-that-means-for-you",children:"What that means for you"}),(0,o.jsxs)(t.p,{children:["Well now that we are connected, we can actually install repositories and workflows directly from this website. So lets do that before we start with the next chapter.\nBecause we will need two more ",(0,o.jsx)(t.code,{children:"PluginApps"})," for our first workflow for that."]}),(0,o.jsx)(t.h4,{id:"first-plugin-standard-library",children:"First plugin: Standard Library"}),(0,o.jsx)(t.p,{children:"Finally you will be able to do some proper image analysis work, this is the Arkitekt Standard Library, which comes with an ever increasing number of nodes that you can use\nto analyze your data. They are not as fancy as the ones we have seen so far, but they are very useful. So lets install it."}),(0,o.jsx)(t.p,{children:"Look at this button. It will install the Standard Library to your Arkitekt instance. Just click it."}),(0,o.jsx)(s.W,{repo:"std",user:"arkitektio-apps",branch:"main"}),(0,o.jsx)(t.p,{children:"Turned green? Great! You now have the Standard Library Repository installed. We will do that in the next chapter."}),(0,o.jsx)(t.h4,{id:"second-plugin-reaktor",children:"Second plugin: Reaktor"}),(0,o.jsx)(t.p,{children:"The second plugin we will install is called Reaktor. This is a weird one, because it is not really a plugin that does anything. It is a plugin that will allow use to run\n(schedule) your workflows directly on the Arkitekt server. You might not understand what that means right now, but you will later. So lets install it."}),(0,o.jsx)(t.p,{children:"Same procedure as before, just click the button."}),(0,o.jsx)(s.W,{repo:"scheduler",user:"arkitektio-apps",branch:"main"}),(0,o.jsx)(t.p,{children:"Turned green? Great! You now have the Reaktor Repository installed. Next chapter."}),(0,o.jsx)(t.admonition,{title:"We love this feature",type:"tip",children:(0,o.jsx)(t.p,{children:"We love this feature, as it allows us to provide you with increaingly more and more interactive documentation. You can look at and install plugins and workflows directly from the documentation.\nBut most importantly, we love it because everyone can do that. You can create your own documentation website and use it to install your own plugins and workflows. Just check out the github repo for\nthis documentatoin. Its not that complicated."})})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},78330:(e,t,n)=>{"use strict";n.d(t,{A:()=>J});var i=n(96540),o=n(74848);function r(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=i.Children.toArray(e),n=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,o.jsx)(o.Fragment,{children:r}):null}}(e.children),r=e.title??t;return{...e,...r&&{title:r},children:n}}var a=n(34164),s=n(23230),d=n(18630);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c({type:e,className:t,children:n}){return(0,o.jsx)("div",{className:(0,a.A)(d.G.common.admonition,d.G.common.admonitionType(e),l.admonition,t),children:n})}function u({icon:e,title:t}){return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:e}),t]})}function h({children:e}){return e?(0,o.jsx)("div",{className:l.admonitionContent,children:e}):null}function p(e){const{type:t,icon:n,title:i,children:r,className:a}=e;return(0,o.jsxs)(c,{type:t,className:a,children:[i||n?(0,o.jsx)(u,{title:i,icon:n}):null,(0,o.jsx)(h,{children:r})]})}function g(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function m(e){return(0,o.jsx)(p,{...f,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function y(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(p,{...v,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function w(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,o.jsx)(w,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function x(e){return(0,o.jsx)(p,{...k,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const j={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function $(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const R={icon:(0,o.jsx)($,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const W={icon:(0,o.jsx)(A,{}),title:(0,o.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const _={...{note:m,tip:b,info:x,warning:function(e){return(0,o.jsx)(p,{...j,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(p,{...R,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(m,{title:"secondary",...e}),important:e=>(0,o.jsx)(x,{title:"important",...e}),success:e=>(0,o.jsx)(b,{title:"success",...e}),caution:function(e){return(0,o.jsx)(p,{...W,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function J(e){const t=r(e),n=(i=t.type,_[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),_.info));var i;return(0,o.jsx)(n,{...t})}},91394:(e,t,n)=>{"use strict";n.p}}]);