import React from "react";
import ReactDOM from "react-dom";
import {
  createStore
} from "redux";
import {
  Provider
} from "react-redux";
import {
  composeWithDevTools
} from "redux-devtools-extension";
import App from "./components/app";
import {
  reducer
} from "./store/reducer";
import getMockOffers from "./mocks/offers";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render((
  <Provider store={store}>
    <App offers={getMockOffers()} />
  </Provider >
), document.querySelector(`#root`));
