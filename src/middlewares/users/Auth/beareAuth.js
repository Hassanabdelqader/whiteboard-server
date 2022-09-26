/*eslint-disable */
"use strict";
var base64 = require("base-64");
const jwt = require("jsonwebtoken");
const { Users } = require("../../../models");

const auth = async (req, res, hasan) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, process.env.PUBLIC_KEY);

    const validty = await Users.findOne({
      where: {
        email: data.email,
      },
    });
    if (!validty) return res.status(401).send("No such userws");
    req.user = validty
    console.log("nothing happpen")
    return hasan();
  } catch (error) {
    console.log("there is an error in Auth")
    return res.status(401).send(" the token is expired or Invalid !!");
  }
};

module.exports = auth;
