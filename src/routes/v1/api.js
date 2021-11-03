const express = require("express");
const authRouter = require("./auth");
const userRouter = require("./user");

const apiV1Router = express.Router();

apiV1Router.use("/auth", authRouter);
apiV1Router.use("/user", userRouter);

module.exports = apiV1Router;
