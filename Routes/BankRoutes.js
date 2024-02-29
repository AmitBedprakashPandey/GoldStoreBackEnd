
const express = require("express");
const Bank = require("../Controller/BankController");
const Router = express.Router();

Router.post("/", Bank.create);
Router.get("/:user", Bank.findAll);
Router.put("/:id/:user", Bank.update);
Router.delete("/:id/:user", Bank.delete);

// Router.post("/:active", Bank.findActiveCities);
// Router.put("/:id", Bank.update);
// Router.delete("/:id", Bank.delete);
// Router.get("/:id", Bank.getById);

module.exports = Router;