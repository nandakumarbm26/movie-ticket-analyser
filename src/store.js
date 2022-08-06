import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import setAuthToken from "./utils/setAuthToken";

import { composeWithDevTools } from "redux-devtools-extension";

import rootreducer from "./rootreducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootreducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// set up a store subscription listener
// to store the users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error
let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  // if (previousState.auth.token !== currentState.auth.token) {
  //   const token = currentState.auth.token;
  //   setAuthToken(token);
  // }
});

export default store;
