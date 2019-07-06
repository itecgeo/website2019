const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//TODO: saber usar este plugin si no desinstalarlo del npm 
//const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        library: "itecgeo"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
            inject: true,
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
          }),
    ]
};