
const http = require('http');
const https = require('https');
const fs = require("fs");

const express = require('express')
const cors = require('cors')

const character_controller = require('./controller/characters');
const talentMaterial_controller = require('./controller/talentMaterial');



const app = express()
app.use(cors())

var httpServer = http.createServer(app);
var httpsServer = https.createServer({
  key: fs.readFileSync("private.key"),
  cert: fs.readFileSync("certificate.crt"),
}, app);

// Rotas personagens
app.get('/character', character_controller.character)
app.get('/character/:name', character_controller.character_single)

// Rotas materiais ascensão
app.get('/ascend/:material',talentMaterial_controller.material)

// Rota que retorna as rotas existentes
app.get('*', (req, res) => {
  res.send({
    '/character': 'Exibe todos os personagens',
    '/character/:name': 'Procura por 1 personagem',
    '/ascend/:material' : 'Procura por material de ascensão'
  })
})




httpServer.listen(3001, () => {
  console.log(`Http rodando na porta: ${3001}`)
})
httpsServer.listen(3000, () => {
  console.log(`Https rodando na porta: ${3000}`)
})