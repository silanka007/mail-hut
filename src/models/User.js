const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  googleID: {
    type: String,
  }
})

module.exports = mongoose.model("users", UserSchema)