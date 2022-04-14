"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4094],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){return function(n){var t=c(n.components);return a.createElement(e,o({},n,{components:t}))}},c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=c(t),u=i,h=s["".concat(r,".").concat(u)]||s[u]||p[u]||o;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},66443:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],l={id:"automatic_schema_matching",title:"Automatic schema-matching",hide_title:!0},m=void 0,d={unversionedId:"upgrades/1.0_to_1.1/automatic_schema_matching",id:"upgrades/1.0_to_1.1/automatic_schema_matching",title:"Automatic schema-matching",description:"In Hydra 1.0, when a config file is loaded, if a config with a matching name and group is present in the ConfigStore,",source:"@site/docs/upgrades/1.0_to_1.1/automatic_schema_matching.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/automatic_schema_matching",permalink:"/docs/next/upgrades/1.0_to_1.1/automatic_schema_matching",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/upgrades/1.0_to_1.1/automatic_schema_matching.md",tags:[],version:"current",lastUpdatedBy:"Jasha",lastUpdatedAt:1649980352,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"automatic_schema_matching",title:"Automatic schema-matching",hide_title:!0},sidebar:"docs",previous:{title:"Changes to Package Header",permalink:"/docs/next/upgrades/1.0_to_1.1/changes_to_package_header"},next:{title:"Config path changes",permalink:"/docs/next/upgrades/0.11_to_1.0/config_path_changes"}},s=[{value:"Migration",id:"migration",children:[{value:"Option 1: rename the Structured Config",id:"option-1-rename-the-structured-config",children:[{value:"Hydra 1.0",id:"hydra-10",children:[],level:4},{value:"Hydra 1.1",id:"hydra-11",children:[],level:4}],level:3},{value:"Option 2: rename the config file",id:"option-2-rename-the-config-file",children:[{value:"Hydra 1.0",id:"hydra-10-1",children:[],level:4},{value:"Hydra 1.1",id:"hydra-11-1",children:[],level:4}],level:3}],level:2}],c={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"In Hydra 1.0, when a config file is loaded, if a config with a matching name and group is present in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConfigStore"),",\nit is used as the schema for the newly loaded config."),(0,o.mdx)("p",null,"There are several problems with this approach:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Inflexible"),": This approach can only be used when a schema should validate a single config file.\nIt does not work if you want to use the same schema to validate multiple config files."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Unexpected"),": This behavior can be unexpected. There is no way to tell this is going to happen when looking at a given\nconfig file.")),(0,o.mdx)("p",null,"Hydra 1.1 deprecates this behavior in favor of an explicit config extension via the Defaults List.",(0,o.mdx)("br",{parentName:"p"}),"\n","This upgrade page aims to provide a summary of the required changes. It is highly recommended that you read the following pages:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/next/advanced/defaults_list"},"Background: The Defaults List")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/next/patterns/extending_configs"},"Background: Extending configs")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/next/tutorials/structured_config/schema"},"Tutorial: Structured config schema"))),(0,o.mdx)("h2",{id:"migration"},"Migration"),(0,o.mdx)("p",null,"Before the upgrade, you have two different configs with the same name (a config file, and a Structured Config in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ConfigStore"),").\nYou need to rename one of them. Depending on the circumstances and your preference you may rename one or the other."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"If you control both configs, you can rename either of them."),(0,o.mdx)("li",{parentName:"ul"},"If you only control the config file, rename it.")),(0,o.mdx)("h3",{id:"option-1-rename-the-structured-config"},"Option 1: rename the Structured Config"),(0,o.mdx)("p",null,"This option is less disruptive. Use it if you control the Structured Config.  "),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Use a different name when storing the schema into the Config Store. Common choices:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"base_")," prefix, e.g. ",(0,o.mdx)("inlineCode",{parentName:"li"},"base_mysql"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"_schema")," suffix, e.g. ",(0,o.mdx)("inlineCode",{parentName:"li"},"mysql_schema"),"."))),(0,o.mdx)("li",{parentName:"ol"},"Add the schema to the Defaults List of the extending config file.")),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Click to show an example"),(0,o.mdx)("h4",{id:"hydra-10"},"Hydra 1.0"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\nhost: localhost\nport: 3306\n\n\n\n\n\n\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="db/mysql schema in the ConfigStore"',title:'"db/mysql',schema:!0,in:!0,the:!0,'ConfigStore"':!0},'@dataclass\nclass MySQLConfig:\n    host: str\n    port: int\n\ncs = ConfigStore.instance()\ncs.store(group="db",\n         name="mysql", \n         node=MySQLConfig)\n')))),(0,o.mdx)("h4",{id:"hydra-11"},"Hydra 1.1"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {1,2}',title:'"db/mysql.yaml"',"{1,2}":!0},"defaults:\n  - base_mysql\n\nhost: localhost\nport: 3306\n\n\n\n\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="db/mysql schema in the ConfigStore" {8}',title:'"db/mysql',schema:!0,in:!0,the:!0,'ConfigStore"':!0,"{8}":!0},'@dataclass\nclass MySQLConfig:\n    host: str\n    port: int\n\ncs = ConfigStore.instance()\ncs.store(group="db",\n         name="base_mysql", \n         node=MySQLConfig)\n'))))),(0,o.mdx)("h3",{id:"option-2-rename-the-config-file"},"Option 2: rename the config file"),(0,o.mdx)("p",null,"This option is a bit more disruptive. Use it if you only control the config file."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Rename the config file. Common choices are ",(0,o.mdx)("inlineCode",{parentName:"li"},"custom_")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"my_")," prefix, e.g. ",(0,o.mdx)("inlineCode",{parentName:"li"},"custom_mysql.yaml"),". You can also use a domain specific name like ",(0,o.mdx)("inlineCode",{parentName:"li"},"prod_mysql.yaml"),"."),(0,o.mdx)("li",{parentName:"ol"},"Add the schema to the Defaults List of the extending config file."),(0,o.mdx)("li",{parentName:"ol"},"Update references to the config name accordingly, e.g. on the command-line ",(0,o.mdx)("inlineCode",{parentName:"li"},"db=mysql")," would become ",(0,o.mdx)("inlineCode",{parentName:"li"},"db=custom_mysql"),", and in a defaults list ",(0,o.mdx)("inlineCode",{parentName:"li"},"db: mysql")," would become ",(0,o.mdx)("inlineCode",{parentName:"li"},"db: custom_mysql"),".")),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Click to show an example"),(0,o.mdx)("h4",{id:"hydra-10-1"},"Hydra 1.0"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"# @package _group_\nhost: localhost\nport: 3306\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="db/mysql schema in the ConfigStore"',title:'"db/mysql',schema:!0,in:!0,the:!0,'ConfigStore"':!0},'@dataclass\nclass MySQLConfig:\n    host: str\n    port: int\n\ncs = ConfigStore.instance()\ncs.store(group="db",\n         name="mysql", \n         node=MySQLConfig)\n\n')))),(0,o.mdx)("h4",{id:"hydra-11-1"},"Hydra 1.1"),(0,o.mdx)("p",null,"Rename ",(0,o.mdx)("inlineCode",{parentName:"p"},"db/mysql.yaml")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"db/custom_mysql.yaml")," and explicitly add the schema to the Defaults List."),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/custom_mysql.yaml" {1,2}',title:'"db/custom_mysql.yaml"',"{1,2}":!0},"defaults:\n  - mysql\n\nhost: localhost\nport: 3306\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - db: custom_mysql\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="db/mysql schema in the ConfigStore"',title:'"db/mysql',schema:!0,in:!0,the:!0,'ConfigStore"':!0},"\n\n\n\n\n                   NO CHANGES\n\n\n\n\n\n\n")))),(0,o.mdx)("p",null,"Don't forget to also update your command line overrides from ",(0,o.mdx)("inlineCode",{parentName:"p"},"db=mysql")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"db=custom_mysql"),".")))}u.isMDXComponent=!0}}]);