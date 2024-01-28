(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5856],{21683:(e,s,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/rekuest.9aef7f7.640.png 640w,"+t.p+"assets/ideal-img/rekuest.5ca27ca.1320.png 1320w,"+t.p+"assets/ideal-img/rekuest.6312aec.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/rekuest.9aef7f7.640.png",width:640,height:491},{path:t.p+"assets/ideal-img/rekuest.5ca27ca.1320.png",width:1320,height:1013},{path:t.p+"assets/ideal-img/rekuest.6312aec.2000.png",width:2e3,height:1535}],src:t.p+"assets/ideal-img/rekuest.9aef7f7.640.png",toString:function(){return t.p+"assets/ideal-img/rekuest.9aef7f7.640.png"},placeholder:void 0,width:640,height:491},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNklEQVR4nGNgYGBgZGBgYJi6fL3sxIUbDP///w/m/58fz/H/2CppGJ/h/v33AiA6sGJ6V2zT/E+rekM5wQozGNT/pzGs+pfCIANW+OnTJ5H///8zZbXNVoks70vJzfVgByus5Bb/n87Q/r9JSRWsEARWrfrPfOvWPz7JtJlcDAz1bDZRSwXr6+s5/idZ8T569J/z//96Job/nz6JgBQvSL+Yf6390uO+vLvnw8JeXGmvO37zwZneh6vnrmzIyXzlzfDv1j+wVVfa/qt8nvY5dEHl/5CE0M/hC3tOhf98NDvq2ckjJqtm/ucHW52UlMRrbWcapaSnFOTnrZPkZycWqKYm7WmhIxft62aeZmJuGAxWqKenx21lZZXp5OSSb2trX2BsbB1va+uQ7uTkVODg4JBvZmaWBADRrX1jxU1VMQAAAABJRU5ErkJggg=="}},35936:(e,s,t)=>{"use strict";t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var i=t(85893),r=t(11151),a=t(15944),n=t(21683),o=t.n(n);const c={title:"Rekuest",sidebar_label:"Rekuest",sidebar_position:1},h="Rekuest",d={id:"design/services/rekuest",title:"Rekuest",description:"Rekuest is one of the core services of Arkitekt. It represents a central repository of",source:"@site/docs/design/services/rekuest.mdx",sourceDirName:"design/services",slug:"/design/services/rekuest",permalink:"/docs/design/services/rekuest",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/design/services/rekuest.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Rekuest",sidebar_label:"Rekuest",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Mikro",permalink:"/docs/design/services/mikro"},next:{title:"Next",permalink:"/docs/category/next"}},l={},p=[{value:"Rekuest Design",id:"rekuest-design",level:2}];function u(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"rekuest",children:"Rekuest"}),"\n",(0,i.jsxs)(s.p,{children:["Rekuest is one of the core services of Arkitekt. It represents a central repository of\nall the connected apps and their provided functionality, their ",(0,i.jsx)(s.a,{href:"/docs/terminology/nodes",children:"Nodes"}),".\nIt also provides ways of interacting with the apps, by providing a central access point, that\napps and users can assign tasks to. Rekuest then takes care of routing the requests to the\nappropriate app, which executres the task and returns the result to rekuest, which in turn routes it back\nto the caller. Similar to all other Arkitekt ervices, Rekuest exposes a GraphQL API, that can be used to interact with it.\nYou can find the interactive documentation for the API ",(0,i.jsx)(s.a,{href:"/explorer",children:"here"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"rekuest-design",children:"Rekuest Design"}),"\n",(0,i.jsxs)(s.p,{children:["Rekuest itself is designed as a stateless service (in order to be able to scale horizontally), and\ninterfaces with proven open-source technologies, such as ",(0,i.jsx)(s.a,{href:"https://redis.io/",children:"Redis"})," and ",(0,i.jsx)(s.a,{href:"https://www.rabbitmq.com/",children:"RabbitMQ"}),".\nto route tasks to the appropriate apps. The following diagram shows the high-level design of Rekuest:"]}),"\n",(0,i.jsxs)("div",{className:"mt-2",children:[(0,i.jsx)(a.Z,{img:o()}),(0,i.jsx)("div",{className:"text-gray-400 mb-2 mt-4",children:(0,i.jsx)("small",{children:" The Rekuest stack with its supporting libraries. The RabbitMQ backend is replacable by various ofter\nmessage brokers   "})})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Rekuest is currently being rewritten to support other message brokers, such as ",(0,i.jsx)(s.a,{href:"https://kafka.apache.org/",children:"Kafka"}),". This will\nhowever remain an opt-in feature, and RabbitMQ will remain the default message broker. To learn more about this design decision,\nplease refer to the ",(0,i.jsx)(s.a,{href:"/docs/design/why-not",children:"Why Not?"})," section."]})})]})}function g(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);