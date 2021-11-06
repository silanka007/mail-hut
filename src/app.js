const express = require("express");
const path = require("path");
const passport = require("passport");
const cookieSession = require("cookie-session");

const { cookieSecretKey } = require("./config/keys");
const apiV1Router = require("./routes/v1/api");

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public/")));

app.use(
  cookieSession({
    name: "surveyorMH",
    maxAge: 1 * 60 * 60 * 1000,
    keys: [cookieSecretKey]
  })
);

// passport services
app.use(passport.initialize());
app.use(passport.session());
require("./services/passport");

// api routes
app.use("/v1", apiV1Router);

if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
  app.get("/*", (req, res) => {
    return res.sendFile(path.resolve(__dirname, "../public/index.html"));
  });
}

module.exports = app;
