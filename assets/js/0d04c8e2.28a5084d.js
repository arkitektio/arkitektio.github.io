(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8950],{60699:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/node_explaination.8313684.640.png 640w,"+n.p+"assets/ideal-img/node_explaination.f45276e.1320.png 1320w,"+n.p+"assets/ideal-img/node_explaination.2d491dd.1980.png 1980w",images:[{path:n.p+"assets/ideal-img/node_explaination.8313684.640.png",width:640,height:261},{path:n.p+"assets/ideal-img/node_explaination.f45276e.1320.png",width:1320,height:539},{path:n.p+"assets/ideal-img/node_explaination.2d491dd.1980.png",width:1980,height:808}],src:n.p+"assets/ideal-img/node_explaination.8313684.640.png",toString:function(){return n.p+"assets/ideal-img/node_explaination.8313684.640.png"},placeholder:void 0,width:640,height:261},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVR4nAGkAFv/ANPCK/jJuin/ybkp/NbELP/GtiaD2ccr0tjGLP/Muin62Mct/8CxJoMAcWke/bSlJ/zn1S75h30k/2xkHJBJRBvXn5Ml/+3aLveMgSX/aWIcjwDy3jD//eoz//3sMvz/9DX/yLgokSMiFtmajyb///c0+v/0Nf/QwCqPANTEKo/Pvyqdzr8pmdLDKKKsnCNQbWUdeaKVJKLVxCmY0cIopK6eIlJjkV7a/ZVKVAAAAABJRU5ErkJggg=="}},57963:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>w,frontMatter:()=>h,metadata:()=>p,toc:()=>g});var o=n(85893),i=n(11151),a=(n(15944),n(75557),n(60699),n(89423)),r=n(71698),s=n(21262);const l=JSON.parse('{"__typename":"Flow","id":"3","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","position":{"__typename":"Position","x":681,"y":46},"typename":"ArkitektNode","parentNode":null,"hash":"57d45410523b5fc52e33a89c2ae0174666ef7afefe2028df1e16649a750bf0a4","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to be thresholded","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The thresholded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"gaussian_blur","label":"gaussian_blur","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to apply a gaussian blur before thresholding (kernel_size=5)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Otsu Thresholding","description":"Binarizes the image based on a threshold, using Otsu\'s method\\nwith option to guassian blur the image before, images are normalized\\nfor each x,y slice before thresholding.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","position":{"__typename":"Position","x":344,"y":56},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","position":{"__typename":"Position","x":1093,"y":59},"typename":"ArkitektNode","parentNode":null,"hash":"a0a7371a828e5104e953d955e69d6d14ceba2d6d58ccd2fd8609f417732f0d8e","kind":"FUNCTION","defaults":{"key":"Background Fraction","rep":null,"value":0},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"value","label":null,"identifier":null,"scope":"GLOBAL","kind":"INT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Fraction","description":"Measures the appearance of this value in the image (0-1)","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-cb5fee92-01e0-4f97-8d81-80bed3757576arg_0","source":"1","sourceHandle":"return_0","target":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-cb5fee92-01e0-4f97-8d81-80bed3757576return_0-arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8arg_0","source":"arkid-cb5fee92-01e0-4f97-8d81-80bed3757576","sourceHandle":"return_0","target":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8return_0-arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887arg_0","source":"arkid-955c7b0d-2086-40d0-bb49-1273bf6541b8","sourceHandle":"return_0","target":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887return_0-2arg_0","source":"arkid-6deb87ce-fa5d-40c0-af67-dfadb502d887","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[],"args":[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"scummy-green-sparrow","screenshot":null,"createdAt":"2023-10-27T16:42:25.175566+00:00","workspace":{"__typename":"Workspace","id":"2"}}'),d=n.p+"assets/medias/create_workflow-4fea74d9bb7da6cade25a7556d176f62.webm",c=n.p+"assets/medias/deploy_flow-f4ee546d9d941f8383b728d7cd85fb54.webm",h={title:"Designing your first workflow",sidebar_label:"7. Designing your first workflow",sidebar_position:7},u=void 0,p={id:"introduction/first_steps/first_workflow",title:"Designing your first workflow",description:"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now lets put it all together and create our first workflow,",source:"@site/docs/introduction/first_steps/first_workflow.mdx",sourceDirName:"introduction/first_steps",slug:"/introduction/first_steps/first_workflow",permalink:"/docs/introduction/first_steps/first_workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/first_steps/first_workflow.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Designing your first workflow",sidebar_label:"7. Designing your first workflow",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. A brief interlude",permalink:"/docs/introduction/first_steps/brief_interlude"},next:{title:"8. Your first Workflow Run",permalink:"/docs/introduction/first_steps/first_run"}},m={},g=[{value:"Before we start",id:"before-we-start",level:2},{value:"Enough talking",id:"enough-talking",level:2},{value:"New plugins",id:"new-plugins",level:2},{value:"Reserving a Scheduler",id:"reserving-a-scheduler",level:2},{value:"Creating the workflow",id:"creating-the-workflow",level:2},{value:"Running the workflow",id:"running-the-workflow",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",div:"div",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"We now have a basic understanding of how to call an conversion node on your data, we can visualize the results, now lets put it all together and create our first workflow,\nspanning the most basic nodes."}),"\n",(0,o.jsx)(t.p,{children:"Here we will use our uploaded image, max project it, threshold it (yeah analysis), and then measure the fraction of the image that is above the threshold (\nyeah quantification). In the course of this tutorial you will get to understand:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"What even are workflows?"}),"\n",(0,o.jsx)(t.li,{children:"What is a Workflow Scheduler?"}),"\n",(0,o.jsx)(t.li,{children:"How to create a workflow?"}),"\n",(0,o.jsx)(t.li,{children:"How to deploy a workflow on a Scheduler?"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"before-we-start",children:"Before we start"}),"\n",(0,o.jsxs)(t.p,{children:["You are familiar with this by now.. There are a few things we need to do before we can start.\nFirst what do we mean with ",(0,o.jsx)(t.code,{children:"Workflow"}),"?"]}),"\n",(0,o.jsxs)(t.p,{children:["A workflow in the arkitekt sense is a processing pipeline, that uses a series of ",(0,o.jsx)(t.code,{children:"Nodes"})," to process your data in a stream. Nodes just like\nour previously mentioned ",(0,o.jsx)(t.code,{children:"Show on Napari"})," or ",(0,o.jsx)(t.code,{children:"Convert File"})," nodes. You can either stitch them together in the GUI or you can import them from a file or\neven this website. We will do the first. Hopefully this will help you in familiarizing yourself a bit more with the UI ."]}),"\n",(0,o.jsx)(t.p,{children:"Lets look first at the workflow we would like to create, and then we will go through the steps to create it."}),"\n",(0,o.jsx)(s.n,{flow:l,blockImport:!0}),"\n",(0,o.jsx)("div",{className:"text-gray-400 mb-2",children:(0,o.jsxs)("small",{children:[" ",(0,o.jsxs)(t.p,{children:["This is the workflow we would like to create. For now we disabled the import\nfeature.. You should really try to create it on your own"," "]})]})}),"\n",(0,o.jsxs)(t.p,{children:["This is probably the most basic workflow you can create, but it will teach you a lot about the Arkitekt ",(0,o.jsx)(t.code,{children:"Workflow"})," and its design. A few things to note here."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["This is an Arkitekt ",(0,o.jsx)(t.code,{children:"Workflow"})," that we just exported from Arkitekt and then embeded in this website."]}),"\n",(0,o.jsx)(t.p,{children:"Arkitekt workflows are just visual representations of a processing workflow. They are stored in a JSON file, and can be imported and exported from Arkitekt.\nYou can also import them from this website, but we will get to that later."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["About the ",(0,o.jsx)(t.code,{children:"Nodes"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Nodes in Arkitekt Workflows are front and center. They are the building blocks of your workflow, and thusly the building blocks of your analysis. As you have seen\nin the previous section every ",(0,o.jsx)(t.code,{children:"Node"})," has inputs and outputs that you can connect to other nodes. This connection then defines the ",(0,o.jsx)(t.strong,{children:"flow of data"})," through your workflow. Importantly you will\nnotice the nodes termed ",(0,o.jsx)(t.code,{children:"Input"})," and ",(0,o.jsx)(t.code,{children:"Output"}),". These are special nodes that are part of every workflow, and are the entry and exit points to your analysis.\nWhen you connect a node to the ",(0,o.jsx)(t.code,{children:"Input"})," node, you are telling Arkitekt that your workflow will expect the input type of that node as a parameter when you run it.\nEqually you connect a node to the ",(0,o.jsx)(t.code,{children:"Output"})," node, you are telling Arkitekt that your workflow will return the output type of that node when you run it."]}),"\n",(0,o.jsx)(t.admonition,{title:"Workflows are Just Nodes",type:"info",children:(0,o.jsxs)(t.p,{children:["This abstraction of ",(0,o.jsx)(t.code,{children:"Input"})," and ",(0,o.jsx)(t.code,{children:"Output"})," nodes is core to the concept of a workflow in Arkitekt. Each workflow has exactly one ",(0,o.jsx)(t.code,{children:"Input"})," and one ",(0,o.jsx)(t.code,{children:"Output"})," node.\nAnd as our workflows are just nodes, these inputs and outputs will then be the inputs and outputs of the workflow node. This means that you can use workflows\nin workflows, and you can use workflows just as nodes on your data. But we will get to that later."]})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"About their colors:"}),"\n",(0,o.jsxs)(t.p,{children:["If you have connected the website and followed the tutorial until now, you might notice that the color of the nodes is yellow. This is because\nwe have not yet installed apps that provide the functionality for the nodes in this workflow. This illustrates another core feature of Arkitekt. The separation\nof the workflow design and the workflow execution. You can design and share a workflow, irrespective of the apps that provide the functionality for the nodes in the workflow.\nThis means that you can design a workflow, and potentially share it with others, even though they might run in on completely different apps. This makes workflows\na great way to share analysis pipelines, and to make them reproducible and ",(0,o.jsx)(t.strong,{children:"universal"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"About the data as a stream:"}),"\n",(0,o.jsxs)(t.p,{children:["Arkitekt workflows are adapted to process your data as a ",(0,o.jsx)(t.a,{href:"/docs/design/real-time",children:"stream"}),", rather than as a batch. This means that each node will process your data as it comes in, and then\npass it on to the next node. Nodes will not wait for all data to be processed, but will process it autonomously as it comes in. This means that you can process data ridicously fast,\nand importantly you can process data that is still being generated. This is a core feature of Arkitekt, and we will get to it later. You will also\nnote that the edges are labeled with ",(0,o.jsx)(t.code,{children:"@mikro/representatoin"})," and ",(0,o.jsx)(t.code,{children:"@mikro/metric"}),". These labels correspond to the data types that are passed between the nodes. The ",(0,o.jsx)(t.code,{children:"@"})," symbol\nindicates that these are ",(0,o.jsx)(t.a,{href:"/docs/service/mikro",children:"mikro"})," data types and the ",(0,o.jsx)(t.code,{children:"representation"})," and ",(0,o.jsx)(t.code,{children:"metric"})," indicate the type of data.\nThe first two nodes will manipulate an image to an image (images are represented as ",(0,o.jsx)(t.code,{children:"representation"}),"), and the last node will return a ",(0,o.jsx)(t.code,{children:"metric"})," (metrics are scalar values attached\nto an image (here the fraction)). This ",(0,o.jsx)(t.code,{children:"metric"})," will also be the output of our node."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"enough-talking",children:"Enough talking"}),"\n",(0,o.jsx)(t.p,{children:"Lets start by creating this workflow. First we need to install the apps that provide the functionality for the nodes in this workflow.\nWe will need two new plugins for this workflow, so lets install them. One plugin will provide all of our functionality need to run this workflow in.\nThe other plugin will be used to actually run the workflow in the background. So lets install them."}),"\n",(0,o.jsx)(t.h2,{id:"new-plugins",children:"New plugins"}),"\n",(0,o.jsx)(t.p,{children:"First we need to install the apps that provide the functionality for the nodes in this workflow."}),"\n",(0,o.jsxs)(a.J,{fallback:(0,o.jsx)(t.div,{children:'If appears you are not logged in. Its easier to login to install the plugins. But don\'t you worry, we will guide you through it. First lets install the Standard Libary plugin [`Stdlib`](https://github.com/jhnnsrs/stdlib) plugin, which provides a battery of basic image processing nodes. You can install it by clicking on the "Plugin Store", and adding the "Stdlib" repository. Users: `jhnnsrs`, Repository: `stdlib`, Branch: `master`. You then follow the [previously outlined](./first_tool#installing-our-first-app) steps to `Appify` the latest stdlib version, and deploy it to your server. Then we will need the [`Reaktor`](https://github.com/jhnnsrs/reaktor) plugin, which will acts a `scheduler` for our workflow. Don\'t worry you will understand what that means in a second. You can install it by clicking on the "Plugin Store", and adding the "Reaktor" repository. Users: `jhnnsrs`, Repository: `reaktor`, Branch: `main`. Again followig the [previously outlined](./first_tool#installing-our-first-app) steps to `Appify` the latest reaktor version, and deploy it If you now search for `Deploy Flow` and `Crop Image` in the search bar, you should find the two nodes we just installed. If you don\'t, make sure you have the correct repository selected in the search bar, and your installation was successful. Also if you refresh this page the nodes in the workflow should now appear green.'}),children:[(0,o.jsx)(t.p,{children:"You saw these button in the last section:"}),(0,o.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,o.jsx)(r.I,{repo:"stdlib",user:"jhnnsrs",branch:"master"}),(0,o.jsx)(r.I,{repo:"reaktor",user:"jhnnsrs",branch:"master"})]}),(0,o.jsxs)(t.p,{children:["Now follow ",(0,o.jsx)(t.a,{href:"./first_tool#installing-our-first-app",children:"previously outlined"})," steps to ",(0,o.jsx)(t.code,{children:"Appify"})," the latest ",(0,o.jsx)(t.code,{children:"stdlib"})," and ",(0,o.jsx)(t.code,{children:"reaktor"})," version, and deploy them to your server.\nYou should now be able to search for ",(0,o.jsx)(t.code,{children:"Deploy Flow"})," and ",(0,o.jsx)(t.code,{children:"Otsu Threshold"})," in the dashboard search bar, and find the two nodes we just installed."]})]}),"\n",(0,o.jsx)(t.h2,{id:"reserving-a-scheduler",children:"Reserving a Scheduler"}),"\n",(0,o.jsxs)(t.p,{children:["Before we are creating a workflow that will be executed in the background, we will go ahead and decide on a ",(0,o.jsx)(t.code,{children:"Scheduler"}),". A ",(0,o.jsx)(t.code,{children:"Scheduler"})," like so many things in Arkitekt\nis just a fancy ",(0,o.jsx)(t.code,{children:"App"}),", just like a ",(0,o.jsx)(t.code,{children:"Workflow"})," is just a ",(0,o.jsx)(t.code,{children:"Node"}),". What this ",(0,o.jsx)(t.code,{children:"Scheduler"})," App will do, is to actually ",(0,o.jsx)(t.code,{children:"run"})," our workflow for us when we call it. It will take care\nof the execution of the workflow tasks, and will make sure to call the right node at the right time. Imaging it like a conductor of an orchestra. It will receive the inputs and\noutputs of all of the workflow nodes and pipe them together just like our workflow blueprint suggests."]}),"\n",(0,o.jsxs)(t.p,{children:["In the Arkitekt ecosystem ",(0,o.jsx)(t.code,{children:"Schedulers"})," play a vital role and we actually have installed the two major ",(0,o.jsx)(t.code,{children:"Scheduler"})," types in our previous steps."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The first type are ",(0,o.jsx)(t.code,{children:"fully distributed"})," Schedulers: This type of Scheduler will call Arkitekt as a middleman for the handling of each workflow step. That means that when you assign a workflow to this type of Scheduler,\nit will call Arkitekt to run the first node, route the result to the node internal, and ask Arkitekt to run the second node on the result, and so on. This type of Scheduler is great where input and outputs span multiple apps\nand data is stored centrally (just like in our case). Its also a more fault-tolerant type of Scheduler, as it normally runs directly on the Arkitekt server and thus has direct access to the platform and won't\nsuffer from network errors. The downside is that it will be slower, as it will have to call Arkitekt for each step."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["The second type are ",(0,o.jsx)(t.code,{children:"partially distributed"})," Schedulers."]}),"\n",(0,o.jsxs)(t.p,{children:["This one is a bit more complicated to explain: As mentioned ",(0,o.jsx)(t.code,{children:"Schedulers"})," are just ",(0,o.jsx)(t.code,{children:"Apps"})," and indeed ",(0,o.jsx)(t.strong,{children:"every"})," app in Arkitekt can decide to become a Scheduler, if they implement the ",(0,o.jsx)(t.code,{children:"Deploy Flow"})," node.\nWouldn't it be great if they could just call their own nodes directly? Well they can.\n",(0,o.jsx)(t.code,{children:"partially distributed"})," or ",(0,o.jsx)(t.code,{children:"\xecn-app"})," Schedulers are Schedulers that will call their own nodes directly, ",(0,o.jsx)(t.em,{children:"without"})," the need to call Arkitekt. This means that they can schedule tasks much faster, as they don't have to call Arkitekt for each step.\nThis type of Scheduler is great for workflows where nodes are contained mostly within a single app, and where performance is key. They are also immensly useful for workflow that work ",(0,o.jsx)(t.code,{children:"completely"})," local with ",(0,o.jsx)(t.strong,{children:"in memory data"})," in one app.\nYou can see an example of that in our experimental ",(0,o.jsx)(t.a,{href:"/docs/showcases/advanced",children:"MikroJ in memory workflow"}),". The downside is that they are more fault-prone, as they are not running on the Arkitekt server\nand if the Scheduling app goes down, the workflow will fail."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The TLDR of which workflow scheduling to choose is: In 99% of cases you will want to use the ",(0,o.jsx)(t.code,{children:"fully distributed"})," Schedulers, as they are more fault tolerant to network errors."]}),"\n",(0,o.jsx)(t.admonition,{title:"About Schedulers",type:"info",children:(0,o.jsxs)(t.p,{children:["Schedulers are a core concept in Arkitekt. They are the conductor of your workflow, and they will make sure that your workflow is executed correctly. They are however also a quite advanced\nconcept, and you need to probably understand the Arkitekt design a bit better to fully understand their nuances. So don't worry if you don't understand them fully yet. We will try to give you some guidance\nin other parts of the ",(0,o.jsx)(t.a,{href:"/docs/design/scheduler",children:"documentation"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["But lets to just that and prepare a ",(0,o.jsx)(t.code,{children:"Scheduler"})," for our workflow. For this we will use the ",(0,o.jsx)(t.code,{children:"Reaktor"})," app, which we installed in the previous step. ",(0,o.jsx)(t.code,{children:"Reaktor"})," is a distributed ",(0,o.jsx)(t.code,{children:"Scheduler"})," app,\nthat will call Arkitekt for each step of the workflow. We will now go ahead and reserve the ",(0,o.jsx)(t.code,{children:"Deploy Flow"})," node of that app, which when called will associate that workflow with that app and\ncreate a ",(0,o.jsx)(t.code,{children:"Node"})," that is bound to that scheduler."]}),"\n",(0,o.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,o.jsx)("source",{src:c})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Open the ",(0,o.jsx)(t.code,{children:"Dashboard"})," in the sidebar"]}),"\n",(0,o.jsxs)(t.p,{children:["You can find the ",(0,o.jsx)(t.code,{children:"Deploy Flow"})," node in the search bar. It is part of the ",(0,o.jsx)(t.code,{children:"Reaktor"})," app, which we installed in the previous step. You can find it by searching for ",(0,o.jsx)(t.code,{children:"Deploy Flow"})," in the search bar."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Reserve the Node by Drag and Drop ",(0,o.jsx)(t.code,{children:"Reserve"})]}),"\n",(0,o.jsxs)(t.p,{children:["In the upcoming Reserve Dialog this time do ",(0,o.jsx)(t.strong,{children:"NOT"}),' choose Reaktor as an App but rather directly reserve the "Reaktor app" by clicking. This will reserve the ',(0,o.jsx)(t.code,{children:"Deploy Flow"})," node of the ",(0,o.jsx)(t.code,{children:"Reaktor"})," app.\nEvery workflow that you now give this node as an input, will be associated with the ",(0,o.jsx)(t.code,{children:"Reaktor"})," app, and will be executed by it."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Workflow Deployment",type:"info",children:(0,o.jsxs)(t.p,{children:["When you deploy a workflow, you are telling Arkitekt to associate that workflow with a ",(0,o.jsx)(t.code,{children:"Scheduler"}),". This means that when ",(0,o.jsx)(t.code,{children:"Deploy Flow"}),", you will call a functionality that dynamically creates a ",(0,o.jsx)(t.code,{children:"Node"}),"\non the Arkitekt platform that is associated with that ",(0,o.jsx)(t.code,{children:"Scheduler"}),". This newly created ",(0,o.jsx)(t.code,{children:"Node"})," is then your new way of calling that workflow. You can then call that ",(0,o.jsx)(t.code,{children:"Workflow Node"})," just like any other ",(0,o.jsx)(t.code,{children:"Node"})," on your data."]})}),"\n",(0,o.jsx)(t.admonition,{title:"About this process",type:"caution",children:(0,o.jsx)(t.p,{children:"While we believe the abstraction of workflows as nodes and their deployment again through nodes is a powerful one, we see how it can be a bit confusing at first. We will soon encapsulate this part of the process in a more user friendly way, but for now\nyou will have to go through this process. However if anything it should give you a better understanding of the Arkitekt design."})}),"\n",(0,o.jsx)(t.h2,{id:"creating-the-workflow",children:"Creating the workflow"}),"\n",(0,o.jsxs)(t.p,{children:["Now that we have the ",(0,o.jsx)(t.code,{children:"Nodes"})," we need and a potential ",(0,o.jsx)(t.code,{children:"Scheduler"})," lets create the workflow. For this we can finally go to the ",(0,o.jsx)(t.code,{children:"Workflow"}),' tab in the sidebar.\nHere we can see a list of all our workflows, and we can create a new one by clicking on the "Create Workflow" button.']}),"\n",(0,o.jsxs)(t.p,{children:["You will be presented by the Arkitekt Workflow Designer, which is a drag and drop interface to create workflows.\nYou can drag ",(0,o.jsx)(t.code,{children:"Nodes"})," from the nodes sidebar into the workflow, and connect them by dragging the output of one ",(0,o.jsx)(t.code,{children:"Node"})," to the input of another."]}),"\n",(0,o.jsx)(t.p,{children:"Lets see the design in progress."}),"\n",(0,o.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,o.jsx)("source",{src:d})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Open the ",(0,o.jsx)(t.code,{children:"Workflows"})," tab in the sidebar"]}),"\n",(0,o.jsx)(t.p,{children:"The Worksflows tab is where you can create and manage your workflows, that you can create and run on your data."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click on ",(0,o.jsx)(t.code,{children:"Create Workspace"})," on the bottom right."]}),"\n",(0,o.jsx)(t.p,{children:'Give it a Name like "Analysis Run" and click on "Create".\nA workspace is a place to create and manage versions of your workflow. Workflows are automatically versioned, that means\nif you change a workflow, you will create a new version of it. This is important for reproducibility and traceability of your analysis.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"You are now presented with the Arkitekt Workflow Designer."}),"\n",(0,o.jsxs)(t.p,{children:["The Arkitekt Workflow Designer is a drag and drop interface to create workflows. You can drag nodes from the nodes sidebar into the workflow,\nand connect them by dragging the output of one node to the input of another. Just search for your nodes in the search bar, and drag them into the workflow.\nMake sure to connect the ",(0,o.jsx)(t.code,{children:"Input"})," and ",(0,o.jsx)(t.code,{children:"Output"})," nodes to your workflow, as they are required for each workflow."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Set necessary parameters on the sidebar."}),"\n",(0,o.jsxs)(t.p,{children:["Some nodes require you to specify parameters. You can do that by clicking on the node, and then setting the parameters in the sidebar. For example the ",(0,o.jsx)(t.code,{children:"Otsu Threshold"})," node requires you to specify\nif you want to use a gaussian blur before thresholding.This is not necessary for our workflow, so we can leave it at the default value. However you can change the value that should be measure\nby the ",(0,o.jsx)(t.code,{children:"Measure Fraction"})," node. You can do that by clicking on the node, and then setting the parameters in the sidebar. We are interested in the ",(0,o.jsx)(t.code,{children:"Fraction"}),' of the image that is below the threshold,\nso we can change it at to the 0 value. Also we can rename the Metric key to "Background Fraction", to be more descriptive.']}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Save the workflow"}),"\n",(0,o.jsx)(t.p,{children:'You can save the workflow by clicking on the "Save" button on the bottom right. This will save the workflow to your server, making it ready to be deployed.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Deploy the workflow"}),"\n",(0,o.jsxs)(t.p,{children:["This is now the final step. We now have a workflow, but we need to deploy it to a ",(0,o.jsx)(t.code,{children:"Scheduler"}),". For this we can use the ",(0,o.jsx)(t.code,{children:"Deploy Flow"})," node we reserved in the previous step.\nArkitekt will automatically prompt us with this Node when we click deploy on a workflow. So lets do that. Click on the ",(0,o.jsx)(t.code,{children:"Deploy"})," button on the bottom right. You will be prompted with a dialog\nwhere you can now select our ",(0,o.jsx)(t.code,{children:"Deploy Flow"})," reservation. This will open an Assign dialog where you can give the Node a dedicated Name (this is the name of the node that will be created on the platform)\nand choose advanced paramters like the ",(0,o.jsx)(t.code,{children:"Stream behaviour"})," don't worry about that right now. You can leave it at the default value. Click on ",(0,o.jsx)(t.code,{children:"Assign"})," and you are done."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"You should now see a Popup in the bottom right"}),"\n",(0,o.jsx)(t.p,{children:"If everything was successful you should now see a popup in the bottom right, that tells you that your workflow was successfully deployed. You can now close the workflow designer and go back to the dashboard."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"About the Deployment",type:"note",children:(0,o.jsxs)(t.p,{children:["Once you pressed ",(0,o.jsx)(t.code,{children:"Deploy"})," you were prompted with an ",(0,o.jsx)(t.code,{children:"Assign Dialog"}),". This Dialog is indeed the exact same type of dialog that we saw in the previous section, when we used the ",(0,o.jsx)(t.code,{children:"Convert Omero"})," node.\nAnd indeed the process is the same. When you deploy a workflow, you are just calling a functionality that dynamically creates a ",(0,o.jsx)(t.code,{children:"Node"})," on the Arkitekt platform that is associated with that App (which is then its ",(0,o.jsx)(t.code,{children:"Scheduler"}),"). We hope\nespecially Developers will appreciate that a ",(0,o.jsx)(t.code,{children:"Node"})," can recursively create ",(0,o.jsx)(t.code,{children:"Nodes"}),". Indeed they can easily create powerful third party schedulers, that will feel native to the Arkitekt ecosystem."]})}),"\n",(0,o.jsx)(t.h2,{id:"running-the-workflow",children:"Running the workflow"}),"\n",(0,o.jsx)(t.p,{children:"Well as a workflow is now just a Node, Running it on our data should seem quite straightforward. Lets see that in the next section..."})]})}function w(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>h});var o=n(37887),i=n(69819),a=n(31230),r=n(67294),s=n(85893);const l=a.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,d=a.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,c="my-2 p-2 rounded-md text-black text-center w-60 ",h=(0,i.Zh)((e=>{let{branch:t,repo:n,user:a}=e;const{client:h}=(0,i.AA)(),u=`${a}/${n}:${t}`,[p,m]=r.useState(!1),{data:g,refetch:f}=(0,o.a)(d,{client:h,variables:{tag:u},pollInterval:3e3});return(0,s.jsx)(s.Fragment,{children:g?.githubRepo?(0,s.jsxs)("button",{className:c+"bg-green-300",children:[" \u2705 ",u]}):(0,s.jsx)("button",{onClick:async()=>{try{m(!0);const{data:e}=await h.mutate({mutation:l,variables:{branch:t,repo:n,user:a}});await f(),console.log(e),m(!1)}catch(e){console.log(e)}},className:c+"cursor-pointer bg-yellow-200"+(p?" animate-pulse":""),children:p?(0,s.jsxs)(s.Fragment,{children:[" Installing ",u," "]}):(0,s.jsxs)(s.Fragment,{children:["\ud83e\ude84 Install ",u]})})})}),(0,s.jsx)("div",{className:c+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},21262:(e,t,n)=>{"use strict";n.d(t,{n:()=>rt});var o=n(67294),i=n(98268),a=(n(49263),n(85893));const r=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:t,nodeTypes:n,nodes:o,edges:s,children:l,...d}=e;return(0,a.jsx)(i.tV,{children:(0,a.jsx)(i.x$,{nodes:o,edges:s,onInit:r,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right",...d,children:l})})};function l(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,c=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function h(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(c,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const u=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:o,...i}=e;return{type:o,id:t,position:n,data:{__typename:o,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(l)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:o,target:i,targetHandle:a,__typename:r,...s}=e;return{id:t,type:r,source:n,sourceHandle:o,target:i,targetHandle:a,data:{__typename:r,...s}}}})).filter(l)||[],m=o.createContext({}),g=()=>(0,o.useContext)(m);var f=n(31230);let w=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),y=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const x=f.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,k=(f.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${x}
`,f.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),b=f.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,j=f.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${x}
  ${k}
  ${b}
`,v=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${j}
`,$=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${j}
`,N=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${v}
  ${$}
  ${x}
`,_=f.Ps`
  fragment SubthreadComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    createdAt
    descendents {
      ...Descendent
    }
  }
  ${N}
