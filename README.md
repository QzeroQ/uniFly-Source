# uniFly源码

uniFly 基于 Fly和uni-app 封装 request 请求，实现请求拦截和响应拦截,支持 h5 和小程序

#### 使用方法

1. 安装git,安装npm(这个大家可以自行百度)

2. 克隆代码到本地
   ```git
     git clone https://github.com/QzeroQ/uniFly-Webpack.git
   ```
3. 安装依赖，进入项目根目录执行
   ```git
     npm i -S
   ```
4. 根据你的业务需求修改源码

5. 重新打包生成`uniFly.js`,在克隆文件的根目录下，打开命令行窗口（如果这一步，大家有疑问的话，请留言，如果问题朋友比较多的话我可以考虑录一个操作视频)
   ```git
     npm run build
   ```
6. 打包成功后，会在项目根目录下生成一个dist的文件夹，文件夹中会包含一个名为`uniFly.js`的文件文
7. 在自己的uni-app项目中引入unifly.js就可以使用了，具体使用教程大家可以参考
`https://github.com/QzeroQ/uniFly`
8. 如果你不需要自己定制，也可以直接安装我已经提交到npm仓库的uniFly包，具体[使用教程](https://www.jianshu.com/p/2729ac395cf5)

### `欢迎右上角Star,关注最新动态`

    

