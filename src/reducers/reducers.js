import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import images from "./images";
import auth from "./auth";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  images,
  auth,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;
