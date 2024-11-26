const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000
const ditto = require('./pokemon/ditto.json')

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi pagina</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    res.status(201).json(data)
  })
})

app.use((res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
