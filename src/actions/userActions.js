import axios from "axios";
import {
  USER,
  IS_FETCHING,
  DONE_FETCHING,
  IS_AUTHENTICATED,
  USER_REGISTRATION_ERROR,
  USER_LOGIN_ERROR
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

export const loginUser = data => dispatch => {
  dispatch({ type: IS_FETCHING });
  return (
    axios
      .post(process.env.REACT_APP_AUTH_URL + "oauth/token", data)
      //.then( response => response.json())
      .then(response => {
        if (response.data.error) {
          dispatch({
            type: USER_LOGIN_ERROR,
            payload: response.data.message
          });
        } else {
          dispatch({
            type: IS_AUTHENTICATED
          });
        }
        localStorage.setItem(
          "access_token",
          "Bearer " + response.data.access_token
        );
        this.props.history.push("/");
      })
      .catch(error => {
        if (error.response && error.response.data.message) {
          dispatch({
            type: USER_LOGIN_ERROR,
            payload: error.response.data.message
          });
          dispatch({ type: DONE_FETCHING });
        }
      })
  );
};
