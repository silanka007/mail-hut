const express = require("express");
const authRouter = require("./auth");
const surveysRouter = require("./surveys");
const usersRouter = require("./users");

const apiV1Router = express.Router();

apiV1Router.use("/auth", authRouter);
apiV1Router.use("/users", usersRouter);
apiV1Router.use("/surveys", surveysRouter)

module.exports = apiV1Router;
