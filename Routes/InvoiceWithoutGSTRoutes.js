const express = require("express");
const Invoice = require("../Controller/InvoiceWithoutGSTController");
const Router = express.Router();

Router.post("/", Invoice.create);
Router.get("/:user", Invoice.findAll);
Router.put("/:id/:user", Invoice.update);
Router.delete("/:id/:user", Invoice.delete);
Router.get("/:quot/:user", Invoice.findOne);

module.exports = Router;
