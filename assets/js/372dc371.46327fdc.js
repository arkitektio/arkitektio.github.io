(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[2447],{71072:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/app.e915314.640.png 640w,"+a.p+"assets/ideal-img/app.3307a96.1320.png 1320w,"+a.p+"assets/ideal-img/app.50ddf21.2000.png 2000w",images:[{path:a.p+"assets/ideal-img/app.e915314.640.png",width:640,height:244},{path:a.p+"assets/ideal-img/app.3307a96.1320.png",width:1320,height:504},{path:a.p+"assets/ideal-img/app.50ddf21.2000.png",width:2e3,height:764}],src:a.p+"assets/ideal-img/app.e915314.640.png",toString:function(){return a.p+"assets/ideal-img/app.e915314.640.png"},placeholder:void 0,width:640,height:244},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVQImQGkAFv/ACcsNjAvNEJ0JSs7cQgTHSH06/8PqqjmGRE+wQBim9MhYJvUIlaNwgAAJCo3fioxQP8wNUP/W1lPdKij/1CMheRj////D1SNyU1SjshOdbr+BgAZGyEkJigrYkxJSWqkkoQ7////Ce3s8BbW3PIAstDuIbzW7yD///8AABEUGwD///8DAAAAAK6flQD39vEO////Dfv+/gD///8J////CuXu+ABmb08GmWsznAAAAABJRU5ErkJggg=="}},28798:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/oauth_example.a0fc5b5.640.png 640w,"+a.p+"assets/ideal-img/oauth_example.36aac31.1225.png 1225w",images:[{path:a.p+"assets/ideal-img/oauth_example.a0fc5b5.640.png",width:640,height:684},{path:a.p+"assets/ideal-img/oauth_example.36aac31.1225.png",width:1225,height:1310}],src:a.p+"assets/ideal-img/oauth_example.a0fc5b5.640.png",toString:function(){return a.p+"assets/ideal-img/oauth_example.a0fc5b5.640.png"},placeholder:void 0,width:640,height:684},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVQYlVXNW0+CAACGYbbWVjnIUjRPWAgJKpgpkAWClNjBDtppqy6rrZt+Qnf97rdlddHFd/Pu2T7h+OqBcDhiECUMohHeQUgwGBLHY+LRKUF0xMn0CcENL5BLTYqbOxQ2bRTNRdUclGqbqtYjV26yfzhD2PXPWV7TSWVNFiUFP3yn139hQayQyhikMnW84RxOSG802DL6lGoOUXKHH88oql0U3WNto4k3nCJ0Ds5YL7Qw2hF1K6TtJNhOgtYK5kv/wa4/IZXZRpQN5GoHtRVQM/fIK+15E+Xv6+nPtSQbLMkmgeHxeniDe/9JxT5DzOpIucZ/KOYamEafx/s3rp8/UK0YSa6zmv+Fnf1TltMaUs4kXbSw+hNsd8xq3py3lXUdN7xE2ItnFLa6VHSPUq1HtmyRLduUNIey7lJUe/jJLV9FK5rb32nJgAAAAABJRU5ErkJggg=="}},18679:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(67294),n=a(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.default)(i.tabItem,s),hidden:a},t)}},73992:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var o=a(87462),n=a(67294),i=a(86010),s=a(72957),r=a(16550),l=a(75238),p=a(33609),u=a(92560);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,i=h(e),[s,r]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:i}))),[l,p]=m({queryString:a,groupId:o}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,u.Nk)(a);return[o,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:o}),y=(()=>{const e=l??c;return d({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{y&&r(y)}),[y]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),p(e),k(e)}),[p,k,i]),tabValues:i}}var y=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function A(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const t=e.currentTarget,a=u.indexOf(t),o=p[a].value;o!==r&&(c(t),l(o))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:h},s,{className:(0,i.default)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function b(e){const t=k(e);return n.createElement("div",{className:(0,i.default)("tabs-container",g.tabList)},n.createElement(A,(0,o.Z)({},e,t)),n.createElement(f,(0,o.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return n.createElement(b,(0,o.Z)({key:String(t)},e))}},62827:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>f,frontMatter:()=>h,metadata:()=>m,toc:()=>y});var o=a(87462),n=(a(67294),a(3905)),i=a(15944),s=a(71072),r=a.n(s),l=a(28798),p=a.n(l),u=a(73992),c=a(18679);const h={id:"app",title:"What is an App?",sidebar_label:"App",sidebar_position:1},d=void 0,m={unversionedId:"design/terminology/app",id:"design/terminology/app",title:"What is an App?",description:"Arkitekts is built around connecting Apps. Without these Apps arkitekt would be just a (reasonably cool) storage platform with a developer interface. Apps ( in the Arkitekt sense) connect to arkitekt and provide the functionality that makes Arkitekt useful (like applying filters to images) and give you the ability to interact with the data that you store in Arkitekt. As such, the definition of an arkitekt App is a bit broaders, than what you might think of as an App (especially if you are used to the App Store on your phone). This section will introduce you to the concept of an App in Arkitekt, and will give you a few examples of what an App can be.",source:"@site/docs/design/terminology/app.md",sourceDirName:"design/terminology",slug:"/design/terminology/app",permalink:"/doks/docs/design/terminology/app",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/design/terminology/app.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"app",title:"What is an App?",sidebar_label:"App",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/doks/docs/category/terminology"},next:{title:"Tasks",permalink:"/doks/docs/design/terminology/tasks"}},k={},y=[{value:"Apps can provide functionality",id:"apps-can-provide-functionality",level:2},{value:"Examples of Apps",id:"examples-of-apps",level:2},{value:"TLDR",id:"tldr",level:3}],g={toc:y},A="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(A,(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Arkitekts is built around connecting Apps. Without these Apps arkitekt would be just a (reasonably cool) storage platform with a developer interface. Apps ( in the Arkitekt sense) connect to arkitekt and provide the functionality that makes Arkitekt useful (like applying filters to images) and give you the ability to interact with the data that you store in Arkitekt. As such, the definition of an arkitekt App is a bit broaders, than what you might think of as an App (especially if you are used to the App Store on your phone). This section will introduce you to the concept of an App in Arkitekt, and will give you a few examples of what an App can be."),(0,n.kt)("div",{className:"mt-2"},(0,n.kt)(i.Z,{img:r(),mdxType:"Image"}),(0,n.kt)("div",{className:"text-gray-400 mb-2"},(0,n.kt)("small",null,"Arkitekts design as an App middleman"))),(0,n.kt)("p",null,"How apps fit into the Arkitekt ecoystem is best examplified by the interplay between the Orkestrator ",(0,n.kt)("em",{parentName:"p"},"App")," and the Fiji ",(0,n.kt)("em",{parentName:"p"},"App"),". While Arkitekt only stands as the connection layer it is these two apps that actually manage and do the work. Orkestrator assigns work and Fiji does the actually work. Arkitekt only acts as the Middleman, so that they don't have to interact directly with each other (which would be a lot more complicated than you might think)."),(0,n.kt)("p",null,"Arkitekt without apps is like a car without wheels. It might look cool, but it won't get you anywhere. So let's take a closer look at what an App is, and what it can do."),(0,n.kt)("h1",{id:"the-type-of-apps"},"The type of Apps"),(0,n.kt)("p",null,"You already saw that Orkestrator and Fiji are apps, but Arkitekts definition of apps is way broader than the usual apps that you might be used to. In fact, almost anything can be an app, as long as it is able to connect to Arkitekt. This means that you can use a website as an app, or your own code, or even your robot or Iot device. What ",(0,n.kt)("em",{parentName:"p"},"unifies")," all of these apps is that they all follow some common principles of ",(0,n.kt)("strong",{parentName:"p"},"authentication")," them when connecting with the platform. This is an important feature, because it not only that you are in control of your data, but Arkitekt can use the provided information of the app to ",(0,n.kt)("em",{parentName:"p"},"version")," the app. This versioning ensures that if you want to use the functionality of this app in a workflows or just directly in tasks you can be sure that the app will behave the same way every time."),(0,n.kt)("p",null,'This means that the first time a new app decides to connect to Arkitekt, you will be asked to approve the connection and the permissions that the app is asking for.(this is done through Oauth2 Standard, the same principle that is used when you press "login with google", but you don\'t need to know that to use Arkitekt.). This double authentication process is key to Arkitekts security and some other design principles, and we will go into more detail about it in the ',(0,n.kt)("a",{parentName:"p",href:"/doks/docs/design/security/why"},"Security")," section."),(0,n.kt)("div",{className:"mt-2 w-max-xl"},(0,n.kt)(i.Z,{img:p(),mdxType:"Image"}),(0,n.kt)("div",{className:"text-gray-400 mb-2"},(0,n.kt)("small",null,"Example of an App asking for permissions"))),(0,n.kt)("h2",{id:"apps-can-provide-functionality"},"Apps can provide functionality"),(0,n.kt)("p",null,"Depending on the App, you can use it to do a lot of different things. For example, you can use an App to just download images from Arkitekt, or you can use some interesting python code to display a graph of your data. One important aspect is that an app can also choose to expose some of its functionality as ",(0,n.kt)("a",{parentName:"p",href:"/doks/docs/design/terminology/template"},"Templates"),". This means that you can use the functionality of the App in other Apps, or in the Orkestrator. This is a very powerful feature, and we will go into more detail about it in the ",(0,n.kt)("a",{parentName:"p",href:"/doks/docs/design/terminology/node"},"Nodes and Templates")," section."),(0,n.kt)("h2",{id:"examples-of-apps"},"Examples of Apps"),(0,n.kt)("p",null,"As we are a firm believer in the power of the example, here are a few examples of Apps in the Arkitekt sense, and a few negative examples of Apps in the Arkitekt sense."),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"apple",label:"Computer",default:!0,mdxType:"TabItem"},"An App on your computer is the obvious example, and yes, if that app is able to connect to Arkitekt (because the developer decided to make it an Arkitekt App), then it is an Arkitekt App. Easy. Two examples of this are the Orkestrator Desktop App, and MikroJ an app that is used to enable ImageJ on the platform. Both apps will as you to approve the connection to Arkitekt, and both apps will ask you for permissions.",(0,n.kt)("p",null,"Importantly though the Orkestrator apps asks you for a lot more permissions than the MikroJ app, because the Orkestrator app is able to do a lot more things with your data. If you want to know more about the permissions that an App can ask for, you can read more about it in the ",(0,n.kt)("a",{parentName:"p",href:"/doks/docs/design/security/why"},"Security")," section. Always remember that you are in control of your data, and you decide what Apps are allowed to do with it, so check the permissions before you approve an App.")),(0,n.kt)(c.Z,{value:"orange",label:"Website",mdxType:"TabItem"},'Also a website can be an an arkitekt app. Indeed this website is an arkitekt app (If you haven\'t done so already, you can try it out by clicking the "login with arkitekt" button in the top right corner). In most cases the website will ask you to point it to your arkitekt instance (which could be running on a public server, or in your local network), and then it will ask you to approve the connection. If you do, you will be able to use the website to interact with your data in Arkitekt.'),(0,n.kt)(c.Z,{value:"banana",label:"Robot",mdxType:"TabItem"},"Now this is where it gets interesting. Your robot or Iot device can also become an arkitekt app. Most of the time, these machines do not need access to your data, but can provide functionality like taking pictures, or measuring temperature. In this case you can use the [Orkestrator](/doks/docs/intro) to connect to your robot or Iot device, and call the functionality that it provides. This is a very powerful feature, and we will go into more detail about it in the [Nodes and Templates](/doks/docs/design/terminology/node) section."),(0,n.kt)(c.Z,{value:"code",label:"Code",mdxType:"TabItem"},(0,n.kt)("p",null,"Your code can also become an Arkitekt app. In fact, if you want your code to connect to an arkitekt server, it needs to become an app, because it needs rights to access your data. If you are using python you can use the arkitekt python library to connect to Arkitekt. If you are using javascript you can use the arkitekt javascript/typescript library. If you are using another language, you can use the Arkitekt API directly."),(0,n.kt)("p",null,"If you want to know more about how to connect to Arkitekt, you can read more about it in the ",(0,n.kt)("a",{parentName:"p",href:"/doks/docs/developers/intro"},"Developer")," section. We made sure to be compatible with standard webstandards (Oauth2, websockets), so you can use almost any language that is able to connect to a webserver."))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How does this work?"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How does the App know where to connect to?")),(0,n.kt)("p",null,"As Arkitekt is nothing more than a server in your lab (or in the cloud), and these apps are just programs that run on your computer, they need to know where to connect to. So you might wonder how does the app know which server to use? The answer turns out to be quite difficult and what keeps us up at night. The short answer is that the app needs to know the ip-adress of the Arkitekt server, which depending on your apps location can be autoconfigured through the network through the App Admin Interface. This mean that once you are using the Orkestrator Desktop App, it will automatically discover local servers, and you don't need to worry about the configuration.")))),(0,n.kt)("h3",{id:"tldr"},"TLDR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Apps are Agents that connect with the Arkitekt Platform"),(0,n.kt)("li",{parentName:"ul"},"Apps are versioned"),(0,n.kt)("li",{parentName:"ul"},"Apps can provide functionality"),(0,n.kt)("li",{parentName:"ul"},"Apps can be anything that can connect to a webserver"),(0,n.kt)("li",{parentName:"ul"},"All Code that connects to Arkitekt needs to be an App"),(0,n.kt)("li",{parentName:"ul"},"Apps are powered by Oauth2 Authentication"),(0,n.kt)("li",{parentName:"ul"},"Apps have specific rights to access your data (scopes)")))}f.isMDXComponent=!0}}]);