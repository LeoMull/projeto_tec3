const Candidato = require('../models/Candidato');

// Listar todos os candidatos
exports.getAllCandidatos = async (req, res) => {
  try {
    const candidatos = await Candidato.findAll();
    res.render('candidatos/index', { candidatos });
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
    res.redirect('/candidatos/index');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar candidato');
  }
};
exports.updateCandidatoNota = async (req, res)=>{
  
}
exports.updateCandidato = async (req, res) => {
  try {
    // Obtendo o ID do candidato a partir dos parâmetros da URL
    const { id } = req.params;

    // Buscando o candidato no banco de dados
    const candidato = await Candidato.findByPk(id);

    // Verificando se o candidato existe
    if (!candidato) {
      return res.status(404).json({ message: 'Candidato não encontrado' });
    }

    // Atualizando o candidato com os dados fornecidos
    await candidato.update({
      idProcesso: req.body.idProcesso,
      nomeCompleto: req.body.nomeCompleto,
      dataNascimento: req.body.dataNascimento,
      email: req.body.email,
      nomeMae: req.body.nomeMae,
      cpf: req.body.cpf,
      identidade: req.body.identidade,
      dataEmissaoIdentidade: req.body.dataEmissaoIdentidade,
      orgaoEmissorIdentidade: req.body.orgaoEmissorIdentidade,
      tituloEleitoral: req.body.tituloEleitoral,
      serieDocumentoMilitar: req.body.serieDocumentoMilitar,
      enderecoResidencial: req.body.enderecoResidencial,
      cidadeResidencia: req.body.cidadeResidencia,
      estadoResidencia: req.body.estadoResidencia,
      telefoneContato: req.body.telefoneContato,
      linkLattes: req.body.linkLattes,
      reservasVagas: req.body.reservasVagas,
      siape: req.body.siape,
      nomeCurso: req.body.nomeCurso,
      tipoCurso: req.body.tipoCurso,
      instituicao: req.body.instituicao,
      anoConclusao: req.body.anoConclusao,
      localTrabalho: req.body.localTrabalho,
      atuacao: req.body.atuacao,
      inglesLeitura: req.body.inglesLeitura,
      inglesEscrita: req.body.inglesEscrita,
      inglesFala: req.body.inglesFala,
      tipoInscricao: req.body.tipoInscricao,
      semestreIngresso: req.body.semestreIngresso,
      orientadorPreferencial: req.body.orientadorPreferencial,
      segundaOpcao: req.body.segundaOpcao,
      terceiraOpcao: req.body.terceiraOpcao,
      dedicacaoIntegral: req.body.dedicacaoIntegral,
      manutencaoVinculo: req.body.manutencaoVinculo,
      interesseBolsa: req.body.interesseBolsa,
      projetoDoutoradoMemorial: req.body.projetoDoutoradoMemorial,
      tituloPublicacao: req.body.tituloPublicacao,
      localPublicacao: req.body.localPublicacao,
      tipoPublicacao: req.body.tipoPublicacao,
      qualisPublicacao: req.body.qualisPublicacao,
      comprovacaoPublicacao: req.body.comprovacaoPublicacao,
      primeiroAutor: req.body.primeiroAutor,
      curriculoLattes: req.body.curriculoLattes,
      diplomaGraduacao: req.body.diplomaGraduacao,
      diplomaMestrado: req.body.diplomaMestrado,
      historicoGraduacao: req.body.historicoGraduacao,
      historicoMestrado: req.body.historicoMestrado,
      carteiraIdentidade: req.body.carteiraIdentidade,
      cpfSecundario: req.body.cpfSecundario,
      tituloEleitor: req.body.tituloEleitor,
      certificadoMilitar: req.body.certificadoMilitar,
      certidaoCasamento: req.body.certidaoCasamento,
      comprovantePagamento: req.body.comprovantePagamento,
      documentacaoAdicional: req.body.documentacaoAdicional,
      outroDocumento: req.body.outroDocumento,
      idUsuario: req.body.idUsuario,
      timestamp: req.body.timestamp,
      lastUpdated: req.body.lastUpdated,
      createdBy: req.body.createdBy,
      updatedBy: req.body.updatedBy,
      draft: req.body.draft,
      ip: req.body.ip,
      key: req.body.key,
      nota: req.body.nota // Novo campo
    });

    // Redireciona para a página de detalhes do candidato ou envia uma resposta de sucesso
    res.redirect(`/candidatos/${candidato.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar candidato' });
  }
};
exports.getCandidatoById = async (req, res) => {
  try {
    const { idProcesso, id } = req.params;
    const candidato = await Candidato.findByPk({
      id,
    },{
      where: { idProcesso },
    });
    res.render('candidatos/view', { candidato });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao obter candidato');
  }
};

exports.editCandidato = async (req, res) => {
  const { id } = req.params;
  const candidato = await Candidato.findByPk(id);
  res.render('candidatos/edit', { candidato });
}

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
