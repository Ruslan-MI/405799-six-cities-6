import {
  createReducer,
} from "@reduxjs/toolkit";
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
} from "../actions/data";
import {
  updateFavoriteOffer,
} from "../../utils/common";

const initialState = {
  isOffersLoaded: false,
  offers: [],
  isPropertyPageOfferLoaded: false,
  propertyPageOffer: null,
  isReviewsLoaded: false,
  reviews: [],
  isNearbyOffersLoaded: false,
  nearbyOffers: [],
  isFavoriteOffersLoaded: false,
  favoriteOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(runOffersLoading, (state) => {
    state.isOffersLoaded = false;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });

  builder.addCase(runPropertyPageOfferLoading, (state) => {
    state.isPropertyPageOfferLoaded = false;
  });
  builder.addCase(loadPropertyPageOffer, (state, action) => {
    state.propertyPageOffer = action.payload;
    state.isPropertyPageOfferLoaded = true;
  });

  builder.addCase(runReviewsLoading, (state) => {
    state.isReviewsLoaded = false;
  });
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = action.payload;
    state.isReviewsLoaded = true;
  });

  builder.addCase(runNearbyOffersLoading, (state) => {
    state.isNearbyOffersLoaded = false;
  });
  builder.addCase(loadNearbyOffers, (state, action) => {
    state.nearbyOffers = action.payload;
    state.isNearbyOffersLoaded = true;
  });

  builder.addCase(runFavoriteOffersLoading, (state) => {
    state.isFavoriteOffersLoaded = false;
  });
  builder.addCase(loadFavoriteOffers, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isFavoriteOffersLoaded = true;
  });

  builder.addCase(updateFavoriteStatus, (state, action) => {
    state.offers = updateFavoriteOffer(state.offers, action.payload);
    state.propertyPageOffer = action.payload;
    state.nearbyOffers = updateFavoriteOffer(state.nearbyOffers, action.payload);
    state.favoriteOffers = updateFavoriteOffer(state.favoriteOffers, action.payload);
  });
});
