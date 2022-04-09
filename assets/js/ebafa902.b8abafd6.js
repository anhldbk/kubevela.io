(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[34657],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46914:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Provision a Database and Import a SQL File for initialization"},l={unversionedId:"end-user/components/cloud-services/provision-and-initiate-database",id:"end-user/components/cloud-services/provision-and-initiate-database",isDocsHomePage:!1,title:"Provision a Database and Import a SQL File for initialization",description:"This tutorial will talk about how to provision a relational database with SQL file imported, and bootstrap an",source:"@site/docs/end-user/components/cloud-services/provision-and-initiate-database.md",sourceDirName:"end-user/components/cloud-services",slug:"/end-user/components/cloud-services/provision-and-initiate-database",permalink:"/docs/next/end-user/components/cloud-services/provision-and-initiate-database",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/provision-and-initiate-database.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1646017378,formattedLastUpdatedAt:"2/28/2022",frontMatter:{title:"Provision a Database and Import a SQL File for initialization"},sidebar:"docs",previous:{title:"Provision and Binding Cloud Resources",permalink:"/docs/next/end-user/components/cloud-services/provision-and-consume-cloud-services"},next:{title:"Secure your Database Connection",permalink:"/docs/next/end-user/components/cloud-services/secure-your-database-connection"}},s=[{value:"How it works",id:"how-it-works",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Provision cloud resources",id:"provision-cloud-resources",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will talk about how to provision a relational database with SQL file imported, and bootstrap an\napplication which depends on the database."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubevela-contrib/nodejs-mysql-links"},"Favorite Links")," is an interesting project which can store all\nyour favorite web links in one application. It is using Node.js and MySQL. It has been built into a container image\n",(0,i.kt)("inlineCode",{parentName:"p"},"oamdev/nodejs-mysql-links:v0.0.1"),". Let's bootstrap the application and see how to provision a database, and import a SQL\nfile (which means to create tables, and insert data into them if needed)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Currently, it only works on Alibaba Cloud\nComponentDefinition ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/blob/master/addons/terraform-alibaba/definitions/terraform-alibaba-rds-preview.yaml"},"alibaba-rds-preview")," is the feature preview for Alibaba Cloud RDS, and will be merged into alibaba-rds later.")),(0,i.kt)("h3",{id:"how-it-works"},"How it works"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Feel free to skip this section if you are not interested.")),(0,i.kt)("p",null,"Alibaba Cloud RDS Preview supports importing SQL file when create an RDS instance with these properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sql_file"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of SQL file in the bucket, like ",(0,i.kt)("inlineCode",{parentName:"td"},"db.sql")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sql_bucket_name"),(0,i.kt)("td",{parentName:"tr",align:null},"The bucket name of the SQL file. like ",(0,i.kt)("inlineCode",{parentName:"td"},"oss://example")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sql_bucket_endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"The endpoint of the bucket. like ",(0,i.kt)("inlineCode",{parentName:"td"},"oss-cn-hangzhou.aliyuncs.com")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"After an RDS database is created, the SQL file from OSS bucket will be imported into the database by the power of Terraform\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubevela-contrib/terraform-modules/blob/master/alibaba/rds-preview/main.tf#L24-L33"},(0,i.kt)("inlineCode",{parentName:"a"},"local-exec")," provisioner"),"\nwhich is referenced by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/blob/master/addons/terraform-alibaba/definitions/terraform-alibaba-rds-preview.yaml#L23-L25"},"Alibaba Cloud RDS Preview ComponentDefinition"),"."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enable addon ",(0,i.kt)("a",{parentName:"p",href:"../../../reference/addons/terraform"},"terraform-alibaba"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Remember to store the SQL file in an ",(0,i.kt)("a",{parentName:"p",href:"./terraform/alibaba-oss"},"Alibaba Cloud OSS bucket")))),(0,i.kt)("p",null,"Let's say we have an OSS bucket ",(0,i.kt)("inlineCode",{parentName:"p"},"oss://favorite-links")," which contains a SQL file ",(0,i.kt)("inlineCode",{parentName:"p"},"db.sql")," in it, and the bucket endpoint\nis ",(0,i.kt)("inlineCode",{parentName:"p"},"oss-cn-hongkong.aliyuncs.com"),"."),(0,i.kt)("h3",{id:"provision-cloud-resources"},"Provision cloud resources"),(0,i.kt)("p",null,"Use the following Application to provision a database ",(0,i.kt)("inlineCode",{parentName:"p"},"links"),", import the SQL file ",(0,i.kt)("inlineCode",{parentName:"p"},"db.sql"),", and bootstrap the application\nFavorite Links."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: favorite-links\nspec:\n  components:\n    - name: web\n      type: webservice\n      properties:\n        image: oamdev/nodejs-mysql-links:v0.0.1\n        port: 4000\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              DATABASE_HOST:\n                secret: db-conn\n                key: DB_PUBLIC_HOST\n              DATABASE_NAME:\n                secret: db-conn\n                key: DATABASE_NAME\n              DATABASE_USER:\n                secret: db-conn\n                key: DB_USER\n              DATABASE_PASSWORD:\n                secret: db-conn\n                key: DB_PASSWORD\n\n    - name: db\n      type: alibaba-rds\n      properties:\n        instance_name: favorite-links\n        database_name: links\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        security_ips: [ "0.0.0.0/0" ]\n        privilege: ReadWrite\n        sql_file: db.sql\n        sql_bucket_endpoint: oss-cn-hongkong.aliyuncs.com\n        sql_bucket_name: oss://favorite-links\n        writeConnectionSecretToRef:\n          name: db-conn\n\n')),(0,i.kt)("p",null,"After the application is successfully deployed, you can access the web application by the following URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP             COMPONENT   TYPE                TRAITS          PHASE   HEALTHY STATUS                                          CREATED-TIME\nfavorite-links  web         webservice          service-binding running healthy Ready:1/1                                       2022-02-21 14:15:45 +0800 CST\n\u2514\u2500              db          alibaba-rds-preview                 running healthy Cloud resources are deployed and ready to use   2022-02-21 14:15:45 +0800 CST\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela port-forward favorite-links 4000:4000\nForwarding from 127.0.0.1:4000 -> 4000\nForwarding from [::1]:4000 -> 4000\n\nForward successfully! Opening browser ...\nHandling connection for 4000\nHandling connection for 4000\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://kubevela-assets.oss-cn-beijing.aliyuncs.com/gifs/db-import-sql-sample-favorite-links.gif",alt:null})))}c.isMDXComponent=!0}}]);