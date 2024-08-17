const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProcessoSeletivo = sequelize.define('ProcessoSeletivo', {
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  semestre: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numVagas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  porcentagemCota: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'processos_seletivos',
  timestamps: true,
});

module.exports = ProcessoSeletivo;
