(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1616],{1252:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/node-template.5563609.640.png 640w,"+a.p+"assets/ideal-img/node-template.3da2fae.1320.png 1320w,"+a.p+"assets/ideal-img/node-template.939dbc0.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/node-template.5563609.640.png",width:640,height:382},{path:a.p+"assets/ideal-img/node-template.3da2fae.1320.png",width:1320,height:789},{path:a.p+"assets/ideal-img/node-template.939dbc0.2000.png",width:2e3,height:1195}],src:a.p+"assets/ideal-img/node-template.5563609.640.png",toString:function(){return a.p+"assets/ideal-img/node-template.5563609.640.png"},placeholder:void 0,width:640,height:382},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nGP4//8/08T/t9jr//9nYWBgYNBNXjdJt+LOSY2qxxYgflraGVYGBgZGBq+KGI+4JdVf4pfXbgxlYGDWLb1cZVDzZI1IxRO16eELq1cmHf27Lf1yFoNzZpRSyLTsiLgNtY728+dzMIT+Zzae+Z+VoX4/y/SwrdYbE07kbMi6YA4ynSF75jWj9PnXo3OWnPJMWXQhOX/qzaDiCTfjM2ffC4+Zd9sKrAgE1p843Lvy8M7Haw7vnrf6xJ6bO1ad27F20fFju9ZeurlqzokVcIUnNizW6qoq8N8ye6Lx5PpSv3mzprnX1ze7LZk3z7+oqNwGpAgA0lprnUuV0c8AAAAASUVORK5CYII="}},18306:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(85893),i=a(11151),s=a(15944),o=a(1252),d=a.n(o);const r={id:"template",title:"What is a Template?",sidebar_label:"Template",sidebar_position:1},l="What is a Template?",p={id:"design/terminology/template",title:"What is a Template?",description:"Templates can be best understood in comparison with nodes. A node in Arkitekt is an abstract description of an analysis tasks, which defines",source:"@site/docs/design/terminology/template.mdx",sourceDirName:"design/terminology",slug:"/design/terminology/template",permalink:"/docs/design/terminology/template",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/design/terminology/template.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"template",title:"What is a Template?",sidebar_label:"Template",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs/design/terminology/Structure"},next:{title:"Why?",permalink:"/docs/design/terminology/why"}},h={},m=[{value:"Example",id:"example",level:2},{value:"Developer Side",id:"developer-side",level:2}];function c(e){const t={admonition:"admonition",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"what-is-a-template",children:"What is a Template?"}),"\n",(0,n.jsxs)(t.p,{children:["Templates can be best understood in comparison with nodes. A node in Arkitekt is an abstract description of an analysis tasks, which defines\nthe inputs, outputs, but ",(0,n.jsx)(t.strong,{children:"not"})," the actual code that is run. A template is a concrete implementation of a node, and maps the abstract\nnotion of the task to a real world implementation."]}),"\n",(0,n.jsx)(t.p,{children:"Apps therefore do not expose nodes, but templates. So when trying to run an analysis and instructing Arktiekt to run a task, Arkitekt internally\nlooks up the template that is associated with the node, and sends the request to the app that is associated with the template."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:'Let\'s say you have want to do a bioimage task that is called "Project Maximum Intensity". This tasks has exactly on input, such as an image, and a single output, the segmented image Thats the abstract description of the task, and is represented by a node in Arkitekt.\nNow this tasks could run on a variety of different applications, such as on ImageJ, Stardist or Napari.\nEach of these applications would have a different way of running the task, but the abstract idea including the inputs and outputs would be the same.\nThese different ways of running the task are represented by templates in Arkitekt.'}),"\n",(0,n.jsxs)("div",{className:"mt-2",children:[(0,n.jsx)(s.Z,{img:d()}),(0,n.jsx)("div",{className:"text-gray-400 mb-2",children:(0,n.jsx)("small",{children:"Nodes and Templates"})})]}),"\n",(0,n.jsx)(t.p,{children:"Nodes are never attached to an application, templates always are."}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{}),(0,n.jsx)(t.p,{children:"Importantly templates are not created only on the app level, but for each user that runs the app. This allows us to find the best fitting\ntemplate for each bioimage task."})]}),"\n",(0,n.jsx)(t.h2,{id:"developer-side",children:"Developer Side"}),"\n",(0,n.jsx)(t.p,{children:"When developing an app, you will never really interact with nodes and templates, as they are abstract concepts that are abstracted away by our SDKs.\nOnce you register a python function, that function will be automatically inspected to infer inputs and outputs and the documentaiton of the function.\nThis information is now send to the Arkitekt server, and if no node with the parameters of the function exists, a new node is automatically created and\nassociated with the app."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);