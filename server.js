const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
  console.log("here");
  // to send data back to user we need to send something with the response 

  // generally will want to use something more specific like a status
  // for the user you would want to include a message -- check console to make sure status code still appears as it should
  res.status(500).send("Oops... error");
})


app.listen(3000);