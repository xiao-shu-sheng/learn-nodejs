#### name

项目名称

#### version 1.0.0 版本号

第一位：主版本号 重大的更新 或者重大的改动
第二位：次版本号 功能的更新
第三位：修订号 fix bug

#### description

项目描述

#### main

入口文件

#### type

指定项目使用的模块类型（"module" 或 "commonjs"）

#### module

指向项目的 ES Module 入口文件，供打包工具使用。

#### browser

为浏览器环境提供特定的入口文件或路径映射，使库在浏览器中有不同的实现

#### scripts

脚本命令

#### repository

项目地址

#### keywords

搜索关键字

#### author

作者

#### license

证书

#### devDependencies

开发的依赖都要装到这里

```sh
  npm i 包名 --save-dev
  npm i xx -D // 简写
```

比如webpack vite rollup 生产环境都不需要

#### dependencies

生产环境的依赖都要装到这里
比如vue Vuex vue-touter md5 生产环境都不需要

#### peerDependencies

给编写插件的人员或者编写npm包的开发人员使用的
编写插件时需要的依赖插件

#### 修改git网络设置
git config --global http.proxy http://127.0.0.1:7890 
git config --global https.proxy http://127.0.0.1:7890

7890是代理的端口号

#### 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy

#### 查看代理
git config --global --get http.proxy
git config --global --get https.proxy