(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5308],{5738:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/streaming.492e399.640.png 640w,"+n.p+"assets/ideal-img/streaming.f331c77.1320.png 1320w,"+n.p+"assets/ideal-img/streaming.623b188.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/streaming.492e399.640.png",width:640,height:220},{path:n.p+"assets/ideal-img/streaming.f331c77.1320.png",width:1320,height:453},{path:n.p+"assets/ideal-img/streaming.623b188.2000.png",width:2e3,height:686}],src:n.p+"assets/ideal-img/streaming.492e399.640.png",toString:function(){return n.p+"assets/ideal-img/streaming.492e399.640.png"},placeholder:void 0,width:640,height:220},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nAF7AIT/ACEyWbZRYIavnZG2r52SuL+ppLOe0rhrg1UjXodjSHCKPy1NjU8/Zn0AOUZv/2FokPOCcqn3gnSy/6GQo93hv2KZUzFr3GxCbcpaTWL/WExpsACAgHyNk6amTqzDzFquydBpz9fIQdnEdGCfuMRTqL/WOKCwqlG2r45tJOlBr4U3UQcAAAAASUVORK5CYII="}},73858:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>w,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var a=n(85893),i=n(11151),r=(n(27859),n(15944)),l=n(5738),s=n.n(l),o=n(21262),d=n(71698),c=n(88545);const u=n.p+"assets/files/organoid_model-654578336cf0240c4431c098064132ea.zip",m=JSON.parse('{"__typename":"Flow","id":"45","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75","position":{"__typename":"Position","x":235,"y":-53},"typename":"ArkitektNode","parentNode":null,"hash":"f8031ef4200cdae6e7bd8f5f214d2428900488ee80f042336f55cb87e406ddcc","kind":"GENERATOR","defaults":{"regexp":null,"dataset":null,"indefinitely":true},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset to stream to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"regexp","label":"regexp","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"A regular expression to filter the files","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"indefinitely","label":"indefinitely","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Should we stream waiting for new files?. Defaults to False.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Stream Files","description":"Streams files from a folder to Mikro","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-cebbe0d8-8853-4568-bc39-cec39b74b250","position":{"__typename":"Position","x":518,"y":-96},"typename":"ArkitektNode","parentNode":null,"hash":"0abdf2faf07b0a322bd75e410a128fee96dabec2e9f74c3b07addaed949a211f","kind":"FUNCTION","defaults":{"era":null,"file":null,"stage":null,"dataset":null,"position_tolerance":40,"timepoint_from_time":true,"timepoint_tolerance":null,"position_from_planes":true,"channels_from_channels":true},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"file","label":"file","identifier":"@mikro/omerofile","scope":"GLOBAL","kind":"STRUCTURE","description":"The File to be converted","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_omerofile($search: String, $values: [ID]) {\\n  options: omerofiles(name: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The created series in this file","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"stage","label":"stage","identifier":"@mikro/stage","scope":"GLOBAL","kind":"STRUCTURE","description":"The Stage in which to put the Image. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_stages($search: String, $values: [ID]) {\\n  options: stages(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"era","label":"era","identifier":"@mikro/era","scope":"GLOBAL","kind":"STRUCTURE","description":"The Era in which to put the Image.. Defaults to None.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchEras($search: String, $values: [ID]) {\\n  options: eras(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"dataset","label":"dataset","identifier":"@mikro/dataset","scope":"GLOBAL","kind":"STRUCTURE","description":"The Dataset in which to put the Image. Defaults to the file dataset.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_datasets($search: String, $values: [ID]) {\\n  options: datasets(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_from_planes","label":"position_from_planes","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a position from the first planes (only if stage is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_from_time","label":"timepoint_from_time","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a timepoint from the first time (only if era is provided). Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channels_from_channels","label":"channels_from_channels","identifier":null,"scope":"GLOBAL","kind":"BOOL","description":"Whether to create a channel from the channels. Defaults to True.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"position_tolerance","label":"position_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the position. Defaults to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"timepoint_tolerance","label":"timepoint_tolerance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The tolerance for the timepoint. Defaults  to no tolerance.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Convert Omero","description":"Converts an Omero File in a set of Mikrodata","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-e1cb5e42-2235-47b8-a57a-4b0fb0a328e7","position":{"__typename":"Position","x":1100,"y":-258},"typename":"ArkitektNode","parentNode":null,"hash":"6aef2e0b4cfe28139854a42edf795346d1df5f822014c8901080728d4af875cd","kind":"FUNCTION","defaults":{"key":"Intensity","rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Max","description":"Measures the maxium value of an image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-5512bfce-587b-4266-b985-5c2378b73de6","position":{"__typename":"Position","x":830,"y":-237},"typename":"ArkitektNode","parentNode":null,"hash":"3bbc2f84cc1f9c92045a66993b7bca99966d28ae285491905cedcf26fa48510c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image where we should count cells","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Maximum Intensity Projection","description":"Projects the image onto the maximum intensity along the z axis","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83","position":{"__typename":"Position","x":1223,"y":91},"typename":"ArkitektNode","parentNode":null,"hash":"6aef2e0b4cfe28139854a42edf795346d1df5f822014c8901080728d4af875cd","kind":"FUNCTION","defaults":{"key":"Cell Count","rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"key","label":"key","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The key to use for the metric. Defaults to \\"max\\".","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Measure Max","description":"Measures the maxium value of an image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-db65a500-23da-4a9d-a3d6-f879399a33b1","position":{"__typename":"Position","x":973,"y":151},"typename":"ArkitektNode","parentNode":null,"hash":"61c20bbf15a1a19c914bc4d0135417b8d8782ed7626447e043f39a2dda413d2c","kind":"FUNCTION","defaults":{"rep":null,"model":null},"mapStrategy":"AS_COMPLETED","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image to segment.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Predict Stardist","description":"Segments Cells using the stardist algorithm","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4","position":{"__typename":"Position","x":702,"y":121},"typename":"ArkitektNode","parentNode":null,"hash":"70c8f94e3bb881cee5fc4f2c2ec613666601abb66ee95b0eff6389bb27e41774","kind":"FUNCTION","defaults":{"rep":null,"rescale_x":0.6,"rescale_y":0.6,"rescale_z":1,"anti_alias":true,"pad_method":"PAD_ZEROS","crop_method":"CENTER","ensure_dim_x":900,"ensure_dim_y":900,"ensure_dim_z":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image we should resized","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The resized image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"rescale_x","label":"rescale_x","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The physical size of the x dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"rescale_y","label":"rescale_y","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The physical size of the y dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"rescale_z","label":"rescale_z","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The physical size of the z dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"ensure_dim_x","label":"ensure_dim_x","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The size of the x dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"ensure_dim_y","label":"ensure_dim_y","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The size of the y dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"ensure_dim_z","label":"ensure_dim_z","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The size of the z dimension","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_method","label":"crop_method","identifier":"app.cropmethod","scope":"GLOBAL","kind":"STRUCTURE","description":"The method to crop the image. Defaults to crop center.","assignWidget":{"__typename":"Widget","kind":"ChoiceWidget","query":null,"hook":null,"ward":null,"min":null,"step":null,"placeholder":null,"max":null,"choices":[{"__typename":"Choice","value":"CENTER","label":"CENTER"},{"__typename":"Choice","value":"TOP_LEFT","label":"TOP_LEFT"},{"__typename":"Choice","value":"BOTTOM_RIGHT","label":"BOTTOM_RIGHT"}],"asParagraph":null},"returnWidget":{"__typename":"ReturnWidget","kind":"ChoiceReturnWidget","query":null,"choices":[{"__typename":"Choice","value":"CENTER","label":"CENTER"},{"__typename":"Choice","value":"TOP_LEFT","label":"TOP_LEFT"},{"__typename":"Choice","value":"BOTTOM_RIGHT","label":"BOTTOM_RIGHT"}]},"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"pad_method","label":"pad_method","identifier":"app.expandmethod","scope":"GLOBAL","kind":"STRUCTURE","description":"The method to pad the image. Defaults to expand with zeros.","assignWidget":{"__typename":"Widget","kind":"ChoiceWidget","query":null,"hook":null,"ward":null,"min":null,"step":null,"placeholder":null,"max":null,"choices":[{"__typename":"Choice","value":"PAD_ZEROS","label":"PAD_ZEROS"}],"asParagraph":null},"returnWidget":{"__typename":"ReturnWidget","kind":"ChoiceReturnWidget","query":null,"choices":[{"__typename":"Choice","value":"PAD_ZEROS","label":"PAD_ZEROS"}]},"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"anti_alias","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Resize to Physical","description":"Resize the image to match the physical size of the dimensions,\\nif the physical size is not provided, it will be assumed to be 1.\\n\\nAdditional dimensions will be cropped or padded according to the\\ncrop_method and pad_method if the ensure_dim is provided","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7","position":{"__typename":"Position","x":732,"y":-98},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of rep","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe created series in this file","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75arg_0","source":"1","sourceHandle":"return_0","target":"arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75return_0-arkid-cebbe0d8-8853-4568-bc39-cec39b74b250arg_0","source":"arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75","sourceHandle":"return_0","target":"arkid-cebbe0d8-8853-4568-bc39-cec39b74b250","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/omerofile","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-cebbe0d8-8853-4568-bc39-cec39b74b250return_0-reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7arg_0","source":"arkid-cebbe0d8-8853-4568-bc39-cec39b74b250","sourceHandle":"return_0","target":"reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7return_0-arkid-5512bfce-587b-4266-b985-5c2378b73de6arg_0","source":"reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7","sourceHandle":"return_0","target":"arkid-5512bfce-587b-4266-b985-5c2378b73de6","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-5512bfce-587b-4266-b985-5c2378b73de6return_0-arkid-e1cb5e42-2235-47b8-a57a-4b0fb0a328e7arg_0","source":"arkid-5512bfce-587b-4266-b985-5c2378b73de6","sourceHandle":"return_0","target":"arkid-e1cb5e42-2235-47b8-a57a-4b0fb0a328e7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7return_0-arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4arg_0","source":"reactive-7ebaffb8-d3c1-47f8-87a7-5d2eafedeea7","sourceHandle":"return_0","target":"arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"rep","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4return_0-arkid-db65a500-23da-4a9d-a3d6-f879399a33b1arg_0","source":"arkid-41bec6c9-6d11-4a54-a7c0-f5cae57a02a4","sourceHandle":"return_0","target":"arkid-db65a500-23da-4a9d-a3d6-f879399a33b1","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-db65a500-23da-4a9d-a3d6-f879399a33b1return_0-arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83arg_0","source":"arkid-db65a500-23da-4a9d-a3d6-f879399a33b1","sourceHandle":"return_0","target":"arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83return_0-2arg_0","source":"arkid-96d057be-ccc6-4d07-b61d-eb802f2c8e83","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/metric","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-db65a500-23da-4a9d-a3d6-f879399a33b1.model"],"port":{"__typename":"Port","key":"model","label":"model","identifier":"@mikro/model","scope":"GLOBAL","kind":"STRUCTURE","description":"The model to use for segmentation (maps to arkid-db65a500-23da-4a9d-a3d6-f879399a33b1.model)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_models($search: String, $values: [ID]) {\\n  options: models(name: $search, limit: 20, ids: $values) {\\n    label: name\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75.regexp"],"port":{"__typename":"Port","key":"regexp","label":"regexp","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"A regular expression to filter the files (maps to arkid-0e78ced6-9ed2-4f3c-b951-4f1525876d75.regexp)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-cebbe0d8-8853-4568-bc39-cec39b74b250.stage"],"port":{"__typename":"Port","key":"stage","label":"stage","identifier":"@mikro/stage","scope":"GLOBAL","kind":"STRUCTURE","description":"The Stage in which to put the Image. Defaults to None. (maps to arkid-cebbe0d8-8853-4568-bc39-cec39b74b250.stage)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_stages($search: String, $values: [ID]) {\\n  options: stages(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-cebbe0d8-8853-4568-bc39-cec39b74b250.era"],"port":{"__typename":"Port","key":"era","label":"era","identifier":"@mikro/era","scope":"GLOBAL","kind":"STRUCTURE","description":"The Era in which to put the Image.. Defaults to None. (maps to arkid-cebbe0d8-8853-4568-bc39-cec39b74b250.era)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchEras($search: String, $values: [ID]) {\\n  options: eras(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[],"returns":[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/metric","scope":"GLOBAL","kind":"STRUCTURE","description":"The Back","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]},"restrict":[],"name":"beady-taupe-reindeer","screenshot":null,"createdAt":"2023-10-30T11:19:43.239149+00:00","workspace":{"__typename":"Workspace","id":"29"}}'),h=n.p+"assets/medias/organoid_workflow_creation-d688056645cf56515848cec30d3cc59b.webm",p={title:"Streaming Analysis",sidebar_label:"Streaming Analysis",sidebar_position:3},g=void 0,f={id:"showcases/paper/streaming_workflow",title:"Streaming Analysis",description:"Biological systems can be highly reactive, and closely monitoring them during long-run acquisitions is necessary for ensuring a stable environment in an ongoing experiment. This can range from just checking that the acquisition is running properly (e.g., no loss of focus or some illumination problem), to monitoring the evolution of live biological samples (e.g., premature cell death). Classically, images are batch-processed once the acquisition is complete, i.e., when all of the data have been fully acquired and stored, leaving no chance for real-time analysis and feedback. In this second workflow, we illustrate how Arkitekt with its ability for streaming analysis (i.e., processing immediately after each acquisition event), enables to display real-time feedback on the running acquisition.",source:"@site/docs/showcases/paper/streaming_workflow.mdx",sourceDirName:"showcases/paper",slug:"/showcases/paper/streaming_workflow",permalink:"/docs/showcases/paper/streaming_workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/showcases/paper/streaming_workflow.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Streaming Analysis",sidebar_label:"Streaming Analysis",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interactive Workflow",permalink:"/docs/showcases/paper/interactive_workflow"},next:{title:"Smart Microscopy",permalink:"/docs/showcases/paper/smart_microscopy_workflow"}},y={},b=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Microscope Software",id:"microscope-software",level:4},{value:"Gucker",id:"gucker",level:4},{value:"Mikro-Napari and Napari",id:"mikro-napari-and-napari",level:4},{value:"PluginApps",id:"pluginapps",level:4},{value:"Preparations",id:"preparations",level:2},{value:"Analysis Computer",id:"analysis-computer",level:3},{value:"Acquisition Computer",id:"acquisition-computer",level:3},{value:"Optional: Parallel Processing Computers",id:"optional-parallel-processing-computers",level:3},{value:"Installing the Workflows",id:"installing-the-workflows",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Context Preparation",id:"context-preparation",level:2},{value:"Reserving and Running the Workflow",id:"reserving-and-running-the-workflow",level:2},{value:"Results",id:"results",level:2}];function k(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Biological systems can be highly reactive, and closely monitoring them during long-run acquisitions is necessary for ensuring a stable environment in an ongoing experiment. This can range from just checking that the acquisition is running properly (e.g., no loss of focus or some illumination problem), to monitoring the evolution of live biological samples (e.g., premature cell death). Classically, images are batch-processed once the acquisition is complete, i.e., when all of the data have been fully acquired and stored, leaving no chance for real-time analysis and feedback. In this second workflow, we illustrate how Arkitekt with its ability for streaming analysis (i.e., processing immediately after each acquisition event), enables to display real-time feedback on the running acquisition.\nHere we used Arkitekt to perform real-time quantitative monitoring of soSPIM 21,22 3D microscopy data using the popular StarDist 23 deep-learning segmentation algorithm, while they were being acquired (Fig. 3). A user-defined directory located on the microscope\u2019s computer was monitored for new data, and all the analysis steps were performed remotely on each newly acquired data, in parallel with the acquisition, minimizing the risks of slowing the acquisition down or causing its crash.\nAs the deep learning-based segmentation steps can be highly time-consuming, several processes were run in parallel and distributed on 3 different available hardware. Visualization of both the 3D acquisition and the results were performed in Napari 7 on a remote and mobile computer, as well as through the web-interface, where results (here the number of nuclei and the average volume) were plotted on a live-dashboard, accessible to other remote members of the lab. (see Supp. Video 5)"}),"\n",(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)(r.Z,{img:s()}),(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:"The Streaming Microscopy Workflow"})})]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.admonition,{title:"Please read",type:"tip",children:(0,a.jsxs)(t.p,{children:["We ",(0,a.jsx)(t.strong,{children:"strongly"})," suggest to go through the ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps",children:"Getting Started"})," guide before attempting to run this workflow.\nIt will guide you through the installation of the Arkitekt platform and the setup of your first workflow, as well as how to install plugins\nand apps. Additionally, we suggest to go through the ",(0,a.jsx)(t.a,{href:"/docs/introduction/advanced/live",children:"Live Analysis Basics"})," guide to get familiar with the Streaming\ncapabilities of Arkitekt."]})}),"\n",(0,a.jsx)(t.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,a.jsx)(t.p,{children:"This workflow is designed to run on a microscope computer running Windows 10 as well as on a remote analysis computer\nthat will power the Arkitekt platform and the image analysis (in the illustrated example running Ubuntu 22.04, but equally tested on\na Windows 10 Machine). To enable GPU acceleration for the Stardist segmentation, the analysis computer needs to have access to a CUDA 11 enabled GPU (tested on Nvidia GeforceRTX 2080Ti).\nThe microscope computer will need to be connected to the same network as the remote computer."}),"\n",(0,a.jsx)(t.p,{children:"Additionally to use the parallel processing capabilities of this workflow, you will need to have similarly configured computers (Ubuntu 22.04 or Windows 10, with a CUDA 11 enabled GPU, with Docker installed)\nthat will be used to run the parallel processes. These computers will need to be connected to the same network as the remote computer."}),"\n",(0,a.jsx)(t.h3,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,a.jsx)(t.h4,{id:"microscope-software",children:"Microscope Software"}),"\n",(0,a.jsxs)(t.p,{children:["Your microscope Software of choice (tested with ",(0,a.jsx)(t.a,{href:"https://www.moleculardevices.com/",children:"Metamorph"}),", that is able to stream images to a directory on the microscope computer, in an\nOME compliant format."]}),"\n",(0,a.jsx)(t.h4,{id:"gucker",children:(0,a.jsx)(t.a,{href:"https://github.com/arkitektio-apps/gucker",children:"Gucker"})}),"\n",(0,a.jsxs)(t.p,{children:["This workflow uses the Gucker App to watch a directory for new files opn the Acquisition Computer. To install Gucker, download the latest release from the ",(0,a.jsx)(t.a,{href:"https://github.com/jhnnsrs/arkitektio-apps/releases/latest",children:"Gucker Releases"}),".\nYou can also choose to install Gucker from source by following the instructions on the ",(0,a.jsx)(t.a,{href:"https://github.com/arkitektio-apps/gucker",children:"Gucker Github"}),"."]}),"\n",(0,a.jsxs)(t.h4,{id:"mikro-napari-and-napari",children:[(0,a.jsx)(t.a,{href:"https://github.com/arkitektio-apps/mikro-napari",children:"Mikro-Napari"})," and ",(0,a.jsx)(t.a,{href:"https://napari.org/",children:"Napari"})]}),"\n",(0,a.jsxs)(t.p,{children:["For visualization of the 3D data, we use the Napari App. To install Napari, follow the instructions on the ",(0,a.jsx)(t.a,{href:"https://napari.org/",children:"Napari Website"}),", as well as install\nthe mikro-napari plugin by following the instructions ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps/first_app",children:"here"})," or ",(0,a.jsx)(t.a,{href:"/docs/apps/standalones/mikro-napari",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"pluginapps",children:"PluginApps"}),"\n",(0,a.jsxs)(t.p,{children:["This workflow uses the following ",(0,a.jsx)(t.code,{children:"PluginApps"})," installed through the Arkitekt Plugin Store. To install these plugins follow the instructions ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps/first_tool",children:"here"}),",\nor connect this website to your Arkitekt instance and click on the button below:"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,a.jsx)(d.I,{repo:"stdlib",user:"arkitektio-apps",branch:"master"}),(0,a.jsx)(d.I,{repo:"omero",user:"arkitektio-apps",branch:"master"}),(0,a.jsx)(d.I,{repo:"segmentor",user:"arkitektio-apps",branch:"master"})]}),"\n",(0,a.jsxs)(t.p,{children:["To enable the parallelization of the Stardist segmentation, you will need to have access to a Docker enabled computer (Ubuntu 22.04 or Windows 10) with a CUDA 11 enabled GPU.\nArkitekt does not need to be installed on this computer, but we will run the Segmentor Plugin on this computer through a ",(0,a.jsx)(t.code,{children:"docker run"})," command."]}),"\n",(0,a.jsx)(t.h2,{id:"preparations",children:"Preparations"}),"\n",(0,a.jsx)(t.h3,{id:"analysis-computer",children:"Analysis Computer"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Install Arkitekt on your analysis computer following the instructions ",(0,a.jsx)(t.a,{href:"/docs/introduction/installation",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Depending if you want to reproduce the results illustrated in the Paper, you can either install the Stardist Model which we used for the demo data, via the button below or train your own model by following the instructions ",(0,a.jsx)(t.a,{href:"/docs/introduction/advanced/training",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(c.x,{url:u,name:"Organoid Model",kind:"TENSORFLOW"}),"\n",(0,a.jsx)(t.h3,{id:"acquisition-computer",children:"Acquisition Computer"}),"\n",(0,a.jsx)(t.p,{children:"TODO: Video"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["On the Acquisition Computer, you will need to setup your microscope software to save the images in an OME compliant format to a directory that is accessible to the analysis computer.\nFor this example, we will assume that the images are saved to the directory ",(0,a.jsx)(t.code,{children:"C://Data"})," on the microscope computer, any other directory can be used, but will need to be specified correctly in the Gucker App."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Unzip the Gucker App, and execute on ",(0,a.jsx)(t.code,{children:"Gucker.exe"}),'. Initial startup might take a few seconds, as Gucker will need to precompile some code. Once the App is running, select your respective directory\nin the "Choose Directory" field. Additionally as Gucker also acts as a Data Exporter, you need to specify an "Export Directory". This should not be the same as the "Import Directory", but can be any other directory\non your computer with write access.']}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Connect and Login with the Arkitekt instance (if your Arkitekt instance does not show up, make sure you are ",(0,a.jsx)(t.a,{href:"/docs/introduction/installation#advertisting",children:"advertising"})," it)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"optional-parallel-processing-computers",children:"Optional: Parallel Processing Computers"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"To enable the parallel processing of the Stardist segmentation, we will manually start the Segmentor plugin on each of the parallel processing computers. This can be done by executing the following command in a terminal on each of the parallel processing computers:"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"docker run -t --gpus all jhnnsrs/segmentor:0.3.4 arkitekt run prod -h --url $ANALYSIS_COMPUTER_HOSTNAME:8000 -i $THIS_INSTANCE_ID\n"})}),"\n",(0,a.jsxs)(t.p,{children:["where ",(0,a.jsx)(t.code,{children:"$ANALYSIS_COMPUTER_HOSTNAME"})," is the hostname of your analysis computer, and ",(0,a.jsx)(t.code,{children:"$THIS_INSTANCE_ID"})," is the ID of the parallel processing computer. This ID can be any string, but needs to be unique for each parallel processing computer."]}),"\n",(0,a.jsx)(t.h2,{id:"installing-the-workflows",children:"Installing the Workflows"}),"\n",(0,a.jsx)(t.p,{children:"The streaming analysis workflow can be installed by clicking on the button below. One installed all correspoinding\nnodes should light up in the Arkitekt Workflow Editor."}),"\n",(0,a.jsx)(o.n,{flow:m}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:"You can also follow the following steps to install the workflow manually:"}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md my-3",width:"100%",children:(0,a.jsx)("source",{src:h})}),"\n",(0,a.jsx)(t.p,{children:"A few notes on this workflow:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"On the dashboard we can see that three seperate instances of the segmentor app are currently active and\nconnected. These are the three parallel processing computers that we started in the previous step. If you do not see\nany instances, make sure that you have started the Segmentor App on each of the parallel processing computers. Of course\nyou can also skip this part and just run the workflow on your analysis computer, but then the Stardist segmentation will\nbe run sequentially and not in parallel."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Creating the Workflow follows the same patterns as illustrated in the Tutorials."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Connect the nodes by dragging the output ports of one node to the input ports of another node. As illustrated in the ",(0,a.jsx)(t.a,{href:"/docs/introduction/advanced/live",children:"Live Analysis"}),", the\n",(0,a.jsx)(t.code,{children:"Convert Omero"})," node is returning a list of Images (as some OME formats can contain multiple series), which is why we need to ",(0,a.jsx)(t.code,{children:"Chunk"})," the list of images into single images, before we can\nrun the rest of the workflow on each image individually."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You see that some parameters of the workflow are set to specific parameters right in the workflow. This are inherently linked to the workflow as you can then just copy the workflow to another\nArkitekt instance and it will work out of the box. Some parameters like the ",(0,a.jsx)(t.code,{children:"Segmentation Model"})," of the ",(0,a.jsx)(t.code,{children:"Predict Stardist"}),' node are set to be "global parameters" (by clicking the \u2b06\ufe0f next to parameter,\nturning it bright red). This means that they will asked as constants when the workflow is run. This is useful if you want to run the same workflow with different parameters (e.g. different segmentatoin\nmodels), without having to change the workflow itself.']}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["During the creation of the workflow around (2:25) we see the ",(0,a.jsx)(t.code,{children:"Predict Stardist"})," node being configured. Here we can see that the ",(0,a.jsx)(t.code,{children:"Segmentation Model"}),' parameter is set to be a global parameter, and that\nwe are changing the "Reserve Params" to manually point to all three segmentor instances that we started in the previous step. This will send out incoming requests in a round robin manner to the three\nsegmentor instances, and will thus distribute the workload evenly between the three instances. ',(0,a.jsx)(t.em,{children:"However"}),' in the default configuratoin this will not parallelize the segmentation but rather wait for\nthe first instance to finish, before sending the next image to the next instance. To enable parallelization, we can go to the "Advanced" tab and set the Map Strategy to "As completed". This will cause\nArkitekt to ',(0,a.jsx)(t.em,{children:"NOT"}),' wait for the first instance to finish, but send immediately the next image to the next instance. This will cause the three instances to run in parallel, and thus speed up the segmentation\nn, however this may also cause the images to be segmented in a different order than they were acquired. If you want to make sure that the images are segmented in the same order as they were acquired, you\ncan set the Map Strategy to "Ordered", however this is not the most efficient way to parallelize the segmentation, as potential longer running segmentations will block the pipeline.']}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{title:"On Parallization in Arkitekt",type:"note",children:(0,a.jsx)(t.p,{children:"As you can see Arkitekt supports various parellization patterns, each coming with their own advantages and disadvantages."})}),"\n",(0,a.jsx)(t.h2,{id:"deployment",children:"Deployment"}),"\n",(0,a.jsx)(t.p,{children:'To deploy the workflow, click on the "Deploy" button in the Arkitekt Workflow Editor. This will deploy the workflow to your Arkitekt instance. If you want to enable\nthe parellization feature and have imported the workflow, please make sure that you have selected all of the participating computers in the "Predict StarDist" node,\nbefore deploying the workflow.'}),"\n",(0,a.jsx)(t.h2,{id:"context-preparation",children:"Context Preparation"}),"\n",(0,a.jsxs)(t.p,{children:["During the creationg of our workflow, we set the Stage parameters of our ",(0,a.jsx)(t.code,{children:"Convert Omero"})," node as a global parameter to our workflow. A few words about what that entails:"]}),"\n",(0,a.jsx)(t.p,{children:'A "Stage" is a metadata container provided by Arkitekt, specifically through its Mikro service.\nIts primary purpose is to put acquired data into a relevant biological context.'}),"\n",(0,a.jsx)(t.p,{children:"For instance, in our example, when we capture multiple positions using our microscope, each position is saved as a separate file which passes as a single item through our workflow.\nThis raises a question: How can we inform Arkitekt that all these files are part of the same multi-position acquisition?"}),"\n",(0,a.jsxs)(t.p,{children:['Well that\'s where the "Stage" comes in. In Arkitekt, a "Stage" is essentially a metadata label that groups positions, helping to recreate, for example, the spatial arrangement of our samples on the microscope.\nAnd since our files adhere to the OME standard, they contain position information in the OME metadata. By grouping our files by position, we can recreate the spatial arrangement of our samples on the microscope.\nautomatically, and on the fly, and we can explore our data in a spatial context, directly from the webinterface. This is also why we gave the "Convert Omero" node a ',(0,a.jsx)(t.code,{children:"Position Tolerance"})," parameter set to 40\xb5m so that\nall motion-correcteed images that share the same position within 40\xb5m will be grouped into the same position on the same stage."]}),"\n",(0,a.jsxs)(t.p,{children:["For this to work, we need to create a new ",(0,a.jsx)(t.code,{children:"Stage"})," on the Arkitekt webinterface by going to the ",(0,a.jsx)(t.code,{children:"Data"})," section and clicking on ",(0,a.jsx)(t.code,{children:"Create New Stage"}),". Here we can give our stage a name, which could be\nthe name of multi-well experiment. This now empty stage can be passed as a parameter to our workflow and bthe ",(0,a.jsx)(t.code,{children:"Convert Omero"})," node will use our stage to group all of passed throug images into\nthe same stage. This will allow us to explore our data in a spatial context, directly from the webinterface."]}),"\n",(0,a.jsx)(t.admonition,{title:"On Stages",type:"note",children:(0,a.jsxs)(t.p,{children:["If you are re-running the workflow on the multi-well sample you won't need to change the ",(0,a.jsx)(t.code,{children:"Stage"}),", as the phyiscal position of the samples will not change. However if you are running the workflow on a different\nsample, or you have moved the sample on the microscope, you will need to create a new ",(0,a.jsx)(t.code,{children:"Stage"})," for the new sample. You can do this by going to the ",(0,a.jsx)(t.code,{children:"Data"})," section and clicking on ",(0,a.jsx)(t.code,{children:"Create New Stage"}),".\nYou can also use the ",(0,a.jsx)(t.code,{children:"Create New Stage"})," node to create a new stage directly from within the workflow."]})}),"\n",(0,a.jsx)(t.h2,{id:"reserving-and-running-the-workflow",children:"Reserving and Running the Workflow"}),"\n",(0,a.jsx)(t.p,{children:"Reserve the deployed workflow either on the Arkitekt Workflow interface or on the Dashboard and once all of the Applications are started, Arkitekt should guide you\non which applications need to be started. Once all of the applications are started, you can start the workflow, through right-click start on the Workflow. During the\nassignment Arkitekt will ask you for the global Parameters that we set in the workflow."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Model: Please choose here the model that we installed in the "Preparations" step. If you have trained your own model, you can also choose that model here.'}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:['RegExp: This is a regular expression that will be used to filter the files that are found in the "Import Directory". In our case we want to only segment the images\nthat are saved in the TIF format, so we used the regular expression ',(0,a.jsx)(t.code,{children:"*.TIF"})," to only select these files. If you want to segment other files, you can change\nthis regular expression to match your files."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'Stage: Just select the stage that you created in the "Context Preparation" step.'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"After assigned you should be shown the Workflow Run interface which will show you the progress of the workflow.\nIt will automatically update as new images are put into the directory on the microscope computer. You can now\nstart the acquisition on the microscope computer and the workflow will automatically start processing the images."}),"\n",(0,a.jsx)(t.h2,{id:"results",children:"Results"}),"\n",(0,a.jsx)(t.p,{children:"In addition to the Run Interface which should give you live feedback on the progress of the workflow, you can also use the stage view to explore the results of the workflow.\nHere Positions are shown as they were acquired on the microscope, and you can click on each position to see the results of the segmentation ( if it was already processed)"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Test Environment"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.p,{children:"This workflow was tested on the following environments:"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.p,{children:"Acquisition Computer:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Intel Xeon CPU E5-2620 v4 @ 2.10GHz"}),"\n",(0,a.jsx)(t.li,{children:"128GB RAM"}),"\n",(0,a.jsx)(t.li,{children:"Nikon Ti2-E Microscope"}),"\n",(0,a.jsx)(t.li,{children:"Windows 10"}),"\n",(0,a.jsx)(t.li,{children:"Micro-Manager 2.0.1 2023.05.23"}),"\n",(0,a.jsx)(t.li,{children:"MikroManager 0.0.1"}),"\n"]}),(0,a.jsx)(t.p,{children:"Analysis Computer"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Intel(R) Core(TM) i9-10900KF CPU @ 3.70GHz"}),"\n",(0,a.jsx)(t.li,{children:"Ubuntu 22.04"}),"\n",(0,a.jsx)(t.li,{children:"Arkitekt Paper Channel"}),"\n",(0,a.jsx)(t.li,{children:"Segmentor Plugin 0.3.4"}),"\n",(0,a.jsx)(t.li,{children:"Stdlib Plugin 0.3.9"}),"\n"]})]})]})]})}function w(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>u});var a=n(37887),i=n(69819),r=n(31230),l=n(67294),s=n(85893);const o=r.ZP`
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
`,c="my-2 p-2 rounded-md text-black text-center w-60 ",u=(0,i.Zh)((e=>{let{branch:t,repo:n,user:r}=e;const{client:u}=(0,i.AA)(),m=`${r}/${n}:${t}`,[h,p]=l.useState(!1),{data:g,refetch:f}=(0,a.a)(d,{client:u,variables:{tag:m},pollInterval:3e3});return(0,s.jsx)(s.Fragment,{children:g?.githubRepo?(0,s.jsxs)("button",{className:c+"bg-green-300",children:[" \u2705 ",m]}):(0,s.jsx)("button",{onClick:async()=>{try{p(!0);const{data:e}=await u.mutate({mutation:o,variables:{branch:t,repo:n,user:r}});await f(),console.log(e),p(!1)}catch(e){console.log(e)}},className:c+"cursor-pointer bg-yellow-200"+(h?" animate-pulse":""),children:h?(0,s.jsxs)(s.Fragment,{children:[" Installing ",m," "]}):(0,s.jsxs)(s.Fragment,{children:["\ud83e\ude84 Install ",m]})})})}),(0,s.jsx)("div",{className:c+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},88545:(e,t,n)=>{"use strict";n.d(t,{x:()=>o});var a=n(97120),i=n(31230),r=(n(67294),n(85893));const l=i.ZP`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`,s="my-2 p-2 rounded-md text-black text-center w-60 ",o=(0,a.nk)((e=>{let{url:t,name:n,kind:i}=e;const{client:o}=(0,a.rM)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("button",{onClick:async()=>{console.log(t);try{const e=await fetch(t);if(!e.ok)throw new Error("Failed fetching file from Documentation");const a=await e.blob(),r=new File([a],"model.zip",{type:a.type}),{data:s}=await o.mutate({mutation:l,variables:{name:n,kind:i,data:r}});console.log(s)}catch(e){console.log(e)}},className:s+"cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",n]})})}),(0,r.jsx)("div",{className:s+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},27859:(e,t,n)=>{"use strict";n.d(t,{Dr:()=>s,Hp:()=>l});n(67294);var a=n(63750),i=n(89583),r=n(85893);const l=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i._Aq,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.L1p,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i.oPZ,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Mac"})]})]})},s=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i._Aq,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(a.L1p,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,r.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,r.jsx)("div",{className:"my-auto mr-2",children:(0,r.jsx)(i.oPZ,{size:"3em"})})," ",(0,r.jsx)("div",{className:"my-auto",children:"Mac"})]})]})}},21262:(e,t,n)=>{"use strict";n.d(t,{n:()=>lt});var a=n(67294),i=n(98268),r=(n(49263),n(85893));const l=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:t,nodeTypes:n,nodes:a,edges:s,children:o,...d}=e;return(0,r.jsx)(i.tV,{children:(0,r.jsx)(i.x$,{nodes:a,edges:s,onInit:l,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right",...d,children:o})})};function o(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,c=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function u(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(d,"").replace(c,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const m=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...i}=e;return{type:a,id:t,position:n,data:{__typename:a,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(o)||[],h=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,__typename:l,...s}=e;return{id:t,type:l,source:n,sourceHandle:a,target:i,targetHandle:r,data:{__typename:l,...s}}}})).filter(o)||[],p=a.createContext({}),g=()=>(0,a.useContext)(p);var f=n(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),b=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const k=f.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,w=(f.Ps`
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
`),x=f.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,_=f.Ps`
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
  ${w}
  ${x}
`,v=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${_}
`,$=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${_}
`,j=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${v}
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
`,T=f.Ps`
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
  ${j}
  ${P}
`,N=f.Ps`
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
`,A=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,L=f.Ps`
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
`,C=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,W=f.Ps`
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
`,R=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,I=f.Ps`
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
  ${W}
  ${R}
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
  ${W}
  ${R}
  ${I}
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
  ${W}
  ${R}
  ${D}
`,O=f.Ps`
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
`,q=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,F=f.Ps`
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
  ${O}
  ${q}
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
  ${O}
  ${q}
`,G=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${O}
`,B=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
`,M=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
`,H=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
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
  ${O}
  ${q}
`,Y=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${O}
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
  ${F}
  ${U}
  ${G}
  ${B}
  ${M}
  ${H}
  ${z}
  ${Y}
`,K=f.Ps`
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
  ${K}
`,X=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${V}
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
`,he=f.Ps`
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
`,pe=f.Ps`
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
  ${T}
`;f.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${T}
`;f.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${T}
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
  ${T}
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
  ${N}
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
  ${L}
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
  ${pe}
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
  ${pe}
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
  ${pe}
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
  ${he}
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
`;const ge=e=>{const{}=g(),{id:t,sourcePosition:n,targetPosition:a,sourceX:l,sourceY:s,targetX:o,targetY:d,style:c,markerStart:u,markerEnd:m,data:h}=e,[p,f,y]=(0,i.OW)({sourcePosition:n,targetPosition:a,sourceX:l,sourceY:s,targetX:o,targetY:d});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{id:t,style:c,className:"react-flow__edge-path",d:p}),(0,r.jsx)(i.XQ,{children:(0,r.jsx)("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex ",children:h?.stream.map(((e,t)=>(0,r.jsx)("span",{className:"text-xs",children:(e?.kind==b.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")},t)))})})]})};var fe=n(1706);const ye=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),be=e=>{let{id:t,children:n,expandedHeight:i=200,expandedWidth:l=400,collapsedWidth:s=170,collapsedHeight:o=70}=e;const[d,c]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:o});return(0,r.jsx)(fe.Resizable,{height:d.height,width:d.width,onResize:(e,t)=>{let{size:n,handle:a}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40],children:(0,r.jsx)(ye.Provider,{value:{...d,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:l,height:e.isExpanded?o:i})))}},children:(0,r.jsx)("div",{style:{width:d.width+"px",height:d.height+"px"},className:"flex flex-col",children:n})})},t)},ke=e=>t=>(0,r.jsx)(be,{id:t.id,children:(0,r.jsx)(e,{...t})}),we={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},xe=e=>{let{children:t,id:n,color:i="white"}=e;const[l,s]=a.useState(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${we[i]}`,children:t})})};var _e=n(55770),ve=n(86419),$e=n(90512),je=n(57851);function Pe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,je.m)((0,$e.W)(t))}const Te=ve.fC,Se=ve.xz,Ne=a.forwardRef(((e,t)=>{let{className:n,align:a="center",sideOffset:i=4,...l}=e;return(0,r.jsx)(ve.h_,{children:(0,r.jsx)(ve.VY,{ref:t,align:a,sideOffset:i,className:Pe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l})})}));Ne.displayName=ve.VY.displayName;const Ae=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Le=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Ce=(e,t,n)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,n)))),We=e=>{const{data:t,error:n,loading:a}=(0,_e.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Ae,{}),(0,r.jsxs)("div",{className:"text-yellow-500 my-auto",children:[" ",e.name," "]})]}):(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Le,{}),(0,r.jsxs)("div",{className:"text-green-500 my-auto",children:[" ",t?.node?.name," "]})]})})},Re=e=>{const{flow:t}=g(),n=e.data.defaults&&Object.keys(e.data.defaults).filter((n=>e.data.defaults[n]&&null!=e.data.defaults[n]&&0!=e.data.defaults[n]||Ce(t,e.id,n)))||[];return(0,r.jsxs)(Te,{children:[(0,r.jsx)(Se,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full ",children:(0,r.jsx)(_e.Z6,{fallback:(0,r.jsxs)(r.Fragment,{children:[" ",e.data?.name]}),children:(0,r.jsx)(We,{hash:e.data.hash,name:e.data.name})})}),(0,r.jsxs)(Ne,{className:"text-xs bg-back-800 my-auto  ",children:[" ",e.data?.description,n&&n.length>0&&(0,r.jsxs)("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3",children:[(0,r.jsx)("div",{className:"font-semibold text-md mb-2",children:"Constants "}),(0,r.jsx)("div",{className:"flex flex-row gap-2 text-white",children:(0,r.jsx)("div",{className:"flex grid grid-cols-2 gap-2",children:n.map((n=>{const a=Ce(t,e.id,n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:" my-auto",children:[" ",n," "]}),a?(0,r.jsxs)("div",{className:"text-primary-300",children:[" ",(0,r.jsx)("div",{className:"font-bold inline",children:"Global "}),a.port.key," "]}):(0,r.jsxs)("div",{className:"my-auto",children:[" ",e.data.defaults[n]," "]})]})}))})})]})]})]})},Ie=ke((e=>{const{isExpanded:t,toggleExpanded:n}=(0,a.useContext)(ye);return(0,r.jsxs)(xe,{id:e.id,children:[e.data.instream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),(0,r.jsx)("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden ",children:(0,r.jsx)(Re,{...e})})]})})),De=ke((e=>{let{data:{outstream:t,instream:n},id:l}=e;const[s,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(xe,{color:"blue",id:l,children:(0,r.jsx)("div",{className:"px-2 py-2",children:(0,r.jsxs)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:["Inputs"," "]})})}),t.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+l})))]})}));var Ee=n(63750);const Oe=ke((e=>{let{data:{constream:t},id:n}=e;const[i,l]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!0);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(xe,{color:"green",id:n,children:[!s&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex",children:t?.map(((e,t)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n,children:(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsx)("button",{type:"button",onClick:()=>alert("implement"),children:(0,r.jsx)(Ee.yvY,{})})})},t)})))})}),(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsxs)("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>o(!s),children:["Constants"," "]}),(0,r.jsx)("p",{className:"text-gray-700 text-base"})]})]})})})),qe=ke((e=>{let{data:{outstream:t,instream:n},id:l}=e;const[s,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(xe,{color:"red",id:l,children:(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsx)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:"Outputs"}),(0,r.jsxs)("p",{className:"text-gray-700 text-base",children:[(0,r.jsxs)(r.Fragment,{children:[n[0]?.map((e=>e?.kind)).join(" | "),(0,r.jsx)("br",{})]}),!d&&(0,r.jsx)("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>o(!0),children:"Add Documentation"})]})]})}),n.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}})))]})})),Fe="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Ue={ArkitektNode:Ie,ArkitektFilterNode:Ie,LocalNode:Ie,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:l,implementation:s,defaults:o},id:d}=e;const c=(0,i.Bn)();return(0,a.useEffect)((()=>{console.log("Update node internals",d,s),c(d)}),[t,n,l]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"custom-drag-handle text-xs ",children:[s&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[y.Gate].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})}),s&&[y.Split].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(s)&&(0,r.jsxs)("div",{className:Fe,children:[s," ",o?.number&&(0,r.jsx)("b",{className:"font-bold",children:o.number})]}),s&&[y.Ensure].includes(s)&&(0,r.jsx)("div",{className:Fe,children:(0,r.jsx)("h1",{children:"!"})}),s&&[y.ToList].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),(0,r.jsx)("text",{children:s})]}),s&&[y.Omit].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"},children:s})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})]}),s&&[y.If].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"If"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),s&&[y.And].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"And"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),l?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,style:{background:"#555",marginTop:10,height:"1em"}},t))),n?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}},t))),t?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}},t)))]})})},ArgNode:De,ReturnNode:qe,KwargNode:Oe,GraphNode:()=>null},Ge={LabeledEdge:ge,FancyEdge:ge},Be=e=>{let{flow:t}=e;const[n,a,l]=(0,i.Rr)(m(t.graph?.nodes)),[o,d,c]=(0,i.ll)(h(t.graph?.edges));return(0,r.jsx)(p.Provider,{value:{flow:t},children:(0,r.jsx)(s,{nodes:n,edges:o,onNodesChange:l,onEdgesChange:c,elementsSelectable:!0,nodeTypes:Ue,edgeTypes:Ge,fitView:!0,attributionPosition:"bottom-right"})})};var Me=n(89423),He=n(98756);const ze=e=>{const{user:t}=(0,Me.gX)(),{fakts:n}=(0,He.sT)();return(0,r.jsxs)("div",{className:"relative "+e.className,children:[e.children,!t||!n&&(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center",children:e.hideLabel})," "]})};var Ye=n(81154),Ze=n(50319),Ke=n(12854),Ve=n(79592);const Xe=Ke.fC,Je=(Ke.xz,Ke.h_),Qe=(Ke.x8,a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ke.aV,{ref:t,className:Pe("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a})})));Qe.displayName=Ke.aV.displayName;const et=a.forwardRef(((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(Je,{children:[(0,r.jsx)(Qe,{}),(0,r.jsxs)(Ke.VY,{ref:t,className:Pe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",n),...i,children:[a,(0,r.jsxs)(Ke.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(Ve.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}));et.displayName=Ke.VY.displayName;const tt=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:Pe("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};tt.displayName="DialogHeader";const nt=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ke.Dx,{ref:t,className:Pe("text-lg font-semibold leading-none tracking-tight",n),...a})}));nt.displayName=Ke.Dx.displayName;const at=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ke.dk,{ref:t,className:Pe("text-sm text-muted-foreground",n),...a})}));at.displayName=Ke.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rt=e=>{let{flow:t,blockImport:n}=e;const{client:i}=(0,Ye.dB)(),[l,s]=(0,Ze.D)(it,{client:i}),[d,c]=(0,a.useState)(!1),p=async()=>{try{const n=(e=m(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:a,parentNode:i,data:{outstream:r,constream:l,instream:s,...d}}=e;return{outstream:r?.map((e=>e?e.filter(o).map(u):[]))||[[]],constream:l?.map((e=>e?e.filter(o).map(u):[]))||[[]],instream:s?.map((e=>e?e.filter(o).map(u):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:a||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:i,interface:d.interface}}})).filter(o)||[]||[]),a=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,type:l,data:s}=e;return{id:t,typename:l||"Fake type",source:n,sourceHandle:a||"returns",target:i,targetHandle:r||"args",stream:s?.stream.filter(o).map(u)||[]}}})).filter(o)||[])(h(t.graph.edges));let i={nodes:n.filter(o).map(u),edges:a.filter(o).map(u),globals:t.graph.globals.filter(o).map(u),args:t.graph.args.filter(o).map(u),returns:t.graph.returns.filter(o).map(u)};await l({variables:{name:t.name,graph:i}});c(!0)}catch(n){alert(n.message)}var e};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Xe,{open:d,onOpenChange:c,children:(0,r.jsx)(et,{children:(0,r.jsxs)(tt,{children:[(0,r.jsx)(nt,{children:"Succesfully imported workflow"}),(0,r.jsx)(at,{children:"We have imported the workflow into Arkitekt. You can now use it in your flows."})]})})}),(0,r.jsx)("button",{onClick:()=>p(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer",children:"Re-Import into Arkitekt"})]})},lt=e=>(0,r.jsxs)("div",{className:"border border-1 rounded border-gray-800",children:[(0,r.jsx)("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative",children:(0,r.jsx)(Be,{flow:e.flow})}),(0,r.jsx)(ze,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow",children:(0,r.jsx)(Ye.Ot,{children:(0,r.jsx)(rt,{flow:e.flow,blockImport:e.blockImport})})})]})}}]);