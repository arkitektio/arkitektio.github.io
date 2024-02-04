"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1034],{49255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(85893),i=n(11151);n(15944);const r={id:"index",title:"Deployment",sidebar_label:"Deployment",sidebar_position:2},s=void 0,a={id:"design/deployment/index",title:"Deployment",description:"Arkitekt aims to be highly costumizable in its deployment strategies, ranging from using Arkitekt on a single machine to deploying it on a cluster, the cloud, or even a hybrid of all.",source:"@site/docs/design/deployment/index.mdx",sourceDirName:"design/deployment",slug:"/design/deployment/",permalink:"/docs/design/deployment/",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/design/deployment/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"index",title:"Deployment",sidebar_label:"Deployment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Design",permalink:"/docs/design/"},next:{title:"On Premise",permalink:"/docs/design/deployment/on_premise/"}},l={},d=[{value:"General Considerations",id:"general-considerations",level:2},{value:"Container Runtimes",id:"container-runtimes",level:3},{value:"Storage",id:"storage",level:3},{value:"Networking",id:"networking",level:3},{value:"Single Machine",id:"single-machine",level:2},{value:"Single Machine - Konstruktor Setup",id:"single-machine---konstruktor-setup",level:3},{value:"Single Machine - Docker Compose Setup",id:"single-machine---docker-compose-setup",level:3},{value:"Single Machine - Integrated Setup",id:"single-machine---integrated-setup",level:3},{value:"Deploy to the Wide Internet",id:"deploy-to-the-wide-internet",level:2},{value:"Static IP",id:"static-ip",level:3},{value:"Reverse Proxy",id:"reverse-proxy",level:3},{value:"Single Machine - Hosted - VPN Tunnel",id:"single-machine---hosted---vpn-tunnel",level:3}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Arkitekt aims to be highly costumizable in its deployment strategies, ranging from using Arkitekt on a single machine to deploying it on a cluster, the cloud, or even a hybrid of all.\nThis document aims to give an overview of the different deployment strategies and their advantages and disadvantages.\nThis document is not meant to be a step-by-step guide on how to deploy Arkitekt,\nbut rather a high-level overview of the different strategies.\nBeginners setting up arkitekt should follow the ",(0,o.jsx)(t.a,{href:"../introduction/installation.mdx",children:"first steps guide"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"general-considerations",children:"General Considerations"}),"\n",(0,o.jsx)(t.p,{children:"Before we dive into the different deployment strategies, we want to give you some general considerations:"}),"\n",(0,o.jsx)(t.h3,{id:"container-runtimes",children:"Container Runtimes"}),"\n",(0,o.jsxs)(t.p,{children:["Arkitekt is a platform build around software containers, and therefore requires some form of container runtime to run. currently\nwe only provide support for ",(0,o.jsx)(t.a,{href:"https://www.docker.com/",children:"Docker"})," and Docker Compose, but we are planning to support other container runtimes in the future."]}),"\n",(0,o.jsx)(t.admonition,{title:"On Other Container Runtimes",type:"note",children:(0,o.jsx)(t.p,{children:"Just because we only document how to deploy Arkitekt with Docker, does not mean that you cannot deploy Arkitekt with other container runtimes at the moment\n(we are just not documenting it). If you are interested in deploying Arkitekt with another container runtime, please reach out to us, and we will try to help you.\nIf you find a working solution, please consider contributing to our documentation."})}),"\n",(0,o.jsx)(t.h3,{id:"storage",children:"Storage"}),"\n",(0,o.jsxs)(t.p,{children:["One concern when deploying an Arkitekt is how you want to manage storage. While most services in Arkitekt won't require a lot\nof diskspace. The Mikro service will require a lot of diskspace, as it stores all the microscopy data that is streamed through Arkitekt.\nTherefore you should consider how you want to manage storage, and how you want to backup your data. By relying on the S3 API, Arkitekt\nshould give you the flexibility of a lot of different storage providers, and you can even use multiple storage providers at the same time.\nPlease refer to the ",(0,o.jsx)(t.a,{href:"/docs/mikro/storage",children:"Mikro documentation"})," for more information on how to configure storage for the Mikro service."]}),"\n",(0,o.jsx)(t.h3,{id:"networking",children:"Networking"}),"\n",(0,o.jsx)(t.p,{children:"Another concern when deploying Arkitekt is how you want to manage networking. Apps that want to connect to Arkitekt need to find the Arkitekt Server, and need to be able to connect to it.\nThis can be a challenge when deploying Arkitekt on a cluster, or in the cloud, as you need to make sure that the Arkitekt Server is reachable from the outside. We have provided\nsome guides on how to deploy Arkitekt in different environments, but you should consider how you want to manage networking, and how you want to make your Arkitekt Server available to the outside world."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"On Premise"}),"\n",(0,o.jsx)(t.li,{children:"Hosted (Cloud)"}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"on-premise",children:"On Premise"}),"\n",(0,o.jsxs)(t.p,{children:["On premise deployment refers to the deployment of Arkitekt on your own hardware, such as your own computer, or a server in your local network.\nThis is the simplest way of deploying Arkitekt, as it does not require any additional infrastructure,\nand is the default deployment strategy when using the ",(0,o.jsx)(t.a,{href:"../introduction/installation.mdx",children:"first steps guide"}),".\nWe believe that on premise deployments will be the most common deployment strategy for Arkitekt,\nas you will have full control over the deployment, and enjoy the fastest possible (network) speeds."]}),"\n",(0,o.jsx)(t.h2,{id:"single-machine",children:"Single Machine"}),"\n",(0,o.jsxs)(t.p,{children:["The simplest deployment strategy is to deploy Arkitekt on a single machine. This is the default deployment strategy when using the ",(0,o.jsx)(t.a,{href:"../introduction/installation.mdx",children:"first steps guide"}),". This strategy is ideal for development and testing purposes, as it is easy to setup and does not require any additional infrastructure. This setup works great for small teams , or when developing proof-of-concepts. Installign Arkitket on a single machine only requires a basic installation of docker (preferably with Docker Desktop)."]}),"\n",(0,o.jsx)(t.p,{children:"However, this strategy is not recommended for production environments, multiple users, or large teams, as it does not provide any redundancy or scalability. This type of deployment comes in multiple flavours, that further define the deployment strategy."}),"\n",(0,o.jsx)(t.h3,{id:"single-machine---konstruktor-setup",children:"Single Machine - Konstruktor Setup"}),"\n",(0,o.jsxs)(t.p,{children:["Konstruktor is our preferred way of deploying Arkitekt on a single machine, as it abstracts a lof of the configuration away, while maintaining full\ncustomizability. Konstruktor does this by only giving you a more user-friendly interface to the configuration files and docker-compose which it uses\nunder the hood. You can find more information about Konstruktor in the ",(0,o.jsx)(t.a,{href:"https://arkitekt.live/docs/introduction/installation#konstruktor",children:"Konstruktor documentation"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"single-machine---docker-compose-setup",children:"Single Machine - Docker Compose Setup"}),"\n",(0,o.jsx)(t.p,{children:"The manual Docker Compose setup, is probably the most flexible way of deploying Arkitekt on a single machine, and should feel familiar to anyone who has worked with docker-compose before. This setup is ideal for developmental setups, that aim to use the newest features of the platform, and for users who want full control over the configuration of the platform."}),"\n",(0,o.jsx)(t.h3,{id:"single-machine---integrated-setup",children:"Single Machine - Integrated Setup"}),"\n",(0,o.jsx)(t.p,{children:"The integrated setup is by far the easiest way to interact with Arkitekt for python developers, as it allows you to run Arkitekt (the Server) directly from your python code. This setup is ideal for development and testing purposes, and for users who want to modules of Arkitekt in their own python code. Integrated setups, are utilizing the same docker-compose files as the manual setup, but abstracts away the docker-compose commands\nso that you can interact more closely with the platform."}),"\n",(0,o.jsx)(t.admonition,{title:"Integrated Setup",type:"note",children:(0,o.jsx)(t.p,{children:"The integrated setup is the way we test Arkitekt and its submodules, in testing environmens such as our CI/CD pipeline. It allows us to test the platform in a controlled environment, and to test the platform in a more fine-grained way. You probably do not want to deploy Arkitekt in this way, unless you are developing a module for Arkitekt."})}),"\n",(0,o.jsx)(t.h2,{id:"deploy-to-the-wide-internet",children:"Deploy to the Wide Internet"}),"\n",(0,o.jsx)(t.p,{children:"By default Arkitekt is configured to be reachable on all network interfaces, inside your local network. This means that you can access the platform from any device on your local network, as long as you know the IP address of the machine running Arkitekt. However this is not ideal for environments, where you would like to connect to your Arkitekt Server from outside your local network. Here we will go through some of the options you have for hosting your Arkitekt Server."}),"\n",(0,o.jsx)(t.h3,{id:"static-ip",children:"Static IP"}),"\n",(0,o.jsx)(t.p,{children:"The simplest way to host your Arkitekt Server, is to give your machine a static IP address, that is reachable from outside your local network and the wider internet. This is the simplest way to host your Arkitekt Server, but it is a security risk, as you are exposing your machine to the internet, and arkitekt will not encrypt any of the traffic."}),"\n",(0,o.jsx)(t.h3,{id:"reverse-proxy",children:"Reverse Proxy"}),"\n",(0,o.jsxs)(t.p,{children:["A more secure way of making Arkitekt available to the internet is by using a reverse proxy, that will forward all traffic to your Arkitekt Server, but will also encrypt outgoing and incoming traffic. This is a more secure way of hosting your Arkitekt Server, but it requires some additional configuration. We recommend using ",(0,o.jsx)(t.a,{href:"https://doc.traefik.io/traefik/providers/docker/",children:"Traefik"})," as a reverse proxy, as it is easy to configure and works well with docker-compose. Treafik will automatically generate SSL certificates for you (with the help of ",(0,o.jsx)(t.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"}),"), and encrypt all incoming and outgoing traffic. We have a ",(0,o.jsx)(t.a,{href:"https://arkitekt.live/docs/introduction/installation#traefik",children:"guide"})," on how to setup Arkitekt with Traefik."]}),"\n",(0,o.jsx)(t.h3,{id:"single-machine---hosted---vpn-tunnel",children:"Single Machine - Hosted - VPN Tunnel"}),"\n",(0,o.jsxs)(t.p,{children:["Another way of making Arkitekt securely available to the internet is by sharing it through a VPN (Virtual Private Network) tunnel, with selective access. The sucess of this strategy can vastly depend on your network setup and if your University allows you to open and forward ports. You can\nhowever setup your own VPN tunnel, using a service such as ",(0,o.jsx)(t.a,{href:"https://tailscale.com/",children:"Tailscale"}),", which is free for personal use, and allows you to\nsecurely share your Arkitekt Server with other devices (including mobile devices) on your network. We have a ",(0,o.jsx)(t.a,{href:"https://arkitekt.live/docs/introduction/installation#tailscale",children:"guide"})," on how to setup Arkitekt with Tailscale."]}),"\n",(0,o.jsx)(t.admonition,{title:"VPN Tunnel",type:"note",children:(0,o.jsx)(t.p,{children:"Please do not misunderstand our usage of a VPN here with the usage of VPNs advertised in the media. Tailscale is no tool to hide your identity on the internet, but rather a tool to securely interconnect devices on different networks. We use it to securely share our Arkitekt Server with our mobile devices, and to share our Arkitekt Server with our colleagues. We do not use it to hide our identity on the internet (and most likely your NordVPN subscription is not doing that either)."})}),"\n",(0,o.jsx)(t.p,{children:"... ongoing"})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);