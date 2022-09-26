/* eslint-disable */
"use strict";
const express = require("express");
const addComment = require("../middlewares/comments/addComment");
const getAllComment = require("../middlewares/comments/Allcomments");
const auth = require("../middlewares/users/Auth/beareAuth");
const isBlocked = require("../middlewares/users/checkBlackList");

const router = express.Router();

router.get("/", auth,isBlocked, getAllComment, (req, res) => {
  res.status(200).send(req.comments);
});

router.post("/addcomment/:id",auth,isBlocked, addComment, (req, res) => {
  res.status(200).send(req.comment);
});

module.exports = router;