`,P=f.Ps`
  fragment ListComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    resolved
    resolvedBy {
      sub
    }
    id
    createdAt
    children {
      ...SubthreadComment
    }
  }
  ${N}
  ${_}
`,S=f.Ps`
  fragment MentionComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    id
    createdAt
    children {
      ...SubthreadComment
    }
    mentions {
      id
      sub
    }
    resolved
    resolvedBy {
      sub
    }
    objectId
    contentType
  }
  ${N}
  ${_}
`,A=f.Ps`
  fragment DetailComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    id
    resolved
    resolvedBy {
      sub
    }
    createdAt
    children {
      ...SubthreadComment
    }
    mentions {
      sub
    }
    objectId
    contentType
  }
  ${N}
  ${_}
`,T=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,D=f.Ps`
  fragment ConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
    status
    events {
      ...ConditionEvent
    }
  }
  ${T}
`,C=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,R=f.Ps`
  fragment Widget on Widget {
    kind
    query
    hook
    ward
    min
    step
    placeholder
    max
    choices {
      value
      label
    }
    asParagraph
  }
`,I=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,W=f.Ps`
  fragment PortChildNested on PortChild {
    scope
    identifier
    kind
    nullable
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
    child {
      identifier
      scope
      kind
      nullable
      assignWidget {
        ...Widget
      }
      returnWidget {
        ...ReturnWidget
      }
    }
    variants {
      identifier
      scope
      kind
      nullable
      assignWidget {
        ...Widget
      }
      returnWidget {
        ...ReturnWidget
      }
    }
  }
  ${R}
  ${I}
