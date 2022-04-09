(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[69895],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),w=c(o),f=r,u=w["".concat(s,".").concat(f)]||w[f]||d[f]||a;return o?n.createElement(u,i(i({ref:t},p),{},{components:o})):n.createElement(u,i({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}w.displayName="MDXCreateElement"},62237:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=o(22122),r=o(19756),a=(o(67294),o(3905)),i={title:"Manage Workflows",description:"Manager workflows for application"},l={unversionedId:"how-to/dashboard/workflow/overview",id:"how-to/dashboard/workflow/overview",isDocsHomePage:!1,title:"Manage Workflows",description:"Manager workflows for application",source:"@site/docs/how-to/dashboard/workflow/overview.md",sourceDirName:"how-to/dashboard/workflow",slug:"/how-to/dashboard/workflow/overview",permalink:"/docs/next/how-to/dashboard/workflow/overview",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/workflow/overview.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1643094182,formattedLastUpdatedAt:"1/25/2022",frontMatter:{title:"Manage Workflows",description:"Manager workflows for application"},sidebar:"docs",previous:{title:"Delete Application",permalink:"/docs/next/how-to/dashboard/application/delete-application"},next:{title:"Manage Traits",permalink:"/docs/next/how-to/dashboard/trait/overview"}},s=[{value:"Edit workflow steps",id:"edit-workflow-steps",children:[]},{value:"Create Workflow",id:"create-workflow",children:[]}],c={toc:s};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When an application is created, it is associated with an environment. Each environment is associated with a workflow for deployment. After a workflow is created, there is only one step by default. You can enter workflow editing mode by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"default-workflow",src:o(20515).Z})),(0,a.kt)("h2",{id:"edit-workflow-steps"},"Edit workflow steps"),(0,a.kt)("p",null,"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit")," button, in addition to modifying the name and description of the workflow, you can also add different types of workflow steps and orchestrate them. Here we have added a ",(0,a.kt)("inlineCode",{parentName:"p"},"Notification")," step to send a notification when the deployment is complete."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-workflow",src:o(48956).Z})),(0,a.kt)("p",null,"For more information of workflow steps, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../../../end-user/workflow/built-in-workflow-defs"},"built-in workflow steps")," page."),(0,a.kt)("h2",{id:"create-workflow"},"Create Workflow"),(0,a.kt)("p",null,"Each environment is bound to one workflow, you can deploy a new workflow by binding a new environment."),(0,a.kt)("p",null,"There can be multiple delivery targets in each environment, take an environment which contains a test delivery target and a prod delivery target as an example. After binding the environment for the application, you can see that a new workflow has been added: by default, there are two steps: one is ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy to test"),", one is ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy to prod"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new-workflow",src:o(85172).Z})),(0,a.kt)("p",null,"Let's edit this workflow, add ",(0,a.kt)("inlineCode",{parentName:"p"},"suspend")," between two steps:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-workflow",src:o(88725).Z})),(0,a.kt)("p",null,"After modification, we choose this new workflow to deploy:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"execute-workflow",src:o(59855).Z})),(0,a.kt)("p",null,"After deployment, when the resources in the test target are deployed, the work flow will be suspended. We can have some manual operations."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"continue-workflow",src:o(21040).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Rollback"),", the workflow will rollback to the latest succeeded revision and re-deploy."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Terminate"),", the workflow will be terminated."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Continue"),", the workflow will continue to execute.")))}p.isMDXComponent=!0},21040:function(e,t,o){"use strict";t.Z=o.p+"assets/images/continue-workflow-640d7222b5cc290e5e90c7d032753201.png"},20515:function(e,t,o){"use strict";t.Z=o.p+"assets/images/default-workflow-a3b264ba01cf0c7a0cdcd3ce55622832.png"},48956:function(e,t,o){"use strict";t.Z=o.p+"assets/images/edit-workflow-592a9134dbc26d6ae07f1cd70d5d8624.png"},88725:function(e,t,o){"use strict";t.Z=o.p+"assets/images/edit-workflow2-61f070ce3b4c69e5968fb58bd87c765b.png"},59855:function(e,t,o){"use strict";t.Z=o.p+"assets/images/execute-workflow-9ff3a65de396a0e8fe5ae1a8a8168eb5.png"},85172:function(e,t,o){"use strict";t.Z=o.p+"assets/images/new-workflow-4c4cbf3b9b6db5c9014fa429ac5ab0c2.png"}}]);