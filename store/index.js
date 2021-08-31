import { createStore, combineReducers } from "redux";
import { createReducer } from "redux-orm";

import orm from "../orm/index";

const initialState = {};

const rootReducer = combineReducers({
  orm: createReducer(orm),
});

const store = createStore(rootReducer);

export { store, initialState };
