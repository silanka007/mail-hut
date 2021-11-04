import { FETCH_USER } from "../actions";
import axios from "axios";

const INITIAL_STATE = null;

// auth actions
const fetchUser = () => async (dispatch) => {
  const user = await axios.get("/v1/user");
  dispatch({
    type: FETCH_USER,
    payload: user.data,
  });
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return payload
    default:
      return state;
  }
};

export default authReducer;
