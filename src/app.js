const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public/")));


// api routes


app.get("/*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = app;
