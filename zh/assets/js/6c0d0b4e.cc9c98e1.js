(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[20705],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(b,s(s({ref:n},c),{},{components:r})):t.createElement(b,s({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91664:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var t=r(22122),a=r(19756),o=(r(67294),r(3905)),s={title:"\u521b\u5efa\u548c\u4f7f\u7528\u4e91\u8d44\u6e90"},i={unversionedId:"end-user/components/cloud-services/provision-and-consume-cloud-services",id:"version-v1.3/end-user/components/cloud-services/provision-and-consume-cloud-services",isDocsHomePage:!1,title:"\u521b\u5efa\u548c\u4f7f\u7528\u4e91\u8d44\u6e90",description:"\u5728\u9762\u5411\u4e91\u5f00\u53d1\u9010\u6e10\u6210\u4e3a\u8303\u5f0f\u7684\u8fd9\u4e2a\u65f6\u4ee3\uff0c\u6211\u4eec\u5e0c\u671b\u96c6\u6210\u6765\u6e90\u4e0d\u540c\u3001\u7c7b\u578b\u4e0d\u540c\u4e91\u8d44\u6e90\u7684\u9700\u6c42\u975e\u5e38\u8feb\u5207\u3002\u4e0d\u7ba1\u662f\u6700\u57fa\u672c\u7684\u5bf9\u8c61\u5b58\u50a8\u3001\u4e91\u6570\u636e\u5e93\uff0c\u8fd8\u662f\u66f4\u591a\u7684\u8d1f\u8f7d\u5747\u8861\u7b49\u7b49\uff0c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/end-user/components/cloud-services/provision-and-consume-cloud-services.md",sourceDirName:"end-user/components/cloud-services",slug:"/end-user/components/cloud-services/provision-and-consume-cloud-services",permalink:"/zh/docs/end-user/components/cloud-services/provision-and-consume-cloud-services",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/provision-and-consume-cloud-services.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"\u521b\u5efa\u548c\u4f7f\u7528\u4e91\u8d44\u6e90"},sidebar:"version-v1.3/docs",previous:{title:"\u83b7\u5f97\u66f4\u591a\u7ec4\u4ef6\u7c7b\u578b\uff1f",permalink:"/zh/docs/end-user/components/more"},next:{title:"\u6570\u636e\u5e93\u521b\u5efa\u548c\u521d\u59cb\u5316",permalink:"/zh/docs/end-user/components/cloud-services/provision-and-initiate-database"}},l=[{value:"Terraform",id:"terraform",children:[{value:"\u90e8\u7f72\u4e91\u8d44\u6e90",id:"\u90e8\u7f72\u4e91\u8d44\u6e90",children:[]},{value:"\u6d88\u8d39\u4e91\u8d44\u6e90",id:"\u6d88\u8d39\u4e91\u8d44\u6e90",children:[]}]},{value:"\u81ea\u5b9a\u4e49\u4e91\u8d44\u6e90",id:"\u81ea\u5b9a\u4e49\u4e91\u8d44\u6e90",children:[]}],p={toc:l};function c(e){var n=e.components,s=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u9762\u5411\u4e91\u5f00\u53d1\u9010\u6e10\u6210\u4e3a\u8303\u5f0f\u7684\u8fd9\u4e2a\u65f6\u4ee3\uff0c\u6211\u4eec\u5e0c\u671b\u96c6\u6210\u6765\u6e90\u4e0d\u540c\u3001\u7c7b\u578b\u4e0d\u540c\u4e91\u8d44\u6e90\u7684\u9700\u6c42\u975e\u5e38\u8feb\u5207\u3002\u4e0d\u7ba1\u662f\u6700\u57fa\u672c\u7684\u5bf9\u8c61\u5b58\u50a8\u3001\u4e91\u6570\u636e\u5e93\uff0c\u8fd8\u662f\u66f4\u591a\u7684\u8d1f\u8f7d\u5747\u8861\u7b49\u7b49\uff0c\n\u4e5f\u9762\u4e34\u7740\u6df7\u5408\u4e91\u3001\u591a\u4e91\u7b49\u590d\u6742\u73af\u5883\u6240\u5e26\u6765\u7684\u6311\u6218\uff0c\u800c KubeVela \u90fd\u53ef\u4ee5\u5f88\u597d\u6ee1\u8db3\u4f60\u7684\u9700\u8981\u3002"),(0,o.kt)("p",null,"KubeVela \u901a\u8fc7\u4e91\u8d44\u6e90\u7ec4\u4ef6\uff08Component\uff09\u548c\u8fd0\u7ef4\u7279\u5f81\uff08Trait\uff09\u91cc\u7684\u8d44\u6e90\u7ed1\u5b9a\u529f\u80fd\uff0c\u9ad8\u6548\u5b89\u5168\u5730\u5b8c\u6210\u4e0d\u540c\u7c7b\u578b\u4e91\u8d44\u6e90\u7684\u96c6\u6210\u5de5\u4f5c\u3002\u76ee\u524d\u4f60\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u4e0b\u9762\u8fd9\u4e9b\u4e91\u8d44\u6e90\u9ed8\u8ba4\u7ec4\u4ef6\u3002\n\u540c\u65f6\u5728\u672a\u6765\uff0c\u66f4\u591a\u65b0\u7684\u4e91\u8d44\u6e90\u4e5f\u4f1a\u5728\u793e\u533a\u7684\u652f\u6491\u4e0b\u9010\u6e10\u6210\u4e3a\u9ed8\u8ba4\u9009\u9879\uff0c\u8ba9\u4f60\u6807\u51c6\u5316\u7edf\u4e00\u5730\u53bb\u4f7f\u7528\u5404\u79cd\u5382\u5546\u7684\u4e91\u8d44\u6e90\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u8bf7\u786e\u8ba4\u7ba1\u7406\u5458\u5df2\u7ecf\u5b89\u88c5\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"../../../reference/addons/terraform"},"\u4e91\u8d44\u6e90\u63d2\u4ef6"),"\u3002")),(0,o.kt)("h2",{id:"terraform"},"Terraform"),(0,o.kt)("p",null,"KubeVela \u652f\u6301\u7684\u6240\u6709\u7531 Terraform \u7f16\u6392\u7684\u4e91\u8d44\u6e90\u8bf7\u89c1",(0,o.kt)("a",{parentName:"p",href:"./cloud-resources-list"},"\u5217\u8868"),"\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"vela components --label type=terraform")," \u67e5\u770b\u3002"),(0,o.kt)("h3",{id:"\u90e8\u7f72\u4e91\u8d44\u6e90"},"\u90e8\u7f72\u4e91\u8d44\u6e90"),(0,o.kt)("p",null,"\u6211\u4eec\u4ee5 OSS bucket \u4e3a\u4f8b\u5c55\u793a\u5982\u4f55\u90e8\u7f72\u4e91\u8d44\u6e90\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: provision-cloud-resource-sample\nspec:\n  components:\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website-0911\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alibaba-oss")," \u7c7b\u578b\u7684\u7ec4\u4ef6\u7684 properties \u5728\u4e0a\u9762\u6587\u6863\u6709\u6e05\u6670\u7684\u63cf\u8ff0\uff0c\u5305\u62ec\u6bcf\u4e00\u4e2a property \u7684\u540d\u5b57\u3001\u7c7b\u578b\u3001\u63cf\u8ff0\u3001\u662f\u5426\u5fc5\u586b\u548c\u9ed8\u8ba4\u503c\u3002"),(0,o.kt)("p",null,"\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\u5e76\u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP                             COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS                                          CREATED-TIME\nprovision-cloud-resource-sample sample-oss  alibaba-oss         running healthy Cloud resources are deployed and ready to use   2021-09-11 12:55:57 +0800 CST\n")),(0,o.kt)("p",null,"\u5f53\u5e94\u7528\u7a0b\u5e8f\u5904\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"healthy"),"\u72b6\u6001\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u963f\u91cc\u4e91\u63a7\u5236\u53f0\u6216\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://partners-intl.aliyun.com/help/doc-detail/50452.htm"},"ossutil"),"\n\u68c0\u67e5OSS bucket \u662f\u5426\u88ab\u521b\u5efa\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ossutil ls oss://\nCreationTime                                 Region    StorageClass    BucketName\n2021-09-11 12:56:17 +0800 CST        oss-cn-beijing        Standard    oss://vela-website-0911\n")),(0,o.kt)("h3",{id:"\u6d88\u8d39\u4e91\u8d44\u6e90"},"\u6d88\u8d39\u4e91\u8d44\u6e90"),(0,o.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u4ee5\u963f\u91cc\u4e91\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08RDS\uff09\u7684\u4f8b\u5b50\uff0c\u4f5c\u4e3a\u793a\u4f8b\u8fdb\u884c\u8bb2\u89e3\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u8bf7\u76f4\u63a5\u590d\u5236\u4e00\u4e2a\u7f16\u5199\u597d\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff0c\u5728\u547d\u4ee4\u884c\u4e2d\u6267\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | vela up -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: rds-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        instance_name: sample-db\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        writeConnectionSecretToRef:\n          name: db-conn\nEOF\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"webservice")," \u7ec4\u4ef6\u4f5c\u4e3a RDS \u5373\u5c06\u5bf9\u5916\u7684\u670d\u52a1\u5668\uff0c\u800c\u540d\u79f0\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"sample-db")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"alibaba-rds")," \u7ec4\u4ef6\u5219\u627f\u8f7d\u8d77\u53bb\u62c9\u8d77\u4e91\u8d44\u6e90\u7684\u8d23\u4efb\uff0c\u6570\u636e\u5e93\u76f8\u5173\u8bbf\u95ee\u4fe1\u606f\u88ab\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"db-conn")," \u4e2d\u3002"),(0,o.kt)("p",null,"\u4e00\u822c\u4e91\u8d44\u6e90\u7684\u62c9\u8d77\uff0c\u4f1a\u6d88\u8017\u6bd4\u8f83\u591a\u7684\u65f6\u95f4\uff0c\u6bd4\u5982\u8fd9\u91cc\u7684 RDS \u5c31\u5927\u7ea6\u9700\u8981 15 \u5206\u949f\u5de6\u53f3\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5b83\u4ece\u6e32\u67d3\u3001\u5065\u5eb7\u68c0\u67e5\u5230\u6b63\u5e38\u8fd0\u884c\u7684\u5168\u8fc7\u7a0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vela ls                  \nAPP                     COMPONENT       TYPE        TRAITS              PHASE   HEALTHY STATUS                                          CREATED-TIME \nwebapp                  rds-server      webservice  service-binding     rendering                   2021-08-30 20:04:03 +0800 CST\n\u2514\u2500                  sample-db       alibaba-rds                     rendering                   2021-08-30 20:04:03 +0800 CST\n\nwebapp                  rds-server      webservice  service-binding     healthChecking  healthy                                             2021-08-30 20:04:03 +0800 CST\n\u2514\u2500                  sample-db       alibaba-rds                     healthChecking  unhealthy   Cloud resources are being provisioned.  2021-08-30 20:04:03 +0800 CST\n\nwebapp                  rds-server      webservice  service-binding     running healthy                                                 2021-08-30 20:04:03 +0800 CST\n\u2514\u2500                  sample-db       alibaba-rds                     running healthy Cloud resources are deployed and ready to use.  2021-08-30 20:04:03 +0800 CST\n")),(0,o.kt)("p",null,"\u6709\u4e86 RDS \u7684\u670d\u52a1\u5668\uff0c\u53c8\u6709\u4e86\u6b63\u5e38\u8fd0\u884c\u7684\u4e91\u8d44\u6e90\uff0c\u662f\u65f6\u5019\u8ba9\u5b83\u4eec\u4e4b\u95f4\u6620\u5c04\u8d77\u6765\u4e86\uff1a\u4f7f\u7528\u8fd0\u7ef4\u7279\u5f81 service-binding\u3002\u6211\u4eec\u5bf9 YAML \u6587\u4ef6\u8fdb\u884c\u66f4\u65b0\u540e\uff0c\u518d\u6b21\u90e8\u7f72\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | vela up -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: rds-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # \u73af\u5883\u53d8\u91cf\u4e0e db-conn \u5bc6\u94a5\u5f62\u6210\u6620\u5c04\n              DB_PASSWORD:\n                secret: db-conn                             \n              endpoint:\n                secret: db-conn\n                key: DB_PUBLIC_HOST          \n              username:\n                secret: db-conn\n                key: DB_USER\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        instance_name: sample-db\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        writeConnectionSecretToRef:\n          name: db-conn\nEOF\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0cdb-conn \u8d1f\u8d23\u5c06\u5bc6\u94a5\u7684\u8d26\u6237\u3001\u5bc6\u7801\u7b49\u4fe1\u606f\u8f6c\u53d1\u7ed9 rds-server \u8fd9\u4e2a\u7ec4\u4ef6\u6765\u4f7f\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(3648).Z})),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u4e91\u8d44\u6e90"},"\u81ea\u5b9a\u4e49\u4e91\u8d44\u6e90"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u63d0\u4f9b\u7684\u5f00\u7bb1\u5373\u7528\u4e91\u8d44\u6e90\u6ca1\u6709\u8986\u76d6\u4f60\u7684\u7814\u53d1\u9700\u6c42\uff0c\u4f60\u4f9d\u7136\u53ef\u4ee5\u901a\u8fc7\u7075\u6d3b\u7684",(0,o.kt)("a",{parentName:"p",href:"../../../platform-engineers/components/component-terraform"},"Terraform \u7ec4\u4ef6"),"\u53bb\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6240\u9700\u8981\u7684\u4e91\u8d44\u6e90\u3002"))}c.isMDXComponent=!0},3648:function(e,n,r){"use strict";n.Z=r.p+"assets/images/crossplane-visit-application-v3-b3536448afa1f842f48ee2acb03920de.jpg"}}]);