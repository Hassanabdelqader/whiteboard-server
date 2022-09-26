/* eslint-disable */
"use strict";
const express = require("express");
const addblacklist = require("../middlewares/users/AddBlacklist");
const auth = require("../middlewares/users/Auth/beareAuth");
const blacklist = require("../middlewares/users/BlackList");
const deleteBlocked = require("../middlewares/users/deleteBlocked");
const isAdmin = require("../middlewares/users/IsAdmin");

const router = express.Router();

router.get("/", auth,isAdmin, blacklist, (req, res) => {
  res.status(200).send(req.blacklist);
});

router.post("/addblacklist", auth,isAdmin,addblacklist , (req, res) => {
  res.status(200).send(req.blacklist);
});
router.delete("/deleteBlocked", auth,isAdmin,deleteBlocked , (req, res) => {
  res.status(200).send("the user is not Blocked now ");
});

module.exports = router;
