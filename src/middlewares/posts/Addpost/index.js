/*eslint-disable */
const { Post } = require("../../../models");

const addPost = async (req, res, hasan) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      UserId: req.user.id,
      name :req.user.username
    });
    req.post = post;
    hasan();
    return;
  } catch (error) {
    console.log(error)
    hasan("error");
  }
};

module.exports = addPost;
