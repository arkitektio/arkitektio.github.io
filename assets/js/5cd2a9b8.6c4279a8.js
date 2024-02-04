(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[7674],{48604:(e,a,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/graphql.07e9cb5.640.png 640w,"+t.p+"assets/ideal-img/graphql.98ce398.1320.png 1320w,"+t.p+"assets/ideal-img/graphql.002dece.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/graphql.07e9cb5.640.png",width:640,height:318},{path:t.p+"assets/ideal-img/graphql.98ce398.1320.png",width:1320,height:657},{path:t.p+"assets/ideal-img/graphql.002dece.2000.png",width:2e3,height:995}],src:t.p+"assets/ideal-img/graphql.07e9cb5.640.png",toString:function(){return t.p+"assets/ideal-img/graphql.07e9cb5.640.png"},placeholder:void 0,width:640,height:318},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVR4nAHNADL/ACoyRPYWHzD6foOM4////+v37PPy+fD28v///+tpcH3bJzBA/jE4SLAAKDJC/hcgMv+DhZDt////+vr3+v/18PP///35+W1xfukrNEb/MjhHvAAmMEH+HiY4/3Jxe++pqqj6u42r/7iJpf/FxMP5i4mX6ykyRP8sNkW8ACUtPf4eJjj/T1Ba7WJmYfqBRW3/pWKP/9/a2/ltcn7pKjNF/zA3R7wALTVE/SApOf99f4rs+/f4+ebh5//v6e//////+Gpve+gyOkv/Nj5Nu7ZUeoMFscVIAAAAAElFTkSuQmCC"}},61890:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var n=t(85893),i=t(11151),s=t(15944),r=t(48604),o=t.n(r);const l={id:"api",title:"API First",sidebar_label:"API",sidebar_position:2},d="API First",h={id:"design/api",title:"API First",description:"Arkitekt was designed to be open and expandable. Building on the middleman approach, it",source:"@site/docs/design/graphql.mdx",sourceDirName:"design",slug:"/design/api",permalink:"/docs/design/api",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/design/graphql.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"api",title:"API First",sidebar_label:"API",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/docs/design/deployment/on_premise/testing"},next:{title:"Roadmap",permalink:"/docs/design/roadmap/"}},p={},c=[{value:"GraphQL",id:"graphql",level:2},{value:"React developer? Try it out Here",id:"react-developer-try-it-out-here",level:2},{value:"Python developer? Look here",id:"python-developer-look-here",level:2}];function g(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"api-first",children:"API First"}),"\n",(0,n.jsxs)(a.p,{children:["Arkitekt was designed to be open and expandable. Building on the middleman approach, it\nwas an early design decision to establish Arkitekt as a framework, rather than a tool. This\nentailed for Arkitekt to adapt a developer first or ",(0,n.jsx)(a.strong,{children:"API first"})," approach. In developing this\nAPI, it was paramount to adopt open standards that are ",(0,n.jsx)(a.strong,{children:"widely used"})," and that fit well for the\nArkitekt paradigm of lab-wide task assignment and scientific data exploration."]}),"\n",(0,n.jsx)(a.h2,{id:"graphql",children:"GraphQL"}),"\n",(0,n.jsxs)(a.p,{children:["Arkitekt therefore exposes all its functionality through a set of ",(0,n.jsx)(a.a,{href:"https://graphql.org/",children:"GraphQL"})," APIs. ",(0,n.jsx)(a.a,{href:"https://graphql.org/",children:"GraphQL"})," is an\nAPI protocol developed by Facebook to facilitate a one-stop-shop and developer-friendly\nretrieval and manipulation of data with a high level of relationships, such as their friendship\ngraph."]}),"\n",(0,n.jsx)(a.admonition,{title:"Why not Rest?",type:"note",children:(0,n.jsxs)(a.p,{children:["While REST is a widely used and well understood protocol, it has some limitations when it comes to\nbioimage analysis. If you want to read more about this. Head over to the ",(0,n.jsx)(a.a,{href:"/docs/design/why-not/rest",children:"Why Not Rest"})," section."]})}),"\n",(0,n.jsx)(a.h1,{id:"what-does-this-boil-down-to",children:"What does this boil down to?"}),"\n",(0,n.jsx)(a.p,{children:"Well GraphQL allows you to declaritively specify what data you want to fetch from the server, and the server will return exactly that data, exploring\nall the relationships between the data. This is best explained with an example. Lets look at the\nbelow query. This query fetches the name of the image, the name of the ROIs, and the shape of the image."}),"\n",(0,n.jsxs)("div",{className:"mt-2 w-20",children:[(0,n.jsx)(s.Z,{img:o()}),(0,n.jsx)("div",{className:"text-gray-400 mb-2",children:(0,n.jsx)("small",{children:"The GraphQL request, resolve, response  "})})]}),"\n",(0,n.jsx)(a.h2,{id:"react-developer-try-it-out-here",children:"React developer? Try it out Here"}),"\n",(0,n.jsx)(a.p,{children:"We can talk ages about the ease of use of graphql. But you can try it out yourself. Here is a simple example of a React component that uses graphql to fetch data from yur local Arkitekt server.\nYou can just change the query to fetch any data you want."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Display(props) {\n  const { data } = useMikroQuery(gql`\n    query {\n      representations(limit: 3) {\n        id\n        name\n      }\n    }\n  `);\n\n  return (\n    <div className="flex flex-col gap-2">\n      {data &&\n        data.representations.map((image) => (\n          <div className="bg-back-800 px-2">{image.name} </div>\n        ))}\n    </div>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:"By changing the query, you can fetch any data you want. For example, here we fetch the name and shape of the image, as well as the labels of the ROIs."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Display(props) {\n  const { data } = useMikroQuery(gql`\n    query {\n      representations(limit: 3) {\n        id\n        name\n        rois {\n          id\n          label\n        }\n        store\n        shape\n      }\n    }\n  `);\n\n  return (\n    <div className="flex flex-col gap-2">\n      {data &&\n        data.representations.map((image) => (\n          <>\n            <div className="bg-back-800 px-2 rounded rounded-md">\n              {image.name}{" "}\n            </div>\n            <div className="bg-green-200">\n              {image.rois.map((roi) => (\n                <div className="bg-back-800 px-2">{roi.label} </div>\n              ))}\n            </div>\n            <div>\n              {image.shape.map((i) => (\n                <i>{i} </i>\n              ))}\n            </div>\n          </>\n        ))}\n    </div>\n  );\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"python-developer-look-here",children:"Python developer? Look here"}),"\n",(0,n.jsxs)(a.p,{children:["While we can't provide you with an interactive playground to explore GraphQL just, yet\njust have a look at the source code of our client apps. The ominious ",(0,n.jsx)(a.code,{children:"api"})," folder that you\nfind in all our client apps is actually entirely generated from the GraphQL schema, that you\nfind in the ",(0,n.jsx)(a.code,{children:"schema"})," folder. This means you can generate your own typed queries and mutations\nfrom the schema."]})]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);