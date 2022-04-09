(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[63788],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24797:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a={title:"Notification"},s={unversionedId:"end-user/workflow/webhook-notification",id:"version-v1.3/end-user/workflow/webhook-notification",isDocsHomePage:!1,title:"Notification",description:"If we want to be notified before or after deploying an application, KubeVela provides integration with notification webhooks, allowing users to send notifications to Email, DingTalk, Slack, Lark.",source:"@site/versioned_docs/version-v1.3/end-user/workflow/webhook-notification.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/webhook-notification",permalink:"/docs/end-user/workflow/webhook-notification",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/workflow/webhook-notification.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Notification"},sidebar:"version-v1.3/docs",previous:{title:"Dependency and Data Passing",permalink:"/docs/end-user/workflow/component-dependency-parameter"},next:{title:"Revisioning",permalink:"/docs/end-user/version-control"}},c=[{value:"How to use",id:"how-to-use",children:[]},{value:"Expected outcome",id:"expected-outcome",children:[]},{value:"Parameters",id:"parameters",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If we want to be notified before or after deploying an application, KubeVela provides integration with notification webhooks, allowing users to send notifications to Email, DingTalk, Slack, Lark."),(0,i.kt)("p",null,"In this guide, you will learn how to send notifications via ",(0,i.kt)("inlineCode",{parentName:"p"},"notification")," in workflow."),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"Apply the following ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," with workflow step type of ",(0,i.kt)("inlineCode",{parentName:"p"},"notification"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    properties:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - type: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\n  workflow:\n    steps:\n      - name: dingtalk-message\n        # specify the workflow step type\n        type: notification\n        properties:\n          dingding:\n            # the DingTalk webhook address, please refer to: https://developers.dingtalk.com/document/robots/custom-robot-access\n            url:\n              address: <your dingding url>\n            # specify the message details\n            message:\n              msgtype: text\n              text:\n                content: Workflow starting...\n      - name: application\n        type: apply-component\n        properties:\n          component: express-server\n        outputs:\n          - name: app-status\n            valueFrom: output.status.conditions[0].message + "\u5de5\u4f5c\u6d41\u8fd0\u884c\u5b8c\u6210"\n      - name: slack-message\n        type: notification\n        inputs:\n          - from: app-status\n            parameterKey: slack.message.text\n        properties:\n          slack:\n            # the Slack webhook address, please refer to: https://api.slack.com/messaging/webhooks\n            url:\n              fromSecret:\n                name: <the secret name that stores your slack url>\n                key: <the secret key that stores your slack url>\n            # specify the message details, will be filled by the input value\n            # message:\n            #   text: condition message + Workflow ended.\n')),(0,i.kt)("h2",{id:"expected-outcome"},"Expected outcome"),(0,i.kt)("p",null,"we can see that before and after the deployment of the application, the messages can be seen in the corresponding group chat."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"notification"),", we can integrate with webhook notifier easily."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"For details, please checkout ",(0,i.kt)("a",{parentName:"p",href:"./built-in-workflow-defs##notification"},"notification parameters")))}p.isMDXComponent=!0}}]);