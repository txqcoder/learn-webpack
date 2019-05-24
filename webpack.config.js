const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 打包配置
module.exports = {
  // mode:   'production',// 默认模式为生产环境 --打包后的文件会压缩   。
  mode:   'development', // --打包后不会压缩
  entry: { // 入口文件
    main:'./src/index.js'
  }, 
  module:{
    rules:[ // 规则
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   use:{
      //     loader: 'file-loader',
      //     options:{
      //       // placeholder 占位符
      //       name:'[name]_[hash].[ext]',
      //       outputPath:'images/'
      //     }
      //   }
      // }
      {
        test:/\.(jpg|png|gif)$/,
        use:{
          loader:'url-loader',
          options:{
            name:'[name]_[hash].[ext]',
            outputPath:'images/', // 2048 =2 kb
            limit:2048 // 如果图片大小超过2048字节，会将图片打包到dist/images/文件夹下，页面利用http请求访问。否则直接生产base64图片
          }
        }
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({ // 打包之后运行
      template:'src/index.html'
    }) // 创建一个html-webpack-plugin的实例
    ,
    new CleanWebpackPlugin() // 打包运行之前删除dist目录下的所有内容
  ],
  output: {
    filename:'bundle.js', // 打包后文件名字
    path: path.resolve(__dirname,'dist')  // path 跟绝对路径
  }
}