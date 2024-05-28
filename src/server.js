require('dotenv').config({ path: '../.env' })
const express = require('express')
const server = express() 
const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});