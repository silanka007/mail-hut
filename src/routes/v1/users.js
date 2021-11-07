const express = require("express");
const keys = require("../../config/keys");
const requireLogin = require("../../middlewares/requireLogin"); 
const stripe = require("stripe")(keys.stripeSecretKey);

const usersRouter = express.Router();


/**
 * @route GET /v1/users
 * @desc  get user info
 * @access  private
 */
usersRouter.get("/", (req, res) => {
  return res.json(req.user);
});


/**
 * @route POST /v1/users/payments
 * @desc  process payment (add credit functionality)
 * @access  private
 */
usersRouter.post("/payments", requireLogin, async (req, res) => {
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
