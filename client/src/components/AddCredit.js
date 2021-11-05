import React from "react";
import ReactStripeCheckout from "react-stripe-checkout";

export const AddCredit = () => {
  const onToken = (token) => {
    console.log({ token });
  };
  return (
    <div>
      <ReactStripeCheckout
        name="Mail-Hut"
        description="$5 for 5 credits"
        amount={500}
        token={onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </ReactStripeCheckout>
    </div>
  );
};

export default AddCredit;
