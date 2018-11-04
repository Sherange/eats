import {
  USER,
  IS_FETCHING,
  DONE_FETCHING,
  IS_AUTHENTICATED,
  USER_REGISTRATION_ERROR,
  USER_LOGIN_ERROR
} from "../actions/types";

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: [],
  userRegistrationError: "",
  userLoginError: ""
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
    case USER:
      return {
        ...state,
        user: action.payload
      };
    case USER_REGISTRATION_ERROR:
      return {
        ...state,
        userRegistrationError: action.payload
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        userLoginError: action.payload
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    default:
      return state;
  }
}
