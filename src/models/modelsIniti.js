const sequelize = require('../config/database');
const ProcessoSeletivo = require('./ProcessoSeletivo');
const Candidato = require('./Candidato');
const Publicacao = require('./Publicacao');

// Definindo os relacionamentos
ProcessoSeletivo.hasMany(Candidato, { foreignKey: 'idProcesso' });
Candidato.belongsTo(ProcessoSeletivo, { foreignKey: 'idProcesso' });

// Exportando a conexão do Sequelize
module.exports = sequelize;
