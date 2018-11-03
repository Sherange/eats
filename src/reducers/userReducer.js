import {
  USER,
  IS_FETCHING,
  DONE_FETCHING,
  IS_AUTHENTICATED,
  USER_REGISTRATION_ERROR
} from "../actions/types";

const initialState = {
  isFetching: false,
  authenticated: false,
  user: [],
  userRegistrationError: ""
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
    case IS_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    default:
      return state;
  }
}
