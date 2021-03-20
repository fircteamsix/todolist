const express = require('express');
const TarefasController = require('./controllers/TarefasController');
const CondicaoController = require('./controllers/CondicaoController');
const routes = express.Router();

//CREATE READ UPDATE DELETE
routes.get('/condicao', CondicaoController.get); // READ
routes.post('/condicao', CondicaoController.store); //CREATE
routes.put('/condicao', CondicaoController.update); //UPDATE
routes.delete('/condicao/:id', CondicaoController.delete); //DELETE

routes.get('/tarefas', TarefasController.get); // READ
routes.post('/tarefas', TarefasController.store); //CREATE
routes.put('/tarefas', TarefasController.update); //UPDATE
routes.delete('/tarefas/:id', TarefasController.delete); //DELETE

module.exports = routes;