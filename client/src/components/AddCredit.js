import React from "react";
import ReactStripeCheckout from "react-stripe-checkout";

export const AddCredit = () => {
  const onToken = (token) => {
    console.log({ token });
  };
  return (
    <div>
      <ReactStripeCheckout
        amount={500}
        token={onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    </div>
  );
};

export default AddCredit;
