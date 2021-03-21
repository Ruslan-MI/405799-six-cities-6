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
    .catch(() => { })
);

export const fetchPropertyPageOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({
      data
    }) => dispatch(ActionCreator.loadPropertyPageOffer(data)))
    .catch(() => { })
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
