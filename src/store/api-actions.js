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
  enableRewiewForm,
} from "./actions/property-page";
import {
  AuthorizationStatus,
  AppRoute,
  APIRoute,
} from "../const";
import {
  adaptOfferToClient,
  adaptReviewToClient,
  adaptAuthInfoToClient,
} from "../utils/api";
import {
  toast,
} from "../utils/toast/toast";

const IsFavoriteChangeCommand = {
  ADD: `1`,
  REMOVE: `0`,
};

export const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(runOffersLoading());
  return api.get(APIRoute.OFFERS)
    .then(({
      data,
    }) => dispatch(loadOffers(data.map((item) => adaptOfferToClient(item)))))
    .catch(() => { });
};

export const fetchPropertyPageOffer = (offerID) => (dispatch, _getState, api) => {
  dispatch(runPropertyPageOfferLoading());
  return api.get(`${APIRoute.OFFERS}/${offerID}`)
    .then(({
      data,
    }) => dispatch(loadPropertyPageOffer(adaptOfferToClient(data))))
    .catch(() => { });
};

export const fetchReviews = (offerID) => (dispatch, _getState, api) => {
  dispatch(runReviewsLoading());
  return api.get(`${APIRoute.REVIEWS}/${offerID}`)
    .then(({
      data,
    }) => dispatch(loadReviews(data.map((item) => adaptReviewToClient(item)))))
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
    }) => dispatch(loadReviews(data.map((item) => adaptReviewToClient(item)))))
    .then(() => dispatch(enableRewiewForm()))
    .catch(() => {
      dispatch(enableRewiewForm());
      toast(`Failed to send feedback`);
    })
);

export const fetchNearbyOffers = (offerID) => (dispatch, _getState, api) => {
  dispatch(runNearbyOffersLoading());
  return api.get(`${APIRoute.OFFERS}/${offerID}${APIRoute.NEARBY}`)
    .then(({
      data,
    }) => dispatch(loadNearbyOffers(data.map((item) => adaptOfferToClient(item)))))
    .catch(() => { });
};

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  dispatch(runFavoriteOffersLoading());
  return api.get(APIRoute.FAVORITE)
    .then(({
      data,
    }) => dispatch(loadFavoriteOffers(data.map((item) => adaptOfferToClient(item)))))
    .catch(() => { });
};

export const toggleFavoriteStatus = ({
  id: offerID,
  isFavorite,
}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${offerID}/${isFavorite ? IsFavoriteChangeCommand.REMOVE : IsFavoriteChangeCommand.ADD}`)
    .then(({
      data
    }) => dispatch(updateFavoriteStatus(adaptOfferToClient(data))))
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({
      data
    }) => dispatch(changeUserData(adaptAuthInfoToClient(data))))
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
    }) => dispatch(changeUserData(adaptAuthInfoToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.FAVORITES)))
    .catch(() => { })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGOUT)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => { })
);
