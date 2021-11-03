const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

authRouter.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

authRouter.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: "/api/user",
    failureRedirect: "/",
  })
);

module.exports = authRouter;
