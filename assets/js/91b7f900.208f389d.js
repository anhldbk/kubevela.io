(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[44183],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89469:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"Step Operations"},i={unversionedId:"platform-engineers/workflow/cue-actions",id:"version-v1.3/platform-engineers/workflow/cue-actions",isDocsHomePage:!1,title:"Step Operations",description:"This documentation will introduce the CUE operations provided in vela/op stdlib package that can be used in each workflow step.",source:"@site/versioned_docs/version-v1.3/platform-engineers/workflow/cue-actions.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/cue-actions",permalink:"/docs/platform-engineers/workflow/cue-actions",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/workflow/cue-actions.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Step Operations"},sidebar:"version-v1.3/docs",previous:{title:"Designing Workflow Steps",permalink:"/docs/platform-engineers/workflow/workflow"},next:{title:"Working Mechanism",permalink:"/docs/platform-engineers/workflow/working-mechanism"}},p=[{value:"Apply",id:"apply",children:[{value:"Action Parameter",id:"action-parameter",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"ConditionalWait",id:"conditionalwait",children:[{value:"Action Parameter",id:"action-parameter-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]},{value:"Load",id:"load",children:[{value:"Action Parameter",id:"action-parameter-2",children:[]},{value:"Usage",id:"usage-2",children:[]}]},{value:"Read",id:"read",children:[{value:"Action Parameter",id:"action-parameter-3",children:[]},{value:"Usage",id:"usage-3",children:[]}]},{value:"ApplyApplication",id:"applyapplication",children:[{value:"Action Parameter",id:"action-parameter-4",children:[]},{value:"Usage",id:"usage-4",children:[]}]},{value:"ApplyComponent",id:"applycomponent",children:[{value:"Action Parameter",id:"action-parameter-5",children:[]},{value:"Usage",id:"usage-5",children:[]}]},{value:"ApplyRemaining",id:"applyremaining",children:[{value:"Action Parameter",id:"action-parameter-6",children:[]},{value:"Usage",id:"usage-6",children:[]}]},{value:"Slack",id:"slack",children:[{value:"Action Parameter",id:"action-parameter-7",children:[]},{value:"Usage",id:"usage-7",children:[]}]},{value:"DingTalk",id:"dingtalk",children:[{value:"Action Parameter",id:"action-parameter-8",children:[]},{value:"Usage",id:"usage-8",children:[]}]},{value:"Steps",id:"steps",children:[{value:"Usage",id:"usage-9",children:[]}]},{value:"DoVar",id:"dovar",children:[{value:"Action Parameter",id:"action-parameter-9",children:[]},{value:"Usage",id:"usage-10",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation will introduce the CUE operations provided in ",(0,o.kt)("inlineCode",{parentName:"p"},"vela/op")," stdlib package that can be used in each workflow step."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn the syntax of CUE, read ",(0,o.kt)("a",{parentName:"p",href:"../cue/basic"},"CUE Basic"))),(0,o.kt)("h2",{id:"apply"},"Apply"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create or update resource in Kubernetes cluster."),(0,o.kt)("h3",{id:"action-parameter"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"value: the resource structure to be created or updated. And after successful execution, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," will be updated with resource status."),(0,o.kt)("li",{parentName:"ul"},"patch: the content support ",(0,o.kt)("inlineCode",{parentName:"li"},"Strategic Merge Patch"),",let you can define the strategy of list merge through comments.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Apply: {\n  value: {...}\n  patch: {\n    //patchKey=$key\n    ...\n  }\n}\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import "vela/op"\nstepName: op.#Apply & {\n  value: {\n    kind: "Deployment"\n    apiVersion: "apps/v1"\n    metadata: name: "test-app"\n    spec: { \n      replicas: 2\n      ...\n    }\n  }\n  patch: {\n   spec: template: spec: {\n      //patchKey=name\n      containers: [{name: "sidecar"}]\n   }\n  }\n}\n')),(0,o.kt)("h2",{id:"conditionalwait"},"ConditionalWait"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Step will be blocked until the condition is met."),(0,o.kt)("h3",{id:"action-parameter-1"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"continue: Step will be blocked until the value becomes ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#ConditionalWait: {\n  continue: bool\n}\n")),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import "vela/op"\n\napply: op.#Apply\n\nwait: op.#ConditionalWait: {\n  continue: apply.value.status.phase=="running"\n}\n')),(0,o.kt)("h2",{id:"load"},"Load"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Get all components in application."),(0,o.kt)("h3",{id:"action-parameter-2"},"Action Parameter"),(0,o.kt)("p",null,"No parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Load: {}\n")),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import "vela/op"\n\n// You can use `load.value.[componentName] after this action.\nload: op.#Load & {}\n')),(0,o.kt)("h2",{id:"read"},"Read"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Get resource in Kubernetes cluster. "),(0,o.kt)("h3",{id:"action-parameter-3"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"value: the resource metadata to be get. And after successful execution, ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," will be updated with resource definition in cluster."),(0,o.kt)("li",{parentName:"ul"},"err: if an error occurs, the ",(0,o.kt)("inlineCode",{parentName:"li"},"err")," will contain the error message.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Read: {\n  value: {}\n  err?: string\n}\n")),(0,o.kt)("h3",{id:"usage-3"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// You can use configmap.value.data after this action.\nconfigmap: op.#Read & {\n   value: {\n      kind: "ConfigMap"\n      apiVersion: "v1"\n      metadata: {\n        name: "configmap-name"\n        namespace: "configmap-ns"\n      }\n   }\n}\n')),(0,o.kt)("h2",{id:"applyapplication"},"ApplyApplication"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create or update resources corresponding to the application in Kubernetes cluster."),(0,o.kt)("h3",{id:"action-parameter-4"},"Action Parameter"),(0,o.kt)("p",null,"No parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#ApplyApplication: {}\n")),(0,o.kt)("h3",{id:"usage-4"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apply: op.#ApplyApplication & {}\n")),(0,o.kt)("h2",{id:"applycomponent"},"ApplyComponent"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create or update resources corresponding to the component in Kubernetes cluster. Note that need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Load")," first to apply the resources."),(0,o.kt)("h3",{id:"action-parameter-5"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"value: the load value of the resource."),(0,o.kt)("li",{parentName:"ul"},"patch: the value to patch resource.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#ApplyComponent: {\n  value: {...}\n  patch: {...}\n}\n")),(0,o.kt)("h3",{id:"usage-5"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"load: op.#Load & {}\n\napply: op.#ApplyComponent & {\n  value: load.value[parameter.component]\n}\n")),(0,o.kt)("h2",{id:"applyremaining"},"ApplyRemaining"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Create or update the resources corresponding to all components in the application in the Kubernetes cluster, and specify which components do not need to apply through ",(0,o.kt)("inlineCode",{parentName:"p"},"exceptions"),", or skip some resources of the exceptional component."),(0,o.kt)("h3",{id:"action-parameter-6"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"exceptions: indicates the name of the exceptional component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#ApplyRemaining: {\n exceptions?: [...string]\n}  \n")),(0,o.kt)("h3",{id:"usage-6"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apply: op.#ApplyRemaining & {\n  exceptions: ["applied-component-name"]\n}\n')),(0,o.kt)("h2",{id:"slack"},"Slack"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Send messages to Slack."),(0,o.kt)("h3",{id:"action-parameter-7"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"url: The webhook address of Slack."),(0,o.kt)("li",{parentName:"ul"},"message: The messages that you want to send, please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://api.slack.com/reference/messaging/payload"},"Slack messaging")," \u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Slack: {\n  url: string\n  message: {...}\n}\n")),(0,o.kt)("h3",{id:"usage-7"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apply: op.#Slack & {\n  url: webhook url\n  message:\n    text: Hello KubeVela\n}\n")),(0,o.kt)("h2",{id:"dingtalk"},"DingTalk"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Send messages to DingTalk."),(0,o.kt)("h3",{id:"action-parameter-8"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"url: The webhook address of DingTalk."),(0,o.kt)("li",{parentName:"ul"},"message: The messages that you want to send, please refer to ",(0,o.kt)("a",{parentName:"li",href:"https://developers.dingtalk.com/document/robots/custom-robot-access/title-72m-8ag-pqw"},"DingTalk messaging")," \u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#DingTalk: {\n  url: string\n  message: {...}\n}\n")),(0,o.kt)("h3",{id:"usage-8"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apply: op.#DingTalk & {\n  url: webhook url\n  message:\n    msgtype: text\n    text:\n      context: Hello KubeVela\n}\n")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Used to encapsulate a set of operations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In steps, you need to specify the execution order by tag.")),(0,o.kt)("h3",{id:"usage-9"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app: op.#Steps & {\n  load: op.#Load & {\n    component: "component-name"\n  } @step(1)\n  apply: op.#Apply & {\n    value: load.value.workload\n  } @step(2)\n} \n')),(0,o.kt)("h2",{id:"dovar"},"DoVar"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"used to save or read user-defined data in the context of workflow"),(0,o.kt)("h3",{id:"action-parameter-9"},"Action Parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"method: The value is ",(0,o.kt)("inlineCode",{parentName:"li"},"get")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"put"),", which indicates whether the action reads or saves data from workflow"),(0,o.kt)("li",{parentName:"ul"},"path: Path to save or read data"),(0,o.kt)("li",{parentName:"ul"},"value: Data content (in the format of cue). When the method is ",(0,o.kt)("inlineCode",{parentName:"li"},"get"),", it indicates the read data, otherwise it indicates the data to be saved")),(0,o.kt)("h3",{id:"usage-10"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'put: op.ws.#DoVar & {\n  method: "Put"\n  path: "foo.score"\n  value: 100\n}\n\n// The user can get the data saved above through get.value (100)\nget: op.ws.#DoVar & {\n  method: "Get"\n  path: "foo.score"\n}\n\n')))}u.isMDXComponent=!0}}]);