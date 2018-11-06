import {
  SHOPS,
  SHOP_REGISTRATION_ERROR,
  SHOP_REGISTRATION_SUCCESS,
  IS_FETCHING,
  DONE_FETCHING
} from "../actions/types";

const initialState = {
  isFetching: false,
  shops: [],
  shopRegistrationError: "",
  shopRegistrationSuccess: ""
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
    case SHOPS:
      return {
        ...state,
        shops: action.payload
      };
    case SHOP_REGISTRATION_SUCCESS:
      return {
        ...state,
        SHOP_REGISTRATION_ERROR: action.payload
      };
    case SHOP_REGISTRATION_ERROR:
      return {
        ...state,
        SHOP_REGISTRATION_ERROR: action.payload
      };

    default:
      return state;
  }
}
