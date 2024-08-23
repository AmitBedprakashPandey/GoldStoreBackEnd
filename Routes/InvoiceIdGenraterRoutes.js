const express = require("express");
const InvoiceId = require("../Controller/InvoiceIdGenraterController");
const Router = express.Router();

Router.post("/:user", InvoiceId.create);
Router.get("/:companyid", InvoiceId.findOn);
Router.put("/:companyid", InvoiceId.update);

module.exports = Router;
