require('dotenv').config({path: '../.env'})
const express = require('express')
const server = express() 
const rotasTarefas = require('./router/rotas')
const conexao = require('./database/conexao')
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json')
const PORT = process.env.PORT
const BASE_ROUTE = process.env.BASE_ROUTE

server.use(express.json())

// Middleware para permitir CORS
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// Rotas
server.use(BASE_ROUTE, rotasTarefas)
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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