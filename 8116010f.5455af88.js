(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(266)),o=n(275),s={id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},c={unversionedId:"patterns/instantiate_objects/overview",id:"patterns/instantiate_objects/overview",isDocsHomePage:!1,title:"Instantiating objects with Hydra",description:"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.",source:"@site/docs/patterns/instantiate_objects/overview.md",slug:"/patterns/instantiate_objects/overview",permalink:"/docs/next/patterns/instantiate_objects/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/instantiate_objects/overview.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1611354754,sidebar_label:"Overview",sidebar:"docs",previous:{title:"Config Store API",permalink:"/docs/next/tutorials/structured_config/config_store"},next:{title:"Config files example",permalink:"/docs/next/patterns/instantiate_objects/config_files"}},l=[{value:"Simple usage",id:"simple-usage",children:[]},{value:"Recursive instantiation",id:"recursive-instantiation",children:[]},{value:"Disable recursive instantiation",id:"disable-recursive-instantiation",children:[]},{value:"Parameter conversion strategies",id:"parameter-conversion-strategies",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),Object(i.b)("p",null,"Hydra provides ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()")," (and its alias ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.utils.call()"),") for instantiating objects and calling functions. Prefer ",Object(i.b)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",Object(i.b)("inlineCode",{parentName:"p"},"call")," for invoking functions."),Object(i.b)("p",null,"Call/instantiate supports:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Constructing an object by calling the ",Object(i.b)("inlineCode",{parentName:"li"},"__init__")," method"),Object(i.b)("li",{parentName:"ul"},"Calling functions, static functions, class methods and other callable global objects")),Object(i.b)("details",null,Object(i.b)("summary",null,"Instantiate API (Expand for details)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'def instantiate(config: Any, *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An config object describing what to call and what params to use.\n                   In addition to the parameters, the config must contain:\n                   _target_ : target class or callable name (str)\n                   And may contain:\n                   _recursive_: Construct nested objects as well (bool).\n                                True by default.\n                                may be overridden via a _recursive_ key in\n                                the kwargs\n                   _convert_: Conversion strategy\n                        none    : Passed objects are DictConfig and ListConfig, default\n                        partial : Passed objects are converted to dict and list, with\n                                  the exception of Structured Configs (and their fields).\n                        all     : Passed objects are dicts, lists and primitives without\n                                  a trace of OmegaConf containers\n    :param args: Optional positional parameters pass-through\n    :param kwargs: Optional named parameters to override\n                   parameters in the config object. Parameters not present\n                   in the config objects are being passed as is to the target.\n    :return: if _target_ is a class name: the instantiated object\n             if _target_ is a callable: the return value of the call\n    """\n\n# Alias for instantiate\ncall = instantiate\n'))),Object(i.b)("br",null),Object(i.b)("p",null,"The config passed to these functions must have a key called ",Object(i.b)("inlineCode",{parentName:"p"},"_target_"),", with the value of a fully qualified class name, class method, static method or callable.",Object(i.b)("br",{parentName:"p"}),"\n","Any additional parameters are passed as keyword arguments to the target.\nFor convenience, ",Object(i.b)("inlineCode",{parentName:"p"},"None")," config results in a ",Object(i.b)("inlineCode",{parentName:"p"},"None")," object."),Object(i.b)("h3",{id:"simple-usage"},"Simple usage"),Object(i.b)("p",null,"Your application might have an Optimizer class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Example class"',title:'"Example','class"':!0}),"class Optimizer:\n    algo: str\n    lr: float\n\n    def __init__(self, algo: str, lr: float) -> None:\n        self.algo = algo\n        self.lr = lr\n")),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Config"',title:'"Config"'}),"optimizer:\n  _target_: my_app.Optimizer\n  algo: SGD\n  lr: 0.01\n\n\n\n\n"))),Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'}),"opt = instantiate(cfg.optimizer)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.01)\n\n# override parameters on the call-site\nopt = instantiate(cfg.optimizer, lr=0.2)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.2)\n")))),Object(i.b)("h3",{id:"recursive-instantiation"},"Recursive instantiation"),Object(i.b)("p",null,"Let's add a Dataset and a Trainer class. The trainer holds a Dataset and an Optimizer instances."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Additional classes"',title:'"Additional','classes"':!0}),"class Dataset:\n    name: str\n    path: str\n\n    def __init__(self, name: str, path: str) -> None:\n        self.name = name\n        self.path = path\n\n\nclass Trainer:\n    def __init__(self, optimizer: Optimizer, dataset: Dataset) -> None:\n        self.optimizer = optimizer\n        self.dataset = dataset\n")),Object(i.b)("p",null,"With the following config, you can instantiate the whole thing with a single call:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Example config"',title:'"Example','config"':!0}),"trainer:\n  _target_: my_app.Trainer\n  optimizer:\n    _target_: my_app.Optimizer\n    algo: SGD\n    lr: 0.01\n  dataset:\n    _target_: my_app.Dataset\n    name: Imagenet\n    path: /datasets/imagenet\n")),Object(i.b)("p",null,"Hydra will instantiate nested objects recursively by default."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"trainer = instantiate(cfg.trainer)\nprint(trainer)\n# Trainer(\n#  optimizer=Optimizer(algo=SGD,lr=0.01),\n#  dataset=Dataset(name=Imagenet, path=/datasets/imagenet)\n# )\n")),Object(i.b)("p",null,"You can override parameters for nested objects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'trainer = instantiate(\n    cfg.trainer,\n    optimizer={"lr": 0.3},\n    dataset={"name": "cifar10", "path": "/datasets/cifar10"},\n)\nprint(trainer)\n# Trainer(\n#   optimizer=Optimizer(algo=SGD,lr=0.3),\n#   dataset=Dataset(name=cifar10, path=/datasets/cifar10)\n# )\n')),Object(i.b)("h3",{id:"disable-recursive-instantiation"},"Disable recursive instantiation"),Object(i.b)("p",null,"You can disable recursive instantiation by setting ",Object(i.b)("inlineCode",{parentName:"p"},"_recursive_")," to ",Object(i.b)("inlineCode",{parentName:"p"},"False")," in the config node or in the call-site\nIn that case the Trainer object will receive an OmegaConf DictConfig for nested dataset and optimizer instead of the instantiated objects."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"optimizer = instantiate(cfg.trainer, _recursive_=False)\nprint(optimizer)\n")),Object(i.b)("p",null,"Output:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Trainer(\n  optimizer={\n    '_target_': 'my_app.Optimizer', 'algo': 'SGD', 'lr': 0.01\n  },\n  dataset={\n    '_target_': 'my_app.Dataset', 'name': 'Imagenet', 'path': '/datasets/imagenet'\n  }\n)\n")),Object(i.b)("h2",{id:"parameter-conversion-strategies"},"Parameter conversion strategies"),Object(i.b)("p",null,"By default, the parameters passed to the target are either primitives (int, float, bool etc) or",Object(i.b)("br",{parentName:"p"}),"\n","OmegaConf containers (DictConfig, ListConfig).\nOmegaConf containers have many advantages over primitive dicts and lists but in some cases\nit's desired to pass a real dicts and lists (for example, for performance reasons)."),Object(i.b)("p",null,"You can change the parameter conversion strategy using the ",Object(i.b)("inlineCode",{parentName:"p"},"_convert_")," parameter (in your config or the call-site).\nSupported values are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"none")," : Default behavior, Use OmegaConf containers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"partial")," : Convert OmegaConf containers to dict and list, except Structured Configs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"all")," : Convert everything to primitive containers")),Object(i.b)("p",null,"Note that the conversion strategy applies to all the parameters passed to the target."))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},268:function(e,t,n){"use strict";n.r(t);var a=n(11);n.d(t,"MemoryRouter",(function(){return a.d})),n.d(t,"Prompt",(function(){return a.f})),n.d(t,"Redirect",(function(){return a.g})),n.d(t,"Route",(function(){return a.h})),n.d(t,"Router",(function(){return a.i})),n.d(t,"StaticRouter",(function(){return a.j})),n.d(t,"Switch",(function(){return a.k})),n.d(t,"generatePath",(function(){return a.l})),n.d(t,"matchPath",(function(){return a.m})),n.d(t,"useHistory",(function(){return a.n})),n.d(t,"useLocation",(function(){return a.o})),n.d(t,"useParams",(function(){return a.p})),n.d(t,"useRouteMatch",(function(){return a.q})),n.d(t,"withRouter",(function(){return a.r})),n.d(t,"BrowserRouter",(function(){return a.a})),n.d(t,"HashRouter",(function(){return a.b})),n.d(t,"Link",(function(){return a.c})),n.d(t,"NavLink",(function(){return a.e}))},269:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11),o=n(267),s=n(7),c=Object(a.createContext)({collectLink:function(){}}),l=n(270),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,f=e.to,b=e.href,m=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,w=Object(a.useContext)(c),D=f||b,_=Object(o.a)(D),N=null==D?void 0:D.replace("pathname://",""),C=void 0!==N?(n=N,O&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,P=Object(a.useRef)(!1),A=d?i.e:i.c,x=s.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!x&&_&&window.docusaurus.prefetch(C),function(){x&&p&&p.disconnect()}}),[C,x,_]);var E=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,k=!C||!_||E;return C&&_&&!E&&!v&&w.collectLink(C),k?r.a.createElement("a",Object.assign({href:C},D&&!_&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(A,Object.assign({},j,{onMouseEnter:function(){P.current||(window.docusaurus.preload(C),P.current=!0)},innerRef:function(e){var t,n;x&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(C)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:C||""},d&&{isActive:g,activeClassName:m}))}},270:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(21),r=n(267);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},271:function(e,t,n){try{e.exports=n(272)}catch(a){e.exports={}}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(268),r=n(273),i=n(274);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=a.useLocation().pathname;return i.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveVersion(n,r)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getActiveDocContext(n,r)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return i.getDocVersionSuggestions(n,r)}},273:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(21);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(268);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,i,o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?(r=s.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),i=r.activeVersion!==a;return{latestDocSuggestion:i?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:i?a:void 0}}},275:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(3),r=n(0),i=n.n(r),o=n(269),s=n(21),c=n(271);function l(e){return i.a.createElement(o.a,Object(a.a)({},e,{to:(t=e.to,r=Object(c.useActiveVersion)(),Object(s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,r}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(l,e,i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);