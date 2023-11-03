const express = require("express");
const userModel = require("../model/signup.model");

const userServiceLoginObj = {
  signUp: async (obj) => {
    const user = new userModel(obj);
    try {
      const userObj = await user.save();
      return userObj;
    } catch (error) {
      return error.message;
    }
  },
  retrieveSingleProduct: async (obj) => {
    try {
      const product = await userModel.findOne({ email: obj });
      return product
    } catch (error) {
      return error.message;
    }
  },
};

module.exports = userServiceLoginObj;
