const express = require("express");
const Company = require("../Controller/CompanyController");
const Router = express.Router();

Router.post("/", Company.create);
Router.get("/:user", Company.findByUser);
Router.put("/:user", Company.update);

module.exports = Router;