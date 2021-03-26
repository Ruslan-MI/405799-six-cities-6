import React from "react";
import ReactDOM from "react-dom";
import {
  createStore,
  applyMiddleware,
} from "redux";
import {
  Provider,
} from "react-redux";
import {
  composeWithDevTools,
} from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./components/app";
import {
  reducer,
} from "./store/reducer";
import {
  createAPI,
} from "./services/api";
import {
  ActionCreator,
} from "./store/action";
import {
  checkAuth,
} from "./store/api-actions";
import {
  AppRoute,
  AuthorizationStatus,
} from "./const";
import {
  redirect,
} from "./store/redirect";

const api = createAPI(() =>
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)), () =>
  store.dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)));

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api), redirect)));

store.dispatch(checkAuth());

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider >
), document.querySelector(`#root`));
