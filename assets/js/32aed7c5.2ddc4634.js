"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(83117),o=(n(67294),n(3905));const i={id:"Usage",title:"Usage",sidebar_label:"Usage"},r="Usage",s={unversionedId:"developers/python/classical/Usage",id:"developers/python/classical/Usage",title:"Usage",description:"Design",source:"@site/docs/developers/python/classical/usage.mdx",sourceDirName:"developers/python/classical",slug:"/developers/python/classical/Usage",permalink:"/docs/developers/python/classical/Usage",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/developers/python/classical/usage.mdx",tags:[],version:"current",frontMatter:{id:"Usage",title:"Usage",sidebar_label:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Classic",permalink:"/docs/category/classic"},next:{title:"Functional",permalink:"/docs/category/functional"}},c={},p=[{value:"Design",id:"design",level:3}],l={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"design"},"Design"),(0,o.kt)("p",null,"Arkitekt's client SDK is designed to be used in a declarative and functional way, with a focus on reusable functions\nand composability. This means that a lot of functionality is provided through functions rather than through classes.\nLike this we hope that the SDK fits right in with the python ecosystem and patterns of the scientific python developer."),(0,o.kt)("p",null,"When using Arkitekt in the classic way you will therefore mostly use functions to interact with the backend. The only\nexceptions to this are the Arkitekt ",(0,o.kt)("inlineCode",{parentName:"p"},"App"),", which encapsulates all of the stateful logic that needs to be managed (e.g.\nauthentication, waiting for assignemnts from the server, etc.). This App object is highly configurable and can be\nadjusted to fit your exact configuration need by using different builders (more on this later)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from arkitekt import easy\n\napp = easy("your_app_name", version="your_app_version")\n\nwith app:\n    # do stuff with arkitekt\n\n\n')),(0,o.kt)("p",null,"This is the backbone for each Arkitekt app. Just like this you can use the app to interact with the backend."),(0,o.kt)("p",null,"A few words about this setup:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Arkitekt apps are configured through builder functions in this case through the ",(0,o.kt)("inlineCode",{parentName:"p"},"easy")," function.\nDepending on the builder, different services are configured. The ",(0,o.kt)("inlineCode",{parentName:"p"},"easy")," builder configures\narkitekt to mostly autoconfigure itself. This means that it will try to discover and connect\nto the backend automatically and will authenticate the user and the app through opening a browser\nwindow. Depending on your user environment you can also use different builders like the ",(0,o.kt)("inlineCode",{parentName:"p"},"jupy"),"\nbuilder to enhance arkitekt for use in a jupyter notebook.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Arkitekt relies on the concept of an application context. This is a context manager that\nis used to manage the lifecycle of the application (e.g setup connections to the backend\nand tear down these connections). This is used to ensure that the\napplication is properly closed when it is no longer needed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within this context, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object to access the various modules and services that\nArkitekt provides. These services are available as attributes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object.\nFor example, to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Fakts")," (for example to inspect the configration) service, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"app.fakts"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The context manager also sets some context specific variables (contextvars).\nThis means that some functionaly within this context will automatically use the governing\napp context. This allows for more declarative and functional code. For example, you can use simply call\n",(0,o.kt)("inlineCode",{parentName:"p"},"from_xarray")," to save an xarray on the mikro instance of the governing app context, without\nexplicitly passing the app context to the function. You can always opt out of this behaviour\nby specifically passing the desired context to the function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},' from arkitekt import Arkitekt\n from mikro import from_xarray\n import xarray as xr\n\n app = easy()\n\n with app:\n     image = from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"]), name="image name") # stores the xarray on the mikro instance of the governing app context\n')),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This behaviour allows for more functional and concise code but can also lead to unexpected\nbehaviour. For example, if you have multiple app contexts running in parallel, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"from_xarray")," function will use the app context that is currently active. You can always opt out of this behaviour\nby specifically passing the desired context to the function."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within the context you should avoid setting attributes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),". Arkitekt was designed\nto be configured before entering the context.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apps work both in async and synchronous contexts. This means that you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),"\nobject in both async and sync code. The ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object will automatically detect the context\nand use the correct backend (check the documentation of koil for this). This means that you can use the same code in both async and\nsync code."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"}," from arkitekt import Arkitekt\n import asyncio\n\n app = easy()\n\n async def main():\n     async with app:\n         # do stuff with arkitekt\n\n asyncio.run(main())\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Arkitekt always uses an ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio")," event loop internally to manage the app context. In the non-async context, this event loop is\nrun in a separate thread. Koil ensures that this threaded event loop is properly closed when the app context is closed, and bridges\nthe calls between the threaded event loop and the main thread to ensure threadsafety. Btw: Threads started through rekuest are also\nable to call async / syncfuntions or the governing app context.")))))}u.isMDXComponent=!0}}]);