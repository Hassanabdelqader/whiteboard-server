/*eslint-disable */
const { Post } = require("../../../models");

const updatePost = async (req, res, hasan) => {
  try {
    await Post.update(req.body, {
      where: { id: req.params.id },
    });
    hasan();
    return;
  } catch (error) {
    next("error");
  }
};

module.exports = updatePost;
