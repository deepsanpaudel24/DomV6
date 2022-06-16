import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
let cmp =
  process.env.REACT_APP_ENV === "development" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? composeWithDevTools
    : compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store;
