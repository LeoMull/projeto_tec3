const Candidato = require('../models/Candidato');

// Listar todos os candidatos
exports.getAllCandidatos = async (req, res) => {
  try {
    const candidatos = await Candidato.findAll();
    res.render('candidato', { candidatos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar candidatos');
  }
};

// Adicionar um novo candidato
exports.createCandidato = async (req, res) => {
  try {
    const {
      nomeCompleto,
      dataNascimento,
      email,
      nomeMae,
      cpf,
      identidade,
      dataEmissaoIdentidade,
      orgaoEmissorIdentidade,
      estadoEmissorIdentidade,
      tituloEleitoral,
      serieDocumentoMilitar,
      enderecoResidencial,
      cidadeResidencia,
      estadoResidencia,
      telefoneContato,
      linkLattes,
      siape,
      nomeCurso,
      tipoCurso,
      instituicao,
      anoConclusao,
      localTrabalho,
      atuacao,
      linguaInglesaLeitura,
      linguaInglesaEscrita,
      linguaInglesaFala,
      tipoInscricao,
      semestreIngresso,
      orientadorPreferencial,
      segundaOpcao,
      terceiraOpcao,
      dedicacaoIntegral,
      manutencaoVinculoEmpregaticio,
      interesseBolsa,
      projetoDoutoradoMemorial,
    } = req.body;

    await Candidato.create({
      nomeCompleto,
      dataNascimento,
      email,
      nomeMae,
      cpf,
      identidade,
      dataEmissaoIdentidade,
      orgaoEmissorIdentidade,
      estadoEmissorIdentidade,
      tituloEleitoral,
      serieDocumentoMilitar,
      enderecoResidencial,
      cidadeResidencia,
      estadoResidencia,
      telefoneContato,
      linkLattes,
      siape,
      nomeCurso,
      tipoCurso,
      instituicao,
      anoConclusao,
      localTrabalho,
      atuacao,
      linguaInglesaLeitura,
      linguaInglesaEscrita,
      linguaInglesaFala,
      tipoInscricao,
      semestreIngresso,
      orientadorPreferencial,
      segundaOpcao,
      terceiraOpcao,
      dedicacaoIntegral,
      manutencaoVinculoEmpregaticio,
      interesseBolsa,
      projetoDoutoradoMemorial,
    });

    res.redirect('/candidatos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar candidato');
  }
};

// Editar um candidato existente
exports.updateCandidato = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nomeCompleto,
      dataNascimento,
      email,
      nomeMae,
      cpf,
      identidade,
      dataEmissaoIdentidade,
      orgaoEmissorIdentidade,
      estadoEmissorIdentidade,
      tituloEleitoral,
      serieDocumentoMilitar,
      enderecoResidencial,
      cidadeResidencia,
      estadoResidencia,
      telefoneContato,
      linkLattes,
      siape,
      nomeCurso,
      tipoCurso,
      instituicao,
      anoConclusao,
      localTrabalho,
      atuacao,
      linguaInglesaLeitura,
      linguaInglesaEscrita,
      linguaInglesaFala,
      tipoInscricao,
      semestreIngresso,
      orientadorPreferencial,
      segundaOpcao,
      terceiraOpcao,
      dedicacaoIntegral,
      manutencaoVinculoEmpregaticio,
      interesseBolsa,
      projetoDoutoradoMemorial,
    } = req.body;

    await Candidato.update({
      nomeCompleto,
      dataNascimento,
      email,
      nomeMae,
      cpf,
      identidade,
      dataEmissaoIdentidade,
      orgaoEmissorIdentidade,
      estadoEmissorIdentidade,
      tituloEleitoral,
      serieDocumentoMilitar,
      enderecoResidencial,
      cidadeResidencia,
      estadoResidencia,
      telefoneContato,
      linkLattes,
      siape,
      nomeCurso,
      tipoCurso,
      instituicao,
      anoConclusao,
      localTrabalho,
      atuacao,
      linguaInglesaLeitura,
      linguaInglesaEscrita,
      linguaInglesaFala,
      tipoInscricao,
      semestreIngresso,
      orientadorPreferencial,
      segundaOpcao,
      terceiraOpcao,
      dedicacaoIntegral,
      manutencaoVinculoEmpregaticio,
      interesseBolsa,
      projetoDoutoradoMemorial,
    }, {
      where: { id },
    });

    res.redirect('/candidatos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao editar candidato');
  }
};

// Deletar um candidato
exports.deleteCandidato = async (req, res) => {
  try {
    const { id } = req.params;
    await Candidato.destroy({
      where: { id },
    });
    res.redirect('/candidatos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao deletar candidato');
  }
};
