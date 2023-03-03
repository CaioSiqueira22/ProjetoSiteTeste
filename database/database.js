const Sequelize = require("sequelize");

const connection = new Sequelize("sitepergunta", "root", "Caio239323.", {
  // nome do banco de dados,usuario,senha
  host: "localhost", //servidor onde está rodando
  dialect: "mysql", //qual tipo de banco que quer conectar
});

module.exports = connection;
