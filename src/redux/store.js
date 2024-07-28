import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import eventsReducer from "./reducers/eventsReducer";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
