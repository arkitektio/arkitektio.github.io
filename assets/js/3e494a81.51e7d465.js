"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[6350],{796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(85893),r=n(11151);const o={id:"installation",title:"Installing Arktiekt Next",sidebar_label:"Installation",sidebar_position:9},s="Installation",a={id:"roadmap/installation",title:"Installing Arktiekt Next",description:"Arkitekt-Next is still highly experimental and under active development. It is not recommended for use outside of testing and development environments.",source:"@site/docs/roadmap/installation.mdx",sourceDirName:"roadmap",slug:"/roadmap/installation",permalink:"/docs/roadmap/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/roadmap/installation.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"installation",title:"Installing Arktiekt Next",sidebar_label:"Installation",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Next",permalink:"/docs/roadmap/"},next:{title:"Thoughts",permalink:"/docs/roadmap/thoughts/"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation of the Server",id:"installation-of-the-server",level:2},{value:"Starting the Client",id:"starting-the-client",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsx)(t.p,{children:"Arkitekt-Next is still highly experimental and under active development. It is not recommended for use outside of testing and development environments.\nAt this point we only provide dev installation instructions."})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"The Arkitekt-Next project again depends on the same prerequisites as the Arkitekt project. You will need to have the following installed on your machine:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Docker (with Docker Compose)"}),"\n",(0,i.jsx)(t.li,{children:"Python >= 3.9"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"installation-of-the-server",children:"Installation of the Server"}),"\n",(0,i.jsx)(t.p,{children:'Arkitekt-Next comes with a new developmental project creator build around "blok". To install the Arkitket-Server you can therefore use the Arktiekt-Next CLI.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install `arkitekt-next[blok,all]>=$INSERT_LATEST_PYPI_VERSION`\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will install the Arkitekt-Next CLI and all the necessary client dependencies, as well as ",(0,i.jsx)(t.code,{children:"blok"}),", the build to.  To now create the\nserver environemnt (a docker-compose project with multiple file mounts and configuration files) you can run the following command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"blok build arkitekt $PATH_TO_YOUR_PROJECT\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will build the server environment in the specified directory.\nHowever! As we are dealing with a highly experimental project, we recommend to install the dev version of each subproject as well.\nThis will clone the git repository of each subproject and mount it into the docker-compose project. To do this you can run the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"blok build arkitekt $PATH_TO_PROJECT --fluss-dev=True --rekuest-dev=True --lok-dev=True --mikro-dev=True --orkestrator-dev=True --kabinet-dev=True --postgres-dev=True\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"ARM64 Support",type:"info",children:(0,i.jsx)(t.p,{children:"Because of the way we build Apache AGE at the moment the ARM64 builds are not available. This means that the database service will have to run\nemulated on ARM64 systems. Performance is abyssmal but it works for testing purposes."})}),"\n",(0,i.jsx)(t.p,{children:"This will guide you through an interactive setup process to create the server environment. Once the setup is complete you can start the server with:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"cd $PATH_TO_YOUR_PROJECT\ndocker-compose up\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:['If you use VsCode to manage the project it will also create some "tasks" for you to start and stop the server as well as orkestrator.\nOtherwise you can start the server with ',(0,i.jsx)(t.code,{children:"docker-compose up"})," and stop it with ",(0,i.jsx)(t.code,{children:"docker-compose down"})," as well as start orkestrator by\ncding into the orkestrator directory and running ",(0,i.jsx)(t.code,{children:"yarn dev"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"starting-the-client",children:"Starting the Client"}),"\n",(0,i.jsx)(t.p,{children:"The python interface of Arkitekt has not changed (just that you need to import\nfrom the respective _next package) you can start interacting with the server. Here is an example client"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from arkitekt_next import register\nfrom mikro_next.api.schema import Image, from_xarray_like\n\n@register\ndef add_one_to_each_pixel(image: Image) -> Image:\n    return from_xarray_like(image.data + 1, name= f"{image.name}_plus_one", origins=[image])\n'})}),"\n",(0,i.jsx)(t.p,{children:"and run it with"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"arkitekt-next init\n"})}),"\n",(0,i.jsx)(t.p,{children:"and then"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"arkitekt-next run dev\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will start the client and run the function on the server. You can now access the function on the\nOrkestrator UI that should run within electron."}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"Please join our Discord server to get help with the installation and to stay up to date with the latest developments."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://discord.gg/pT8kggfFBk",children:"Join the Discord"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(67294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);