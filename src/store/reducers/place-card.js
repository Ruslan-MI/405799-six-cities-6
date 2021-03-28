import {
  ActionType as placeCardActionType,
} from "../actions/place-card";

const initialState = {
  activeOfferID: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case placeCardActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: action.payload,
      };
    case placeCardActionType.RESET_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferID: initialState.ActiveOfferID,
      };
    default:
      return state;
  }
};
