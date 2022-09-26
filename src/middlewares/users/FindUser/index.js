/*eslint-disable */

"use strict";
const { Users, Comment } = require("../../../models");
const { Post } = require("../../../models");

const findUser = async (req, res, next) => {
  try {
    req.users = await Users.findOne({
       where: { email: req.user.email },
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

module.exports = findUser;