const express = require("express");
const path = require("path");
const authRouter = require("./routes/auth");
const passport = require("passport");
const cookieSession = require("cookie-session");
const { cookieSecretKey } = require("./config/keys");

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public/")));

app.use(cookieSession({
  name: "surveyorMH",
  maxAge: 1 * 60 * 1000,
  keys: [cookieSecretKey]
}))

// passport services
app.use(passport.initialize());
app.use(passport.session())
require("./services/passport");

// api routes
app.use("/auth/google", authRouter);

app.get("/api/user", (req, res) => {
  console.log(req.user)
  return res.send(req.user)
})

app.get("/*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = app;
