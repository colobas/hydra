"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4314],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),c=function(e){return function(n){var t=p(n.components);return a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return s},T:function(){return m}});var a=t(87462),r=t(67294),o=t(39960),l=t(52263),i=t(80907);function s(e){return r.createElement(o.default,(0,a.Z)({},e,{to:(n=e.to,s=(0,i.useActiveVersion)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==s?void 0:s.name)?t:"current"]+n),target:"_blank"}));var n,t,s}function m(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return r.createElement(s,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},71603:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=t(93899),i=["components"],s={id:"select_multiple_configs_from_config_group",title:"Selecting multiple configs from a Config Group"},m=void 0,c={unversionedId:"patterns/select_multiple_configs_from_config_group",id:"version-1.1/patterns/select_multiple_configs_from_config_group",title:"Selecting multiple configs from a Config Group",description:"Problem",source:"@site/versioned_docs/version-1.1/patterns/select_multiple_configs_from_config_group.md",sourceDirName:"patterns",slug:"/patterns/select_multiple_configs_from_config_group",permalink:"/docs/patterns/select_multiple_configs_from_config_group",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/patterns/select_multiple_configs_from_config_group.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha",lastUpdatedAt:1649980352,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"select_multiple_configs_from_config_group",title:"Selecting multiple configs from a Config Group"},sidebar:"version-1.1/docs",previous:{title:"Configuring Plugins",permalink:"/docs/patterns/configuring_plugins"},next:{title:"Specializing configuration",permalink:"/docs/patterns/specializing_config"}},p=[{value:"Problem",id:"problem",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"Overriding packages",id:"overriding-packages",children:[],level:3},{value:"Implementation considerations",id:"implementation-considerations",children:[],level:3}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(l.T,{text:"Example application",to:"examples/patterns/multi-select",mdxType:"ExampleGithubLink"}),(0,o.mdx)("h3",{id:"problem"},"Problem"),(0,o.mdx)("p",null,"In some scenarios, one may need to select multiple configs from the same Config Group."),(0,o.mdx)("h3",{id:"solution"},"Solution"),(0,o.mdx)("p",null,"Use a list of config names as the value of the config group in the Defaults List or in the command line."),(0,o.mdx)("h3",{id:"example"},"Example"),(0,o.mdx)("p",null,"In this example, we configure a server. The server can host multiple websites at the same time."),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0},"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 server\n    \u251c\u2500\u2500 apache.yaml\n    \u2514\u2500\u2500 site\n        \u251c\u2500\u2500 amazon.yaml\n        \u251c\u2500\u2500 fb.yaml\n        \u2514\u2500\u2500 google.yaml\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - server/apache\n\n\n\n\n\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {3,4}',title:'"server/apache.yaml"',"{3,4}":!0},"defaults:\n  - site:\n    - fb\n    - google\n\nhost: localhost\nport: 443\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/amazon.yaml"',title:'"server/site/amazon.yaml"'},"amazon:\n  domain: amazon.com\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/fb.yaml"',title:'"server/site/fb.yaml"'},"fb:\n  domain: facebook.com\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/google.yaml"',title:'"server/site/google.yaml"'},"google:\n  domain: google.com\n")))),(0,o.mdx)("p",null,"Output:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {3,5}',title:'"$',python:!0,'my_app.py"':!0,"{3,5}":!0},"server:\n  site:\n    fb:\n      domain: facebook.com\n    google:\n      domain: google.com\n  host: localhost\n  port: 443\n")),(0,o.mdx)("p",null,"Override the selected sites from the command line by passing a list. e.g:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"title=\"$ python my_app.py 'server/site=[google,amazon]'\" {3,5}",title:'"$',python:!0,"my_app.py":!0,"'server/site":"[google,amazon]'\"","{3,5}":!0},"server:\n  site:\n    google:\n      domain: google.com\n    amazon:\n      domain: amazon.com\n  host: localhost\n  port: 443\n")),(0,o.mdx)("h3",{id:"overriding-packages"},"Overriding packages"),(0,o.mdx)("p",null,"You can relocate the package of all the configs in the list. e.g:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {2}',title:'"server/apache.yaml"',"{2}":!0},"defaults:\n  - site@https:\n    - fb\n    - google\n\n\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {2}',title:'"$',python:!0,'my_app.py"':!0,"{2}":!0},"server:\n  https:\n    fb:\n      domain: facebook.com\n    google:\n      domain: google.com\n")))),(0,o.mdx)("p",null,"When overriding the selected configs of config groups with overridden packages you need to use the package. e.g:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py server/site@server.https=amazon"',title:'"$',python:!0,"my_app.py":!0,"server/site@server.https":'amazon"'},"server:\n  https:\n    amazon:\n      domain: amazon.com\n  host: localhost\n  port: 443\n")),(0,o.mdx)("h3",{id:"implementation-considerations"},"Implementation considerations"),(0,o.mdx)("p",null,"A nested list in the Defaults List is interpreted as a list of non-overridable configs:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {3,4}',title:'"server/apache.yaml"',"{3,4}":!0},"defaults:\n  - site:\n    - fb\n    - google\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Equivalent to" {2,3}',title:'"Equivalent','to"':!0,"{2,3}":!0},"defaults:\n  - site/fb\n  - site/google\n\n")))),(0,o.mdx)("p",null,"All default package for all the configs in ",(0,o.mdx)("inlineCode",{parentName:"p"},"server/site")," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"server.site"),".\nThis example uses an explicit nesting level inside each of the website configs to prevent them stepping over one another:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/amazon.yaml" {1}',title:'"server/site/amazon.yaml"',"{1}":!0},"amazon:\n  ...\n")))}d.isMDXComponent=!0}}]);