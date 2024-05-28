require('dotenv').config();
const Sequelize  = require('sequelize');

const nome_banco = process.env.NOME_BANCO_DE_DADOS
const user_banco = process.env.USUARIO_BANCO_DE_DADOS 
const passwd_banco = process.env.SENHA_BANCO_DE_DADOS
const host_database = process.env.HOST_BANCO_DE_DADOS

const conexao = new Sequelize({
    dialect: 'postgres',
    host: host_database,
    port: 5432,
    username: user_banco,
    password: passwd_banco,
    database: nome_banco,
});

module.exports = conexao