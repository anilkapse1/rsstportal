import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import studentReducer from "./reducers/studentReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    student: studentReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log("store data:", store.getState());
});

export default store;
