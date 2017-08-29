const HtmlWebpckPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    devtool         : 'eval-source-map',
    entry           :  __dirname + "/template/main.js", //已多次提及的唯一入口文件
    output          : {
        path        : __dirname + "/dist",              //打包后的文件存放的地方
        filename    : "bundle.js"                       //打包后输出文件的文件名
    },

    devServer               : {
    contentBase             : "./template/html",        //本地服务器所加载的页面所在的目录
        historyApiFallback  : true,                     //不跳转
        hot                 : true,
        inline              : true,
        port                : 8888
    },

    plugins         : [
        new HtmlWebpckPlugin({
            template : './template/html/index.html'
        }), 
        new webpack.HotModuleReplacementPlugin()
    ]
}