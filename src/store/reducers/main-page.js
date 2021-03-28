import {
  createReducer,
} from "@reduxjs/toolkit";
import {
  CITIES,
  SortType,
} from "../../const";
import {
  changeCurrentCity,
  changeSortType,
  setOffersInCurrentCity,
} from "../actions/main-page";

const initialState = {
  currentCity: CITIES[0],
  offersInCurrentCity: [],
  currentSortType: SortType.POPULAR,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentCity, (state, action) => {
    state.currentCity = action.payload;
  });

  builder.addCase(changeSortType, (state, action) => {
    state.currentSortType = action.payload;
  });

  builder.addCase(setOffersInCurrentCity, (state, action) => {
    state.offersInCurrentCity = action.payload;
  });
});
