/*eslint-disable */

const { Comment } = require("../../../models");

const deletecommentafterpost = async (req, res, next) => {
  try {
    const data = await Comment.destroy({
      where: {
        PostId : null
      }
    });
    console.log(data)
    next();
  } catch (error) {
    res.status(409).send("there is no Comment with this ID ");
  }
};
module.exports = deletecommentafterpost;
