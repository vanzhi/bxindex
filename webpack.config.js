module.exports = {
    devtool     : 'eval-source-map',
    entry       : __dirname + '/app/main.js',
    output      : {
        path    : __dirname + '/public',
        filename: 'bundle.js'
    },
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