`,L=f.Ps`
  fragment PortChild on PortChild {
    identifier
    kind
    scope
    nullable
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
    child {
      ...PortChildNested
    }
    variants {
      ...PortChildNested
    }
  }
  ${R}
  ${I}
  ${W}
`,F=f.Ps`
  fragment Port on Port {
    key
    label
    identifier
    scope
    kind
    description
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
    child {
      ...PortChild
    }
    variants {
      ...PortChild
    }
    nullable
  }
  ${R}
  ${I}
  ${L}
`,E=f.Ps`
  fragment FlowNodeCommons on FlowNodeCommons {
    instream {
      ...Port
    }
    outstream {
      ...Port
    }
    constream {
      ...Port
    }
    constants
    name
    description
  }
  ${F}
`,B=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,O=f.Ps`
  fragment ArkitektNode on ArkitektNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    hash
    kind
    defaults
    mapStrategy
    allowLocal
    binds {
      clients
      templates
    }
    assignTimeout
    yieldTimeout
    reserveTimeout
    maxRetries
  }
  ${E}
  ${B}
`,U=f.Ps`
  fragment ArkitektFilterNode on ArkitektFilterNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    hash
    kind
    defaults
    mapStrategy
    allowLocal
    binds {
      clients
      templates
    }
    assignTimeout
    yieldTimeout
    reserveTimeout
    maxRetries
  }
  ${E}
  ${B}
