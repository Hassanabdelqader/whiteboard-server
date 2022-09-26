/* eslint-disable */
var jwt = require("jsonwebtoken");
const { Users } = require("../../../models/index");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);

    data = await Users.findOne({ where: { email: req.body.email } });
    if (!data) {
      var token = jwt.sign({ email: req.body.email }, process.env.PUBLIC_KEY);
      const user = await Users.create({
        username: req.body.username,
        email: req.body.email,
        password,
        token,
      });
      req.users = user;
      next();
      return;
    } else {
      res.status(409).send("error: Account already exists");
      return;
    }
  } catch (error) {
    next(error);
    return;
  }
};
module.exports = signup;
