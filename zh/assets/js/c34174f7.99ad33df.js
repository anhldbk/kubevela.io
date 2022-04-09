(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[53818],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90551:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={title:"AWS CONFIG"},i={unversionedId:"end-user/components/cloud-services/terraform/aws-config",id:"version-v1.2/end-user/components/cloud-services/terraform/aws-config",isDocsHomePage:!1,title:"AWS CONFIG",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/end-user/components/cloud-services/terraform/aws-config.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/aws-config",permalink:"/zh/docs/v1.2/end-user/components/cloud-services/terraform/aws-config",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/aws-config.md",version:"v1.2",lastUpdatedBy:"Avery",lastUpdatedAt:1649401229,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"AWS CONFIG"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}]}],u={toc:s};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"This module configures AWS Config, a service that enables you to assess, audit, and evaluate the configurations of your AWS resources."),(0,l.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"central_resource_collector_account"),(0,l.kt)("td",{parentName:"tr",align:null},"The account ID of a central account that will aggregate AWS Config from other accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"child_resource_collector_accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"The account IDs of other accounts that will send their AWS Configuration to this account"),(0,l.kt)("td",{parentName:"tr",align:null},"set(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_iam_role"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether an IAM Role should be created to grant the proper permissions for AWS Config"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_sns_topic"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether an SNS topic should be created for notifications\\nIf you want to send findings to a new SNS topic, set this to true and provide a valid configuration for subscribers\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disabled_aggregation_regions"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of regions where config aggregation is disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"findings_notification_arn"),(0,l.kt)("td",{parentName:"tr",align:null},"The ARN for an SNS topic to send findings notifications to. This is only used if create_sns_topic is false.\\nIf you want to send findings to an existing SNS topic, set the value of this to the ARN of the existing topic and set\\ncreate_sns_topic to false.\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_destroy"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean that indicates all objects should be deleted from the bucket so that the bucket can be destroyed without error. These objects are not recoverable"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"global_resource_collector_region"),(0,l.kt)("td",{parentName:"tr",align:null},"The region that collects AWS Config data for global resources such as IAM"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iam_role_arn"),(0,l.kt)("td",{parentName:"tr",align:null},"The ARN for an IAM Role AWS Config uses to make read or write requests to the delivery channel and to describe the\\nAWS resources associated with the account. This is only used if create_iam_role is false.\\n\\nIf you want to use an existing IAM Role, set the value of this to the ARN of the existing topic and set\\ncreate_iam_role to false.\\n\\nSee the AWS Docs for further information:\\n",(0,l.kt)("a",{parentName:"td",href:"http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html%5Cn"},"http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html\\n")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"managed_rules"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of AWS Managed Rules that should be enabled on the account.\\n\\nSee the following for a list of possible rules to enable:\\n",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html%5Cn"},"https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html\\n")),(0,l.kt)("td",{parentName:"tr",align:null},"map(object({\\n    description      = string\\n    identifier       = string\\n    input_parameters = any\\n    tags             = map(string)\\n    enabled          = bool\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3_bucket_arn"),(0,l.kt)("td",{parentName:"tr",align:null},"The ARN of the S3 bucket used to store the configuration history"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3_bucket_id"),(0,l.kt)("td",{parentName:"tr",align:null},"The id (name) of the S3 bucket used to store the configuration history"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3_key_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"The prefix for AWS Config objects stored in the the S3 bucket. If this variable is set to null, the default, no\\nprefix will be used.\\n\\nExamples:\\n\\nwith prefix:    {S3_BUCKET NAME}:/{S3_KEY_PREFIX}/AWSLogs/{ACCOUNT_ID}/Config/",(0,l.kt)("em",{parentName:"td"},".\\nwithout prefix: {S3_BUCKET NAME}:/AWSLogs/{ACCOUNT_ID}/Config/"),".\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sns_encryption_key_id"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sqs_queue_kms_master_key_id"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of an AWS-managed customer master key (CMK) for Amazon SQS Queue or a custom CMK"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscribers"),(0,l.kt)("td",{parentName:"tr",align:null},"A map of subscription configurations for SNS topics\\n\\nFor more information, see:\\n",(0,l.kt)("a",{parentName:"td",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sns_topic_subscription#argument-reference%5Cn%5Cnprotocol:%5Cn"},"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sns_topic_subscription#argument-reference\\n\\nprotocol:\\n"),"  The protocol to use. The possible values for this are: sqs, sms, lambda, application. (http or https are partially\\n  supported, see link) (email is an option but is unsupported in terraform, see link).\\nendpoint:\\n  The endpoint to send data to, the contents will vary with the protocol. (see link for more information)\\nendpoint_auto_confirms (Optional):\\n  Boolean indicating whether the end point is capable of auto confirming subscription e.g., PagerDuty. Default is\\n  false\\nraw_message_delivery (Optional):\\n  Boolean indicating whether or not to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property). Default is false.\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"map(any)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);