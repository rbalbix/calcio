require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const express = require('express');
const cors = require('cors');
const path = require('path');
const { errors } = require('celebrate');

// Separa a lógica de criação do servidor da lógica de alocação da porta.
// Quando for executar os testes, não quero que aloque portas. Testes direto dentro da aplicação
class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();

    this.validationErrors();
  }

  middlewares() {
    this.express.disable('x-powered-by');
    this.express.use(cors({ exposedHeaders: ['X-Total-Count', 'X-round'] }));
    // To understand body with json format
    this.express.use(express.json());
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
  }

  routes() {
    this.express.use(require('./routes'));
  }

  validationErrors() {
    this.express.use(errors());
  }
}

module.exports = new AppController().express;
