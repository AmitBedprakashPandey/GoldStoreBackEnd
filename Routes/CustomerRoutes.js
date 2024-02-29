const express = require("express");
const customer = require("../Controller/CustomerController");
const Router = express.Router();

Router.post("/", customer.create);
Router.get("/:user", customer.findAll);
Router.put("/:id", customer.update);
Router.delete("/:id", customer.delete);

// Router.post("/:active", customer.findActiveCities);
// Router.put("/:id", customer.update);
// Router.delete("/:id", customer.delete);
// Router.get("/:id", customer.getById);

module.exports = Router;
