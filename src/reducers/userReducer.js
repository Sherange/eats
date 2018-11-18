import {
  USER,
  IS_FETCHING,
  DONE_FETCHING,
  IS_AUTHENTICATED,
  USER_REGISTRATION_ERROR,
  USER_LOGIN_ERROR,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR
} from "../actions/types";

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: [],
  userUpdateSuccess: "",
  userRegistrationError: "",
  userLoginError: "",
  userUpdateError: ""
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
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        userUpdateSuccess: action.payload
      };
    case USER_UPDATE_ERROR:
      return {
        ...state,
        userUpdateError: action.payload
      };
    default:
      return state;
  }
}
