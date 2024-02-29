const express = require('express')
const Controller = require('../Controller/UserController');
const Router = express.Router();

Router.post('/register',Controller.register);
Router.post('/login',Controller.login);

module.exports = Router