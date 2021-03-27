export const ActionType = {
  CHANGE_CITY: `mainPage/changeCity`,
  CHANGE_SORT_TYPE: `mainPage/changeSortType`,
};

export const changeCity = (data) => ({
  type: ActionType.CHANGE_CITY,
  payload: data,
});

export const changeSortType = (data) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: data,
});
