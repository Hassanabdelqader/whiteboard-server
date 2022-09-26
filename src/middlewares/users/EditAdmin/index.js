/*eslint-disable */
const { Post, Users } = require("../../../models");

const editAdmin = async (req, res, hasan) => {
  try {
    let user = await Users.findOne({
      where: { id: req.params.id },
    });
    user.role = "admin";
    console.log(user);
    // req.updateduser = user;

    if (user) {
      req.updateduser =  await Users.update({
        username : user.username,
        email : user.email,
        password : user.password,
        role : "admin"
      }, {
        where: { id: req.params.id },
      });

      
      return hasan();
    }

    return;
  } catch (error) {
    hasan("error");
  }
};

module.exports = editAdmin;
