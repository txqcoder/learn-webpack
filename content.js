function Content() {
  var dom = document.getElementById('root')
  var content = document.createElement('div')
  content.innerText = 'content'
  dom.append(content)
}

// export default Content // es module 规范的导出形式
// commonJS规范形式的导出
module.exports = Content