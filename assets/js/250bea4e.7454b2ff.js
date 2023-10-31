(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8927],{38828:(e,a,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/graphql.b34cf1d.640.png 640w,"+t.p+"assets/ideal-img/graphql.6033f7c.1320.png 1320w,"+t.p+"assets/ideal-img/graphql.6a991ae.2000.png 2000w",images:[{path:t.p+"assets/ideal-img/graphql.b34cf1d.640.png",width:640,height:319},{path:t.p+"assets/ideal-img/graphql.6033f7c.1320.png",width:1320,height:657},{path:t.p+"assets/ideal-img/graphql.6a991ae.2000.png",width:2e3,height:995}],src:t.p+"assets/ideal-img/graphql.b34cf1d.640.png",toString:function(){return t.p+"assets/ideal-img/graphql.b34cf1d.640.png"},placeholder:void 0,width:640,height:319},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVQImQHNADL/ACozRPYWHzH6e4CJ4////+v27PTy+fD28v///+tqcX7cJy9A+zA4R7oAKDFC/xYfMf+BhI7v/////Pr3+f/08PL///75+25yf+woMEH/MThHxwAmL0D+HSU3/3Bveu6qq6j5u4yr/7mIpf/FxMT5jYqZ6ycvQP8tNUXFACUtPf4cJTb/TU9Z7WJlYfl/RW3/o2GN/9/Z2/luc3/pJjBA/zA3R8UALjVE/iAoOP97fojs/vv7+ebj5//u6u//////+GxxfegvN0b/Nj1Nxa4JenezzjysAAAAAElFTkSuQmCC"}},79403:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var n=t(83117),i=(t(67294),t(3905)),r=t(15944),o=t(38828),s=t.n(o);const l={id:"graphql",title:"GraphQL",sidebar_label:"GraphQL",sidebar_position:1},p="GraphQL",h={unversionedId:"features/graphql",id:"features/graphql",title:"GraphQL",description:"Arkitekt was designed to be open and expandable. Building on the middleman approach, it",source:"@site/docs/features/graphql.mdx",sourceDirName:"features",slug:"/features/graphql",permalink:"/docs/features/graphql",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/features/graphql.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"graphql",title:"GraphQL",sidebar_label:"GraphQL",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/category/features"},next:{title:"GPU Support",permalink:"/docs/features/intro"}},d={},c=[{value:"Why we like GraphQL",id:"why-we-like-graphql",level:2},{value:"React developer? Try it out Here",id:"react-developer-try-it-out-here",level:2},{value:"Python developer? Look here",id:"python-developer-look-here",level:2}],m={toc:c},u="wrapper";function g(e){let{components:a,...t}=e;return(0,i.kt)(u,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphql"},"GraphQL"),(0,i.kt)("p",null,"Arkitekt was designed to be open and expandable. Building on the middleman approach, it\nwas an early design decision to establish Arkitekt as a framework, rather than a tool. This\nentailed for Arkitekt to adapt a developer first or API first approach. In developing this\nAPI, it was paramount to adopt open standards that are widely used and that fit well for the\nArkitekt paradigm of lab-wide task assignment and scientific data exploration."),(0,i.kt)("p",null,"Arkitekt therefore exposes all its functionality through a set of ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," APIs.  ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is an\nAPI protocol developed by Facebook to facilitate a one-stop-shop and developer-friendly\nretrieval and manipulation of data with a high level of relationships, such as their friendship\ngraph. It was designed to overcome issues in other API protocols such as REST, where when trying to explore highly relational data,\ndedicated and separately orchestrated requests to the backend needed to be performed."),(0,i.kt)("h2",{id:"why-we-like-graphql"},"Why we like GraphQL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Flexibility"),": With GraphQL, clients can specify exactly what data they need, reducing over-fetching or under-fetching of data.\nFor bioimage analysis, where datasets can be large and complex, this ensures efficient data retrieval.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Strongly Typed"),": GraphQL is strongly typed. This means that the shape and type of the response are known in advance,\nwhich can be particularly useful in bioimage analysis where ensuring data integrity and consistency is crucial. Also it allows you\nto use the full power of your IDE to explore the API.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Evolution of your Schema"),": As bioimage analysis techniques and tools evolve, the data structure and requirements might change.\nGraphQL allows for the addition of new fields and types without impacting existing queries, ensuring backward compatibility.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Aggregated Data"),": Often in bioimage analysis, data from multiple sources or related entities need to be fetched.\nGraphQL allows for fetching data from multiple sources in a single query, simplifying client-side data aggregation. With\n",(0,i.kt)("strong",{parentName:"p"},"soon to be implemened")," federation, you can even fetch data from different Arkitekt services in a single query.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Real-time Updates"),": With subscriptions in GraphQL, clients can be notified in real-time when certain data changes.\nThis can be invaluable in bioimage analysis when monitoring the progress or outcomes of certain analyses (e.g in streaminganalysis)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Self-documenting"),": GraphQL APIs come with introspection capabilities, making it easier for developers to understand the available data, types, queries, and mutations, t\nhereby fostering faster and more accurate development. Just check the GraphIQL interface of your Arkitekt server."))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ecosystem & Tooling"),": The growing popularity of GraphQL has led to a rich ecosystem of tools, libraries, and client-side frameworks.\nThis can speed up development and offer advanced features for bioimage analysis data servers out of the box. Indeed a lot of the Arkitektl\nclient libraries are build around this ecosystem (e.g. ",(0,i.kt)("a",{parentName:"li",href:"https://the-guild.dev/graphql/codegen"},"graphql-codegen")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jhnnsrs/turms"},"turms"),")")),(0,i.kt)("h1",{id:"what-does-this-boil-down-to"},"What does this boil down to?"),(0,i.kt)("p",null,"Well GraphQL allows you to declaritively specify what data you want to fetch from the server, and the server will return exactly that data, exploring\nall the relationships between the data. This is best explained with an example. Lets look at the\nbelow query. This query fetches the name of the image, the name of the ROIs, and the shape of the image. "),(0,i.kt)("div",{className:"mt-2 w-20"},(0,i.kt)(r.Z,{img:s(),mdxType:"Image"}),(0,i.kt)("div",{className:"text-gray-400 mb-2"},(0,i.kt)("small",null,"The GraphQL request, resolve, response  "))),(0,i.kt)("h2",{id:"react-developer-try-it-out-here"},"React developer? Try it out Here"),(0,i.kt)("p",null,"We can talk ages about the ease of use of graphql. But you can try it out yourself. Here is a simple example of a React component that uses graphql to fetch data from yur local Arkitekt server.\nYou can just change the query to fetch any data you want."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Display(props) {\n  const { data } = useMikroQuery(gql`\n    query {\n      representations(limit: 3) {\n        id\n        name\n      }\n    }\n  `);\n\n  return (\n    <div className="flex flex-col gap-2">\n      {data &&\n        data.representations.map((image) => (\n          <div className="bg-back-800 px-2">{image.name} </div>\n        ))}\n    </div>\n  );\n}\n\n')),(0,i.kt)("p",null,"By changing the query, you can fetch any data you want. For example, here we fetch the name and shape of the image, as well as the labels of the ROIs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Display(props) {\n  const { data } = useMikroQuery(gql`\n    query {\n      representations(limit: 3) {\n        id\n        name\n        rois {\n          id\n          label\n        }\n        store\n        shape\n      }\n    }\n  `);\n\n  return (\n    <div className="flex flex-col gap-2">\n      {data &&\n        data.representations.map((image) => (\n          <>\n          <div className="bg-back-800 px-2 rounded rounded-md">{image.name} </div>\n          <div className="bg-green-200">\n            {image.rois.map((roi) => (\n              <div className="bg-back-800 px-2">{roi.label} </div>\n            ))}\n          </div>\n          <div>{image.shape.map(i => <i>{i}{" "}</i>)}</div>\n          </>\n        ))}\n    </div>\n  );\n}\n\n')),(0,i.kt)("h2",{id:"python-developer-look-here"},"Python developer? Look here"),(0,i.kt)("p",null,"While we can't provide you with an interactive playground to explore GraphQL just, yet\njust have a look at the source code of our client apps. The ominious ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," folder that you\nfind in all our client apps is actually entirely generated from the GraphQL schema, that you\nfind in the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," folder. This means you can generate your own typed queries and mutations\nfrom the schema."))}g.isMDXComponent=!0}}]);