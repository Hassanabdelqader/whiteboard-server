/* eslint-disable */
var jwt = require("jsonwebtoken");
const { Users } = require("../../../models/index");
const bcrypt = require("bcrypt");

const resetpassword = async (req, res, next) => {
  try {
      
      const data = await Users.findOne({ where: { email: req.body.email } });
      const password = await bcrypt.hash(req.body.password, 10);
    if (data) {
      var token = jwt.sign({ email: req.body.email }, "hasan");
      const user = await Users.update({
        username: data.username,
        email: data.email,
        password,
        token,
        role : data.role
      },{
        where:{
            email :req.body.email
        }
      });
      
      req.users = user;
      next();
      return;
    } else {
      res.status(409).send("error: there is no user to reset check the email");
      return;
    }
  } catch (error) {
    
    next(error);
    return;
  }
};
module.exports = resetpassword;
