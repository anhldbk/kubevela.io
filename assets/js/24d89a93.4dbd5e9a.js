(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[74889],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),k=l,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(67294),l=a(80944),r=a(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var i=37,u=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,d=e.groupId,k=e.className,m=(0,l.Z)(),b=m.tabGroupChoices,v=m.setTabGroupChoices,f=(0,n.useState)(c),h=f[0],g=f[1],y=n.Children.toArray(e.children),N=[];if(null!=d){var w=b[d];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&g(w)}var x=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;g(n),null!=d&&(v(d,n),setTimeout((function(){var e,a,n,l,r,o,i,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,r=e.right,o=window,i=o.innerHeight,u=o.innerWidth,a>=0&&r<=u&&l<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case u:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case i:var l=N.indexOf(e.target)-1;a=N[l]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},k)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),l=a(79443);t.Z=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},83020:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(22122),l=a(19756),r=(a(67294),a(3905)),o=a(41395),s=a(58215),i={title:"Installation"},u={unversionedId:"install",id:"version-v1.2/install",isDocsHomePage:!1,title:"Installation",description:"For upgrading existing KubeVela, please read the upgrade guide.",source:"@site/versioned_docs/version-v1.2/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/v1.2/install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/install.mdx",version:"v1.2",lastUpdatedBy:"qiaozp",lastUpdatedAt:1648782603,formattedLastUpdatedAt:"4/1/2022",frontMatter:{title:"Installation"},sidebar:"version-v1.2/docs",previous:{title:"Architecture",permalink:"/docs/v1.2/getting-started/architecture"},next:{title:"Deploy First Application",permalink:"/docs/v1.2/quick-start"}},c=[{value:"1. Choose Control Plane Cluster",id:"1-choose-control-plane-cluster",children:[]},{value:"2. Install KubeVela CLI",id:"2-install-kubevela-cli",children:[]},{value:"2. Install KubeVela Core",id:"2-install-kubevela-core",children:[]},{value:"4. Install VelaUX",id:"4-install-velaux",children:[]},{value:"5. Uninstall",id:"5-uninstall",children:[]},{value:"Next Step",id:"next-step",children:[]}],p={toc:c};function d(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For upgrading existing KubeVela, please read the ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install/#upgrade"},"upgrade guide"),".")),(0,r.kt)("h2",{id:"1-choose-control-plane-cluster"},"1. Choose Control Plane Cluster"),(0,r.kt)("p",null,"Requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes cluster >= v1.19 && <= v1.22"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"Kubectl"))),(0,r.kt)("p",null,"KubeVela relies on Kubernetes as a control plane. The control plane could be any managed Kubernetes offering or your cluster."),(0,r.kt)("p",null,"For local deployment and test, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For production usage, you could use your Kubernetes cluster or Kubernetes services provided by cloud providers.\nFor offline installation, please refer to ",(0,r.kt)("a",{parentName:"p",href:"./platform-engineers/system-operation/offline-installation"},"KubeVela Offline Installation Guide"),".")),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"kind",values:[{label:"Kind",value:"kind"},{label:"Minikube",value:"minikube"},{label:"K3s",value:"k3s"},{label:"RKE",value:"rke"},{label:"Cloud Provider",value:"cloudprovider"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"minikube",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Minikube is ",(0,r.kt)("strong",{parentName:"p"},"NOT RECOMMENDED")," for production.")),(0,r.kt)("p",null,"Follow the minikube ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"installation guide"),"."),(0,r.kt)("p",null,"Then spins up a minikube cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,r.kt)("p",null,"Install ingress to enable service route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n"))),(0,r.kt)(s.Z,{value:"k3s",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The k3s is great for: Edge\u3001IoT\u3001Development.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install k3s")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"K3s provides an installation script that is a convenient way to install it as a service on systemd or openrc based systems.")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/quick-start/"},"this guide")," to get more support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sfL https://get.k3s.io | sh -\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Copy kubeconfig")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make ~/.kube\ncp /etc/rancher/k3s/k3s.yaml ~/.kube/config\n"))),(0,r.kt)(s.Z,{value:"rke",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This installation applies to the production environment. Please prepare 1~N servers or VMs.")),(0,r.kt)("p",null,"This section guides to install a RKE Kubernetes cluster, you can refer to their installation guides for ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/resources/k8s-tutorials/infrastructure-tutorials/infra-for-ha/"},"more details"),"."),(0,r.kt)("b",null,"\uff081\uff09 Docker "),(0,r.kt)("p",null,"The RKE depends on docker, Please install Docker on all servers or virtual machines, if not installed follow the docker ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"installation guide"),"."),(0,r.kt)("b",null,"\uff082\uff09Install RKE:"),(0,r.kt)("p",null,"Download RKE binary from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/releases"},"RKE release page"),"."),(0,r.kt)("p",null,"If your internet access was limited, try using the binary cached by KubeVela team:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://static.kubevela.net/binary/rke/rke_linux-amd64 -O /usr/bin/rke\nchmod +x /usr/bin/rke\n")),(0,r.kt)("b",null,"\uff083\uff09Install RKE cluster"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please switch to a non-root user who has permission to operate docker and execute the following commands.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"  mkdir ~/rkeinit && cd ~/rkeinit\n  # Wizard-style configuration\n  rke config\n  # Kubernetes Cluster Installation\n  rke up\n  # Install kubectl Command\n  mkdir ~/.kube\n  cp kube_config_cluster.yml ~/.kube/config\n  docker cp kubelet:/usr/local/bin/kubectl /usr/local/bin/kubectl\n"))),(0,r.kt)(s.Z,{value:"kind",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Kind is ",(0,r.kt)("strong",{parentName:"p"},"NOT RECOMMENDED")," for production.")),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),(0,r.kt)("p",null,"Then spins up a kind cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.20.7 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,r.kt)("p",null,"Install ingress controller to enable service route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n"))),(0,r.kt)(s.Z,{value:"cloudprovider",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Using for production environment")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alibaba Cloud ",(0,r.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/kubernetes"},"ACK Service")),(0,r.kt)("li",{parentName:"ul"},"AWS ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/eks"},"EKS Service")),(0,r.kt)("li",{parentName:"ul"},"Azure ",(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service"},"AKS Service")),(0,r.kt)("li",{parentName:"ul"},"Google ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GKE Service"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please make sure one of the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"ingress controllers")," is available.")))),(0,r.kt)("h2",{id:"2-install-kubevela-cli"},"2. Install KubeVela CLI"),(0,r.kt)("p",null,"KubeVela CLI provides an easy to engage and manage your application delivery in command lines."),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," MacOS/Linux ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash -s 1.2.4\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Only the official release version is supported.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,r.kt)(s.Z,{value:"homebrew",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,r.kt)("p",null,"Update your brew first. Please note that the brew method only supports the installation of the official release version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,r.kt)("p",null,"Then install KubeVela CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,r.kt)(s.Z,{value:"download",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"vela")," binary file via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"release log"),"."),(0,r.kt)("li",{parentName:"ul"},"Unzip the binary file, and configure the environment variables in ",(0,r.kt)("inlineCode",{parentName:"li"},"$PATH"),", and you're done.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"Installation Tips"),':\nIf you are using a Mac system, it will pop up a warning that "vela" cannot be opened because the package from the developer cannot be verified.'),(0,r.kt)("p",{parentName:"blockquote"},"MacOS imposes stricter restrictions on the software that can run in the system. You can temporarily solve this problem by opening ",(0,r.kt)("inlineCode",{parentName:"p"},"System Preference ->Security & Privacy -> General")," and clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"Allow Anyway"),".")))),(0,r.kt)("h2",{id:"2-install-kubevela-core"},"2. Install KubeVela Core"),(0,r.kt)(o.Z,{className:"unique-tabs",defaultValue:"vela",values:[{label:"Default",value:"vela"},{label:"Helm",value:"helm"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"vela",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The version of vela CLI >= 1.2.3.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela install\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," check out the outcome "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'...\nWatching for changes to Job kubevela-vela-core-cluster-gateway-tls-secret-patch with timeout of 18m0s\nAdd/Modify event for kubevela-vela-core-cluster-gateway-tls-secret-patch: ADDED\nkubevela-vela-core-cluster-gateway-tls-secret-patch: Jobs active: 0, jobs failed: 0, jobs succeeded: 0\nAdd/Modify event for kubevela-vela-core-cluster-gateway-tls-secret-patch: MODIFIED\nkubevela-vela-core-cluster-gateway-tls-secret-patch: Jobs active: 1, jobs failed: 0, jobs succeeded: 0\nAdd/Modify event for kubevela-vela-core-cluster-gateway-tls-secret-patch: MODIFIED\nkubevela-vela-core-cluster-gateway-tls-secret-patch: Jobs active: 1, jobs failed: 0, jobs succeeded: 0\nAdd/Modify event for kubevela-vela-core-cluster-gateway-tls-secret-patch: MODIFIED\nStarting delete for "kubevela-vela-core-admission" ServiceAccount\nStarting delete for "kubevela-vela-core-admission" ClusterRole\nStarting delete for "kubevela-vela-core-admission" ClusterRoleBinding\nStarting delete for "kubevela-vela-core-admission" Role\nStarting delete for "kubevela-vela-core-admission" RoleBinding\nStarting delete for "kubevela-vela-core-admission-patch" Job\nStarting delete for "kubevela-vela-core-cluster-gateway-admission" ServiceAccount\nStarting delete for "kubevela-vela-core-cluster-gateway-admission" Role\nStarting delete for "kubevela-vela-core-cluster-gateway-admission" RoleBinding\nStarting delete for "kubevela-vela-core-cluster-gateway-tls-secret-patch" Job\n\nKubeVela control plane has been successfully set up on your cluster.\nIf you want to enable dashboard, please run "vela addon enable velaux"\n')))),(0,r.kt)(s.Z,{value:"helm",mdxType:"TabItem"},(0,r.kt)("p",null,"If you are helm user, you can also use helm to install kubevela core:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"helm v3.2.0+ required")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm repo add kubevela https://charts.kubevela.net/core\nhelm repo update\nhelm install --create-namespace -n vela-system kubevela kubevela/vela-core --version 1.2.4 --wait\n")))),(0,r.kt)("h2",{id:"4-install-velaux"},"4. Install VelaUX"),(0,r.kt)("p",null,"VelaUX is a dashboard including UI+API services, it enables you to do everything around application delivery and management."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela addon enable velaux\n")),(0,r.kt)("p",null,"expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Addon: velaux enabled Successfully.\n")),(0,r.kt)("p",null,"By default, velaux didn't have any exposed port, you can view it by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela port-forward addon-velaux -n vela-system\n")),(0,r.kt)("p",null,"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"> Cluster: local | Namespace: vela-system | Component: velaux | Kind: Service")," for visit."),(0,r.kt)("p",null,"If you have loadbalaner or ingress, please refer to ",(0,r.kt)("a",{parentName:"p",href:"./reference/addons/velaux"},"VelaUX addon docs")," for more advanced installation ways."),(0,r.kt)("h2",{id:"5-uninstall"},"5. Uninstall"),(0,r.kt)("p",null,"Before uninstalling kubevela, you must delete all applications and disable all addons."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Uninstall VelaUX")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela addon disable velaux\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Uninstall KubeVela Core")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela uninstall\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Uninstall CRD")),(0,r.kt)("p",null,"Before deleting, you must delete all CR resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get crd |grep oam | awk '{print $1}' | xargs kubectl delete crd\n")),(0,r.kt)("h2",{id:"next-step"},"Next Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After installed KubeVela, let's begin to ",(0,r.kt)("a",{parentName:"li",href:"./quick-start"},"Deploy First Application"),"\u3002")))}d.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}a.d(t,{Z:function(){return l}})}}]);