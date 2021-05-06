"use strict";
const { UseCaseError } = require("uu_appg01_server").AppServer;

class Bcaa21sft04MainUseCaseError extends UseCaseError {
  static get ERROR_PREFIX() {
    return "uun-bcaa21sft04-main/";
  }

  constructor(dtoOut, paramMap = {}, cause = null) {
    if (paramMap instanceof Error) {
      cause = paramMap;
      paramMap = {};
    }
    super({ dtoOut, paramMap, status: 400 }, cause);
  }
}

module.exports = Bcaa21sft04MainUseCaseError;
