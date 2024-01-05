(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8248],{60253:(e,n,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/smart.8ca3fea.640.png 640w,"+t.p+"assets/ideal-img/smart.7f6e585.1320.png 1320w,"+t.p+"assets/ideal-img/smart.ef5c323.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/smart.8ca3fea.640.png",width:640,height:736},{path:t.p+"assets/ideal-img/smart.7f6e585.1320.png",width:1320,height:1517},{path:t.p+"assets/ideal-img/smart.ef5c323.2000.png",width:2e3,height:2299}],src:t.p+"assets/ideal-img/smart.8ca3fea.640.png",toString:function(){return t.p+"assets/ideal-img/smart.8ca3fea.640.png"},placeholder:void 0,width:640,height:736},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAInAAACJwG+ElQIAAABa0lEQVR4nGNgYGBg+P//P2PazDOs9f//M4H4DAz/GUFiIAxiMyCD45evB+9+8kQYxp/Y/Uxr0dw35jCDwIJzTz1xWXnp4ew1H35VzLl3T37Vju8qG9b+K1yz6lfdnm3/9eCmhRlXrM1JmfVm3Zf/d+c/edQ2b/uL9sbY9Xc70ld/mlRzoR6usHPekTlV3VtvFbRvODnh1KWO6duetQZLV5+MVUy935+7tQiu8OD//1NnnX12ITqwb1/fmSvLp+55Mc1PIH+PG3fotYakbblwhVN33+hpnX3ocGndmi0zbtxqm7XvRX116PrNpf4LTkysupQGV+ivnNucFT99x4bv/9csfvHEee6qp4ElgQvWN8bM2D2pZH8CXGGoTlFtftqcdZu+/1887/EDp3nrnvoXx85fVhI7ZeOUtmPRcIU5iTM963u2pW348j9uwaNHZrM23rdINuiOTzHuzGhM2GYKVwiLhf9IsYCIGQgAACwnw1gK2aiDAAAAAElFTkSuQmCC"}},26216:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>h,toc:()=>f});var i=t(85893),a=t(11151),l=t(15944),r=t(60253),s=t.n(r),o=(t(33346),t(21262)),d=t(71698);t(88545),t(33850);const c=JSON.parse('{"__typename":"Flow","id":"5","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":2030,"y":194},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","position":{"__typename":"Position","x":257,"y":-69},"typename":"ArkitektNode","parentNode":null,"hash":"db259ac8c61a25c28459670ce0dc432fd5ece046f366037d8a5f3992a91f4a57","kind":"FUNCTION","defaults":{"channel":null,"position":null,"objective":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channel","label":"channel","identifier":"@mikro/channel","scope":"GLOBAL","kind":"STRUCTURE","description":"The channel to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchChannels($search: String, $values: [ID]) {\\n  options: channels(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire 2D","description":"Acquire a 2D image","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","position":{"__typename":"Position","x":1437,"y":172},"typename":"ArkitektNode","parentNode":null,"hash":"1da09dd41ff6c5496b3cc4a56ac94181ded98473f60a63065b0a35c21caafe41","kind":"FUNCTION","defaults":{"z_step":0.3,"channel":null,"z_steps":2,"position":null,"objective":null,"crop_physical_width":null,"crop_physical_height":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_height","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_width","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"channel","label":"channel","identifier":"@mikro/channel","scope":"GLOBAL","kind":"STRUCTURE","description":"The channel to use","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query SearchChannels($search: String, $values: [ID]) {\\n  options: channels(name: $search, limit: 30, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_height","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"crop_physical_width","label":null,"identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire Stack","description":"Acquire a 3D image stack, allowing to move to a new Position, setting \\nan Objective, and an active channel.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","position":{"__typename":"Position","x":567,"y":-3},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","position":{"__typename":"Position","x":394,"y":252},"typename":"ArkitektNode","parentNode":null,"hash":"fef37534407806c68cb8d452739c94dbd09cf1d15b26197d70a1731be561d683","kind":"FUNCTION","defaults":{"c":0,"t":0,"z":0,"rep":null,"limit":null,"distance":null,"max_size":null,"min_size":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image to label outliers for","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":"The rois for the clusters","assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/roi","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"c","label":"c","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The channel to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"t","label":"t","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The timepoint to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z","label":"z","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The z-slice to use. Defaults to 0.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Mark Clusters","description":"Takes a masked image and marks rois based on dense clusters of a certain size \\nand density of their center of mass","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","position":{"__typename":"Position","x":625,"y":282},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of roi","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/roi","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofThe rois for the clusters","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","position":{"__typename":"Position","x":868,"y":416},"typename":"ArkitektNode","parentNode":null,"hash":"4ad8b904209cb3f29528a2855b452b1ea62acaa4c64f8dc4a2523407405d3348","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":"roi","identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":"The roi to measure","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Rectangular Roi to Dimensions","description":"Measures the size of a Rectangular Roi in microns\\n(only works for Rectangular ROIS)","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","position":{"__typename":"Position","x":809,"y":84},"typename":"ArkitektNode","parentNode":null,"hash":"eaa2b35a454c9b3209797c68842a1057c62dbff001feadb49f5fed3b646c8e7c","kind":"FUNCTION","defaults":{"roi":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"roi","label":null,"identifier":"@mikro/roi","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_rois($search: String, $values: [ID], $representation: ID) {\\n  options: rois(repname: $search, ids: $values, representation: $representation) {\\n    label: id\\n    value: id\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Roi to Position","description":"Transforms a ROI into a Position on the governing stage","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","position":{"__typename":"Position","x":1109,"y":419},"typename":"ReactiveNode","parentNode":null,"implementation":"ADD","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ReactiveNode","id":"reactive-64242809-5547-4154-99bf-e895dbd7a991","position":{"__typename":"Position","x":1193,"y":265},"typename":"ReactiveNode","parentNode":null,"implementation":"ZIP","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}],[{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The Downscaled image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return0","label":"height","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The height of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false},{"__typename":"Port","key":"return1","label":"width","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The width of the ROI in microns","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"},{"__typename":"ReactiveNode","id":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","position":{"__typename":"Position","x":1682,"y":238},"typename":"ReactiveNode","parentNode":null,"implementation":"BUFFER_COMPLETE","defaults":null,"instream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7arg_0","source":"1","sourceHandle":"return_0","target":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7return_0-arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fearg_0","source":"arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7","sourceHandle":"return_0","target":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fereturn_0-arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0arg_0","source":"arkid-be48f397-b7c8-4a44-a5cb-1dfbce8924fe","sourceHandle":"return_0","target":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0return_0-reactive-a43ba94d-4129-4802-9052-0047d7b48a12arg_0","source":"arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0","sourceHandle":"return_0","target":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-a43ba94d-4129-4802-9052-0047d7b48a12return_0-arkid-983b6436-a397-4427-ac20-06d1a2447cddarg_0","source":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","sourceHandle":"return_0","target":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"roi","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-a43ba94d-4129-4802-9052-0047d7b48a12return_0-arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3arg_0","source":"reactive-a43ba94d-4129-4802-9052-0047d7b48a12","sourceHandle":"return_0","target":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"roi","kind":"STRUCTURE","identifier":"@mikro/roi","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3return_0-reactive-7b559888-d3f7-4381-9532-dcab3b898a68arg_0","source":"arkid-561650b2-5ff4-49d9-8013-a066bd3d8eb3","sourceHandle":"return_0","target":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null},{"__typename":"StreamItem","key":"return1","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-983b6436-a397-4427-ac20-06d1a2447cddreturn_0-reactive-64242809-5547-4154-99bf-e895dbd7a991arg_0","source":"arkid-983b6436-a397-4427-ac20-06d1a2447cdd","sourceHandle":"return_0","target":"reactive-64242809-5547-4154-99bf-e895dbd7a991","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-7b559888-d3f7-4381-9532-dcab3b898a68return_0-reactive-64242809-5547-4154-99bf-e895dbd7a991arg_1","source":"reactive-7b559888-d3f7-4381-9532-dcab3b898a68","sourceHandle":"return_0","target":"reactive-64242809-5547-4154-99bf-e895dbd7a991","targetHandle":"arg_1","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null},{"__typename":"StreamItem","key":"return1","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-64242809-5547-4154-99bf-e895dbd7a991return_0-arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40arg_0","source":"reactive-64242809-5547-4154-99bf-e895dbd7a991","sourceHandle":"return_0","target":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"position","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":true,"child":null,"variants":null},{"__typename":"StreamItem","key":"crop_physical_height","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":true,"child":null,"variants":null},{"__typename":"StreamItem","key":"crop_physical_width","kind":"FLOAT","identifier":null,"scope":"GLOBAL","nullable":true,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40return_0-reactive-e3907290-8f82-49ce-8046-d4f8b5056356arg_0","source":"arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40","sourceHandle":"return_0","target":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-e3907290-8f82-49ce-8046-d4f8b5056356return_0-2arg_0","source":"reactive-e3907290-8f82-49ce-8046-d4f8b5056356","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"buffer","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position"],"port":{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.distance"],"port":{"__typename":"Port","key":"distance","label":"distance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The distance between points in a cluster (eps in DBSCAN) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of a cluster (min_samples in DBSCAN) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit"],"port":{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to  Mark Clusters)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number"],"port":{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to Add)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to Acquire Stack)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps"],"port":{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to Acquire Stack)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step"],"port":{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to  Acquire Stack)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}}],"args":[],"returns":[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]},"restrict":[],"name":"shaky-pink-tiger","screenshot":null,"createdAt":"2023-10-31T13:48:13.898239+00:00","workspace":{"__typename":"Workspace","id":"3"}}'),u=JSON.parse('{"__typename":"Flow","id":"8","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":2030,"y":194},"typename":"ReturnNode","parentNode":null,"instream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","position":{"__typename":"Position","x":1284,"y":87},"typename":"ArkitektNode","parentNode":null,"hash":"3557c04acfe85b887752a96ab40ed44f12ec2b42f17d30a1e420a77f1f9b0086","kind":"GENERATOR","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"outstream":[[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"position","label":"position","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"The position to move to (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.position)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-a8a2e7c1-f757-4983-a106-4f3ce0c171c7.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Acquire Clusters","description":"No Description","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","position":{"__typename":"Position","x":482,"y":98},"typename":"ArkitektNode","parentNode":null,"hash":"16145ad360ed5299339345dbff246eba3e3e0e294d6cea842a85945e6f1bb1cb","kind":"FUNCTION","defaults":{},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/position","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Retrieve Positions","description":"retrieves positions within a stage context established\\nright here","retryDelay":2000},{"__typename":"ReactiveNode","id":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","position":{"__typename":"Position","x":900,"y":132},"typename":"ReactiveNode","parentNode":null,"implementation":"CHUNK","defaults":null,"instream":[[{"__typename":"Port","key":"list0","label":"List of position","identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/position","kind":"STRUCTURE","scope":"GLOBAL","nullable":true,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"element","label":"Element ofreturn0","identifier":"@mikro/position","scope":"GLOBAL","kind":"STRUCTURE","description":"Element ofnull","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_positions($search: String, $values: [ID], $stage: ID) {\\n  options: positions(name: $search, limit: 30, stage: $stage, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[],"constants":null,"name":"","description":"No description"}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-703a790c-030f-4b7f-858e-854aeef0a603arg_0","source":"1","sourceHandle":"return_0","target":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-703a790c-030f-4b7f-858e-854aeef0a603return_0-reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486arg_0","source":"arkid-703a790c-030f-4b7f-858e-854aeef0a603","sourceHandle":"return_0","target":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486return_0-arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8arg_0","source":"reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486","sourceHandle":"return_0","target":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"position","kind":"STRUCTURE","identifier":"@mikro/position","scope":"GLOBAL","nullable":true,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8return_0-2arg_0","source":"arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"buffer","kind":"LIST","identifier":null,"scope":"GLOBAL","nullable":false,"child":{"__typename":"StreamItemChild","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null},"variants":null}]}],"globals":[{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.max_size"],"port":{"__typename":"Port","key":"max_size","label":"max_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum size of a cluster (threshold for number of labels in a cluster) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.max_size) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.max_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.limit"],"port":{"__typename":"Port","key":"limit","label":"limit","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The maximum number of clusters to return. Defaults to None. (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.limit) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.limit)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.number"],"port":{"__typename":"Port","key":"number","label":"Number","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The number to add to each stream item (maps to reactive-7b559888-d3f7-4381-9532-dcab3b898a68.number) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.number)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_steps"],"port":{"__typename":"Port","key":"z_steps","label":"z_steps","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The amount of zsteps (around midpoint). Defaults to 2. (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_steps) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_steps)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_step"],"port":{"__typename":"Port","key":"z_step","label":"z_step","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The z-step to take in um. Defaults to 0.3 (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.z_step) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.z_step)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.distance"],"port":{"__typename":"Port","key":"distance","label":"distance","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"The distance between points in a cluster (eps in DBSCAN) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.distance) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.distance)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.min_size"],"port":{"__typename":"Port","key":"min_size","label":"min_size","identifier":null,"scope":"GLOBAL","kind":"INT","description":"The minimum size of a cluster (min_samples in DBSCAN) (maps to arkid-5c306ccc-2fc4-4a6c-802a-cc61839e50b0.min_size) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.min_size)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}},{"__typename":"Global","toKeys":["arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.objective"],"port":{"__typename":"Port","key":"objective","label":"objective","identifier":"@mikro/objective","scope":"GLOBAL","kind":"STRUCTURE","description":"The objective to use (maps to arkid-afcdd685-cdcd-4ec5-accd-bf84625f2f40.objective) (maps to arkid-68e3cf9b-6287-4c96-8cb3-3e5451a192f8.objective)","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_objectives($search: String, $values: [ID]) {\\n  options: objectives(search: $search, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iteration_sleep"],"port":{"__typename":"Port","key":"iteration_sleep","label":"Iteration Sleep (ms)","identifier":null,"scope":"GLOBAL","kind":"FLOAT","description":"How long should the node sleep between iterations (maps to reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iteration_sleep)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}},{"__typename":"Global","toKeys":["reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iterations"],"port":{"__typename":"Port","key":"iterations","label":"Iterations","identifier":null,"scope":"GLOBAL","kind":"INT","description":"How many times should the node go through the list (maps to reactive-035a415b-6f77-48f8-bf35-7e7ea56d3486.iterations)","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":false}}],"args":[],"returns":[{"__typename":"Port","key":"buffer","label":null,"identifier":null,"scope":"GLOBAL","kind":"LIST","description":null,"assignWidget":null,"returnWidget":null,"child":{"__typename":"PortChild","identifier":"@mikro/representation","kind":"STRUCTURE","scope":"GLOBAL","nullable":false,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null},"variants":null,"nullable":false}]},"restrict":[],"name":"silly-persimmon-gecko","screenshot":null,"createdAt":"2023-10-31T13:58:10.213381+00:00","workspace":{"__typename":"Workspace","id":"2"}}'),m={title:"Smart Microscopy",sidebar_label:"Smart Microscopy",sidebar_position:4},p=void 0,h={id:"showcases/paper/smart_microscopy_workflow",title:"Smart Microscopy",description:"Arkitekt was designed for the increasingly complex real-time microscopy workflows of today.",source:"@site/docs/showcases/paper/smart_microscopy_workflow.mdx",sourceDirName:"showcases/paper",slug:"/showcases/paper/smart_microscopy_workflow",permalink:"/docs/showcases/paper/smart_microscopy_workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/showcases/paper/smart_microscopy_workflow.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Smart Microscopy",sidebar_label:"Smart Microscopy",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Streaming Analysis",permalink:"/docs/showcases/paper/streaming_workflow"},next:{title:"Troubleshooting",permalink:"/docs/category/troubleshooting"}},g={},f=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Acquisition Computer",id:"acquisition-computer",level:4},{value:"Installing the Workflows",id:"installing-the-workflows",level:2},{value:"Acquire Clusters Workflow",id:"acquire-clusters-workflow",level:3},{value:"Deploying the Workflow",id:"deploying-the-workflow",level:3},{value:"Multi Dimensional Workflow",id:"multi-dimensional-workflow",level:3}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Arkitekt was designed for the increasingly complex real-time microscopy workflows of today.\nTo illustrate Arkitekt readiness for ",(0,i.jsx)(n.code,{children:"Smart Microscopy"}),", we deviced this simply no-code example\nof a ",(0,i.jsx)(n.code,{children:"Smart Microscopy"})," workflow to perform the 3D live monitoring of cell\nclusters with a 40X objective, while scanning a large field of view with a 20X objective."]}),"\n",(0,i.jsx)(n.p,{children:"In this workflow, the Micro-Manager open-source software (Edelstein et al. 2014) is setup for a\nmultidimensional acquisition. The user then interactively sets up a grid of positions on large sample\narea (2.61mm x 2.61mm, corresponding to 4*4 stage positions) containing living fluorescent\ncells."}),"\n",(0,i.jsx)(n.p,{children:"During the workflow defined positions are then acquired at 20X magnification every 30 minutes for 24 hours.\nFor every acquired 20X magnification image, nuclei are then automatically segmented on a remote\ncomputer using the Stardist (Weigert et al. 2020) algorithm, and cell clusters are computed with the help of\nDBSCAN (Ester et al. 1996).\nWhen one or more of such identified clusters are detected, the ROIs central coordinates and\ndimensions are translated back to stage coordinates and sent back to the microscope. 3D stacks\nof these positions (25 planes, 0.5\xb5m step size) are then collected at higher magnification\n(40X) on a well-adjusted cameroa ROI fitting the cell clusters size. After all the positive events are\ndetected, acquired in 3D high-resolution and displayed on the web-interface, the next image\nis acquired at 20X magnification"}),"\n",(0,i.jsxs)("div",{className:"mt-2",children:[(0,i.jsx)(l.Z,{img:s()}),(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:"The Smart Microscopy Workflow"})})]}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.admonition,{title:"Please read",type:"tip",children:(0,i.jsxs)(n.p,{children:["We ",(0,i.jsx)(n.strong,{children:"strongly"})," suggest to go through the ",(0,i.jsx)(n.a,{href:"/docs/introduction/first_steps",children:"Getting Started"})," guide before attempting to run this workflow.\nIt will guide you through the installation of the Arkitekt platform and the setup of your first workflow, as well as how to install plugins\nand apps."]})}),"\n",(0,i.jsx)(n.p,{children:"This workflow is designed to run on a microscope computer running Windows 10 as well as on a remote analysis computer\nthat will power the Arkitekt platform and the image analysis. To enable GPU acceleration for the Stardist\nsegmentation, the analysis computer needs to have access to a CUDA 11 enabled GPU (tested on Nvidia GeforceRTX 2080Ti).\nThe microscope computer will need to be connected to the same network as the remote computer."}),"\n",(0,i.jsx)(n.h4,{id:"acquisition-computer",children:"Acquisition Computer"}),"\n",(0,i.jsx)(n.p,{children:"Additionally to run this workflow you will need to have the following installed on your microscope computer:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://micro-manager.org/",children:"Micro-Manager"})," (version 2.0.1 2023.05.23 (later versions might work as well))"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jhnnsrs/mikro-manager",children:"MikroManager"})," (version 0.0.1) ",(0,i.jsx)(n.a,{href:"https://github.com/jhnnsrs/mikro-manager/releases/latest",children:"Download here"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As well as the following plugins installed on your Arkitekt computer:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Reaktor Plugin (>=0.0.3) from the repository ",(0,i.jsx)(n.a,{href:"https://github.com/jhnnsrs/reaktor",children:"https://github.com/jhnnsrs/reaktor"})]}),"\n",(0,i.jsxs)(n.li,{children:["Stdlib Plugin (>=version 0.3.10) from the repository ",(0,i.jsx)(n.a,{href:"https://github.com/jhnnsrs/stdlib",children:"https://github.com/jhnnsrs/stdlib"})]}),"\n",(0,i.jsxs)(n.li,{children:["Segmentor Plugin (>version 0.3.4 ) from the repository ",(0,i.jsx)(n.a,{href:"https://github.com/jhnnsrs/segmentor",children:"https://github.com/jhnnsrs/segmentor"})]}),"\n"]}),"\n",(0,i.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,i.jsx)(d.I,{repo:"stdlib",user:"jhnnsrs",branch:"master"}),(0,i.jsx)(d.I,{repo:"segmentor",user:"jhnnsrs",branch:"master"}),(0,i.jsx)(d.I,{repo:"reaktor",user:"jhnnsrs",branch:"master"})]}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-workflows",children:"Installing the Workflows"}),"\n",(0,i.jsxs)(n.p,{children:["This Smart Microscopy workflow is composed of two smaller workflows, the ",(0,i.jsx)(n.code,{children:"Acquire Clusters"})," workflow and the ",(0,i.jsx)(n.code,{children:"Multi Dimensional"})," workflow.\nIn Which the ",(0,i.jsx)(n.code,{children:"Acquire Clusters"})," workflow will be nested in the ",(0,i.jsx)(n.code,{children:"Multi Dimensional"})," workflow."]}),"\n",(0,i.jsx)(n.h3,{id:"acquire-clusters-workflow",children:"Acquire Clusters Workflow"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Acquire Clusters"})," workflow is the workflow that will acquire a 20X Image, segment it, detect cluster and send the coordinates\nto the microscope to acquire all clusters with a 40X objective. To install this workflow connect this website to you Arkitekt instance and click on the Import buttom below:"]}),"\n",(0,i.jsx)(o.n,{flow:c}),"\n",(0,i.jsx)(n.p,{children:"A few things to note about this workflow:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["This workflow utilizes a pretrained Stardist model to segment the nuclei in the image. This model comes preinstalled with the Segmentor plugin, by changing this node\nwith a ",(0,i.jsx)(n.code,{children:"Predict Stardist"})," node you can use your own Stardist model."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The parameters to the Cell Cluster Detection are Global Variables of the Workflow"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploying-the-workflow",children:"Deploying the Workflow"}),"\n",(0,i.jsxs)(n.p,{children:["During the Deployment of the smaller workflow it is imperative that you name the workflow ",(0,i.jsx)(n.code,{children:"Acquire Clusters"})," as this and the parameters of the workflow will be used by the ",(0,i.jsx)(n.code,{children:"Multi Dimensional"})," workflow,\nto adequately detect the workflow. If you choose to name the workflow differently you will need to change the respective ",(0,i.jsx)(n.code,{children:"Acquire Clusters"})," node in the ",(0,i.jsx)(n.code,{children:"Multi Dimensional"})," workflow.\nYou do not need to reserve this workflow, as it will be reserved by the ",(0,i.jsx)(n.code,{children:"Multi Dimensional"})," workflow."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:"This imperative naming need is a current bug and will be fixed in a future release of Arkitekt."})]}),"\n",(0,i.jsx)(n.h3,{id:"multi-dimensional-workflow",children:"Multi Dimensional Workflow"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Multi Dimensional"})," workflow is the workflow that will run the above workflow in a multidimensional acquistions for all position every X minutes for X hours."]}),"\n",(0,i.jsx)(o.n,{flow:u}),"\n",(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{children:(0,i.jsx)(n.p,{children:"Once connected this pane will also give you an overview over the apps that\nstill need to be installed, nodes in green have been installed, nodes in\nyellow still lack an implementation. Of course feel free to explore this\ngraph more interactively in your orkestrator interface"})})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Test Environment"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.p,{children:"This workflow was tested on the following environments:"}),(0,i.jsx)("br",{}),(0,i.jsx)(n.p,{children:"Acquisition Computer:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Intel Xeon CPU E5-2620 v4 @ 2.10GHz"}),"\n",(0,i.jsx)(n.li,{children:"128GB RAM"}),"\n",(0,i.jsx)(n.li,{children:"Nikon Ti2-E Microscope"}),"\n",(0,i.jsx)(n.li,{children:"Windows 10"}),"\n",(0,i.jsx)(n.li,{children:"Micro-Manager 2.0.1 2023.05.23"}),"\n",(0,i.jsx)(n.li,{children:"MikroManager 0.0.1"}),"\n"]}),(0,i.jsx)(n.p,{children:"Analysis Computer"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Intel(R) Core(TM) i9-10900KF CPU @ 3.70GHz"}),"\n",(0,i.jsx)(n.li,{children:"Ubuntu 22.04"}),"\n",(0,i.jsx)(n.li,{children:"Arkitekt Paper Channel"}),"\n",(0,i.jsx)(n.li,{children:"Segmentor Plugin 0.3.4"}),"\n",(0,i.jsx)(n.li,{children:"Stdlib Plugin 0.3.9"}),"\n"]})]})]})]})}function y(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},33850:(e,n,t)=>{"use strict";t.d(n,{x:()=>s});var i=t(61872),a=t(97120),l=(t(67294),t(89423)),r=t(85893);const s=e=>{const{user:n}=(0,l.gX)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i._H,{noAppFallback:(0,r.jsx)(r.Fragment,{children:"Not connected"}),loginButtonProps:{buildGrant:async e=>({clientId:e.lok.client_id,clientSecret:e.lok.client_secret,scopes:e.lok.scopes,redirectUri:window.location.origin+"/callback"}),className:e=>"px-2  py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md "+(e.authenticating?"animate-pulse":"")},connectButtonProps:{buttonClassName:()=>"px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400  rounded rounded-md"},children:(0,r.jsx)(a.SS,{children:e.children})})})}},71698:(e,n,t)=>{"use strict";t.d(n,{I:()=>c});var i=t(37887),a=t(69819),l=t(31230),r=(t(67294),t(85893));const s=l.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,o=l.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,d="my-2 p-2 rounded-md text-black text-center w-60 ",c=(0,a.Zh)((e=>{let{branch:n,repo:t,user:l}=e;const{client:c}=(0,a.AA)(),u=`${l}/${t}:${n}`,{data:m,refetch:p}=(0,i.a)(o,{client:c,variables:{tag:u},pollInterval:3e3});return(0,r.jsx)(r.Fragment,{children:m?.githubRepo?(0,r.jsxs)("button",{className:d+"bg-green-300",children:[" \u2705 ",u]}):(0,r.jsxs)("button",{onClick:async()=>{try{const{data:e}=await c.mutate({mutation:s,variables:{branch:n,repo:t,user:l}});await p(),console.log(e)}catch(e){console.log(e)}},className:d+"cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",u]})})}),(0,r.jsx)("div",{className:d+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},88545:(e,n,t)=>{"use strict";t.d(n,{x:()=>o});var i=t(97120),a=t(31230),l=(t(67294),t(85893));const r=a.ZP`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`,s="my-2 p-2 rounded-md text-black text-center w-60 ",o=(0,i.nk)((e=>{let{url:n,name:t,kind:a}=e;const{client:o}=(0,i.rM)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("button",{onClick:async()=>{console.log(n);try{const e=await fetch(n);if(!e.ok)throw new Error("Failed fetching file from Documentation");const i=await e.blob(),l=new File([i],"model.zip",{type:i.type}),{data:s}=await o.mutate({mutation:r,variables:{name:t,kind:a,data:l}});console.log(s)}catch(e){console.log(e)}},className:s+"cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",t]})})}),(0,l.jsx)("div",{className:s+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},21262:(e,n,t)=>{"use strict";t.d(n,{n:()=>sn});var i=t(67294),a=t(98268),l=(t(49263),t(85893));const r=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:n,nodeTypes:t,nodes:i,edges:s,children:o,...d}=e;return(0,l.jsx)(a.tV,{children:(0,l.jsx)(a.x$,{nodes:i,edges:s,onInit:r,nodeTypes:t,edgeTypes:n,fitView:!0,attributionPosition:"top-right",...d,children:o})})};function o(e){return null!=e}const d=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,c=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function u(e){console.log(JSON.stringify(e));const n=JSON.stringify(e).replace(d,"").replace(c,"{");console.log(n);let t=JSON.parse(n);return console.log(t),t}const m=e=>e?.map((e=>{if(e){const{id:n,position:t,__typename:i,...a}=e;return{type:i,id:n,position:t,data:{__typename:i,...a},dragHandle:".custom-drag-handle",parentNode:a.parentNode?a.parentNode:void 0}}})).filter(o)||[],p=e=>e?.map((e=>{if(e){const{id:n,source:t,sourceHandle:i,target:a,targetHandle:l,__typename:r,...s}=e;return{id:n,type:r,source:t,sourceHandle:i,target:a,targetHandle:l,data:{__typename:r,...s}}}})).filter(o)||[],h=i.createContext({}),g=()=>(0,i.useContext)(h);var f=t(31230);let b=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),y=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const k=f.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,_=(f.Ps`
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
`),v=f.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,x=f.Ps`
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
  ${_}
  ${v}
