export const ActionType = {
  CHANGE_CITY: `mainPage/changeCity`,
  CHANGE_SORT_TYPE: `mainPage/changeSortType`,
  SET_OFFERS_IN_CURRENT_CITY: `mainPage/setOffersInCurrentCity`,
};

export const changeCity = (data) => ({
  type: ActionType.CHANGE_CITY,
  payload: data,
});

export const changeSortType = (data) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: data,
});

export const setOffersInCurrentCity = (data) => ({
  type: ActionType.SET_OFFERS_IN_CURRENT_CITY,
  payload: data,
});
