const express = require("express");
const path = require("path");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public/")));

// api routes


app.get("/*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = app;
