"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[425],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?t.createElement(h,i(i({ref:n},s),{},{components:a})):t.createElement(h,i({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3899:function(e,n,a){a.d(n,{Z:function(){return p},T:function(){return c}});var t=a(7462),r=a(7294),l=a(6742),i=a(2263),o=a(907);function p(e){return r.createElement(l.Z,(0,t.Z)({},e,{to:(n=e.to,p=(0,o.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(a=null==p?void 0:p.name)?a:"current"]+n),target:"_blank"}));var n,a,p}function c(e){var n,a=null!=(n=e.text)?n:"Example";return r.createElement(p,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+a+"-informational",alt:"Example"}))}},4838:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(3899),o=["components"],p={id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},c=void 0,s={unversionedId:"plugins/ray_launcher",id:"version-1.1/plugins/ray_launcher",isDocsHomePage:!1,title:"Ray Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.1/plugins/ray_launcher.md",sourceDirName:"plugins",slug:"/plugins/ray_launcher",permalink:"/docs/plugins/ray_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/plugins/ray_launcher.md",tags:[],version:"1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1639074459,formattedLastUpdatedAt:"12/9/2021",frontMatter:{id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},sidebar:"version-1.1/docs",previous:{title:"Joblib Launcher plugin",permalink:"/docs/plugins/joblib_launcher"},next:{title:"RQ Launcher plugin",permalink:"/docs/plugins/rq_launcher"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"<code>ray_aws</code> launcher",id:"ray_aws-launcher",children:[]},{value:"<code>ray</code> launcher",id:"ray-launcher",children:[]},{value:"Configure <code>ray.init()</code> and <code>ray.remote()</code>",id:"configure-rayinit-and-rayremote",children:[]}],d={toc:u};function m(e){var n=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pypi.org/project/hydra-ray-launcher/"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-ray-launcher",alt:"PyPI"})),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-ray-launcher",alt:"PyPI - License"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-ray-launcher",alt:"PyPI - Python Version"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-ray-launcher"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-ray-launcher.svg",alt:"PyPI - Downloads"})),(0,l.kt)(i.T,{text:"Example application",to:"plugins/hydra_ray_launcher/examples",mdxType:"ExampleGithubLink"}),(0,l.kt)(i.T,{text:"Plugin source",to:"plugins/hydra_ray_launcher",mdxType:"ExampleGithubLink"})),(0,l.kt)("p",null,"The Ray Launcher plugin provides 2 launchers: ",(0,l.kt)("inlineCode",{parentName:"p"},"ray_aws")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ray"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},"ray_aws")," launches jobs remotely on AWS and is built on top of ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ray.io/en/releases-1.3.0/cluster/sdk.html"},"ray autoscaler sdk"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"ray")," launches jobs on your local machine or existing ray cluster. "),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"$ pip install hydra-ray-launcher --upgrade\n")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Once installed, add ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/launcher=ray_aws")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/launcher=ray")," to your command line. Alternatively, override ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: ray_aws\n")),(0,l.kt)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,l.kt)("a",{parentName:"p",href:"/docs/patterns/configuring_plugins"},"this page")," for more information."),(0,l.kt)("h3",{id:"ray_aws-launcher"},(0,l.kt)("inlineCode",{parentName:"h3"},"ray_aws")," launcher"),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"ray_aws")," launcher is built on top of ray's ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ray.io/en/releases-1.3.0/cluster/sdk.html"},"autoscaler sdk"),". To get started, you need to\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"config your AWS credentials"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},"ray autoscaler sdk")," expects your AWS credentials have certain permissions for ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},(0,l.kt)("inlineCode",{parentName:"a"},"EC2"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/iam"},(0,l.kt)("inlineCode",{parentName:"a"},"IAM")),". Read ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ray-project/ray/issues/9327"},"this")," for more information."))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ray autoscaler sdk")," expects a configuration for the EC2 cluster; we've schematized the configs in ",(0,l.kt)(i.Z,{to:"plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/_config.py",mdxType:"GithubLink"},"here")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Discover ray_aws launcher's config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py hydra/launcher=ray_aws --cfg hydra -p hydra.launcher\n# @package hydra.launcher\n_target_: hydra_plugins.hydra_ray_launcher.ray_aws_launcher.RayAWSLauncher\nenv_setup:\n  pip_packages:\n    omegaconf: ${ray_pkg_version:omegaconf}\n    hydra_core: ${ray_pkg_version:hydra}\n    ray: ${ray_pkg_version:ray}\n    cloudpickle: ${ray_pkg_version:cloudpickle}\n    pickle5: 0.0.11\n    hydra_ray_launcher: 1.1.0.dev3\n  commands:\n  - conda create -n hydra_${python_version:micro} python=${python_version:micro} -y\n  - echo 'export PATH=\"$HOME/anaconda3/envs/hydra_${python_version:micro}/bin:$PATH\"'\n    >> ~/.bashrc\nray:\n  init:\n    address: null\n  remote: {}\n  cluster:\n    cluster_name: default\n    min_workers: 0\n    max_workers: 1\n    initial_workers: 0\n    autoscaling_mode: default\n    target_utilization_fraction: 0.8\n    idle_timeout_minutes: 5\n    docker:\n      image: ''\n      container_name: ''\n      pull_before_run: true\n      run_options: []\n    provider:\n      type: aws\n      region: us-west-2\n      availability_zone: us-west-2a,us-west-2b\n      cache_stopped_nodes: false\n      key_pair:\n        key_name: hydra-${oc.env:USER,user}\n    auth:\n      ssh_user: ubuntu\n    head_node:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    worker_nodes:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    file_mounts: {}\n    initialization_commands: []\n    setup_commands: []\n    head_setup_commands: []\n    worker_setup_commands: []\n    head_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536;ray start --head --port=6379 --object-manager-port=8076\n      --autoscaling-config=~/ray_bootstrap_config.yaml\n    worker_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536; ray start --address=$RAY_HEAD_IP:6379 --object-manager-port=8076\n  run_env: auto\nstop_cluster: true\nsync_up:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\nsync_down:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\nlogging:\n  log_style: auto\n  color_mode: auto\n  verbosity: 0\ncreate_update_cluster:\n  no_restart: false\n  restart_only: false\n  no_config_cache: false\nteardown_cluster:\n  workers_only: false\n  keep_min_workers: false\n"))),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The following examples can be found ",(0,l.kt)(i.Z,{to:"plugins/hydra_ray_launcher/examples",mdxType:"GithubLink"},"here"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Simple app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py --multirun task=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpqqg4v4i7/job_spec.pkl\nCluster: default\n...\nINFO services.py:1172 -- View the Ray dashboard at http://localhost:8265\n(pid=3374) [__main__][INFO] - Executing task 1\n(pid=3374) [__main__][INFO] - Executing task 2\n(pid=3374) [__main__][INFO] - Executing task 3\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] Deleted the cluster (provider.cache_stopped_nodes=false)\nDestroying cluster. Confirm [y/N]: y [automatic, due to --yes]\n...\nNo nodes remaining.\n\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Upload & Download from remote cluster"),(0,l.kt)("p",null,"If your application is dependent on multiple modules, you can configure ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.sync_up")," to upload dependency modules to the remote cluster.\nYou can also configure ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.sync_down")," to download output from remote cluster if needed. This functionality is built on top of ",(0,l.kt)("inlineCode",{parentName:"p"},"rsync"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude")," is consistent with how it works in ",(0,l.kt)("inlineCode",{parentName:"p"},"rsync"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"$  python train.py --multirun random_seed=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : random_seed=1\n[HYDRA]        #1 : random_seed=2\n[HYDRA]        #2 : random_seed=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmptdkye9of/job_spec.pkl\nCluster: default\n...\nINFO services.py:1172 -- View the Ray dashboard at http://localhost:8265\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\nLoaded cached provider configuration\n...\n[HYDRA] Output: receiving file list ... done\n16-32-25/\n16-32-25/0/\n16-32-25/0/checkpoint/\n16-32-25/0/checkpoint/checkpoint_1.pt\n16-32-25/1/\n16-32-25/1/checkpoint/\n16-32-25/1/checkpoint/checkpoint_2.pt\n16-32-25/2/\n16-32-25/2/checkpoint/\n16-32-25/2/checkpoint/checkpoint_3.pt\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] Deleted the cluster (provider.cache_stopped_nodes=false)\nDestroying cluster. Confirm [y/N]: y [automatic, due to --yes]\n...\nNo nodes remaining.\n\n"))),(0,l.kt)("h5",{id:"manage-cluster-lifecycle"},"Manage Cluster LifeCycle"),(0,l.kt)("p",null,"You can manage the Ray EC2 cluster lifecycle by configuring the flags provided by the plugin:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default setting (no need to specify on commandline): delete cluster after job finishes remotely:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.stop_cluster=true\nhydra.launcher.ray.cluster.provider.cache_stopped_nodes=false\nhydra.launcher.teardown_cluster.workers_only=false\nhydra.launcher.teardown_cluster.keep_min_workers=false\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Keep cluster running after jobs finishes remotely"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.stop_cluster=false\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Power off EC2 instances and control node termination using ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.ray.cluster.provider.cache_stopped_nodes"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.teardown_cluster.workers_only")),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"cache_stopped_nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"workers_only"),(0,l.kt)("th",{parentName:"tr",align:null},"behavior"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"All nodes are terminated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Keeps head node running and terminates only worker node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Keeps both head node and worker node and stops both of them")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Keeps both head node and worker node and stops only worker node"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Keep ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.ray.cluster.min_workers")," worker nodes\nand delete the rest of the worker nodes"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.teardown_cluster.keep_min_workers=true\n")))),(0,l.kt)("p",null,"Additionally, you can configure how to create or update the cluster:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default config: run setup commands, restart Ray and use\nthe config cache if available"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.create_update_cluster.no_restart=false\nhydra.launcher.create_update_cluster.restart_only=false\nhydra.launcher.create_update_cluster.no_config_cache=false\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Skip restarting Ray services when updating the cluster config"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.create_update_cluster.no_restart=true\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Skip running setup commands and only restart Ray (cannot be used with\n",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.create_update_cluster.no_restart"),")"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.create_update_cluster.restart_only=true\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fully resolve all environment settings from the cloud provider again"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.create_update_cluster.no_config_cache=true\n")))),(0,l.kt)("h5",{id:"configure-ray-logging"},"Configure Ray Logging"),(0,l.kt)("p",null,"You can manage Ray specific logging by configuring the flags provided by the plugin:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default config: use minimal verbosity and automatically\ndetect whether to use pretty-print and color mode"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},'hydra.launcher.logging.log_style="auto"\nhydra.launcher.logging.color_mode="auto"\nhydra.launcher.logging.verbosity=0\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Disable pretty-print"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},'hydra.launcher.logging.log_style="record"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Disable color mode"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},'hydra.launcher.logging.color_mode="false"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Increase Ray logging verbosity"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"hydra.launcher.logging.verbosity=3\n")))),(0,l.kt)("h3",{id:"ray-launcher"},(0,l.kt)("inlineCode",{parentName:"h3"},"ray")," launcher"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ray")," launcher lets you launch application on your ray cluster or local machine. You can easily config how your jobs are executed by changing ",(0,l.kt)("inlineCode",{parentName:"p"},"ray")," launcher's configuration here\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/hydra/plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/conf/hydra/launcher/ray.yaml")),(0,l.kt)("p",null," The ",(0,l.kt)(i.Z,{to:"plugins/hydra_ray_launcher/examples/simple",mdxType:"GithubLink"},"example application")," starts a new ray cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py  --multirun hydra/launcher=ray\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-16-28\n[HYDRA] Initializing ray with config: {}\nINFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8266\n[HYDRA]        #0 : \n(pid=97801) [__main__][INFO] - Executing task 1\n")),(0,l.kt)("p",null,"You can run the example application on your existing ray cluster as well by overriding ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init.address"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-commandline"},"$ python my_app.py  --multirun hydra/launcher=ray hydra.launcher.ray.init.address=localhost:6379'\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-13-32\n[HYDRA] Initializing ray with config: {'num_cpus': None, 'num_gpus': None, 'address': 'localhost:6379'}\nINFO worker.py:633 -- Connecting to existing Ray cluster at address: 10.30.99.17:6379\n[HYDRA]        #0 : \n(pid=93358) [__main__][INFO] - Executing task 1\n")),(0,l.kt)("h3",{id:"configure-rayinit-and-rayremote"},"Configure ",(0,l.kt)("inlineCode",{parentName:"h3"},"ray.init()")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"ray.remote()")),(0,l.kt)("p",null,"Ray launcher is built on top of ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-init"},(0,l.kt)("inlineCode",{parentName:"a"},"ray.init()")),"\nand ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-remote"},(0,l.kt)("inlineCode",{parentName:"a"},"ray.remote()")),".\nYou can configure ",(0,l.kt)("inlineCode",{parentName:"p"},"ray")," by overriding ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra.launcher.ray.remote"),".\nCheck out an ",(0,l.kt)(i.Z,{to:"plugins/hydra_ray_launcher/examples/simple/config.yaml",mdxType:"GithubLink"},"example config"),"."))}m.isMDXComponent=!0}}]);