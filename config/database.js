const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('banco_de_dados_teste', 'thiago', 'laura912214', {
    host:'localhost',
    dialect:'postgres'
});

module.exports = sequelize;