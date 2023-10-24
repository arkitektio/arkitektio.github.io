"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[7079],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>p});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(o),f=n,p=u["".concat(l,".").concat(f)]||u[f]||c[f]||r;return o?a.createElement(p,i(i({ref:t},h),{},{components:o})):a.createElement(p,i({ref:t},h))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}f.displayName="MDXCreateElement"},4054:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=o(87462),n=(o(67294),o(3905));const r={id:"middleman",title:"Arkitekt the Middleman",sidebar_label:"Middleman",sidebar_position:1},i="How we see the landscape of bioimage analysis",s={unversionedId:"design/middleman",id:"design/middleman",title:"Arkitekt the Middleman",description:"Bioimage analysis has been around for a long time, and has been a very active field of research for the past 20 years. There are many tools available for bioimage analysis, and many of them are very good at what they do. However, there are a few problems that we see with the current landscape of bioimage analysis tools.",source:"@site/docs/design/middleman.md",sourceDirName:"design",slug:"/design/middleman",permalink:"/docs/design/middleman",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/design/middleman.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"middleman",title:"Arkitekt the Middleman",sidebar_label:"Middleman",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Arkitekt and Containers",permalink:"/docs/design/containers"},next:{title:"Real-time",permalink:"/docs/design/real-time"}},l={},d=[{value:"The tools are often very good at what they do, but not very good at doing anything else",id:"the-tools-are-often-very-good-at-what-they-do-but-not-very-good-at-doing-anything-else",level:4},{value:"Our tools are stuck in the past or stuck in the future",id:"our-tools-are-stuck-in-the-past-or-stuck-in-the-future",level:4},{value:"Meta data is being lost in translation",id:"meta-data-is-being-lost-in-translation",level:4},{value:"What we would like to do with Arkitekt for users",id:"what-we-would-like-to-do-with-arkitekt-for-users",level:3},{value:"What we would like to do with Arkitekt for developers",id:"what-we-would-like-to-do-with-arkitekt-for-developers",level:3}],h={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-we-see-the-landscape-of-bioimage-analysis"},"How we see the landscape of bioimage analysis"),(0,n.kt)("p",null,"Bioimage analysis has been around for a long time, and has been a very active field of research for the past 20 years. There are many tools available for bioimage analysis, and many of them are very good at what they do. However, there are a few problems that we see with the current landscape of bioimage analysis tools."),(0,n.kt)("h4",{id:"the-tools-are-often-very-good-at-what-they-do-but-not-very-good-at-doing-anything-else"},"The tools are often very good at what they do, but not very good at doing anything else"),(0,n.kt)("p",null,"Many of the tools available for bioimage analysis are very good at what they do, but they are often not very good at doing anything else. This means that if you want to use a tool for a specific task, you have to use that tool for that task, and you can't use it for anything else. This is a problem because it means that you have to learn a new tool for every task you want to do, and you can't use the tools you already know and love for other tasks."),(0,n.kt)("h4",{id:"our-tools-are-stuck-in-the-past-or-stuck-in-the-future"},"Our tools are stuck in the past or stuck in the future"),(0,n.kt)("p",null,"A lot of the bioimage analysis tools have been written in the last decades and even though they have seen a lot of love and dedication by the developers and the community, the age of the tools is starting to show, which has in turn prompted a new era of bioimage apps, that are designed from the core up to be adapt to the new challenges of bioimage analysis (3D, Big Data, etc.). However, these new tools are often not backwards compatible with the old tools, or are even adapted to completly different ecosystem like the cloud."),(0,n.kt)("h4",{id:"meta-data-is-being-lost-in-translation"},"Meta data is being lost in translation"),(0,n.kt)("p",null,"While traversing a modern bioimage analysis pipeline, the data is often being transformed from one format to another, and the meta data is lost in translation. Often users after the experimentee have to then to go back to the original data to find the meta data they need to make sense of the data"),(0,n.kt)("h3",{id:"what-we-would-like-to-do-with-arkitekt-for-users"},"What we would like to do with Arkitekt for users"),(0,n.kt)("p",null,"Arkitekt was designed to be a platform for non-experts, acknowledging that everyone is a non-expert at some point. Even if you are an expert in one field, you might not an expert in another field of bioimage analysis. We wanted an easy to use platform that would allow users to connect their favourite tools together, and not have to worry about the underlying infrastructure. We wanted you to as easily connect ImageJ to Napari, as you would connect ImageJ to your local Python Script, your Microscope to your Deep Learning Model running in the cloud, and your pipetting robot to your coffee machine (if you have one, or both). "),(0,n.kt)("h3",{id:"what-we-would-like-to-do-with-arkitekt-for-developers"},"What we would like to do with Arkitekt for developers"),(0,n.kt)("p",null,"With Arkitekt we wanted to acknowled that scienctific data analysis is an always evolving, ever-changing beast, and that the solution for today's data won't work tomorrow. Experts in the feild know their problem space very well, and often require very tailored solutions for their specific usecase.They are the best at solving their own problems, and we believe that the best way to enable them to share their expert knowledge is by providing them with tools that don't get in their way."),(0,n.kt)("p",null,"With Arkitekt we didn't want the developers to have to worry about adhering to a rigid platform or the constraints of doing all their analysis in the cloud,\nbut to enable them to use the tools they are most comfortable with, and to be able to use the tools they already know and love."),(0,n.kt)("p",null,"Arkitekt therefore emerged as a platform that acts as a middleman between the user and the developer, enabling the user to seamlessly connect their favourite tools together as well as providing the developer with a simple but powerful interface to enable their tools to be run on the hardware and in the software of their choice."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:o(8188).Z,width:"2895",height:"2285"})),(0,n.kt)("p",null,"Arkitekt itself provides only a sound backbone, trying to offload computation to these apps and the hardware they run on. This enables arkitekt to connect multiple apps, written in different programming languages and running on different hardware, to interact and share data."))}c.isMDXComponent=!0},8188:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/middleman-14c8e50c0abc27990e4f89c8f7e52aa9.svg"}}]);