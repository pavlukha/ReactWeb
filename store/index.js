import { createStore, combineReducers } from "redux";
import { createReducer } from "redux-orm";

import orm from "../orm/index";

const initialState = {
  counter: 0,
};

const rootReducer = combineReducers({
  orm: createReducer(orm),
});

const store = createStore(rootReducer);

export { store, initialState };
