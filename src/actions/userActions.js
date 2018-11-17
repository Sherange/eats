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

export const updateUser = data => dispatch => {
  const user = {
    id: data.id,
    name: data.name,
    phone_number: data.phone_number,
    date_of_birth: data.date_of_birth,
    gender: data.gender,
    description: data.description,
    address: data.user_address.address ? data.user_address.address : "",
    street_one: data.user_address.street_one
      ? data.user_address.street_one
      : "",
    street_two: data.user_address.street_two
      ? data.user_address.street_two
      : "",
    city: data.user_address.city ? data.user_address.city : "",
    country: "Sri Lanka"
  };
  console.log('data',user);
  return axios
    .patch(process.env.REACT_APP_API_URL + "user/" + data.id, user, {
      headers: {
        Authorization: localStorage.access_token
      }
    })
    .then(response => {
      dispatch({ type: USER, payload: response.data.data });
    })
    .catch(error => {
      console.log("error", error);
    });
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

export const getLoginUser = history => dispatch => {
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
      })
      .catch(error => {
        history.push("/login");
      });
  } else {
    history.push("/login");
  }
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("access_token");
  dispatch({
    type: USER,
    payload: []
  });
  dispatch({
    type: IS_AUTHENTICATED,
    payload: false
  });
  history.push("/login");
};
