const Sequelize = require('sequelize');
const config = require('./dbconfig');

const sequelize = new Sequelize(config);

sequelize.authenticate()
    .then(() => {
        console.log('[SUCESSO] Conectado ao banco de dados!');
    })
    .catch(err => {
        console.error('[ERRO] Não foi possivel conectar-se ao banco de dados: ', err);
    });

module.exports = sequelize;