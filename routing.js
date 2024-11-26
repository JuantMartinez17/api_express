const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>Bienvenido a la pagina de inicio</h1>')
          break
        case '/contacto':
          res.setHeader('Content-Type', 'text/html: charset=utf-8')
          res.end('<h1>Bienvenido a la pagina de contacto</h1>')
          break
        case '/about':
          res.setHeader('Content-Type', 'text/html: charset=utf-8')
          res.end('<h1>Bienvenido a la pagina de about</h1>')
          break
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify(dittoJSON))
      }
      break
    case 'POST':
      switch (url) {
        case '/pokemon': {
          // const body = ''
          break
        }
      }
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000')
})
