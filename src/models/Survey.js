const mongoose = require("mongoose")

const SurveySchema = mongoose.Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [{
    email: String,
    responded: {
      type: Boolean,
      default: false
    }
  }],
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  createdDate: Date,
  lastResponseDate: Date
})

module.exports = mongoose.model("surveys", SurveySchema)