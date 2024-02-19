"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[2409],{59322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(85893),a=n(11151);n(61884),n(62446);const i={id:"installation",title:"Installation",sidebar_label:"Installation",sidebar_position:1},o="Getting Started!",s={id:"developers/python/installation",title:"Installation",description:"The easiest way to install the library is to use poetry or pip:",source:"@site/docs/developers/python/installation.mdx",sourceDirName:"developers/python",slug:"/developers/python/installation",permalink:"/docs/developers/python/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/developers/python/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/developers/python/"},next:{title:"Developing with GraphQL",permalink:"/docs/developers/python/graphql"}},l={},u=[{value:"Choose your style",id:"choose-your-style",level:2},{value:"Classic",id:"classic",level:2},{value:"Plugin",id:"plugin",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting Started!"}),"\n",(0,r.jsx)(t.p,{children:"The easiest way to install the library is to use poetry or pip:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'pip install "arkitekt[all]"\n'})}),"\n",(0,r.jsx)(t.p,{children:"This will install the library with all its dependencies, including the Arkitekt\nCLI as well as all supporting libraries for each service."}),"\n",(0,r.jsx)(t.p,{children:"This is the recommend way to install arkitekt, especially if you are not planning\nto use arkitekt as a dependency in another project."}),"\n",(0,r.jsxs)(t.admonition,{title:"Modular Arkitekt",type:"info",children:[(0,r.jsx)(t.p,{children:"If you are planning to only\nuse arkitekt as a dependency in another project, you can install it without the\nCLI and add it additional dependencies as needed."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"pip install arkitekt\n# pip install mikro (for microscopy support)\n# pip install rekuest (for registering nodes)\n"})})]}),"\n",(0,r.jsx)(t.h2,{id:"choose-your-style",children:"Choose your style"}),"\n",(0,r.jsx)(t.p,{children:"The best way to explore what Arkitekt can do is to follow one of the tutorials.\nHere you can find a list of tutorials that will guide you through the process of\ncreating your first app. But first let's discuss the two different styles of developing\napps with Arkitekt. You can pick the one that suits your needs best."}),"\n",(0,r.jsx)(t.h2,{id:"classic",children:"Classic"}),"\n",(0,r.jsxs)(t.p,{children:["This is the most straight-forward way of ",(0,r.jsx)(t.strong,{children:"interacting"})," with Arkitekt and its\nservices if you want to interact and explore your data, and ",(0,r.jsx)(t.strong,{children:"use"})," functionality from other apps.\nThe Arkitekt API here sits in the background just like any other python library, and you\nare in full control of the execution of your code."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from arkitekt import easy\nfrom mikro.api.schema import from_xarray\nimport numpy as np\n\n# whatever python code\n\nwith easy("my_little_app",  url="http://localhost:8000"):\n    # do stuff with the arkitekt api\n    # new image\n    img = np.random.rand(100, 100)\n    image = from_xarray(img, name="my_image") # uploads image to the mikro service\n\n# Whatever python code\n\n'})}),"\n",(0,r.jsx)(t.p,{children:'This is a very simple example of how you can use the Arkitekt API to interact with the\nservices. Here we are creating an "easy" app (more about that later) and then we are\ncreating a new image and uploading it to the mikro service. Once we leave the context\nmanager, the app is automatically closed and your script can continue to run as usual.\nAlso you run this like any other python script, without any additional steps.'}),"\n",(0,r.jsxs)(t.p,{children:["To get started with the classical style, you can follow the ",(0,r.jsx)(t.a,{href:"/docs/developers/python/classical",children:"Classic Tutorial"})]}),"\n",(0,r.jsx)(t.h2,{id:"plugin",children:"Plugin"}),"\n",(0,r.jsxs)(t.p,{children:["App that follow the ",(0,r.jsx)(t.code,{children:"integrated style"})," are more integrated into the Arkitekt ecosystem.\nThe Integrated style is your best choice if you want to ",(0,r.jsx)(t.strong,{children:"provide new functionality"})," (nodes)\nand develop your own Arkitekt App.  In the integrated style the Arkitekt CLI takes more control over your development process, ands streamline\nthe process of developing and your app publishing apps so that it can be used by other users."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from arkitekt import register\nfrom mikro.api.schema import from_xarray, RepresentationFragment\n\n@register\ndef create_random_image(x_size: int, y_size: int) -> RepresentationFragment:\n    """ Random Image\n\n    Creates a random image with the given size.\n\n    Parameters\n    ----------\n    x_size : int\n        The size of the image in x direction.\n    y_size : int\n        The size of the image in y direction.\n\n    Returns\n    -------\n    RepresentationFragment\n        The created image.\n    """\n\n    img = np.random.rand(100, 100)\n\n    return from_xarray(image, "Random Image")\n\n\nif __name__ == "__main__":\n    # here you can run other code, that\n    # will not be executed when the app is\n    # run by the arkitekt cli\n    pass\n\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Here we are creating an app that can be run by the Arkitekt CLI and that\nprovides a Node (Add two Numbers) that can be used by other apps. The\n",(0,r.jsx)(t.code,{children:"@register"})," decorator is used to mark a function as a node."]}),"\n",(0,r.jsxs)(t.p,{children:["While you can run this script like any other python script ( executing the\n",(0,r.jsx)(t.code,{children:'if __name__ == "__main__"'})," block ) in the integrated style you are using\nthe Arkitekt CLI to run yout app via:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"arkitekt run dev\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The CLI will then create the App context for your app and register the functions\nthat are marked with the ",(0,r.jsx)(t.code,{children:"@register"})," decorator as nodes"]}),"\n",(0,r.jsx)(t.admonition,{title:"Why do we use this?",type:"info",children:(0,r.jsx)(t.p,{children:"This pattern might seem strange at first, but it has a few advantages, such as nice developer experience features like hot-reloading,\nbut most importantly and easy portability of your app to other Arkitekt instances."})}),"\n",(0,r.jsxs)(t.p,{children:["To get started with the integrated style, you can follow the ",(0,r.jsx)(t.a,{href:"//docs/developers/python/plugin",children:"Integrated Tutorial"})]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},62446:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(90512);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},61884:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(90512),i=n(72957),o=n(16550),s=n(81270),l=n(75238),u=n(33609),c=n(92560);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,d]=m({queryString:n,groupId:a}),[y,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=u??y;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function k(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=y(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(k,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,b.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(67294);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);