const express = require("express");
const keys = require("../../config/keys");
const loginRequest = require("../../middlewares/loginRequest");
const stripe = require("stripe")(keys.stripeSecretKey);

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  return res.json(req.user);
});

usersRouter.post("/payments", loginRequest, async (req, res) => {
  try {
    await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    req.user.credits += 5;
    const user = await req.user.save();
    return res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = usersRouter;
