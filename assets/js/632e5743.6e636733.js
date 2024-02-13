"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1864],{17283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(85893),s=r(11151),o=r(27859);r(33346);const i={id:"orkestrator",title:"Orkestrator",sidebar_label:"Orkestrator",sidebar_position:1},n=void 0,l={id:"apps/standalones/orkestrator",title:"Orkestrator",description:"Orkestrator is the current primary user-interface for the Arkitekt platform, and is the recommended way to interact with the platform",source:"@site/docs/apps/standalones/orkestrator.mdx",sourceDirName:"apps/standalones",slug:"/apps/standalones/orkestrator",permalink:"/docs/apps/standalones/orkestrator",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/apps/standalones/orkestrator.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"orkestrator",title:"Orkestrator",sidebar_label:"Orkestrator",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Standalones",permalink:"/docs/apps/standalones/"},next:{title:"Mikro-Napari (Napari)",permalink:"/docs/apps/standalones/mikro-napari"}},d={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Desktop Application",id:"desktop-application",level:3},{value:"Web Application",id:"web-application",level:3},{value:"First steps",id:"first-steps",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Orkestrator is the current primary user-interface for the Arkitekt platform, and is the recommended way to interact with the platform\nto create and manage workflows, inspect and comment on your data, ... etc."}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsxs)(t.p,{children:["Orkestrator comes in two different flavors, a ",(0,a.jsx)(t.a,{href:"#desktop-application",children:"desktop application"})," and a ",(0,a.jsx)(t.a,{href:"#web-application",children:"web application"})," (that comes deployed\nwith the platform). While most of the functionality is shared between the two, there are some differences in the way they are used."]}),"\n",(0,a.jsx)(t.h3,{id:"desktop-application",children:"Desktop Application"}),"\n",(0,a.jsx)(t.p,{children:"The desktop application is the recommended way to use Orkestrator. It is a standalone application that can be downloaded just below, and will install\nitself on your computer. It is available for Windows, MacOS and Linux. The desktop application adds in a few features that are not available in the\nweb application, such as:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Automatic Network Configuration"}),": The desktop application is able to automatically find ",(0,a.jsx)(t.a,{href:"/docs/introduction/installation#advertising",children:"advertised"})," Arkitekt\ninstances in your network and connect to them. This means that you don't have to manually enter the address of the Arkitekt instance you want to connect\nto, and that you can easily switch between different instances."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Connect to unsecure instances"}),": The desktop application is able to connect to Arkitekt instances that are not using HTTPS. This is useful when\nyou are planning to use Arkitekt only in a local network, where certificates are not available. Note that you should not connect to unsecure instances\nthat are exposed to the internet. Please refer to the ",(0,a.jsx)(t.a,{href:"/docs/design/security/why",children:"security"})," section for more information."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Additionally to these features, the desktop application will gain some additional features in the future, such as:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Automatic Updates"}),": The desktop application will in the future automatically check for updates and install them when available. This means that you will always\nhave the latest version of Orkestrator without having to manually download and install it."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Export and Import of Data"}),": While you can use the Orkestrator app to export and import data manually at this point, we are planning to bridge the ",(0,a.jsx)(t.a,{href:"./gucker",children:"Gucker"}),"\nfunctionality directly into the desktop application. This will allow you to export and import data directly from the desktop application, without having to use\nthe gucker application."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Deep Linking"}),": The desktop application will in the future support deep linking, which means that you will be able to share links to specific workflows, comments, ... etc.\nwith other users. This will allow you to easily share your work with others, and to link to specific parts of the application from other applications."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You can download the desktop application for your operating system below:"}),"\n",(0,a.jsx)(o.Dr,{}),"\n",(0,a.jsx)(t.h3,{id:"web-application",children:"Web Application"}),"\n",(0,a.jsxs)(t.p,{children:["Depending on your Arkitekt installation, you might also have access to the web application directly (it is deployed with the platform in the ",(0,a.jsx)(t.code,{children:"paper"})," channel). The web application\nshould be accessible ",(0,a.jsx)(t.a,{href:"http://localhost:8010",children:"here"}),", and can be used to interact with the platform, on the same computer. While you can use the web application also from other\ncomputers in your network, we recommend using the desktop application for that, as it will provide a better experience."]}),"\n",(0,a.jsx)(t.admonition,{title:"Why these limitations?",type:"info",children:(0,a.jsxs)(t.p,{children:["One of the biggest limitations in developing modern distributed applications that are browser based are security restrictions. Browsers are very restrictive in what they allow\nweb applications to do, and this is especially true when it comes to networking. While a lot of these security concerns are valid, major companies like Google and Microsoft are\npuhsing more and more for standards that are harmful to the open web. With no alternative in sight, we are forced to use the desktop application to provide the best possible\nexperience. If you want to learn more about this, we recommend reading ",(0,a.jsx)(t.a,{href:"https://www.eff.org/search/site/browser",children:"just the latest articles"})," by the EFF."]})}),"\n",(0,a.jsx)(t.h2,{id:"first-steps",children:"First steps"}),"\n",(0,a.jsxs)(t.p,{children:["If this is your first time using Orkestrator we recommend the ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps/interface",children:"First Steps"})," section, which will guide you through the basic of\nthe user interface."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},27859:(e,t,r)=>{r.d(t,{Dr:()=>n,Hp:()=>i});r(67294);var a=r(63750),s=r(89583),o=r(85893);const i=e=>{let{children:t}=e;return(0,o.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,o.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,o.jsx)("div",{className:"my-auto mr-2",children:(0,o.jsx)(s._Aq,{size:"3em"})})," ",(0,o.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,o.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,o.jsx)("div",{className:"my-auto mr-2",children:(0,o.jsx)(a.L1p,{size:"3em"})})," ",(0,o.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,o.jsxs)("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,o.jsx)("div",{className:"my-auto mr-2",children:(0,o.jsx)(s.oPZ,{size:"3em"})})," ",(0,o.jsx)("div",{className:"my-auto",children:"Mac"})]})]})},n=e=>{let{children:t}=e;return(0,o.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ",children:[(0,o.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto ",children:[(0,o.jsx)("div",{className:"my-auto mr-2",children:(0,o.jsx)(s._Aq,{size:"3em"})})," ",(0,o.jsx)("div",{className:"my-auto",children:"Linux"})]}),(0,o.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto",children:[(0,o.jsx)("div",{className:"my-auto mr-2",children:(0,o.jsx)(a.L1p,{size:"3em"})})," ",(0,o.jsx)("div",{className:"my-auto",children:"Windows"})]}),(0,o.jsxs)("a",{href:"https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto",children:[(0,o.jsx)("div",{className:"my-auto mr-2",children:(0,o.jsx)(s.oPZ,{size:"3em"})})," ",(0,o.jsx)("div",{className:"my-auto",children:"Mac"})]})]})}},33346:(e,t,r)=>{r.d(t,{L:()=>s});r(67294);var a=r(85893);const s=e=>(0,a.jsx)(a.Fragment,{children:"CONNECTED"})},11151:(e,t,r)=>{r.d(t,{Z:()=>n,a:()=>i});var a=r(67294);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);