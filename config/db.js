const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_uri, {});
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;
