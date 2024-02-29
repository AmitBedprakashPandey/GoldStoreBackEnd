const express = require('express')
const Controller = require('../Controller/PrintWithoutGstController');
const Router = express.Router();

Router.get('/:id/:user',Controller.findInvoice);

module.exports = Router