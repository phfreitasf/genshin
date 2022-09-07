const genshindb = require('genshin-db');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000



genshindb.setOptions({
  queryLanguages: ["Portuguese"],
  resultLanguage: "Portuguese",
  matchAliases: true,
  verboseCategories: true
})

app.get('/character', (req, res) => {
  res.send(genshindb.characters('names', {
    matchCategories: true
  }))
})

app.get('/character/:name', (req, res) => {
  console.log(`Alguem pesquisou: ${req.params.name}`)
  res.send(genshindb.characters(req.params.name, {
    matchCategories: true
  }))
})

app.get('*', (req, res) => {
  res.send({
    '/character': 'Exibe todos os personagens',
    '/character/:name': 'Procura por 1 personagem'
  })
})
app.listen(port, () => {
  console.log(`App rodando na porta: ${port}`)
})