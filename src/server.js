require('dotenv').config({path: '../.env'})
const express = require('express')
const server = express() 
const rotasTarefas = require('./router/rotas')
const conexao = require('./database/conexao')
const PORT = process.env.PORT
const BASE_ROUTE = process.env.BASE_ROUTE

server.use(express.json())

// Rotas
server.use(BASE_ROUTE, rotasTarefas)

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});

// Conexão com o banco de dados
(async () => {
    try {
      await conexao.sync()
    } catch (error) {
      console.error('Erro ao sincronizar tabelas:', error)
    }
})()