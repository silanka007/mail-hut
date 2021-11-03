const express = require("express");
const path = require("path");
const authRouter = require("./routes/auth");
const passport = require("passport");

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public/")));

// passport services
app.use(passport.initialize());
require("./services/passport");

// api routes
app.use("/auth/google", authRouter);

app.get("/*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = app;
