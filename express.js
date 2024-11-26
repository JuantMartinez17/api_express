const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000
const ditto = require('./pokemon/ditto.json')

/* app.use((req, res, next) => {
  if (req.method !== 'POST') {
    return next()
  }
  if (req.headers['content-type'] !== 'application/json') {
    return next()
  }
  // A este punto solo llegan las request que sean de tipo post y content type application/json
  let body = ''
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data
    next()
  })
}) */

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi pagina</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
