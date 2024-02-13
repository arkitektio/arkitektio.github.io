(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[4974],{60699:(e,i,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/node_explaination.8313684.640.png 640w,"+t.p+"assets/ideal-img/node_explaination.f45276e.1320.png 1320w,"+t.p+"assets/ideal-img/node_explaination.2d491dd.1980.png 1980w",images:[{path:t.p+"assets/ideal-img/node_explaination.8313684.640.png",width:640,height:261},{path:t.p+"assets/ideal-img/node_explaination.f45276e.1320.png",width:1320,height:539},{path:t.p+"assets/ideal-img/node_explaination.2d491dd.1980.png",width:1980,height:808}],src:t.p+"assets/ideal-img/node_explaination.8313684.640.png",toString:function(){return t.p+"assets/ideal-img/node_explaination.8313684.640.png"},placeholder:void 0,width:640,height:261},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVR4nAGkAFv/ANPCK/jJuin/ybkp/NbELP/GtiaD2ccr0tjGLP/Muin62Mct/8CxJoMAcWke/bSlJ/zn1S75h30k/2xkHJBJRBvXn5Ml/+3aLveMgSX/aWIcjwDy3jD//eoz//3sMvz/9DX/yLgokSMiFtmajyb///c0+v/0Nf/QwCqPANTEKo/Pvyqdzr8pmdLDKKKsnCNQbWUdeaKVJKLVxCmY0cIopK6eIlJjkV7a/ZVKVAAAAABJRU5ErkJggg=="}},18211:(e,i,t)=>{"use strict";t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>h,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var n=t(85893),a=t(11151);t(15944);const o=t.p+"assets/medias/open_napari-c4bc468e9ac6b0d2bad19014e109972c.webm",r=t.p+"assets/medias/napari_visualize-1b7ccc6238eb832b254dec879c1adf24.webm",s=t.p+"assets/medias/connect_imagej-3aa27379370e4271296690e365fa3f6d.webm",l=t.p+"assets/medias/visualize_imagej-ce3a26bb0cdd2b762273c9f98a9612f6.webm";t(60699);const d={title:"Visualize in Napari/Fiji",sidebar_label:"5. Visualize in Napari/Fiji",sidebar_position:5},h=void 0,c={id:"introduction/first_steps/first_app",title:"Visualize in Napari/Fiji",description:"Every analysis starts with the visualization of our data. And we have a great selection of tools in the bioimage world to help us.",source:"@site/docs/introduction/first_steps/first_app.mdx",sourceDirName:"introduction/first_steps",slug:"/introduction/first_steps/first_app",permalink:"/docs/introduction/first_steps/first_app",draft:!1,unlisted:!1,editUrl:"https://github.com/arkitektio/arkitektio.github.io/edit/master/docs/introduction/first_steps/first_app.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Visualize in Napari/Fiji",sidebar_label:"5. Visualize in Napari/Fiji",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Your first Task",permalink:"/docs/introduction/first_steps/first_task"},next:{title:"6. A brief interlude",permalink:"/docs/introduction/first_steps/brief_interlude"}},u={},p=[{value:"Team Napari or Team Fiji?",id:"team-napari-or-team-fiji",level:2},{value:"Napari",id:"napari",level:3},{value:"Installation",id:"installation",level:4},{value:"Connecting Napari to Arkitekt",id:"connecting-napari-to-arkitekt",level:4},{value:"Visualizing your data in Napari",id:"visualizing-your-data-in-napari",level:4},{value:"Fiji",id:"fiji",level:3},{value:"Installation",id:"installation-1",level:4},{value:"Connecting Fiji to Arkitekt",id:"connecting-fiji-to-arkitekt",level:3},{value:"Visualizing your data in ImageJ",id:"visualizing-your-data-in-imagej",level:4}];function m(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Every analysis starts with the visualization of our data. And we have a great selection of tools in the bioimage world to help us.\nBut how do we get our data into these tools? How do we get our data from our server into Napari or Fiji? Well, we could download it, and then open it in the tool.\nBut that is not really what we want. We want to be able to use our data directly from the server, and we want to be able to save our results back to the server."}),"\n",(0,n.jsx)(i.p,{children:"So lets see how we can do that.\nIn this section you will learn:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"How to connect both Napari or Fiji to your Arkitekt server."}),"\n",(0,n.jsx)(i.li,{children:"How to visualize your data in Napari or Fiji."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"team-napari-or-team-fiji",children:"Team Napari or Team Fiji?"}),"\n",(0,n.jsx)(i.p,{children:"We love Napari and we love Fiji. And we think that both tools have their place in the bioimage analysis world. So we want to make sure that you can use both tools\nwith Arkitekt and together in your workflows. So lets try install them both and see how we can connect them to Arkitekt."}),"\n",(0,n.jsx)(i.admonition,{title:"Our darling",type:"note",children:(0,n.jsx)(i.p,{children:"We truly love Napari for data visualization. If you have not tried it yet, you should. It is a great tool and we are sure you will love it too. And a few of the\nfeatures that we will show you here are only available in Napari. So if you are not familiar with Napari yet, we recommend you to give it a try."})}),"\n",(0,n.jsx)(i.h3,{id:"napari",children:"Napari"}),"\n",(0,n.jsxs)(i.p,{children:["First lets see how we can get napari to work with Arkitekt. Napari is our go to choice for large data visualization and can take advantage of all of the ",(0,n.jsx)(i.a,{href:"docs/features/lazy_loading",children:"lazy loading"}),"\ncapabilities of Arkitekt, so that you can easily visualize terabyte sized datasets. To enable Napari to work with Arkitekt we need to install a plugin."]}),"\n",(0,n.jsx)(i.h4,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(i.p,{children:"To install the Napari bridge plugin for Arkitekt you can choose from two options:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Install it directly from the ",(0,n.jsx)(i.a,{href:"https://napari-hub.org/plugins/mikro-napari",children:"napari plugin store"})]}),"\n",(0,n.jsx)(i.p,{children:"This is the easiest way to install the plugin and works also great with napari prebundled binaries.\nJust follow the instructions on the plugin page, and you should be ready to go."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Install it directly from the command line:"}),"\n",(0,n.jsx)(i.p,{children:"If you are familiar with command line and you have napari installed in a python (Python > 3.9) environment, you can also install the plugin directly from the command line.\nJust run the following command:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"pip install mikro-napari\npip install napari==0.4.17 pyqt5 # if you do not have napari installed yet (currently we have only tested with 0.4.17 but 0.4.18 should also work)\n"})}),"\n",(0,n.jsx)(i.p,{children:"This also allows you to start all of the widgets directly from the command line with the plugin installed:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"mikro-napari\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{title:"Recommended Installation",type:"info",children:(0,n.jsx)(i.p,{children:'As the napari plugin specifications are rapidly evolving, we currently follow the napari guidelines to recommend to install the plugin directly from the command line, and to\nuse the unbundled version of napari (the "pip" install version.) This recommendation might change in the future.'})}),"\n",(0,n.jsx)(i.h4,{id:"connecting-napari-to-arkitekt",children:"Connecting Napari to Arkitekt"}),"\n",(0,n.jsxs)(i.p,{children:["Once you have installed the plugin, you can start Napari and you should see a new button in the left hand navigation called ",(0,n.jsx)(i.code,{children:"Provide"}),". Click on it and you should see\nthe connection process starting."]}),"\n",(0,n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,n.jsx)("source",{src:o})}),"\n",(0,n.jsx)(i.p,{children:"A few words about this connection process:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"The Magic Bar"}),":\nWhat you see in the bottom left corner is the ",(0,n.jsx)(i.code,{children:"Magic Bar"}),", a widget provided by the mikro-napari plugin, and the core UI element that allows apps to connect to Arkitekt.\nWhile developers can choose to implement their own UI elements to connect to Arkitekt, the MagicBar is a common UI element that is provided by the arkitekt package, and\nyou will encounter it in almost all apps that currently conncan connectect to Arkitekt."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"The Connection screen"}),":\nOn initial setup you will see a screen that allows you to connect to your Arkitekt server. If you run Arkitekt locally you will see your instance automatically detected.\nFor remote instances, ",(0,n.jsx)(i.a,{href:"/docs/introduction/installation#advertising",children:"advertised"})," Instances will be automatically detected and should be listed in the dropdown menu. If\nyour instance is not advertised, you can also enter the URL manually."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Login in the Browser"}),":\nTo connect to your Arkitekt instance, you need to login. This is done in the browser, and you will be redirected to the login page of your Arkitekt instance. Please allow\nrequests to the firewall."]}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{title:"Seems familiar?",type:"info",children:(0,n.jsx)(i.p,{children:"You might recall the same process that you went through to connect Orkestrator. This will become a common theme, as all apps that connect to Arkitekt need to undergo the same\nconnection process. Again. Only once if you so wish."})}),"\n",(0,n.jsxs)(i.p,{children:["Once you have connected to your Arkitekt instance, your Napari instance should now both appear on the Dashboard and the ",(0,n.jsx)(i.code,{children:"Magic Button"})," button should now say ",(0,n.jsx)(i.code,{children:"Cancel Provide"})," and blink red (red means\nthat the connection is active and listening for requests / red means recordings.). You are set to go and can now start visualizing your data in Napari."]}),"\n",(0,n.jsx)(i.h4,{id:"visualizing-your-data-in-napari",children:"Visualizing your data in Napari"}),"\n",(0,n.jsxs)(i.p,{children:["To visualize your data in Napari, you can simple search for the ",(0,n.jsx)(i.code,{children:"Show on Napari"}),' node, and reserve it in your dashboard. Once you have reserved the node,\nyou can run it directly from the image pane where it will appear in the bottom right corner. If you leave the "show roi layer" on, you should even see\nthe ROIs that you have created in the browser.']}),"\n",(0,n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,n.jsx)("source",{src:r})}),"\n",(0,n.jsx)(i.p,{children:"A few words about this process:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Lazy Loading"}),':\nWhen calling the "Show on Napari" node, not the whole image is downloaded, but we can take the advantage of the lazy loading capabilities of both\nArkitekt and Napari to only show you the visible parts.']}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"ROIs"}),':\nIf you have created ROIs in the browser, you can also visualize them in Napari. Just make sure that you have the "Show ROI Layer" option enabled, when\nassigning the node. Importantly you will notice that if you mark rois on the ROI layer they are ',(0,n.jsx)(i.em,{children:"live syncing"})," with your server and the browser, and\npotentially other napari instances that are connected to the same server. Neat right?"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Alterations"}),':\nWhatever alterations you make to the image in Napari, will stay in Napari. So if you want to save your alterations back to the server, you need to\nuse the "Upload to Arkitekt" node. More on that later.']}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"fiji",children:"Fiji"}),"\n",(0,n.jsxs)(i.p,{children:["Fiji is a great tool for image analysis and has a huge community of developers and users. So we want to make sure that you can use Fiji with Arkitekt as well.\nHowever Fiji is a Java tool and our core team is not very familiar with Java. So we have not yet developed a Fiji plugin. But because of the great community\nefforts in providing ",(0,n.jsx)(i.a,{href:"https://github.com/imagej/pyimagej",children:"PyimageJ"}),", we have something that could potentally work arguably even better than a plugin. The only downside is that\nyou need to install \ud83d\ude44 another app on your computer."]}),"\n",(0,n.jsx)(i.admonition,{title:"On Mac compability",type:"warning",children:(0,n.jsx)(i.p,{children:"Arkitekt thrives to be a cross-platform solution. However as of now, we cannot provide a Fiji bridge for Mac. This is due to the fact that the PyimageJ package\ndoes not support Mac. We are working on a solution, but for now, you need to use Napari on Mac. If you are a Java developer and want to help us, please reach out."})}),"\n",(0,n.jsx)(i.h4,{id:"installation-1",children:"Installation"}),"\n",(0,n.jsxs)(i.p,{children:["To connect Fiji to Arkitekt you need to install ",(0,n.jsx)(i.a,{href:"https://github.com/jhnnsrs/mikroj",children:"MikroJ"}),", our Fiji wrapping app. MikroJ is a small installable python app, that\nwill interface with your Fiji installation and allows us to connect Fiji to Arkitekt. You can find more about the design of MikroJ ",(0,n.jsx)(i.a,{href:"docs/apps/mikroj",children:"here"}),"."]}),"\n",(0,n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,n.jsx)("source",{src:s})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Just download MikroJ from our ",(0,n.jsx)(i.a,{href:"https://github.com/jhnnsrs/mikroj",children:"Github page"})," and extract it to a folder of your choice.\nThen double click on the ",(0,n.jsx)(i.code,{children:"MikroJ.exe"}),"file to start the app. Please do *",(0,n.jsx)(i.em,{children:"NOT"}),"\xdc start your FIJI installation. MikroJ will start Fiji for you.\nThe initial setup can take a few seconds, but once it is done, you should the app screen."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"You will see a screen that allows you to both connect to your local Fiji instance and to your Arkitekt instance. Acting as a Bridge."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Click on ",(0,n.jsx)(i.code,{children:"Initialize ImageJ"}),'. This will open a dialog and prompt you to navigate to your "Fiji.App" folder that contains your ImageJ installation.\nOnce you have selected the folder, MikroJ will start Fiji for you and you should see it popping. It it is important that you do not move your Fiji installation after you have connected it to MikroJ. If you do, you need to reconnect it\nto MikroJ.']}),"\n",(0,n.jsx)(i.admonition,{title:"Important",type:"caution",children:(0,n.jsx)(i.p,{children:"This initial setup is only required once. MikroJ will remember your Fiji installation and will start it automatically for you in the future.\nHowever this step might take a few seconds and cause an UI freeze (on our buglist). This is normal, and should resolve in a few seconds to a minute, while MikroJ\nand maven (the Java packaging tool that PyImageJ uses) are resolving some dependencies."})}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Optional: Create a shortcut to MikroJ on your desktop. This will allow you to start MikroJ directly from the shortcut."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["If nothing happens after you click on ",(0,n.jsx)(i.code,{children:"Initialize ImageJ"}),", please refer to the ",(0,n.jsx)(i.a,{href:"/docs/troubleshooting/app",children:"troubleshooting section"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"connecting-fiji-to-arkitekt",children:"Connecting Fiji to Arkitekt"}),"\n",(0,n.jsx)(i.p,{children:"Once you have installed MikroJ and configured MikroJ, you can connect it to your Arkitekt instance. This process is similar\nto the process explained in the Napari section. So we will not go into too much detail here."}),"\n",(0,n.jsx)(i.h4,{id:"visualizing-your-data-in-imagej",children:"Visualizing your data in ImageJ"}),"\n",(0,n.jsxs)(i.p,{children:["To visualize your data in ImageJ, you can simple search for the ",(0,n.jsx)(i.code,{children:"Load into Imagej"})," node, and reserve it in your dashboard. Once you have reserved the node,\nyou can run it directly from the image pane where it will appear in the bottom right corner."]}),"\n",(0,n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,n.jsx)("source",{src:l})}),"\n",(0,n.jsx)(i.p,{children:"A few words about this process:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Cross Talk"}),":\nWhen calling the ",(0,n.jsx)(i.code,{children:"Show on Imagej"})," node, MikroJ will download the whole image into memory and share this image with Fiji. This means that you can\nclose the browser and the image will still be available in Fiji."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"ROIs"}),":\nWe currently do not support syncing ROIS between Fiji and the Arkitekt Instance automatically. This is defintely on our roadmap, but we have not\nyet found a good solution. If you have any ideas, please reach out. You can however extract the ROIS on an Image in Fiji through a ",(0,n.jsx)(i.code,{children:"Node"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.em,{children:"Alterations"}),":\nWhatever alterations you make to the image in Fiji, will stay in Fiji. So if you want to save your alterations back to the server, you need to\nuse the ",(0,n.jsx)(i.code,{children:"Upload from ImageJ"})," node. More on that in the advanced tutorial."]}),"\n"]}),"\n"]})]})}function y(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);