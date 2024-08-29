
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const ProcessoSeletivo = require('../models/ProcessoSeletivo');
const Candidato = require('../models/Candidato');

// Listar todos os processos seletivos
exports.getFormProcessoSeletivo = async (req, res) => {
  try {
    console.log("Teste")
    res.render('processoSeletivo/create')
  } catch (error) {
    console.error(err);
    res.status(500).send('Erro ao renderizar form processos seletivos'); 
  }
}
exports.getCandidatoById = async (req, res) => {
  try {
    const { idProcesso, id } = req.params;
    const candidato = await Candidato.findByPk(id);
    res.render('candidatos/view', { candidato });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao obter candidato');
  }
};

exports.getAllProcessosSeletivos = async (req, res) => {
  try {
    const processos = await ProcessoSeletivo.findAll();
    console.log(processos);
    res.render('processoSeletivo/index', { processos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar processos seletivos');
  }
};
/*
// Adicionar um novo processo seletivo
exports.createProcessoSeletivo = async (req, res) => {
  try {
    console.log(req.body);
    const { id, ano, semestre, numVagas, porcentagemCota } = req.body;
    
    await ProcessoSeletivo.create({
      id,
      ano,
      semestre,
      numVagas,
      porcentagemCota,
    });
    res.redirect('/processoSeletivo/');
  } catch (err) {
    console.log(req.body);
    console.error(err);
    res.status(500).send('Erro ao adicionar 1 processo seletivo');
  }
};
*/
exports.createProcessoSeletivo = async (req, res) => {
  try {
    const { idProcesso, ano, semestre, numVagas, porcentagemCota } = req.body;
    console.log(req.body);
    // Criação do processo seletivo
    const processo = await ProcessoSeletivo.create({
      idProcesso,
      ano,
      semestre,
      numVagas,
      porcentagemCota,
    });

    // Verifique se o arquivo foi carregado
    if (req.file && req.file.path) {
      const filePath = path.join(__dirname, '../../uploads', req.file.filename); // Ajuste o caminho

      console.log(`\nCaminho do arquivo: ${filePath}\n`); // Adicione um log para verificar o caminho
      console.log(`\nProcesso Seletivo: ${processo.idProcesso}\n`); // Adicione um log para verificar o processo seletivo

      // Processamento do arquivo CSV
      const candidatos = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          // Adiciona os dados do candidato ao array
          candidatos.push({
            idProcesso: processo.idProcesso, // Corrigindo para usar o campo correto do model
            nomeCompleto: row['Nome Completo'],
            dataNascimento: row['Data de nascimento'],
            email: row['Seu e-mail'],
            nomeMae: row['Nome da mãe'],
            cpf: row['CPF'],
            identidade: row['Carteira de Identidade, no caso de candidatas/os de nacionalidade brasileira, ou passaporte, no caso de candidatas/os de nacionalidade estrangeira'],
            dataEmissaoIdentidade: row['Data de emissão da carteira de identidade'],
            orgaoEmissorIdentidade: row['Órgão emissor da carteira de identidade e estado emissor'],
            tituloEleitoral: row['Número do título eleitoral'],
            serieDocumentoMilitar: row['Número de série do documento militar'],
            enderecoResidencial: row['Endereço residencial'],
            cidadeResidencia: row['Cidade de residência'],
            estadoResidencia: row['Estado de residência'],
            telefoneContato: row['Telefone para contato'],
            linkLattes: row['Link para o currículo Lattes'],
            reservasVagas: row['Reservas de vagas'],
            siape: row['Informe o número do seu SIAPE ligado a UFPel para confirmar a candidatura às quotas de vagas para servidores da Universidade'],
            nomeCurso: row['Nome do Curso'],
            tipoCurso: row['Tipo de curso'],
            instituicao: row['Instituição'],
            anoConclusao: row['Ano de conclusão'],
            localTrabalho: row['Local de trabalho'],
            atuacao: row['Atuação'],
            inglesLeitura: row['Língua Inglesa (Leitura)'],
            inglesEscrita: row['Língua Inglesa (Escrita)'],
            inglesFala: row['Língua Inglesa (Fala)'],
            tipoInscricao: row['Tipo de inscrição'],
            semestreIngresso: row['Em que semestre faria o ingresso?'],
            orientadorPreferencial: row['Orientador preferencial'],
            segundaOpcao: row['Segunda opção'],
            terceiraOpcao: row['Terceira opção'],
            dedicacaoIntegral: row['Você teria dedicação integral para o curso?'] === 'Sim',
            manutencaoVinculo: row['Você manteria vínculo empregatício durante a execução do curso?'] === 'Sim',
            interesseBolsa: row['Você tem interesse em concorrer a uma bolsa do programa?'] === 'Sim',
            projetoDoutoradoMemorial: row['Enviar arquivo PDF contendo o Projeto de Doutorado e Memorial Acadêmico, conforme especificado no edital.'],
            // Ajuste para publicações e outros campos opcionais conforme necessário
            tituloPublicacao: row['Título da publicação'],
            localPublicacao: row['Local de publicação'],
            tipoPublicacao: row['Tipo da publicação'],
            qualisPublicacao: row['Qualis do local de publicação'],
            comprovacaoPublicacao: row['Comprovação de publicação ou aceite de publicação (PDF)'],
            /*
            tituloPublicacao2: null,
            localPublicacao2: null,
            tipoPublicacao2: null,
            qualisPublicacao2: null,
            comprovacaoPublicacao2: null,
            tituloPublicacao3: null,
            localPublicacao3: null,
            tipoPublicacao3: null,
            qualisPublicacao3: null,
            comprovacaoPublicacao3: null,
            */
            primeiroAutor: row['Primeiro autor'],
            curriculoLattes: row['Currículo Lattes'],
            diplomaGraduacao: row['Diploma de graduação OU atestado de conclusão de curso OU atestado de provável formando OU atestado de provável formando indicando que irá concluir o curso até 30 de julho de 2023 no caso de ingresso em 2023/2'],
            diplomaMestrado: row['Se aplicável, cópia do diploma de mestrado OU comprovação de cumprimento de todos requisitos para obtenção do diploma OU atestado indicando que irá concluir o seu curso de mestrado até 30 de julho de 2023 no caso de ingresso em 2023/2'],
            historicoGraduacao: row['Histórico escolar de Graduação'],
            historicoMestrado: row['Histórico escolar de Mestrado'],
            carteiraIdentidade: row['Carteira de Identidade'],
            cpfSecundario: row['CPF, se não disponível na carteira de identidade;'],
            tituloEleitor: row['Título de eleitor'],
            certificadoMilitar: row['Certificado de quitação com serviço militar, ou equivalente, se aplicável'],
            certidaoCasamento: row['Certidão de Casamento, no caso de mudança do nome'],
            comprovantePagamento: row['Comprovante de pagamento ou comprovante de isenção da taxa de inscrição'],
            documentacaoAdicional: row['Documentação relativa a seção 6(l), 6(m), 6(n), 6(o), 6(p) ou 6(q), se aplicável'],
            outroDocumento: row['Outro documento se necessário de acordo com o Edital'],
            idUsuario: 1, // Ajuste conforme necessário
            ip: req.ip,
            createdBy: 'admin', // Ajuste conforme necessário
            updatedBy: 'admin', // Ajuste conforme necessário
          });
        })
        .on('end', async () => {
          try {
            // Adiciona todos os candidatos ao banco de dados
            await Candidato.bulkCreate(candidatos);
            fs.unlinkSync(filePath); // Remove o arquivo após o processamento
            res.redirect('/processoSeletivo/');
          } catch (error) {
            console.error(`Erro ao adicionar candidatos: ${error.message}`);
            res.status(500).send('Erro ao adicionar candidatos');
          }
        })
        .on('error', (error) => {
          console.error(`Erro ao ler o arquivo CSV: ${error.message}`);
          res.status(500).send('Erro ao ler o arquivo CSV');
        });
    } else {
      console.log('Nenhum arquivo foi carregado.');
      res.redirect('/processoSeletivo/');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao adicionar processo seletivo');
  }
};

exports.getProcessoSeletivoById = async (req, res) => {
  try {
    const { id } = req.params;
    const processo = await ProcessoSeletivo.findByPk(id);
    console.log(processo);
    const candidatos = await Candidato.findAll({
      where: { idProcesso: id },
    });
    console.log(candidatos);
    res.render('processoSeletivo/detalhes', { processo, candidatos });
    console.log("Entrou no processo")
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao obter processo seletivo');
  }
};

// Editar um processo seletivo existente
exports.updateProcessoSeletivo = async (req, res) => {
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
exports.deleteProcessoSeletivo = async (req, res) => {
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
