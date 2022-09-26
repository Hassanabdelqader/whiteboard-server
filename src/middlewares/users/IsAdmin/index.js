/*eslint-disable */

"use strict";
const {Users } = require("../../../models");

const isAdmin = async (req, res, next) => {
  try {
    if(req.user.role === "user")
        return res.status(401).send("Please contact your adminsi")
    next();
  } catch (error) {
    next(`get All ${error}`);
  }
};

module.exports = isAdmin;