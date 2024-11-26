const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi pagina</h1>')
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
