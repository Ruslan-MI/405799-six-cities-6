import {
  createReducer,
} from "@reduxjs/toolkit";
import {
  changeActiveOfferID,
  resetActiveOfferID,
} from "../actions/place-card";

const initialState = {
  activeOfferID: 0,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveOfferID, (state, action) => {
    state.activeOfferID = action.payload;
  });

  builder.addCase(resetActiveOfferID, (state) => {
    state.activeOfferID = initialState.activeOfferID;
  });
});
