const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'leo123', {
    host: 'localhost',
    dialect: 'postgres', 
    schema: 'processos_tec3'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

module.exports = sequelize;
