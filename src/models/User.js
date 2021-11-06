const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  googleID: {
    type: String,
  },
  credits: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model("users", UserSchema)