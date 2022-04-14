"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2283],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var r=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,i=function(e,n){if(null==e)return{};var a,r,i={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),p=function(e){return function(n){var a=s(n.components);return r.createElement(e,t({},n,{components:a}))}},s=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var a=e.components,i=e.mdxType,t=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(a),m=i,h=p["".concat(o,".").concat(m)]||p[m]||u[m]||t;return a?r.createElement(h,l(l({ref:n},c),{},{components:a})):r.createElement(h,l({ref:n},c))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var t=a.length,o=new Array(t);o[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<t;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},54001:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(87462),i=a(63366),t=(a(67294),a(3905)),o=["components"],l={id:"hydra-command-line-flags",title:"Hydra's command line flags"},d=void 0,c={unversionedId:"advanced/hydra-command-line-flags",id:"version-1.0/advanced/hydra-command-line-flags",title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/versioned_docs/version-1.0/advanced/hydra-command-line-flags.md",sourceDirName:"advanced",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/1.0/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/advanced/hydra-command-line-flags.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha",lastUpdatedAt:1649980352,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"hydra-command-line-flags",title:"Hydra's command line flags"},sidebar:"version-1.0/docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/1.0/plugins/nevergrad_sweeper"},next:{title:"Basic Override syntax",permalink:"/docs/1.0/advanced/override_grammar/basic"}},p=[{value:"--help,-h :",id:"--help-h-",children:[],level:4},{value:"--version",id:"--version",children:[],level:4},{value:"--cfg,-c",id:"--cfg-c",children:[],level:4},{value:"--package,-p",id:"--package-p",children:[],level:4},{value:"--run,-r",id:"--run-r",children:[],level:4},{value:"--multirun,-m",id:"--multirun-m",children:[],level:4},{value:"--shell-completion,-sc",id:"--shell-completion-sc",children:[],level:4},{value:"--config-path,-cp",id:"--config-path-cp",children:[],level:4},{value:"--config-name,-cn",id:"--config-name-cn",children:[],level:4},{value:"--config-dir,-cd",id:"--config-dir-cd",children:[],level:4},{value:"--info,-i",id:"--info-i",children:[],level:4}],s={toc:p};function m(e){var n=e.components,a=(0,i.Z)(e,o);return(0,t.mdx)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("p",null,"Hydra is using the command line for two things:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Configuring your application (See ",(0,t.mdx)("a",{parentName:"li",href:"/docs/1.0/advanced/override_grammar/basic"},"Override Grammar"),")"),(0,t.mdx)("li",{parentName:"ul"},"Telling Hydra what to do.")),(0,t.mdx)("p",null,"Any argparse argument that is prefixed by ",(0,t.mdx)("inlineCode",{parentName:"p"},"--"),"  or ",(0,t.mdx)("inlineCode",{parentName:"p"},"'-")," is telling Hydra what to do.\nThe rest of the parameters are used to configure your application."),(0,t.mdx)("p",null,"You can view the Hydra specific flags via ",(0,t.mdx)("inlineCode",{parentName:"p"},"--hydra-help"),"."),(0,t.mdx)("details",null,(0,t.mdx)("summary",null,"Example output"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:'language-title="Example',metastring:'--hydra-help output"',"--hydra-help":!0,'output"':!0},"$ python my_app.py --hydra-help\nHydra (1.0.0rc3)\nSee https://hydra.cc for more info.\n\n== Flags ==\n--help,-h : Application's help\n--hydra-help : Hydra's help\n--version : Show Hydra's version and exit\n--cfg,-c : Show config instead of running [job|hydra|all]\n--package,-p : Config package to show\n--run,-r : Run a job\n--multirun,-m : Run multiple jobs with the configured launcher and sweeper\n--shell-completion,-sc : Install or Uninstall shell completion:\n    Bash - Install:\n    eval \"$(python my_app.py -sc install=bash)\"\n    Bash - Uninstall:\n    eval \"$(python my_app.py -sc uninstall=bash)\"\n\n    Fish - Install:\n    python my_app.py -sc install=fish | source\n    Fish - Uninstall:\n    python my_app.py -sc uninstall=fish | source\n\n--config-path,-cp : Overrides the config_path specified in hydra.main().\n                    The config_path is relative to the Python file declaring @hydra.main()\n--config-name,-cn : Overrides the config_name specified in hydra.main()\n--config-dir,-cd : Adds an additional config dir to the config search path\n--info,-i : Print Hydra information\nOverrides : Any key=value arguments to override config values (use dots for.nested=overrides)\n\n== Configuration groups ==\nCompose your configuration from those groups (For example, append hydra/job_logging=disabled to command line)\n\nhydra/help: default\nhydra/hydra_help: default\nhydra/hydra_logging: default, disabled, hydra_debug\nhydra/job_logging: default, disabled\nhydra/launcher: basic, rq, submitit_local, submitit_slurm\nhydra/output: default\nhydra/sweeper: ax, basic, nevergrad\n\n\nUse '--cfg hydra' to Show the Hydra config.\n"))),(0,t.mdx)("h4",{id:"--help-h-"},"--help,-h :"),(0,t.mdx)("p",null,"Shows the application's help. This can be ",(0,t.mdx)("a",{parentName:"p",href:"/docs/1.0/configure_hydra/app_help"},"customized"),"."),(0,t.mdx)("details",null,(0,t.mdx)("summary",null,"Example output"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},"$ python my_app.py --help\nmy_app is powered by Hydra.\n\n== Configuration groups ==\nCompose your configuration from those groups (group=option)\n\ndb: mysql, postgresql\n\n\n== Config ==\nOverride anything in the config (foo.bar=value)\n\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n\n\nPowered by Hydra (https://hydra.cc)\nUse --hydra-help to view Hydra specific help\n"))),(0,t.mdx)("h4",{id:"--version"},"--version"),(0,t.mdx)("p",null,"Show Hydra's version and exit"),(0,t.mdx)("h4",{id:"--cfg-c"},"--cfg,-c"),(0,t.mdx)("p",null,"Show config instead of running. Takes as parameter one of ",(0,t.mdx)("inlineCode",{parentName:"p"},"job"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"hydra")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"all"),"."),(0,t.mdx)("details",null,(0,t.mdx)("summary",null,"Example output"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py --cfg job\n# @package _global_\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n"))),(0,t.mdx)("h4",{id:"--package-p"},"--package,-p"),(0,t.mdx)("p",null,"Used in conjunction with --cfg.\n-p select a specific config package to show."),(0,t.mdx)("details",null,(0,t.mdx)("summary",null,"Example output"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py --cfg hydra -p hydra.job\n# @package hydra.job\nname: my_app\noverride_dirname: ''\nid: ???\nnum: ???\nconfig_name: config\nenv_set: {}\nenv_copy: []\nconfig:\n  override_dirname:\n    kv_sep: '='\n    item_sep: ','\n    exclude_keys: []\n"))),(0,t.mdx)("h4",{id:"--run-r"},"--run,-r"),(0,t.mdx)("p",null,"Run is the default mode and is not normally needed."),(0,t.mdx)("h4",{id:"--multirun-m"},"--multirun,-m"),(0,t.mdx)("p",null,"Run multiple jobs with the configured launcher and sweeper. See ",(0,t.mdx)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/multi-run"}),"."),(0,t.mdx)("h4",{id:"--shell-completion-sc"},"--shell-completion,-sc"),(0,t.mdx)("p",null,"Install or Uninstall ",(0,t.mdx)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/tab_completion"},"shell tab completion"),"."),(0,t.mdx)("h4",{id:"--config-path-cp"},"--config-path,-cp"),(0,t.mdx)("p",null,"Overrides the config_path specified in hydra.main(). The config_path is relative to the Python file declaring @hydra.main()"),(0,t.mdx)("h4",{id:"--config-name-cn"},"--config-name,-cn"),(0,t.mdx)("p",null,"Overrides the config_name specified in hydra.main()"),(0,t.mdx)("h4",{id:"--config-dir-cd"},"--config-dir,-cd"),(0,t.mdx)("p",null,"Adds an additional config directory to the ",(0,t.mdx)("a",{parentName:"p",href:"/docs/1.0/advanced/search_path"},"config search path"),".\nThis is useful for installed apps that want to allow their users to provide additional configs."),(0,t.mdx)("h4",{id:"--info-i"},"--info,-i"),(0,t.mdx)("p",null,"Print Hydra information. This includes installed plugins, search path, composition trace, generated config and more."))}m.isMDXComponent=!0}}]);