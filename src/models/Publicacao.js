const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Publicacao = sequelize.define('Publicacao', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localPublicacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoPublicacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qualis: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comprovacaoPDF: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primeiroAutor: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'publicacoes',
  timestamps: true,
});

module.exports = Publicacao;
