(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[18548],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(t),m=l,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var i=2;i<r;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4429:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var a=t(22122),l=t(19756),r=(t(67294),t(3905)),p={title:"\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8"},o={unversionedId:"case-studies/multi-cluster",id:"version-v1.2/case-studies/multi-cluster",isDocsHomePage:!1,title:"\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8",description:"\u672c\u7ae0\u8282\u4f1a\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KubeVela \u5b8c\u6210\u5e94\u7528\u7684\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/case-studies/multi-cluster.md",sourceDirName:"case-studies",slug:"/case-studies/multi-cluster",permalink:"/zh/docs/v1.2/case-studies/multi-cluster",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/case-studies/multi-cluster.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8"},sidebar:"version-v1.2/docs",previous:{title:"\u5065\u5eb7\u72b6\u6001\u68c0\u67e5",permalink:"/zh/docs/v1.2/end-user/policies/health"},next:{title:"\u5e94\u7528\u7ec4\u4ef6\u95f4\u7684\u4f9d\u8d56\u548c\u53c2\u6570\u4f20\u9012",permalink:"/zh/docs/v1.2/end-user/workflow/component-dependency-parameter"}},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u90e8\u7f72\u591a\u96c6\u7fa4\u5e94\u7528",id:"\u90e8\u7f72\u591a\u96c6\u7fa4\u5e94\u7528",children:[]},{value:"\u66f4\u591a\u4f7f\u7528\u6848\u4f8b",id:"\u66f4\u591a\u4f7f\u7528\u6848\u4f8b",children:[]}],i={toc:s};function c(e){var n=e.components,p=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},i,p,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7ae0\u8282\u4f1a\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KubeVela \u5b8c\u6210\u5e94\u7528\u7684\u591a\u96c6\u7fa4\u5e94\u7528\u4ea4\u4ed8\u3002"),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,"\u5982\u4eca\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u4f01\u4e1a\u53ca\u5f00\u53d1\u8005\u51fa\u4e8e\u4e0d\u540c\u7684\u539f\u56e0\uff0c\u5f00\u59cb\u5728\u591a\u96c6\u7fa4\u73af\u5883\u4e2d\u8fdb\u884c\u5e94\u7528\u4ea4\u4ed8\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7531\u4e8e Kubernetes \u96c6\u7fa4\u5b58\u5728\u7740\u90e8\u7f72\u89c4\u6a21\u7684\u5c40\u9650\u6027\uff08\u5355\u4e00\u96c6\u7fa4\u6700\u591a\u5bb9\u7eb3 5k \u8282\u70b9\uff09\uff0c\u9700\u8981\u5e94\u7528\u591a\u96c6\u7fa4\u6280\u672f\u6765\u90e8\u7f72\u3001\u7ba1\u7406\u6d77\u91cf\u7684\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8003\u8651\u5230\u7a33\u5b9a\u6027\u53ca\u9ad8\u53ef\u7528\u6027\uff0c\u540c\u4e00\u4e2a\u5e94\u7528\u53ef\u4ee5\u90e8\u7f72\u5728\u591a\u4e2a\u96c6\u7fa4\u4e2d\uff0c\u4ee5\u5b9e\u73b0\u5bb9\u707e\u3001\u5f02\u5730\u591a\u6d3b\u7b49\u9700\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u53ef\u80fd\u9700\u8981\u90e8\u7f72\u5728\u4e0d\u540c\u7684\u533a\u57df\u6765\u6ee1\u8db3\u4e0d\u540c\u653f\u5e9c\u5bf9\u4e8e\u6570\u636e\u5b89\u5168\u6027\u7684\u653f\u7b56\u9700\u6c42\u3002")),(0,r.kt)("p",null,"\u4e0b\u6587\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5728 KubeVela \u4e2d\u4f7f\u7528\u591a\u96c6\u7fa4\u6280\u672f\u5e2e\u52a9\u4f60\u5feb\u901f\u5c06\u5e94\u7528\u90e8\u7f72\u5728\u591a\u96c6\u7fa4\u73af\u5883\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u591a\u96c6\u7fa4\u5e94\u7528\u90e8\u7f72\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5c06\u5b50\u96c6\u7fa4\u901a\u8fc7 KubeConfig \u52a0\u5165\u5230 KubeVela \u7684\u7ba1\u63a7\u4e2d\u6765\u3002Vela CLI \u53ef\u4ee5\u5e2e\u4f60\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela cluster join <your kubeconfig path>\n")),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u81ea\u52a8\u4f7f\u7528 KubeConfig \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"context.cluster")," \u5b57\u6bb5\u4f5c\u4e3a\u96c6\u7fa4\u540d\u79f0\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--name")," \u53c2\u6570\u6765\u6307\u5b9a\uff0c\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vela cluster join stage-cluster.kubeconfig --name cluster-staging\nvela cluster join prod-cluster.kubeconfig --name cluster-prod\n")),(0,r.kt)("p",null,"\u5728\u5b50\u96c6\u7fa4\u52a0\u5165 KubeVela \u4e2d\u540e\uff0c\u4f60\u540c\u6837\u53ef\u4ee5\u4f7f\u7528 CLI \u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u6b63\u5728\u88ab KubeVela \u7ba1\u63a7\u7684\u6240\u6709\u96c6\u7fa4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cluster list\nCLUSTER         TYPE    ENDPOINT                \ncluster-prod    tls     https://47.88.4.97:6443 \ncluster-staging tls     https://47.88.7.230:6443\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u9700\u8981\u67d0\u4e2a\u5b50\u96c6\u7fa4\u4e86\uff0c\u8fd8\u53ef\u4ee5\u5c06\u5b50\u96c6\u7fa4\u4ece KubeVela \u7ba1\u63a7\u4e2d\u79fb\u9664\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ vela cluster detach cluster-prod\n")),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u73b0\u5728\u6709\u5e94\u7528\u6b63\u8dd1\u5728\u8be5\u96c6\u7fa4\u4e2d\uff0c\u8fd9\u6761\u547d\u4ee4\u4f1a\u88ab KubeVela \u62d2\u7edd\u3002"),(0,r.kt)("h2",{id:"\u90e8\u7f72\u591a\u96c6\u7fa4\u5e94\u7528"},"\u90e8\u7f72\u591a\u96c6\u7fa4\u5e94\u7528"),(0,r.kt)("p",null,"KubeVela \u5c06\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u770b\u4f5c\u662f\u4e00\u4e2a\u73af\u5883\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u5e94\u7528\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u90e8\u7f72\u5728\u591a\u4e2a\u73af\u5883\u4e2d\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u8fd9\u4e2a\u4f8b\u5b50\u5c06\u4f1a\u628a\u5e94\u7528\u5148\u90e8\u7f72\u5728\u9884\u53d1\u73af\u5883\u4e2d\uff0c\u5f85\u786e\u8ba4\u5e94\u7528\u6b63\u5e38\u8fd0\u884c\u540e\uff0c\u518d\u5c06\u5176\u90e8\u7f72\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u540c\u7684\u73af\u5883\uff0cKubeVela \u652f\u6301\u8fdb\u884c\u5dee\u5f02\u5316\u90e8\u7f72\u3002\u6bd4\u5982\u5728\u672c\u6587\u7684\u4f8b\u5b50\u4e2d\uff0c\u9884\u53d1\u73af\u5883\u53ea\u4f7f\u7528 webservice \u7ec4\u4ef6\u800c\u4e0d\u662f\u7528 worker \u7ec4\u4ef6\uff0c\u540c\u65f6 webservice \u4e5f\u53ea\u90e8\u7f72\u4e86\u4e00\u4efd\u3002\u800c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u4e24\u4e2a\u7ec4\u4ef6\u90fd\u4f1a\u4f7f\u7528\uff0c\u800c\u4e14 webservice \u8fd8\u4f1a\u90e8\u7f72\u4e09\u526f\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  namespace: default\nspec:\n  components:\n    - name: hello-world-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: scaler\n          properties:\n            replicas: 1\n    - name: data-worker\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - '1000000'\n  policies:\n    - name: example-multi-env-policy\n      type: env-binding\n      properties:\n        envs:\n          - name: staging\n            placement: # \u9009\u62e9\u8981\u90e8\u7f72\u7684\u96c6\u7fa4\n              clusterSelector:\n                name: cluster-staging\n            selector: # \u9009\u62e9\u8981\u4f7f\u7528\u7684\u7ec4\u4ef6\n              components:\n                - hello-world-server\n\n          - name: prod\n            placement:\n              clusterSelector:\n                name: cluster-prod\n            patch: # \u5bf9\u7ec4\u4ef6\u8fdb\u884c\u5dee\u5f02\u5316\u914d\u7f6e\n              components:\n                - name: hello-world-server\n                  type: webservice\n                  traits:\n                    - type: scaler\n                      properties:\n                        replicas: 3\n\n    - name: health-policy-demo\n      type: health\n      properties:\n        probeInterval: 5\n        probeTimeout: 10\n\n  workflow:\n    steps:\n      # \u90e8\u7f72\u5230\u9884\u53d1\u73af\u5883\u4e2d\n      - name: deploy-staging\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: staging\n\n      # \u624b\u52a8\u786e\u8ba4\n      - name: manual-approval\n        type: suspend\n\n      # \u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u4e2d\n      - name: deploy-prod\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: prod\n")),(0,r.kt)("p",null,"\u5728\u5e94\u7528\u521b\u5efa\u540e\uff0c\u5b83\u4f1a\u901a\u8fc7 KubeVela \u5de5\u4f5c\u6d41\u5b8c\u6210\u90e8\u7f72\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f60\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"../end-user/policies/envbinding"},"\u591a\u73af\u5883\u90e8\u7f72"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"../end-user/policies/health"},"\u5065\u5eb7\u68c0\u67e5"),"\u7684\u7528\u6237\u624b\u518c\u6765\u67e5\u770b\u66f4\u591a\u53c2\u6570\u7ec6\u8282\u3002")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5b83\u4f1a\u5c06\u5e94\u7528\u90e8\u7f72\u5230\u9884\u53d1\u73af\u5883\u4e2d\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u67e5\u770b\u5e94\u7528\u7684\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> kubectl get application example-app\nNAME          COMPONENT            TYPE         PHASE                HEALTHY   STATUS       AGE\nexample-app   hello-world-server   webservice   workflowSuspending   true      Ready:1/1    10s\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u524d\u7684\u90e8\u7f72\u5de5\u4f5c\u6d41\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"manual-approval")," \u6b65\u9aa4\u4e2d\u6682\u505c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      appRevision: example-app-v1:44a6447e3653bcc2\n      contextBackend:\n        apiVersion: v1\n        kind: ConfigMap\n        name: workflow-example-app-context\n        uid: 56ddcde6-8a83-4ac3-bf94-d19f8f55eb3d\n      mode: StepByStep\n      steps:\n      - id: wek2b31nai\n        name: deploy-staging\n        phase: succeeded\n        type: deploy2env\n      - id: 7j5eb764mk\n        name: manual-approval\n        phase: succeeded\n        type: suspend\n      suspend: true\n      terminated: false\n      waitCount: 0\n")),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"status.service")," \u5b57\u6bb5\u6765\u67e5\u770b\u5e94\u7528\u7684\u5065\u5eb7\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    services:\n    - env: staging\n      healthy: true\n      message: 'Ready:1/1 '\n      name: hello-world-server\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: test\n        uid: 6e6230a3-93f3-4dba-ba09-dd863b6c4a88\n      traits:\n      - healthy: true\n        type: scaler\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u5de5\u4f5c\u6d41\u7684 resume \u6307\u4ee4\uff0c\u4f60\u53ef\u4ee5\u5728\u786e\u8ba4\u5f53\u524d\u90e8\u7f72\u6b63\u5e38\u540e\uff0c\u7ee7\u7eed\u5c06\u5e94\u7528\u90e8\u7f72\u81f3\u751f\u4ea7\u73af\u5883\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> vela workflow resume example-app\nSuccessfully resume workflow: example-app\n")),(0,r.kt)("p",null,"\u518d\u6b21\u786e\u8ba4\u5e94\u7528\u7684\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> kubectl get application example-app\nNAME          COMPONENT            TYPE         PHASE     HEALTHY   STATUS       AGE\nexample-app   hello-world-server   webservice   running   true      Ready:1/1    62s\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  status:\n    services:\n    - env: staging\n      healthy: true\n      message: 'Ready:1/1 '\n      name: hello-world-server\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: default\n        uid: 9174ac61-d262-444b-bb6c-e5f0caee706a\n      traits:\n      - healthy: true\n        type: scaler\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n    - env: prod\n      healthy: true\n      message: 'Ready:3/3 '\n      name: hello-world-server\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: default\n        uid: 9174ac61-d262-444b-bb6c-e5f0caee706a\n      traits:\n      - healthy: true\n        type: scaler\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n    - env: prod\n      healthy: true\n      message: 'Ready:1/1 '\n      name: data-worker\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: default\n        uid: 9174ac61-d262-444b-bb6c-e5f0caee706a\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5de5\u4f5c\u6d41\u4e2d\u7684\u6240\u6709\u6b65\u9aa4\u90fd\u5df2\u5b8c\u6210\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      appRevision: example-app-v1:44a6447e3653bcc2\n      contextBackend:\n        apiVersion: v1\n        kind: ConfigMap\n        name: workflow-example-app-context\n        uid: e1e7bd2d-8743-4239-9de7-55a0dd76e5d3\n      mode: StepByStep\n      steps:\n      - id: q8yx7pr8wb\n        name: deploy-staging\n        phase: succeeded\n        type: deploy2env\n      - id: 6oxrtvki9o\n        name: manual-approval\n        phase: succeeded\n        type: suspend\n      - id: uk287p8c31\n        name: deploy-prod\n        phase: succeeded\n        type: deploy2env\n      suspend: false\n      terminated: false\n      waitCount: 0\n")),(0,r.kt)("h2",{id:"\u66f4\u591a\u4f7f\u7528\u6848\u4f8b"},"\u66f4\u591a\u4f7f\u7528\u6848\u4f8b"),(0,r.kt)("p",null,"KubeVela \u53ef\u4ee5\u63d0\u4f9b\u66f4\u591a\u7684\u5e94\u7528\u591a\u96c6\u7fa4\u90e8\u7f72\u7b56\u7565\uff0c\u5982\u5c06\u5355\u4e00\u5e94\u7528\u7684\u4e0d\u540c\u7ec4\u4ef6\u90e8\u7f72\u5728\u4e0d\u540c\u73af\u5883\u4e2d\uff0c\u6216\u5728\u7ba1\u63a7\u96c6\u7fa4\u53ca\u5b50\u96c6\u7fa4\u4e2d\u6df7\u5408\u90e8\u7f72\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5de5\u4f5c\u6d41\u4e0e\u591a\u96c6\u7fa4\u90e8\u7f72\u7684\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u56fe\u7b80\u5355\u4e86\u89e3\u5176\u6574\u4f53\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(21212).Z})),(0,r.kt)("p",null,"\u66f4\u591a\u7684\u591a\u96c6\u7fa4\u73af\u5883\u4e0b\u5e94\u7528\u90e8\u7f72\u7684\u4f7f\u7528\u6848\u4f8b\u5c06\u5728\u4e0d\u4e45\u540e\u52a0\u5165\u6587\u6863\u4e2d\u3002"))}c.isMDXComponent=!0},21212:function(e,n,t){"use strict";n.Z=t.p+"assets/images/workflow-multi-env-7c22d04d3e95d549d1ced9966daa800a.png"}}]);