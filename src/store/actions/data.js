import {
  createAction,
} from "@reduxjs/toolkit";

export const ActionType = {
  RUN_OFFERS_LOADING: `data/runOffersLoading`,
  LOAD_OFFERS: `data/loadOffers`,
  RUN_PROPERTY_PAGE_OFFER_LOADING: `data/runPropertyPageOfferLoading`,
  LOAD_PROPERTY_PAGE_OFFER: `data/loadPropertyPageOffer`,
  RUN_REVIEWS_LOADING: `data/runReviewsLoading`,
  LOAD_REVIEWS: `data/loadReviews`,
  RUN_NEARBY_OFFERS_LOADING: `data/runNearbyOffersLoading`,
  LOAD_NEARBY_OFFERS: `data/loadNearbyOffers`,
  RUN_FAVORITE_OFFERS_LOADING: `data/runFavoriteOffersLoading`,
  LOAD_FAVORITE_OFFERS: `data/loadFavoriteOffers`,
  UPDATE_FAVORITE_STATUS: `data/updateFavoriteStatus`,
};

export const runOffersLoading = createAction(ActionType.RUN_OFFERS_LOADING);
export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const runPropertyPageOfferLoading = createAction(ActionType.RUN_PROPERTY_PAGE_OFFER_LOADING);
export const loadPropertyPageOffer = createAction(ActionType.LOAD_PROPERTY_PAGE_OFFER, (offer) => ({
  payload: offer,
}));

export const runReviewsLoading = createAction(ActionType.RUN_REVIEWS_LOADING);
export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const runNearbyOffersLoading = createAction(ActionType.RUN_NEARBY_OFFERS_LOADING);
export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (nearbyOffers) => ({
  payload: nearbyOffers,
}));

export const runFavoriteOffersLoading = createAction(ActionType.RUN_FAVORITE_OFFERS_LOADING);
export const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (favoriteOffers) => ({
  payload: favoriteOffers,
}));

export const updateFavoriteStatus = createAction(ActionType.UPDATE_FAVORITE_STATUS, (offer) => ({
  payload: offer,
}));
