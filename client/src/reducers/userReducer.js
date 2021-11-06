import { FETCH_USER } from "../constants";
import axios from "axios";

const INITIAL_STATE = null;

// auth actions
export const fetchUser = async () => {
  const user = await axios.get("/v1/user");
  return {
    type: FETCH_USER,
    payload: user.data,
  };
};

// payment action
export const processPayment = async(token) => {
  const user = await axios.post("/v1/user/payment", token)
  return {
    type: FETCH_USER,
    payload: user.data
  }
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return payload || false;
    default:
      return state;
  }
};

export default userReducer;
