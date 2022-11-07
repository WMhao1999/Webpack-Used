# 学习 Webpack 打包 #

## 简要打包 ##

### 初始化目录结构 ###

```
Webpack
├─ public           //静态资源
│  ├─ index.html
│  └─ README.md
└─ src              //引用资源
   ├─ js
   │  ├─ count.js
   │  └─ sum.js
   └─ main.js

```

### 初始化package.json ###

```
npm init -y
```

### 得到package.json文件 ###

``` javascript
{
  "name": "webpack",   //修改名称不能为webpack，下载的包名为webpack引发重名
  "version": "1.0.0",
  "description": "",
  "main": "index.js", //修改主文件路径
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 安装webpack ###

```
npm install webpack webpack-cli -D
```

### 执行打包 ###

```
npx webpack ./src/main.js --mode=development
```

1. webpack后写入主文件路径
2. mode=打包模式
   + development为开发模式
   + production为生产模式

```
webpack 5.74.0 compiled successfully in 127 ms
```

### 打包成功，引入文件路径是将src改为dist ###

___

## Webpack 基本配置 ##

### 5大核心概念 ###

1. entry（入口）指示webpack从哪个文件开始打包
2. output（输出）只是webpack打包完成的文件去哪里以及命名
3. loader（加载器）webpack本身只能处理js json等，其他需要借助loader 例：css
4. plugins（插件）扩展webpack功能
5. mode（模式）：
   + development为开发模式
   + production为生产模式

### webpack.config.js ###
1. 在根目录创建 webpack.config.js 文件

``` javascript
const path = require("path"); //nodejs模块，专用处理路径问题

module.exports = {
    //入口
    entry: "./src/main.js",
    //输出
    output: {
        // 文件输入路径 绝对路径
        path: path.resolve(__dirname, "dist"),
        //文件名称
        filename: "main.js"
    },
    // 加载器
    module: {
        rules: [
            //loader的配置
        ]
    },
    //插件
    plugins: [

    ],
    //模式
    mode: "development"
};
```
2. 运行打包指令
   
```
npx webpack
```

## 处理CSS资源 ##