const express = ('express');
const sequelize = '../config/database.js';

const app = express();

async function testeraConxeao() {
   try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso');
   } catch (error) {
    conmsole.log('Erro ao conectar ao banco de dados'(error));
   }
}

testeraConxeao();

