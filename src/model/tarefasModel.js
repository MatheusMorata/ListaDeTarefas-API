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
        unique: true
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
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: conexao, // Use 'sequelize' e não 'conexao'
    modelName: 'Tarefas',
    timestamps: false
});

module.exports = Tarefas;