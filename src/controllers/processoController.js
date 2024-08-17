const ProcessoSeletivo = require('../models/ProcessoSeletivo');

// Listar todos os processos seletivos
exports.get = async (req, res) => {
  try {
    const processos = await ProcessoSeletivo.findAll();
    res.render('processo', { processos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar processos seletivos');
  }
};

// Adicionar um novo processo seletivo
exports.post = async (req, res) => {
  try {
    const { ano, semestre, numVagas, porcentagemCota } = req.body;
    await ProcessoSeletivo.create({
      ano,
      semestre,
      numVagas,
      porcentagemCota,
    });
    res.redirect('/processos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar processo seletivo');
  }
};

// Editar um processo seletivo existente
exports.put = async (req, res) => {
  try {
    const { id } = req.params;
    const { ano, semestre, numVagas, porcentagemCota } = req.body;
    await ProcessoSeletivo.update({
      ano,
      semestre,
      numVagas,
      porcentagemCota,
    }, {
      where: { id },
    });
    res.redirect('/processos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao editar processo seletivo');
  }
};

// Deletar um processo seletivo
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await ProcessoSeletivo.destroy({
      where: { id },
    });
    res.redirect('/processos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao deletar processo seletivo');
  }
};
