import browserHistory from "../utils/browser-history";
import {
  ActionType
} from "../store/action";
import {
  AppRoute
} from "../const";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  if (action.type === ActionType.REDIRECT_TO_NOT_FOUND) {
    browserHistory.push(AppRoute.NOT_FOUND);
  }

  return next(action);
};
