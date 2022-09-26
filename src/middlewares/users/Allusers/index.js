/*eslint-disable */

"use strict";
const { Users, Comment } = require("../../../models");
const { Post } = require("../../../models");

const getAllUsers = async (req, res, next) => {
  try {
    req.users = await Users.findAll({
      include: [
        {
          model: Post,
          include: [{ model: Comment }],
        },
      ],
    });
    next();
  } catch (error) {
    next(`get All ${error}`);
  }
};

module.exports = getAllUsers;
