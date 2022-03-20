const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
  console.log("here");

  res.render('index')
  //error given because there is no view engine setup
})


app.listen(3000);