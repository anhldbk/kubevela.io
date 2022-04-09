(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8092],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47097:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={title:"Designing Workflow Steps"},l={unversionedId:"platform-engineers/workflow/workflow",id:"version-v1.1/platform-engineers/workflow/workflow",isDocsHomePage:!1,title:"Designing Workflow Steps",description:"Overview",source:"@site/versioned_docs/version-v1.1/platform-engineers/workflow/workflow.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/workflow",permalink:"/docs/v1.1/platform-engineers/workflow/workflow",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/workflow/workflow.md",version:"v1.1",lastUpdatedBy:"Hongchao Deng",lastUpdatedAt:1632300282,formattedLastUpdatedAt:"9/22/2021",frontMatter:{title:"Designing Workflow Steps"},sidebar:"version-v1.1/docs",previous:{title:"Advanced Features",permalink:"/docs/v1.1/platform-engineers/traits/advanced"},next:{title:"Step Operations",permalink:"/docs/v1.1/platform-engineers/workflow/cue-actions"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Using workflow",id:"using-workflow",children:[{value:"Workflow Steps",id:"workflow-steps",children:[]},{value:"Apply the Application",id:"apply-the-application",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Workflow")," allows you to customize steps in ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),", glue together additional delivery processes and specify arbitrary delivery environments. In short, ",(0,r.kt)("inlineCode",{parentName:"p"},"Workflow")," provides customized control flow and flexibility based on the original delivery model of Kubernetes(Apply). For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Workflow")," can be used to implement complex operations such as pause, manual approval, waiting status, data flow, multi-environment gray release, A/B testing, etc."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Workflow"),' is a further exploration and best practice based on OAM model in KubeVela, it obeys the modular concept and reusable characteristics of OAM. Each workflow module is a "super glue" that can combine your arbitrary tools and processes. In modern complex cloud native application delivery environment, you can completely describe all delivery processes through a declarative configuration, ensuring the stability and convenience of the delivery process.'),(0,r.kt)("h2",{id:"using-workflow"},"Using workflow"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Workflow")," consists of steps, you can either use KubeVela's ","[built-in workflow steps]",", or write their own ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinition")," to complete the operation."),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"vela def")," to define workflow steps by writing ",(0,r.kt)("inlineCode",{parentName:"p"},"Cue templates"),". Let's write an ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," that apply a Tomcat using Helm chart and automatically send message to Slack when the Tomcat is running."),(0,r.kt)("h3",{id:"workflow-steps"},"Workflow Steps"),(0,r.kt)("p",null,"KubeVela provides several CUE actions for writing workflow steps. These actions are provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"vela/op")," package. In order to achieve the above scenario, we need to use the following three CUE actions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Action"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./cue-actions#apply"},"ApplyApplication")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Apply all the resources in Application."),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./cue-actions#read"},"Read")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Read resources in Kubernetes cluster."),(0,r.kt)("td",{parentName:"tr",align:"left"},"value: the resource metadata to be get. And after successful execution, ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," will be updated with resource definition in cluster.",(0,r.kt)("br",null)," err: if an error occurs, the ",(0,r.kt)("inlineCode",{parentName:"td"},"err")," will contain the error message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./cue-actions#conditionalwait"},"ConditionalWait")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The workflow step will be blocked until the condition is met."),(0,r.kt)("td",{parentName:"tr",align:"left"},"continue: The workflow step will be blocked until the value becomes ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For all the workflow actions, please refer to ",(0,r.kt)("a",{parentName:"p",href:"./cue-actions"},"Cue Actions"))),(0,r.kt)("p",null,"After this, we need two ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinitions")," to complete the Application\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Apply Tomcat and wait till it's status become running. We need to write a custom workflow step for it."),(0,r.kt)("li",{parentName:"ol"},"Send Slack notifications, we can use the built-in ","[webhook-notification]"," step for it.")),(0,r.kt)("h4",{id:"step-apply-tomcat"},"Step: Apply Tomcat"),(0,r.kt)("p",null,"First, use ",(0,r.kt)("inlineCode",{parentName:"p"},"vela def init")," to generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinition")," template\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'vela def init my-helm -t workflow-step --desc "Apply helm charts and wait till it\'s running." -o my-helm.cue\n')),(0,r.kt)("p",null,"The result is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat my-helm.cue\n\n"my-helm": {\n    annotations: {}\n    attributes: {}\n    description: "Apply helm charts and wait till it\'s running."\n    labels: {}\n    type: "workflow-step"\n}\n\ntemplate: {\n}\n')),(0,r.kt)("p",null,"Import ",(0,r.kt)("inlineCode",{parentName:"p"},"vela/op")," and complete the Cue code in ",(0,r.kt)("inlineCode",{parentName:"p"},"template"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import (\n  "vela/op"\n)\n\n"my-helm": {\n    annotations: {}\n    attributes: {}\n    description: "Apply helm charts and wait till it\'s running."\n    labels: {}\n    type: "workflow-step"\n}\n\ntemplate: {\n  // Apply all the resources in Application\n  apply: op.#ApplyApplication & {}\n\n  resource: op.#Read & {\n     value: {\n       kind: "Deployment"\n       apiVersion: "apps/v1"\n       metadata: {\n         name: "tomcat"\n         // we can use context to get any metadata in Application\n         namespace: context.namespace\n       }\n     }\n  }\n\n  workload: resource.value\n  // wait till it\'s ready\n  wait: op.#ConditionalWait & {\n    continue: workload.status.readyReplicas == workload.status.replicas && workload.status.observedGeneration == workload.metadata.generation\n  }\n}\n')),(0,r.kt)("p",null,"Apply it to the cluster\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def apply my-helm.cue\n\nWorkflowStepDefinition my-helm in namespace vela-system updated.\n")),(0,r.kt)("h4",{id:"step-send-slack-notifications"},"Step: Send Slack notifications"),(0,r.kt)("p",null,"Use the built-in step, ","[webhook-notification]","."),(0,r.kt)("h3",{id:"apply-the-application"},"Apply the Application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: tomcat\n    type: helm\n    properties:\n      repoType: helm\n      url: https://charts.bitnami.com/bitnami\n      chart: tomcat\n      version: "9.2.20"\n  workflow:\n    steps:\n      - name: tomcat\n        # specify the step type\n        type: my-helm\n        outputs:\n          - name: msg\n            # get value from the deployment status in my-helm\n            valueFrom: resource.value.status.conditions[0].message\n      - name: send-message\n        type: webhook-notification\n        inputs:\n          - from: msg\n            # use the output value in the previous step and pass it into the properties slack.message.text\n            parameterKey: slack.message.text \n        properties:\n          slack:\n            # the address of your slack webhook, please refer to: https://api.slack.com/messaging/webhooks\n            url: <your slack url>\n')),(0,r.kt)("p",null,"Apply the Application to the cluster and you can see that all resources have been successfully applied and Slack has received the messages of the Deployment status."))}c.isMDXComponent=!0}}]);