const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull !"))
  .catch((err) => console.log(err));

app.listen(8800, () => {
  console.log("backend server is running !");
});
