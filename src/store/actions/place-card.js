export const ActionType = {
  CHANGE_ACTIVE_OFFER_ID: `placeCard/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `placeCard/resetActiveOfferID`,
};

export const changeActiveOfferID = (data) => ({
  type: ActionType.CHANGE_ACTIVE_OFFER_ID,
  payload: data,
});

export const resetActiveOfferID = () => ({
  type: ActionType.RESET_ACTIVE_OFFER_ID,
});
