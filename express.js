const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi pagina</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
