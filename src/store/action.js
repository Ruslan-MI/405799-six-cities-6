export const ActionType = {
  CHANGE_CITY: `mainPage/changeCity`,
  UPDATE_OFFERS: `server/updateOffers`
};

export const ActionCreator = {
  changeCity: (data) => ({
    type: ActionType.CHANGE_CITY,
    payload: data,
  }),
  updateOffers: (data) => ({
    type: ActionType.UPDATE_OFFERS,
    payload: data,
  })
};
