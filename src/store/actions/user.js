export const ActionType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  REDIRECT_TO_NOT_FOUND: `user/redirectToNotFound`,
  CHANGE_USER_DATA: `user/changeUserData`,
};

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const redirectToNotFound = () => ({
  type: ActionType.REDIRECT_TO_NOT_FOUND,
});

export const changeUserData = (data) => ({
  type: ActionType.CHANGE_USER_DATA,
  payload: data,
});
