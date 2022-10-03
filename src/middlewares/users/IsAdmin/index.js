/*eslint-disable */

"use strict";
const isAdmin = async (req, res, next) => {
  try {
    if(req.user.role === "user"){
      req.isAdmin = false;
      return  next();
    }else{
      req.isAdmin = true;
      return next();
    }

  } catch (error) {
    next(`get All ${error}`);
  }
};

module.exports = isAdmin;