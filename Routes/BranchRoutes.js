
const express = require("express");
const Branch = require("../Controller/BranchController");
const Router = express.Router();

Router.post("/", Branch.create);
Router.get("/:user", Branch.findAll);
Router.put("/:id", Branch.update);
Router.delete("/:id", Branch.delete);

// Router.post("/:active", Branch.findActiveCities);
// Router.put("/:id", Branch.update);
// Router.delete("/:id", Branch.delete);
// Router.get("/:id", Branch.getById);

module.exports = Router;