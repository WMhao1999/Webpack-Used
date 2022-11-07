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