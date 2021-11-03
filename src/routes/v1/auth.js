const express = require("express");
const passport = require("passport");

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/"
  })
);

authRouter.get("/logout", (req, res) => {
  req.logout();
  return res.json({ success: true });
});

module.exports = authRouter;
