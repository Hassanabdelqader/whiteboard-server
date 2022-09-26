/* eslint-disable */

const { Users } = require("../../../models/index");
const bcrypt = require("bcrypt");
var base64 = require("base-64");
const jwt = require("jsonwebtoken");

const signin = async (req, res, next) => {
  try {
    const codeded = req.headers["authorization"].split(" ")[1];
    var decodedData = base64.decode(codeded);
    const email = decodedData.split(":")[0];
    const password = decodedData.split(":")[1];

    data = await Users.findOne({ where: { email: email } });
    if (data) {
      const validty = await bcrypt.compare(password, data.password);
      if (!validty) return res.status(401).send("invalid cridential");
      let token = jwt.sign({ email: email }, process.env.PUBLIC_KEY, {
        expiresIn: "24h",
      });
      data.token = token;
      req.users = data;
      next();
      return;
    } else {
      res.status(401).send("invalid cridential");
      return;
    }
  } catch (error) {
    next(error);
    return;
  }
};
module.exports = signin;
