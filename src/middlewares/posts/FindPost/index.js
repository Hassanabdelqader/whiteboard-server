/*eslint-disable */
const { Post, Comment } = require("../../../models");

const findOne = async (req, res, hasan) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
      include: Comment,
    });
    if (!post) return res.status(404).send("there is no Post with this Id");
    req.post = post;
    hasan();
    return;
  } catch (error) {
    hasan("error");
  }
};

module.exports = findOne;
