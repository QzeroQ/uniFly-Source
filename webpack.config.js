const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const resolve = dir => path.join(__dirname, '.', dir)

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    path: resolve('dist'), // 输出目录
    filename: 'uniFly.js', // 输出文件
    libraryTarget: 'umd', // 采用通用模块定义
    library: 'uniFly', // 库名称
    libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: isProd
    ? [
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            compress: {
              warnings: false
            },
            mangle: true
          },
          sourceMap: false //不需要sourceMap 设置为false
        }),
        new CleanWebpackPlugin()
      ]
    : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
}
