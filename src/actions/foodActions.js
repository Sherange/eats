import axios from "axios";
import {
  ADD_FOOD_ITEMS_ERROR,
  ADD_FOOD_ITEMS_SUCCESS,
  DONE_FETCHING,
  IS_FETCHING
} from "./types";

export const addFoodItem = data => dispatch => {
  dispatch({ type: IS_FETCHING });
  return axios
    .post(process.env.REACT_APP_API_URL + "food-item", data, {
      headers: {
        Authorization: localStorage.access_token,
        "Content-Type": "application/json"
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
