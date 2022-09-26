/*eslint-disable */

"use strict";
const {BlackList } = require("../../../models");

const blacklist = async (req, res, next) => {
  try {
    req.blacklist = await BlackList.findAll();
    next();
  } catch (error) {
    next(`get All ${error}`);
  }
};

module.exports = blacklist;
