import axios from "axios";
import {
  FOODS,
  ORDERS,
  ADD_FOOD_ITEMS_ERROR,
  ADD_FOOD_ITEMS_SUCCESS,
  ORDER_PLACED_SUCCESS,
  DONE_FETCHING,
  IS_FETCHING,
  SHOP_REGISTRATION_SUCCESS
} from "./types";

export const foods = (data = null) => dispatch => {
  let url = process.env.REACT_APP_API_URL + "foods";
  if (data) {
    url = process.env.REACT_APP_API_URL + "foods?filters=" + data;
  }
  dispatch({ type: IS_FETCHING });
  return axios
    .get(url, {
      headers: {
        Authorization: localStorage.access_token,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      if (!response.data.error) {
        dispatch({
          type: FOODS,
          payload: response.data.data
        });
        dispatch({ type: DONE_FETCHING });
      }
    })
    .catch(error => {
      dispatch({ type: DONE_FETCHING });
    });
};

export const addFoodItem = data => dispatch => {
  dispatch({ type: IS_FETCHING });
  return axios
    .post(process.env.REACT_APP_API_URL + "food-item", data, {
      headers: {
        Authorization: localStorage.access_token,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      if (!response.data.error) {
        dispatch({
          type: ADD_FOOD_ITEMS_SUCCESS,
          payload: response.data.message
        });
        dispatch({ type: DONE_FETCHING });
      } else {
        dispatch({
          type: ADD_FOOD_ITEMS_ERROR,
          payload: response.data.message
        });
        dispatch({ type: DONE_FETCHING });
      }
    })
    .catch(error => {
      dispatch({
        type: ADD_FOOD_ITEMS_ERROR,
        payload: error.response.data.message
      });
      dispatch({ type: DONE_FETCHING });
    });
};

export const deleteFood = id => dispatch => {
  return axios
    .delete(process.env.REACT_APP_API_URL + "food-item/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.access_token
      }
    })
    .then(response => {
      if (!response.data.error) {
        dispatch({ type : SHOP_REGISTRATION_SUCCESS, payload: "Food Item Deleted"})
      }
    });
};

export const placeOrder = data => dispatch => {
  dispatch({
    type: ORDERS,
    payload: data
  });
};

export const submitOrder = data => dispatch => {
  return axios
    .post(process.env.REACT_APP_API_URL + "order", data, {
      headers: {
        Authorization: localStorage.access_token
      }
    })
    .then(response => {
      dispatch({
        type: ORDER_PLACED_SUCCESS,
        payload: response.data.message
      });
    })
    .catch(error => {
      console.log("e", error);
    });
};

export const uploadFoodPhotos = (formData, id) => dispatch => {
  dispatch({ type: IS_FETCHING });
};
