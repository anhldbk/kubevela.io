(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3208],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return u},kt:function(){return g}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),m=o(a),g=l,k=m["".concat(p,".").concat(g)]||m[g]||s[g]||r;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22150:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=a(22122),l=a(19756),r=(a(67294),a(3905)),i={title:"AWS ALB"},d={unversionedId:"end-user/components/cloud-services/terraform/aws-alb",id:"version-v1.2/end-user/components/cloud-services/terraform/aws-alb",isDocsHomePage:!1,title:"AWS ALB",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/end-user/components/cloud-services/terraform/aws-alb.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/aws-alb",permalink:"/zh/docs/v1.2/end-user/components/cloud-services/terraform/aws-alb",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/aws-alb.md",version:"v1.2",lastUpdatedBy:"Avery",lastUpdatedAt:1649401229,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"AWS ALB"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}]}],o={toc:p};function u(t){var e=t.components,a=(0,l.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Terraform module to create an AWS Application/Network Load Balancer (ALB/NLB) and associated resources"),(0,r.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_logs"),(0,r.kt)("td",{parentName:"tr",align:null},"Map containing access logging configuration for load balancer."),(0,r.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create_lb"),(0,r.kt)("td",{parentName:"tr",align:null},"Controls if the Load Balancer should be created"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desync_mitigation_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how the load balancer handles requests that might pose a security risk to an application due to HTTP desync."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drop_invalid_header_fields"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether invalid header fields are dropped in application load balancers. Defaults to false."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_cross_zone_load_balancing"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether cross zone load balancing should be enabled in application load balancers."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_deletion_protection"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, deletion of the load balancer will be disabled via the AWS API. This will prevent Terraform from deleting the load balancer. Defaults to false."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_http2"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether HTTP/2 is enabled in application load balancers."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enable_waf_fail_open"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether to route requests to targets if lb fails to forward the request to AWS WAF"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extra_ssl_certs"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of maps describing any extra SSL certificates to apply to the HTTPS listeners. Required key/values: certificate_arn, https_listener_index (the index of the listener within https_listeners which the cert applies toward)."),(0,r.kt)("td",{parentName:"tr",align:null},"list(map(string))"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_tcp_listener_rules"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of maps describing the Listener Rules for this ALB. Required key/values: actions, conditions. Optional key/values: priority, http_tcp_listener_index (default to http_tcp_listeners","[count.index]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_tcp_listener_rules_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of tags to add to all http listener rules"),(0,r.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_tcp_listeners"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of maps describing the HTTP listeners or TCP ports for this ALB. Required key/values: port, protocol. Optional key/values: target_group_index (defaults to http_tcp_listeners","[count.index]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_tcp_listeners_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of tags to add to all http listeners"),(0,r.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"https_listener_rules"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of maps describing the Listener Rules for this ALB. Required key/values: actions, conditions. Optional key/values: priority, https_listener_index (default to https_listeners","[count.index]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"https_listener_rules_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of tags to add to all https listener rules"),(0,r.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"https_listeners"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of maps describing the HTTPS listeners for this ALB. Required key/values: port, certificate_arn. Optional key/values: ssl_policy (defaults to ELBSecurityPolicy-2016-08), target_group_index (defaults to https_listeners","[count.index]",")"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"https_listeners_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of tags to add to all https listeners"),(0,r.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idle_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"The time in seconds that the connection is allowed to be idle."),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"internal"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean determining if the load balancer is internal or externally facing."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ip_address_type"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 and dualstack."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lb_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of tags to add to load balancer"),(0,r.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listener_ssl_policy_default"),(0,r.kt)("td",{parentName:"tr",align:null},"The security policy if using HTTPS externally on the load balancer. ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-policy-table.html"},"See"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load_balancer_create_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout value when creating the ALB."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load_balancer_delete_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout value when deleting the ALB."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load_balancer_type"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of load balancer to create. Possible values are application or network."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load_balancer_update_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout value when updating the ALB."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"The resource name and Name tag of the load balancer."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name_prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"The resource name prefix and Name tag of the load balancer. Cannot be longer than 6 characters"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"putin_khuylo"),(0,r.kt)("td",{parentName:"tr",align:null},"Do you agree that Putin doesn't respect Ukrainian sovereignty and territorial integrity? More info: ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Putin_khuylo"},"https://en.wikipedia.org/wiki/Putin_khuylo"),"!"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"security_groups"),(0,r.kt)("td",{parentName:"tr",align:null},"The security groups to attach to the load balancer. e.g. ",'["sg-edcd9784","sg-edcd9785"]'),(0,r.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subnet_mapping"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of subnet mapping blocks describing subnets to attach to network load balancer"),(0,r.kt)("td",{parentName:"tr",align:null},"list(map(string))"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subnets"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of subnets to associate with the load balancer. e.g. ","['subnet-1a2b3c4d','subnet-1a2b3c4e','subnet-1a2b3c4f']"),(0,r.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of tags to add to all resources"),(0,r.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_group_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of tags to add to all target groups"),(0,r.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_groups"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of maps containing key/value pairs that define the target groups to be created. Order of these maps is important and the index of these are to be referenced in listener definitions. Required key/values: name, backend_protocol, backend_port"),(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vpc_id"),(0,r.kt)("td",{parentName:"tr",align:null},"VPC id where the load balancer and other resources will be deployed."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,r.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);