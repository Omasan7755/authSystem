const jwt = require("jsonwebtoken");
require("dotenv").config();
const userModel = require("../model/signup.model");

const authorizationMiddleware = {
  authUser: async (req, res, next) => {
    const authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];
    token = token.toString();
    // console.log(token)
    if (!token) {
      req.authenticated = false;
      return res.status(401).json({ msg: `Unauthorized` });
    } else {
      jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        }
        req.user = decoded;
        req.authenticated = true;
        next();
      });
    }
  },

  retrieveSingleUser: async (req, res, next) => {
    const obj = req.body.email;
    const user = await userModel.findOne({ email: obj });
    if (user) {
      return res.json(`User already exist`);
    } else {
      req.user = user;
    }
    next();
  },

  userLoginMiddleware: async (req, res, next) => {
    const obj = req.body.email;
    const user = await userModel.findOne({ email: obj });
    if (!user) {
      return res.json(`User not found, Kindly register`);
    } else {
      req.user = user;
    }
    next();
  },
};

module.exports = authorizationMiddleware;
