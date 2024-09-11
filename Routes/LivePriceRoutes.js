
const express = require("express");
const controller = require("../Controller/LivePriceController");
const Router = express.Router();

Router.post("/", controller.create);
Router.get("/", controller.getAllLivePrice);
Router.get('/status',controller.getLivePrice)
Router.get('/Company',controller.getCompany)
module.exports = Router;