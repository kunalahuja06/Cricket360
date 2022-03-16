// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config();
// }

const express = require("express");
const app = express();
const mongoose = require("mongoose");

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

app.listen(3000,(req,res)=>{console.log("serving on port 3000")})
