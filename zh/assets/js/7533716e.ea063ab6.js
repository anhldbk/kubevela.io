(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[31654],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=s(a),m=r,f=v["".concat(p,".").concat(m)]||v[m]||c[m]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},67919:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={title:"CLI Commands"},o={unversionedId:"cli/vela",id:"version-v1.2/cli/vela",isDocsHomePage:!1,title:"CLI Commands",description:"Getting Started",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/cli/vela.md",sourceDirName:"cli",slug:"/cli/vela",permalink:"/zh/docs/v1.2/cli/vela",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1644459439,formattedLastUpdatedAt:"2022/2/10",frontMatter:{title:"CLI Commands"},sidebar:"version-v1.2/docs",previous:{title:"\u6a21\u5757\u7248\u672c\u63a7\u5236",permalink:"/zh/docs/v1.2/platform-engineers/x-def-version"},next:{title:"\u5185\u7f6e\u63d2\u4ef6\u5305",permalink:"/zh/docs/v1.2/reference/addons/overview"}},p=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Managing Applications",id:"managing-applications",children:[]},{value:"Continuous Delivery",id:"continuous-delivery",children:[]},{value:"Managing Extension",id:"managing-extension",children:[]},{value:"Others",id:"others",children:[]}],s={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_env"},"vela env"),"\t - Manage environments for vela applications to run."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_init"},"vela init"),"\t - Create scaffold for vela application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_up"},"vela up"),"\t - Create or update vela application from file or URL, both appfile or application object format are supported."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_show"},"vela show"),"\t - Show the reference doc for component, trait or workflow types.")),(0,l.kt)("h2",{id:"managing-applications"},"Managing Applications"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_ls"},"vela ls"),"\t - List all vela applications."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_status"},"vela status"),"\t - Show status of vela application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_delete"},"vela delete"),"\t - Delete an application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_exec"},"vela exec"),"\t - Execute command inside container based vela application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_port-forward"},"vela port-forward"),"\t - Forward local ports to container/service port of vela application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_logs"},"vela logs"),"\t - Tail logs for vela application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_live-diff"},"vela live-diff"),"\t - Dry-run application locally, and diff with a deployed application version."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_dry-run"},"vela dry-run"),"\t - Dry-run application locally, render the Kubernetes resources as result to stdout.")),(0,l.kt)("h2",{id:"continuous-delivery"},"Continuous Delivery"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_cluster"},"vela cluster"),"\t - Manage Kubernetes Clusters for Continuous Delivery."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_workflow"},"vela workflow"),"\t - Operate the Workflow during Application Delivery.")),(0,l.kt)("h2",{id:"managing-extension"},"Managing Extension"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_addon"},"vela addon"),"\t - Manage addons for extension."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_uischema"},"vela uischema"),"\t - Manage UI schema for addons."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_def"},"vela def"),"\t - Manage X-Definitions for extension."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_registry"},"vela registry"),"\t - Manage Registry of X-Definitions for extension."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_component"},"vela component"),"\t - List component types installed and discover more in registry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_trait"},"vela trait"),"\t - List trait types installed and discover more in registry.")),(0,l.kt)("h2",{id:"others"},"Others"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_uninstall"},"vela uninstall"),"\t - Uninstalls KubeVela from a Kubernetes cluster."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_install"},"vela install"),"\t - The Kubevela CLI allows installing Kubevela on any Kubernetes derivative to which your kube config is pointing to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_completion"},"vela completion"),"\t - Output shell completion code for the specified shell (bash or zsh).\nThe shell code must be evaluated to provide interactive completion of vela commands."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_export"},"vela export"),"\t - Export deploy manifests from appfile or application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"vela_version"},"vela version"),"\t - Prints vela build version information.")),(0,l.kt)("h6",{id:"auto-generated-by-script-in-kubevela"},"Auto generated by ",(0,l.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}u.isMDXComponent=!0}}]);