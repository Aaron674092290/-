const path = require("path");
const HtmlWP = require('html-webpack-plugin');
const CleanWP = require('clean-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname + "/src/main.js"), //配置入口模块，webpack会从这个模块开始分析项目的所有依赖，然后进行打包·
    output: { //配置打包后文件的输出目录与文件夹
        path: path.resolve(__dirname + "/dist"), //这里必须绝对路径，否则报错1
        filename: "js/bundle_[chunkhash:8].js" //[chunkhash:8]的作用是给文件添加唯一的标识符，预防浏览器缓存
    },
    devServer: {
        contentBase: "src",
        open: true,
        port: 8888
    },
    plugins: [
        new HtmlWP({
            template: 'src/index.html', //源文件文件名
            filename: 'index.html', //处理后的文件名
            inject: 'body' //脚本自动注入的位置
        }),
        new CleanWP(['dist']) //每次打包之前先清除dist位置
    ],
    module: {
        rules: [{
                test: /\.css$/, //匹配结尾css的文件
                use: ['style-loader', 'css-loader'] /* 这里顺序不能乱 */
            },
            // less文件
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp|svg|woff|ttf)$/,
                use: [
                    // 计算机中存储的单位：Bit，Byte，KB，MB，GB，TB
                    // 这里limit选项需要配置的单位是字节(byte)，一般配置8到10KB
                    {
                        loader: 'url-loader',
                        options: { limit: 8192, name: '[name]_[hash:8].[ext]' } // 小于8kb的文件转为base64, 文件名称使用8位hash
                    }
                ]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, './node_modules') // 注意绝对路径
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    }
}