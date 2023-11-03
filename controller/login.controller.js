const express = require("express");
const bycrpt = require("bcrypt");
const functionDispatcher = require("../util/index.util");

const userLoginObj = {
  logIn: async (req, res) => {
    let currentUser = req.user;
    let userPassword = req.body.password;
    let valid = await functionDispatcher.passwordComparism(
      userPassword,
      currentUser.password
    );
    if (valid) {
      return res.status(200).json({
        msg: `User successfully logged In`,
      });
    } else {
      res.status(401).json({ msg: `Invalid password supplied` });
    }
  },
};

module.exports = userLoginObj;
