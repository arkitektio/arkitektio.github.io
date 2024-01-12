"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5989],{46923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=t(85893),o=t(11151);const i={id:"Usage",title:"Usage",sidebar_label:"Usage"},a="Usage",r={id:"developers/python/classical/Usage",title:"Usage",description:"Design",source:"@site/docs/developers/python/classical/usage.mdx",sourceDirName:"developers/python/classical",slug:"/developers/python/classical/Usage",permalink:"/docs/developers/python/classical/Usage",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/developers/python/classical/usage.mdx",tags:[],version:"current",frontMatter:{id:"Usage",title:"Usage",sidebar_label:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Classic",permalink:"/docs/category/classic"},next:{title:"Functional",permalink:"/docs/category/functional"}},c={},h=[{value:"Design",id:"design",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"design",children:"Design"}),"\n",(0,s.jsx)(n.p,{children:"Arkitekt's client SDK is designed to be used in a declarative and functional way, with a focus on reusable functions\nand composability. This means that a lot of functionality is provided through functions rather than through classes.\nLike this we hope that the SDK fits right in with the python ecosystem and patterns of the scientific python developer."}),"\n",(0,s.jsxs)(n.p,{children:["When using Arkitekt in the classic way you will therefore mostly use functions to interact with the backend. The only\nexceptions to this are the Arkitekt ",(0,s.jsx)(n.code,{children:"App"}),", which encapsulates all of the stateful logic that needs to be managed (e.g.\nauthentication, waiting for assignemnts from the server, etc.). This App object is highly configurable and can be\nadjusted to fit your exact configuration need by using different builders (more on this later)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from arkitekt import easy\n\napp = easy("your_app_name", version="your_app_version")\n\nwith app:\n    # do stuff with arkitekt\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"This is the backbone for each Arkitekt app. Just like this you can use the app to interact with the backend."}),"\n",(0,s.jsx)(n.p,{children:"A few words about this setup:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Arkitekt apps are configured through builder functions in this case through the ",(0,s.jsx)(n.code,{children:"easy"})," function.\nDepending on the builder, different services are configured. The ",(0,s.jsx)(n.code,{children:"easy"})," builder configures\narkitekt to mostly autoconfigure itself. This means that it will try to discover and connect\nto the backend automatically and will authenticate the user and the app through opening a browser\nwindow. Depending on your user environment you can also use different builders like the ",(0,s.jsx)(n.code,{children:"jupy"}),"\nbuilder to enhance arkitekt for use in a jupyter notebook."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Arkitekt relies on the concept of an application context. This is a context manager that\nis used to manage the lifecycle of the application (e.g setup connections to the backend\nand tear down these connections). This is used to ensure that the\napplication is properly closed when it is no longer needed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Within this context, you can use the ",(0,s.jsx)(n.code,{children:"app"})," object to access the various modules and services that\nArkitekt provides. These services are available as attributes on the ",(0,s.jsx)(n.code,{children:"app"})," object.\nFor example, to access the ",(0,s.jsx)(n.code,{children:"Fakts"})," (for example to inspect the configration) service, you can use ",(0,s.jsx)(n.code,{children:"app.fakts"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The context manager also sets some context specific variables (contextvars).\nThis means that some functionaly within this context will automatically use the governing\napp context. This allows for more declarative and functional code. For example, you can use simply call\n",(0,s.jsx)(n.code,{children:"from_xarray"})," to save an xarray on the mikro instance of the governing app context, without\nexplicitly passing the app context to the function. You can always opt out of this behaviour\nby specifically passing the desired context to the function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:' from arkitekt import Arkitekt\n from mikro import from_xarray\n import xarray as xr\n\n app = easy()\n\n with app:\n     image = from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"]), name="image name") # stores the xarray on the mikro instance of the governing app context\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This behaviour allows for more functional and concise code but can also lead to unexpected\nbehaviour. For example, if you have multiple app contexts running in parallel, the\n",(0,s.jsx)(n.code,{children:"from_xarray"})," function will use the app context that is currently active. You can always opt out of this behaviour\nby specifically passing the desired context to the function."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Within the context you should avoid setting attributes on the ",(0,s.jsx)(n.code,{children:"app"}),". Arkitekt was designed\nto be configured before entering the context."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Apps work both in async and synchronous contexts. This means that you can use the ",(0,s.jsx)(n.code,{children:"app"}),"\nobject in both async and sync code. The ",(0,s.jsx)(n.code,{children:"app"})," object will automatically detect the context\nand use the correct backend (check the documentation of koil for this). This means that you can use the same code in both async and\nsync code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:" from arkitekt import Arkitekt\n import asyncio\n\n app = easy()\n\n async def main():\n     async with app:\n         # do stuff with arkitekt\n\n asyncio.run(main())\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Arkitekt always uses an ",(0,s.jsx)(n.code,{children:"asyncio"})," event loop internally to manage the app context. In the non-async context, this event loop is\nrun in a separate thread. Koil ensures that this threaded event loop is properly closed when the app context is closed, and bridges\nthe calls between the threaded event loop and the main thread to ensure threadsafety. Btw: Threads started through rekuest are also\nable to call async / syncfuntions or the governing app context."]})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);