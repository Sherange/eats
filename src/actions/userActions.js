import axios from "axios";
import {
  USER,
  IS_FETCHING,
  DONE_FETCHING,
  IS_AUTHENTICATED,
  USER_REGISTRATION_ERROR
} from "./types";

export const registerUser = data => dispatch => {
  dispatch({ type: IS_FETCHING });
  const user = {
    name: data.name,
    email: data.email,
    password: data.password
  };
  return (
    axios
      .post(process.env.REACT_APP_API_URL + "user/register", user)
      // .then(response => response.json())
      .then(response => {
        dispatch({ type: USER, payload: response.data.data });
        dispatch({ type: IS_AUTHENTICATED });
        dispatch({ type: DONE_FETCHING });
      })
      .catch(error => {
        if (error.response && error.response.data.message) {
          dispatch({
            type: USER_REGISTRATION_ERROR,
            payload: error.response.data.message
          });
          dispatch({ type: DONE_FETCHING });
        }
      })
  );
};
