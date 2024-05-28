const express = require('express')
const router = express.Router()

// Rota para cadastrar uma tarefa
router.post('/cadastrar', async (req, res) => {
    try {
      res.status(200).json({message: 'Deu bom'})
    } catch (error) {
      res.status(500).json({ message: 'Deu ruim'})
    }
});

// Rota para visualizar todas as tarefas 
router.get('/visualizar', async (req, res) => {
  try {
    res.status(200).json({message: 'Deu bom'})
  } catch (error) {
    res.status(500).json({ message: 'Deu ruim'})
  }
});

// Rota para alterar uma tarefa, por id
router.put('/alterar/:id', async (req, res) => {
  try {
    res.status(200).json({message: 'Deu bom'})
  } catch (error) {
    res.status(500).json({ message: 'Deu ruim'})
  }
});

// Rota para deletar uma tarefa, por id
router.delete('/deletar/:id', async (req, res) => {
  try {
    res.status(200).json({message: 'Deu bom'})
  } catch (error) {
    res.status(500).json({ message: 'Deu ruim'})
  }
});

module.exports = router