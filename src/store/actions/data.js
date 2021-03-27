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

export const runOffersLoading = () => ({
  type: ActionType.RUN_OFFERS_LOADING,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const runPropertyPageOfferLoading = () => ({
  type: ActionType.RUN_PROPERTY_PAGE_OFFER_LOADING,
});

export const loadPropertyPageOffer = (offer) => ({
  type: ActionType.LOAD_PROPERTY_PAGE_OFFER,
  payload: offer,
});

export const runReviewsLoading = () => ({
  type: ActionType.RUN_REVIEWS_LOADING,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const runNearbyOffersLoading = () => ({
  type: ActionType.RUN_NEARBY_OFFERS_LOADING,
});

export const loadNearbyOffers = (nearbyOffers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: nearbyOffers,
});

export const runFavoriteOffersLoading = () => ({
  type: ActionType.RUN_FAVORITE_OFFERS_LOADING,
});

export const loadFavoriteOffers = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: favoriteOffers,
});

export const updateFavoriteStatus = (offer) => ({
  type: ActionType.UPDATE_FAVORITE_STATUS,
  payload: offer,
});
