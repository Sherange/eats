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
        dispatch({
          type: IS_AUTHENTICATED,
          payload: true
        });
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
          localStorage.setItem(
            "access_token",
            "Bearer " + response.data.access_token
          );
          dispatch({
            type: IS_AUTHENTICATED,
            payload: true
          });
          dispatch(getLoginUser());
          dispatch({ type: DONE_FETCHING });
        }
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

export const getLoginUser = () => dispatch => {
  if (localStorage.access_token) {
    return axios
      .get(process.env.REACT_APP_API_URL + "user", {
        headers: {
          Authorization: localStorage.access_token
        }
      })
      .then(response => {
        dispatch({ type: USER, payload: response.data });
        dispatch({ type: IS_AUTHENTICATED, payload: true });
        // dispatch({ type: DONE_FETCHING });
      });
  }
};

export const logoutUser = dispatch => {
  localStorage.removeItem("access_token");
  dispatch({
    type: USER,
    payload: []
  });
  dispatch({
    type: IS_AUTHENTICATED,
    payload: false
  });
  // this.props.history.push("/");
};
