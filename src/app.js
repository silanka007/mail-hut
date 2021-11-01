const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("app successfully deployed to heroku!!!");
});

module.exports = app;
