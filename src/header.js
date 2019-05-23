function Header() {
  var dom = document.getElementById('root')
  var header = document.createElement('div')
  header.innerText = 'header'
  dom.append(header)
}
// export default Header   // es module 规范形式的抛出
module.exports = Header