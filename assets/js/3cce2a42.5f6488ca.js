(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[45417],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31841:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"AWS S3-LOG-STORAGE"},o={unversionedId:"end-user/components/cloud-services/terraform/aws-s3-log-storage",id:"end-user/components/cloud-services/terraform/aws-s3-log-storage",isDocsHomePage:!1,title:"AWS S3-LOG-STORAGE",description:"Description",source:"@site/docs/end-user/components/cloud-services/terraform/aws-s3-log-storage.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/aws-s3-log-storage",permalink:"/docs/next/end-user/components/cloud-services/terraform/aws-s3-log-storage",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/aws-s3-log-storage.md",version:"current",lastUpdatedBy:"Avery",lastUpdatedAt:1649401229,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"AWS S3-LOG-STORAGE"}},s=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[{value:"Properties",id:"properties",children:[]}]}],d={toc:s};function u(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This module creates an S3 bucket suitable for receiving logs from other AWS services such as S3, CloudFront, and CloudTrail"),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_log_bucket_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the S3 bucket where S3 access logs will be sent to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_log_bucket_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix to prepend to the current S3 bucket name, where S3 access logs will be sent to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acl"),(0,l.kt)("td",{parentName:"tr",align:null},"The canned ACL to apply. We recommend log-delivery-write for compatibility with AWS services"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_encrypted_uploads_only"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," to prevent uploads of unencrypted objects to S3 bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_ssl_requests_only"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," to require requests to use Secure Socket Layer (HTTPS/SSL). This will explicitly deny access to HTTP requests"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block_public_acls"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," to disable the blocking of new public access lists on the bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block_public_policy"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," to disable the blocking of new public policies on the bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucket_key_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Set this to true to use Amazon S3 Bucket Keys for SSE-KMS, which reduce the cost of AWS KMS requests.\\n\\nFor more information, see: ",(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html%5Cn"},"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html\\n")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucket_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Bucket name. If provided, the bucket will be created with this name\\ninstead of generating the name from the context.\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucket_notifications_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Send notifications for the object created events. Used for 3rd-party log collection from a bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucket_notifications_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"Prefix filter. Used to manage object notifications"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucket_notifications_type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of the notification configuration. Only SQS is supported."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_destroy"),(0,l.kt)("td",{parentName:"tr",align:null},"When ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", permits a non-empty S3 bucket to be deleted by first deleting all objects in the bucket.\\nTHESE OBJECTS ARE NOT RECOVERABLE even if they were versioned and stored in Glacier.\\nMust be set ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," unless ",(0,l.kt)("inlineCode",{parentName:"td"},"force_destroy_enabled")," is also ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_destroy_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"When ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", permits ",(0,l.kt)("inlineCode",{parentName:"td"},"force_destroy")," to be set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".\\nThis is an extra safety precaution to reduce the chance that Terraform will destroy and recreate\\nyour S3 bucket, causing COMPLETE LOSS OF ALL DATA even if it was stored in Glacier.\\n\\nWARNING: Upgrading this module from a version prior to 0.27.0 to this version\\n  will cause Terraform to delete your existing S3 bucket CAUSING COMPLETE DATA LOSS\\n  unless you follow the upgrade instructions on the Wiki ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/cloudposse/terraform-aws-s3-log-storage/wiki/Upgrading-to-v0.27.0-(POTENTIAL-DATA-LOSS)"},"here"),".\\n  See additional instructions for upgrading from v0.27.0 to v0.28.0 ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/cloudposse/terraform-aws-s3-log-storage/wiki/Upgrading-to-v0.28.0-and-AWS-provider-v4-(POTENTIAL-DATA-LOSS)"},"here"),".\\n\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ignore_public_acls"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," to disable the ignoring of public access lists on the bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kms_master_key_arn"),(0,l.kt)("td",{parentName:"tr",align:null},"The AWS KMS master key ARN used for the SSE-KMS encryption. This can only be used when you set the value of sse_algorithm as aws:kms. The default aws/s3 AWS KMS master key is used if this element is absent while the sse_algorithm is aws:kms"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lifecycle_configuration_rules"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of S3 bucket v2 lifecycle rules, as specified in ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/cloudposse/terraform-aws-s3-bucket"},"terraform-aws-s3-bucket"),'"\\nThese rules are not affected by the deprecated ',(0,l.kt)("inlineCode",{parentName:"td"},"lifecycle_rule_enabled")," flag.\\n",(0,l.kt)("strong",{parentName:"td"},"NOTE:")," Unless you also set ",(0,l.kt)("inlineCode",{parentName:"td"},"lifecycle_rule_enabled = false")," you will also get the default deprecated rules set on your bucket.\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"list(object({\\n    enabled = bool\\n    id      = string\\n\\n    abort_incomplete_multipart_upload_days = number\\n\\n    # ",(0,l.kt)("inlineCode",{parentName:"td"},"filter_and")," is the ",(0,l.kt)("inlineCode",{parentName:"td"},"and")," configuration block inside the ",(0,l.kt)("inlineCode",{parentName:"td"},"filter")," configuration.\\n    # This is the only place you should specify a prefix.\\n    filter_and = any\\n    expiration = any\\n    transition = list(any)\\n\\n    noncurrent_version_expiration = any\\n    noncurrent_version_transition = list(any)\\n  }))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"restrict_public_buckets"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," to disable the restricting of making the bucket public"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s3_object_ownership"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the S3 object ownership control. Valid values are ",(0,l.kt)("inlineCode",{parentName:"td"},"ObjectWriter"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"BucketOwnerPreferred"),", and 'BucketOwnerEnforced'."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source_policy_documents"),(0,l.kt)("td",{parentName:"tr",align:null},"List of IAM policy documents that are merged together into the exported document.\\nStatements defined in source_policy_documents must have unique SIDs.\\nStatement having SIDs that match policy SIDs generated by this module will override them.\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sse_algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"The server-side encryption algorithm to use. Valid values are AES256 and aws:kms"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"versioning_enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable object versioning, keeping multiple variants of an object in the same bucket"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);