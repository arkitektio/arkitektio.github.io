(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[7657],{8098:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/streaming.cd8e40b.640.png 640w,"+a.p+"assets/ideal-img/streaming.c4cc9e0.1320.png 1320w,"+a.p+"assets/ideal-img/streaming.6adc127.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/streaming.cd8e40b.640.png",width:640,height:296},{path:a.p+"assets/ideal-img/streaming.c4cc9e0.1320.png",width:1320,height:611},{path:a.p+"assets/ideal-img/streaming.6adc127.2000.png",width:2e3,height:926}],src:a.p+"assets/ideal-img/streaming.cd8e40b.640.png",toString:function(){return a.p+"assets/ideal-img/streaming.cd8e40b.640.png"},placeholder:void 0,width:640,height:296},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVR4nAHNADL/AO/f3xD39/ci8PDwI////xb///8E3d3dF+by5hWX/7Yq9bOzG/BLSxEA193aU9TRzGDo3+tQ3f/oF//a2gfZ19lux93HLjr8cGjMe2JG8lRWZwC56tFJpb2Hs8yVcWr/AF8IAAAAAP/d/yah3ayxS/+EbJyfX7L/R1s9AAAAAAC44ss2qcaXrbaic5v/Li4W/+//IKDdq9BH/4F8n5xfxf9RYEIAzP//Bf/M/wXv//8gqsiRM/8zMwr///8Bw+jDIqz/xR/HwKEp/z9fCPMpeAVVoUtpAAAAAElFTkSuQmCC"}},27074:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var i=a(85893),n=a(11151),s=a(15944),r=a(8098),o=a.n(r);const l={id:"real-time",title:"Everything everywhere, all at once",sidebar_label:"Real-time",sidebar_position:4},d="Everything everywhere, all at once",c={id:"design/real-time",title:"Everything everywhere, all at once",description:"img",source:"@site/docs/design/realtime.mdx",sourceDirName:"design",slug:"/design/real-time",permalink:"/docs/design/real-time",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/design/realtime.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"real-time",title:"Everything everywhere, all at once",sidebar_label:"Real-time",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/design/security"},next:{title:"Ecosystem",permalink:"/docs/apps/"}},h={},g=[{value:"Real-time workflows",id:"real-time-workflows",level:2},{value:"Facing bottlenecks",id:"facing-bottlenecks",level:2}];function m(e){const t={h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"everything-everywhere-all-at-once",children:"Everything everywhere, all at once"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"img",src:a(57095).Z+"",width:"2560",height:"1368"})}),"\n",(0,i.jsx)(t.p,{children:"The world is changing, and so is the way we do science. The amount of data we are generating is increasing exponentially, and the amount of data we can process is increasing at a linear rate. We are generating more data than we can process, and we are generating more data than we can store. Often this leads\nto weeks of waiting for the data to be processed, and then weeks of waiting for the results to be analysed."}),"\n",(0,i.jsx)(t.p,{children:"With Arkitekt we wanted to change this. We wanted to enable users to process their data in real-time, and to be able to analyse the results in real-time, and we wanted the developer to not have to worry about this too much."}),"\n",(0,i.jsx)(t.h2,{id:"real-time-workflows",children:"Real-time workflows"}),"\n",(0,i.jsxs)(t.p,{children:["Arkitekt is built to enable users to design analysis workflows that can as ",(0,i.jsx)(t.strong,{children:"easily run post-hoc*"})," on already generated data, as they can run in ",(0,i.jsx)(t.strong,{children:"real-time on data"}),' while it is being generated. This requires a bit of a different approach to designing and thinking about bioimage workflows: Instead of focussing on "batch analysis", Arkitekt fully embraces "streaming analysis" to analyses data as it is being generated, no only cutting down on the time it takes to get results, but because of immediate feedback enabling paradigms like "smart microscopy".']}),"\n",(0,i.jsxs)("div",{className:"mt-2",children:[(0,i.jsx)(s.Z,{img:o()}),(0,i.jsx)("div",{className:"text-gray-400 mb-2",children:(0,i.jsx)("small",{})})]}),"\n",(0,i.jsx)(t.h2,{id:"facing-bottlenecks",children:"Facing bottlenecks"}),"\n",(0,i.jsx)(t.p,{children:"Real-time analysis is a very challenging task, and often unavoidable bottlenecks will arise, rendering your real-time analysis very much week-long.\nThese bottlenecks can be caused by the hardware ( an old computer), the software (a long running deep learning algorithm), or the network (very slow network connection / latency).\nWhen using Arkitekt, we wanted to enable the user to identify and circumvent these bottlenecks and to fix them as they arise."}),"\n",(0,i.jsx)(t.p,{children:"Arkitekt is therefore designed to provide simple interfaces to debug, monitor and fix these bottlenecks, while the analysis is still running. T\nhis enables the user to be able to fix the bottlenecks as they arise, and to be able to continue the analysis in real-time.\nEven though Arkitekt is a server-client application,\nthat in its default configuration enables the user to run the analysis on multiple computers, you can decide to run/schedule workflows latency on one application, enabling even workflows that are sensitive to sub-millisecond latency."})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},57095:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const i=a.p+"assets/images/rock-36d1add0274b647d12935fee69304446.jpg"}}]);