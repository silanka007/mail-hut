import React from "react";
import ReactStripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { processPayment } from "../reducers/userReducer";

export const AddCredit = () => {
  const dispatch = useDispatch();

  const onToken = async (token) => {
    console.log({ token });
    const action = await processPayment(token);
    dispatch(action);
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
