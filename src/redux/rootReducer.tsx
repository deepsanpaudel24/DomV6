import { combineReducers } from "redux";
import marvelReducer from "./marvel/reducers";

const rootReducer = combineReducers({
  marvel: marvelReducer,
});

export default rootReducer;
