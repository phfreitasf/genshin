const genshindb = require('genshin-db');
const http = require('http');
const https = require('https');
const express = require('express')
const cors = require('cors')
const fs = require("fs");



const app = express()
app.use(cors())
const port = 3000

var httpServer = http.createServer(app);
var httpsServer = https.createServer({
  key: fs.readFileSync("private.key"),
  cert: fs.readFileSync("certificate.crt"),
}, app);

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


httpServer.listen(3001, () => {
  console.log(`Http rodando na porta: ${3001}`)
})
httpsServer.listen(3000, () => {
  console.log(`Https rodando na porta: ${3000}`)
})