const express = require("express");
const Invoice = require("../Controller/InvoiceController");
const Router = express.Router();

Router.post("/", Invoice.create);
Router.get("/:user", Invoice.findAll);
Router.put("/:id/:user", Invoice.update);
Router.delete("/:id/:user", Invoice.delete);
Router.get("/:quot/:user", Invoice.findOne);

// Router.post("/:active", Invoice.findActiveCities);
// Router.put("/:id", Invoice.update);
// Router.delete("/:id", Invoice.delete);
// Router.get("/:id", Invoice.getById);

module.exports = Router;