`,w=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${x}
`,$=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${x}
`,L=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${w}
  ${$}
  ${k}
`,T=f.Ps`
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
  ${L}
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
  ${L}
  ${T}
`,W=f.Ps`
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
  ${L}
  ${T}
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
  ${L}
  ${T}
`,j=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,A=f.Ps`
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
  ${j}
`,N=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,I=f.Ps`
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
`,C=f.Ps`
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
  ${I}
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
  ${I}
  ${R}
  ${C}
`,O=f.Ps`
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
  ${I}
  ${R}
  ${D}
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
  ${O}
`,G=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,B=f.Ps`
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
  ${G}
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
  ${G}
`,q=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${E}
`,F=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${E}
`,z=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${E}
`,M=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${E}
`,H=f.Ps`
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
  ${G}
`,K=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${E}
`,X=f.Ps`
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
  ${B}
  ${U}
  ${q}
  ${F}
  ${z}
  ${M}
  ${H}
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
`,Z=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${Y}
`,Q=f.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${Z}
`,J=f.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${Z}
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
  ${Q}
  ${J}
`,ne=f.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${O}
`,te=f.Ps`
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
  ${X}
  ${ee}
  ${ne}
  ${O}
`,ie=f.Ps`
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
  ${j}
  ${te}
`,ae=f.Ps`
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
`,le=f.Ps`
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
  ${le}
