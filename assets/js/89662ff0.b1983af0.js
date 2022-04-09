(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[88039],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62602:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=t(22122),i=t(19756),r=(t(67294),t(3905)),o={title:"Patch Traits"},p={unversionedId:"platform-engineers/traits/patch-trait",id:"platform-engineers/traits/patch-trait",isDocsHomePage:!1,title:"Patch Traits",description:"Patch is a very common pattern of trait definitions, i.e. the app operators can amend/patch attributes to the component instance (normally the workload) to enable certain operational features such as sidecar or node affinity rules (and this should be done before the resources applied to target cluster).",source:"@site/docs/platform-engineers/traits/patch-trait.md",sourceDirName:"platform-engineers/traits",slug:"/platform-engineers/traits/patch-trait",permalink:"/docs/next/platform-engineers/traits/patch-trait",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/traits/patch-trait.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1627555412,formattedLastUpdatedAt:"7/29/2021",frontMatter:{title:"Patch Traits"},sidebar:"docs",previous:{title:"How-to",permalink:"/docs/next/platform-engineers/traits/customize-trait"},next:{title:"Status Write Back",permalink:"/docs/next/platform-engineers/traits/status"}},s=[{value:"Known Limitations",id:"known-limitations",children:[]},{value:"Strategy Patch",id:"strategy-patch",children:[]},{value:"More Use Cases of Patch Trait",id:"more-use-cases-of-patch-trait",children:[{value:"Add Labels",id:"add-labels",children:[]},{value:"Add Annotations",id:"add-annotations",children:[]},{value:"Add Pod Environments",id:"add-pod-environments",children:[]},{value:"Inject <code>ServiceAccount</code> Based on External Auth Service",id:"inject-serviceaccount-based-on-external-auth-service",children:[]},{value:"Add <code>InitContainer</code>",id:"add-initcontainer",children:[]}]}],l={toc:s};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Patch")," is a very common pattern of trait definitions, i.e. the app operators can amend/patch attributes to the component instance (normally the workload) to enable certain operational features such as sidecar or node affinity rules (and this should be done ",(0,r.kt)("strong",{parentName:"p"},"before")," the resources applied to target cluster)."),(0,r.kt)("p",null,"This pattern is extremely useful when the component definition is provided by third-party component provider (e.g. software distributor) so app operators do not have privilege to change its template."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that even patch trait itself is defined by CUE, it can patch any component regardless how its schematic is defined (i.e. CUE, Helm, and any other supported schematic approaches).")),(0,r.kt)("p",null,"Below is an example for ",(0,r.kt)("inlineCode",{parentName:"p"},"node-affinity")," trait:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "affinity specify node affinity and toleration"\n  name: node-affinity\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                if parameter.affinity != _|_ {\n                    affinity: nodeAffinity: requiredDuringSchedulingIgnoredDuringExecution: nodeSelectorTerms: [{\n                        matchExpressions: [\n                            for k, v in parameter.affinity {\n                                key:      k\n                                operator: "In"\n                                values:   v\n                            },\n                        ]}]\n                }\n                if parameter.tolerations != _|_ {\n                    tolerations: [\n                        for k, v in parameter.tolerations {\n                            effect:   "NoSchedule"\n                            key:      k\n                            operator: "Equal"\n                            value:    v\n                        }]\n                }\n            }\n        }\n\n        parameter: {\n            affinity?: [string]: [...string]\n            tolerations?: [string]: string\n        }\n')),(0,r.kt)("p",null,"The patch trait above assumes the target component instance have ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.affinity")," field.\nHence, we need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"appliesToWorkloads")," to enforce the trait only applies to those workload types have this field."),(0,r.kt)("p",null,"Another important field is ",(0,r.kt)("inlineCode",{parentName:"p"},"podDisruptive"),", this patch trait will patch to the pod template field,\nso changes on any field of this trait will cause the pod to restart, We should add ",(0,r.kt)("inlineCode",{parentName:"p"},"podDisruptive")," and make it to be true\nto tell users that applying this trait will cause the pod to restart."),(0,r.kt)("p",null,"Now the users could declare they want to add node affinity rules to the component instance as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n      traits:\n        - type: "node-affinity"\n          properties:\n            affinity:\n              server-owner: ["owner1","owner2"]\n              resource-pool: ["pool1","pool2","pool3"]\n            tolerations:\n              resource-pool: "broken-pool1"\n              server-owner: "old-owner"\n')),(0,r.kt)("h3",{id:"known-limitations"},"Known Limitations"),(0,r.kt)("p",null,"By default, patch trait in KubeVela leverages the CUE ",(0,r.kt)("inlineCode",{parentName:"p"},"merge")," operation. It has following known constraints though:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can not handle conflicts.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, if a component instance already been set with value ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas=5"),", then any patch trait to patch ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas")," field will fail, a.k.a you should not expose ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas")," field in its component definition schematic."))),(0,r.kt)("li",{parentName:"ul"},"Array list in the patch will be merged following the order of index. It can not handle the duplication of the array list members. This could be fixed by another feature below.")),(0,r.kt)("h3",{id:"strategy-patch"},"Strategy Patch"),(0,r.kt)("p",null,"Strategy Patch is effective by adding annotation, and supports the following two ways"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that this is not a standard CUE feature, KubeVela enhanced CUE in this case.")),(0,r.kt)("h4",{id:"1-with-patchkeykey_name-annotation"},"1. With ",(0,r.kt)("inlineCode",{parentName:"h4"},"+patchKey=<key_name>")," annotation"),(0,r.kt)("p",null,"This is useful for patching array list, merging logic of two array lists will not follow the CUE behavior. Instead, it will treat the list as object and use a strategy merge approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if a duplicated key is found, the patch data will be merge with the existing values; "),(0,r.kt)("li",{parentName:"ul"},"if no duplication found, the patch will append into the array list.")),(0,r.kt)("p",null,"The example of strategy patch trait with 'patchKey' will like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add sidecar to the app"\n  name: sidecar\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            // +patchKey=name\n            spec: template: spec: containers: [parameter]\n        }\n        parameter: {\n            name:  string\n            image: string\n            command?: [...string]\n        }\n')),(0,r.kt)("p",null,"In above example we defined ",(0,r.kt)("inlineCode",{parentName:"p"},"patchKey")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," which is the parameter key of container name. In this case, if the workload don't have the container with same name, it will be a sidecar container append into the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.containers")," array list. If the workload already has a container with the same name of this ",(0,r.kt)("inlineCode",{parentName:"p"},"sidecar")," trait, then merge operation will happen instead of append (which leads to duplicated containers)."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"patch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," both exist in one trait definition, the ",(0,r.kt)("inlineCode",{parentName:"p"},"patch")," operation will be handled first and then render the ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "expose the app"\n  name: expose\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {spec: template: metadata: labels: app: context.name}\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            metadata: name: context.name\n            spec: {\n                selector: app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n        parameter: {\n            http: [string]: int\n        }\n')),(0,r.kt)("p",null,"So the above trait which attaches a Service to given component instance will patch an corresponding label to the workload first and then render the Service resource based on template in ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs"),"."),(0,r.kt)("h4",{id:"2-with-patchstrategyretainkeys-annotation"},"2. With ",(0,r.kt)("inlineCode",{parentName:"h4"},"+patchStrategy=retainkeys")," annotation"),(0,r.kt)("p",null,"Similar to strategy ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/#use-strategic-merge-patch-to-update-a-deployment-using-the-retainkeys-strategy"},"retainkeys")," in K8s strategic merge patch"),(0,r.kt)("p",null,"In some scenarios that the entire object needs to be replaced, retainkeys strategy is the best choice. the example as follows:"),(0,r.kt)("p",null,"Assume the Deployment is the base resource"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: retainkeys-demo\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  strategy:\n    type: rollingUpdate\n    rollingUpdate:\n      maxSurge: 30%\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: retainkeys-demo-ctr\n        image: nginx\n")),(0,r.kt)("p",null,"Now want to replace rollingUpdate strategy with a new strategy, you can write the patch trait like below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  name: recreate\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  extension:\n    template: |-\n      patch: {\n         spec: {\n              // +patchStrategy=retainKeys\n              strategy: type: "Recreate"\n           }\n      }        \n')),(0,r.kt)("p",null,"Then the base resource becomes as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: retainkeys-demo\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: retainkeys-demo-ctr\n        image: nginx\n")),(0,r.kt)("h2",{id:"more-use-cases-of-patch-trait"},"More Use Cases of Patch Trait"),(0,r.kt)("p",null,"Patch trait is in general pretty useful to separate operational concerns from the component definition, here are some more examples."),(0,r.kt)("h3",{id:"add-labels"},"Add Labels"),(0,r.kt)("p",null,"For example, patch common label (virtual group) to the component instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "Add virtual group labels"\n  name: virtualgroup\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: {\n                metadata: labels: {\n                    if parameter.scope == "namespace" {\n                        "app.namespace.virtual.group": parameter.group\n                    }\n                    if parameter.scope == "cluster" {\n                        "app.cluster.virtual.group": parameter.group\n                    }\n                }\n            }\n        }\n        parameter: {\n            group: *"default" | string\n            scope:  *"namespace" | string\n        }\n')),(0,r.kt)("p",null,"Then it could be used like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nspec:\n  ...\n      traits:\n      - type: virtualgroup\n        properties:\n          group: "my-group1"\n          scope: "cluster"\n')),(0,r.kt)("h3",{id:"add-annotations"},"Add Annotations"),(0,r.kt)("p",null,"Similar to common labels, you could also patch the component instance with annotations. The annotation value should be a JSON string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "Specify auto scale by annotation"\n  name: kautoscale\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        import "encoding/json"\n\n        patch: {\n            metadata: annotations: {\n                "my.custom.autoscale.annotation": json.Marshal({\n                    "minReplicas": parameter.min\n                    "maxReplicas": parameter.max\n                })\n            }\n        }\n        parameter: {\n            min: *1 | int\n            max: *3 | int\n        }\n')),(0,r.kt)("h3",{id:"add-pod-environments"},"Add Pod Environments"),(0,r.kt)("p",null,"Inject system environments into Pod is also very common use case."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This case relies on strategy merge patch, so don't forget add ",(0,r.kt)("inlineCode",{parentName:"p"},"+patchKey=name")," as below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add env into your pods"\n  name: env\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                // +patchKey=name\n                containers: [{\n                    name: context.name\n                    // +patchKey=name\n                    env: [\n                        for k, v in parameter.env {\n                            name:  k\n                            value: v\n                        },\n                    ]\n                }]\n            }\n        }\n\n        parameter: {\n            env: [string]: string\n        }\n')),(0,r.kt)("h3",{id:"inject-serviceaccount-based-on-external-auth-service"},"Inject ",(0,r.kt)("inlineCode",{parentName:"h3"},"ServiceAccount")," Based on External Auth Service"),(0,r.kt)("p",null,"In this example, the service account was dynamically requested from an authentication service and patched into the service."),(0,r.kt)("p",null,"This example put UID token in HTTP header but you can also use request body if you prefer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "dynamically specify service account"\n  name: service-account\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        processing: {\n            output: {\n                credentials?: string\n            }\n            http: {\n                method: *"GET" | string\n                url:    parameter.serviceURL\n                request: {\n                    header: {\n                        "authorization.token": parameter.uidtoken\n                    }\n                }\n            }\n        }\n        patch: {\n            spec: template: spec: serviceAccountName: processing.output.credentials\n        }\n\n        parameter: {\n            uidtoken:   string\n            serviceURL: string\n        }\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"processing.http")," section is an advanced feature that allow trait definition to send a HTTP request during rendering the resource. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"#Processing-Trait"},"Execute HTTP Request in Trait Definition")," section for more details."),(0,r.kt)("h3",{id:"add-initcontainer"},"Add ",(0,r.kt)("inlineCode",{parentName:"h3"},"InitContainer")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-initialization/#create-a-pod-that-has-an-init-container"},(0,r.kt)("inlineCode",{parentName:"a"},"InitContainer"))," is useful to pre-define operations in an image and run it before app container."),(0,r.kt)("p",null,"Below is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add an init container and use shared volume with pod"\n  name: init-container\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  podDisruptive: true\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                // +patchKey=name\n                containers: [{\n                    name: context.name\n                    // +patchKey=name\n                    volumeMounts: [{\n                        name:      parameter.mountName\n                        mountPath: parameter.appMountPath\n                    }]\n                }]\n                initContainers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                    if parameter.command != _|_ {\n                        command: parameter.command\n                    }\n\n                    // +patchKey=name\n                    volumeMounts: [{\n                        name:      parameter.mountName\n                        mountPath: parameter.initMountPath\n                    }]\n                }]\n                // +patchKey=name\n                volumes: [{\n                    name: parameter.mountName\n                    emptyDir: {}\n                }]\n            }\n        }\n\n        parameter: {\n            name:  string\n            image: string\n            command?: [...string]\n            mountName:     *"workdir" | string\n            appMountPath:  string\n            initMountPath: string\n        }\n')),(0,r.kt)("p",null,"The usage could be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n      traits:\n        - type: "init-container"\n          properties:\n            name:  "install-container"\n            image: "busybox"\n            command:\n            - wget\n            - "-O"\n            - "/work-dir/index.html"\n            - http://info.cern.ch\n            mountName: "workdir"\n            appMountPath:  "/usr/share/nginx/html"\n            initMountPath: "/work-dir"\n')))}c.isMDXComponent=!0}}]);