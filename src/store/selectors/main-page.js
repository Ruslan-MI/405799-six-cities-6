import {
  StoreNameSpace,
} from "../../const";

export const getCurrentCity = (state) => state[StoreNameSpace.MAIN_PAGE].currentCity;
export const getOffersInCurrentCity = (state) => state[StoreNameSpace.MAIN_PAGE].offersInCurrentCity;
export const getCurrentSortType = (state) => state[StoreNameSpace.MAIN_PAGE].currentSortType;
