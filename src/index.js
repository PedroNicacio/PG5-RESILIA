// Importando o packages
const express = require('express')
const cors = require('cors')

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json());
app.use(cors())

// importando os controllers
const ClienteController = require('./controllers/cliente-controller.js');
const ColetadorController = require('./controllers/coletador-controller.js');
const FuncionarioController = require('./controllers/funcionario-controller.js');

ClienteController.rotas(app);
ColetadorController.rotas(app);
FuncionarioController.rotas(app);

module.exports = app
