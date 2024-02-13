(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1340],{4298:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/local.7308b1b.640.png 640w,"+n.p+"assets/ideal-img/local.b16c31b.1320.png 1320w,"+n.p+"assets/ideal-img/local.0780ef3.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/local.7308b1b.640.png",width:640,height:237},{path:n.p+"assets/ideal-img/local.b16c31b.1320.png",width:1320,height:489},{path:n.p+"assets/ideal-img/local.0780ef3.2000.png",width:2e3,height:742}],src:n.p+"assets/ideal-img/local.7308b1b.640.png",toString:function(){return n.p+"assets/ideal-img/local.7308b1b.640.png"},placeholder:void 0,width:640,height:237},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAp0lEQVR4nGNgYGBg0DPU32BkZPBfU1v3j7KK8n85eeX/cb6Klf8/iKpcWxcg/P//f06QOgYNLa0NWto6/zU0Nf5o62j/19Ex+l+badT3/52ozZv9uTL////nhSjU1N6op6f3X1dP74+mptZfXR3t/472fqndU/+bLjr6XOz//69SYIXKysprNTS0/quoqP5WUVb+B7LeTM8ktmXR/+CktY90/v//zw4AFwM/Q31dVhgAAAAASUVORK5CYII="}},27893:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var o=n(85893),i=n(11151),s=n(15944),r=n(4298),a=n.n(r);const l={id:"testing",title:"Development",sidebar_label:"Development",sidebar_position:2},d=void 0,p={id:"design/deployment/on_premise/testing",title:"Development",description:"Development",source:"@site/docs/design/deployment/on_premise/testing.mdx",sourceDirName:"design/deployment/on_premise",slug:"/design/deployment/on_premise/testing",permalink:"/docs/design/deployment/on_premise/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/design/deployment/on_premise/testing.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"testing",title:"Development",sidebar_label:"Development",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Konstruktor",permalink:"/docs/design/deployment/on_premise/Konstruktor"},next:{title:"Workflow Scheduling",permalink:"/docs/design/scheduling"}},h={},m=[{value:"Development",id:"development",level:2},{value:"Staring a Development Server",id:"staring-a-development-server",level:3}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"development",children:"Development"}),"\n",(0,o.jsx)(t.p,{children:"Facilitating a  smooth development process is one of the main goals of Arkitekt. To achieve this, we have created a\ndevelopment environment that allows you to test your App in a real environment and against a real Arkitekt Server,\nall from within your python Code."}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"While the development environment is probably the easiest way to deploy an Arkitket Server for every Python developer,\nwe would not recommend it when serving your App. The development environment is not optimized for performance and\nsecurity and should only be used for development purposes."})}),"\n",(0,o.jsx)(t.h3,{id:"staring-a-development-server",children:"Staring a Development Server"}),"\n",(0,o.jsx)(t.p,{children:"To start a development server from within your Python Code, you can use the 'deployment' function from the 'arkitekt'\npackage. In its simplest form, the function takes the following arguments:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from arkitekt import deployment\n\nmy_deployment = deployment("my_deployment", channel="stable")\n\n'})}),"\n",(0,o.jsx)(t.p,{children:'The first argument is the name of your deployment. It will be used to create a folder in a ".dokker" folder in your\nworking directory. The second argument is the channel you want to use. The channel determines which version of the\nArkitekt Server will be used. The default channel is "stable", but you can also use "latest" or "next" to use other\nversions.'}),"\n",(0,o.jsx)(t.p,{children:"The deployment function will return a Deployment object. This object has a number of methods that allow you to interact\nwith the deployment. The most important ones are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"up()"}),": Starts the deployment"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"down()"}),": Stops the Deployment"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Because we want to guarentee that the deployment is stopped when the Python process is terminated, we necessiate using\nthe ",(0,o.jsx)(t.code,{children:"with"})," statement when using the deployment:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'\nfrom arkitekt import deployment\n\nwith deployment("my_deployment", channel="stable") as d:\n    # Do something with the deployment\n    d.up(wait_for_health=True)\n\n    print("Deployment is running")\n    pass\n\n'})}),"\n",(0,o.jsxs)("div",{className:"mt-2",children:[(0,o.jsx)(s.Z,{img:a()}),(0,o.jsx)("div",{className:"text-gray-400 mb-2 mt-4",children:(0,o.jsx)("small",{children:' An example of how you might version an Arkitekt Deployment depending on your needs. Generally you will want most of your apps to connect to stable\nservices. The only "conserved" platform api for the platform is the fakts api, which will not be able to differ from app to app that connects to your deployment.\nIt is the defining service for each deployment.  '})})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"\n\n\n\n\n\n\nTesting your App is an important part of the development process. It helps to ensure that the code is working as expected \nand that it is not breaking any existing functionality. While unit-testing your code is far more important, we also wanted\nyou to be able to test your App in a real environment and gainst a real Arkitekt Server.\n"})})]})}function g(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);