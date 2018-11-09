import axios from "axios";
import {
  SHOPS,
  SELECTED_SHOP,
  // SHOP_PHOTOS,
  USER_SHOPS,
  SHOP_REGISTRATION_SUCCESS,
  // SHOP_PHOTO_UPLOAD_SUCCESS,
  SHOP_REGISTRATION_ERROR,
  // SHOP_PHOTO_UPLOAD_ERROR,
  IS_FETCHING,
  DONE_FETCHING
} from "./types";

export const fetchShops = () => dispatch => {
  dispatch({ type: IS_FETCHING });
  return axios
    .get(process.env.REACT_APP_API_URL + "shop", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.access_token
      }
    })
    .then(response => {
      dispatch({ type: SHOPS, payload: response.data.data });
      dispatch({ type: DONE_FETCHING });
    })
    .catch(error => {
      dispatch({ type: DONE_FETCHING });
    });
};

export const getSelectedShop = data => dispatch => {
  dispatch({ type: IS_FETCHING });
  axios
    .get(process.env.REACT_APP_API_URL + "shop/" + data.id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.access_token
      }
    })
    .then(response => {
      dispatch({ type: SELECTED_SHOP, payload: response.data.data });
      dispatch({ type: DONE_FETCHING });
    })
    .catch(error => {
      dispatch({ type: DONE_FETCHING });
    });
};

export const getUserShops = () => dispatch => {
  dispatch({ type: IS_FETCHING });
  axios
  .get(process.env.REACT_APP_API_URL + "user-shops", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.access_token
    }
  })
  .then(response => {
    dispatch({ type: USER_SHOPS, payload: response.data.data });
    dispatch({ type: DONE_FETCHING });
  })
  .catch(error => {
    dispatch({ type: DONE_FETCHING });
  });
}

export const registerShop = data => dispatch => {
  return axios
    .post(process.env.REACT_APP_API_URL + "shop", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.access_token
      }
    })
    .then(response => {
      if (response.data.error) {
        dispatch({
          type: SHOP_REGISTRATION_ERROR,
          payload: response.data.data
        });
      } else {
        dispatch({
          type: SHOP_REGISTRATION_SUCCESS,
          payload: response.data.message
        });
      }
    })
    .catch(error => {
      if (error.response.data.error) {
        dispatch({
          type: SHOP_REGISTRATION_ERROR,
          payload: error.response.data.message
        });
      }
    });
};
