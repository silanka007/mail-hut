const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  return res.send(req.user);
});

module.exports = userRouter;
