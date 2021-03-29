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
} from "../actions/main-page";

const initialState = {
  currentCity: CITIES[0],
  currentSortType: SortType.POPULAR,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentCity, (state, action) => {
    state.currentCity = action.payload;
  });

  builder.addCase(changeSortType, (state, action) => {
    state.currentSortType = action.payload;
  });
});
