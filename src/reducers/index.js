import { combineReducers } from 'redux';
import foodReducer from "./foodReducer"
import shopReducer from './shopReducer';
import userReducer from './userReducer'

export default combineReducers({
  user : userReducer,
  shop : shopReducer,
  foodItem : foodReducer
 });