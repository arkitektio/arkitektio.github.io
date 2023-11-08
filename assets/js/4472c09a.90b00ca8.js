"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8666],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},33346:(e,t,a)=>{a.d(t,{L:()=>i});var n=a(67294);const i=e=>n.createElement(n.Fragment,null,"CONNECTED")},53833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(83117),i=(a(67294),a(3905));a(33346);const r=a.p+"assets/medias/open_napari-c4bc468e9ac6b0d2bad19014e109972c.webm",o=a.p+"assets/medias/napari_visualize-1b7ccc6238eb832b254dec879c1adf24.webm",l={id:"mikro-napari",title:"Mikro-Napari",sidebar_label:"Mikro-Napari",sidebar_position:2},s=void 0,p={unversionedId:"apps/mikro-napari",id:"apps/mikro-napari",title:"Mikro-Napari",description:"Arkitekt aims to provide first-class support for Napari, a popular image viewer for Python.",source:"@site/docs/apps/mikro-napari.mdx",sourceDirName:"apps",slug:"/apps/mikro-napari",permalink:"/docs/apps/mikro-napari",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/apps/mikro-napari.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"mikro-napari",title:"Mikro-Napari",sidebar_label:"Mikro-Napari",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Orkestrator",permalink:"/docs/apps/orkestrator"},next:{title:"Mikro Manager",permalink:"/docs/apps/mikro-manager"}},u={},c=[{value:"About Napari",id:"about-napari",level:3},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"How to use Napari with Arkitekt",id:"how-to-use-napari-with-arkitekt",level:3},{value:"Visualizing your data in Napari",id:"visualizing-your-data-in-napari",level:4}],d={toc:c},h="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Arkitekt aims to provide first-class support for Napari, a popular image viewer for Python.\nThis support is provided through the ",(0,i.kt)("inlineCode",{parentName:"p"},"mikro-napari")," plugin/package that enables your local\nNapari installation to communicate with Arkitekt."),(0,i.kt)("h3",{id:"about-napari"},"About Napari"),(0,i.kt)("p",null,"Napari (Sofroniew et al. 2022) is an open-source, multi-dimensional image viewer for Python.\nIt has gained traction in the expert bioimage space especially because of its ability to visualize\nlarge scale, multi-dimensional images, interactively rendering 3D data with GPU acceleration.\n(\u201c3rd Napari Survey Report\u201d , Napari Developers, 2022)"),(0,i.kt)("p",null,"A native Python solution, Napari is often integrated into Python-based analysis scripts, where\nanalytical results need to be displayed interactively to inspect. To this end, Napari provides\ndifferent types of layers for different types of data including images, points, lines, shapes. T\nThis layered approach to data is useful for overlaying annotations or segmentations on top of\nimage data."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Mikro-Napari provides support for Napari 0.4.17 and above. You  can choose from two options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install it directly from the ",(0,i.kt)("a",{parentName:"p",href:"https://napari-hub.org/plugins/mikro-napari"},"napari plugin store")),(0,i.kt)("p",{parentName:"li"},"This is the easiest way to install the plugin and works also great with napari prebundled binaries.\nJust follow the instructions on the plugin page, and you should be ready to go.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install it directly from the command line:"),(0,i.kt)("p",{parentName:"li"},"If you are familiar with command line and you have napari installed in a python (Python > 3.9) environment, you can also install the plugin directly from the command line.\nJust run the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install mikro-napari\npip install napari==0.4.17 pyqt5 # if you do not have napari installed yet (currently we have only tested with 0.4.17 but 0.4.18 should also work)\n")),(0,i.kt)("p",{parentName:"li"},"This also allows you to start the napari application directly from the command line:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mikro-napari\n")))),(0,i.kt)("admonition",{title:"Recommended Installation",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'As the napari plugin specifications are rapidly evolving, we currently follow the napari guidelines to recommend to install the plugin directly from the command line, and to\nuse the unbundled version of napari (the "pip" install version.) This recommendation might change in the future.')),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Mikro-Napari is designed to not interfere with your exisiting Napari installation, until you explicitly connect it to\nyour Arkitekt server. This happens through interacticting through the MagicBar (see below)."),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:r})),(0,i.kt)("p",null,"A few words about this connection process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"The Magic Bar"),":\nWhat you see in the bottom left corner is the ",(0,i.kt)("inlineCode",{parentName:"li"},"Magic Bar"),", a widget provided by the mikro-napari plugin, and the core UI element that allows apps to connect to Arkitekt.\nWhile developers can choose to implement their own UI elements to connect to Arkitekt, the MagicBar is a common UI element that is provided by the arkitekt package, and\nyou will encounter it in almost all apps that currently conncan connectect to Arkitekt."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"The Connection screen"),":\nOn initial setup you will see a screen that allows you to connect to your Arkitekt server. If you run Arkitekt locally you will see your instance automatically detected.\nFor remote instances, ",(0,i.kt)("a",{parentName:"li",href:"/docs/introduction/installation#advertising"},"advertised")," Instances will be automatically detected and should be listed in the dropdown menu. If\nyour instance is not advertised, you can also enter the URL manually."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Login in the Browser"),":\nTo connect to your Arkitekt instance, you need to login. This is done in the browser, and you will be redirected to the login page of your Arkitekt instance. Please allow\nrequests to the firewall.")),(0,i.kt)("p",null,"Once you are connected, you can start using Arkitekt. The MagicBar will show you the current status of your connection,\nand of course you can always disconnect from your Arkitekt instance, and use Napari as you are used to."),(0,i.kt)("h3",{id:"how-to-use-napari-with-arkitekt"},"How to use Napari with Arkitekt"),(0,i.kt)("p",null,"In its current iteration the Mikro Napari Plugin does not provide any functionality to call other apps directly from Napari, this interaction\nis currently only possible through the Orkestrator UI. Which will help you to create workflows that include Napari. (e.g. to use deep learning\nmodels to segment your images, and then visualize the results in Napari, shown ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/deep-learning"},"here"),")"),(0,i.kt)("h4",{id:"visualizing-your-data-in-napari"},"Visualizing your data in Napari"),(0,i.kt)("p",null,"To visualize your data in Napari, you can simple search for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Show on Napari"),' node, and reserve it in your dashboard. Once you have reserved the node,\nyou can run it directly from the image pane where it will appear in the bottom right corner. If you leave the "show roi layer" on, you should even see\nthe ROIs that you have created in the browser.'),(0,i.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,i.kt)("source",{src:o})),(0,i.kt)("p",null,"A few words about this process:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Lazy Loading"),':\nWhen calling the "Show on Napari" node, not the whole image is downloaded, but we can take the advantage of the lazy loading capabilities of both\nArkitekt and Napari to only show you the visible parts.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"ROIs"),':\nIf you have created ROIs in the browser, you can also visualize them in Napari. Just make sure that you have the "Show ROI Layer" option enabled, when\nassigning the node. Importantly you will notice that if you mark rois on the ROI layer they are ',(0,i.kt)("em",{parentName:"p"},"live syncing")," with your server and the browser, and\npotentially other napari instances that are connected to the same server. Neat right?")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Alterations"),':\nWhatever alterations you make to the image in Napari, will stay in Napari. So if you want to save your alterations back to the server, you need to\nuse the "Upload to Arkitekt" node. More on that later.'))))}m.isMDXComponent=!0}}]);