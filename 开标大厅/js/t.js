// 获取url的参数
function getUrlParam (name) {
  console.log(name)
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')  // 构造一个含有目标参数的正则表达式对象
  console.log(reg)
  var r = window.location.search.substr(1).match(reg)   // 匹配目标参数
  console.log(r)
  if (r != null) return unescape(r[2]); return null // 返回参数值
}