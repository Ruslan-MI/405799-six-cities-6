import {
  createAction,
} from "@reduxjs/toolkit";

export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  REDIRECT_TO_NOT_FOUND: `user/redirectToNotFound`,
  CHANGE_USER_DATA: `user/changeUserData`,
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const redirectToNotFound = createAction(ActionType.REDIRECT_TO_NOT_FOUND);

export const changeUserData = createAction(ActionType.CHANGE_USER_DATA, (data) => ({
  payload: data,
}));
