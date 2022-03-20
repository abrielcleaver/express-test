const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List")
});

router.get("/new", (req, res) => {
  res.send("User New Form")
});


module.exports = router