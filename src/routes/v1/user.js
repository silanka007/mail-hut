const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  return res.json(req.user);
});

module.exports = userRouter;
