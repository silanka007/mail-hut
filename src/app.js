const express = require("express");
const path = require("path");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("./config/keys");

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public/")));

// passport initialization
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("from passport", { profile }, profile.emails);
    }
  )
);

// api routes
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.get("/*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../public/index.html"));
});

module.exports = app;
