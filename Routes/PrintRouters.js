const express = require('express')
const Controller = require('../Controller/PrintController');
const Router = express.Router();

Router.get('/:id/:user',Controller.findInvoice);

module.exports = Router