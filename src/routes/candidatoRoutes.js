const express = require('express');
const router = express.Router();
const candidatoController = require('../controllers/candidatoController');

// Rota para listar todos os candidatos
router.get('/', candidatoController.getAllCandidatos);

// Rota para criar um novo candidato
router.post('/', candidatoController.createCandidato);

// Rota para obter um candidato específico pelo ID
//router.get('/:id', candidatoController.getCandidatoById);

// Rota para atualizar um candidato pelo ID
router.put('/:id', candidatoController.updateCandidato);

// Rota para deletar um candidato pelo ID
router.delete('/:id', candidatoController.deleteCandidato);

module.exports = router;
