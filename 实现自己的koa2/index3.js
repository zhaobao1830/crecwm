/**
 * Created by zb on 2018/7/17.
 */
// 自己通过http实现一个koz

const http = require('http')

class Application {
  constructor () {
    this.callback = () => {}
  }
  use (callback) {
    this.callback = callback
  }
  listen (...args) {
    const server = http.createServer((req,res) => {
      this.callback(req, res)
    })
    server.listen(...args)
  }
}

module.exports = Application
