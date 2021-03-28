import {
  createAction,
} from "@reduxjs/toolkit";

export const ActionType = {
  CHANGE_ACTIVE_OFFER_ID: `placeCard/changeActiveOfferID`,
  RESET_ACTIVE_OFFER_ID: `placeCard/resetActiveOfferID`,
};

export const changeActiveOfferID = createAction(ActionType.CHANGE_ACTIVE_OFFER_ID, (data) => ({
  payload: data,
}));

export const resetActiveOfferID = createAction(ActionType.RESET_ACTIVE_OFFER_ID);
