export const ActionType = {
  CHANGE_CITY: `mainPage/changeCity`,
  CHANGE_SORT_TYPE: `mainPage/changeSortType`,
  CHANGE_ACTIVE_OFFER_ID: `placeCard/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `placeCard/resetActiveOfferID`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  CHANGE_USER_EMAIL: `user/changeUserEmail`
};

export const ActionCreator = {
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
    type: ActionType.RESET_ACTIVE_OFFER_ID
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  changeUserEmail: (email) => ({
    type: ActionType.CHANGE_USER_EMAIL,
    payload: email
  })
};
