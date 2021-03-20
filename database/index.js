const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Tarefas = require('../models/Tarefas');
const Condicao = require('../models/Condicao');

const connection = new Sequelize(dbConfig);

Condicao.init(connection);
Tarefas.init(connection);

Tarefas.associate(connection.models);

module.exports = connection;
