(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3358],{70128:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/node-stream.1ee1637.640.png 640w,"+n.p+"assets/ideal-img/node-stream.01e5d8c.1320.png 1320w,"+n.p+"assets/ideal-img/node-stream.23f98d7.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/node-stream.1ee1637.640.png",width:640,height:414},{path:n.p+"assets/ideal-img/node-stream.01e5d8c.1320.png",width:1320,height:853},{path:n.p+"assets/ideal-img/node-stream.23f98d7.2000.png",width:2e3,height:1293}],src:n.p+"assets/ideal-img/node-stream.1ee1637.640.png",toString:function(){return n.p+"assets/ideal-img/node-stream.1ee1637.640.png"},placeholder:void 0,width:640,height:414},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVR4nGNI23SGy6T3YLDJ5BPZkTP3izAwMDAk964SWpVyJGF9zqnwzMOXBF3SOvgZLP2C7LQSG+5oZfb+NnYPzAMpdAhLt67x7ftU6d11z9jTN8cyqVieQVZMrFBDQ+u/moriF0VZmbMghSqKKqHKmpq/9A0Nv6grKTzi5uYWYwhtmeStndW7S6ti+Vmb5BJrkMIYywyx+TE7LrYGz97okFHk7lHWIcNgaOuUruHg+1nXL+67jr7hBJBCfW1j61jHzL9+lqEvVHV1F5t6hUowyMvKZqipKF9SkRU/qigntwKkUEZG3kNWWfqkgpL0MTkZuUMyMjJCAKSqTYAbkAs7AAAAAElFTkSuQmCC"}},61524:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>y,frontMatter:()=>m,metadata:()=>p,toc:()=>g});var a=n(85893),i=n(11151);const r=JSON.parse('{"__typename":"Flow","id":"54","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","position":{"__typename":"Position","x":352,"y":35},"typename":"ArkitektNode","parentNode":null,"hash":"f8031ef4200cdae6e7bd8f5f214d2428900488ee80f042336f55cb87e406ddcc","kind":"GENERATOR","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset to stream to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"regexp","label":"regexp","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"A regular expression to filter the files","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"indefinitely","label":"indefinitely","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Should we stream waiting for new files?. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream Files","description":"Streams files from a folder to Mikro","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","position":{"__typename":"Position","x":1045,"y":91},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","position":{"__typename":"Position","x":605,"y":63},"typename":"ArkitektNode","parentNode":null,"hash":"0abdf2faf07b0a322bd75e410a128fee96dabec2e9f74c3b07addaed949a211f","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"file","label":"file","identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The File to be converted","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The created series in this file","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"stage","label":"stage","identifier":"@mikro/stage","scope":"GLOBAL","kind":"STRUCTURE","description":"The Stage in which to put the Image. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_stages($search: String, $values: [ID]) {\\n  options: stages(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"era","label":"era","identifier":"@mikro/era","scope":"GLOBAL","kind":"STRUCTURE","description":"The Era in which to put the Image.. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchEras($search: String, $values: [ID]) {\\n  options: eras(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset in which to put the Image. Defaults to the file dataset.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_from_planes","label":"position_from_planes","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a position from the first planes (only if stage is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_from_time","label":"timepoint_from_time","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a timepoint from the first time (only if era is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channels_from_channels","label":"channels_from_channels","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a channel from the channels. Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_tolerance","label":"position_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the position. Defaults to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_tolerance","label":"timepoint_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the timepoint. Defaults  to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Convert Omero","description":"Converts an Omero File in a set of Mikrodata","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","position":{"__typename":"Position","x":840,"y":95},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of rep","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe created series in this file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","position":{"__typename":"Position","x":1244,"y":-48},"typename":"ArkitektNode","parentNode":null,"hash":"6aef2e0b4cfe28139854a42edf795346d1df5f822014c8901080728d4af875cd","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Max","description":"Measures the maxium value of an image","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ffarg_0","source":"1","sourceHandle":"return_0","target":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ffreturn_0-arkid-d983e818-030b-4160-8ab4-cee4107a880carg_0","source":"arkid-c293afb3-cfd8-4fa2-95d8-e9ba299126ff","sourceHandle":"return_0","target":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/omerofile","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-d983e818-030b-4160-8ab4-cee4107a880creturn_0-reactive-729ad2c6-295c-4d54-a378-33fb26b77aadarg_0","source":"arkid-d983e818-030b-4160-8ab4-cee4107a880c","sourceHandle":"return_0","target":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-729ad2c6-295c-4d54-a378-33fb26b77aadreturn_0-arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2darg_0","source":"reactive-729ad2c6-295c-4d54-a378-33fb26b77aad","sourceHandle":"return_0","target":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2dreturn_0-arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8arg_0","source":"arkid-3b749bcb-2acd-408c-bce4-3ba8c911bb2d","sourceHandle":"return_0","target":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8return_0-2arg_0","source":"arkid-1268bd12-ed7c-41fa-b99d-13cc6cb055c8","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[],"args":[],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"Live Analysis","screenshot":null,"createdAt":"2023-11-07T12:25:11.832245+00:00","workspace":{"__typename":"Workspace","id":"34"}}');n(68648);var s=n(21262),l=n(15944),o=n(70128),d=n.n(o),c=(n(73266),n(71698));const m={title:"Live Analysis",sidebar_label:"Live Analysis",sidebar_position:4},u="Live (Streaming) Analysis",p={id:"introduction/advanced_tutorial/live_analysis",title:"Live Analysis",description:"With Arkitekt we wanted to provide new ways of performing and scheduling our analysis. Today analysis is often done in",source:"@site/docs/introduction/advanced_tutorial/live_analysis.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/live_analysis",permalink:"/docs/introduction/advanced_tutorial/live_analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/live_analysis.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Live Analysis",sidebar_label:"Live Analysis",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Train a Deep Learning Model",permalink:"/docs/introduction/advanced_tutorial/training"},next:{title:"Services",permalink:"/docs/category/services"}},h={},g=[{value:"Why Streaming Analysis?",id:"why-streaming-analysis",level:3},{value:"Streaming Analysis in Arkitekt",id:"streaming-analysis-in-arkitekt",level:3},{value:"Stream Nodes",id:"stream-nodes",level:3},{value:"Lets not imaging, lets do it!",id:"lets-not-imaging-lets-do-it",level:3},{value:"Other Requirements",id:"other-requirements",level:3}];function f(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"live-streaming-analysis",children:"Live (Streaming) Analysis"}),"\n",(0,a.jsx)(t.p,{children:"With Arkitekt we wanted to provide new ways of performing and scheduling our analysis. Today analysis is often done in\nbatch mode, where we run scripts and tools are run on a set of images a long time after the initial production. This is such a common approach that\nmost of the tools we use are designed around this workflow. However, this is not the only way to do analysis, and in many\ncases, you might (need to) consider doing analysis in a live mode, where your results are generated as your images are acquired, in\na continous stream-like fashion."}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial we will show you how to build a ",(0,a.jsx)(t.a,{href:"/docs/design/real-time",children:"Streaming Analysis Workflow"})," in Arkitekt, and how to run it on live data.\nThis tutorial will cover:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Why streaming analysis?"}),"\n",(0,a.jsx)(t.li,{children:"How we model Streaming Analysis in Arkitekt (Generator Nodes)"}),"\n",(0,a.jsx)(t.li,{children:"Constructing a streaming analysis workflow"}),"\n",(0,a.jsx)(t.li,{children:"Challenges of streaming analysis"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"why-streaming-analysis",children:"Why Streaming Analysis?"}),"\n",(0,a.jsx)(t.p,{children:"There are manifold reasons why you might want to consider doing live analysis. Here are some of the most common ones:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Real-Time Monitoring"}),": For live cell imaging where immediate feedback is necessary, such as adjusting experimental conditions based on cell behavior, streaming analysis is crucial."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"High-Content Screening"}),": In high-throughput assays, streaming analysis can quickly identify hits or interesting events, which may be critical in pharmaceutical research."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Adaptive Experiments"}),": Streaming analysis allows researchers to modify experiments on the fly in response to the data being collected, which can be advantageous for exploratory research or complex biological systems."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"streaming-analysis-in-arkitekt",children:"Streaming Analysis in Arkitekt"}),"\n",(0,a.jsxs)(t.p,{children:["Arkitekt was conceptualized and specifically build around the idea of ",(0,a.jsx)(t.a,{href:"/docs/design/real-time",children:"Streaming Analysis"}),". We wanted to make it easy to build analysis workflows that can\nbe adapted from batch to streaming analysis. To do this, we needed to make sure that the analysis workflows are compatible  and manageable in both modes, and that the platform can handle the multifold challenges of streaming analysis."]}),"\n",(0,a.jsxs)(t.p,{children:["Inherently when you build a workflow in Arkitekt you ",(0,a.jsx)(t.em,{children:"always"})," build a streaming analysis workflow. Just a very simple one, where the real-time functionality does not matter. In a basic workflow\nthat just pipes images from one node to the next, the data will still stream through the workflow and the results will be generated as the images are processed.\nHowever Workflows can be designed to take advantage of the streaming nature of the data, and to do this we need to understand how Arkitekt handles streaming data."]}),"\n",(0,a.jsx)(t.h3,{id:"stream-nodes",children:"Stream Nodes"}),"\n",(0,a.jsxs)(t.p,{children:["As discussed in the first steps tutorial, Arkitekt is build around the concept of nodes, that define a procedure that can happen on a specific item, and are defined by their input and outputs.\nSo far we  got to know ",(0,a.jsx)(t.code,{children:"Functional Nodes"}),", that get their name from programming function that take item(s) and return item(s) ",(0,a.jsx)(t.em,{children:"once"}),". There is however another type of node, that is called a ",(0,a.jsx)(t.code,{children:"Stream Node"})," or ",(0,a.jsx)(t.code,{children:"Generator Node"}),",\nand which is a node that can take an item and returns (yields) item(s) ",(0,a.jsx)(t.em,{children:"multiple times"})," and importantly ",(0,a.jsx)(t.strong,{children:"over time"})]}),"\n",(0,a.jsx)(l.Z,{img:d()}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" Functional Nodes vs Stream Nodes also with their programming equivalent"})}),"\n",(0,a.jsxs)(t.p,{children:["This means when a stream node is called within a workflow, it will return a stream of items, ",(0,a.jsx)(t.strong,{children:"each of which"})," will be processed by the next node in the workflow, at the time they are generated.\nImaging a workflow that runs a timeseries on the microscope, and once started will pipe the images directly to the analysis node, which will then generate results for each image as it is acquired."]}),"\n",(0,a.jsx)(t.h3,{id:"lets-not-imaging-lets-do-it",children:"Lets not imaging, lets do it!"}),"\n",(0,a.jsx)(t.p,{children:"Well, lets do exactly that. For this tutorial we will use a simple workflow that takes images that are put into a folder  and then pipes them through a small analysis\npipeline. This pipeline will for now just consist of a simple segmentation and a measurement of the area of the segmented objects. We will use the same deep learning\nnode that we know from our Deep Learning tutorial."}),"\n",(0,a.jsxs)(t.p,{children:["But first things first, how to we get the images into the workflow? And especially how to we get them of the microscope, onto our analysis machine? Well, there is an App\nfor that. ",(0,a.jsx)(t.a,{href:"/docs/apps/gucker",children:(0,a.jsx)(t.strong,{children:"Gucker"})})," is a simple app that watches a folder and then puts any images that are put into that folder into the workflow. So lets install it\nand get started."]}),"\n",(0,a.jsx)(t.h3,{id:"other-requirements",children:"Other Requirements"}),"\n",(0,a.jsxs)(t.p,{children:["If you followed both the ",(0,a.jsx)(t.a,{href:"/docs/introduction/advanced_tutorial/deep-learning",children:"Deep Learning"})," and the ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps/interface",children:"First Steps"})," tutorial,\nyou should have all the requirements installed. If not, please install the following:"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)(c.I,{repo:"omero",user:"jhnnsrs",branch:"master"}),(0,a.jsx)(c.I,{repo:"reaktor",user:"jhnnsrs",branch:"master"}),(0,a.jsx)(c.I,{repo:"segmentor",user:"jhnnsrs",branch:"master"})]}),"\n",(0,a.jsx)(t.p,{children:"Of course you can also use any other node that you have installed, but for this tutorial we will construct the following\nworkflow:"}),"\n",(0,a.jsx)(s.n,{flow:r}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsxs)("small",{children:[" ",(0,a.jsxs)(t.p,{children:["This is the workflow we would like to create. Stream our Files, Convert them to Images,\nSegment them and Measure them."," "]})]})})]})}function y(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>c});var a=n(37887),i=n(69819),r=n(31230),s=(n(67294),n(85893));const l=r.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,o=r.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",c=(0,i.Zh)((e=>{let{branch:t,repo:n,user:r}=e;const{client:c}=(0,i.AA)(),m=`${r}/${n}:${t}`,{data:u,refetch:p}=(0,a.a)(o,{client:c,variables:{tag:m},pollInterval:3e3});return(0,s.jsx)(s.Fragment,{children:u?.githubRepo?(0,s.jsxs)("button",{className:d+"bg-green-300",children:[" \u2705 ",m]}):(0,s.jsxs)("button",{onClick:async()=>{try{const{data:e}=await c.mutate({mutation:l,variables:{branch:t,repo:n,user:r}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",m]})})}),(0,s.jsx)("div",{className:d+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},21262:(e,t,n)=>{"use strict";n.d(t,{n:()=>st});var a=n(67294),i=n(98268),r=(n(49263),n(85893));const s=e=>console.log("flow loaded:",e),l=e=>{let{edgeTypes:t,nodeTypes:n,nodes:a,edges:l,children:o,...d}=e;return(0,r.jsx)(i.tV,{children:(0,r.jsx)(i.x$,{nodes:a,edges:l,onInit:s,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right",...d,children:o})})};function o(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,c=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function m(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(c,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const u=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...i}=e;return{type:a,id:t,position:n,data:{__typename:a,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(o)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,__typename:s,...l}=e;return{id:t,type:s,source:n,sourceHandle:a,target:i,targetHandle:r,data:{__typename:s,...l}}}})).filter(o)||[],h=a.createContext({}),g=()=>(0,a.useContext)(h);var f=n(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),b=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const k=f.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,x=(f.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${k}
`,f.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),_=f.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,w=f.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${k}
  ${x}
  ${_}
`,v=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${w}
`,$=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${w}
`,N=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${v}
  ${$}
  ${k}
`,L=f.Ps`
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
  ${L}
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
  ${L}
`,j=f.Ps`
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
  ${L}
`,A=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,T=f.Ps`
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
  ${A}
`,W=f.Ps`
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
`,C=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,D=f.Ps`
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
  ${C}
`,I=f.Ps`
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
  ${C}
  ${D}
`,E=f.Ps`
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
  ${C}
  ${I}
`,F=f.Ps`
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
  ${E}
`,O=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,U=f.Ps`
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
  ${F}
  ${O}
`,B=f.Ps`
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
  ${F}
  ${O}
`,q=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${F}
`,G=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,H=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,M=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,z=f.Ps`
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
  ${F}
  ${O}
`,Y=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
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
  ${U}
  ${B}
  ${q}
  ${G}
  ${H}
  ${M}
  ${z}
  ${Y}
`,V=f.Ps`
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
`,Z=f.Ps`
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
  ${V}
`,X=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${Z}
`,J=f.Ps`
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
  ${J}
  ${Q}
`,te=f.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${E}
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
  ${E}
`,ae=f.Ps`
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
  ${A}
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
`,re=f.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,se=f.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${re}
`,le=f.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${ne}
`,oe=(f.Ps`
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
  ${E}
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
`,me=f.Ps`
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
`,he=f.Ps`
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
  ${le}
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
  ${le}
`;f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${le}
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
  ${j}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${W}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${T}
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
  ${ae}
`;f.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${A}
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
  ${le}
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
  ${se}
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
  ${se}
`;f.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${se}
`;f.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${re}
`;f.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${me}
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
  ${he}
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
  ${he}
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
  ${he}
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
  ${se}
`;f.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${oe}
`;f.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${oe}
`;f.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${oe}
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
  ${A}
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
`;const ge=e=>{const{}=g(),{id:t,sourcePosition:n,targetPosition:a,sourceX:s,sourceY:l,targetX:o,targetY:d,style:c,markerStart:m,markerEnd:u,data:p}=e,[h,f,y]=(0,i.OW)({sourcePosition:n,targetPosition:a,sourceX:s,sourceY:l,targetX:o,targetY:d});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{id:t,style:c,className:"react-flow__edge-path",d:h}),(0,r.jsx)(i.XQ,{children:(0,r.jsx)("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex ",children:p?.stream.map(((e,t)=>(0,r.jsx)("span",{className:"text-xs",children:(e?.kind==b.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")},t)))})})]})};var fe=n(1706);const ye=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),be=e=>{let{id:t,children:n,expandedHeight:i=200,expandedWidth:s=400,collapsedWidth:l=170,collapsedHeight:o=70}=e;const[d,c]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:l,height:o});return(0,r.jsx)(fe.Resizable,{height:d.height,width:d.width,onResize:(e,t)=>{let{size:n,handle:a}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40],children:(0,r.jsx)(ye.Provider,{value:{...d,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?l:s,height:e.isExpanded?o:i})))}},children:(0,r.jsx)("div",{style:{width:d.width+"px",height:d.height+"px"},className:"flex flex-col",children:n})})},t)},ke=e=>t=>(0,r.jsx)(be,{id:t.id,children:(0,r.jsx)(e,{...t})}),xe={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},_e=e=>{let{children:t,id:n,color:i="white"}=e;const[s,l]=a.useState(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${xe[i]}`,children:t})})};var we=n(55770),ve=n(86419),$e=n(90512),Ne=n(57851);function Le(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,Ne.m)((0,$e.W)(t))}const Pe=ve.fC,Se=ve.xz,je=a.forwardRef(((e,t)=>{let{className:n,align:a="center",sideOffset:i=4,...s}=e;return(0,r.jsx)(ve.h_,{children:(0,r.jsx)(ve.VY,{ref:t,align:a,sideOffset:i,className:Le("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...s})})}));je.displayName=ve.VY.displayName;const Ae=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Te=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),We=(e,t,n)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,n)))),Re=e=>{const{data:t,error:n,loading:a}=(0,we.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Ae,{}),(0,r.jsxs)("div",{className:"text-yellow-500 my-auto",children:[" ",e.name," "]})]}):(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Te,{}),(0,r.jsxs)("div",{className:"text-green-500 my-auto",children:[" ",t?.node?.name," "]})]})})},Ce=e=>{const{flow:t}=g(),n=e.data.defaults&&Object.keys(e.data.defaults).filter((n=>e.data.defaults[n]&&null!=e.data.defaults[n]&&0!=e.data.defaults[n]||We(t,e.id,n)))||[];return(0,r.jsxs)(Pe,{children:[(0,r.jsx)(Se,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full ",children:(0,r.jsx)(we.Z6,{fallback:(0,r.jsxs)(r.Fragment,{children:[" ",e.data?.name]}),children:(0,r.jsx)(Re,{hash:e.data.hash,name:e.data.name})})}),(0,r.jsxs)(je,{className:"text-xs bg-back-800 my-auto  ",children:[" ",e.data?.description,n&&n.length>0&&(0,r.jsxs)("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3",children:[(0,r.jsx)("div",{className:"font-semibold text-md mb-2",children:"Constants "}),(0,r.jsx)("div",{className:"flex flex-row gap-2 text-white",children:(0,r.jsx)("div",{className:"flex grid grid-cols-2 gap-2",children:n.map((n=>{const a=We(t,e.id,n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:" my-auto",children:[" ",n," "]}),a?(0,r.jsxs)("div",{className:"text-primary-300",children:[" ",(0,r.jsx)("div",{className:"font-bold inline",children:"Global "}),a.port.key," "]}):(0,r.jsxs)("div",{className:"my-auto",children:[" ",e.data.defaults[n]," "]})]})}))})})]})]})]})},De=ke((e=>{const{isExpanded:t,toggleExpanded:n}=(0,a.useContext)(ye);return(0,r.jsxs)(_e,{id:e.id,children:[e.data.instream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),(0,r.jsx)("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden ",children:(0,r.jsx)(Ce,{...e})})]})})),Ie=ke((e=>{let{data:{outstream:t,instream:n},id:s}=e;const[l,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_e,{color:"blue",id:s,children:(0,r.jsx)("div",{className:"px-2 py-2",children:(0,r.jsxs)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:["Inputs"," "]})})}),t.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+s})))]})}));var Ee=n(63750);const Fe=ke((e=>{let{data:{constream:t},id:n}=e;const[i,s]=(0,a.useState)(!1),[l,o]=(0,a.useState)(!0);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(_e,{color:"green",id:n,children:[!l&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex",children:t?.map(((e,t)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n,children:(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsx)("button",{type:"button",onClick:()=>alert("implement"),children:(0,r.jsx)(Ee.yvY,{})})})},t)})))})}),(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsxs)("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>o(!l),children:["Constants"," "]}),(0,r.jsx)("p",{className:"text-gray-700 text-base"})]})]})})})),Oe=ke((e=>{let{data:{outstream:t,instream:n},id:s}=e;const[l,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_e,{color:"red",id:s,children:(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsx)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:"Outputs"}),(0,r.jsxs)("p",{className:"text-gray-700 text-base",children:[(0,r.jsxs)(r.Fragment,{children:[n[0]?.map((e=>e?.kind)).join(" | "),(0,r.jsx)("br",{})]}),!d&&(0,r.jsx)("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>o(!0),children:"Add Documentation"})]})]})}),n.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}})))]})})),Ue="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Be={ArkitektNode:De,ArkitektFilterNode:De,LocalNode:De,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:s,implementation:l,defaults:o},id:d}=e;const c=(0,i.Bn)();return(0,a.useEffect)((()=>{console.log("Update node internals",d,l),c(d)}),[t,n,s]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"custom-drag-handle text-xs ",children:[l&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(l)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),l&&[y.Gate].includes(l)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})}),l&&[y.Split].includes(l)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),l&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(l)&&(0,r.jsxs)("div",{className:Ue,children:[l," ",o?.number&&(0,r.jsx)("b",{className:"font-bold",children:o.number})]}),l&&[y.Ensure].includes(l)&&(0,r.jsx)("div",{className:Ue,children:(0,r.jsx)("h1",{children:"!"})}),l&&[y.ToList].includes(l)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),(0,r.jsx)("text",{children:l})]}),l&&[y.Omit].includes(l)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"},children:l})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})]}),l&&[y.If].includes(l)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"If"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),l&&[y.And].includes(l)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"And"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),s?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,style:{background:"#555",marginTop:10,height:"1em"}},t))),n?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}},t))),t?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}},t)))]})})},ArgNode:Ie,ReturnNode:Oe,KwargNode:Fe,GraphNode:()=>null},qe={LabeledEdge:ge,FancyEdge:ge},Ge=e=>{let{flow:t}=e;const[n,a,s]=(0,i.Rr)(u(t.graph?.nodes)),[o,d,c]=(0,i.ll)(p(t.graph?.edges));return(0,r.jsx)(h.Provider,{value:{flow:t},children:(0,r.jsx)(l,{nodes:n,edges:o,onNodesChange:s,onEdgesChange:c,elementsSelectable:!0,nodeTypes:Be,edgeTypes:qe,fitView:!0,attributionPosition:"bottom-right"})})};var He=n(89423),Me=n(39903);const ze=e=>{const{user:t}=(0,He.gX)(),{fakts:n}=(0,Me.sT)();return(0,r.jsxs)("div",{className:"relative "+e.className,children:[e.children,!t||!n&&(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center",children:e.hideLabel})," "]})};var Ye=n(81154),Ke=n(50319),Ve=n(12854),Ze=n(79592);const Xe=Ve.fC,Je=(Ve.xz,Ve.h_),Qe=(Ve.x8,a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.aV,{ref:t,className:Le("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a})})));Qe.displayName=Ve.aV.displayName;const et=a.forwardRef(((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(Je,{children:[(0,r.jsx)(Qe,{}),(0,r.jsxs)(Ve.VY,{ref:t,className:Le("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",n),...i,children:[a,(0,r.jsxs)(Ve.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(Ze.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}));et.displayName=Ve.VY.displayName;const tt=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:Le("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};tt.displayName="DialogHeader";const nt=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.Dx,{ref:t,className:Le("text-lg font-semibold leading-none tracking-tight",n),...a})}));nt.displayName=Ve.Dx.displayName;const at=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.dk,{ref:t,className:Le("text-sm text-muted-foreground",n),...a})}));at.displayName=Ve.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rt=e=>{let{flow:t,blockImport:n}=e;const{client:i}=(0,Ye.dB)(),[s,l]=(0,Ke.D)(it,{client:i}),[d,c]=(0,a.useState)(!1),h=async()=>{try{const n=(e=u(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:a,parentNode:i,data:{outstream:r,constream:s,instream:l,...d}}=e;return{outstream:r?.map((e=>e?e.filter(o).map(m):[]))||[[]],constream:s?.map((e=>e?e.filter(o).map(m):[]))||[[]],instream:l?.map((e=>e?e.filter(o).map(m):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:a||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:i,interface:d.interface}}})).filter(o)||[]||[]),a=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,type:s,data:l}=e;return{id:t,typename:s||"Fake type",source:n,sourceHandle:a||"returns",target:i,targetHandle:r||"args",stream:l?.stream.filter(o).map(m)||[]}}})).filter(o)||[])(p(t.graph.edges));let i={nodes:n.filter(o).map(m),edges:a.filter(o).map(m),globals:t.graph.globals.filter(o).map(m),args:t.graph.args.filter(o).map(m),returns:t.graph.returns.filter(o).map(m)};await s({variables:{name:t.name,graph:i}});c(!0)}catch(n){alert(n.message)}var e};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Xe,{open:d,onOpenChange:c,children:(0,r.jsx)(et,{children:(0,r.jsxs)(tt,{children:[(0,r.jsx)(nt,{children:"Succesfully imported workflow"}),(0,r.jsx)(at,{children:"We have imported the workflow into Arkitekt. You can now use it in your flows."})]})})}),(0,r.jsx)("button",{onClick:()=>h(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer",children:"Re-Import into Arkitekt"})]})},st=e=>(0,r.jsxs)("div",{className:"border border-1 rounded border-gray-800",children:[(0,r.jsx)("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative",children:(0,r.jsx)(Ge,{flow:e.flow})}),(0,r.jsx)(ze,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow",children:(0,r.jsx)(Ye.Ot,{children:(0,r.jsx)(rt,{flow:e.flow,blockImport:e.blockImport})})})]})},73266:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/medias/fiji_segmentation-36956e47929d30213356456ff3c0b1e3.webm"},68648:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);