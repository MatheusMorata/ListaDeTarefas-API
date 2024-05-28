const express = require('express')
const router = express()

router.post('/cadastrar', async (req, res) => {
    try {
      res.status(200).json({message: 'Deu bom'});
    } catch (error) {
      res.status(500).json({ message: 'Deu ruim'});
    }
});
  