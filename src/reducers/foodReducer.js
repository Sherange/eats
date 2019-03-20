import {
  FOODS,
  ORDERS,
  ADD_FOOD_ITEMS_ERROR,
  ADD_FOOD_ITEMS_SUCCESS,
  ORDER_PLACED_SUCCESS,
  CLEAR_ORDERS,
  IS_FETCHING,
  DONE_FETCHING
} from "../actions/types";

const initialState = {
  isFetching: false,
  addFoodItemsError: "",
  addFoodItemsSuccess: "",
  orderPlacedSuccess: "",
  foods: [],
  orders: []
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
    case ORDER_PLACED_SUCCESS:
      return {
        ...state,
        orderPlacedSuccess: action.payload
      };
    case FOODS:
      return {
        ...state,
        foods: action.payload
      };
    case ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: []
      };
    default:
      return state;
  }
}
