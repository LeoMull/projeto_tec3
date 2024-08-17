const express = require('express');
const router = express.Router();
const publicacaoController = require('../controllers/publicacaoController');

// Rota para obter todas as publicações
router.get('/', publicacaoController.getAllPublicacoes);

// Rota para obter uma publicação específica por ID
//router.get('/:id', publicacaoController.getPublicacaoById);

// Rota para criar uma nova publicação
router.post('/', publicacaoController.createPublicacao);

// Rota para atualizar uma publicação por ID
router.put('/:id', publicacaoController.updatePublicacao);

// Rota para deletar uma publicação por ID
router.delete('/:id', publicacaoController.deletePublicacao);

module.exports = router;
