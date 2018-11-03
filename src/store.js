import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReduser from './reducers';

const initialState = {};

const store = createStore(rootReduser, initialState, applyMiddleware(thunk));

export default store;
