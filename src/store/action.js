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

  CHANGE_CITY: `mainPage/changeCity`,
  CHANGE_SORT_TYPE: `mainPage/changeSortType`,

  CHANGE_ACTIVE_OFFER_ID: `placeCard/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `placeCard/resetActiveOfferID`,

  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  REDIRECT_TO_NOT_FOUND: `user/redirectToNotFound`,
  CHANGE_USER_EMAIL: `user/changeUserEmail`,
};

export const ActionCreator = {
  runOffersLoading: () => ({
    type: ActionType.RUN_OFFERS_LOADING,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  runPropertyPageOfferLoading: () => ({
    type: ActionType.RUN_PROPERTY_PAGE_OFFER_LOADING,
  }),
  loadPropertyPageOffer: (offer) => ({
    type: ActionType.LOAD_PROPERTY_PAGE_OFFER,
    payload: offer,
  }),
  runReviewsLoading: () => ({
    type: ActionType.RUN_REVIEWS_LOADING,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  runNearbyOffersLoading: () => ({
    type: ActionType.RUN_NEARBY_OFFERS_LOADING,
  }),
  loadNearbyOffers: (nearbyOffers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearbyOffers,
  }),
  runFavoriteOffersLoading: () => ({
    type: ActionType.RUN_FAVORITE_OFFERS_LOADING,
  }),
  loadFavoriteOffers: (favoriteOffers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: favoriteOffers,
  }),
  updateFavoriteStatus: (offer) => ({
    type: ActionType.UPDATE_FAVORITE_STATUS,
    payload: offer,
  }),

  changeCity: (data) => ({
    type: ActionType.CHANGE_CITY,
    payload: data,
  }),
  changeSortType: (data) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: data,
  }),


  changeActiveOfferID: (data) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: data,
  }),
  resetActiveOfferID: () => ({
    type: ActionType.RESET_ACTIVE_OFFER_ID,
  }),


  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  redirectToNotFound: () => ({
    type: ActionType.REDIRECT_TO_NOT_FOUND,
  }),
  changeUserEmail: (email) => ({
    type: ActionType.CHANGE_USER_EMAIL,
    payload: email,
  }),
};
