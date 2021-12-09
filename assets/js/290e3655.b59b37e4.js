"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4599],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=p(r),y=o,g=s["".concat(l,".").concat(y)]||s[y]||c[y]||i;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3899:function(e,t,r){r.d(t,{Z:function(){return l},T:function(){return p}});var n=r(7462),o=r(7294),i=r(6742),a=r(2263),u=r(907);function l(e){return o.createElement(i.Z,(0,n.Z)({},e,{to:(t=e.to,l=(0,u.zu)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==l?void 0:l.name)?r:"current"]+t),target:"_blank"}));var t,r,l}function p(e){var t,r=null!=(t=e.text)?t:"Example";return o.createElement(l,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example"}))}},2746:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return y}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=r(3899),u=["components"],l={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},p=void 0,d={unversionedId:"tutorials/basic/running_your_app/working_directory",id:"tutorials/basic/running_your_app/working_directory",isDocsHomePage:!1,title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by",source:"@site/docs/tutorials/basic/running_your_app/3_working_directory.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/working_directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/tutorials/basic/running_your_app/3_working_directory.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1639074459,formattedLastUpdatedAt:"12/9/2021",sidebarPosition:3,frontMatter:{id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},sidebar:"docs",previous:{title:"Multi-run",permalink:"/docs/next/tutorials/basic/running_your_app/multi-run"},next:{title:"Logging",permalink:"/docs/next/tutorials/basic/running_your_app/logging"}},c=[{value:"Disable changing current working dir to job&#39;s output dir",id:"disable-changing-current-working-dir-to-jobs-output-dir",children:[]},{value:"Changing or disabling Hydra&#39;s output subdir",id:"changing-or-disabling-hydras-output-subdir",children:[]},{value:"Accessing the original working directory in your application",id:"accessing-the-original-working-directory-in-your-application",children:[]}],s={toc:c};function y(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.T,{to:"examples/tutorials/basic/running_your_hydra_app/3_working_directory",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that working directory."),(0,i.kt)("p",null,"The working directory is used to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),(0,i.kt)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),(0,i.kt)("p",null,"Every time you run the app, a new working directory is created:"),(0,i.kt)("p",null,"Python file: ",(0,i.kt)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom omegaconf import DictConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),(0,i.kt)("p",null,"Let's take a look at one of the working directories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),(0,i.kt)("p",null,"We have the Hydra output directory (",(0,i.kt)("inlineCode",{parentName:"p"},".hydra")," by default), and the application log file.\nInside the Hydra output directory we have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),(0,i.kt)("p",null,"And in the main output directory:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),(0,i.kt)("h3",{id:"disable-changing-current-working-dir-to-jobs-output-dir"},"Disable changing current working dir to job's output dir"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.job.chdir=False")," to disable the behavior. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# check current working dir\n$ pwd  \n/home/omry/dev/hydra\n\n# working dir remains the same\n$ python my_app.py hydra.job.chdir=False\nWorking directory : /home/omry/dev/hydra\n\n# output dir and files created\n$ tree -a outputs/2021-10-25/09-46-26/\noutputs/2021-10-25/09-46-26/\n\u251c\u2500\u2500 .hydra\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 hydra.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),(0,i.kt)("h3",{id:"changing-or-disabling-hydras-output-subdir"},"Changing or disabling Hydra's output subdir"),(0,i.kt)("p",null,"You can change the ",(0,i.kt)("inlineCode",{parentName:"p"},".hydra")," subdirectory name by overriding ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.output_subdir"),".\nYou can disable its creation by overriding ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.output_subdir")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". "),(0,i.kt)("h3",{id:"accessing-the-original-working-directory-in-your-application"},"Accessing the original working directory in your application"),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.job.chdir=True"),", you can still access the original working directory by importing ",(0,i.kt)("inlineCode",{parentName:"p"},"get_original_cwd()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"to_absolute_path()")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.utils"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from hydra.utils import get_original_cwd, to_absolute_path\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    print(f\"Current working directory : {os.getcwd()}\")\n    print(f\"Orig working directory    : {get_original_cwd()}\")\n    print(f\"to_absolute_path('foo')   : {to_absolute_path('foo')}\")\n    print(f\"to_absolute_path('/foo')  : {to_absolute_path('/foo')}\")\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="$ python examples/tutorial/8_working_directory/original_cwd.py"',title:'"$',python:!0,'examples/tutorial/8_working_directory/original_cwd.py"':!0},"Current working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path('foo')    : /Users/omry/dev/hydra/foo\nto_absolute_path('/foo')   : /foo\n")),(0,i.kt)("p",null,"The name of the generated working directories can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/configure_hydra/workdir"},"customized"),"."))}y.isMDXComponent=!0}}]);