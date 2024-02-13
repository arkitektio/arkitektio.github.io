(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1635],{86515:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/interactive.5ae68f1.640.png 640w,"+n.p+"assets/ideal-img/interactive.44c5422.1320.png 1320w,"+n.p+"assets/ideal-img/interactive.172b860.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/interactive.5ae68f1.640.png",width:640,height:460},{path:n.p+"assets/ideal-img/interactive.44c5422.1320.png",width:1320,height:949},{path:n.p+"assets/ideal-img/interactive.172b860.2000.png",width:2e3,height:1438}],src:n.p+"assets/ideal-img/interactive.5ae68f1.640.png",toString:function(){return n.p+"assets/ideal-img/interactive.5ae68f1.640.png"},placeholder:void 0,width:640,height:460},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJklEQVR4nGNgQAL//zMwgug043ouF67kN/4yOVmqiVPMld2aZRnM7ZyL7DX8a93lYypzzPIXFHqV1h09dnR+X1bdsc3zlqxPrpz1ySG2w53B2sPnfb7hpP+T1A7+6zXc9X9S6Pq/R87siwaZbDvtuvu2nes3rJyztIpBVd/wdYZm579peqd+9Ksf/V8luWwfSNGq0P/MEt2ftCbMO6Ca4VP9gUFeXeNdpkb3/+kaZ/9ODdj2f0LeoutmHip89fX/mRgkZ3J19q7x2rl5wzIGNR3Do5aKXjcsOP0vz5u+8MODZ3f+r1+3fuGNs+dj1u88OTc2bcLTwJCmFIbQ0FDm0g1JvAwMDKyzp8/O2T1v/cpD67dkrb9y5c6qC+eubFvcHbJkSpI8AMc3gNsuGSVIAAAAAElFTkSuQmCC"}},53506:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>k,frontMatter:()=>p,metadata:()=>g,toc:()=>y});var a=n(85893),i=n(11151),r=(n(27859),n(15944)),l=n(86515),s=n.n(l),o=(n(33346),n(21262)),d=n(71698),c=n(88545);n(97120),n(67294);n(33850);const u=JSON.parse('{"__typename":"Flow","id":"37","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1496,"y":55},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","position":{"__typename":"Position","x":240,"y":-3},"typename":"ArkitektNode","parentNode":null,"hash":"da4e74c9f67d7ffc8855087ebb6268ce996c58df4a7050066bed4269fbe5c9b0","kind":"GENERATOR","defaults":{"rep":null,"show_old_rois":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"rois (List[RoiFragment]): The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"show_old_rois","label":"show_old_rois","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Show already marked rois. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream ROIs","description":"Asks the user to mark rois on the image, once user deams done, the rois are returned","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","position":{"__typename":"Position","x":494,"y":-81},"typename":"ArkitektNode","parentNode":null,"hash":"26dbfdcb8b5f98b157a960bcf6fe3085acee863931ce7a5e05b48adbbf897824","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":"roi","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"The Omero File","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation to be cropped. Defaults to the one of the ROI.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Crop Image","description":"Crops an Image based on a ROI","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","position":{"__typename":"Position","x":770,"y":-172},"typename":"ArkitektNode","parentNode":null,"hash":"0441be4d576765367c37786d2ef743f33865d4a4f146ad100e0c04d5283edb0e","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"representation","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The predicted images","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Predict Care","description":"Use a care model and some images to generate images","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","position":{"__typename":"Position","x":545,"y":151},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","position":{"__typename":"Position","x":971,"y":200},"typename":"ArkitektNode","parentNode":null,"hash":"79e5ee236b35dc83dd7b972d7cd8445face31a26beff022e6a0c6b1c0be1fa6f","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":"image","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"The analyzed particle table","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of the particles (default: 0)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of the particles (default: None)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"min_circularity","label":"min_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The minimum circularity of the particles (default: 0.0)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_circularity","label":"max_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The maximum circularity of the particles (default: 1.0)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Analyze Particles","description":"Analyzes particles in an image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","position":{"__typename":"Position","x":769,"y":70},"typename":"ArkitektNode","parentNode":null,"hash":"57d45410523b5fc52e33a89c2ae0174666ef7afefe2028df1e16649a750bf0a4","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to be thresholded","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The thresholded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"gaussian_blur","label":"gaussian_blur","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to apply a gaussian blur before thresholding (kernel_size=5)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Otsu Thresholding","description":"Binarizes the image based on a threshold, using Otsu\'s method\\nwith option to guassian blur the image before, images are normalized\\nfor each x,y slice before thresholding.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","position":{"__typename":"Position","x":1237,"y":37},"typename":"ArkitektNode","parentNode":null,"hash":"e4ca5250ef61b70fa987f45c142be459fa1b626df7b539b14153b2fa236784d1","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"table","label":"table","identifier":"@mikro/table","scope":"GLOBAL","kind":"STRUCTURE","description":"Table to open","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_tables($search: String, $values: [ID]) {\\n  options: tables(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Open Table in Sidebar","description":"Opens the table in an accessible sidebar widget.","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-2aead44b-cb77-4fff-8311-e98f6135dc13arg_0","source":"1","sourceHandle":"return_0","target":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-2aead44b-cb77-4fff-8311-e98f6135dc13return_0-arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4arg_0","source":"arkid-2aead44b-cb77-4fff-8311-e98f6135dc13","sourceHandle":"return_0","target":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4return_0-arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29arg_0","source":"arkid-2c5e7786-e6a1-45e3-9881-72e082490ca4","sourceHandle":"return_0","target":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29return_0-arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285arg_0","source":"arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29","sourceHandle":"return_0","target":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285return_0-arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7arg_0","source":"arkid-a11e3cc0-cb2b-46ff-9f4a-37c0b2e7c285","sourceHandle":"return_0","target":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7return_0-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37arg_0","source":"arkid-91167ee9-52f4-4c00-8652-c6243c2b9bf7","sourceHandle":"return_0","target":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-15344e96-8c52-4e5a-812a-81ffead8dc37return_0-arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88arg_0","source":"arkid-15344e96-8c52-4e5a-812a-81ffead8dc37","sourceHandle":"return_0","target":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/table","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88return_0-2arg_0","source":"arkid-1bab2614-55a4-43e1-bec0-6626c7f99d88","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[{"__typename":"Global","toKeys":["arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29.model"],"port":{"__typename":"Port","key":"model","label":"model","identifier":"@mikro/model","scope":"GLOBAL","kind":"STRUCTURE","description":"The model (maps to arkid-8b1b9409-a3bd-49f6-ad6e-c711397ecf29.model)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_models($search: String, $values: [ID]) {\\n  options: models(name: $search, limit: 20, ids: $values) {\\n    label: name\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of the particles (default: 0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of the particles (default: None) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_circularity"],"port":{"__typename":"Port","key":"min_circularity","label":"min_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The minimum circularity of the particles (default: 0.0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.min_circularity)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_circularity"],"port":{"__typename":"Port","key":"max_circularity","label":"max_circularity","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The maximum circularity of the particles (default: 1.0) (maps to arkid-15344e96-8c52-4e5a-812a-81ffead8dc37.max_circularity)","assignWidget":{"__typename":"Widget","kind":"SliderWidget","query":null,"hook":null,"ward":null,"min":0,"step":0.1,"placeholder":null,"max":1,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],"returns":[]},"restrict":[],"name":"Interactive Analysis","screenshot":null,"createdAt":"2023-10-28T15:10:19.503243+00:00","workspace":{"__typename":"Workspace","id":"24"}}'),m=n.p+"assets/files/test-f768396e8fcb14511bc32fbe99bccdbb.zip",p={title:"Interactive Workflow",sidebar_label:"Interactive Workflow",sidebar_position:2},h=void 0,g={id:"showcases/paper/interactive_workflow",title:"Interactive Workflow",description:"The following workflow and online showcase is an example of how arkitekt enables an interactive workflow, spanning multiple bioimage apps and deep learning enabled",source:"@site/docs/showcases/paper/interactive_workflow.mdx",sourceDirName:"showcases/paper",slug:"/showcases/paper/interactive_workflow",permalink:"/docs/showcases/paper/interactive_workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/showcases/paper/interactive_workflow.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Interactive Workflow",sidebar_label:"Interactive Workflow",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Paper",permalink:"/docs/showcases/paper/"},next:{title:"Streaming Analysis",permalink:"/docs/showcases/paper/streaming_workflow"}},f={},y=[{value:"Why?",id:"why",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Napari",id:"napari",level:4},{value:"Kare Denoising",id:"kare-denoising",level:4},{value:"Fiji",id:"fiji",level:4},{value:"MikroJ",id:"mikroj",level:4},{value:"Data Preparation",id:"data-preparation",level:2},{value:"Model Preparation",id:"model-preparation",level:2},{value:"The Workflow",id:"the-workflow",level:2},{value:"Running the Workflow",id:"running-the-workflow",level:2}];function b(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The following workflow and online showcase is an example of how arkitekt enables an interactive workflow, spanning multiple bioimage apps and deep learning enabled\ndenoising. With this workflow we would like to demonstrate that by leveraging a tight and timely interaction between the apps, users can get immediate\nfeedback on the results of their actions."}),"\n",(0,a.jsx)(t.p,{children:"Here we set out to use Arkitekt to build a workflow that allows users to interactively denoise and segment cells in regions of interest in a 3D image.\nThe workflow is composed of three apps:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Napari"})," a python based 3D volume viewer that will allow the users to interactively annotate regions of interest in an image, while eeasily exploring\nthe 3D volume, as well as the app that will be used to display the results of the workflow."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Care Denoising"}),", a deep learning based denoising app that will be used to denoise the regions of interest selected by the user in Napari."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Fiji"}),' (ImageJ), and its "Analyze Particles" plugin, that will be used to segment the denoised regions of interest.']}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)("div",{className:"mt-2 p-6",children:[(0,a.jsx)(r.Z,{img:s()}),(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:"The interactive workflow with loopback analytical insight "})})]}),"\n",(0,a.jsx)(t.h2,{id:"why",children:"Why?"}),"\n",(0,a.jsx)(t.p,{children:"The main motivation for showcasing this workflow, is the core believe that interactive workflows are a key component of the current and future bioimage analysis\nlandscape. We believe that the ability to interactively explore and annotate data, and to get immediate feedback on the results of the analysis, is a key necessity\nfor the current analysis where human insight is determing where we look for when analysis our data. And while automation will continue to grow in importance,\nwe believe that the human in the loop will, continue to play a key component of the analtical process."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.p,{children:["Well lets jump right in and see how we can run this workflow. You could of course build this workflow from scratch, but we have already done that for you, and\nyou can easily import it into your arkitekt instance. To do so, please ",(0,a.jsx)(t.a,{href:"/docs/apps/",children:"connect"}),' this website to your arkitekt instance and then simply click on the "import" button below,\nwhich will import it directly into your arkitekt instance.']}),"\n",(0,a.jsx)(t.p,{children:"If you havent installed any of the apps yet, your Arkitekt instance will tell you that you are missing some apps implementing the nodes. So of course make sure you\ninstall the apps that are missing. In this case you will need to install the following apps:"}),"\n",(0,a.jsx)(t.h4,{id:"napari",children:(0,a.jsx)(t.a,{href:"https://napari.org/stable/",children:"Napari"})}),"\n",(0,a.jsxs)(t.p,{children:["With the mikro-napari plugin, which you can install easily via the napari plugin manager.\nor via the command line with ",(0,a.jsx)(t.code,{children:"pip install mikro-napari"})]}),"\n",(0,a.jsx)(t.h4,{id:"kare-denoising",children:(0,a.jsx)(t.a,{href:"https://github.com/jhnnsrs/kare",children:"Kare Denoising"})}),"\n",(0,a.jsx)(t.p,{children:"An Arkitekt plugin that allows you to denoise images using deep learning. You can install it through the PluginStore or when connected, by clicking on the button below."}),"\n",(0,a.jsx)(d.I,{repo:"kare",user:"jhnnsrs",branch:"master"}),"\n",(0,a.jsx)(t.h4,{id:"fiji",children:(0,a.jsx)(t.a,{href:"https://imagej.net/Fiji",children:"Fiji"})}),"\n",(0,a.jsx)(t.p,{children:'A ImageJ instance with the "Analyze Particles" plugin installed (comes preinstalled with Fiji)'}),"\n",(0,a.jsx)(t.h4,{id:"mikroj",children:(0,a.jsx)(t.a,{href:"https://github.com/jhnnsrs/mikroj",children:"MikroJ"})}),"\n",(0,a.jsx)(t.p,{children:"The Arkitekt enabled FIJI wrapper app that allows your Fiji instance to be connected to Arkitekt. Please install\nthe latest version of MikroJ."}),"\n",(0,a.jsx)(t.h2,{id:"data-preparation",children:"Data Preparation"}),"\n",(0,a.jsxs)(t.p,{children:["This workflow was designed to work with the ",(0,a.jsx)(t.a,{href:"https://publications.mpi-cbg.de/publications-sites/7207/",children:"Tribolium"})," Dataset. However the examplary data used in this\nworkflow is only on noisy stack of the Tribolium dataset, which you can download ",(0,a.jsx)(t.a,{target:"_blank",href:n(91574).Z+"",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The Image Data was converted through the ",(0,a.jsx)(t.code,{children:"Convert Omero"})," Node provided by"]}),"\n",(0,a.jsx)(d.I,{repo:"omero",user:"jhnnsrs",branch:"master"}),"\n",(0,a.jsx)(t.h2,{id:"model-preparation",children:"Model Preparation"}),"\n",(0,a.jsx)(t.p,{children:"For this workflow you can either use a pretrained model, or train your own model. If you want to train your own model, you can follow the instructions in the\nDeep Learning Training Tutorial to train your own model. If you want to use a pretrained model, you can upload the pretrained model directly from the link below."}),"\n",(0,a.jsx)(c.x,{url:m,name:"Tribolium Model",kind:"TENSORFLOW"}),"\n",(0,a.jsxs)(t.p,{children:["This model was trained on ",(0,a.jsx)(t.a,{target:"_blank",href:n(15094).Z+"",children:"this dataset here"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"the-workflow",children:"The Workflow"}),"\n",(0,a.jsx)(t.p,{children:"Once you have installed all the apps, you can simply import the workflow by connecting your arkitekt instance and clicking on the button below."}),"\n",(0,a.jsx)(o.n,{flow:u}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:(0,a.jsx)(t.p,{children:"Once connected this pane will also give you an overview over the apps that\nstill need to be installed, nodes in green have been installed, nodes in\nyellow still lack an implementation. Of course feel free to explore this\ngraph more interactively in your orkestrator interface"})})}),"\n",(0,a.jsx)(t.h2,{id:"running-the-workflow",children:"Running the Workflow"}),"\n",(0,a.jsx)(t.p,{children:"For the execution of the Workflow you will need to start the following apps:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Napari"}),"\n",(0,a.jsx)(t.li,{children:"Kare Denoising (through deployment of the kare plugin)"}),"\n",(0,a.jsx)(t.li,{children:"Fiji (through MikroJ)"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Once you have started all the apps, you can run the workflow directly from an image uploaded to your arkitekt instance. To do so, simply\nstart the workflow and select the image the converted you want to run the workflow on."}),"\n",(0,a.jsxs)(l,{children:[(0,a.jsx)("summary",{children:"Test Environment"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.p,{children:"This workflow was tested on the following environments:"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.p,{children:"Analysis Computer"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Intel Core i9-8700K CPU @ 3.70GHz"}),"\n",(0,a.jsx)(t.li,{children:"Ubuntu 22.04"}),"\n",(0,a.jsx)(t.li,{children:"Arkitekt Paper Channel"}),"\n",(0,a.jsx)(t.li,{children:"Segmentor Plugin 0.3.1"}),"\n",(0,a.jsx)(t.li,{children:"Stdlib Plugin 0.3.6"}),"\n"]}),(0,a.jsx)(t.p,{children:"Analysis Computer"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Intel Core i9-8700K CPU @ 3.70GHz"}),"\n",(0,a.jsx)(t.li,{children:"Windows 10"}),"\n",(0,a.jsx)(t.li,{children:"Arkitekt Paper Channel"}),"\n",(0,a.jsx)(t.li,{children:"Segmentor Plugin 0.3.1"}),"\n",(0,a.jsx)(t.li,{children:"Stdlib Plugin 0.3.6"}),"\n"]})]})]})]})}function k(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},33850:(e,t,n)=>{"use strict";n(61872),n(97120),n(67294),n(89423),n(85893)},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>u});var a=n(37887),i=n(69819),r=n(31230),l=n(67294),s=n(85893);const o=r.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,d=r.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,c="my-2 p-2 rounded-md text-black text-center w-60 ",u=(0,i.Zh)((e=>{let{branch:t,repo:n,user:r}=e;const{client:u}=(0,i.AA)(),m=`${r}/${n}:${t}`,[p,h]=l.useState(!1),{data:g,refetch:f}=(0,a.a)(d,{client:u,variables:{tag:m},pollInterval:3e3});return(0,s.jsx)(s.Fragment,{children:g?.githubRepo?(0,s.jsxs)("button",{className:c+"bg-green-300",children:[" \u2705 ",m]}):(0,s.jsx)("button",{onClick:async()=>{try{h(!0);const{data:e}=await u.mutate({mutation:o,variables:{branch:t,repo:n,user:r}});await f(),console.log(e),h(!1)}catch(e){console.log(e)}},className:c+"cursor-pointer bg-yellow-200"+(p?" animate-pulse":""),children:p?(0,s.jsxs)(s.Fragment,{children:[" Installing ",m," "]}):(0,s.jsxs)(s.Fragment,{children:["\ud83e\ude84 Install ",m]})})})}),(0,s.jsx)("div",{className:c+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},88545:(e,t,n)=>{"use strict";n.d(t,{x:()=>o});var a=n(97120),i=n(31230),r=(n(67294),n(85893));const l=i.ZP`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`,s="my-2 p-2 rounded-md text-black text-center w-60 ",o=(0,a.nk)((e=>{let{url:t,name:n,kind:i}=e;const{client:o}=(0,a.rM)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("button",{onClick:async()=>{console.log(t);try{const e=await fetch(t);if(!e.ok)throw new Error("Failed fetching file from Documentation");const a=await e.blob(),r=new File([a],"model.zip",{type:a.type}),{data:s}=await o.mutate({mutation:l,variables:{name:n,kind:i,data:r}});console.log(s)}catch(e){console.log(e)}},className:s+"cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",n]})})}),(0,r.jsx)("div",{className:s+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},27859:(e,t,n)=>{"use strict";n.d(t,{Dr:()=>s,Hp:()=>l});n(67294);var a=n(63750),i=n(89583),r=n(85893);const l=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i._Aq,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.L1p,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i.oPZ,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Mac"})]})]})},s=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i._Aq,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.L1p,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i.oPZ,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Mac"})]})]})}},21262:(e,t,n)=>{"use strict";n.d(t,{n:()=>lt});var a=n(67294),i=n(98268),r=(n(49263),n(85893));const l=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:t,nodeTypes:n,nodes:a,edges:s,children:o,...d}=e;return(0,r.jsx)(i.tV,{children:(0,r.jsx)(i.x$,{nodes:a,edges:s,onInit:l,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right",...d,children:o})})};function o(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,c=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function u(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(c,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const m=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...i}=e;return{type:a,id:t,position:n,data:{__typename:a,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(o)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,__typename:l,...s}=e;return{id:t,type:l,source:n,sourceHandle:a,target:i,targetHandle:r,data:{__typename:l,...s}}}})).filter(o)||[],h=a.createContext({}),g=()=>(0,a.useContext)(h);var f=n(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),b=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const k=f.Ps`
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
`),w=f.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,v=f.Ps`
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
  ${w}
