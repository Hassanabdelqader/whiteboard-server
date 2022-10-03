/*eslint-disable */
const { Post, Comment } = require("../../../models");

const hasUser = async (req, res, hasan) => {
    if(req.isAdmin)
    return hasan();
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
      include: Comment,
    });
    if (!post) return res.status(404).send("there is no Post with this Id");
    req.post = post;
    if(req.post.UserId == req.user.id){
        console.log("true")
        return hasan();
    }
    return res.status(404).send("you are not autohir");
  } catch (error) {
    console.log("has Uer",error)
    hasan("error");
  }
};

module.exports = hasUser;