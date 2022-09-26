/*eslint-disable */

"use strict";
const {BlackList, Users } = require("../../../models");

const deleteBlocked = async (req, res, next) => {
  try {
   const data = await BlackList.findOne({ where: { email: req.body.email } });
   
if(data){
     await BlackList.destroy(
      { where: { email: req.body.email } }
    );
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

module.exports = deleteBlocked;
