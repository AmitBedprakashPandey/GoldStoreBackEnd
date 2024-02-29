const express = require("express");
const InvoiceId = require("../Controller/InvoiceIdGenraterController");
const Router = express.Router();

Router.post("/:user", InvoiceId.create);
Router.get("/:user", InvoiceId.findOn);
Router.put("/:id/:user", InvoiceId.update);

module.exports = Router;
