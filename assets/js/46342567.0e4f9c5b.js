(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[46430],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,v=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(v,i(i({ref:t},c),{},{components:a})):n.createElement(v,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(67294),r=a(80944),l=a(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var o=37,u=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,v=(0,r.Z)(),k=v.tabGroupChoices,b=v.setTabGroupChoices,f=(0,n.useState)(c),g=f[0],h=f[1],y=n.Children.toArray(e.children),N=[];if(null!=m){var w=k[m];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&h(w)}var O=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;h(n),null!=m&&(b(m,n),setTimeout((function(){var e,a,n,r,l,i,o,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,u=i.innerWidth,a>=0&&l<=u&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,a;switch(e.keyCode){case u:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case o:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:O,onClick:O},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},12856:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i=a(41395),s=a(58215),o={title:"Custom Installation"},u={unversionedId:"platform-engineers/advanced-install",id:"version-v1.3/platform-engineers/advanced-install",isDocsHomePage:!1,title:"Custom Installation",description:"Install KubeVela with cert-manager",source:"@site/versioned_docs/version-v1.3/platform-engineers/advanced-install.mdx",sourceDirName:"platform-engineers",slug:"/platform-engineers/advanced-install",permalink:"/docs/platform-engineers/advanced-install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/advanced-install.mdx",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Custom Installation"}},c=[{value:"Install KubeVela with cert-manager",id:"install-kubevela-with-cert-manager",children:[]},{value:"Install Pre-release",id:"install-pre-release",children:[]},{value:"Upgrade",id:"upgrade",children:[{value:"1. Upgrade CLI",id:"1-upgrade-cli",children:[]},{value:"2. Upgrade Vela Core",id:"2-upgrade-vela-core",children:[]},{value:"3. Upgrade VelaUX",id:"3-upgrade-velaux",children:[]}]},{value:"Install Kubectl Vela Plugin",id:"install-kubectl-vela-plugin",children:[]}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install-kubevela-with-cert-manager"},"Install KubeVela with cert-manager"),(0,l.kt)("p",null,"By default, KubeVela will use a self-signed certificate provided by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen")," for admissionWebhooks.\nYou can also use cert-manager if it's available. Note that you need to install cert-manager ",(0,l.kt)("strong",{parentName:"p"},"before")," the KubeVela chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),(0,l.kt)("p",null,"Install kubevela with enabled certmanager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela install --set admissionWebhooks.certManager.enabled=true\n")),(0,l.kt)("h2",{id:"install-pre-release"},"Install Pre-release"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# List all releases\nvela version list -a\n\n# Install the specified version.\nvela install --version 1.2.0-beta.3\n")),(0,l.kt)("h2",{id:"upgrade"},"Upgrade"),(0,l.kt)("h3",{id:"1-upgrade-cli"},"1. Upgrade CLI"),(0,l.kt)(i.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," MacOS/Linux ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash -s 1.2.4\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Windows")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Only the official release version is supported.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,l.kt)(s.Z,{value:"homebrew",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("p",null,"Update your brew first. Please note that the brew method only supports the installation of the official release version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,l.kt)("p",null,"Then install KubeVela CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,l.kt)(s.Z,{value:"download",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download the latest ",(0,l.kt)("inlineCode",{parentName:"li"},"vela")," binary file via ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"release log"),"."),(0,l.kt)("li",{parentName:"ul"},"Unzip the binary file, and configure the environment variables in ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH"),", and you're done.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"Installation Tips"),':\nIf you are using a Mac system, it will pop up a warning that "vela" cannot be opened because the package from the developer cannot be verified.'),(0,l.kt)("p",{parentName:"blockquote"},"MacOS imposes stricter restrictions on the software that can run in the system. You can temporarily solve this problem by opening ",(0,l.kt)("inlineCode",{parentName:"p"},"System Preference ->Security & Privacy -> General")," and clicking on ",(0,l.kt)("inlineCode",{parentName:"p"},"Allow Anyway"),".")))),(0,l.kt)("h3",{id:"2-upgrade-vela-core"},"2. Upgrade Vela Core"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# set -r=false will reset values.\nvela install --version v1.2.4 -r=false\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If there are custom settings when installing the old version, set ",(0,l.kt)("inlineCode",{parentName:"p"},"-r=false")," will reset the custom settings, please set them by ",(0,l.kt)("inlineCode",{parentName:"p"},"--set")," during the upgrade.")),(0,l.kt)("h3",{id:"3-upgrade-velaux"},"3. Upgrade VelaUX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable velaux version=v1.2.4\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you set custom parameters during installation, be sure to include the corresponding parameters.")),(0,l.kt)("h2",{id:"install-kubectl-vela-plugin"},"Install Kubectl Vela Plugin"),(0,l.kt)("p",null,"Install vela kubectl plugin can help you to ship applications more easily!"),(0,l.kt)(i.Z,{className:"unique-tabs",defaultValue:"krew",values:[{label:"Krew",value:"krew"},{label:"Script",value:"script"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"krew",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"},"Install and set up")," Krew on your machine."),(0,l.kt)("li",{parentName:"ol"},"Discover plugins available on Krew:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl krew update\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"install kubectl vela:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl krew install vela\n"))),(0,l.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install-kubectl-vela.sh | bash\n")),(0,l.kt)("p",null,"You can also download the binary from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/releases"},"release pages ( >= v1.0.3)")," manually.\nKubectl will discover it from your system path automatically."))),(0,l.kt)("p",null,"For more usage please reference ",(0,l.kt)("a",{parentName:"p",href:"../kubectlplugin"},"kubectl plugin"),"."))}m.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);