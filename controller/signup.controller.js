const express = require("express");
const userService = require("../service/signupService");
const functionDispatcher = require("../util/index.util");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userobj = {
  signUp: async (req, res) => {
    const userObj = req.body;
    userObj.password = await functionDispatcher.passwordEncryption(
      userObj.password
    );
    const user = req.user;
    // const user = await userService.retrieveSingleProduct(userObj.email);
    if (user) {
      return res.json({ msg: `can't save user already exist` });
    } else {
      const user = await userService.signUp(userObj);
      jwt.sign(
        userObj,
        process.env.SIGNUP_SECRET_KEY,
        { expiresIn: "7d" },
        (err, token) => {
          if (err) {
            return err.message;
          }
          return res.json({
            msg: `User created succesfully`,
            data: user,
            token: token,
          });
        }
      );
    }
  },
};

module.exports = userobj;
