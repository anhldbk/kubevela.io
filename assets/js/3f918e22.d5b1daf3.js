(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5508],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=a,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50014:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l={title:"Enable Addon without Internet Access"},i={unversionedId:"platform-engineers/system-operation/enable-addon-offline",id:"version-v1.2/platform-engineers/system-operation/enable-addon-offline",isDocsHomePage:!1,title:"Enable Addon without Internet Access",description:"Enable without Internet",source:"@site/versioned_docs/version-v1.2/platform-engineers/system-operation/enable-addon-offline.md",sourceDirName:"platform-engineers/system-operation",slug:"/platform-engineers/system-operation/enable-addon-offline",permalink:"/docs/v1.2/platform-engineers/system-operation/enable-addon-offline",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/system-operation/enable-addon-offline.md",version:"v1.2",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1646214010,formattedLastUpdatedAt:"3/2/2022",frontMatter:{title:"Enable Addon without Internet Access"}},d=[{value:"Enable without Internet",id:"enable-without-internet",children:[]},{value:"Images or helm charts need to sync",id:"images-or-helm-charts-need-to-sync",children:[{value:"1. FluxCD",id:"1-fluxcd",children:[]},{value:"2. OCM",id:"2-ocm",children:[]},{value:"3. VelaUX",id:"3-velaux",children:[]},{value:"4. Terraform",id:"4-terraform",children:[]}]}],c={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"enable-without-internet"},"Enable without Internet"),(0,o.kt)("p",null,"If your environments don't have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://addons.kubevela.net")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/oam-dev/catalog"),", you should git clone the repo ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/oam-dev/catalog/tree/master/addons")," locally. You can specify a local addon directory when enable an addon for installation.\nBefore installing an addon, you should check if the addon contains any container images or other sub helm charts in it. If so, the addon also can't be installed well.  You can follow these steps to make it success."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Git clone ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/catalog"},"the catalog repo")," to download these addon files.You can find all official addons in subdirectory ",(0,o.kt)("inlineCode",{parentName:"li"},"./addons/")," and experimental addons in subdirectory ",(0,o.kt)("inlineCode",{parentName:"li"},"./experimental/addons"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"git clone https://github.com/oam-dev/catalog\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Sync the container images relied on by addon to your own image repository.\nFor example, you want sync the image of the helm controller image of fluxcd addon. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ docker pull fluxcd/helm-controller:v0.11.1\n$ docker push <your repo url>/fluxcd/helm-controller:v0.11.1\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Parts of addons maybe rely on some helm charts such as terraform addon. You should sync these helm charts to your own chart repository.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ helm repo add vela-charts https://charts.kubevela.net/addons\n$ helm repo update\n$ helm pull vela-charts/terraform-controller --version 0.3.5\n$ helm push terraform-controller-0.3.5.tgz <your charts repo url>\n")),(0,o.kt)("p",null,"You can read this ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/chart_repository/"},"docs")," to get knowledge how to build your own helm repo."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify the values of addon by referring to your own  image/chart repository. You can find all relied on images/charts in the files of subdirectory ",(0,o.kt)("inlineCode",{parentName:"p"},"resources/")," and modify them.\nFor example, you can modify the fluxcd addon files ",(0,o.kt)("inlineCode",{parentName:"p"},"addons/fluxcd/resources/deployment/helm-controller.yaml")," the deployment object's  field ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.sepc.containers[0].image")," to your own image repo.We will introduce what images/helm charts needed to sync for each addon below.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"vela cli")," to enable an addon with specify a local addon dir to install offline."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ vela addon enable <dir>\n")),(0,o.kt)("h2",{id:"images-or-helm-charts-need-to-sync"},"Images or helm charts need to sync"),(0,o.kt)("h3",{id:"1-fluxcd"},"1. FluxCD"),(0,o.kt)("p",null,"You need sync these images to your own image registry, and modify the related addon files to reference you own registry."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Images"),(0,o.kt)("th",{parentName:"tr",align:"center"},"files"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/helm-controller:v0.11.1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/resources/deployment/helm-controller.yaml")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/image-automation-controller:v0.14.0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/resources/deployment/image-automation-controller.yaml")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/image-reflector-controller:v0.11.0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/resources/deployment/image-reflector-controller.yaml")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/kustomize-controller:v0.13.1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/resources/deployment/kustomize-controller.yaml")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/source-controller:v0.15.3"),(0,o.kt)("td",{parentName:"tr",align:"center"},"fluxcd/resources/deployment/source-controller.yaml")))),(0,o.kt)("h3",{id:"2-ocm"},"2. OCM"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Images"),(0,o.kt)("th",{parentName:"tr",align:"center"},"files"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"quay.io/open-cluster-management/registration-operator:latest"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ocm-cluster-manager/resources/operator/operator.yaml")))),(0,o.kt)("h3",{id:"3-velaux"},"3. VelaUX"),(0,o.kt)("p",null,"There is no need to modify the addon files for enabling this addon, you only need to sync these images and enable this addon with repo args to reference your own registry."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Images"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"oamdev/vela-apiserver:v1.2.3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"oamdev/oamdev/velaux::v1.2.3")))),(0,o.kt)("p",null,"eg\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ vela addon enable addons/velaux/ repo=<\u4ed3\u5e93\u5730\u5740>\n")),(0,o.kt)("h3",{id:"4-terraform"},"4. Terraform"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sync the image ",(0,o.kt)("inlineCode",{parentName:"li"},"oamdev/terraform-controller:0.3.5")," to your own images registry."),(0,o.kt)("li",{parentName:"ol"},"Dowload the terraform helm chart.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ helm pull https://charts.kubevela.net/addons/terraform-controller-0.3.5.tgz\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Extract the chart and modify the ",(0,o.kt)("inlineCode",{parentName:"li"},"values.yaml")," change ",(0,o.kt)("inlineCode",{parentName:"li"},"image.repository")," to your own image registry.Then push it to your helm chart museum."),(0,o.kt)("li",{parentName:"ol"},"Modify the addon file ",(0,o.kt)("inlineCode",{parentName:"li"},"terraform/resources/terraform-controller.cue")," change ",(0,o.kt)("inlineCode",{parentName:"li"},"output.properties.url")," to your chart museum's url.")),(0,o.kt)("p",null,"Other official addons needn't sync any resources."))}s.isMDXComponent=!0}}]);