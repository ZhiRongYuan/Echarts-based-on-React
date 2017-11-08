/**
 * Created by zhirongyuan on 2017/8/23.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        proxy: {
            // 请求到 '/' 下 的请求都会被代理到 target： http://10.187.134.10:80/ 中
            '*': {
                target: 'http://10.187.134.10:80/',
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'echarts-base-on-react-demoPage',
            template: './public/index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader'
               ]
            },
             {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                   'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
           {
               test: /\.xml$/,
               use: [
                   'xml-loader'
               ]
           }
        ]
    }
};