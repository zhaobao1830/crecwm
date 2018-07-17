const MyKoa = require('./index3')

const myKoa = new MyKoa()

myKoa.use((req, res) => {
  res.writeHead(200)
  res.end('hello mm')
})

myKoa.listen(3000, () => {
  console.log('进入myKoa的3000端口')
})
