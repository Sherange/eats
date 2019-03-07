import {
  FOODS,
  ADD_FOOD_ITEMS_ERROR,
  ADD_FOOD_ITEMS_SUCCESS,
  IS_FETCHING,
  DONE_FETCHING
} from "../actions/types";

const initialState = {
  isFetching: false,
  addFoodItemsError: "",
  addFoodItemsSuccess: "",
  foods: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case DONE_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case ADD_FOOD_ITEMS_ERROR:
      return {
        ...state,
        addFoodItemsError: action.payload
      };
    case ADD_FOOD_ITEMS_SUCCESS:
      return {
        ...state,
        addFoodItemsSuccess: action.payload
      };
    case FOODS:
      return {
        ...state,
        foods: action.payload
      };
    default:
      return state;
  }
}
