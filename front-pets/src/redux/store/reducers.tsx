import { combineReducers } from "@reduxjs/toolkit";
import exempleReducer from "../example/slice";

const rootReducer = combineReducers({
  exemple: exempleReducer,
});

export default rootReducer;
