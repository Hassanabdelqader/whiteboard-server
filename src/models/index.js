/*eslint-disable */
"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const user = require("./users.model");
const post = require("./post.model");
const comment = require("./comment.model");
const blackListUsers = require("./blackListUsers.model");


var config

if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
} else {
  config = {
    logging: false
  }
}

const db = new Sequelize  (
  process.env.DATABASE_URL ||
  "postgres://hasan:1234@localhost:5432/whiteboard",
  config 
)

const Users = user(db, DataTypes);
const Post = post(db, DataTypes);
const Comment = comment(db, DataTypes);
const BlackList = blackListUsers(db, DataTypes);

Post.hasMany(Comment);
Comment.belongsTo(Post);

Users.hasMany(Post);
Post.belongsTo(Users);

module.exports = {
  db,
  Users,
  Post,
  Comment,
  BlackList
};
