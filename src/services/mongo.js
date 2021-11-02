const mongoose = require("mongoose");
const { mongoURI } = require("../config/keys");

mongoose.connection.once("open", () => {
  console.log("connected successfully to database...");
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});

const mongoConnect = async () => {
  await mongoose.connect(mongoURI);
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
