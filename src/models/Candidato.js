const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Candidato = sequelize.define('Candidato', {
  idProcesso:{
    type: DataTypes.INTEGER,
    allowNull: false,
    //forein key to processoSeletivo id
    references: {
      model: 'processos_seletivos', // Nome da tabela referenciada
      key: 'idProcesso',                  // Nome da coluna na tabela referenciada
    },
  },
  nomeCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataNascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  nomeMae: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  identidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataEmissaoIdentidade: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  orgaoEmissorIdentidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tituloEleitoral: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serieDocumentoMilitar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  enderecoResidencial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cidadeResidencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estadoResidencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefoneContato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  linkLattes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reservasVagas: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  siape: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nomeCurso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoCurso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instituicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anoConclusao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  localTrabalho: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  atuacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  inglesLeitura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inglesEscrita: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inglesFala: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoInscricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  semestreIngresso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orientadorPreferencial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  segundaOpcao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  terceiraOpcao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dedicacaoIntegral: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  manutencaoVinculo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  interesseBolsa: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  projetoDoutoradoMemorial: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tituloPublicacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  localPublicacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipoPublicacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  qualisPublicacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comprovacaoPublicacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  primeiroAutor: {
    type: DataTypes.STRING,
    allowNull: true,
  },/*
  tituloPublicacao2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  localPublicacao2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipoPublicacao2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  qualisPublicacao2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comprovacaoPublicacao2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  primeiroAutor2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tituloPublicacao3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  localPublicacao3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tipoPublicacao3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  qualisPublicacao3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comprovacaoPublicacao3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  primeiroAutor3: {
    type: DataTypes.STRING,
    allowNull: true,
  },*/
  curriculoLattes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  diplomaGraduacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  diplomaMestrado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  historicoGraduacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  historicoMestrado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  carteiraIdentidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpfSecundario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tituloEleitor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  certificadoMilitar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  certidaoCasamento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  comprovantePagamento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  documentacaoAdicional: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  outroDocumento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  lastUpdated: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  updatedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  draft: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  key: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nota: { // Novo campo
    type: DataTypes.FLOAT,
    allowNull: true
  },
  nota_hist:{
    type: DataTypes.FLOAT,
    allowNull: true
  },
}, {
  tableName: 'candidatos',
  timestamps: true,
});

module.exports = Candidato;
