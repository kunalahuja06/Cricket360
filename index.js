const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
const Post = require("./models/Post");

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

require("dotenv").config();
const url = process.env.MONGODB_URL;

const errors = {};

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  console.log("connected to Mongo DB");
});

function generateToken(user) {
  return jwt.sign(
    {
      email: user.email,
      username: user.username,
    },
    "mysecret123",
    { expiresIn: "1h" }
  );
}


app.listen(port, (req, res) => {
  console.log(`serving on ${port}`);
});

module.exports=errors
