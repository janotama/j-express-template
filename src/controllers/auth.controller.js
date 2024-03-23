const express = require("express");

//sequelize imports
const sequelize = require("../utils/db/mysql.js");
const DataTypes = require("sequelize").DataTypes;
const Users = require("../../models/Users.js")(sequelize, DataTypes);

const AuthServices = require("../packages/j-auth");

const register = async (req, res) => {
  const auth = new AuthServices(Users);

  const _register = await auth.register(req.body);

  return res.json(_register);
};

const login = async (req, res) => {
  const auth = new AuthServices(Users);

  const _login = await auth.login(req.body);

  return res.json(_login);
};

module.exports = {
  register,
  login,
};
