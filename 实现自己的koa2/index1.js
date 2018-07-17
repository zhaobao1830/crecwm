// node http模块的实现
const http = require('http')

const server = http.createServer((req,res) => {
  res.writeHead(200)
  res.end('hello zb')
})
server.listen(3000, () => {
  console.log('....................')
})
