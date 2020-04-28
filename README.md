# vuejs-essential

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 目录结构

├── README.md
├── build                           # 构建脚本目录
│   ├── build.js
│   ├── check-versions.js           
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                         # 应用程序配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html                     # 入口页面
├── package-lock.json              # 应用所需的NPM包配置文件 
├── package.json                   # 记录 NPM 包的具体来源和版本号 
├── src                            # 源码目录 
│   ├── App.vue                   # 根组件  
│   ├── assets                    # 应用资源目录  
│   │   └── logo.png
│   ├── components                # 公共组件目录  
│   │   └── HelloWorld.vue
│   └── main.js                   # 入口JS文件  
├── static                         # 纯静态资源文件 
└── tree.txt


