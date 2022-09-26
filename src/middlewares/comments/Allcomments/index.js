/*eslint-disable */

const { Comment } = require("../../../models");

const getAllComment = async (req, res, next) => {
  try {
    const data = await Comment.findAll();
    req.comments = data;
    next();
  } catch (error) {
    next("errpr in comments");
  }
};
module.exports = getAllComment;
