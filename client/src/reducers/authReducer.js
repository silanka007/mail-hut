import { FETCH_USER, LOGOUT_USER } from "../actions";
import axios from "axios";

const INITIAL_STATE = false;

// auth actions
export const fetchUser = async () => {
  const user = await axios.get("/v1/user");

  return {
    type: FETCH_USER,
    payload: user.data,
  };
};

const logoutUser = async () => {
  try {
    const response = await axios.get("/v1/auth/logout").data;
    if(response.status){
      return {
        type: LOGOUT_USER
      }
    }
  } catch (error) {
    console.log(error.message)
  }
}

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return payload || false;
    case LOGOUT_USER:
      return false;
    default:
      return state;
  }
};

export default authReducer;
