const express = require("express");
const InvoiceId = require("../Controller/InvoiceWithOutGSTIDController");
const Router = express.Router();

Router.post("/", InvoiceId.create);
Router.get("/:user", InvoiceId.findOn);
Router.put("/:id/:user", InvoiceId.update);

module.exports = Router;
