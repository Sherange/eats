import axios from "axios";
import {
  SHOPS,
  SHOP_REGISTRATION_ERROR,
  SHOP_REGISTRATION_SUCCESS,
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
      dispatch({ type : SHOPS, payload : response.data.data })
      dispatch({ type: DONE_FETCHING });
    })
    .catch(error => {
      console.log("error", error);
      dispatch({ type: DONE_FETCHING });
    });
};

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
        dispatch({ type : SHOP_REGISTRATION_ERROR, payload : response.data.data })
      }else {
        dispatch({ type : SHOP_REGISTRATION_SUCCESS, payload : response.data.message })
      }
    })
    .catch(error => {
      console.log("error", error);
    });
};
