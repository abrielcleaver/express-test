const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
  console.log("here");

  // can call json method instead as well and the json code message is sent down properly
  // using some type of api and want to send json to client? this is the best way to do so
  res.download('server.js')
// server.js was successfully downloaded
})


app.listen(3000);