`,_=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${v}
`,$=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${v}
`,j=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${_}
  ${$}
  ${k}
`,P=f.Ps`
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
  ${j}
`,N=f.Ps`
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
  ${j}
  ${P}
`,T=f.Ps`
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
  ${j}
  ${P}
`,S=f.Ps`
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
  ${j}
  ${P}
`,L=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,W=f.Ps`
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
  ${L}
`,A=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,C=f.Ps`
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
`,R=f.Ps`
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
  ${C}
  ${I}
`,D=f.Ps`
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
  ${C}
  ${I}
  ${R}
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
  ${C}
  ${I}
  ${D}
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
`,q=f.Ps`
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
`,B=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${F}
`,z=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,G=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,H=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,M=f.Ps`
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
`,K=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,Z=f.Ps`
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
  ${q}
  ${B}
  ${z}
  ${G}
  ${H}
  ${M}
  ${K}
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
`,Y=f.Ps`
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
  ${Y}
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
  ${Z}
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
  ${L}
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
`,le=f.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${re}
`,se=f.Ps`
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
`,ue=f.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,me=f.Ps`
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
  ${N}
`;f.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${N}
`;f.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${N}
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
  ${N}
`;f.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${T}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${S}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${A}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${W}
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
  ${L}
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
  ${le}
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
  ${le}
