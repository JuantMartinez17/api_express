const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
    if (req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Bienvenido a la pagina de inicio')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`)
})