`,q=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${E}
`,H=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${E}
`,M=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${E}
`,G=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${E}
`,Y=f.Ps`
  fragment LocalNode on LocalNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    interface
    hash
    kind
    defaults
    mapStrategy
    allowLocal
    assignTimeout
    yieldTimeout
    maxRetries
  }
  ${E}
  ${B}
`,z=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${E}
`,K=f.Ps`
  fragment FlowNode on FlowNode {
    id
    position {
      x
      y
    }
    typename
    parentNode
    ...ArkitektNode
    ...ArkitektFilterNode
    ...ReactiveNode
    ...ArgNode
    ...KwargNode
    ...ReturnNode
    ...LocalNode
    ...GraphNode
  }
  ${O}
  ${U}
  ${q}
  ${H}
  ${M}
  ${G}
  ${Y}
  ${z}
`,J=f.Ps`
  fragment StreamItemChild on StreamItemChild {
    kind
    identifier
    scope
    nullable
    child {
      scope
      kind
      nullable
      identifier
    }
    variants {
      scope
      kind
      nullable
      identifier
    }
  }
`,V=f.Ps`
  fragment StreamItem on StreamItem {
    key
    kind
    identifier
    scope
    nullable
    child {
      ...StreamItemChild
    }
    variants {
      ...StreamItemChild
    }
  }
  ${J}
`,X=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${V}
`,Z=f.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${X}
`,Q=f.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${X}
`,ee=f.Ps`
  fragment FlowEdge on FlowEdge {
    id
    source
    sourceHandle
    target
    targetHandle
    typename
    ...LabeledEdge
    ...FancyEdge
  }
  ${Z}
  ${Q}
