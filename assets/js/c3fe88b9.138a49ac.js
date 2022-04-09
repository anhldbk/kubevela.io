(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[38773],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39907:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var o=n(22122),i=n(19756),a=(n(67294),n(3905)),r={title:"Manage Workflow",description:"This article introduces the usage of Workflow and gives you a full picture of it."},l={unversionedId:"tutorials/workflows",id:"tutorials/workflows",isDocsHomePage:!1,title:"Manage Workflow",description:"This article introduces the usage of Workflow and gives you a full picture of it.",source:"@site/docs/tutorials/workflows.md",sourceDirName:"tutorials",slug:"/tutorials/workflows",permalink:"/docs/next/tutorials/workflows",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/workflows.md",version:"current",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642084821,formattedLastUpdatedAt:"1/13/2022",frontMatter:{title:"Manage Workflow",description:"This article introduces the usage of Workflow and gives you a full picture of it."},sidebar:"docs",previous:{title:"Continuous Delivery from Image Registry",permalink:"/docs/next/tutorials/trigger"},next:{title:"VelaUX Concept",permalink:"/docs/next/getting-started/velaux-concept"}},s=[{value:"Before starting",id:"before-starting",children:[]},{value:"Workflow and Revision",id:"workflow-and-revision",children:[]},{value:"Built-in Workflow steps",id:"built-in-workflow-steps",children:[]},{value:"Implement notification",id:"implement-notification",children:[]}],c={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section introduces the usage of Workflow and gives you a full picture of it."),(0,a.kt)("p",null,"In the section of ",(0,a.kt)("a",{parentName:"p",href:"./k8s-object"},"Deploy Kubernetes Objects"),", we first learned the usage of workflow, that is, manual approval in the process of multi-cluster publishing. Now we continue to introduce the following topics:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Learn more about Workflow, Revision, and Environment, as well as all the built-in Workflow steps."),(0,a.kt)("li",{parentName:"ol"},"Implement notifications in the workflow."),(0,a.kt)("li",{parentName:"ol"},"Perform data initialization in the workflow.")),(0,a.kt)("h2",{id:"before-starting"},"Before starting"),(0,a.kt)("p",null,"We assume that you've learned from ",(0,a.kt)("a",{parentName:"p",href:"../quick-start"},"Deliver the first application"),", ",(0,a.kt)("a",{parentName:"p",href:"./webservice"},"Deliver Docker image"),", and other articles to understand the basic"),(0,a.kt)("h2",{id:"workflow-and-revision"},"Workflow and Revision"),(0,a.kt)("p",null,"When the application is deployed, a certain workflow is executed to release a version. The Revision follows the execution status of the workflow, which means that if the workflow is successfully executed, Revision will increase by +1."),(0,a.kt)("p",null,"The workflow is bound to the environment where the application is released, that is, each environment of the application has an independent workflow."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Application Revision List",src:n(58104).Z})),(0,a.kt)("p",null,"After docking with the CI system, Revision can be associated with Code Commit to trace the history. Later, the version rollback function will be implemented, and you can choose to roll back an environment to a specified version at any time."),(0,a.kt)("h2",{id:"built-in-workflow-steps"},"Built-in Workflow steps"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"./k8s-object"},"Deliver Kubernetes Native Resources"),", we used the manual review step ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend"),". Let's take a look at what the other built-in steps do:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deploy2env"),": The application is delivered to the designated Target. This step will be automatically generated according to the Target configured in the environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deploy-cloud-resource"),": Cloud resource applications are delivered to the designated Target. Note that the difference between this type of step and deploy2env is that the CR resource created by the control cloud resource is deployed to the control cluster. After the service is created and the access key (Secret) is generated, the Secret is distributed to the Target designated cluster and Namespace."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"share-cloud-resource"),": Distribute the secret generated by a cloud service to the specified targets. Thus when one cloud service is created in a multi-cluster application, and its access key can be shared to the other of multiple clusters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"notification"),": three notification modes: DingTalk, Mail, and Slack, place them in any stage of the workflow to implement message notifications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"webhook"),": place it at any stage of the workflow to call back external systems.")),(0,a.kt)("h2",{id:"implement-notification"},"Implement notification"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"notification")," step to implement three notification modes: DingTalk, Email, and Slack. Enter the application workflow management page, select an environment workflow and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," button to enter the editing state."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"workflow-edit",src:n(15014).Z})),(0,a.kt)("p",null,"Select the step of ",(0,a.kt)("inlineCode",{parentName:"p"},"notification")," type on the left and drag it into the canvas on the right, the page will automatically pop up the workflow step editing window. In the setting window, you can set three kinds of notifications as needed. In the same step, if you set multiple Notices, it takes effect at the same time."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"workflow-notification",src:n(78746).Z})),(0,a.kt)("p",null,"If you set ",(0,a.kt)("inlineCode",{parentName:"p"},"Dingding")," notification, click the enable button on the right side of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dingding")," window, and two input boxes will appear on the page, one is the webhook address of the Dingding group notification robot, refer to ","[Dingding group robot reference document]","(https:// open.dingtalk.com/document/group/custom-robot-access). The other is the notification content input box, you can customize any notification content that needs to be sent."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Slack")," is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"Dingding")," configuration, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Get Webhook Address in Slack"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Email")," has more configuration data. It needs to configure the mail server, mail content and sending destination mail address, etc."),(0,a.kt)("p",null,"After the configuration is complete, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Submit")," to save the step configuration. At this time, you need to plan the location of the notification step. By default, it will be added to the end. If you want to place it in the middle step, you need to disconnect the direct connection of the original step, and then notify Steps are placed in the middle of the wire."),(0,a.kt)("p",null,"After the workflow is configured, please click the Save button at the top right of the workflow window to save all changes. After saving, you can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," on the top right of the page or the select button on the right to choose to execute the workflow and verify whether you can receive a message notification."))}p.isMDXComponent=!0},58104:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-revision-ab2c61f58ebfdf0b6bd32c29b3fa2dfb.jpg"},15014:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-edit-d7e36aca89b22c7d1735d7035b39eaa4.jpg"},78746:function(e,t,n){"use strict";t.Z=n.p+"assets/images/workflow-notification-ca834bea2f99972e2ff3db13dda94135.jpg"}}]);