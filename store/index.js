import { createStore, combineReducers } from "redux";
import { createReducer } from "redux-orm";
import { orm } from "../orm/index";

const initialState = {};

const holdingReducer = createReducer(orm);

const rootReducer = combineReducers({
  // reducer,
  // holdingReducer,
});

let store = createStore(rootReducer);

export { store, initialState };
