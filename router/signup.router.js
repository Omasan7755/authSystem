const express = require("express");

const userobj = require("../controller/signup.controller");
const userLoginObj = require("../controller/login.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(`/user`, authMiddleware.retrieveSingleUser,userobj.signUp);

router.post("/login", authMiddleware.userLoginMiddleware, userLoginObj.logIn);

module.exports = router;
