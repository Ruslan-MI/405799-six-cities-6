import {
  createAction,
} from "@reduxjs/toolkit";

export const ActionType = {
  CHANGE_CURRENT_CITY: `mainPage/changeCurrentCity`,
  CHANGE_SORT_TYPE: `mainPage/changeSortType`,
};

export const changeCurrentCity = createAction(ActionType.CHANGE_CURRENT_CITY, (data) => ({
  payload: data,
}));

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (data) => ({
  payload: data,
}));
