const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const processoSeletivoController = require('../controllers/processoController');

//Teste
// Configuração de multer para lidar com uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage: storage });

router.post('/create', upload.single('csvFile'), processoSeletivoController.createProcessoSeletivo);

//Teste

router.get('/:idProcesso/:id', processoSeletivoController.getCandidatoById);
// Rota para obter todos os processos seletivos
router.get('/', processoSeletivoController.getAllProcessosSeletivos);
//route.get('/create', processoSeletivoController.createPage);
// Rota para obter um processo seletivo específico por ID
//router.get('/:id', processoSeletivoController.getProcessoSeletivoById);

// Rota para criar um novo processo seletivo
//router.post('/create', processoSeletivoController.createProcessoSeletivo);

router.get('/create', processoSeletivoController.getFormProcessoSeletivo);

router.get('/:id', processoSeletivoController.getProcessoSeletivoById);


// Rota para atualizar um processo seletivo por ID
router.put('/:id', processoSeletivoController.updateProcessoSeletivo);

// Rota para deletar um processo seletivo por ID
router.delete('/:id', processoSeletivoController.deleteProcessoSeletivo);


module.exports = router;


