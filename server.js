const express = require("express");
const res = require("express/lib/response");
const app = express();

app.set('view engine', 'ejs')
app.get("/", (req, res) => {
  console.log("here");

  res.render("index", { text: "World" })
})
 
const userRouter = require("./routes/users")

app.use('/users', userRouter)

app.listen(3000);