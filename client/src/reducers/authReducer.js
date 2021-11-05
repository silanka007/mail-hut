import { FETCH_USER } from "../actions";
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

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return payload || false;
    default:
      return state;
  }
};

export default authReducer;
