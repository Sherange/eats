import { SHOPS } from "../actions/types";

const initialState = {
  shops: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOPS :
    return {
      ...state,
      SHOPS : action.payload
    }
    default:
      return state;
  }
}
