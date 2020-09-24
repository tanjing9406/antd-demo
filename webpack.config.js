const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html模板

module.exports = {
    mode: 'development',
    entry: {
        home: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    attributes: {
                        list: [
                            { tag: 'link', attribute: 'href', type: 'srcset' }
                        ]
                    }
                }
            },
            //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            {
                test: /\.(ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 50,
                    name: 'config/images/[name].[ext]'//相对于path的路径
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: { // 配置webpack-dev-server， 在本地启动一个服务器运行
        host: 'localhost', // 服务器的ip地址 希望服务器外可以访问就设置 0.0.0.0
        port: 8080, // 端口
        open: 'google chrome', // 自动打开页面
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'), // 生成的html文件存放的地址和文件名
            template: path.resolve(__dirname, 'public/index.html'), // 基于index.html模板进行生成html文件
        }),
    ]
};
