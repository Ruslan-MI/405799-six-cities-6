import {
  ActionCreator,
} from "./action";
import {
  AuthorizationStatus,
  AppRoute,
  APIRoute,
} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runOffersLoading());
  api.get(APIRoute.OFFERS)
    .then(({
      data,
    }) => dispatch(ActionCreator.loadOffers(data)))
    .catch(() => { });
};

export const fetchPropertyPageOffer = (offerID) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runPropertyPageOfferLoading());
  api.get(`${APIRoute.OFFERS}/${offerID}`)
    .then(({
      data,
    }) => dispatch(ActionCreator.loadPropertyPageOffer(data)))
    .catch(() => { });
};

export const fetchReviews = (offerID) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runReviewsLoading());
  api.get(`${APIRoute.REVIEWS}/${offerID}`)
    .then(({
      data,
    }) => dispatch(ActionCreator.loadReviews(data)))
    .catch(() => { });
};

export const sendReview = ({
  offerID,
  rating,
  review: comment,
}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${offerID}`, {
    rating,
    comment,
  })
    .then(({
      data,
    }) => dispatch(ActionCreator.loadReviews(data)))
    .catch(() => { })
);

export const fetchNearbyOffers = (offerID) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runNearbyOffersLoading());
  api.get(`${APIRoute.OFFERS}/${offerID}${APIRoute.NEARBY}`)
    .then(({
      data,
    }) => dispatch(ActionCreator.loadNearbyOffers(data)))
    .catch(() => { });
};

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(ActionCreator.runFavoriteOffersLoading());
  api.get(APIRoute.FAVORITE)
    .then(({
      data,
    }) => dispatch(ActionCreator.loadFavoriteOffers(data)))
    .catch(() => { });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.changeUserEmail(response.data.email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

export const login = ({
  email,
  password,
}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {
    email,
    password,
  })
    .then((response) => dispatch(ActionCreator.changeUserEmail(response.data.email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FAVORITES)))
    .catch(() => { })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => { })
);
