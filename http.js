const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received', req.url)
  res.end('Hola mundo')
})

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`)
})