var CommonsChunkPlugin  = require("webpack/lib/optimize/CommonsChunkPlugin");
var CleanWebpackPlugin  = require('clean-webpack-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

module.exports = {
    devtool     : 'eval-source-map',
    entry       : {
        main    : __dirname + '/app/main.js',
        vuepkg  : ['vue']
    },
    output      : {
        path    : __dirname + '/dist',
        filename: '[name].js'
    },
    plugins: [
        new CommonsChunkPlugin({
            name        : "vuepkg"
            // filename:"chunk222.js" //忽略则以name为输出文件的名字，否则以此为输出文件名字
        }),
        new CleanWebpackPlugin( // 清除（参考：http://www.cnblogs.com/oufeng/p/6819320.html）
            ['dist/*'], {
            root        : __dirname,
            verbose     : true,
            dry         : false
        }),
        new HtmlWebpackPlugin({
            template    : __dirname + '/public/index.html'
        })
    ],
    devServer   : {
        contentBase         : './public',
        port                : '8888',
        inline              : true,
        historyApiFallback  : true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [__dirname + 'public']
        },
        {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }]
    }
}