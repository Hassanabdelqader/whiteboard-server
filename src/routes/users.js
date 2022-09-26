/* eslint-disable */
"use strict";
const express = require("express");
const getAllUsers = require("../middlewares/users/Allusers");
const auth = require("../middlewares/users/Auth/beareAuth");
const signin = require("../middlewares/users/AuthSignin");
const signup = require("../middlewares/users/AuthSignup");
const addAdmin = require("../middlewares/users/AuthSignup/authaddAdimn");
const isBlocked = require("../middlewares/users/checkBlackList");
const editAdmin = require("../middlewares/users/EditAdmin");
const findUser = require("../middlewares/users/FindUser");
const isAdmin = require("../middlewares/users/IsAdmin");
const resetpassword = require("../middlewares/users/ResetPassword");

const router = express.Router();

router.get("/", auth, getAllUsers, (req, res) => {
  res.status(200).send(req.users);
});

router.get("/finduser", auth, findUser, (req, res) => {
  res.status(200).send(req.users);
});

router.get("/isAdmin",auth, isAdmin, (req, res) => {
  res.status(200).send(req.users);
});

router.post("/signup", signup, (req, res) => {
  res.status(200).send(req.users);
});

router.post("/addAdmin", addAdmin, (req, res) => {
  res.status(200).send(req.users);
});

router.put("/editAdmin/:id", auth,editAdmin , (req, res) => {
  res.status(200).send(req.updateduser);
});


router.post("/signin", signin, (req, res) => {
  res.status(200).send(req.users);
});

router.put("/userreset", resetpassword, (req, res) => {
  res.status(200).send(req.users);
});

module.exports = router;
