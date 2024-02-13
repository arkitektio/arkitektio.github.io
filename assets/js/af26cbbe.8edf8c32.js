(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[2776],{72303:(e,a,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/graphql.07e9cb5.640.png 640w,"+n.p+"assets/ideal-img/graphql.98ce398.1320.png 1320w,"+n.p+"assets/ideal-img/graphql.002dece.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/graphql.07e9cb5.640.png",width:640,height:318},{path:n.p+"assets/ideal-img/graphql.98ce398.1320.png",width:1320,height:657},{path:n.p+"assets/ideal-img/graphql.002dece.2000.png",width:2e3,height:995}],src:n.p+"assets/ideal-img/graphql.07e9cb5.640.png",toString:function(){return n.p+"assets/ideal-img/graphql.07e9cb5.640.png"},placeholder:void 0,width:640,height:318},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVR4nAHNADL/ACoyRPYWHzD6foOM4////+v37PPy+fD28v///+tpcH3bJzBA/jE4SLAAKDJC/hcgMv+DhZDt////+vr3+v/18PP///35+W1xfukrNEb/MjhHvAAmMEH+HiY4/3Jxe++pqqj6u42r/7iJpf/FxMP5i4mX6ykyRP8sNkW8ACUtPf4eJjj/T1Ba7WJmYfqBRW3/pWKP/9/a2/ltcn7pKjNF/zA3R7wALTVE/SApOf99f4rs+/f4+ebh5//v6e//////+Gpve+gyOkv/Nj5Nu7ZUeoMFscVIAAAAAElFTkSuQmCC"}},65229:(e,a,n)=>{"use strict";n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>h,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=n(85893),i=n(11151),s=n(15944),r=n(72303),o=n.n(r);const l={id:"graphql",title:"GraphQL",sidebar_label:"GraphQL",sidebar_position:2},h="GraphQL",d={id:"design/various/graphql",title:"GraphQL",description:"Arkitekt was designed to be open and expandable. Building on the middleman approach, it",source:"@site/docs/design/various/graphql.mdx",sourceDirName:"design/various",slug:"/design/various/graphql",permalink:"/docs/design/various/graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/design/various/graphql.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"graphql",title:"GraphQL",sidebar_label:"GraphQL",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Arkitekt trough a VPN",permalink:"/docs/design/various/vpn"},next:{title:"Apps",permalink:"/docs/apps/"}},p={},c=[{value:"Why we like GraphQL",id:"why-we-like-graphql",level:2},{value:"React developer? Try it out Here",id:"react-developer-try-it-out-here",level:2},{value:"Python developer? Look here",id:"python-developer-look-here",level:2}];function g(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"graphql",children:"GraphQL"}),"\n",(0,t.jsx)(a.p,{children:"Arkitekt was designed to be open and expandable. Building on the middleman approach, it\nwas an early design decision to establish Arkitekt as a framework, rather than a tool. This\nentailed for Arkitekt to adapt a developer first or API first approach. In developing this\nAPI, it was paramount to adopt open standards that are widely used and that fit well for the\nArkitekt paradigm of lab-wide task assignment and scientific data exploration."}),"\n",(0,t.jsxs)(a.p,{children:["Arkitekt therefore exposes all its functionality through a set of ",(0,t.jsx)(a.a,{href:"https://graphql.org/",children:"GraphQL"})," APIs. ",(0,t.jsx)(a.a,{href:"https://graphql.org/",children:"GraphQL"})," is an\nAPI protocol developed by Facebook to facilitate a one-stop-shop and developer-friendly\nretrieval and manipulation of data with a high level of relationships, such as their friendship\ngraph. It was designed to overcome issues in other API protocols such as REST, where when trying to explore highly relational data,\ndedicated and separately orchestrated requests to the backend needed to be performed."]}),"\n",(0,t.jsx)(a.h2,{id:"why-we-like-graphql",children:"Why we like GraphQL"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Flexibility"}),": With GraphQL, clients can specify exactly what data they need, reducing over-fetching or under-fetching of data.\nFor bioimage analysis, where datasets can be large and complex, this ensures efficient data retrieval."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Strongly Typed"}),": GraphQL is strongly typed. This means that the shape and type of the response are known in advance,\nwhich can be particularly useful in bioimage analysis where ensuring data integrity and consistency is crucial. Also it allows you\nto use the full power of your IDE to explore the API."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Evolution of your Schema"}),": As bioimage analysis techniques and tools evolve, the data structure and requirements might change.\nGraphQL allows for the addition of new fields and types without impacting existing queries, ensuring backward compatibility."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Aggregated Data"}),": Often in bioimage analysis, data from multiple sources or related entities need to be fetched.\nGraphQL allows for fetching data from multiple sources in a single query, simplifying client-side data aggregation. With\n",(0,t.jsx)(a.strong,{children:"soon to be implemened"})," federation, you can even fetch data from different Arkitekt services in a single query."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Real-time Updates"}),": With subscriptions in GraphQL, clients can be notified in real-time when certain data changes.\nThis can be invaluable in bioimage analysis when monitoring the progress or outcomes of certain analyses (e.g in streaminganalysis)"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Self-documenting"}),": GraphQL APIs come with introspection capabilities, making it easier for developers to understand the available data, types, queries, and mutations, t\nhereby fostering faster and more accurate development. Just check the GraphIQL interface of your Arkitekt server."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Ecosystem & Tooling"}),": The growing popularity of GraphQL has led to a rich ecosystem of tools, libraries, and client-side frameworks.\nThis can speed up development and offer advanced features for bioimage analysis data servers out of the box. Indeed a lot of the Arkitektl\nclient libraries are build around this ecosystem (e.g. ",(0,t.jsx)(a.a,{href:"https://the-guild.dev/graphql/codegen",children:"graphql-codegen"})," and ",(0,t.jsx)(a.a,{href:"https://github.com/jhnnsrs/turms",children:"turms"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h1,{id:"what-does-this-boil-down-to",children:"What does this boil down to?"}),"\n",(0,t.jsx)(a.p,{children:"Well GraphQL allows you to declaritively specify what data you want to fetch from the server, and the server will return exactly that data, exploring\nall the relationships between the data. This is best explained with an example. Lets look at the\nbelow query. This query fetches the name of the image, the name of the ROIs, and the shape of the image."}),"\n",(0,t.jsxs)("div",{className:"mt-2 w-20",children:[(0,t.jsx)(s.Z,{img:o()}),(0,t.jsx)("div",{className:"text-gray-400 mb-2",children:(0,t.jsx)("small",{children:"The GraphQL request, resolve, response  "})})]}),"\n",(0,t.jsx)(a.h2,{id:"react-developer-try-it-out-here",children:"React developer? Try it out Here"}),"\n",(0,t.jsx)(a.p,{children:"We can talk ages about the ease of use of graphql. But you can try it out yourself. Here is a simple example of a React component that uses graphql to fetch data from yur local Arkitekt server.\nYou can just change the query to fetch any data you want."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Display(props) {\n  const { data } = useMikroQuery(gql`\n    query {\n      representations(limit: 3) {\n        id\n        name\n      }\n    }\n  `);\n\n  return (\n    <div className="flex flex-col gap-2">\n      {data &&\n        data.representations.map((image) => (\n          <div className="bg-back-800 px-2">{image.name} </div>\n        ))}\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"By changing the query, you can fetch any data you want. For example, here we fetch the name and shape of the image, as well as the labels of the ROIs."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",metastring:"live",live:!0,children:'function Display(props) {\n  const { data } = useMikroQuery(gql`\n    query {\n      representations(limit: 3) {\n        id\n        name\n        rois {\n          id\n          label\n        }\n        store\n        shape\n      }\n    }\n  `);\n\n  return (\n    <div className="flex flex-col gap-2">\n      {data &&\n        data.representations.map((image) => (\n          <>\n            <div className="bg-back-800 px-2 rounded rounded-md">\n              {image.name}{" "}\n            </div>\n            <div className="bg-green-200">\n              {image.rois.map((roi) => (\n                <div className="bg-back-800 px-2">{roi.label} </div>\n              ))}\n            </div>\n            <div>\n              {image.shape.map((i) => (\n                <i>{i} </i>\n              ))}\n            </div>\n          </>\n        ))}\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"python-developer-look-here",children:"Python developer? Look here"}),"\n",(0,t.jsxs)(a.p,{children:["While we can't provide you with an interactive playground to explore GraphQL just, yet\njust have a look at the source code of our client apps. The ominious ",(0,t.jsx)(a.code,{children:"api"})," folder that you\nfind in all our client apps is actually entirely generated from the GraphQL schema, that you\nfind in the ",(0,t.jsx)(a.code,{children:"schema"})," folder. This means you can generate your own typed queries and mutations\nfrom the schema."]})]})}function u(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}}}]);