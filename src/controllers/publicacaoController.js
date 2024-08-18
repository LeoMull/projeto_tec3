const Publicacao = require('../models/Publicacao');

// Listar todas as publicações
exports.getAllPublicacoes = async (req, res) => {
  try {
    const publicacoes = await Publicacao.findAll();
    res.render('publicacao', { publicacoes });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar publicações');
  }
};

// Adicionar uma nova publicação
exports.createPublicacao = async (req, res) => {
  try {
    const { titulo, localPublicacao, tipoPublicacao, qualis, comprovacaoPDF, primeiroAutor } = req.body;
    await Publicacao.create({
      titulo,
      localPublicacao,
      tipoPublicacao,
      qualis,
      comprovacaoPDF,
      primeiroAutor,
    });
    res.redirect('/publicacoes');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar publicação');
  }
};

// Editar uma publicação existente
exports.updatePublicacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, localPublicacao, tipoPublicacao, qualis, comprovacaoPDF, primeiroAutor } = req.body;
    await Publicacao.update({
      titulo,
      localPublicacao,
      tipoPublicacao,
      qualis,
      comprovacaoPDF,
      primeiroAutor,
    }, {
      where: { id },
    });
    res.redirect('/publicacoes');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao editar publicação');
  }
};

// Deletar uma publicação
exports.deletePublicacao = async (req, res) => {
  try {
    const { id } = req.params;
    await Publicacao.destroy({
      where: { id },
    });
    res.redirect('/publicacoes');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao deletar publicação');
  }
};
