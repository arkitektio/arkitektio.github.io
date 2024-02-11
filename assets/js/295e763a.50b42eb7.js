"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[7001],{87087:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(85893),a=i(11151);const s={id:"manifest",title:"Manifest",sidebar_label:"Manifest",sidebar_position:1},o=void 0,r={id:"design/terminology/manifest",title:"Manifest",description:"What is a manifest?",source:"@site/docs/design/terminology/manifest.mdx",sourceDirName:"design/terminology",slug:"/design/terminology/manifest",permalink:"/docs/design/terminology/manifest",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/design/terminology/manifest.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"manifest",title:"Manifest",sidebar_label:"Manifest",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"App",permalink:"/docs/design/terminology/app"},next:{title:"Node",permalink:"/docs/design/terminology/node"}},l={},d=[{value:"What is a manifest?",id:"what-is-a-manifest",level:3},{value:"Extensions to the Manifest",id:"extensions-to-the-manifest",level:2},{value:"Flavours and Selectors",id:"flavours-and-selectors",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"what-is-a-manifest",children:"What is a manifest?"}),"\n",(0,t.jsxs)(n.p,{children:["A manifest is the Arkitekt way of identifying an application. It contains information about the app,\nsuch as its name, version, and which access rights ",(0,t.jsx)(n.a,{href:"#scopes",children:"scopes"})," it requires. When you develop\nan app for Arkitekt, you will need to create a manifest for your app, which will be used to uniquely\nidentify your app on the platform. No worries, this is a simple process, and if you are using the\n",(0,t.jsx)(n.a,{href:"/docs/developers/python/Intro",children:"Arkitekt CLI"}),", it will be done automatically for you."]}),"\n",(0,t.jsx)(n.p,{children:"In its simplest form, a manifest is a YAML file, that contains the following information:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'name: "Example App"\nidentifier: "com.example.app"\nversion: "0.1.0"\ndescription: "This is an example app"\nscopes: \n- openid\n- email\n'})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, the manifest contains information about the app, such as its name, version, and\ndescription. This information will be presented to the user, when they are asked to authenticate\nyour app, or they can be used to search for your app in the soon to be released ",(0,t.jsx)(n.a,{href:"/docs/design/appstore",children:"App Store"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"extensions-to-the-manifest",children:"Extensions to the Manifest"}),"\n",(0,t.jsx)(n.p,{children:"The simple manifest described above is enough to identify your app on the platform, but it a Manifest\ncan contain much more information, which can be used by the platform to further enhance the deployment, and\ndiscoverability of your app. For example, you can specify which hardware and software environments your app requires,\nand inform the user before installation which functionality your apps will provide."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["This feature describes a feature of Arkitekt that is currently in development, and is not yet\navailable in the ",(0,t.jsx)(n.code,{children:"paper"})," and ",(0,t.jsx)(n.code,{children:"stable"}),' channels. This feature is currently only available in the\n"beta" channel. It is however already part of the CLI.']})}),"\n",(0,t.jsx)(n.h2,{id:"flavours-and-selectors",children:"Flavours and Selectors"}),"\n",(0,t.jsx)(n.p,{children:"Flavours and Selectors are a way of describing the different ways an app can be deployed. For example,"}),"\n",(0,t.jsxs)(n.p,{children:["When you develop an app for Arkitekt, your manifest will be slightly different, as it will contain\nadditional information about your app, such as its prefered hardware and software environments. This\ninformation will be used by the platform to determine if your app can run on a given machine, and\nwhich resources it will require. Additionality if you use more advanced container placement strategies,\n(such as ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/",children:"Kubernetes"}),"), this information will be used to determine which\nmachines your app can run on."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'deployments:\n    name: "Example App"\n    identifier: "com.example.app"\n    version: "0.1.0"\n    deployed_at: "2021-01-01T00:00:00Z"\n    description: "This is an example app"\n    scopes: \n    - openid\n    - email\n    flavours:\n        -   name: "CUDA"\n            description: "This flavour requires a CUDA - 11 enabled GPU"\n            selectors:\n                -   type: resource\n                    name: "gpu"\n                    value: "cuda-11"\n            image: "docker.io/arkitekt/example-app:0.1.0"\n            priority: 1\n        -   name: "CPU"\n            description: "This flavour requires a CPU"\n            selectors:\n                -   type: resource\n                    name: "cpu"\n                    value: 1\n            image: "docker.io/arkitekt/example-app:0.1.0"\n            priority: 2\n'})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, this ",(0,t.jsx)(n.code,{children:"deployment"})," manifest contains the same information as the simple manifest, but\nit also contains information about the different flavours of the app. Flavours are a way of\ndescribing the different ways an app can be deployed. In this example, the app can be deployed in two\ndifferent flavours, one that requires a CUDA enabled GPU, and one that requires a CPU. The platform\nwill use this information to determine which flavour of the app to deploy, based on the available\nresources on the machine, and the user's preferences."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The flavour based deployment is currently highly experimental and is not yet supported by the\nthe ",(0,t.jsx)(n.code,{children:"paper"})," and ",(0,t.jsx)(n.code,{children:"beta"})," channels, and the api is subject to change. This feature is currently only\navailable in the ",(0,t.jsx)(n.code,{children:"alpha"})," channel."]})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var t=i(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);