/* eslint-disable */
"use strict";
const express = require("express");
const deletecommentafterpost = require("../middlewares/comments/DeleteCommentafterpost");
const addPost = require("../middlewares/posts/Addpost");
const getAllPosts = require("../middlewares/posts/AllPosts");
const deletePost = require("../middlewares/posts/DeletePost");
const findOne = require("../middlewares/posts/FindPost");
const updatePost = require("../middlewares/posts/UpdatePost");
const auth = require("../middlewares/users/Auth/beareAuth");
const isBlocked = require("../middlewares/users/checkBlackList");
const isAdmin = require("../middlewares/users/IsAdmin");

const router = express.Router();

router.get("/", auth,isBlocked, getAllPosts, (req, res) => {
  res.status(200).send(req.posts);
});

router.get("/findpost/:id", auth, isBlocked, findOne, (req, res) => {
  res.status(200).send(req.post);
});

router.post("/addpost", auth,isBlocked, addPost, (req, res) => {
  res.status(200).send(req.post);
});

router.put(
  "/updatepost/:id",
  auth,
  isBlocked,
  isAdmin,
  findOne,
  updatePost,
  findOne,
  (req, res) => {
    res.status(200).send(req.post);
  }
);

router.delete("/deletepost/:id", auth,isBlocked, isAdmin, findOne, deletePost,deletecommentafterpost , (req, res) => {
  res.status(201).send("deleted Succuflly");
});

module.exports = router;