`,te=f.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${F}
`,ne=f.Ps`
  fragment Flow on Flow {
    __typename
    id
    graph {
      nodes {
        ...FlowNode
      }
      edges {
        ...FlowEdge
      }
      globals {
        ...Global
      }
      args {
        ...Port
      }
      returns {
        ...Port
      }
    }
    restrict
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
  ${K}
  ${ee}
  ${te}
  ${F}
`,oe=f.Ps`
  fragment Condition on Condition {
    id
    snapshots {
      id
      status
      createdAt
    }
    provision
    createdAt
    latestSnapshot {
      createdAt
      events {
        ...ConditionEvent
      }
    }
    flow {
      ...Flow
    }
  }
  ${T}
  ${ne}
`,ie=f.Ps`
  fragment ListCondition on Condition {
    id
    provision
    createdAt
    flow {
      id
      name
      workspace {
        name
      }
    }
  }
`,ae=f.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,re=f.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${ae}
`,se=f.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${ne}
`,le=(f.Ps`
  fragment RunLog on RunLog {
    id
    node
    log
  }
`,f.Ps`
  fragment ReactiveTemplate on ReactiveTemplate {
    constream {
      ...Port
    }
    instream {
      ...Port
    }
    outstream {
      ...Port
    }
    name
    implementation
    description
    id
    constants {
      ...Port
    }
  }
  ${F}
`),de=f.Ps`
  fragment RunEvent on RunEvent {
    id
    source
    handle
    type
    createdAt
    value
    t
    causedBy
  }
`,ce=f.Ps`
  fragment Snapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    status
    events {
      ...RunEvent
    }
    t
  }
  ${de}
`,he=f.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,ue=f.Ps`
  fragment Run on Run {
    id
    status
    assignation
    snapshots {
      id
      status
      t
      createdAt
    }
    createdAt
    latestSnapshot {
      createdAt
      events {
        ...RunEvent
      }
      t
    }
    flow {
      ...Flow
    }
  }
  ${de}
  ${ne}
`,pe=f.Ps`
  fragment ExportRun on Run {
    id
    status
    assignation
    snapshots {
      id
      status
      t
      createdAt
    }
    createdAt
    events {
      ...RunEvent
    }
    flow {
      ...Flow
    }
  }
  ${de}
  ${ne}
`,me=f.Ps`
  fragment ListRun on Run {
    id
    status
    assignation
    createdAt
    flow {
      id
      name
      workspace {
        name
      }
    }
  }
`;f.Ps`
  mutation CreateComment(
    $id: ID!
    $model: CommentableModels!
    $descendents: [DescendendInput]!
    $parent: ID
  ) {
    createComment(
      object: $id
      type: $model
      descendents: $descendents
      parent: $parent
    ) {
      ...ListComment
    }
  }
  ${P}
`;f.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${P}
`;f.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${P}
`;f.Ps`
  mutation DeleteCondition($id: ID!) {
    deleteCondition(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation pinCondition($id: ID!, $pin: Boolean!) {
    pinCondition(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;f.Ps`
  mutation UpdateFlow($id: ID!, $graph: GraphInput!, $screenshot: ImageFile) {
    updateworkspace(id: $id, graph: $graph, screenshot: $screenshot) {
      ...Workspace
    }
  }
  ${se}
