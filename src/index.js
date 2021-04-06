import React from "react";
import {
  Router as BrowserRouter,
} from "react-router-dom";
import ReactDOM from "react-dom";
import {
  configureStore,
} from "@reduxjs/toolkit";
import {
  Provider,
} from "react-redux";
import App from "./components/app";
import reducer from "./store/reducers/root-reducer";
import {
  createAPI,
} from "./services/api";
import {
  requireAuthorization,
  redirectToRoute,
} from "./store/actions/user";
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
import browserHistory from "./utils/browser-history";

const api = createAPI(() =>
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)), () =>
  store.dispatch(redirectToRoute(AppRoute.NOT_FOUND)));

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider >
), document.querySelector(`#root`));
