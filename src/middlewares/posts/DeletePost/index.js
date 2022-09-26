/*eslint-disable */
const { Post } = require("../../../models");

const deletePost = async (req, res, hasan) => {
  try {
    const post = await Post.destroy({
      where: { id: req.params.id },
    });
    console.log(post)
    hasan();
    return;
  } catch (error) {
    next("error");
  }
};

module.exports = deletePost;
