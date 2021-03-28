import {
  CITIES,
  SortType,
} from "../../const";
import {
  ActionType as mainPageActionType,
} from "../actions/main-page";
import {
  getOffersInCity,
} from "../../utils/common";

const initialState = {
  currentCity: CITIES[0],
  offersInCurrentCity: [],
  currentSortType: SortType.POPULAR,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case mainPageActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case mainPageActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
      };
    case mainPageActionType.SET_OFFERS_IN_CURRENT_CITY:
      return {
        ...state,
        offersInCurrentCity: getOffersInCity(action.payload, state.currentCity),
      };
    default:
      return state;
  }
};
