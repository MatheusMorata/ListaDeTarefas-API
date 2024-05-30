require('dotenv').config({path: '../.env'})
const express = require('express')
const server = express() 
const rotasTarefas = require('./router/rotas')
const conexao = require('./database/conexao')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');
const PORT = process.env.PORT
const BASE_ROUTE = process.env.BASE_ROUTE

server.use(express.json())
server.use(bodyParser.json())


// Rotas
server.use(BASE_ROUTE, rotasTarefas)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.listen(PORT, () => {
  console.log(`Servidor online  http://localhost:${PORT}`)
});

// Conexão com o banco de dados
(async () => {
    try {
      await conexao.sync()
    } catch (error) {
      console.error('Erro ao sincronizar tabelas:', error)
    }
})()