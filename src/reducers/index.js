import { combineReducers } from 'redux';
import shopReducer from './shopReducer';
import userReducer from './userReducer'

export default combineReducers({
  user : userReducer,
  shop : shopReducer
 });