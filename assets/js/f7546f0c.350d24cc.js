(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[47789],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29321:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"How-to"},s={unversionedId:"platform-engineers/traits/customize-trait",id:"version-v1.2/platform-engineers/traits/customize-trait",isDocsHomePage:!1,title:"How-to",description:"In this section we will introduce how to define a trait.",source:"@site/versioned_docs/version-v1.2/platform-engineers/traits/customize-trait.md",sourceDirName:"platform-engineers/traits",slug:"/platform-engineers/traits/customize-trait",permalink:"/docs/v1.2/platform-engineers/traits/customize-trait",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/traits/customize-trait.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"How-to"},sidebar:"version-v1.2/docs",previous:{title:"Extend Cloud Resources",permalink:"/docs/v1.2/platform-engineers/components/component-terraform"},next:{title:"Patch Traits",permalink:"/docs/v1.2/platform-engineers/traits/patch-trait"}},p=[{value:"Simple Trait",id:"simple-trait",children:[]},{value:"Using CUE as Trait Schematic",id:"using-cue-as-trait-schematic",children:[]}],c={toc:p};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section we will introduce how to define a trait."),(0,i.kt)("h2",{id:"simple-trait"},"Simple Trait"),(0,i.kt)("p",null,"A trait in KubeVela can be defined by simply reference a existing Kubernetes API resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  definitionRef:\n    name: ingresses.networking.k8s.io\n")),(0,i.kt)("p",null,"Let's attach this trait to a component instance in ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            rules:\n            - http:\n                paths:\n                - path: /testpath\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: test\n                      port:\n                        number: 80\n")),(0,i.kt)("p",null,"Note that in this case, all fields in the referenced resource's ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," will be exposed to end user and no metadata (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations")," etc) are allowed to be set trait properties. Hence this approach is normally used when you want to bring your own CRD and controller as a trait, and it dose not rely on ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations")," etc as tuning knobs."),(0,i.kt)("h2",{id:"using-cue-as-trait-schematic"},"Using CUE as Trait Schematic"),(0,i.kt)("p",null,"The recommended approach is defining a CUE based schematic for trait as well. In this case, it comes with abstraction and you have full flexibility to templating any resources and fields as you want. Note that KubeVela requires all traits MUST be defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," section (not ",(0,i.kt)("inlineCode",{parentName:"p"},"output"),") in CUE template with format as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),(0,i.kt)("p",null,"Below is an example for ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress")," trait."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            domain: string\n            http: [string]: int\n        }\n\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {\n                selector:\n                    app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n\n        outputs: ingress: {\n            apiVersion: "networking.k8s.io/v1beta1"\n            kind:       "Ingress"\n            metadata:\n                name: context.name\n            spec: {\n                rules: [{\n                    host: parameter.domain\n                    http: {\n                        paths: [\n                            for k, v in parameter.http {\n                                path: k\n                                backend: {\n                                    serviceName: context.name\n                                    servicePort: v\n                                }\n                            },\n                        ]\n                    }\n                }]\n            }\n        }\n')),(0,i.kt)("p",null,"Let's attach this trait to a component instance in ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            domain: test.my.domain\n            http:\n              "/api": 8080\n')),(0,i.kt)("p",null,"CUE based trait definitions can also enable many other advanced scenarios such as patching and data passing. They will be explained in detail in the following documentations."))}l.isMDXComponent=!0}}]);