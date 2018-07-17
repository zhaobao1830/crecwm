// koa的实现方式
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = '自己的koa2'
})
app.listen(3000, function () {
  console.log('启动3000端口')
})
