export const ActionType = {
  CHANGE_CITY: `mainPage/changeCity`,
  CHANGE_SORT_TYPE: `mainPage/changeSortType`,
  CHANGE_ACTIVE_OFFER_ID: `placeCard/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `placeCard/resetActiveOfferID`,
  UPDATE_OFFERS: `server/updateOffers`
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
  updateOffers: (data) => ({
    type: ActionType.UPDATE_OFFERS,
    payload: data,
  })
};
