// where all the server code goes yay!

const express = require("express");
const res = require("express/lib/response");
const app = express();

// res and req are standard naming conventions
// inside this function we run code whenever we try to access the url
app.get("/", (req, res) => {
  console.log("here")
  // to send data back to user we need to send something with the response 
  // there are many methods to use, but the main one im using here is send
  // self explanatory -- send down whatever we pass into it

  // res.send("hi")
  
  // send is generic but not used very often, great for testing purposes

  // generally will want to use something more specific like a status
  res.sendStatus(500)
})


app.listen(3000)