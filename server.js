// where all the server code goes yay!

const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get('/', (req, res) => {
  console.log("here")
  res.send("hi")
})


app.listen(3000)