`;f.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${le}
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
  ${ue}
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
  ${me}
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
  ${le}
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
  ${L}
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
`;const ge=e=>{const{}=g(),{id:t,sourcePosition:n,targetPosition:a,sourceX:l,sourceY:s,targetX:o,targetY:d,style:c,markerStart:u,markerEnd:m,data:p}=e,[h,f,y]=(0,i.OW)({sourcePosition:n,targetPosition:a,sourceX:l,sourceY:s,targetX:o,targetY:d});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{id:t,style:c,className:"react-flow__edge-path",d:h}),(0,r.jsx)(i.XQ,{children:(0,r.jsx)("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex ",children:p?.stream.map(((e,t)=>(0,r.jsx)("span",{className:"text-xs",children:(e?.kind==b.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")},t)))})})]})};var fe=n(1706);const ye=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),be=e=>{let{id:t,children:n,expandedHeight:i=200,expandedWidth:l=400,collapsedWidth:s=170,collapsedHeight:o=70}=e;const[d,c]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:o});return(0,r.jsx)(fe.Resizable,{height:d.height,width:d.width,onResize:(e,t)=>{let{size:n,handle:a}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40],children:(0,r.jsx)(ye.Provider,{value:{...d,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:l,height:e.isExpanded?o:i})))}},children:(0,r.jsx)("div",{style:{width:d.width+"px",height:d.height+"px"},className:"flex flex-col",children:n})})},t)},ke=e=>t=>(0,r.jsx)(be,{id:t.id,children:(0,r.jsx)(e,{...t})}),xe={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},we=e=>{let{children:t,id:n,color:i="white"}=e;const[l,s]=a.useState(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${xe[i]}`,children:t})})};var ve=n(55770),_e=n(86419),$e=n(90512),je=n(57851);function Pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,je.m)((0,$e.W)(t))}const Ne=_e.fC,Te=_e.xz,Se=a.forwardRef(((e,t)=>{let{className:n,align:a="center",sideOffset:i=4,...l}=e;return(0,r.jsx)(_e.h_,{children:(0,r.jsx)(_e.VY,{ref:t,align:a,sideOffset:i,className:Pe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l})})}));Se.displayName=_e.VY.displayName;const Le=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),We=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Ae=(e,t,n)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,n)))),Ce=e=>{const{data:t,error:n,loading:a}=(0,ve.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Le,{}),(0,r.jsxs)("div",{className:"text-yellow-500 my-auto",children:[" ",e.name," "]})]}):(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(We,{}),(0,r.jsxs)("div",{className:"text-green-500 my-auto",children:[" ",t?.node?.name," "]})]})})},Ie=e=>{const{flow:t}=g(),n=e.data.defaults&&Object.keys(e.data.defaults).filter((n=>e.data.defaults[n]&&null!=e.data.defaults[n]&&0!=e.data.defaults[n]||Ae(t,e.id,n)))||[];return(0,r.jsxs)(Ne,{children:[(0,r.jsx)(Te,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full ",children:(0,r.jsx)(ve.Z6,{fallback:(0,r.jsxs)(r.Fragment,{children:[" ",e.data?.name]}),children:(0,r.jsx)(Ce,{hash:e.data.hash,name:e.data.name})})}),(0,r.jsxs)(Se,{className:"text-xs bg-back-800 my-auto  ",children:[" ",e.data?.description,n&&n.length>0&&(0,r.jsxs)("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3",children:[(0,r.jsx)("div",{className:"font-semibold text-md mb-2",children:"Constants "}),(0,r.jsx)("div",{className:"flex flex-row gap-2 text-white",children:(0,r.jsx)("div",{className:"flex grid grid-cols-2 gap-2",children:n.map((n=>{const a=Ae(t,e.id,n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:" my-auto",children:[" ",n," "]}),a?(0,r.jsxs)("div",{className:"text-primary-300",children:[" ",(0,r.jsx)("div",{className:"font-bold inline",children:"Global "}),a.port.key," "]}):(0,r.jsxs)("div",{className:"my-auto",children:[" ",e.data.defaults[n]," "]})]})}))})})]})]})]})},Re=ke((e=>{const{isExpanded:t,toggleExpanded:n}=(0,a.useContext)(ye);return(0,r.jsxs)(we,{id:e.id,children:[e.data.instream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),(0,r.jsx)("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden ",children:(0,r.jsx)(Ie,{...e})})]})})),De=ke((e=>{let{data:{outstream:t,instream:n},id:l}=e;const[s,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(we,{color:"blue",id:l,children:(0,r.jsx)("div",{className:"px-2 py-2",children:(0,r.jsxs)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:["Inputs"," "]})})}),t.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+l})))]})}));var Ee=n(63750);const Fe=ke((e=>{let{data:{constream:t},id:n}=e;const[i,l]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!0);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(we,{color:"green",id:n,children:[!s&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex",children:t?.map(((e,t)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n,children:(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsx)("button",{type:"button",onClick:()=>alert("implement"),children:(0,r.jsx)(Ee.yvY,{})})})},t)})))})}),(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsxs)("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>o(!s),children:["Constants"," "]}),(0,r.jsx)("p",{className:"text-gray-700 text-base"})]})]})})})),Oe=ke((e=>{let{data:{outstream:t,instream:n},id:l}=e;const[s,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(we,{color:"red",id:l,children:(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsx)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:"Outputs"}),(0,r.jsxs)("p",{className:"text-gray-700 text-base",children:[(0,r.jsxs)(r.Fragment,{children:[n[0]?.map((e=>e?.kind)).join(" | "),(0,r.jsx)("br",{})]}),!d&&(0,r.jsx)("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>o(!0),children:"Add Documentation"})]})]})}),n.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}})))]})})),Ue="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",qe={ArkitektNode:Re,ArkitektFilterNode:Re,LocalNode:Re,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:l,implementation:s,defaults:o},id:d}=e;const c=(0,i.Bn)();return(0,a.useEffect)((()=>{console.log("Update node internals",d,s),c(d)}),[t,n,l]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"custom-drag-handle text-xs ",children:[s&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[y.Gate].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})}),s&&[y.Split].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(s)&&(0,r.jsxs)("div",{className:Ue,children:[s," ",o?.number&&(0,r.jsx)("b",{className:"font-bold",children:o.number})]}),s&&[y.Ensure].includes(s)&&(0,r.jsx)("div",{className:Ue,children:(0,r.jsx)("h1",{children:"!"})}),s&&[y.ToList].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),(0,r.jsx)("text",{children:s})]}),s&&[y.Omit].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"},children:s})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})]}),s&&[y.If].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"If"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),s&&[y.And].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"And"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),l?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,style:{background:"#555",marginTop:10,height:"1em"}},t))),n?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}},t))),t?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}},t)))]})})},ArgNode:De,ReturnNode:Oe,KwargNode:Fe,GraphNode:()=>null},Be={LabeledEdge:ge,FancyEdge:ge},ze=e=>{let{flow:t}=e;const[n,a,l]=(0,i.Rr)(m(t.graph?.nodes)),[o,d,c]=(0,i.ll)(p(t.graph?.edges));return(0,r.jsx)(h.Provider,{value:{flow:t},children:(0,r.jsx)(s,{nodes:n,edges:o,onNodesChange:l,onEdgesChange:c,elementsSelectable:!0,nodeTypes:qe,edgeTypes:Be,fitView:!0,attributionPosition:"bottom-right"})})};var Ge=n(89423),He=n(98756);const Me=e=>{const{user:t}=(0,Ge.gX)(),{fakts:n}=(0,He.sT)();return(0,r.jsxs)("div",{className:"relative "+e.className,children:[e.children,!t||!n&&(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center",children:e.hideLabel})," "]})};var Ke=n(81154),Ze=n(50319),Ve=n(12854),Ye=n(79592);const Xe=Ve.fC,Je=(Ve.xz,Ve.h_),Qe=(Ve.x8,a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.aV,{ref:t,className:Pe("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a})})));Qe.displayName=Ve.aV.displayName;const et=a.forwardRef(((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(Je,{children:[(0,r.jsx)(Qe,{}),(0,r.jsxs)(Ve.VY,{ref:t,className:Pe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",n),...i,children:[a,(0,r.jsxs)(Ve.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(Ye.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}));et.displayName=Ve.VY.displayName;const tt=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:Pe("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};tt.displayName="DialogHeader";const nt=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.Dx,{ref:t,className:Pe("text-lg font-semibold leading-none tracking-tight",n),...a})}));nt.displayName=Ve.Dx.displayName;const at=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ve.dk,{ref:t,className:Pe("text-sm text-muted-foreground",n),...a})}));at.displayName=Ve.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rt=e=>{let{flow:t,blockImport:n}=e;const{client:i}=(0,Ke.dB)(),[l,s]=(0,Ze.D)(it,{client:i}),[d,c]=(0,a.useState)(!1),h=async()=>{try{const n=(e=m(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:a,parentNode:i,data:{outstream:r,constream:l,instream:s,...d}}=e;return{outstream:r?.map((e=>e?e.filter(o).map(u):[]))||[[]],constream:l?.map((e=>e?e.filter(o).map(u):[]))||[[]],instream:s?.map((e=>e?e.filter(o).map(u):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:a||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:i,interface:d.interface}}})).filter(o)||[]||[]),a=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,type:l,data:s}=e;return{id:t,typename:l||"Fake type",source:n,sourceHandle:a||"returns",target:i,targetHandle:r||"args",stream:s?.stream.filter(o).map(u)||[]}}})).filter(o)||[])(p(t.graph.edges));let i={nodes:n.filter(o).map(u),edges:a.filter(o).map(u),globals:t.graph.globals.filter(o).map(u),args:t.graph.args.filter(o).map(u),returns:t.graph.returns.filter(o).map(u)};await l({variables:{name:t.name,graph:i}});c(!0)}catch(n){alert(n.message)}var e};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Xe,{open:d,onOpenChange:c,children:(0,r.jsx)(et,{children:(0,r.jsxs)(tt,{children:[(0,r.jsx)(nt,{children:"Succesfully imported workflow"}),(0,r.jsx)(at,{children:"We have imported the workflow into Arkitekt. You can now use it in your flows."})]})})}),(0,r.jsx)("button",{onClick:()=>h(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer",children:"Re-Import into Arkitekt"})]})},lt=e=>(0,r.jsxs)("div",{className:"border border-1 rounded border-gray-800",children:[(0,r.jsx)("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative",children:(0,r.jsx)(ze,{flow:e.flow})}),(0,r.jsx)(Me,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow",children:(0,r.jsx)(Ke.Ot,{children:(0,r.jsx)(rt,{flow:e.flow,blockImport:e.blockImport})})})]})},33346:(e,t,n)=>{"use strict";n.d(t,{L:()=>i});n(67294);var a=n(85893);const i=e=>(0,a.jsx)(a.Fragment,{children:"CONNECTED"})},91574:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/files/noisy_stack-6ff2a5732916fc1a6ddebe87490f875c.tif"},15094:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/files/training-de8069a9441ffc363f8f3ee381f7c139.zip"}}]);