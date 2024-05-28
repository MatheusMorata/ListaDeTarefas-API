require('dotenv').config({path: '../.env'})
const express = require('express')
const server = express() 
const PORT = process.env.PORT
const BASE_ROUTE = process.env.BASE_ROUTE


server.use(express.json())

// Rotas
server.use(BASE_ROUTE, rotasTarefas)

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});