`,se=f.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${te}
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
  ${O}
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
  ${te}
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
  ${te}
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
  ${W}
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
  ${N}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${A}
`;f.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${ae}
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
  ${ae}
`;f.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${ie}
`;f.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${j}
`;f.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${te}
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
  ${le}
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
  ${j}
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
`;const ge=e=>{const{}=g(),{id:n,sourcePosition:t,targetPosition:i,sourceX:r,sourceY:s,targetX:o,targetY:d,style:c,markerStart:u,markerEnd:m,data:p}=e,[h,f,b]=(0,a.OW)({sourcePosition:t,targetPosition:i,sourceX:r,sourceY:s,targetX:o,targetY:d});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("path",{id:n,style:c,className:"react-flow__edge-path",d:h}),(0,l.jsx)(a.XQ,{children:(0,l.jsx)("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${b}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex ",children:p?.stream.map(((e,n)=>(0,l.jsx)("span",{className:"text-xs",children:(e?.kind==y.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")},n)))})})]})};var fe=t(1706);const be=i.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),ye=e=>{let{id:n,children:t,expandedHeight:a=200,expandedWidth:r=400,collapsedWidth:s=170,collapsedHeight:o=70}=e;const[d,c]=(0,i.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:o});return(0,l.jsx)(fe.Resizable,{height:d.height,width:d.width,onResize:(e,n)=>{let{size:t,handle:i}=n;c((e=>({...e,width:t.width,height:t.height,isExpanded:t.height>200&&t.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40],children:(0,l.jsx)(be.Provider,{value:{...d,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:r,height:e.isExpanded?o:a})))}},children:(0,l.jsx)("div",{style:{width:d.width+"px",height:d.height+"px"},className:"flex flex-col",children:t})})},n)},ke=e=>n=>(0,l.jsx)(ye,{id:n.id,children:(0,l.jsx)(e,{...n})}),_e={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},ve=e=>{let{children:n,id:t,color:a="white"}=e;const[r,s]=i.useState(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${_e[a]}`,children:n})})};var xe=t(55770),we=t(86419),$e=t(90512),Le=t(57851);function Te(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,Le.m)((0,$e.W)(n))}const Pe=we.fC,We=we.xz,Se=i.forwardRef(((e,n)=>{let{className:t,align:i="center",sideOffset:a=4,...r}=e;return(0,l.jsx)(we.h_,{children:(0,l.jsx)(we.VY,{ref:n,align:i,sideOffset:a,className:Te("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r})})}));Se.displayName=we.VY.displayName;const je=()=>(0,l.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Ae=()=>(0,l.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Ne=(e,n,t)=>e.graph.globals.find((e=>e.toKeys.includes(((e,n)=>`${e}.${n}`)(n,t)))),Ie=e=>{const{data:n,error:t,loading:i}=(0,xe.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return(0,l.jsx)(l.Fragment,{children:t?(0,l.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,l.jsx)(je,{}),(0,l.jsxs)("div",{className:"text-yellow-500 my-auto",children:[" ",e.name," "]})]}):(0,l.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,l.jsx)(Ae,{}),(0,l.jsxs)("div",{className:"text-green-500 my-auto",children:[" ",n?.node?.name," "]})]})})},Re=e=>{const{flow:n}=g(),t=e.data.defaults&&Object.keys(e.data.defaults).filter((t=>e.data.defaults[t]&&null!=e.data.defaults[t]&&0!=e.data.defaults[t]||Ne(n,e.id,t)))||[];return(0,l.jsxs)(Pe,{children:[(0,l.jsx)(We,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full ",children:(0,l.jsx)(xe.Z6,{fallback:(0,l.jsxs)(l.Fragment,{children:[" ",e.data?.name]}),children:(0,l.jsx)(Ie,{hash:e.data.hash,name:e.data.name})})}),(0,l.jsxs)(Se,{className:"text-xs bg-back-800 my-auto  ",children:[" ",e.data?.description,t&&t.length>0&&(0,l.jsxs)("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3",children:[(0,l.jsx)("div",{className:"font-semibold text-md mb-2",children:"Constants "}),(0,l.jsx)("div",{className:"flex flex-row gap-2 text-white",children:(0,l.jsx)("div",{className:"flex grid grid-cols-2 gap-2",children:t.map((t=>{const i=Ne(n,e.id,t);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:" my-auto",children:[" ",t," "]}),i?(0,l.jsxs)("div",{className:"text-primary-300",children:[" ",(0,l.jsx)("div",{className:"font-bold inline",children:"Global "}),i.port.key," "]}):(0,l.jsxs)("div",{className:"my-auto",children:[" ",e.data.defaults[t]," "]})]})}))})})]})]})]})},Ce=ke((e=>{const{isExpanded:n,toggleExpanded:t}=(0,i.useContext)(be);return(0,l.jsxs)(ve,{id:e.id,children:[e.data.instream.map(((e,n)=>(0,l.jsx)(a.HH,{type:"target",position:a.Ly.Left,id:"arg_"+n,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,n)=>(0,l.jsx)(a.HH,{type:"source",position:a.Ly.Right,id:"return_"+n,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),(0,l.jsx)("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden ",children:(0,l.jsx)(Re,{...e})})]})})),De=ke((e=>{let{data:{outstream:n,instream:t},id:r}=e;const[s,o]=(0,i.useState)(!1),[d,c]=(0,i.useState)(!0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ve,{color:"blue",id:r,children:(0,l.jsx)("div",{className:"px-2 py-2",children:(0,l.jsxs)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:["Inputs"," "]})})}),n.map(((e,n)=>(0,l.jsx)(a.HH,{type:"source",position:a.Ly.Right,id:"return_"+n,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+r})))]})}));var Oe=t(63750);const Ee=ke((e=>{let{data:{constream:n},id:t}=e;const[a,r]=(0,i.useState)(!1),[s,o]=(0,i.useState)(!0);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(ve,{color:"green",id:t,children:[!s&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex",children:n?.map(((e,n)=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+t,children:(0,l.jsx)("div",{className:"flex justify-between",children:(0,l.jsx)("button",{type:"button",onClick:()=>alert("implement"),children:(0,l.jsx)(Oe.yvY,{})})})},n)})))})}),(0,l.jsxs)("div",{className:"px-2 py-2",children:[(0,l.jsxs)("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>o(!s),children:["Constants"," "]}),(0,l.jsx)("p",{className:"text-gray-700 text-base"})]})]})})})),Ge=ke((e=>{let{data:{outstream:n,instream:t},id:r}=e;const[s,o]=(0,i.useState)(!1),[d,c]=(0,i.useState)(!0);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ve,{color:"red",id:r,children:(0,l.jsxs)("div",{className:"px-2 py-2",children:[(0,l.jsx)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!d),children:"Outputs"}),(0,l.jsxs)("p",{className:"text-gray-700 text-base",children:[(0,l.jsxs)(l.Fragment,{children:[t[0]?.map((e=>e?.kind)).join(" | "),(0,l.jsx)("br",{})]}),!d&&(0,l.jsx)("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>o(!0),children:"Add Documentation"})]})]})}),t.map(((e,n)=>(0,l.jsx)(a.HH,{type:"target",position:a.Ly.Left,id:"arg_"+n,style:{background:"#555"}})))]})})),Be="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Ue={ArkitektNode:Ce,ArkitektFilterNode:Ce,LocalNode:Ce,ReactiveNode:e=>{let{data:{outstream:n,instream:t,constream:r,implementation:s,defaults:o},id:d}=e;const c=(0,a.Bn)();return(0,i.useEffect)((()=>{console.log("Update node internals",d,s),c(d)}),[n,t,r]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"custom-drag-handle text-xs ",children:[s&&[b.Combinelatest,b.Withlatest,b.Zip,b.BufferUntil].includes(s)&&(0,l.jsx)("svg",{height:"40",width:"40",children:(0,l.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[b.Gate].includes(s)&&(0,l.jsx)("svg",{height:"40",width:"40",children:(0,l.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})}),s&&[b.Split].includes(s)&&(0,l.jsx)("svg",{height:"40",width:"40",children:(0,l.jsx)("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[b.Chunk,b.All,b.BufferComplete,b.Divide,b.Filter,b.Multiply,b.Modulo,b.Power,b.Subtract,b.Add,b.Prefix,b.Suffix].includes(s)&&(0,l.jsxs)("div",{className:Be,children:[s," ",o?.number&&(0,l.jsx)("b",{className:"font-bold",children:o.number})]}),s&&[b.Ensure].includes(s)&&(0,l.jsx)("div",{className:Be,children:(0,l.jsx)("h1",{children:"!"})}),s&&[b.ToList].includes(s)&&(0,l.jsxs)("svg",{height:"40",width:"40",children:[(0,l.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),(0,l.jsx)("text",{children:s})]}),s&&[b.Omit].includes(s)&&(0,l.jsxs)("svg",{height:"40",width:"40",children:[(0,l.jsx)("text",{children:(0,l.jsx)("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"},children:s})}),(0,l.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})]}),s&&[b.If].includes(s)&&(0,l.jsxs)("svg",{height:"40",width:"40",children:[(0,l.jsx)("text",{children:(0,l.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"If"})}),(0,l.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),s&&[b.And].includes(s)&&(0,l.jsxs)("svg",{height:"40",width:"40",children:[(0,l.jsx)("text",{children:(0,l.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"And"})}),(0,l.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),r?.map(((e,n,t)=>(0,l.jsx)(a.HH,{type:"target",position:a.Ly.Bottom,id:`kwarg_${n}`,style:{background:"#555",marginTop:10,height:"1em"}},n))),t?.map(((e,n,t)=>(0,l.jsx)(a.HH,{type:"target",position:a.Ly.Left,id:`arg_${n}`,style:{top:100/t.length*n+45/t.length+"%",background:"#555",height:"1em"}},n))),n?.map(((e,n,t)=>(0,l.jsx)(a.HH,{type:"source",position:a.Ly.Right,id:`return_${n}`,style:{top:100/t.length*n+46/t.length+"%",background:"#555"}},n)))]})})},ArgNode:De,ReturnNode:Ge,KwargNode:Ee,GraphNode:()=>null},qe={LabeledEdge:ge,FancyEdge:ge},Fe=e=>{let{flow:n}=e;const[t,i,r]=(0,a.Rr)(m(n.graph?.nodes)),[o,d,c]=(0,a.ll)(p(n.graph?.edges));return(0,l.jsx)(h.Provider,{value:{flow:n},children:(0,l.jsx)(s,{nodes:t,edges:o,onNodesChange:r,onEdgesChange:c,elementsSelectable:!0,nodeTypes:Ue,edgeTypes:qe,fitView:!0,attributionPosition:"bottom-right"})})};var ze=t(89423),Me=t(39903);const He=e=>{const{user:n}=(0,ze.gX)(),{fakts:t}=(0,Me.sT)();return(0,l.jsxs)("div",{className:"relative "+e.className,children:[e.children,!n||!t&&(0,l.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center",children:e.hideLabel})," "]})};var Ke=t(81154),Xe=t(50319),Ve=t(12854),Ye=t(79592);const Ze=Ve.fC,Qe=(Ve.xz,Ve.h_),Je=(Ve.x8,i.forwardRef(((e,n)=>{let{className:t,...i}=e;return(0,l.jsx)(Ve.aV,{ref:n,className:Te("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...i})})));Je.displayName=Ve.aV.displayName;const en=i.forwardRef(((e,n)=>{let{className:t,children:i,...a}=e;return(0,l.jsxs)(Qe,{children:[(0,l.jsx)(Je,{}),(0,l.jsxs)(Ve.VY,{ref:n,className:Te("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",t),...a,children:[i,(0,l.jsxs)(Ve.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,l.jsx)(Ye.Z,{className:"h-4 w-4"}),(0,l.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}));en.displayName=Ve.VY.displayName;const nn=e=>{let{className:n,...t}=e;return(0,l.jsx)("div",{className:Te("flex flex-col space-y-1.5 text-center sm:text-left",n),...t})};nn.displayName="DialogHeader";const tn=i.forwardRef(((e,n)=>{let{className:t,...i}=e;return(0,l.jsx)(Ve.Dx,{ref:n,className:Te("text-lg font-semibold leading-none tracking-tight",t),...i})}));tn.displayName=Ve.Dx.displayName;const an=i.forwardRef(((e,n)=>{let{className:t,...i}=e;return(0,l.jsx)(Ve.dk,{ref:n,className:Te("text-sm text-muted-foreground",t),...i})}));an.displayName=Ve.dk.displayName;const ln=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rn=e=>{let{flow:n,blockImport:t}=e;const{client:a}=(0,Ke.dB)(),[r,s]=(0,Xe.D)(ln,{client:a}),[d,c]=(0,i.useState)(!1),h=async()=>{try{const t=(e=m(n.graph.nodes),e?.map((e=>{if(e){const{id:n,position:t,type:i,parentNode:a,data:{outstream:l,constream:r,instream:s,...d}}=e;return{outstream:l?.map((e=>e?e.filter(o).map(u):[]))||[[]],constream:r?.map((e=>e?e.filter(o).map(u):[]))||[[]],instream:s?.map((e=>e?e.filter(o).map(u):[]))||[[]],id:n,position:{x:t.x,y:t.y},typename:i||"Fake type",name:d.name,description:d.description,hash:d.hash,implementation:d.implementation,kind:d.kind,defaults:d.defaults,mapStrategy:d.mapStrategy,allowLocal:d.allowLocal,maxRetries:d.maxRetries,retryDelay:d.retryDelay,binds:d.binds,parentNode:a,interface:d.interface}}})).filter(o)||[]||[]),i=(e=>e?.map((e=>{if(console.log(e),e){const{id:n,source:t,sourceHandle:i,target:a,targetHandle:l,type:r,data:s}=e;return{id:n,typename:r||"Fake type",source:t,sourceHandle:i||"returns",target:a,targetHandle:l||"args",stream:s?.stream.filter(o).map(u)||[]}}})).filter(o)||[])(p(n.graph.edges));let a={nodes:t.filter(o).map(u),edges:i.filter(o).map(u),globals:n.graph.globals.filter(o).map(u),args:n.graph.args.filter(o).map(u),returns:n.graph.returns.filter(o).map(u)};await r({variables:{name:n.name,graph:a}});c(!0)}catch(t){alert(t.message)}var e};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Ze,{open:d,onOpenChange:c,children:(0,l.jsx)(en,{children:(0,l.jsxs)(nn,{children:[(0,l.jsx)(tn,{children:"Succesfully imported workflow"}),(0,l.jsx)(an,{children:"We have imported the workflow into Arkitekt. You can now use it in your flows."})]})})}),(0,l.jsx)("button",{onClick:()=>h(),disabled:t,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer",children:"Re-Import into Arkitekt"})]})},sn=e=>(0,l.jsxs)("div",{className:"border border-1 rounded border-gray-800",children:[(0,l.jsx)("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative",children:(0,l.jsx)(Fe,{flow:e.flow})}),(0,l.jsx)(He,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow",children:(0,l.jsx)(Ke.Ot,{children:(0,l.jsx)(rn,{flow:e.flow,blockImport:e.blockImport})})})]})},33346:(e,n,t)=>{"use strict";t.d(n,{L:()=>a});t(67294);var i=t(85893);const a=e=>(0,i.jsx)(i.Fragment,{children:"CONNECTED"})}}]);