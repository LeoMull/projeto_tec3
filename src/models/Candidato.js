const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Candidato = sequelize.define('Candidato', {
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
  estadoEmissorIdentidade: {
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
  linguaInglesaLeitura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  linguaInglesaEscrita: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  linguaInglesaFala: {
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
  manutencaoVinculoEmpregaticio: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  interesseBolsa: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  projetoDoutoradoMemorial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'candidatos',
  timestamps: true,
});

module.exports = Candidato;
