"use strict";
const Bcaa21sft04MainAbl = require("../../abl/bcaa21sft04-main-abl.js");

class Bcaa21sft04MainController {
  init(ucEnv) {
    return Bcaa21sft04MainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new Bcaa21sft04MainController();
