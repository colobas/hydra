"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7249],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"object_instantiation_changes",title:"Object instantiation changes"},c=void 0,l={unversionedId:"upgrades/0.11_to_1.0/object_instantiation_changes",id:"version-1.0/upgrades/0.11_to_1.0/object_instantiation_changes",isDocsHomePage:!1,title:"Object instantiation changes",description:"Overview",source:"@site/versioned_docs/version-1.0/upgrades/0.11_to_1.0/object_instantiation_changes.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/object_instantiation_changes",permalink:"/docs/1.0/upgrades/0.11_to_1.0/object_instantiation_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/upgrades/0.11_to_1.0/object_instantiation_changes.md",tags:[],version:"1.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1639074459,formattedLastUpdatedAt:"12/9/2021",frontMatter:{id:"object_instantiation_changes",title:"Object instantiation changes"},sidebar:"version-1.0/docs",previous:{title:"strict flag mode deprecation",permalink:"/docs/1.0/upgrades/0.11_to_1.0/strict_mode_flag_deprecated"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Hydra configuration",id:"hydra-configuration",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Hydra 1.0.0 is deprecating ObjectConf and the corresponding config structure to a simpler one without the params node.\nThis removes a level of nesting from command line and configs overrides."),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},"class: my_app.MySQLConnection\nparams:\n  host: localhost\n  user: root\n  password: 1234\n"))),(0,o.kt)("div",{className:"col  col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},"_target_: my_app.MySQLConnection\nhost: localhost\nuser: root\npassword: 1234\n\n")))),(0,o.kt)("h2",{id:"hydra-configuration"},"Hydra configuration"),(0,o.kt)("p",null,"Hydra plugins are configured using the same mechanism.\nThis means that this change will effect how all plugins are configured and overridden.\nThis is a breaking change for code overriding configs in such plugins, but luckily it's easy to fix."),(0,o.kt)("p",null,"As an example, a Sweeper plugin override will change as follows:"),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Hydra 0.11"',script:!0,title:'"Hydra','0.11"':!0},"hydra.sweeper.params.max_batch_size=10\n"))),(0,o.kt)("div",{className:"col  col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Hydra 1.0"',script:!0,title:'"Hydra','1.0"':!0},"hydra.sweeper.max_batch_size=10\n")))))}u.isMDXComponent=!0}}]);