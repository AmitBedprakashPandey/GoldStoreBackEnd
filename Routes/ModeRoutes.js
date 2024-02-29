
const express = require("express");
const Mode = require("../Controller/ModeController");
const Router = express.Router();

Router.post("/", Mode.create);
Router.get("/:user", Mode.findAll);
Router.put("/:id/:user", Mode.update);
Router.delete("/:id/:user", Mode.delete);

// Router.post("/:active", Mode.findActiveCities);
// Router.put("/:id", Mode.update);
// Router.delete("/:id", Mode.delete);
// Router.get("/:id", Mode.getById);

module.exports = Router;