`;f.Ps`
  mutation DeleteFlow($id: ID!) {
    deleteFlow(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation CreateVanillaDiagram($name: String, $restrict: [String]) {
    drawvanilla(name: $name, restrict: $restrict) {
      ...Workspace
    }
  }
  ${se}
`;f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${se}
`;f.Ps`
  mutation pinFlow($id: ID!, $pin: Boolean!) {
    pinFlow(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;f.Ps`
  mutation DeleteSnapshot($id: ID!) {
    deleteSnapshot(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation DeleteRun($id: ID!) {
    deleteRun(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation PinRun($id: ID!, $pin: Boolean!) {
    pinRun(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;f.Ps`
  mutation DeleteWorkspace($id: ID!) {
    deleteWorkspace(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation PinWorkspace($id: ID!, $pin: Boolean!) {
    pinWorkspace(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;f.Ps`
  query CommentsFor($id: ID!, $model: CommentableModels!) {
    commentsfor(model: $model, id: $id) {
      ...ListComment
    }
  }
  ${P}
`;f.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${S}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${A}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${C}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${D}
`;f.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${ie}
`;f.Ps`
  query MyConditions(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myconditions(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListCondition
    }
  }
  ${ie}
`;f.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${oe}
`;f.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${T}
`;f.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${ne}
`;f.Ps`
  query Workspace($id: ID!) {
    workspace(id: $id) {
      ...Workspace
    }
  }
  ${se}
`;f.Ps`
  query MyWorkspaces(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myworkspaces(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListWorkspace
    }
  }
  ${re}
`;f.Ps`
  query PinnedWorkspaces(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    workspaces(
      limit: $limit
      offset: $offset
      order: $order
      pinned: true
      createdDay: $createdDay
    ) {
      ...ListWorkspace
    }
  }
  ${re}
`;f.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${re}
`;f.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${ae}
`;f.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${he}
`;f.Ps`
  query DetailSnapshot($id: ID!) {
    snapshot(id: $id) {
      ...Snapshot
    }
  }
  ${ce}
`;f.Ps`
  query Runs {
    runs {
      ...ListRun
    }
  }
  ${me}
`;f.Ps`
  query MyRuns(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myruns(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListRun
    }
  }
  ${me}
`;f.Ps`
  query PinnedRuns(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    runs(
      limit: $limit
      offset: $offset
      order: $order
      pinned: true
      createdDay: $createdDay
    ) {
      ...ListRun
    }
  }
  ${me}
`;f.Ps`
  query DetailRun($id: ID, $assignation: ID) {
    run(id: $id, assignation: $assignation) {
      ...Run
    }
  }
  ${ue}
`;f.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${pe}
`;f.Ps`
  query EventsBetween($id: ID!, $min: Int, $max: Int) {
    eventsBetween(run: $id, min: $min, max: $max) {
      ...RunEvent
    }
  }
  ${de}
`;f.Ps`
  query FlussGlobalSearch($search: String) {
    workspaces(search: $search) {
      ...ListWorkspace
    }
  }
  ${re}
`;f.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${le}
`;f.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${le}
`;f.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${le}
`;f.Ps`
  subscription ConditionEvents($id: ID!) {
    conditionevents(id: $id) {
      deleted
      create {
        ...ConditionEvent
      }
      update {
        ...ConditionEvent
      }
    }
  }
  ${T}
`;f.Ps`
  subscription Events($id: ID!) {
    events(id: $id) {
      deleted
      create {
        ...RunEvent
      }
      update {
        ...RunEvent
      }
    }
  }
  ${de}
`;const ge=e=>{const{}=g(),{id:t,sourcePosition:n,targetPosition:o,sourceX:r,sourceY:s,targetX:l,targetY:d,style:c,markerStart:h,markerEnd:u,data:p}=e,[m,f,w]=(0,i.OW)({sourcePosition:n,targetPosition:o,sourceX:r,sourceY:s,targetX:l,targetY:d});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{id:t,style:c,className:"react-flow__edge-path",d:m}),(0,a.jsx)(i.XQ,{children:(0,a.jsx)("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${w}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex ",children:p?.stream.map(((e,t)=>(0,a.jsx)("span",{className:"text-xs",children:(e?.kind==y.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")},t)))})})]})};var fe=n(1706);const we=o.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),ye=e=>{let{id:t,children:n,expandedHeight:i=200,expandedWidth:r=400,collapsedWidth:s=170,collapsedHeight:l=70}=e;const[d,c]=(0,o.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:l});return(0,a.jsx)(fe.Resizable,{height:d.height,width:d.width,onResize:(e,t)=>{let{size:n,handle:o}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40],children:(0,a.jsx)(we.Provider,{value:{...d,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:r,height:e.isExpanded?l:i})))}},children:(0,a.jsx)("div",{style:{width:d.width+"px",height:d.height+"px"},className:"flex flex-col",children:n})})},t)},xe=e=>t=>(0,a.jsx)(ye,{id:t.id,children:(0,a.jsx)(e,{...t})}),ke={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},be=e=>{let{children:t,id:n,color:i="white"}=e;const[r,s]=o.useState(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${ke[i]}`,children:t})})};var je=n(55770),ve=n(86419),$e=n(90512),Ne=n(57851);function _e(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,Ne.m)((0,$e.W)(t))}const Pe=ve.fC,Se=ve.xz,Ae=o.forwardRef(((e,t)=>{let{className:n,align:o="center",sideOffset:i=4,...r}=e;return(0,a.jsx)(ve.h_,{children:(0,a.jsx)(ve.VY,{ref:t,align:o,sideOffset:i,className:_e("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...r})})}));Ae.displayName=ve.VY.displayName;const Te=()=>(0,a.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),De=()=>(0,a.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Ce=(e,t,n)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,n)))),Re=e=>{const{data:t,error:n,loading:o}=(0,je.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return(0,a.jsx)(a.Fragment,{children:n?(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)(Te,{}),(0,a.jsxs)("div",{className:"text-yellow-500 my-auto",children:[" ",e.name," "]})]}):(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)(De,{}),(0,a.jsxs)("div",{className:"text-green-500 my-auto",children:[" ",t?.node?.name," "]})]})})},Ie=e=>{const{flow:t}=g(),n=e.data.defaults&&Object.keys(e.data.defaults).filter((n=>e.data.defaults[n]&&null!=e.data.defaults[n]&&0!=e.data.defaults[n]||Ce(t,e.id,n)))||[];return(0,a.jsxs)(Pe,{children:[(0,a.jsx)(Se,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full ",children:(0,a.jsx)(je.Z6,{fallback:(0,a.jsxs)(a.Fragment,{children:[" ",e.data?.name]}),children:(0,a.jsx)(Re,{hash:e.data.hash,name:e.data.name})})}),(0,a.jsxs)(Ae,{className:"text-xs bg-back-800 my-auto  ",children:[" ",e.data?.description,n&&n.length>0&&(0,a.jsxs)("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3",children:[(0,a.jsx)("div",{className:"font-semibold text-md mb-2",children:"Constants "}),(0,a.jsx)("div",{className:"flex flex-row gap-2 text-white",children:(0,a.jsx)("div",{className:"flex grid grid-cols-2 gap-2",children:n.map((n=>{const o=Ce(t,e.id,n);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:" my-auto",children:[" ",n," "]}),o?(0,a.jsxs)("div",{className:"text-primary-300",children:[" ",(0,a.jsx)("div",{className:"font-bold inline",children:"Global "}),o.port.key," "]}):(0,a.jsxs)("div",{className:"my-auto",children:[" ",e.data.defaults[n]," "]})]})}))})})]})]})]})},We=xe((e=>{const{isExpanded:t,toggleExpanded:n}=(0,o.useContext)(we);return(0,a.jsxs)(be,{id:e.id,children:[e.data.instream.map(((e,t)=>(0,a.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>(0,a.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),(0,a.jsx)("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden ",children:(0,a.jsx)(Ie,{...e})})]})})),Le=xe((e=>{let{data:{outstream:t,instream:n},id:r}=e;const[s,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(!0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(be,{color:"blue",id:r,children:(0,a.jsx)("div",{className:"px-2 py-2",children:(0,a.jsxs)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:["Inputs"," "]})})}),t.map(((e,t)=>(0,a.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r})))]})}));var Fe=n(63750);const Ee=xe((e=>{let{data:{constream:t},id:n}=e;const[i,r]=(0,o.useState)(!1),[s,l]=(0,o.useState)(!0);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(be,{color:"green",id:n,children:[!s&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex",children:t?.map(((e,t)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n,children:(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsx)("button",{type:"button",onClick:()=>alert("implement"),children:(0,a.jsx)(Fe.yvY,{})})})},t)})))})}),(0,a.jsxs)("div",{className:"px-2 py-2",children:[(0,a.jsxs)("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>l(!s),children:["Constants"," "]}),(0,a.jsx)("p",{className:"text-gray-700 text-base"})]})]})})})),Be=xe((e=>{let{data:{outstream:t,instream:n},id:r}=e;const[s,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(!0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(be,{color:"red",id:r,children:(0,a.jsxs)("div",{className:"px-2 py-2",children:[(0,a.jsx)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:"Outputs"}),(0,a.jsxs)("p",{className:"text-gray-700 text-base",children:[(0,a.jsxs)(a.Fragment,{children:[n[0]?.map((e=>e?.kind)).join(" | "),(0,a.jsx)("br",{})]}),!d&&(0,a.jsx)("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>l(!0),children:"Add Documentation"})]})]})}),n.map(((e,t)=>(0,a.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}})))]})})),Oe="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Ue={ArkitektNode:We,ArkitektFilterNode:We,LocalNode:We,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:r,implementation:s,defaults:l},id:d}=e;const c=(0,i.Bn)();return(0,o.useEffect)((()=>{console.log("Update node internals",d,s),c(d)}),[t,n,r]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"custom-drag-handle text-xs ",children:[s&&[w.Combinelatest,w.Withlatest,w.Zip,w.BufferUntil].includes(s)&&(0,a.jsx)("svg",{height:"40",width:"40",children:(0,a.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[w.Gate].includes(s)&&(0,a.jsx)("svg",{height:"40",width:"40",children:(0,a.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})}),s&&[w.Split].includes(s)&&(0,a.jsx)("svg",{height:"40",width:"40",children:(0,a.jsx)("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[w.Chunk,w.All,w.BufferComplete,w.Divide,w.Filter,w.Multiply,w.Modulo,w.Power,w.Subtract,w.Add,w.Prefix,w.Suffix].includes(s)&&(0,a.jsxs)("div",{className:Oe,children:[s," ",l?.number&&(0,a.jsx)("b",{className:"font-bold",children:l.number})]}),s&&[w.Ensure].includes(s)&&(0,a.jsx)("div",{className:Oe,children:(0,a.jsx)("h1",{children:"!"})}),s&&[w.ToList].includes(s)&&(0,a.jsxs)("svg",{height:"40",width:"40",children:[(0,a.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),(0,a.jsx)("text",{children:s})]}),s&&[w.Omit].includes(s)&&(0,a.jsxs)("svg",{height:"40",width:"40",children:[(0,a.jsx)("text",{children:(0,a.jsx)("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"},children:s})}),(0,a.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})]}),s&&[w.If].includes(s)&&(0,a.jsxs)("svg",{height:"40",width:"40",children:[(0,a.jsx)("text",{children:(0,a.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"If"})}),(0,a.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),s&&[w.And].includes(s)&&(0,a.jsxs)("svg",{height:"40",width:"40",children:[(0,a.jsx)("text",{children:(0,a.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"And"})}),(0,a.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),r?.map(((e,t,n)=>(0,a.jsx)(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,style:{background:"#555",marginTop:10,height:"1em"}},t))),n?.map(((e,t,n)=>(0,a.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}},t))),t?.map(((e,t,n)=>(0,a.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}},t)))]})})},ArgNode:Le,ReturnNode:Be,KwargNode:Ee,GraphNode:()=>null},qe={LabeledEdge:ge,FancyEdge:ge},He=e=>{let{flow:t}=e;const[n,o,r]=(0,i.Rr)(u(t.graph?.nodes)),[l,d,c]=(0,i.ll)(p(t.graph?.edges));return(0,a.jsx)(m.Provider,{value:{flow:t},children:(0,a.jsx)(s,{nodes:n,edges:l,onNodesChange:r,onEdgesChange:c,elementsSelectable:!0,nodeTypes:Ue,edgeTypes:qe,fitView:!0,attributionPosition:"bottom-right"})})};var Me=n(89423),Ge=n(98756);const Ye=e=>{const{user:t}=(0,Me.gX)(),{fakts:n}=(0,Ge.sT)();return(0,a.jsxs)("div",{className:"relative "+e.className,children:[e.children,!t||!n&&(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center",children:e.hideLabel})," "]})};var ze=n(81154),Ke=n(50319),Je=n(12854),Ve=n(79592);const Xe=Je.fC,Ze=(Je.xz,Je.h_),Qe=(Je.x8,o.forwardRef(((e,t)=>{let{className:n,...o}=e;return(0,a.jsx)(Je.aV,{ref:t,className:_e("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...o})})));Qe.displayName=Je.aV.displayName;const et=o.forwardRef(((e,t)=>{let{className:n,children:o,...i}=e;return(0,a.jsxs)(Ze,{children:[(0,a.jsx)(Qe,{}),(0,a.jsxs)(Je.VY,{ref:t,className:_e("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",n),...i,children:[o,(0,a.jsxs)(Je.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(Ve.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}));et.displayName=Je.VY.displayName;const tt=e=>{let{className:t,...n}=e;return(0,a.jsx)("div",{className:_e("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};tt.displayName="DialogHeader";const nt=o.forwardRef(((e,t)=>{let{className:n,...o}=e;return(0,a.jsx)(Je.Dx,{ref:t,className:_e("text-lg font-semibold leading-none tracking-tight",n),...o})}));nt.displayName=Je.Dx.displayName;const ot=o.forwardRef(((e,t)=>{let{className:n,...o}=e;return(0,a.jsx)(Je.dk,{ref:t,className:_e("text-sm text-muted-foreground",n),...o})}));ot.displayName=Je.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,at=e=>{let{flow:t,blockImport:n}=e;const{client:i}=(0,ze.dB)(),[r,s]=(0,Ke.D)(it,{client:i}),[d,c]=(0,o.useState)(!1),m=async()=>{try{const n=(e=u(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:o,parentNode:i,data:{outstream:a,constream:r,instream:s,...d}}=e;return{outstream:a?.map((e=>e?e.filter(l).map(h):[]))||[[]],constream:r?.map((e=>e?e.filter(l).map(h):[]))||[[]],instream:s?.map((e=>e?e.filter(l).map(h):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:o||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:i,interface:d.interface}}})).filter(l)||[]||[]),o=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:o,target:i,targetHandle:a,type:r,data:s}=e;return{id:t,typename:r||"Fake type",source:n,sourceHandle:o||"returns",target:i,targetHandle:a||"args",stream:s?.stream.filter(l).map(h)||[]}}})).filter(l)||[])(p(t.graph.edges));let i={nodes:n.filter(l).map(h),edges:o.filter(l).map(h),globals:t.graph.globals.filter(l).map(h),args:t.graph.args.filter(l).map(h),returns:t.graph.returns.filter(l).map(h)};await r({variables:{name:t.name,graph:i}});c(!0)}catch(n){alert(n.message)}var e};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Xe,{open:d,onOpenChange:c,children:(0,a.jsx)(et,{children:(0,a.jsxs)(tt,{children:[(0,a.jsx)(nt,{children:"Succesfully imported workflow"}),(0,a.jsx)(ot,{children:"We have imported the workflow into Arkitekt. You can now use it in your flows."})]})})}),(0,a.jsx)("button",{onClick:()=>m(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer",children:"Re-Import into Arkitekt"})]})},rt=e=>(0,a.jsxs)("div",{className:"border border-1 rounded border-gray-800",children:[(0,a.jsx)("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative",children:(0,a.jsx)(He,{flow:e.flow})}),(0,a.jsx)(Ye,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow",children:(0,a.jsx)(ze.Ot,{children:(0,a.jsx)(at,{flow:e.flow,blockImport:e.blockImport})})})]})},75557:(e,t,n)=>{"use strict";n.p}}]);