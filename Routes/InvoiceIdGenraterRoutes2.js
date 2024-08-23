const express = require("express");
const InvoiceId = require("../Controller/InvoiceIdGenraterController2");
const Router = express.Router();

Router.post("/", InvoiceId.create);
Router.get("/:companyid", InvoiceId.findOn);
Router.put("/:companyid", InvoiceId.update);

module.exports = Router;
