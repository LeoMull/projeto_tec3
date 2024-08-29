const sequelize = require('./src/config/database'); // Caminho para o seu arquivo de configuração do banco de dados
const ProcessoSeletivo = require('./src/models/ProcessoSeletivo');
const Candidato = require('./src/models/Candidato');
const Publicacao = require('./src/models/Publicacao');

async function syncDatabase() {
    try {
        // Definindo os relacionamentos
        ProcessoSeletivo.hasMany(Candidato, { foreignKey: 'idProcesso', onDelete: 'CASCADE' });
        Candidato.belongsTo(ProcessoSeletivo, { foreignKey: 'idProcesso' });

        Candidato.hasMany(Publicacao, { foreignKey: 'idCandidato', onDelete: 'CASCADE' });
        Publicacao.belongsTo(Candidato, { foreignKey: 'idCandidato' });

        // Sincronizar todos os modelos com o banco de dados
        await sequelize.sync({ alter: true }); // 'alter: true' faz com que o Sequelize altere as tabelas existentes para combinarem com os modelos, sem perder dados

        console.log('Modelos sincronizados com o banco de dados.');
    } catch (error) {
        console.error('Erro ao sincronizar os modelos:', error);
    }
}

syncDatabase();
