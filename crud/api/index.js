const express = require("express");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// using this middleware will not throw an error
mongoose.set('strictQuery', true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected To Mongo Db");
  } catch (error) {
    throw error;
  }
};

app.listen(PORT, () => {
    connect()
  console.log("Server Started at " + PORT);
});
