(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[76951],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53807:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={title:"Gateway for Public Access"},i={unversionedId:"end-user/traits/ingress",id:"version-v1.2/end-user/traits/ingress",isDocsHomePage:!1,title:"Gateway for Public Access",description:"The gateway trait exposes a component to public Internet via a valid domain.",source:"@site/versioned_docs/version-v1.2/end-user/traits/ingress.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/ingress",permalink:"/docs/v1.2/end-user/traits/ingress",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/traits/ingress.md",version:"v1.2",lastUpdatedBy:"Sunghoon Kang",lastUpdatedAt:1642904125,formattedLastUpdatedAt:"1/23/2022",frontMatter:{title:"Gateway for Public Access"},sidebar:"version-v1.2/docs",previous:{title:"Deploy First Application",permalink:"/docs/v1.2/end-user/quick-start-cli"},next:{title:"Provision and Binding Cloud Resources",permalink:"/docs/v1.2/end-user/components/cloud-services/provision-and-consume-cloud-services"}},s=[{value:"How to use",id:"how-to-use",children:[]},{value:"Specification",id:"specification",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"gateway")," trait exposes a component to public Internet via a valid domain."),(0,l.kt)("h2",{id:"how-to-use"},"How to use"),(0,l.kt)("p",null,"Attach a ",(0,l.kt)("inlineCode",{parentName:"p"},"gateway")," trait to the component you want to expose and deploy."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# vela-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: gateway\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vela up -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"application.core.oam.dev/first-vela-app created\n")),(0,l.kt)("p",null,"Check the status until we see ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"running"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vela status first-vela-app\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"About:\n\n  Name:         first-vela-app\n  Namespace:    default\n  Created at:   2022-01-11 22:04:29 +0800 CST\n  Status:       running\n\nWorkflow:\n\n  mode: DAG\n  finished: true\n  Suspend: false\n  Terminated: false\n  Steps\n  - id:gfgwqp6pqh\n    name:express-server\n    type:apply-component\n    phase:succeeded\n    message:\n\nServices:\n\n  - Name: express-server  Env:\n    Type: webservice\n    healthy Ready:1/1\n    Traits:\n      - \u2705 gateway: Visiting URL: testsvc.example.com, IP: 1.5.1.1\n")),(0,l.kt)("p",null,"You can also get the endpoint by:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela status first-vela-app --endpoint\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"|--------------------------------|----------------------------+\n|    REF(KIND/NAMESPACE/NAME)    |          ENDPOINT          |\n|--------------------------------|----------------------------+\n| Ingress/default/express-server | http://testsvc.example.com |\n|--------------------------------|----------------------------+\n")),(0,l.kt)("p",null,"Then you will be able to visit this application via its domain."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -H "Host:testsvc.example.com" http://<your ip address>/\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your runtime cluster has a working ingress controller.")),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the mapping relationship between the http path and the workload port"),(0,l.kt)("td",{parentName:"tr",align:null},"map","[string]","int"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"class"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the class of ingress to use"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"nginx")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"classInSpec"),(0,l.kt)("td",{parentName:"tr",align:null},"Set ingress class in '.spec.ingressClassName' instead of 'kubernetes.io/ingress.class' annotation."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the domain you want to expose"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);