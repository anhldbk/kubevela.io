(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[34578],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59851:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41"},i={unversionedId:"platform-engineers/workflow/workflow",id:"platform-engineers/workflow/workflow",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41",description:"\u603b\u89c8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/workflow/workflow.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/workflow",permalink:"/zh/docs/next/platform-engineers/workflow/workflow",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/workflow/workflow.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1631628016,formattedLastUpdatedAt:"2021/9/14",frontMatter:{title:"\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41"},sidebar:"docs",previous:{title:"\u66f4\u591a\u7528\u6cd5",permalink:"/zh/docs/next/platform-engineers/traits/advanced"},next:{title:"\u9644\u5f55\uff1aCUE \u64cd\u4f5c\u7b26",permalink:"/zh/docs/next/platform-engineers/workflow/cue-actions"}},p=[{value:"\u603b\u89c8",id:"\u603b\u89c8",children:[]},{value:"\u4f7f\u7528\u5de5\u4f5c\u6d41",id:"\u4f7f\u7528\u5de5\u4f5c\u6d41",children:[{value:"\u7f16\u5199\u5de5\u4f5c\u6d41\u6b65\u9aa4",id:"\u7f16\u5199\u5de5\u4f5c\u6d41\u6b65\u9aa4",children:[]},{value:"\u7f16\u5199\u5e94\u7528",id:"\u7f16\u5199\u5e94\u7528",children:[]}]}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,o.kt)("p",null,"KubeVela \u7684\u5de5\u4f5c\u6d41\u673a\u5236\u5141\u8bb8\u4f60\u81ea\u5b9a\u4e49\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4e2d\u7684\u6b65\u9aa4\uff0c\u7c98\u5408\u989d\u5916\u7684\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u6307\u5b9a\u4efb\u610f\u7684\u4ea4\u4ed8\u73af\u5883\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u5de5\u4f5c\u6d41\u63d0\u4f9b\u4e86\u5b9a\u5236\u5316\u7684\u63a7\u5236\u903b\u8f91\uff0c\u5728\u539f\u6709 Kubernetes \u6a21\u5f0f\u4ea4\u4ed8\u8d44\u6e90\uff08Apply\uff09\u7684\u57fa\u7840\u4e0a\uff0c\u63d0\u4f9b\u4e86\u9762\u5411\u8fc7\u7a0b\u7684\u7075\u6d3b\u6027\u3002\u6bd4\u5982\u8bf4\uff0c\u4f7f\u7528\u5de5\u4f5c\u6d41\u5b9e\u73b0\u6682\u505c\u3001\u4eba\u5de5\u9a8c\u8bc1\u3001\u72b6\u6001\u7b49\u5f85\u3001\u6570\u636e\u6d41\u4f20\u9012\u3001\u591a\u73af\u5883\u7070\u5ea6\u3001A/B \u6d4b\u8bd5\u7b49\u590d\u6742\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u5de5\u4f5c\u6d41\u662f KubeVela \u5b9e\u8df5\u8fc7\u7a0b\u4e2d\u57fa\u4e8e OAM \u6a21\u578b\u7684\u8fdb\u4e00\u6b65\u63a2\u7d22\u548c\u6700\u4f73\u5b9e\u8df5\uff0c\u5145\u5206\u9075\u5b88 OAM \u7684\u6a21\u5757\u5316\u7406\u5ff5\u548c\u53ef\u590d\u7528\u7279\u6027\u3002\u6bcf\u4e00\u4e2a\u5de5\u4f5c\u6d41\u6a21\u5757\u90fd\u662f\u4e00\u4e2a\u201c\u8d85\u7ea7\u7c98\u5408\u5242\u201d\uff0c\u53ef\u4ee5\u5c06\u4f60\u4efb\u610f\u7684\u5de5\u5177\u548c\u6d41\u7a0b\u90fd\u7ec4\u5408\u8d77\u6765\u3002\u4f7f\u5f97\u4f60\u5728\u73b0\u4ee3\u590d\u6742\u4e91\u539f\u751f\u5e94\u7528\u4ea4\u4ed8\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u4efd\u7533\u660e\u5f0f\u7684\u914d\u7f6e\uff0c\u5b8c\u6574\u7684\u63cf\u8ff0\u6240\u6709\u7684\u4ea4\u4ed8\u6d41\u7a0b\uff0c\u4fdd\u8bc1\u4ea4\u4ed8\u8fc7\u7a0b\u7684\u7a33\u5b9a\u6027\u548c\u4fbf\u5229\u6027\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u5de5\u4f5c\u6d41"},"\u4f7f\u7528\u5de5\u4f5c\u6d41"),(0,o.kt)("p",null,"\u5de5\u4f5c\u6d41\u7531\u6b65\u9aa4\u7ec4\u6210\uff0c\u4f60\u65e2\u53ef\u4ee5\u4f7f\u7528 KubeVela \u63d0\u4f9b\u7684 ","[\u5185\u7f6e\u5de5\u4f5c\u6d41\u6b65\u9aa4]"," \u6765\u4fbf\u5229\u5730\u5b8c\u6210\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u6765\u7f16\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinition")," \u6765\u8fbe\u5230\u60f3\u8981\u7684\u6548\u679c\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"vela def")," \u901a\u8fc7\u7f16\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"Cue template")," \u6765\u5b9a\u4e49\u5de5\u4f5c\u6d41\u6b65\u9aa4\u3002\u4e0b\u9762\u6211\u4eec\u6765\u5b8c\u6210\u8fd9\u4e2a\u573a\u666f\uff1a\u4f7f\u7528 Helm \u90e8\u7f72\u4e00\u4e2a Tomcat\uff0c\u5e76\u5728\u90e8\u7f72\u5b8c\u6210\u540e\u81ea\u52a8\u5411 Slack \u53d1\u9001\u6d88\u606f\u901a\u77e5\u3002"),(0,o.kt)("h3",{id:"\u7f16\u5199\u5de5\u4f5c\u6d41\u6b65\u9aa4"},"\u7f16\u5199\u5de5\u4f5c\u6d41\u6b65\u9aa4"),(0,o.kt)("p",null,"KubeVela \u63d0\u4f9b\u4e86\u4e00\u4e9b CUE \u64cd\u4f5c\u7c7b\u578b\u7528\u4e8e\u7f16\u5199\u5de5\u4f5c\u6d41\u6b65\u9aa4\u3002\u8fd9\u4e9b\u64cd\u4f5c\u5747\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"vela/op")," \u5305\u63d0\u4f9b\u3002\u4e3a\u4e86\u5b9e\u73b0\u4e0a\u8ff0\u573a\u666f\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b 3 \u4e2a CUE \u64cd\u4f5c\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u64cd\u4f5c\u540d"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"./cue-actions#apply"},"ApplyApplication")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u90e8\u7f72\u5e94\u7528\u4e2d\u7684\u6240\u6709\u8d44\u6e90"),(0,o.kt)("td",{parentName:"tr",align:"left"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"./cue-actions#read"},"Read")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u8bfb\u53d6 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u8d44\u6e90\u3002"),(0,o.kt)("td",{parentName:"tr",align:"left"},"value: \u63cf\u8ff0\u9700\u8981\u88ab\u8bfb\u53d6\u8d44\u6e90\u7684\u5143\u6570\u636e\uff0c\u6bd4\u5982 kind\u3001name \u7b49\uff0c\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u96c6\u7fa4\u4e2d\u8d44\u6e90\u7684\u6570\u636e\u4f1a\u88ab\u586b\u5145\u5230 ",(0,o.kt)("inlineCode",{parentName:"td"},"value")," \u4e0a\u3002",(0,o.kt)("br",null)," err: \u5982\u679c\u8bfb\u53d6\u64cd\u4f5c\u53d1\u751f\u9519\u8bef\uff0c\u8fd9\u91cc\u4f1a\u4ee5\u5b57\u7b26\u4e32\u7684\u65b9\u5f0f\u6307\u793a\u9519\u8bef\u4fe1\u606f\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"./cue-actions#conditionalwait"},"ConditionalWait")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4f1a\u8ba9 Workflow Step \u5904\u4e8e\u7b49\u5f85\u72b6\u6001\uff0c\u76f4\u5230\u6761\u4ef6\u88ab\u6ee1\u8db3\u3002"),(0,o.kt)("td",{parentName:"tr",align:"left"},"continue: \u5f53\u8be5\u5b57\u6bb5\u4e3a true \u65f6\uff0cWorkflow Step \u624d\u4f1a\u6062\u590d\u7ee7\u7eed\u6267\u884c\u3002")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6240\u6709\u7684\u64cd\u4f5c\u7c7b\u578b\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"./cue-actions"},"Cue Actions"))),(0,o.kt)("p",null,"\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u6211\u4eec\u9700\u8981\u4e24\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinition"),"\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u90e8\u7f72 Tomcat\uff0c\u5e76\u4e14\u7b49\u5f85 Deployment \u7684\u72b6\u6001\u53d8\u4e3a running\uff0c\u8fd9\u4e00\u6b65\u9700\u8981\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41\u6b65\u9aa4\u6765\u5b9e\u73b0\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53d1\u9001 Slack \u901a\u77e5\uff0c\u8fd9\u4e00\u6b65\u53ef\u4ee5\u4f7f\u7528 KubeVela \u5185\u7f6e\u7684 ","[webhook-notification]"," \u6b65\u9aa4\u6765\u5b9e\u73b0\u3002")),(0,o.kt)("h4",{id:"\u90e8\u7f72-tomcat-\u6b65\u9aa4"},"\u90e8\u7f72 Tomcat \u6b65\u9aa4"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"vela def init")," \u6765\u751f\u6210\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkflowStepDefinition")," \u6a21\u677f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'vela def init my-helm -t workflow-step --desc "Apply helm charts and wait till it\'s running." -o my-helm.cue\n')),(0,o.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ cat my-helm.cue\n\n"my-helm": {\n    annotations: {}\n    attributes: {}\n    description: "Apply helm charts and wait till it\'s running."\n    labels: {}\n    type: "workflow-step"\n}\n\ntemplate: {\n}\n')),(0,o.kt)("p",null,"\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"vela/op")," \u5305\uff0c\u5e76\u5c06 Cue \u4ee3\u7801\u8865\u5145\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," \u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import (\n  "vela/op"\n)\n\n"my-helm": {\n    annotations: {}\n    attributes: {}\n    description: "Apply helm charts and wait till it\'s running."\n    labels: {}\n    type: "workflow-step"\n}\n\ntemplate: {\n  // \u90e8\u7f72\u5e94\u7528\u4e2d\u7684\u6240\u6709\u8d44\u6e90\n  apply: op.#ApplyApplication & {}\n\n  resource: op.#Read & {\n     value: {\n       kind: "Deployment"\n       apiVersion: "apps/v1"\n       metadata: {\n         name: "tomcat"\n         // \u53ef\u4ee5\u4f7f\u7528 context \u6765\u83b7\u53d6\u8be5 Application \u7684\u4efb\u610f\u5143\u4fe1\u606f\n         namespace: context.namespace\n       }\n     }\n  }\n\n  workload: resource.value\n  // \u7b49\u5f85 helm \u7684 deployment \u53ef\u7528\n  wait: op.#ConditionalWait & {\n    continue: workload.status.readyReplicas == workload.status.replicas && workload.status.observedGeneration == workload.metadata.generation\n  }\n}\n')),(0,o.kt)("p",null,"\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela def apply my-helm.cue\n\nWorkflowStepDefinition my-helm in namespace vela-system updated.\n")),(0,o.kt)("h4",{id:"\u53d1\u9001-slack-\u901a\u77e5\u6b65\u9aa4"},"\u53d1\u9001 Slack \u901a\u77e5\u6b65\u9aa4"),(0,o.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528\u5185\u7f6e\u7684 ","[webhook-notification]"," \u6b65\u9aa4\u3002"),(0,o.kt)("h3",{id:"\u7f16\u5199\u5e94\u7528"},"\u7f16\u5199\u5e94\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: tomcat\n    type: helm\n    properties:\n      repoType: helm\n      url: https://charts.bitnami.com/bitnami\n      chart: tomcat\n      version: "9.2.20"\n  workflow:\n    steps:\n      - name: tomcat\n        # \u6307\u5b9a\u6b65\u9aa4\u7c7b\u578b\n        type: my-helm\n        outputs:\n          - name: msg\n            # \u5c06 my-helm \u4e2d\u8bfb\u53d6\u5230\u7684 deployment status \u4f5c\u4e3a\u4fe1\u606f\u5bfc\u51fa\n            valueFrom: resource.value.status.conditions[0].message\n      - name: send-message\n        type: webhook-notification\n        inputs:\n          - from: msg\n            # \u5f15\u7528\u4e0a\u4e00\u6b65\u4e2d outputs \u4e2d\u7684\u503c\uff0c\u5e76\u4f20\u5165\u5230 properties \u7684 slack.message.text \u4e2d\u4f5c\u4e3a\u8f93\u5165\n            parameterKey: slack.message.text \n        properties:\n          slack:\n            # \u4f60\u7684 slack webhook \u5730\u5740\uff0c\u8bf7\u53c2\u8003\uff1ahttps://api.slack.com/messaging/webhooks\n            url: <your slack url>\n')),(0,o.kt)("p",null,"\u5c06\u8be5\u5e94\u7528\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230\u6240\u6709\u7684\u8d44\u6e90\u90fd\u5df2\u88ab\u6210\u529f\u90e8\u7f72\uff0c\u4e14 Slack \u4e2d\u6536\u5230\u4e86\u5bf9\u5e94\u7684\u901a\u77e5\uff0c\u901a\u77e5\u5185\u5bb9\u4e3a\u8be5 Deployment \u7684\u72b6\u6001\u4fe1\u606f\u3002"))}m.isMDXComponent=!0}}]);