"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[28],{59975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(85893),r=t(11151);const s={id:"cli",title:"CLI",sidebar_label:"CLI",sidebar_position:2},o=void 0,a={id:"design/deployment/on_premise/cli",title:"CLI",description:"CLI",source:"@site/docs/design/deployment/on_premise/cli.mdx",sourceDirName:"design/deployment/on_premise",slug:"/design/deployment/on_premise/cli",permalink:"/docs/design/deployment/on_premise/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/design/deployment/on_premise/cli.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"cli",title:"CLI",sidebar_label:"CLI",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"On Premise",permalink:"/docs/design/deployment/on_premise/"},next:{title:"Konstruktor",permalink:"/docs/design/deployment/on_premise/Konstruktor"}},l={},d=[{value:"CLI",id:"cli",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Commands",id:"commands",level:3}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsx)(n.p,{children:"The Arkitekt CLI is a command line tool that helps you to create, build and test your Arkitekt Apps. But you can also use it\nto create new Arkitekt Servers and to manage your Arkitekt Server instances in a local folder."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"The Arkitekt CLI is currently in beta and we are working hard to improve it. If you find any bugs or have any suggestions\nplease let us know. THis is also not the best deployment strategy for beginners. And you are welcome to use the 'Konstruktor'\nto create your Apps."})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:'To install the Arkitekt CLI you need to have the python package "arkitekt[cli]" installed. You can do this with the following command:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "arkitekt[cli]" # or arkitekt[all] to install all dependencies\n'})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"In order to start an Arkitket Server  you can iniiate a new Arkitekt Server instance with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\narkitekt server init\n\n"})}),"\n",(0,i.jsx)(n.p,{children:'This will create a new Arkitekt Deployment in a ".dokker" folder in your current working directory.'}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"Before initiating a new Arkitekt Server instance make sure that you are in a folder with fast disk access.\nOtherwise the Arkitekt Server will be very slow to read and write data. Additionaly you should make sure that you have\nenough disk space available. The Arkitekt Server will use a lot of disk space for caching and storing data."})]}),"\n",(0,i.jsx)(n.h3,{id:"commands",children:"Commands"}),"\n",(0,i.jsx)(n.p,{children:"Once you have initiated a new Arkitekt Server instance you can use the following commands to manage your Arkitekt Server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"arkitekt server up\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will start the Arkitekt Server instance in the current working directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"arkitekt server down\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will stop the Arkitekt Server instance in the current working directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"arkitekt server restart\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will restart the Arkitekt Server instance in the current working directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"\n```bash\narkitekt server open orkestrator\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);