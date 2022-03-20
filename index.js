const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require('cors')

const User=require('./models/User')
const Post=require('./models/Post')

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

require("dotenv").config();
const url = process.env.MONGODB_URL;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to Mongo DB");
    
  })

app.get('/',(req,res)=>{
    res.send("We are good to go!")
})

app.listen(port,(req,res)=>{console.log("serving on port 3000")})
