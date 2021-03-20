import {
  ActionCreator
} from "./action";
import {
  AuthorizationStatus,
  AppRoute,
  APIRoute
} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({
      data
    }) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.changeUserEmail(response.data.email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

export const login = ({
  email,
  password
}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {
    email,
    password
  })
    .then((response) => dispatch(ActionCreator.changeUserEmail(response.data.email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FAVORITES)))
    .catch(() => { })
);
