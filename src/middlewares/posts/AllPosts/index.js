/*eslint-disable */
const { Post, Comment } = require("../../../models");

const getAllPosts = async (req, res, hasan) => {
  try {
    const posts = await Post.findAll({ include: Comment });
    if (!posts) return res.status(401).send("there is no Posts");
    req.posts = posts;
    hasan();
    return;
  } catch (error) {
    console.log(error);
    hasan("error");
  }
};

module.exports = getAllPosts;
