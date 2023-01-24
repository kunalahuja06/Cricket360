const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./models/User");
const Post = require("./models/Post");
const { validateRegister, validateLogin } = require("./utils/validators");

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

///Register Route

app.post("/register", async (req, res) => {
  const error = {};
  //// VALIDATE USER DATA
  const { valid, errors } = validateRegister(
    req.body.email,
    req.body.username,
    req.body.password,
    req.body.confirmpassword
  );
  if (!valid) {
    res.send(errors)
    return;
  }
  try{
  ///CHECK IF THERE ARE USERS WITH SAME EMAIL
  const user = await User.findOne({ email:req.body.email });
  if (user) {
    error.userInputError = {
      errors: {
        username: "Email is already in use, please try again!",
      },
    };
    res.send(error)
    return;
  }
  ///IF THERE ARE NO ERRORS, HASH THE PASSWORD AND CREATE NEW USER
    req.body.password = await bcrypt.hash(req.body.password, 12);

    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    });
    const data = await newUser.save();

    const token = generateToken(data);

    res.send({ token, data, error });
  } catch {
    res.send(error);
  }
});

////  LOGIN ROUTE

app.post("/login", async (req, res) => {
  const error = {};
  //// VALIDATE USER DATA
  const { valid, errors } = validateLogin(
    req.body.email,
    req.body.password,
  );
  if (!valid) {
    res.send(errors);
    return;
  }
  try {
    ///SEARCH FOR THR USER WITH EMAIL
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      error.userInputError = {
        errors: {
          username: "User not found, please try again!",
        },
      };
      res.send(error);
      return;
    }
    // IF USER FOUND, MATCH THE PASSWORDS
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      error.userInputError={
        errors:{
          passwordError:`invalid Credentials`
        }
      }
      res.send(error)
      return;
    }

    const token = generateToken(user)
    res.send({ token, user, error });
  } catch {
    res.send(error);
  }
});

app.listen(port, (req, res) => {
  console.log(`serving on ${port}`);
});
