const express = require('express')
const router = express.Router()
const controller = require('../controller/tarefasController')
const objeto = new controller() 

// Rota para cadastrar uma tarefa
router.post('/criar', async (req, res) => {
    try {
      await objeto.criar(req.body)
      res.status(200).json({message: 'Cadastro efetuado com sucesso'})
    } catch (error) {
      res.status(500).json(error.message)
    }
});

// Rota para visualizar todas as tarefas 
router.get('/ler', async (req, res) => {
  try {
    const resultado = await objeto.ler()
    res.status(200).json(resultado)
  } catch (error) {
    res.status(500).json(error.message)
  }
});

// Rota para alterar uma tarefa, por id
router.put('/alterar/:id', async (req, res) => {
  try {
    const idTarefa = req.params.id 
    const novaTarefa = req.body
    await objeto.alterar(idTarefa,novaTarefa)
    res.status(200).json({message: 'Alteracao efetuada com sucesso'})
  } catch (error) {
    res.status(500).json(error.message)
  }
});

// Rota para deletar uma tarefa, por id
router.delete('/deletar/:id', async (req, res) => {
  try {
    const idTarefa = req.params.id
    await objeto.deletar(idTarefa)
    res.status(200).json({message: 'Deletado com sucesso'})
  } catch (error) {
    res.status(500).json(error.message)
  }
});

module.exports = router