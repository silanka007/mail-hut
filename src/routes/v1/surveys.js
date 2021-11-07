const express = require("express");
const requireLogin = require("../../middlewares/requireLogin");
const requireCredit = require("../../middlewares/requireCredit");
const Survey = require("../../models/Survey");

const surveysRouter = express.Router();

/**
 * @route GET /v1/surveys
 * @desc  get all user surveys
 * @access  private
 */
surveysRouter.get("/", requireLogin, (req, res) => {
  return res.send("working...");
});

/**
 * @route POST /v1/surveys
 * @desc  add new survey
 * @access  private
 */
surveysRouter.post("/", requireLogin, requireCredit, (req, res) => {
  const { title, subject, body, recipients } = req.body;
  if (!title || !subject || !body || !recipients) {
    return res
      .status(401)
      .send({ message: "please provide all required fields" });
  }
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(",").map((email) => ({ email })),
    _user: req.user.id,
    createdDate: Date.now(),
  });
});

module.exports = surveysRouter;
