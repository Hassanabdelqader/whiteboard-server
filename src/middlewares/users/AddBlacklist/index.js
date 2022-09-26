/*eslint-disable */

"use strict";
const {BlackList, Users } = require("../../../models");

const addblacklist = async (req, res, next) => {
  try {
   const data = await BlackList.findOne({ where: { email: req.body.email } });
   if(data)
        return res.status(201).send("the user is already Blocked")

   const user = await Users.findOne({ where: { email: req.body.email } });
if(user){
    req.blacklist = await BlackList.create({
        email : req.body.email,
        reason : req.body.reason,
        token : req.body.token
    });
    next();
}
else{
    return res.status(201).send("there is no such user in the database")
}
  } catch (error) {
    console.log(error)
    next(`get All ${error}`);
  }
};

module.exports = addblacklist;
