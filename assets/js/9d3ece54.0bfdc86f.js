(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[6690],{79283:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/docker_gpu.4b5d015.522.png 522w",images:[{path:n.p+"assets/ideal-img/docker_gpu.4b5d015.522.png",width:522,height:369}],src:n.p+"assets/ideal-img/docker_gpu.4b5d015.522.png",toString:function(){return n.p+"assets/ideal-img/docker_gpu.4b5d015.522.png"},placeholder:void 0,width:522,height:369},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVR4nGNggIL//xkYQfTybc3K+zYWxHdf2Mldf2Ib3/6NRQlLt7QrMRxbwCC9bbEQ3/9VDGwghcdW+M1/e9j6/6YFuW7rJvl4vj1g9v/A+vTFDEXzMmWLp2WIdcws51/1fxVzel+jddeqWZNXnL23dPGJm0s7V0ydWDx3rjmD/v79AsZnnnIx/P/PlHbmDCvI1Gt33ursvnv73YEHD97ef/ZDE+y21tnm4hO3qbCvWhXKnDbTmHXmGWNWe4Z6lpmLS5cuXN2wEO7+mGniYmmbJLlCQyEKQRLyWfYS05dNXztrxaxVUrHOwmATRbNEeezrGVgY6hmYGEA0AwMDu6+hinNJ7EnPyuQT/OH2CiCFAHOJbRANO1UIAAAAAElFTkSuQmCC"}},84796:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var s=n(85893),i=n(11151),o=n(15944),r=n(79283),a=n.n(r);const d={id:"intro",title:"Arkitekt and the GPU",sidebar_label:"GPU Support",sidebar_position:1},l="Arkitekt and the GPU",h={id:"features/intro",title:"Arkitekt and the GPU",description:"Quite a lot of modern image analysis tools, especially those based on deep learning, are designed to run on GPUs. Arkitekt aims",source:"@site/docs/features/intro.mdx",sourceDirName:"features",slug:"/features/intro",permalink:"/docs/features/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/features/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Arkitekt and the GPU",sidebar_label:"GPU Support",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GraphQL",permalink:"/docs/features/graphql"},next:{title:"Lazy Loading",permalink:"/docs/features/lazy_loading"}},c={},u=[{value:"GPU Support",id:"gpu-support",level:2},{value:"GPU Support on Linux",id:"gpu-support-on-linux",level:2}];function p(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"arkitekt-and-the-gpu",children:"Arkitekt and the GPU"}),"\n",(0,s.jsx)(t.p,{children:"Quite a lot of modern image analysis tools, especially those based on deep learning, are designed to run on GPUs. Arkitekt aims\nto make it easy to use these tools, and to make it easy to run them on GPUs. However there are a few things to be aware of, as\nArkitekt is not a magical solution to all GPU problems."}),"\n",(0,s.jsx)(t.h2,{id:"gpu-support",children:"GPU Support"}),"\n",(0,s.jsx)(t.p,{children:"There are two different ways to use GPUs with Arkitekt. The first is to use the GPU support built into the standalone tools themselves and\non their hardware. This is probably the case when this tool exists primarily outside of the Arkitekt ecosystem, and Arkitekt is just being used to bridge it.\nYou can then just connect this tool like any other tool, and Arkitekt will run in on the connecting tool and hardware."}),"\n",(0,s.jsxs)(t.p,{children:["The second way is to use the GPU support built into Arkitekt itself. This is the case when the tool is designed to run inside Arkitekt as a PluginApp. See more\nin the ",(0,s.jsx)(t.a,{href:"/docs/developer",children:"developer"})," section on how to build an Arkitekt plugin. Here Arkitekt uses the docker support system to run the plugin in a docker container\nwithin the Arkitekt server."]}),"\n",(0,s.jsxs)("div",{className:"mt-2 w-20",children:[(0,s.jsx)(o.Z,{img:a()}),(0,s.jsx)("div",{className:"text-gray-400 mb-2",children:(0,s.jsx)("small",{children:"How the Arkitekt server can manage GPU access. (Adapted from the NVIDIA Container Toolkit Documentatoin) . Containers run in a sandbodex environment\nand request GPU access from the underlying service (docker engine). This "})})]}),"\n",(0,s.jsx)(t.h1,{id:"gpu-support-on-windows",children:"GPU Support on Windows"}),"\n",(0,s.jsxs)(t.p,{children:["Luckily the easy of integration of the CUDA support into docker containers has gotten ",(0,s.jsx)(t.strong,{children:"a lot"})," easier in the last two years.\nWindows users will no longer need to install the NVIDIA Container Toolkit, but can instead use the WSL2 backend of Docker Desktop.\nThe installation instructions for this can be found ",(0,s.jsx)(t.a,{href:"https://docs.nvidia.com/cuda/wsl-user-guide/index.html#installing-nvidia-drivers",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Install the ",(0,s.jsx)(t.strong,{children:"latest"})," NVIDIA drivers on your host machine (",(0,s.jsx)(t.a,{href:"https://docs.docker.com/desktop/install/windows-install/",children:"https://docs.docker.com/desktop/install/windows-install/"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Install Docker Desktop and enable the WSL2 backend (",(0,s.jsx)(t.a,{href:"https://docs.docker.com/desktop/wsl/",children:"https://docs.docker.com/desktop/wsl/"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"Run Konstruktor (which will check if your system is ready for GPU support)"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"gpu-support-on-linux",children:"GPU Support on Linux"}),"\n",(0,s.jsxs)(t.p,{children:["The same is true for Linux users. The NVIDIA Container Toolkit is no longer needed, and the docker engine can be used directly.\nThe installation instructions for this can be found ",(0,s.jsx)(t.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker",children:"here"}),"."]})]})}function k(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);