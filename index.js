// es module 模块引入方式
// webpack 是一个模块打包工具 webpack is a module bundler
// webpack一开始是js的模块打包工具
// import Header from './header.js'
// import Sidebar from './sidebar.js'
// import Content from './content.js'  // import 后面的内容表示它是一个模块

// node 中的commonJs 模块引入方式
var Header = require('./header.js')
var Sidebar = require('./sidebar.js')
var Content = require('./content.js')

new Header()
new Sidebar()
new Content()