/*eslint-disable */

"use strict";
const { BlackList } = require("../../../models");

const isBlocked = async (req, res, next) => {
    try {
        const Blocked = await BlackList.findOne({
            where:{
                email : req.user.email
            }
        });
        if(Blocked)
        return res.status(403).send("Your Blocked user")

        next();
      } catch (error) {
        console.log(error)
        next(`get All ${error}`);
      }
};

module.exports = isBlocked;