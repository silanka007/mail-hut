const express = require("express");
const authRouter = require("./auth");
const usersRouter = require("./users");

const apiV1Router = express.Router();

apiV1Router.use("/auth", authRouter);
apiV1Router.use("/users", usersRouter);

module.exports = apiV1Router;
