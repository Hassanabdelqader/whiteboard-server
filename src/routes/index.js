/* eslint-disable */
"use strict";
const express = require("express");
const blacklist = require("./blacklist")
const commments = require("./comments");
const posts = require("./posts");
const users = require("./users");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("homes");
});

router.use("/users", users);
router.use("/posts", posts);
router.use("/comments", commments);
router.use("/blacklist", blacklist);

module.exports = router;
