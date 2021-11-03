const mongoose = require("mongoose");
const { mongoURI } = require("../config/keys");

mongoose.connection.once("open", () => {
  console.log("connected successfully to database...");
});

mongoose.connection.on("error", (error) => {
  console.log(error.message);
});

const mongoConnect = async () => {
  try {
    await mongoose.connect(mongoURI);
  } catch (error) {
    console.log("there was an error");
  }
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
