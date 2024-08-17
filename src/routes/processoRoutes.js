const express = require('express');
const router = express.Router();
const processoSeletivoController = require('../controllers/processoController');

// Rota para obter todos os processos seletivos
router.get('/', processoSeletivoController.getAllProcessosSeletivos);

// Rota para obter um processo seletivo específico por ID
//router.get('/:id', processoSeletivoController.getProcessoSeletivoById);

// Rota para criar um novo processo seletivo
router.post('/', processoSeletivoController.createProcessoSeletivo);

// Rota para atualizar um processo seletivo por ID
router.put('/:id', processoSeletivoController.updateProcessoSeletivo);

// Rota para deletar um processo seletivo por ID
router.delete('/:id', processoSeletivoController.deleteProcessoSeletivo);

module.exports = router;
