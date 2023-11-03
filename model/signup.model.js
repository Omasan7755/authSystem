const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  dob: Date,
  phoneNumber: String,
  gender: String,
  password: String,
  dateCreated: { type: Date, default: Date.now },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
