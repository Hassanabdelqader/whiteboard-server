/*eslint-disable */

const { Comment } = require("../../../models");

const addComment = async (req, res, next) => {
  try {
    const data = await Comment.create({
      title: req.body.title,
      content: req.body.content,
      PostId: req.params.id,
      name :req.user.username
    });
    req.comment = data;
    next();
  } catch (error) {
    res.status(409).send("there is no Comment with this ID ");
  }
};
module.exports = addComment;
