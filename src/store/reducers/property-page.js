import {
  createReducer,
} from "@reduxjs/toolkit";
import {
  disableRewiewForm,
  enableRewiewForm,
} from "../actions/property-page";

const initialState = {
  isReviewFormDisabled: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(disableRewiewForm, (state) => {
    state.isReviewFormDisabled = true;
  });

  builder.addCase(enableRewiewForm, (state) => {
    state.isReviewFormDisabled = false;
  });
});
