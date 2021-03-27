import {
  runOffersLoading,
  loadOffers,
  runPropertyPageOfferLoading,
  loadPropertyPageOffer,
  runReviewsLoading,
  loadReviews,
  runNearbyOffersLoading,
  loadNearbyOffers,
  runFavoriteOffersLoading,
  loadFavoriteOffers,
  updateFavoriteStatus,
} from "./actions/data";
import {
  changeUserData,
  redirectToRoute,
  requireAuthorization,
} from "./actions/user";
import {
  AuthorizationStatus,
  AppRoute,
  APIRoute,
} from "../const";

const IsFavoriteChangeCommand = {
  ADD: `1`,
  REMOVE: `0`,
};

export const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(runOffersLoading());
  api.get(APIRoute.OFFERS)
    .then(({
      data,
    }) => dispatch(loadOffers(data)))
    .catch(() => { });
};

export const fetchPropertyPageOffer = (offerID) => (dispatch, _getState, api) => {
  dispatch(runPropertyPageOfferLoading());
  api.get(`${APIRoute.OFFERS}/${offerID}`)
    .then(({
      data,
    }) => dispatch(loadPropertyPageOffer(data)))
    .catch(() => { });
};

export const fetchReviews = (offerID) => (dispatch, _getState, api) => {
  dispatch(runReviewsLoading());
  api.get(`${APIRoute.REVIEWS}/${offerID}`)
    .then(({
      data,
    }) => dispatch(loadReviews(data)))
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
    }) => dispatch(loadReviews(data)))
    .catch(() => { })
);

export const fetchNearbyOffers = (offerID) => (dispatch, _getState, api) => {
  dispatch(runNearbyOffersLoading());
  api.get(`${APIRoute.OFFERS}/${offerID}${APIRoute.NEARBY}`)
    .then(({
      data,
    }) => dispatch(loadNearbyOffers(data)))
    .catch(() => { });
};

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(runFavoriteOffersLoading());
  api.get(APIRoute.FAVORITE)
    .then(({
      data,
    }) => dispatch(loadFavoriteOffers(data)))
    .catch(() => { });
};

export const toggleFavoriteStatus = ({
  id: offerID,
  isFavorite,
}) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${offerID}/${isFavorite ? IsFavoriteChangeCommand.REMOVE : IsFavoriteChangeCommand.ADD}`)
    .then(({
      data
    }) => dispatch(updateFavoriteStatus(data)))
    .catch(() => { });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({
      data
    }) => dispatch(changeUserData(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
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
    .then(({
      data
    }) => dispatch(changeUserData(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.FAVORITES)))
    .catch(() => { })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => { })
);
