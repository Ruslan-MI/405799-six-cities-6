import {
  NameSpace,
} from "../reducers/root-reducer";

export const getCurrentCity = (state) => state[NameSpace.MAIN_PAGE].currentCity;
export const getOffersInCurrentCity = (state) => state[NameSpace.MAIN_PAGE].offersInCurrentCity;
export const getCurrentSortType = (state) => state[NameSpace.MAIN_PAGE].currentSortType;
