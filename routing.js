const http = require('node:http')

const processRequest = (req, res) => {

}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000')
})
