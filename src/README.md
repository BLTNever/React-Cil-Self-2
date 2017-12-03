
# 启动项目

```js
cnpm i 
cnpm start
```
open  http://localhost:8000

> 由于没有数据，会导致页面功能不正常。所以你需要一个有数据的接口服务器


你可以选择mock，也可以选择测试服务器。

你选择的服务器的ip     mock.xxx.com

# 部署

```js
npm run build

```
# 代码风格
具体配置见eslintrc。 提交代码前会自动运行代码检查，如果有错误，则提交失败。
建议提交之前自行检查有没有警告的，如果有，尽量修复掉。
代码风格统一使用[prettier](https://github.com/prettier/prettier)，方便强制团队代码风格。

```js

npm run eslint

```

# 项目功能
                         
```


# 工作流程

目前比较推荐的工作流程（workflow）是这样的：

```
Make changes
Commit those changes
Make sure Travis turns green
Bump version in package.json
conventionalChangelog
Commit package.json and CHANGELOG.md files
Tag
Push
```

具体项目的开发步骤：

```


# 目录
```
├─actions                       aciton
│  
├─components                   组件库
│  
├─entry                        入口
├─modules                      业务模块
│  
├─reducers                     reducers
│
├─routes                       路由设置
├─store                        store配置
└─utils                        工具类

```
  
# Mock 方案

mock 是基于 浏览器代理加node代理实现的。 本地start后自动启动一个端口为8989的proxy server。浏览器通过代理（我使用的是switchy omega）代理到8989的服务器，然后8989服务器读取本地proxy.config.js的配置完成转发。目前mock server部署到zhipenglu的电脑上，包括文档服务器也是。

如果你需要使用[dip](http://dip.alibaba-inc.com/)。只需要启动项目的时候加上env。 即：

> mock=dip npm start

# 工具管理

```

|____browser.js      获取当前浏览器的信息
|____common.js       通用的一些方法
|____db.js           数据持久层
|____fetch.js        后端交互
|____form.js         表单处理
|____monitor.js      监控函数的入参出参，函数执行时间。（后期可以进一步扩展）

```

# 版本管理

版本采用semVer。 具体版本可以查看：gitlab.alibaba-inc.com/dingding/react-hrm-h5
一个版本开发完成可以执行npm run changelog， 系统自动根据commit message生成升changelog
[更多介绍](https://github.com/renliwo/hrm-fe-best-practice#关于文档)

# 常见问题
Q: mock 服务器启动后报错 ENOUSED
A: 检查node版本是不是6.x