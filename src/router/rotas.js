const express = require('express')
const router = express.Router()
const controller = require('../controller/tarefasController')
const objeto = new controller() 

// Rota para cadastrar uma tarefa
router.post('/cadastrar', async (req, res) => {
    try {
      await objeto.cadastrar(req.body)
      res.status(200).json({message: 'Cadastro efetuado com sucesso'})
    } catch (error) {
      res.status(500).json({ message: error})
    }
});

// Rota para visualizar todas as tarefas 
router.get('/visualizar', async (req, res) => {
  try {
    const resultado = await objeto.visualizar()
    res.status(200).json(resultado)
  } catch (error) {
    res.status(500).json({ message: error})
  }
});

// Rota para alterar uma tarefa, por id
router.put('/alterar/:id', async (req, res) => {
  try {
    const idTarefa = req.params.id 
    const novaTarefa = req.body
    const resultado = await objeto.alterar(idTarefa,novaTarefa)
    res.status(200).json({message: resultado})
  } catch (error) {
    res.status(500).json({ message: error})
  }
});

// Rota para deletar uma tarefa, por id
router.delete('/deletar/:id', async (req, res) => {
  try {
    const idTarefa = req.params.id
    await objeto.deletar(idTarefa)
    res.status(200).json({message: 'Deletado com sucesso'})
  } catch (error) {
    res.status(500).json({ message: error})
  }
});

module.exports = router