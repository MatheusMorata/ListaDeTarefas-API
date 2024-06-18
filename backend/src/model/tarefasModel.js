const { DataTypes, Model } = require('sequelize');
const conexao = require('../database/conexao');

class Tarefas extends Model {}

Tarefas.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataCriacao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: conexao,
    modelName: 'Tarefas',
    timestamps: false
});

module.exports = Tarefas;